(()=>{var rf=Object.defineProperty;var of=(r,t,e)=>t in r?rf(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var D=(r,t,e)=>of(r,typeof t!="symbol"?t+"":t,e);var Dc="170";var af=0,Bh=1,lf=2;var qu=1,Bc=2,jn=3,Mi=0,sn=1,Je=2,Ce=0,xi=1,En=2,Uh=3,Fh=4,Uc=5,pn=100,cf=101,hf=102,uf=103,df=104,Ls=200,ff=201,pf=202,mf=203,yl=204,_l=205,Fo=206,gf=207,Oo=208,vf=209,xf=210,yf=211,_f=212,Mf=213,bf=214,Ml=0,bl=1,wl=2,_s=3,El=4,Sl=5,Tl=6,Al=7,Xu=0,wf=1,Ef=2,yi=0,Fc=1,Oc=2,zc=3,gr=4,Sf=5,Hc=6,kc=7;var Yu=300,Ms=301,bs=302,Cl=303,Rl=304,zo=306,Sn=1e3,Vi=1001,Pl=1002,Ne=1003,Tf=1004;var Nr=1005;var Un=1006,Ha=1007;var Kn=1008;var Tn=1009,Zu=1010,$u=1011,rr=1012,Vc=1013,Gi=1014,Fn=1015,Ie=1016,Gc=1017,Wc=1018,bi=1020,ju=35902,Ku=1021,Ju=1022,hn=1023,Qu=1024,td=1025,vs=1026,wi=1027,qc=1028,Xc=1029,ed=1030,Yc=1031;var Zc=1033,ao=33776,lo=33777,co=33778,ho=33779,Il=35840,Ll=35841,Nl=35842,Dl=35843,Bl=36196,Ul=37492,Fl=37496,Ol=37808,zl=37809,Hl=37810,kl=37811,Vl=37812,Gl=37813,Wl=37814,ql=37815,Xl=37816,Yl=37817,Zl=37818,$l=37819,jl=37820,Kl=37821,uo=36492,Jl=36494,Ql=36495,nd=36283,tc=36284,ec=36285,nc=36286;var fo=2300,ic=2301,ka=2302,Oh=2400,zh=2401,Hh=2402;var Af=3200,$c=3201;var jc=0,Cf=1,nn="",Te="srgb",Ns="srgb-linear",Ho="linear",ae="srgb";var Ki=7680;var kh=519,Rf=512,Pf=513,If=514,id=515,Lf=516,Nf=517,Df=518,Bf=519,sc=35044;var Vh="300 es",Jn=2e3,po=2001,Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Va=Math.PI/180,mo=180/Math.PI;function _i(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[r&255]+Ye[r>>8&255]+Ye[r>>16&255]+Ye[r>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function en(r,t,e){return Math.max(t,Math.min(e,r))}function Uf(r,t){return(r%t+t)%t}function Ga(r,t,e){return(1-e)*r+e*t}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var bt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],_=i[4],y=i[7],A=i[2],E=i[5],C=i[8];return s[0]=o*v+a*x+l*A,s[3]=o*m+a*_+l*E,s[6]=o*p+a*y+l*C,s[1]=c*v+h*x+d*A,s[4]=c*m+h*_+d*E,s[7]=c*p+h*y+d*C,s[2]=u*v+f*x+g*A,s[5]=u*m+f*_+g*E,s[8]=u*p+f*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Wt;function sd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ff(){let r=go("canvas");return r.style.display="block",r}var Gh={};function nr(r){r in Gh||(Gh[r]=!0,console.warn(r))}function Of(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function zf(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hf(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nn?Ho:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Wh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],Xh=[.3127,.329],Yh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ns]:{primaries:Wh,whitePoint:Xh,transfer:Ho,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:Wh,whitePoint:Xh,transfer:ae,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var Ji,rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=go("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qa(i[o].image)):s.push(qa(i[o]))}else s=qa(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,rn=class r extends Ei{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=Un,o=Kn,a=hn,l=Tn,c=r.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=_i(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Yu;rn.DEFAULT_ANISOTROPY=1;var ie=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,A=(p+1)/2,E=(h+u)/4,C=(d+v)/4,P=(g+m)/4;return _>y&&_>A?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=C/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=P/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},be=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),E=Math.atan2(A,p*x);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let y=a*x;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new I,$h=new we,ti=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Br.subVectors(this.max,Xs),Qi.subVectors(t.a,Xs),ts.subVectors(t.b,Xs),es.subVectors(t.c,Xs),ui.subVectors(ts,Qi),di.subVectors(es,ts),Di.subVectors(Qi,es);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Di.z,Di.y,ui.z,0,-ui.x,di.z,0,-di.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!Ya(e,Qi,ts,es,Br)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Qi,ts,es,Br))?!1:(Ur.crossVectors(ui,di),e=[Ur.x,Ur.y,Ur.z],Ya(e,Qi,ts,es,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,Dr=new ti,Qi=new I,ts=new I,es=new I,ui=new I,di=new I,Di=new I,Xs=new I,Br=new I,Ur=new I,Bi=new I;function Ya(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bi.fromArray(r,s);let a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Gf=new ti,Ys=new I,Za=new I,Si=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Za)),this.expandByPoint(Ys.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new I,$a=new I,Fr=new I,fi=new I,ja=new I,Or=new I,Ka=new I,or=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$a.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub($a);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=fi.dot(this.direction),l=-fi.dot(Fr),c=fi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($a).addScaledVector(Fr,u),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,s){ja.subVectors(e,t),Or.subVectors(n,t),Ka.crossVectors(ja,Or);let o=this.direction.dot(Ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let l=a*this.direction.dot(Or.crossVectors(fi,Or));if(l<0)return null;let c=a*this.direction.dot(ja.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(Ka);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class r{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,qf)}lookAt(t,e,n){let i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),zr.crossVectors(ln,pi),i[0]=pi.x,i[4]=zr.x,i[8]=ln.x,i[1]=pi.y,i[5]=zr.y,i[9]=ln.y,i[2]=pi.z,i[6]=zr.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],y=n[11],A=n[15],E=i[0],C=i[4],P=i[8],w=i[12],M=i[1],R=i[5],U=i[9],L=i[13],F=i[2],O=i[6],B=i[10],Y=i[14],V=i[3],$=i[7],et=i[11],lt=i[15];return s[0]=o*E+a*M+l*F+c*V,s[4]=o*C+a*R+l*O+c*$,s[8]=o*P+a*U+l*B+c*et,s[12]=o*w+a*L+l*Y+c*lt,s[1]=h*E+d*M+u*F+f*V,s[5]=h*C+d*R+u*O+f*$,s[9]=h*P+d*U+u*B+f*et,s[13]=h*w+d*L+u*Y+f*lt,s[2]=g*E+v*M+m*F+p*V,s[6]=g*C+v*R+m*O+p*$,s[10]=g*P+v*U+m*B+p*et,s[14]=g*w+v*L+m*Y+p*lt,s[3]=x*E+_*M+y*F+A*V,s[7]=x*C+_*R+y*O+A*$,s[11]=x*P+_*U+y*B+A*et,s[15]=x*w+_*L+y*Y+A*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,A=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,E=e*x+n*_+i*y+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=x*C,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*C,t[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*C,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*C,t[8]=y*C,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*C,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*p+e*a*p)*C,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*C,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,v=o*h,m=o*d,p=a*d,x=l*c,_=l*h,y=l*d,A=n.x,E=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+y)*A,i[2]=(g-_)*A,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+_)*C,i[9]=(m-x)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ns.set(i[0],i[1],i[2]).length(),o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);let c=1/s,h=1/o,d=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Jn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(a===Jn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h,g,v;if(a===Jn)g=(o+s)*d,v=-2*d;else if(a===po)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new I,Mn=new Ht,Wf=new I(0,0,0),qf=new I(1,1,1),pi=new I,zr=new I,ln=new I,jh=new Ht,Kh=new we,ke=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,Jh=new I,is=new we,Yn=new Ht,Hr=new I,Zs=new I,Yf=new I,Zf=new we,Qh=new I(1,0,0),tu=new I(0,1,0),eu=new I(0,0,1),nu={type:"added"},$f={type:"removed"},ss={type:"childadded",child:null},Ja={type:"childremoved",child:null},Ee=class r extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new ke,n=new we,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Wt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Zs,Hr,this.up):Yn.lookAt(Hr,Zs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Yn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($f),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new I,Zn=new I,Qa=new I,$n=new I,rs=new I,os=new I,iu=new I,tl=new I,el=new I,nl=new I,il=new ie,sl=new ie,rl=new ie,vi=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),Zn.subVectors(n,e),Qa.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Zn),l=bn.dot(Qa),c=Zn.dot(Zn),h=Zn.dot(Qa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),rl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(il,s.x),o.addScaledVector(sl,s.y),o.addScaledVector(rl,s.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Zn.subVectors(t,e),bn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;rs.subVectors(i,n),os.subVectors(s,n),tl.subVectors(t,n);let l=rs.dot(tl),c=os.dot(tl);if(l<=0&&c<=0)return e.copy(n);el.subVectors(t,i);let h=rs.dot(el),d=os.dot(el);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(rs,o);nl.subVectors(t,s);let f=rs.dot(nl),g=os.dot(nl);if(g>=0&&f<=g)return e.copy(s);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(os,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return iu.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(iu,a);let p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ol(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Uf(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ol(o,s,t+1/3),this.g=ol(o,s,t),this.b=ol(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Qt.fromWorkingColorSpace(Ze.copy(this),t),Math.round(en(Ze.r*255,0,255))*65536+Math.round(en(Ze.g*255,0,255))*256+Math.round(en(Ze.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,i=Ze.g,s=Ze.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Te){Qt.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,i=Ze.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(kr);let n=Ga(mi.h,kr.h,e),i=Ga(mi.s,kr.s,e),s=Ga(mi.l,kr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new gt;gt.NAMES=rd;var jf=0,On=class extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=_i(),this.name="",this.blending=xi,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=_l,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends On{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new I,Vr=new bt,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}};var yo=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kf=0,fn=new Ht,al=new Ee,as=new I,cn=new ti,$s=new ti,Oe=new I,De=class r extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?_o:yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(cn.min,$s.min),cn.expandByPoint(Oe),Oe.addVectors(cn.max,$s.max),cn.expandByPoint(Oe)):(cn.expandByPoint($s.min),cn.expandByPoint($s.max))}cn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Oe.add(as)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;let c=new I,h=new I,d=new I,u=new bt,f=new bt,g=new bt,v=new I,m=new I;function p(P,w,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),u.fromBufferAttribute(s,P),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(v),a[w].add(v),a[M].add(v),l[P].add(m),l[w].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,w=x.length;P<w;++P){let M=x[P],R=M.start,U=M.count;for(let L=R,F=R+U;L<F;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new I,y=new I,A=new I,E=new I;function C(P){A.fromBufferAttribute(i,P),E.copy(A);let w=a[P];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);let R=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,w=x.length;P<w;++P){let M=x[P],R=M.start,U=M.count;for(let L=R,F=R+U;L<F;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Re(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new Ht,Ui=new or,Gr=new Si,ru=new I,Wr=new I,qr=new I,Xr=new I,ll=new I,Yr=new I,ou=new I,Zr=new I,dt=class extends Ee{constructor(t=new De,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(ll.fromBufferAttribute(d,t),o?Yr.addScaledVector(ll,h):Yr.addScaledVector(ll.sub(e),h))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Ui.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Gr,ru)===null||Ui.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(s).invert(),Ui.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=_;y<A;y+=3){let E=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);i=$r(this,p,t,n,c,h,d,E,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=$r(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=_;y<A;y+=3){let E=y,C=y+1,P=y+2;i=$r(this,p,t,n,c,h,d,E,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=m,_=m+1,y=m+2;i=$r(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Jf(r,t,e,n,i,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Mi,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:r}}function $r(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Wr),r.getVertexPosition(l,qr),r.getVertexPosition(c,Xr);let h=Jf(r,t,e,n,Wr,qr,Xr,ou);if(h){let d=new I;vi.getBarycoord(ou,Wr,qr,Xr,d),i&&(h.uv=vi.getInterpolatedAttribute(i,a,l,c,d,new bt)),s&&(h.uv1=vi.getInterpolatedAttribute(s,a,l,c,d,new bt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};vi.getNormal(Wr,qr,Xr,u.normal),h.face=u,h.barycoord=d}return h}var kt=class r extends De{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function g(v,m,p,x,_,y,A,E,C,P,w){let M=y/C,R=A/P,U=y/2,L=A/2,F=E/2,O=C+1,B=P+1,Y=0,V=0,$=new I;for(let et=0;et<B;et++){let lt=et*R-L;for(let it=0;it<O;it++){let Yt=it*M-U;$[v]=Yt*x,$[m]=lt*_,$[p]=F,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=E>0?1:-1,h.push($.x,$.y,$.z),d.push(it/C),d.push(1-et/P),Y+=1}}for(let et=0;et<P;et++)for(let lt=0;lt<C;lt++){let it=u+lt+O*et,Yt=u+lt+O*(et+1),j=u+(lt+1)+O*(et+1),st=u+(lt+1)+O*et;l.push(it,Yt,st),l.push(Yt,j,st),V+=6}a.addGroup(f,V,w),f+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(r){let t={};for(let e=0;e<r.length;e++){let n=ws(r[e]);for(let i in n)t[i]=n[i]}return t}function Qf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function od(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var ze={clone:ws,merge:Ke},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends On{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new I,au=new bt,lu=new bt,Le=class extends Mo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,au,lu),e.subVectors(lu,au)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,lr=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Le(ls,cs,t,e);i.layers=this.layers,this.add(i);let s=new Le(ls,cs,t,e);s.layers=this.layers,this.add(s);let o=new Le(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new Le(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new Le(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Le(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},bo=class extends rn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cr=class extends be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kt(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ce});s.uniforms.tEquirect.value=e;let o=new dt(i,s),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Un),new lr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},cl=new I,np=new I,ip=new Wt,wn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=cl.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ip.getNormalMatrix(t),i=this.coplanarPoint(cl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Si,jr=new I,hr=class{constructor(t=new wn,e=new wn,n=new wn,i=new wn,s=new wn,o=new wn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,m-f,y-p).normalize(),n[1].setComponents(l+s,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+g,y+x).normalize(),n[3].setComponents(l-o,u-h,m-g,y-x).normalize(),n[4].setComponents(l-a,u-d,m-v,y-_).normalize(),e===Jn)n[5].setComponents(l+a,u+d,m+v,y+_).normalize();else if(e===po)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(jr.x=i.normal.x>0?t.max.x:t.min.x,jr.y=i.normal.y>0?t.max.y:t.min.y,jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ad(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function sp(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ve=class r extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let _=0;_<c;_++){let y=_*d-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,y=x+c*(p+1),A=x+1+c*(p+1),E=x+1+c*p;f.push(_,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Ep,color_pars_fragment:Sp,color_pars_vertex:Tp,color_vertex:Ap,common:Cp,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Lp,emissivemap_fragment:Np,emissivemap_pars_fragment:Dp,colorspace_fragment:Bp,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:zp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Kp,envmap_vertex:kp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:qp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:$p,lights_pars_begin:jp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:_m,morphtarget_vertex:Mm,normal_fragment_begin:bm,normal_fragment_maps:wm,normal_pars_fragment:Em,normal_pars_vertex:Sm,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Im,opaque_fragment:Lm,packing:Nm,premultiplied_alpha_fragment:Dm,project_vertex:Bm,dithering_fragment:Um,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:km,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:qm,skinning_vertex:Xm,skinnormal_vertex:Ym,specularmap_fragment:Zm,specularmap_pars_fragment:$m,tonemapping_fragment:jm,tonemapping_pars_fragment:Km,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:d0,distanceRGBA_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:v0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:_0,meshlambert_frag:M0,meshmatcap_vert:b0,meshmatcap_frag:w0,meshnormal_vert:E0,meshnormal_frag:S0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:C0,meshphysical_frag:R0,meshtoon_vert:P0,meshtoon_frag:I0,points_vert:L0,points_frag:N0,shadow_vert:D0,shadow_frag:B0,sprite_vert:U0,sprite_frag:F0},ut={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ke([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ke([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ke([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ke([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ke([ut.lights,ut.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Dn.physical={uniforms:Ke([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Kr={r:0,b:0,g:0},Oi=new ke,O0=new Ht;function z0(r,t,e,n,i,s,o){let a=new gt(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1,y=g(x);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===zo)?(h===void 0&&(h=new dt(new kt(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:ws(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Oi)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,(d!==y||u!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new Ve(2,2),new se({name:"BackgroundMaterial",uniforms:ws(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Kr,od(r)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m}}function H0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(M,R,U,L,F){let O=!1,B=d(L,U,R);s!==B&&(s=B,c(s.object)),O=f(M,L,U,F),O&&g(M,L,U,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(M,R,U,L),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function d(M,R,U){let L=U.wireframe===!0,F=n[M.id];F===void 0&&(F={},n[M.id]=F);let O=F[R.id];O===void 0&&(O={},F[R.id]=O);let B=O[L];return B===void 0&&(B=u(l()),O[L]=B),B}function u(M){let R=[],U=[],L=[];for(let F=0;F<e;F++)R[F]=0,U[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,R,U,L){let F=s.attributes,O=R.attributes,B=0,Y=U.getAttributes();for(let V in Y)if(Y[V].location>=0){let et=F[V],lt=O[V];if(lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(M,R,U,L){let F={},O=R.attributes,B=0,Y=U.getAttributes();for(let V in Y)if(Y[V].location>=0){let et=O[V];et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));let lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),F[V]=lt,B++}s.attributes=F,s.attributesNum=B,s.index=L}function v(){let M=s.newAttributes;for(let R=0,U=M.length;R<U;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){let U=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;U[M]=1,L[M]===0&&(r.enableVertexAttribArray(M),L[M]=1),F[M]!==R&&(r.vertexAttribDivisor(M,R),F[M]=R)}function x(){let M=s.newAttributes,R=s.enabledAttributes;for(let U=0,L=R.length;U<L;U++)R[U]!==M[U]&&(r.disableVertexAttribArray(U),R[U]=0)}function _(M,R,U,L,F,O,B){B===!0?r.vertexAttribIPointer(M,R,U,F,O):r.vertexAttribPointer(M,R,U,L,F,O)}function y(M,R,U,L){v();let F=L.attributes,O=U.getAttributes(),B=R.defaultAttributeValues;for(let Y in O){let V=O[Y];if(V.location>=0){let $=F[Y];if($===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let et=$.normalized,lt=$.itemSize,it=t.get($);if(it===void 0)continue;let Yt=it.buffer,j=it.type,st=it.bytesPerElement,xt=j===r.INT||j===r.UNSIGNED_INT||$.gpuType===Vc;if($.isInterleavedBufferAttribute){let at=$.data,At=at.stride,Lt=$.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)p(V.location+Ut,at.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<V.locationSize;Ut++)_(V.location+Ut,lt/V.locationSize,j,et,At*st,(Lt+lt/V.locationSize*Ut)*st,xt)}else{if($.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,$.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let at=0;at<V.locationSize;at++)_(V.location+at,lt/V.locationSize,j,et,lt*st,lt/V.locationSize*at*st,xt)}}else if(B!==void 0){let et=B[Y];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(V.location,et);break;case 3:r.vertexAttrib3fv(V.location,et);break;case 4:r.vertexAttrib4fv(V.location,et);break;default:r.vertexAttrib1fv(V.location,et)}}}}x()}function A(){P();for(let M in n){let R=n[M];for(let U in R){let L=R[U];for(let F in L)h(L[F].object),delete L[F];delete R[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let U in R){let L=R[U];for(let F in L)h(L[F].object),delete L[F];delete R[U]}delete n[M.id]}function C(M){for(let R in n){let U=n[R];if(U[M.id]===void 0)continue;let L=U[M.id];for(let F in L)h(L[F].object),delete L[F];delete U[M.id]}}function P(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function k0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==hn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===Ie&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Tn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!P)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function G0(r){let t=this,e=null,n=0,i=!1,s=!1,o=new wn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let x=s?0:n,_=x*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let A=0;A!==_;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function W0(r){let t=new WeakMap;function e(o,a){return a===Cl?o.mapping=Ms:a===Rl&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cl||a===Rl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cr(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Es=class extends Mo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,cu=[.125,.215,.35,.446,.526,.582],ki=20,hl=new Es,hu=new gt,ul=null,dl=0,fl=0,pl=!1,Hi=(1+Math.sqrt(5))/2,hs=1/Hi,uu=[new I(-Hi,hs,0),new I(Hi,hs,0),new I(-hs,0,Hi),new I(hs,0,Hi),new I(0,Hi,-hs),new I(0,Hi,hs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ie,format:hn,colorSpace:Ns,depthBuffer:!1},i=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(s)),this._blurMaterial=X0(s,t,e)}return i}_compileMaterial(t){let e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,i){let a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(hu),h.toneMapping=yi,h.autoClear=!1;let f=new mn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new dt(new kt,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(hu),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Jr(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ms||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,hl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uu[(i-s-1)%uu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new dt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],x=0;for(let C=0;C<ki;++C){let P=C/v,w=Math.exp(-P*P/2);p.push(w),C===0?x+=w:C<m&&(x+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let y=this._sizeLods[i],A=3*y*(i>_-gs?i-_+gs:0),E=4*(this._cubeSize-y);Jr(e,A,E,3*y,2*y),l.setRenderTarget(e),l.render(d,hl)}};function q0(r){let t=[],e=[],n=[],i=r,s=r-gs+1+cu.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-gs?l=cu[o-r+gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,P=E>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];x.set(w,v*g*E),_.set(u,m*g*E);let M=[E,E,E,E,E,E];y.set(M,p*g*E)}let A=new De;A.setAttribute("position",new Re(x,v)),A.setAttribute("uv",new Re(_,m)),A.setAttribute("faceIndex",new Re(y,p)),t.push(A),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(r,t,e){let n=new be(r,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function X0(r,t,e){let n=new Float32Array(ki),i=new I(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ce,depthTest:!1,depthWrite:!1})}function fu(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ce,depthTest:!1,depthWrite:!1})}function pu(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ce,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cl||l===Rl,h=l===Ms||l===bs;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new wo(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new wo(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Z0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $0(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){let A=x[_+0],E=x[_+1],C=x[_+2];u.push(A,E,E,C,C,A)}}else if(g!==void 0){let x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let A=_+0,E=_+1,C=_+2;u.push(A,E,E,C,C,A)}}else return;let m=new(sd(u)?_o:yo)(u,1);m.version=v;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function j0(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function K0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function J0(r,t,e){let n=new WeakMap,i=new ie;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*A*4*d),C=new xo(E,y,A,d);C.type=Fn,C.needsUpdate=!0;let P=_*4;for(let M=0;M<d;M++){let R=m[M],U=p[M],L=x[M],F=y*A*4*M;for(let O=0;O<R.count;O++){let B=O*P;f===!0&&(i.fromBufferAttribute(R,O),E[F+B+0]=i.x,E[F+B+1]=i.y,E[F+B+2]=i.z,E[F+B+3]=0),g===!0&&(i.fromBufferAttribute(U,O),E[F+B+4]=i.x,E[F+B+5]=i.y,E[F+B+6]=i.z,E[F+B+7]=0),v===!0&&(i.fromBufferAttribute(L,O),E[F+B+8]=i.x,E[F+B+9]=i.y,E[F+B+10]=i.z,E[F+B+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new bt(y,A)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Q0(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Ss=class extends rn{constructor(t,e,n,i,s,o,a,l,c,h=vs){if(h!==vs&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Gi),n===void 0&&h===wi&&(n=bi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ld=new rn,mu=new Ss(1,1),cd=new xo,hd=new ac,ud=new bo,gu=[],vu=[],xu=new Float32Array(16),yu=new Float32Array(9),_u=new Float32Array(4);function Ds(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=gu[i];if(s===void 0&&(s=new Float32Array(i),gu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ko(r,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function tg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function ng(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function sg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;_u.set(n),r.uniformMatrix2fv(this.addr,!1,_u),Ue(e,n)}}function rg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;yu.set(n),r.uniformMatrix3fv(this.addr,!1,yu),Ue(e,n)}}function og(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Be(e,n))return;xu.set(n),r.uniformMatrix4fv(this.addr,!1,xu),Ue(e,n)}}function ag(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function cg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function hg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function ug(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function mg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mu.compareFunction=id,s=mu):s=ld,e.setTexture2D(t||s,i)}function gg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hd,i)}function vg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ud,i)}function xg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cd,i)}function yg(r){switch(r){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}function _g(r,t){r.uniform1fv(this.addr,t)}function Mg(r,t){let e=Ds(t,this.size,2);r.uniform2fv(this.addr,e)}function bg(r,t){let e=Ds(t,this.size,3);r.uniform3fv(this.addr,e)}function wg(r,t){let e=Ds(t,this.size,4);r.uniform4fv(this.addr,e)}function Eg(r,t){let e=Ds(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sg(r,t){let e=Ds(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Tg(r,t){let e=Ds(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ag(r,t){r.uniform1iv(this.addr,t)}function Cg(r,t){r.uniform2iv(this.addr,t)}function Rg(r,t){r.uniform3iv(this.addr,t)}function Pg(r,t){r.uniform4iv(this.addr,t)}function Ig(r,t){r.uniform1uiv(this.addr,t)}function Lg(r,t){r.uniform2uiv(this.addr,t)}function Ng(r,t){r.uniform3uiv(this.addr,t)}function Dg(r,t){r.uniform4uiv(this.addr,t)}function Bg(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ld,s[o])}function Ug(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hd,s[o])}function Fg(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ud,s[o])}function Og(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||cd,s[o])}function zg(r){switch(r){case 5126:return _g;case 35664:return Mg;case 35665:return bg;case 35666:return wg;case 35674:return Eg;case 35675:return Sg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ng;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function Mu(r,t){r.seq.push(t),r.map[t.id]=t}function Hg(r,t,e){let n=r.name,i=n.length;for(ml.lastIndex=0;;){let s=ml.exec(n),o=ml.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Mu(e,c===void 0?new lc(a,r,t):new cc(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new hc(a),Mu(e,d)),e=d}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Hg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var kg=37297,Vg=0;function Gg(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wu=new Wt;function Wg(r){Qt._getMatrix(wu,Qt.workingColorSpace,r);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(r)){case Ho:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Eu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Gg(r.getShaderSource(t),o)}else return i}function qg(r,t){let e=Wg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(r,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case zc:e="Cineon";break;case gr:e="ACESFilmic";break;case Hc:e="AgX";break;case kc:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new I;function Yg(){Qt.getLuminanceCoefficients(Qr);let r=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function $g(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ir(r){return r!==""}function Su(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(r){return r.replace(Kg,Qg)}var Jg=new Map;function Qg(r,t){let e=qt[t];if(e===void 0){let n=Jg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(r){return r.replace(tv,ev)}function ev(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ms:case bs:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xu:t="ENVMAP_BLENDING_MULTIPLY";break;case wf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function ov(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function av(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nv(e),c=iv(e),h=sv(e),d=rv(e),u=ov(e),f=Zg(e),g=$g(s),v=i.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?qt.tonemapping_pars_fragment:"",e.toneMapping!==yi?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=uc(o),o=Su(o,e),o=Tu(o,e),a=uc(a),a=Su(a,e),a=Tu(a,e),o=Au(o),a=Au(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+o,y=x+p+a,A=bu(i,i.VERTEX_SHADER,_),E=bu(i,i.FRAGMENT_SHADER,y);i.attachShader(v,A),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(R){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(E).trim(),O=!0,B=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,A,E);else{let Y=Eu(i,A,"vertex"),V=Eu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||F==="")&&(B=!1);B&&(R.diagnostics={runnable:O,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(A),i.deleteShader(E),P=new ys(i,v),w=jg(i,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var lv=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fc(t),e.set(t,n)),n}},fc=class{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}};function cv(r,t,e,n,i,s,o){let a=new ar,l=new dc,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,U,L){let F=U.fog,O=L.geometry,B=w.isMeshStandardMaterial?U.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),V=Y&&Y.mapping===zo?Y.image.height:null,$=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=et!==void 0?et.length:0,it=0;O.morphAttributes.position!==void 0&&(it=1),O.morphAttributes.normal!==void 0&&(it=2),O.morphAttributes.color!==void 0&&(it=3);let Yt,j,st,xt;if($){let he=Dn[$];Yt=he.vertexShader,j=he.fragmentShader}else Yt=w.vertexShader,j=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),xt=l.getFragmentShaderID(w);let at=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Lt=L.isInstancedMesh===!0,Ut=L.isBatchedMesh===!0,de=!!w.map,Kt=!!w.matcap,me=!!Y,H=!!w.aoMap,qe=!!w.lightMap,$t=!!w.bumpMap,jt=!!w.normalMap,It=!!w.displacementMap,ce=!!w.emissiveMap,Pt=!!w.metalnessMap,N=!!w.roughnessMap,S=w.anisotropy>0,W=w.clearcoat>0,J=w.dispersion>0,tt=w.iridescence>0,K=w.sheen>0,wt=w.transmission>0,ht=S&&!!w.anisotropyMap,ft=W&&!!w.clearcoatMap,Zt=W&&!!w.clearcoatNormalMap,rt=W&&!!w.clearcoatRoughnessMap,yt=tt&&!!w.iridescenceMap,Nt=tt&&!!w.iridescenceThicknessMap,Bt=K&&!!w.sheenColorMap,_t=K&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Ft=!!w.specularColorMap,te=!!w.specularIntensityMap,z=wt&&!!w.transmissionMap,ct=wt&&!!w.thicknessMap,Z=!!w.gradientMap,Q=!!w.alphaMap,vt=w.alphaTest>0,pt=!!w.alphaHash,Vt=!!w.extensions,Se=yi;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Se=r.toneMapping);let Xe={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:j,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Kt,envMap:me,envMapMode:me&&Y.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:qe,bumpMap:$t,normalMap:jt,displacementMap:u&&It,emissiveMap:ce,normalMapObjectSpace:jt&&w.normalMapType===Cf,normalMapTangentSpace:jt&&w.normalMapType===jc,metalnessMap:Pt,roughnessMap:N,anisotropy:S,anisotropyMap:ht,clearcoat:W,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:rt,dispersion:J,iridescence:tt,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:K,sheenColorMap:Bt,sheenRoughnessMap:_t,specularMap:Jt,specularColorMap:Ft,specularIntensityMap:te,transmission:wt,transmissionMap:z,thicknessMap:ct,gradientMap:Z,opaque:w.transparent===!1&&w.blending===xi&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:pt,combine:w.combine,mapUv:de&&v(w.map.channel),aoMapUv:H&&v(w.aoMap.channel),lightMapUv:qe&&v(w.lightMap.channel),bumpMapUv:$t&&v(w.bumpMap.channel),normalMapUv:jt&&v(w.normalMap.channel),displacementMapUv:It&&v(w.displacementMap.channel),emissiveMapUv:ce&&v(w.emissiveMap.channel),metalnessMapUv:Pt&&v(w.metalnessMap.channel),roughnessMapUv:N&&v(w.roughnessMap.channel),anisotropyMapUv:ht&&v(w.anisotropyMap.channel),clearcoatMapUv:ft&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(w.sheenRoughnessMap.channel),specularMapUv:Jt&&v(w.specularMap.channel),specularColorMapUv:Ft&&v(w.specularColorMap.channel),specularIntensityMapUv:te&&v(w.specularIntensityMap.channel),transmissionMapUv:z&&v(w.transmissionMap.channel),thicknessMapUv:ct&&v(w.thicknessMap.channel),alphaMapUv:Q&&v(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(jt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(de||Q),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:it,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:ce&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Je,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(x(M,w),_(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],R;if(M){let U=Dn[M];R=ze.clone(U.uniforms)}else R=w.uniforms;return R}function A(w,M){let R;for(let U=0,L=h.length;U<L;U++){let F=h[U];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new av(r,M,w,s),h.push(R)),R}function E(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function hv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function uv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ru(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pu(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||uv),n.length>1&&n.sort(u||Ru),i.length>1&&i.sort(u||Ru)}function h(){for(let d=t,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function dv(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Pu,r.set(n,[o])):i>=s.length?(o=new Pu,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function fv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new gt};break;case"SpotLight":e={position:new I,direction:new I,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function pv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var mv=0;function gv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vv(r){let t=new fv,e=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new Ht,o=new Ht;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,_=0,y=0,A=0,E=0,C=0;c.sort(gv);for(let w=0,M=c.length;w<M;w++){let R=c[w],U=R.color,L=R.intensity,F=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*L,d+=U.g*L,u+=U.b*L;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],L);C++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=B,f++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(U).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[v]=B;let Y=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Y.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=Y.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=O,y++}v++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(U).multiplyScalar(L),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=B,g++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(L),B.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=C,n.version=mv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Iu(r){let t=new vv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xv(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Iu(r),t.set(i,[a])):s>=o.length?(a=new Iu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ur=class extends On{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pc=class extends On{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(r,t,e){let n=new hr,i=new bt,s=new bt,o=new ie,a=new ur({depthPacking:$c}),l=new pc,c={},h=e.maxTextureSize,d={[Mi]:sn,[sn]:Mi,[Je]:Je},u=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:yv,fragmentShader:_v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let p=this.type;this.render=function(E,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ce),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let L=p!==jn&&this.type===jn,F=p===jn&&this.type!==jn;for(let O=0,B=E.length;O<B;O++){let Y=E[O],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let $=V.getFrameExtents();if(i.multiply($),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,V.mapSize.y=s.y)),V.map===null||L===!0||F===!0){let lt=this.type!==jn?{minFilter:Ne,magFilter:Ne}:{};V.map!==null&&V.map.dispose(),V.map=new be(i.x,i.y,lt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let et=V.getViewportCount();for(let lt=0;lt<et;lt++){let it=V.getViewport(lt);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),U.viewport(o),V.updateMatrices(Y,lt),n=V.getFrustum(),y(C,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===jn&&x(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,M,R)};function x(E,C){let P=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new be(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,P,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,P,f,v,null)}function _(E,C,P,w){let M=null,R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let U=M.uuid,L=C.uuid,F=c[U];F===void 0&&(F={},c[U]=F);let O=F[L];O===void 0&&(O=M.clone(),F[L]=O,C.addEventListener("dispose",A)),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,w===jn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=r.properties.get(M);U.light=P}return M}function y(E,C,P,w,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let L=t.update(E),F=E.material;if(Array.isArray(F)){let O=L.groups;for(let B=0,Y=O.length;B<Y;B++){let V=O[B],$=F[V.materialIndex];if($&&$.visible){let et=_(E,$,w,M);E.onBeforeShadow(r,E,C,P,L,et,V),r.renderBufferDirect(P,null,L,et,E,V),E.onAfterShadow(r,E,C,P,L,et,V)}}}else if(F.visible){let O=_(E,F,w,M);E.onBeforeShadow(r,E,C,P,L,O,null),r.renderBufferDirect(P,null,L,O,E,null),E.onAfterShadow(r,E,C,P,L,O,null)}}let U=E.children;for(let L=0,F=U.length;L<F;L++)y(U[L],C,P,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(let P in c){let w=c[P],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var bv={[Ml]:bl,[wl]:Tl,[El]:Al,[_s]:Sl,[bl]:Ml,[Tl]:wl,[Al]:El,[Sl]:_s};function wv(r,t){function e(){let z=!1,ct=new ie,Z=null,Q=new ie(0,0,0,0);return{setMask:function(vt){Z!==vt&&!z&&(r.colorMask(vt,vt,vt,vt),Z=vt)},setLocked:function(vt){z=vt},setClear:function(vt,pt,Vt,Se,Xe){Xe===!0&&(vt*=Se,pt*=Se,Vt*=Se),ct.set(vt,pt,Vt,Se),Q.equals(ct)===!1&&(r.clearColor(vt,pt,Vt,Se),Q.copy(ct))},reset:function(){z=!1,Z=null,Q.set(-1,0,0,0)}}}function n(){let z=!1,ct=!1,Z=null,Q=null,vt=null;return{setReversed:function(pt){if(ct!==pt){let Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let Se=vt;vt=null,this.setClear(Se)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?at(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(pt){Z!==pt&&!z&&(r.depthMask(pt),Z=pt)},setFunc:function(pt){if(ct&&(pt=bv[pt]),Q!==pt){switch(pt){case Ml:r.depthFunc(r.NEVER);break;case bl:r.depthFunc(r.ALWAYS);break;case wl:r.depthFunc(r.LESS);break;case _s:r.depthFunc(r.LEQUAL);break;case El:r.depthFunc(r.EQUAL);break;case Sl:r.depthFunc(r.GEQUAL);break;case Tl:r.depthFunc(r.GREATER);break;case Al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pt}},setLocked:function(pt){z=pt},setClear:function(pt){vt!==pt&&(ct&&(pt=1-pt),r.clearDepth(pt),vt=pt)},reset:function(){z=!1,Z=null,Q=null,vt=null,ct=!1}}}function i(){let z=!1,ct=null,Z=null,Q=null,vt=null,pt=null,Vt=null,Se=null,Xe=null;return{setTest:function(he){z||(he?at(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(he){ct!==he&&!z&&(r.stencilMask(he),ct=he)},setFunc:function(he,xn,Gn){(Z!==he||Q!==xn||vt!==Gn)&&(r.stencilFunc(he,xn,Gn),Z=he,Q=xn,vt=Gn)},setOp:function(he,xn,Gn){(pt!==he||Vt!==xn||Se!==Gn)&&(r.stencilOp(he,xn,Gn),pt=he,Vt=xn,Se=Gn)},setLocked:function(he){z=he},setClear:function(he){Xe!==he&&(r.clearStencil(he),Xe=he)},reset:function(){z=!1,ct=null,Z=null,Q=null,vt=null,pt=null,Vt=null,Se=null,Xe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,_=null,y=null,A=null,E=null,C=new gt(0,0,0),P=0,w=!1,M=null,R=null,U=null,L=null,F=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Y>=2);let $=null,et={},lt=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),Yt=new ie().fromArray(lt),j=new ie().fromArray(it);function st(z,ct,Z,Q){let vt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(z,pt),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Z;Vt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(ct+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return pt}let xt={};xt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(r.DEPTH_TEST),o.setFunc(_s),$t(!1),jt(Bh),at(r.CULL_FACE),H(Ce);function at(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function At(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Lt(z,ct){return d[z]!==ct?(r.bindFramebuffer(z,ct),d[z]=ct,z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ut(z,ct){let Z=f,Q=!1;if(z){Z=u.get(ct),Z===void 0&&(Z=[],u.set(ct,Z));let vt=z.textures;if(Z.length!==vt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Vt=vt.length;pt<Vt;pt++)Z[pt]=r.COLOR_ATTACHMENT0+pt;Z.length=vt.length,Q=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,Q=!0);Q&&r.drawBuffers(Z)}function de(z){return g!==z?(r.useProgram(z),g=z,!0):!1}let Kt={[pn]:r.FUNC_ADD,[cf]:r.FUNC_SUBTRACT,[hf]:r.FUNC_REVERSE_SUBTRACT};Kt[uf]=r.MIN,Kt[df]=r.MAX;let me={[Ls]:r.ZERO,[ff]:r.ONE,[pf]:r.SRC_COLOR,[yl]:r.SRC_ALPHA,[xf]:r.SRC_ALPHA_SATURATE,[Oo]:r.DST_COLOR,[Fo]:r.DST_ALPHA,[mf]:r.ONE_MINUS_SRC_COLOR,[_l]:r.ONE_MINUS_SRC_ALPHA,[vf]:r.ONE_MINUS_DST_COLOR,[gf]:r.ONE_MINUS_DST_ALPHA,[yf]:r.CONSTANT_COLOR,[_f]:r.ONE_MINUS_CONSTANT_COLOR,[Mf]:r.CONSTANT_ALPHA,[bf]:r.ONE_MINUS_CONSTANT_ALPHA};function H(z,ct,Z,Q,vt,pt,Vt,Se,Xe,he){if(z===Ce){v===!0&&(At(r.BLEND),v=!1);return}if(v===!1&&(at(r.BLEND),v=!0),z!==Uc){if(z!==m||he!==w){if((p!==pn||y!==pn)&&(r.blendEquation(r.FUNC_ADD),p=pn,y=pn),he)switch(z){case xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case En:r.blendFunc(r.ONE,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case En:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,_=null,A=null,E=null,C.set(0,0,0),P=0,m=z,w=he}return}vt=vt||ct,pt=pt||Z,Vt=Vt||Q,(ct!==p||vt!==y)&&(r.blendEquationSeparate(Kt[ct],Kt[vt]),p=ct,y=vt),(Z!==x||Q!==_||pt!==A||Vt!==E)&&(r.blendFuncSeparate(me[Z],me[Q],me[pt],me[Vt]),x=Z,_=Q,A=pt,E=Vt),(Se.equals(C)===!1||Xe!==P)&&(r.blendColor(Se.r,Se.g,Se.b,Xe),C.copy(Se),P=Xe),m=z,w=!1}function qe(z,ct){z.side===Je?At(r.CULL_FACE):at(r.CULL_FACE);let Z=z.side===sn;ct&&(Z=!Z),$t(Z),z.blending===xi&&z.transparent===!1?H(Ce):H(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let Q=z.stencilWrite;a.setTest(Q),Q&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ce(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(z){M!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),M=z)}function jt(z){z!==af?(at(r.CULL_FACE),z!==R&&(z===Bh?r.cullFace(r.BACK):z===lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),R=z}function It(z){z!==U&&(B&&r.lineWidth(z),U=z)}function ce(z,ct,Z){z?(at(r.POLYGON_OFFSET_FILL),(L!==ct||F!==Z)&&(r.polygonOffset(ct,Z),L=ct,F=Z)):At(r.POLYGON_OFFSET_FILL)}function Pt(z){z?at(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function N(z){z===void 0&&(z=r.TEXTURE0+O-1),$!==z&&(r.activeTexture(z),$=z)}function S(z,ct,Z){Z===void 0&&($===null?Z=r.TEXTURE0+O-1:Z=$);let Q=et[Z];Q===void 0&&(Q={type:void 0,texture:void 0},et[Z]=Q),(Q.type!==z||Q.texture!==ct)&&($!==Z&&(r.activeTexture(Z),$=Z),r.bindTexture(z,ct||xt[z]),Q.type=z,Q.texture=ct)}function W(){let z=et[$];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(z){Yt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Yt.copy(z))}function _t(z){j.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Jt(z,ct){let Z=c.get(ct);Z===void 0&&(Z=new WeakMap,c.set(ct,Z));let Q=Z.get(z);Q===void 0&&(Q=r.getUniformBlockIndex(ct,z.name),Z.set(z,Q))}function Ft(z,ct){let Q=c.get(ct).get(z);l.get(ct)!==Q&&(r.uniformBlockBinding(ct,Q,z.__bindingPointIndex),l.set(ct,Q))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,et={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,_=null,y=null,A=null,E=null,C=new gt(0,0,0),P=0,w=!1,M=null,R=null,U=null,L=null,F=null,Yt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:At,bindFramebuffer:Lt,drawBuffers:Ut,useProgram:de,setBlending:H,setMaterial:qe,setFlipSided:$t,setCullFace:jt,setLineWidth:It,setPolygonOffset:ce,setScissorTest:Pt,activeTexture:N,bindTexture:S,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:yt,texImage3D:Nt,updateUBOMapping:Jt,uniformBlockBinding:Ft,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:ft,scissor:Bt,viewport:_t,reset:te}}function Lu(r,t,e,n){let i=Ev(n);switch(e){case Ku:return r*t;case Qu:return r*t;case td:return r*t*2;case qc:return r*t/i.components*i.byteLength;case Xc:return r*t/i.components*i.byteLength;case ed:return r*t*2/i.components*i.byteLength;case Yc:return r*t*2/i.components*i.byteLength;case Ju:return r*t*3/i.components*i.byteLength;case hn:return r*t*4/i.components*i.byteLength;case Zc:return r*t*4/i.components*i.byteLength;case ao:case lo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Dl:return Math.max(r,16)*Math.max(t,8)/4;case Il:case Nl:return Math.max(r,8)*Math.max(t,8)/2;case Bl:case Ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case uo:case Jl:case Ql:return Math.ceil(r/4)*Math.ceil(t/4)*16;case nd:case tc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ec:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ev(r){switch(r){case Tn:case Zu:return{byteLength:1,components:1};case rr:case $u:case Ie:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Gi:case Vc:case Fn:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Sv(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,S){return f?new OffscreenCanvas(N,S):go("canvas")}function v(N,S,W){let J=1,tt=Pt(N);if((tt.width>W||tt.height>W)&&(J=W/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let K=Math.floor(J*tt.width),wt=Math.floor(J*tt.height);d===void 0&&(d=g(K,wt));let ht=S?g(K,wt):d;return ht.width=K,ht.height=wt,ht.getContext("2d").drawImage(N,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+wt+")."),ht}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){r.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(N,S,W,J,tt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let K=S;if(S===r.RED&&(W===r.FLOAT&&(K=r.R32F),W===r.HALF_FLOAT&&(K=r.R16F),W===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.R8UI),W===r.UNSIGNED_SHORT&&(K=r.R16UI),W===r.UNSIGNED_INT&&(K=r.R32UI),W===r.BYTE&&(K=r.R8I),W===r.SHORT&&(K=r.R16I),W===r.INT&&(K=r.R32I)),S===r.RG&&(W===r.FLOAT&&(K=r.RG32F),W===r.HALF_FLOAT&&(K=r.RG16F),W===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RG8UI),W===r.UNSIGNED_SHORT&&(K=r.RG16UI),W===r.UNSIGNED_INT&&(K=r.RG32UI),W===r.BYTE&&(K=r.RG8I),W===r.SHORT&&(K=r.RG16I),W===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGB8UI),W===r.UNSIGNED_SHORT&&(K=r.RGB16UI),W===r.UNSIGNED_INT&&(K=r.RGB32UI),W===r.BYTE&&(K=r.RGB8I),W===r.SHORT&&(K=r.RGB16I),W===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),W===r.UNSIGNED_INT&&(K=r.RGBA32UI),W===r.BYTE&&(K=r.RGBA8I),W===r.SHORT&&(K=r.RGBA16I),W===r.INT&&(K=r.RGBA32I)),S===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){let wt=tt?Ho:Qt.getTransfer(J);W===r.FLOAT&&(K=r.RGBA32F),W===r.HALF_FLOAT&&(K=r.RGBA16F),W===r.UNSIGNED_BYTE&&(K=wt===ae?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(N,S){let W;return N?S===null||S===Gi||S===bi?W=r.DEPTH24_STENCIL8:S===Fn?W=r.DEPTH32F_STENCIL8:S===rr&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===bi?W=r.DEPTH_COMPONENT24:S===Fn?W=r.DEPTH_COMPONENT32F:S===rr&&(W=r.DEPTH_COMPONENT16),W}function A(N,S){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ne&&N.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function E(N){let S=N.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function C(N){let S=N.target;S.removeEventListener("dispose",C),M(S)}function P(N){let S=n.get(N);if(S.__webglInit===void 0)return;let W=N.source,J=u.get(W);if(J){let tt=J[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(N),Object.keys(J).length===0&&u.delete(W)}n.remove(N)}function w(N){let S=n.get(N);r.deleteTexture(S.__webglTexture);let W=N.source,J=u.get(W);delete J[S.__cacheKey],o.memory.textures--}function M(N){let S=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let tt=0;tt<S.__webglFramebuffer[J].length;tt++)r.deleteFramebuffer(S.__webglFramebuffer[J][tt]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=N.textures;for(let J=0,tt=W.length;J<tt;J++){let K=n.get(W[J]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(N)}let R=0;function U(){R=0}function L(){let N=R;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),R+=1,N}function F(N){let S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function O(N,S){let W=n.get(N);if(N.isVideoTexture&&It(N),N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){let J=N.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,N,S);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function B(N,S){let W=n.get(N);if(N.version>0&&W.__version!==N.version){j(W,N,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function Y(N,S){let W=n.get(N);if(N.version>0&&W.__version!==N.version){j(W,N,S);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function V(N,S){let W=n.get(N);if(N.version>0&&W.__version!==N.version){st(W,N,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}let $={[Sn]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Pl]:r.MIRRORED_REPEAT},et={[Ne]:r.NEAREST,[Tf]:r.NEAREST_MIPMAP_NEAREST,[Nr]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},lt={[Rf]:r.NEVER,[Bf]:r.ALWAYS,[Pf]:r.LESS,[id]:r.LEQUAL,[If]:r.EQUAL,[Df]:r.GEQUAL,[Lf]:r.GREATER,[Nf]:r.NOTEQUAL};function it(N,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Ha||S.magFilter===Nr||S.magFilter===Kn||S.minFilter===Un||S.minFilter===Ha||S.minFilter===Nr||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,$[S.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,et[S.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ne||S.minFilter!==Nr&&S.minFilter!==Kn||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(N,S){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",E));let J=S.source,tt=u.get(J);tt===void 0&&(tt={},u.set(J,tt));let K=F(S);if(K!==N.__cacheKey){tt[K]===void 0&&(tt[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[K].usedTimes++;let wt=tt[N.__cacheKey];wt!==void 0&&(tt[N.__cacheKey].usedTimes--,wt.usedTimes===0&&w(S)),N.__cacheKey=K,N.__webglTexture=tt[K].texture}return W}function j(N,S,W){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);let tt=Yt(N,S),K=S.source;e.bindTexture(J,N.__webglTexture,r.TEXTURE0+W);let wt=n.get(K);if(K.version!==wt.__version||tt===!0){e.activeTexture(r.TEXTURE0+W);let ht=Qt.getPrimaries(Qt.workingColorSpace),ft=S.colorSpace===nn?null:Qt.getPrimaries(S.colorSpace),Zt=S.colorSpace===nn||ht===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=v(S.image,!1,i.maxTextureSize);rt=ce(S,rt);let yt=s.convert(S.format,S.colorSpace),Nt=s.convert(S.type),Bt=_(S.internalFormat,yt,Nt,S.colorSpace,S.isVideoTexture);it(J,S);let _t,Jt=S.mipmaps,Ft=S.isVideoTexture!==!0,te=wt.__version===void 0||tt===!0,z=K.dataReady,ct=A(S,rt);if(S.isDepthTexture)Bt=y(S.format===wi,S.type),te&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Bt,rt.width,rt.height,0,yt,Nt,null));else if(S.isDataTexture)if(Jt.length>0){Ft&&te&&e.texStorage2D(r.TEXTURE_2D,ct,Bt,Jt[0].width,Jt[0].height);for(let Z=0,Q=Jt.length;Z<Q;Z++)_t=Jt[Z],Ft?z&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,_t.width,_t.height,yt,Nt,_t.data):e.texImage2D(r.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,yt,Nt,_t.data);S.generateMipmaps=!1}else Ft?(te&&e.texStorage2D(r.TEXTURE_2D,ct,Bt,rt.width,rt.height),z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Nt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,rt.width,rt.height,0,yt,Nt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Bt,Jt[0].width,Jt[0].height,rt.depth);for(let Z=0,Q=Jt.length;Z<Q;Z++)if(_t=Jt[Z],S.format!==hn)if(yt!==null)if(Ft){if(z)if(S.layerUpdates.size>0){let vt=Lu(_t.width,_t.height,S.format,S.type);for(let pt of S.layerUpdates){let Vt=_t.data.subarray(pt*vt/_t.data.BYTES_PER_ELEMENT,(pt+1)*vt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,pt,_t.width,_t.height,1,yt,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,rt.depth,yt,_t.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Bt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,rt.depth,yt,Nt,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Bt,_t.width,_t.height,rt.depth,0,yt,Nt,_t.data)}else{Ft&&te&&e.texStorage2D(r.TEXTURE_2D,ct,Bt,Jt[0].width,Jt[0].height);for(let Z=0,Q=Jt.length;Z<Q;Z++)_t=Jt[Z],S.format!==hn?yt!==null?Ft?z&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?z&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,_t.width,_t.height,yt,Nt,_t.data):e.texImage2D(r.TEXTURE_2D,Z,Bt,_t.width,_t.height,0,yt,Nt,_t.data)}else if(S.isDataArrayTexture)if(Ft){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Bt,rt.width,rt.height,rt.depth),z)if(S.layerUpdates.size>0){let Z=Lu(rt.width,rt.height,S.format,S.type);for(let Q of S.layerUpdates){let vt=rt.data.subarray(Q*Z/rt.data.BYTES_PER_ELEMENT,(Q+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,yt,Nt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Nt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,yt,Nt,rt.data);else if(S.isData3DTexture)Ft?(te&&e.texStorage3D(r.TEXTURE_3D,ct,Bt,rt.width,rt.height,rt.depth),z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Nt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,yt,Nt,rt.data);else if(S.isFramebufferTexture){if(te)if(Ft)e.texStorage2D(r.TEXTURE_2D,ct,Bt,rt.width,rt.height);else{let Z=rt.width,Q=rt.height;for(let vt=0;vt<ct;vt++)e.texImage2D(r.TEXTURE_2D,vt,Bt,Z,Q,0,yt,Nt,null),Z>>=1,Q>>=1}}else if(Jt.length>0){if(Ft&&te){let Z=Pt(Jt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Bt,Z.width,Z.height)}for(let Z=0,Q=Jt.length;Z<Q;Z++)_t=Jt[Z],Ft?z&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,yt,Nt,_t):e.texImage2D(r.TEXTURE_2D,Z,Bt,yt,Nt,_t);S.generateMipmaps=!1}else if(Ft){if(te){let Z=Pt(rt);e.texStorage2D(r.TEXTURE_2D,ct,Bt,Z.width,Z.height)}z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Nt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Bt,yt,Nt,rt);m(S)&&p(J),wt.__version=K.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function st(N,S,W){if(S.image.length!==6)return;let J=Yt(N,S),tt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);let K=n.get(tt);if(tt.version!==K.__version||J===!0){e.activeTexture(r.TEXTURE0+W);let wt=Qt.getPrimaries(Qt.workingColorSpace),ht=S.colorSpace===nn?null:Qt.getPrimaries(S.colorSpace),ft=S.colorSpace===nn||wt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!Zt&&!rt?yt[Q]=v(S.image[Q],!0,i.maxCubemapSize):yt[Q]=rt?S.image[Q].image:S.image[Q],yt[Q]=ce(S,yt[Q]);let Nt=yt[0],Bt=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),Jt=_(S.internalFormat,Bt,_t,S.colorSpace),Ft=S.isVideoTexture!==!0,te=K.__version===void 0||J===!0,z=tt.dataReady,ct=A(S,Nt);it(r.TEXTURE_CUBE_MAP,S);let Z;if(Zt){Ft&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Jt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){Z=yt[Q].mipmaps;for(let vt=0;vt<Z.length;vt++){let pt=Z[vt];S.format!==hn?Bt!==null?Ft?z&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,pt.width,pt.height,Bt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,pt.width,pt.height,Bt,_t,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Jt,pt.width,pt.height,0,Bt,_t,pt.data)}}}else{if(Z=S.mipmaps,Ft&&te){Z.length>0&&ct++;let Q=Pt(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Ft?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Bt,_t,yt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,yt[Q].width,yt[Q].height,0,Bt,_t,yt[Q].data);for(let vt=0;vt<Z.length;vt++){let Vt=Z[vt].image[Q].image;Ft?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Vt.width,Vt.height,Bt,_t,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Jt,Vt.width,Vt.height,0,Bt,_t,Vt.data)}}else{Ft?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,_t,yt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Bt,_t,yt[Q]);for(let vt=0;vt<Z.length;vt++){let pt=Z[vt];Ft?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Bt,_t,pt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Jt,Bt,_t,pt.image[Q])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),K.__version=tt.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function xt(N,S,W,J,tt,K){let wt=s.convert(W.format,W.colorSpace),ht=s.convert(W.type),ft=_(W.internalFormat,wt,ht,W.colorSpace),Zt=n.get(S),rt=n.get(W);if(rt.__renderTarget=S,!Zt.__hasExternalTextures){let yt=Math.max(1,S.width>>K),Nt=Math.max(1,S.height>>K);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,ft,yt,Nt,S.depth,0,wt,ht,null):e.texImage2D(tt,K,ft,yt,Nt,0,wt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,N),jt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,tt,rt.__webglTexture,0,$t(S)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,tt,rt.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(N,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),S.depthBuffer){let J=S.depthTexture,tt=J&&J.isDepthTexture?J.type:null,K=y(S.stencilBuffer,tt),wt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=$t(S);jt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,K,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,N)}else{let J=S.textures;for(let tt=0;tt<J.length;tt++){let K=J[tt],wt=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),ft=_(K.internalFormat,wt,ht,K.colorSpace),Zt=$t(S);W&&jt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,ft,S.width,S.height):jt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,ft,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ft,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(N,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let tt=J.__webglTexture,K=$t(S);if(S.depthTexture.format===vs)jt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(S.depthTexture.format===wi)jt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(N){let S=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){let J=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=J}if(N.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,N)}else if(W){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),at(S.__webglDepthbuffer[J],N,!1);else{let tt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),at(S.__webglDepthbuffer,N,!1);else{let J=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(N,S,W){let J=n.get(N);S!==void 0&&xt(J.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Lt(N)}function de(N){let S=N.texture,W=n.get(N),J=n.get(S);N.addEventListener("dispose",C);let tt=N.textures,K=N.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let ft=0;ft<S.mipmaps.length;ft++)W.__webglFramebuffer[ht][ft]=r.createFramebuffer()}else W.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)W.__webglFramebuffer[ht]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ht=0,ft=tt.length;ht<ft;ht++){let Zt=n.get(tt[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&jt(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){let ft=tt[ht];W.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);let Zt=s.convert(ft.format,ft.colorSpace),rt=s.convert(ft.type),yt=_(ft.internalFormat,Zt,rt,ft.colorSpace,N.isXRRenderTarget===!0),Nt=$t(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,yt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),at(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),it(r.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)xt(W.__webglFramebuffer[ht][ft],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else xt(W.__webglFramebuffer[ht],N,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,ft=tt.length;ht<ft;ht++){let Zt=tt[ht],rt=n.get(Zt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),it(r.TEXTURE_2D,Zt),xt(W.__webglFramebuffer,N,Zt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(Zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ht=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),it(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)xt(W.__webglFramebuffer[ft],N,S,r.COLOR_ATTACHMENT0,ht,ft);else xt(W.__webglFramebuffer,N,S,r.COLOR_ATTACHMENT0,ht,0);m(S)&&p(ht),e.unbindTexture()}N.depthBuffer&&Lt(N)}function Kt(N){let S=N.textures;for(let W=0,J=S.length;W<J;W++){let tt=S[W];if(m(tt)){let K=x(N),wt=n.get(tt).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}let me=[],H=[];function qe(N){if(N.samples>0){if(jt(N)===!1){let S=N.textures,W=N.width,J=N.height,tt=r.COLOR_BUFFER_BIT,K=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(N),ht=S.length>1;if(ht)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);let Zt=n.get(S[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,tt,r.NEAREST),l===!0&&(me.length=0,H.length=0,me.push(r.COLOR_ATTACHMENT0+ft),N.depthBuffer&&N.resolveDepthBuffer===!1&&(me.push(K),H.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);let Zt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let S=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function $t(N){return Math.min(i.maxSamples,N.samples)}function jt(N){let S=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(N){let S=o.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function ce(N,S){let W=N.colorSpace,J=N.format,tt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ns&&W!==nn&&(Qt.getTransfer(W)===ae?(J!==hn||tt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt}function Tv(r,t){function e(n,i=nn){let s,o=Qt.getTransfer(i);if(n===Tn)return r.UNSIGNED_BYTE;if(n===Gc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ju)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.BYTE;if(n===$u)return r.SHORT;if(n===rr)return r.UNSIGNED_SHORT;if(n===Vc)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===Fn)return r.FLOAT;if(n===Ie)return r.HALF_FLOAT;if(n===Ku)return r.ALPHA;if(n===Ju)return r.RGB;if(n===hn)return r.RGBA;if(n===Qu)return r.LUMINANCE;if(n===td)return r.LUMINANCE_ALPHA;if(n===vs)return r.DEPTH_COMPONENT;if(n===wi)return r.DEPTH_STENCIL;if(n===qc)return r.RED;if(n===Xc)return r.RED_INTEGER;if(n===ed)return r.RG;if(n===Yc)return r.RG_INTEGER;if(n===Zc)return r.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Ll||n===Nl||n===Dl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Ul||n===Fl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===Ul)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ol||n===zl||n===Hl||n===kl||n===Vl||n===Gl||n===Wl||n===ql||n===Xl||n===Yl||n===Zl||n===$l||n===jl||n===Kl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ol)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===Jl||n===Ql)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uo)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===tc||n===ec||n===nc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var mc=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Av={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new rn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new se({vertexShader:Cv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Ei{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=new gc,m=e.getContextAttributes(),p=null,x=null,_=[],y=[],A=new bt,E=null,C=new Le;C.viewport=new ie;let P=new Le;P.viewport=new ie;let w=[C,P],M=new mc,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=_[j];return st===void 0&&(st=new sr,_[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=_[j];return st===void 0&&(st=new sr,_[j]=st),st.getGripSpace()},this.getHand=function(j){let st=_[j];return st===void 0&&(st=new sr,_[j]=st),st.getHandSpace()};function L(j){let st=y.indexOf(j.inputSource);if(st===-1)return;let xt=_[st];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||o),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",O);for(let j=0;j<_.length;j++){let st=y[j];st!==null&&(y[j]=null,_[j].disconnect(st))}R=null,U=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",F),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new be(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,xt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?wi:vs,xt=m.stencil?bi:Gi);let At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new be(u.textureWidth,u.textureHeight,{format:hn,type:Tn,depthTexture:new Ss(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(j){for(let st=0;st<j.removed.length;st++){let xt=j.removed[st],at=y.indexOf(xt);at>=0&&(y[at]=null,_[at].disconnect(xt))}for(let st=0;st<j.added.length;st++){let xt=j.added[st],at=y.indexOf(xt);if(at===-1){for(let Lt=0;Lt<_.length;Lt++)if(Lt>=y.length){y.push(xt),at=Lt;break}else if(y[Lt]===null){y[Lt]=xt,at=Lt;break}if(at===-1)break}let At=_[at];At&&At.connect(xt)}}let B=new I,Y=new I;function V(j,st,xt){B.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);let at=B.distanceTo(Y),At=st.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,Ut=At[14]/(At[10]-1),de=At[14]/(At[10]+1),Kt=(At[9]+1)/At[5],me=(At[9]-1)/At[5],H=(At[8]-1)/At[0],qe=(Lt[8]+1)/Lt[0],$t=Ut*H,jt=Ut*qe,It=at/(-H+qe),ce=It*-H;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(It),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Pt=Ut+It,N=de+It,S=$t-ce,W=jt+(at-ce),J=Kt*de/N*Pt,tt=me*de/N*Pt;j.projectionMatrix.makePerspective(S,W,J,tt,Pt,N),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let st=j.near,xt=j.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),M.near=P.near=C.near=st,M.far=P.far=C.far=xt,(R!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,U=M.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;let at=j.parent,At=M.cameras;$(M,at);for(let Lt=0;Lt<At.length;Lt++)$(At[Lt],at);At.length===2?V(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),et(j,M,at)};function et(j,st,xt){xt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let lt=null;function it(j,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let at=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Lt=0;Lt<xt.length;Lt++){let Ut=xt[Lt],de=null;if(f!==null)de=f.getViewport(Ut);else{let me=d.getViewSubImage(u,Ut);de=me.viewport,Lt===0&&(t.setRenderTargetTextures(x,me.colorTexture,u.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(x))}let Kt=w[Lt];Kt===void 0&&(Kt=new Le,Kt.layers.enable(Lt),Kt.viewport=new ie,w[Lt]=Kt),Kt.matrix.fromArray(Ut.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ut.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(de.x,de.y,de.width,de.height),Lt===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Kt)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){let Lt=d.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,i.renderState)}}for(let xt=0;xt<_.length;xt++){let at=y[xt],At=_[xt];at!==null&&At!==void 0&&At.update(at,st,c||o)}lt&&lt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Yt=new ad;Yt.setAnimationLoop(it),this.setAnimationLoop=function(j){lt=j},this.dispose=function(){}}},zi=new ke,Pv=new Ht;function Iv(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(zi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lv(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));let A=_.program;n.updateUBOMapping(x,A);let E=t.render.frame;s[x.id]!==E&&(u(x),s[x.id]=E)}function h(x){let _=d();x.__bindingPointIndex=_;let y=r.createBuffer(),A=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let _=i[x.id],y=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,C=y.length;E<C;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,M=P.length;w<M;w++){let R=P[w];if(f(R,E,w,A)===!0){let U=R.__offset,L=Array.isArray(R.value)?R.value:[R.value],F=0;for(let O=0;O<L.length;O++){let B=L[O],Y=v(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,U+F,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,y,A){let E=x.value,C=_+"_"+y;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{let P=A[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(x){let _=x.uniforms,y=0,A=16;for(let C=0,P=_.length;C<P;C++){let w=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,R=w.length;M<R;M++){let U=w[M],L=Array.isArray(U.value)?U.value:[U.value];for(let F=0,O=L.length;F<O;F++){let B=L[F],Y=v(B),V=y%A,$=V%Y.boundary,et=V+$;y+=$,et!==0&&A-et<Y.storage&&(y+=A-et),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Y.storage}}}let E=y%A;return E>0&&(y+=A-E),x.__size=y,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Eo=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=yi,this.toneMappingExposure=1;let y=this,A=!1,E=0,C=0,P=null,w=-1,M=null,R=new ie,U=new ie,L=null,F=new gt(0),O=0,B=e.width,Y=e.height,V=1,$=null,et=null,lt=new ie(0,0,B,Y),it=new ie(0,0,B,Y),Yt=!1,j=new hr,st=!1,xt=!1,at=new Ht,At=new Ht,Lt=new I,Ut=new ie,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function me(){return P===null?V:1}let H=n;function qe(T,k){return e.getContext(T,k)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),H===null){let k="webgl2";if(H=qe(k,T),H===null)throw qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $t,jt,It,ce,Pt,N,S,W,J,tt,K,wt,ht,ft,Zt,rt,yt,Nt,Bt,_t,Jt,Ft,te,z;function ct(){$t=new Z0(H),$t.init(),Ft=new Tv(H,$t),jt=new V0(H,$t,t,Ft),It=new wv(H,$t),jt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),ce=new K0(H),Pt=new hv,N=new Sv(H,$t,It,Pt,jt,Ft,ce),S=new W0(y),W=new Y0(y),J=new sp(H),te=new H0(H,J),tt=new $0(H,J,ce,te),K=new Q0(H,tt,J,ce),Bt=new J0(H,jt,N),rt=new G0(Pt),wt=new cv(y,S,W,$t,jt,te,rt),ht=new Iv(y,Pt),ft=new dv,Zt=new xv($t),Nt=new z0(y,S,W,It,K,f,l),yt=new Mv(y,K,jt),z=new Lv(H,ce,jt,It),_t=new k0(H,$t,ce),Jt=new j0(H,$t,ce),ce.programs=wt.programs,y.capabilities=jt,y.extensions=$t,y.properties=Pt,y.renderLists=ft,y.shadowMap=yt,y.state=It,y.info=ce}ct();let Z=new vc(y,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=$t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(B,Y,!1))},this.getSize=function(T){return T.set(B,Y)},this.setSize=function(T,k,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,Y=k,e.width=Math.floor(T*V),e.height=Math.floor(k*V),q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(B*V,Y*V).floor()},this.setDrawingBufferSize=function(T,k,q){B=T,Y=k,V=q,e.width=Math.floor(T*q),e.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(lt)},this.setViewport=function(T,k,q,X){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,k,q,X),It.viewport(R.copy(lt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,k,q,X){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,k,q,X),It.scissor(U.copy(it).multiplyScalar(V).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){It.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,k=!0,q=!0){let X=0;if(T){let G=!1;if(P!==null){let ot=P.texture.format;G=ot===Zc||ot===Yc||ot===Xc}if(G){let ot=P.texture.type,mt=ot===Tn||ot===Gi||ot===rr||ot===bi||ot===Gc||ot===Wc,Et=Nt.getClearColor(),St=Nt.getClearAlpha(),Ot=Et.r,Gt=Et.g,Tt=Et.b;mt?(g[0]=Ot,g[1]=Gt,g[2]=Tt,g[3]=St,H.clearBufferuiv(H.COLOR,0,g)):(v[0]=Ot,v[1]=Gt,v[2]=Tt,v[3]=St,H.clearBufferiv(H.COLOR,0,v))}else X|=H.COLOR_BUFFER_BIT}k&&(X|=H.DEPTH_BUFFER_BIT),q&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),ft.dispose(),Zt.dispose(),Pt.dispose(),S.dispose(),W.dispose(),K.dispose(),te.dispose(),z.dispose(),wt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ah),Z.removeEventListener("sessionend",Ch),Ni.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=ce.autoReset,k=yt.enabled,q=yt.autoUpdate,X=yt.needsUpdate,G=yt.type;ct(),ce.autoReset=T,yt.enabled=k,yt.autoUpdate=q,yt.needsUpdate=X,yt.type=G}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){let k=T.target;k.removeEventListener("dispose",Vt),Se(k)}function Se(T){Xe(T),Pt.remove(T)}function Xe(T){let k=Pt.get(T).programs;k!==void 0&&(k.forEach(function(q){wt.releaseProgram(q)}),T.isShaderMaterial&&wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,X,G,ot){k===null&&(k=de);let mt=G.isMesh&&G.matrixWorld.determinant()<0,Et=ef(T,k,q,X,G);It.setMaterial(X,mt);let St=q.index,Ot=1;if(X.wireframe===!0){if(St=tt.getWireframeAttribute(q),St===void 0)return;Ot=2}let Gt=q.drawRange,Tt=q.attributes.position,ee=Gt.start*Ot,fe=(Gt.start+Gt.count)*Ot;ot!==null&&(ee=Math.max(ee,ot.start*Ot),fe=Math.min(fe,(ot.start+ot.count)*Ot)),St!==null?(ee=Math.max(ee,0),fe=Math.min(fe,St.count)):Tt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Tt.count));let ge=fe-ee;if(ge<0||ge===1/0)return;te.setup(G,X,Et,q,St);let tn,re=_t;if(St!==null&&(tn=J.get(St),re=Jt,re.setIndex(tn)),G.isMesh)X.wireframe===!0?(It.setLineWidth(X.wireframeLinewidth*me()),re.setMode(H.LINES)):re.setMode(H.TRIANGLES);else if(G.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*me()),G.isLineSegments?re.setMode(H.LINES):G.isLineLoop?re.setMode(H.LINE_LOOP):re.setMode(H.LINE_STRIP)}else G.isPoints?re.setMode(H.POINTS):G.isSprite&&re.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)re.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ct=G._multiDrawStarts,Wn=G._multiDrawCounts,oe=G._multiDrawCount,yn=St?J.get(St).bytesPerElement:1,ji=Pt.get(X).currentProgram.getUniforms();for(let an=0;an<oe;an++)ji.setValue(H,"_gl_DrawID",an),re.render(Ct[an]/yn,Wn[an])}else if(G.isInstancedMesh)re.renderInstances(ee,ge,G.count);else if(q.isInstancedBufferGeometry){let Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Wn=Math.min(q.instanceCount,Ct);re.renderInstances(ee,ge,Wn)}else re.render(ee,ge)};function he(T,k,q){T.transparent===!0&&T.side===Je&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Lr(T,k,q),T.side=Mi,T.needsUpdate=!0,Lr(T,k,q),T.side=Je):Lr(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),p=Zt.get(q),p.init(k),_.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let X=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ot=G.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let Et=ot[mt];he(Et,q,G),X.add(Et)}else he(ot,q,G),X.add(ot)}),_.pop(),p=null,X},this.compileAsync=function(T,k,q=null){let X=this.compile(T,k,q);return new Promise(G=>{function ot(){if(X.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){G(T);return}setTimeout(ot,10)}$t.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xn=null;function Gn(T){xn&&xn(T)}function Ah(){Ni.stop()}function Ch(){Ni.start()}let Ni=new ad;Ni.setAnimationLoop(Gn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){xn=T,Z.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},Z.addEventListener("sessionstart",Ah),Z.addEventListener("sessionend",Ch),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,P),p=Zt.get(T,_.length),p.init(k),_.push(p),At.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(At),xt=this.localClippingEnabled,st=rt.init(this.clippingPlanes,xt),m=ft.get(T,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ot=y.xr.getDepthSensingMesh();ot!==null&&za(ot,k,-1/0,y.sortObjects)}za(T,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,et),Kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Kt&&Nt.addToRenderList(m,T),this.info.render.frame++,st===!0&&rt.beginShadows();let q=p.state.shadowsArray;yt.render(q,T,k),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ot=k.cameras;if(G.length>0)for(let mt=0,Et=ot.length;mt<Et;mt++){let St=ot[mt];Ph(X,G,T,St)}Kt&&Nt.render(T);for(let mt=0,Et=ot.length;mt<Et;mt++){let St=ot[mt];Rh(m,T,St,St.viewport)}}else G.length>0&&Ph(X,G,T,k),Kt&&Nt.render(T),Rh(m,T,k);P!==null&&(N.updateMultisampleRenderTarget(P),N.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,k),te.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],st===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function za(T,k,q,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){X&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);let mt=K.update(T),Et=T.material;Et.visible&&m.push(T,mt,Et,q,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){let mt=K.update(T),Et=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(Et)){let St=mt.groups;for(let Ot=0,Gt=St.length;Ot<Gt;Ot++){let Tt=St[Ot],ee=Et[Tt.materialIndex];ee&&ee.visible&&m.push(T,mt,ee,q,Ut.z,Tt)}}else Et.visible&&m.push(T,mt,Et,q,Ut.z,null)}}let ot=T.children;for(let mt=0,Et=ot.length;mt<Et;mt++)za(ot[mt],k,q,X)}function Rh(T,k,q,X){let G=T.opaque,ot=T.transmissive,mt=T.transparent;p.setupLightsView(q),st===!0&&rt.setGlobalState(y.clippingPlanes,q),X&&It.viewport(R.copy(X)),G.length>0&&Ir(G,k,q),ot.length>0&&Ir(ot,k,q),mt.length>0&&Ir(mt,k,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ph(T,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new be(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Ie:Tn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[X.id],mt=X.viewport||R;ot.setSize(mt.z,mt.w);let Et=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(F),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&Nt.render(q);let St=y.toneMapping;y.toneMapping=yi;let Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&rt.setGlobalState(y.clippingPlanes,X),Ir(T,q,X),N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Tt=0,ee=k.length;Tt<ee;Tt++){let fe=k[Tt],ge=fe.object,tn=fe.geometry,re=fe.material,Ct=fe.group;if(re.side===Je&&ge.layers.test(X.layers)){let Wn=re.side;re.side=sn,re.needsUpdate=!0,Ih(ge,q,X,tn,re,Ct),re.side=Wn,re.needsUpdate=!0,Gt=!0}}Gt===!0&&(N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot))}y.setRenderTarget(Et),y.setClearColor(F,O),Ot!==void 0&&(X.viewport=Ot),y.toneMapping=St}function Ir(T,k,q){let X=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ot=T.length;G<ot;G++){let mt=T[G],Et=mt.object,St=mt.geometry,Ot=X===null?mt.material:X,Gt=mt.group;Et.layers.test(q.layers)&&Ih(Et,k,q,St,Ot,Gt)}}function Ih(T,k,q,X,G,ot){T.onBeforeRender(y,k,q,X,G,ot),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,k,q,X,T,ot),G.transparent===!0&&G.side===Je&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,y.renderBufferDirect(q,k,X,G,T,ot),G.side=Mi,G.needsUpdate=!0,y.renderBufferDirect(q,k,X,G,T,ot),G.side=Je):y.renderBufferDirect(q,k,X,G,T,ot),T.onAfterRender(y,k,q,X,G,ot)}function Lr(T,k,q){k.isScene!==!0&&(k=de);let X=Pt.get(T),G=p.state.lights,ot=p.state.shadowsArray,mt=G.state.version,Et=wt.getParameters(T,G.state,ot,k,q),St=wt.getProgramCacheKey(Et),Ot=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Vt),Ot=new Map,X.programs=Ot);let Gt=Ot.get(St);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===mt)return Nh(T,Et),Gt}else Et.uniforms=wt.getUniforms(T),T.onBeforeCompile(Et,y),Gt=wt.acquireProgram(Et,St),Ot.set(St,Gt),X.uniforms=Et.uniforms;let Tt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),Nh(T,Et),X.needsLights=sf(T),X.lightsStateVersion=mt,X.needsLights&&(Tt.ambientLightColor.value=G.state.ambient,Tt.lightProbe.value=G.state.probe,Tt.directionalLights.value=G.state.directional,Tt.directionalLightShadows.value=G.state.directionalShadow,Tt.spotLights.value=G.state.spot,Tt.spotLightShadows.value=G.state.spotShadow,Tt.rectAreaLights.value=G.state.rectArea,Tt.ltc_1.value=G.state.rectAreaLTC1,Tt.ltc_2.value=G.state.rectAreaLTC2,Tt.pointLights.value=G.state.point,Tt.pointLightShadows.value=G.state.pointShadow,Tt.hemisphereLights.value=G.state.hemi,Tt.directionalShadowMap.value=G.state.directionalShadowMap,Tt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Tt.spotShadowMap.value=G.state.spotShadowMap,Tt.spotLightMatrix.value=G.state.spotLightMatrix,Tt.spotLightMap.value=G.state.spotLightMap,Tt.pointShadowMap.value=G.state.pointShadowMap,Tt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function Lh(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Nh(T,k){let q=Pt.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function ef(T,k,q,X,G){k.isScene!==!0&&(k=de),N.resetTextureUnits();let ot=k.fog,mt=X.isMeshStandardMaterial?k.environment:null,Et=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ns,St=(X.isMeshStandardMaterial?W:S).get(X.envMap||mt),Ot=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,fe=!!q.morphAttributes.color,ge=yi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=y.toneMapping);let tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=tn!==void 0?tn.length:0,Ct=Pt.get(X),Wn=p.state.lights;if(st===!0&&(xt===!0||T!==M)){let dn=T===M&&X.id===w;rt.setState(X,T,dn)}let oe=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Wn.state.version||Ct.outputColorSpace!==Et||G.isBatchedMesh&&Ct.batching===!1||!G.isBatchedMesh&&Ct.batching===!0||G.isBatchedMesh&&Ct.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ct.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ct.instancing===!1||!G.isInstancedMesh&&Ct.instancing===!0||G.isSkinnedMesh&&Ct.skinning===!1||!G.isSkinnedMesh&&Ct.skinning===!0||G.isInstancedMesh&&Ct.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ct.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ct.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ct.instancingMorph===!1&&G.morphTexture!==null||Ct.envMap!==St||X.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Ot||Ct.vertexTangents!==Gt||Ct.morphTargets!==Tt||Ct.morphNormals!==ee||Ct.morphColors!==fe||Ct.toneMapping!==ge||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=X.version);let yn=Ct.currentProgram;oe===!0&&(yn=Lr(X,k,G));let ji=!1,an=!1,Ws=!1,ve=yn.getUniforms(),Nn=Ct.uniforms;if(It.useProgram(yn.program)&&(ji=!0,an=!0,Ws=!0),X.id!==w&&(w=X.id,an=!0),ji||M!==T){It.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),zf(at),Hf(at),ve.setValue(H,"projectionMatrix",at)):ve.setValue(H,"projectionMatrix",T.projectionMatrix),ve.setValue(H,"viewMatrix",T.matrixWorldInverse);let ci=ve.map.cameraPosition;ci!==void 0&&ci.setValue(H,Lt.setFromMatrixPosition(T.matrixWorld)),jt.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,an=!0,Ws=!0)}if(G.isSkinnedMesh){ve.setOptional(H,G,"bindMatrix"),ve.setOptional(H,G,"bindMatrixInverse");let dn=G.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ve.setValue(H,"boneTexture",dn.boneTexture,N))}G.isBatchedMesh&&(ve.setOptional(H,G,"batchingTexture"),ve.setValue(H,"batchingTexture",G._matricesTexture,N),ve.setOptional(H,G,"batchingIdTexture"),ve.setValue(H,"batchingIdTexture",G._indirectTexture,N),ve.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(H,"batchingColorTexture",G._colorsTexture,N));let qs=q.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Bt.update(G,q,yn),(an||Ct.receiveShadow!==G.receiveShadow)&&(Ct.receiveShadow=G.receiveShadow,ve.setValue(H,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Nn.envMap.value=St,Nn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Nn.envMapIntensity.value=k.environmentIntensity),an&&(ve.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&nf(Nn,Ws),ot&&X.fog===!0&&ht.refreshFogUniforms(Nn,ot),ht.refreshMaterialUniforms(Nn,X,V,Y,p.state.transmissionRenderTarget[T.id]),ys.upload(H,Lh(Ct),Nn,N)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ys.upload(H,Lh(Ct),Nn,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(H,"center",G.center),ve.setValue(H,"modelViewMatrix",G.modelViewMatrix),ve.setValue(H,"normalMatrix",G.normalMatrix),ve.setValue(H,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let dn=X.uniformsGroups;for(let ci=0,hi=dn.length;ci<hi;ci++){let Dh=dn[ci];z.update(Dh,yn),z.bind(Dh,yn)}}return yn}function nf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function sf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,k,q){Pt.get(T.texture).__webglTexture=k,Pt.get(T.depthTexture).__webglTexture=q;let X=Pt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){let q=Pt.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){P=T,E=k,C=q;let X=!0,G=null,ot=!1,mt=!1;if(T){let St=Pt.get(T);if(St.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(H.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(St.__hasExternalTextures)N.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Tt=T.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&Pt.has(Tt)&&(T.width!==Tt.image.width||T.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Gt=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?G=Gt[k][q]:G=Gt[k],ot=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?G=Pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[q]:G=Gt,R.copy(T.viewport),U.copy(T.scissor),L=T.scissorTest}else R.copy(lt).multiplyScalar(V).floor(),U.copy(it).multiplyScalar(V).floor(),L=Yt;if(It.bindFramebuffer(H.FRAMEBUFFER,G)&&X&&It.drawBuffers(T,G),It.viewport(R),It.scissor(U),It.setScissorTest(L),ot){let St=Pt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,q)}else if(mt){let St=Pt.get(T.texture),Ot=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,St.__webglTexture,q||0,Ot)}w=-1},this.readRenderTargetPixels=function(T,k,q,X,G,ot,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){It.bindFramebuffer(H.FRAMEBUFFER,Et);try{let St=T.texture,Ot=St.format,Gt=St.type;if(!jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&q>=0&&q<=T.height-G&&H.readPixels(k,q,X,G,Ft.convert(Ot),Ft.convert(Gt),ot)}finally{let St=P!==null?Pt.get(P).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,k,q,X,G,ot,mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let St=T.texture,Ot=St.format,Gt=St.type;if(!jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-X&&q>=0&&q<=T.height-G){It.bindFramebuffer(H.FRAMEBUFFER,Et);let Tt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Tt),H.bufferData(H.PIXEL_PACK_BUFFER,ot.byteLength,H.STREAM_READ),H.readPixels(k,q,X,G,Ft.convert(Ot),Ft.convert(Gt),0);let ee=P!==null?Pt.get(P).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,ee);let fe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Of(H,fe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Tt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ot),H.deleteBuffer(Tt),H.deleteSync(fe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,q=0){T.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-q),G=Math.floor(T.image.width*X),ot=Math.floor(T.image.height*X),mt=k!==null?k.x:0,Et=k!==null?k.y:0;N.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,mt,Et,G,ot),It.unbindTexture()},this.copyTextureToTexture=function(T,k,q=null,X=null,G=0){T.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],k=arguments[2],G=arguments[3]||0,q=null);let ot,mt,Et,St,Ot,Gt,Tt,ee,fe,ge=T.isCompressedTexture?T.mipmaps[G]:T.image;q!==null?(ot=q.max.x-q.min.x,mt=q.max.y-q.min.y,Et=q.isBox3?q.max.z-q.min.z:1,St=q.min.x,Ot=q.min.y,Gt=q.isBox3?q.min.z:0):(ot=ge.width,mt=ge.height,Et=ge.depth||1,St=0,Ot=0,Gt=0),X!==null?(Tt=X.x,ee=X.y,fe=X.z):(Tt=0,ee=0,fe=0);let tn=Ft.convert(k.format),re=Ft.convert(k.type),Ct;k.isData3DTexture?(N.setTexture3D(k,0),Ct=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(N.setTexture2DArray(k,0),Ct=H.TEXTURE_2D_ARRAY):(N.setTexture2D(k,0),Ct=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Wn=H.getParameter(H.UNPACK_ROW_LENGTH),oe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yn=H.getParameter(H.UNPACK_SKIP_PIXELS),ji=H.getParameter(H.UNPACK_SKIP_ROWS),an=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,St),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gt);let Ws=T.isDataArrayTexture||T.isData3DTexture,ve=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Nn=Pt.get(T),qs=Pt.get(k),dn=Pt.get(Nn.__renderTarget),ci=Pt.get(qs.__renderTarget);It.bindFramebuffer(H.READ_FRAMEBUFFER,dn.__webglFramebuffer),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<Et;hi++)Ws&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(T).__webglTexture,G,Gt+hi),T.isDepthTexture?(ve&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,G,fe+hi),H.blitFramebuffer(St,Ot,ot,mt,Tt,ee,ot,mt,H.DEPTH_BUFFER_BIT,H.NEAREST)):ve?H.copyTexSubImage3D(Ct,G,Tt,ee,fe+hi,St,Ot,ot,mt):H.copyTexSubImage2D(Ct,G,Tt,ee,fe+hi,St,Ot,ot,mt);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ve?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Ct,G,Tt,ee,fe,ot,mt,Et,tn,re,ge.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ct,G,Tt,ee,fe,ot,mt,Et,tn,ge.data):H.texSubImage3D(Ct,G,Tt,ee,fe,ot,mt,Et,tn,re,ge):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,Tt,ee,ot,mt,tn,re,ge.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,Tt,ee,ge.width,ge.height,tn,ge.data):H.texSubImage2D(H.TEXTURE_2D,G,Tt,ee,ot,mt,tn,re,ge);H.pixelStorei(H.UNPACK_ROW_LENGTH,Wn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,oe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ji),H.pixelStorei(H.UNPACK_SKIP_IMAGES,an),G===0&&k.generateMipmaps&&H.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q=null,X=null,G=0){return T.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,X=arguments[1]||null,T=arguments[2],k=arguments[3],G=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,q,X,G)},this.initRenderTarget=function(T){Pt.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,It.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},So=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var To=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new I,Ao=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends On{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,js=new I,ds=new I,fs=new I,ps=new bt,Ks=new bt,dd=new Ht,to=new I,Js=new I,eo=new I,Nu=new bt,gl=new bt,Du=new bt,Co=class extends Ee{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Ao(n,3,0,!1)),us.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;no(to.set(-.5,-.5,0),fs,o,ds,i,s),no(Js.set(.5,-.5,0),fs,o,ds,i,s),no(eo.set(.5,.5,0),fs,o,ds,i,s),Nu.set(0,0),gl.set(1,0),Du.set(1,1);let a=t.ray.intersectTriangle(to,Js,eo,!1,js);if(a===null&&(no(Js.set(-.5,.5,0),fs,o,ds,i,s),gl.set(0,1),a=t.ray.intersectTriangle(to,eo,Js,!1,js),a===null))return;let l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:vi.getInterpolation(js,to,Js,eo,Nu,gl,Du,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function no(r,t,e,n,i,s){ps.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*ps.x-i*ps.y,Ks.y=i*ps.x+s*ps.y):Ks.copy(ps),r.copy(t),r.x+=Ks.x,r.y+=Ks.y,r.applyMatrix4(dd)}var Wi=class extends rn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ne,h=Ne,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=class extends Re{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new Ht,Bu=new Ht,io=[],Uu=new ti,Nv=new Ht,Qs=new dt,tr=new Si,Ti=class extends dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Uu.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),tr.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ms),Bu.multiplyMatrices(n,ms),Qs.matrixWorld=Bu,Qs.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=s,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(i*this.count),i,this.count,qc,Fn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fr=class extends On{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new Ht,yc=new or,so=new Si,ro=new I,Ts=class extends Ee{constructor(t=new De,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,t.ray.intersectsSphere(so)===!1)return;Fu.copy(i).invert(),yc.copy(t.ray).applyMatrix4(Fu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);ro.fromBufferAttribute(d,m),Ou(ro,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)ro.fromBufferAttribute(d,g),Ou(ro,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ou(r,t,e,n,i,s,o){let a=yc.distanceSqToPoint(r);if(a<e){let l=new I;yc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends rn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class r extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class r extends De{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function x(){let y=new I,A=new I,E=0,C=(e-t)/n;for(let P=0;P<=s;P++){let w=[],M=P/s,R=M*(e-t)+t;for(let U=0;U<=i;U++){let L=U/i,F=L*l+a,O=Math.sin(F),B=Math.cos(F);A.x=R*O,A.y=-M*n+m,A.z=R*B,d.push(A.x,A.y,A.z),y.set(O,C,B).normalize(),u.push(y.x,y.y,y.z),f.push(L,1-M),w.push(g++)}v.push(w)}for(let P=0;P<i;P++)for(let w=0;w<s;w++){let M=v[w][P],R=v[w+1][P],U=v[w+1][P+1],L=v[w][P+1];(t>0||w!==0)&&(h.push(M,R,L),E+=3),(e>0||w!==s-1)&&(h.push(R,U,L),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){let A=g,E=new bt,C=new I,P=0,w=y===!0?t:e,M=y===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let R=g;for(let U=0;U<=i;U++){let F=U/i*l+a,O=Math.cos(F),B=Math.sin(F);C.x=w*B,C.y=m*M,C.z=w*O,d.push(C.x,C.y,C.z),u.push(0,M,0),E.x=O*.5+.5,E.y=B*.5*M+.5,f.push(E.x,E.y),g++}for(let U=0;U<i;U++){let L=A+U,F=R+U;y===!0?h.push(F,F+1,L):h.push(F+1,F,L),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Po=class r extends ne{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zn=class r extends De{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let E=A/e;d.x=-t*Math.cos(i+E*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+E*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+y,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let _=h[p][x+1],y=h[p][x],A=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,E),(p!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Io=class r extends De{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let v=g/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Lo=class extends se{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Rt=class extends On{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var No=class extends On{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function oo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Dv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var As=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends As{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:s=t,a=2*e-n;break;case Hh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:o=t,l=2*n-e;break;case Hh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+x*o[c+A]+_*o[l+A]+y*o[d+A];return s}},Mc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},bc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(e,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case ic:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Dv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ic;var qi=class extends Cn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=fo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Cn{};wc.prototype.ValueTypeName="color";var Ec=class extends Cn{};Ec.prototype.ValueTypeName="number";var Sc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)we.slerpFlat(s,0,o,c-a,o,c,l);return s}},Do=class extends Cn{InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=fo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Cn{};Tc.prototype.ValueTypeName="vector";var Ac=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Bv=new Ac,Cc=class{constructor(t){this.manager=t!==void 0?t:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bo=class extends Cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vl=new Ht,zu=new I,Hu=new I,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rc=class extends mr{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=mo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Rs=class extends Cs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ku=new Ht,er=new I,xl=new I,Pc=class extends mr{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),xl.copy(n.position),xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xl),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}},Rn=class extends Cs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ic=class extends mr{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Is=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vu(){return performance.now()}var Jc="\\[\\]\\.:\\/",Uv=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Fv="[^"+Jc.replace("\\.","")+"]",Ov=/((?:WC+[\/:])*)/.source.replace("WC",Qc),zv=/(WCOD+)?/.source.replace("WCOD",Fv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),kv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Vv=new RegExp("^"+Ov+zv+Hv+kv+"$"),Gv=["material","materials","bones","map"],Lc=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uv,"")}static parseTrackName(t){let e=Vv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Gv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Lc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var Gu=new Ht,Uo=class{constructor(t,e,n=0,i=1/0){this.ray=new or(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(t,e=!0,n=[]){return Nc(t,this,n,e),n.sort(Wu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Nc(t[i],this,n,e);return n.sort(Wu),n}};function Wu(r,t){return r.distance-t.distance}function Nc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Nc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);var Vo=class{constructor(){D(this,"ws",null);D(this,"handlers",new Map);D(this,"queue",[]);D(this,"pingTimer",null);D(this,"reconnectDelay",1e3);D(this,"closedByUs",!1);D(this,"name","");D(this,"token",null);D(this,"latency",0);D(this,"connected",!1);D(this,"onStatusChange",null);D(this,"roomCreate",!1);D(this,"roomCode",null)}connect(t,e={}){this.name=t,this.roomCreate=!!e.create,this.roomCode=e.room??null,this.closedByUs=!1,this.token=sessionStorage.getItem("rr_token")??null,this.open()}open(){let e=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;try{this.ws=new WebSocket(e)}catch{this.scheduleReconnect();return}this.ws.onopen=()=>{this.connected=!0,this.reconnectDelay=1e3,this.onStatusChange?.(!0);let n={type:"hello",name:this.name,...this.token?{token:this.token}:{},...this.roomCreate?{create:!0}:{},...this.roomCode?{room:this.roomCode}:{}};this.ws.send(JSON.stringify(n));for(let i of this.queue)this.ws.send(JSON.stringify(i));this.queue=[],this.startPing()},this.ws.onmessage=n=>{let i;try{i=JSON.parse(n.data)}catch{return}i.type==="welcome"&&(this.token=i.token,sessionStorage.setItem("rr_token",i.token)),i.type==="pong"&&(this.latency=Math.round(performance.now()-i.t));for(let s of this.handlers.get(i.type)??[])s(i)},this.ws.onclose=n=>{this.connected=!1,this.stopPing(),n.code===4001&&(this.closedByUs=!0),this.onStatusChange?.(!1),this.closedByUs||this.scheduleReconnect()},this.ws.onerror=()=>{}}scheduleReconnect(){setTimeout(()=>{!this.closedByUs&&!this.connected&&this.open()},this.reconnectDelay),this.reconnectDelay=Math.min(8e3,this.reconnectDelay*1.7)}startPing(){this.stopPing(),this.pingTimer=window.setInterval(()=>this.send({type:"ping",t:performance.now()}),4e3)}stopPing(){this.pingTimer&&(clearInterval(this.pingTimer),this.pingTimer=null)}on(t,e){let n=this.handlers.get(t)??[];n.push(e),this.handlers.set(t,n)}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify(t)):t.type!=="ping"&&this.queue.push(t)}disconnect(){this.closedByUs=!0,this.stopPing(),this.ws?.close()}};var vr=class r extends dt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Le;let n=this,i=e.color!==void 0?new gt(e.color):new gt(8355711),s=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||r.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new wn,d=new I,u=new I,f=new I,g=new Ht,v=new I(0,0,-1),m=new ie,p=new I,x=new I,_=new ie,y=new Ht,A=this.camera,E=new be(s,o,{samples:c,type:Ie}),C=new se({name:l.name!==void 0?l.name:"unspecified",uniforms:ze.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=E.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=y,this.material=C,this.onBeforeRender=function(P,w,M){if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(u,f),p.dot(d)>0)return;p.reflect(d).negate(),p.add(u),g.extractRotation(M.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(f),x.subVectors(u,v),x.reflect(d).negate(),x.add(u),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(d),A.lookAt(x),A.far=M.far,A.updateMatrixWorld(),A.projectionMatrix.copy(M.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(A.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let R=A.projectionMatrix;_.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],_.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],_.z=-1,_.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(_)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,n.visible=!1;let U=P.getRenderTarget(),L=P.xr.enabled,F=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(E),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(w,A),P.xr.enabled=L,P.shadowMap.autoUpdate=F,P.setRenderTarget(U);let O=M.viewport;O!==void 0&&P.state.viewport(O),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};vr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Ge(r){let t=r>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ai=class{constructor(t,e){D(this,"p");D(this,"size");this.size=t,this.p=new Float32Array(t*t);for(let n=0;n<this.p.length;n++)this.p[n]=e()}at(t,e){let n=this.size;return this.p[(e&n-1)*n+(t&n-1)]}sample(t,e){let n=Math.floor(t),i=Math.floor(e),s=t-n,o=e-i,a=s*s*(3-2*s),l=o*o*(3-2*o),c=this.at(n,i),h=this.at(n+1,i),d=this.at(n,i+1),u=this.at(n+1,i+1);return(c+(h-c)*a)*(1-l)+(d+(u-d)*a)*l}fbm(t,e,n=4,i=2,s=.5){let o=0,a=.5,l=1,c=0;for(let h=0;h<n;h++)o+=a*this.sample(t*l,e*l),c+=a,a*=s,l*=i;return o/c}};function $e(r,t){let e=document.createElement("canvas");e.width=r,e.height=t;let n=e.getContext("2d");return[e,n]}function Go(r,t,e,n=2){let[i,s]=$e(t,e),o=s.createImageData(t,e),a=(l,c)=>r[(c+e)%e*t+(l+t)%t];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let h=a(c-1,l-1)+2*a(c-1,l)+a(c-1,l+1)-(a(c+1,l-1)+2*a(c+1,l)+a(c+1,l+1)),d=a(c-1,l-1)+2*a(c,l-1)+a(c+1,l-1)-(a(c-1,l+1)+2*a(c,l+1)+a(c+1,l+1)),u=h*n,f=d*n,g=1,v=Math.hypot(u,f,g),m=(l*t+c)*4;o.data[m]=(u/v*.5+.5)*255,o.data[m+1]=(f/v*.5+.5)*255,o.data[m+2]=(g/v*.5+.5)*255,o.data[m+3]=255}return s.putImageData(o,0,0),In(i,t,e)}function In(r,t,e,n=1){let i=new An(r);return i.wrapS=i.wrapT=Sn,i.repeat.set(n,n),i.colorSpace=Te,i.anisotropy=4,i}function ei(r={}){let t=r.size??512,e=r.plankCount??8,n=r.base??[96,62,38],i=Ge(r.seed??7),s=new Ai(256,Ge(r.seed?r.seed+1:8)),o=new Ai(256,Ge(r.seed?r.seed+2:9)),[a,l]=$e(t,t),[c,h]=$e(t,t),d=l.createImageData(t,t),u=h.createImageData(t,t),f=new Float32Array(t*t),g=t/e,v=Array.from({length:e},()=>i()*t),m=Array.from({length:e},()=>.82+i()*.36);for(let y=0;y<t;y++){let A=Math.min(e-1,Math.floor(y/g)),E=y-A*g;for(let C=0;C<t;C++){let P=(C+v[A])*.012,w=y*.22,M=o.fbm(P,w,4),R=o.fbm((C+v[A])*.05,y*.9,2),U=Math.pow(Math.max(0,1-Math.hypot(C%(t/2)-t/4,E-g/2)/18),3),L=m[A]*(.72+M*.55+R*.12-U*.35-(r.dark??0)),O=Math.min(E,g-E)<1.6?.45:0,B=(C+v[A])%Math.floor(t/2.2)<1.5?.3:0;L=Math.max(0,L-O-B);let Y=(y*t+C)*4;d.data[Y]=Math.min(255,n[0]*L*1.12),d.data[Y+1]=Math.min(255,n[1]*L*1.1),d.data[Y+2]=Math.min(255,n[2]*L),d.data[Y+3]=255;let V=.42+M*.3+O+B-(r.gloss??.12),$=Math.max(.08,Math.min(1,V))*255;u.data[Y]=u.data[Y+1]=u.data[Y+2]=$,u.data[Y+3]=255,f[y*t+C]=M*.7+R*.2-O-U*.5+B*.4}}l.putImageData(d,0,0),h.putImageData(u,0,0);let p=In(a,t,t);p.colorSpace=Te;let x=In(c,t,t);x.colorSpace=nn;let _=Go(f,t,t,1.6);return{map:p,roughness:x,normal:_}}function fd(r=512,t=3){let e=Ge(t),n=new Ai(256,Ge(t+1)),[i,s]=$e(r,r),[o,a]=$e(r,r),l=s.createImageData(r,r),c=a.createImageData(r,r),h=new Float32Array(r*r),d=[];for(let v=0;v<240;v++)d.push({x:e()*r,y:e()*r,len:12+e()*90,a:e()*Math.PI,w:e()<.8?1:2});for(let v=0;v<r;v++)for(let m=0;m<r;m++){let p=n.fbm(m*.02,v*.02,4),x=.5+p*.25,_=.34+p*.18,y=p*.35;for(let P of d){let w=m-P.x,M=v-P.y,R=w*Math.cos(P.a)+M*Math.sin(P.a),U=-w*Math.sin(P.a)+M*Math.cos(P.a);if(R>0&&R<P.len&&Math.abs(U)<P.w*.5){let L=(1-Math.abs(U)/(P.w*.5))*.5;x+=L*.22,_-=L*.12,y+=L*.4}}let A=(v*r+m)*4,E=Math.max(0,Math.min(1,x));l.data[A]=70*E+18,l.data[A+1]=70*E+18,l.data[A+2]=74*E+20,l.data[A+3]=255;let C=Math.max(.08,Math.min(1,_))*255;c.data[A]=c.data[A+1]=c.data[A+2]=C,c.data[A+3]=255,h[v*r+m]=y}s.putImageData(l,0,0),a.putImageData(c,0,0);let u=In(i,r,r),f=In(o,r,r);f.colorSpace=nn;let g=Go(h,r,r,1.2);return{map:u,roughness:f,normal:g}}function pd(r=512,t=11){let e=Ge(t),n=new Ai(256,Ge(t+1)),[i,s]=$e(r,r),[o,a]=$e(r,r),l=s.createImageData(r,r),c=a.createImageData(r,r),h=new Float32Array(r*r),d=r/4,u=r/8,f=()=>{let x=e();return x<.3?[96,44,36]:x<.6?[110,55,42]:x<.85?[88,42,38]:[70,46,48]};for(let x=0;x<r;x++){let _=Math.floor(x/u),y=_%2*d*.5;for(let A=0;A<r;A++){let E=(A+y)%d,C=x%u,P=E<3||E>d-3||C<3||C>u-3,w=n.fbm(A*.03,x*.03,4),M,R,U,L,F;if(P){let B=.8+w*.3;M=62*B,R=58*B,U=54*B,L=.85,F=.15}else{let B=g(_,Math.floor((A+y)/d)),Y=.75+w*.45;M=B[0]*Y,R=B[1]*Y,U=B[2]*Y,L=.72+w*.15,F=.85}let O=(x*r+A)*4;l.data[O]=M,l.data[O+1]=R,l.data[O+2]=U,l.data[O+3]=255,c.data[O]=c.data[O+1]=c.data[O+2]=L*255,c.data[O+3]=255,h[x*r+A]=F}}function g(x,_){let y=Ge(x*977+_*131+5)();return y<.3?[96,44,36]:y<.6?[112,56,42]:y<.85?[86,40,36]:[72,48,50]}s.putImageData(l,0,0),a.putImageData(c,0,0);let v=In(i,r,r),m=In(o,r,r);m.colorSpace=nn;let p=Go(h,r,r,2.2);return{map:v,roughness:m,normal:p}}function md(r=512,t=21,e=[58,50,46]){let n=new Ai(256,Ge(t)),[i,s]=$e(r,r),[o,a]=$e(r,r),l=s.createImageData(r,r),c=a.createImageData(r,r);for(let u=0;u<r;u++)for(let f=0;f<r;f++){let g=n.fbm(f*.012,u*.012,5),v=n.fbm(f*.004,u*.004,3),m=.62+g*.35-v*.25,p=(u*r+f)*4;l.data[p]=e[0]*m,l.data[p+1]=e[1]*m,l.data[p+2]=e[2]*m,l.data[p+3]=255;let x=(.8+g*.15)*255;c.data[p]=c.data[p+1]=c.data[p+2]=x,c.data[p+3]=255}s.putImageData(l,0,0),a.putImageData(c,0,0);let h=In(i,r,r),d=In(o,r,r);return d.colorSpace=nn,{map:h,roughness:d}}function Wo(r=512,t=31,e=[90,30,30]){let n=new Ai(256,Ge(t)),[i,s]=$e(r,r),[o,a]=$e(r,r),l=s.createImageData(r,r),c=a.createImageData(r,r),h=new Float32Array(r*r);for(let g=0;g<r;g++)for(let v=0;v<r;v++){let m=(Math.floor(v/3)%2+Math.floor(g/3)%2)%2===0?1:.86,p=n.fbm(v*.03,g*.03,4),x=m*(.72+p*.4),_=(g*r+v)*4;l.data[_]=e[0]*x,l.data[_+1]=e[1]*x,l.data[_+2]=e[2]*x,l.data[_+3]=255;let y=(.85+p*.1)*255;c.data[_]=c.data[_+1]=c.data[_+2]=y,c.data[_+3]=255,h[g*r+v]=m*.6+p*.3}s.putImageData(l,0,0),a.putImageData(c,0,0);let d=In(i,r,r),u=In(o,r,r);u.colorSpace=nn;let f=Go(h,r,r,1);return{map:d,roughness:u,normal:f}}function xr(r=128,t=.15){let[e,n]=$e(r,r),i=n.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(t,"rgba(255,255,255,0.9)"),i.addColorStop(.4,"rgba(255,255,255,0.28)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,r,r);let s=new An(e);return s.colorSpace=Te,s}function gd(r=128,t=5){let e=Ge(t),[n,i]=$e(r,r),s=i.createImageData(r,r),o=Array.from({length:5},()=>({x:r/2+(e()-.5)*r*.3,y:r/2+(e()-.5)*r*.3,r:r*(.2+e()*.2)}));for(let l=0;l<r;l++)for(let c=0;c<r;c++){let h=0;for(let u of o)h=Math.max(h,1-Math.hypot(c-u.x,l-u.y)/u.r);h=Math.max(0,Math.min(1,h));let d=(l*r+c)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=Math.pow(h,1.4)*255}i.putImageData(s,0,0);let a=new An(n);return a.colorSpace=Te,a}function qo(r,t="#ff2d55",e=512){let[n,i]=$e(e,e/4);i.font=`bold ${Math.floor(e/6)}px Georgia, serif`,i.textAlign="center",i.textBaseline="middle",i.shadowColor=t,i.shadowBlur=28,i.strokeStyle="#ffffff",i.lineWidth=3,i.strokeText(r,e/2,e/8),i.fillStyle=t,i.fillText(r,e/2,e/8),i.shadowBlur=0;let s=new An(n);return s.colorSpace=Te,s}function vd(r,t){let[n,i]=$e(8,8);i.font="bold 34px Arial";let s=Math.ceil(i.measureText(r).width)+12*2,[o,a]=$e(Math.max(64,s),64);a.font="bold 34px Arial",a.textAlign="center",a.textBaseline="middle",a.fillStyle="rgba(0,0,0,0.55)",a.fillRect(0,0,o.width,64),a.strokeStyle=t,a.lineWidth=3,a.strokeRect(1.5,1.5,o.width-3,61),a.fillStyle="#ffffff",a.fillText(r,o.width/2,34);let l=new An(o);return l.colorSpace=Te,l}var Xo=class{constructor(t){this.quality=t;D(this,"group",new Xt);D(this,"colliders",[]);D(this,"envMaterials",[]);D(this,"lights",[]);D(this,"neon");D(this,"neonBulbs",[]);D(this,"dust");D(this,"volumetrics",[]);D(this,"chairs",new Xt);D(this,"time",0);this.chairs.name="match-chairs",this.group.add(this.chairs)}build(t){t("Pouring the drinks",.1),this.buildFloor(),t("Laying the brick",.25),this.buildWalls(),t("Stocking the bar",.4),this.buildBarCounter(),t("Polishing the table",.55),this.buildGameTable(),this.buildBooths(),t("Chalking the cues",.7),this.buildPoolTable(),this.buildDecor(),t("Hanging the lights",.85),this.buildLights(),this.quality.volumetrics&&this.buildVolumetrics(),this.buildDust(),this.freezeMatrices(this.group),t("Last call",1)}freezeMatrices(t){t.traverse(e=>{e.matrixAutoUpdate=!1,e.updateMatrix()})}buildFloor(){let t=ei({size:1024,plankCount:9,base:[122,78,44],seed:42,gloss:.2});t.map.repeat.set(5,4),t.roughness.repeat.set(5,4),t.normal.repeat.set(5,4);let e=new Rt({map:t.map,roughnessMap:t.roughness,normalMap:t.normal,roughness:.42,metalness:.05,envMapIntensity:.7,normalScale:new bt(.8,.8)});this.envMaterials.push(e);let n=new dt(new Ve(23,17),e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="floor",this.group.add(n)}buildWalls(){let t=pd(512,11);t.map.repeat.set(6,2),t.normal.repeat.set(6,2);let e=new Rt({map:t.map,roughnessMap:t.roughness,normalMap:t.normal,roughness:1,metalness:0}),n=md(512,21,[64,54,48]);n.map.repeat.set(4,2);let i=new Rt({map:n.map,roughnessMap:n.roughness,roughness:1,metalness:0}),s=22,o=15.4,a=4.2,l=(v,m,p,x,_,y,A)=>{let E=new dt(new Ve(v,m),p);return E.position.set(x,_,y),E.rotation.y=A,E.receiveShadow=!0,this.group.add(E),E};l(s,a,e,0,a/2,-o/2,0),l(s,a,i,0,a/2,o/2,Math.PI),l(o,a,i,s/2,a/2,0,-Math.PI/2),l(o,a,i,-s/2,a/2,0,Math.PI/2);let c=new Rt({map:n.map,roughness:1,color:4866104}),h=new dt(new Ve(s,o),c);h.rotation.x=Math.PI/2,h.position.y=a,this.group.add(h);let d=ei({size:256,plankCount:1,base:[58,38,24],seed:77,dark:.15}),u=new Rt({map:d.map,roughness:.8,metalness:0});for(let v=-2;v<=2;v++){let m=new dt(new kt(.34,.28,o),u);m.position.set(v*4.4,a-.14,0),this.group.add(m)}let f=new Rt({map:d.map,roughness:.55,metalness:.05,envMapIntensity:.4});this.envMaterials.push(f);let g=(v,m,p,x)=>{let _=new dt(new kt(v,1.05,.07),f);_.position.set(m,.55,p),_.rotation.y=x,this.group.add(_)};g(s-.1,0,-o/2+.05,0),g(s-.1,0,o/2-.05,0),g(o-.1,-s/2+.05,0,Math.PI/2),g(o-.1,s/2-.05,0,Math.PI/2),this.colliders.push({kind:"aabb",x:0,z:-o/2-.5,hw:s,hd:.5}),this.colliders.push({kind:"aabb",x:0,z:o/2+.5,hw:s,hd:.5}),this.colliders.push({kind:"aabb",x:-s/2-.5,z:0,hw:.5,hd:o}),this.colliders.push({kind:"aabb",x:s/2+.5,z:0,hw:.5,hd:o})}buildBarCounter(){let t=ei({size:512,plankCount:3,base:[70,42,24],seed:88,gloss:.22}),e=new Rt({map:t.map,roughness:.5,metalness:.05}),n=new Rt({map:t.map,roughnessMap:t.roughness,normalMap:t.normal,roughness:.3,metalness:.1,envMapIntensity:.9});this.envMaterials.push(n);let i=new Xt,s=0,o=-5.6,a=9,l=.85,c=1.06,h=new dt(new kt(a,c-.08,l),e);h.position.set(s,(c-.08)/2,o),h.castShadow=h.receiveShadow=!0,i.add(h);let d=new dt(new kt(a+.22,.09,l+.3),n);d.position.set(s,c-.045,o),d.castShadow=d.receiveShadow=!0,i.add(d);let u=new Rt({color:11570494,metalness:1,roughness:.25,envMapIntensity:1.4});this.envMaterials.push(u);let f=new dt(new ne(.025,.025,a,12),u);f.rotation.z=Math.PI/2,f.position.set(s,.18,o+l/2+.14),i.add(f);for(let P of[-1,1]){let w=new dt(new zn(.028,10,10),u);w.position.set(s+P*a/2,.18,o+l/2+.14),i.add(w)}this.group.add(i),this.colliders.push({kind:"aabb",x:s,z:o,hw:a/2+.3,hd:l/2+.25});let g=new Rt({map:t.map,roughness:.6,metalness:0}),v=new Rt({color:10465976,metalness:1,roughness:.06,envMapIntensity:1.2});if(this.envMaterials.push(v),this.quality.reflectors>=1){let P=new vr(new Ve(8.6,2.4),{textureWidth:512,textureHeight:512,color:7829367});P.position.set(0,2.15,-7.62),this.group.add(P)}else{let P=new dt(new Ve(8.6,2.4),v);P.position.set(0,2.15,-7.62),this.group.add(P)}let m=new Rt({color:16777215,transparent:!0,opacity:.42,roughness:.06,metalness:.1,envMapIntensity:1.8,side:Je});this.envMaterials.push(m);let p=new ne(.032,.036,.26,10),x=new ne(.012,.026,.12,8),_=Ge(1234),y=[8014354,4151838,5905950,10123818,2771546,6957658];for(let P=0;P<3;P++){let w=1.25+P*.62,M=new dt(new kt(8.4,.05,.34),g);M.position.set(0,w,-7.4),M.castShadow=!0,this.group.add(M);let R=26,U=new Ti(p,m,R),L=new Ti(x,m,R),F=new Ht,O=new we,B=[];for(let Y=0;Y<R;Y++){let V=-4+Y/(R-1)*8+(_()-.5)*.12,$=-7.4+(_()-.5)*.12,et=.85+_()*.35,lt=new gt(y[Math.floor(_()*y.length)]);B.push(lt),O.setFromEuler(new ke(0,_()*.4-.2,_()*.06-.03)),F.compose(new I(V,w+.05+.13*et,$),O,new I(et,et,et)),U.setMatrixAt(Y,F),U.setColorAt(Y,lt),F.compose(new I(V,w+.05+(.26+.06)*et,$),O,new I(et,et,et)),L.setMatrixAt(Y,F),L.setColorAt(Y,lt)}U.instanceColor&&(U.instanceColor.needsUpdate=!0),L.instanceColor&&(L.instanceColor.needsUpdate=!0),this.group.add(U,L)}let A=new ne(.045,.04,.14,10,1,!0),E=new Ti(A,m,14),C=new Ht;for(let P=0;P<14;P++)C.makeTranslation(-3.6+P*.55+(_()-.5)*.1,c+.07,o-.08+(_()-.5)*.2),E.setMatrixAt(P,C);this.group.add(E)}buildGameTable(){let t=ei({size:512,plankCount:1,base:[88,52,28],seed:55,gloss:.15}),e=new Rt({map:t.map,roughnessMap:t.roughness,normalMap:t.normal,roughness:.32,metalness:.06,envMapIntensity:.85});this.envMaterials.push(e);let n=new Rt({map:t.map,roughness:.5,metalness:.05,color:11569766}),i=new Xt,s=new dt(new ne(1.42,1.38,.09,48),e);s.position.y=.78,s.castShadow=s.receiveShadow=!0,i.add(s);let o=new dt(new ne(1.45,1.45,.05,48),n);o.position.y=.73,o.castShadow=!0,i.add(o);let a=new dt(new ne(.28,.42,.72,20),n);a.position.y=.36,a.castShadow=!0,i.add(a);let l=new dt(new ne(.62,.68,.08,24),n);l.position.y=.04,l.castShadow=l.receiveShadow=!0,i.add(l);let c=new ne(.028,.028,.008,16),h=new Rt({roughness:.4,metalness:.25,envMapIntensity:.8});this.envMaterials.push(h);let d=[11546672,3170480,3186768,13684944,2105376],u=Ge(99),f=new Ti(c,h,30),g=new Ht,v=new we;for(let p=0;p<30;p++){let x=Math.floor(p/5),_=p%5,y=x*2.399,A=.95+x%3*.13;g.compose(new I(Math.cos(y)*A,.83+_*.009,Math.sin(y)*A),v.setFromEuler(new ke(0,u()*3,0)),new I(1,1,1)),f.setMatrixAt(p,g),f.setColorAt(p,new gt(d[x%d.length]))}f.instanceColor&&(f.instanceColor.needsUpdate=!0),i.add(f);let m=new Rt({color:15262936,roughness:.35});for(let p=0;p<3;p++){let x=new dt(new kt(.09,.002,.13),m);x.position.set(.5+p*.03,.828+p*.0022,.35-p*.05),x.rotation.y=p*.7,x.castShadow=!0,i.add(x)}this.group.add(i),this.colliders.push({kind:"circle",x:0,z:0,r:1.62})}buildChairsForPlayers(t){this.chairs.clear();let e=ei({size:256,plankCount:1,base:[70,44,26],seed:66}),n=new Rt({map:e.map,roughness:.55,metalness:.04}),i=[],s=2.55;for(let o=0;o<t;o++){let a=o/t*Math.PI*2+Math.PI/t,l=Math.sin(a)*s,c=Math.cos(a)*s,h=a+Math.PI,d=new Xt,u=new dt(new kt(.5,.06,.5),n);u.position.y=.46,u.castShadow=u.receiveShadow=!0,d.add(u);let f=new dt(new kt(.5,.55,.05),n);f.position.set(0,.75,-.23),f.castShadow=!0,d.add(f);for(let g of[-.21,.21])for(let v of[-.21,.21]){let m=new dt(new kt(.05,.46,.05),n);m.position.set(g,.23,v),m.castShadow=!0,d.add(m)}d.position.set(l,0,c),d.rotation.y=h,this.chairs.add(d),i.push({pos:new I(l*1.18,0,c*1.18),yaw:h})}return this.freezeMatrices(this.chairs),i}buildBooths(){let t=Wo(512,31,[92,30,32]),e=new Rt({map:t.map,roughnessMap:t.roughness,normalMap:t.normal,roughness:.75}),n=new Rt({map:t.map,color:6965802,roughness:.6}),i=(s,o,a)=>{let l=new Xt,c=new dt(new kt(2.6,.45,.7),e);c.position.y=.3,c.castShadow=c.receiveShadow=!0,l.add(c);let h=new dt(new kt(2.6,.95,.22),e);h.position.set(0,.85,-.32),h.castShadow=!0,l.add(h);let d=new dt(new kt(1.5,.07,.8),n);d.position.set(0,.74,.95),d.castShadow=d.receiveShadow=!0,l.add(d);let u=new dt(new kt(.12,.74,.6),n);u.position.set(0,.37,.95),l.add(u),l.position.set(s,0,o),l.rotation.y=a,this.group.add(l);let f=Math.abs(Math.cos(a))*1.3+Math.abs(Math.sin(a))*2.4,g=Math.abs(Math.sin(a))*1.3+Math.abs(Math.cos(a))*2.4;this.colliders.push({kind:"aabb",x:s,z:o,hw:f/2,hd:g/2})};i(-8.4,-2.6,Math.PI/2),i(-8.4,2.6,Math.PI/2),i(8.4,-2.6,-Math.PI/2),i(8.4,2.6,-Math.PI/2)}buildPoolTable(){let t=new Xt,e=Wo(512,71,[26,84,48]),n=new Rt({map:e.map,roughnessMap:e.roughness,normalMap:e.normal,roughness:.95}),i=new Rt({map:ei({size:256,base:[60,36,20],seed:78}).map,roughness:.45,metalness:.05}),s=new dt(new kt(2.24,.06,1.24),n);s.position.y=.8,s.receiveShadow=!0,t.add(s);let o=(g,v,m,p)=>{let x=new dt(new kt(g,.12,v),i);x.position.set(m,.81,p),x.castShadow=x.receiveShadow=!0,t.add(x)};o(2.44,.12,0,-.68),o(2.44,.12,0,.68),o(.12,1.24,-1.16,0),o(.12,1.24,1.16,0);for(let g of[-1,1])for(let v of[-.5,.5]){let m=new dt(new kt(.16,.78,.16),i);m.position.set(g*1.02,.39,v*.55),m.castShadow=!0,t.add(m)}let a=new zn(.028,14,14),l=new Rt({roughness:.15,metalness:.1,envMapIntensity:1.2});this.envMaterials.push(l);let c=[16777215,15910144,1989288,11542560,8003712,1998912,8396832,2105376],h=Ge(314),d=new Ti(a,l,c.length),u=new Ht;for(let g=0;g<c.length;g++)u.makeTranslation(-.7+h()*1.4,.845,-.35+h()*.7),d.setMatrixAt(g,u),d.setColorAt(g,new gt(c[g]));d.instanceColor&&(d.instanceColor.needsUpdate=!0),t.add(d);let f=new dt(new ne(.008,.014,1.45,8),i);f.position.set(1.28,.72,.5),f.rotation.z=.22,f.castShadow=!0,t.add(f),t.position.set(6.4,0,4.9),t.rotation.y=.5,this.group.add(t),this.colliders.push({kind:"aabb",x:6.4,z:4.9,hw:1.5,hd:1})}buildDecor(){let[t,e]=[document.createElement("canvas"),null];t.width=t.height=256;let n=t.getContext("2d"),i=128;for(let A=0;A<8;A++)n.beginPath(),n.arc(i,i,118-A*14,0,Math.PI*2),n.fillStyle=["#151515","#d8c25a","#151515","#d8c25a","#1c6834","#d8c25a","#1c6834","#c03030"][A],n.fill();n.strokeStyle="rgba(200,190,60,0.8)",n.lineWidth=3;for(let A=0;A<20;A++){let E=A/20*Math.PI*2;n.beginPath(),n.moveTo(i,i),n.lineTo(i+Math.cos(E)*118,i+Math.sin(E)*118),n.stroke()}n.beginPath(),n.arc(i,i,10,0,Math.PI*2),n.fillStyle="#a02020",n.fill();let s=new An(t);s.colorSpace=Te;let o=new dt(new pr(.28,32),new Rt({map:s,roughness:.9}));o.position.set(-10.85,1.75,-1.6),o.rotation.y=Math.PI/2,this.group.add(o);let a=(A,E,C)=>{let P=document.createElement("canvas");P.width=128,P.height=96;let w=P.getContext("2d"),M=w.createLinearGradient(0,0,128,96);M.addColorStop(0,E),M.addColorStop(1,C),w.fillStyle=M,w.fillRect(0,0,128,96);let R=Ge(A);for(let L=0;L<400;L++)w.fillStyle=`rgba(${Math.floor(R()*255)},${Math.floor(R()*200)},${Math.floor(R()*150)},0.08)`,w.fillRect(R()*128,R()*96,8,8);let U=new An(P);return U.colorSpace=Te,new Rt({map:U,roughness:.9})},l=new Rt({color:2759696,roughness:.5,metalness:.3}),c=(A,E,C,P,w)=>{let M=new Xt,R=new dt(new kt(.86,.66,.05),l),U=new dt(new Ve(.74,.54),a(w,"#3a2c1e","#161020"));U.position.z=.03,M.add(R,U),M.position.set(A,E,C),M.rotation.y=P,this.group.add(M)};c(-10.9,2,1.8,Math.PI/2,4),c(-10.9,2,3.4,Math.PI/2,5),c(10.9,2,-1.8,-Math.PI/2,6),c(-3.2,2,7.62,Math.PI,7),c(3.2,2,7.62,Math.PI,8);let h=Wo(512,91,[104,24,28]),d=new Rt({map:h.map,roughnessMap:h.roughness,normalMap:h.normal,roughness:.95}),u=new dt(new pr(3.4,40),d);u.rotation.x=-Math.PI/2,u.position.y=.005,u.receiveShadow=!0,this.group.add(u);let f=new dt(new kt(1.3,2.4,.1),new Rt({color:1839624,roughness:.7}));f.position.set(0,1.2,7.68),this.group.add(f);let g=qo("EXIT","#2aff88",256),v=new dt(new Ve(.7,.18),new Rt({map:g,emissive:2817928,emissiveMap:g,emissiveIntensity:1.4,transparent:!0}));v.position.set(.95,2.6,7.6),v.rotation.y=Math.PI,this.group.add(v);let m=qo("LAST ROUND","#ff2d55",1024);this.neon=new Rt({map:m,emissive:16723285,emissiveMap:m,emissiveIntensity:2.4,transparent:!0,side:Je});let p=new dt(new Ve(5.4,1.35),this.neon);p.position.set(0,3.5,-7.55),this.group.add(p);let x=qo("THE LUCKY TABLE","#ffb02d",1024),_=new Rt({map:x,emissive:16756781,emissiveMap:x,emissiveIntensity:1.6,transparent:!0,side:Je}),y=new dt(new Ve(2.4,.6),_);y.position.set(0,3,0),this.group.add(y);for(let A of[-1,1]){let E=new dt(new ne(.006,.006,1,6),new Rt({color:1118481}));E.position.set(A*.9,3.5,0),this.group.add(E)}}buildLights(){let e=new Bo(2760728,722950,.75);this.group.add(e);let n=new Rs(16763274,150,13,.78,.55,1.5);n.position.set(0,4.2-.5,0),n.target.position.set(0,0,0),n.castShadow=this.quality.shadows,n.shadow.mapSize.set(this.quality.shadowMapSize,this.quality.shadowMapSize),n.shadow.bias=-4e-4,n.shadow.camera.near=.5,n.shadow.camera.far=10,this.group.add(n,n.target),this.lights.push(n);let i=new Rn(16757866,9,7,1.8);i.position.set(0,1.5,0),this.group.add(i);let s=new Rt({color:2564122,roughness:.5,metalness:.6,side:Je}),o=new Rt({color:16768926,emissive:16757854,emissiveIntensity:3.2}),a=(f,g,v)=>{let m=new Xt,p=new dt(new ne(.008,.008,1.5,6),new Rt({color:657930}));p.position.y=.75,m.add(p);let x=new dt(new Po(.24,.22,24,1,!0),s);x.position.y=-.02,m.add(x);let _=new dt(new zn(.045,12,12),o);if(_.position.y=-.09,m.add(_),v){let y=new Rn(16757854,6,7,2);y.position.y=-.12,m.add(y)}m.position.set(f,4.2-.35,g),this.group.add(m)};a(0,0,!0),a(-1.3,.6,!1),a(1.3,-.6,!1),a(-2.8,-4.9,!0),a(2.8,-4.9,this.quality.secondaryShadowLights>=1);let l=new Rn(16723285,10,9,2);l.position.set(0,3.3,-7.2),this.group.add(l),this.neonBulbs.push(l);for(let[f,g]of[[-7.6,-2.6],[-7.6,2.6],[7.6,-2.6],[7.6,2.6]]){let v=new Rn(16751189,3.5,5,2);v.position.set(f,2.4,g),this.group.add(v)}let c=new Ps(5928360,.5);c.position.set(9,3.4,-1),c.target.position.set(0,.5,1),this.quality.secondaryShadowLights>=1&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.camera.left=-6,c.shadow.camera.right=6,c.shadow.camera.top=6,c.shadow.camera.bottom=-6,c.shadow.bias=-5e-4),this.group.add(c,c.target);let h=new Rt({color:1713208,emissive:4876954,emissiveIntensity:.7,roughness:.2}),d=new dt(new Ve(2.4,1.6),h);d.position.set(10.94,2.2,-1),d.rotation.y=-Math.PI/2,this.group.add(d);let u=new Rt({color:1380364,roughness:.9});for(let f=0;f<7;f++){let g=new dt(new kt(.02,.05,2.5),u);g.position.set(10.9,1.5+f*.2,-1),this.group.add(g)}}buildVolumetrics(){let t=xr(128,.1),e=(i,s)=>new mn({map:t,color:i,transparent:!0,opacity:s,blending:En,depthWrite:!1,side:Je}),n=(i,s,o,a,l,c,h)=>{let d=new ne(a*.24,a,l,20,1,!0),u=e(c,h),f=new dt(d,u);f.position.set(i,s-l/2,o),this.group.add(f),this.volumetrics.push(f)};n(0,3.35,0,1.5,2.6,16757854,.1),n(-1.3,3.35,.6,.9,2.2,16757854,.06),n(1.3,3.35,-.6,.9,2.2,16757854,.06),n(-2.8,3.35,-4.9,1.1,2.4,16757854,.08),n(2.8,3.35,-4.9,1.1,2.4,16757854,.08)}buildDust(){let t=Math.floor(220*this.quality.particleDensity),e=new De,n=new Float32Array(t*3),i=Ge(555);for(let o=0;o<t;o++)n[o*3]=(i()-.5)*16,n[o*3+1]=.4+i()*3.2,n[o*3+2]=(i()-.5)*12;e.setAttribute("position",new Re(n,3));let s=new fr({color:13150328,size:.02,transparent:!0,opacity:.35,map:xr(64,.2),blending:En,depthWrite:!1});this.dust=new Ts(e,s),this.group.add(this.dust)}update(t){if(this.time+=t,this.neon){let e=.82+.18*Math.sin(this.time*11)*Math.sin(this.time*3.7)+(Math.random()<.006?-.5:0);this.neon.emissiveIntensity=2.4*Math.max(.25,e);for(let n of this.neonBulbs)n.intensity=10*Math.max(.25,e)}if(this.dust){let e=this.dust.geometry.getAttribute("position"),n=e.array;for(let i=0;i<n.length;i+=3)n[i+1]+=t*.03*(i%7-3)*.5,n[i]+=t*.015*(i%5-2)*.5,n[i+1]>3.8&&(n[i+1]=.4),n[i]>8&&(n[i]=-8),n[i]<-8&&(n[i]=8);e.needsUpdate=!0}}};var He=(r,t,e)=>Math.max(t,Math.min(e,r)),pe=(r,t,e)=>r+(t-r)*e,xe=(r,t,e,n)=>pe(r,t,1-Math.exp(-e*n));var Yo=r=>1-Math.pow(1-r,3),xd=r=>r*r*r;function Ae(r,t,e,n){let i=1-Math.exp(-e*n);return r.x+=(t.x-r.x)*i,r.y+=(t.y-r.y)*i,r.z+=(t.z-r.z)*i,r}function th(r,t,e,n){let i=t-r;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return r+i*(1-Math.exp(-e*n))}function Dt(r=0,t=1){return r+Math.random()*(t-r)}var ni=[10234667,2837148,2853450,13082665,6961820,11887146,3501678,9079442,5795914,10242670,2829108,11045210],yd=[2303278,3024416,2042416,3154475,2502698],_d=[15251599,13208931,10250820,7358508,15781800,5912096],Zo=new I,Md=new I,bd=new we,eh=new we,Wv=new I(0,-1,0),$o=class{constructor(t,e,n){D(this,"group",new Xt);D(this,"headPivot",new Xt);D(this,"armRPivot",new Xt);D(this,"armLPivot",new Xt);D(this,"elbowRPivot",new Xt);D(this,"elbowLPivot",new Xt);D(this,"legRPivot",new Xt);D(this,"legLPivot",new Xt);D(this,"torso");D(this,"head");D(this,"hitbox");D(this,"nameTag");D(this,"colorHex");D(this,"walkPhase",Math.random()*10);D(this,"idlePhase",Math.random()*10);D(this,"aimWeight",0);D(this,"aimTarget",null);D(this,"lookAt",null);D(this,"headYaw",0);D(this,"headPitch",0);D(this,"parts",new Map);D(this,"materials",[]);D(this,"playerId");D(this,"displayName");this.playerId=t,this.displayName=e;let i=ni[n%ni.length];this.colorHex="#"+i.toString(16).padStart(6,"0");let s=new Rt({color:i,roughness:.82,metalness:.02}),o=new Rt({color:yd[n%yd.length],roughness:.9}),a=new Rt({color:_d[n%_d.length],roughness:.6}),l=new Rt({color:1579032,roughness:.45,metalness:.1});this.materials.push(s,o,a,l);let c=(g,v,m,p,x)=>{let _=new dt(new kt(g,v,m),p);return _.castShadow=!0,_.receiveShadow=!0,_.name=x,this.parts.set(x,_),_};this.torso=c(.72,.78,.38,s,"torso"),this.torso.position.y=1.31,this.group.add(this.torso);let h=c(.74,.08,.4,l,"belt");h.position.y=-.36,this.torso.add(h),this.headPivot.position.y=1.7,this.group.add(this.headPivot),this.head=c(.48,.46,.48,a,"head"),this.head.position.y=.25,this.headPivot.add(this.head);let d=(g,v,m)=>{v.position.set(g*.455,1.6,0),this.group.add(v);let p=c(.19,.36,.19,s,`upperArm${g<0?"L":"R"}`);p.position.y=-.18,v.add(p),m.position.y=-.36,v.add(m);let x=c(.17,.3,.17,s,`forearm${g<0?"L":"R"}`);x.position.y=-.15,m.add(x);let _=c(.15,.14,.15,a,`hand${g<0?"L":"R"}`);_.position.y=-.36,m.add(_);let y=new Ee;y.name="grip",y.position.set(0,-.42,.02),m.add(y)};d(1,this.armRPivot,this.elbowRPivot),d(-1,this.armLPivot,this.elbowLPivot);let u=(g,v)=>{v.position.set(g*.18,.92,0),this.group.add(v);let m=c(.24,.88,.26,o,`leg${g<0?"L":"R"}`);m.position.y=-.44,v.add(m);let p=c(.26,.12,.42,l,`foot${g<0?"L":"R"}`);p.position.set(0,-.93,.08),v.add(p)};u(1,this.legRPivot),u(-1,this.legLPivot);let f=vd(e,this.colorHex);this.nameTag=new Co(new dr({map:f,transparent:!0,depthTest:!0})),this.nameTag.scale.set(1.5*(f.image.width/64),1.5*.85,1),this.nameTag.position.y=2.62,this.group.add(this.nameTag),this.hitbox=new dt(new kt(1,2.35,1),new mn({visible:!1})),this.hitbox.position.y=1.15,this.hitbox.userData.playerId=t,this.group.add(this.hitbox)}getGripAnchor(t="R"){return(t==="R"?this.elbowRPivot:this.elbowLPivot).children.find(e=>e.name==="grip")}setAimTarget(t){this.aimTarget=t?t.clone():null}setLookAt(t){this.lookAt=t?t.clone():null}setHeadReaction(t){this.headPitch=t}getPartWorld(t,e=new I){let n=this.parts.get(t);return n?n.getWorldPosition(e):e.set(0,0,0)}findPart(t){return this.parts.get(t)??null}allParts(){return[...this.parts.values()]}update(t,e){this.walkPhase+=t*He(e,0,6)*3.1,this.idlePhase+=t,this.aimWeight=pe(this.aimWeight,this.aimTarget?1:0,1-Math.exp(-6*t));let n=e>.15,i=n?Math.sin(this.walkPhase)*.55*He(e,0,1.6):0,s=Math.sin(this.idlePhase*1.4)*.035,o=Math.sin(this.idlePhase*2.1)*.012;this.legRPivot.rotation.x=i,this.legLPivot.rotation.x=-i,this.torso.position.y=1.31+(n?Math.abs(Math.sin(this.walkPhase))*.03:0)+o,this.torso.rotation.z=s*.4;let a=n?-i*.7:s,l=n?i*.7:-s;this.aimWeight>.01&&this.aimTarget?(this.applyAim(this.armRPivot,this.elbowRPivot,this.aimTarget,this.aimWeight,!0),this.applyAim(this.armLPivot,this.elbowLPivot,this.aimTarget,this.aimWeight*.8,!1)):(this.armRPivot.rotation.x=pe(this.armRPivot.rotation.x,a,1-Math.exp(-8*t)),this.armRPivot.rotation.z=pe(this.armRPivot.rotation.z,.06,.1),this.elbowRPivot.rotation.x=pe(this.elbowRPivot.rotation.x,-.25,.1),this.armLPivot.rotation.x=pe(this.armLPivot.rotation.x,l,1-Math.exp(-8*t)),this.armLPivot.rotation.z=pe(this.armLPivot.rotation.z,-.06,.1),this.elbowLPivot.rotation.x=pe(this.elbowLPivot.rotation.x,-.25,.1)),this.headPitch=pe(this.headPitch,0,1-Math.exp(-4*t));let c=0,h=this.headPitch;if(this.lookAt){this.headPivot.getWorldPosition(Zo);let d=Md.copy(this.lookAt).sub(Zo),u=this.group.rotation.y;c=Math.atan2(d.x,d.z)-u,h=-Math.atan2(d.y,Math.hypot(d.x,d.z))*.8+this.headPitch,c=He(c,-1.15,1.15),h=He(h,-.8,.8)}this.headYaw=th(this.headYaw,c,7,t),this.headPitch=th(this.headPitch,h,7,t),this.headPivot.rotation.set(this.headPitch,this.headYaw,0)}applyAim(t,e,n,i,s){t.getWorldPosition(Zo);let o=Md.copy(n).sub(Zo).normalize();bd.setFromUnitVectors(Wv,o),t.parent.getWorldQuaternion(eh),eh.invert().multiply(bd),t.quaternion.slerp(eh,i),e.rotation.x=pe(e.rotation.x,s?-.12:-.45,i*.5)}setOpacity(t){for(let e of this.materials)e.transparent=!0,e.opacity=t;this.nameTag.material.opacity=t}dispose(){for(let t of this.parts.values())t.geometry?.dispose();for(let t of this.materials)t.dispose();this.nameTag.material.map?.dispose(),this.nameTag.material.dispose(),this.group.removeFromParent()}};var Ri=class r{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);let n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new r);let n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],x=i[3],_=i[4],y=i[5],A=i[6],E=i[7],C=i[8];return s[0]=o*v+a*x+l*A,s[1]=o*m+a*_+l*E,s[2]=o*p+a*y+l*C,s[3]=c*v+h*x+d*A,s[4]=c*m+h*_+d*E,s[5]=c*p+h*y+d*C,s[6]=u*v+f*x+g*A,s[7]=u*m+f*_+g*E,s[8]=u*p+f*y+g*C,e}scale(t,e){e===void 0&&(e=new r);let n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);let n=3,i=4,s=[],o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){let f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new r);let e=3,n=6,i=qv,s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3,l=a,c,h=n,d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){let u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{let u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{let u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,v=s*o,m=s*a,p=s*l,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-p,x[3*0+2]=d+m,x[3*1+0]=h+p,x[3*1+1]=1-(c+g),x[3*1+2]=f-v,x[3*2+0]=d-m,x[3*2+1]=f+v,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new r);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},qv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=class r{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new r);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new r(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new r(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ri([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new r),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new r),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=Xv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let o=Yv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(wd),wd.almostEquals(t,e)}clone(){return new r(this.x,this.y,this.z)}};b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);var Xv=new b,Yv=new b,wd=new b,un=class r{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Ed),c=Ed),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new r().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=Sd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Sd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}},Ed=new b,Sd=[new b,new b,new b,new b,new b,new b,new b,new b],ea=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){let o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},na=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}},Qe=class r{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Zv,i=$v;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s,o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){let d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new r(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new r);let i=this.x,s=this.y,o=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new r);let s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}},Zv=new b,$v=new b,jv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Mt=class r{constructor(t){t===void 0&&(t={}),this.id=r.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Mt.idCounter=0;Mt.types=jv;var le=class r{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new Qe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return r.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return r.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Td),Td.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Td=new Qe,ia=class r extends Mt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new b;for(let s=0;s!==t.length;s++){let o=t[s],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];r.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){let s=new b,o=new b;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){let h=new b,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);let v=h.dot(o);v>u&&(u=v,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let v=n.vertices[n.faces[d][g]],m=new b;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){let c=new b,h=new b,d=new b,u=new b,f=new b,g=new b,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);let x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{let p=a?a.length:m.faces.length;for(let x=0;x<p;x++){let _=a?a[x]:x;c.copy(m.faceNormals[_]),n.vmult(c,c);let y=m.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);let x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{let p=l?l.length:t.faces.length;for(let x=0;x<p;x++){let _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);let y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();let _=m.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){let a=this;r.project(a,t,n,i,nh),r.project(e,t,s,o,ih);let l=nh[0],c=nh[1],h=ih[0],d=ih[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new b,i=new b;this.computeLocalAABB(i,n);let s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){let l=new b,c=new b,h=new b,d=new b,u=new b,f=new b,g=new b,v=new b,m=this,p=[],x=i,_=p,y=-1,A=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);let R=l.dot(t);R<A&&(A=R,y=M)}if(y<0)return;let E=m.faces[y];E.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let R=0;R<m.faces[M].length;R++)E.indexOf(m.faces[M][R])!==-1&&M!==y&&E.connectedFaces.indexOf(M)===-1&&E.connectedFaces.push(M);let C=E.length;for(let M=0;M<C;M++){let R=m.vertices[E[M]],U=m.vertices[E[(M+1)%C]];R.vsub(U,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(R),n.vmult(f,f),e.vadd(f,f);let L=E.connectedFaces[M];g.copy(this.faceNormals[L]);let F=this.getPlaneConstantOfFace(L);v.copy(g),n.vmult(v,v);let O=F-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,O);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[y]);let P=this.getPlaneConstantOfFace(y);v.copy(g),n.vmult(v,v);let w=P-v.dot(e);for(let M=0;M<x.length;M++){let R=v.dot(x[M])+w;if(R<=s&&(console.log(`clamped: depth=${R} to minDist=${s}`),R=s),R<=o){let U=x[M];if(R<=1e-6){let L={point:U,normal:v,depth:R};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){let d=new b;d.copy(c),e.push(d)}else{let d=new b;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){let d=new b;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let s=this.vertices,o,a,l,c,h,d,u=new b;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){let o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){let o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){let o=i[s];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new b;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a],c=e[n[a][0]],h=new b;t.vsub(c,h);let d=l.dot(h),u=new b;o.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){let o=t.vertices.length,a=Jv,l=0,c=0,h=Qv,d=t.vertices;h.setZero(),le.vectorToLocalFrame(n,i,e,a),le.pointToLocalFrame(n,i,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}s[0]=l,s[1]=c}},nh=[],ih=[],Kv=new b,Jv=new b,Qv=new b,$i=class r extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ia({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),r.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Ci.set(s[o][0],s[o][1],s[o][2]),e.vmult(Ci,Ci),t.vadd(Ci,Ci),n(Ci.x,Ci.y,Ci.z)}calculateWorldAABB(t,e,n,i){let s=this.halfExtents;Hn[0].set(s.x,s.y,s.z),Hn[1].set(-s.x,s.y,s.z),Hn[2].set(-s.x,-s.y,s.z),Hn[3].set(-s.x,-s.y,-s.z),Hn[4].set(s.x,-s.y,-s.z),Hn[5].set(s.x,s.y,-s.z),Hn[6].set(-s.x,s.y,-s.z),Hn[7].set(s.x,-s.y,s.z);let o=Hn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=Hn[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},Ci=new b,Hn=[new b,new b,new b,new b,new b,new b,new b,new b],vh={DYNAMIC:1,STATIC:2,KINEMATIC:4},xh={AWAKE:0,SLEEPY:1,SLEEPING:2},zt=class r extends na{constructor(t){t===void 0&&(t={}),super(),this.id=r.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?r.STATIC:r.DYNAMIC,typeof t.type==typeof r.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=r.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Qe,this.initQuaternion=new Qe,this.previousQuaternion=new Qe,this.interpolatedQuaternion=new Qe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Ri,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Ri,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new un,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=r.AWAKE,this.wakeUpAfterNarrowphase=!1,t===r.SLEEPING&&this.dispatchEvent(r.wakeupEvent)}sleep(){this.sleepState=r.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===r.AWAKE&&n<i?(this.sleepState=r.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(r.sleepyEvent)):e===r.SLEEPY&&n>i?this.wakeUp():e===r.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(r.sleepEvent))}}updateSolveMassProperties(){this.sleepState===r.SLEEPING||this.type===r.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new b,s=new Qe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let s=0;s!==n;s++){let o=t[s];o.updateBoundingSphereRadius();let a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=tx,o=ex,a=this.quaternion,l=this.aabb,c=nx;for(let h=0;h!==i;h++){let d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=ix,i=sx;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=ox;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==r.DYNAMIC)return;let n=ax,i=lx;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===r.DYNAMIC&&(this.sleepState===r.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=e,i=cx;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=hx;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==r.DYNAMIC)return;let n=ux,i=dx;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=fx;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),$i.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===r.DYNAMIC||this.type===r.KINEMATIC)||this.sleepState===r.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;let g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*x),s.y+=t*(g[3]*m+g[4]*p+g[5]*x),s.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};zt.idCounter=0;zt.COLLIDE_EVENT_NAME="collide";zt.DYNAMIC=vh.DYNAMIC;zt.STATIC=vh.STATIC;zt.KINEMATIC=vh.KINEMATIC;zt.AWAKE=xh.AWAKE;zt.SLEEPY=xh.SLEEPY;zt.SLEEPING=xh.SLEEPING;zt.wakeupEvent={type:"wakeup"};zt.sleepyEvent={type:"sleepy"};zt.sleepEvent={type:"sleep"};var tx=new b,ex=new Qe,nx=new un,ix=new Ri,sx=new Ri,rx=new Ri,ox=new b,ax=new b,lx=new b,cx=new b,hx=new b,ux=new b,dx=new b,fx=new b,sa=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&zt.STATIC||t.sleepState===zt.SLEEPING)&&(e.type&zt.STATIC||e.sleepState===zt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let s=px;e.position.vsub(t.position,s);let o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=mx,i=gx,s=vx,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new b;t.position.vsub(e.position,n);let i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},px=new b;new b;new Qe;new b;var mx={keys:[]},gx=[],vx=[];new b;var eM=new b;new b;var lh=class extends sa{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,s=i.length,o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}},Os=class{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}},Od,zd,Hd,kd,Vd,Gd,Wd,yh={CLOSEST:1,ANY:2,ALL:4};Od=Mt.types.SPHERE;zd=Mt.types.PLANE;Hd=Mt.types.BOX;kd=Mt.types.CYLINDER;Vd=Mt.types.CONVEXPOLYHEDRON;Gd=Mt.types.HEIGHTFIELD;Wd=Mt.types.TRIMESH;var gn=class r{get[Od](){return this._intersectSphere}get[zd](){return this._intersectPlane}get[Hd](){return this._intersectBox}get[kd](){return this._intersectConvex}get[Vd](){return this._intersectConvex}get[Gd](){return this._intersectHeightfield}get[Wd](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=r.ANY,this.result=new Os,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||r.ANY,this.result=e.result||new Os,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ad),sh.length=0,t.broadphase.aabbQuery(t,Ad,sh),this.intersectBodies(sh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let i=xx,s=yx;for(let o=0,a=t.shapes.length;o<a;o++){let l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let s=this.from;if(Bx(s,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){let o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);let h=new b;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let g=new b,v=new b,m=new b;o.vsub(n,g);let p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;let o=_x;o.from.copy(this.from),o.to.copy(this.to),le.pointToLocalFrame(n,e,o.from,o.from),le.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=Mx,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new un;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),le.pointToWorldFrame(n,e,t.pillarOffset,jo),this._intersectConvex(t.pillarConvex,e,jo,i,s,Cd),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),le.pointToWorldFrame(n,e,t.pillarOffset,jo),this._intersectConvex(t.pillarConvex,e,jo,i,s,Cd)}}}_intersectSphere(t,e,n,i,s){let o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=bx,g=wx;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{let v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){let a=Ex,l=Rd,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<p;_++){let y=c?c[_]:_,A=h[y],E=u[y],C=e,P=n;l.copy(d[A[0]]),C.vmult(l,l),l.vadd(P,l),l.vsub(g,l),C.vmult(E,a);let w=f.dot(a);if(Math.abs(w)<this.precision)continue;let M=a.dot(l)/w;if(!(M<0)){f.scale(M,on),on.vadd(g,on),Ln.copy(d[A[0]]),C.vmult(Ln,Ln),P.vadd(Ln,Ln);for(let R=1;!x.shouldStop&&R<A.length-1;R++){kn.copy(d[A[R]]),Vn.copy(d[A[R+1]]),C.vmult(kn,kn),C.vmult(Vn,Vn),P.vadd(kn,kn),P.vadd(Vn,Vn);let U=on.distanceTo(g);!(r.pointInTriangle(on,Ln,kn,Vn)||r.pointInTriangle(on,kn,Ln,Vn))||U>m||this.reportIntersection(a,on,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){let a=Ax,l=Nx,c=Dx,h=Rd,d=Cx,u=Rx,f=Px,g=Lx,v=Ix,m=t.indices;t.vertices;let p=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),le.vectorToLocalFrame(n,e,_,d),le.pointToLocalFrame(n,e,p,u),le.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let A=0,E=l.length;!this.result.shouldStop&&A!==E;A++){let C=l[A];t.getNormal(C,a),t.getVertex(m[C*3],Ln),Ln.vsub(u,h);let P=d.dot(a),w=a.dot(h)/P;if(w<0)continue;d.scale(w,on),on.vadd(u,on),t.getVertex(m[C*3+1],kn),t.getVertex(m[C*3+2],Vn);let M=on.distanceSquared(u);!(r.pointInTriangle(on,kn,Ln,Vn)||r.pointInTriangle(on,Ln,kn,Vn))||M>y||(le.vectorToWorldFrame(e,a,v),le.pointToWorldFrame(n,e,on,g),this.reportIntersection(v,g,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){let o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case r.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case r.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case r.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Zi),n.vsub(e,yr),t.vsub(e,rh);let s=Zi.dot(Zi),o=Zi.dot(yr),a=Zi.dot(rh),l=yr.dot(yr),c=yr.dot(rh),h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}};gn.CLOSEST=yh.CLOSEST;gn.ANY=yh.ANY;gn.ALL=yh.ALL;var Ad=new un,sh=[],yr=new b,rh=new b,xx=new b,yx=new Qe,on=new b,Ln=new b,kn=new b,Vn=new b;new b;new Os;var Cd={faceList:[0]},jo=new b,_x=new gn,Mx=[],bx=new b,wx=new b,Ex=new b,Sx=new b,Tx=new b,Rd=new b,Ax=new b,Cx=new b,Rx=new b,Px=new b,Ix=new b,Lx=new b;new un;var Nx=[],Dx=new le,Zi=new b,Ko=new b;function Bx(r,t,e){e.vsub(r,Zi);let n=Zi.dot(t);return t.scale(n,Ko),Ko.vadd(r,Ko),e.distanceTo(Ko)}var ra=class r extends sa{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let i=this.axisList,s=i.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){let c=i[a];for(l=a+1;l<s;l++){let h=i[l];if(this.needBroadphaseCollision(c,h)){if(!r.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){let s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?r.insertionSortX(t):e===1?r.insertionSortY(t):e===2&&r.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let g=a[f],v=g.position.x;t+=v,e+=v*v;let m=g.position.y;n+=m,i+=m*m;let p=g.position.z;s+=p,o+=p*p}let h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,s="x";i===1&&(s="y"),i===2&&(s="z");let o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},oa=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},aa=class r{constructor(t,e,n){n===void 0&&(n={}),n=oa.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=r.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};aa.idCounter=0;var la=class{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Pi=class r{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=r.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new la,this.jacobianElementB=new la,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Pd),a.scale(h,Id),n.invInertiaWorldSolve.vmult(o,Ld),i.invInertiaWorldSolve.vmult(l,Nd),t.multiplyVectors(Pd,Ld)+e.multiplyVectors(Id,Nd)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve,c=s+o;return a.vmult(t.rotational,Jo),c+=Jo.dot(t.rotational),l.vmult(e.rotational,Jo),c+=Jo.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Ux;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Pi.idCounter=0;var Pd=new b,Id=new b,Ld=new b,Nd=new b,Jo=new b,Ux=new b,Fs=class extends Pi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){let e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Fx,c=Ox,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=s.velocity,f=s.angularVelocity;s.force,s.torque;let g=zx,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let x=p.dot(g),_=this.restitution+1,y=_*u.dot(p)-_*h.dot(p)+f.dot(c)-d.dot(l),A=this.computeGiMf();return-x*e-y*n-t*A}getImpactVelocityAlongNormal(){let t=Hx,e=kx,n=Vx,i=Gx,s=Wx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}},Fx=new b,Ox=new b,zx=new b,Hx=new b,kx=new b,Vx=new b,Gx=new b,Wx=new b,ca=class extends aa{constructor(t,e,n,i,s){e===void 0&&(e=new b),i===void 0&&(i=new b),s===void 0&&(s=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();let o=this.equationX=new Fs(t,n),a=this.equationY=new Fs(t,n),l=this.equationZ=new Fs(t,n);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-s,o.maxForce=a.maxForce=l.maxForce=s,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}},ch=class extends Pi{constructor(t,e,n){n===void 0&&(n={});let i=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-i,i),this.axisA=n.axisA?n.axisA.clone():new b(1,0,0),this.axisB=n.axisB?n.axisB.clone():new b(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,i=this.axisA,s=this.axisB,o=qx,a=Xx,l=this.jacobianElementA,c=this.jacobianElementB;i.cross(s,o),s.cross(i,a),l.rotational.copy(a),c.rotational.copy(o);let h=Math.cos(this.angle)-i.dot(s),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},qx=new b,Xx=new b,wr=class extends Pi{constructor(t,e,n){n===void 0&&(n={});let i=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-i,i),this.axisA=n.axisA?n.axisA.clone():new b(1,0,0),this.axisB=n.axisB?n.axisB.clone():new b(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,i=this.axisA,s=this.axisB,o=Yx,a=Zx,l=this.jacobianElementA,c=this.jacobianElementB;i.cross(s,o),s.cross(i,a),l.rotational.copy(a),c.rotational.copy(o);let h=Math.cos(this.maxAngle)-i.dot(s),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},Yx=new b,Zx=new b,ha=class extends ca{constructor(t,e,n){n===void 0&&(n={});let i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new b,o=n.pivotB?n.pivotB.clone():new b;super(t,s,e,o,i),this.axisA=n.axisA?n.axisA.clone():new b,this.axisB=n.axisB?n.axisB.clone():new b,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new ch(t,e,n),l=this.twistEquation=new wr(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-i,l.maxForce=0,l.minForce=-i,this.equations.push(a,l)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,i=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(i.axisA,i.axisA),t.vectorToWorldFrame(i.axisA,i.axisA),this.axisB.tangents(i.axisB,i.axisB),e.vectorToWorldFrame(i.axisB,i.axisB),n.angle=this.angle,i.maxAngle=this.twistAngle}};new b;new b;var nM=new b,iM=new b,hh=class extends Pi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,-n,n),this.axisA=new b,this.axisB=new b,this.targetVelocity=0}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.axisA,i=this.axisB,s=this.jacobianElementA,o=this.jacobianElementB;s.rotational.copy(n),i.negate(o.rotational);let a=this.computeGW()-this.targetVelocity,l=this.computeGiMf();return-a*e-t*l}},ua=class extends ca{constructor(t,e,n){n===void 0&&(n={});let i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new b,o=n.pivotB?n.pivotB.clone():new b;super(t,s,e,o,i),(this.axisA=n.axisA?n.axisA.clone():new b(1,0,0)).normalize(),(this.axisB=n.axisB?n.axisB.clone():new b(1,0,0)).normalize(),this.collideConnected=!!n.collideConnected;let c=this.rotationalEquation1=new wr(t,e,n),h=this.rotationalEquation2=new wr(t,e,n),d=this.motorEquation=new hh(t,e,i);d.enabled=!1,this.equations.push(c,h,d)}enableMotor(){this.motorEquation.enabled=!0}disableMotor(){this.motorEquation.enabled=!1}setMotorSpeed(t){this.motorEquation.targetVelocity=t}setMotorMaxForce(t){this.motorEquation.maxForce=t,this.motorEquation.minForce=-t}update(){let t=this.bodyA,e=this.bodyB,n=this.motorEquation,i=this.rotationalEquation1,s=this.rotationalEquation2,o=$x,a=jx,l=this.axisA,c=this.axisB;super.update(),t.quaternion.vmult(l,o),e.quaternion.vmult(c,a),o.tangents(i.axisA,s.axisA),i.axisB.copy(a),s.axisB.copy(a),this.motorEquation.enabled&&(t.quaternion.vmult(this.axisA,n.axisA),e.quaternion.vmult(this.axisB,n.axisB))}},$x=new b,jx=new b,da=class extends Pi{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=Kx,o=Jx,a=this.t;n.cross(a,s),i.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},Kx=new b,Jx=new b,fa=class r{constructor(t,e,n){n=oa.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};fa.idCounter=0;var pa=class r{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=r.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};pa.idCounter=0;var sM=new b,rM=new b,oM=new b,aM=new b,lM=new b,cM=new b,hM=new b,uM=new b,dM=new b,fM=new b,pM=new b;var mM=new b,gM=new b;new b;new b;new b;var vM=new b,xM=new b,yM=new b;new gn;new b;var _M=new b,MM=new b,bM=[new b(1,0,0),new b(0,1,0),new b(0,0,1)],wM=new b;var EM=new b,SM=new b,TM=new b;var AM=new b,CM=new b,RM=new b,PM=new b;var IM=new b,LM=new b,NM=new b;var DM=new b,BM=new b;var UM=new b,FM=new b,OM=new b,zM=new b,HM=new b,kM=new b,VM=new b,Er=class extends ia{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let s=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new b(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new b(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<s;g++){let v=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(o.push(new b(-e*u(v),-n*.5,e*d(v))),c.push(2*g+2),o.push(new b(-t*u(v),n*.5,t*d(v))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new b(-u(m),0,d(m)))}l.push(c),a.push(new b(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Mt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}};var ma=class extends Mt{constructor(){super({type:Mt.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){let e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){ii.set(0,0,1),e.vmult(ii,ii);let s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ii.x===1?i.x=t.x:ii.x===-1&&(n.x=t.x),ii.y===1?i.y=t.y:ii.y===-1&&(n.y=t.y),ii.z===1?i.z=t.z:ii.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},ii=new b;var GM=new b,WM=new b,qM=new b,XM=new b,YM=new b,ZM=new b,$M=new b,jM=new b,KM=new b;var JM=new b,QM=new un;var tb=new b,eb=new un,nb=new b,ib=new b,sb=new b,rb=new b,ob=new b,ab=new b,lb=new b,cb=new un,hb=new b,ub=new le,db=new un,uh=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},dh=class extends uh{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t,d,u,f,g,v,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();let p=ty,x=ey,_=Qx;p.length=a,x.length=a,_.length=a;for(let y=0;y!==a;y++){let A=o[y];_[y]=0,x[y]=A.computeB(h),p[y]=1/A.computeC()}if(a!==0){for(let E=0;E!==c;E++){let C=l[E],P=C.vlambda,w=C.wlambda;P.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){let C=o[E];d=x[E],u=p[E],m=_[E],v=C.computeGWlambda(),f=u*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),_[E]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==c;E++){let C=l[E],P=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let y=o.length,A=1/h;for(;y--;)o[y].multiplier=_[y]*A}return n}},Qx=[],ty=[],ey=[];var fb=zt.STATIC;var fh=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},ph=class extends fh{constructor(){super(...arguments),this.type=b}constructObject(){return new b}},ye={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH},mh=class{get[ye.sphereSphere](){return this.sphereSphere}get[ye.spherePlane](){return this.spherePlane}get[ye.boxBox](){return this.boxBox}get[ye.sphereBox](){return this.sphereBox}get[ye.planeBox](){return this.planeBox}get[ye.convexConvex](){return this.convexConvex}get[ye.sphereConvex](){return this.sphereConvex}get[ye.planeConvex](){return this.planeConvex}get[ye.boxConvex](){return this.boxConvex}get[ye.sphereHeightfield](){return this.sphereHeightfield}get[ye.boxHeightfield](){return this.boxHeightfield}get[ye.convexHeightfield](){return this.convexHeightfield}get[ye.sphereParticle](){return this.sphereParticle}get[ye.planeParticle](){return this.planeParticle}get[ye.boxParticle](){return this.boxParticle}get[ye.convexParticle](){return this.convexParticle}get[ye.cylinderCylinder](){return this.convexConvex}get[ye.sphereCylinder](){return this.sphereConvex}get[ye.planeCylinder](){return this.planeConvex}get[ye.boxCylinder](){return this.boxConvex}get[ye.convexCylinder](){return this.convexConvex}get[ye.heightfieldCylinder](){return this.heightfieldCylinder}get[ye.particleCylinder](){return this.particleCylinder}get[ye.sphereTrimesh](){return this.sphereTrimesh}get[ye.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ph,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Fs(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,v=g.length?g.pop():new da(n,i,u*f),m=g.length?g.pop():new da(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Yi.setZero(),Bs.setZero(),Us.setZero();let s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Yi.vadd(e.ni,Yi),Bs.vadd(e.ri,Bs),Us.vadd(e.rj,Us)):(Yi.vsub(e.ni,Yi),Bs.vadd(e.rj,Bs),Us.vadd(e.ri,Us));let o=1/t;Bs.scale(o,n.ri),Us.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Yi.normalize(),Yi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let l=sy,c=ry,h=ny,d=iy;for(let u=0,f=t.length;u!==f;u++){let g=t[u],v=e[u],m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);let p=g.type&zt.KINEMATIC&&v.type&zt.STATIC||g.type&zt.STATIC&&v.type&zt.KINEMATIC||g.type&zt.KINEMATIC&&v.type&zt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);let _=g.shapes[x];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);let A=v.shapes[y];if(!(_.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+A.boundingSphereRadius)continue;let E=null;_.material&&A.material&&(E=n.getContactMaterial(_.material,A.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;let C=_.type|A.type,P=this[C];if(P){let w=!1;_.type<A.type?w=P.call(this,_,A,h,d,l,c,g,v,_,A,p):w=P.call(this,A,_,d,h,c,l,v,g,_,A,p),w&&p&&(n.shapeOverlapKeeper.set(_.id,A.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Qo),u.ni.scale(u.ni.dot(Qo),Dd),Qo.vsub(Dd,u.rj),-Qo.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){let u=this.v3pool,f=Iy;n.vsub(i,ta),e.getSideNormals(f,o);let g=t.radius,v=!1,m=Ny,p=Dy,x=By,_=null,y=0,A=0,E=0,C=null;for(let B=0,Y=f.length;B!==Y&&v===!1;B++){let V=Cy;V.copy(f[B]);let $=V.length();V.normalize();let et=ta.dot(V);if(et<$+g&&et>0){let lt=Ry,it=Py;lt.copy(f[(B+1)%3]),it.copy(f[(B+2)%3]);let Yt=lt.length(),j=it.length();lt.normalize(),it.normalize();let st=ta.dot(lt),xt=ta.dot(it);if(st<Yt&&st>-Yt&&xt<j&&xt>-j){let at=Math.abs(et-$-g);if((C===null||at<C)&&(C=at,A=st,E=xt,_=$,m.copy(V),p.copy(lt),x.copy(it),y++,d))return!0}}}if(y){v=!0;let B=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(_,m),p.scale(A,p),m.vadd(p,m),x.scale(E,x),m.vadd(x,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let P=u.get(),w=Ly;for(let B=0;B!==2&&!v;B++)for(let Y=0;Y!==2&&!v;Y++)for(let V=0;V!==2&&!v;V++)if(P.set(0,0,0),B?P.vadd(f[0],P):P.vsub(f[0],P),Y?P.vadd(f[1],P):P.vsub(f[1],P),V?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;v=!0;let $=this.createContactEquation(a,l,t,e,c,h);$.ri.copy(w),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(g,$.ri),$.rj.copy(P),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}u.release(P),P=null;let M=u.get(),R=u.get(),U=u.get(),L=u.get(),F=u.get(),O=f.length;for(let B=0;B!==O&&!v;B++)for(let Y=0;Y!==O&&!v;Y++)if(B%3!==Y%3){f[Y].cross(f[B],M),M.normalize(),f[B].vadd(f[Y],R),U.copy(n),U.vsub(R,U),U.vsub(i,U);let V=U.dot(M);M.scale(V,L);let $=0;for(;$===B%3||$===Y%3;)$++;F.copy(n),F.vsub(L,F),F.vsub(R,F),F.vsub(i,F);let et=Math.abs(V),lt=F.length();if(et<f[$].length()&&lt<g){if(d)return!0;v=!0;let it=this.createContactEquation(a,l,t,e,c,h);R.vadd(L,it.rj),it.rj.copy(it.rj),F.negate(it.ni),it.ni.normalize(),it.ri.copy(it.rj),it.ri.vadd(i,it.ri),it.ri.vsub(n,it.ri),it.ri.normalize(),it.ri.scale(g,it.ri),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}}u.release(M,R,U,L,F)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){let g=jy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){let v=[],m=Ky;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(d)return!0;let _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,A=_.rj;g.negate(_.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,y),A.copy(v[x].point),y.vsub(n,y),A.vsub(i,A),y.vadd(n,y),y.vsub(a.position,y),A.vadd(i,A),A.vsub(l.position,A),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){let u=this.v3pool;n.vsub(i,Uy);let f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius,p=!1;for(let x=0;x!==v.length;x++){let _=v[x],y=Hy;o.vmult(_,y),i.vadd(y,y);let A=zy;if(y.vsub(n,A),A.lengthSquared()<m*m){if(d)return!0;p=!0;let E=this.createContactEquation(a,l,t,e,c,h);E.ri.copy(A),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),y.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&p===!1;x++){let y=f[x],A=g[x],E=ky;o.vmult(y,E);let C=Vy;o.vmult(v[A[0]],C),C.vadd(i,C);let P=Gy;E.scale(-m,P),n.vadd(P,P);let w=Wy;P.vsub(C,w);let M=w.dot(E),R=qy;if(n.vsub(C,R),M<0&&R.dot(E)>0){let U=[];for(let L=0,F=A.length;L!==F;L++){let O=u.get();o.vmult(v[A[L]],O),i.vadd(O,O),U.push(O)}if(Ay(U,E,n)){if(d)return!0;p=!0;let L=this.createContactEquation(a,l,t,e,c,h);E.scale(-m,L.ri),E.negate(L.ni);let F=u.get();E.scale(-M,F);let O=u.get();E.scale(-m,O),n.vsub(i,L.rj),L.rj.vadd(O,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(F),u.release(O),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let B=0,Y=U.length;B!==Y;B++)u.release(U[B]);return}else for(let L=0;L!==A.length;L++){let F=u.get(),O=u.get();o.vmult(v[A[(L+1)%A.length]],F),o.vmult(v[A[(L+2)%A.length]],O),i.vadd(F,F),i.vadd(O,O);let B=Fy;O.vsub(F,B);let Y=Oy;B.unit(Y);let V=u.get(),$=u.get();n.vsub(F,$);let et=$.dot(Y);Y.scale(et,V),V.vadd(F,V);let lt=u.get();if(V.vsub(n,lt),et>0&&et*et<B.lengthSquared()&&lt.lengthSquared()<m*m){if(d)return!0;let it=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,it.rj),V.vsub(n,it.ni),it.ni.normalize(),it.ni.scale(m,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult);for(let Yt=0,j=U.length;Yt!==j;Yt++)u.release(U[Yt]);u.release(F),u.release(O),u.release(V),u.release(lt),u.release($);return}u.release(F),u.release(O),u.release(V),u.release(lt),u.release($)}for(let L=0,F=U.length;L!==F;L++)u.release(U[L])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){let u=Xy,f=Yy;f.set(0,0,1),s.vmult(f,f);let g=0,v=Zy;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;let x=this.createContactEquation(a,l,t,e,c,h),_=$y;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){let u=e.data,f=t.radius,g=e.elementSize,v=c_,m=l_;le.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(x<0||y<0||p>u.length||_>u[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),y>=u[0].length&&(y=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let A=[];e.getRectMinMax(p,_,x,y,A);let E=A[0],C=A[1];if(m.z-f>C||m.z+f<E)return;let P=this.result;for(let w=p;w<x;w++)for(let M=_;M<y;M++){let R=P.length,U=!1;if(e.getConvexTrianglePillar(w,M,!1),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&U||(e.getConvexTrianglePillar(w,M,!0),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&U))return!0;if(P.length-R>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=o_,m=a_,p=r_;le.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,A=Math.ceil((p.y+g)/f)+1;if(_<0||A<0||x>u.length||y>u[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),A<0&&(A=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),A>=u[0].length&&(A=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);let E=[];e.getRectMinMax(x,y,_,A,E);let C=E[0],P=E[1];if(!(p.z-g>P||p.z+g<C))for(let w=x;w<_;w++)for(let M=y;M<A;M++){let R=!1;if(e.getConvexTrianglePillar(w,M,!1),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&R||(e.getConvexTrianglePillar(w,M,!0),le.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&R))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){let u=e_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){let u=Jy;u.set(0,0,1),a.quaternion.vmult(u,u);let f=Qy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);let m=t_;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1,f=i_,g=s_,v=null,m=n_;if(m.copy(i),m.vsub(n,m),s.conjugate(Bd),Bd.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){let _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(_[0],Ud);let A=-y.dot(Ud);if(v===null||Math.abs(A)<Math.abs(v)){if(d)return!0;v=A,u=p,f.copy(y)}}if(u!==-1){let p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let x=p.ri,_=p.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){let u=fy,f=py,g=my,v=gy,m=vy,p=xy,x=by,_=dy,y=hy,A=wy;le.pointToLocalFrame(i,o,n,m);let E=t.radius;x.lowerBound.set(m.x-E,m.y-E,m.z-E),x.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(x,A);let C=uy,P=t.radius*t.radius;for(let L=0;L<A.length;L++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[A[L]*3+F],C),C.vsub(m,y),y.lengthSquared()<=P){if(_.copy(C),le.pointToWorldFrame(i,o,_,C),C.vsub(n,y),d)return!0;let O=this.createContactEquation(a,l,t,e,c,h);O.ni.copy(y),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(C),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let L=0;L<A.length;L++)for(let F=0;F<3;F++){e.getVertex(e.indices[A[L]*3+F],u),e.getVertex(e.indices[A[L]*3+(F+1)%3],f),f.vsub(u,g),m.vsub(f,p);let O=p.dot(g);m.vsub(u,p);let B=p.dot(g);if(B>0&&O<0&&(m.vsub(u,p),v.copy(g),v.normalize(),B=p.dot(v),v.scale(B,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let V=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),le.pointToWorldFrame(i,o,p,p),p.vsub(l.position,V.rj),le.vectorToWorldFrame(o,V.ni,V.ni),le.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let w=yy,M=_y,R=My,U=cy;for(let L=0,F=A.length;L!==F;L++){e.getTriangleVertices(A[L],w,M,R),e.getNormal(A[L],U),m.vsub(w,p);let O=p.dot(U);if(U.scale(O,p),m.vsub(p,p),O=p.distanceTo(m),gn.pointInTriangle(p,w,M,R)&&O<t.radius){if(d)return!0;let B=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),le.pointToWorldFrame(i,o,p,p),p.vsub(l.position,B.rj),le.vectorToWorldFrame(o,B.ni,B.ni),le.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){let u=new b,f=oy;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let v=new b;v.copy(u),le.pointToWorldFrame(i,o,v,u);let m=ay;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);let _=ly;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Yi=new b,Bs=new b,Us=new b,ny=new b,iy=new b,sy=new Qe,ry=new Qe,oy=new b,ay=new b,ly=new b,cy=new b,hy=new b;new b;var uy=new b,dy=new b,fy=new b,py=new b,my=new b,gy=new b,vy=new b,xy=new b,yy=new b,_y=new b,My=new b,by=new un,wy=[],Qo=new b,Dd=new b,Ey=new b,Sy=new b,Ty=new b;function Ay(r,t,e){let n=null,i=r.length;for(let s=0;s!==i;s++){let o=r[s],a=Ey;r[(s+1)%i].vsub(o,a);let l=Sy;a.cross(t,l);let c=Ty;e.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var ta=new b,Cy=new b,Ry=new b,Py=new b,Iy=[new b,new b,new b,new b,new b,new b],Ly=new b,Ny=new b,Dy=new b,By=new b,Uy=new b,Fy=new b,Oy=new b,zy=new b,Hy=new b,ky=new b,Vy=new b,Gy=new b,Wy=new b,qy=new b;new b;new b;var Xy=new b,Yy=new b,Zy=new b,$y=new b,jy=new b,Ky=new b,Jy=new b,Qy=new b,t_=new b,e_=new b,Bd=new Qe,n_=new b;new b;var i_=new b,Ud=new b,s_=new b,r_=new b,o_=new b,a_=[0],l_=new b,c_=new b,ga=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,s=n.length,o=i.length,a=0;for(let l=0;l<s;l++){let c=!1,h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Fd(t,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Fd(e,h)}}};function Fd(r,t){r.push((t&4294901760)>>16,t&65535)}var oh=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`,gh=class{constructor(){this.data={keys:[]}}get(t,e){let n=oh(t,e);return this.data[n]}set(t,e,n){let i=oh(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=oh(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},va=class extends na{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lh,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new dh,this.constraints=[],this.narrowphase=new mh(this),this.collisionMatrix=new ea,this.collisionMatrixPrevious=new ea,this.bodyOverlapKeeper=new ga,this.shapeOverlapKeeper=new ga,this.contactmaterials=[],this.contactMaterialTable=new gh,this.defaultMaterial=new pa("default"),this.defaultContactMaterial=new fa(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Os?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.ALL,n.from=t,n.to=e,n.callback=i,ah.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.ANY,n.from=t,n.to=e,n.result=i,ah.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.CLOSEST,n.from=t,n.to=e,n.result=i,ah.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof zt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let s=0;s<i.length;s++){let o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Fe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Fe.now(),s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Fe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=p_,i=m_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=zt.DYNAMIC,u=-1/0,f=this.constraints,g=f_;l.length();let v=l.x,m=l.y,p=l.z,x=0;for(c&&(u=Fe.now()),x=0;x!==s;x++){let L=o[x];if(L.type===d){let F=L.force,O=L.mass;F.x+=O*v,F.y+=O*m,F.z+=O*p}}for(let L=0,F=this.subsystems.length;L!==F;L++)this.subsystems[L].update();c&&(u=Fe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Fe.now()-u);let _=f.length;for(x=0;x!==_;x++){let L=f[x];if(!L.collideConnected)for(let F=n.length-1;F>=0;F-=1)(L.bodyA===n[F]&&L.bodyB===i[F]||L.bodyB===n[F]&&L.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),c&&(u=Fe.now());let y=d_,A=e.length;for(x=0;x!==A;x++)y.push(e[x]);e.length=0;let E=this.frictionEquations.length;for(x=0;x!==E;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=Fe.now()-u),c&&(u=Fe.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let C=e.length;for(let L=0;L!==C;L++){let F=e[L],O=F.bi,B=F.bj,Y=F.si,V=F.sj,$;if(O.material&&B.material?$=this.getContactMaterial(O.material,B.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,O.material&&B.material&&(O.material.friction>=0&&B.material.friction>=0&&O.material.friction*B.material.friction,O.material.restitution>=0&&B.material.restitution>=0&&(F.restitution=O.material.restitution*B.material.restitution)),a.addEquation(F),O.allowSleep&&O.type===zt.DYNAMIC&&O.sleepState===zt.SLEEPING&&B.sleepState===zt.AWAKE&&B.type!==zt.STATIC){let et=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),lt=B.sleepSpeedLimit**2;et>=lt*2&&(O.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===zt.DYNAMIC&&B.sleepState===zt.SLEEPING&&O.sleepState===zt.AWAKE&&O.type!==zt.STATIC){let et=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),lt=O.sleepSpeedLimit**2;et>=lt*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,B,!0),this.collisionMatrixPrevious.get(O,B)||(_r.body=B,_r.contact=F,O.dispatchEvent(_r),_r.body=O,B.dispatchEvent(_r)),this.bodyOverlapKeeper.set(O.id,B.id),this.shapeOverlapKeeper.set(Y.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Fe.now()-u,u=Fe.now()),x=0;x!==s;x++){let L=o[x];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){let L=f[x];L.update();for(let F=0,O=L.equations.length;F!==O;F++){let B=L.equations[F];a.addEquation(B)}}a.solve(t,this),c&&(h.solve=Fe.now()-u),a.removeAllEquations();let P=Math.pow;for(x=0;x!==s;x++){let L=o[x];if(L.type&d){let F=P(1-L.linearDamping,t),O=L.velocity;O.scale(F,O);let B=L.angularVelocity;if(B){let Y=P(1-L.angularDamping,t);B.scale(Y,B)}}}this.dispatchEvent(u_),c&&(u=Fe.now());let M=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,M,R);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Fe.now()-u),this.stepnumber+=1,this.dispatchEvent(h_);let U=!0;if(this.allowSleep)for(U=!1,x=0;x!==s;x++){let L=o[x];L.sleepTick(this.time),L.sleepState!==zt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(si,ri),t){for(let s=0,o=si.length;s<o;s+=2)Mr.bodyA=this.getBodyById(si[s]),Mr.bodyB=this.getBodyById(si[s+1]),this.dispatchEvent(Mr);Mr.bodyA=Mr.bodyB=null}if(e){for(let s=0,o=ri.length;s<o;s+=2)br.bodyA=this.getBodyById(ri[s]),br.bodyB=this.getBodyById(ri[s+1]),this.dispatchEvent(br);br.bodyA=br.bodyB=null}si.length=ri.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(si,ri),n){for(let s=0,o=si.length;s<o;s+=2){let a=this.getShapeById(si[s]),l=this.getShapeById(si[s+1]);oi.shapeA=a,oi.shapeB=l,a&&(oi.bodyA=a.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}if(i){for(let s=0,o=ri.length;s<o;s+=2){let a=this.getShapeById(ri[s]),l=this.getShapeById(ri[s+1]);ai.shapeA=a,ai.shapeB=l,a&&(ai.bodyA=a.body),l&&(ai.bodyB=l.body),this.dispatchEvent(ai)}ai.bodyA=ai.bodyB=ai.shapeA=ai.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new un;var ah=new gn,Fe=globalThis.performance||{};if(!Fe.now){let r=Date.now();Fe.timing&&Fe.timing.navigationStart&&(r=Fe.timing.navigationStart),Fe.now=()=>Date.now()-r}new b;var h_={type:"postStep"},u_={type:"preStep"},_r={type:zt.COLLIDE_EVENT_NAME,body:null,contact:null},d_=[],f_=[],p_=[],m_=[],si=[],ri=[],Mr={type:"beginContact",bodyA:null,bodyB:null},br={type:"endContact",bodyA:null,bodyB:null},oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ai={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var g_=[{meshName:"torso",half:[.36,.39,.19],mass:10},{meshName:"head",half:[.24,.23,.24],mass:2.4},{meshName:"upperArmR",half:[.095,.18,.095],mass:1.1},{meshName:"upperArmL",half:[.095,.18,.095],mass:1.1},{meshName:"forearmR",half:[.085,.22,.085],mass:.9},{meshName:"forearmL",half:[.085,.22,.085],mass:.9},{meshName:"legR",half:[.12,.44,.13],mass:3},{meshName:"legL",half:[.12,.44,.13],mass:3},{meshName:"footR",half:[.13,.06,.21],mass:.7},{meshName:"footL",half:[.13,.06,.21],mass:.7}],_h=Math.PI/3,ya=class{constructor(t,e,n){D(this,"group",new Xt);D(this,"bodies",new Map);D(this,"meshes",new Map);D(this,"character");D(this,"age",0);D(this,"fading",!1);D(this,"opacity",1);this.character=e;let i=e.group;for(let h of g_){let d=e.findPart(h.meshName);if(!d)continue;this.group.attach(d),this.meshes.set(h.meshName,d);let u=new zt({mass:h.mass,shape:new $i(new b(...h.half)),position:new b,linearDamping:.32,angularDamping:.72});d.getWorldPosition(xa),u.position.set(xa.x,xa.y,xa.z),d.getWorldQuaternion(Sr),u.quaternion.set(Sr.x,Sr.y,Sr.z,Sr.w),u.updateMassProperties(),t.world.addBody(u),this.bodies.set(h.meshName,u)}let s=this.meshes.get("torso");s&&s.attach(e.nameTag);let o=this.meshes.get("head");o&&e.findPart("hat")&&e.findPart("hat").parent,this.buildConstraints(t);let a=new b(n.x,n.y,n.z),l=this.bodies.get("torso"),c=this.bodies.get("head");l?.applyImpulse(new b(a.x*l.mass*.55,a.y*l.mass*.4,a.z*l.mass*.55)),c?.applyImpulse(new b(a.x*.9,a.y*.9,a.z*.9)),i.parent?.add(this.group),i.removeFromParent()}buildConstraints(t){let e=o=>this.bodies.get(o),n=o=>{o.collideConnected=!1,t.world.addConstraint(o)},i=(o,a,l,c,h=_h,d=Math.PI/6)=>{n(new ha(e(o),e(a),{pivotA:l,pivotB:c,axisA:b.UNIT_Y.clone(),axisB:b.UNIT_Y.clone(),angle:h,twistAngle:d}))},s=(o,a,l,c,h)=>{n(new ua(e(o),e(a),{pivotA:l,pivotB:c,axisA:h,axisB:h}))};i("torso","head",new b(0,.41,0),new b(0,-.25,0),Math.PI/5,Math.PI/6),i("torso","upperArmR",new b(-.455,.29,0),new b(0,.18,0),_h),i("torso","upperArmL",new b(.455,.29,0),new b(0,.18,0),_h),s("upperArmR","forearmR",new b(0,-.36,0),new b(0,.24,0),new b(1,0,0)),s("upperArmL","forearmL",new b(0,-.36,0),new b(0,.24,0),new b(1,0,0)),i("torso","legR",new b(-.18,-.4,0),new b(0,.44,0),Math.PI/4,Math.PI/8),i("torso","legL",new b(.18,-.4,0),new b(0,.44,0),Math.PI/4,Math.PI/8),s("legR","footR",new b(0,-.44,0),new b(0,.06,-.08),new b(1,0,0)),s("legL","footL",new b(0,-.44,0),new b(0,.06,-.08),new b(1,0,0))}update(t){this.age+=t;for(let[n,i]of this.bodies){let s=this.meshes.get(n);s.position.set(i.position.x,i.position.y,i.position.z),s.quaternion.set(i.quaternion.x,i.quaternion.y,i.quaternion.z,i.quaternion.w)}let e=this.meshes.get("torso");e&&(this.character.nameTag.position.set(0,.85,0),this.character.nameTag.quaternion.copy(e.quaternion).invert())}fade(t){return this.fading||(this.fading=!0,this.character.setOpacity(1)),this.opacity-=t*.8,this.character.setOpacity(Math.max(0,this.opacity)),this.opacity<=0}dispose(t){for(let e of this.bodies.values())t.world.removeBody(e);this.group.traverse(e=>{let n=e;n.isMesh&&n.geometry?.dispose()}),this.group.removeFromParent(),this.character.dispose()}},xa=new I,Sr=new we;var _a=class{constructor(){D(this,"world",new va({gravity:new b(0,-9.82,0)}));D(this,"accumulator",0);D(this,"FIXED",1/60);this.world.broadphase=new ra(this.world),this.world.allowSleep=!0,this.world.solver.iterations=14,this.world.defaultContactMaterial.friction=.55,this.world.defaultContactMaterial.restitution=.05;let t=new zt({mass:0,shape:new ma});t.quaternion.setFromEuler(-Math.PI/2,0,0),this.world.addBody(t);let e=(s,o,a,l,c,h,d=0)=>{let u=new zt({mass:0,shape:new $i(new b(l,c,h))});u.position.set(s,o,a),u.quaternion.setFromEuler(0,d,0),this.world.addBody(u)};e(0,2.1,-7.7,11,2.1,.15),e(0,2.1,7.7,11,2.1,.15),e(-11,2.1,0,.15,2.1,7.7),e(11,2.1,0,.15,2.1,7.7);let n=new zt({mass:0,shape:new Er(1.45,1.45,.1,12)});n.position.set(0,.78,0),this.world.addBody(n);let i=new zt({mass:0,shape:new Er(.68,.68,.75,8)});i.position.set(0,.38,0),this.world.addBody(i),e(0,.53,-5.6,4.5,.53,.5);for(let s of[-8.4,8.4])for(let o of[-2.6,2.6])e(s,.7,o,1.2,.7,.9);e(6.4,.45,4.9,1.25,.45,.75,.5)}step(t,e=1){let n=Math.min(t,.05)*e;this.accumulator+=n;let i=0;for(;this.accumulator>=this.FIXED&&i<5;)this.world.step(this.FIXED),this.accumulator-=this.FIXED,i++;i>=5&&(this.accumulator=0)}};var Ma=class{constructor(t={}){D(this,"group",new Xt);D(this,"cylinderAssembly",new Xt);D(this,"spinGroup",new Xt);D(this,"hammer",new Xt);D(this,"trigger",new Xt);D(this,"muzzle",new Ee);D(this,"flashGroup",new Xt);D(this,"flashLight");D(this,"cartridge",null);D(this,"hammerAngle",0);D(this,"hammerTarget",0);D(this,"triggerAngle",0);D(this,"triggerTarget",0);D(this,"spinAngle",0);D(this,"spinTarget",0);D(this,"spinVelocity",0);D(this,"freeSpin",!1);D(this,"craneAngle",0);D(this,"craneTarget",0);D(this,"recoil",0);D(this,"flashTime",0);D(this,"raiseT",0);D(this,"tilt",0);D(this,"tiltTarget",0);D(this,"held",!1);D(this,"tweening",!1);D(this,"chamberRims",[]);D(this,"events");this.events=t;let e=fd(512,3),n=new Rt({map:e.map,roughnessMap:e.roughness,normalMap:e.normal,color:13159634,metalness:.96,roughness:.38,envMapIntensity:1.6}),i=new Rt({map:e.map,roughnessMap:e.roughness,color:3816770,metalness:.9,roughness:.45,envMapIntensity:1.2}),s=new Rt({color:13214282,metalness:1,roughness:.28,envMapIntensity:1.8}),o=new Rt({color:657932,roughness:.7,metalness:.3}),a=ei({size:256,plankCount:1,base:[92,52,28],seed:13,gloss:.25}),l=new Rt({map:a.map,roughnessMap:a.roughness,normalMap:a.normal,roughness:.4,metalness:.05,envMapIntensity:.8}),c=(E,C,P,w=0,M=0,R=0)=>{let U=new dt(E,C);return U.position.set(w,M,R),U.castShadow=!0,P.add(U),U},h=c(new kt(.046,.062,.135),n,this.group,0,.006,-.028);c(new kt(.03,.014,.14),n,this.group,0,.042,-.028),c(new kt(.022,.012,.02),i,this.group,0,.052,-.088);let d=c(new ne(.0165,.0165,.175,20),n,this.group,0,.028,.105);d.rotation.x=Math.PI/2,c(new kt(.018,.006,.17),i,this.group,0,.048,.105);for(let E=0;E<5;E++)c(new kt(.014,.008,.006),i,this.group,0,.047,.03+E*.032);c(new kt(.02,.02,.16),n,this.group,0,.006,.1);let u=c(new ne(.0045,.0045,.14,10),i,this.group,0,-.008,.11);u.rotation.x=Math.PI/2,c(new kt(.006,.016,.014),i,this.group,0,.058,.185);let f=c(new ne(.0085,.0085,.02,12),o,this.group,0,.028,.192);f.rotation.x=Math.PI/2,this.cylinderAssembly.position.set(.028,.012,-.028),this.group.add(this.cylinderAssembly),this.cylinderAssembly.add(this.spinGroup);let g=c(new ne(.0275,.0275,.056,24),n,this.spinGroup);g.rotation.x=Math.PI/2;for(let E=0;E<6;E++){let C=E/6*Math.PI*2,P=c(new kt(.008,.004,.05),i,this.spinGroup,Math.sin(C)*.0245,Math.cos(C)*.0245,0);P.rotation.z=-C}for(let E=0;E<6;E++){let C=E/6*Math.PI*2+Math.PI/2,P=Math.sin(C)*.0155,w=Math.cos(C)*.0155,M=c(new ne(.0072,.0072,.06,10),o,this.spinGroup,P,w,.001);M.rotation.x=Math.PI/2;let R=c(new ne(.0085,.0085,.005,12),s.clone(),this.spinGroup,P,w,-.029);R.rotation.x=Math.PI/2,this.chamberRims.push(R)}let v=c(new kt(.016,.02,.05),n,this.cylinderAssembly,-.012,0,.028),m=c(new ne(.004,.004,.07,8),i,this.spinGroup);m.rotation.x=Math.PI/2,this.hammer.position.set(0,.03,-.098),this.group.add(this.hammer),c(new kt(.012,.03,.02),n,this.hammer,0,.012,0),c(new kt(.016,.008,.022),i,this.hammer,0,.032,-.004),this.trigger.position.set(0,-.02,-.038),this.group.add(this.trigger);let p=c(new kt(.007,.024,.009),n,this.trigger,0,-.012,.002);p.rotation.x=.25;let x=new dt(new Io(.017,.0028,8,18,Math.PI),i);x.position.set(0,-.026,-.032),x.rotation.set(Math.PI/2,0,0),x.castShadow=!0,this.group.add(x);let _=new Xt;_.position.set(0,-.028,-.062),_.rotation.x=-.32,this.group.add(_),c(new kt(.034,.09,.046),l,_,0,-.045,0);let y=c(new ne(.007,.007,.036,10),s,_,0,-.06,0);y.rotation.z=Math.PI/2,this.muzzle.position.set(0,.028,.21),this.group.add(this.muzzle),this.flashGroup.position.copy(this.muzzle.position),this.group.add(this.flashGroup);let A=new mn({color:16767392,transparent:!0,opacity:0,blending:En,depthWrite:!1});for(let E=0;E<3;E++){let C=new dt(new Ve(.34,.34),A);C.rotation.z=E/3*Math.PI,this.flashGroup.add(C)}this.flashLight=new Rn(16760944,0,4,2),this.flashLight.position.copy(this.muzzle.position),this.group.add(this.flashLight),this.group.visible=!1}giveTo(t){t.add(this.group),this.group.position.set(0,-.05,.02),this.group.rotation.set(Math.PI/2+.12,0,0),this.group.visible=!0,this.held=!0,this.raiseT=0}placeOnTable(t,e){let n=this.group.parent;n&&n.remove(this.group),this.group.position.copy(t),this.group.rotation.set(0,e,Math.PI/2-.08),this.group.visible=!0,this.held=!1,this.raiseT=1,this.tiltTarget=0,this.recoil=0}setTweening(t){this.tweening=t}getMuzzleWorld(t){return this.muzzle.getWorldPosition(t)}getFlashWorld(t){return this.flashGroup.getWorldPosition(t)}cock(t){this.hammerTarget=1,this.spinTarget=-t*(Math.PI*2/6),this.events.onCockStart?.()}setTilt(t){this.tiltTarget=t}squeezeTrigger(){this.triggerTarget=1}releaseTrigger(){this.triggerTarget=0}hammerFall(){this.hammerTarget=0,this.events.onHammerFall?.()}fire(){this.recoil=1,this.flashTime=1,this.hammerTarget=0,this.triggerTarget=0,this.events.onFire?.()}markChamberFired(t){let e=this.chamberRims[t%6];e&&e.material.color.setHex(1710620)}resetChambers(){for(let t of this.chamberRims)t.material.color.setHex(13214282);this.spinAngle=0,this.spinTarget=0}openCylinder(t){this.craneTarget=t?1.85:0}startFreeSpin(){this.freeSpin=!0,this.spinVelocity=26}stopFreeSpin(){this.freeSpin=!1,this.spinTarget=Math.round(this.spinAngle/(Math.PI*2/6))*(Math.PI*2/6)}spawnCartridge(){if(this.cartridge)return this.cartridge;let t=new Xt,e=new Rt({color:13214282,metalness:1,roughness:.25,envMapIntensity:1.8}),n=new Rt({color:11561006,metalness:1,roughness:.35,envMapIntensity:1.5}),i=new dt(new ne(.0079,.0079,.024,12),e),s=new dt(new ne(.0062,.0075,.012,12),n);s.position.y=.018;let o=new dt(new zn(.0062,10,8),n);return o.position.y=.024,t.add(i,s,o),t.userData.t=0,this.cartridge=t,this.group.add(t),t}finishCartridge(){this.cartridge&&(this.cartridge.removeFromParent(),this.cartridge=null)}update(t){if(this.raiseT<1){this.raiseT=Math.min(1,this.raiseT+t*3.5);let e=.6+.4*this.raiseT;this.group.scale.setScalar(e)}else this.group.scale.setScalar(1);if(this.hammerAngle=xe(this.hammerAngle,this.hammerTarget,14,t),this.triggerAngle=xe(this.triggerAngle,this.triggerTarget,18,t),this.hammer.rotation.x=-this.hammerAngle*.85,this.trigger.rotation.x=this.triggerAngle*.45,this.freeSpin)this.spinVelocity=Math.max(2.5,this.spinVelocity-t*9),this.spinAngle+=this.spinVelocity*t,this.spinGroup.rotation.z=this.spinAngle;else{let e=this.spinAngle;this.spinAngle=xe(this.spinAngle,this.spinTarget,10,t),this.spinGroup.rotation.z=this.spinAngle,Math.abs(e-this.spinTarget)>.001&&Math.abs(this.spinAngle-this.spinTarget)<.02&&this.events.onCylinderStop?.()}if(this.craneAngle=xe(this.craneAngle,this.craneTarget,6,t),this.cylinderAssembly.rotation.y=this.craneAngle,this.cylinderAssembly.position.x=.028+Math.sin(this.craneAngle)*.012,this.cartridge){let e=this.cartridge;e.userData.t=Math.min(1,e.userData.t+t*1.15);let n=e.userData.t,i=n*n*(3-2*n),s=new I(.06,-.08,-.1),o=new I(.028,.012+.0155,-.055);e.position.lerpVectors(s,o,i),e.quaternion.setFromEuler(new ke(Math.PI/2+(1-i)*1.2,(1-i)*2.4,0))}if(!this.tweening)if(this.tilt=xe(this.tilt,this.tiltTarget,5,t),this.held){this.recoil=Math.max(0,this.recoil-t*5.5);let e=this.recoil*this.recoil;this.group.position.z=.02-e*.03,this.group.rotation.x=Math.PI/2+.12+e*.5,this.group.rotation.z=this.tilt*1.05}else this.group.rotation.z=Math.PI/2-.08+this.tilt*1.05;if(this.flashTime>0){this.flashTime=Math.max(0,this.flashTime-t*14);let e=this.flashTime,n=this.flashGroup.children[0].material;n.opacity=e,this.flashGroup.scale.setScalar(.7+(1-e)*.9),this.flashGroup.rotation.z+=t*30,this.flashLight.intensity=e*40}else this.flashLight.intensity=0}get isFlashing(){return this.flashTime>0}};var v_=`
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (280.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,x_=`
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(vColor, tex.a * vAlpha);
  }
`,ba=class{constructor(t,e,n){D(this,"points");D(this,"pool",[]);D(this,"alive",[]);D(this,"posAttr");D(this,"sizeAttr");D(this,"colorAttr");D(this,"alphaAttr");let i=new De;i.setAttribute("position",new Re(new Float32Array(t*3),3)),i.setAttribute("aSize",new Re(new Float32Array(t),1)),i.setAttribute("aColor",new Re(new Float32Array(t*3),3)),i.setAttribute("aAlpha",new Re(new Float32Array(t),1)),this.posAttr=i.getAttribute("position"),this.sizeAttr=i.getAttribute("aSize"),this.colorAttr=i.getAttribute("aColor"),this.alphaAttr=i.getAttribute("aAlpha"),i.setDrawRange(0,0);let s=new se({uniforms:{uMap:{value:e}},vertexShader:v_,fragmentShader:x_,transparent:!0,depthWrite:!1,blending:n?En:xi});this.points=new Ts(i,s),this.points.frustumCulled=!1;for(let o=0;o<t;o++)this.pool.push({pos:new I,vel:new I,life:0,maxLife:1,size:1,sizeVel:0,color:new gt,alpha:1,drag:1,gravity:0})}spawn(t){let e=this.pool.pop();return e?(e.life=0,e.maxLife=t.maxLife??1,e.size=t.size??.1,e.sizeVel=t.sizeVel??0,e.color.copy(t.color??new gt(1,1,1)),e.alpha=t.alpha??1,e.drag=t.drag??1,e.gravity=t.gravity??0,e.pos.copy(t.pos),e.vel.copy(t.vel),this.alive.push(e),e):null}update(t){let e=0;for(let n=this.alive.length-1;n>=0;n--){let i=this.alive[n];if(i.life+=t,i.life>=i.maxLife){this.alive.splice(n,1),this.pool.push(i);continue}i.vel.y-=i.gravity*t,i.vel.multiplyScalar(Math.pow(i.drag,t*60)),i.pos.addScaledVector(i.vel,t),i.size=Math.max(0,i.size+i.sizeVel*t)}for(let n of this.alive){let i=n.life/n.maxLife;this.posAttr.setXYZ(e,n.pos.x,n.pos.y,n.pos.z),this.sizeAttr.setX(e,n.size),this.colorAttr.setXYZ(e,n.color.r,n.color.g,n.color.b),this.alphaAttr.setX(e,n.alpha*(1-i)*(i<.08?i/.08:1)),e++}this.points.geometry.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}},wa=class{constructor(t){D(this,"sparks");D(this,"smoke");D(this,"group",new Xt);D(this,"density");this.density=t,this.sparks=new ba(Math.floor(600*t),xr(64,.1),!0),this.smoke=new ba(Math.floor(260*t),gd(128,5),!1),this.group.add(this.sparks.points,this.smoke.points),this.group.traverse(e=>{e.matrixAutoUpdate=!1,e.updateMatrix()})}muzzleSmoke(t,e,n=1){let i=Math.floor(14*this.density*n);for(let s=0;s<i;s++)this.smoke.spawn({pos:t.clone().addScaledVector(e,Dt(0,.1)),vel:e.clone().multiplyScalar(Dt(.3,1.1)).add(new I(Dt(-.14,.14),Dt(.1,.35),Dt(-.14,.14))).multiplyScalar(n),maxLife:Dt(1.6,3.2),size:Dt(.12,.3)*n,sizeVel:Dt(.15,.3)*n,color:new gt(.66,.64,.62),alpha:Dt(.25,.45),drag:.96,gravity:-.06})}muzzleSparks(t,e){let n=Math.floor(22*this.density);for(let i=0;i<n;i++)this.sparks.spawn({pos:t.clone(),vel:e.clone().multiplyScalar(Dt(2,7)).add(new I(Dt(-1.4,1.4),Dt(-.8,1.4),Dt(-1.4,1.4))),maxLife:Dt(.12,.4),size:Dt(.02,.06),sizeVel:-.02,color:new gt(1,Dt(.55,.8),.25),alpha:1,drag:.9,gravity:3})}trail(t){let e=Math.max(1,Math.floor(2*this.density));for(let n=0;n<e;n++)this.sparks.spawn({pos:t.clone().add(new I(Dt(-.02,.02),Dt(-.02,.02),Dt(-.02,.02))),vel:new I(Dt(-.1,.1),Dt(-.1,.1),Dt(-.1,.1)),maxLife:Dt(.5,1.1),size:Dt(.025,.05),sizeVel:.02,color:new gt(1,.85,.55),alpha:.8,drag:.94,gravity:0})}impact(t,e){this.sparks.spawn({pos:t.clone(),vel:new I,maxLife:.22,size:.5,sizeVel:2.2,color:new gt(1,.9,.7),alpha:1,drag:1,gravity:0});let n=Math.floor(30*this.density),i=e.clone().negate();for(let s=0;s<n;s++)this.sparks.spawn({pos:t.clone(),vel:i.clone().multiplyScalar(Dt(.5,3)).add(new I(Dt(-2,2),Dt(-.5,2.4),Dt(-2,2))),maxLife:Dt(.2,.7),size:Dt(.02,.05),sizeVel:-.01,color:new gt(1,Dt(.6,.9),.3),alpha:1,drag:.92,gravity:5});for(let s=0;s<Math.floor(10*this.density);s++)this.smoke.spawn({pos:t.clone(),vel:i.clone().multiplyScalar(Dt(.2,.8)).add(new I(Dt(-.4,.4),Dt(0,.8),Dt(-.4,.4))),maxLife:Dt(.8,1.6),size:Dt(.1,.22),sizeVel:.25,color:new gt(.45,.4,.36),alpha:.5,drag:.95,gravity:-.15})}wisp(t){this.smoke.spawn({pos:t.clone(),vel:new I(Dt(-.03,.03),Dt(.05,.12),Dt(-.03,.03)),maxLife:Dt(3,6),size:Dt(.08,.2),sizeVel:.06,color:new gt(.5,.5,.52),alpha:.14,drag:.995,gravity:-.02})}update(t){this.sparks.update(t),this.smoke.update(t)}};var Ea=class{constructor(){D(this,"group",new Xt);D(this,"spinAxis",new I(0,0,1));D(this,"trailAccum",0);let t=new Rt({color:13214282,metalness:1,roughness:.22,envMapIntensity:2}),e=new Rt({color:11561006,metalness:1,roughness:.32,envMapIntensity:1.8}),n=new Rt({color:9079442,metalness:1,roughness:.5,envMapIntensity:1.2}),i=new dt(new ne(.0045,.0045,.014,12),t),s=new dt(new ne(.0047,.0047,.0016,12),n);s.position.y=-.0035;let o=new dt(new ne(.0044,.0045,.006,12),e);o.position.y=.01;let a=new dt(new zn(.0044,10,8),e);a.scale.set(1,.7,1),a.position.y=.014;let l=new Rn(16760960,.35,.5,2);l.position.y=.006,this.group.add(i,s,o,a,l)}setDirection(t){let e=new we().setFromUnitVectors(new I(0,1,0),t.clone().normalize());this.group.quaternion.copy(e),this.spinAxis.set(0,1,0)}update(t){this.group.rotateY(t*95),this.trailAccum+=t}};var li=new I(0,1,0),Ii=new I,zs=new I,Sa=new I,Mh=new I,Tr=new I,y_=new we,Ta=class{constructor(t){this.ctx=t;D(this,"phase","idle");D(this,"phaseTime",0);D(this,"shot",null);D(this,"result",null);D(this,"resultKnown",!1);D(this,"reloadTotal",9e3);D(this,"winnerId",null);D(this,"endScreenShown",!1);D(this,"timeScale",1);D(this,"timeScaleTarget",1);D(this,"activeShot",!1);D(this,"camPos",new I);D(this,"camLook",new I);D(this,"camInitialized",!1);D(this,"fovCurrent",55);D(this,"fovTarget",55);D(this,"fxTarget",{letterbox:0,vignette:.32,grain:.35,chroma:0,radial:0,fade:0,exposure:1,contrast:1.04,saturation:1.02,tintR:1,tintG:1,tintB:1,bloomBoost:0,dofMaxBlur:0});D(this,"bullet",null);D(this,"bulletPath",{from:new I,to:new I});D(this,"bulletAim",new I);D(this,"bulletSide",new I);D(this,"tmpHeadY",new I);D(this,"tmpHeadY2",new I);D(this,"heartbeatAccum",0);D(this,"spectatorDone",!1);D(this,"impactDone",!1);D(this,"holdEmpty",!1);D(this,"returnPose",{pos:new I,look:new I});D(this,"reloadBeats",new Set);D(this,"beats",new Set);D(this,"shakeAmount",0)}get active(){return this.phase!=="idle"}beginPreShot(t){this.phase==="preShot"&&this.shot?.shooterId===t.shooterId&&this.shot?.targetId===t.targetId||(this.phase!=="idle"&&this.cancel(),this.phase="preShot",this.phaseTime=0,this.shot=t,this.result=null,this.resultKnown=!1,this.spectatorDone=!1,this.activeShot=!0,this.camInitialized=!1,this.ctx.getPostFX().setCinematic(!0),this.ctx.getAudio().setTension(.75),this.ctx.getAudio().play("riser",{gain:.5}),this.fxTarget={...this.fxTarget,letterbox:1,vignette:.55,grain:.55,chroma:.0015,radial:0,fade:0,exposure:1.04,contrast:1.1,saturation:.94,tintR:1.02,tintG:.99,tintB:1,bloomBoost:.05,dofMaxBlur:.008})}resolveShot(t){this.result=t,this.resultKnown=!0}beginReload(){this.phase="reload",this.phaseTime=0,this.reloadTotal=Math.max(2500,this.ctx.rules.reloadMs),this.camInitialized=!1,this.activeShot=!0,this.fxTarget={...this.fxTarget,letterbox:1,vignette:.5,grain:.5,chroma:.001,radial:0,fade:0,exposure:1.02,contrast:1.08,saturation:.96,bloomBoost:.03,dofMaxBlur:.0085}}beginWinner(t){this.phase="winner",this.phaseTime=0,this.winnerId=t,this.endScreenShown=!1,this.camInitialized=!1,this.activeShot=!1,this.ctx.getAudio().setTension(0),this.ctx.getAudio().play("cheer",{gain:.7,reverb:.5}),this.fxTarget={...this.fxTarget,letterbox:1,vignette:.45,grain:.5,chroma:0,radial:0,fade:0,exposure:1.06,contrast:1.08,saturation:1.06,bloomBoost:.15,dofMaxBlur:.006}}cancel(){this.phase="idle",this.activeShot=!1,this.timeScale=this.timeScaleTarget=1,this.ctx.getAudio().setSlowmo(!1),this.ctx.getAudio().setTension(0),this.removeBullet(),this.fxTarget={letterbox:0,vignette:.32,grain:.35,chroma:0,radial:0,fade:0,exposure:1,contrast:1.04,saturation:1.02,tintR:1,tintG:1,tintB:1,bloomBoost:0,dofMaxBlur:0},this.ctx.getPostFX().setCinematic(!1)}update(t,e){if(this.timeScale=xe(this.timeScale,this.timeScaleTarget,6,t),this.ctx.getAudio().setSlowmo(this.timeScale<.7),this.phase==="idle"){this.applyFx(t,3);return}this.phaseTime+=t;let n=this.ctx.getPostFX();switch(this.phase){case"preShot":this.updatePreShot(t,e);break;case"trigger":this.updateTrigger(t,e);break;case"fire":this.updateFire(t,e);break;case"bullet":this.updateBullet(t,e);break;case"impact":this.updateImpact(t,e);break;case"hold":this.updateHold(t,e);break;case"return":this.updateReturn(t,e);break;case"reload":this.updateReload(t,e);break;case"returnAfterReload":this.updateReturnAfterReload(t,e);break;case"winner":this.updateWinner(t,e);break}this.camInitialized&&this.phase!=="return"&&this.phase!=="returnAfterReload"&&(e.position.copy(this.camPos),e.lookAt(this.camLook)),this.fovCurrent=xe(this.fovCurrent,this.fovTarget,4,t),Math.abs(e.fov-this.fovCurrent)>.01&&(e.fov=this.fovCurrent,e.updateProjectionMatrix()),n.params.dofFocus=this.camInitialized?this.camPos.distanceTo(this.camLook):8,this.applyFx(t,4)}updatePreShot(t,e){let n=this.shot,i=this.ctx.getCharacter(n.shooterId),s=this.ctx.getCharacter(n.targetId);if(!i)return this.cancel();let o=this.ctx.getRevolver(),a=Math.max(900,this.ctx.rules.preShotMs-500),l=this.phaseTime,c=this.tmpHeadY;s?s.getPartWorld("head",c):i.getPartWorld("head",c),c.y+=.12,i.setAimTarget(c),i.setLookAt(c),s&&!n.self&&s.setLookAt(o.getMuzzleWorld(Mh));let h=o.getMuzzleWorld(Ii),d=zs;n.self?d.copy(i.getPartWorld("head",Tr)).sub(h).normalize():d.copy(c).sub(h).normalize();let u=Sa.crossVectors(d,li).normalize();this.camInitialized||(this.camPos.copy(e.position),this.camLook.copy(c),this.camInitialized=!0,this.fovTarget=n.self?44:38);let f=Mh;if(n.self){let v=Tr.copy(d).negate();f.copy(i.getPartWorld("head",this.tmpHeadY2)).addScaledVector(u,1.25).addScaledVector(v,.45).addScaledVector(li,.12)}else f.copy(h).addScaledVector(d,-.52).addScaledVector(u,.36).addScaledVector(li,.17);f.x+=Math.sin(l*.7)*.02,f.y+=Math.sin(l*.53)*.012,Ae(this.camPos,f,2.6,t);let g=Tr;n.self?g.copy(i.getPartWorld("head",this.tmpHeadY2)).lerp(h,.35):g.copy(h).addScaledVector(d,1.4).lerp(c,.35),Ae(this.camLook,g,3,t),this.heartbeatAccum+=t,this.heartbeatAccum>.85&&(this.heartbeatAccum=0,this.ctx.getAudio().play("heartbeat",{gain:.35})),!this.beatFired("cocked")&&l>a*.42&&(this.setBeat("cocked"),o.cock(this.ctx.visualChamberIndex()+1)),!this.beatFired("squeezed")&&l>a*.75&&(this.setBeat("squeezed"),o.squeezeTrigger(),this.ctx.getAudio().play("trigger",{gain:.7})),l>=a&&this.resultKnown&&(this.phase="trigger",this.phaseTime=0,this.fovTarget=n.self?40:33,this.setBeat(""))}updateTrigger(t,e){let n=this.shot,i=this.ctx.getRevolver(),s=this.result?.result==="LIVE",o=this.phaseTime,a=Yo(Math.min(1,o/.65))*.16,l=new I(0,0,-1).applyQuaternion(e.quaternion);this.camPos.addScaledVector(l,-a*t*2.2),!this.beatFired("fall")&&o>(s?.3:.22)&&(this.setBeat("fall"),i.hammerFall(),s||this.ctx.getAudio().play3D("click",i.getFlashWorld(Ii),{gain:1.2,reverb:.5})),s?o>.42&&(this.phase="fire",this.phaseTime=0):o>1.6&&(this.phase="hold",this.phaseTime=0,this.holdEmpty=!0,i.releaseTrigger(),this.ctx.getAudio().setTension(0),this.ctx.getAudio().play("relief",{gain:.5}),this.ctx.getCharacter(n.shooterId)?.setHeadReaction(.3),this.ctx.getCharacter(n.targetId)?.setHeadReaction(-.2))}updateFire(t,e){let n=this.shot,i=this.ctx.getRevolver(),s=this.ctx.getAudio(),o=this.ctx.getParticles();if(!this.beatFired("fired")){this.setBeat("fired");let a=i.getMuzzleWorld(new I),l=this.ctx.getCharacter(n.targetId)?.getPartWorld("head")??a,c=n.self?new I().copy(this.ctx.getCharacter(n.shooterId).getPartWorld("head")).sub(a).normalize():new I().copy(l).sub(a).normalize();if(i.fire(),i.releaseTrigger(),o.muzzleSparks(a,c),o.muzzleSmoke(a,c),s.play3D("shot",a,{gain:1.15,reverb:.9}),s.play("boom",{gain:.5}),this.ctx.onVisualChamberFired(this.result.chamberIndex),i.markChamberFired(this.result.chamberIndex),s.setTension(0),this.shake(1.1),n.self){this.bulletPath.from.copy(a),this.bulletPath.to.copy(this.ctx.getCharacter(n.shooterId).getPartWorld("head")),this.phase="impact",this.phaseTime=.25,this.impactDone=!1,this.timeScaleTarget=.55;return}this.removeBullet(),this.bullet=new Ea,this.bullet.group.position.copy(a),this.bullet.setDirection(c),this.ctx.getScene().add(this.bullet.group),this.bulletAim.copy(c),this.bulletSide.crossVectors(c,li).normalize(),this.bulletPath.from.copy(a);let h=this.ctx.getCharacter(n.targetId);this.bulletPath.to.copy(h?h.getPartWorld("torso"):a.clone().addScaledVector(c,3)),this.bulletPath.to.y+=.25,this.phase="bullet",this.phaseTime=0,this.timeScaleTarget=.16}}updateBullet(t,e){let i=He(this.phaseTime/1.55,0,1),s=this.ctx.getRevolver(),o=this.ctx.getAudio(),a=this.ctx.getParticles();if(!this.bullet)return this.advanceToImpact();let{from:l,to:c}=this.bulletPath,h=xd(i),d=Tr.copy(l).lerp(c,h);this.bullet.group.position.copy(d),this.bullet.update(t),this.bullet.trailAccum>.016&&(this.bullet.trailAccum=0,a.trail(d));let u=this.bulletAim,f=this.bulletSide,g=Ii,v=zs;if(i<.3){let m=Yo(i/.3);g.copy(l).addScaledVector(u,-.55+m*.5).addScaledVector(f,.3+m*.55).addScaledVector(li,.22-m*.05),v.copy(l).lerp(this.bullet.group.position,.8)}else if(i<.78){let m=(i-.3)/.48,p=m*1.9-.35,x=Sa.copy(f).applyAxisAngle(u,p),_=pe(1.15,.85,m);g.copy(this.bullet.group.position).addScaledVector(u,-_).addScaledVector(x,_*.75).addScaledVector(li,pe(.3,.12,m)),v.copy(this.bullet.group.position)}else{let m=Yo((i-.78)/.22);g.copy(c).addScaledVector(u,-(1.7-m*.5)).addScaledVector(f,pe(.9,1.25,m)).addScaledVector(li,pe(.25,.4,m)),v.copy(d).lerp(c,m*.7)}this.camInitialized||(this.camPos.copy(g),this.camLook.copy(v),this.camInitialized=!0),Ae(this.camPos,g,3.4,t),Ae(this.camLook,v,6.5,t),this.fovTarget=pe(46,40,i),this.fxTarget.radial=Math.sin(Math.PI*He(i*1.15,0,1))*.55,this.fxTarget.chroma=.0022+i*.002,this.fxTarget.bloomBoost=.12,i>=1&&this.advanceToImpact()}advanceToImpact(){this.phase="impact",this.phaseTime=0,this.impactDone=!1,this.timeScaleTarget=.5,this.removeBullet()}updateImpact(t,e){let n=this.shot,i=this.ctx.getAudio(),s=this.ctx.getParticles();if(!this.impactDone){this.impactDone=!0;let o=this.ctx.getCharacter(n.targetId),a=o?o.getPartWorld("torso"):this.bulletPath.to.clone();a.y+=.3;let l=a.clone().sub(this.bulletPath.from).normalize();s.impact(a,l),i.play3D("thud",a,{gain:1,reverb:.4}),i.play("boom",{gain:.9}),this.shake(1.6);let c=n.self?new I(-Math.sin(this.ctx.getCharacter(n.shooterId).group.rotation.y)*-2.2,2.6,-Math.cos(this.ctx.getCharacter(n.shooterId).group.rotation.y)*-2.2):l.clone().multiplyScalar(4.2).add(new I(0,2.4,0));this.ctx.createRagdoll(n.targetId,c),this.timeScaleTarget=1}this.timeScaleTarget=pe(this.timeScaleTarget,1,t*3),this.phaseTime>.55&&(this.phase="hold",this.phaseTime=0,this.holdEmpty=!1)}updateHold(t,e){let n=this.holdEmpty,i=n?1.3:1.6,s=this.shot;if(n){let a=this.ctx.getRevolver().getFlashWorld(new I);Ae(this.camLook,a,2,t),this.fovTarget=46}else{let o=this.bulletPath.to,a=this.phaseTime*.22,l=Ii.set(Math.sin(a+1.2)*1.7,.55,Math.cos(a+1.2)*1.7).add(o);Ae(this.camPos,l,1.6,t),Ae(this.camLook,zs.copy(o).addScaledVector(li,-.4),3,t),this.fovTarget=44;let c=this.result?.eliminatedId;!this.spectatorDone&&c&&this.ctx.isMe(c)&&this.phaseTime>i*.55&&(this.spectatorDone=!0,this.ctx.becomeSpectator())}this.phaseTime>i&&(this.phase="return",this.phaseTime=0,this.fxTarget.radial=0,this.fxTarget.chroma=8e-4)}updateReturn(t,e){let n=this.returnPose;this.ctx.gameplayCameraPose(n);let i=2.3;Ae(this.camPos,n.pos,i,t),Ae(this.camLook,n.look,i+1,t),e.position.copy(this.camPos),e.lookAt(this.camLook),this.fovTarget=58;let s=He(this.phaseTime/.9,0,1);this.fxTarget.letterbox=Math.max(0,1-s),this.fxTarget.vignette=pe(.55,.32,s),this.fxTarget.grain=pe(.55,.35,s),this.fxTarget.chroma=0,this.fxTarget.exposure=pe(1.04,1,s),this.fxTarget.contrast=pe(1.1,1.04,s),this.fxTarget.saturation=pe(.94,1.02,s),this.fxTarget.dofMaxBlur=.004,this.phaseTime>1.15&&this.finishShot()}finishShot(){this.phase="idle",this.activeShot=!1,this.shot=null,this.result=null,this.resultKnown=!1,this.timeScaleTarget=1,this.fxTarget={letterbox:0,vignette:.32,grain:.35,chroma:0,radial:0,fade:0,exposure:1,contrast:1.04,saturation:1.02,tintR:1,tintG:1,tintB:1,bloomBoost:0,dofMaxBlur:0},this.ctx.getPostFX().setCinematic(!1)}updateReload(t,e){let n=this.reloadTotal,i=this.phaseTime/n,s=this.ctx.getRevolver(),o=this.ctx.getAudio(),a=(x,_)=>i>=_&&!this.reloadBeats.has(x)?(this.reloadBeats.add(x),!0):!1,c=(this.shot?this.ctx.getCharacter(this.shot.shooterId):null)??this.ctx.myCharacter();c&&(s.group.getWorldPosition(Ii),c.setAimTarget(zs.copy(Ii).add(Sa.set(0,.6,0))));let h=s.group.getWorldPosition(Ii),d=s.group.getWorldQuaternion(y_),u=zs.set(0,0,1).applyQuaternion(d),f=Sa.set(1,0,0).applyQuaternion(d).normalize(),g=this.phaseTime*.12,v=Mh.set(0,0,0).addScaledVector(f,Math.cos(g)*.42).addScaledVector(u,.22).addScaledVector(li,.12+Math.sin(g)*.04),m=Tr.copy(h).add(v);this.camInitialized||(this.camPos.copy(e.position),this.camLook.copy(h),this.camInitialized=!0,this.fovTarget=34);let p=i>.58&&i<.82?1.35:1;m.sub(h).multiplyScalar(p).add(h),Ae(this.camPos,m,2.2,t),Ae(this.camLook,h,4,t),a("tilt",.1)&&s.setTilt(1),a("crane",.24)&&(s.openCylinder(!0),o.play3D("craneOpen",h,{gain:.9,reverb:.5})),a("cartridge",.4)&&(s.spawnCartridge(),o.play3D("cartridgeIn",h,{gain:1,reverb:.6})),a("spin",.58)&&(s.startFreeSpin(),o.play3D("spinLoop",h,{gain:.8,rate:1,reverb:.35}),this.fxTarget.radial=.18),a("spinStop",.78)&&(s.stopFreeSpin(),this.fxTarget.radial=0),a("close",.84)&&(s.openCylinder(!1),s.setTilt(0),o.play3D("reloadClack",h,{gain:1,reverb:.6})),i>=.9&&(this.fxTarget.fade=He((i-.9)/.06,0,1)),a("reset",.965)&&(s.resetChambers(),s.finishCartridge(),this.ctx.onResetChambers()),i>=1&&(this.phase="returnAfterReload",this.phaseTime=0,this.reloadBeats.clear())}updateReturnAfterReload(t,e){let n=this.returnPose;this.ctx.gameplayCameraPose(n),this.fxTarget.fade=Math.max(0,1-this.phaseTime/.8),Ae(this.camPos,n.pos,2,t),Ae(this.camLook,n.look,2.6,t),e.position.copy(this.camPos),e.lookAt(this.camLook),this.fovTarget=58,this.fxTarget.letterbox=Math.max(0,1-this.phaseTime/1.1),this.phaseTime>1.4&&(this.finishShot(),this.fxTarget.fade=0)}updateWinner(t,e){let n=this.winnerId?this.ctx.getCharacter(this.winnerId):null;if(n){let i=n.getPartWorld("torso",Ii),s=this.phaseTime*.25+1,o=zs.set(i.x+Math.sin(s)*2.6,i.y+.7,i.z+Math.cos(s)*2.6);this.camInitialized||(this.camPos.copy(o),this.camLook.copy(i),this.camInitialized=!0),Ae(this.camPos,o,1.4,t),Ae(this.camLook,i,3,t),e.position.copy(this.camPos),e.lookAt(this.camLook),this.fovTarget=42,n.setLookAt(e.position.clone())}!this.endScreenShown&&this.phaseTime>3.2&&(this.endScreenShown=!0,this.ctx.showEndScreen(this.winnerId))}beatFired(t){return this.beats.has(t)}setBeat(t){t?this.beats.add(t):this.beats.clear()}removeBullet(){this.bullet&&(this.bullet.group.removeFromParent(),this.bullet=null)}shake(t){this.shakeAmount=Math.max(this.shakeAmount,t)}consumeShake(){let t=this.shakeAmount;return this.shakeAmount=0,t}applyFx(t,e){let n=this.ctx.getPostFX().params,i=this.fxTarget;n.letterbox=xe(n.letterbox,i.letterbox,e,t),n.vignette=xe(n.vignette,i.vignette,e,t),n.grain=xe(n.grain,i.grain,e,t),n.chroma=xe(n.chroma,i.chroma,e,t),n.radial=xe(n.radial,i.radial,e+2,t),n.fade=xe(n.fade,i.fade,6,t),n.exposure=xe(n.exposure,i.exposure,e,t),n.contrast=xe(n.contrast,i.contrast,e,t),n.saturation=xe(n.saturation,i.saturation,e,t),n.tint.setRGB(xe(n.tint.r,i.tintR,e,t),xe(n.tint.g,i.tintG,e,t),xe(n.tint.b,i.tintB,e,t)),n.bloomBoost=xe(n.bloomBoost,i.bloomBoost,e,t),n.dofMaxBlur=xe(n.dofMaxBlur,i.dofMaxBlur,e,t)}};var Li={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var We=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},__=new Es(-1,1,1,-1,0,1),bh=class extends De{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},M_=new bh,vn=class{constructor(t){this._mesh=new dt(M_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,__)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hs=class extends We{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ze.clone(t.uniforms),this.material=new se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ar=class extends We{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Aa=class extends We{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ie}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Li),this.copyPass.material.blending=Ce,this.clock=new Is}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ar!==void 0&&(o instanceof Ar?n=!0:o instanceof Aa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ra=class extends We{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Xd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ks=class r extends We{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new be(s,o,{type:Ie}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new be(s,o,{type:Ie});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new be(s,o,{type:Ie});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Xd;this.highPassUniforms=ze.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new bt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Li;this.copyUniforms=ze.clone(h.uniforms),this.blendMaterial=new se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:En,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new mn,this.fsQuad=new vn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ks.BlurDirectionX=new bt(1,0);ks.BlurDirectionY=new bt(0,1);var Yd={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Pa=class extends We{constructor(t,e,n){super(),this.scene=t,this.camera=e;let i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new be(1,1,{minFilter:Ne,magFilter:Ne,type:Ie}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ur,this.materialDepth.depthPacking=$c,this.materialDepth.blending=Ce;let a=Yd,l=ze.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=i,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new se({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new vn(this.materialBokeh),this._oldClearColor=new gt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let i=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(i),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Zd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ia=class extends We{constructor(){super();let t=Zd;this.uniforms=ze.clone(t.uniforms),this.material=new Lo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new vn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ht},cameraProjectionMatrixInverse:{value:new Ht},cameraWorldMatrix:{value:new Ht},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Rr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},La={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function $d(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=b_(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let s=new Wi(i,t,t);return s.wrapS=Sn,s.wrapT=Sn,s.needsUpdate=!0,s}function b_(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=o++;s++,i--}return n}var Pr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:wh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new bt},cameraProjectionMatrixInverse:{value:new Ht},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function wh(r,t,e){let n=w_(r,t,e),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function w_(r,t,e){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*t*i/r,o=Math.pow(i/(r-1),e);n.push(new I(Math.cos(s),Math.sin(s),o))}return n}var Na=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=t-u,v=e-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let x=g-m+h,_=v-p+h,y=g-1+2*h,A=v-1+2*h,E=l&255,C=c&255,P=this.perm[E+this.perm[C]]%12,w=this.perm[E+m+this.perm[C+p]]%12,M=this.perm[E+1+this.perm[C+1]]%12,R=.5-g*g-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[P],g,v));let U=.5-x*x-_*_;U<0?i=0:(U*=U,i=U*U*this.dot(this.grad3[w],x,_));let L=.5-y*y-A*A;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[M],y,A)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,v=h-g,m=d-g,p=u-g,x=t-v,_=e-m,y=n-p,A,E,C,P,w,M;x>=_?_>=y?(A=1,E=0,C=0,P=1,w=1,M=0):x>=y?(A=1,E=0,C=0,P=1,w=0,M=1):(A=0,E=0,C=1,P=1,w=0,M=1):_<y?(A=0,E=0,C=1,P=0,w=1,M=1):x<y?(A=0,E=1,C=0,P=0,w=1,M=1):(A=0,E=1,C=0,P=1,w=1,M=0);let R=x-A+f,U=_-E+f,L=y-C+f,F=x-P+2*f,O=_-w+2*f,B=y-M+2*f,Y=x-1+3*f,V=_-1+3*f,$=y-1+3*f,et=h&255,lt=d&255,it=u&255,Yt=this.perm[et+this.perm[lt+this.perm[it]]]%12,j=this.perm[et+A+this.perm[lt+E+this.perm[it+C]]]%12,st=this.perm[et+P+this.perm[lt+w+this.perm[it+M]]]%12,xt=this.perm[et+1+this.perm[lt+1+this.perm[it+1]]]%12,at=.6-x*x-_*_-y*y;at<0?i=0:(at*=at,i=at*at*this.dot3(this.grad3[Yt],x,_,y));let At=.6-R*R-U*U-L*L;At<0?s=0:(At*=At,s=At*At*this.dot3(this.grad3[j],R,U,L));let Lt=.6-F*F-O*O-B*B;Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this.dot3(this.grad3[st],F,O,B));let Ut=.6-Y*Y-V*V-$*$;return Ut<0?a=0:(Ut*=Ut,a=Ut*Ut*this.dot3(this.grad3[xt],Y,V,$)),32*(i+s+o+a)}noise4d(t,e,n,i){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,v=(t+e+n+i)*l,m=Math.floor(t+v),p=Math.floor(e+v),x=Math.floor(n+v),_=Math.floor(i+v),y=(m+p+x+_)*c,A=m-y,E=p-y,C=x-y,P=_-y,w=t-A,M=e-E,R=n-C,U=i-P,L=w>M?32:0,F=w>R?16:0,O=M>R?8:0,B=w>U?4:0,Y=M>U?2:0,V=R>U?1:0,$=L+F+O+B+Y+V,et=o[$][0]>=3?1:0,lt=o[$][1]>=3?1:0,it=o[$][2]>=3?1:0,Yt=o[$][3]>=3?1:0,j=o[$][0]>=2?1:0,st=o[$][1]>=2?1:0,xt=o[$][2]>=2?1:0,at=o[$][3]>=2?1:0,At=o[$][0]>=1?1:0,Lt=o[$][1]>=1?1:0,Ut=o[$][2]>=1?1:0,de=o[$][3]>=1?1:0,Kt=w-et+c,me=M-lt+c,H=R-it+c,qe=U-Yt+c,$t=w-j+2*c,jt=M-st+2*c,It=R-xt+2*c,ce=U-at+2*c,Pt=w-At+3*c,N=M-Lt+3*c,S=R-Ut+3*c,W=U-de+3*c,J=w-1+4*c,tt=M-1+4*c,K=R-1+4*c,wt=U-1+4*c,ht=m&255,ft=p&255,Zt=x&255,rt=_&255,yt=a[ht+a[ft+a[Zt+a[rt]]]]%32,Nt=a[ht+et+a[ft+lt+a[Zt+it+a[rt+Yt]]]]%32,Bt=a[ht+j+a[ft+st+a[Zt+xt+a[rt+at]]]]%32,_t=a[ht+At+a[ft+Lt+a[Zt+Ut+a[rt+de]]]]%32,Jt=a[ht+1+a[ft+1+a[Zt+1+a[rt+1]]]]%32,Ft=.6-w*w-M*M-R*R-U*U;Ft<0?h=0:(Ft*=Ft,h=Ft*Ft*this.dot4(s[yt],w,M,R,U));let te=.6-Kt*Kt-me*me-H*H-qe*qe;te<0?d=0:(te*=te,d=te*te*this.dot4(s[Nt],Kt,me,H,qe));let z=.6-$t*$t-jt*jt-It*It-ce*ce;z<0?u=0:(z*=z,u=z*z*this.dot4(s[Bt],$t,jt,It,ce));let ct=.6-Pt*Pt-N*N-S*S-W*W;ct<0?f=0:(ct*=ct,f=ct*ct*this.dot4(s[_t],Pt,N,S,W));let Z=.6-J*J-tt*tt-K*K-wt*wt;return Z<0?g=0:(Z*=Z,g=Z*Z*this.dot4(s[Jt],J,tt,K,wt)),27*(h+d+u+f+g)}};var Vs=class r extends We{constructor(t,e,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$d(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new be(this.width,this.height,{type:Ie}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new se({defines:Object.assign({},Cr.defines),uniforms:ze.clone(Cr.uniforms),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,blending:Ce,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new No,this.normalMaterial.blending=Ce,this.pdMaterial=new se({defines:Object.assign({},Pr.defines),uniforms:ze.clone(Pr.uniforms),vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new se({defines:Object.assign({},Rr.defines),uniforms:ze.clone(Rr.uniforms),vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,blending:Ce}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new se({uniforms:ze.clone(Li.uniforms),vertexShader:Li.vertexShader,fragmentShader:Li.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oo,blendDst:Ls,blendEquation:pn,blendSrcAlpha:Fo,blendDstAlpha:Ls,blendEquationAlpha:pn}),this.blendMaterial=new se({uniforms:ze.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uc,blendSrc:Oo,blendDst:Ls,blendEquation:pn,blendSrcAlpha:Fo,blendDstAlpha:Ls,blendEquationAlpha:pn}),this.fsQuad=new vn(null),this.originalClearColor=new gt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ss,this.depthTexture.format=wi,this.depthTexture.type=bi,this.normalRenderTarget=new be(this.width,this.height,{minFilter:Ne,magFilter:Ne,type:Ie,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ce,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ce,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ce,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ce,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ce,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let i=e.get(n);n.visible=i}),e.clear()}generateNoise(t=64){let e=new Na,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new Wi(i,t,t,hn,Tn);return s.wrapS=Sn,s.wrapT=Sn,s.needsUpdate=!0,s}};Vs.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var E_={uniforms:{tDiffuse:{value:null},uLetterbox:{value:0},uVignette:{value:.3},uGrain:{value:.05},uChroma:{value:0},uRadial:{value:0},uFade:{value:0},uExposure:{value:1},uContrast:{value:1},uSaturation:{value:1},uTint:{value:new gt(1,1,1)},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uLetterbox, uVignette, uGrain, uChroma, uRadial, uFade;
    uniform float uExposure, uContrast, uSaturation, uTime;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7)) + uTime * 13.7) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = vec2(0.5);
      vec2 toC = uv - center;
      float dist = length(toC);

      // radial (zoom) motion blur
      vec3 col = vec3(0.0);
      if (uRadial > 0.001) {
        float total = 0.0;
        const int TAPS = 9;
        for (int i = 0; i < TAPS; i++) {
          float t = float(i) / float(TAPS - 1);
          float scale = 1.0 - uRadial * 0.14 * t * (0.3 + dist);
          vec2 suv = center + toC * scale;
          float w = 1.0 - t * 0.55;
          col += texture2D(tDiffuse, suv).rgb * w;
          total += w;
        }
        col /= total;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }

      // chromatic aberration grows toward the edges
      if (uChroma > 0.0001) {
        vec2 off = toC * uChroma * (0.25 + dist);
        col.r = mix(col.r, texture2D(tDiffuse, uv + off).r, 0.85);
        col.b = mix(col.b, texture2D(tDiffuse, uv - off).b, 0.85);
      }

      // filmic grade
      col *= uExposure * uTint;
      col = (col - 0.5) * uContrast + 0.5;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, uSaturation);

      // vignette
      float vig = smoothstep(0.95, 0.28, dist * (1.0 + uVignette * 0.9));
      col *= mix(1.0, vig, clamp(uVignette, 0.0, 1.0));

      // film grain
      float g = hash(uv * vec2(1920.0, 1080.0));
      col += (g - 0.5) * uGrain * 0.09;

      // letterbox bars
      float bar = uLetterbox * 0.115;
      if (uv.y < bar || uv.y > 1.0 - bar) col = vec3(0.0);

      // fade to black
      col *= (1.0 - clamp(uFade, 0.0, 1.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `},Da=class{constructor(t,e,n,i){D(this,"composer");D(this,"renderPass");D(this,"bokehPass");D(this,"bloomPass");D(this,"cinePass");D(this,"gtaoPass",null);D(this,"baseBloom",.32);D(this,"params",{letterbox:0,vignette:.32,grain:.35,chroma:0,radial:0,fade:0,exposure:1,contrast:1.04,saturation:1.02,tint:new gt(1,1,1),bloomBoost:0,dofFocus:8,dofMaxBlur:0});D(this,"quality");D(this,"cinematicActive",!1);this.quality=i;let s=t.getDrawingBufferSize(new bt),o=new be(Math.max(2,s.x),Math.max(2,s.y),{samples:i.pixelRatio>=1.25?4:0,type:Ie});if(this.composer=new Ca(t,o),this.renderPass=new Ra(e,n),this.composer.addPass(this.renderPass),i.gtao)try{this.gtaoPass=new Vs(e,n,1,1),this.gtaoPass.output=Vs.OUTPUT.Default,this.composer.addPass(this.gtaoPass)}catch{this.gtaoPass=null}this.bokehPass=new Pa(e,n,{focus:8,aperture:8e-5,maxblur:.008}),this.bokehPass.enabled=i.dof==="always",this.composer.addPass(this.bokehPass),this.bloomPass=new ks(new bt(1,1),this.baseBloom,.55,.85),this.bloomPass.enabled=i.bloom,this.composer.addPass(this.bloomPass),this.composer.addPass(new Ia),this.cinePass=new Hs(E_),this.composer.addPass(this.cinePass)}setCinematic(t){this.cinematicActive=t,this.refreshDof()}refreshDof(){this.quality.dof==="off"?this.bokehPass.enabled=!1:this.quality.dof==="cinematic"?this.bokehPass.enabled=this.cinematicActive:this.bokehPass.enabled=!0}setSize(t,e){this.composer.setSize(t,e),this.gtaoPass?.setSize(t,e)}render(t){let e=this.params,n=this.cinePass.uniforms;if(n.uLetterbox.value=e.letterbox,n.uVignette.value=e.vignette,n.uGrain.value=e.grain,n.uChroma.value=e.chroma,n.uRadial.value=e.radial,n.uFade.value=e.fade,n.uExposure.value=e.exposure,n.uContrast.value=e.contrast,n.uSaturation.value=e.saturation,n.uTint.value.copy(e.tint),n.uTime.value+=t,this.bloomPass.strength=this.baseBloom+e.bloomBoost,this.bloomPass.enabled=this.quality.bloom,this.bokehPass.enabled){let i=this.bokehPass.uniforms;i.focus.value=e.dofFocus,i.aperture.value=e.dofMaxBlur>0?12e-5:2e-5,i.maxblur.value=e.dofMaxBlur>0?Math.min(.012,e.dofMaxBlur):.001}this.composer.render(t)}};var Eh=["low","medium","high","ultra"],S_={low:{pixelRatio:.7,shadows:!1,shadowMapSize:512,secondaryShadowLights:0,bloom:!1,dof:"off",gtao:!1,volumetrics:!1,reflectors:0,anisotropy:1,particleDensity:.35,fog:!0,envMapSize:128},medium:{pixelRatio:.9,shadows:!0,shadowMapSize:1024,secondaryShadowLights:0,bloom:!0,dof:"cinematic",gtao:!1,volumetrics:!0,reflectors:0,anisotropy:2,particleDensity:.6,fog:!0,envMapSize:128},high:{pixelRatio:1.25,shadows:!0,shadowMapSize:2048,secondaryShadowLights:1,bloom:!0,dof:"cinematic",gtao:!1,volumetrics:!0,reflectors:1,anisotropy:4,particleDensity:.85,fog:!0,envMapSize:256},ultra:{pixelRatio:2,shadows:!0,shadowMapSize:2048,secondaryShadowLights:2,bloom:!0,dof:"always",gtao:!0,volumetrics:!0,reflectors:2,anisotropy:8,particleDensity:1,fog:!0,envMapSize:256}};function Ba(r){return{...S_[r]}}function jd(){let r=document.createElement("canvas").getContext("webgl2");if(!r)return"low";let t=r.getExtension("WEBGL_debug_renderer_info"),e=t?String(r.getParameter(t.UNMASKED_RENDERER_WEBGL)):"",n=navigator.hardwareConcurrency||4,i=e.toLowerCase();return/rtx|radeon rx (6|7|9)|arc a7|apple m[1-9] (pro|max|ultra)/.test(i)?"ultra":/gtx 1(6|7|8|9)|radeon rx 5|apple m[1-9]|arc a3|vega|rx 5[6-9]00/.test(i)||n>=8?"high":n>=4?"medium":"low"}var Ua=class{constructor(){D(this,"ctx",null);D(this,"master");D(this,"sfxBus");D(this,"musicBus");D(this,"ambienceBus");D(this,"reverb");D(this,"reverbSend");D(this,"slowmoFilter");D(this,"buffers",new Map);D(this,"started",!1);D(this,"musicNodes",[]);D(this,"musicFilter");D(this,"tension",0);D(this,"tensionNodes",[]);D(this,"nextClink",0);D(this,"clinkTimer",0);D(this,"volume",.8);D(this,"musicVolume",.5);D(this,"ready",!1)}async start(t){if(this.started)return;this.started=!0;let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;let n=this.ctx;this.master=n.createGain(),this.master.gain.value=this.volume,this.slowmoFilter=n.createBiquadFilter(),this.slowmoFilter.type="lowpass",this.slowmoFilter.frequency.value=2e4;let i=n.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=20,i.ratio.value=5,this.master.connect(this.slowmoFilter).connect(i).connect(n.destination),this.sfxBus=n.createGain(),this.musicBus=n.createGain(),this.musicBus.gain.value=this.musicVolume,this.ambienceBus=n.createGain(),this.ambienceBus.gain.value=.5,this.sfxBus.connect(this.master),this.musicBus.connect(this.master),this.ambienceBus.connect(this.master),t?.("Tuning the room reverb"),this.reverb=n.createConvolver(),this.reverb.buffer=this.makeImpulseResponse(2.1,2.6),this.reverbSend=n.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.master),t?.("Loading the revolver sounds"),this.buffers.set("click",this.makeClick(2400,.05,.6)),this.buffers.set("trigger",this.makeClick(1400,.04,.35)),this.buffers.set("cock",this.makeTwoStage()),this.buffers.set("cylinderStop",this.makeClick(1700,.06,.5)),this.buffers.set("shot",this.makeGunshot()),this.buffers.set("shotIndoor",this.makeGunshot(!0)),this.buffers.set("reloadClack",this.makeClack(900,.09)),this.buffers.set("craneOpen",this.makeClack(600,.14)),this.buffers.set("cartridgeIn",this.makeBrassInsert()),this.buffers.set("spinLoop",this.makeSpinLoop()),t?.("Recording the bar ambience"),this.buffers.set("footstep",this.makeFootstep(.9)),this.buffers.set("footstep2",this.makeFootstep(1.1)),this.buffers.set("glassClink",this.makeGlassClink()),this.buffers.set("whoosh",this.makeWhoosh()),this.buffers.set("boom",this.makeBoom()),this.buffers.set("heartbeat",this.makeHeartbeat()),this.buffers.set("riser",this.makeRiser()),this.buffers.set("relief",this.makeRelief()),this.buffers.set("spectator",this.makeSpectator()),this.buffers.set("ui",this.makeClick(3e3,.03,.25)),this.buffers.set("draw",this.makeDraw()),this.buffers.set("cheer",this.makeCheer()),this.buffers.set("thud",this.makeThud()),this.buffers.set("ambience",this.makeAmbience()),this.buffers.set("music",this.makeMusicLoop()),this.ready=!0,t?.("Sound check complete")}resume(){this.ctx?.resume()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}setMusicVolume(t){this.musicVolume=t,this.musicBus&&(this.musicBus.gain.value=t)}get sr(){return this.ctx?.sampleRate??44100}makeBuffer(t,e){let n=Math.max(1,Math.floor(this.sr*t)),i=this.ctx.createBuffer(2,n,this.sr);for(let s=0;s<2;s++){let o=i.getChannelData(s);for(let a=0;a<n;a++){let l=a/this.sr;o[a]=e(l,a,o)}}return i}makeImpulseResponse(t,e){let n=Math.floor(this.sr*t),i=this.ctx.createBuffer(2,n,this.sr);for(let s=0;s<2;s++){let o=i.getChannelData(s);for(let a=0;a<n;a++){let l=a/n;o[a]=(Math.random()*2-1)*Math.pow(1-l,e)*(a<40?a/40:1)}}return i}makeClick(t,e,n){return this.makeBuffer(e,i=>{let s=Math.exp(-i/(e*.22)),o=Math.min(1,i/8e-4),a=Math.sin(2*Math.PI*t*i)*.6+Math.sin(2*Math.PI*t*2.7*i)*.25,l=(Math.random()*2-1)*.5*Math.exp(-i/.004);return(a+l)*s*o*n})}makeTwoStage(){return this.makeBuffer(.24,t=>{let e=t<.12?this.clickShape(t,1800,.05):0,n=t>=.13?this.clickShape(t-.13,900,.08):0;return(e+n)*.9})}clickShape(t,e,n){let i=Math.exp(-t/(n*.25));return(Math.sin(2*Math.PI*e*t)*.5+(Math.random()*2-1)*.5*Math.exp(-t/.003))*i}makeGunshot(t=!1){let e=t?1.8:.9;return this.makeBuffer(e,n=>{let i=(Math.random()*2-1)*Math.exp(-n/.006),s=(Math.random()*2-1)*Math.exp(-n/.05)*.9,o=Math.sin(2*Math.PI*52*n)*Math.exp(-n/.16)*1.1,a=(Math.random()*2-1)*Math.exp(-n/.22)*.32,l=i*.95+s+o+a;if(t){let c=(Math.random()*2-1)*Math.pow(1-n/e,2.6)*.22;l+=c}return Math.tanh(l*1.4)*.9})}makeClack(t,e){return this.makeBuffer(e,n=>{let i=Math.exp(-n/(e*.2)),s=Math.sin(2*Math.PI*t*n)*.5+Math.sin(2*Math.PI*t*1.62*n)*.3+Math.sin(2*Math.PI*t*2.9*n)*.18,o=(Math.random()*2-1)*Math.exp(-n/.005)*.7;return(s+o)*i*.7})}makeBrassInsert(){return this.makeBuffer(.34,t=>{let e=0;if(t<.05&&(e=(Math.random()*2-1)*Math.exp(-t/.01)*.4),t>=.16&&t<.26){let n=t-.16;e=(Math.sin(2*Math.PI*3100*n)*.5+Math.sin(2*Math.PI*4700*n)*.3+(Math.random()*2-1)*Math.exp(-n/.006)*.5)*Math.exp(-n/.03)}if(t>=.26){let n=t-.26;e=(Math.sin(2*Math.PI*1100*n)*.5+(Math.random()*2-1)*.4)*Math.exp(-n/.015)}return e*.8})}makeSpinLoop(){return this.makeBuffer(3.4,t=>{let e=Math.max(1.6,22-t*7),n=t*e%1,i=n<.12?1-n/.12:0,s=Math.max(0,1-t/3.3);return(Math.sin(2*Math.PI*1500*n)*.4*i+(Math.random()*2-1)*i*.3)*s*.5})}makeFootstep(t){return this.makeBuffer(.16,e=>{let n=Math.sin(2*Math.PI*95*t*e)*Math.exp(-e/.035)*.8,i=(Math.random()*2-1)*Math.exp(-e/.02)*.25;return(n+i)*.5})}makeGlassClink(){return this.makeBuffer(.5,t=>{let e=Math.exp(-t/.14);return(Math.sin(2*Math.PI*2350*t)*.5+Math.sin(2*Math.PI*3570*t+.7)*.35+Math.sin(2*Math.PI*5230*t+1.3)*.2)*e*.24})}makeWhoosh(){return this.makeBuffer(1,t=>{let n=Math.exp(-Math.pow((t-.4)/.26,2)),i=Math.random()*2-1,s=400+Math.sin(t*7)*350;return i*n*Math.sin(2*Math.PI*s*t)*.3})}makeBoom(){return this.makeBuffer(2.2,t=>{let e=60*Math.exp(-t*1.6)+30,n=Math.sin(2*Math.PI*e*t)*Math.exp(-t/.7),i=Math.sin(2*Math.PI*28*t)*Math.exp(-t/1.1)*.6;return Math.tanh((n+i)*1.8)*.9})}makeHeartbeat(){return this.makeBuffer(1,t=>{let e=Math.exp(-Math.pow((t-.08)/.05,2)),n=Math.exp(-Math.pow((t-.34)/.05,2))*.7;return Math.sin(2*Math.PI*58*t)*(e+n)*.9})}makeRiser(){return this.makeBuffer(2.6,t=>{let e=t/2.6,n=e*e,i=Math.random()*2-1,s=Math.sin(2*Math.PI*(55+220*e)*t);return(i*.35+s*.3)*n*.4})}makeRelief(){return this.makeBuffer(1.4,t=>{let e=220*Math.pow(2,t*.4),n=Math.exp(-t/.7);return(Math.sin(2*Math.PI*e*t)*.3+Math.sin(2*Math.PI*e*1.5*t)*.15)*n*.25})}makeSpectator(){return this.makeBuffer(2.6,t=>{let e=Math.exp(-t/1.2),n=Math.sin(2*Math.PI*70*t)*.4+Math.sin(2*Math.PI*70*1.01*t)*.4,i=Math.sin(2*Math.PI*(900-500*t)*t)*Math.exp(-t/.4)*.15;return(n+i)*e*.5})}makeDraw(){return this.makeBuffer(.3,t=>{let e=Math.exp(-t/.07);return(Math.sin(2*Math.PI*700*t)*.4+(Math.random()*2-1)*Math.exp(-t/.01)*.4)*e*.6})}makeCheer(){return this.makeBuffer(3,t=>{let e=Math.min(1,t/.3)*Math.exp(-t/1.6),n=0;for(let s=0;s<5;s++){let o=t*(2.7+s*.83)%1;o<.1&&(n+=(1-o/.1)*(.5+Math.random()*.5))}let i=(Math.random()*2-1)*.25;return(n*.22+i)*e*.6})}makeThud(){return this.makeBuffer(.3,t=>(Math.sin(2*Math.PI*70*t)*Math.exp(-t/.06)+(Math.random()*2-1)*Math.exp(-t/.015)*.3)*.7)}makeAmbience(){return this.makeBuffer(8,t=>{let e=Math.sin(2*Math.PI*58*t)*.5+Math.sin(2*Math.PI*116*t)*.22,n=(Math.random()*2-1)*.16,i=Math.sin(2*Math.PI*.37*t)*Math.sin(2*Math.PI*.61*t)>.55?(Math.random()*2-1)*.05:0;return(e*.3+n+i)*.5})}makeMusicLoop(){let t=[55,51.9,46.2,49],e=[[1,1.2,1.5,1.8],[1,1.19,1.5,1.78],[1,1.25,1.5,1.875],[1,1.2,1.5,1.78]],n=8,i=3;return this.makeBuffer(n*i,s=>{let o=Math.floor(s/i)%n,a=t[o%4],l=e[o%4],c=s%i/i,h=0;for(let[g,v]of l.entries()){let m=a*4*v;h+=Math.sin(2*Math.PI*m*s+g)*(.16+.05*Math.sin(s*.5+g))/l.length}let d=s%(i/2),u=Math.exp(-d/.5),f=a*(d<i/4?1:1.5);return h+=Math.sin(2*Math.PI*f*s)*u*.3,h+=(Math.random()*2-1)*.015*(c>.5?1:.4),h*.55})}source(t,e=1){let n=this.buffers.get(t);if(!n||!this.ctx)return null;let i=this.ctx.createBufferSource();return i.buffer=n,i.playbackRate.value=e,i}play(t,e={}){if(!this.ctx)return;let n=this.source(t,e.rate??1);if(!n)return;let i=this.ctx.createGain();if(i.gain.value=e.gain??1,n.connect(i),i.connect(e.music?this.musicBus:this.sfxBus),e.reverb){let s=this.ctx.createGain();s.gain.value=e.reverb,i.connect(s).connect(this.reverbSend)}n.start(),n.onended=()=>{try{i.disconnect()}catch{}}}play3D(t,e,n={}){if(!this.ctx)return;let i=this.source(t,n.rate??1);if(!i)return;let s=this.ctx.createPanner();s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=1.2,s.maxDistance=30,s.rolloffFactor=1.4,s.positionX?(s.positionX.value=e.x,s.positionY.value=e.y,s.positionZ.value=e.z):s.setPosition(e.x,e.y,e.z);let o=this.ctx.createGain();if(o.gain.value=n.gain??1,i.connect(o).connect(s),s.connect(this.sfxBus),n.reverb){let a=this.ctx.createGain();a.gain.value=n.reverb,s.connect(a).connect(this.reverbSend)}i.start(),i.onended=()=>{try{s.disconnect(),o.disconnect()}catch{}}}startLoops(){if(!this.ctx||this.musicNodes.length)return;let t=this.source("ambience"),e=this.source("music");t&&(t.loop=!0,t.connect(this.ambienceBus),t.start(),this.musicNodes.push(t)),e&&(e.loop=!0,this.musicFilter=this.ctx.createBiquadFilter(),this.musicFilter.type="lowpass",this.musicFilter.frequency.value=8e3,e.connect(this.musicFilter).connect(this.musicBus),e.start(),this.musicNodes.push(e))}setLoopsRunning(t){let e=this.ctx?.currentTime??0;this.ambienceBus.gain.linearRampToValueAtTime(t?.5:.15,e+.8),this.musicBus.gain.linearRampToValueAtTime(t?this.musicVolume:this.musicVolume*.4,e+.8)}setTension(t){if(this.tension=t,!this.ctx)return;let e=this.ctx.currentTime;if(t>.05&&this.tensionNodes.length===0)for(let n of[0,3.1]){let i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.value=55+n;let s=this.ctx.createGain();s.gain.value=0;let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=240,i.connect(o).connect(s).connect(this.musicBus),i.start(),this.tensionNodes.push({osc:i,gain:s})}for(let{gain:n}of this.tensionNodes)n.gain.linearRampToValueAtTime(t*.05,e+.4);if(t<=.05&&this.tensionNodes.length){for(let{osc:n,gain:i}of this.tensionNodes)i.gain.linearRampToValueAtTime(0,e+1),n.stop(e+1.2);this.tensionNodes=[]}}setSlowmo(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.slowmoFilter.frequency.linearRampToValueAtTime(t?420:2e4,e+.15),this.musicFilter&&this.musicFilter.frequency.linearRampToValueAtTime(t?500:8e3,e+.15)}updateListener(t,e){if(!this.ctx)return;let n=this.ctx.listener,i=t.getWorldPosition(T_),s=t.getWorldQuaternion(R_),o=A_.set(0,0,-1).applyQuaternion(s),a=C_.set(0,1,0).applyQuaternion(s);try{n.positionX?(n.positionX.value=i.x,n.positionY.value=i.y,n.positionZ.value=i.z,n.forwardX.value=o.x,n.forwardY.value=o.y,n.forwardZ.value=o.z,n.upX.value=a.x,n.upY.value=a.y,n.upZ.value=a.z):(n.setPosition(i.x,i.y,i.z),n.setOrientation(o.x,o.y,o.z,a.x,a.y,a.z))}catch{}this.clinkTimer+=e,this.clinkTimer>this.nextClink&&(this.nextClink=Dt(6,18),this.clinkTimer=0,this.play3D("glassClink",new I(Dt(-6,6),1.1,Dt(-7,-4)),{gain:Dt(.3,.7),reverb:.6}))}},T_=new I,A_=new I,C_=new I,R_=new we;var nt=r=>document.getElementById(r),Fa=class{constructor(t){D(this,"cb");D(this,"myId","");D(this,"isHost",!1);D(this,"currentQuality","high");D(this,"turnDeadline",0);D(this,"turnTimerRAF",0);D(this,"promptVisible",!1);D(this,"tickTimer",()=>{let t=Math.max(0,(this.turnDeadline-performance.now())/1e3);if(nt("turnTimerFill").style.width=`${t/Math.max(1,this.turnDeadlineSec)*100}%`,t<=0){this.turnTimerRAF=0;return}this.turnTimerRAF=requestAnimationFrame(this.tickTimer)});D(this,"turnDeadlineSec",45);D(this,"lastPromptHtml","");this.cb=t,this.wire()}wire(){let t=s=>{let o=nt("nameInput").value.trim()||"Stranger",a=nt("qualitySelect").value;localStorage.setItem("rr_name",o),localStorage.setItem("rr_quality",a),this.cb.onEnter(o,a,s)};nt("createRoomBtn").onclick=()=>t({kind:"create"}),nt("joinRoomBtn").onclick=()=>{let s=nt("codeInput").value.trim().toUpperCase();if(s.length<3){this.toast("Enter the 4-letter room code first.","error");return}t({kind:"join",code:s})},nt("nameInput").addEventListener("keydown",s=>{s.key==="Enter"&&t({kind:"create"})}),nt("codeInput").addEventListener("keydown",s=>{s.key==="Enter"&&nt("joinRoomBtn").click()}),nt("codeInput").addEventListener("input",()=>{let s=nt("codeInput");s.value=s.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4)}),nt("copyCodeBtn").onclick=async()=>{let s=nt("roomCode").textContent??"";try{await navigator.clipboard.writeText(s),this.toast(`Room code ${s} copied \u2014 send it to your friends!`)}catch{this.toast(`Room code: ${s}`)}},nt("readyBtn").onclick=()=>{let s=nt("readyBtn").dataset.on==="1";this.cb.onReady(!s)},nt("startBtn").onclick=()=>this.cb.onStart();let e=(s,o,a,l)=>{nt(s).addEventListener("input",()=>{let c=parseInt(nt(s).value,10);nt(o).textContent=a(c),this.cb.onSettingsChanged({[l]:c})})};e("setLive","setLiveVal",s=>String(s),"liveCount"),e("setChambers","setChambersVal",s=>String(s),"chamberCount"),e("setTimer","setTimerVal",s=>`${s}s`,"turnTimeoutSec"),nt("setTurnOrder").onchange=()=>this.cb.onSettingsChanged({turnOrder:nt("setTurnOrder").value}),nt("setEmptySelf").onchange=()=>this.cb.onSettingsChanged({emptySelfShot:nt("setEmptySelf").value}),nt("backToLobbyBtn").onclick=()=>this.cb.onBackToLobby(),nt("settingsBtn").onclick=()=>{nt("settings").classList.remove("hidden")},nt("closeSettings").onclick=()=>{nt("settings").classList.add("hidden")},nt("gfxQuality").onchange=()=>{this.currentQuality=nt("gfxQuality").value,this.cb.onQualityChange(this.currentQuality)},nt("gfxAuto").onchange=()=>this.cb.onAutoQuality(nt("gfxAuto").checked),nt("volMaster").oninput=()=>this.cb.onVolume(parseInt(nt("volMaster").value,10)/100),nt("volMusic").oninput=()=>this.cb.onMusicVolume(parseInt(nt("volMusic").value,10)/100),nt("sens").oninput=()=>this.cb.onSensitivity(parseInt(nt("sens").value,10)/100),nt("specPrev").onclick=()=>this.cb.onSpectatorPrev(),nt("specNext").onclick=()=>this.cb.onSpectatorNext(),nt("specFree").onclick=()=>this.cb.onSpectatorFree();let n=localStorage.getItem("rr_name");n&&(nt("nameInput").value=n);let i=localStorage.getItem("rr_quality");i&&(nt("qualitySelect").value=i)}setLoadProgress(t,e){nt("loadFill").style.width=`${Math.round(t*100)}%`,nt("loadStep").textContent=e}showEntry(t,e){nt("entryPanel").classList.remove("hidden"),nt("qualityGuess").textContent=`(detected: ${t})`,nt("playerCountHint").textContent=e}hideLoading(){nt("loading").classList.add("hidden")}showEntryAgain(){nt("loading").classList.remove("hidden"),nt("entryPanel").classList.remove("hidden")}showLobby(){nt("lobby").classList.remove("hidden"),nt("hud").classList.add("hidden"),nt("endscreen").classList.add("hidden")}hideLobby(){nt("lobby").classList.add("hidden"),nt("hud").classList.remove("hidden"),nt("settingsBtn").classList.remove("hidden"),nt("controlsHint").classList.remove("hidden")}setRoomCode(t){nt("roomCodeRow").classList.remove("hidden"),nt("roomCode").textContent=t}setMyInfo(t,e){this.myId=t,this.isHost=t===e}renderLobby(t,e,n,i){this.isHost=this.myId===e;let s=nt("lobbyPlayers");s.innerHTML="";for(let c of t){let h=document.createElement("li"),d="#"+ni[c.colorIndex%ni.length].toString(16).padStart(6,"0");h.innerHTML=`
        <span class="dot" style="background:${d};color:${d}"></span>
        <span class="p-name">${Sh(c.name)}</span>
        ${c.id===e?'<span class="p-tag">host</span>':""}
        ${c.connected?"":'<span class="p-tag">reconnecting\u2026</span>'}
        <span class="${c.ready?"p-ready":"p-waiting"}">${c.ready?"READY":"waiting"}</span>`,s.appendChild(h)}let o=t.find(c=>c.id===this.myId)?.ready??!1,a=nt("readyBtn");a.dataset.on=o?"1":"0",a.textContent=o?"\u2713 READY":"I'M READY",a.classList.toggle("primary",!o),nt("hostSettings").classList.toggle("hidden",!this.isHost),nt("startBtn").classList.toggle("hidden",!this.isHost),nt("startBtn").disabled=!n;let l=t.filter(c=>c.ready).length;nt("lobbyStatus").textContent=`${t.length} player${t.length===1?"":"s"} \xB7 ${l} ready \xB7 need ${i.minPlayers}+ to start`,this.isHost&&(nt("setLive").value=String(i.liveCount),nt("setLiveVal").textContent=String(i.liveCount),nt("setChambers").value=String(i.chamberCount),nt("setChambersVal").textContent=String(i.chamberCount),nt("setTimer").value=String(i.turnTimeoutSec),nt("setTimerVal").textContent=`${i.turnTimeoutSec}s`,nt("setTurnOrder").value=i.turnOrder,nt("setEmptySelf").value=i.emptySelfShot)}renderPlayersList(t,e){let n=nt("playersList");n.innerHTML="";for(let i of t){if(i.left)continue;let s=document.createElement("div");s.className=`pl-row${i.alive&&!i.spectator?"":" dead"}${i.id===e?" turn":""}${i.id===this.myId?" me":""}`;let o="#"+ni[i.colorIndex%ni.length].toString(16).padStart(6,"0");s.innerHTML=`
        <span class="pl-dot" style="background:${o}"></span>
        <span class="pl-name">${Sh(i.name)}</span>`,n.appendChild(s)}}showTurnBanner(t,e,n){nt("turnBanner").classList.remove("hidden");let i=nt("turnText");i.textContent=t,i.classList.toggle("you",e),this.turnDeadline=performance.now()+n*1e3,this.turnTimerRAF||this.tickTimer()}hideTurnBanner(){nt("turnBanner").classList.add("hidden")}setTurnDuration(t){this.turnDeadlineSec=t}showPrompt(t){if(t===this.lastPromptHtml&&this.promptVisible)return;this.lastPromptHtml=t;let e=nt("prompt");e.innerHTML=t,e.classList.remove("hidden"),this.promptVisible=!0}hidePrompt(){this.promptVisible&&(this.lastPromptHtml="",nt("prompt").classList.add("hidden"),this.promptVisible=!1)}get isPromptVisible(){return this.promptVisible}showCrosshair(t){let e=nt("crosshair");e.classList.remove("hidden"),e.classList.toggle("hot",t)}hideCrosshair(){nt("crosshair").classList.add("hidden")}showSpectator(t){nt("spectatorBar").classList.remove("hidden"),nt("specName").textContent=t}hideSpectator(){nt("spectatorBar").classList.add("hidden")}setNetInfo(t,e,n,i){nt("netinfo").innerHTML=`${t?`<span style="color:#6fdc8c">\u25CF</span> connected \xB7 ${e}ms`:'<span class="off">\u25CF reconnecting\u2026</span>'}<br>${n} fps \xB7 ${i}`}showEndScreen(t,e,n,i){nt("endscreen").classList.remove("hidden"),nt("winnerName").textContent=t??"NOBODY SURVIVED";let s=nt("standings");s.innerHTML="",[...e].filter(a=>!a.left).sort((a,l)=>Number(l.alive)-Number(a.alive)).forEach((a,l)=>{let c=document.createElement("div");c.className="st-row";let h="#"+ni[a.colorIndex%ni.length].toString(16).padStart(6,"0");c.innerHTML=`
        <span class="st-pos">${l+1}.</span>
        <span class="pl-dot" style="background:${h}"></span>
        <span>${Sh(a.name)}</span>
        ${a.alive&&!a.spectator?'<span class="p-ready">survived</span>':'<span class="st-dead">eliminated</span>'}`,s.appendChild(c)}),nt("backToLobbyBtn").classList.toggle("hidden",!n),nt("endHint").textContent=i?"The night is yours.":n?"You can bring everyone back to the lobby.":"Waiting for the host\u2026"}hideEndScreen(){nt("endscreen").classList.add("hidden")}toast(t,e="info"){let n=document.createElement("div");n.className=`toast${e==="error"?" error":""}`,n.textContent=t,nt("toasts").appendChild(n),setTimeout(()=>n.remove(),4200)}};function Sh(r){return r.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Kd=[[3.6,3.2],[-3.6,3.4],[4.4,-2.6],[-4.4,-2.8],[0,4.6],[6,1.4],[-6,-1.2],[1.8,-4.2]],Oa=class{constructor(){D(this,"renderer");D(this,"scene",new To);D(this,"camera");D(this,"physics");D(this,"bar");D(this,"particles");D(this,"revolver");D(this,"audio",new Ua);D(this,"postfx");D(this,"cinematic");D(this,"net",new Vo);D(this,"ui");D(this,"rules",{chamberCount:6,liveCount:1});D(this,"phase","CONNECTING");D(this,"roomCode","");D(this,"myId","");D(this,"entities",new Map);D(this,"currentTurnId",null);D(this,"turnNumber",0);D(this,"visualChamber",0);D(this,"matchPlayers",[]);D(this,"camYaw",Math.PI);D(this,"camPitch",-.12);D(this,"camPos",new I(0,2,5));D(this,"camLook",new I(0,1.4,0));D(this,"spectatorMode","follow");D(this,"spectatorTargetId",null);D(this,"freeCamPos",new I(0,2.4,6));D(this,"shake",0);D(this,"keys",new Set);D(this,"pointerLocked",!1);D(this,"sentShotThisTurn",!1);D(this,"sendMoveTimer",0);D(this,"footTimer",0);D(this,"qualityLevel","high");D(this,"quality",Ba("high"));D(this,"autoQuality",!0);D(this,"fpsEMA",60);D(this,"qualityCheckTimer",0);D(this,"gunTween",null);D(this,"clock",new Is);D(this,"raf",0);D(this,"lastNetInfo",0);D(this,"matchStartGrace",0);D(this,"paused",!1);D(this,"sensitivity",1);D(this,"lastKnownHostId","");D(this,"raycaster",new Uo);D(this,"currentCineShooterId",null)}setPaused(t){this.paused=t}async init(t,e){e(.05,"Warming up the renderer"),this.renderer=new Eo({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=gr,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bc,this.camera=new Le(58,1,.05,60),this.scene.fog=new So(788742,.03),this.scene.background=new gt(394243),await Th(),e(.12,"Pouring the drinks"),this.quality=Ba(this.qualityLevel),this.bar=new Xo(this.quality),this.bar.build((s,o)=>e(.12+o*.55,s)),this.scene.add(this.bar.group),await Th(),e(.7,"Capturing the room reflections"),this.physics=new _a,this.particles=new wa(this.quality.particleDensity),this.scene.add(this.particles.group);let n=new cr(this.quality.envMapSize,{generateMipmaps:!0,minFilter:Kn}),i=new lr(.4,40,n);i.position.set(0,1.7,0),this.scene.add(i),i.update(this.renderer,this.scene),this.scene.environment=n.texture,this.scene.remove(i),await Th(),e(.8,"Loading the revolver"),this.revolver=new Ma({onCockStart:()=>this.audio.play3D("cock",this.revolver.getFlashWorld(Gs),{gain:.9,reverb:.4}),onCylinderStop:()=>this.audio.play3D("cylinderStop",this.revolver.getFlashWorld(Gs),{gain:.7}),onHammerFall:()=>{},onFire:()=>{}}),this.scene.add(this.revolver.group),this.revolver.placeOnTable(new I(.42,.855,.18),2.1),this.revolver.group.visible=!1,e(.9,"Setting the mood"),this.postfx=new Da(this.renderer,this.scene,this.camera,this.quality),this.cinematic=new Ta(this),this.ui=new Fa(this.makeUICallbacks()),this.wireInput(t),this.wireNetwork(),this.applyQuality(this.qualityLevel,!0),e(1,"Ready"),this.startLoop()}applyQuality(t,e=!1){this.qualityLevel=t,this.quality=Ba(t);let n=this.quality,i=Math.min(window.devicePixelRatio||1,n.pixelRatio);this.renderer.setPixelRatio(i),this.renderer.shadowMap.enabled=n.shadows,this.scene.traverse(s=>{let o=s.material;o&&(Array.isArray(o)?o:[o]).forEach(a=>a.needsUpdate=!0)}),this.renderer.shadowMap.needsUpdate=!0,this.postfx.bloomPass.enabled=n.bloom,this.postfx.refreshDof(),this.bar&&this.bar.group.traverse(s=>{(s instanceof Rs||s instanceof Ps)&&(s.shadow&&s.shadow.mapSize.set(n.shadowMapSize,n.shadowMapSize),s.shadow&&s.shadow.map?.dispose?.(),s.shadow&&(s.shadow.map=null))}),this.resize(),e||this.ui.toast(`Graphics: ${t.toUpperCase()}`,"info")}makeUICallbacks(){return{onEnter:(t,e,n)=>this.enter(t,e,n),onReady:t=>this.net.send({type:"set_ready",ready:t}),onStart:()=>this.net.send({type:"start_game"}),onSettingsChanged:t=>this.net.send({type:"update_settings",rules:t}),onBackToLobby:()=>this.net.send({type:"return_to_lobby"}),onQualityChange:t=>this.applyQuality(t),onAutoQuality:t=>{this.autoQuality=t},onVolume:t=>this.audio.setVolume(t),onMusicVolume:t=>this.audio.setMusicVolume(t),onSensitivity:t=>{this.sensitivity=t},onSpectatorPrev:()=>this.cycleSpectator(-1),onSpectatorNext:()=>this.cycleSpectator(1),onSpectatorFree:()=>this.toggleFreeCam()}}async enter(t,e,n){this.applyQuality(e),await this.audio.start(),this.audio.startLoops(),this.audio.setLoopsRunning(!0),this.ui.setLoadProgress(1,n.kind==="create"?"Opening a room\u2026":`Joining room ${n.code}\u2026`),this.net.connect(t,n.kind==="create"?{create:!0}:{room:n.code})}wireNetwork(){this.net.onStatusChange=t=>{!t&&this.phase!=="CONNECTING"&&this.roomCode&&this.ui.toast("Connection lost \u2014 reconnecting\u2026","error")},this.net.on("welcome",t=>{this.myId=t.playerId,this.rules=t.rules,this.phase=t.phase==="PLAYING"?"PLAYING":t.phase==="ENDING"?"ENDING":"LOBBY",this.roomCode=t.roomCode,this.ui.setMyInfo(this.myId,""),this.ui.setRoomCode(t.roomCode),this.ui.hideLoading(),this.phase==="LOBBY"&&this.ui.showLobby()}),this.net.on("lobby_state",t=>{this.syncLobbyEntities(t.players);let e=t.hostId;this.ui.setMyInfo(this.myId,e),this.ui.renderLobby(t.players,e,t.canStart,t.rules),this.rules=t.rules}),this.net.on("game_start",t=>this.onGameStart(t)),this.net.on("turn_start",t=>this.onTurnStart(t)),this.net.on("turn_action",t=>this.onTurnAction(t)),this.net.on("shot_result",t=>this.onShotResult(t)),this.net.on("reload_start",t=>{this.cinematic.beginReload(),t.firstChamberOffset}),this.net.on("states",t=>this.onStates(t)),this.net.on("player_left",t=>this.onPlayerLeft(t)),this.net.on("spectator_start",t=>this.onSpectatorStart(t)),this.net.on("match_end",t=>this.onMatchEnd(t)),this.net.on("back_to_lobby",()=>this.onBackToLobby()),this.net.on("error",t=>{this.ui.toast(t.message,"error"),t.code==="room_not_found"&&(this.roomCode="",this.ui.showEntryAgain())})}entity(t){return this.entities.get(t)}ensureEntity(t,e,n){let i=this.entities.get(t);return i||(i={id:t,name:e,colorIndex:n,character:null,inMatch:!1,alive:!0,spectator:!1,left:!1,netPos:new I,netYaw:0,netSpeed:0,lastNetTime:0,footTimer:0,ragdoll:null},this.entities.set(t,i)),i}spawnCharacter(t,e,n){t.character||(t.character=new $o(t.id,t.name,t.colorIndex),t.character.group.position.copy(e),t.character.group.rotation.y=n,this.scene.add(t.character.group))}removeCharacter(t){t.ragdoll&&(t.ragdoll.dispose(this.physics),t.ragdoll=null),t.character&&(t.character.dispose(),t.character=null)}syncLobbyEntities(t){if(this.phase!=="LOBBY")return;let e=new Set;t.forEach((n,i)=>{e.add(n.id);let s=this.ensureEntity(n.id,n.name,n.colorIndex);if(s.name=n.name,!s.character&&n.connected){let o=Kd[i%Kd.length];this.spawnCharacter(s,new I(o[0],0,o[1]),Math.PI)}});for(let[n,i]of this.entities)!e.has(n)&&!i.inMatch&&(this.removeCharacter(i),this.entities.delete(n))}onGameStart(t){this.phase="PLAYING",this.rules=t.rules,this.cinematic.cancel(),this.ui.hideLobby(),this.ui.hideEndScreen(),this.ui.hideSpectator(),this.ui.setTurnDuration(t.rules.turnTimeoutSec);for(let n of this.entities.values())this.removeCharacter(n),n.ragdoll=null;this.entities.clear();let e=this.bar.buildChairsForPlayers(t.players.length);this.matchPlayers=t.players,t.players.forEach(n=>{let i=this.ensureEntity(n.id,n.name,n.colorIndex);i.inMatch=!0,i.alive=n.alive,i.spectator=n.spectator,i.left=!1;let s=e[n.seat]??e[0];!n.spectator&&n.alive&&(this.spawnCharacter(i,s.pos,s.yaw),i.netPos.copy(s.pos),i.netYaw=s.yaw,n.id===this.myId&&(this.camYaw=s.yaw,this.camPitch=-.1))}),this.revolver.group.visible=!0,this.revolver.placeOnTable(new I(.42,.855,.18),Math.random()*Math.PI*2),this.revolver.resetChambers(),this.visualChamber=0,this.currentTurnId=null,this.matchStartGrace=1.2,this.audio.play3D("glassClink",new I(0,1,0),{gain:.8,reverb:.7}),this.ui.toast("The revolver is on the table.","info"),this.ui.renderPlayersList(t.players,null),this.ui.hideTurnBanner(),this.ui.hidePrompt(),t.joining&&this.becomeSpectatorNow("joined mid-match")}onTurnStart(t){this.currentTurnId=t.playerId,this.turnNumber=t.turnNumber,this.sentShotThisTurn=!1;let e=this.entity(t.playerId);e?.character&&e.alive&&(this.revolver.giveTo(e.character.getGripAnchor("R")),this.audio.play3D("draw",this.revolver.getFlashWorld(Gs),{gain:.8,reverb:.3}));let n=t.playerId===this.myId,i=e?.name??"?";this.ui.showTurnBanner(n?"YOUR TURN":`${i}'s turn`,n,t.deadline),this.ui.renderPlayersList(this.matchPlayers,t.playerId),this.audio.setTension(n?.3:.15),n&&this.audio.play("ui",{gain:.6});for(let s of this.entities.values())s.character?.setAimTarget(null)}onTurnAction(t){this.cinematic.beginPreShot({shooterId:t.shooterId,targetId:t.targetId,self:t.self}),this.ui.hidePrompt(),this.ui.hideCrosshair(),this.ui.hideTurnBanner(),t.shooterId===this.myId&&(this.sentShotThisTurn=!0)}onShotResult(t){if(this.cinematic.resolveShot({result:t.result,chamberIndex:t.chamberIndex,eliminatedId:t.eliminatedId}),t.eliminatedId){let e=this.entity(t.eliminatedId);e&&(e.alive=!1,e.spectator=!0);let n=this.matchPlayers.find(i=>i.id===t.eliminatedId);n&&(n.alive=!1,n.spectator=!0)}this.ui.renderPlayersList(this.matchPlayers,t.nextPlayerId)}onStates(t){for(let[e,n,i,s,o,a]of t.s){if(e===this.myId)continue;let l=this.entity(e);if(!l||!l.character||!l.alive)continue;let c=performance.now()/1e3,h=Gs.copy(l.netPos);if(l.netPos.set(n,i,s),l.netYaw=o,l.lastNetTime>0){let d=Math.max(.05,c-l.lastNetTime);l.netSpeed=pe(l.netSpeed,Math.min(4.5,h.distanceTo(l.netPos)/d),.5)}l.lastNetTime=c}}onPlayerLeft(t){let e=this.entity(t.id);this.ui.toast(`${t.name} left the bar`,"info"),e&&(this.removeCharacter(e),this.entities.delete(t.id),this.matchPlayers=this.matchPlayers.filter(n=>n.id!==t.id)),t.newHostId===this.myId&&this.ui.toast("You are the host now.","info"),this.ui.renderPlayersList(this.matchPlayers,this.currentTurnId)}onSpectatorStart(t){this.cinematic.activeShot||this.becomeSpectatorNow("eliminated")}onMatchEnd(t){this.phase="ENDING",this.matchPlayers=t.players,this.currentTurnId=null,this.ui.hidePrompt(),this.ui.hideCrosshair(),this.ui.hideTurnBanner(),this.audio.setTension(0),this.cinematic.beginWinner(t.winnerId)}onBackToLobby(){this.phase="LOBBY",this.cinematic.cancel(),this.ui.hideEndScreen(),this.ui.hideSpectator(),this.ui.hidePrompt(),this.ui.hideCrosshair();for(let t of this.entities.values())this.removeCharacter(t);this.entities.clear(),this.matchPlayers=[],this.currentTurnId=null,this.spectatorMode="follow",this.spectatorTargetId=null,this.revolver.placeOnTable(new I(.42,.855,.18),Math.random()*Math.PI*2),this.ui.showLobby()}getScene(){return this.scene}getCharacter(t){return this.entities.get(t)?.character??null}getRevolver(){return this.revolver}getParticles(){return this.particles}getAudio(){return this.audio}getPostFX(){return this.postfx}isMe(t){return t===this.myId}myCharacter(){return this.entities.get(this.myId)?.character??null}visualChamberIndex(){return this.visualChamber}onVisualChamberFired(t){this.visualChamber=(t+1)%this.rules.chamberCount}onResetChambers(){this.visualChamber=0}createRagdoll(t,e){let n=this.entity(t);if(!(!n||!n.character||n.ragdoll)&&(n.ragdoll=new ya(this.physics,n.character,e),n.character=n.character,t===this.currentTurnId)){this.scene.attach(this.revolver.group);let i=this.revolver.group.position.clone(),s=this.revolver.group.quaternion.clone(),o=new I(.42,.855,.18),a=new we().setFromEuler(new ke(0,Math.random()*Math.PI*2,Math.PI/2-.08));this.gunTween={from:i,to:o,fromQ:s,toQ:a,t:0,dur:.75},this.currentTurnId=null}}becomeSpectator(){this.becomeSpectatorNow("eliminated")}becomeSpectatorNow(t){let e=this.entity(this.myId);e&&(e.alive=!1,e.spectator=!0),this.spectatorMode="follow",this.spectatorTargetId=this.firstAliveId(),this.ui.showSpectator(this.spectatorName()),this.ui.toast(t==="joined mid-match"?"You joined mid-match \u2014 spectating.":"You were eliminated.","info"),this.audio.play("spectator",{gain:.7}),this.exitPointerLock()}firstAliveId(){for(let t of this.matchPlayers)if(t.alive&&!t.spectator&&!t.left&&t.id!==this.myId)return t.id;return null}spectatorName(){return(this.spectatorTargetId?this.entity(this.spectatorTargetId):null)?.name??(this.spectatorMode==="free"?"free camera":"nobody")}cycleSpectator(t){let e=this.matchPlayers.filter(s=>s.alive&&!s.spectator&&!s.left&&s.id!==this.myId);if(!e.length)return;let n=e.findIndex(s=>s.id===this.spectatorTargetId),i=e[(n+t+e.length)%e.length];this.spectatorTargetId=i.id,this.spectatorMode="follow",this.ui.showSpectator(this.spectatorName()),this.audio.play("ui",{gain:.4})}toggleFreeCam(){if(this.phase!=="PLAYING"&&this.phase!=="ENDING")return;let t=this.entity(this.myId);if(!(t&&t.alive&&!t.spectator)){if(this.spectatorMode=this.spectatorMode==="free"?"follow":"free",this.spectatorMode==="free"){let e=this.spectatorTargetId?this.entity(this.spectatorTargetId):null;e?.character?this.freeCamPos.copy(e.character.group.position).add(new I(0,2.2,3)):this.freeCamPos.set(0,2.4,6)}this.ui.showSpectator(this.spectatorName())}}gameplayCameraPose(t){let e=this.entity(this.myId);if(e?.alive&&!e.spectator&&(this.phase==="PLAYING"||this.phase==="LOBBY")&&e?.character){this.thirdPersonPose(e.character,t);return}if(this.spectatorMode==="free"){t.pos.copy(this.freeCamPos),t.look.copy(this.freeCamPos).add(this.freeCamDir());return}let i=this.spectatorTargetId?this.entity(this.spectatorTargetId):null,s=i?.character?i.character.group.position:P_.set(0,1,0);t.pos.set(s.x+Math.sin(this.camYaw+Math.PI)*3.4,s.y+1.9,s.z+Math.cos(this.camYaw+Math.PI)*3.4),t.look.set(s.x,s.y+1.2,s.z)}freeCamDir(){return I_.set(Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),Math.cos(this.camYaw)*Math.cos(this.camPitch))}thirdPersonPose(t,e){let n=t.getPartWorld("head",Qd),i=3.1,s=L_.set(Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),Math.cos(this.camYaw)*Math.cos(this.camPitch)),o=Jd.set(-s.z,0,s.x).normalize();e.pos.copy(n).addScaledVector(s,-i).addScaledVector(o,.55),e.pos.y=He(e.pos.y,.4,3.85),e.look.copy(n).addScaledVector(s,4)}showEndScreen(t){let e=this.matchPlayers.find(i=>i.id===t),n=t===this.myId;this.ui.showEndScreen(e?.name??null,this.matchPlayers,this.myId===this.lastKnownHostId,n)}wireInput(t){window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===t,this.pointerLocked||this.keys.clear()}),t.addEventListener("click",()=>{if(!this.audio.ready)return;let e=this.entity(this.myId),n=this.phase==="PLAYING"||this.phase==="LOBBY"||this.phase==="ENDING",i=!!(e?.alive&&!e.spectator);if(n&&!this.cinematic.activeShot&&!this.pointerLocked){t.requestPointerLock();return}this.pointerLocked&&this.phase==="PLAYING"&&i&&!this.cinematic.activeShot&&this.currentTurnId===this.myId&&!this.sentShotThisTurn&&this.tryShootAtCrosshair()}),document.addEventListener("mousemove",e=>{if(!this.pointerLocked)return;let n=.0022*this.sensitivity;this.camYaw-=e.movementX*n,this.camPitch=He(this.camPitch-e.movementY*n,-1.25,1)}),document.addEventListener("keydown",e=>{e.target instanceof HTMLInputElement||(this.keys.add(e.code),e.code==="KeyF"&&this.tryShootSelf(),e.code==="KeyV"&&this.toggleFreeCam(),e.code==="KeyQ"&&this.cycleSpectator(-1),e.code==="KeyE"&&this.cycleSpectator(1))}),document.addEventListener("keyup",e=>this.keys.delete(e.code))}exitPointerLock(){document.pointerLockElement&&document.exitPointerLock()}tryShootAtCrosshair(){if(this.currentTurnId!==this.myId||this.sentShotThisTurn||this.cinematic.activeShot)return;let t=this.entity(this.myId);if(!t?.alive||t.spectator)return;let e=this.raycastCharacters();e&&e!==this.myId&&(this.net.send({type:"shoot",target:e}),this.sentShotThisTurn=!0)}tryShootSelf(){if(this.phase!=="PLAYING")return;let t=this.entity(this.myId);!t?.alive||t.spectator||this.currentTurnId!==this.myId||this.sentShotThisTurn||this.cinematic.activeShot||(this.net.send({type:"shoot",target:"self"}),this.sentShotThisTurn=!0)}raycastCharacters(){this.raycaster.setFromCamera(new bt(0,0),this.camera);let t=[];for(let n of this.entities.values())n.character&&n.alive&&!n.spectator&&n.id!==this.myId&&!n.ragdoll&&t.push(n.character.hitbox);let e=this.raycaster.intersectObjects(t,!1);return e.length?e[0].object.userData.playerId:null}moveLocal(t){let e=this.entity(this.myId);if(!e?.character||!e.alive||e.spectator)return;if(!(this.phase==="LOBBY"||this.phase==="PLAYING"&&!this.cinematic.activeShot&&this.matchStartGrace<=0)||!this.pointerLocked){e.character.update(t,0),this.sendMove(e,0);return}let i=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),s=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),o=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),a=o?4.1:2.1,l=Gs.set(0,0,0);if(i||s){let u=Math.sin(this.camYaw),f=Math.cos(this.camYaw);l.x=i*u-s*f,l.z=i*f+s*u,l.normalize().multiplyScalar(a)}let c=e.character,h=c.group.position;h.x+=l.x*t,h.z+=l.z*t,this.resolveCollisions(h),h.x=He(h.x,-10.2,10.2),h.z=He(h.z,-7,7.2),h.y=0;let d=l.lengthSq()>.01;if(d){let f=Math.atan2(l.x,l.z)-c.group.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.group.rotation.y+=f*Math.min(1,t*12),this.footTimer-=t,this.footTimer<=0&&(this.footTimer=o?.31:.46,this.audio.play("footstep",{gain:.5,rate:.9+Math.random()*.2}))}c.update(t,d?a:0),this.sendMove(e,d?1:0)}resolveCollisions(t){for(let n of this.bar.colliders)if(n.kind==="circle"){let i=t.x-n.x,s=t.z-n.z,o=Math.hypot(i,s),a=(n.r??1)+.42;o<a&&o>1e-4&&(t.x=n.x+i/o*a,t.z=n.z+s/o*a)}else{let i=(n.hw??1)+.42,s=(n.hd??1)+.42,o=t.x-n.x,a=t.z-n.z;if(Math.abs(o)<i&&Math.abs(a)<s){let l=i-Math.abs(o),c=s-Math.abs(a);l<c?t.x=n.x+Math.sign(o||1)*i:t.z=n.z+Math.sign(a||1)*s}}}sendMove(t,e){let n=performance.now();if(n-this.sendMoveTimer<66)return;this.sendMoveTimer=n;let i=t.character.group.position;this.net.send({type:"move",p:[+i.x.toFixed(2),+i.y.toFixed(2),+i.z.toFixed(2)],yaw:+t.character.group.rotation.y.toFixed(2),anim:e})}updateRemotes(t){for(let e of this.entities.values()){if(!e.character||!e.alive||e.ragdoll||e.id===this.myId)continue;Ae(e.character.group.position,e.netPos,9,t);let n=e.netYaw-e.character.group.rotation.y;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;e.character.group.rotation.y+=n*Math.min(1,t*10),e.character.update(t,e.netSpeed),e.netSpeed>.6&&(e.footTimer-=t,e.footTimer<=0&&(e.footTimer=.45,this.audio.play3D("footstep",e.character.group.position,{gain:.45,rate:.9+Math.random()*.25}))),e.netSpeed>.1&&(e.netSpeed=pe(e.netSpeed,0,t*.6))}}updateRagdolls(t){for(let e of this.entities.values()){if(!e.ragdoll)continue;e.ragdoll.update(t),e.ragdoll.age*1e3>(this.rules.cleanupDelayMs??9e3)&&e.ragdoll.fade(t)&&(e.ragdoll.dispose(this.physics),e.ragdoll=null,e.character?.dispose(),e.character=null)}}updateCamera(t){if(!this.cinematic.active){let i=this.entity(this.myId),s=i?.alive&&!i.spectator&&(this.phase==="PLAYING"||this.phase==="LOBBY"),o={pos:N_,look:D_};if(this.gameplayCameraPose(o),s&&i?.character)Ae(this.camPos,o.pos,10,t),Ae(this.camLook,o.look,14,t);else if(this.spectatorMode==="free"){let a=this.keys.has("ShiftLeft")?8:4,l=this.freeCamDir(),c=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),h=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),d=(this.keys.has("Space")?1:0)-(this.keys.has("ControlLeft")?1:0),u=Jd.set(-l.z,0,l.x).normalize();this.freeCamPos.addScaledVector(l,c*a*t),this.freeCamPos.addScaledVector(u,h*a*t),this.freeCamPos.y=He(this.freeCamPos.y+d*a*t,.4,4),this.freeCamPos.x=He(this.freeCamPos.x,-10.5,10.5),this.freeCamPos.z=He(this.freeCamPos.z,-7.4,7.4),this.camPos.copy(this.freeCamPos),this.camLook.copy(this.freeCamPos).add(l)}else Ae(this.camPos,o.pos,4.5,t),Ae(this.camLook,o.look,6,t);this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),Math.abs(this.camera.fov-58)>.01&&(this.camera.fov=xe(this.camera.fov,58,4,t),this.camera.updateProjectionMatrix())}let n=this.cinematic.consumeShake();if(n>0&&(this.shake=Math.max(this.shake,n)),this.shake>.001){let i=performance.now()/1e3,s=this.shake*this.shake*.09;this.camera.position.add(Gs.set(Math.sin(i*71)*s+(Math.random()-.5)*s*.6,Math.sin(i*83+2)*s+(Math.random()-.5)*s*.6,Math.sin(i*61+4)*s)),this.camera.rotation.z+=Math.sin(i*77)*this.shake*.012,this.shake=Math.max(0,this.shake-t*2.4)}}updateTurnUI(t){let e=this.entity(this.myId),n=e?.alive&&!e.spectator;if(this.phase==="PLAYING"&&this.currentTurnId===this.myId&&!this.cinematic.activeShot&&!this.sentShotThisTurn&&n&&this.matchStartGrace<=0){let s=this.pointerLocked?this.raycastCharacters():null,o=s?this.entity(s)?.name:null;o?(this.ui.showCrosshair(!0),this.ui.showPrompt(`<span class="accent">${tf(o)}</span> is in your sights.<br><b>Click to pull the trigger</b> \u2014 or press <kbd>F</kbd> to shoot yourself.`)):(this.ui.showCrosshair(!1),this.ui.showPrompt('Your turn. <span class="accent">Click a player to shoot them</span> \xB7 <kbd>F</kbd> shoot yourself'))}else if(this.phase==="PLAYING"&&n&&!this.cinematic.activeShot)if(this.ui.hideCrosshair(),this.currentTurnId&&this.currentTurnId!==this.myId&&!this.cinematic.activeShot){let s=this.entity(this.currentTurnId)?.name??"someone";this.ui.showPrompt(`${tf(s)} has the revolver\u2026`)}else this.ui.hidePrompt();else this.phase==="LOBBY"&&e?.character?(this.ui.hideCrosshair(),this.ui.hidePrompt()):this.ui.hideCrosshair()}startLoop(){let t=()=>{if(this.raf=requestAnimationFrame(t),this.paused)return;let e=Math.min(.5,this.clock.getDelta()),n=Math.min(.05,e),i=n*this.cinematic.timeScale;if(this.matchStartGrace>0&&(this.matchStartGrace-=n),this.moveLocal(i),this.updateRemotes(i),this.bar.update(i),this.particles.update(i),this.physics.step(i,1),this.updateRagdolls(i),this.updateGunTween(n),this.revolver.update(i),this.cinematic.activeShot){let o=this.currentCineShooterId?this.entity(this.currentCineShooterId):null;if(o?.character){let a=o.character.getPartWorld("head",Qd);for(let l of this.entities.values())l.character&&l.id!==o.id&&!l.ragdoll&&l.character.setLookAt(a)}}this.cinematic.update(e,this.camera),this.updateCamera(e),this.updateTurnUI(e),this.audio.updateListener(this.camera,e);let s=performance.now();s-this.lastNetInfo>500&&(this.lastNetInfo=s,this.fpsEMA=this.fpsEMA*.7+1/Math.max(.001,e)*.3,this.ui.setNetInfo(this.net.connected,this.net.latency,Math.round(this.fpsEMA),this.qualityLevel),this.watchdogQuality()),this.postfx.render(e)};this.raf=requestAnimationFrame(t)}updateGunTween(t){if(!this.gunTween)return;let e=this.gunTween;e.t=Math.min(1,e.t+t/e.dur);let n=1-Math.pow(1-e.t,3);this.revolver.setTweening(!0),this.revolver.group.position.lerpVectors(e.from,e.to,n),this.revolver.group.quaternion.slerpQuaternions(e.fromQ,e.toQ,n),e.t>=1&&(this.gunTween=null,this.revolver.setTweening(!1))}watchdogQuality(){if(this.autoQuality&&(this.qualityCheckTimer+=.5,!(this.qualityCheckTimer<6)&&(this.qualityCheckTimer=0,this.fpsEMA<33))){let t=Eh.indexOf(this.qualityLevel);t>0&&(this.applyQuality(Eh[t-1]),this.ui.toast(`Performance guard: graphics lowered to ${this.qualityLevel.toUpperCase()}`,"info"))}}resize(){let t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.postfx?.setSize(t,e)}debugState(){let t={};for(let[e,n]of this.entities)t[e]=n.alive&&!n.spectator;return{phase:this.phase,myId:this.myId,turnId:this.currentTurnId,alive:t,entities:this.entities.size,cine:this.cinematic?.phase??"n/a",fps:Math.round(this.fpsEMA),connected:this.net.connected,roomCode:this.roomCode}}dispose(){cancelAnimationFrame(this.raf),this.net.disconnect(),this.renderer.dispose()}},Gs=new I,tE=new I,eE=new I,P_=new I,I_=new I,L_=new I,Jd=new I,N_=new I,D_=new I,Qd=new I;function tf(r){return r.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Th(){return new Promise(r=>setTimeout(r,0))}var B_=document.getElementById("scene");async function U_(){let r=new Oa;window.__game=r;let t=document.getElementById("loadFill"),e=document.getElementById("loadStep");try{await r.init(B_,(o,a)=>{t.style.width=`${Math.round(o*100)}%`,e.textContent=a})}catch(o){e.textContent="Your browser could not start WebGL \u2014 try Chrome, Edge or Firefox with hardware acceleration enabled.",console.error(o);return}let n=jd(),i=document.getElementById("qualitySelect");localStorage.getItem("rr_quality")||(i.value=n),document.getElementById("entryPanel").classList.remove("hidden"),e.textContent="",t.style.width="100%";let s=document.getElementById("playerCountHint");s.textContent=`${location.hostname||"this server"} \xB7 invite friends on your network`,document.getElementById("nameInput").focus()}U_();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
