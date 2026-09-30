/**
 * netClient.ts — WebSocket client with heartbeat, reconnection and
 * session-token resume. All gameplay messages flow through here; the
 * authoritative server decides every outcome, we only render what it sends.
 */
import type { ClientMessage, ServerMessage } from '../../../shared/protocol.js';

type Handler = (msg: ServerMessage) => void;
type NarrowedHandler<T extends ServerMessage['type']> = (msg: Extract<ServerMessage, { type: T }>) => void;

export class NetClient {
  private ws: WebSocket | null = null;
  private handlers = new Map<string, Handler[]>();
  private queue: ClientMessage[] = [];
  private pingTimer: number | null = null;
  private reconnectDelay = 1000;
  private closedByUs = false;
  private name = '';
  private token: string | null = null;
  latency = 0;
  connected = false;
  onStatusChange: ((connected: boolean) => void) | null = null;

  connect(name: string): void {
    this.name = name;
    this.closedByUs = false;
    this.token = sessionStorage.getItem('rr_token') ?? null;
    this.open();
  }

  private open(): void {
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${proto}://${location.host}/ws`;
    try {
      this.ws = new WebSocket(url);
    } catch {
      this.scheduleReconnect();
      return;
    }

    this.ws.onopen = () => {
      this.connected = true;
      this.reconnectDelay = 1000;
      this.onStatusChange?.(true);
      const hello: ClientMessage = { type: 'hello', name: this.name, ...(this.token ? { token: this.token } : {}) };
      this.ws!.send(JSON.stringify(hello));
      // flush queued messages
      for (const m of this.queue) this.ws!.send(JSON.stringify(m));
      this.queue = [];
      this.startPing();
    };

    this.ws.onmessage = (ev) => {
      let msg: ServerMessage;
      try { msg = JSON.parse(ev.data as string); } catch { return; }
      if (msg.type === 'welcome') {
        this.token = msg.token;
        sessionStorage.setItem('rr_token', msg.token);
      }
      if (msg.type === 'pong') this.latency = Math.round(performance.now() - msg.t);
      for (const h of this.handlers.get(msg.type) ?? []) h(msg);
    };

    this.ws.onclose = () => {
      this.connected = false;
      this.stopPing();
      this.onStatusChange?.(false);
      if (!this.closedByUs) this.scheduleReconnect();
    };
    this.ws.onerror = () => { /* onclose follows */ };
  }

  private scheduleReconnect(): void {
    setTimeout(() => { if (!this.closedByUs && !this.connected) this.open(); }, this.reconnectDelay);
    this.reconnectDelay = Math.min(8000, this.reconnectDelay * 1.7);
  }

  private startPing(): void {
    this.stopPing();
    this.pingTimer = window.setInterval(() => this.send({ type: 'ping', t: performance.now() }), 4000);
  }
  private stopPing(): void {
    if (this.pingTimer) { clearInterval(this.pingTimer); this.pingTimer = null; }
  }

  on<T extends ServerMessage['type']>(type: T, handler: NarrowedHandler<T>): void {
    const list = this.handlers.get(type) ?? [];
    list.push(handler as unknown as Handler);
    this.handlers.set(type, list);
  }

  send(msg: ClientMessage): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(msg));
    else if (msg.type !== 'ping') this.queue.push(msg);
  }

  disconnect(): void {
    this.closedByUs = true;
    this.stopPing();
    this.ws?.close();
  }
}
