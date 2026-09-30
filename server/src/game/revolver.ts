/**
 * RevolverState — authoritative cylinder state. NEVER sent to clients before
 * the chamber has actually been fired. Clients only ever learn a chamber's
 * content at the moment the server broadcasts shot_result.
 */
export type Chamber = 'LIVE' | 'EMPTY';

export class RevolverState {
  private cylinder: Chamber[] = [];
  private current = 0;
  private fired = 0;

  constructor(private chamberCount: number, private liveCount: number) {
    this.reload();
  }

  /** Fisher-Yates shuffle of the chamber layout. Server-side RNG only. */
  reload(): void {
    const layout: Chamber[] = [];
    for (let i = 0; i < this.liveCount; i++) layout.push('LIVE');
    while (layout.length < this.chamberCount) layout.push('EMPTY');
    for (let i = layout.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [layout[i], layout[j]] = [layout[j], layout[i]];
    }
    this.cylinder = layout;
    this.current = 0;
    this.fired = 0;
  }

  /** Peek at the chamber that would fire right now. Server-side only. */
  peek(): Chamber {
    return this.cylinder[this.current] ?? 'EMPTY';
  }

  /** Consume the current chamber and advance the cylinder. */
  fire(): { result: Chamber; chamberIndex: number } {
    const chamberIndex = this.current;
    const result = this.cylinder[chamberIndex] ?? 'EMPTY';
    this.fired++;
    this.current = (this.current + 1) % this.chamberCount;
    return { result, chamberIndex };
  }

  get chambersRemaining(): number {
    return this.chamberCount - this.fired;
  }

  get exhausted(): boolean {
    return this.fired >= this.chamberCount;
  }
}
