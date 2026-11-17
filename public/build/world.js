var VKWorld=(()=>{var du=Object.defineProperty;var px=Object.getOwnPropertyDescriptor;var mx=Object.getOwnPropertyNames;var gx=Object.prototype.hasOwnProperty;var bp=(s,e)=>{for(var t in e)du(s,t,{get:e[t],enumerable:!0})},xx=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of mx(e))!gx.call(s,i)&&i!==t&&du(s,i,{get:()=>e[i],enumerable:!(n=px(e,i))||n.enumerable});return s};var vx=s=>xx(du({},"__esModule",{value:!0}),s);var Uw={};bp(Uw,{COLORS:()=>Z0,HATS:()=>J0,QUALITIES:()=>Fw,SKINS:()=>$0,create:()=>Bg,preview:()=>Gg,setAssetBase:()=>Ow,supported:()=>$d,version:()=>zw});var mm=0,Qu=1,gm=2;var Ar=1,xm=2,Po=3,zi=0,gn=1,on=2,Rr=0,bi=1,Yn=2,ef=3,tf=4,vm=5;var Cr=100,ym=101,_m=102,Mm=103,bm=104,Sm=200,wm=201,Tm=202,Em=203,nf=204,sf=205,Am=206,Rm=207,Cm=208,Im=209,Pm=210,Lm=211,Dm=212,Nm=213,zm=214,oc=0,ac=1,lc=2,go=3,cc=4,hc=5,uc=6,fc=7,Lc=0,Fm=1,Om=2,Fi=0,rf=1,of=2,af=3,lf=4,cf=5,hf=6,Ir=7,Gu="attached",Um="detached",uf=300,Pr=301,Lo=302,Dc=303,Nc=304,Ts=1e3,Wn=1001,xo=1002,sn=1003,zc=1004;var Lr=1005;var dn=1006,Do=1007;var ri=1008;var Kn=1009,ff=1010,df=1011,No=1012,Fc=1013,oi=1014,Fn=1015,Si=1016,Oc=1017,Uc=1018,Dr=1020,pf=35902,mf=35899,gf=1021,xf=1022,Xn=1023,ns=1026,us=1027,kc=1028,Fa=1029,Ps=1030,Bc=1031;var Hc=1033,Oa=33776,Ua=33777,ka=33778,Ba=33779,Gc=35840,Vc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,Kc=37496,Zc=37488,Jc=37489,Ha=37490,$c=37491,jc=37808,Qc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,oh=37816,ah=37817,lh=37818,ch=37819,hh=37820,uh=37821,fh=36492,dh=36494,ph=36495,mh=36283,gh=36284,Ga=36285,xh=36286,Va=2200,km=2201,Bm=2202,ur=2300,fr=2301,sc=2302,Vu=2303,lr=2400,cr=2401,fa=2402,vh=2500,Hm=2501,vf=0,Wa=1,zo=2,Gm=3200;var Xa=0,Vm=1,fs="",Bt="srgb",On="srgb-linear",da="linear",Ht="srgb";var rc=7680;var Wm=519,Xm=512,qm=513,Ym=514,yf=515,Km=516,Zm=517,_f=518,Mf=519,bf=35044,qa=35048;var Sf="300 es",ni=2e3,vo=2001;function yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _x(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jm(){let s=yo("canvas");return s.style.display="block",s}var Sp={},_o=null;function pa(...s){let e="THREE."+s.shift();_o?_o("log",e,...s):console.log(e,...s)}function $m(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ut(...s){s=$m(s);let e="THREE."+s.shift();if(_o)_o("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=$m(s);let e="THREE."+s.shift();if(_o)_o("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function hr(...s){let e=s.join(" ");e in Sp||(Sp[e]=!0,ut(...s))}function jm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qm={[oc]:oc,[lc]:uc,[cc]:cc,[go]:hc,[ac]:ac,[uc]:lc,[fc]:fc,[hc]:go},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wp=1234567,ha=Math.PI/180,dr=180/Math.PI;function Oi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function wf(s,e){return(s%e+e)%e}function Mx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bx(s,e,t){return s!==e?(t-s)/(e-s):0}function ua(s,e,t){return(1-t)*s+t*e}function Sx(s,e,t,n){return ua(s,e,1-Math.exp(-t*n))}function wx(s,e=1){return e-Math.abs(wf(s,e*2)-e)}function Tx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ax(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rx(s,e){return s+Math.random()*(e-s)}function Cx(s){return s*(.5-Math.random())}function Ix(s){s!==void 0&&(wp=s);let e=wp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Px(s){return s*ha}function Lx(s){return s*dr}function Dx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Nx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zx(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*h,a*l);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ef(s,e){if(e.constructor===Float32Array)return s;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Af(s,e){if(e.constructor===Float32Array)return s;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var _h={DEG2RAD:ha,RAD2DEG:dr,generateUUID:Oi,clamp:Dt,euclideanModulo:wf,mapLinear:Mx,inverseLerp:bx,lerp:ua,damp:Sx,pingpong:wx,smoothstep:Tx,smootherstep:Ex,randInt:Ax,randFloat:Rx,randFloatSpread:Cx,seededRandom:Ix,degToRad:Px,radToDeg:Lx,isPowerOfTwo:Dx,ceilPowerOfTwo:Nx,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:zx,normalize:Af,denormalize:Ef},Lf=class Lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lf.prototype.isVector2=!0;var pt=Lf,Zt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],M=r[o+3];if(u!==M||c!==f||l!==d||h!==m){let p=c*f+l*d+h*m+u*M;p<0&&(f=-f,d=-d,m=-m,M=-M,p=-p);let g=1-a;if(p<.9995){let S=Math.acos(p),b=Math.sin(S);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b,c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+M*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+m*a,u=u*g+M*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Df=class Df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;var Z=Df,pu=new Z,Tp=new Zt,Nf=class Nf{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],M=i[0],p=i[3],g=i[6],S=i[1],b=i[4],v=i[7],C=i[2],E=i[5],x=i[8];return r[0]=o*M+a*S+c*C,r[3]=o*p+a*b+c*E,r[6]=o*g+a*v+c*x,r[1]=l*M+h*S+u*C,r[4]=l*p+h*b+u*E,r[7]=l*g+h*v+u*x,r[2]=f*M+d*S+m*C,r[5]=f*p+d*b+m*E,r[8]=f*g+d*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return e[0]=u*M,e[1]=(i*l-h*n)*M,e[2]=(a*n-i*o)*M,e[3]=f*M,e[4]=(h*t-i*c)*M,e[5]=(i*r-a*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;var St=Nf,mu=new St,Ep=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){let s={enabled:!0,workingColorSpace:On,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(i.r=mo(i.r),i.g=mo(i.g),i.b=mo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fs?da:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[On]:{primaries:e,whitePoint:n,transfer:da,toXYZ:Ep,fromXYZ:Ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:Ep,fromXYZ:Ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var Rt=Fx();function es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Jr,dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=yo("canvas")),Jr.width=e.width,Jr.height=e.height;let i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ox=0,Mo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gu(i[o].image)):r.push(gu(i[o]))}else r=gu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function gu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Ux=0,xu=new Z,pn=class s extends gi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Wn,i=Wn,r=dn,o=ri,a=Xn,c=Kn,l=s.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Oi(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=uf;pn.DEFAULT_ANISOTROPY=1;var zf=class zf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],M=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(d+1)/2,C=(g+1)/2,E=(h+f)/4,x=(u+M)/4,w=(m+p)/4;return b>v&&b>C?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=x/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=w/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=x/r,i=w/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-m)*(p-m)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zf.prototype.isVector4=!0;var Wt=zf,pc=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pc=class Pc{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,m,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,m,M,p)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,m,M,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=M,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/$r.setFromMatrixColumn(e,0).length(),r=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,M=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-M*l,t[9]=-a*c,t[2]=M-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,M=l*u;t[0]=f+M*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=M+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,M=l*u;t[0]=f-M*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,M=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+M,t[1]=c*u,t[5]=M*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*h,t[4]=M-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-M*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+M,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,Bx)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ys.crossVectors(n,Zn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ys.crossVectors(n,Zn)),ys.normalize(),Rl.crossVectors(Zn,ys),i[0]=ys.x,i[4]=Rl.x,i[8]=Zn.x,i[1]=ys.y,i[5]=Rl.y,i[9]=Zn.y,i[2]=ys.z,i[6]=Rl.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],M=n[6],p=n[10],g=n[14],S=n[3],b=n[7],v=n[11],C=n[15],E=i[0],x=i[4],w=i[8],U=i[12],R=i[1],N=i[5],z=i[9],k=i[13],B=i[2],Y=i[6],G=i[10],H=i[14],_=i[3],y=i[7],L=i[11],A=i[15];return r[0]=o*E+a*R+c*B+l*_,r[4]=o*x+a*N+c*Y+l*y,r[8]=o*w+a*z+c*G+l*L,r[12]=o*U+a*k+c*H+l*A,r[1]=h*E+u*R+f*B+d*_,r[5]=h*x+u*N+f*Y+d*y,r[9]=h*w+u*z+f*G+d*L,r[13]=h*U+u*k+f*H+d*A,r[2]=m*E+M*R+p*B+g*_,r[6]=m*x+M*N+p*Y+g*y,r[10]=m*w+M*z+p*G+g*L,r[14]=m*U+M*k+p*H+g*A,r[3]=S*E+b*R+v*B+C*_,r[7]=S*x+b*N+v*Y+C*y,r[11]=S*w+b*z+v*G+C*L,r[15]=S*U+b*k+v*H+C*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],M=e[7],p=e[11],g=e[15],S=c*d-l*f,b=a*d-l*u,v=a*f-c*u,C=o*d-l*h,E=o*f-c*h,x=o*u-a*h;return t*(M*S-p*b+g*v)-n*(m*S-p*C+g*E)+i*(m*b-M*C+g*x)-r*(m*v-M*E+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],M=e[13],p=e[14],g=e[15],S=t*a-n*o,b=t*c-i*o,v=t*l-r*o,C=n*c-i*a,E=n*l-r*a,x=i*l-r*c,w=h*M-u*m,U=h*p-f*m,R=h*g-d*m,N=u*p-f*M,z=u*g-d*M,k=f*g-d*p,B=S*k-b*z+v*N+C*R-E*U+x*w;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/B;return e[0]=(a*k-c*z+l*N)*Y,e[1]=(i*z-n*k-r*N)*Y,e[2]=(M*x-p*E+g*C)*Y,e[3]=(f*E-u*x-d*C)*Y,e[4]=(c*R-o*k-l*U)*Y,e[5]=(t*k-i*R+r*U)*Y,e[6]=(p*v-m*x-g*b)*Y,e[7]=(h*x-f*v+d*b)*Y,e[8]=(o*z-a*R+l*w)*Y,e[9]=(n*R-t*z-r*w)*Y,e[10]=(m*E-M*v+g*S)*Y,e[11]=(u*v-h*E-d*S)*Y,e[12]=(a*U-o*N-c*w)*Y,e[13]=(t*N-n*U+i*w)*Y,e[14]=(M*b-m*C-p*S)*Y,e[15]=(h*C-u*b+f*S)*Y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,M=o*h,p=o*u,g=a*u,S=c*l,b=c*h,v=c*u,C=n.x,E=n.y,x=n.z;return i[0]=(1-(M+g))*C,i[1]=(d+v)*C,i[2]=(m-b)*C,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+g))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(m+b)*x,i[9]=(p-S)*x,i[10]=(1-(f+M))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=$r.set(i[0],i[1],i[2]).length(),a=$r.set(i[4],i[5],i[6]).length(),c=$r.set(i[8],i[9],i[10]).length();r<0&&(o=-o),di.copy(this);let l=1/o,h=1/a,u=1/c;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=ni,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,M;if(c)m=r/(o-r),M=o*r/(o-r);else if(a===ni)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===vo)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ni,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,M;if(c)m=1/(o-r),M=o/(o-r);else if(a===ni)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===vo)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pc.prototype.isMatrix4=!0;var ht=Pc,$r=new Z,di=new ht,kx=new Z(0,0,0),Bx=new Z(1,1,1),ys=new Z,Rl=new Z,Zn=new Z,Rp=new ht,Cp=new Zt,Li=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hx=0,Ip=new Z,jr=new Zt,Yi=new ht,Cl=new Z,jo=new Z,Gx=new Z,Vx=new Zt,Pp=new Z(1,0,0),Lp=new Z(0,1,0),Dp=new Z(0,0,1),Np={type:"added"},Wx={type:"removed"},Qr={type:"childadded",child:null},vu={type:"childremoved",child:null},Yt=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new Z,t=new Li,n=new Zt,i=new Z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new St}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cl.copy(e):Cl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(jo,Cl,this.up):Yi.lookAt(Cl,jo,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(Yi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new Z(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),g=this._getHandJoint(l,M);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Il={h:0,s:0,l:0};function yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=wf(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yu(o,r,e+1/3),this.g=yu(o,r,e),this.b=yu(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=e0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Rt.workingToColorSpace(An.copy(this),e),Math.round(Dt(An.r*255,0,255))*65536+Math.round(Dt(An.g*255,0,255))*256+Math.round(Dt(An.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(An.copy(this),t);let n=An.r,i=An.g,r=An.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Bt){Rt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,i=An.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Il);let n=ua(_s.h,Il.h,t),i=ua(_s.s,Il.s,t),r=ua(_s.l,Il.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new He;He.NAMES=e0;var ga=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new Z,Ki=new Z,_u=new Z,Zi=new Z,eo=new Z,to=new Z,zp=new Z,Mu=new Z,bu=new Z,Su=new Z,wu=new Wt,Tu=new Wt,Eu=new Wt,Qi=class s{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pi.subVectors(i,t),Ki.subVectors(n,t),_u.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(Ki),c=pi.dot(_u),l=Ki.dot(Ki),h=Ki.dot(_u),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return wu.setScalar(0),Tu.setScalar(0),Eu.setScalar(0),wu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wu,r.x),o.addScaledVector(Tu,r.y),o.addScaledVector(Eu,r.z),o}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Ki.subVectors(e,t),pi.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),pi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;eo.subVectors(i,n),to.subVectors(r,n),Mu.subVectors(e,n);let c=eo.dot(Mu),l=to.dot(Mu);if(c<=0&&l<=0)return t.copy(n);bu.subVectors(e,i);let h=eo.dot(bu),u=to.dot(bu);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(eo,o);Su.subVectors(e,r);let d=eo.dot(Su),m=to.dot(Su);if(m>=0&&d<=m)return t.copy(r);let M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(to,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return zp.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(zp,a);let g=1/(p+M+f);return o=M*g,a=f*g,t.copy(n).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pl.copy(n.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Ll.subVectors(this.max,Qo),no.subVectors(e.a,Qo),io.subVectors(e.b,Qo),so.subVectors(e.c,Qo),Ms.subVectors(io,no),bs.subVectors(so,io),ir.subVectors(no,so);let t=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-ir.z,ir.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,ir.z,0,-ir.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-ir.y,ir.x,0];return!Au(t,no,io,so,Ll)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,no,io,so,Ll))?!1:(Dl.crossVectors(Ms,bs),t=[Dl.x,Dl.y,Dl.z],Au(t,no,io,so,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ji=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],mi=new Z,Pl=new fn,no=new Z,io=new Z,so=new Z,Ms=new Z,bs=new Z,ir=new Z,Qo=new Z,Ll=new Z,Dl=new Z,sr=new Z;function Au(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){sr.fromArray(s,r);let a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hn=new Z,Nl=new pt,qx=0,Et=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?yh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ef(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.array)}};var xa=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var va=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yx=new fn,ea=new Z,Ru=new Z,en=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Ru)),this.expandByPoint(ea.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kx=0,ti=new ht,Cu=new Yt,ro=new Z,Jn=new fn,ta=new fn,_n=new Z,Nt=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?va:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Jn.min,ta.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,ta.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(ta.min),Jn.expandByPoint(ta.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_n.fromBufferAttribute(a,l),c&&(ro.fromBufferAttribute(e,l),_n.add(ro)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Et(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new Z,c[U]=new Z;let h=new Z,u=new Z,f=new Z,d=new pt,m=new pt,M=new pt,p=new Z,g=new Z;function S(U,R,N){l[U]=l[R]=l[N]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,U),m.fromBufferAttribute(r,R),M.fromBufferAttribute(r,N),u.sub(h),f.sub(h),m.sub(d),M.sub(d);let z=1/(m.x*M.y-M.x*m.y);isFinite(z)&&(p.copy(u).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(z),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(z),a[U].add(p),a[R].add(p),a[N].add(p),c[U].add(g),c[R].add(g),c[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,R=b.length;U<R;++U){let N=b[U],z=N.start,k=N.count;for(let B=z,Y=z+k;B<Y;B+=3)S(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new Z,C=new Z,E=new Z,x=new Z;function w(U){E.fromBufferAttribute(i,U),x.copy(E);let R=a[U];v.copy(R),v.sub(E.multiplyScalar(E.dot(R))).normalize(),C.crossVectors(x,R);let z=C.dot(c[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,z)}for(let U=0,R=n.count;U<R;++U)l[U]&&w(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new Z,r=new Z,o=new Z,a=new Z,c=new Z,l=new Z,h=new Z,u=new Z;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Fp(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Oi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var zn=new Z,Es=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?yh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ef(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.data.array)}},Iu=new Z,Zx=new Z,Jx=new St,$n=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Iu.subVectors(n,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jx.getNormalMatrix(e),i=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$x=0,Cn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=bi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=sf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rc,this.stencilZFail=rc,this.stencilZPass=rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},As=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oo,na=new Z,ao=new Z,lo=new Z,co=new pt,ia=new pt,t0=new ht,zl=new Z,sa=new Z,Fl=new Z,Op=new pt,Pu=new pt,Up=new pt,gr=class extends Yt{constructor(e=new As){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mr(t,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new Es(n,3,0,!1)),oo.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=oo,this.material=e,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ao.setFromMatrixScale(this.matrixWorld),t0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ao.multiplyScalar(-lo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ol(zl.set(-.5,-.5,0),lo,o,ao,i,r),Ol(sa.set(.5,-.5,0),lo,o,ao,i,r),Ol(Fl.set(.5,.5,0),lo,o,ao,i,r),Op.set(0,0),Pu.set(1,0),Up.set(1,1);let a=e.ray.intersectTriangle(zl,sa,Fl,!1,na);if(a===null&&(Ol(sa.set(-.5,.5,0),lo,o,ao,i,r),Pu.set(0,1),a=e.ray.intersectTriangle(zl,Fl,sa,!1,na),a===null))return;let c=e.ray.origin.distanceTo(na);c<e.near||c>e.far||t.push({distance:c,point:na.clone(),uv:Qi.getInterpolation(na,zl,sa,Fl,Op,Pu,Up,new pt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ol(s,e,t,n,i,r){co.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ia.x=r*co.x-i*co.y,ia.y=i*co.x+r*co.y):ia.copy(co),s.copy(e),s.x+=ia.x,s.y+=ia.y,s.applyMatrix4(t0)}var $i=new Z,Lu=new Z,Ul=new Z,kl=new Z,Rs=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lu.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),kl.copy(this.origin).sub(Lu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=kl.dot(this.direction),c=-kl.dot(Ul),l=kl.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lu).addScaledVector(Ul,f),d}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),i=$i.dot($i)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,M=t.y-o.y,p=t.z-o.z,g=n.x-o.x,S=n.y-o.y,b=n.z-o.z,v=Math.abs(c),C=Math.abs(l),E=Math.abs(h),x,w,U,R,N,z,k,B,Y,G,H,_;if(v>=C&&v>=E?(U=c,z=u,Y=m,_=g,c>=0?(x=l,w=h,R=f,N=d,k=M,B=p,G=S,H=b):(x=h,w=l,R=d,N=f,k=p,B=M,G=b,H=S)):C>=E?(U=l,z=f,Y=M,_=S,l>=0?(x=h,w=c,R=d,N=u,k=p,B=m,G=b,H=g):(x=c,w=h,R=u,N=d,k=m,B=p,G=g,H=b)):(U=h,z=d,Y=p,_=b,h>=0?(x=c,w=l,R=u,N=f,k=m,B=M,G=g,H=S):(x=l,w=c,R=f,N=u,k=M,B=m,G=S,H=g)),U===0)return null;let y=x/U,L=w/U,A=1/U,D=R-y*z,q=N-L*z,W=k-y*Y,J=B-L*Y,me=G-y*_,ie=H-L*_,le=me*J-ie*W,Pe=D*ie-q*me,Ge=W*q-J*D;if(i){if(le<0||Pe<0||Ge<0)return null}else if((le<0||Pe<0||Ge<0)&&(le>0||Pe>0||Ge>0))return null;let he=le+Pe+Ge;if(he===0)return null;let ke=A*(le*z+Pe*Y+Ge*_);return(he>0?ke<0:ke>0)?null:this.at(ke/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kp=new ht,rr=new Rs,Bl=new en,Bp=new Z,Hl=new Z,Gl=new Z,Vl=new Z,Du=new Z,Wl=new Z,Hp=new Z,Xl=new Z,Tt=class extends Yt{constructor(e=new Nt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Wl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Du.fromBufferAttribute(u,e),o?Wl.addScaledVector(Du,h):Wl.addScaledVector(Du.sub(t),h))}t.add(Wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(Bl.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Bl,Bp)===null||rr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(kp.copy(r).invert(),rr.copy(e.ray).applyMatrix4(kp),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=f.length;m<M;m++){let p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,C=b;v<C;v+=3){let E=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);i=ql(this,g,e,n,l,h,u,E,x,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){let S=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);i=ql(this,o,e,n,l,h,u,S,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,M=f.length;m<M;m++){let p=f[m],g=o[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,C=b;v<C;v+=3){let E=v,x=v+1,w=v+2;i=ql(this,g,e,n,l,h,u,E,x,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){let S=p,b=p+1,v=p+2;i=ql(this,o,e,n,l,h,u,S,b,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function jx(s,e,t,n,i,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===zi,a),c===null)return null;Xl.copy(a),Xl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Xl);return l<t.near||l>t.far?null:{distance:l,point:Xl.clone(),object:s}}function ql(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Hl),s.getVertexPosition(c,Gl),s.getVertexPosition(l,Vl);let h=jx(s,e,t,n,Hl,Gl,Vl,Hp);if(h){let u=new Z;Qi.getBarycoord(Hp,Hl,Gl,Vl,u),i&&(h.uv=Qi.getInterpolatedAttribute(i,a,c,l,u,new pt)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=Qi.getInterpolatedAttribute(o,a,c,l,u,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new Z,materialIndex:0};Qi.getNormal(Hl,Gl,Vl,f.normal),h.face=f,h.barycoord=u}return h}var ra=new Wt,Gp=new Wt,Vp=new Wt,Qx=new Wt,Wp=new ht,Yl=new Z,Nu=new en,Xp=new ht,zu=new Rs,xr=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yl),this.boundingBox.expandByPoint(Yl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yl),this.boundingSphere.expandByPoint(Yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(i),e.ray.intersectsSphere(Nu)!==!1&&(Xp.copy(i).invert(),zu.copy(e.ray).applyMatrix4(Xp),!(this.boundingBox!==null&&zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Um?this.bindMatrixInverse.copy(this.bindMatrix).invert():ut("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Gp.fromBufferAttribute(i.attributes.skinIndex,e),Vp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ra.copy(t),t.set(0,0,0,0)):(ra.set(t.x,t.y,t.z,1),t.set(0,0,0)),ra.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Vp.getComponent(r);if(o!==0){let a=Gp.getComponent(r);Wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Qx.copy(ra).applyMatrix4(Wp),o)}}return t.isVector4&&(t.w=ra.w),t.applyMatrix4(this.bindMatrixInverse)}},wo=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ts=class extends pn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=sn,h=sn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qp=new ht,ev=new ht,ya=class s{constructor(e=[],t=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ut("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ev;qp.multiplyMatrices(a,t[r]),qp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ts(t,e,e,Xn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ut("Skeleton: No bone found with UUID:",r),o=new wo),this.bones.push(o),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Un=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new ht,Yp=new ht,Kl=[],Kp=new fn,tv=new ht,oa=new Tt,aa=new en,vr=class extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),Kp.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(Kp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),aa.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ho),Yp.multiplyMatrices(n,ho),oa.matrixWorld=Yp,oa.raycast(e,Kl);for(let o=0,a=Kl.length;o<a;o++){let c=Kl[o];c.instanceId=r,c.object=this,t.push(c)}Kl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(i*this.count),i,this.count,kc,Fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},or=new en,nv=new pt(.5,.5),Zl=new Z,xi=class{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],M=r[9],p=r[10],g=r[11],S=r[12],b=r[13],v=r[14],C=r[15];if(i[0].setComponents(l-o,d-h,g-m,C-S).normalize(),i[1].setComponents(l+o,d+h,g+m,C+S).normalize(),i[2].setComponents(l+a,d+u,g+M,C+b).normalize(),i[3].setComponents(l-a,d-u,g-M,C-b).normalize(),n)i[4].setComponents(c,f,p,v).normalize(),i[5].setComponents(l-c,d-f,g-p,C-v).normalize();else if(i[4].setComponents(l-c,d-f,g-p,C-v).normalize(),t===ni)i[5].setComponents(l+c,d+f,g+p,C+v).normalize();else if(t===vo)i[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=nv.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Zl.x=i.normal.x>0?e.max.x:e.min.x,Zl.y=i.normal.y>0?e.max.y:e.min.y,Zl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zp=new ht,_a=class s{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Zp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new xi),n[i].setFromProjectionMatrix(Zp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new xi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Fu(s,e){return s-e}function iv(s,e){return s.z-e.z}function sv(s,e){return e.z-s.z}var Wu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Vn=new ht,rv=new He(1,1,1),ov=new xi,av=new _a,Jl=new fn,ar=new en,Ou=new Z,Jp=new Z,$p=new Z,lv=new Z,Uu=new Wu,Rn=new Tt,$l=[];function cv(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ii(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var To=class extends Tt{constructor(e,t,n=t*2,i){super(new Nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ts(t,e,e,Xn,Fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ts(t,e,e,Fa,oi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ts(t,e,e,Xn,Fn);n.colorSpace=Rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Et(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Et(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,Jl).applyMatrix4(Vn),e.union(Jl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,ar).applyMatrix4(Vn),e.union(ar)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Fu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Vn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(rv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Fu),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);cv(u,f,c);let d=u.itemSize;for(let m=u.count,M=l;m<M;m++){let p=c+m;for(let g=0;g<d;g++)f.setComponent(p,g,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,d=u;f<d;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=r.index,m=d.array,M=e-u;for(let p=h;p<h+f;p++)m[p]=m[p]+M;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let d in f){let m=f[d],{array:M,itemSize:p}=m;M.copyWithin(e*p,h*p,(h+u)*p),m.addUpdateRange(e*p,u*p),m.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new fn,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Ou.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new en;this.getBoundingBoxAt(e,Jl),Jl.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Ou.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Ou))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Fu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ii(this._multiDrawCounts,i),Ii(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),c=new Int32Array(e);Ii(this._mergedDrawCounts,o),Ii(this._mergedDrawStarts,a),Ii(this._mergedDrawInstanceCounts,c),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=c,this._maxInstanceCount=e;let l=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Ii(l.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Ii(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ii(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Nt,this._initializeGeometry(r));let o=this.geometry;r.index&&Ii(r.index.array,o.index.array);for(let a in r.attributes)Ii(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Rn.material=this.material,Rn.geometry.index=o.index,Rn.geometry.attributes=o.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new fn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new en);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];Rn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Rn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Rn.geometry.boundingBox),this.getBoundingSphereAt(l,Rn.geometry.boundingSphere),Rn.raycast(e,$l);for(let u=0,f=$l.length;u<f;u++){let d=$l[u];d.object=this,d.batchId=a,t.push(d)}$l.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,m=this._geometryInfo,M=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data,S=e.isArrayCamera?av:ov;M&&(e.isArrayCamera?S.setFromArrayCamera(e):(Vn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),S.setFromProjectionMatrix(Vn,e.coordinateSystem,e.reversedDepth)));let b=0,v=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),Jp.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Vn),$p.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Vn);for(let x=0,w=c.length;x<w;x++)if(c[x].visible&&c[x].active){let U=c[x].geometryIndex;this.getMatrixAt(x,Vn),this.getBoundingSphereAt(U,ar).applyMatrix4(Vn);let R=!1;if(M&&(R=!S.intersectsSphere(ar)),!R){let N=m[U],z=lv.subVectors(ar.center,Jp).dot($p);Uu.push(N.start,N.count,z,x)}}let C=Uu.list,E=this.customSort;E===null?C.sort(n.transparent?sv:iv):E.call(this,C,e);for(let x=0,w=C.length;x<w;x++){let U=C[x],R=U.start*o*a,N=U.count*a;i==="merged"?v>0&&u[v-1]===R&&f[v-1]===N?d[v-1]++:(u[v]=R,f[v]=N,d[v]=1,v++):(l[b]=R,h[b]=N),g[b]=U.index,b++}Uu.reset()}else for(let C=0,E=c.length;C<E;C++)if(c[C].visible&&c[C].active){let x=c[C].geometryIndex,w=!1;if(M&&(this.getMatrixAt(C,Vn),this.getBoundingSphereAt(x,ar).applyMatrix4(Vn),w=!S.intersectsSphere(ar)),!w){let U=m[x],R=U.start*o*a,N=U.count*a;i==="merged"?v>0&&u[v-1]===R&&f[v-1]===N?d[v-1]++:(u[v]=R,f[v]=N,d[v]=1,v++):(l[b]=R,h[b]=N),g[b]=C,b++}}p.needsUpdate=!0,this._multiDrawCount=b,this._mergedDrawCount=v,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},Eo=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gc=new Z,xc=new Z,jp=new ht,la=new Rs,jl=new en,ku=new Z,Qp=new Z,yr=class extends Yt{constructor(e=new Nt,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)gc.fromBufferAttribute(t,i-1),xc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gc.distanceTo(xc);e.setAttribute("lineDistance",new Ft(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(i),jl.radius+=r,e.ray.intersectsSphere(jl)===!1)return;jp.copy(i).invert(),la.copy(e.ray).applyMatrix4(jp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let M=d,p=m-1;M<p;M+=l){let g=h.getX(M),S=h.getX(M+1),b=Ql(this,e,la,c,g,S,M);b&&t.push(b)}if(this.isLineLoop){let M=h.getX(m-1),p=h.getX(d),g=Ql(this,e,la,c,M,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let M=d,p=m-1;M<p;M+=l){let g=Ql(this,e,la,c,M,M+1,M);g&&t.push(g)}if(this.isLineLoop){let M=Ql(this,e,la,c,m-1,d,m-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ql(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(gc.fromBufferAttribute(a,i),xc.fromBufferAttribute(a,r),t.distanceSqToSegment(gc,xc,ku,Qp)>n)return;ku.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ku);if(!(l<e.near||l>e.far))return{distance:l,point:Qp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var em=new Z,tm=new Z,Ma=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)em.fromBufferAttribute(t,i),tm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+em.distanceTo(tm);e.setAttribute("lineDistance",new Ft(n,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ao=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nm=new ht,Xu=new Rs,ec=new en,tc=new Z,vi=class extends Yt{constructor(e=new Nt,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(i),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;nm.copy(i).invert(),Xu.copy(e.ray).applyMatrix4(nm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,M=d;m<M;m++){let p=l.getX(m);tc.fromBufferAttribute(u,p),im(tc,p,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,M=d;m<M;m++)tc.fromBufferAttribute(u,m),im(tc,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function im(s,e,t,n,i,r,o){let a=Xu.distanceSqToPoint(s);if(a<t){let c=new Z;Xu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends pn{constructor(e=[],t=Pr,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},is=class extends pn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class extends pn{constructor(e,t,n=oi,i,r,o,a=sn,c=sn,l,h=ns,u=1){if(h!==ns&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends ss{constructor(e,t=oi,n=Pr,i,r,o=sn,a=sn,c,l=ns){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class s extends Nt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(M,p,g,S,b,v,C,E,x,w,U){let R=v/x,N=C/w,z=v/2,k=C/2,B=E/2,Y=x+1,G=w+1,H=0,_=0,y=new Z;for(let L=0;L<G;L++){let A=L*N-k;for(let D=0;D<Y;D++){let q=D*R-z;y[M]=q*S,y[p]=A*b,y[g]=B,l.push(y.x,y.y,y.z),y[M]=0,y[p]=0,y[g]=E>0?1:-1,h.push(y.x,y.y,y.z),u.push(D/x),u.push(1-L/w),H+=1}}for(let L=0;L<w;L++)for(let A=0;A<x;A++){let D=f+A+Y*L,q=f+A+Y*(L+1),W=f+(A+1)+Y*(L+1),J=f+(A+1)+Y*L;c.push(D,q,J),c.push(q,W,J),_+=6}a.addGroup(d,_,U),d+=_,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _r=class s extends Nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new Z,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rs=class s extends Nt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,M=[],p=n/2,g=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(d,2));function S(){let v=new Z,C=new Z,E=0,x=(t-e)/n;for(let w=0;w<=r;w++){let U=[],R=w/r,N=R*(t-e)+e;for(let z=0;z<=i;z++){let k=z/i,B=k*c+a,Y=Math.sin(B),G=Math.cos(B);C.x=N*Y,C.y=-R*n+p,C.z=N*G,u.push(C.x,C.y,C.z),v.set(Y,x,G).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-R),U.push(m++)}M.push(U)}for(let w=0;w<i;w++)for(let U=0;U<r;U++){let R=M[U][w],N=M[U+1][w],z=M[U+1][w+1],k=M[U][w+1];(e>0||U!==0)&&(h.push(R,N,k),E+=3),(t>0||U!==r-1)&&(h.push(N,z,k),E+=3)}l.addGroup(g,E,0),g+=E}function b(v){let C=m,E=new pt,x=new Z,w=0,U=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),m++;let N=m;for(let z=0;z<=i;z++){let B=z/i*c+a,Y=Math.cos(B),G=Math.sin(B);x.x=U*G,x.y=p*R,x.z=U*Y,u.push(x.x,x.y,x.z),f.push(0,R,0),E.x=Y*.5+.5,E.y=G*.5*R+.5,d.push(E.x,E.y),m++}for(let z=0;z<i;z++){let k=C+z,B=N+z;v===!0?h.push(B,B+1,k):h.push(B+1,B,k),w+=3}l.addGroup(g,w,v===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vc=class s extends Nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new Z,v=new Z,C=new Z;for(let E=0;E<t.length;E+=3)d(t[E+0],b),d(t[E+1],v),d(t[E+2],C),c(b,v,C,S)}function c(S,b,v,C){let E=C+1,x=[];for(let w=0;w<=E;w++){x[w]=[];let U=S.clone().lerp(v,w/E),R=b.clone().lerp(v,w/E),N=E-w;for(let z=0;z<=N;z++)z===0&&w===E?x[w][z]=U:x[w][z]=U.clone().lerp(R,z/N)}for(let w=0;w<E;w++)for(let U=0;U<2*(E-w)-1;U++){let R=Math.floor(U/2);U%2===0?(f(x[w][R+1]),f(x[w+1][R]),f(x[w][R])):(f(x[w][R+1]),f(x[w+1][R+1]),f(x[w+1][R]))}}function l(S){let b=new Z;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(S),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let S=new Z;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let v=p(S)/2/Math.PI+.5,C=g(S)/Math.PI+.5;o.push(v,1-C)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let b=o[S+0],v=o[S+2],C=o[S+4],E=Math.max(b,v,C),x=Math.min(b,v,C);E>.9&&x<.1&&(b<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,b){let v=S*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function m(){let S=new Z,b=new Z,v=new Z,C=new Z,E=new pt,x=new pt,w=new pt;for(let U=0,R=0;U<r.length;U+=9,R+=6){S.set(r[U+0],r[U+1],r[U+2]),b.set(r[U+3],r[U+4],r[U+5]),v.set(r[U+6],r[U+7],r[U+8]),E.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),w.set(o[R+4],o[R+5]),C.copy(S).add(b).add(v).divideScalar(3);let N=p(C);M(E,R+0,S,N),M(x,R+2,b,N),M(w,R+4,v,N)}}function M(S,b,v,C){C<0&&S.x===1&&(o[b]=S.x-1),v.x===0&&v.z===0&&(o[b]=C/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Ea=class s extends vc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var _i=class s extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],M=[],p=[];for(let g=0;g<h;g++){let S=g*f-o;for(let b=0;b<l;b++){let v=b*u-r;m.push(v,-S,0),M.push(0,0,1),p.push(b/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){let b=S+l*g,v=S+l*(g+1),C=S+1+l*(g+1),E=S+1+l*g;d.push(b,v,E),d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Aa=class s extends Nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new Z,f=new Z,d=[],m=[],M=[],p=[];for(let g=0;g<=n;g++){let S=[],b=g/n,v=o+b*a,C=e*Math.cos(v),E=Math.sqrt(e*e-C*C),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let U=w/t,R=i+U*r;u.x=-E*Math.cos(R),u.y=C,u.z=E*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),p.push(U+x,1-b),S.push(l++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let b=h[g][S+1],v=h[g][S],C=h[g+1][S],E=h[g+1][S+1];(g!==0||o>0)&&d.push(b,v,E),(g!==n-1||c<Math.PI)&&d.push(v,C,E)}this.setIndex(d),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ra=class s extends Nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new Z,d=new Z,m=new Z;for(let M=0;M<=n;M++){let p=o+M/n*a;for(let g=0;g<=i;g++){let S=g/i*r;d.x=(e+t*Math.cos(p))*Math.cos(S),d.y=(e+t*Math.cos(p))*Math.sin(S),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=i;p++){let g=(i+1)*M+p-1,S=(i+1)*(M-1)+p-1,b=(i+1)*(M-1)+p,v=(i+1)*M+p;c.push(g,S,v),c.push(S,b,v)}this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Nr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(sm(i))i.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sm(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function In(s){let e={};for(let t=0;t<s.length;t++){let n=Nr(s[t]);for(let i in n)e[i]=n[i]}return e}function sm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var n0={clone:Nr,merge:In},uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uv,this.fragmentShader=fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new St().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},yc=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mr=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Mr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mn=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Lc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_c=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ws(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ca(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function dv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function pv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Di=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bc=class extends Di{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cr:r=e,a=2*t-n;break;case fa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:o=e,c=2*n-t;break;case fa:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),M=m*m,p=M*m,g=-f*p+2*f*M-f*m,S=(1+f)*p+(-1.5-2*f)*M+(-.5+f)*m+1,b=(-1-d)*p+(1.5+d)*M+.5*m,v=d*p-d*M;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+S*o[l+C]+b*o[c+C]+v*o[u+C];return r}},Ca=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sc=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},wc=class extends Di{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),M=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*M+o[c+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let M=o[l+m],p=o[c+m],g=d*f+m*2,S=u[g],b=u[g+1],v=e*f+m*2,C=h[v],E=h[v+1],x=gv(n,t,S,C,i);r[m]=i0(x,M,b,E,p)}return r}};function i0(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function mv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function gv(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=i0(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=mv(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ca(e.settings)&&(n.settings={inTangents:ws(e.settings.inTangents,Array),outTangents:ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break;case Vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return sc;case this.InterpolantFactoryMethodBezier:return Vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;ca(this.settings)&&(om(this.settings.inTangents,e),om(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ca(this.settings)&&(am(this.settings.inTangents,e),am(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){bt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){bt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&_x(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){bt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let M=t[u+m];if(M!==t[f+m]||M!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ca(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function om(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function am(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=fr;var os=class extends qn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ur;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Ia.prototype.ValueTypeName="color";var as=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};as.prototype.ValueTypeName="number";var Tc=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Zt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ls=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends qn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ur;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Cs.prototype.ValueTypeName="vector";var Mi=class{constructor(e="",t=-1,n=[],i=vh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=dv(c);c=rm(c,1,h),l=rm(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function xv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Ia;case"quaternion":return ls;case"bool":case"boolean":return os;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xv(s.type);if(s.times===void 0){let n=[],i=[];pv(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ca(s.settings)&&(t.settings={inTangents:ws(s.settings.inTangents,Float32Array),outTangents:ws(s.settings.outTangents,Float32Array)}),t}var ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(lm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!lm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function lm(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ec=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},s0=new Ec,Ni=class{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},qu=class extends Error{constructor(e,t){super(e),this.response=t}},Ro=class extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ii.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,M=0,p=new ReadableStream({start(g){S();function S(){u.read().then(({done:b,value:v})=>{if(b)g.close();else{M+=v.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:d});for(let E=0,x=h.length;E<x;E++){let w=h[E];w.onProgress&&w.onProgress(C)}g.enqueue(v),S()}},b=>{g.error(b)})}}});return new Response(p)}else throw new qu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ii.add(`file:${e}`,l);let h=ji[e];delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var uo=new WeakMap,Ac=class extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=uo.get(o);u===void 0&&(u=[],uo.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=yo("img");function c(){h(),t&&t(this);let u=uo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}uo.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),ii.remove(`image:${e}`);let f=uo.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}uo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var br=class extends Ni{constructor(e){super(e)}load(e,t,n,i){let r=new pn,o=new Ac(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Sr=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wr=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bu=new ht,cm=new Z,hm=new Z,Co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(cm),hm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nc=new Z,ic=new Zt,Pi=new Z,Pa=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(nc,ic,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new Z,um=new pt,fm=new pt,nn=class extends Pa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,um,fm),t.subVectors(fm,um)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yu=class extends Co{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},La=class extends Sr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ku=class extends Co{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends Sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Er=class extends Pa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zu=class extends Co{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Zu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Da=class extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Hu=new WeakMap,Na=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&ut("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&ut("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Hu.has(o)===!0?(i&&i(Hu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Hu.set(c,l),ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fo=-90,po=1,Io=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(fo,po,e,t);i.layers=this.layers,this.add(i);let r=new nn(fo,po,e,t);r.layers=this.layers,this.add(r);let o=new nn(fo,po,e,t);o.layers=this.layers,this.add(o);let a=new nn(fo,po,e,t);a.layers=this.layers,this.add(a);let c=new nn(fo,po,e,t);c.layers=this.layers,this.add(c);let l=new nn(fo,po,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Rc=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Cc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,o,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Cf="\\[\\]\\.:\\/",yv=new RegExp("["+Cf+"]","g"),If="[^"+Cf+"]",_v="[^"+Cf.replace("\\.","")+"]",Mv=/((?:WC+[\/:])*)/.source.replace("WC",If),bv=/(WCOD+)?/.source.replace("WCOD",_v),Sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),Tv=new RegExp("^"+Mv+bv+Sv+wv+"$"),Ev=["material","materials","bones","map"],Ju=class{constructor(e,t,n){let i=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yv,"")}static parseTrackName(e){let t=Tv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ev.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Ju;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ic=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:lr,endingEnd:lr};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=km,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Hm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case vh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Bm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Va){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:lr:i.endingStart=fa,t?i.endingEnd=this.zeroSlopeAtEnd?cr:lr:i.endingEnd=fa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Av=new Float32Array(1),Is=class extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}let M=t&&t._propertyBindings[u].binding.parsedPath;m=new Cc(Xt.create(n,d,M),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ca(new Float32Array(2),new Float32Array(2),1,Av),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Mi.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Ic(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Mi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var dm=new ht,za=class{constructor(e,t,n=0,i=1/0){this.ray=new Rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dm),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(pm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$u(e[i],this,n,t);return n.sort(pm),n}};function pm(s,e){return s.distance-e.distance}function $u(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)$u(r[o],e,t,!0)}}var Ff=class Ff{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Ff.prototype.isMatrix2=!0;var ju=Ff;function Pf(s,e,t,n){let i=Rv(n);switch(t){case gf:return s*e;case kc:return s*e/i.components*i.byteLength;case Fa:return s*e/i.components*i.byteLength;case Ps:return s*e*2/i.components*i.byteLength;case Bc:return s*e*2/i.components*i.byteLength;case xf:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case Hc:return s*e*4/i.components*i.byteLength;case Oa:case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Xc:return Math.max(s,16)*Math.max(e,8)/4;case Gc:case Wc:return Math.max(s,8)*Math.max(e,8)/2;case qc:case Yc:case Zc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Ha:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fh:case dh:case ph:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ga:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(s){switch(s){case Kn:case ff:return{byteLength:1,components:1};case No:case df:case Si:return{byteLength:2,components:1};case Oc:case Uc:return{byteLength:2,components:4};case oi:case Fc:case Fn:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function E0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Iv(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],M=u[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let M=u[d];s.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,by=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ry=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,By=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U_=`#define DISTANCE
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
}`,k_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,K_=`#define MATCAP
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
}`,Z_=`#define MATCAP
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
}`,J_=`#define NORMAL
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
}`,$_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
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
}`,Q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,sM=`uniform float size;
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
}`,rM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:Pv,alphahash_pars_fragment:Lv,alphamap_fragment:Dv,alphamap_pars_fragment:Nv,alphatest_fragment:zv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Uv,batching_pars_vertex:kv,batching_vertex:Bv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:Zv,color_fragment:Jv,color_pars_fragment:$v,color_pars_vertex:jv,color_vertex:Qv,common:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:sy,emissivemap_pars_fragment:ry,colorspace_fragment:oy,colorspace_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:hy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:by,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:xy,lightmap_pars_fragment:vy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:_y,lights_pars_begin:My,lights_toon_fragment:Sy,lights_toon_pars_fragment:wy,lights_phong_fragment:Ty,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ay,lights_physical_pars_fragment:Ry,lights_fragment_begin:Cy,lights_fragment_maps:Iy,lights_fragment_end:Py,lightprobes_pars_fragment:Ly,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Fy,map_fragment:Oy,map_pars_fragment:Uy,map_particle_fragment:ky,map_particle_pars_fragment:By,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Vy,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:qy,morphtarget_vertex:Yy,normal_fragment_begin:Ky,normal_fragment_maps:Zy,normal_pars_fragment:Jy,normal_pars_vertex:$y,normal_vertex:jy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:s_,packing:r_,premultiplied_alpha_fragment:o_,project_vertex:a_,dithering_fragment:l_,dithering_pars_fragment:c_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:f_,shadowmap_pars_vertex:d_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:x_,skinning_vertex:v_,skinnormal_vertex:y_,specularmap_fragment:__,specularmap_pars_fragment:M_,tonemapping_fragment:b_,tonemapping_pars_fragment:S_,transmission_fragment:w_,transmission_pars_fragment:T_,uv_pars_fragment:E_,uv_pars_vertex:A_,uv_vertex:R_,worldpos_vertex:C_,background_vert:I_,background_frag:P_,backgroundCube_vert:L_,backgroundCube_frag:D_,cube_vert:N_,cube_frag:z_,depth_vert:F_,depth_frag:O_,distance_vert:U_,distance_frag:k_,equirect_vert:B_,equirect_frag:H_,linedashed_vert:G_,linedashed_frag:V_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:q_,meshlambert_frag:Y_,meshmatcap_vert:K_,meshmatcap_frag:Z_,meshnormal_vert:J_,meshnormal_frag:$_,meshphong_vert:j_,meshphong_frag:Q_,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:sM,points_frag:rM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},Qe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ki={basic:{uniforms:In([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:In([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:In([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:In([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:In([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new He(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:In([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:In([Qe.points,Qe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:In([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:In([Qe.common,Qe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:In([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:In([Qe.sprite,Qe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:In([Qe.common,Qe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:In([Qe.lights,Qe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Mh={r:0,b:0,g:0},hM=new ht,A0=new St;A0.set(-1,0,0,0,1,0,0,0,1);function uM(s,e,t,n,i,r){let o=new He(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let v=S.backgroundBlurriness>0;b=e.get(b,v)}return b}function m(S){let b=!1,v=d(S);v===null?p(o,a):v&&v.isColor&&(p(v,1),b=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(S,b){let v=d(b);v&&v.isCubeTexture?(l===void 0&&(l=new Tt(new yi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Nr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(A0),l.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ht,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new _i(2,2),new rn({name:"BackgroundMaterial",uniforms:Nr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(Mh,Rf(s)),t.buffers.color.setClear(Mh.r,Mh.g,Mh.b,b,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:m,addToRenderList:M,dispose:g}}function fM(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,z,k,B,Y){let G=!1,H=u(N,B,k,z);r!==H&&(r=H,l(r.object)),G=d(N,B,k,Y),G&&m(N,B,k,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(N,z,k,B),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,z,k,B){let Y=B.wireframe===!0,G=n[z.id];G===void 0&&(G={},n[z.id]=G);let H=N.isInstancedMesh===!0?N.id:0,_=G[H];_===void 0&&(_={},G[H]=_);let y=_[k.id];y===void 0&&(y={},_[k.id]=y);let L=y[Y];return L===void 0&&(L=f(c()),y[Y]=L),L}function f(N){let z=[],k=[],B=[];for(let Y=0;Y<t;Y++)z[Y]=0,k[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:B,object:N,attributes:{},index:null}}function d(N,z,k,B){let Y=r.attributes,G=z.attributes,H=0,_=k.getAttributes();for(let y in _)if(_[y].location>=0){let A=Y[y],D=G[y];if(D===void 0&&(y==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),y==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),A===void 0||A.attribute!==D||D&&A.data!==D.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function m(N,z,k,B){let Y={},G=z.attributes,H=0,_=k.getAttributes();for(let y in _)if(_[y].location>=0){let A=G[y];A===void 0&&(y==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),y==="instanceColor"&&N.instanceColor&&(A=N.instanceColor));let D={};D.attribute=A,A&&A.data&&(D.data=A.data),Y[y]=D,H++}r.attributes=Y,r.attributesNum=H,r.index=B}function M(){let N=r.newAttributes;for(let z=0,k=N.length;z<k;z++)N[z]=0}function p(N){g(N,0)}function g(N,z){let k=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;k[N]=1,B[N]===0&&(s.enableVertexAttribArray(N),B[N]=1),Y[N]!==z&&(s.vertexAttribDivisor(N,z),Y[N]=z)}function S(){let N=r.newAttributes,z=r.enabledAttributes;for(let k=0,B=z.length;k<B;k++)z[k]!==N[k]&&(s.disableVertexAttribArray(k),z[k]=0)}function b(N,z,k,B,Y,G,H){H===!0?s.vertexAttribIPointer(N,z,k,Y,G):s.vertexAttribPointer(N,z,k,B,Y,G)}function v(N,z,k,B){M();let Y=B.attributes,G=k.getAttributes(),H=z.defaultAttributeValues;for(let _ in G){let y=G[_];if(y.location>=0){let L=Y[_];if(L===void 0&&(_==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),_==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),L!==void 0){let A=L.normalized,D=L.itemSize,q=e.get(L);if(q===void 0)continue;let W=q.buffer,J=q.type,me=q.bytesPerElement,ie=J===s.INT||J===s.UNSIGNED_INT||L.gpuType===Fc;if(L.isInterleavedBufferAttribute){let le=L.data,Pe=le.isInterleavedBuffer===!0?le.stride:le.itemSize,Ge=L.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let he=0;he<y.locationSize;he++)g(y.location+he,le.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<y.locationSize;he++)p(y.location+he);s.bindBuffer(s.ARRAY_BUFFER,W);for(let he=0;he<y.locationSize;he++)b(y.location+he,D/y.locationSize,J,A,Pe*me,(Ge+D/y.locationSize*he)*me,ie)}else{if(L.isInstancedBufferAttribute){for(let le=0;le<y.locationSize;le++)g(y.location+le,L.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let le=0;le<y.locationSize;le++)p(y.location+le);s.bindBuffer(s.ARRAY_BUFFER,W);for(let le=0;le<y.locationSize;le++)b(y.location+le,D/y.locationSize,J,A,D*me,D/y.locationSize*le*me,ie)}}else if(H!==void 0){let A=H[_];if(A!==void 0)switch(A.length){case 2:s.vertexAttrib2fv(y.location,A);break;case 3:s.vertexAttrib3fv(y.location,A);break;case 4:s.vertexAttrib4fv(y.location,A);break;default:s.vertexAttrib1fv(y.location,A)}}}}S()}function C(){U();for(let N in n){let z=n[N];for(let k in z){let B=z[k];for(let Y in B){let G=B[Y];for(let H in G)h(G[H].object),delete G[H];delete B[Y]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let k in z){let B=z[k];for(let Y in B){let G=B[Y];for(let H in G)h(G[H].object),delete G[H];delete B[Y]}}delete n[N.id]}function x(N){for(let z in n){let k=n[z];for(let B in k){let Y=k[B];if(Y[N.id]===void 0)continue;let G=Y[N.id];for(let H in G)h(G[H].object),delete G[H];delete Y[N.id]}}}function w(N){for(let z in n){let k=n[z],B=N.isInstancedMesh===!0?N.id:0,Y=k[B];if(Y!==void 0){for(let G in Y){let H=Y[G];for(let _ in H)h(H[_].object),delete H[_];delete Y[G]}delete k[B],Object.keys(k).length===0&&delete n[z]}}}function U(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function dM(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function pM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Xn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Kn&&x!==Fn&&!w&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,maxSamples:C,samples:E}}function mM(s){let e=this,t=null,n=0,i=!1,r=!1,o=new $n,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,b=S*4,v=g.clippingState||null;c.value=v,v=h(m,f,b,d);for(let C=0;C!==b;++C)v[C]=t[C];g.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let M=u!==null?u.length:0,p=null;if(M!==0){if(p=c.value,m!==!0||p===null){let g=d+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=d;b!==M;++b,v+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var Za=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Rr});r.uniforms.tEquirect.value=t;let o=new Tt(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=dn),new Io(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},r0=256,gM=3,xM=20,R0=256,C0=16,vM=3,yM=new Z,_M=new He,Sh=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Io(1,10,null),this._boxMesh=new Tt(new yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=yM}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(_M));let p=new Io(n,i,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=m,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(r0,Tf(e))}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lo?this._setSize(e.image.length===0?r0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=o0(e,!1,!1),n=Math.log2(e)-gM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=o0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Pr||e.mapping===Lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=a0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=MM(),this._integrationMaterial=bM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/C0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-vM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(R0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=SM());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function o0(s,e,t){return new Za(s,{minFilter:ri,generateMipmaps:e,type:Si,colorSpace:On,depthBuffer:t})}function Ja(s,e,t){return new rn({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:gn,blending:Rr,depthTest:!1,depthWrite:!1})}function MM(){return Ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${R0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bM(){return Ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:C0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function SM(){return Ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function a0(){return Ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function l0(){return Ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Dc||d===Nc)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let M=new Za(m.height);return M.fromEquirectangularTexture(s,f),e.set(f,M),f.addEventListener("dispose",l),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Dc||d===Nc,M=d===Pr||d===Lo;if(m||M){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Sh(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return m&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new Sh(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Dc?f.mapping=Pr:d===Nc&&(f.mapping=Lo),f}function c(f){let d=0,m=6;for(let M=0;M<m;M++)f[M]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function TM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&hr("WebGLRenderer: "+n+" extension not supported."),i}}}function EM(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let M=r.get(m);M&&(e.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,M){return i[M.id]!==void 0||(M.addEventListener("dispose",a),i[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(m){let M=m.attributes;for(let p in M)e.update(M[p],s.ARRAY_BUFFER)}function u(m){let M=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let S=M!==null?M.array.length:p.array.length/3-1,b=p.count>=65535?va:xa,v=new b(Math.ceil(S/3)*6,1),C=v.array;if(M!==null){let x=M.array;g=M.version;for(let w=0,U=0;w<S;w+=3){let R=x[w+0],N=x[w+1],z=x[w+2];C[U++]=R,C[U++]=N,C[U++]=N,C[U++]=z,C[U++]=z,C[U++]=R}}else{g=p.version;for(let x=0,w=0;x<S;x+=3){let U=x+0,R=x+1,N=x+2;C[w++]=U,C[w++]=R,C[w++]=R,C[w++]=N,C[w++]=N,C[w++]=U}}v.version=g;let E=r.get(m);E&&e.remove(E),r.set(m,v)}function f(m){let M=r.get(m);if(M){let p=m.index;p!==null&&M.version<p.version&&u(m)}else u(m);return r.get(m)}function d(){for(let m in i){let M=i[m].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function AM(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let M=0;for(let p=0;p<d;p++)M+=f[p];t.update(M,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function RM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:bt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function CM(s,e,t){let n=new WeakMap,i=new Wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let U=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let v=a.attributes.position.count*b,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*u),x=new ma(E,v,C,u);x.type=Fn,x.needsUpdate=!0;let w=b*4;for(let R=0;R<u;R++){let N=p[R],z=g[R],k=S[R],B=v*C*4*R;for(let Y=0;Y<N.count;Y++){let G=Y*w;d===!0&&(i.fromBufferAttribute(N,Y),E[B+G+0]=i.x,E[B+G+1]=i.y,E[B+G+2]=i.z,E[B+G+3]=0),m===!0&&(i.fromBufferAttribute(z,Y),E[B+G+4]=i.x,E[B+G+5]=i.y,E[B+G+6]=i.z,E[B+G+7]=0),M===!0&&(i.fromBufferAttribute(k,Y),E[B+G+8]=i.x,E[B+G+9]=i.y,E[B+G+10]=i.z,E[B+G+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new pt(v,C)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function IM(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var PM={[rf]:"LINEAR_TONE_MAPPING",[of]:"REINHARD_TONE_MAPPING",[af]:"CINEON_TONE_MAPPING",[lf]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[Ir]:"NEUTRAL_TONE_MAPPING",[cf]:"CUSTOM_TONE_MAPPING"};function LM(s,e,t,n,i,r){let o=new jn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Nt;h.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let u=new yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Tt(h,u),d=new Er(-1,1,1,-1,0,1),m=null,M=null,p=!1,g,S=null,b=[],v=!1;this.setSize=function(C,E){o.setSize(C,E),a!==null&&a.setSize(C,E),c!==null&&c.setSize(C,E);for(let x=0;x<b.length;x++){let w=b[x];w.setSize&&w.setSize(C,E)}},this.setEffects=function(C){b=C,v=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new jn(E,x,{type:Si,depthBuffer:!1,stencilBuffer:!1}),c=new jn(E,x,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&b.some(U=>U.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new ss(E,x),r===!0&&(l.format=us,l.type=Dr)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let U=0;U<b.length;U++){let R=b[U];R.setSize&&R.setSize(E,x),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(C,E){if(p||C.toneMapping===Fi&&b.length===0)return!1;if(S=E,E!==null){let x=E.width,w=E.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return v===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=Fi,!0},this.hasRenderPass=function(){return v},this.end=function(C,E){C.toneMapping=g,p=!0;let x=o,w=a;for(let U=0;U<b.length;U++){let R=b[U];R.enabled!==!1&&(R.render(C,w,x,E),R.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(m!==C.outputColorSpace||M!==C.toneMapping){m=C.outputColorSpace,M=C.toneMapping,u.defines={},Rt.getTransfer(m)===Ht&&(u.defines.SRGB_TRANSFER="");let U=PM[M];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(S),C.render(f,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var I0=new pn,P0=new ss(1,1),L0=new wa(1),D0=new ma,N0=new mc,z0=new Sa,c0=[],h0=[],u0=new Float32Array(16),f0=new Float32Array(9),d0=new Float32Array(4);function Uo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=c0[i];if(r===void 0&&(r=new Float32Array(i),c0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wh(s,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function DM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function NM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function zM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function FM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function OM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;d0.set(n),s.uniformMatrix2fv(this.addr,!1,d0),vn(t,n)}}function UM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;f0.set(n),s.uniformMatrix3fv(this.addr,!1,f0),vn(t,n)}}function kM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;u0.set(n),s.uniformMatrix4fv(this.addr,!1,u0),vn(t,n)}}function BM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function HM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function GM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function VM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function WM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function XM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function qM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function YM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Th(s){return s.version===0&&(s.compareFunction=Mf,s.needsUpdate=!0),s}function KM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Th(P0):r=I0,t.setTexture2D(e||r,i)}function ZM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||N0,i)}function JM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Th(L0):r=z0,t.setTextureCube(e||r,i)}function $M(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||D0,i)}function jM(s){switch(s){case 5126:return DM;case 35664:return NM;case 35665:return zM;case 35666:return FM;case 35674:return OM;case 35675:return UM;case 35676:return kM;case 5124:case 35670:return BM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return VM;case 5125:return WM;case 36294:return XM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return $M}}function QM(s,e){s.uniform1fv(this.addr,e)}function eb(s,e){let t=Uo(e,this.size,2);s.uniform2fv(this.addr,t)}function tb(s,e){let t=Uo(e,this.size,3);s.uniform3fv(this.addr,t)}function nb(s,e){let t=Uo(e,this.size,4);s.uniform4fv(this.addr,t)}function ib(s,e){let t=Uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sb(s,e){let t=Uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rb(s,e){let t=Uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ob(s,e){s.uniform1iv(this.addr,e)}function ab(s,e){s.uniform2iv(this.addr,e)}function lb(s,e){s.uniform3iv(this.addr,e)}function cb(s,e){s.uniform4iv(this.addr,e)}function hb(s,e){s.uniform1uiv(this.addr,e)}function ub(s,e){s.uniform2uiv(this.addr,e)}function fb(s,e){s.uniform3uiv(this.addr,e)}function db(s,e){s.uniform4uiv(this.addr,e)}function pb(s,e,t){let n=this.cache,i=e.length,r=wh(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Th(P0):o=I0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function mb(s,e,t){let n=this.cache,i=e.length,r=wh(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||N0,r[o])}function gb(s,e,t){let n=this.cache,i=e.length,r=wh(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Th(L0):o=z0;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function xb(s,e,t){let n=this.cache,i=e.length,r=wh(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||D0,r[o])}function vb(s){switch(s){case 5126:return QM;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return hb;case 36294:return ub;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return xb}}var kf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jM(t.type)}},Bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vb(t.type)}},Hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Of=/(\w+)(\])?(\[|\.)?/g;function p0(s,e){s.seq.push(e),s.map[e.id]=e}function yb(s,e,t){let n=s.name,i=n.length;for(Of.lastIndex=0;;){let r=Of.exec(n),o=Of.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){p0(t,l===void 0?new kf(a,s,e):new Bf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Hf(a),p0(t,u)),t=u}}}var Fo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);yb(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function m0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _b=37297,Mb=0;function bb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var g0=new St;function Sb(s){Rt._getMatrix(g0,Rt.workingColorSpace,s);let e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case da:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function x0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bb(s.getShaderSource(e),a)}else return r}function wb(s,e){let t=Sb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Tb={[rf]:"Linear",[of]:"Reinhard",[af]:"Cineon",[lf]:"ACESFilmic",[hf]:"AgX",[Ir]:"Neutral",[cf]:"Custom"};function Eb(s,e){let t=Tb[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bh=new Z;function Ab(){Rt.getLuminanceCoefficients(bh);let s=bh.x.toFixed(4),e=bh.y.toFixed(4),t=bh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function Cb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ka(s){return s!==""}function v0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function y0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(s){return s.replace(Pb,Lb)}function Lb(s,e){let t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gf(t)}var Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(s){return s.replace(Db,Nb)}function Nb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function M0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var zb={[Ar]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function Fb(s){return zb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ob={[Lo]:"ENVMAP_MODE_REFRACTION"};function Ub(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ob[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kb={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[Fm]:"ENVMAP_BLENDING_MIX",[Om]:"ENVMAP_BLENDING_ADD"};function Bb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kb[s.combine]||"ENVMAP_BLENDING_NONE"}function Hb(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fb(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ub(t),u=Bb(t),f=Rb(t),d=Cb(r),m=i.createProgram(),M,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ka).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(M=[M0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[M0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?At.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,wb("linearToOutputTexel",t.outputColorSpace),Ab(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=Gf(o),o=v0(o,t),o=y0(o,t),a=Gf(a),a=v0(a,t),a=y0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=g+M+o,b=g+p+a,v=m0(i,i.VERTEX_SHADER,S),C=m0(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(R){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",z=i.getShaderInfoLog(v)||"",k=i.getShaderInfoLog(C)||"",B=N.trim(),Y=z.trim(),G=k.trim(),H=!0,_=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,C);else{let y=x0(i,v,"vertex"),L=x0(i,C,"fragment");bt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+y+`
`+L)}else B!==""?ut("WebGLProgram: Program Info Log:",B):(Y===""||G==="")&&(_=!1);_&&(R.diagnostics={runnable:H,programLog:B,vertexShader:{log:Y,prefix:M},fragmentShader:{log:G,prefix:p}})}i.deleteShader(v),i.deleteShader(C),x=new Fo(i,m),w=Ib(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,_b)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=C,this}var Gb=0,Vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wf(e),t.set(e,n)),n}},Wf=class{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}};function Vb(s){return s===Ps||s===Ha||s===Ga}function Wb(s,e,t,n,i,r){let o=new bo,a=new Vf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,U,R,N,z){let k=R.fog,B=N.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||Y,G),_=f[x.type],y=n.precision;x.precision!==null&&(y=n.getMaxPrecision(x.precision),y!==x.precision&&ut("WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));let L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,A=L!==void 0?L.length:0,D=0;B.morphAttributes.position!==void 0&&(D=1),B.morphAttributes.normal!==void 0&&(D=2),B.morphAttributes.color!==void 0&&(D=3);let q,W,J,me;if(_){let qe=ki[_];q=qe.vertexShader,W=qe.fragmentShader}else{q=x.vertexShader,W=x.fragmentShader;let qe=a.getVertexShaderStage(x),Lt=a.getFragmentShaderStage(x);a.update(x,qe,Lt),J=qe.id,me=Lt.id}let ie=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,Ge=N.isBatchedMesh===!0,he=!!x.map,ke=!!x.matcap,ae=!!H,j=ae&&H.isPMREMTexture===!0,Fe=!!x.aoMap,Ke=!!x.lightMap,Ne=!!x.bumpMap&&x.wireframe===!1,Ve=!!x.normalMap,mt=!!x.displacementMap,Mt=!!x.emissiveMap,be=!!x.metalnessMap,ce=!!x.roughnessMap,Re=x.anisotropy>0,O=x.clearcoat>0,oe=x.diffuseRoughness>0,X=x.dispersion>0,se=x.retroreflectivity>0,re=x.iridescence>0,Ce=x.sheen>0,Se=x.transmission>0,Le=Re&&!!x.anisotropyMap,I=O&&!!x.clearcoatMap,P=O&&!!x.clearcoatNormalMap,Q=O&&!!x.clearcoatRoughnessMap,ge=oe&&!!x.diffuseRoughnessMap,pe=re&&!!x.iridescenceMap,we=re&&!!x.iridescenceThicknessMap,Ae=Ce&&!!x.sheenColorMap,xe=Ce&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ee=!!x.specularColorMap,V=!!x.specularIntensityMap,ee=Se&&!!x.transmissionMap,$=Se&&!!x.thicknessMap,Ie=!!x.gradientMap,ve=!!x.alphaMap,Ue=x.alphaTest>0,Ye=!!x.alphaHash,Ze=!!x.extensions,ze=Fi;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ze=s.toneMapping);let tt=j?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,vt={shaderID:_,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:W,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:ke,envMap:ae,envMapMode:ae&&H.mapping,envMapPMREM:j,envMapMaxLod:j?tt.length-1:null,envMapSize:j?tt[0].width:null,aoMap:Fe,lightMap:Ke,bumpMap:Ne,normalMap:Ve,displacementMap:mt,emissiveMap:Mt,normalMapObjectSpace:Ve&&x.normalMapType===Vm,normalMapTangentSpace:Ve&&x.normalMapType===Xa,packedNormalMap:Ve&&x.normalMapType===Xa&&Vb(x.normalMap.format),metalnessMap:be,roughnessMap:ce,anisotropy:Re,anisotropyMap:Le,clearcoat:O,clearcoatMap:I,clearcoatNormalMap:P,clearcoatRoughnessMap:Q,diffuseRoughness:oe,diffuseRoughnessMap:ge,dispersion:X,retroreflection:se,iridescence:re,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:Ce,sheenColorMap:Ae,sheenRoughnessMap:xe,specularMap:fe,specularColorMap:Ee,specularIntensityMap:V,transmission:Se,transmissionMap:ee,thicknessMap:$,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ue,alphaHash:Ye,combine:x.combine,mapUv:he&&d(x.map.channel),aoMapUv:Fe&&d(x.aoMap.channel),lightMapUv:Ke&&d(x.lightMap.channel),bumpMapUv:Ne&&d(x.bumpMap.channel),normalMapUv:Ve&&d(x.normalMap.channel),displacementMapUv:mt&&d(x.displacementMap.channel),emissiveMapUv:Mt&&d(x.emissiveMap.channel),metalnessMapUv:be&&d(x.metalnessMap.channel),roughnessMapUv:ce&&d(x.roughnessMap.channel),anisotropyMapUv:Le&&d(x.anisotropyMap.channel),clearcoatMapUv:I&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:P&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&d(x.sheenRoughnessMap.channel),specularMapUv:fe&&d(x.specularMap.channel),specularColorMapUv:Ee&&d(x.specularColorMap.channel),specularIntensityMapUv:V&&d(x.specularIntensityMap.channel),transmissionMapUv:ee&&d(x.transmissionMap.channel),thicknessMapUv:$&&d(x.thicknessMap.channel),alphaMapUv:ve&&d(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ve||Re),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(he||ve),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:D,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(qe=>qe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Ht,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===Ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&x.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function M(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)w.push(U),w.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(w,x),g(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let w=f[x.type],U;if(w){let R=ki[w];U=n0.clone(R.uniforms)}else U=x.uniforms;return U}function b(x,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new Hb(s,w,x,i),l.push(U),h.set(w,U)),U}function v(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:S,acquireProgram:b,releaseProgram:v,releaseShaderCache:C,programs:l,dispose:E}}function Xb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function b0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function S0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,M,p,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:p,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=o(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=p,S.group=g),e++,S}function c(f,d,m,M,p,g,S){S.reversedDepth===!0&&(p=-p);let b=a(f,d,m,M,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function l(f,d,m,M,p,g){let S=a(f,d,m,M,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function h(f,d){t.length>1&&t.sort(f||qb),n.length>1&&n.sort(d||b0),i.length>1&&i.sort(d||b0)}function u(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function Yb(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new S0,s.set(n,[o])):i>=r.length?(o=new S0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new He};break;case"SpotLight":t={position:new Z,direction:new Z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Zb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Jb=0;function $b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jb(s){let e=new Kb,t=Zb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Z);let i=new Z,r=new ht,o=new ht;function a(l){let h=0,u=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,m=0,M=0,p=0,g=0,S=0,b=0,v=0,C=0,E=0,x=0,w=0,U=0,R=0;l.sort($b);for(let z=0,k=l.length;z<k;z++){let B=l[z],Y=B.color,G=B.intensity,H=B.distance,_=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ps?_=B.shadow.map.texture:_=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=Y.r*G,u+=Y.g*G,f+=Y.b*G;else if(B.isLightProbe){for(let y=0;y<9;y++)n.probe[y].addScaledVector(B.sh.coefficients[y],G);R++}else if(B.isSunLight){let y=e.get(B);if(y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[m]=A,n.sunShadowMap[m]=_;let D=L.getViewportCount();for(let q=0;q<D;q++)n.sunShadowMatrix[M+q]=L.getMatrix(q),n.sunShadowCascade[M+q]=L._cascadeData[q];M+=D,m++}n.sun[d]=y,d++}else if(B.isDirectionalLight){let y=e.get(B);if(y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.directionalShadow[p]=A,n.directionalShadowMap[p]=_,n.directionalShadowMatrix[p]=B.shadow.matrix,C++}n.directional[p]=y,p++}else if(B.isSpotLight){let y=e.get(B);y.position.setFromMatrixPosition(B.matrixWorld),y.color.copy(Y).multiplyScalar(G),y.distance=H,y.coneCos=Math.cos(B.angle),y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),y.decay=B.decay,n.spot[S]=y;let L=B.shadow;if(B.map&&(n.spotLightMap[w]=B.map,w++,L.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[S]=L.matrix,B.castShadow){let A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.spotShadow[S]=A,n.spotShadowMap[S]=_,x++}S++}else if(B.isRectAreaLight){let y=e.get(B);y.color.copy(Y).multiplyScalar(G),y.halfWidth.set(B.width*.5,0,0),y.halfHeight.set(0,B.height*.5,0),n.rectArea[b]=y,b++}else if(B.isPointLight){let y=e.get(B);if(y.color.copy(B.color).multiplyScalar(B.intensity),y.distance=B.distance,y.decay=B.decay,B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,A.shadowCameraNear=L.camera.near,A.shadowCameraFar=L.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=_,n.pointShadowMatrix[g]=B.shadow.matrix,E++}n.point[g]=y,g++}else if(B.isHemisphereLight){let y=e.get(B);y.skyColor.copy(B.color).multiplyScalar(G),y.groundColor.copy(B.groundColor).multiplyScalar(G),n.hemi[v]=y,v++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qe.LTC_FLOAT_1,n.rectAreaLTC2=Qe.LTC_FLOAT_2):(n.rectAreaLTC1=Qe.LTC_HALF_1,n.rectAreaLTC2=Qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==S||N.rectAreaLength!==b||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==C||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=b,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=S,N.rectAreaLength=b,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=C,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=R,n.version=Jb++)}function c(l,h){let u=0,f=0,d=0,m=0,M=0,p=0,g=h.matrixWorldInverse;for(let S=0,b=l.length;S<b;S++){let v=l[S];if(v.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(g),f++}else if(v.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function w0(s){let e=new jb(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Qb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new w0(s),e.set(i,[a])):r>=o.length?(a=new w0(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nS=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],iS=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],T0=new ht,Ya=new Z,Uf=new Z;function sS(s,e,t){let n=new xi,i=new pt,r=new pt,o=new Wt,a=new _c,c=new Mc,l={},h=t.maxTextureSize,u={[zi]:gn,[gn]:zi,[on]:on},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Nt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Tt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(E,x,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===xm&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let U=s.getRenderTarget(),R=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Rr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Y=>Y.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Y=E.length;B<Y;B++){let G=E[B],H=G.shadow;if(H===void 0){ut("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let _=H.getFrameExtents();i.multiply(_),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/_.x),i.x=r.x*_.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/_.y),i.y=r.y*_.y,H.mapSize.y=r.y));let y=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=y,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Po){if(G.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new jn(i.x,i.y,{format:Ps,type:Si,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new ss(i.x,i.y,Fn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=ns,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=sn,H.map.depthTexture.magFilter=sn}else G.isPointLight?(H.map=new Za(i.x),H.map.depthTexture=new wa(i.x,oi)):(H.map=new jn(i.x,i.y),H.map.depthTexture=new ss(i.x,i.y,oi)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=ns,this.type===Ar?(H.map.depthTexture.compareFunction=y?_f:yf,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=sn,H.map.depthTexture.magFilter=sn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let L=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,w);let A=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:w.layers;for(let D=0;D<L;D++){let q=H.getCamera(D);if(G.isPointLight){let W=H.camera,J=H.matrix,me=G.distance||W.far;me!==W.far&&(W.far=me,W.updateProjectionMatrix()),Ya.setFromMatrixPosition(G.matrixWorld),W.position.copy(Ya),Uf.copy(W.position),Uf.add(nS[D]),W.up.copy(iS[D]),W.lookAt(Uf),W.updateMatrixWorld(),J.makeTranslation(-Ya.x,-Ya.y,-Ya.z),T0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H._frustum.setFromProjectionMatrix(T0,W.coordinateSystem,W.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,D),s.clear();else{D===0&&(s.setRenderTarget(H.map),s.clear());let W=H.getViewport(D);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o)}n=H.getFrustum(D),v(x,w,q,G,A,this.type)}H.isPointLightShadow!==!0&&this.type===Po&&S(H,w),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(U,R,N)};function S(E,x){let w=e.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(i.x,i.y,{format:Ps,type:Si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,w,f,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,w,d,M,null)}function b(E,x,w,U){let R=null,N=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=w.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=R.uuid,k=x.uuid,B=l[z];B===void 0&&(B={},l[z]=B);let Y=B[k];Y===void 0&&(Y=R.clone(),B[k]=Y,x.addEventListener("dispose",C)),R=Y}if(R.visible=x.visible,R.wireframe=x.wireframe,U===Po?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=s.properties.get(R);z.light=w}return R}function v(E,x,w,U,R,N){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Po)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let B=e.update(E),Y=E.material;if(Array.isArray(Y)){let G=B.groups;for(let H=0,_=G.length;H<_;H++){let y=G[H],L=Y[y.materialIndex];if(L&&L.visible){let A=b(E,L,U,N);E.onBeforeShadow(s,E,x,w,B,A,y),s.renderBufferDirect(w,null,B,A,E,y),E.onAfterShadow(s,E,x,w,B,A,y)}}}else if(Y.visible){let G=b(E,Y,U,N);E.onBeforeShadow(s,E,x,w,B,G,null),s.renderBufferDirect(w,null,B,G,E,null),E.onAfterShadow(s,E,x,w,B,G,null)}}let k=E.children;for(let B=0,Y=k.length;B<Y;B++)v(k[B],x,w,U,R,N)}function C(E){E.target.removeEventListener("dispose",C);for(let w in l){let U=l[w],R=E.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function rS(s,e){function t(){let V=!1,ee=new Wt,$=null,Ie=new Wt(0,0,0,0);return{setMask:function(ve){$!==ve&&!V&&(s.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){V=ve},setClear:function(ve,Ue,Ye,Ze,ze){ze===!0&&(ve*=Ze,Ue*=Ze,Ye*=Ze),ee.set(ve,Ue,Ye,Ze),Ie.equals(ee)===!1&&(s.clearColor(ve,Ue,Ye,Ze),Ie.copy(ee))},reset:function(){V=!1,$=null,Ie.set(-1,0,0,0)}}}function n(){let V=!1,ee=!1,$=null,Ie=null,ve=null;return{setReversed:function(Ue){if(ee!==Ue){let Ye=e.get("EXT_clip_control");Ue?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ee=Ue;let Ze=ve;ve=null,this.setClear(Ze)}},getReversed:function(){return ee},setTest:function(Ue){Ue?le(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Ue){$!==Ue&&!V&&(s.depthMask(Ue),$=Ue)},setFunc:function(Ue){if(ee&&(Ue=Qm[Ue]),Ie!==Ue){switch(Ue){case oc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){ve!==Ue&&(ve=Ue,ee&&(Ue=1-Ue),s.clearDepth(Ue))},reset:function(){V=!1,$=null,Ie=null,ve=null,ee=!1}}}function i(){let V=!1,ee=null,$=null,Ie=null,ve=null,Ue=null,Ye=null,Ze=null,ze=null;return{setTest:function(tt){V||(tt?le(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!V&&(s.stencilMask(tt),ee=tt)},setFunc:function(tt,vt,qe){($!==tt||Ie!==vt||ve!==qe)&&(s.stencilFunc(tt,vt,qe),$=tt,Ie=vt,ve=qe)},setOp:function(tt,vt,qe){(Ue!==tt||Ye!==vt||Ze!==qe)&&(s.stencilOp(tt,vt,qe),Ue=tt,Ye=vt,Ze=qe)},setLocked:function(tt){V=tt},setClear:function(tt){ze!==tt&&(s.clearStencil(tt),ze=tt)},reset:function(){V=!1,ee=null,$=null,Ie=null,ve=null,Ue=null,Ye=null,Ze=null,ze=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],M=null,p=!1,g=null,S=null,b=null,v=null,C=null,E=null,x=null,w=new He(0,0,0),U=0,R=!1,N=null,z=null,k=null,B=null,Y=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,_=0,y=s.getParameter(s.VERSION);y.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(y)[1]),H=_>=1):y.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),H=_>=2);let L=null,A={},D=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),W=new Wt().fromArray(D),J=new Wt().fromArray(q);function me(V,ee,$,Ie){let ve=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(V,Ue),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<$;Ye++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ee+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ue}let ie={};ie[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(go),Ne(!1),Ve(Qu),le(s.CULL_FACE),Fe(Rr);function le(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function Pe(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Ge(V,ee){return f[V]!==ee?(s.bindFramebuffer(V,ee),f[V]=ee,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ee),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function he(V,ee){let $=m,Ie=!1;if(V){$=d.get(ee),$===void 0&&($=[],d.set(ee,$));let ve=V.textures;if($.length!==ve.length||$[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,Ye=ve.length;Ue<Ye;Ue++)$[Ue]=s.COLOR_ATTACHMENT0+Ue;$.length=ve.length,Ie=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers($)}function ke(V){return M!==V?(s.useProgram(V),M=V,!0):!1}let ae={[Cr]:s.FUNC_ADD,[ym]:s.FUNC_SUBTRACT,[_m]:s.FUNC_REVERSE_SUBTRACT};ae[Mm]=s.MIN,ae[bm]=s.MAX;let j={[Sm]:s.ZERO,[wm]:s.ONE,[Tm]:s.SRC_COLOR,[nf]:s.SRC_ALPHA,[Pm]:s.SRC_ALPHA_SATURATE,[Cm]:s.DST_COLOR,[Am]:s.DST_ALPHA,[Em]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[Im]:s.ONE_MINUS_DST_COLOR,[Rm]:s.ONE_MINUS_DST_ALPHA,[Lm]:s.CONSTANT_COLOR,[Dm]:s.ONE_MINUS_CONSTANT_COLOR,[Nm]:s.CONSTANT_ALPHA,[zm]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(V,ee,$,Ie,ve,Ue,Ye,Ze,ze,tt){if(V===Rr){p===!0&&(Pe(s.BLEND),p=!1);return}if(p===!1&&(le(s.BLEND),p=!0),V!==vm){if(V!==g||tt!==R){if((S!==Cr||C!==Cr)&&(s.blendEquation(s.FUNC_ADD),S=Cr,C=Cr),tt)switch(V){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFunc(s.ONE,s.ONE);break;case ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",V);break}else switch(V){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ef:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tf:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",V);break}b=null,v=null,E=null,x=null,w.set(0,0,0),U=0,g=V,R=tt}return}ve=ve||ee,Ue=Ue||$,Ye=Ye||Ie,(ee!==S||ve!==C)&&(s.blendEquationSeparate(ae[ee],ae[ve]),S=ee,C=ve),($!==b||Ie!==v||Ue!==E||Ye!==x)&&(s.blendFuncSeparate(j[$],j[Ie],j[Ue],j[Ye]),b=$,v=Ie,E=Ue,x=Ye),(Ze.equals(w)===!1||ze!==U)&&(s.blendColor(Ze.r,Ze.g,Ze.b,ze),w.copy(Ze),U=ze),g=V,R=!1}function Ke(V,ee){V.side===on?Pe(s.CULL_FACE):le(s.CULL_FACE);let $=V.side===gn;ee&&($=!$),Ne($),V.blending===bi&&V.transparent===!1?Fe(Rr):Fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ie=V.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(V){N!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),N=V)}function Ve(V){V!==mm?(le(s.CULL_FACE),V!==z&&(V===Qu?s.cullFace(s.BACK):V===gm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),z=V}function mt(V){V!==k&&(H&&s.lineWidth(V),k=V)}function Mt(V,ee,$){V?(le(s.POLYGON_OFFSET_FILL),(B!==ee||Y!==$)&&(B=ee,Y=$,o.getReversed()&&(ee=-ee,$=-$),s.polygonOffset(ee,$))):Pe(s.POLYGON_OFFSET_FILL)}function be(V){V?le(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function ce(V){V===void 0&&(V=s.TEXTURE0+G-1),L!==V&&(s.activeTexture(V),L=V)}function Re(V,ee,$){$===void 0&&(L===null?$=s.TEXTURE0+G-1:$=L);let Ie=A[$];Ie===void 0&&(Ie={type:void 0,texture:void 0},A[$]=Ie),(Ie.type!==V||Ie.texture!==ee)&&(L!==$&&(s.activeTexture($),L=$),s.bindTexture(V,ee||ie[V]),Ie.type=V,Ie.texture=ee)}function O(){let V=A[L];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function se(){try{s.texSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function re(){try{s.texSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function Le(){try{s.texStorage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function I(){try{s.texStorage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function P(){try{s.texImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function Q(){try{s.texImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function ge(V){return u[V]!==void 0?u[V]:s.getParameter(V)}function pe(V,ee){u[V]!==ee&&(s.pixelStorei(V,ee),u[V]=ee)}function we(V){W.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),W.copy(V))}function Ae(V){J.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function xe(V,ee){let $=l.get(ee);$===void 0&&($=new WeakMap,l.set(ee,$));let Ie=$.get(V);Ie===void 0&&(Ie=s.getUniformBlockIndex(ee,V.name),s.uniformBlockBinding(ee,Ie,Ie),$.set(V,Ie))}function fe(V,ee,$){let ve=l.get(ee).get(V);c[ve]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,$),c[ve]=$)}function Ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,A={},f={},c={},d=new WeakMap,m=[],M=null,p=!1,g=null,S=null,b=null,v=null,C=null,E=null,x=null,w=new He(0,0,0),U=0,R=!1,N=null,z=null,k=null,B=null,Y=null,W.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:Ge,drawBuffers:he,useProgram:ke,setBlending:Fe,setMaterial:Ke,setFlipSided:Ne,setCullFace:Ve,setLineWidth:mt,setPolygonOffset:Mt,setScissorTest:be,activeTexture:ce,bindTexture:Re,unbindTexture:O,compressedTexImage2D:oe,compressedTexImage3D:X,texImage2D:P,texImage3D:Q,pixelStorei:pe,getParameter:ge,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:Le,texStorage3D:I,texSubImage2D:se,texSubImage3D:re,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Se,scissor:we,viewport:Ae,reset:Ee}}function oS(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=new Set,M=new FinalizationRegistry(I=>m.delete(I)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,P){return p?new OffscreenCanvas(I,P):yo("canvas")}function S(I,P,Q){let ge=1,pe=Le(I);if((pe.width>Q||pe.height>Q)&&(ge=Q/Math.max(pe.width,pe.height)),ge<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let we=Math.floor(ge*pe.width),Ae=Math.floor(ge*pe.height);f===void 0&&(f=g(we,Ae));let xe=P?g(we,Ae):f;return xe.width=we,xe.height=Ae,xe.getContext("2d").drawImage(I,0,0,we,Ae),ut("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+we+"x"+Ae+")."),xe}else return"data"in I&&ut("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function b(I){return I.generateMipmaps}function v(I){s.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(I,P,Q,ge,pe,we=!1){if(I!==null){if(s[I]!==void 0)return s[I];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ae;ge&&(Ae=e.get("EXT_texture_norm16"),Ae||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=P;if(P===s.RED&&(Q===s.FLOAT&&(xe=s.R32F),Q===s.HALF_FLOAT&&(xe=s.R16F),Q===s.UNSIGNED_BYTE&&(xe=s.R8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.R16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.R16_SNORM_EXT)),P===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.R8UI),Q===s.UNSIGNED_SHORT&&(xe=s.R16UI),Q===s.UNSIGNED_INT&&(xe=s.R32UI),Q===s.BYTE&&(xe=s.R8I),Q===s.SHORT&&(xe=s.R16I),Q===s.INT&&(xe=s.R32I)),P===s.RG&&(Q===s.FLOAT&&(xe=s.RG32F),Q===s.HALF_FLOAT&&(xe=s.RG16F),Q===s.UNSIGNED_BYTE&&(xe=s.RG8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RG16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RG16_SNORM_EXT)),P===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RG16UI),Q===s.UNSIGNED_INT&&(xe=s.RG32UI),Q===s.BYTE&&(xe=s.RG8I),Q===s.SHORT&&(xe=s.RG16I),Q===s.INT&&(xe=s.RG32I)),P===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),Q===s.UNSIGNED_INT&&(xe=s.RGB32UI),Q===s.BYTE&&(xe=s.RGB8I),Q===s.SHORT&&(xe=s.RGB16I),Q===s.INT&&(xe=s.RGB32I)),P===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(xe=s.RGBA32UI),Q===s.BYTE&&(xe=s.RGBA8I),Q===s.SHORT&&(xe=s.RGBA16I),Q===s.INT&&(xe=s.RGBA32I)),P===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGB16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),P===s.RGBA){let fe=we?da:Rt.getTransfer(pe);Q===s.FLOAT&&(xe=s.RGBA32F),Q===s.HALF_FLOAT&&(xe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(xe=fe===Ht?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGBA16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function x(I,P){let Q;return I?P===null||P===oi||P===Dr?Q=s.DEPTH24_STENCIL8:P===Fn?Q=s.DEPTH32F_STENCIL8:P===No&&(Q=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===oi||P===Dr?Q=s.DEPTH_COMPONENT24:P===Fn?Q=s.DEPTH_COMPONENT32F:P===No&&(Q=s.DEPTH_COMPONENT16),Q}function w(I,P){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==sn&&I.minFilter!==dn?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function U(I){let P=new WeakRef(I);n.get(I).__ref=P,m.add(P),M.register(I,P,P)}function R(I){let P=n.get(I).__ref;P!==void 0&&(m.delete(P),M.unregister(P))}function N(I){k(I.target)}function z(I){B(I.target)}function k(I){I.removeEventListener("dispose",N),R(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function B(I){I.removeEventListener("dispose",z),R(I),_(I)}function Y(){for(let I of m){let P=I.deref();P!==void 0&&(P.isRenderTarget===!0?B(P):k(P))}m.clear(),u.clear()}function G(I){let P=n.get(I);if(P.__webglInit===void 0)return;let Q=I.source,ge=d.get(Q);if(ge){let pe=ge[P.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&H(I),Object.keys(ge).length===0&&d.delete(Q)}n.remove(I)}function H(I){let P=n.get(I);s.deleteTexture(P.__webglTexture);let Q=I.source,ge=d.get(Q);delete ge[P.__cacheKey],o.memory.textures--}function _(I){let P=n.get(I);P.__depthDisposeCallback&&P.__depthDisposeCallback();let Q=I.depthTexture;if(Q&&Q.renderTarget===I&&k(Q),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(P.__webglFramebuffer[pe]))for(let we=0;we<P.__webglFramebuffer[pe].length;we++)s.deleteFramebuffer(P.__webglFramebuffer[pe][we]);else s.deleteFramebuffer(P.__webglFramebuffer[pe]);P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer[pe])}else{if(Array.isArray(P.__webglFramebuffer))for(let pe=0;pe<P.__webglFramebuffer.length;pe++)s.deleteFramebuffer(P.__webglFramebuffer[pe]);else s.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&s.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pe=0;pe<P.__webglColorRenderbuffer.length;pe++)P.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(P.__webglColorRenderbuffer[pe]);P.__webglDepthRenderbuffer&&s.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let ge=I.textures;for(let pe=0,we=ge.length;pe<we;pe++){let Ae=n.get(ge[pe]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(ge[pe])}n.remove(I)}let y=0;function L(){y=0}function A(){return y}function D(I){y=I}function q(){let I=y;return I>=i.maxTextures&&ut("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),y+=1,I}function W(I){let P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.mipmapsAutoUpdate),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function J(I,P){let Q=n.get(I);if(I.isVideoTexture&&Ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){let ge=I.image;if(ge===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(Q,I,P);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+P)}function me(I,P){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ke(Q,I,P);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+P)}function ie(I,P){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ke(Q,I,P);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+P)}function le(I,P){let Q=n.get(I);if(I.version>0&&Q.__version!==I.version){Ne(Q,I,P);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+P)}let Pe={[Ts]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[xo]:s.MIRRORED_REPEAT},Ge={[sn]:s.NEAREST,[zc]:s.NEAREST_MIPMAP_NEAREST,[Lr]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Do]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},he={[Xm]:s.NEVER,[Mf]:s.ALWAYS,[qm]:s.LESS,[yf]:s.LEQUAL,[Ym]:s.EQUAL,[_f]:s.GEQUAL,[Km]:s.GREATER,[Zm]:s.NOTEQUAL};function ke(I,P){if(P.type===Fn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===dn||P.magFilter===Do||P.magFilter===Lr||P.magFilter===ri||P.minFilter===dn||P.minFilter===Do||P.minFilter===Lr||P.minFilter===ri)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Pe[P.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Pe[P.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Pe[P.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Ge[P.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Ge[P.minFilter]),P.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,he[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===sn||P.minFilter!==Lr&&P.minFilter!==ri||P.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ae(I,P){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",N),U(P));let ge=P.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let we=W(P);if(we!==I.__cacheKey){pe[we]===void 0&&(pe[we]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),pe[we].usedTimes++;let Ae=pe[I.__cacheKey];Ae!==void 0&&(pe[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&H(P)),I.__cacheKey=we,I.__webglTexture=pe[we].texture}return Q}function j(I,P,Q){return Math.floor(Math.floor(I/Q)/P)}function Fe(I,P,Q,ge){let we=I.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,P.width,P.height,Q,ge,P.data);else{we.sort((V,ee)=>V.start-ee.start);let Ae=0;for(let V=1;V<we.length;V++){let ee=we[Ae],$=we[V],Ie=ee.start+ee.count,ve=j($.start,P.width,4),Ue=j(ee.start,P.width,4);$.start<=Ie+1&&ve===Ue&&j($.start+$.count-1,P.width,4)===ve?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++Ae,we[Ae]=$)}we.length=Ae+1;let xe=t.getParameter(s.UNPACK_ROW_LENGTH),fe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ee=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,P.width);for(let V=0,ee=we.length;V<ee;V++){let $=we[V],Ie=Math.floor($.start/4),ve=Math.ceil($.count/4),Ue=Ie%P.width,Ye=Math.floor(Ie/P.width),Ze=ve,ze=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(s.TEXTURE_2D,0,Ue,Ye,Ze,ze,Q,ge,P.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function Ke(I,P,Q){let ge=s.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=s.TEXTURE_3D);let pe=ae(I,P),we=P.source;t.bindTexture(ge,I.__webglTexture,s.TEXTURE0+Q);let Ae=n.get(we);if(we.version!==Ae.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap!="undefined"&&P.image instanceof ImageBitmap)===!1){let ze=Rt.getPrimaries(Rt.workingColorSpace),tt=P.colorSpace===fs?null:Rt.getPrimaries(P.colorSpace),vt=P.colorSpace===fs||ze===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}t.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment);let fe=S(P.image,!1,i.maxTextureSize);fe=Se(P,fe);let Ee=r.convert(P.format,P.colorSpace),V=r.convert(P.type),ee=E(P.internalFormat,Ee,V,P.normalized,P.colorSpace,P.isVideoTexture);ke(ge,P);let $,Ie=P.mipmaps,ve=P.isVideoTexture!==!0,Ue=Ae.__version===void 0||pe===!0,Ye=we.dataReady,Ze=w(P,fe);if(P.isDepthTexture)ee=x(P.format===us,P.type),Ue&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ee,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,ee,fe.width,fe.height,0,Ee,V,null));else if(P.isDataTexture)if(Ie.length>0){ve&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,Ie[0].width,Ie[0].height);for(let ze=0,tt=Ie.length;ze<tt;ze++)$=Ie[ze],ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ze,0,0,$.width,$.height,Ee,V,$.data):t.texImage2D(s.TEXTURE_2D,ze,ee,$.width,$.height,0,Ee,V,$.data);P.generateMipmaps=!1}else ve?(Ue&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,fe.width,fe.height),Ye&&Fe(P,fe,Ee,V)):t.texImage2D(s.TEXTURE_2D,0,ee,fe.width,fe.height,0,Ee,V,fe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ve&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,ee,Ie[0].width,Ie[0].height,fe.depth);for(let ze=0,tt=Ie.length;ze<tt;ze++)if($=Ie[ze],P.format!==Xn)if(Ee!==null)if(ve){if(Ye)if(P.layerUpdates.size>0){let vt=Pf($.width,$.height,P.format,P.type);for(let qe of P.layerUpdates){let Lt=$.data.subarray(qe*vt/$.data.BYTES_PER_ELEMENT,(qe+1)*vt/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ze,0,0,qe,$.width,$.height,1,Ee,Lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ze,0,0,0,$.width,$.height,fe.depth,Ee,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ze,ee,$.width,$.height,fe.depth,0,$.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ze,0,0,0,$.width,$.height,fe.depth,Ee,V,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ze,ee,$.width,$.height,fe.depth,0,Ee,V,$.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{ve&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,Ie[0].width,Ie[0].height);for(let ze=0,tt=Ie.length;ze<tt;ze++)$=Ie[ze],P.format!==Xn?Ee!==null?ve?Ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,ze,0,0,$.width,$.height,Ee,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ze,ee,$.width,$.height,0,$.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ze,0,0,$.width,$.height,Ee,V,$.data):t.texImage2D(s.TEXTURE_2D,ze,ee,$.width,$.height,0,Ee,V,$.data)}else if(P.isDataArrayTexture)if(ve){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,ee,fe.width,fe.height,fe.depth),Ye)if(P.layerUpdates.size>0){let ze=Pf(fe.width,fe.height,P.format,P.type);for(let tt of P.layerUpdates){let vt=fe.data.subarray(tt*ze/fe.data.BYTES_PER_ELEMENT,(tt+1)*ze/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,fe.width,fe.height,1,Ee,V,vt)}P.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,V,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ee,fe.width,fe.height,fe.depth,0,Ee,V,fe.data);else if(P.isData3DTexture)ve?(Ue&&t.texStorage3D(s.TEXTURE_3D,Ze,ee,fe.width,fe.height,fe.depth),Ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,V,fe.data)):t.texImage3D(s.TEXTURE_3D,0,ee,fe.width,fe.height,fe.depth,0,Ee,V,fe.data);else if(P.isFramebufferTexture){if(Ue)if(ve)t.texStorage2D(s.TEXTURE_2D,Ze,ee,fe.width,fe.height);else{let ze=fe.width,tt=fe.height;for(let vt=0;vt<Ze;vt++)t.texImage2D(s.TEXTURE_2D,vt,ee,ze,tt,0,Ee,V,null),ze>>=1,tt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in s){let ze=s.canvas;if(ze.hasAttribute("layoutsubtree")||ze.setAttribute("layoutsubtree","true"),fe.parentNode!==ze){ze.appendChild(fe),u.add(P),ze.onpaint=tt=>{let vt=tt.changedElements;for(let qe of u)vt.includes(qe.image)&&(qe.needsUpdate=!0)},ze.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,fe);else{let vt=s.RGBA,qe=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,qe,Lt,fe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ve&&Ue){let ze=Le(Ie[0]);t.texStorage2D(s.TEXTURE_2D,Ze,ee,ze.width,ze.height)}for(let ze=0,tt=Ie.length;ze<tt;ze++)$=Ie[ze],ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ze,0,0,Ee,V,$):t.texImage2D(s.TEXTURE_2D,ze,ee,Ee,V,$);P.generateMipmaps=!1}else if(ve){if(Ue){let ze=Le(fe);t.texStorage2D(s.TEXTURE_2D,Ze,ee,ze.width,ze.height)}Ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,V,fe)}else t.texImage2D(s.TEXTURE_2D,0,ee,Ee,V,fe);b(P)&&P.mipmapsAutoUpdate===!0&&v(ge),Ae.__version=we.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Ne(I,P,Q){if(P.image.length!==6)return;let ge=ae(I,P),pe=P.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);let we=n.get(pe);if(pe.version!==we.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);let Ae=Rt.getPrimaries(Rt.workingColorSpace),xe=P.colorSpace===fs?null:Rt.getPrimaries(P.colorSpace),fe=P.colorSpace===fs||Ae===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ee=P.isCompressedTexture||P.image[0].isCompressedTexture,V=P.image[0]&&P.image[0].isDataTexture,ee=[];for(let qe=0;qe<6;qe++)!Ee&&!V?ee[qe]=S(P.image[qe],!0,i.maxCubemapSize):ee[qe]=V?P.image[qe].image:P.image[qe],ee[qe]=Se(P,ee[qe]);let $=ee[0],Ie=r.convert(P.format,P.colorSpace),ve=r.convert(P.type),Ue=E(P.internalFormat,Ie,ve,P.normalized,P.colorSpace),Ye=P.isVideoTexture!==!0,Ze=we.__version===void 0||ge===!0,ze=pe.dataReady,tt=w(P,$);ke(s.TEXTURE_CUBE_MAP,P);let vt;if(P.isDepthTexture){if(Ue=x(P.format===us,P.type),Ze)if(Ye)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ue,$.width,$.height);else for(let qe=0;qe<6;qe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ue,$.width,$.height,0,Ie,ve,null)}else if(Ee){Ye&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Ue,$.width,$.height);for(let qe=0;qe<6;qe++){vt=ee[qe].mipmaps;for(let Lt=0;Lt<vt.length;Lt++){let tn=vt[Lt];P.format!==Xn?Ie!==null?Ye?ze&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt,0,0,tn.width,tn.height,Ie,tn.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt,Ue,tn.width,tn.height,0,tn.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt,0,0,tn.width,tn.height,Ie,ve,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt,Ue,tn.width,tn.height,0,Ie,ve,tn.data)}}}else{if(vt=P.mipmaps,Ye&&Ze){vt.length>0&&tt++;let qe=Le(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Ue,qe.width,qe.height)}for(let qe=0;qe<6;qe++)if(V){Ye?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,ee[qe].width,ee[qe].height,Ie,ve,ee[qe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ue,ee[qe].width,ee[qe].height,0,Ie,ve,ee[qe].data);for(let Lt=0;Lt<vt.length;Lt++){let Ei=vt[Lt].image[qe].image;Ye?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt+1,0,0,Ei.width,Ei.height,Ie,ve,Ei.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt+1,Ue,Ei.width,Ei.height,0,Ie,ve,Ei.data)}}else{Ye?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,Ie,ve,ee[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ue,Ie,ve,ee[qe]);for(let Lt=0;Lt<vt.length;Lt++){let tn=vt[Lt];Ye?ze&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt+1,0,0,Ie,ve,tn.image[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Lt+1,Ue,Ie,ve,tn.image[qe])}}}b(P)&&P.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),we.__version=pe.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Ve(I,P,Q,ge,pe,we){let Ae=r.convert(Q.format,Q.colorSpace),xe=r.convert(Q.type),fe=E(Q.internalFormat,Ae,xe,Q.normalized,Q.colorSpace),Ee=n.get(P),V=n.get(Q);if(V.__renderTarget=P,!Ee.__hasExternalTextures){let ee=Math.max(1,P.width>>we),$=Math.max(1,P.height>>we);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,we,fe,ee,$,P.depth,0,Ae,xe,null):t.texImage2D(pe,we,fe,ee,$,0,Ae,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,V.__webglTexture,0,se(P)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,V.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(I,P,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),P.depthBuffer){let ge=P.depthTexture,pe=ge&&ge.isDepthTexture?ge.type:null,we=x(P.stencilBuffer,pe),Ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;re(P)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se(P),we,P.width,P.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,se(P),we,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,we,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,I)}else{let ge=P.textures;for(let pe=0;pe<ge.length;pe++){let we=ge[pe],Ae=r.convert(we.format,we.colorSpace),xe=r.convert(we.type),fe=E(we.internalFormat,Ae,xe,we.normalized,we.colorSpace);re(P)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se(P),fe,P.width,P.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,se(P),fe,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,fe,P.width,P.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(I,P,Q){let ge=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=n.get(P.depthTexture);pe.__renderTarget=P;let we=ge?P.depthTexture.image[0]:P.depthTexture.image;(!pe.__webglTexture||we.width!==P.width||we.height!==P.height)&&(we.width=P.width,we.height=P.height,P.depthTexture.needsUpdate=!0),ge?le(P.depthTexture,0):J(P.depthTexture,0);let Ae=pe.__webglTexture,xe=se(P),fe=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,Ee=P.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(P.depthTexture.format===ns)re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,fe,Ae,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,fe,Ae,0);else if(P.depthTexture.format===us)re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,fe,Ae,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,fe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(I){let P=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){let ge=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ge){let pe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ge.removeEventListener("dispose",pe)};ge.addEventListener("dispose",pe),P.__depthDisposeCallback=pe}P.__boundDepthTexture=ge}if(I.depthTexture&&!P.__autoAllocateDepthBuffer)if(Q)for(let ge=0;ge<6;ge++)Mt(P.__webglFramebuffer[ge],I,ge);else I.texture.mipmaps.length>0?Mt(P.__webglFramebuffer[0],I,0):Mt(P.__webglFramebuffer,I,0);else if(Q){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]===void 0)P.__webglDepthbuffer[ge]=s.createRenderbuffer(),mt(P.__webglDepthbuffer[ge],I,!1);else{let pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,we)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=s.createRenderbuffer(),mt(P.__webglDepthbuffer,I,!1);else{let pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,we)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(I,P,Q){let ge=n.get(I);P!==void 0&&Ve(ge.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&be(I)}function Re(I){let P=I.texture,Q=n.get(I),ge=n.get(P);I.addEventListener("dispose",z),U(I);let pe=I.textures,we=I.isWebGLCubeRenderTarget===!0,Ae=pe.length>1;if(Ae||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=P.version,o.memory.textures++),we){Q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(P.mipmaps.length>0){Q.__webglFramebuffer[xe]=[];for(let fe=0;fe<P.mipmaps.length;fe++)Q.__webglFramebuffer[xe][fe]=s.createFramebuffer()}else Q.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(P.mipmaps.length>0){Q.__webglFramebuffer=[];for(let xe=0;xe<P.mipmaps.length;xe++)Q.__webglFramebuffer[xe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let xe=0,fe=pe.length;xe<fe;xe++){let Ee=n.get(pe[xe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&re(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){let fe=pe[xe];Q.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]);let Ee=r.convert(fe.format,fe.colorSpace),V=r.convert(fe.type),ee=E(fe.internalFormat,Ee,V,fe.normalized,fe.colorSpace,I.isXRRenderTarget===!0),$=se(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ee,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),ke(s.TEXTURE_CUBE_MAP,P);for(let xe=0;xe<6;xe++)if(P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ve(Q.__webglFramebuffer[xe][fe],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,fe);else Ve(Q.__webglFramebuffer[xe],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);b(P)?v(s.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let xe=0,fe=pe.length;xe<fe;xe++){let Ee=pe[xe],V=n.get(Ee),ee=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),ke(ee,Ee),Ve(Q.__webglFramebuffer,I,Ee,s.COLOR_ATTACHMENT0+xe,ee,0),b(Ee)&&v(ee)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ge.__webglTexture),ke(xe,P),P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ve(Q.__webglFramebuffer[fe],I,P,s.COLOR_ATTACHMENT0,xe,fe);else Ve(Q.__webglFramebuffer,I,P,s.COLOR_ATTACHMENT0,xe,0);b(P)?v(xe):P.mipmaps.length>0&&s.texParameteri(xe,s.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&be(I)}function O(I){let P=I.textures;for(let Q=0,ge=P.length;Q<ge;Q++){let pe=P[Q];if(b(pe)&&pe.mipmapsAutoUpdate===!0){let we=C(I),Ae=n.get(pe).__webglTexture;t.bindTexture(we,Ae),v(we),t.unbindTexture()}}}let oe=[];function X(I){if(I.samples>0){if(re(I)===!1){let P=I.textures,Q=I.width,ge=I.height,pe=s.COLOR_BUFFER_BIT,we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(I),xe=P.length>1;if(xe)for(let Ee=0;Ee<P.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<P.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let V=n.get(P[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,pe,s.NEAREST),c===!0&&(oe.length=0,oe.push(s.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&oe.push(we),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ee=0;Ee<P.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let V=n.get(P[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let P=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[P])}}}function se(I){return Math.min(i.maxSamples,I.samples)}function re(I){let P=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ce(I){let P=o.render.frame;h.get(I)!==P&&(h.set(I,P),I.update())}function Se(I,P){let Q=I.colorSpace,ge=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==On&&Q!==fs&&(Rt.getTransfer(Q)===Ht?(ge!==Xn||pe!==Kn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",Q)),P}function Le(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=me,this.setTexture3D=ie,this.setTextureCube=le,this.rebindTextures=ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=re,this.dispose=Y}function aS(s,e){function t(n,i=fs){let r,o=Rt.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===Oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ff)return s.BYTE;if(n===df)return s.SHORT;if(n===No)return s.UNSIGNED_SHORT;if(n===Fc)return s.INT;if(n===oi)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===Si)return s.HALF_FLOAT;if(n===gf)return s.ALPHA;if(n===xf)return s.RGB;if(n===Xn)return s.RGBA;if(n===ns)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===kc)return s.RED;if(n===Fa)return s.RED_INTEGER;if(n===Ps)return s.RG;if(n===Bc)return s.RG_INTEGER;if(n===Hc)return s.RGBA_INTEGER;if(n===Oa||n===Ua||n===ka||n===Ba)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Yc||n===Kc||n===Zc||n===Jc||n===Ha||n===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Yc)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zc)return r.COMPRESSED_R11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===$c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ah)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fh||n===dh||n===ph)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fh)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===Ga||n===xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`,Xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qf=class extends gi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,M=typeof XRWebGLBinding!="undefined",p=new Xf,g={},S=t.getContextAttributes(),b=null,v=null,C=[],E=[],x=new pt,w=null,U=null,R=new nn;R.viewport=new Wt;let N=new nn;N.viewport=new Wt;let z=[R,N],k=new Rc,B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=C[W];return J===void 0&&(J=new So,C[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=C[W];return J===void 0&&(J=new So,C[W]=J),J.getGripSpace()},this.getHand=function(W){let J=C[W];return J===void 0&&(J=new So,C[W]=J),J.getHandSpace()};function G(W){let J=E.indexOf(W.inputSource);if(J===-1)return;let me=C[J];me!==void 0&&(me.update(W.inputSource,W.frame,l||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",_);for(let W=0;W<C.length;W++){let J=E[W];J!==null&&(E[W]=null,C[W].disconnect(J))}B=null,Y=null,p.reset();for(let W in g)delete g[W];if(e.setRenderTarget(b),d=null,f=null,u=null,i=null,v=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),U!==null){let W=U.camera;W.fov=U.fov,W.zoom=U.zoom,W.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",H),i.addEventListener("inputsourceschange",_),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ie=null,le=null;S.depth&&(le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=S.stencil?us:ns,ie=S.stencil?Dr:oi);let Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new jn(f.textureWidth,f.textureHeight,{format:Xn,type:Kn,depthTexture:new ss(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new jn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function _(W){for(let J=0;J<W.removed.length;J++){let me=W.removed[J],ie=E.indexOf(me);ie>=0&&(E[ie]=null,C[ie].disconnect(me))}for(let J=0;J<W.added.length;J++){let me=W.added[J],ie=E.indexOf(me);if(ie===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=E.length){E.push(me),ie=Pe;break}else if(E[Pe]===null){E[Pe]=me,ie=Pe;break}if(ie===-1)break}let le=C[ie];le&&le.connect(me)}}function y(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let J=W.near,me=W.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(me=p.depthFar)),k.near=N.near=R.near=J,k.far=N.far=R.far=me,(B!==k.near||Y!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,Y=k.far),k.layers.mask=W.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let ie=W.parent,le=k.cameras;y(k,ie);for(let Pe=0;Pe<le.length;Pe++)y(le[Pe],ie);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&W.isPerspectiveCamera&&(U={camera:W,fov:W.fov,zoom:W.zoom}),L(W,k,ie)};function L(W,J,me){me===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(W){return g[W]};let A=null;function D(W,J){if(h=J.getViewerPose(l||o),m=J,h!==null){let me=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ie=!1;me.length!==k.cameras.length&&(k.cameras.length=0,ie=!0);for(let he=0;he<me.length;he++){let ke=me[he],ae=null;if(d!==null)ae=d.getViewport(ke);else{let Fe=u.getViewSubImage(f,ke);ae=Fe.viewport,he===0&&(e.setRenderTargetTextures(v,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(v))}let j=z[he];j===void 0&&(j=new nn,j.layers.enable(he),j.viewport=new Wt,z[he]=j),j.matrix.fromArray(ke.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ke.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ae.x,ae.y,ae.width,ae.height),he===0&&(k.matrix.copy(j.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ie===!0&&k.cameras.push(j)}let le=i.enabledFeatures;if(le&&le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let he=u.getDepthInformation(me[0]);he&&he.isValid&&he.texture&&p.init(he,i.renderState)}if(le&&le.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let he=0;he<me.length;he++){let ke=me[he].camera;if(ke){let ae=g[ke];ae||(ae=new Ta,g[ke]=ae);let j=u.getCameraImage(ke);ae.sourceTexture=j}}}}for(let me=0;me<C.length;me++){let ie=E[me],le=C[me];ie!==null&&le!==void 0&&le.update(ie,J,l||o)}A&&A(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let q=new E0;q.setAnimationLoop(D),this.setAnimationLoop=function(W){A=W},this.dispose=function(){}}},hS=new ht,F0=new St;F0.set(-1,0,0,0,1,0,0,0,1);function uS(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Rf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,S,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),M(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,S,b):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let S=e.get(g),b=S.envMap,v=S.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(F0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,S,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,S){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function M(p,g){let S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fS(s,e,t,n){let i={},r={};function o(S,b){let v=b.program;n.uniformBlockBinding(S,v,i[S.id])}function a(S,b){let v=i[S.id];v===void 0&&(m(S),v=c(S),i[S.id]=v,S.addEventListener("dispose",p));let C=b.program;n.updateUBOMapping(S,C);let E=e.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){let b=s.createBuffer(),v=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,C),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function l(S){let b=i[S.id],v=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,x=v.length;E<x;E++){let w=v[E];if(Array.isArray(w))for(let U=0,R=w.length;U<R;U++)h(w[U],E,U,C);else h(w,E,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,b,v,C){if(f(S,b,v,C)===!0){let E=S.__offset,x=S.value;if(Array.isArray(x)){let w=0;for(let U=0;U<x.length;U++){let R=x[U],N=M(R,!0);u(R,S.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,S.__data)}}function u(S,b,v){typeof S=="number"||typeof S=="boolean"?b[v]=S:S.isMatrix3?(b[v]=S.elements[0],b[v+1]=S.elements[1],b[v+2]=S.elements[2],b[v+3]=0,b[v+4]=S.elements[3],b[v+5]=S.elements[4],b[v+6]=S.elements[5],b[v+7]=0,b[v+8]=S.elements[6],b[v+9]=S.elements[7],b[v+10]=S.elements[8],b[v+11]=0):ArrayBuffer.isView(S)?b.set(S.subarray(0,b.length-v),v):S.toArray(b,v)}function f(S,b,v,C){let E=S.value,x=b+"_"+v;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let w=C[x],U=!1;for(let R=0;R<E.length;R++)d(E[R],w,R)===!0&&(U=!0);return U}return d(E,C,x)}function d(S,b,v){if(b[v]===void 0)return typeof S=="number"||typeof S=="boolean"?b[v]=S:ArrayBuffer.isView(S)?b[v]=S.slice():b[v]=S.clone(),!0;{let C=b[v];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return b[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function m(S){let b=S.uniforms,v=0,C=16;for(let x=0,w=b.length;x<w;x++){let U=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,N=U.length;R<N;R++){let z=U[R],k=Array.isArray(z.value)?z.value:[z.value],B=Array.isArray(b[x])||Array.isArray(z.value),Y=v;for(let H=0,_=k.length;H<_;H++){let y=k[H],L=M(y,B),A=v%C,D=A%L.boundary,q=A+D;v+=D,q!==0&&C-q<L.storage&&(v+=C-q),H===0&&(Y=v),v+=L.storage}let G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((v-Y)/Float32Array.BYTES_PER_ELEMENT),z.__offset=Y}}let E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function M(S,b){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",S),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(S){let b=S.target;b.removeEventListener("dispose",p),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var dS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function pS(){return Ui===null&&(Ui=new ts(dS,16,16,Ps,Si),Ui.name="DFG_LUT",Ui.minFilter=dn,Ui.magFilter=dn,Ui.wrapS=Wn,Ui.wrapT=Wn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Oo=class{constructor(e={}){let{canvas:t=Jm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let M=d,p=new Set([Hc,Bc,Fa]),g=new Set([Kn,oi,No,Dr,Oc,Uc]),S=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],w=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,z=null,k=null,B=null,Y=null;this._outputColorSpace=Bt;let G=0,H=0,_=null,y=-1,L=null,A=new Wt,D=new Wt,q=null,W=new He(0),J=0,me=t.width,ie=t.height,le=1,Pe=null,Ge=null,he=new Wt(0,0,me,ie),ke=new Wt(0,0,me,ie),ae=!1,j=new xi,Fe=new _a,Ke=!1,Ne=!1,Ve=new ht,mt=new Z,Mt=new Wt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Re(){return _===null?le:1}let O=n;function oe(F,ne){return t.getContext(F,ne)}let X,se,re,Ce,Se,Le,I,P,Q,ge,pe,we,Ae,xe,fe,Ee,V,ee,$,Ie,ve,Ue,Ye;try{let F={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",qe,!1),O===null){let ne="webgl2";if(O=oe(ne,F),O===null)throw oe(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(F){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),bt("WebGLRenderer: "+F.message),F}function Ze(){X=new TM(O),X.init(),ve=new aS(O,X),se=new pM(O,X,e,ve),re=new rS(O,X),se.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),k=O.createFramebuffer(),B=O.createFramebuffer(),Y=O.createFramebuffer(),Ce=new RM(O),Se=new Xb,Le=new oS(O,X,re,Se,se,ve,Ce),I=new wM(R),P=new Iv(O),Ue=new fM(O,P),Q=new EM(O,P,Ce,Ue),ge=new IM(O,Q,P,Ue,Ce),ee=new CM(O,se,Le),fe=new mM(Se),pe=new Wb(R,I,X,se,Ue,fe),we=new uS(R,Se),Ae=new Yb,xe=new Qb(X),V=new uM(R,I,re,ge,m,c),Ee=new sS(R,ge,se),Ye=new fS(O,Ce,se,re),$=new dM(O,X,Ce),Ie=new AM(O,X,Ce),Ce.programs=pe.programs,R.capabilities=se,R.extensions=X,R.properties=Se,R.renderLists=Ae,R.shadowMap=Ee,R.state=re,R.info=Ce}M!==Kn&&(U=new LM(M,t.width,t.height,a,i,r));let ze=new qf(R,O);this.xr=ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let F=X.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=X.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(F){F!==void 0&&(le=F,this.setSize(me,ie,!1))},this.getSize=function(F){return F.set(me,ie)},this.setSize=function(F,ne,_e=!0){if(ze.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}me=F,ie=ne,t.width=Math.floor(F*le),t.height=Math.floor(ne*le),_e===!0&&(t.style.width=F+"px",t.style.height=ne+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,F,ne)},this.getDrawingBufferSize=function(F){return F.set(me*le,ie*le).floor()},this.setDrawingBufferSize=function(F,ne,_e){me=F,ie=ne,le=_e,t.width=Math.floor(F*_e),t.height=Math.floor(ne*_e),this.setViewport(0,0,F,ne)},this.setEffects=function(F){if(M===Kn){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let ne=0;ne<F.length;ne++)if(F[ne].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(A)},this.getViewport=function(F){return F.copy(he)},this.setViewport=function(F,ne,_e,ue){F.isVector4?he.set(F.x,F.y,F.z,F.w):he.set(F,ne,_e,ue),re.viewport(A.copy(he).multiplyScalar(Re()).round())},this.getScissor=function(F){return F.copy(ke)},this.setScissor=function(F,ne,_e,ue){F.isVector4?ke.set(F.x,F.y,F.z,F.w):ke.set(F,ne,_e,ue),re.scissor(D.copy(ke).multiplyScalar(Re()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(F){re.setScissorTest(ae=F)},this.setOpaqueSort=function(F){Pe=F},this.setTransparentSort=function(F){Ge=F},this.getClearColor=function(F){return F.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(F=!0,ne=!0,_e=!0){let ue=0;if(F){let de=!1;if(_!==null){let Be=_.texture.format;de=p.has(Be)}if(de){let Be=_.texture.type,et=g.has(Be),Xe=V.getClearColor(),Je=V.getClearAlpha(),nt=Xe.r,_t=Xe.g,Ct=Xe.b;et?(S[0]=nt,S[1]=_t,S[2]=Ct,S[3]=Je,O.clearBufferuiv(O.COLOR,0,S)):(b[0]=nt,b[1]=_t,b[2]=Ct,b[3]=Je,O.clearBufferiv(O.COLOR,0,b))}else ue|=O.COLOR_BUFFER_BIT}ne&&(ue|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(ue|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&O.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),z=F},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),V.dispose(),Ae.dispose(),xe.dispose(),Le.dispose(),Se.dispose(),I.dispose(),ge.dispose(),Q.dispose(),Ue.dispose(),Ye.dispose(),pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Ws),ze.removeEventListener("sessionend",Xs),Vi.stop()};function tt(F){F.preventDefault(),pa("WebGLRenderer: Context Lost."),N=!0}function vt(){pa("WebGLRenderer: Context Restored."),N=!1;let F=Ce.autoReset,ne=Ee.enabled,_e=Ee.autoUpdate,ue=Ee.needsUpdate,de=Ee.type;Ze(),Ce.autoReset=F,Ee.enabled=ne,Ee.autoUpdate=_e,Ee.needsUpdate=ue,Ee.type=de}function qe(F){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Lt(F){let ne=F.target;ne.removeEventListener("dispose",Lt),tn(ne)}function tn(F){Ei(F),Se.remove(F)}function Ei(F){let ne=Se.get(F).programs;ne!==void 0&&(ne.forEach(function(_e){pe.releaseProgram(_e)}),F.isShaderMaterial&&pe.releaseShaderCache(F))}this.renderBufferDirect=function(F,ne,_e,ue,de,Be){ne===null&&(ne=be);let et=de.isMesh&&de.matrixWorld.determinantAffine()<0,Xe=Xr(F,ne,_e,ue,de);re.setMaterial(ue,et);let Je=_e.index,nt=1;if(ue.wireframe===!0){if(Je=Q.getWireframeAttribute(_e),Je===void 0)return;nt=2}let _t=_e.drawRange,Ct=_e.attributes.position,rt=_t.start*nt,It=(_t.start+_t.count)*nt;Be!==null&&(rt=Math.max(rt,Be.start*nt),It=Math.min(It,(Be.start+Be.count)*nt)),Je!==null?(rt=Math.max(rt,0),It=Math.min(It,Je.count)):Ct!=null&&(rt=Math.max(rt,0),It=Math.min(It,Ct.count));let Qt=It-rt;if(Qt<0||Qt===1/0)return;Ue.setup(de,ue,Xe,_e,Je);let Gt,Ut=$;if(Je!==null&&(Gt=P.get(Je),Ut=Ie,Ut.setIndex(Gt)),de.isMesh)ue.wireframe===!0?(re.setLineWidth(ue.wireframeLinewidth*Re()),Ut.setMode(O.LINES)):Ut.setMode(O.TRIANGLES);else if(de.isLine){let ln=ue.linewidth;ln===void 0&&(ln=1),re.setLineWidth(ln*Re()),de.isLineSegments?Ut.setMode(O.LINES):de.isLineLoop?Ut.setMode(O.LINE_LOOP):Ut.setMode(O.LINE_STRIP)}else de.isPoints?Ut.setMode(O.POINTS):de.isSprite&&Ut.setMode(O.TRIANGLES);if(de.isBatchedMesh)if(X.get("WEBGL_multi_draw"))Ut.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{let ln=de._multiDrawStarts,ot=de._multiDrawCounts,yn=de._multiDrawCount,Ot=Je?P.get(Je).bytesPerElement:1,Xi=Se.get(ue).currentProgram.getUniforms();for(let kt=0;kt<yn;kt++)Xi.setValue(O,"_gl_DrawID",kt),Ut.render(ln[kt]/Ot,ot[kt])}else if(de.isInstancedMesh)Ut.renderInstances(rt,Qt,de.count);else if(_e.isInstancedBufferGeometry){let ln=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,ot=Math.min(_e.instanceCount,ln);Ut.renderInstances(rt,Qt,ot)}else Ut.render(rt,Qt)};function Vs(F,ne,_e,ue){z!==null&&F.isNodeMaterial&&z.setObject(ue,F),Ke===!0&&fe.setState(F,_e,!1),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,gs(F,ne,ue),F.side=zi,F.needsUpdate=!0,gs(F,ne,ue),F.side=on):gs(F,ne,ue)}this.compile=function(F,ne,_e=null){_e===null&&(_e=F),z!==null&&z.renderStart(F,ne,_e),E=xe.get(_e),E.init(ne),w.push(E),_e.traverseVisible(function(de){de.isLight&&de.layers.test(ne.layers)&&(E.pushLight(de),de.castShadow&&E.pushShadow(de))}),F!==_e&&F.traverseVisible(function(de){de.isLight&&de.layers.test(ne.layers)&&(E.pushLight(de),de.castShadow&&E.pushShadow(de))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Ne=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,Ne),Ke===!0&&fe.setGlobalState(this.clippingPlanes,ne),z!==null&&Ee.render(E.state.shadowsArray,_e,ne);let ue=new Set;return F.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;let Be=de.material;if(Be)if(Array.isArray(Be))for(let et=0;et<Be.length;et++){let Xe=Be[et];Vs(Xe,_e,ne,de),ue.add(Xe)}else Vs(Be,_e,ne,de),ue.add(Be)}),E=w.pop(),z!==null&&z.renderEnd(),ue},this.compileAsync=function(F,ne,_e=null){let ue=this.compile(F,ne,_e);return new Promise(de=>{function Be(){if(ue.forEach(function(et){let Je=Se.get(et).currentProgram;(Je===void 0||Je.isReady())&&ue.delete(et)}),ue.size===0){de(F);return}setTimeout(Be,10)}X.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ps=null;function Vr(F){ps&&ps(F)}function Ws(){Vi.stop()}function Xs(){Vi.start()}let Vi=new E0;Vi.setAnimationLoop(Vr),typeof self!="undefined"&&Vi.setContext(self),this.setAnimationLoop=function(F){ps=F,ze.setAnimationLoop(F),F===null?Vi.stop():Vi.start()},ze.addEventListener("sessionstart",Ws),ze.addEventListener("sessionend",Xs),this.render=function(F,ne){if(ne!==void 0&&ne.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(F,ne);let _e=ze.enabled===!0&&ze.isPresenting===!0,ue=U!==null&&(_===null||_e)&&U.begin(R,_);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(ne),ne=ze.getCamera()),F.isScene===!0&&F.onBeforeRender(R,F,ne,_),E=xe.get(F,w.length),E.init(ne),E.state.textureUnits=Le.getTextureUnits(),w.push(E),Ve.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ne.isArrayCamera?Fe.setFromArrayCamera(ne):j.setFromProjectionMatrix(Ve,ni,ne.reversedDepth),Ne=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,Ne),C=Ae.get(F,x.length),C.init(),x.push(C),this.info.render.frame++,ze.enabled===!0&&ze.isPresenting===!0){let et=R.xr.getDepthSensingMesh();et!==null&&qs(et,ne,-1/0,R.sortObjects)}qs(F,ne,0,R.sortObjects),C.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&C.sort(Pe,Ge),ce=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,ce&&V.addToRenderList(C,F),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&fe.beginShadows();let de=E.state.shadowsArray;if(Ee.render(de,F,ne),Ke===!0&&fe.endShadows(),(ue&&U.hasRenderPass())===!1){let et=C.opaque,Xe=C.transmissive;if(E.setupLights(),ne.isArrayCamera){let Je=ne.cameras;if(Xe.length>0)for(let nt=0,_t=Je.length;nt<_t;nt++){let Ct=Je[nt];ms(et,Xe,F,Ct)}ce&&V.render(F);for(let nt=0,_t=Je.length;nt<_t;nt++){let Ct=Je[nt];pl(C,F,Ct,Ct.viewport)}}else Xe.length>0&&ms(et,Xe,F,ne),ce&&V.render(F),pl(C,F,ne)}_!==null&&H===0&&(Le.updateMultisampleRenderTarget(_),Le.updateRenderTargetMipmap(_)),ue&&U.end(R),F.isScene===!0&&F.onAfterRender(R,F,ne),Ue.resetDefaultState(),y=-1,L=null,w.pop(),w.length>0?(E=w[w.length-1],Le.setTextureUnits(E.state.textureUnits),Ke===!0&&fe.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,z!==null&&z.renderEnd()};function qs(F,ne,_e,ue){if(F.visible===!1)return;if(F.layers.test(ne.layers)){if(F.isGroup)_e=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ne);else if(F.isLight)E.pushLight(F),F.castShadow&&E.pushShadow(F);else if(F.isSprite){let et=ne.isArrayCamera?Fe:j;if(!F.frustumCulled||F.intersectsFrustum(et)){ue&&Mt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ve);let Xe=ge.update(F),Je=F.material;Je.visible&&C.push(F,Xe,Je,_e,Mt.z,null,ne)}}else if(F.isMesh||F.isLine||F.isPoints){let et=ne.isArrayCamera?Fe:j;if(!F.frustumCulled||F.intersectsFrustum(et)){let Xe=ge.update(F),Je=F.material;if(ue&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Mt.copy(F.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Mt.copy(Xe.boundingSphere.center)),Mt.applyMatrix4(F.matrixWorld).applyMatrix4(Ve)),Array.isArray(Je)){let nt=Xe.groups;for(let _t=0,Ct=nt.length;_t<Ct;_t++){let rt=nt[_t],It=Je[rt.materialIndex];It&&It.visible&&C.push(F,Xe,It,_e,Mt.z,rt,ne)}}else Je.visible&&C.push(F,Xe,Je,_e,Mt.z,null,ne)}}}let Be=F.children;for(let et=0,Xe=Be.length;et<Xe;et++)qs(Be[et],ne,_e,ue)}function pl(F,ne,_e,ue){let{opaque:de,transmissive:Be,transparent:et}=F;E.setupLightsView(_e),Ke===!0&&fe.setGlobalState(R.clippingPlanes,_e),ue&&re.viewport(A.copy(ue)),de.length>0&&Ys(de,ne,_e),Be.length>0&&Ys(Be,ne,_e),et.length>0&&Ys(et,ne,_e),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function ms(F,ne,_e,ue){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ue.id]===void 0){let rt=X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ue.id]=new jn(1,1,{generateMipmaps:!0,type:rt?Si:Kn,minFilter:ri,samples:Math.max(4,se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Be=E.state.transmissionRenderTarget[ue.id],et=ue.viewport||A;Be.setSize(et.z*R.transmissionResolutionScale,et.w*R.transmissionResolutionScale);let Xe=R.getRenderTarget(),Je=R.getActiveCubeFace(),nt=R.getActiveMipmapLevel();R.setRenderTarget(Be),R.getClearColor(W),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),ce&&V.render(_e);let _t=R.toneMapping;R.toneMapping=Fi;let Ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),E.setupLightsView(ue),Ke===!0&&fe.setGlobalState(R.clippingPlanes,ue),Ys(F,_e,ue),Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be),X.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let It=0,Qt=ne.length;It<Qt;It++){let Gt=ne[It],{object:Ut,geometry:ln,material:ot,group:yn}=Gt;if(ot.side===on&&Ut.layers.test(ue.layers)){let Ot=ot.side;ot.side=gn,ot.needsUpdate=!0,Ai(Ut,_e,ue,ln,ot,yn),ot.side=Ot,ot.needsUpdate=!0,rt=!0}}rt===!0&&(Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be))}R.setRenderTarget(Xe,Je,nt),R.setClearColor(W,J),Ct!==void 0&&(ue.viewport=Ct),R.toneMapping=_t}function Ys(F,ne,_e){let ue=ne.isScene===!0?ne.overrideMaterial:null;for(let de=0,Be=F.length;de<Be;de++){let et=F[de],{object:Xe,geometry:Je,group:nt}=et,_t=et.material;_t.allowOverride===!0&&ue!==null&&(_t=ue),Xe.layers.test(_e.layers)&&Ai(Xe,ne,_e,Je,_t,nt)}}function Ai(F,ne,_e,ue,de,Be){z!==null&&de.isNodeMaterial&&z.setObject(F,de),F.onBeforeRender(R,ne,_e,ue,de,Be),F.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),de.onBeforeRender(R,ne,_e,ue,F,Be),de.transparent===!0&&de.side===on&&de.forceSinglePass===!1?(de.side=gn,de.needsUpdate=!0,R.renderBufferDirect(_e,ne,ue,de,F,Be),de.side=zi,de.needsUpdate=!0,R.renderBufferDirect(_e,ne,ue,de,F,Be),de.side=on):R.renderBufferDirect(_e,ne,ue,de,F,Be),F.onAfterRender(R,ne,_e,ue,de,Be)}function ml(F){let ne=0;for(let _e of F)_e.texture!==null&&ne++;return ne}function gs(F,ne,_e){ne.isScene!==!0&&(ne=be);let ue=Se.get(F),de=E.state.lights,Be=E.state.shadowsArray,et=de.state.version,Xe=pe.getParameters(F,de.state,Be,ne,_e,E.state.lightProbeGridArray),Je=pe.getProgramCacheKey(Xe),nt=ue.programs;ue.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?ne.environment:null,ue.fog=ne.fog;let _t=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;ue.envMap=I.get(F.envMap||ue.environment,_t),ue.envMapRotation=ue.environment!==null&&F.envMap===null?ne.environmentRotation:F.envMapRotation,nt===void 0&&(F.addEventListener("dispose",Lt),nt=new Map,ue.programs=nt,ue.programVariants=new Map);let Ct=nt.get(Je);if(Ct!==void 0){if(ue.currentProgram===Ct&&ue.lightsStateVersion===et)return gl(F,Xe),Ct}else Xe.uniforms=pe.getUniforms(F),z!==null&&F.isNodeMaterial&&z.build(F,_e,Xe),F.onBeforeCompile(Xe,R),Ct=pe.acquireProgram(Xe,Je),nt.set(Je,Ct),ue.uniforms=Xe.uniforms;let rt=ue.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(rt.clippingPlanes=fe.uniform),gl(F,Xe),ue.needsLights=Wi(F),ue.lightsStateVersion=et,ue.needsLights&&(rt.ambientLightColor.value=de.state.ambient,rt.lightProbe.value=de.state.probe,rt.sunLights.value=de.state.sun,rt.sunLightShadows.value=de.state.sunShadow,rt.directionalLights.value=de.state.directional,rt.directionalLightShadows.value=de.state.directionalShadow,rt.spotLights.value=de.state.spot,rt.spotLightShadows.value=de.state.spotShadow,rt.rectAreaLights.value=de.state.rectArea,rt.ltc_1.value=de.state.rectAreaLTC1,rt.ltc_2.value=de.state.rectAreaLTC2,rt.pointLights.value=de.state.point,rt.pointLightShadows.value=de.state.pointShadow,rt.hemisphereLights.value=de.state.hemi,rt.sunShadowMatrix.value=de.state.sunShadowMatrix,rt.sunShadowCascade.value=de.state.sunShadowCascade,rt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,rt.spotLightMatrix.value=de.state.spotLightMatrix,rt.spotLightMap.value=de.state.spotLightMap,rt.pointShadowMatrix.value=de.state.pointShadowMatrix),ue.numLightProbeGrids=ml(E.state.lightProbeGridArray),ue.currentProgram=Ct,ue.uniformsList=null,Ct}function Wr(F,ne,_e,ue,de){let Be=Se.get(F),et=Be.currentProgram.id+","+ue+","+de,Xe=Be.programVariants.get(et);return Xe===void 0?(Xe=gs(F,ne,_e),Be.programVariants.set(et,Xe)):(Be.currentProgram=Xe,Be.uniformsList=null,Be.outputColorSpace=ue,Be.toneMapping=de),Xe}function xs(F){if(F.uniformsList===null){let ne=F.currentProgram.getUniforms();F.uniformsList=Fo.seqWithValue(ne.seq,F.uniforms)}return F.uniformsList}function gl(F,ne){let _e=Se.get(F);_e.outputColorSpace=ne.outputColorSpace,_e.batching=ne.batching,_e.batchingColor=ne.batchingColor,_e.instancing=ne.instancing,_e.instancingColor=ne.instancingColor,_e.instancingMorph=ne.instancingMorph,_e.skinning=ne.skinning,_e.morphTargets=ne.morphTargets,_e.morphNormals=ne.morphNormals,_e.morphColors=ne.morphColors,_e.morphTargetsCount=ne.morphTargetsCount,_e.numClippingPlanes=ne.numClippingPlanes,_e.numIntersection=ne.numClipIntersection,_e.vertexAlphas=ne.vertexAlphas,_e.vertexTangents=ne.vertexTangents,_e.toneMapping=ne.toneMapping}function Xr(F,ne,_e,ue,de){ne.isScene!==!0&&(ne=be),Le.resetTextureUnits();let Be=ne.fog,et=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ne.environment:null,Xe=_===null?R.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Rt.workingColorSpace,Je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,nt=I.get(ue.envMap||et,Je),_t=ue.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,Ct=!!_e.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),rt=!!_e.morphAttributes.position,It=!!_e.morphAttributes.normal,Qt=!!_e.morphAttributes.color,Gt=Fi;ue.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Gt=R.toneMapping);let Ut=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,ln=Ut!==void 0?Ut.length:0,ot=Se.get(ue),yn=E.state.lights;if(Ke===!0&&(Ne===!0||F!==L)){let qt=F===L&&ue.id===y;fe.setState(ue,F,qt)}let Ot=!1,Xi=!1;ue.version===ot.__version?ot.needsLights&&ot.lightsStateVersion!==yn.state.version||de.isBatchedMesh&&ot.batching===!1||!de.isBatchedMesh&&ot.batching===!0||de.isBatchedMesh&&ot.batchingColor===!0&&de._colorsTexture===null||de.isBatchedMesh&&ot.batchingColor===!1&&de._colorsTexture!==null||de.isInstancedMesh&&ot.instancing===!1||!de.isInstancedMesh&&ot.instancing===!0||de.isSkinnedMesh&&ot.skinning===!1||!de.isSkinnedMesh&&ot.skinning===!0||de.isInstancedMesh&&ot.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&ot.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&ot.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&ot.instancingMorph===!1&&de.morphTexture!==null||ot.envMap!==nt||ue.fog===!0&&ot.fog!==Be||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==fe.numPlanes||ot.numIntersection!==fe.numIntersection)||ot.vertexAlphas!==_t||ot.vertexTangents!==Ct||ot.morphTargets!==rt||ot.morphNormals!==It||ot.morphColors!==Qt||ot.morphTargetsCount!==ln||ot.numLightProbeGrids!==ml(E.state.lightProbeGridArray)?Ot=!0:(ot.outputColorSpace!==Xe||ot.toneMapping!==Gt)&&(Xi=!0):(Ot=!0,ot.__version=ue.version);let kt=ot.currentProgram;(Ot===!0||Xi===!0)&&(kt=Xi===!0?Wr(ue,ne,de,Xe,Gt):gs(ue,ne,de),z&&ue.isNodeMaterial&&z.onUpdateProgram(ue,kt,ot));let hi=!1,ui=!1,Ri=!1,zt=kt.getUniforms(),Kt=ot.uniforms;if(re.useProgram(kt.program)&&(hi=!0,ui=!0,Ri=!0),ue.id!==y&&(y=ue.id,ui=!0),hi||L!==F){re.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),zt.setValue(O,"projectionMatrix",F.projectionMatrix),zt.setValue(O,"viewMatrix",F.matrixWorldInverse);let cn=zt.map.cameraPosition;cn!==void 0&&cn.setValue(O,mt.setFromMatrixPosition(F.matrixWorld)),se.logarithmicDepthBuffer&&zt.setValue(O,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&zt.setValue(O,"isOrthographic",F.isOrthographicCamera===!0),L!==F&&(L=F,ui=!0,Ri=!0)}if(ot.needsLights&&(yn.state.sunShadowMap.length>0&&zt.setValue(O,"sunShadowMap",yn.state.sunShadowMap,Le),yn.state.directionalShadowMap.length>0&&zt.setValue(O,"directionalShadowMap",yn.state.directionalShadowMap,Le),yn.state.spotShadowMap.length>0&&zt.setValue(O,"spotShadowMap",yn.state.spotShadowMap,Le),yn.state.pointShadowMap.length>0&&zt.setValue(O,"pointShadowMap",yn.state.pointShadowMap,Le)),de.isSkinnedMesh){zt.setOptional(O,de,"bindMatrix"),zt.setOptional(O,de,"bindMatrixInverse");let qt=de.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),zt.setValue(O,"boneTexture",qt.boneTexture,Le))}de.isBatchedMesh&&(zt.setOptional(O,de,"batchingTexture"),zt.setValue(O,"batchingTexture",de._matricesTexture,Le),zt.setOptional(O,de,"batchingIdTexture"),zt.setValue(O,"batchingIdTexture",de._indirectTexture,Le),zt.setOptional(O,de,"batchingColorTexture"),de._colorsTexture!==null&&zt.setValue(O,"batchingColorTexture",de._colorsTexture,Le));let Dn=_e.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ee.update(de,_e,kt),(ui||ot.receiveShadow!==de.receiveShadow)&&(ot.receiveShadow=de.receiveShadow,zt.setValue(O,"receiveShadow",de.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ne.environment!==null&&(Kt.envMapIntensity.value=ne.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=pS()),ui){if(zt.setValue(O,"toneMappingExposure",R.toneMappingExposure),ot.needsLights&&vs(Kt,Ri),Be&&ue.fog===!0&&we.refreshFogUniforms(Kt,Be),we.refreshMaterialUniforms(Kt,ue,le,ie,E.state.transmissionRenderTarget[F.id]),ot.needsLights&&ot.numLightProbeGrids>0){let qt=v,cn=0;for(let fi of E.state.lightProbeGridArray)fi.texture!==null&&(qt.textures[cn]=fi.texture,qt.min[cn]=fi.boundingBox.min,qt.max[cn]=fi.boundingBox.max,qt.resolution[cn]=fi.resolution,cn++);for(let fi in qt)qt[fi].length=cn;Kt.probesSH.value=qt.textures,Kt.probesMin.value=qt.min,Kt.probesMax.value=qt.max,Kt.probesResolution.value=qt.resolution}Fo.upload(O,xs(ot),Kt,Le)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Fo.upload(O,xs(ot),Kt,Le),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&zt.setValue(O,"center",de.center),zt.setValue(O,"modelViewMatrix",de.modelViewMatrix),zt.setValue(O,"normalMatrix",de.normalMatrix),zt.setValue(O,"modelMatrix",de.matrixWorld),ue.uniformsGroups!==void 0){let qt=ue.uniformsGroups;for(let cn=0,fi=qt.length;cn<fi;cn++){let xl=qt[cn];Ye.update(xl,kt),Ye.bind(xl,kt)}}return kt}function vs(F,ne){F.ambientLightColor.needsUpdate=ne,F.lightProbe.needsUpdate=ne,F.sunLights.needsUpdate=ne,F.sunLightShadows.needsUpdate=ne,F.directionalLights.needsUpdate=ne,F.directionalLightShadows.needsUpdate=ne,F.pointLights.needsUpdate=ne,F.pointLightShadows.needsUpdate=ne,F.spotLights.needsUpdate=ne,F.spotLightShadows.needsUpdate=ne,F.rectAreaLights.needsUpdate=ne,F.hemisphereLights.needsUpdate=ne}function Wi(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(F,ne,_e){let ue=Se.get(F);ue.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Se.get(F.texture).__webglTexture=ne,Se.get(F.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:_e,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,ne){let _e=Se.get(F);_e.__webglFramebuffer=ne,_e.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(F,ne=0,_e=0){_=F,G=ne,H=_e;let ue=null,de=!1,Be=!1;if(F){let Xe=Se.get(F);if(Xe.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(O.FRAMEBUFFER,Xe.__webglFramebuffer),A.copy(F.viewport),D.copy(F.scissor),q=F.scissorTest,re.viewport(A),re.scissor(D),re.setScissorTest(q),y=-1;return}else if(Xe.__webglFramebuffer===void 0)Le.setupRenderTarget(F);else if(Xe.__hasExternalTextures)Le.rebindTextures(F,Se.get(F.texture).__webglTexture,Se.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let _t=F.depthTexture;if(Xe.__boundDepthTexture!==_t){if(_t!==null&&Se.has(_t)&&(F.width!==_t.image.width||F.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(F)}}let Je=F.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);let nt=Se.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(nt[ne])?ue=nt[ne][_e]:ue=nt[ne],de=!0):F.samples>0&&Le.useMultisampledRTT(F)===!1?ue=Se.get(F).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[_e]:ue=nt,A.copy(F.viewport),D.copy(F.scissor),q=F.scissorTest}else A.copy(he).multiplyScalar(le).floor(),D.copy(ke).multiplyScalar(le).floor(),q=ae;if(_e!==0&&(ue=k),re.bindFramebuffer(O.FRAMEBUFFER,ue)&&re.drawBuffers(F,ue),re.viewport(A),re.scissor(D),re.setScissorTest(q),de){let Xe=Se.get(F.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Xe.__webglTexture,_e)}else if(Be){let Xe=ne;for(let Je=0;Je<F.textures.length;Je++){let nt=Se.get(F.textures[Je]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Je,nt.__webglTexture,_e,Xe)}}else if(F!==null&&_e!==0){let Xe=Se.get(F.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,_e)}y=-1};function Ks(F){let ne=Se.get(F);return(ne.__readFormat!==F.format||ne.__readType!==F.type)&&(ne.__readFormat=F.format,ne.__readType=F.type,ne.__formatReadable=se.textureFormatReadable(F.format),ne.__typeReadable=se.textureTypeReadable(F.type)),ne}this.readRenderTargetPixels=function(F,ne,_e,ue,de,Be,et,Xe=0){if(!(F&&F.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Se.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&et!==void 0&&(Je=Je[et],Array.isArray(Je)&&(Je=Je[0])),Je){re.bindFramebuffer(O.FRAMEBUFFER,Je);try{let nt=F.textures[Xe],_t=nt.format,Ct=nt.type;F.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xe);let rt=Ks(nt);if(rt.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(rt.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=F.width-ue&&_e>=0&&_e<=F.height-de&&O.readPixels(ne,_e,ue,de,ve.convert(_t),ve.convert(Ct),Be)}finally{let nt=_!==null?Se.get(_).__webglFramebuffer:null;re.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(F,ne,_e,ue,de,Be,et,Xe=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Se.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&et!==void 0&&(Je=Je[et],Array.isArray(Je)&&(Je=Je[0])),Je)if(ne>=0&&ne<=F.width-ue&&_e>=0&&_e<=F.height-de){re.bindFramebuffer(O.FRAMEBUFFER,Je);let nt=F.textures[Xe],_t=nt.format,Ct=nt.type;F.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xe);let rt=Ks(nt);if(rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.bufferData(O.PIXEL_PACK_BUFFER,Be.byteLength,O.STREAM_READ),O.readPixels(ne,_e,ue,de,ve.convert(_t),ve.convert(Ct),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qt=_!==null?Se.get(_).__webglFramebuffer:null;re.bindFramebuffer(O.FRAMEBUFFER,Qt);let Gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jm(O,Gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(It),O.deleteSync(Gt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,ne=null,_e=0){let ue=Math.pow(2,-_e),de=Math.floor(F.image.width*ue),Be=Math.floor(F.image.height*ue),et=ne!==null?ne.x:0,Xe=ne!==null?ne.y:0;Le.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,_e,0,0,et,Xe,de,Be),re.unbindTexture()},this.copyTextureToTexture=function(F,ne,_e=null,ue=null,de=0,Be=0){let et,Xe,Je,nt,_t,Ct,rt,It,Qt,Gt=F.isCompressedTexture?F.mipmaps[Be]:F.image;if(_e!==null)et=_e.max.x-_e.min.x,Xe=_e.max.y-_e.min.y,Je=_e.isBox3?_e.max.z-_e.min.z:1,nt=_e.min.x,_t=_e.min.y,Ct=_e.isBox3?_e.min.z:0;else{let zt=Math.pow(2,-de);et=Math.floor(Gt.width*zt),Xe=Math.floor(Gt.height*zt),F.isDataArrayTexture?Je=Gt.depth:F.isData3DTexture?Je=Math.floor(Gt.depth*zt):Je=1,nt=0,_t=0,Ct=0}ue!==null?(rt=ue.x,It=ue.y,Qt=ue.z):(rt=0,It=0,Qt=0);let Ut=ve.convert(ne.format),ln=ve.convert(ne.type),ot;ne.isData3DTexture?(Le.setTexture3D(ne,0),ot=O.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(Le.setTexture2DArray(ne,0),ot=O.TEXTURE_2D_ARRAY):(Le.setTexture2D(ne,0),ot=O.TEXTURE_2D),re.activeTexture(O.TEXTURE0),re.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,ne.flipY),re.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),re.pixelStorei(O.UNPACK_ALIGNMENT,ne.unpackAlignment);let yn=re.getParameter(O.UNPACK_ROW_LENGTH),Ot=re.getParameter(O.UNPACK_IMAGE_HEIGHT),Xi=re.getParameter(O.UNPACK_SKIP_PIXELS),kt=re.getParameter(O.UNPACK_SKIP_ROWS),hi=re.getParameter(O.UNPACK_SKIP_IMAGES);re.pixelStorei(O.UNPACK_ROW_LENGTH,Gt.width),re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Gt.height),re.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),re.pixelStorei(O.UNPACK_SKIP_ROWS,_t),re.pixelStorei(O.UNPACK_SKIP_IMAGES,Ct);let ui=F.isDataArrayTexture||F.isData3DTexture,Ri=ne.isDataArrayTexture||ne.isData3DTexture;if(F.isDepthTexture){let zt=Se.get(F),Kt=Se.get(ne),Dn=Se.get(zt.__renderTarget),qt=Se.get(Kt.__renderTarget);re.bindFramebuffer(O.READ_FRAMEBUFFER,Dn.__webglFramebuffer),re.bindFramebuffer(O.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let cn=0;cn<Je;cn++)ui&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,de,Ct+cn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(ne).__webglTexture,Be,Qt+cn)),O.blitFramebuffer(nt,_t,nt+et,_t+Xe,rt,It,rt+et,It+Xe,O.DEPTH_BUFFER_BIT,O.NEAREST);re.bindFramebuffer(O.READ_FRAMEBUFFER,null),re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(de!==0||F.isRenderTargetTexture||Se.has(F)){let zt=Se.get(F),Kt=Se.get(ne);re.bindFramebuffer(O.READ_FRAMEBUFFER,B),re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Y);for(let Dn=0;Dn<Je;Dn++)ui?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,de,Ct+Dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,de),Ri?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,Be,Qt+Dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,Be),de!==0?O.blitFramebuffer(nt,_t,nt+et,_t+Xe,rt,It,rt+et,It+Xe,O.COLOR_BUFFER_BIT,O.NEAREST):Ri?O.copyTexSubImage3D(ot,Be,rt,It,Qt+Dn,nt,_t,et,Xe):O.copyTexSubImage2D(ot,Be,rt,It,nt,_t,et,Xe);re.bindFramebuffer(O.READ_FRAMEBUFFER,null),re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ri?F.isDataTexture||F.isData3DTexture?O.texSubImage3D(ot,Be,rt,It,Qt,et,Xe,Je,Ut,ln,Gt.data):ne.isCompressedArrayTexture?O.compressedTexSubImage3D(ot,Be,rt,It,Qt,et,Xe,Je,Ut,Gt.data):O.texSubImage3D(ot,Be,rt,It,Qt,et,Xe,Je,Ut,ln,Gt):F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Be,rt,It,et,Xe,Ut,ln,Gt.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Be,rt,It,Gt.width,Gt.height,Ut,Gt.data):O.texSubImage2D(O.TEXTURE_2D,Be,rt,It,et,Xe,Ut,ln,Gt);re.pixelStorei(O.UNPACK_ROW_LENGTH,yn),re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot),re.pixelStorei(O.UNPACK_SKIP_PIXELS,Xi),re.pixelStorei(O.UNPACK_SKIP_ROWS,kt),re.pixelStorei(O.UNPACK_SKIP_IMAGES,hi),Be===0&&ne.generateMipmaps===!0&&ne.mipmapsAutoUpdate===!0&&O.generateMipmap(ot),re.unbindTexture()},this.initRenderTarget=function(F){Se.get(F).__webglFramebuffer===void 0&&Le.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?Le.setTextureCube(F,0):F.isData3DTexture?Le.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Le.setTexture2DArray(F,0):Le.setTexture2D(F,0),re.unbindTexture()},this.resetState=function(){G=0,H=0,_=null,re.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var ko=At;ko.__vkwToon||(ko.__vkwToon=!0,ko.lights_lambert_pars_fragment=ko.lights_lambert_pars_fragment.replace("float dotNL = saturate( dot( geometryNormal, directLight.direction ) );",`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	#ifdef VKW_TOON
	dotNL = mix( 0.3, 1.0, smoothstep( 0.1, 0.2, dotNL ) );
	#endif`),ko.dithering_fragment=`#ifdef VKW_TOON
	{ float vkwL = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) ); gl_FragColor.rgb = max( vec3( 0.0 ), mix( vec3( vkwL ), gl_FragColor.rgb, 1.22 ) ); }
#endif
`+ko.dithering_fragment);var $a=new Map;function Eh(s){let e=s.toFixed(4);if($a.has(e))return $a.get(e);let t=new Jt({color:"#21142c",side:gn,fog:!0});return t.name="vkw-outline",t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
	transformed += normalize( normal ) * ${s.toFixed(4)};`)},t.customProgramCacheKey=()=>"vkw-outline-"+e,$a.set(e,t),t}function O0(){for(let s of $a.values())s.dispose();$a.clear()}function Yf(s,e){let t=0;return s.traverse(n=>{if(n.material)for(let i of Array.isArray(n.material)?n.material:[n.material])!(i.isMeshLambertMaterial||i.isMeshBasicMaterial)||i.name==="vkw-outline"||!!(i.defines&&"VKW_TOON"in i.defines)===e||(i.defines={...i.defines||{}},e?i.defines.VKW_TOON="":delete i.defines.VKW_TOON,i.needsUpdate=!0,t++)}),t}function ja(s,e,t){let n=[];s.traverse(i=>{i.isMesh&&!i.userData.outline&&!i.userData.hasOutline&&(!t||t(i))&&n.push(i)});for(let i of n){let r;i.isSkinnedMesh?(r=new xr(i.geometry,Eh(e)),r.bind(i.skeleton,i.bindMatrix),r.bindMode=i.bindMode,i.boundingSphere&&(r.boundingSphere=i.boundingSphere)):r=new Tt(i.geometry,Eh(e)),r.position.copy(i.position),r.quaternion.copy(i.quaternion),r.scale.copy(i.scale),r.matrixAutoUpdate=i.matrixAutoUpdate,i.matrixAutoUpdate||r.matrix.copy(i.matrix),r.frustumCulled=i.frustumCulled,r.castShadow=!1,r.receiveShadow=!1,r.renderOrder=i.renderOrder,r.userData.outline=!0,i.userData.hasOutline=r,i.parent.add(r)}}function Kf(s){let e=[];s.traverse(t=>{t.userData.outline&&e.push(t),t.userData.hasOutline&&(t.userData.hasOutline=null)});for(let t of e)t.parent&&t.parent.remove(t)}var Ds={};bp(Ds,{GROUPS:()=>Ho,allMaterials:()=>LS,altKitMaterial:()=>Cd,clips:()=>Rd,get:()=>Qn,getBase:()=>ES,groupLoaded:()=>Nh,has:()=>Ln,load:()=>Y0,loadGroups:()=>Fr,material:()=>Ed,prop:()=>Sn,releaseGPU:()=>Id,setBase:()=>Dh,tinted:()=>Go,villagerTinted:()=>Ad});function k0(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Nt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=U0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let m=U0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function U0(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Et(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let M=h.getComponent(f,m);a.setComponent(f+u,m,M)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Zf(s,e){if(e===vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===zo||e===Wa){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===zo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ah(s){let e=new Map,t=new Map,n=s.clone();return B0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function B0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)B0(s.children[n],e.children[n],t)}var Rh=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new Ch(t,Pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ch(t,Pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=hs.extractUrlBase(e);o=hs.resolveURL(l,this.path)}else o=hs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ro(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===X0){try{o[Pt.KHR_BINARY_GLTF]=new xd(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Pt.KHR_MATERIALS_UNLIT:o[u]=new ed;break;case Pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new vd(r,this.dracoLoader);break;case Pt.KHR_TEXTURE_TRANSFORM:o[u]=new yd;break;case Pt.KHR_MESH_QUANTIZATION:o[u]=new _d;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function gS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function $t(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qf=class{constructor(e){this.parser=e,this.name=Pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new He(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],On);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new si(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tr(h),l.distance=u;break;case"spot":l=new La(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ed=class{constructor(){this.name=Pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let i=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},td=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pt(r,r)}return Promise.all(i)}},id=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},sd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},od=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ad=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},ld=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],On),Promise.all(i)}},cd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},ud=class{constructor(e){this.parser=e,this.name=Pt.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},fd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},dd=class{constructor(e){this.parser=e,this.name=Pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},pd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},md=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Ch=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},gd=class{constructor(e){this.name=Pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let M=new ht,p=new Z,g=new Zt,S=new Z(1,1,1),b=new vr(m.geometry,m.material,f);for(let C=0;C<f;C++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,C),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,C),c.SCALE&&S.fromBufferAttribute(c.SCALE,C),b.setMatrixAt(C,M.compose(p,g,S));let v=null;for(let C in c)if(C==="_COLOR_0"){let E=c[C];b.instanceColor=new Un(E.array,E.itemSize,E.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(v===null){let x=b.geometry;v=new Nt,v.name=x.name;for(let w in x.attributes)v.setAttribute(w,x.attributes[w]);for(let w in x.morphAttributes)v.morphAttributes[w]=x.morphAttributes[w];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let w of x.groups)v.addGroup(w.start,w.count,w.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),b.geometry=v}let E=c[C];v.setAttribute(C,new Un(E.array,E.itemSize,E.normalized))}Yt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},X0="glTF",Qa=12,H0={JSON:1313821514,BIN:5130562},xd=class{constructor(e){this.name=Pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==X0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qa,r=new DataView(e,Qa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===H0.JSON){let l=new Uint8Array(e,Qa+o,a);this.content=n.decode(l)}else if(c===H0.BIN){let l=Qa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=bd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=bd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Bo[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let M=d.attributes[m],p=c[m];p!==void 0&&(M.normalized=p)}u(d)},a,l,On,f)})})}},yd=class{constructor(){this.name=Pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_d=class{constructor(){this.name=Pt.KHR_MESH_QUANTIZATION}},Ih=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,M=m-l,p=-2*d+3*f,g=d-f,S=1-p,b=g-f+u;for(let v=0;v!==a;v++){let C=o[M+v+a],E=o[M+v+c]*h,x=o[m+v+a],w=o[m+v]*h;r[v]=S*C+b*E+p*x+g*w}return r}},xS=new Zt,Md=class extends Ih{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return xS.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},G0={9728:sn,9729:dn,9984:zc,9985:Do,9986:Lr,9987:ri},V0={33071:Wn,33648:xo,10497:Ts},Jf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vS={CUBICSPLINE:void 0,LINEAR:fr,STEP:ur},$f={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),s.DefaultMaterial}function zr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _S(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function MS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bS(s){let e,t=s.extensions&&s.extensions[Pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jf(t.attributes):e=s.indices+":"+jf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+jf(s.targets[n]);return e}function jf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wS=new ht,wd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new br(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Na(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zr(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(hs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Jf[i.type],a=Bo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Et(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Jf[i.type],l=Bo[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,M,p;if(d&&d!==u){let g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=t.cache.get(S);b||(M=new l(a,g*d,i.count*d/h),b=new mr(M,d/h),t.cache.add(S,b)),p=new Es(b,c,f%d/h,m)}else a===null?M=new l(i.count*c):M=new l(a,f,i.count*c),p=new Et(M,c,m);if(i.sparse!==void 0){let g=Jf.SCALAR,S=Bo[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new S(o[1],b,i.sparse.count*g),E=new l(o[2],v,i.sparse.count*c);a!==null&&(p=new Et(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,w=C.length;x<w;x++){let U=C[x];if(p.setX(U,E[x*c]),c>=2&&p.setY(U,E[x*c+1]),c>=3&&p.setZ(U,E[x*c+2]),c>=4&&p.setW(U,E[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=G0[f.magFilter]||dn,h.minFilter=G0[f.minFilter]||ri,h.wrapS=V0[f.wrapS]||Ts,h.wrapT=V0[f.wrapT]||Ts,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==dn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let M=d;t.isImageBitmapLoader===!0&&(M=function(p){let g=new pn(p);g.needsUpdate=!0,d(g)}),t.load(hs.resolveURL(f,r.path),M,void 0,m)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),Bi(f,o),f.userData.mimeType=o.mimeType||SS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Pt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ao,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Eo,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Mr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Pt.KHR_MATERIALS_UNLIT]){let u=i[Pt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=on);let h=r.alphaMode||$f.OPAQUE;if(h===$f.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$f.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let u=r.emissiveFactor;a.emissive=new He().setRGB(u[0],u[1],u[2],On)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&zr(i,u,r),u})}createUniqueName(e){let t=Xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return W0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=bS(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Pt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=W0(new Nt,l,t),l.mode===ai.TRIANGLE_STRIP?f=f.then(d=>Zf(d,Wa)):l.mode===ai.TRIANGLE_FAN&&(f=f.then(d=>Zf(d,zo))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?yS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let M=h[d],p=o[d],g,S=l[d];if(p.mode===ai.TRIANGLES||p.mode===ai.TRIANGLE_STRIP||p.mode===ai.TRIANGLE_FAN||p.mode===void 0){let b=r.isSkinnedMesh===!0,v=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");b&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&v?new xr(M,S):new Tt(M,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===ai.LINES)g=new Ma(M,S);else if(p.mode===ai.LINE_STRIP)g=new yr(M,S);else if(p.mode===ai.LINE_LOOP)g=new ba(M,S);else if(p.mode===ai.POINTS)g=new vi(M,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&MS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Bi(g,r),p.extensions&&zr(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&zr(i,u[0],r),u[0];let f=new Vt;r.extensions&&zr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(_h.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ht;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ya(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],M=d.target,p=M.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,S=i.parameters!==void 0?i.parameters[m.output]:m.output;M.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],M=u[3],p=u[4],g=[];for(let b=0,v=f.length;b<v;b++){let C=f[b],E=d[b],x=m[b],w=M[b],U=p[b];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let R=n._createAnimationTracks(C,E,x,w,U);if(R)for(let N=0;N<R.length;N++)g.push(R[N])}let S=new Mi(r,void 0,g);return Bi(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,wS)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new Z().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new wo:l.length>1?h=new Vt:l.length===1?h=l[0]:h=new Yt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&zr(n,h,r),r.matrix!==void 0){let u=new ht;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Vt;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&zr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(Ah(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Cn||f instanceof pn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Ls[r.path]===Ls.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Ls[r.path]){case Ls.weights:h=as;break;case Ls.rotation:h=ls;break;case Ls.translation:case Ls.scale:h=Cs;break;default:n.itemSize===1?h=as:h=Cs;break}let u=i.interpolation!==void 0?vS[i.interpolation]:fr,f=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let M=new h(c[d]+"."+Ls[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ls?Md:Ih;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TS(s,e,t){let n=e.attributes,i=new fn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new Z(c[0],c[1],c[2]),new Z(l[0],l[1],l[2])),a.normalized){let h=Sd(Bo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new Z,c=new Z;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let M=Sd(Bo[f.componentType]);c.multiplyScalar(M)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new en;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function W0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=bd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Rt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Bi(s,e),TS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_S(s,e.targets,t):s})}ii.enabled=!0;var Lh="assets/models/";function Dh(s){Lh=s.endsWith("/")?s:s+"/"}function ES(){return Lh}var Ho={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},ds=new Map,el=new Map,li=new Map,Td=null,Hi=null;function AS(){return Td||(Td=new Rh),Td}function q0(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),li.has(t))return li.get(t);let n;return e==="window"?n=new Jt({color:16777215,name:e,fog:!0}):(n=new mn({name:e,map:s.map||null,color:s.color?s.color.clone():new He(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Bt,n.map.anisotropy=2),li.set(t,n),n}function Ed(s){return li.get(s)}function RS(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(q0);else{let i=t.material;t.material=q0(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&IS(e)}function CS(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let c=a.getImageData(0,0,i.width,i.height).data,l=s.material.map.flipY;for(let h=0;h<t;h++){let u=r.getX(h)%1,f=r.getY(h)%1;u<0&&(u+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(u*i.width)),m=Math.min(i.height-1,Math.floor((l?1-f:f)*i.height));n[h]=Math.max(.05,c[(m*i.width+d)*4]/255)}}catch{}return n}function IS(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(l=>{let h=l.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||h.deleteAttribute(f);let u=l.material.name==="cloth";return h.setAttribute("aCloth",new Et(u?CS(l):new Float32Array(h.attributes.position.count),1)),h}),c=k0(a,!1);if(!c)return;r.geometry.dispose(),r.geometry=c,r.userData.clothMerged=n.length>0;for(let l of o)l.parent.remove(l),l.geometry.dispose()}catch{}}var Ph=new Map;function Ad(s){if(Ph.has(s))return Ph.get(s);let e=li.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new He(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",Ph.set(s,t),t}function Y0(s,e){if(ds.has(s))return e&&e(),Promise.resolve(ds.get(s));if(el.has(s))return el.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{AS().load(Lh+s,r=>{try{RS(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}ds.set(s,r),el.delete(s),n(r)},void 0,r=>{el.delete(s),i(r)})});return el.set(s,t),t.then(n=>(e&&e(),n))}function Fr(s,e){let t=[];for(let r of s)for(let o of Ho[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>Y0(r,()=>{n++,e&&e(n,i)})))}function Ln(s){return ds.has(s)}function Qn(s){return ds.get(s)}function Nh(s){return Ho[s].every(e=>ds.has(e))}var PS={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function Sn(s,e){let t=ds.get(PS[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function Rd(){let s=ds.get("characters/villager-anims.glb");return s?s.animations:[]}var tl=new Map;function Go(s,e,t){let n=s+"|"+e+(t||"");if(tl.has(n))return tl.get(n);let i=li.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,tl.set(n,r),r}function Cd(){if(li.has("fantasy-town-b"))return li.get("fantasy-town-b");let s=li.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",Hi||(Hi=new br().load(Lh+"textures/fantasy-town-b.png"),Hi.flipY=!1,Hi.colorSpace=Bt,Hi.anisotropy=2,s.map&&(Hi.wrapS=s.map.wrapS,Hi.wrapT=s.map.wrapT)),e.map=Hi,li.set("fantasy-town-b",e),e}function LS(){return[...li.values(),...tl.values()]}function Id(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of ds.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of li.values())e(t),t.map&&e(t.map);for(let t of tl.values())e(t);for(let t of Ph.values())e(t);Hi&&e(Hi)}var Mn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],DS=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],nl=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],NS=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],zS=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],FS=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],K0=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],Z0=Mn.map((s,e)=>({id:e,hex:s,name:DS[e]})),J0=NS.map((s,e)=>({id:e,name:s,node:nl[e]})),$0=zS.map((s,e)=>({id:e,name:s,desc:FS[e]}));var Pd={vampir:!0,iftiraci:!0};var ci={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ft=(s,e,t)=>s<e?e:s>t?t:s,Ld=(s,e,t)=>s+(e-s)*t,Ns=s=>s*s*(3-2*s),un=(s,e)=>1-Math.exp(-s*e),it=Math.PI*2;function jt(s){return s=(s+Math.PI)%it,s<0&&(s+=it),s-Math.PI}function Bn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var OS=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,US=`
uniform vec3 uTop, uHor, uSun, uSunDir, uMoonDir, uMoonCol;
uniform float uSunVis, uMoonVis, uGlow;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHor, uTop, pow(clamp(h * 1.6, 0.0, 1.0), 0.65));
  // g\xFCne\u015F halesi ufukta yay\u0131l\u0131r
  float sd = max(dot(d, uSunDir), 0.0);
  float hz = 1.0 - clamp(abs(h) * 3.0, 0.0, 1.0);
  col += uSun * (pow(sd, 6.0) * 0.32 * uGlow * (0.4 + hz) + pow(sd, 90.0) * 0.6) * uSunVis;
  float disc = smoothstep(0.9988, 0.9992, sd);
  col = mix(col, uSun * 0.5 + vec3(1.0, 0.96, 0.85) * 0.75, disc * uSunVis);
  // ay: disk + hafif krater lekeleri + hale
  float md = max(dot(d, uMoonDir), 0.0);
  col += mix(vec3(0.55, 0.68, 1.0), uMoonCol, 0.5) * pow(md, 40.0) * 0.28 * uMoonVis;
  float mdisc = smoothstep(0.99935, 0.99955, md);
  vec3 mc = uMoonCol - 0.12 * smoothstep(0.4, 0.9, sin(d.x * 900.0) * sin(d.y * 700.0 + d.z * 500.0));
  col = mix(col, mc, mdisc * uMoonVis);
  // ufkun alt\u0131: sis rengine kaynar
  col = mix(col, uHor, smoothstep(0.0, -0.08, h));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,kS=`
attribute float aSize;
attribute float aPhase;
uniform float uTime, uAlpha, uPx;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
  float tw = 0.65 + 0.35 * sin(uTime * (1.3 + aPhase) + aPhase * 17.0);
  vA = uAlpha * tw * smoothstep(0.0, 0.25, normalize(position).y);
  gl_PointSize = aSize * uPx;
}`,BS=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function j0(s,e){let t=new Vt;t.name="sky",s.add(t);let n=new rn({vertexShader:OS,fragmentShader:US,side:gn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new He},uHor:{value:new He},uSun:{value:new He},uSunDir:{value:new Z(0,1,0)},uMoonDir:{value:new Z(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new He(.93,.95,1)}}}),i=new Tt(new Aa(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=Bn(77),o=700,a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let p=0;p<o;p++){let g=r(),S=r(),b=g*it,v=.04+Math.pow(S,.8)*.96,C=Math.sqrt(1-v*v);a[p*3]=Math.cos(b)*C*420,a[p*3+1]=v*420,a[p*3+2]=Math.sin(b)*C*420,c[p]=1+Math.pow(r(),6)*3.2,l[p]=r()*3}let h=new Nt;h.setAttribute("position",new Et(a,3)),h.setAttribute("aSize",new Et(c,1)),h.setAttribute("aPhase",new Et(l,1));let u=new rn({vertexShader:kS,fragmentShader:BS,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new vi(h,u);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=GS();t.add(d);let m=VS();return t.add(m),{group:t,update(p,g,S,b,v){let C=n.uniforms;v&&C.uMoonCol.value.copy(v),C.uTop.value.copy(p.top),C.uHor.value.copy(p.hor),C.uSun.value.copy(p.sun),C.uSunDir.value.copy(p.sunDir),C.uMoonDir.value.copy(p.moonDir),C.uSunVis.value=p.sunVis,C.uMoonVis.value=p.moonVis,C.uGlow.value=.6+p.dusk*1.4,u.uniforms.uTime.value=g,u.uniforms.uAlpha.value=p.stars,u.uniforms.uPx.value=b,f.visible=p.stars>.01,t.position.set(S.position.x,0,S.position.z),il.color.copy(p.hor).lerp(p.sun,.35).lerp(HS,.55*(1-p.night)),il.color.multiplyScalar(.55+.45*(1-p.night*.8)),d.rotation.y=g*.004,d.visible=e.clouds,Vo.uniforms.uFar.value.copy(p.hor),Vo.uniforms.uNear.value.copy(p.gnd).lerp(p.hor,.35).multiplyScalar(.9),Vo.uniforms.uTint.value.copy(p.sky)},dispose(){t.traverse(p=>{p.geometry&&p.geometry.dispose()}),n.dispose(),u.dispose(),il.dispose(),Vo.dispose(),s.remove(t)}}}var HS=new He(1,1,1),il=null,Vo=null;function GS(){let s=Bn(4242),e=[];for(let a=0;a<11;a++){let c=s()*it,l=210+s()*120,h=70+s()*55,u=3+Math.floor(s()*4);for(let f=0;f<u;f++){let d=new Ea(1,0),m=9+s()*12;d.scale(m*(1.3+s()*.6),m*.55,m),d.translate((f-u/2)*13+s()*5,s()*4,s()*8),d.rotateY(c+Math.PI/2),d.translate(Math.cos(c)*l,h,Math.sin(c)*l),e.push(d)}}let t=WS(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let c=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c*1.03}t.setAttribute("color",new Et(i,3)),il=new Jt({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new Tt(t,il);return o.renderOrder=-8,o.frustumCulled=!1,o}function VS(){let s=Bn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let c=e.length/3,l=0;for(let h=0;h<=a.n;h++){let u=h/a.n*it,f=a.h*(.35+.65*Math.abs(Math.sin(u*3.1+a.k)*.6+Math.sin(u*7.3+1.7*a.k)*.3+(s()-.5)*.35));h===a.n&&(f=l),h===0&&(l=f);let d=Math.cos(u)*a.r,m=Math.sin(u)*a.r;if(e.push(d,-20,m,d,f,m),t.push(a.k,0,0,a.k,1,0),h<a.n){let M=c+h*2;n.push(M,M+2,M+1,M+1,M+2,M+3)}}}let r=new Nt;r.setAttribute("position",new Ft(e,3)),r.setAttribute("color",new Ft(t,3)),r.setIndex(n),Vo=new rn({side:on,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new He},uNear:{value:new He},uTint:{value:new He}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new Tt(r,Vo);return o.renderOrder=-7,o.frustumCulled=!1,o}function WS(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Nt;return i.setAttribute("position",new Et(t,3)),i}function zh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Dd(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=zh(t,n),a=zh(t+1,n),c=zh(t,n+1),l=zh(t+1,n+1);return o+(a-o)*i+(c-o)*r+(o-a-c+l)*i*r}function Q0(s,e){return Dd(s,e)*.55+Dd(s*2.1,e*2.1)*.3+Dd(s*4.3,e*4.3)*.15}function eg(s,e){let r=[];for(let E=0;E<=56;E++){let x=E/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),c=new Float32Array(o*2),l=new Float32Array(o*3),h=[];for(let E=1;E<=56;E++)for(let x=0;x<120;x++){let w=1+(E-1)*120+x,U=1+(E-1)*120+(x+1)%120;if(E===1)h.push(0,U,w);else{let R=1+(E-2)*120+x,N=1+(E-2)*120+(x+1)%120;h.push(R,N,w,N,U,w)}}let u=new Nt;u.setAttribute("position",new Et(a,3)),u.setAttribute("uv",new Et(c,2)),u.setAttribute("color",new Et(l,3)),u.setIndex(h);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),m=new is(f);m.colorSpace=Bt,m.wrapS=m.wrapT=Wn,m.anisotropy=4;let M=new mn({map:m,vertexColors:!0}),p=new Tt(u,M);p.receiveShadow=!0,p.name="ground",p.renderOrder=-1,s.add(p);let g=30,S=45;function b(E,x){let w=Math.hypot(E,x);if(w<=g)return 0;let U=Ns(ft((w-g)/26,0,1)),R=Q0(E*.018+3,x*.018-7),N=ft((w-g)/140,0,1);return U*(.6+R*3.5)+N*N*N*(8+R*14)}function v(){let E=0,x=(w,U)=>{let R=b(w,U);a[E*3]=w,a[E*3+1]=R,a[E*3+2]=U,c[E*2]=w/(2*S)+.5,c[E*2+1]=1-(U/(2*S)+.5);let N=Math.hypot(w,U),z=Q0(w*.05,U*.05),k=ft((N-g)/60,0,1),B=ft(R/30,0,1),Y=.92+(z-.5)*.22;l[E*3]=Y*(1-k*.32)+B*.08,l[E*3+1]=Y*(1-k*.22),l[E*3+2]=Y*(1-k*.18)+B*.06,E++};x(0,0);for(let w=1;w<=56;w++)for(let U=0;U<120;U++){let R=U/120*it+w%2*(Math.PI/120);x(Math.cos(R)*r[w],Math.sin(R)*r[w])}u.getAttribute("position").needsUpdate=!0,u.getAttribute("uv").needsUpdate=!0,u.getAttribute("color").needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function C(E,x){let w=!!(x&&x.snow);g=E.R+10,S=E.R+17,v();let U=f.width,R=U/(2*S),N=A=>(A+S)*R,z=A=>(A+S)*R,k=Bn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=w?"#e4ebf2":"#7db457",d.fillRect(0,0,U,U);for(let A=0;A<260;A++){let D=k()*U,q=k()*U,W=(2+k()*7)*R,J=d.createRadialGradient(D,q,0,D,q,W),me=w?k()<.5?"255,255,255":k()<.5?"200,212,228":"176,196,170":k()<.5?"120,170,82":k()<.5?"92,136,66":"138,160,78";J.addColorStop(0,`rgba(${me},0.45)`),J.addColorStop(1,`rgba(${me},0)`),d.fillStyle=J,d.fillRect(D-W,q-W,W*2,W*2)}for(let A=0;A<U*6;A++){let D=k()*U,q=k()*U;d.fillStyle=w?k()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":k()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(D,q,1+k()*1.5,1+k()*2.5)}for(let A=0;A<380;A++){let D=k()*it,q=E.Rp+2+k()*(S-E.Rp-2),W=N(Math.cos(D)*q),J=z(Math.sin(D)*q);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(k()*4)],d.globalAlpha=w?0:.8,d.beginPath(),d.arc(W,J,Math.max(1,R*.06),0,it),d.fill()}d.globalAlpha=1;for(let A of E.houses){let D=N(A.x),q=z(A.z),W=(A.size*.62+1.4)*R,J=d.createRadialGradient(D,q,W*.3,D,q,W);J.addColorStop(0,w?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),J.addColorStop(1,w?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=J,d.fillRect(D-W,q-W,W*2,W*2)}let B=(A,D,q,W)=>{d.globalAlpha=W,d.strokeStyle=q,d.lineWidth=D*R,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(N(A[0][0]),z(A[0][1]));for(let J=1;J<A.length;J++)d.lineTo(N(A[J][0]),z(A[J][1]));d.stroke(),d.globalAlpha=1},Y=[];for(let A of E.houses){let D=A.door,q=Math.atan2(D.ax,D.az),W=E.Rp-.5,J=[[D.dx,D.dz],[D.ax,D.az],[Math.sin(q)*E.Rr,Math.cos(q)*E.Rr],[Math.sin(q)*W,Math.cos(q)*W]];Y.push(J)}let G=E.gateAngle,H=[[Math.sin(G)*(E.Rp-.5),Math.cos(G)*(E.Rp-.5)],[Math.sin(G)*(E.R+2),Math.cos(G)*(E.R+2)],[Math.sin(G+.05)*(E.R+12),Math.cos(G+.05)*(E.R+12)],[Math.sin(G-.02)*(S+4),Math.cos(G-.02)*(S+4)]];Y.push(H);for(let A of Y)B(A,2.6,w?"#b4b8bf":"#8f7a52",.35);for(let A of Y)B(A,1.7,w?"#8f8476":"#a88d5e",.85);for(let A of Y)B(A,.7,w?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*R,d.beginPath(),d.arc(N(0),z(0),E.Rr*R,0,it),d.stroke(),d.globalAlpha=1;let _=(E.Rp+.8)*R,y=d.createRadialGradient(N(0),z(0),_*.6,N(0),z(0),_*1.08);w?(y.addColorStop(0,"rgba(170,166,160,1)"),y.addColorStop(.85,"rgba(184,186,190,0.95)"),y.addColorStop(1,"rgba(184,186,190,0)")):(y.addColorStop(0,"rgba(176,150,108,1)"),y.addColorStop(.85,"rgba(160,136,96,0.95)"),y.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=y,d.beginPath(),d.arc(N(0),z(0),_*1.08,0,it),d.fill();let L=Math.max(2,.55*R);for(let A=3.2;A<E.Rp+.3;A+=.62){let D=Math.floor(it*A/.66),q=k()*it;for(let W=0;W<D;W++){if(k()<.12)continue;let J=q+W/D*it,me=N(Math.cos(J)*A),ie=z(Math.sin(J)*A),le=150+Math.floor(k()*40);d.fillStyle=w?`rgba(${le+40},${le+44},${le+52},${.5+k()*.3})`:`rgba(${le+12},${le},${le-22},${.55+k()*.3})`,d.save(),d.translate(me,ie),d.rotate(J+Math.PI/2),d.beginPath();let Pe=L*(.85+k()*.3),Ge=L*(.7+k()*.25);d.roundRect?d.roundRect(-Pe/2,-Ge/2,Pe,Ge,Ge*.3):d.rect(-Pe/2,-Ge/2,Pe,Ge),d.fill(),d.restore()}}if(y=d.createRadialGradient(N(0),z(0),0,N(0),z(0),3*R),y.addColorStop(0,"rgba(60,46,40,0.95)"),y.addColorStop(.5,"rgba(96,78,62,0.7)"),y.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=y,d.beginPath(),d.arc(N(0),z(0),3*R,0,it),d.fill(),E.grave){let A=N(E.grave.x),D=z(E.grave.z),q=6*R;y=d.createRadialGradient(A,D,0,A,D,q),y.addColorStop(0,"rgba(70,84,58,0.85)"),y.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=y,d.fillRect(A-q,D-q,q*2,q*2)}m.needsUpdate=!0}return{mesh:p,heightAt:b,paint:C,dispose(){u.dispose(),M.dispose(),m.dispose(),s.remove(p)}}}var Fh=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],tg=[0,1,3,2,1,0,2,3];function XS(s){let e=tg[s%tg.length],t=Fh[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function an(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function ng(s,e){let t=s.slice().sort((g,S)=>g.seat-S.seat),n=t.length,i=t.findIndex(g=>g.id===e);if(i>=0){let g=Math.floor(n/2);t=t.map((S,b)=>t[(i-g+b+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(it-r)),a=ft(o*.5,7.2,13.5),c=o-5.4,l=(it-r)/Math.max(n,1),h=t.findIndex(g=>g.id===e),u=g=>r/2+l*(g+.5),f=h>=0?-u(h):Math.PI,d=jt(f),m=t.map((g,S)=>{let b=jt(u(S)+f+Math.PI*0),v=XS(g.seat),C=Fh[v.type],E={id:g.id,seat:g.seat,angle:b,x:Math.sin(b)*o,z:Math.cos(b)*o,rotY:b+Math.PI,type:v.type,variant:v.variant,size:C.size},x=an(E,C.door[0],C.door[1]),w=an(E,C.approach[0],C.approach[1]);return E.door={dx:x.x,dz:x.z,ax:w.x,az:w.z},E}),M=o+6.5,p=d+7/M;return{n,R:o,Rp:a,Rr:c,step:l,gap:r,gateAngle:d,houses:m,grave:{x:Math.sin(p)*M,z:Math.cos(p)*M,angle:p,r:M}}}function Oh(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function Nd(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var ig=20,sg=new ht,qS=new ht,YS=new Zt,KS=new Zt,ZS=new Z,rg=new Z,Ud=new Z(0,1,0),og=new He(.16,.11,.08),JS=new He("#ffc46b").multiplyScalar(1.25),$S=new He(.05,.045,.06),ag=new He("#c9b48a");var kh={value:1},Bh=new Map;function jS(s){if(Bh.has(s))return Bh.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=kh,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,Bh.set(s,e),e}function QS(){for(let s of Bh.values())s.dispose()}var lg=new St,zs=new Z;function zd(s){let e=new Vt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new ht().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let c=new ht().multiplyMatrices(o,a.matrixWorld),l=Array.isArray(a.material)?a.material[0]:a.material,h=l.uuid+(r?"|c":"");t.has(h)||t.set(h,{mat:l,cast:r,parts:[]});let u=t.get(h);for(let f of i)u.parts.push({geo:a.geometry,m:new ht().multiplyMatrices(f,c),org:new Z().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let M of n.parts)i+=M.geo.attributes.position.count,r+=M.geo.index?M.geo.index.count:M.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),c=new Float32Array(i*2),l=new Float32Array(i*3),h=i>65535?new Uint32Array(r):new Uint16Array(r),u=0,f=0;for(let M of n.parts){let p=M.geo,g=p.attributes.position,S=p.attributes.normal,b=p.attributes.uv;lg.getNormalMatrix(M.m);for(let v=0;v<g.count;v++)zs.fromBufferAttribute(g,v).applyMatrix4(M.m),o[(u+v)*3]=zs.x,o[(u+v)*3+1]=zs.y,o[(u+v)*3+2]=zs.z,S&&(zs.fromBufferAttribute(S,v).applyMatrix3(lg).normalize(),a[(u+v)*3]=zs.x,a[(u+v)*3+1]=zs.y,a[(u+v)*3+2]=zs.z),b&&(c[(u+v)*2]=b.getX(v),c[(u+v)*2+1]=b.getY(v)),l[(u+v)*3]=M.org.x,l[(u+v)*3+1]=M.org.y,l[(u+v)*3+2]=M.org.z;if(p.index){let v=p.index.array;for(let C=0;C<v.length;C++)h[f+C]=v[C]+u;f+=v.length}else{for(let v=0;v<g.count;v++)h[f+v]=u+v;f+=g.count}u+=g.count}let d=new Nt;d.setAttribute("position",new Et(o,3)),d.setAttribute("normal",new Et(a,3)),d.setAttribute("uv",new Et(c,2)),d.setAttribute("aOrigin",new Et(l,3)),d.setIndex(new Et(h,1)),d.computeBoundingSphere();let m=new Tt(d,jS(n.mat));m.castShadow=n.cast,m.receiveShadow=!0,m.matrixAutoUpdate=!1,m.userData.merged=!0,e.add(m)}return e}function Fd(s,e,t,n,i=1){return new ht().compose(new Z(s,e,t),new Zt().setFromAxisAngle(Ud,n),new Z(i,i,i))}var kd=class{constructor(e){this.root=e,this.map=new Map}batchFor(e,t){let n=this.map.get(e.uuid);if(!n){let i=e.clone();i.name=e.name,i.userData={...e.userData,houseBatch:!0};let r=new To(64,16384,32768,i);if(r.sortObjects=!1,r.perObjectFrustumCulled=!0,r.frustumCulled=!1,r.name="houses-"+e.name,this.root.add(r),n={mesh:r,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0,out:null},!t){let o=new To(64,16384,32768,Eh(.05));o.sortObjects=!1,o.perObjectFrustumCulled=!0,o.frustumCulled=!1,o.visible=!!this.outlines,o.castShadow=!1,o.receiveShadow=!1,o.name=r.name+"-outline",this.root.add(o),n.out=o}this.map.set(e.uuid,n)}return n}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx),e.out&&e.out.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.out&&(e.outGeo=(e.outGeo||new Map).set(r,e.out.addGeometry(t))),e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI),e.out&&e.out.setInstanceCount(e.maxI));let n=e.mesh.addInstance(t);return e.out&&(e.outIds=e.outIds||new Map,e.outIds.set(n,e.out.addInstance(e.outGeo.get(t)))),n}setOutlines(e){this.outlines=e;for(let t of this.map.values())t.out&&(t.out.visible=e)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose(),e.out&&(e.out.parent&&e.out.parent.remove(e.out),e.out.dispose());this.map.clear()}},Bd=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Vt,this.parts=[],this.list=[];let o=Qn(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new ht().copy(o.matrixWorld).invert();for(let c of["body","door","banner"]){let l=o.getObjectByName(c);if(!l)continue;let h=new ht().multiplyMatrices(a,l.matrixWorld),u=new ht().copy(l.matrixWorld).invert();l.traverse(f=>{if(!f.isMesh)return;let d=new ht().multiplyMatrices(u,f.matrixWorld),m=f.material,M=null;m.name==="window"?M="window":m.name.startsWith("tint")?(M="owner",m=Go(m.name,"#ffffff")):t===1&&m.name==="fantasy-town"&&(m=Cd());let p={kind:c,nodeM:h,local:d,colorMode:M,nodePos:new Z().setFromMatrixPosition(h),nodeQ:new Zt().setFromRotationMatrix(h),ids:[]};try{let g=i.batchFor(m,M==="window");p.batch=g,p.batches=i,p.gid=i.geometryId(g,f.geometry),M==="window"?(g.mesh.castShadow=!1,g.mesh.receiveShadow=!1):(g.mesh.castShadow=!0,g.mesh.receiveShadow=!0)}catch{p.batch=null;let S=new vr(f.geometry,m,ig);S.count=0,S.castShadow=M!=="window",S.receiveShadow=M!=="window",S.frustumCulled=!1,M&&(S.instanceColor=new Un(new Float32Array(ig*3).fill(1),3)),this.group.add(S),p.im=S}this.parts.push(p)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t),e.batch.out&&e.batch.out.setVisibleAt(e.batch.outIds.get(e.ids[i]),i<t)}setM(e,t,n){e.batch?(e.batch.mesh.setMatrixAt(e.ids[t],n),e.batch.out&&e.batch.out.setMatrixAt(e.batch.outIds.get(e.ids[t]),n)):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=qS.compose(ZS.set(n.cx,0,n.cz),YS.setFromAxisAngle(Ud,n.crot),rg.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=KS.setFromAxisAngle(Ud,n.doorAngle).premultiply(r.nodeQ);o=sg.compose(r.nodePos,a,rg.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=sg.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}},Od=new Map,ew=new fn,Uh=new Z;function tw(s,e){let t=s+":"+e;if(Od.has(t))return Od.get(t);let n=Sn(s,e),i=null;return n&&(n.updateWorldMatrix(!0,!0),ew.setFromObject(n).getSize(Uh),i={r:Math.max(Uh.x,Uh.z)/2,h:Uh.y}),Od.set(t,i),i}var nw=/grass|patch|rock-flat|campfire/;function cg(s,e,t,n){let i=new Vt;i.name="village",s.add(i);let r=new Map,o=new kd(i),a=!1,c=new Map,l=[],h=[],u=null;function f(be,ce,Re,O,oe,X){if(nw.test(Re)||!d||Math.hypot(O,oe)>d.R+4)return;let se=tw(ce,Re);se&&(be.push({x:O,z:oe,r:se.r*X,h:se.h*X,name:Re}),u=null)}let d=null,m=null,M=null,p=null,g=!1,S=new Map,b=[],v=!0,C=!1,E=null,x=1,w=!1,U=new He("#ffc46b"),R=new He("#ff9a3c"),N=new He("#ffb85a");function z(be,ce){let Re=be+"-"+ce;return r.has(Re)||r.set(Re,new Bd(be,ce,i,o)),r.get(Re)}function k(){for(let ce of r.values())ce.list.length=0;let be=[...c.values()].sort((ce,Re)=>ce.seat-Re.seat);for(let ce of be)z(ce.type,ce.variant).list.push(ce);v=!0}function B(be,ce){let Re=d;d=be;let O=new Set;for(let oe of be.houses){O.add(oe.id);let X=c.get(oe.id);if(!X||X.type!==oe.type||X.variant!==oe.variant){let se=X;X={id:oe.id,seat:oe.seat,type:oe.type,variant:oe.variant,cx:oe.x,cz:oe.z,crot:oe.rotY,sx:oe.x,sz:oe.z,srot:oe.rotY,scale:ce?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:se&&se.ownerColor||ag.clone(),winColor:og.clone(),name:se?se.name:"",colorIdx:se?se.colorIdx:-1},c.set(oe.id,X)}X.seat=oe.seat,X.sx=X.cx,X.sz=X.cz,X.srot=X.crot,X.tx=oe.x,X.tz=oe.z,X.trot=oe.rotY,X.angle=oe.angle,X.info=Fh[oe.type],X.removing=!1,ce||(X.cx=oe.x,X.cz=oe.z,X.crot=oe.rotY,X.scale=1)}for(let[oe,X]of c)O.has(oe)||(ce?(X.removing=!0,X.sx=X.cx,X.sz=X.cz,X.srot=X.crot,X.tx=X.cx,X.tz=X.cz,X.trot=X.crot):c.delete(oe));x=ce?0:1,k(),!ce||!Re?G():(E=!0,w=!0)}function Y(be){let ce={x:be.cx,z:be.cz,rotY:be.crot},Re=be.info;return{door:an(ce,Re.door[0],Re.door[1]-.25),inside:an(ce,Re.door[0],Re.door[1]-1.2),approach:an(ce,Re.approach[0],Re.approach[1]+.2),peek:an(ce,Re.peek[0],Re.peek[1]),backWin:an(ce,Re.backWin[0],Re.backWin[2]),frontWin:an(ce,Re.frontWin[0],Re.frontWin[2]+.12),lantern:an(ce,Re.door[0]+.95,Re.front+.45),tomb:an(ce,Re.door[0]-2.6,Re.front+1.6),plaque:an(ce,0,Re.front+.3),rotY:be.crot,height:Re.height}}function G(){m&&(i.remove(m),Mt(m)),m=new Vt,m.name="dressing",i.add(m),E=!1;let be=Bn(2024+d.n),ce=new Map;l=[],u=null;let Re=(V,ee,$,Ie,ve=1,Ue="village",Ye=null)=>{f(l,Ue,V,ee,$,ve);let Ze=Ue+":"+V;ce.has(Ze)||ce.set(Ze,[]);let ze=Ye==null?n.heightAt(ee,$):Ye;ce.get(Ze).push(Fd(ee,ze,$,Ie,ve))};b=[],Re("campfire-pit",0,0,.3,1,"village",0);let O=[],oe=[.55,2.35,4.15];for(let V=0;V<3;V++){let ee=oe[V],$=3.35;Re(V===1?"log-small":"log",Math.sin(ee)*$,Math.cos(ee)*$,ee+Math.PI/2,1,"village",0),O.push({x:Math.sin(ee)*$,z:Math.cos(ee)*$,a:ee,small:V===1})}Re("campfire-stand",0,0,1.2,.85,"village",0);let X=d.houses,se=V=>{let ee=null,$=1/0;for(let Ie=0;Ie<X.length;Ie++){let ve=X[Ie].angle,Ue=X[(Ie+1)%X.length].angle-ve;for(;Ue<0;)Ue+=it;if(X.length>1&&Ue>Math.PI)continue;let Ye=ve+Ue/2,Ze=Math.abs(((Ye-V+Math.PI)%it+it)%it-Math.PI);Ze<$&&($=Ze,ee=Ye)}return ee==null?V:ee},re=new Set,Ce=V=>{let ee=[];for(let $=0;$<V;$++)ee.push(d.gateAngle+Math.PI+(($+.5)/V-.5)*(it-1.4));return ee};for(let V of Ce(Math.min(6,Math.max(1,X.length-1)))){let ee=se(V),$=ee.toFixed(3);if(re.has($))continue;re.add($);let Ie=d.R-3.4,ve=Math.sin(ee)*Ie,Ue=Math.cos(ee)*Ie;Re("lamp-post",ve,Ue,ee+Math.PI,1),b.push({x:ve,y:3.55,z:Ue})}let Se=["barrel","crate","hay-bale","crate-bottles","bucket","wheel","barrel","crate"],Le=new Set;Ce(8).forEach((V,ee)=>{let $=se(V+.11),Ie=$.toFixed(3);if(Le.has(Ie))return;Le.add(Ie);let ve=d.R+.4;Re(Se[ee],Math.sin($)*ve,Math.cos($)*ve,be()*it,1)});for(let V of c.values()){if(V.removing)continue;let ee={x:V.tx,z:V.tz,rotY:V.trot},$=an(ee,V.info.door[0]+.95,V.info.front+.45);Re("lantern",$.x,$.z,V.trot,.8,"village",0)}let I=V=>{for(let $ of X)if(Math.abs(((V-$.angle+Math.PI)%it+it)%it-Math.PI)<.2)return!1;return Math.abs(((V-d.gateAngle+Math.PI)%it+it)%it-Math.PI)>.3},P=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],Q=0;for(let V=0;V<40&&Q<4;V++){let ee=be()*it;if(!I(ee))continue;let $=d.Rp+2.2+be()*Math.max(.5,d.Rr-d.Rp-3.5),[Ie]=P[Q];Re(Ie,Math.sin(ee)*$,Math.cos(ee)*$,ee+Math.PI+(be()-.5)*.5,1),Q++}let ge=d.gateAngle,pe=(V,ee)=>({x:Math.sin(ge+ee/V)*V,z:Math.cos(ge+ee/V)*V}),we=pe(d.R+1,-2.4);Re("signpost",we.x,we.z,ge+.6,1),we=pe(d.R-1,2.6),Re("banner-pole",we.x,we.z,ge+Math.PI,1.2),we=pe(d.R+4,-2.6),Re("lantern-post-cabin",we.x,we.z,ge+Math.PI,1),b.push({x:we.x,y:2.9,z:we.z,small:!0});let Ae=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],xe=e.trees,fe=d.R+8.5;for(let V=0;V<xe;V++){let ee=be()*it,$=Math.pow(be(),1.35),Ie=fe+$*46,ve=Math.sin(ee)*Ie,Ue=Math.cos(ee)*Ie;if(Math.abs(((ee-ge+Math.PI)%it+it)%it-Math.PI)*Ie<4.5&&Ie<fe+30||d.grave&&Math.hypot(ve-d.grave.x,Ue-d.grave.z)<8.5)continue;let Ze=Ae[Math.floor(be()*Ae.length)];Re(Ze,ve,Ue,be()*it,.85+be()*.55+$*.3)}for(let V=0;V<e.scatter;V++){let ee=be()*it,$=d.R+4.6+be()*6,Ie=Math.sin(ee)*$,ve=Math.cos(ee)*$;if(Math.abs(((ee-ge+Math.PI)%it+it)%it-Math.PI)*$<3.5||d.grave&&Math.hypot(Ie-d.grave.x,ve-d.grave.z)<7)continue;let Ye=be();Re(Ye<.4?"grass-large":Ye<.7?"grass":"bush",Ie,ve,be()*it,.8+be()*.6)}for(let V=0;V<14;V++){let ee=be()*it,$=d.Rp+.8+be()*1.5;Re(be()<.7?"grass":"grass-large",Math.sin(ee)*$,Math.cos(ee)*$,be()*it,.8+be()*.4)}for(let V=0;V<3;V++){let ee=be()*it,$=d.R+24+be()*40;Re(be()<.5?"rock-large":"rock-wide",Math.sin(ee)*$,Math.cos(ee)*$,be()*it,.8+be()*1)}let Ee=[];for(let[V,ee]of ce){let[$,Ie]=V.split(":"),ve=Sn($,Ie);ve&&Ee.push({tpl:ve,mats:ee,cast:!/grass|patch|rock-flat|bush/.test(Ie)})}m.add(zd(Ee)),l.push({x:0,z:0,r:1.5,h:3.3,name:"fire"}),w&&(kh.value=0,A=0,w=!1),q(),H=O,n.paint(d,y&&y.snow?{snow:!0}:null),Fe(),_++,v=!0}let H=[],_=0,y=null,L=null,A=1,D=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(be=>new He(be));function q(){if(p&&(i.remove(p),Mt(p),p=null),!Ln("props/graveyard.glb")||!d||!d.grave)return;g=!0,p=new Vt,p.name="graveyard";let be=d.grave,ce=be.angle+Math.PI,Re=(Ce,Se)=>an({x:be.x,z:be.z,rotY:ce},Ce,Se),O=new Map,oe=(Ce,Se,Le,I=0,P=1)=>{let Q=Re(Se,Le);O.has(Ce)||O.set(Ce,[]),O.get(Ce).push(Fd(Q.x,n.heightAt(Q.x,Q.z),Q.z,ce+I,P))},X=Bn(66),se=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let Ce=0;Ce<6;Ce++)oe(se[Ce],-3.2+Ce*1.3+(X()-.5)*.3,-2.6+(X()-.5)*.4,(X()-.5)*.3,.85);oe("crypt",3.6,-3.4,-.3,1),oe("trunk-dead",-4.6,.6,1.1,1),oe("pine-crooked",-5.2,-3.6,.4,1),oe("candles",1.8,-2.4,0,1),oe("pumpkin-carved",-2.2,1.9,.5,.8),oe("urn",2.6,.4,0,.8),oe("iron-fence-gate",0,3.2,0,1);for(let Ce of[-2.5,-5,2.5,5])oe("iron-fence",Ce,3.2,0,1);let re=[];for(let[Ce,Se]of O){let Le=Sn("graveyard",Ce);Le&&re.push({tpl:Le,mats:Se,cast:!0})}p.add(zd(re)),i.add(p);for(let[Ce,Se]of S)me(Ce,Se)}let W=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function J(be,ce,Re,O){let oe=S.has(be);if(ce&&!oe){S.set(be,{obj:null,mound:null,colorIdx:Re,born:performance.now()}),me(be,S.get(be));let X=S.get(be);O&&X.obj&&(X.obj.userData.drop=0,X.obj.position.y=3.2)}else if(!ce&&oe){let X=S.get(be);X.obj&&X.obj.parent.remove(X.obj),X.mound&&X.mound.parent.remove(X.mound),S.delete(be)}}function me(be,ce){var re,Ce,Se;ce.obj&&(ce.obj.parent&&ce.obj.parent.remove(ce.obj),ce.obj=null),ce.mound&&(ce.mound.parent&&ce.mound.parent.remove(ce.mound),ce.mound=null);let Re=c.get(be);if(!Re||!Ln("props/graveyard.glb"))return;let O=Sn("graveyard",W[Re.seat%W.length]);if(!O)return;let oe={x:(re=Re.tx)!=null?re:Re.cx,z:(Ce=Re.tz)!=null?Ce:Re.cz,rotY:(Se=Re.trot)!=null?Se:Re.crot},X=an(oe,Re.info.door[0]-2.75,Re.info.front+1.7),se=O.clone();if(se.position.set(X.x,0,X.z),se.rotation.set(0,oe.rotY+.15,0),se.scale.setScalar(.62),se.traverse(Le=>{Le.isMesh&&(Le.castShadow=!0,Le.receiveShadow=!0)}),se.userData.pop=0,i.add(se),ce.obj=se,d&&d.grave){let Le=[...S.keys()].indexOf(be),I=Sn("graveyard","grave-dirt");if(I){let P=d.grave,Q=P.angle+Math.PI,ge=-3.6+Le%5*1.9,pe=.3+Math.floor(Le/5)*2,we=an({x:P.x,z:P.z,rotY:Q},ge,pe),Ae=I.clone();Ae.position.set(we.x,n.heightAt(we.x,we.z),we.z),Ae.rotation.y=Q,Ae.scale.setScalar(.7),i.add(Ae),ce.mound=Ae}}}function ie(be,ce,Re){let O=c.get(be);O&&(O.colorIdx!==ce&&(O.colorIdx=ce,ce>=0?O.ownerColor.set(Mn[ce]):O.ownerColor.copy(ag),v=!0),O.name=Re||"")}let le=new He;function Pe(be,ce,Re){let O=!1;if(x<1){x=Math.min(1,x+be/1.3);let X=Ns(x);for(let[se,re]of c){re.cx=Ld(re.sx,re.tx,X),re.cz=Ld(re.sz,re.tz,X);let Ce=re.trot-re.srot;for(;Ce>Math.PI;)Ce-=it;for(;Ce<-Math.PI;)Ce+=it;re.crot=re.srot+Ce*X,re.removing?re.scale=Math.max(.01,1-X):re.scale=Math.min(1,re.scale+be*1.2)}if(x>=1){for(let[se,re]of c)re.removing&&c.delete(se);k(),E&&G()}O=!0}else for(let X of c.values())X.scale<1&&(X.scale=Math.min(1,X.scale+be*1.5),O=!0);A<1&&(A=Math.min(1,A+be/.9),kh.value=A);for(let X of S.values()){let se=X.obj;if(se&&se.userData.drop!=null){let re=se.userData.drop+=be/.55;if(re>=1)se.position.y=0,delete se.userData.drop,O=!0;else{let Ce=re<.7?3.2*(1-re/.7*(re/.7)):Math.sin((re-.7)/.3*Math.PI)*.18;se.position.y=Math.max(0,Ce)}}}let oe=Re.lamps;for(let X of c.values()){X.doorHold>0&&(X.doorHold-=be,X.doorHold<=0&&(X.doorTarget=0));let se=X.doorOpen;X.doorOpen+=(X.doorTarget-X.doorOpen)*un(X.doorTarget>X.doorOpen?9:5,be),Math.abs(X.doorOpen-se)>5e-4&&(O=!0),X.doorAngle=X.doorOpen*1.35*X.info.openSign;let re=X.dark||X.dead||X.flickOut?0:Math.max(X.litTarget,0);X.lit+=(re-X.lit)*un(1.6,be);let Ce=ft(X.lit*(.25+.75*oe),0,1);if(X.flickT>0){X.flickT-=be;let Le=X.flickDur-X.flickT,I=Math.floor(Le/.075),P=Math.abs(Math.sin(I*12.9898+X.seat*78.233)*43758.5453)%1,Q=1-ft(Le/X.flickDur,0,1);Ce=P>.12+.75*(1-Q)?.45+.55*Q:.03,X.flickT<=0&&(X.lit=0,Ce=0,X.flickOut=!0),C=!0}le.copy(og).lerp($S,ft(Re.night*1.2,0,1)).lerp(JS,Ce);let Se=X.winColor;Math.abs(le.r-Se.r)+Math.abs(le.g-Se.g)+Math.abs(le.b-Se.b)>.006&&(Se.copy(le),C=!0)}if(O&&(v=!0),v){for(let X of r.values())X.write();return v=!1,C=!1,!0}if(C){for(let X of r.values())X.writeColors();C=!1}return!1}function Ge(be,ce,Re,O){let oe=be.lamps;if(oe<.02)return;let X=y&&y.dress==="fair";for(let se=0;se<b.length;se++){let re=b[se],Ce=.92+.08*Math.sin(ce*9+se*1.7),Se=X?D[se%D.length]:U;Re.add(re.x,re.y,re.z,re.small?1.4:2,Se,.85*oe*Ce),O.add(re.x,.03,re.z,re.small?6:8.5,X?Se:R,.3*oe)}if(X&&he)for(let se=0;se<he.length;se++){let re=he[se];Re.add(re.x,re.y,re.z,.7,D[se%D.length],.8*oe*(.8+.2*Math.sin(ce*3+se)))}for(let se of c.values()){if(se.scale<.9)continue;if(!se.gp||se.gp.x!==se.cx||se.gp.z!==se.cz||se.gp.r!==se.crot){let Le={x:se.cx,z:se.cz,rotY:se.crot};se.gp={x:se.cx,z:se.cz,r:se.crot,ln:an(Le,se.info.door[0]+.95,se.info.front+.45),w:an(Le,se.info.frontWin[0],se.info.frontWin[2]+.25),wp:an(Le,se.info.frontWin[0],se.info.frontWin[2]+1.6)}}let re=se.gp.ln,Ce=se.dead?.25:1;Re.add(re.x,.62,re.z,.9,U,.9*oe*Ce),O.add(re.x,.03,re.z,3.6,R,.26*oe*Ce);let Se=se.lit*oe*(.86+.08*Math.sin(ce*6.3+se.seat*2.1)+.06*Math.sin(ce*13.7+se.seat));if(Se>.02){let Le=se.gp.w;Re.add(Le.x,1.35,Le.z,1.7,N,.5*Se);let I=se.gp.wp;O.add(I.x,.03,I.z,4.2,N,.22*Se)}}}let he=null,ke=!1;function ae(be){let ce=y;y=be&&be.id?be:null,U.set(y&&y.lamp?y.lamp:"#ffc46b"),R.set(y&&y.lamp?y.lamp:"#ff9a3c");let Re=!!(ce&&ce.snow)!=!!(y&&y.snow);d&&Re&&n.paint(d,y&&y.snow?{snow:!0}:null),j(!!(y&&y.snow)),Fe()}function j(be){if(be===ke)return;ke=be;let ce=Re=>{!Re||!Re.isMeshLambertMaterial||!Re.map||Re.name==="villager"||(be?(Re.userData.preFrost||(Re.userData.preFrost=Re.emissive.clone()),Re.emissive.set("#a9bad0").multiplyScalar(.22)):Re.userData.preFrost&&Re.emissive.copy(Re.userData.preFrost))};s.traverse(Re=>{Re.material&&(Array.isArray(Re.material)?Re.material:[Re.material]).forEach(ce)})}function Fe(){if(L&&(i.remove(L),L.traverse(oe=>{(oe.userData.merged||oe.userData.themeGeo)&&oe.geometry.dispose(),oe.userData.themeMat&&oe.material.dispose()}),L=null),he=null,h=[],u=null,!y||!y.dress||!d)return;L=new Vt,L.name="theme";let be=Bn(99+d.n),ce=new Map,Re=(oe,X,se,re,Ce=1)=>{f(h,"village",oe,X,se,Ce),ce.has(oe)||ce.set(oe,[]),ce.get(oe).push(Fd(X,n.heightAt(X,se),se,re,Ce))};if(y.dress==="harvest"){let oe=[...c.values()].filter(Ce=>!Ce.removing),X=Math.max(1,Math.ceil(oe.length/8));for(let Ce=0;Ce<oe.length;Ce+=X){let Se=oe[Ce],Le={x:Se.tx,z:Se.tz,rotY:Se.trot},I=an(Le,Se.info.door[0]-.9,Se.info.front+.7);if(Re("pumpkin",I.x,I.z,be()*it,.7+be()*.3),be()<.5){let P=an(Le,-Se.info.hx+.5,Se.info.front+.9);Re("hay-bale",P.x,P.z,Se.trot+.3,.9)}}for(let Ce=0;Ce<6;Ce++){let Se=Ce/6*it+.4,Le=d.Rp+1.2;Re(Ce%2?"pumpkin":"hay-bale",Math.sin(Se)*Le,Math.cos(Se)*Le,Se,Ce%2?.9:1)}let se=d.gateAngle+.5,re=d.Rp+2.6;Re("cart-hay",Math.sin(se)*re,Math.cos(se)*re,se+1.2,1)}else if(y.dress==="fair"){let oe=b.filter(re=>!re.small),X=[],se=[];he=[];for(let re=0;re<oe.length;re++){let Ce=oe[re],Se=oe[(re+1)%oe.length];if(Math.hypot(Ce.x-Se.x,Ce.z-Se.z)>14)continue;let Le=9;for(let I=0;I<Le;I++){let P=(I+.15)/Le,Q=(I+.85)/Le,ge=(I+.5)/Le,pe=V=>3.25-Math.sin(V*Math.PI)*.9,we=V=>[Ce.x+(Se.x-Ce.x)*V,pe(V),Ce.z+(Se.z-Ce.z)*V],Ae=we(P),xe=we(Q),fe=we(ge);X.push(...Ae,...xe,fe[0],fe[1]-.45,fe[2]);let Ee=D[(re+I)%D.length];for(let V=0;V<3;V++)se.push(Ee.r,Ee.g,Ee.b);I%3===1&&he.push({x:fe[0],y:fe[1]+.05,z:fe[2]})}}if(X.length){let re=new Nt;re.setAttribute("position",new Ft(X,3)),re.setAttribute("color",new Ft(se,3)),re.computeVertexNormals();let Ce=new mn({vertexColors:!0,side:on}),Se=new Tt(re,Ce);Se.userData.themeGeo=!0,Se.userData.themeMat=!0,L.add(Se)}for(let re=0;re<5;re++){let Ce=re/5*it+.2,Se=d.Rp+1.6;Re("banner-pole",Math.sin(Ce)*Se,Math.cos(Ce)*Se,Ce+Math.PI,1.1)}}let O=[];for(let[oe,X]of ce){let se=Sn("village",oe);se&&O.push({tpl:se,mats:X,cast:!0})}O.length&&L.add(zd(O)),i.add(L),ke&&(ke=!1,j(!0))}function Ke(be,ce){let Re=c.get(be);Re&&(Re.litTarget=ce)}function Ne(be,ce=1.2){let Re=c.get(be);Re&&(Re.doorTarget=1,Re.doorHold=ce)}function Ve(be){let ce=null,Re=1/0,O=be.origin,oe=be.direction;for(let X of c.values()){if(X.removing)continue;let se=Math.cos(-X.crot),re=Math.sin(-X.crot),Ce=O.x-X.cx,Se=O.z-X.cz,Le=Ce*se+Se*re,I=-Ce*re+Se*se,P=oe.x*se+oe.z*re,Q=-oe.x*re+oe.z*se,ge=[-X.info.hx-.3,0,-X.info.hz-.3],pe=[X.info.hx+.3,X.info.height,X.info.hz+1.2],we=[Le,O.y,I],Ae=[P,oe.y,Q],xe=-1/0,fe=1/0;for(let Ee=0;Ee<3;Ee++){if(Math.abs(Ae[Ee])<1e-6){if(we[Ee]<ge[Ee]||we[Ee]>pe[Ee]){xe=1/0;break}continue}let V=(ge[Ee]-we[Ee])/Ae[Ee],ee=(pe[Ee]-we[Ee])/Ae[Ee];if(V>ee){let $=V;V=ee,ee=$}xe=Math.max(xe,V),fe=Math.min(fe,ee)}xe<=fe&&fe>0&&xe<Re&&(Re=xe,ce=X)}return ce}function mt(){d&&q()}function Mt(be){be.traverse(ce=>{ce.isInstancedMesh?ce.dispose():ce.userData.merged&&ce.geometry.dispose()})}return{root:i,houses:c,get layout(){return d},get benchSlots(){return H},get busy(){return x<1},get version(){return _},lampList:()=>b,setOutlines(be){a=be,o.setOutlines(be)},get blockers(){return u||(u=l.concat(h)),u},setLayout:B,setOwner:ie,setLit:Ke,setDead:J,setTheme:ae,openDoor:Ne,anchors:Y,update:Pe,emitGlows:Ge,pickHouse:Ve,onExtraLoaded:mt,flicker(be,ce=1.5){let Re=c.get(be);Re&&(Re.flickT=ce,Re.flickDur=ce)},house:be=>c.get(be),tombOf:be=>S.get(be),dispose(){j(!1);for(let be of r.values())be.dispose();o.dispose(),m&&Mt(m),p&&Mt(p),L&&L.traverse(be=>{(be.userData.merged||be.userData.themeGeo)&&be.geometry.dispose(),be.userData.themeMat&&be.material.dispose()}),QS(),kh.value=1,s.remove(i)}}}var iw=`
attribute vec4 aPos;     // xyz, boyut
attribute vec4 aCol;     // rgb, alfa
attribute float aSpin;   // d\xF6n\xFC\u015F / faz
uniform float uTime;
uniform float uGround;   // 1 = zemine yat\u0131k, 0 = kameraya d\xF6n\xFCk
varying vec2 vUv;
varying vec4 vCol;
varying float vPhase;
void main() {
  vUv = uv;
  vCol = aCol;
  vPhase = aSpin;
  vec3 c = aPos.xyz;
  float s = aPos.w;
  vec2 q = position.xy;
  if (uGround > 0.5) {
    float cs = cos(aSpin), sn = sin(aSpin);
    q = vec2(q.x * cs - q.y * sn, q.x * sn + q.y * cs);
    vec4 wp = modelMatrix * vec4(c.x + q.x * s, c.y, c.z - q.y * s, 1.0);
    gl_Position = projectionMatrix * viewMatrix * wp;
  } else {
    vec4 mv = modelViewMatrix * vec4(c, 1.0);
    mv.xy += q * s;
    gl_Position = projectionMatrix * mv;
  }
}`,sw={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function rw(s,e){return new rn({vertexShader:iw,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${sw[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var Gi=class{constructor(e,t,n=Yn){this.max=t;let i=new _i(1,1),r=new Da;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new Un(new Float32Array(t*4),4),this.col=new Un(new Float32Array(t*4),4),this.spin=new Un(new Float32Array(t),1),this.pos.setUsage(qa),this.col.setUsage(qa),this.spin.setUsage(qa),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=rw(e,n),this.mesh=new Tt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let c=this.n++,l=this.pos.array,h=this.col.array;l[c*4]=e,l[c*4+1]=t,l[c*4+2]=n,l[c*4+3]=i,h[c*4]=r.r,h[c*4+1]=r.g,h[c*4+2]=r.b,h[c*4+3]=o,this.spin.array[c]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},hg=`
uniform float uTime;
varying vec2 vUv;
void main() {
  vUv = uv;
  // silindirik billboard: X ekseni kameraya dik
  vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 wc = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float sx = length(modelMatrix[0].xyz), sy = length(modelMatrix[1].xyz);
  vec3 wp = wc + normalize(vec3(camRight.x, 0.0, camRight.z)) * position.x * sx + vec3(0.0, 1.0, 0.0) * position.y * sy;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,ug=`
uniform float uTime, uSeed, uPower;
varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
void main() {
  vec2 uv = vUv;
  float t = uTime * 1.6 + uSeed;
  float y = uv.y;
  float nz = n(vec2(uv.x * 4.0 + uSeed, y * 3.0 - t * 2.2)) * 0.6 + n(vec2(uv.x * 9.0, y * 7.0 - t * 3.7)) * 0.4;
  float x = (uv.x - 0.5) * 2.0 + (nz - 0.5) * 0.55 * y;
  float width = mix(0.95, 0.05, pow(y, 0.85));
  float shape = 1.0 - smoothstep(width * 0.55, width, abs(x));
  shape *= smoothstep(0.0, 0.08, y) * (1.0 - smoothstep(0.55, 1.0, y + (nz - 0.5) * 0.3));
  float core = (1.0 - smoothstep(0.0, width * 0.55, abs(x))) * (1.0 - smoothstep(0.1, 0.55, y));
  vec3 c = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.62, 0.18), shape);
  c = mix(c, vec3(1.0, 0.93, 0.62), core);
  float a = shape * uPower;
  if (a < 0.01) discard;
  gl_FragColor = vec4(c * (0.9 + core * 0.6), a);
  #include <colorspace_fragment>
}`,ow=`
attribute vec4 aSeed;
uniform float uTime, uPx, uPower;
varying float vA;
void main() {
  float life = 1.6 + aSeed.w;
  float t = mod(uTime * (0.7 + aSeed.z * 0.6) + aSeed.x * 10.0, life) / life;
  vec3 p = position;
  p.y += t * (2.8 + aSeed.y * 2.2);
  p.x += sin(uTime * 2.0 + aSeed.x * 20.0) * 0.25 * t + (aSeed.y - 0.5) * t * 1.2;
  p.z += cos(uTime * 1.7 + aSeed.y * 20.0) * 0.25 * t + (aSeed.x - 0.5) * t * 1.2;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = (1.0 - t) * smoothstep(0.0, 0.08, t) * uPower;
  gl_PointSize = uPx * (2.0 + 2.5 * aSeed.z) * (10.0 / max(-mv.z, 4.0)) * 3.0;
}`,aw=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function fg(s){let e=new Vt;e.name="campfire-fx";let t=[],n=new _i(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,m,,M,p]=i[f],g=new rn({vertexShader:hg,fragmentShader:ug,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:on,fog:!1}),S=new Tt(n,g);S.position.set(d,.32,m),S.scale.set(M,p,1),S.renderOrder=6,S.frustumCulled=!1,e.add(S),t.push(S)}let r=s.sparks,o=Bn(5),a=new Float32Array(r*3),c=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,c[f*4]=o(),c[f*4+1]=o(),c[f*4+2]=o(),c[f*4+3]=o()*1.2;let l=new Nt;l.setAttribute("position",new Et(a,3)),l.setAttribute("aSeed",new Et(c,4));let h=new rn({vertexShader:ow,fragmentShader:aw,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),u=new vi(l,h);return u.frustumCulled=!1,u.renderOrder=7,e.add(u),{group:e,update(f,d,m){for(let M of t)M.material.uniforms.uTime.value=f,M.material.uniforms.uPower.value=m;h.uniforms.uTime.value=f,h.uniforms.uPx.value=d,h.uniforms.uPower.value=Math.min(1,m*1.2)},dispose(){n.dispose(),l.dispose(),h.dispose();for(let f of t)f.material.dispose()}}}var lw=`
attribute vec4 aSeed;
uniform float uTime, uPx, uAlpha;
varying float vA;
void main() {
  vec3 p = position;
  float t = uTime * (0.25 + aSeed.z * 0.3) + aSeed.x * 30.0;
  p.x += sin(t * 1.3) * 1.4 + sin(t * 0.37) * 2.0;
  p.z += cos(t * 1.1) * 1.4 + cos(t * 0.29) * 2.0;
  p.y += sin(t * 2.1) * 0.4;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float blink = smoothstep(0.2, 1.0, sin(uTime * (1.5 + aSeed.y * 2.0) + aSeed.w * 6.28));
  vA = uAlpha * blink;
  gl_PointSize = uPx * 24.0 / max(-mv.z, 6.0) * 3.0;
}`,cw=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function dg(s){let e=Bn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Nt;i.setAttribute("position",new Et(t,3)),i.setAttribute("aSeed",new Et(n,4));let r=new rn({vertexShader:lw,fragmentShader:cw,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new vi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,c){let l=Bn(123);for(let h=0;h<s;h++){let u=l()*it,f=a+l()*(c-a);t[h*3]=Math.cos(u)*f,t[h*3+1]=.6+l()*2.2,t[h*3+2]=Math.sin(u)*f}i.getAttribute("position").needsUpdate=!0},update(a,c,l){r.uniforms.uTime.value=a,r.uniforms.uPx.value=c,r.uniforms.uAlpha.value=l,o.visible=l>.01},dispose(){i.dispose(),r.dispose()}}}var Gh=class{constructor(e=96){this.max=e,this.normal=new Gi("puff",e,bi),this.add=new Gi("glow",e,Yn),this.list=[],this.tmp=new He,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new He(r):new He(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),c=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let l=0;l<o;l++){let h=Math.random()*it,u=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,m=.25+Math.random()*.3,M=a;e==="poof"&&(m=.35+Math.random()*.35),e==="dust"&&(u=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,m=.14+Math.random()*.1),e==="bubble"&&(u=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),m=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(u=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,m=.45+Math.random()*.4),e==="confetti"&&(u=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,m=.1+Math.random()*.08,M=new He(c[l%c.length])),this.list.push({kind:e,x:t+Math.cos(h)*.2,y:n+Math.random()*.4,z:i+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:f,vz:Math.sin(h)*u,t:0,life:d,size:m,c:M})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},Hh=null;function pg(s=.35,e=.6,t=1){Hh||(Hh=new _i(1,1),Hh.translate(0,.5,0));let n=new rn({vertexShader:hg,fragmentShader:ug,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:on,fog:!1}),i=new Tt(Hh,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var hw=`
attribute vec4 aSeed;
uniform float uTime, uPx, uKind, uAlpha;
uniform vec3 uCenter;
varying float vA;
varying float vKind;
varying float vRot;
void main() {
  vec3 p = position;
  float box = 46.0;
  float fall = uKind < 0.5 ? 1.1 + aSeed.x * 0.9 : 1.5 + aSeed.x * 1.2;
  float y = mod(p.y - uTime * fall, 18.0);
  float sway = uKind < 0.5 ? 0.6 : 1.6;
  vec3 w = vec3(p.x + sin(uTime * (0.6 + aSeed.y) + aSeed.z * 9.0) * sway, y, p.z + cos(uTime * (0.5 + aSeed.x) + aSeed.w * 7.0) * sway);
  w.xz = uCenter.xz + mod(w.xz - uCenter.xz + box * 0.5, box) - box * 0.5;
  vec4 mv = modelViewMatrix * vec4(w, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = uKind < 0.5 ? (1.6 + aSeed.w * 2.2) : (3.0 + aSeed.w * 2.5);
  gl_PointSize = uPx * size * 18.0 / max(-mv.z, 4.0);
  vA = uAlpha * smoothstep(0.0, 2.0, y) * smoothstep(18.0, 14.0, y);
  vKind = uKind;
  vRot = uTime * (1.0 + aSeed.y * 2.0) + aSeed.z * 6.28;
}`,uw=`
varying float vA;
varying float vKind;
varying float vRot;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a;
  vec3 col;
  if (vKind < 0.5) { a = smoothstep(0.5, 0.15, length(c)); col = vec3(0.95, 0.97, 1.0); }
  else {
    float cs = cos(vRot), sn = sin(vRot);
    vec2 r = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs);
    a = smoothstep(0.5, 0.4, length(r * vec2(1.0, 2.2)));
    col = mix(vec3(0.85, 0.42, 0.12), vec3(0.95, 0.72, 0.2), step(0.0, r.x));
  }
  if (a * vA < 0.01) discard;
  gl_FragColor = vec4(col, a * vA);
  #include <colorspace_fragment>
}`;function mg(s){let t=Bn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let m=0;m<900;m++)n[m*3]=(t()-.5)*46,n[m*3+1]=t()*18,n[m*3+2]=(t()-.5)*46,i[m*4]=t(),i[m*4+1]=t(),i[m*4+2]=t(),i[m*4+3]=t();let r=new Nt;r.setAttribute("position",new Et(n,3)),r.setAttribute("aSeed",new Et(i,4));let o=new rn({vertexShader:hw,fragmentShader:uw,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new Z}}}),a=new vi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let c=new Gi("puff",40,bi);c.mesh.renderOrder=4,s.add(c.mesh);let l=[];for(let m=0;m<40;m++)l.push({a:t()*it,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let h="none",u=0,f=0,d=new He("#c9cfd8");return{set(m){h=m||"none"},get kind(){return h},update(m,M,p,g,S,b,v){if(u+=((h==="snow"||h==="leaves"?1:0)-u)*Math.min(1,m*.8),a.visible=u>.01&&S>0,a.visible){r.setDrawRange(0,Math.min(900,S));let x=o.uniforms;x.uTime.value=M,x.uPx.value=p,x.uKind.value=h==="leaves"?1:0,x.uAlpha.value=u*(h==="snow"?.9:1),x.uCenter.value.copy(g)}if(f+=((h==="fog"?1:0)-f)*Math.min(1,m*.5),c.begin(),f>.01){d.set("#cfd6de"),b&&d.lerp(b,.5),d.multiplyScalar(1-v*.6);let x=Math.min(40,Math.max(8,Math.round(S/20)));for(let w=0;w<x;w++){let U=l[w],R=U.a+M*U.sp;c.add(Math.sin(R)*U.r,U.y,Math.cos(R)*U.r,U.s,d,.16*f)}}c.end(M)},dispose(){r.dispose(),o.dispose(),c.dispose(),s.remove(a),s.remove(c.mesh)}}}var sl=1.12,fw=1.75,gg=2.8,dw={walk:gg,brisk:3.75,sneak:2.4,sprint:5.4,stroll:2.1};var $E=new Z,Hd=null,wi=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Vt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*sl,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ft(e.skin|0,0,11),n=Qn(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=Ah(n.scene),r=Go("cloth",Mn[ft(e.color|0,0,19)]),o=null;i.traverse(l=>{if(l.isMesh){if(l.material.name==="cloth"&&r)l.material=r;else if(l.isSkinnedMesh&&l.userData.clothMerged&&l.material.name==="villager"){let h=Ad(Mn[ft(e.color|0,0,19)]);h&&(l.material=h)}l.castShadow=!0,l.receiveShadow=!1,l.isSkinnedMesh?(o?l.skeleton!==o&&l.skeleton.bones.length===o.bones.length&&(l.skeleton.dispose(),l.skeleton=o):o=l.skeleton,l.boundingSphere=new en(new Z(0,.3,-.15),.85),l.frustumCulled=!0):l.frustumCulled=!1}});let a=i.getObjectByName("head"),c=nl[e.hat|0];if(a&&c&&Ln("hats/hats.glb")){let l=Qn("hats/hats.glb").scene.getObjectByName(c);if(l){let h=l.clone();h.position.set(0,K0[t]||0,0),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),a.add(h)}}i.scale.multiplyScalar(sl),this.world.toon&&ja(i,.012),this.model=i,this.root.add(i),this.mixer=new Is(i),this.clips=Rd(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.headAnimQ=null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*sl}buildGhost(e){let t=Qn("characters/ghost.glb"),n=t.scene.clone(!0),i=Go("tint-ghost",Mn[ft(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(Mn[e.color|0]).multiplyScalar(.25));let r=Ed("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(sl*.95),this.model=n,this.root.add(n),this.mixer=new Is(n),Hd||(Hd=t.animations),this.clips=Hd,this.headY=1.95*sl}action(e){if(this.actions[e])return this.actions[e];let t=Mi.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(Va,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(Va,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk",n=0){this.path=e.slice(),this.mode=t,this.walkSpeed=n||0}setVisible(e){this.visible=e,this.root.visible=e&&(this.camFade==null||this.camFade>.001)}setFade(e){if(this.camFade=e,!!this.model){if(e>=.999){this.fadeMats&&(this.model.traverse(t=>{t.isMesh&&t.userData.origMat&&(t.material=t.userData.origMat,t.userData.origMat=null)}),this.fadeMats=null),this.root.visible=this.visible;return}this.fadeMats||(this.fadeMats=[],this.model.traverse(t=>{if(!t.isMesh||Array.isArray(t.material))return;let n=t.material.clone();n.transparent=!0,n.depthWrite=!0,t.userData.origMat=t.material,t.material=n,this.fadeMats.push(n)}));for(let t of this.fadeMats)t.opacity=e;this.root.visible=this.visible&&e>.001}}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let h=Math.atan2(l.x,l.z);this.yaw+=jt(h-this.yaw)*un(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>3.7?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],h=l.x-this.pos.x,u=l.z-this.pos.z,f=Math.hypot(h,u),d=this.path.length===1;if(this.bestD==null||f<this.bestD-.05?(this.bestD=f,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,f<(d?.06:.45)||this.stuckT>.7&&(!d||f<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=this.walkSpeed||dw[this.mode]||gg,d&&!(this.retargetAt!=null&&this.world.time-this.retargetAt<.5)&&(n=Math.min(n,.9+f*3.2));let m=h,M=u;if(!d&&f<1.2){let R=this.path[1],N=1-f/1.2;m=h*(1-N)+(R.x-this.pos.x)*N,M=u*(1-N)+(R.z-this.pos.z)*N}let p=Math.atan2(m,M),g=jt(p-this.yaw);this.yaw+=g*un(12,e),n*=ft(1.25-Math.abs(g)/1.6,.2,1);let S=Math.min(f,this.speed*e),b=Math.sin(this.yaw),v=Math.cos(this.yaw),C=h/f,E=u/f,x=b*.55+C*.45,w=v*.55+E*.45,U=Math.hypot(x,w)||1;this.pos.x+=x/U*S,this.pos.z+=w/U*S}}else this.faceYaw!=null&&(this.yaw+=jt(this.faceYaw-this.yaw)*un(4,e));let i=!this.path&&!(this.drive&&this.drive.speed>.05);this.speed+=(n-this.speed)*un(n>this.speed?6:i?28:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let r=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(r){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=r?ft(this.speed/fw,.5,1.9)*(this.base==="sneak"?1.1:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=r?ft(this.speed/3.6,.6,2.2):1),r&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!r&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let o=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let h=l.t>=l.dur;o=Math.min(1,l.t/l.fade)*(h?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),h&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),o=0)}let a=0;for(let l in this.weights){let h=this.targets[l]||0,u=this.weights[l],f=this.fadeRate*e;u=u<h?Math.min(h,u+f):Math.max(h,u-f),this.weights[l]=u,a+=u}let c=a>1e-4?(1-o)/a:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let h=this.actions[l];h?h.setEffectiveWeight(this.weights[l]*c):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(o),this.animEvery===-1?this.animAcc=0:this.animAcc=Math.min(.25,(this.animAcc||0)+e),this.animTick=this.animEvery===-1?1:((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0?(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0,this.headBone&&(this.headAnimQ||(this.headAnimQ=new Zt),this.headAnimQ.copy(this.headBone.quaternion))):this.headBone&&this.headAnimQ&&this.headBone.quaternion.copy(this.headAnimQ),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let h=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ft(jt(h-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*un(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}r&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk",n.speed),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){if(this.fadeMats){for(let e of this.fadeMats)e.dispose();this.fadeMats=null}this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var rl=new Z(0,0,-620);function wn(s,e,t,n,i,r,o=0,a=1){let c=Sn(e,t);if(!c)return null;let l=c.clone();return l.position.set(n,i,r),l.rotation.set(0,o*Math.PI/180,0),l.scale.setScalar(a),l.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),s.add(l),l}function Gd(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,c=null,l=null,h=[],u={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Ln("interior/furniture.glb")||!Ln("interior/clues.glb"))return t;e=new Vt,e.name="interior",e.position.copy(rl),e.visible=!1,s.scene.add(e);for(let B of[-2.5,0,2.5])for(let Y of[-2.5,0,2.5])wn(e,"furniture","floor-planks",B,0,Y);for(let B of[-2.5,0,2.5])wn(e,"furniture",B===0?"wall-wood-window":"wall-wood",B,0,-2.5,90);for(let B of[-2.5,0,2.5])wn(e,"furniture",B===-2.5?"wall-wood-window":"wall-wood",-2.5,0,B,180);for(let B of[-2.5,0,2.5])wn(e,"furniture",B===0?"wall-wood-door":"wall-wood",2.5,0,B,0);let U=new Tt(new _i(40,40),new mn({color:"#3f5a34"}));U.rotation.x=-Math.PI/2,U.position.y=-.02,e.add(U);let R=wn(e,"furniture","bed",u.bed.x,0,u.bed.z);R&&R.traverse(B=>{B.isMesh&&B.material&&B.material.name==="carpet"&&(a||(a=B.material.clone()),B.material=a)}),c=wn(e,"furniture","rug-round",u.rug.x,.01,u.rug.z),wn(e,"furniture","table",1.6,0,-1.5),wn(e,"furniture","chair",1.6,0,-.3,180),wn(e,"furniture","candle",1.2,.79,-1.6),wn(e,"clues","mug",1.85,.79,-1.35),wn(e,"clues","bread",2.1,.79,-1.75),l=wn(e,"furniture","chest",-.3,0,-2.8),wn(e,"furniture","bookcase",-3.4,0,1.2,90),wn(e,"furniture","lantern",u.lantern.x,0,u.lantern.z),wn(e,"furniture","coat-rack",3.05,0,-2),wn(e,"furniture","plant-pot",2.9,0,-3.05),wn(e,"furniture","barrel",-3,0,3,0,.8),o=new mn({color:"#c9b48a",side:on});let z=new Tt(new yi(.9,1.25,.04),o);z.position.set(1.55,1.75,-3.42),e.add(z);let k=new Tt(new rs(.03,.03,1.1,6),new mn({color:"#5a3a22"}));return k.rotation.z=Math.PI/2,k.position.set(1.55,2.4,-3.4),e.add(k),t=!0,!0}let d=new Z;function m(U,R=0){var N;return d.set(rl.x+U.x,rl.y+((N=U.y)!=null?N:R),rl.z+U.z).clone()}function M(U){if(!f())return!1;n=U;let R=Mn[ft((U.look&&U.look.color)|0,0,19)];return o.color.set(R),a&&a.color.set(R).lerp(new He("#ffffff"),.25),i&&(i.dispose(),i=null),U.look&&(i=new wi(s,"room-sleeper",U.look),i.setBase("lie",0),i.pos.copy(m(u.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),p(),!0}function p(){c&&(c.position.set(u.rug.x,.01,u.rug.z),c.rotation.set(0,0,0));for(let U of h.splice(0))U.parent&&U.parent.remove(U)}function g(U){return M(U)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function S(){e&&(e.visible=!1),i&&(i.dispose(),i=null),C(),p(),n=null}function b(U,R,N,z,k=0){v(U);let B=new wi(s,"room-"+U,R);return B.pos.copy(m(z)),B.yaw=k,B.root.rotation.y=k,s.scene.add(B.root),r.set(U,{ch:B,name:N,color:R.color|0,label:!!N}),B}function v(U){let R=r.get(U);R&&(R.ch.dispose(),r.delete(U))}function C(){for(let U of[...r.keys()])v(U)}function E(U){return e.add(U),h.push(U),U}function x(U,R){if(!(!e||!e.visible)){i&&(i.update(U,R),i.root.position.y=rl.y+u.sleeper.y+Math.sin(R*1.7)*.015);for(let N of r.values())N.ch.update(U,R)}}function w(U,R){return U==="window"?{pos:m({x:R?-6.9:-6.3,y:1.75,z:R?-2.95:-3}),look:m({x:-1.6,y:.9,z:-2.1}),fov:R?56:42}:U==="search"?{pos:m({x:R?.5:3.4,y:R?9:4.6,z:R?4.3:5.6}),look:m({x:-.5,y:.3,z:-.7}),fov:R?58:48}:{pos:m({x:R?.4:3.6,y:R?9.2:4.9,z:R?4.1:5.9}),look:m({x:R?-.45:-.9,y:.3,z:R?-.75:-1.1}),fov:R?58:48}}return{L:u,W:m,show:g,hide:S,dress:M,update:x,shot:w,addActor:b,removeActor:v,clearActors:C,addTemp:E,resetProps:p,get visible(){return!!(e&&e.visible)},get group(){return f(),e},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return c},get chest(){return l},lanternWorld(){return m(u.lantern)},dispose(){S(),e&&(s.scene.remove(e),e.traverse(U=>{U.geometry&&!U.geometry.userData.shared&&(U.geometry.type==="PlaneGeometry"||U.geometry.type==="BoxGeometry"||U.geometry.type==="CylinderGeometry")&&U.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var Or={cancelled:!0},xg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Wo=s=>1-Math.pow(1-s,3);function Vh(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===Or&&s.preventDefault()}));function Vd(s,e={}){let t=!!e.scoped,n=e.timeout||13,i=new Map,r=null,o=!1,a=0;function c(m,M,p){typeof M=="function"&&(p=M,M=null),i.set(M?m+":"+M:m,p)}function l(m){return i.get(m.kind+":"+(m.scene||""))||i.get(m.kind)}function h(m){return new Promise(M=>{if(o||!m||!m.kind){M();return}f();let p=l(m);if(!p){M();return}let g=++a;!t&&["death","hanged","shot","left"].includes(m.kind)&&s.holdDeaths((m.targets||[]).map(v=>v.id).filter(Boolean));let S=d(g,m),b={msg:m,resolve:M,ctx:S};r=b,(async()=>{try{await Promise.race([p(S,m),S.timeout(n)])}catch(v){v!==Or&&console.warn("[VKWorld] sinematik hatas\u0131",v)}u(b)})()})}function u(m){if(!m.done){m.done=!0;try{m.ctx.cleanup()}catch(M){console.warn("[VKWorld] sinematik temizli\u011Fi",M)}r===m&&(r=null),m.resolve()}}function f(){if(r){let m=r;m.ctx.cancel(),u(m)}}function d(m,M){let p=new Map,g=new Set,S=new Set,b=[],v=[],C=!1,E=!1,x=!1,w=!1,U=()=>!o&&!C&&m===a,R=()=>U()&&!(t&&s.mainBusy&&s.mainBusy()),N={world:s,msg:M,alive:U,cancel(){C=!0;for(let z of S)z.reject(Or);S.clear()},wait(z){return U()?Vh(new Promise((k,B)=>{let Y={resolve:k,reject:B,left:z};S.add(Y),s.ticker.push(G=>S.has(Y)?(Y.left-=G,Y.left<=0?(S.delete(Y),k(),!0):!1):!0)})):Vh(Promise.reject(Or))},timeout(z){return new Promise(k=>{let B=setTimeout(k,z*1e3);g.add(B)})},tween(z,k,B=xg){return U()?Vh(new Promise((Y,G)=>{let H=0,_={resolve:Y,reject:G};S.add(_),s.ticker.push(y=>{if(!S.has(_))return!0;H=Math.min(z,H+y);try{k(B(z>0?H/z:1),y)}catch(L){console.warn(L)}return H>=z?(S.delete(_),Y(),!0):!1})})):Vh(Promise.reject(Or))},shot(z,k,B={}){R()&&(w=!0,s.rig.setOverride({pos:z.clone(),look:k.clone(),fov:B.fov||40,k:B.k||2.4}))},cut(z,k,B={}){R()&&(w=!0,s.rig.setOverride({pos:z.clone(),look:k.clone(),fov:B.fov||40,k:60},!0))},move(z,k,B,Y,G,H={}){let _=new Z,y=new Z;return N.cut(z,k,H),N.tween(G,L=>{R()&&(_.lerpVectors(z,B,L),y.lerpVectors(k,Y,L),s.rig.setOverride({pos:_,look:y,fov:H.fov||40,k:60},!0))},H.ease||xg)},claim(z){let k=s.chars.get(z);return k?(p.has(k)||(p.set(k,{x:k.pos.x,y:k.pos.y,z:k.pos.z,yaw:k.yaw,visible:k.visible,inside:k.inside,peeking:k.peeking,base:k.base}),k.claimed=!0,k.run([])),k):null},add(z,k){return(k||s.scene).add(z),b.push(z),z},prop(z,k,B,Y,G,H=0,_=1){let y=s.assets.prop(z,k);if(!y)return null;let L=y.clone();return L.position.set(B,Y,G),L.rotation.y=H,L.scale.setScalar(_),L.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),N.add(L)},actor(z,k,B,Y,G=0,H){let _=s.makeActor(z,k,H);return _.pos.set(B,0,Y),_.yaw=G,_.root.rotation.y=G,b.push({dispose:()=>s.dropActor(_)}),_},hideObj(z){z&&z.visible&&(z.visible=!1,v.push(z))},tod(z,k){x=!0,s.setTodOverride(z,k)},room(){return E=!0,s.room},openRoom(z){return E=!0,t?s.openShowRoom(z):s.openRoom(z)},get scoped(){return t},fx:s.fx,sfx:(z,k)=>s.sfx(z,k),flash:(z,k)=>s.flash(z,k),cleanup(){C=!0;for(let z of g)clearTimeout(z);for(let z of S)z.reject(Or);S.clear();for(let z of b.splice(0))z.dispose&&!z.isObject3D?z.dispose():z.parent&&z.parent.remove(z),z.userData&&z.userData.cleanup&&z.userData.cleanup();for(let z of v.splice(0))z.visible=!0;for(let[z,k]of p)z.claimed=!1,z.dropProps(),z.pos.set(k.x,k.y,k.z),z.yaw=k.yaw,z.inside=k.inside,z.peeking=k.peeking,z.alive!==!1&&z.setVisible(k.visible&&!s.isDeadShown(z.id)),z.setBase(k.base==="walk"||k.base==="sprint"||k.base==="sneak"?"idle":k.base||"idle",.2),z.run([]);t?(s.endShowRoom(),x&&s.setTodOverride(null),w&&!(s.mainBusy&&s.mainBusy())&&s.rig.setOverride(null)):(s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),x&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null)),p.size&&(p.clear(),s.reapply(!0))}};return N}return{register:c,announce:h,CANCEL:Or,get running(){return!!r},get current(){return r?r.msg:null},skip(){f()},reset(){a++,f(),s.rig.setOverride(null)},dispose(){o=!0,a++,f()}}}var xt=(s,e,t)=>new Z(s,e,t),ol=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function vg(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(_,y={}){var ke;let L=e.houseAnchors(_);if(!L)return null;let A=y.back,D=A?L.backWin:{x:(L.door.x+L.frontWin.x)/2,z:(L.door.z+L.frontWin.z)/2},q=A?L.peek:L.approach,W=A?L.backWin:L.door,J=q.x-W.x,me=q.z-W.z,ie=Math.hypot(J,me)||1,le=(y.dist||11)*(e.rig.portrait?1.3:1),Pe=(ke=y.side)!=null?ke:.18,Ge=-me/ie*Pe,he=J/ie*Pe;return{pos:xt(D.x+(J/ie+Ge)*le,y.height||7.2,D.z+(me/ie+he)*le),look:xt(D.x,y.lookY||1.8,D.z),a:L}}function r(_,y={}){let L=e.camera.position,A=L.x-_.x,D=L.z-_.z,q=Math.hypot(_.x,_.z);e.village.layout&&q>e.village.layout.Rp*.8&&(A=-_.x,D=-_.z),y.dir&&(A=y.dir.x,D=y.dir.z);let W=Math.hypot(A,D)||1,J=(y.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:xt(_.x+A/W*J,y.height||3,_.z+D/W*J),look:xt(_.x,y.lookY||1.1,_.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,c=()=>e.rig.portrait?1.6:1;function l(_,y,L){let A=0;e.ticker.push(D=>{if(!_.alive())return!0;if(A+=D,A<y)return!1;try{L()}catch(q){console.warn("[VKWorld]",q)}return!0})}function h(_,y,L=4.2,A=null){e.ticker.push(()=>{if(!_.alive())return!0;let D=e.camera.position;for(let q of y){if(q===A||!q.visible)continue;let W=q.pos.x-D.x,J=q.pos.z-D.z,me=q.pos.y+1-D.y;W*W+J*J+me*me*.25<L*L&&q.setVisible(!1)}return!1})}async function u(_,y,L,A,D=.3,q=2.2){if(!Ln("characters/ghost.glb")||!y)return;let W=_.actor(y,"",L,A,0,"ghost");W.root.position.y=D,_.sfx("poof",{volume:.5}),await _.tween(q,J=>{W.root.position.y=D+J*2.3,W.yaw+=.02;let me=1.3*(1-Math.max(0,J-.75)*3);W.root.scale.setScalar(Math.max(.05,me))},Wo),e.fx.emit("magic",L,D+2.6,A,Mn[y.color|0],12),W.setVisible(!1)}function f(_,y){e.markDead(y,{drop:!0});let L=e.houseAnchors(y);L&&l(_,.38,()=>e.fx.emit("poof",L.tomb.x,.2,L.tomb.z,"#b8a890",10)),_.sfx("poof",{volume:.6})}function d(_,y,L,A,D=10,q=2.4,W=3.5,J={x:0,z:-1},me=1){if(!Ln("characters/bat.glb"))return Promise.resolve();let ie=Qn("characters/bat.glb").scene.children[0],le=[];for(let Ge=0;Ge<D;Ge++){let he=ie.clone(!0);he.scale.setScalar((1+Math.random()*.5)*me),_.add(he),le.push({b:he,a:Ge/D*it,r:W*(.6+Math.random()*.6),h:L+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:he.getObjectByName("wing-left"),wr:he.getObjectByName("wing-right"),ph:Math.random()*6})}_.sfx("whoosh",{volume:.6});let Pe=0;return _.tween(q,(Ge,he)=>{Pe+=he;let ke=Math.max(0,Ge-.55)/.45;for(let ae of le){ae.a+=ae.sp*he;let j=ae.r*(1+ke*5),Fe=y+Math.sin(ae.a)*j+J.x*ke*ke*25,Ke=A+Math.cos(ae.a)*j+J.z*ke*ke*25,Ne=ae.h+Math.sin(Pe*3+ae.ph)*.4+ke*8;ae.b.position.set(Fe,Ne,Ke),ae.b.rotation.y=ae.a+Math.PI/2;let Ve=Math.sin(Pe*22+ae.ph)*.9;ae.wl&&(ae.wl.rotation.z=Ve),ae.wr&&(ae.wr.rotation.z=-Ve)}},Ge=>Ge)}function m(_,y,L,A){if(!Ln("characters/vampire.glb"))return null;let D=Qn("characters/vampire.glb"),q=D.scene.clone(!0);q.scale.multiplyScalar(1.05),q.position.set(y,0,L),q.rotation.y=A,_.add(q);let W=new Is(q),J=null,me=le=>{let Pe=Mi.findByName(D.animations,le);if(!Pe)return;let Ge=W.clipAction(Pe);J&&J!==Ge&&J.fadeOut(.15),Ge.reset().fadeIn(.15).play(),J=Ge};me("idle"),e.ticker.push(le=>q.parent?(W.update(le),!1):(W.stopAllAction(),!0));let ie=M(.5,"#ff2244");return ie.position.set(0,1.85,.25),q.add(ie),{root:q,play:me}}function M(_,y){let L=g(),A=new As({map:L,color:y,transparent:!0,depthWrite:!1,blending:Yn,fog:!1}),D=new gr(A);return D.scale.setScalar(_),D.userData.cleanup=()=>A.dispose(),D}let p=null;function g(){if(p)return p;let _=document.createElement("canvas");_.width=_.height=64;let y=_.getContext("2d"),L=y.createRadialGradient(32,32,0,32,32,32);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.35,"rgba(255,255,255,0.45)"),L.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=L,y.fillRect(0,0,64,64),p=new is(_),p.colorSpace=Bt,p}function S(_){let y=new Vt,L=new Tt(new rs(.05,.06,.9,6),new mn({color:"#6b4426"}));L.position.y=.2,y.add(L);let A=new Tt(new rs(.1,.07,.16,6),new mn({color:"#3a2a20"}));A.position.y=.66,y.add(A);let D=pg(.38,.62,Math.random()*9);D.position.y=.7,y.add(D);let q=M(1.3,"#ffb347");return q.position.y=.95,y.add(q),e.ticker.push(()=>!y.parent&&y.userData.used?!0:(D.userData.tick(e.time),!1)),y.userData.holdScale=1/1.12/2.5*1,y.userData.used=!0,y.userData.cleanup=()=>{L.geometry.dispose(),L.material.dispose(),A.geometry.dispose(),A.material.dispose(),D.userData.cleanup(),q.userData.cleanup()},y}function b(_,y,L=1){let A=Sn(_,y);if(!A)return null;let D=A.clone();return D.userData.holdScale=1/(1.12*2.5)*L,D}function v(_=[],y=10){let L=[];for(let[A,D]of e.chars)if(!(!D.visible||_.includes(A)||D.isGhost)&&(L.push(D),L.length>=y))break;return L}function C(_,y){for(let L of _)L.faceYaw=Math.atan2(y.x-L.pos.x,y.z-L.pos.z),L.gaze(y,6,e.time)}function E(_,y,L=4){for(let A of _)A.gaze(y,L,e.time)}s.register("start",async _=>{let y=t(),L=v([],20);_.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let A=xt(0,y*1.1,y*1.3),D=xt(0,.4,0),q=xt(y*.3,4.8,y*.8+2),W=xt(0,1,0);l(_,.9,()=>E(L,e.camera.position,4)),await _.move(A,D,q,W,3,{fov:o()+4});for(let J of L)Math.random()<.6&&J.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await _.wait(1.6)}),s.register("night",async _=>{let y=t(),L=v([],20);for(let A of L)Math.random()<.7&&A.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});_.tod(21),_.sfx("whoosh",{volume:.5}),await _.move(xt(0,3.2,y*.75),xt(0,1.2,0),xt(0,y*.55,y*1.15),xt(0,y*.9,-y*2.5),3.6,{fov:o()+6}),await _.wait(.6)}),s.register("death",async(_,y)=>{let L=(y.targets||[]).slice(0,2);_.tod(5.7);for(let A of L){let D=A.cause==="zehir"?"poison":["bite","bats","vanish"].includes(A.scene)?A.scene:"bite";if(A.id===e.meId()){if(e.sawOwnDeath&&e.sawOwnDeath()){await U(_,A.id,L.length>1?.7:1);continue}if(await R(_,A,D==="poison"))continue}await w(_,A.id,D,L.length>1?.8:1)}});function x(_,y){let L=n();if(!L)return[];let A=L.houses,D=A.findIndex(W=>W.id===_);if(D<0)return[];let q=[];for(let W=1;W<A.length&&q.length<y;W++)for(let J of[D+W,D-W]){let me=A[(J%A.length+A.length)%A.length];!me||me.id===_||q.includes(me.id)||q.length>=y||e.isDeadShown(me.id)||me.id===e.meId()&&!e.playerById(me.id)||e.playerById(me.id)&&q.push(me.id)}return q}async function w(_,y,L,A){let D=i(y,{dist:9.5,height:4.6,side:.38,lookY:1});if(!D)return;let q=D.a,W=e.playerById(y),J=W?W.look:null,me=xt(D.pos.x*.9+q.approach.x*.1,D.pos.y-.8,D.pos.z*.9+q.approach.z*.1),ie={x:q.door.x+(q.approach.x-q.door.x)*1.15,z:q.door.z+(q.approach.z-q.door.z)*1.15},le=xt(ie.x,.7,ie.z);_.cut(D.pos,le,{fov:o()}),_.move(D.pos,le,me,le,5.6*A,{fov:o()}),await _.wait(.35*A),e.village.openDoor(y,4.5),_.sfx("door");let Pe=x(y,3),Ge=[];if(h(_,Ge,5),Pe.forEach((Fe,Ke)=>l(_,(.9+Ke*.35)*A,()=>{let Ne=e.houseAnchors(Fe),Ve=e.playerById(Fe);if(!Ne||!Ve)return;e.village.openDoor(Fe,2.5);let mt=_.actor(Ve.look,"",Ne.inside.x,Ne.inside.z,Ne.rotY);Ge.push(mt);let Mt={x:Ne.approach.x+(ie.x-Ne.approach.x)*.6,z:Ne.approach.z+(ie.z-Ne.approach.z)*.6};mt.run([{walk:[Ne.approach,Mt],mode:"walk"},{faceTo:ie},{wait:.6},{once:Math.random()<.5?"emote-no":"interact-right",opts:{timeScale:.8}}])})),L==="vanish"){await _.wait(.4*A);for(let mt=0;mt<3;mt++)e.fx.emit("mist",q.door.x,.4+mt*.3,q.door.z,"#9b7bff",8),await _.wait(.22*A);let Fe=J?nl[J.hat|0]:null,Ke=Fe&&Ln("hats/hats.glb")?Qn("hats/hats.glb").scene.getObjectByName(Fe):null,Ne=null;if(Ke)Ne=Ke.clone(),Ne.scale.multiplyScalar(4.5);else{let mt=Sn("furniture","pillow");mt&&(Ne=mt.clone(),Ne.scale.setScalar(.6))}Ne&&(Ne.position.set(ie.x,.02,ie.z),Ne.rotation.set(0,Math.random()*it,.25),_.add(Ne),e.fx.emit("poof",ie.x,.2,ie.z,"#b8a890",6)),_.sfx("whoosh"),await _.wait(1.4*A),e.flickerHouse(y,1.2*A),await _.wait(.6*A);let Ve=u(_,J,q.door.x,q.door.z,.4,2*A);await _.wait(.6*A),f(_,y),await Ve;return}let he=J?_.actor(J,"",q.inside.x,q.inside.z,q.rotY):null;if(he){he.run([{walk:[q.door,ie],mode:"sneak"}]);let Fe=0;e.ticker.push(Ke=>!_.alive()||!he.root.visible||he.base==="lie"?!0:(Fe+=Ke*7,he.root.rotation.z=Math.sin(Fe)*.12,!1))}if(L==="poison"){_.sfx("potion");for(let Fe=0;Fe<5;Fe++)he&&e.fx.emit("bubble",he.pos.x,1.3,he.pos.z,"#94d82d",5),await _.wait(.24*A)}else L==="bats"?(_.sfx("bite",{volume:.6}),d(_,(q.door.x+q.backWin.x)/2,(q.height||4)+.6,(q.door.z+q.backWin.z)/2,6,2*A,1.6,{x:q.backWin.x-q.door.x,z:q.backWin.z-q.door.z},.8),await _.wait(1.2*A)):(await _.wait(1*A),_.sfx("bite",{volume:.5}),e.flash(.22,"#d7263d"),await _.wait(.2*A));he&&(he.run([]),he.path=null,he.root.rotation.z=0,he.faceYaw=Math.atan2(ie.x-q.door.x,ie.z-q.door.z),he.setBase("lie",.15),L==="poison"&&e.fx.emit("bubble",he.pos.x,.5,he.pos.z,"#94d82d",10),e.fx.emit("dust",he.pos.x,.1,he.pos.z,null,6)),e.flickerHouse(y,1.2*A),await _.wait(1.3*A);let ke=he?he.pos.x:ie.x,ae=he?he.pos.z:ie.z,j=u(_,J,ke,ae,.3,2*A);await _.wait(.7*A),he&&(e.fx.emit("poof",ke,.3,ae,"#d8d0ff",12),he.setVisible(!1)),f(_,y),await j,await _.wait(.2)}async function U(_,y,L){let A=i(y,{dist:11,height:7.4,side:.2,lookY:2.2});if(!A){e.markDead(y,{quiet:!0,drop:!0});return}_.cut(A.pos,A.look,{fov:o()}),await _.wait(.5*L),e.village.tombOf&&e.village.tombOf(y)?e.markDead(y,{quiet:!0}):f(_,y),await _.wait(1.3*L)}async function R(_,y,L){let A=_.openRoom(y.id);if(!A)return!1;let D=e.playerById(y.id),q=A.shot("inside",e.rig.portrait);_.cut(q.pos,q.look,{fov:q.fov});let W=A.L,J=A.W({x:W.bedside.x,z:W.bedside.z}),me=A.W({x:W.sleeper.x,z:W.sleeper.z});await _.wait(1.1),_.sfx("door",{volume:.6});let ie=A.W(W.doorStep),le=A.W(W.doorIn),Pe=m(_,ie.x,ie.z,Math.atan2(le.x-ie.x,le.z-ie.z));if(Pe){L&&Pe.root.traverse(Ke=>{if(Ke.isMesh){let Ne=new Jt({color:"#0b0a12",transparent:!0,opacity:.82});Ke.material=Ne,Ke.userData.cleanup=()=>Ne.dispose()}}),Pe.play("walk");let he=[ie,le,J],ke=[Math.hypot(le.x-ie.x,le.z-ie.z),Math.hypot(J.x-le.x,J.z-le.z)],ae=ke[0]+ke[1];await _.tween(ae/1.6,Ke=>{let Ne=Ke*ae,[Ve,mt,Mt]=Ne<ke[0]?[he[0],he[1],Ne/ke[0]]:[he[1],he[2],(Ne-ke[0])/ke[1]];Pe.root.position.x=Ve.x+(mt.x-Ve.x)*Mt,Pe.root.position.z=Ve.z+(mt.z-Ve.z)*Mt,Pe.root.rotation.y=Math.atan2(mt.x-Ve.x,mt.z-Ve.z)},Ke=>Ke),Pe.play("idle");let j=Pe.root.rotation.y,Fe=Math.atan2(me.x-Pe.root.position.x,me.z-Pe.root.position.z);await _.tween(.5,Ke=>{Pe.root.rotation.y=j+(((Fe-j+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*Ke,Pe.root.rotation.x=.35*Ke}),Pe.play("interact-right")}e.flickerRoom(1.5),_.sfx(L?"potion":"bite",{volume:.7}),L||e.flash(.25,"#d7263d"),await _.wait(1.6),Pe&&(e.fx.emit("smoke",Pe.root.position.x,1,Pe.root.position.z,"#2a2238",16),Pe.root.visible=!1),await _.wait(.3);let Ge=u(_,D&&D.look,me.x,me.z,.9,2.2);return e.markDead(y.id,{quiet:!0,drop:!0}),await Ge,await _.wait(.4),!0}s.register("safe",async _=>{let y=t();_.tod(5.4,!0),l(_,.05,()=>_.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((A,D)=>l(_,.7+D*.26,()=>e.village.openDoor(A,1.4))),await _.move(xt(-y*.9,y*.45,y*.95),xt(0,2,0),xt(y*.55,y*.55,y*1),xt(y*1.6,4,-y*.6),4.6,{fov:o()+4}),await _.wait(.3)}),s.register("nohang",async _=>{let y=t(),L=v([],20);E(L,xt(0,1,0),4),L.forEach((A,D)=>l(_,D*.09,()=>A.playOnce("emote-no",{timeScale:.9}))),await _.move(xt(0,4,y*.55),xt(0,1,0),xt(0,y*.8,y*1.15),xt(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async _=>{let y=t(),L=v([],20).map(A=>_.claim(A.id)).filter(Boolean);for(let A of L)A.setBase(Math.random()<.5?"sit":"warm",.5);_.tod(19.6),await _.move(xt(0,3.4,y*.7),xt(0,1,0),xt(0,y*.45,y*1.05),xt(0,y*.8,-y*2.5),4,{fov:o()+6})}),s.register("left",async(_,y)=>{let[L]=ol(y),A=L&&e.chars.get(L);if(A&&A.visible){_.claim(L);let D=r(A.pos,{dist:6});_.shot(D.pos,D.look,{fov:o()}),A.faceYaw=Math.atan2(e.camera.position.x-A.pos.x,e.camera.position.z-A.pos.z),await _.wait(.6),A.playOnce("emote-yes",{timeScale:.8}),await _.wait(1.4),e.fx.emit("mist",A.pos.x,.4,A.pos.z,"#c9c2d3",22),_.sfx("whoosh"),e.markDead(L,{quiet:!0}),A.setVisible(!1),await _.wait(1.4)}else if(L){let D=i(L,{dist:10});D&&(_.shot(D.pos,D.look,{fov:o()}),await _.wait(1),e.fx.emit("mist",D.a.door.x,.6,D.a.door.z,"#c9c2d3",20),f(_,L),await _.wait(1.6))}}),s.register("hanged",async(_,y)=>{let[L]=ol(y),A=["gallows","exile","cellar"].includes(y.scene)?y.scene:"gallows",D=L&&e.chars.get(L);if(!D){await _.wait(1.5);return}_.claim(L),D.setVisible(!0);let q=v([L],40).map(J=>_.claim(J.id)).filter(Boolean),W=q.slice(0,9);for(let J of q.slice(9))J.setVisible(!1);A==="gallows"?await k(_,D,W,L):A==="exile"?await B(_,D,W,L):await Y(_,D,W,L)});function N(_,y){let L=n(),A=L.gateAngle+_,D=L.Rp*y;return{x:Math.sin(A)*D,z:Math.cos(A)*D,a:A}}function z(_,y,L,A,D={}){let q=_.length,W=D.spread||2.2;_.forEach((J,me)=>{let ie=A+(D.front?0:Math.PI)+(me-(q-1)/2)/Math.max(1,q)*W;J.pos.set(y.x+Math.sin(ie)*L+(Math.random()-.5)*.4,0,y.z+Math.cos(ie)*L+(Math.random()-.5)*.4),J.yaw=Math.atan2(y.x-J.pos.x,y.z-J.pos.z),J.faceYaw=J.yaw,J.gaze(y,8,e.time)})}async function k(_,y,L,A){let D=N(.25,.82),q=D.a+Math.PI;_.prop("village","platform-wood",D.x,0,D.z,q,1),_.prop("village","frame-wood",D.x,1.18,D.z,q,1);let W={x:Math.sin(q),z:Math.cos(q)},J={x:Math.cos(q),z:-Math.sin(q)};_.prop("village","ladder",D.x+W.x*1.5-J.x*.75,0,D.z+W.z*1.5-J.z*.75,q,.8);let me=new Tt(new rs(.035,.035,1,6),new mn({color:"#c8a46a"}));me.position.set(D.x,1.18+2.35-.5,D.z);let ie=new Tt(new Ra(.16,.035,6,12),me.material);ie.position.set(D.x,1.18+1.75,D.z),ie.userData.cleanup=()=>{me.geometry.dispose(),ie.geometry.dispose(),me.material.dispose()},_.add(me),_.add(ie);let le=e.rig.portrait;z(L,{x:D.x,z:D.z},le?3.6:4.2,q-1.25,{front:!0,spread:le?1.4:1.7});let Pe={x:D.x+W.x*3.4,z:D.z+W.z*3.4};y.pos.set(Pe.x,0,Pe.z),y.yaw=q+Math.PI,y.faceYaw=y.yaw;let Ge=le?8:7.4,he=le?8:9.6,ke=le?a():32,ae=xt(D.x+W.x*Ge+J.x*he,le?6.2:5,D.z+W.z*Ge+J.z*he),j=xt(D.x+W.x*Ge*.8+J.x*he*.8,le?5.2:4.2,D.z+W.z*Ge*.8+J.z*he*.8),Fe=Ve=>xt(D.x-W.x*(le?0:.7)-J.x*.5,Ve,D.z-W.z*(le?0:.7)-J.z*.5);_.move(ae,Fe(le?1.6:1.7),j,Fe(le?1.9:2),4.2,{fov:ke}),h(_,L,6),y.run([{walk:[{x:D.x+W.x*1.6,z:D.z+W.z*1.6}],mode:"walk"}]),await _.wait(1.4),await _.tween(.5,Ve=>{y.pos.y=Ve*1.2,y.pos.x=D.x+W.x*1.6*(1-Ve),y.pos.z=D.z+W.z*1.6*(1-Ve)}),y.run([]),y.faceYaw=q,y.yaw=q,y.setBase("idle",.2),await _.wait(.5),y.playOnce("emote-no",{timeScale:.9}),_.sfx("hang",{volume:.7}),await _.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",y.pos.x,1.4,y.pos.z,null,26),_.sfx("poof"),y.setVisible(!1);for(let Ve of L)Math.random()<.6&&Ve.playOnce(Math.random()<.5?"emote-no":"interact-right");let Ke=e.playerById(A),Ne=u(_,Ke&&Ke.look,D.x,D.z,1.4,1.8);e.markDead(A,{quiet:!0,drop:!0}),await Ne}async function B(_,y,L,A){let D=n(),q=D.gateAngle,W=(Ne,Ve=0)=>({x:Math.sin(q+Ve/Ne)*Ne,z:Math.cos(q+Ve/Ne)*Ne}),J=W(D.R+2),me=W(D.R-.6),ie=e.fogBoost(.6),le=q+Math.PI/2,Pe=_.prop("graveyard","iron-fence-gate",J.x,0,J.z,le,1);y.pos.set(me.x,0,me.z),y.yaw=q,y.faceYaw=q;let Ge=L.slice(0,6);Ge.forEach((Ne,Ve)=>{let mt=(Ve-(Ge.length-1)/2)*1.1,Mt=W(D.R-3.3-Ve%2*1,mt*(e.rig.portrait?.75:1));Ne.pos.set(Mt.x,0,Mt.z),Ne.yaw=q,Ne.faceYaw=q,Ve%2===0?(Ne.hold(S(_),"right",[0,-.12,.02]),Ne.setBase("hold",.2)):Ne.hold(b("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let Ne of L.slice(6))Ne.setVisible(!1);let he=e.rig.portrait,ke=W(Math.max(D.R-(he?12:11),2.8),he?1.2:-2.2),ae=he?10.5:9.6,j=W(D.R+(he?1.5:3),0);_.cut(xt(ke.x,ae,ke.z),xt(j.x,.8,j.z),{fov:a()});let Fe=W(D.R+15);h(_,Ge,8,y),y.run([{walk:[J,Fe],mode:"walk"}]),Ge.forEach((Ne,Ve)=>{let mt=W(D.R-1.2-Ve%2*.9,(Ve-2.5)*1.1);Ne.run([{wait:.4},{walk:[mt],mode:"walk"},{pose:Ve%2===0?"hold":"idle"}])}),_.sfx("whoosh",{volume:.4});let Ke=W(D.R-2,he?.6:-1.2);if(await _.move(xt(ke.x,ae,ke.z),xt(j.x,.8,j.z),xt(Ke.x,he?6.8:6,Ke.z),xt(Fe.x,.9,Fe.z),4.8,{fov:a()}),e.fx.emit("mist",y.pos.x,.6,y.pos.z,"#d8dde4",16),y.setVisible(!1),Pe){let Ne=Pe.rotation.y;Pe.rotation.y=Ne+1.3,_.sfx("door"),await _.tween(.6,Ve=>{Pe.rotation.y=Ne+1.3*(1-Ve)},Wo)}e.markDead(A,{quiet:!0,drop:!0}),await _.wait(.8),ie()}async function Y(_,y,L,A){let D=N(1.1,.9),q=D.a+Math.PI;_.prop("village","trapdoor",D.x,.01,D.z,q,.75);let W=new Vt;W.position.set(D.x-Math.cos(q)*.85,.12,D.z+Math.sin(q)*.85),W.rotation.y=q;let J=new Tt(new yi(1.7,.1,1.7),new mn({color:"#7a5232"}));J.position.x=.85;let me=new Tt(new yi(1.72,.12,.18),new mn({color:"#3a3a44"}));me.position.set(.85,.01,.45),W.add(J,me),W.userData.cleanup=()=>{J.geometry.dispose(),J.material.dispose(),me.geometry.dispose(),me.material.dispose()},_.add(W);let ie=new Tt(new _r(.8,16),new Jt({color:"#0b0910"}));ie.rotation.x=-Math.PI/2,ie.position.set(D.x,.03,D.z),ie.userData.cleanup=()=>{ie.geometry.dispose(),ie.material.dispose()},_.add(ie);let le=e.rig.portrait;z(L,D,le?3.4:4,q,{spread:le?1.7:2.3});let Pe={x:Math.sin(q),z:Math.cos(q)},Ge={x:Math.cos(q),z:-Math.sin(q)};y.pos.set(D.x+Pe.x*.5+Ge.x*2.6,0,D.z+Pe.z*.5+Ge.z*2.6);let he=le?8.6:7.2,ke=le?2.2:3.8;_.cut(xt(D.x+Pe.x*he+Ge.x*ke,le?5.4:4.4,D.z+Pe.z*he+Ge.z*ke),xt(D.x+Pe.x*.5,le?.9:.7,D.z+Pe.z*.5),{fov:a()}),h(_,L,le?4.6:4),_.sfx("door"),await _.tween(.8,j=>{W.rotation.z=j*1.9},Wo),y.run([{walk:[{x:D.x,z:D.z}],mode:"walk"}]),await _.wait(1.8),y.run([]),y.playOnce("fall",{timeScale:.6}),await _.tween(1,j=>{y.pos.y=-2.2*j},j=>j*j),y.setVisible(!1),_.sfx("door"),await _.tween(.5,j=>{W.rotation.z=1.9*(1-j)},j=>j*j),e.fx.emit("poof",D.x,.3,D.z,"#b8a890",14);let ae=_.prop("clues","key",D.x+Ge.x*.6,.35,D.z+Ge.z*.6,q,1.4);ae&&e.fx.emit("magic",ae.position.x,.6,ae.position.z,"#ffd27a",10),e.markDead(A,{quiet:!0,drop:!0});for(let j of L)Math.random()<.5&&j.playOnce("emote-yes",{timeScale:.8});await _.wait(1.3)}function G(_,y,L){let A=b("clues","bow",1.1);A&&(A.rotation.set(0,0,0),y.hold(A,"left",[0,-.13,.05])),y.setBase("holdboth",.25),L&&(y.faceYaw=Math.atan2(L.x-y.pos.x,L.z-y.pos.z),y.yaw=y.faceYaw)}async function H(_,y,L,A=.7){let D=Sn("clues","arrow");if(!D)return;let q=D.clone();q.scale.setScalar(.9),_.add(q);let W=xt(L.x-y.x,L.y-y.y,L.z-y.z);_.sfx("shot"),await _.tween(A,J=>{q.position.set(y.x+W.x*J,y.y+W.y*J+Math.sin(J*Math.PI)*1.2,y.z+W.z*J),q.rotation.y=Math.atan2(W.x,W.z),q.rotation.x=-Math.cos(J*Math.PI)*.5},J=>J)}return s.register("hunter",async(_,y)=>{let[L]=ol(y),A=L&&e.chars.get(L);if(A){_.claim(L),A.setVisible(!0),G(_,A,xt(0,0,0));let D=r(A.pos,{dist:4.8,height:1.4,lookY:1.4});_.move(xt(D.pos.x,.9,D.pos.z),D.look,xt(D.pos.x*1.05,2,D.pos.z*1.05),D.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),_.sfx("hunter",{volume:.6}),await _.wait(3.4)}else await _.wait(1.5)}),s.register("shot",async(_,y)=>{let[L]=ol(y),A=y.actorId&&e.chars.get(y.actorId),D=L&&e.chars.get(L);if(!D){await _.wait(1.5);return}_.claim(L),D.setVisible(!0),A&&(_.claim(y.actorId),A.setVisible(!0),G(_,A,D.pos)),D.faceYaw=A?Math.atan2(A.pos.x-D.pos.x,A.pos.z-D.pos.z):D.yaw;let q=A?A.pos:xt(0,0,0),W=xt(q.x-D.pos.x,0,q.z-D.pos.z).normalize(),J=xt(W.z,0,-W.x),me=xt((q.x+D.pos.x)/2,1,(q.z+D.pos.z)/2),ie=Math.max(4,Math.hypot(q.x-D.pos.x,q.z-D.pos.z)),le=xt(-me.x,0,-me.z).normalize(),Pe=J.dot(le)>=0?J:J.clone().multiplyScalar(-1);_.cut(xt(me.x+Pe.x*(ie*.9+4),4.6+ie*.2,me.z+Pe.z*(ie*.9+4)),me,{fov:o()}),await _.wait(1),A&&A.playOnce("attack-melee-right",{timeScale:1.4});let Ge=H(_,xt(q.x,1.5,q.z),xt(D.pos.x,1.1,D.pos.z),.75),he=r(D.pos,{dir:Pe,dist:6,height:3.6});_.shot(he.pos,he.look,{fov:o(),k:2.5}),await Ge,e.flash(.4,"#ff8364"),e.fx.emit("poof",D.pos.x,.9,D.pos.z,null,22),_.sfx("poof"),D.setVisible(!1);let ke=e.playerById(L),ae=u(_,ke&&ke.look,D.pos.x,D.pos.z,.3,1.8);e.markDead(L,{quiet:!0,drop:!0}),await ae,await _.wait(.4)}),s.register("nohunt",async _=>{let y=e.getState(),L=y&&y.room.hunterId,A=L&&e.chars.get(L);if(A){_.claim(L),A.setVisible(!0);let D=xt(A.pos.x*3+8,0,A.pos.z*3-30);G(_,A,D);let q=r(A.pos,{dist:5.5});_.shot(q.pos,q.look,{fov:o()}),await _.wait(.9),await H(_,xt(A.pos.x,1.5,A.pos.z),xt(D.x,6,D.z),1.1),A.dropProps(),A.setBase("idle",.2),A.playOnce("emote-no"),await _.wait(1.6)}else await _.wait(1.5)}),s.register("win",async(_,y)=>{let L=ol(y),A=t(),D=y.winner;D==="vampir"?(_.tod(23.2,!0),e.moonOverride("#ff4a4a")):D==="soytari"?_.tod(18.4):_.tod(10.2);let q=L.map(ie=>e.chars.get(ie)).filter(ie=>ie&&ie.visible).slice(0,10);for(let ie of q)_.claim(ie.id);let W=v(L,12).map(ie=>_.claim(ie.id)).filter(Boolean);if(D==="soytari"&&q[0]){let ie=q[0];ie.pos.set(0,0,3),ie.yaw=0,ie.faceYaw=0,ie.setBase("cheer",.2),z(W,{x:0,z:3},4.5,0);for(let Pe of W)Pe.setBase("sad",.3);let le=M(4,"#f2c12e");le.position.set(0,1.2,3),_.add(le)}else{for(let ie of q)ie.setBase(D==="vampir"?"loom":"cheer",.3);for(let ie of W)ie.setBase("sad",.3)}D==="vampir"&&d(_,0,5,0,16,5.5,A*.5,{x:0,z:-1});let J=0,me=D!=="vampir";await _.tween(5.6,(ie,le)=>{let Pe=-.9+ie*1.6,Ge=A*.85*c();if(e.rig.setOverride({pos:xt(Math.sin(Pe)*Ge,A*.5*c(),Math.cos(Pe)*Ge),look:xt(0,1,0),fov:o()+2,k:60},!0),J+=le,me&&J>.55){J=0;let he=q[Math.floor(Math.random()*Math.max(1,q.length))];he&&(e.fx.emit("confetti",he.pos.x,2.2,he.pos.z,null,14),Math.random()<.5&&he.playOnce("jump"))}},ie=>ie)}),s.register("promote",async _=>{let y=e.meId(),L=y&&e.chars.get(y);if(L&&L.visible){_.claim(y);let A=r(L.pos,{dist:6,height:4.2});_.shot(A.pos,A.look,{fov:o()}),L.setBase("loom",.3);let D=M(.6,"#ff2244");D.position.set(0,.36,.12),L.headBone&&(L.headBone.add(D),_.add(D,L.headBone)),e.flash(.5,"#d7263d"),await d(_,L.pos.x,1.8,L.pos.z,12,3.4,1.8)}else if(y){let A=i(y,{dist:10});A&&(_.shot(A.pos,A.look,{fov:o()}),e.flash(.5,"#d7263d"),await d(_,A.a.door.x,3,A.a.door.z,12,3.4,3))}await _.wait(.4)}),s.register("seer",async(_,y)=>{let L=(y.targets||[])[0];if(!L)return;let A=e.openRoom(L.id);if(!A){await _.wait(1.5);return}let D=e.playerById(e.meId()),q=A.shot("search",e.rig.portrait);_.cut(q.pos,q.look,{fov:q.fov});let W=D?A.addActor("kahin",D.look,D.name,A.L.doorOut,-Math.PI/2):null,J=Ge=>A.W(Ge);W&&W.run([{walk:[J(A.L.doorIn),J({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:J(A.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[J({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:J({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[J({x:.9,z:.2})],mode:"sneak"},{faceTo:J(A.L.rug)},{pose:"peek"}]),_.sfx("door",{volume:.5}),await _.wait(4.6);let me=L.cause==="vampir",ie=A.rug;if(me){let Ge=ie.position.x;_.tween(.7,ae=>{ie.position.x=Ge+1.6*ae,ie.rotation.z=-.25*Math.sin(ae*Math.PI)},Wo),await _.wait(.3);let he=A.addTemp(Sn("clues","coffin").clone());he.position.set(A.L.rug.x,-.4,A.L.rug.z),he.scale.setScalar(.62),he.rotation.y=.4,_.tween(.6,ae=>{he.position.y=-.4+.42*ae},Wo);for(let ae=0;ae<3;ae++){let j=A.addTemp(Sn("clues","potion").clone());j.position.set(A.L.rug.x+.9+ae*.32,0,A.L.rug.z-.6+ae*.2);let Fe=M(.9,"#ff2244");Fe.position.y=.4,j.add(Fe)}let ke=A.W({x:A.L.rug.x,z:A.L.rug.z});e.fx.emit("magic",ke.x,.8,ke.z,"#ff2244",30),e.flash(.55,"#d7263d"),_.sfx("seer"),d(_,ke.x,1.2,ke.z,3,2,.8,{x:0,z:1},.45),W&&(W.setBase("idle",.2),W.playOnce("emote-no"))}else{let Ge=["bread","cheese","apple","mug"],he=A.W({x:A.L.rug.x,z:A.L.rug.z});Ge.forEach((ke,ae)=>{let j=Sn("clues",ke);if(!j)return;let Fe=A.addTemp(j.clone());Fe.position.set(A.L.rug.x-.5+ae*.35,.02,A.L.rug.z+.2-ae%2*.3),Fe.scale.setScalar(1.3)}),e.fx.emit("magic",he.x,.6,he.z,"#ffe08a",24),_.sfx("seer"),W&&(W.setBase("idle",.2),W.playOnce("emote-yes"))}let le=A.shot("inside",e.rig.portrait),Pe=xt(le.look.x+(le.pos.x-le.look.x)*.78,le.look.y+(le.pos.y-le.look.y)*.8,le.look.z+(le.pos.z-le.look.z)*.78);_.shot(Pe,A.W({x:A.L.rug.x,y:.4,z:A.L.rug.z}),{fov:le.fov,k:2.5}),await _.wait(2.2)}),s.register("watch",async(_,y)=>{let L=(y.targets||[])[0];if(!L)return;if(e.showWatched&&e.showWatched(L.id)){await _.wait(.6);return}let A=e.openRoom(L.id);if(!A){await _.wait(1.5);return}let D=A.shot("window",e.rig.portrait);_.cut(D.pos,D.look,{fov:D.fov});let q=e.playerById(e.meId());q&&A.addActor("gozcu",q.look,"",A.L.winOut,Math.PI/2).setBase("peek",0);let W=(y.visitors||[]).map(ie=>e.playerById(ie)).filter(Boolean),J=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!W.length){await _.wait(2.2),e.diedTonight(L.id)?(e.flickerRoom(1.4),await _.wait(1.6)):await _.wait(1.4);return}let me=ft(4/W.length,.8,1.4);for(let ie=0;ie<W.length;ie++){let le=W[ie],Pe=A.addActor("v"+ie,le.look,le.name,A.L.doorStep,-Math.PI/2),Ge=J[ie%J.length];Pe.run([{walk:[A.W(A.L.doorIn),A.W(Ge)],mode:"walk"},{faceTo:A.W({x:A.L.sleeper.x,z:-1.3})},{pose:"idle"}]),_.sfx("door",{volume:.35}),await _.wait(me)}await _.wait(1.6),e.diedTonight(L.id)?(e.flickerRoom(1.4),await _.wait(1.8)):await _.wait(1.2)}),{figure:m,ghostRise:u,makeGlow:M,bats:d,houseView:i,fov:o}}var pw={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},Wh={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};Wh["panayir-haftasi"]=Wh.panayir;function yg(s){return{...pw,...Wh[s]||{},id:Wh[s]?s:null}}var al=new Z,mw=new Z,Xh=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new Z,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new Z,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new Z,this.ovLook=new Z,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,c){let l=this.scratch;l.fov=i,this.applyView(l);let h=mw.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),u=a,f=c;for(let d=0;d<22;d++){let m=(u+f)/2;l.position.copy(e).addScaledVector(h,m),l.lookAt(e),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert();let M=!0;for(let p=0;p<r.length&&M;p++){if(al.copy(r[p]).applyMatrix4(l.matrixWorldInverse),al.z>-.5){M=!1;break}al.applyMatrix4(l.projectionMatrix),(Math.abs(al.x)>o||Math.abs(al.y)>o)&&(M=!1)}M?f=m:u=m}return f}drag(e,t){let n=this.user;n.az=ft(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ft(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ft(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let g=un(r.active?1.2:3,e);r.az+=(0-r.az)*g,r.el+=(0-r.el)*g,r.zoom+=(1-r.zoom)*g,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:un(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=jt(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,c=ft(i.el+r.el,.12,1.45),l=i.dist*r.zoom,h=this.camera,u=i.target.x+Math.sin(a)*Math.cos(c)*l,f=i.target.y+Math.sin(c)*l,d=i.target.z+Math.cos(a)*Math.cos(c)*l,m=this.override?1:0;if(this.ovW+=(m-this.ovW)*un(this.override?this.override.k||2.5:2,e),this.override){let g=un(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,g),this.ovLook.lerp(this.override.look,g)}let M=this.ovW;h.position.set(u+(this.ovPos.x-u)*M,f+(this.ovPos.y-f)*M,d+(this.ovPos.z-d)*M),this.clampFn&&M<.5&&this.clampFn(h.position),this.lookPoint||(this.lookPoint=new Z),this.lookPoint.copy(i.target).lerp(this.ovLook,M),h.lookAt(this.lookPoint);let p=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*M;Math.abs(h.fov-p)>.01&&(h.fov=p,h.updateProjectionMatrix()),h.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var gw=`
.vkw-root{position:absolute;inset:0;overflow:hidden;contain:strict;-webkit-tap-highlight-color:transparent;touch-action:none;user-select:none;-webkit-user-select:none}
.vkw-root canvas{position:absolute;inset:0;width:100%!important;height:100%!important;display:block;outline:none}
.vkw-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 46%,rgba(0,0,0,0) 55%,rgba(8,4,24,.38) 100%);transition:opacity 1.5s}
.vkw-ov{position:absolute;inset:0;pointer-events:none;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#f6f1ff}
.vkw-tag,.vkw-plaque,.vkw-bubble{position:absolute;left:0;top:0;will-change:transform;transform:translate3d(-9999px,0,0)}
.vkw-ov [hidden]{display:none!important}
.vkw-tag{display:flex;flex-direction:column;align-items:center;gap:2px;white-space:nowrap}
.vkw-name{display:flex;align-items:center;gap:4px;padding:2px 7px 2px 5px;border-radius:999px;background:rgba(21,18,43,.72);font-size:12px;font-weight:700;line-height:15px;letter-spacing:.01em;box-shadow:0 1px 3px rgba(0,0,0,.35);text-shadow:0 1px 1px rgba(0,0,0,.5)}
.vkw-name i{display:inline-block;width:9px;height:9px;border-radius:50%;border:1.5px solid rgba(255,255,255,.85);flex:none}
.vkw-job{margin-top:-1px;font-size:10px;font-weight:600;line-height:11px;color:#f4e4c1;opacity:.9;text-shadow:0 1px 2px #000,0 0 3px #000;letter-spacing:.02em}
.vkw-tag.cmp .vkw-name{font-size:11px;padding:1px 6px 1px 4px;line-height:14px}
.vkw-tag.cmp .vkw-name i{width:8px;height:8px}
.vkw-bubble.old{opacity:.38!important}
.vkw-tag.me .vkw-name{background:rgba(58,42,107,.88);box-shadow:0 0 0 1.5px rgba(244,228,193,.8),0 1px 3px rgba(0,0,0,.4)}
.vkw-tag.off .vkw-name{opacity:.6}
.vkw-tag.dead .vkw-name{background:rgba(60,56,90,.6);font-style:italic}
.vkw-tag.sel .vkw-name{pointer-events:auto;cursor:pointer}
.vkw-tag.sel .vkw-name{background:rgba(34,28,68,.9);box-shadow:0 0 0 2px var(--c,#f2c12e),0 2px 6px rgba(0,0,0,.45);padding:4px 9px 4px 6px;font-size:13px}
.vkw-tag.hover .vkw-name,.vkw-tag.picked .vkw-name{background:var(--c,#f2c12e);color:#15122b;text-shadow:none}
.vkw-mark{font-size:11px;font-weight:700;padding:1px 6px;border-radius:6px;background:rgba(21,18,43,.8);border:1px solid var(--c,#f2c12e);color:#fff}
.vkw-votes{display:flex;align-items:center;gap:2px;padding:1px 4px;border-radius:999px;background:rgba(244,228,193,.92);color:#2a1c10;font-size:11px;font-weight:800}
.vkw-votes b{margin-right:2px}
.vkw-votes i{width:8px;height:8px;border-radius:50%;border:1px solid rgba(0,0,0,.35);font-style:normal;font-size:7px;line-height:7px;text-align:center;color:#fff}
.vkw-plaque{display:flex;align-items:center;gap:5px;padding:2px 8px 2px 4px;border-radius:5px;background:linear-gradient(#6b4a2e,#4f3520);border:1px solid #2e1f12;color:#f4e4c1;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,.35);opacity:.92;transition:opacity .4s}
.vkw-plaque span{max-width:92px;overflow:hidden;text-overflow:ellipsis}
.vkw-plaque i{width:10px;height:14px;border-radius:2px 2px 5px 5px;flex:none;border:1px solid rgba(0,0,0,.4)}
.vkw-plaque.dim{opacity:.0}
.vkw-plaque.sel{pointer-events:auto;cursor:pointer;font-size:13px;padding:5px 10px 5px 6px;opacity:1;box-shadow:0 0 0 2px var(--c,#f2c12e),0 3px 8px rgba(0,0,0,.5)}
.vkw-plaque.sel::after{content:'';position:absolute;inset:-5px;border-radius:9px;border:2px solid var(--c,#f2c12e);will-change:opacity;animation:vkw-pulse 1.6s ease-in-out infinite;pointer-events:none}
.vkw-plaque.picked{background:var(--c,#f2c12e);color:#15122b}
.vkw-plaque.picked::after{animation:none;opacity:1}
.vkw-plaque.dead{filter:grayscale(.8);opacity:.6}
@keyframes vkw-pulse{0%,100%{opacity:.9}50%{opacity:.15}}
.vkw-bubble{width:max-content;max-width:280px;padding:5px 9px;border-radius:12px;pointer-events:none;white-space:normal;background:#f4e4c1;color:#2a1c10;font-size:12.5px;font-weight:600;line-height:1.3;box-shadow:0 3px 8px rgba(0,0,0,.35);opacity:0;transition:opacity .25s;overflow-wrap:anywhere;text-align:left}
.vkw-bubble>span{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;line-clamp:4;overflow:hidden}
.vkw-bubble::after{content:'';position:absolute;left:var(--tx,50%);bottom:-6px;margin-left:-6px;border:6px solid transparent;border-bottom:0;border-top-color:inherit;border-top-color:#f4e4c1}
.vkw-bubble.show{opacity:1}
.vkw-bubble[data-ch=vampir]{background:#5a1020;color:#ffe3e8}.vkw-bubble[data-ch=vampir]::after{border-top-color:#5a1020}
.vkw-bubble[data-ch=olu]{background:#d8d0ff;color:#2a2050;font-style:italic}.vkw-bubble[data-ch=olu]::after{border-top-color:#d8d0ff}
.vkw-ripple{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:2px solid rgba(244,228,193,.9);pointer-events:none;animation:vkw-rip .55s ease-out forwards}
@keyframes vkw-rip{from{transform:scale(.2);opacity:1}to{transform:scale(1.4);opacity:0}}
.vkw-recenter{position:absolute;width:40px;height:40px;border-radius:50%;border:0;background:rgba(21,18,43,.75);color:#f4e4c1;font-size:20px;line-height:40px;text-align:center;pointer-events:auto;cursor:pointer;opacity:0;transform:scale(.6);transition:opacity .25s,transform .25s;box-shadow:0 2px 6px rgba(0,0,0,.4);padding:0}
.vkw-recenter.show{opacity:1;transform:scale(1)}
.vkw-camtoggle{position:absolute;width:40px;height:40px;border-radius:50%;border:0;background:rgba(21,18,43,.75);color:#f4e4c1;pointer-events:auto;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.4);transition:opacity .25s}
.vkw-camtoggle[hidden]{display:none}
.vkw-camtoggle svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.vkw-tag.far{opacity:.55}
.vkw-tag.far .vkw-name{font-size:10.5px;padding:1px 5px 1px 4px}
.vkw-tag.far .vkw-job{display:none}
.vkw-tag.gone{visibility:hidden}
.vkw-recenter:not(.show){pointer-events:none}
@media (max-width:540px){.vkw-bubble{max-width:min(220px,66vw);font-size:12px;padding:4px 8px}.vkw-job{font-size:9.5px}.vkw-tag.sel .vkw-name{padding:3px 8px 3px 5px;font-size:12.5px}.vkw-plaque.sel{font-size:11.5px;padding:3px 7px 3px 4px}.vkw-plaque span{max-width:64px}.vkw-plaque{font-size:10.5px}}
@media (min-width:900px){.vkw-name{font-size:13px}.vkw-plaque{font-size:12px}}
`,Fs=null,qh=0;function xw(){qh++,!Fs&&(Fs=document.createElement("style"),Fs.id="vkw-style",Fs.textContent=gw,document.head.appendChild(Fs))}function vw(){qh--,qh<=0&&Fs&&(Fs.remove(),Fs=null,qh=0)}var Wd=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bn=new Z;function _g(s,e){xw();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,c=!1,l={top:0,bottom:0,left:0,right:0},h=0,u=document.createElement("button");u.className="vkw-recenter",u.type="button",u.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",u.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),u.textContent="\u2316",u.addEventListener("click",G=>{G.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',m='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",G=>{G.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",G=>G.stopPropagation()),t.appendChild(u),t.appendChild(f);function M(G,H){let _=0,y=0,L=0;G.addEventListener("pointerdown",A=>{_=A.clientX,y=A.clientY,L=performance.now(),A.stopPropagation()}),G.addEventListener("pointerup",A=>{A.stopPropagation(),Math.hypot(A.clientX-_,A.clientY-y)<12&&performance.now()-L<700&&H()}),G.addEventListener("click",A=>A.stopPropagation())}function p(G){let H=n.get(G);if(H)return H;let _=document.createElement("div");return _.className="vkw-tag",_.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(_,u),H={id:G,el:_,mark:_.children[0],votes:_.children[1],name:_.children[2],job:_.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},M(_,()=>e.onTagTap(G)),n.set(G,H),H}function g(G){let H=i.get(G);if(H)return H;let _=document.createElement("div");return _.className="vkw-plaque",t.insertBefore(_,t.firstChild),H={el:_,sig:"",cls:"",shown:!1},M(_,()=>e.onPlaqueTap(G)),i.set(G,H),H}function S(G,H){let _=p(G),y=H.name+"|"+H.job+"|"+H.color+"|"+H.badges;y!==_.sig&&(_.sig=y,_.name.innerHTML=`<i style="background:${Mn[H.color]||"#999"}"></i>${H.badges?`<span>${H.badges}</span>`:""}<span>${Wd(H.name)}</span>`,_.job.textContent=H.job||"",_.jobText=H.job||"",_.measured=!1);let L=H.mark?H.mark.label+H.mark.color:"";L!==_.markSig&&(_.markSig=L,_.mark.hidden=!H.mark,H.mark&&(_.mark.textContent=H.mark.label,_.mark.style.setProperty("--c",H.mark.color)),_.measured=!1);let A=H.votes?H.votes.total+":"+H.votes.dots.join(","):"";A!==_.voteSig&&(_.voteSig=A,_.votes.hidden=!H.votes,H.votes&&(_.votes.innerHTML=`<b>${H.votes.total}</b>`+H.votes.dots.map(W=>`<i style="background:${W.color}">${W.w>1?"2":""}</i>`).join("")),_.measured=!1);let D=!!_.jobText&&(!c||H.picked||H.hover);_.job.hidden===D&&(_.job.hidden=!D,_.measured=!1);let q="vkw-tag"+(c?" cmp":"")+(H.me?" me":"")+(H.off?" off":"")+(H.dead?" dead":"")+(H.sel?" sel":"")+(H.picked?" picked":"")+(H.hover?" hover":"");q!==_.cls&&(_.cls=q,_.el.className=q),H.selColor&&_.el.style.setProperty("--c",H.selColor),_.data=H}function b(G,H){let _=g(G),y=H.name+"|"+H.color+"|"+(H.mark?H.mark.label:"");y!==_.sig&&(_.sig=y,_.el.innerHTML=`<i style="background:${Mn[H.color]||"#c9b48a"}"></i><span>${Wd(H.name)}</span>${H.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${Wd(H.mark.label)}</em>`:""}`);let L="vkw-plaque"+(H.sel?" sel":"")+(H.picked?" picked":"")+(H.dim?" dim":"")+(H.dead?" dead":"");L!==_.cls&&(_.cls=L,_.el.className=L),H.selColor&&_.el.style.setProperty("--c",H.selColor),_.data=H}function v(G,H){for(let[_,y]of G)H.has(_)||(y.el.remove(),G.delete(_))}function C(G,H){let _=String(G).replace(/\s+/g," ").trim();if(_.length<=H)return _;let y=_.slice(0,H-1),L=y.lastIndexOf(" ");return L>H*.6&&(y=y.slice(0,L)),y.replace(/[\s.,;:!?-]+$/,"")+"\u2026"}function E(G,H,_){let y=r.get(G);if(!y){let D=document.createElement("div");D.className="vkw-bubble",t.insertBefore(D,u),y={el:D,until:0,h:30,w:100,wx:-1e4,wy:-1e4},r.set(G,y)}let L=o<540,A=C(H,190);y.span||(y.span=document.createElement("span"),y.el.appendChild(y.span)),y.span.textContent=A,y.el.dataset.ch=_||"genel",y.el.classList.add("show"),y.until=performance.now()+2400+Math.min(7600,A.length*62),y.h=0,y.seq=++h}let x=[],w=(G,H)=>G.prio-H.prio,U=[],R=[],N=[],z=[],k=[];function B(G,H,_,y){var le,Pe,Ge,he,ke;let L=U;L.length=0;for(let[ae,j]of n){if(!(H(ae,bn)&&y(ae))){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1),j.vis=!1;continue}if(j.dist=bn.distanceTo(G.position),bn.project(G),bn.z>1||bn.x<-1.2||bn.x>1.2||bn.y<-1.2||bn.y>1.3){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1),j.vis=!1;continue}j.measured||(j.w=j.el.offsetWidth||60,j.h=j.el.offsetHeight||20,j.measured=!0),j.sx=(bn.x*.5+.5)*o,j.sy=(-bn.y*.5+.5)*a,j.depth=bn.z,j.vis=!0,L.push(j)}let A=performance.now();for(let ae of L){let j=r.get(ae.id);ae.talk=!!(j&&A<j.until)}for(let ae of L)ae.prio=(ae.data&&(ae.data.me||ae.data.picked||ae.data.mark||ae.data.votes)?0:1)*1e3+ae.dist;L.sort(w),x.length=0;let D=L.length>6;for(let ae of L){let j=ae.sx-ae.w/2,Fe=ae.sy-ae.h,Ke=0;for(let ce=0;ce<6;ce++){let Re=!1;for(let O of x)j<O.x+O.w-2&&j+ae.w>O.x+2&&Fe<O.y+O.h-1&&Fe+ae.h>O.y+1&&(Fe=O.y-ae.h-1,Re=!0);if(!Re)break;Ke++}let Ne=ae.talk||ae.data&&(ae.data.me||ae.data.sel||ae.data.picked||ae.data.mark||ae.data.votes),Ve=D&&!Ne&&(ae.dist>15||Ke>0),mt=D&&!Ne&&Ke>=3||!Ne&&Fe<l.top+2,Mt=(Ve?" far":"")+(mt?" gone":"");if(Mt!==ae.fc&&(ae.fc=Mt,ae.el.classList.toggle("far",Ve),ae.el.classList.toggle("gone",mt),ae.measured=!1),mt){ae.x=-1e4,ae.y=-1e4;continue}j=Math.max(l.left+2,Math.min(o-l.right-ae.w-2,j)),Fe=Math.max(l.top+2,Math.min(a-l.bottom-ae.h-2,Fe)),x.push({x:j,y:Fe,w:ae.w,h:ae.h,t:ae}),ae.x=j,ae.y=Fe,(!ae.shown||Math.abs(j-((le=ae.wx)!=null?le:-1e4))>.4||Math.abs(Fe-((Pe=ae.wy)!=null?Pe:-1e4))>.4)&&(ae.el.style.transform=`translate3d(${j.toFixed(1)}px,${Fe.toFixed(1)}px,0)`,ae.wx=j,ae.wy=Fe);let be=10+Math.round((1-ae.depth)*1e3);be!==ae.wz&&(ae.el.style.zIndex=String(be),ae.wz=be),ae.shown=!0}let q=A,W=N;W.length=0;for(let[ae,j]of r){let Fe=n.get(ae);if(q>j.until&&j.el.classList.contains("show")&&j.el.classList.remove("show"),!(Fe&&Fe.vis&&Fe.shown&&Fe.x>-1e3&&q<=j.until+400&&Fe.sx>l.left-8&&Fe.sx<o-l.right+8&&Fe.sy>l.top&&Fe.sy<a-l.bottom+10)){j.wx!==-1e4&&(j.el.style.transform="translate3d(-9999px,0,0)",j.wx=-1e4);continue}j.h||(j.h=j.el.offsetHeight||26,j.w=j.el.offsetWidth||100),j.t=Fe,W.push(j)}W.sort((ae,j)=>j.seq-ae.seq);let J=o<540?2:3,me=z;me.length=0;for(let ae=0;ae<W.length;ae++){let j=W[ae],Fe=j.t,Ke=ae>=J,Ne=Math.max(l.left+4,Math.min(o-l.right-j.w-4,Fe.sx-j.w/2)),Ve=Fe.y-j.h-8;if(!Ke){for(let ce=0;ce<6;ce++){let Re=!1;for(let O of me)Ne<O.x+O.w&&Ne+j.w>O.x&&Ve<O.y+O.h+4&&Ve+j.h+4>O.y&&(Ve=O.y-j.h-6,Re=!0);for(let O of x){if(O.t===Fe||!(Ne<O.x+O.w&&Ne+j.w>O.x&&Ve<O.y+O.h+2&&Ve+j.h+2>O.y))continue;let oe=O.x+O.w+2-Ne,X=Ne+j.w-O.x+2,se=oe<X?Ne+oe:Ne-X;Math.min(oe,X)<60&&Fe.sx>se+12&&Fe.sx<se+j.w-12&&se>=l.left+4&&se+j.w<=o-l.right-4?Ne=se:Ve=O.y-j.h-4,Re=!0}if(!Re)break}if(ae>0&&Fe.y-j.h-8-Ve>36&&(Ke=!0),Ve<l.top+4&&(Ke=!0),!Ke){for(let ce of x)if(ce.t!==Fe&&ce.t.data&&ce.t.data.sel&&Ne<ce.x+ce.w&&Ne+j.w>ce.x&&Ve<ce.y+ce.h&&Ve+j.h>ce.y){Ke=!0;break}}if(!Ke){for(let ce of R)if(ce.data&&ce.data.sel&&ce.shown&&Ne<ce.wx+ce.w&&Ne+j.w>ce.wx&&Ve<ce.wy+ce.h&&Ve+j.h>ce.wy){Ke=!0;break}}}if(Ke){j.wx!==-1e4&&(j.el.style.transform="translate3d(-9999px,0,0)",j.wx=-1e4);continue}let mt=k[me.length];mt||(mt={x:0,y:0,w:0,h:0},k.push(mt)),mt.x=Ne,mt.y=Ve,mt.w=j.w,mt.h=j.h,me.push(mt);let Mt=Math.max(10,Math.min(j.w-10,Fe.sx-Ne));Math.abs(Mt-(j.tx||0))>.5&&(j.el.style.setProperty("--tx",Mt.toFixed(0)+"px"),j.tx=Mt),(Math.abs(Ne-j.wx)>.4||Math.abs(Ve-((Ge=j.wy)!=null?Ge:-1e4))>.4)&&(j.el.style.transform=`translate3d(${Ne.toFixed(1)}px,${Ve.toFixed(1)}px,0)`,j.wx=Ne,j.wy=Ve);let be=String(2e3+(100-ae));be!==j.wz&&(j.el.style.zIndex=be,j.wz=be)}let ie=R;ie.length=0;for(let[ae,j]of i){if(!(_(ae,bn)&&!(j.data&&j.data.hidden))){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1);continue}if(bn.project(G),bn.z>1||Math.abs(bn.x)>1.15||Math.abs(bn.y)>1.15){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1);continue}(!j.w||j.sigW!==j.sig+j.cls)&&(j.w=j.el.offsetWidth||70,j.h=j.el.offsetHeight||20,j.sigW=j.sig+j.cls),j.ax=(bn.x*.5+.5)*o,j.ay=(-bn.y*.5+.5)*a,j.px=j.ax,j.py=j.ay,ie.push(j)}for(let ae=0;ae<5;ae++){for(let j=0;j<ie.length;j++){let Fe=ie[j];for(let Ke=j+1;Ke<ie.length;Ke++){let Ne=ie[Ke],Ve=(Fe.w+Ne.w)/2+3-Math.abs(Fe.px-Ne.px),mt=(Fe.h+Ne.h)/2+2-Math.abs(Fe.py-Ne.py);if(Ve>0&&mt>0)if(mt<Ve){let Mt=(Fe.py<Ne.py?-1:1)*mt/2;Fe.py+=Mt,Ne.py-=Mt}else{let Mt=(Fe.px<Ne.px?-1:1)*Ve/2;Fe.px+=Mt,Ne.px-=Mt}}}for(let j of ie){let Fe=j.px-j.ax,Ke=j.py-j.ay,Ne=Math.hypot(Fe,Ke);Ne>28&&(j.px=j.ax+Fe/Ne*28,j.py=j.ay+Ke/Ne*28)}}for(let ae of ie){let j=Math.max(l.left+2,Math.min(o-l.right-ae.w-2,ae.px-ae.w/2)),Fe=Math.max(l.top+2,Math.min(a-l.bottom-ae.h-2,ae.py-ae.h/2));(!ae.shown||Math.abs(j-((he=ae.wx)!=null?he:-1e4))>.4||Math.abs(Fe-((ke=ae.wy)!=null?ke:-1e4))>.4)&&(ae.el.style.transform=`translate3d(${j.toFixed(1)}px,${Fe.toFixed(1)}px,0)`,ae.wx=j,ae.wy=Fe);let Ke=ae.data&&ae.data.sel?"900":"5";Ke!==ae.wz&&(ae.el.style.zIndex=Ke,ae.wz=Ke),ae.shown=!0}}function Y(G,H){let _=document.createElement("div");_.className="vkw-ripple",_.style.left=G+"px",_.style.top=H+"px",t.appendChild(_),setTimeout(()=>_.remove(),600)}return{el:t,setSize(G,H){o=G,a=H;for(let _ of n.values())_.measured=!1},setInsets(G){l={top:G.top||0,bottom:G.bottom||0,left:G.left||0,right:G.right||0}},setCompact(G){if(G!==c){c=G;for(let H of n.values())H.sig="",H.measured=!1}},setTag:S,setPlaque:b,bubble:E,project:B,ripple:Y,tags:n,plaques:i,sync(G,H){v(n,G),v(i,H);for(let[_,y]of r)G.has(_)||(y.el.remove(),r.delete(_))},setCamToggle(G,H,_){if(f.hidden=!G,!G)return;let y=H==="follow"?"f":"o";if(f.dataset.m!==y){f.dataset.m=y,f.innerHTML=H==="follow"?m:d;let L=H==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=L,f.setAttribute("aria-label",L)}f.style.right=12+(_.right||0)+"px",f.style.bottom=60+(_.bottom||0)+"px"},setRecenter(G,H){u.classList.toggle("show",!!G),u.style.right=12+(H.right||0)+"px",u.style.bottom=12+(H.bottom||0)+"px"},hitTag(G,H){for(let _ of n.values())if(!(!_.vis||!_.data||!_.data.sel)&&G>=_.x-6&&G<=_.x+_.w+6&&H>=_.y-6&&H<=_.y+_.h+6)return _;return null},clear(){for(let G of[n,i,r]){for(let H of G.values())H.el.remove();G.clear()}},dispose(){t.remove(),vw()}}}var yw=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,ll=null;function _w(){ll||(ll=document.createElement("style"),ll.id="vkw-joy-style",ll.textContent=yw,document.head.appendChild(ll))}function Mg(s,e={}){var U;_w();let t=(U=e.touch)!=null?U:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,c=0,l=null,h=0,u=0,f=!1,d=new Set;function m(R,N){i.style.transform=`translate3d(${(R*r).toFixed(1)}px,${(-N*r).toFixed(1)}px,0)`}function M(R){if(!f||l!=null)return;R.preventDefault(),R.stopPropagation(),l=R.pointerId,n.setPointerCapture&&n.setPointerCapture(l);let N=n.getBoundingClientRect();h=N.left+N.width/2,u=N.top+N.height/2,n.classList.add("act"),p(R)}function p(R){if(R.pointerId!==l)return;R.preventDefault();let N=(R.clientX-h)/r,z=-(R.clientY-u)/r,k=Math.hypot(N,z);k>1&&(N/=k,z/=k);let B=Math.hypot(N,z);if(B<.12)a=0,c=0;else{let Y=(B-.12)/.88/B;a=N*Y,c=z*Y}m(N,z)}function g(R){R.pointerId===l&&(l=null,a=0,c=0,m(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",M),n.addEventListener("pointermove",p),n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g);let S=R=>!!(R&&R.tagName&&(R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.tagName==="SELECT"||R.isContentEditable)),b=R=>S(R)||S(document.activeElement),v={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function C(R){if(!f||R.ctrlKey||R.metaKey||R.altKey||b(R.target))return;let N=v[R.code];N&&(d.add(N),R.code.startsWith("Arrow")&&R.preventDefault())}function E(R){let N=v[R.code];N&&d.delete(N)}let x=R=>{S(R.target)&&d.clear()};window.addEventListener("focusin",x);let w=()=>d.clear();return window.addEventListener("keydown",C),window.addEventListener("keyup",E),window.addEventListener("blur",w),{touch:t,vector(R){let N=a,z=c;if(d.size){N+=(d.has("r")?1:0)-(d.has("l")?1:0),z+=(d.has("u")?1:0)-(d.has("d")?1:0);let k=Math.hypot(N,z);k>1&&(N/=k,z/=k)}return R.x=N,R.y=z,R},setEnabled(R){R!==f&&(f=R,n.classList.toggle("on",R&&t&&!o),R||(d.clear(),a=0,c=0,l=null,m(0,0),n.classList.remove("act")))},place(R,N,z){let k=R.joystick,B,Y,G;if(k===null){o=!0,n.classList.remove("on");return}o=!1,k&&k.size>0?(G=Math.max(88,Math.min(160,k.size)),B=k.left||0,Y=z-(k.bottom||0)-G):(G=112,B=(R.left||0)+18,Y=Math.max((R.top||0)+10,z-(R.bottom||0)-18-G)),n.style.left=B+"px",n.style.top=Y+"px",n.style.width=n.style.height=G+"px";let H=Math.round(G*.41);i.style.width=i.style.height=H+"px",i.style.margin=-H/2+"px 0 0 "+-H/2+"px",r=G*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",C),window.removeEventListener("keyup",E),window.removeEventListener("blur",w),window.removeEventListener("focusin",x),n.remove()}}}var bg=2.3;function cl(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function Ur(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function Mw(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,c=s.z+i*o,l=Math.hypot(a,c);if(l>=bg)return;let h=a,u=c;l<.01&&(h=-i,u=n);let f=Math.hypot(h,u)||1,d=bg+.25,m=n/Math.sqrt(r),M=i/Math.sqrt(r);t.push({x:h/f*d-m*1.2,z:u/f*d-M*1.2}),t.push({x:h/f*d+m*1.2,z:u/f*d+M*1.2})}function Sg(s,e){let t=s[s.length-1];t&&Mw(t,e,s),s.push({x:e.x,z:e.z})}function bw(s,e,t,n){let i=jt(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(Ur(e+i*o/r,n))}function kr(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,c=cl(e).a;if(n!=null){let l=Ur(n,r);i.push(l),a=l,c=n}else if(cl(e).r>o){let l=cl(e),h=Ur(l.a,r);i.push(h),a=h,c=l.a}if(t.house){let l=t.angle,h=Math.abs(jt(l-c)),u=Ur(l,r);if(cl(a).r>r-.8&&h<1.4?bw(i,c,l,r):Sg(i,u),t.peek){let d=t.house.peek,m=jt(cl(d).a-l)>=0?1:-1,M=(t.halfWidth||3)+1.4,p=s.R,g=Ur(l+m*(M/(p-2)),p-2.2),S=Ur(l+m*(M/(p+1)),p+1.2),b=Ur(l+m*((M-.6)/(p+3.4)),p+3.6);i.push(g,S,b,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else Sg(i,t);return i}function Xd(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,c=i.r+.32;if(a<c*c){let l=Math.sqrt(a)||.001;s.x=i.x+r/l*c,s.z=i.z+o/l*c}}}function Br(s,e,t=.42){if(!e||!e.length||s.length<2)return s;let n=s;for(let i=0;i<3;i++){let r=[n[0]],o=!1;for(let a=1;a<n.length;a++){let c=r[r.length-1],l=n[a],h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=null,m=1,M=0;if(f>1e-4)for(let p of e){if(p.tag==="fire")continue;let g=((p.x-c.x)*h+(p.z-c.z)*u)/f;if(g<=.02||g>=.98)continue;let S=c.x+h*g-p.x,b=c.z+u*g-p.z,v=Math.hypot(S,b);v<p.r+t&&g<m&&(d=p,m=g,M=v)}if(d){let p=c.x+h*m-d.x,g=c.z+u*m-d.z;M<.001&&(p=-u,g=h);let S=Math.hypot(p,g)||1,b=d.r+t+.25;r.push({x:d.x+p/S*b,z:d.z+g/S*b}),o=!0}r.push(l)}if(n=r,!o)break}return n}function Yh(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)Xd(t,e,null);return t}var Kh=()=>typeof window!="undefined"&&window.VKRules||null;function Zh(s){let e=Kh();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function Sw(s,e){let t=Kh();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function wg(s,e,t){let n=Kh();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=Zh(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!Pd[e.role];case"iftiraci":return!o&&!Pd[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return Sw(s,t)?!1:!(t==="poison"&&o);default:return!1}}function hl(s){let e=Kh();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,c]of o)a===c&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function Jh(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return ci.poison;if(n.witch.heal===e.id)return ci.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&ci[r.role])return ci[r.role];let a=(n.team||[]).filter(c=>c.targetId===e.id&&c.vampId!==r.id).map(c=>c.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?ci.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function ul(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function qd(s,e){let t=Zh(s);return t==="vote"?ci.vote.color:t==="shoot"?ci.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?ci.poison:ci.heal).color:(ci[s.me.role]||ci.vote).color:"#f2c12e"}var Tg=new Map,Os={walk:2.8,brisk:3.75,sneak:2.4,sprint:5.4},ei=.88,Hr=7.6,Us=1.1,Hn=1.15;function Eg(s,e){if(typeof window!="undefined"){if(e){let t=window.__vkwTpLog||(window.__vkwTpLog=[]);t.length<20&&t.push(s+" "+e)}s==="entry"?window.__vkwEntryTeleports=(window.__vkwEntryTeleports||0)+1:s==="return"?window.__vkwReturnVanish=(window.__vkwReturnVanish||0)+1:window.__vkwTeleports=(window.__vkwTeleports||0)+1}}function Tw(s){typeof window!="undefined"&&(s<=(window.__vkwShowLate||0)||(window.__vkwShowLate=+s.toFixed(2)))}typeof window!="undefined"&&(window.__vkwTeleports=window.__vkwTeleports||0,window.__vkwReturnVanish=window.__vkwReturnVanish||0,window.__vkwShowLate=window.__vkwShowLate||0);function Ag(s){let e=new Map,t=null,n=new Map,i=-99,r=0;function o(b){for(let v of s.village.benchSlots)if(Math.hypot(b.x-v.x,b.z-v.z)<1.25)return v;return null}function a(b,v){let C=-b,E=-v,x=Math.hypot(C,E)||1,w=s.camera.position.x-b,U=s.camera.position.z-v,R=Math.hypot(w,U)||1;return Math.atan2(C/x*.45+w/R*.55,E/x*.45+U/R*.55)}function c(b){s.village.openDoor(b,1.3),s.sfxThrottled("door",.35)}function l(b,v,C,E){let x=s.village,w=x.layout;if(!w)return;let U=[];if(E){if(b.peeking=null,v.kind==="plaza"||v.kind==="gather")b.inside=null,b.pos.set(v.x,0,v.z),b.yaw=v.face!=null?v.face:a(v.x,v.z),b.faceYaw=b.yaw,b.setVisible(!0),b.run([{pose:v.pose||"idle",fade:0}]);else if(v.kind==="house"){let z=s.houseAnchors(v.house);if(!z)return;if(v.peek){b.inside=null;let k=kr(w,z.approach,{house:z,angle:x.house(v.house).angle,peek:!0,halfWidth:x.house(v.house).info.hx});b.pos.set(z.peek.x,0,z.peek.z),b.yaw=Math.atan2(z.backWin.x-z.peek.x,z.backWin.z-z.peek.z),b.faceYaw=b.yaw,b.peeking=v.house,b.peekPath=k.slice(-5),b.setVisible(!0),b.run([{pose:"peek",fade:0}])}else b.inside=v.house,b.pos.set(z.inside.x,0,z.inside.z),b.setVisible(!1),b.run([{pose:"idle",fade:0}])}else v.kind==="gone"&&(b.setVisible(!1),b.run([]));return}if(v.kind==="gone"){b.visible&&(s.poofAt(b.pos.x,b.pos.z),b.setVisible(!1)),b.run([]);return}if(!b.visible&&!b.inside&&!b.peeking){if(v.kind==="plaza"||v.kind==="gather"){l(b,v,0,!0),s.fx.emit("magic",v.x,.8,v.z,"#f4e4c1",10);return}x.house(b.id)&&(b.inside=b.id)}C&&U.push({wait:C});let R={x:b.pos.x,z:b.pos.z},N=null;if(b.inside){let z=b.inside,k=s.houseAnchors(z),B=x.house(z);if(k&&B){if(v.kind==="house"&&v.house===z&&!v.peek)return;U.push({at:k.inside,face:k.rotY,snapFace:!0},{call:()=>c(z)},{wait:.12},{show:!0,call:Y=>{Y.inside=null}},{walk:[k.approach],mode:"walk"}),R=k.approach,N=B.angle}else b.inside=null}else if(b.peeking){if(v.kind==="house"&&v.peek&&v.house===b.peeking)return;let z=(b.peekPath||[]).slice().reverse();z.length>1&&(U.push({pose:"idle",fade:.2},{walk:z.slice(1),mode:"sneak",call:k=>{k.peeking=null}}),R=z[z.length-1]),b.peeking=null}if(v.kind==="plaza"||v.kind==="gather"){let z=Yh({x:v.x,z:v.z},s.obstacles),k=Br(kr(w,R,z,N).map((Y,G,H)=>G>0&&G<H.length-1?Yh(Y,s.obstacles):Y),s.obstacles);k.shift(),k.length&&U.push({walk:k,mode:v.mode||"walk"});let B=v.face!=null?v.face:a(z.x,z.z);U.push({face:B}),v.pose?U.push({pose:v.pose}):U.push({pose:"idle"})}else if(v.kind==="house"){let z=v.house,k=s.houseAnchors(z),B=x.house(z);if(!k||!B)return;let Y=Br(kr(w,R,{house:k,angle:B.angle,peek:!!v.peek,halfWidth:B.info.hx},N),s.obstacles);Y.shift();let G=u(R,Y)>12,H=v.mode||(G?v.house===b.id?"brisk":"sprint":"walk");if(v.peek){let _=Y.slice(-2),y=Y.slice(0,Y.length-2);y.length&&U.push({walk:y,mode:H}),U.push({walk:_,mode:"sneak"}),U.push({faceTo:k.backWin},{pose:"peek",call:L=>{L.peeking=z,L.peekPath=Y.slice(-5)}})}else{let _=v.budget;if(_!=null&&Y.length){let y=u(R,Y),L=Math.max(.6,_-(C||0)-1.4),A=y/L,D=A<2.4?"walk":A<3.4?"brisk":"sprint";if(A<=5)U.push({walk:Y,mode:v.mode||D});else if(A<=Hr*ei)U.push({walk:Y,mode:"sprint",speed:Math.min(Hr,A/ei)});else{Eg("entry");let q=Math.max(.5,L-.5)*5,W=0,J=R,me=[];for(let ie of Y){let le=Math.hypot(ie.x-J.x,ie.z-J.z);if(W+le>q)break;W+=le,me.push(ie),J=ie}me.length&&U.push({walk:me,mode:"sprint"}),U.push({call:ie=>{s.fx.emit("mist",ie.pos.x,.6,ie.pos.z,"#c9c2d3",12)},hide:!0},{wait:.25},{at:k.approach,face:Math.atan2(k.door.x-k.approach.x,k.door.z-k.approach.z),snapFace:!0,show:!0,call:()=>s.fx.emit("mist",k.approach.x,.6,k.approach.z,"#c9c2d3",12)})}}else Y.length&&U.push({walk:Y,mode:H});U.push({faceTo:k.door},{wait:.05},{call:()=>c(z)},{wait:.15},{walk:[k.inside],mode:_!=null?"brisk":"walk"},{hide:!0,call:y=>{y.inside=z,n.set(z,s.time+9+Math.random()*4)}})}}b.run(U)}function h(b,v){if(!b.visible||b.inside||b.peeking||b.claimed||b.base==="sit"&&!v.pose)return!1;let C=v.x-b.pos.x,E=v.z-b.pos.z,x=Math.hypot(C,E);if(x>6)return!1;let w=C*C+E*E;if(w>1e-4){let N=-(b.pos.x*C+b.pos.z*E)/w;if(N=N<0?0:N>1?1:N,Math.hypot(b.pos.x+C*N,b.pos.z+E*N)<2.5)return!1}let U=Yh({x:v.x,z:v.z},s.obstacles);b.retargetAt=s.time;let R=[];if(x>.05){let N=Br([{x:b.pos.x,z:b.pos.z},U],s.obstacles);N.shift(),R.push({walk:N,mode:x>3?"brisk":"walk"})}return R.push({wait:.5},{face:v.face!=null?v.face:a(U.x,U.z)},{pose:v.pose||"idle"}),b.run(R),!0}function u(b,v){let C=0,E=b;for(let x of v)C+=Math.hypot(x.x-E.x,x.z-E.z),E=x;return C}function f(b,v,C,E,x,w,U){if(!C.length)return;E=Math.max(.5,E);let R=u(v,C),N=R/E;if(N<Os.walk*ei*.94){b.push({walk:C,mode:"walk"});return}if(N<Os.brisk*ei*.95){b.push({walk:C,mode:"brisk"});return}if(N<Os.sprint*ei*.96){b.push({walk:C,mode:"sprint"});return}if(!U&&N<=Hr*ei){b.push({walk:C,mode:"sprint",speed:Math.min(Hr,N/ei*1.02)});return}let z=U?Os.sprint:Hr;Eg(U?"return":"show",`len=${R.toFixed(1)} avail=${E.toFixed(2)}`);let k=Math.max(.4,E-.45)*z*ei,B=0,Y=v,G=[];for(let H of C){let _=Math.hypot(H.x-Y.x,H.z-Y.z);if(B+_>k)break;B+=_,G.push(H),Y=H}G.length&&b.push({walk:G,mode:"sprint",speed:z}),b.push({call:H=>{s.fx.emit("mist",H.pos.x,.6,H.pos.z,"#c9c2d3",12)},hide:!0},{wait:.2},{at:x,face:w,snapFace:!0,show:!0,call:()=>s.fx.emit("mist",x.x,.6,x.z,"#c9c2d3",12)})}function d(b,v,C){let E=s.village,x=E.layout,w=s.houseAnchors(b),U=E.house(b),R=s.houseAnchors(v),N=E.house(v);if(!x||!w||!U||!R||!N)return null;let z=Br(kr(x,w.approach,{house:R,angle:N.angle,peek:!!C,halfWidth:N.info.hx},U.angle),s.obstacles);z.shift();let k=[],B=R.approach;C&&(k=z.splice(Math.max(0,z.length-2)),B=z.length?z[z.length-1]:w.approach);let Y=C?B:R.approach,G=Br(kr(x,Y,{house:w,angle:U.angle,halfWidth:U.info.hx},C?null:N.angle),s.obstacles);return G.shift(),{L:x,aH:w,hH:U,aT:R,hT:N,pts:z,tail:k,end:B,back:Y,pts2:G}}function m(b,v,C){let E=d(b,v,C);if(!E)return null;let x=u(E.aH.approach,E.pts),w=E.tail.length?u(E.pts.length?E.pts[E.pts.length-1]:E.aH.approach,E.tail):0;return{out:x,tail:w,back:u(E.back,E.pts2)}}function M(b){let v=d(b.home,b.to,b.peek),C=[];if(!v)return C;let{aH:E,aT:x,pts:w,tail:U,end:R,back:N,pts2:z}=v,k=b.clock(),B=G=>({call:()=>Tw(b.clock()-G)});b.delay&&C.push({wait:b.delay}),C.push({at:E.inside,face:E.rotY,snapFace:!0},{call:()=>c(b.home)},{wait:.12},{show:!0,call:G=>{G.inside=null}},{walk:[E.approach],mode:"brisk"});let Y=b.tArrive-k-(b.delay||0)-Us;if(b.peek){let G=u(R,U)/(Os.sneak*ei);f(C,E.approach,w,Y-G,R,Math.atan2((U[0]||R).x-R.x,(U[0]||R).z-R.z)),C.push({walk:U,mode:"sneak"},B(b.tArrive),{faceTo:x.backWin},{pose:"peek",call:H=>{H.peeking=b.to}},{until:()=>b.clock()>=b.tLeave},{pose:"idle",fade:.2,call:H=>{H.peeking=null}},{walk:U.slice(0,-1).reverse().concat([R]),mode:"sneak"})}else f(C,E.approach,w,Y,x.approach,Math.atan2(x.door.x-x.approach.x,x.door.z-x.approach.z)),C.push(B(b.tArrive),{faceTo:x.door},{wait:.05}),b.bounced?(C.push({once:"interact-right",opts:{timeScale:1.1}},{wait:.3},{call:G=>{s.fx.emit("poof",x.door.x,1.2,x.door.z,"#9fb3d1",5),s.sfxThrottled("door",.25),b.onBounce&&b.onBounce(G)}},{once:"emote-no",opts:{timeScale:1.2},part:.75}),b.tLeave!=null&&C.push({until:()=>b.clock()>=b.tLeave})):C.push({call:()=>c(b.to)},{wait:.15},{walk:[x.inside],mode:"brisk"},{hide:!0,call:G=>{G.inside=b.to,n.set(b.to,s.time+5),b.onInside&&b.onInside(G)}},{until:()=>b.clock()>=b.tLeave},{at:x.inside,face:x.rotY,snapFace:!0},{call:()=>c(b.to)},{wait:.12},{show:!0,call:G=>{G.inside=null,b.onOut&&b.onOut(G)}},{walk:[x.approach],mode:"brisk"});return C.push({call:G=>{let H=[];f(H,N,z,b.tHome-b.clock()-Hn,E.approach,Math.atan2(E.door.x-E.approach.x,E.door.z-E.approach.z),!0),H.push(B(b.tHome-Hn),{faceTo:E.door},{call:()=>c(b.home)},{wait:.12},{walk:[E.inside],mode:"brisk"},{hide:!0,call:_=>{_.inside=b.home,b.onHome&&b.onHome(_)}}),G.steps.splice(1,0,...H)}}),C}function p(b,v){let C=s.village,E=C.layout,x=s.houseAnchors(v),w=C.house(v);return!E||!x||!w?null:Br(kr(E,b,{house:x,angle:w.angle,halfWidth:w.info.hx},null),s.obstacles)}function g(b,v){let C=s.village,E=C.layout;if(!E||!b||!b.me)return;let{room:x,me:w,players:U}=b,R=x.phase,N=R==="reveal"||R==="night"||R==="day"||R==="hunter",z=!w.alive,k=R!==t;t=R;let B=b.room.night&&b.room.night.stage==="show"?Tg:hl(b),Y=new Set(x.winners||[]),G=U.filter(D=>D.alive&&!D.left).sort((D,q)=>D.seat-q.seat).map(D=>D.id),H=Math.max(4.6,Math.min(7.5,E.Rp*.62)),_=D=>{let q=C.house(D.id),W=q?q.angle:D.seat/Math.max(1,U.length)*it;return{x:Math.sin(W)*H,z:Math.cos(W)*H,face:W+Math.PI}},y=new Map;if(R==="lobby"||R==="ended"){let D=[];for(let q of U){if(q.left)continue;let W=q.id===w.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,J=W?{x:W.x,z:W.z}:Oh(E,q.pos?q.pos.x:.5,q.pos?q.pos.y:.8);D.push({id:q.id,x:J.x,z:J.z,fixed:!!W})}for(let q=0;q<4;q++)for(let W=0;W<D.length;W++)for(let J=W+1;J<D.length;J++){let me=D[W],ie=D[J],le=ie.x-me.x,Pe=ie.z-me.z,Ge=Math.hypot(le,Pe);if(Ge>=.95)continue;let he=Ge>.001?le/Ge:1,ke=Ge>.001?Pe/Ge:0,ae=(.95-Ge)/2,j=me.fixed?0:ie.fixed?2:1,Fe=ie.fixed?0:me.fixed?2:1;me.x-=he*ae*j,me.z-=ke*ae*j,ie.x+=he*ae*Fe,ie.z+=ke*ae*Fe}for(let q of D)y.set(q.id,{x:+q.x.toFixed(2),z:+q.z.toFixed(2)})}k&&R==="night"&&(i=s.time,r=s.leadInLeft?s.leadInLeft():3.6);let L=s.time-i,A=R==="night"&&L<r?Math.max(1,r-L):null;for(let D of U){let q=s.ensureChar(D);if(!q)continue;q.isMe=D.id===w.id;let W=!D.left&&(D.alive||R==="hunter"&&D.id===x.hunterId),J;if(!W)J={kind:"gone"};else if(R==="reveal"){let he=G.indexOf(D.id),ke=Math.max(G.length,1),ae=he/ke*it+.3,j=4.3+(ke>12?he%2*1.3:0);J={kind:"gather",x:Math.sin(ae)*j,z:Math.cos(ae)*j,face:ae+Math.PI,pose:"warm"}}else if(R==="night")J={kind:"house",house:D.id};else if(R==="day"||R==="hunter"){let he=_(D);J={kind:"plaza",x:+he.x.toFixed(2),z:+he.z.toFixed(2),face:he.face,pose:D.connected?null:"sit",ring:!0}}else{let he=y.get(D.id)||Oh(E,D.pos?D.pos.x:.5,D.pos?D.pos.y:.8),ke=null,ae=null,j=o(he);D.connected?R==="ended"?ke=Y.has(D.id)?"cheer":null:j&&(ke="sit",ae=j.a+Math.PI):ke="sit",J={kind:"plaza",x:he.x,z:he.z,pose:ke,face:ae}}A!=null&&J.kind==="house"&&(J.budget=A);let me=J.kind+":"+(J.house||"")+":"+(J.peek?"p":"")+":"+(J.x!=null?J.x.toFixed(2)+","+J.z.toFixed(2):"")+":"+(J.pose||""),ie=e.get(D.id),le=v||q.fresh;if(q.claimed&&!le){e.delete(D.id);continue}if(q.fresh=!1,q.isMe&&s.driving&&J.kind==="plaza"&&!le)e.set(D.id,"drive");else if(ie!==me||le){e.set(D.id,me);let he=0;k&&!le?R==="night"?he=q.isMe?.2:Math.random()*1.6:R==="day"||R==="hunter"?he=.3+Math.random()*2.2:R==="reveal"&&(he=Math.random()*.8):ie&&ie.startsWith("house")&&J.kind==="house"&&R==="night"&&!le&&(he=.1),J.budget!=null&&(he=q.isMe?.1:Math.random()*.5),!le&&!k&&J.kind==="plaza"&&ie&&ie.startsWith("plaza")&&h(q,J)||l(q,J,he,le)}let Pe=s.showDead&&s.showDead.has(D.id)&&D.id===w.id;if(D.left?!1:(!D.alive||Pe)&&(N&&(z||Pe)||R==="ended")){let he=s.ensureGhost(D);if(he){let ke=D.id===w.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,ae=D.ghostPos||D.pos,j=ke?{x:ke.x,z:ke.z}:Oh(E,ae?ae.x:.5,ae?ae.y:.8),Fe="g:"+j.x.toFixed(2)+","+j.z.toFixed(2);D.id===w.id&&s.driving&&!he.fresh?e.set("g"+D.id,"drive"):(e.get("g"+D.id)!==Fe||he.fresh)&&(e.set("g"+D.id,Fe),he.fresh&&(he.pos.set(j.x,0,j.z),he.fresh=!1,he.yaw=a(j.x,j.z),s.fx.emit("magic",j.x,1,j.z,"#d8d0ff",12)),he.isMe=D.id===w.id,he.run([{walk:[{x:j.x,z:j.z}],mode:"stroll"},{face:a(j.x,j.z)}]))}}else s.removeGhost(D.id)}for(let D of U){let q=C.house(D.id);if(q)if(R==="lobby"&&(q.flickOut=!1),q.dead=N||R==="ended"?(!D.alive||D.left)&&!(s.isHeldDeath&&s.isHeldDeath(D.id)):!1,R==="night"){let W=(n.get(D.id)||0)>s.time?1:0;for(let[,J]of B)J===D.id&&(W=Math.max(W,.8));C.setLit(D.id,W)}else C.setLit(D.id,1)}R!=="night"&&n.clear()}function S(b){if(!b||b.room.phase!=="night")return;let v=s.village,C=b.room.night&&b.room.night.stage==="show"?Tg:hl(b);for(let E of b.players){if(!v.house(E.id))continue;let x=(n.get(E.id)||0)>s.time?1:0;for(let[,w]of C)w===E.id&&(x=Math.max(x,.8));v.setLit(E.id,x)}}return{apply:g,tick:S,tripSteps:M,tripRoute:m,pathTo:p,lit(b,v){n.set(b,s.time+v)},reset(){e.clear(),t=null,n=new Map},forget(b){e.delete(b),e.delete("g"+b)}}}var ks=20,Ti=ks-.6,Bs=3,fl=Os.sprint*ei*.95,Rg=8.6,Ew=Hn+1,Aw={kill:1,steal:1,poison:1};function Yd(s,e,t){return t?{dwell:3.5,dwellMin:2}:e?{dwell:1.9,dwellMin:1.5}:s?{dwell:Hn+3,dwellMin:Hn+2.3}:{dwell:Hn+1.4,dwellMin:Hn+.7}}function Zd(s,e){let t=s.tail?s.tail/(Os.sneak*ei):0;return{outFix:Us+t,backFix:(e?t:Us)+Hn}}function Rw(s,e,t){let n=Zd(s,t);return n.outFix+s.out/Bs+e+n.backFix+s.back/Bs}function Gr(s,e){let{outFix:t,backFix:n}=Zd(s,e.peek),i=e.s0,r;e.tA!=null?(r=e.tA,i=Math.max(e.s0,r-t-s.out/Bs)):(r=i+t+s.out/Bs,e.tAmin!=null&&r<e.tAmin&&(r=e.tAmin),e.tAmax!=null&&r>e.tAmax&&(r=Math.max(e.tAmax,i+t+s.out/(Hr*ei*.9))));let o=e.dwell,a=e.dwellMin!=null?Math.min(e.dwellMin,o):o,c=e.end-1.5;r+o+n>c&&(o=Math.max(a,c-r-n));let l=r+o+n+s.back/Bs;return{s0:i,tA:r,tL:r+o,tH:Math.min(e.end,l)}}function Kd(s,e){let t=s&&s.root.userData;if(!(!t||!t.mats))for(let n=0;n<t.mats.length;n++)t.mats[n].opacity=t.op*e}var Cw={attack:1,steal:1,poison:1},$h="#5fe08a",Cg={seer:1,watch:1,promote:1,locked:1,bounced:1,lockreport:1,steal:1,stealfail:1,saved:1,attacked:1,killed:1};function Ig(s,e,t,n){let i="",r=-1,o=-1,a=!1,c=null,l=null,h=null,u=!1,f=new Set,d=null;function m(){let N=document.createElement("canvas");N.width=N.height=64;let z=N.getContext("2d");z.shadowColor="rgba(95,224,138,0.9)",z.shadowBlur=10,z.fillStyle="#ffffff";let k=5,B=(G,H,_,y)=>{z.beginPath(),z.moveTo(G+k,H),z.arcTo(G+_,H,G+_,H+y,k),z.arcTo(G+_,H+y,G,H+y,k),z.arcTo(G,H+y,G,H,k),z.arcTo(G,H,G+_,H,k),z.fill()};B(25,10,14,44),B(10,25,44,14);let Y=new is(N);return Y.colorSpace=Bt,Y}function M(){if(d)return d;let N=m(),z=[];for(let k=0;k<20;k++){let B=new As({map:N,color:$h,transparent:!0,depthWrite:!1,fog:!1}),Y=new gr(B);Y.visible=!1,Y.renderOrder=7,Y.userData={t:1,life:1,vy:0,vx:0,vz:0,sz:.4},s.scene.add(Y),z.push(Y)}return d={tex:N,list:z,ticking:!1},d}function p(N){let z=0;for(let k of d.list){let B=k.userData;if(B.t>=B.life)continue;if(B.t+=N,B.t>=B.life){k.visible=!1;continue}z++;let Y=B.t/B.life;k.position.x+=B.vx*N,k.position.y+=B.vy*N,k.position.z+=B.vz*N;let G=B.sz*(.6+Math.min(1,Y*4)*.4);k.scale.set(G,G,1),k.material.opacity=1-Y*Y}return z||(d.ticking=!1),!z}function g(N,z,k,B=8,Y=.9,G=1){let H=M(),_=0;for(let y of H.list){if(_>=B)break;let L=y.userData;if(L.t<L.life)continue;_++;let A=Math.random()*Math.PI*2,D=Math.random()*Y;y.position.set(N+Math.cos(A)*D,z+Math.random()*.4,k+Math.sin(A)*D),L.t=0,L.life=1.2+Math.random()*.6,L.vy=.9+Math.random()*.7,L.vx=Math.cos(A)*.15,L.vz=Math.sin(A)*.15,L.sz=(.32+Math.random()*.22)*G,y.scale.set(.01,.01,1),y.visible=!0}H.ticking||(H.ticking=!0,s.ticker.push(p))}function S(N,z,k,B,Y={}){let G=n.figure(N,z,k,B);if(!G)return null;let H=[];if(G.root.traverse(_=>{if(_.isSprite&&!Y.eyes&&(_.visible=!1),_.isMesh){let y=new Jt({color:Y.color||"#0b0a12",transparent:!0,opacity:Y.opacity||.86});_.material=y,H.push(y),_.userData.cleanup=()=>y.dispose()}}),G.root.userData.mats=H,G.root.userData.op=Y.opacity||.86,Y.glow){let _=n.makeGlow(1.6,Y.glow);_.position.set(0,1.2,0),G.root.add(_)}return G}async function b(N,z,k,B=1.8,Y="walk"){if(!z||k.length<2)return;let G=[],H=0;for(let _=1;_<k.length;_++){let y=Math.hypot(k[_].x-k[_-1].x,k[_].z-k[_-1].z);G.push(y),H+=y}H<.01||(z.play(Y),await N.tween(H/B,_=>{let y=_*H,L=0;for(;L<G.length-1&&y>G[L];)y-=G[L],L++;let A=k[L],D=k[L+1],q=G[L]>0?Math.min(1,y/G[L]):1;z.root.position.x=A.x+(D.x-A.x)*q,z.root.position.z=A.z+(D.z-A.z)*q,z.root.rotation.y=Math.atan2(D.x-A.x,D.z-A.z)},_=>_),z.play("idle"))}function v(N,z){N&&(N.root.rotation.y=Math.atan2(z.x-N.root.position.x,z.z-N.root.position.z))}function C(N,z){let k=N.players.find(B=>B.id===z);return k&&k.alive&&!k.left?k:null}e.register("show",async(N,z)=>{let{show:k,state:B}=z,Y=s.village,G=B.me.id,H=s.time,_=z.el||0,y=()=>_+(s.time-H),L=O=>N.wait(Math.max(0,O-y())),A=new Set,D=[],q=[],W=()=>s.rig.portrait,J=O=>{let oe=Y.house(O);if(!oe)return;q.push(new Z(oe.cx,0,oe.cz),new Z(oe.cx,oe.info.height,oe.cz));let X=Y.anchors(oe);q.push(new Z(X.approach.x,0,X.approach.z))},me=O=>{let oe=Promise.resolve(O).catch(()=>{});return D.push(oe),oe},ie=(O,oe,X)=>t.tripRoute(O,oe,X)||{out:12,tail:X?3:0,back:12};function le(O){if(A.has(O)||!C(B,O))return null;let oe=s.chars.get(O),X=s.houseAnchors(O);return!oe||!X||oe.claimed?null:(oe.run([]),oe.path=null,oe.peeking=null,oe.inside=O,oe.drive=null,oe.pos.set(X.inside.x,0,X.inside.z),oe.speed=0,oe.setVisible(!1),N.claim(O),A.add(O),f.add(O),oe)}async function Pe(O,oe,X,se={}){let re=se.again?s.chars.get(O):le(O);if(!re||se.again&&!A.has(O))return;let Ce=t.tripSteps({home:O,to:oe,clock:y,...se,delay:Math.max(.05,X.s0-y()),tArrive:X.tA,tLeave:X.tL,tHome:X.tH});if(Ce.length)for(re.run(Ce);re.busy&&y()<ks-.2;)await N.wait(.2)}let Ge=k.trip&&k.trip.to!==G&&Y.house(k.trip.to)?k.trip:null,he=k.watch&&Y.house(k.watch.houseId)?k.watch:null,ke=(k.home||[]).filter(O=>Cw[O.kind]);k.dead&&!ke.some(O=>O.result==="died")&&ke.push({kind:"attack",result:"died"});let j=(Array.isArray(k.trips)&&k.trips.length>1?k.trips:[Ge]).filter(O=>O&&O.to!==G&&Y.house(O.to)).slice(0,2).filter(O=>!(he&&O.kind==="watch"&&O.to===he.houseId)),Fe=null;if(Ge&&j.length){J(G);let O=j.map(X=>{let se=Aw[X.kind]&&X.outcome!=="bounced",re=X.outcome==="bounced",Ce=X.kind==="watch";return J(X.to),{tr:X,kill:se,bounced:re,peek:Ce,r:ie(G,X.to,Ce),dw:Yd(se,re,Ce)}});if(O.length===1){let X=O[0];X.p=Gr(X.r,{s0:.15,tAmin:2.8,tAmax:X.kill?Rg:9.5,end:Ti,peek:X.peek,...X.dw})}else{let X=O.map(Se=>Rw(Se.r,Se.dw.dwell,Se.peek)),se=Ti-.15-.3,re=X[0]+X[1],Ce=.15+(re<=se?X[0]+(se-re)*.35:se*X[0]/re);O[0].p=Gr(O[0].r,{s0:.15,tAmin:2.4,end:Ce,peek:O[0].peek,...O[0].dw}),O[1].p=Gr(O[1].r,{s0:O[0].p.tH+.3,end:Ti,peek:O[1].peek,...O[1].dw})}Fe=O[0].p;let oe=(k.team||[]).filter(X=>X.id!==G&&X.to===Ge.to&&X.outcome!=="bounced"&&(X.kind||"kill")==="kill").map(X=>X.id);if(me((async()=>{for(let X=0;X<O.length;X++){let se=O[X];await Pe(G,se.tr.to,se.p,{again:X>0,peek:se.peek,bounced:se.bounced,onInside:se.kill&&se.tr.interior!==!1?()=>me(Ne(se.tr,X===0?oe:[],se.p.tL)):null})}})()),k.saved){let X=O.find(se=>se.tr.kind==="protect"||se.tr.kind==="heal")||O[0];me(Ve(X.tr.to,X.p.tA+Hn+.5))}}else k.saved&&me(Ve(k.trip&&Y.house(k.trip.to)?k.trip.to:G));(k.team||[]).forEach((O,oe)=>{if(O.id===G||!Y.house(O.to))return;J(O.to);let X=O.outcome==="bounced",se=(O.kind||"kill")==="kill"&&!X,re=Yd(se,X,!1),Ce=ie(O.id,O.to,!1),Se;if(Fe&&Ge&&O.to===Ge.to&&!X){let Le=Fe.tA+.35*(oe+1);Se=Gr(Ce,{s0:.3,tA:Le,dwell:Math.max(re.dwellMin,Fe.tL+.15*(oe+1)-Le),dwellMin:re.dwellMin,end:Ti})}else Se=Gr(Ce,{s0:.3+oe*.2,tAmin:3,tAmax:se?Rg:9.5,end:Ti,...re});me(Pe(O.id,O.to,Se,{bounced:X}))}),he&&me(mt(he)),ke.length&&(J(G),me(be(ke,k)));let Ke=k.home||[];for(let O of ke){let oe=Ke.indexOf(O);O.byProtector=oe>=0&&Ke[oe+1]&&Ke[oe+1].kind==="protect"}l=q.length?q:null,s.showFocusChanged(),await Promise.all(D.slice());for(let O=0;O<3&&D.length;O++)await Promise.all(D.splice(0));a&&await Re();async function Ne(O,oe,X){if(s.mainBusy())return;let se=N.openRoom(O.to);if(!se)return;let re=se.shot("inside",W());N.cut(re.pos,re.look,{fov:re.fov});let Ce=se.L,Se=ge=>se.W(ge),Le=[G,...oe].slice(0,3),I=[Ce.bedside,Ce.bedside2,{x:-1.6,z:.9}],P=[];Le.forEach((ge,pe)=>{let we=s.playerById(ge);if(!we)return;let Ae=se.addActor("k"+pe,we.look,we.name,Ce.doorIn,-Math.PI/2);P.push(Ae);let xe=O.kind==="steal"&&pe===0?[{walk:[Se({x:-.3,z:-1.9})],mode:"sneak"},{faceTo:Se(Ce.chest)},{once:"pick-up",opts:{timeScale:1.1}}]:[];Ae.run([...xe,{walk:[Se(I[pe%3])],mode:"sneak"},{faceTo:Se({x:Ce.sleeper.x,z:-1.4})},{pose:O.kind==="poison"?"hold":"loom"}])});let Q=Se({x:Ce.sleeper.x,y:.9,z:Ce.sleeper.z});if(await L(Math.max(y()+1.3,X-1.6)),!!E(se)){for(let ge of P)ge.playOnce(O.kind==="poison"?"interact-right":"attack-melee-right",{timeScale:.7});if(s.sfx(O.kind==="poison"?"potion":"bite",{volume:.6}),O.kind==="poison"&&s.fx.emit("bubble",Q.x,Q.y,Q.z,"#94d82d",10),await N.wait(.45),!!E(se)){if(O.outcome==="done"){s.flickerRoom(1.1);let ge=s.playerById(O.to);n.ghostRise(N,ge&&ge.look,Q.x,Q.z,.9,1.3)}else{g(Q.x,Q.y,Q.z,10,.6),s.sfx("safe",{volume:.5});for(let ge of P)ge.setBase("idle",.2),ge.playOnce("emote-no",{timeScale:1.1})}await L(X-.1),E(se)&&s.endShowRoom()}}}async function Ve(O,oe=6){await L(oe);let X=s.houseAnchors(O);if(X)for(let se=0;se<3;se++)g(X.door.x*.7+X.backWin.x*.3,X.height*.85,X.door.z*.7+X.backWin.z*.3,6,1.6,2.6),s.fx.emit("magic",X.door.x,1.4,X.door.z,$h,8),se===0&&s.sfx("safe",{volume:.5}),await N.wait(.4)}async function mt(O){let oe=O.houseId,X=s.houseAnchors(oe);c=oe,J(oe),J(G);let se=[],re=[],Ce=($,Ie,ve)=>re.push(new Z($,Ie,ve)),Se=($,Ie)=>{let ve=$.x-X.approach.x,Ue=$.z-X.approach.z,Ye=Math.hypot(ve,Ue)||1,Ze=Math.min(1,Ie/Ye);Ce(X.approach.x+ve*Ze,0,X.approach.z+Ue*Ze)},Le=ie(G,oe,!0),{outFix:I,backFix:P}=Zd(Le,!0),Q=(O.arrivals||[]).slice(0,8),ge=Q.length>1?Math.min(1.2,4.2/(Q.length-1)):0,pe=Math.min(fl*1.15,Math.max(Bs,Le.out/Math.max(1,7.5-.15-I))),we=Math.max(3,.15+I+Le.out/pe),Ae=we+2.5,xe=0;if(Q.forEach(($,Ie)=>{let ve=!!$.blocked,Ue=ve?Yd(!1,!0,!1):{dwell:Ew,dwellMin:Hn+.6},Ye=we+1+Ie*ge,Ze=$.id&&$.id!==G&&$.id!==oe&&s.chars.get($.id)&&Y.house($.id)&&C(B,$.id)&&!A.has($.id),ze,tt;if(Ze){let vt=ie($.id,oe,!1);ze=Math.max(Ye,.3+Us+vt.out/fl);let qe=Gr(vt,{s0:.3,tA:ze,dwell:Ue.dwell,dwellMin:Ue.dwellMin,end:Ti});tt=qe.tL,se.push(Pe($.id,oe,qe,{bounced:ve}));let Lt=s.houseAnchors($.id);Lt&&Se(Lt.approach,11)}else ze=Ye,tt=ze+Ue.dwell,se.push(Mt(oe,ve,ze,tt,Ie,vt=>Se(vt,11)));Ae=Math.max(Ae,tt+(ve?.3:.6)),ve||(xe=Math.max(xe,ze+Hn+.9))}),O.ownerWent&&O.ownerWent!==oe&&Y.house(O.ownerWent)){J(O.ownerWent);let $=ie(oe,O.ownerWent,!1),Ie={dwell:Hn+1.2,dwellMin:Hn+.5},ve=Ti-(Us+$.out/fl+Ie.dwellMin+Us+$.back/fl+Hn),Ue=Math.max(.4,Math.min(we+.5,ve)),Ye=Gr($,{s0:Ue,end:Ti,...Ie});se.push(Pe(oe,O.ownerWent,Ye)),Ae=Math.max(Ae,Math.min(Ye.tA,Ue+Us+10/Bs));let Ze=s.houseAnchors(O.ownerWent);Ze&&Se(Ze.approach,11)}let fe=Math.min(13,xe||we+2);O.died?(se.push((async()=>{await L(fe),s.flickerHouse(oe,1.5),s.sfx("door",{volume:.3})})()),Ae=Math.max(Ae,fe+1.6)):O.saved&&(se.push(Ve(oe,fe)),Ae=Math.max(Ae,fe+1.4));let Ee=Math.max(Ti-(P+Le.back/fl),Math.min(16,Ae)),V=Math.max(we+1.5,Math.min(Math.max(we+2.5,Ae),Ee)),ee={s0:.15,tA:we,tL:V,tH:Math.min(Ti,V+P+Le.back/Bs)};if(A.has(G)||se.unshift(Pe(G,oe,ee,{peek:!0})),X){Ce(X.peek.x,0,X.peek.z),Ce(X.peek.x,1.9,X.peek.z),Ce(X.approach.x,0,X.approach.z),Ce(X.approach.x,1.9,X.approach.z);let $=Math.hypot(X.approach.x,X.approach.z)||1;Se({x:X.approach.x*(1-6/$),z:X.approach.z*(1-6/$)},6),h={hid:oe,pts:re}}await Promise.all(se.map($=>$.catch(()=>{})))}async function Mt(O,oe,X,se,re,Ce){let Se=s.houseAnchors(O),Le=Y.house(O),I=Y.layout;if(!Se||!Le||!I)return;let P=Le.angle+Math.PI+(re%2?1:-1)*(.45+.3*(re>>1)),Q=P,ge=9;for(let ve=0;ve<I.houses.length;ve++){let Ue=I.houses[ve].angle,Ye=I.houses[(ve+1)%I.houses.length].angle,Ze=Ue+jt(Ye-Ue)/2,ze=Math.abs(jt(Ze-P));ze<ge&&(ge=ze,Q=Ze)}let pe={x:Math.sin(Q)*(I.R-.8),z:Math.cos(Q)*(I.R-.8)},we=t.pathTo(pe,O)||[pe,Se.approach];Ce&&Ce(we.length>2?we[we.length-2]:pe);let Ae=0;for(let ve=1;ve<we.length;ve++)Ae+=Math.hypot(we[ve].x-we[ve-1].x,we[ve].z-we[ve-1].z);let xe=Math.max(.4,X-Ae/2.7),fe=Math.max(2.2,Math.min(6.5,Ae/Math.max(.6,X-xe)));await L(xe);let Ee=S(N,pe.x,pe.z,Math.atan2(we[1]?we[1].x-pe.x:0,we[1]?we[1].z-pe.z:1));if(!Ee)return;Kd(Ee,0);let V=N.tween(.8,ve=>Kd(Ee,ve),ve=>ve);await b(N,Ee,we,fe,fe>3.6?"sprint":"walk"),await V,v(Ee,Se.door);let ee=we.slice().reverse();oe?(Ee.play("interact-right"),await N.wait(.9),s.fx.emit("poof",Se.door.x,1.2,Se.door.z,"#9fb3d1",5),await L(se)):(s.village.openDoor(O,1),s.sfxThrottled("door",.35),await b(N,Ee,[Se.approach,Se.inside],1.8),Ee.root.visible=!1,await L(se),Ee.root.visible=!0,s.village.openDoor(O,1),await b(N,Ee,[Se.inside,Se.approach],2.2));let $=Math.max(2.4,Math.min(5.5,Ae/Math.max(1.5,Ti-1-y()))),Ie=b(N,Ee,ee,$,$>3.6?"sprint":"walk");await N.wait(Math.max(0,Ae/$-.8)),await N.tween(.8,ve=>Kd(Ee,1-ve),ve=>ve),await Ie,Ee.root.visible=!1}async function be(O,oe){await L(3.4);let X=O.some(fe=>fe.result==="died")||!!oe.dead,se=s.chars.get(G);if(!X&&se&&se.claimed&&se.visible){O.some(fe=>fe.result==="saved")&&await Ve(G,4.6);return}let re=!s.mainBusy()&&N.openRoom(G);if(!re){X&&(await L(6.8),s.flickerHouse(G,1.4),await L(8.2),ce());return}let Ce=re.shot("inside",W());N.cut(Ce.pos,Ce.look,{fov:Ce.fov});let Se=re.L,Le=fe=>re.W(fe),I=Le(Se.bedside),P=Le(Se.bedside2),Q=Le(Se.bedfoot),ge=Le({x:Se.sleeper.x,y:.9,z:Se.sleeper.z}),pe=Le(Se.doorStep),we=Le(Se.doorIn),Ae=null,xe=O.slice(0,2);for(let fe=0;fe<xe.length;fe++){let Ee=xe[fe];if(!E(re))return;await L(fe===0?4.3:y()+.2),s.sfx("door",{volume:.5});let V=S(N,pe.x,pe.z,-Math.PI/2,{eyes:Ee.kind==="attack",opacity:.9});if(!V)break;let ee=fe===0?I:P;if(await b(N,V,[pe,we,ee],fe===0?2:2.6),v(V,ge),V.root.rotation.x=.3,V.play("interact-right"),Ee.kind==="poison"&&s.fx.emit("bubble",ge.x,ge.y,ge.z,"#94d82d",10),Ee.result==="saved")!Ae&&Ee.byProtector&&(Ae=S(N,pe.x,pe.z,-Math.PI/2,{color:"#0d1a12",glow:$h,opacity:.85}),Ae&&await b(N,Ae,[pe,we,Q],3.4,"sprint")),Ae&&(v(Ae,ge),Ae.play("interact-left")),g(ge.x,ge.y+.2,ge.z,12,.7),s.fx.emit("magic",ge.x,ge.y,ge.z,$h,14),s.sfx("safe",{volume:.6}),await N.wait(.9),g(ge.x,ge.y+.3,ge.z,8,.9),s.fx.emit("smoke",V.root.position.x,1,V.root.position.z,"#2a2238",14),V.root.visible=!1,await N.wait(.6);else if(Ee.result==="died"){s.flickerRoom(1.4),s.sfx(Ee.kind==="poison"?"potion":"bite",{volume:.7}),Ee.kind!=="poison"&&s.flash(.25,"#d7263d"),await N.wait(1.4),s.fx.emit("smoke",V.root.position.x,1,V.root.position.z,"#2a2238",16),V.root.visible=!1,await N.wait(.2);let $=s.playerById(G);await n.ghostRise(N,$&&$.look,ge.x,ge.z,.9,1.8),ce(),E(re)&&s.endShowRoom();return}else await N.wait(1),await b(N,V,[ee,we,pe],2.4),V.root.visible=!1}await N.wait(.5),E(re)&&s.endShowRoom()}function ce(){if(a)return;a=!0,s.showDead.add(G),s.markDead(G,{quiet:!0,drop:!0});let O=B.players.find(se=>se.id===G),oe=s.houseAnchors(G),X=O&&s.ensureGhost(O);X&&oe&&(X.fresh=!1,X.isMe=!0,X.pos.set(oe.approach.x,0,oe.approach.z),X.yaw=Math.atan2(-oe.approach.x,-oe.approach.z),s.fx.emit("magic",oe.approach.x,1,oe.approach.z,"#d8d0ff",12)),s.reapply()}async function Re(){let O=new Z,oe=new Z,X=!0;for(;y()<ks+1.5;){let se=s.ghostOf(G);if(se&&!s.mainBusy()){let re=Math.hypot(se.pos.x,se.pos.z),Ce=re>3?se.pos.x/re:0,Se=re>3?se.pos.z/re:1,Le=W()?9:7.5;O.set(se.pos.x,1.3,se.pos.z),oe.set(se.pos.x-Ce*Le,W()?6.4:5.2,se.pos.z-Se*Le),X?(N.cut(oe,O,{fov:W()?56:46}),X=!1):N.shot(oe,O,{fov:W()?56:46,k:1.6})}await N.wait(.25)}}});function E(N){return s.roomModeIs("show")&&s.room===N}function x(N){let z=N.room.night;return!z||!z.showUntil?0:Math.max(0,ks-(z.showUntil-s.serverNow())/1e3)}function w(){u&&e.skip(),u=!1,h=null,l&&(l=null,s.showFocusChanged()),f.clear()}function U(N){o=N,a=!1,c=null,s.showDead.clear()}function R(N){let z=N.room;if(z.phase==="lobby"){w(),o!==-1&&U(-1),i="",r=-1;return}if(z.phase!=="night"){u&&w();return}if(z.round!==o&&U(z.round),(z.night&&z.night.stage)!=="show"){u&&w();return}let B=N.night&&N.night.show||null,Y=z.round+"|"+(B?JSON.stringify(B):"");if(Y===i)return;let G=x(N);if(r===z.round&&(G>2.5||!B)){i=Y;return}if(i=Y,r=z.round,u&&e.skip(),!B)return;if(G>ks-7){B.dead&&!a&&(a=!0,s.showDead.add(N.me.id),s.reapply());return}u=!0;let H={kind:"show",show:B,state:N,el:G};e.announce(H).then(()=>{i===Y&&(u=!1,h=null,l&&(l=null,s.showFocusChanged()),f.clear())})}return{sync:R,stop:w,get running(){return u},get focus(){return l},get watchCam(){return h},actors:f,sawDeath:()=>a,watched:N=>c===N,dispose(){if(w(),d){for(let N of d.list)N.parent&&N.parent.remove(N),N.material.dispose();d.tex.dispose(),d=null}}}}var dl=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],Pg=["top","hor","sun","sky","gnd"];for(let s of dl)for(let e of Pg)s[e]=new He(s[e]);function Lg(){return{h:12,top:new He,hor:new He,sun:new He,sky:new He,gnd:new He,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new Z,moonDir:new Z,lightDir:new Z,sunVis:0,moonVis:0,night:0,dusk:0}}function Iw(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ft(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function Pw(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ft(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var jh=new Z,Qh=new Z;function Dg(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<dl.length-2&&dl[t+1].h<=s;)t++;let n=dl[t],i=dl[t+1],r=Ns(ft((s-n.h)/(i.h-n.h),0,1));for(let a of Pg)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,Iw(s,e.sunDir),Pw(s,e.moonDir),e.sunVis=ft((e.sunDir.y+.06)/.12,0,1),e.moonVis=ft((e.moonDir.y+.04)/.12,0,1)*ft(1-e.sunVis*1.2,0,1);let o=ft((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ft(1-Math.abs(e.sunDir.y-.05)/.22,0,1),jh.copy(e.sunDir),jh.y=Math.max(jh.y,.24),Qh.copy(e.moonDir),Qh.y=Math.max(Qh.y,.45),e.lightDir.copy(jh.normalize()).multiplyScalar(o).addScaledVector(Qh.normalize(),1-o).normalize(),e}function Ng(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Hs={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},Jd=["saver","low","medium","high"];function zg(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function Fg(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function Og(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var Ug="vkw.quality.v2";function Lw(){try{return JSON.parse(localStorage.getItem(Ug)||"null")}catch{return null}}function Dw(s){try{localStorage.setItem(Ug,JSON.stringify(s))}catch{}}var eu=class{constructor(e,t={}){this.noRetry=!!t.noRetry;let n=Lw();if(this.fails={},n&&Array.isArray(n.failed))for(let i of n.failed)this.fails[i]=1;else if(n&&n.fails&&typeof n.fails=="object")for(let i of Object.keys(n.fails))Hs[i]&&(this.fails[i]=+n.fails[i]||0);this.level=n&&Hs[n.tier]?n.tier:e,this.remembered=!!(n&&Hs[n.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){Dw({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((p,g)=>p-g),r=this.cpu.slice().sort((p,g)=>p-g),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,c=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let h=Hs[this.level].fps===30,u=h?40:30,f=Jd.indexOf(this.level),d=o>u||a>u*1.8,m=h?a<36&&c<11:o<18&&a<26;if(d?(this.bad+=o>u*1.6?2:1,this.good=0):m?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=Jd[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let M=Jd[f+1];return M&&this.good>=(this.fails[M]?30:12)&&(this.fails[M]||0)<(this.noRetry?1:2)?(this.level=M,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},tu=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((h,u)=>h-u),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((h,u)=>h+u,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let h=this.trial;if(this.trial=null,o>h.p90*.92)return this.scale=h.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let c=a<o*.55,l=this.min||.6;return o>i*1.2&&c&&this.scale>l+.001?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(l,+(this.scale-.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function $d(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var kg=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function Bg(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!$d())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=Fg(),a=zg(o),c=document.createElement("div");c.className="vkw-root",s.appendChild(c);let l;try{l=new Oo({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw c.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}l.outputColorSpace=Bt,l.toneMapping=Ir,l.toneMappingExposure=1,l.shadowMap.type=Ar;let h=l.domElement;h.setAttribute("aria-label","K\xF6y"),c.appendChild(h);let u=document.createElement("div");u.className="vkw-vignette",c.appendChild(u);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",c.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",c.appendChild(d);function m(){m.enabled&&(d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0")}let M=new pr;M.fog=new ga(2475,50,250);let p=new nn(40,1,.3,900),g=new Xh(p);g.clampFn=T=>{let K=y&&y.layout;if(!K||Q!=="game")return;let te=Math.hypot(T.x,T.z),Me=K.R-6.2;if(te>Me&&te<K.R+6&&T.y<9.5){let Te=Me/te,ye=Math.max(0,(T.y-7)/2.5),De=Te+(1-Te)*ye;T.x*=De,T.z*=De}};let S="auto",b=new eu(Og(o),{noRetry:!o}),v=new tu;n.renderScale=1;let C=Hs[b.level],E={...a,sparks:70,fireflies:56,clouds:C.clouds,trees:a.trees,scatter:a.scatter},x=new wr(16777215,4473924,1);M.add(x);let w=new si(16777215,2);w.shadow.bias=-6e-4,w.shadow.normalBias=.03,M.add(w),M.add(w.target);let U=new Tr(16747050,20,17,1.5);U.position.set(0,1.4,0),M.add(U);let R=j0(M,E),N=eg(M,E),z=new Gi("glow",128),k=new Gi("pool",128),B=new Gi("blob",64,bi),Y=new Gi("ring",48);for(let T of[k,B,Y,z])M.add(T.mesh);let G=new Gh(160);M.add(G.normal.mesh),M.add(G.add.mesh);let H=fg(E);M.add(H.group);let _=dg(56);M.add(_.points);let y=null,L=new Map,A=new Map,D=new Set,q=new Map,W=0,J=[],me=null,ie=null,le=null,Pe=null,Ge=null,he=0,ke=null,ae=new Set,j=1,Fe=!1,Ke=null,Ne=null,Ve=mg(M),mt=new si(9417983,0);M.add(mt),M.add(mt.target);let Mt=new Map;function be(T,K){let te=(Mt.get(T)||0)+1;Mt.set(T,te),(te===1||te===50)&&console.warn("[VKWorld] "+T+" hatas\u0131 (yakaland\u0131, devam ediliyor):",K)}let ce={rig:g,camera:p,chars:L,scene:M,time:0,get village(){return y},fx:G,obstacles:[],localMove:null,sfx(T,K){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(T,K)}catch{}},sfxThrottled(T,K){let te=performance.now();(Re[T]||0)+K*1e3>te||(Re[T]=te,ce.sfx(T))},sfxStep(){ce.sfxThrottled("step",.32)},reapply(){ge&&I&&Q==="game"&&Wi(!1)},ticker:J,assets:Ds,get room(){return ie},getState(){return I},playerById(T){let K=I&&I.players.find(te=>te.id===T);return K?{id:K.id,look:K.look,name:K.name,role:K.role}:null},makeActor(T,K,te){let Me="cine:"+ ++W,Te=new wi(ce,Me,T,{ghost:te==="ghost"});return Te.cineKey=Me,M.add(Te.root),q.set(Me,{ch:Te,name:K||"",color:T.color|0}),K&&(Fe=!0),Te},dropActor(T){q.delete(T.cineKey),T.dispose(),Fe=!0},isDeadShown(T){let K=I&&I.players.find(te=>te.id===T);return!!(K&&I.room.phase!=="lobby"&&(!K.alive||K.left)&&!(I.room.phase==="hunter"&&I.room.hunterId===T))},openRoom(T){return gs(T,"cine")},endCineRoom(){le==="cine"&&Wr()},showDead:new Set,mainBusy(){return se.running},openShowRoom(T){return se.running?null:gs(T,"show")},endShowRoom(){le==="show"&&Wr()},roomModeIs(T){return le===T},serverNow(){return Date.now()+yl},ghostOf(T){return A.get(T)||null},showFocusChanged(){ge&&I&&Q==="game"&&et(!1)},sawOwnDeath(){return Le.sawDeath()},showWatched(T){return Le.watched(T)},setTodOverride(T,K){me=T,K&&T!=null&&(Ee=T)},cineTint(){},moonOverride(T){Pe=T?new He(T):null},fogBoost(T){return j=T,()=>{j=1}},footDust(T,K){C.name!=="low"&&Q==="game"&&G.emit("dust",T,.05,K,Ne&&Ne.snow?"#e8eef5":null,2)},houseAnchors(T){let K=y&&y.house(T);return K?y.anchors(K):null},layoutR(){return y&&y.layout?y.layout.R:15},meId(){return I&&I.me?I.me.id:null},flickerRoom(T=1.4){Ai={t:0,dur:T}},toon:!1,flickerHouse(T,K){y&&y.flicker(T,K)},diedTonight(T){if(Ge&&Ge.ids.includes(T)&&Date.now()-Ge.at<9e4)return!0;let K=I&&I.players.find(te=>te.id===T);return!!(K&&(!K.alive||D.has(T))&&I.room.phase!=="lobby"&&ae.has(T))},leadInLeft(){let T=I&&I.room&&I.room.timerFrom;return T?ft((T-(Date.now()+yl))/1e3-.3,1.2,4.5):3.6},flash(T,K){if(!T){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${K||"#d7263d"}55, ${K||"#d7263d"}cc)`,f.style.opacity=String(T),clearTimeout(O),O=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(T,K){G.emit("poof",T,.4,K,null,16),ce.sfxThrottled("poof",.2)},isHeldDeath(T){return D.has(T)},holdDeaths(T){D.clear();for(let K of T)D.add(K)},releaseDeaths(){D.size&&(D.clear(),ce.reapply())},markDead(T,K={}){D.delete(T);let te=L.get(T);te&&te.visible&&!te.claimed&&(K.quiet||ce.poofAt(te.pos.x,te.pos.z),te.setVisible(!1)),y&&y.setDead(T,!0,te?te.look.color:0,K.drop)},ensureChar(T){if(!ge)return null;let K=L.get(T.id);return K?K.setLook(T.look):(K=new wi(ce,T.id,T.look),K.fresh=!0,L.set(T.id,K),M.add(K.root),qe(K)),K},ensureGhost(T){if(!Ln("characters/ghost.glb"))return null;let K=A.get(T.id);return K||(K=new wi(ce,T.id,T.look,{ghost:!0}),K.fresh=!0,A.set(T.id,K),M.add(K.root)),K},removeGhost(T){let K=A.get(T);K&&(K.dispose(),A.delete(T))}},Re={},O=0,oe=_g(c,{onTagTap(T){Ot(T,!0)},onPlaqueTap(T){Ae.has(T)&&ln(T)},onRecenter(){hp()},onCamToggle(){up()}}),X=Mg(c,{}),se=Vd(ce),re=vg(se,ce),Ce=Ag(ce),Se=Vd(ce,{scoped:!0,timeout:ks+3}),Le=Ig(ce,Se,Ce,re),I=null,P={},Q="menu",ge=!1,pe=!1,we="",Ae=new Set,xe=new Set,fe=null,Ee=18.3,V=18.3,ee=Lg(),$={fog:1,tint:new He("#ffffff"),tintAmt:0,moon:new He("#eef2ff"),stars:1,weather:"none"},Ie=new He,ve=!0,Ue=0,Ye=new Z,Ze=1,ze=1,tt=1,vt={top:0,bottom:0,left:0,right:0};function qe(T){T.model.traverse(K=>{K.isMesh&&(K.castShadow=C.charShadow)})}let Lt=null;function tn(T){Lt=T}function Ei(){Lt!=null&&(l.setPixelRatio(Lt),l.setSize(Ze,ze,!1),Lt=null)}let Vs=0;function ps(T,K=!0){C=Hs[T];let te=window.devicePixelRatio||1;tt=Math.min(te,o?C.pxMobile:C.px),ce.toon&&o&&(tt=Math.max(tt,Math.min(te,1))),v.min=ce.toon&&o?Math.min(1,1/tt):.6,(n.renderScale||1)<v.min&&(n.renderScale=Math.max(v.min,n.renderScale||1),v.scale=n.renderScale),tn(tt*(n.renderScale||1)),Vs=ce.toon?0:C.shadows||(o?0:1);let Me=Vs>0;if(l.shadowMap.enabled!==Me&&(l.shadowMap.enabled=Me,M.traverse(Te=>{Te.material&&(Array.isArray(Te.material)?Te.material:[Te.material]).forEach(ye=>{ye.needsUpdate=!0})})),w.castShadow=Me,Me){let Te=C.shadowSize||1024;w.shadow.mapSize.x!==Te&&(w.shadow.mapSize.set(Te,Te),w.shadow.map&&(w.shadow.map.dispose(),w.shadow.map=null)),l.shadowMap.autoUpdate=Vs===2}for(let Te of L.values())qe(Te);if(E.clouds=C.clouds,ve=!0,K&&t.onQuality)try{t.onQuality(T)}catch{}}function Vr(){let T=c.getBoundingClientRect();Ze=Math.max(1,Math.round(T.width)),ze=Math.max(1,Math.round(T.height)),l.setSize(Ze,ze,!1),g.setSize(Ze,ze),oe.setSize(Ze,ze),X.place(hu(),Ze,ze),et(!0)}let Ws=null;window.ResizeObserver&&(Ws=new ResizeObserver(()=>Vr()),Ws.observe(c));let Xs=()=>Vr();window.addEventListener("resize",Xs),window.addEventListener("orientationchange",Xs),ps(b.level,!1),Vr();let Vi=Ho.chars.length+Ho.village.length;Fr(["village","chars"],(T,K)=>{if(!pe&&t.onProgress)try{t.onProgress(T,K)}catch{}}).then(()=>{if(!pe){if(pl(),qs(),ge=!0,t.style==="toon")try{er.setStyle("toon")}catch(T){be("g\xF6r\xFCn\xFCm",T)}if(I&&Q==="game"&&Wi(!0),t.onReady)try{t.onReady()}catch{}return Fr(["extra"]).then(()=>{if(!pe)return y.onExtraLoaded(),qs(),I&&Wi(!1),Fr(["cine"]).then(()=>{pe||(ie||(ie=Gd(ce)),qs(!0))})})}}).catch(T=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",T),t.onError)try{t.onError(T)}catch{}});function qs(T){try{let K=[],te=ye=>ye.traverse(De=>{De.visible||(De.visible=!0,K.push(De))});te(M);let Me=[];if(ie&&ie.group&&(ie.group.parent||M.add(ie.group),te(ie.group)),T)for(let ye of["props/village.glb","props/graveyard.glb","interior/furniture.glb","interior/clues.glb","characters/ghost.glb","characters/vampire.glb","characters/bat.glb"]){let De=Qn(ye);De&&Me.push(De.scene)}let Te=()=>{for(let ye of K)ye.visible=!1};if(l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")){let ye=[l.compileAsync(M,p)];for(let De of Me)ye.push(l.compileAsync(De,p,M));Te(),Promise.all(ye).catch(()=>{})}else{l.compile(M,p);for(let ye of Me)l.compile(ye,p,M);Te()}}catch(K){be("\xF6n derleme",K)}}function pl(){y=cg(M,E,null,N),ms(Q==="menu"||!I?null:I),_.place(8,40),et(!0)}function ms(T){let K,te=null;if(!T||Q==="menu")K=kg;else{let De=T.room.phase==="lobby";K=T.players.filter(lt=>!(De&&lt.left)).map(lt=>{var je;return{id:lt.id,seat:(je=lt.seat)!=null?je:0}}),te=T.me?T.me.id:null,K.length||(K=kg)}let Me=K.map(De=>De.id+"@"+De.seat).join(",")+"|"+te;if(Me===we)return!1;let Te=!!we&&T&&T.room.phase==="lobby"&&Q==="game"&&!we.startsWith("menu-");we=Me;let ye=ng(K,te);y.setLayout(ye,Te),Ys(ye),_.place(ye.Rp+1,ye.R+14),ve=!0,Te||Ce.reset();for(let De of L.values())Te||(De.fresh=!0);return!0}function Ys(T){let K=[{x:0,z:0,r:1.6,tag:"fire"}];for(let te of y.benchSlots){let Me=Math.cos(te.a),Te=-Math.sin(te.a);for(let ye of te.small?[-.45,.45]:[-.85,0,.85])K.push({x:te.x+Me*ye,z:te.z+Te*ye,r:.3,tag:"bench"})}for(let te of y.lampList())te.small||K.push({x:te.x,z:te.z,r:.35,tag:"lamp"});ce.obstacles=K}let Ai=null;function ml(T){if(!Ai)return 1;Ai.t+=T;let K=Ai.t,te=Ai.dur;if(K>=te)return .12;let Me=Math.floor(K/.07);return Math.abs(Math.sin(Me*12.9898+3.1)*43758.5453)%1>.12+.75*(K/te)?1-.4*(K/te):.06}function gs(T,K){if(ie||(ie=Gd(ce)),!ie.ready)return null;let te=ce.playerById(T)||{id:T,look:{color:0,hat:0,skin:0},name:""};return ie.hide(),ie.show(te),le=K,Fe=!0,m(),ie}function Wr(){ie&&ie.hide();let T=le;le=null,Ai=null,T&&((T==="cine"||!se.running)&&g.setOverride(null,!0),m()),Fe=!0}function xs(T){T!==Ke&&(Ke=T,Ne=yg(T),$.fog=Ne.fog,$.tint.set(Ne.tint),$.tintAmt=Ne.tintAmt,$.moon.set(Ne.moon),$.stars=Ne.stars,$.weather=Ne.weather,$.nightTint=!!Ne.nightTint,Ve.set(Ne.weather),y&&y.setTheme(Ne))}function gl(T,K){if(!pe&&(I=T,P=K||{},!!ge))try{Wi(!1)}catch(te){be("durum",te)}}function Xr(){return!!(I&&I.room.phase==="night"&&I.room.night&&I.room.night.stage==="show")}function vs(){if(!I)return null;let T=Zh(I);return T==="night"&&Xr()?null:T}function Wi(T){if(!I||Q!=="game")return;let K=ms(I),{room:te,players:Me}=I;xs(te.scenario&&te.phase!=="lobby"?te.scenario.id:null);let Te=te.phase!=="lobby",ye=new Set;for(let De of Me)ye.add(De.id),y.setOwner(De.id,De.look?De.look.color:-1,De.name),y.setDead(De.id,Te&&(!De.alive||De.left||ce.showDead.has(De.id))&&!D.has(De.id),De.look?De.look.color:0);for(let[De,lt]of L)ye.has(De)||(lt.dispose(),L.delete(De),Ce.forget(De));for(let De of[...A.keys()])ye.has(De)||ce.removeGhost(De);if(te.phase==="lobby")for(let De of Me)y.tombOf(De.id)&&y.setDead(De.id,!1);if(te.phase==="night"&&!ae.size)for(let De of Me)De.alive&&ae.add(De.id);if(te.phase!=="night"&&te.phase!=="day"&&te.phase!=="hunter"&&ae.clear(),te.phase==="night"&&ke!=="night"){ae.clear();for(let De of Me)De.alive&&ae.add(De.id)}ke=te.phase,Ce.apply(I,T||K&&te.phase!=="lobby");try{Le.sync(I)}catch(De){be("gece g\xF6sterisi",De)}Ae=vs()?new Set(Me.filter(De=>wg(I,De,P.witchMode)).map(De=>De.id)):new Set,xe=Xr()?Le.actors:new Set(hl(I).keys()),Ks(),et(!1)}function Ks(){if(!I)return;let{room:T,me:K,players:te,day:Me}=I,Te=T.phase,ye=vs(),De=qd(I,P.witchMode),lt=new Map(te.map(We=>[We.id,We])),je=new Set,ct=new Set,gt=te.filter(We=>!We.left).length;oe.setCompact(gt>7&&Ze<700||gt>12);for(let We of te){let st=L.get(We.id),dt=A.get(We.id);if(st||dt){je.add(We.id);let Oe=null,at=Me&&Me.votes&&Me.votes[We.id];at&&at.length&&(Oe={total:at.reduce((Tn,Ci)=>Tn+(Ci.w||1),0),dots:at.map(Tn=>({color:lt.get(Tn.id)?Mn[lt.get(Tn.id).look.color]:"#999",w:Tn.w||1}))});let wt=(We.isHost&&Te==="lobby"?"\u{1F451}":"")+(!We.connected&&!We.left?"\u{1F4F4}":"")+(Me&&Me.sleeping&&Me.sleeping.includes(We.id)?"\u{1F4A4}":"")+(Me&&Me.voted&&Me.voted.includes(We.id)&&!(Me.sleeping||[]).includes(We.id)?"\u2714":""),yt=ye!=="night"&&Ae.has(We.id);oe.setTag(We.id,{name:We.name,job:We.job&&We.job.label?We.job.label:"",color:We.look.color,badges:wt,me:We.id===K.id,off:!We.connected,dead:!We.alive,sel:yt,picked:ul(I,We)&&ye!=="night",hover:fe===We.id&&yt,selColor:De,mark:ye!=="night"?Jh(I,We,P.witchMode):Te==="night"?null:Jh(I,We,P.witchMode),votes:Oe})}if(y.house(We.id)){ct.add(We.id);let Oe=ye==="night"&&Ae.has(We.id),at=Te==="lobby"||Te==="night"&&ye==="night"||Te==="reveal";oe.setPlaque(We.id,{name:We.name,color:We.look.color,sel:Oe,picked:Te==="night"&&ul(I,We),dim:!at,hidden:!at,dead:Te!=="lobby"&&(!We.alive||We.left),selColor:De,mark:Te==="night"?Jh(I,We,P.witchMode):null})}}for(let[We,st]of q)st.name&&(je.add(We),oe.setTag(We,{name:st.name,job:"",color:st.color,badges:"",me:!1}));if(ce.room&&le){for(let[We,st]of ce.room.actors)if(st.name){let dt="room:"+We;je.add(dt),oe.setTag(dt,{name:st.name,job:"",color:st.color,badges:"",me:!1})}}oe.sync(je,ct),Fe=!1}let F=[],ne=new Z,_e=0,ue="";function de(T){if(!I||!y||!Le.focus)return;let K=g.portrait,te=L.get(I.me.id);if(!(te&&te.visible&&te.claimed)){te=null;for(let je of Le.actors){let ct=L.get(je);if(ct&&ct.visible&&ct.claimed&&I.players.some(gt=>gt.id===je&&gt.role&&(gt.role==="vampir"||gt.role==="iftiraci"))){te=ct;break}}}let Me=Le.watchCam,Te=Me&&te&&te.peeking===Me.hid?y.house(Me.hid):null;if(Te&&te.isMe){if(ue==="watch"&&!T)return;ue="watch";let je=y.anchors(Te),ct=Math.cos(Te.angle),gt=-Math.sin(Te.angle),We=(je.door.x-Te.cx)*ct+(je.door.z-Te.cz)*gt>=0?1:-1,st=0,dt=0;for(let wt of Me.pts)st+=wt.x,dt+=wt.z;st/=Me.pts.length,dt/=Me.pts.length;let Oe=Math.hypot(st,dt)||1,at=K?3.5:2;st-=st/Oe*at,dt-=dt/Oe*at,g.setShot({kind:"show",target:ne.set(st,.6,dt),az:Te.angle+We*.6,el:K?1.2:1.06,fov:K?50:42,points:Me.pts,margin:K?.84:.82,minDist:14,snap:T,speed:.9}),g.shot.dynamic=!1;return}if(te){ue="follow",g.setShot({kind:"show",target:ne.set(te.pos.x*.9,.6,te.pos.z*.9),az:.25,el:K?.98:.8,fov:K?46:40,dist:K?27:21,snap:T,speed:1.3}),g.shot.dynamic=!1;return}if(ue==="wide"&&!T)return;ue="wide";let ye=Le.focus,De=0,lt=0;for(let je of ye)De+=je.x,lt+=je.z;De/=ye.length,lt/=ye.length,g.setShot({kind:"show",target:ne.set(De*.85,.5,lt*.85),az:.25,el:K?1.02:.78,fov:K?44:40,points:ye,margin:K?.78:.8,minDist:18,snap:T,speed:.9}),g.shot.dynamic=!1}for(let T=0;T<64;T++)F.push(new Z);let Be="";function et(T){if(!y||!y.layout){g.setShot({target:new Z(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:T});return}let K=y.layout,te=g.portrait,Me=I&&Q==="game"?I.room.phase:"menu",Te=I&&Q==="game"?vs():null,ye;Me==="menu"?ye="menu":$o()&&uu()?ye="follow":Me==="night"?ye=Te==="night"?"overview":Xr()&&Le.focus?"show":"sleep":Me==="reveal"?ye="gather":uu()?ye="follow":ye="plaza";let De=ye!==Be;Be=ye,De&&(g.recenter(),ye==="follow"&&($e.init=!1));let lt=g.shot;if(ye==="follow"){let je=0,ct=K.R+3.6;for(let gt=0;gt<24;gt++){let We=gt/24*it;F[je++].set(Math.sin(We)*ct,0,Math.cos(We)*ct)}$e.ovDist=g.fit(op,$e.az,te?1.15:.98,40,F.slice(0,je),.94,8,220),lt.dynamic=!1,lt.points=null,(De||T)&&fp(0,!0);return}if(ye==="menu"){let je=K.Rp+(te?3.5:2.5);g.setShot({kind:ye,target:new Z(0,te?3.4:3,0),az:lt.az,el:te?.2:.16,dist:je,fov:te?64:50,speed:1.2}),lt.dynamic=!1}else if(ye==="show")ue="",de(T);else if(ye==="show-wide"){let je=Le.focus,ct=0,gt=0;for(let st of je)ct+=st.x,gt+=st.z;ct/=je.length,gt/=je.length;let We=te?1.02:.78;g.setShot({kind:ye,target:ne.set(ct*.85,.5,gt*.85),az:.25,el:We,fov:te?44:40,points:je,margin:te?.78:.8,minDist:18,snap:T,speed:1.1}),lt.dynamic=!1}else if(ye==="overview"||ye==="sleep"){let je=0,ct=K.R+3.6;for(let We=0;We<24;We++){let st=We/24*it;F[je++].set(Math.sin(st)*ct,0,Math.cos(st)*ct),F[je++].set(Math.sin(st)*K.R,4.5,Math.cos(st)*K.R)}let gt=ye==="overview"?te?1.2:.98:te?.95:.62;g.setShot({kind:ye,target:new Z(0,0,ye==="overview"?0:-K.R*.08),az:ye==="sleep"?.25:0,el:gt,fov:40,points:F.slice(0,je),margin:ye==="overview"?.94:1.04,snap:T,speed:1.6}),lt.dynamic=!1}else{let je=F,ct=0,gt=ye==="gather"?5.6:3.2;for(let st=0;st<8;st++){let dt=st/8*it;je[ct++].set(Math.sin(dt)*gt,0,Math.cos(dt)*gt)}for(let st of L.values()){if(!st.visible||ct>60)continue;let dt=st.path&&st.path.length?st.path[st.path.length-1]:st.pos;Math.hypot(dt.x,dt.z)>K.Rp+1.5||(je[ct++].set(dt.x,0,dt.z),je[ct++].set(dt.x,2.4,dt.z))}for(let st of A.values())ct<62&&(je[ct++].set(st.pos.x,2.6,st.pos.z),je[ct++].set(st.pos.x,0,st.pos.z));let We=ye==="gather"?te?.6:.5:te?1.02:.66;g.setShot({kind:ye,target:xp(je,ct),az:0,el:We,fov:te?44:38,points:je.slice(0,ct),margin:te?.92:.8,minDist:8,snap:T,speed:1.8}),lt.dynamic=!0,lt.points=je.slice(0,ct)}}let Xe=new za,Je=new pt,nt=new Z,_t=new Z,Ct=new $n(new Z(0,1,0),0);function rt(T,K){return Je.set(T/Ze*2-1,-(K/ze)*2+1),Xe.setFromCamera(Je,p),Xe.ray}function It(T,K,te,Me=34){let Te=null,ye=1/0;for(let[De,lt]of L){if(!lt.visible||!te(De)||(nt.set(lt.pos.x,.1,lt.pos.z).project(p),_t.set(lt.pos.x,lt.headY,lt.pos.z).project(p),nt.z>1))continue;let je=(nt.x*.5+.5)*Ze,ct=(-nt.y*.5+.5)*ze,gt=(_t.x*.5+.5)*Ze,We=(-_t.y*.5+.5)*ze,st=gt-je,dt=We-ct,Oe=st*st+dt*dt||1,at=ft(((T-je)*st+(K-ct)*dt)/Oe,0,1),wt=Math.hypot(T-(je+st*at),K-(ct+dt*at)),yt=Math.max(Me,Math.sqrt(Oe)*.55);wt<yt&&wt<ye&&(ye=wt,Te=De)}return Te}function Qt(T,K,te){let Me=y.layout,Te=null,ye=1/0;for(let dt of y.houses.values()){if(dt.removing||te&&!Ae.has(dt.id)||(nt.set(dt.cx,1.6,dt.cz).project(p),nt.z>1))continue;let Oe=(nt.x*.5+.5)*Ze,at=(-nt.y*.5+.5)*ze;_t.set(dt.cx+Math.cos(dt.crot)*dt.info.hx,1.6,dt.cz-Math.sin(dt.crot)*dt.info.hx).project(p);let wt=Math.max(26,Math.hypot((_t.x*.5+.5)*Ze-Oe,(-_t.y*.5+.5)*ze-at)*1.25),yt=Math.hypot(T-Oe,K-at);yt<wt&&yt<ye&&(ye=yt,Te=dt)}if(Te)return Te.id;let De=rt(T,K),lt=y.pickHouse(De);if(lt&&(!te||Ae.has(lt.id)))return lt.id;let je=De.intersectPlane(Ct,nt);if(!je)return null;let ct=Math.hypot(je.x,je.z);if(ct<Me.Rp*.75||ct>Me.R+8)return null;let gt=Math.atan2(je.x,je.z),We=null,st=1/0;for(let dt of y.houses.values()){if(te&&!Ae.has(dt.id))continue;let Oe=Math.abs(((gt-dt.angle+Math.PI)%it+it)%it-Math.PI);Oe<st&&(st=Oe,We=dt)}return We&&st<Me.step*.5?We.id:null}function Gt(T,K){if(!I||Q!=="game")return null;let te=vs();if(te==="night"){let Me=Qt(T,K,!0);return Me&&Ae.has(Me)?Me:null}return te==="vote"||te==="shoot"?It(T,K,Me=>Ae.has(Me)):null}let Ut=0;function ln(T){if(Ut=performance.now()+450,t.onPick)try{t.onPick(T)}catch{}}let ot=T=>{performance.now()<Ut&&T.cancelable&&T.preventDefault()},yn=T=>{performance.now()<Ut&&(Ut=0,T.stopPropagation(),T.preventDefault())};c.addEventListener("touchend",ot,{passive:!1}),window.addEventListener("click",yn,!0);function Ot(T,K){if(!I)return;if(Ae.has(T)){ln(T);return}let te=I.room.phase;T===I.me.id&&(te==="lobby"||te==="ended")&&t.onSelf&&t.onSelf()}function Xi(T,K){if(!I||Q!=="game"||!ge)return;let te=Gt(T,K);if(te){ln(te),oe.ripple(T,K);return}let Me=I.room.phase,Te=I.me;if((Me==="lobby"||Me==="ended")&&It(T,K,ye=>ye===Te.id,26)){t.onSelf&&t.onSelf();return}if(Sl()){let ye=rt(T,K).intersectPlane(Ct,nt);if(!ye)return;let De=y.layout,lt=Math.hypot(ye.x,ye.z);if(lt>De.R+4)return;let je=Math.atan2(ye.x,ye.z);lt=ft(lt,De.Rp*.2,De.Rp*.96);let ct=Math.sin(je)*lt,gt=Math.cos(je)*lt,We=Nd(De,ct,gt);if(ce.localMove={x:ct,z:gt,until:performance.now()+1500},oe.ripple(T,K),t.onMove)try{t.onMove(We.x,We.y)}catch{}Wi(!1)}}let kt=new Map,hi=!1,ui=0,Ri=0,zt=0,Kt=0;function Dn(T){let K=c.getBoundingClientRect();return{x:T.clientX-K.left,y:T.clientY-K.top}}function qt(T){if(T.target!==h)return;h.setPointerCapture&&h.setPointerCapture(T.pointerId);let K=Dn(T);if(kt.set(T.pointerId,K),kt.size===1&&(hi=!1,ui=performance.now(),Ri=K.x,zt=K.y),kt.size===2){let[te,Me]=[...kt.values()];Kt=Math.hypot(te.x-Me.x,te.y-Me.y),hi=!0}}function cn(T){let K=Dn(T);if(!kt.has(T.pointerId)){T.pointerType==="mouse"&&Wg(K.x,K.y);return}let te=kt.get(T.pointerId);if(kt.set(T.pointerId,K),kt.size===1)!hi&&Math.hypot(K.x-Ri,K.y-zt)>9&&(hi=!0),hi&&Q==="game"&&(Be==="follow"?Zg(K.x-te.x,K.y-te.y):g.drag(K.x-te.x,K.y-te.y));else if(kt.size===2){let[Me,Te]=[...kt.values()],ye=Math.hypot(Me.x-Te.x,Me.y-Te.y);Kt>0&&ye>0&&Q==="game"&&(Be==="follow"?cp(Kt/ye):g.zoom(Kt/ye)),Kt=ye}}function fi(T){if(!kt.has(T.pointerId))return;let K=Dn(T);kt.delete(T.pointerId),kt.size===0&&!hi&&performance.now()-ui<650&&Xi(K.x,K.y),kt.size<2&&(Kt=0)}function xl(T){kt.delete(T.pointerId)}function Vg(T){if(Q!=="game")return;T.preventDefault();let K=Math.exp(ft(T.deltaY,-120,120)*.0015);Be==="follow"?cp(K):g.zoom(K)}function Wg(T,K){let te=Gt(T,K);te!==fe&&(fe=te,h.style.cursor=te?"pointer":"",Ks())}h.addEventListener("pointerdown",qt),h.addEventListener("pointermove",cn),h.addEventListener("pointerup",fi),h.addEventListener("pointercancel",xl),h.addEventListener("pointerleave",T=>{T.pointerType==="mouse"&&fe&&(fe=null,Ks())}),h.addEventListener("wheel",Vg,{passive:!1});let Xg=T=>T.preventDefault();h.addEventListener("contextmenu",Xg);let su=document.hidden,vl=!1,Qd=()=>{su=document.hidden,su||(qo=performance.now(),b.reset(),Ml())};document.addEventListener("visibilitychange",Qd),h.addEventListener("webglcontextlost",T=>{T.preventDefault(),vl=!0}),h.addEventListener("webglcontextrestored",()=>{vl=!1,ve=!0,qo=performance.now(),Ml()});function qg(){if(me!=null)return me;if(Q!=="game"||!I)return 18.35;let{room:T,day:K}=I,te=Date.now()+(I.serverNow,0),Me=T.deadline?Math.max(0,T.deadline-(te+yl))/1e3:null;switch(T.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let Te=T.settings&&T.settings.nightSec||30,ye=Me==null?.3:ft(1-Me/Te,0,1);return T.night&&T.night.stage&&(T.night.stage==="show"?ye=.7+.3*(Me==null?0:ft(1-Me/ks,0,1)):ye=.7*(Me==null?.3:ft(1-Me/(Te+4),0,1))),(21.2+ye*7.6)%24}case"day":{let Te=T.settings&&T.settings.daySec||120,ye;return K&&K.shortened?(Xo==null&&(Xo=ru,tp=Math.max(1,Me||10)),ye=Xo+(1-Xo)*ft(1-(Me||0)/tp,0,1)):(Xo=null,ye=Me==null?.2:ft(1-Me/Te,0,1)),ru=ye,7.4+ye*11.6}case"hunter":return Ee>19.5||Ee<6?7.6:Ee;case"ended":return T.winner==="vampir"?23:T.winner==="soytari"?18.5:9.5;default:return 17}}let ru=0,ep=-1,Xo=null,tp=10,yl=0,_l=0,qo=performance.now(),np=0,Yo=0,Gn={fps:0,ms:0,calls:0,tris:0,frames:0};function Ml(){!_l&&!pe&&(_l=requestAnimationFrame(Yg))}let Ko=240,bl=new Float32Array(Ko),ou=new Float32Array(Ko),Zo=0,Zs=0,ip=new Float32Array(Ko);function Jo(T,K){return Zs?(ip.set(T),+ip.subarray(0,Zs).sort()[Math.min(Zs-1,Math.floor(K*(Zs-1)))].toFixed(1)):0}function Yg(T){if(_l=0,pe||su||vl||(Ml(),Ze<2||ze<2)||C.fps<=30&&T-np<1e3/30-4)return;let K=ft((T-qo)/1e3,0,.1),te=T-qo;qo=T,np=T;let Me=performance.now();try{Kg(K)}catch(De){be("kare",De)}Ei();let Te=performance.now();try{l.render(M,p)}catch(De){be("\xE7izim",De)}let ye=performance.now();if(Gn.stepMs=(Gn.stepMs||0)*.9+(Te-Me)*.1,Gn.renderMs=(Gn.renderMs||0)*.9+(ye-Te)*.1,Gn.frames++,Yo+=te,Gn.cpu=ye-Me,bl[Zo]=te,ou[Zo]=ye-Me,Zo=(Zo+1)%Ko,Zs<Ko&&Zs++,Yo>500&&(Gn.fps=Math.round(Gn.frames*1e3/Yo),Gn.ms=+(Yo/Gn.frames).toFixed(1),Gn.frames=0,Yo=0),Gn.calls=l.info.render.calls,Gn.tris=l.info.render.triangles,S==="auto"&&ge){let De=b.sample(te,ye-Me,T);De&&De!==C.name&&(ps(De),v.reset())}if(ge&&!vl){let De=v.sample(te,ye-Me,T,C.fps===30?36:24);De!=null&&(n.renderScale=De,tn(tt*De))}}let kw=new He,au=new He(0,0,0),lu=new Map;function qr(T){return lu.has(T)||lu.set(T,new He(T)),lu.get(T)}function Kg(T){ce.time+=T;let K=ce.time;V=qg(),Ee=Ng(Ee,V,T,Q==="menu"?.6:1.3),Dg(Ee,ee);let te=I&&Q==="game"&&I.room.phase==="ended"&&I.room.winner==="vampir";Ie.copy(Pe||$.moon),te&&(Ie.set("#ff6a6a"),ee.sun.lerp(qr("#ff5a6a"),.35));let Me=$.tintAmt*($.nightTint?ee.night:1);Me>0&&(ee.top.lerp($.tint,Me),ee.hor.lerp($.tint,Me*.8),ee.sky.lerp($.tint,Me*.5),ee.gnd.lerp($.tint,Me*.3)),ee.night>.3&&ee.sun.lerp(Ie,(Pe||$.nightTint?.55:.3)*ee.night),ee.fogNear*=$.fog*j,ee.fogFar*=$.fog*j,ee.stars*=$.stars,M.fog.color.copy(ee.hor);let Te=Math.max(0,g.cur.dist*g.user.zoom-28)*(1-.35*ee.night);M.fog.near=ee.fogNear+Te*.9,M.fog.far=ee.fogFar+Te*1.1,mt.intensity=.9*ee.night*(le?.4:1),mt.color.copy(Ie),mt.position.set(-p.position.x*.6,60,-p.position.z*.6-40),x.color.copy(ee.sky),x.groundColor.copy(ee.gnd),x.intensity=ee.hi,w.color.copy(ee.sun),w.intensity=ee.si,ce.toon&&(x.intensity*=1.3,w.intensity*=.75);let ye=y&&y.layout,De=ye?ye.R+14:40;if(w.position.copy(ee.lightDir).multiplyScalar(120),w.target.position.set(0,0,0),w.castShadow){let Oe=w.shadow.camera;Oe.right!==De&&(Oe.left=-De,Oe.right=De,Oe.top=De,Oe.bottom=-De,Oe.near=20,Oe.far=260,Oe.updateProjectionMatrix(),ve=!0),Ye.angleTo(ee.lightDir)>.0045&&(Ye.copy(ee.lightDir),ve=!0)}let lt=.82+.1*Math.sin(K*13.1)+.06*Math.sin(K*23.7+1)+.05*Math.sin(K*5.3);if(le&&ie){let Oe=le==="window"||se.current&&se.current.kind==="watch";if(Oe){let wt=ie.W({x:-2.4,y:2.3,z:-1.2});U.position.copy(wt),x.color.lerp(Ie,.6),x.groundColor.lerp(Ie,.35),x.intensity=ee.hi+1.1}else{let wt=ie.lanternWorld();U.position.set(wt.x,wt.y+.9,wt.z+.8)}let at=ml(T);U.intensity=(Oe?13:9+5*ee.night)*lt*at,Ai&&(x.intensity*=.3+.7*at),U.distance=12}else U.intensity=(2+17*ee.night*ee.night)*ee.fire*lt,U.position.set(Math.sin(K*7)*.08,1.4,0),U.distance=17;H.update(K,tt,.75+.25*ee.fire),R.update(ee,K,p,tt,Ie),_.update(K,tt,C.fireflies?ft(ee.night*1.2-.2,0,1):0),u.style.opacity=String(.55+ee.night*.45+(le==="window"?.12:0));for(let Oe=J.length-1;Oe>=0;Oe--){let at=!0;try{at=J[Oe](T,K)}catch(wt){be("ticker",wt)}at&&J.splice(Oe,1)}if(ie&&ie.visible)try{ie.update(T,K)}catch(Oe){be("oda",Oe)}for(let Oe of q.values())try{Oe.ch.update(T,K)}catch(at){be("kopya",at)}Fe&&I&&Q==="game"&&Ks(),Ve.update(T,K,tt,g.cur.target,Q==="game"||Q==="menu"?C.weather:0,Ne&&Ne.fogTint?qr(Ne.fogTint):null,ee.night),y&&(y.update(T,K,ee)&&(ve=!0),y.version!==ep&&y.layout&&(ep=y.version,Ys(y.layout)),i-=T,I&&Q==="game"&&i<=0&&(i=.25,Ce.tick(I)));try{Qg(T)}catch(Oe){be("s\xFCr\xFC\u015F",Oe)}let je=ce.obstacles,ct=tx;ct.length=0,vp.setFromProjectionMatrix(nx.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse));for(let Oe of L.values()){yp.center.set(Oe.pos.x,Oe.pos.y+.9,Oe.pos.z);let at=Oe.visible&&vp.intersectsSphere(yp);Oe.animEvery=!Oe.visible||Oe.inside?-1:at?1:4;try{Oe.update(T,K)}catch(wt){be("karakter",wt),sp(Oe)}Oe.visible&&!Oe.claimed&&ct.push(Oe)}for(let Oe of A.values())try{Oe.update(T,K)}catch(at){be("hayalet",at),sp(Oe)}Kr&&ex();for(let Oe=0;Oe<ct.length;Oe++){let at=ct[Oe];for(let wt=Oe+1;wt<ct.length;wt++){let yt=ct[wt],Tn=yt.pos.x-at.pos.x,Ci=yt.pos.z-at.pos.z,Nn=Tn*Tn+Ci*Ci;if(Nn<.72*.72&&Nn>1e-6){let Zr=Math.sqrt(Nn),tr=(.72-Zr)*.5,El=Tn/Zr,Al=Ci/Zr,nr=at.speed>yt.speed?.75:.25;at.pos.x-=El*tr*nr,at.pos.z-=Al*tr*nr,yt.pos.x+=El*tr*(1-nr),yt.pos.z+=Al*tr*(1-nr)}}at.peeking||Xd(at.pos,je,null)}z.begin(),k.begin(),B.begin(),Y.begin(),z.add(0,1,0,3.4,qr("#ff8a2a"),.55*ee.fire*lt),k.add(0,.04,0,13+3*ee.night,qr("#ff7a1a"),(.18+.3*ee.night)*ee.fire*lt),y&&y.emitGlows(ee,K,z,k);let gt=ce.toon?.62:C.blob?.55:.32;if(ce.toon&&y)for(let Oe of y.houses.values())Oe.scale>.5&&B.add(Oe.cx,.03,Oe.cz,Oe.info.size*1.25*Oe.scale,au,.32);let We=I?qr(qd(I,P.witchMode)):null,st=I&&Q==="game"?vs():null;for(let Oe of ct)if(B.add(Oe.pos.x,.025,Oe.pos.z,1.05,au,gt),st&&st!=="night"&&Ae.has(Oe.id)){let at=I&&ul(I,{id:Oe.id});Y.add(Oe.pos.x,.05,Oe.pos.z,at?1.9:1.5,We,at?1:fe===Oe.id?.95:.45,Oe.seed*6)}for(let Oe of L.values())Oe.claimed&&Oe.visible&&Oe.root.visible&&B.add(Oe.pos.x,.025,Oe.pos.z,1.05,au,gt);for(let Oe of A.values())z.add(Oe.pos.x,1.2,Oe.pos.z,2.2,qr(Mn[Oe.look.color]),.22);if(st==="night"&&y)for(let Oe of Ae){let at=y.house(Oe);if(!at)continue;let wt=y.anchors(at),yt=ul(I,{id:Oe});Y.add(wt.approach.x,.05,wt.approach.z,yt?3.4:2.6,We,yt?1:fe===Oe?.95:.5,at.seat)}if(G.update(T,K),z.end(K),k.end(K),B.end(K),Y.end(K),Q==="menu"&&(g.shot.az+=T*.045),Be==="show"?(_e-=T,_e<=0&&(_e=.2,de(!1))):Be==="sleep"&&Xr()&&(g.shot.az+=T*.025),(Be==="plaza"||Be==="gather")&&sx(),cu-=T,Q==="game"&&I&&cu<=0&&(cu=.4,Be==="follow"!==uu()&&(Be==="follow"||Be==="plaza"||$o())&&et(!1)),Be==="follow")try{fp(T)}catch(Oe){be("takip",Oe)}g.update(T,K);try{$g(T)}catch(Oe){be("\xF6rtme",Oe)}let dt=Q==="game"&&I&&!se.current&&!le&&lp();oe.setCamToggle(!!dt,Be==="follow"?"follow":"overview",vt),oe.setRecenter(Q==="game"&&(Be==="follow"?Jg():g.offset),vt),Ue-=T,w.castShadow&&Vs===1&&ve&&Ue<=0&&(l.shadowMap.needsUpdate=!0,ve=!1,Ue=ix()?.1:.2),ce.toon&&(he-=T,he<=0&&(he=.5,Yf(M,!0))),r-=T,Q==="game"&&I&&r<=0&&(r=C.labelHz>=60?0:1/C.labelHz-.004,oe.project(p,rx,ax,ox))}function sp(T){try{T.once=null;let K=T.look;T.lookKey=null,T.setLook(K),qe(T)}catch{T.setVisible(!1)}}let rp="vkw.cam",Js="follow";try{let T=localStorage.getItem(rp);(T==="follow"||T==="overview")&&(Js=T)}catch{}let $e={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0,kd:1,ke:0},op=new Z(0,0,0),qi=new Z,cu=0;function $s(){if(!I||!I.me)return null;let T=I.me;if(!T.alive){let te=A.get(T.id);if(te)return te}let K=L.get(T.id);return K&&K.visible?K:null}function Sl(){let T=I&&Q==="game"?I.room.phase:null;return T==="lobby"||T==="ended"||$o()}function $o(){if(!I||Q!=="game"||!I.me||I.me.alive)return!1;let T=I.room.phase;return T!=="lobby"&&T!=="ended"&&A.has(I.me.id)}function hu(){return vt.joystick===null&&$o()&&X&&X.touch?{...vt,joystick:void 0}:vt}let ap=!1;function lp(){return Sl()&&!!$s()}function uu(){return Js==="follow"&&lp()}function wl(T){return T.yaw+Math.PI+.38*$e.side}function Zg(T,K){$e.az-=T*.0075,$e.el=ft($e.el+K*.004,.12,1.15),$e.dragT=0}function cp(T){$e.zoom=ft($e.zoom*T,.55,4.2),$e.zoomGoal=0,$e.dragT=Math.min($e.dragT,.5)}function Jg(){let T=$s();return T?Math.abs($e.zoom-($e.wide?1.6:1))>.15||Math.abs($e.el-.42)>.12||T.speed<.3&&Math.abs(jt(wl(T)-$e.az))>.9:!1}function hp(){if(Be==="follow"){let T=$s();T&&($e.az=wl(T)),$e.el=.42,$e.zoom=$e.wide?1.6:1,$e.zoomGoal=0,$e.dragT=99;return}g.recenter()}function up(){Js=Js==="follow"?"overview":"follow";try{localStorage.setItem(rp,Js)}catch{}et(!1)}function fp(T,K){let te=$s(),Me=y&&y.layout;if(!te||!Me)return;let Te=g.portrait;$e.init||($e.init=!0,$e.side=1,$e.az=wl(te),$e.el=.42,$e.zoom=1,$e.dragT=99,$e.zoomGoal=0,$e.wide=!1),$e.dragT+=T;let ye=vs(),De=ye==="vote"||ye==="shoot";De!==$e.wide&&($e.wide=De,De&&$e.zoom<1.6&&($e.zoomGoal=1.6)),$e.zoomGoal&&($e.zoom+=($e.zoomGoal-$e.zoom)*un(2.5,T),Math.abs($e.zoom-$e.zoomGoal)<.02&&($e.zoomGoal=0)),te.speed>.4&&$e.dragT>1.1&&($e.az+=jt(wl(te)-$e.az)*un(te.drive?1.5:.9,T)),$e.az=jt($e.az);let lt=$e.zoom,je=Ns(ft((lt-1.7)/2.5,0,1)),ct=Te?8.8:7.2;qi.set(te.pos.x,(te.isGhost?1.5:1.25)+(te.isGhost&&te.model?te.model.position.y:0),te.pos.z).lerp(op,je);let gt=$e.el+((Te?1.15:.98)-$e.el)*je,We=ct*lt+($e.ovDist-ct*lt)*je,st=(Te?54:46)+(40-(Te?54:46))*je;{let Oe=Math.cos(gt)*We,at=qi.x+Math.sin($e.az)*Oe,wt=qi.z+Math.cos($e.az)*Oe,yt=Math.hypot(at,wt)-(Me.R-6.2);if(yt>0&&je<.4&&$e.dragT>.8){let Tn=Math.atan2(-qi.x,-qi.z);$e.az=jt($e.az+jt(Tn-$e.az)*un(ft(yt*.5,0,2.5),T))}}let dt=Me.R-6.2;if(je<.6)for(let Oe=0;Oe<14;Oe++){let at=Math.cos(gt)*We,wt=qi.x+Math.sin($e.az)*at,yt=qi.z+Math.cos($e.az)*at;if(Math.hypot(wt,yt)<=dt)break;if(lt>1.25&&gt<1.05)gt+=.08;else if(We>4.4)We*=.9;else if(gt<1.05)gt+=.08;else break}if(je<.85){let Oe=jg(qi,$e.az,gt,We),at=Oe.dist/We,wt=Oe.el-gt;K&&($e.kd=at,$e.ke=wt),$e.kd+=(at-$e.kd)*un(at<$e.kd?9:1.8,T),$e.ke+=(wt-$e.ke)*un(wt>$e.ke?7:1.5,T),We*=$e.kd,gt+=$e.ke}else $e.kd=1,$e.ke=0;g.setShot({kind:"follow",target:qi,az:$e.az,el:gt,dist:We,fov:st,speed:5.5,snap:!!K}),g.shot.dynamic=!1}function $g(T){let te=Be==="follow"&&!g.override&&g.ovW<.05?$s():null,Me=p.position;for(let Te of L.values()){let ye=Te.camWant||!1;if(te&&Te!==te&&Te.visible&&!Te.claimed){let je=Te.pos.x-Me.x,ct=Te.pos.z-Me.z,st=Math.hypot(je,ct)<(ye?4.3:3.4);if(!st){let dt=te.pos.x-Me.x,Oe=te.pos.z-Me.z,at=dt*dt+Oe*Oe||1,wt=(je*dt+ct*Oe)/at,yt=ye?1.15:.85;if(wt>0&&wt<.82){let Tn=je-dt*wt,Ci=ct-Oe*wt;Tn*Tn+Ci*Ci<yt*yt&&(st=!0)}}ye=st}else ye=!1;Te.camWant=ye;let De=Te.camFade==null?1:Te.camFade,lt=ye?Math.max(0,De-T*4):Math.min(1,De+T*4);if(lt!==De){Te.setFade(lt);let je=lt<.5;je!==!!Te.camHidden&&(Te.camHidden=je,Fe=!0)}}}let Yr={el:0,dist:0};function jg(T,K,te,Me){let Te=y&&y.blockers,ye=te,De=Me;if(!Te||!Te.length)return Yr.el=ye,Yr.dist=De,Yr;let lt=Math.sin(K),je=Math.cos(K);for(let ct=0;ct<6;ct++){let gt=Math.cos(ye)*De,We=T.x+lt*gt,st=T.z+je*gt,dt=T.y+Math.sin(ye)*De,Oe=0,at=1/0;for(let wt=0;wt<Te.length;wt++){let yt=Te[wt];if(yt.x+yt.r+.6<Math.min(T.x,We)||yt.x-yt.r-.6>Math.max(T.x,We)||yt.z+yt.r+.6<Math.min(T.z,st)||yt.z-yt.r-.6>Math.max(T.z,st))continue;let Tn=yt.x-T.x,Ci=yt.z-T.z,Nn=(Tn*lt+Ci*je)/(gt||.001);Nn=Nn<0?0:Nn>1?1:Nn;let Zr=T.x+lt*gt*Nn-yt.x,tr=T.z+je*gt*Nn-yt.z,El=Math.sqrt(Zr*Zr+tr*tr),Al=T.y+(dt-T.y)*Nn,nr=We-yt.x,_p=st-yt.z,dx=yt.h>2.4?1.1:.35,Mp=yt.h>2.4?.8:.45;if(nr*nr+_p*_p<(yt.r+Mp)*(yt.r+Mp)&&dt<yt.h+dx){yt.h<2.4?Oe=Math.max(Oe,yt.h+.45-dt):at=Math.min(at,Math.max(0,Nn*gt-yt.r-.5));continue}yt.h>=1.9&&yt.r>=.35&&Nn>.12&&Nn<1&&El<yt.r+.12&&Al<yt.h&&(at=Math.min(at,Math.max(0,Nn*gt-yt.r-.45)))}if(!Oe&&at===1/0)break;if(at!==1/0){let wt=at/Math.max(.2,Math.cos(ye));wt>=3.6?De=Math.min(De,wt):ye=Math.min(1.2,ye+.12)}Oe&&(ye=Math.min(1.2,ye+Math.max(.06,Oe/Math.max(2,De))))}return Yr.el=ye,Yr.dist=De,Yr}let js={x:0,y:0},Qs=new Z,Kr=!1,Tl=0,dp=-1,pp=-1;Object.defineProperty(ce,"driving",{get:()=>Kr});function mp(T,K){let te=y&&y.layout;if(!te||!t.onMove)return;let Me=Nd(te,T.pos.x,T.pos.z);if(!(!K&&Math.abs(Me.x-dp)<.003&&Math.abs(Me.y-pp)<.003)){dp=Me.x,pp=Me.y;try{t.onMove(Me.x,Me.y)}catch{}}}function Qg(T){let K=$o();K!==ap&&(ap=K,X.place(hu(),Ze,ze));let te=$s(),Me=!!(ge&&te&&Sl()&&!le&&!se.current&&!te.claimed);X.setEnabled(Me),X.vector(js);let Te=Me?Math.hypot(js.x,js.y):0,ye=performance.now();if(Te>.08){p.getWorldDirection(Qs),Qs.y=0,Qs.lengthSq()<1e-4&&Qs.set(-Math.sin(g.cur.az),0,-Math.cos(g.cur.az)),Qs.normalize();let De=Qs.x,lt=Qs.z,je=-lt,ct=De,gt=je*js.x+De*js.y,We=ct*js.x+lt*js.y,st=Math.hypot(gt,We)||1;gt/=st,We/=st;let dt=Te>.92?4.8:.8+Te*3;te.drive||(te.drive={x:0,z:0,speed:0}),te.drive.x=gt,te.drive.z=We,te.drive.speed=dt,Kr||(Kr=!0,Tl=0);let Oe=ce.localMove||(ce.localMove={x:0,z:0,until:0});Oe.x=te.pos.x,Oe.z=te.pos.z,Oe.until=ye+2500,Tl-=T,Tl<=0&&(Tl=.15,mp(te,!1))}else if(Kr){Kr=!1;for(let De of[L.get(I&&I.me?I.me.id:""),A.get(I&&I.me?I.me.id:"")])De&&(De.drive=null);te&&Sl()&&(ce.localMove={x:te.pos.x,z:te.pos.z,until:ye+2500},mp(te,!0),Wi(!1))}}function ex(){let T=$s(),K=y&&y.layout;if(!T||!K)return;let te=Math.hypot(T.pos.x,T.pos.z)||.001,Me=Math.max(K.Rp*.2,2.3),Te=K.Rp*.96;if(te<Me||te>Te){let ye=ft(te,Me,Te)/te;T.pos.x*=ye,T.pos.z*=ye}}let gp=new Z;function xp(T,K){let te=0,Me=0,Te=0;for(let ye=8;ye<K;ye++)te+=T[ye].x,Me+=T[ye].z,Te++;return Te?gp.set(te/Te*.6,.9,Me/Te*.6+.2):gp.set(0,.9,.2)}let tx=[],vp=new xi,nx=new ht,yp=new en(new Z,1.3);function ix(){return!!(y&&y.busy)}let fu=0;function sx(){if(fu-=1/60,fu>0)return;fu=.3;let T=y&&y.layout;if(!T||!g.shot.points)return;let te=0,Me=Be==="gather"?5.6:3.2,Te=[];for(let ye=0;ye<8;ye++){let De=ye/8*it;Te.push(F[te++].set(Math.sin(De)*Me,0,Math.cos(De)*Me))}for(let ye of L.values()){if(!ye.visible||te>60)continue;let De=ye.path&&ye.path.length?ye.path[ye.path.length-1]:ye.pos;Math.hypot(De.x,De.z)>T.Rp+1.5||(Te.push(F[te++].set(De.x,0,De.z)),Te.push(F[te++].set(De.x,2.4,De.z)))}for(let ye of A.values())te<62&&(Te.push(F[te++].set(ye.pos.x,2.6,ye.pos.z)),Te.push(F[te++].set(ye.pos.x,0,ye.pos.z)));g.shot.points=Te,g.shot.target.copy(xp(Te,Te.length))}function rx(T,K){if(T.startsWith("room:")){let Te=ie&&ie.actors.get(T.slice(5));return!Te||!Te.ch.visible?!1:(K.set(Te.ch.pos.x,Te.ch.pos.y+Te.ch.headY+.15,Te.ch.pos.z),!0)}if(T.startsWith("cine:")){let Te=q.get(T);return!Te||!Te.ch.visible?!1:(K.set(Te.ch.pos.x,Te.ch.root.position.y+Te.ch.headY+.15,Te.ch.pos.z),!0)}let te=L.get(T);if(te&&te.visible)return K.set(te.pos.x,te.pos.y+te.headY+.15,te.pos.z),!0;let Me=A.get(T);return Me?(K.set(Me.pos.x,Me.headY+.5+Me.model.position.y,Me.pos.z),!0):!1}function ox(T){let K=T.startsWith("room:")||T.startsWith("cine:");if(le)return K;if(K)return!0;let te=L.get(T);return A.has(T)?!0:!(!te||!te.visible||te.camHidden||I&&I.room.phase==="night"&&T!==I.me.id&&!xe.has(T))}function ax(T,K){if(le)return!1;let te=y&&y.house(T);if(!te||te.scale<.6)return!1;let Me=y.layout,Te=0;Me&&Me.n>9&&Ze<700&&(Te=(te.seat%2?1:-1)*2.2);let ye=Math.hypot(te.cx,te.cz)||1;return K.set(te.cx+te.cx/ye*Te,te.info.height*.9,te.cz+te.cz/ye*Te),!0}function lx(T){if(!(T!=="menu"&&T!=="game")&&T!==Q&&(Q=T,we="",c.dataset.view=T,!!ge)){if(T==="menu"){Le.stop(),Se.reset(),ce.showDead.clear(),Wr(),xs(null),oe.clear();for(let K of L.values())K.dispose();L.clear();for(let K of A.values())K.dispose();A.clear(),Ce.reset(),se.reset(),ms(null);for(let K of[...y.houses.keys()])y.setDead(K,!1);for(let K of y.houses.values())K.litTarget=1,K.dead=!1}else ms(I),I&&Wi(!0);et(!0),g.snapNext=!1}}function cx(){se.reset(),Le.stop(),Se.reset(),ce.showDead.clear(),Wr(),xs(null),oe.clear();for(let T of L.values())T.dispose();L.clear();for(let T of A.values())T.dispose();if(A.clear(),Ce.reset(),I=null,we="",ru=0,ge){if(y)for(let T of[...y.houses.keys()])y.setDead(T,!1);ms(null)}g.recenter(),et(!0)}function hx(T){if(T==="auto"){S="auto",b.failed.clear(),b.reset();return}Hs[T]&&(S=T,b.level=T,ps(T))}function ux(){if(!pe){pe=!0,se.dispose(),Le.dispose(),Se.dispose(),cancelAnimationFrame(_l),document.removeEventListener("visibilitychange",Qd),window.removeEventListener("click",yn,!0),window.removeEventListener("resize",Xs),window.removeEventListener("orientationchange",Xs),Ws&&Ws.disconnect();for(let T of L.values())T.dispose();for(let T of A.values())T.dispose();L.clear(),A.clear(),y&&y.dispose(),R.dispose(),N.dispose(),H.dispose(),_.dispose(),G.dispose(),Ve.dispose(),ie&&ie.dispose();for(let T of q.values())T.ch.dispose();q.clear(),J.length=0;for(let T of[z,k,B,Y])T.dispose();oe.dispose(),X.dispose(),O0(),w.shadow.map&&w.shadow.map.dispose(),l.dispose(),l.forceContextLoss(),Id(),c.remove(),clearTimeout(O)}}Ml();let er={update:gl,announce(T){return pe?Promise.resolve():!ge||Q!=="game"?(se.skip(),Promise.resolve()):(T&&T.kind==="start"&&T.scenario&&xs(T.scenario.id),T&&T.kind==="death"&&(Ge={ids:(T.targets||[]).map(K=>K.id),at:Date.now()}),T&&T.kind&&!Cg[T.kind]&&Le.running&&Le.stop(),se.announce(T))},skip(){se.skip()},sawOwnDeath(){return Le.sawDeath()},bubble(T,K,te){if(!K)return;oe.bubble(T,String(K),te);let Me=L.get(T);if(Me&&Me.visible&&!Me.busy&&!Me.once&&Me.base==="idle"&&Me.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),Me&&Me.visible)for(let Te of L.values())Te!==Me&&Te.visible&&Math.hypot(Te.pos.x-Me.pos.x,Te.pos.z-Me.pos.z)<10&&Te.gaze(Me.pos,3.5,ce.time)},setView:lx,setQuality:hx,getQuality(){return S==="auto"?"auto":C.name},getTier(){return C.name},resize:Vr,reset:cx,dispose:ux,setInsets(T){T=T||{},vt={top:T.top||0,bottom:T.bottom||0,left:T.left||0,right:T.right||0,joystick:T.joystick===null?null:T.joystick&&typeof T.joystick=="object"?{left:+T.joystick.left||0,bottom:+T.joystick.bottom||0,size:+T.joystick.size||0}:void 0},g.setInsets(vt),oe.setInsets(vt),X.place(hu(),Ze,ze),et(!1)},recenter(){hp()},setCameraMode(T){(T==="follow"||T==="overview")&&T!==Js&&up()},getCameraMode(){return Js},setMood(T={}){T.fog!=null&&($.fog=ft(+T.fog,.3,2)),T.tint!=null&&$.tint.set(T.tint),T.tintAmt!=null&&($.tintAmt=ft(+T.tintAmt,0,1)),T.moon!=null&&$.moon.set(T.moon),T.stars!=null&&($.stars=ft(+T.stars,0,1)),T.weather!=null&&($.weather=T.weather)},director:se,stats(){return{...Gn,tier:C.name,mode:S,px:tt,scale:+(n.renderScale||1).toFixed(2),hour:+Ee.toFixed(2),ready:ge,p50:Jo(bl,.5),p95:Jo(bl,.95),p99:Jo(bl,.99),cpu50:Jo(ou,.5),cpu95:Jo(ou,.95)}},resetStats(){Zs=0,Zo=0},setScenario(T){xs(T)},setStyle(T){let K=T==="toon";if(K!==ce.toon){ce.toon=K,ps(C.name,!1);for(let te of[...L.values(),...A.values()])K?ja(te.model,.012):Kf(te.model);for(let te of q.values())K?ja(te.ch.model,.012):Kf(te.ch.model);y&&y.setOutlines(K),Yf(M,K),he=0}},getStyle(){return ce.toon?"toon":"default"},_debug:{world:ce,scene:M,renderer:l,camera:p,rig:g,fol:$e,get village(){return y},get room(){return ie},get roomMode(){return le},setHour(T){Ee=T}}},fx=er.update;er.update=(T,K)=>{T&&T.serverNow&&(yl=T.serverNow-Date.now()),fx(T,K)};for(let T of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode","setStyle"]){let K=er[T];er[T]=function(...te){try{return K.apply(er,te)}catch(Me){return be("api."+T,Me),T==="announce"?Promise.resolve():void 0}}}return er}var Gs=null,nu=new Set,iu=0,jd=0;function Nw(){if(Gs)return Gs;let s=new Oo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Bt,s.toneMapping=Ir,s.setClearColor(0,0),Gs={renderer:s,users:0},Gs}function Hg(s){if(iu=0,!nu.size||(iu=requestAnimationFrame(Hg),document.hidden)||s-jd<1e3/24)return;let e=Math.min(.1,(s-jd)/1e3||.04);jd=s;for(let t of nu)t.draw(e)}function Gg(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=Nw();r.users++;let o=new pr,a=new nn(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let c=new wr("#dfe8ff","#5a4a40",1.3);o.add(c);let l=new si("#fff2dc",2.6);l.position.set(1.8,3.5,5);let h=new si("#ffd7a8",.8);h.position.set(-3,1.5,3.5),o.add(h),o.add(l);let u=new si("#8fb4ff",1.6);u.position.set(-3,2.5,-3),o.add(u);let f=new Tt(new _r(.85,40),new Jt({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,m={...e},M=!1,p=t.yaw!=null?t.yaw:.18,g=0,S=t.yaw!=null?t.yaw:0,b=!1,v=0,C=0,E=t.turntable!==!1,x={sfxStep:null,sfx(){}};function w(){M||!Nh("chars")||(d?d.setLook(m):(d=new wi(x,"preview",m),o.add(d.root),d.idleTimer=2))}Nh("chars")?w():Fr(["chars"]).then(w).catch(()=>{});let U=k=>{b=!0,v=k.clientX,C=0,n.setPointerCapture&&n.setPointerCapture(k.pointerId)},R=k=>{if(!b)return;let B=k.clientX-v;v=k.clientX,p+=B*.012,C=B*.012*24},N=()=>{b=!1};n.addEventListener("pointerdown",U),n.addEventListener("pointermove",R),n.addEventListener("pointerup",N),n.addEventListener("pointercancel",N);let z={draw(k){if(M||!d)return;let B=s.clientWidth,Y=s.clientHeight;if(B<4||Y<4||!n.isConnected)return;let G=Math.min(window.devicePixelRatio||1,2),H=Math.round(B*G),_=Math.round(Y*G);(n.width!==H||n.height!==_)&&(n.width=H,n.height=_);let y=r.renderer,L=y.getSize(new pt);(L.x<H||L.y<_)&&y.setSize(Math.max(L.x,H),Math.max(L.y,_),!1);let A=y.getSize(new pt);if(y.setViewport(0,A.y-_,H,_),y.setScissor(0,A.y-_,H,_),y.setScissorTest(!0),a.aspect=B/Y,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!b){g+=k,p+=C*k,C*=Math.exp(-3*k);let D=p-S;D=Math.atan2(Math.sin(D),Math.cos(D));let q=E?Math.sin(g*.7)*.42:0;Math.abs(C)<.4&&(p=S+D+(q-D)*Math.min(1,k*1.6))}d.yaw=p,d.update(k,performance.now()/1e3),y.clear(),y.render(o,a),i.clearRect(0,0,H,_),i.drawImage(y.domElement,0,A.y-_,H,_,0,0,H,_)}};return nu.add(z),iu||(iu=requestAnimationFrame(Hg)),{setLook(k){m={...m,...k},w()},dispose(){M||(M=!0,nu.delete(z),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&Gs&&(Gs.renderer.dispose(),Gs.renderer.forceContextLoss(),Gs=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&Dh(new URL("../assets/models/",s).href)}catch{}var zw="2.1.0",Fw=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function Ow(s){Dh(s)}return vx(Uw);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
