var VKWorld=(()=>{var Tu=Object.defineProperty;var Gx=Object.getOwnPropertyDescriptor;var Vx=Object.getOwnPropertyNames;var Wx=Object.prototype.hasOwnProperty;var Bp=(s,e)=>{for(var t in e)Tu(s,t,{get:e[t],enumerable:!0})},Xx=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Vx(e))!Wx.call(s,i)&&i!==t&&Tu(s,i,{get:()=>e[i],enumerable:!(n=Gx(e,i))||n.enumerable});return s};var qx=s=>Xx(Tu({},"__esModule",{value:!0}),s);var Iw={};Bp(Iw,{ACCS:()=>pg,COLORS:()=>fg,HATS:()=>dg,QUALITIES:()=>Rw,SKINS:()=>mg,create:()=>px,preview:()=>gx,setAssetBase:()=>Cw,supported:()=>mp,version:()=>Aw});var Dm=0,df=1,Nm=2;var Fr=1,zm=2,Go=3,Oi=0,vn=1,en=2,Or=0,Ei=1,Jn=2,pf=3,mf=4,km=5;var Ur=100,Fm=101,Om=102,Um=103,Bm=104,Hm=200,Gm=201,Vm=202,Wm=203,gf=204,xf=205,Xm=206,qm=207,Ym=208,Km=209,Zm=210,Jm=211,$m=212,jm=213,Qm=214,xc=0,vc=1,yc=2,To=3,_c=4,Mc=5,bc=6,Sc=7,Gc=0,e0=1,t0=2,Ui=0,vf=1,yf=2,_f=3,Mf=4,bf=5,Sf=6,Br=7,tf="attached",n0="detached",wf=300,Hr=301,Vo=302,Vc=303,Wc=304,Ds=1e3,qn=1001,Ao=1002,ln=1003,Xc=1004;var Gr=1005;var gn=1006,Wo=1007;var hi=1008;var $n=1009,Ef=1010,Tf=1011,Xo=1012,qc=1013,ui=1014,Fn=1015,Ti=1016,Yc=1017,Kc=1018,Vr=1020,Af=35902,Rf=35899,Cf=1021,If=1022,Yn=1023,as=1026,xs=1027,Zc=1028,Ya=1029,Bs=1030,Jc=1031;var $c=1033,Ka=33776,Za=33777,Ja=33778,$a=33779,jc=35840,Qc=35841,eh=35842,th=35843,nh=36196,ih=37492,sh=37496,rh=37488,oh=37489,ja=37490,ah=37491,lh=37808,ch=37809,hh=37810,uh=37811,fh=37812,dh=37813,ph=37814,mh=37815,gh=37816,xh=37817,vh=37818,yh=37819,_h=37820,Mh=37821,bh=36492,Sh=36494,wh=36495,Eh=36283,Th=36284,Qa=36285,Ah=36286,el=2200,i0=2201,s0=2202,Mr=2300,br=2301,mc=2302,nf=2303,vr=2400,yr=2401,wa=2402,Rh=2500,r0=2501,Pf=0,tl=1,qo=2,o0=3200;var nl=0,a0=1,vs="",Bt="srgb",On="srgb-linear",Ea="linear",Vt="srgb";var gc=7680;var l0=519,c0=512,h0=513,u0=514,Lf=515,f0=516,d0=517,Df=518,Nf=519,zf=35044,il=35048;var kf="300 es",oi=2e3,Ro=2001;function Yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function p0(){let s=Co("canvas");return s.style.display="block",s}var Hp={},Io=null;function Ta(...s){let e="THREE."+s.shift();Io?Io("log",e,...s):console.log(e,...s)}function m0(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=m0(s);let e="THREE."+s.shift();if(Io)Io("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=m0(s);let e="THREE."+s.shift();if(Io)Io("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function _r(...s){let e=s.join(" ");e in Hp||(Hp[e]=!0,ft(...s))}function g0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var x0={[xc]:xc,[yc]:bc,[_c]:_c,[To]:Mc,[vc]:vc,[bc]:yc,[Sc]:Sc,[Mc]:To},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gp=1234567,ba=Math.PI/180,Sr=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function Ff(s,e){return(s%e+e)%e}function Zx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jx(s,e,t){return s!==e?(t-s)/(e-s):0}function Sa(s,e,t){return(1-t)*s+t*e}function $x(s,e,t,n){return Sa(s,e,1-Math.exp(-t*n))}function jx(s,e=1){return e-Math.abs(Ff(s,e*2)-e)}function Qx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ev(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nv(s,e){return s+Math.random()*(e-s)}function iv(s){return s*(.5-Math.random())}function sv(s){s!==void 0&&(Gp=s);let e=Gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rv(s){return s*ba}function ov(s){return s*Sr}function av(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function lv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Of(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cv(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ch(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uf(s,e){if(e.constructor===Float32Array)return s;let t=Ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Bf(s,e){if(e.constructor===Float32Array)return s;let t=Ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Yo={DEG2RAD:ba,RAD2DEG:Sr,generateUUID:Bi,clamp:zt,euclideanModulo:Ff,mapLinear:Zx,inverseLerp:Jx,lerp:Sa,damp:$x,pingpong:jx,smoothstep:Qx,smootherstep:ev,randInt:tv,randFloat:nv,randFloatSpread:iv,seededRandom:sv,degToRad:rv,radToDeg:ov,isPowerOfTwo:av,ceilPowerOfTwo:lv,floorPowerOfTwo:Of,setQuaternionFromProperEuler:cv,normalize:Bf,denormalize:Uf},Xf=class Xf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xf.prototype.isVector2=!0;var pt=Xf,Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(u!==y||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*y;m<0&&(f=-f,d=-d,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);g=Math.sin(g*S)/M,a=Math.sin(a*S)/M,c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+y*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+y*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qf=class qf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qf.prototype.isVector3=!0;var K=qf,Au=new K,Vp=new Yt,Yf=class Yf{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],y=i[0],m=i[3],g=i[6],S=i[1],M=i[4],v=i[7],R=i[2],E=i[5],x=i[8];return r[0]=o*y+a*S+c*R,r[3]=o*m+a*M+c*E,r[6]=o*g+a*v+c*x,r[1]=l*y+h*S+u*R,r[4]=l*m+h*M+u*E,r[7]=l*g+h*v+u*x,r[2]=f*y+d*S+p*R,r[5]=f*m+d*M+p*E,r[8]=f*g+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yf.prototype.isMatrix3=!0;var wt=Yf,Ru=new wt,Wp=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){let s={enabled:!0,workingColorSpace:On,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vt&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(i.r=Eo(i.r),i.g=Eo(i.g),i.b=Eo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vs?Ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[On]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var Rt=hv();function rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var oo,wc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oo===void 0&&(oo=Co("canvas")),oo.width=e.width,oo.height=e.height;let i=oo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=oo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rs(t[n]/255)*255):t[n]=rs(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uv=0,Po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cu(i[o].image)):r.push(Cu(i[o]))}else r=Cu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var fv=0,Iu=new K,xn=class s extends _i{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=qn,i=qn,r=gn,o=hi,a=Yn,c=$n,l=s.DEFAULT_ANISOTROPY,h=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Bi(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=wf;xn.DEFAULT_ANISOTROPY=1;var Kf=class Kf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(d+1)/2,R=(g+1)/2,E=(h+f)/4,x=(u+y)/4,w=(p+m)/4;return M>v&&M>R?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=x/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=w/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=x/r,i=w/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-y)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this.w=zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this.w=zt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kf.prototype.isVector4=!0;var Xt=Kf,Ec=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new xn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Po(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Aa=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Hc=class Hc{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,y,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ao.setFromMatrixColumn(e,0).length(),r=1/ao.setFromMatrixColumn(e,1).length(),o=1/ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,y=l*u;t[0]=f+y*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,y=l*u;t[0]=f-y*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+y,t[1]=c*u,t[5]=y*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=y-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dv,e,pv)}lookAt(e,t,n){let i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),As.crossVectors(n,Qn),As.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),As.crossVectors(n,Qn)),As.normalize(),Ul.crossVectors(Qn,As),i[0]=As.x,i[4]=Ul.x,i[8]=Qn.x,i[1]=As.y,i[5]=Ul.y,i[9]=Qn.y,i[2]=As.z,i[6]=Ul.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],y=n[6],m=n[10],g=n[14],S=n[3],M=n[7],v=n[11],R=n[15],E=i[0],x=i[4],w=i[8],O=i[12],C=i[1],N=i[5],z=i[9],U=i[13],B=i[2],Y=i[6],H=i[10],G=i[14],b=i[3],_=i[7],L=i[11],A=i[15];return r[0]=o*E+a*C+c*B+l*b,r[4]=o*x+a*N+c*Y+l*_,r[8]=o*w+a*z+c*H+l*L,r[12]=o*O+a*U+c*G+l*A,r[1]=h*E+u*C+f*B+d*b,r[5]=h*x+u*N+f*Y+d*_,r[9]=h*w+u*z+f*H+d*L,r[13]=h*O+u*U+f*G+d*A,r[2]=p*E+y*C+m*B+g*b,r[6]=p*x+y*N+m*Y+g*_,r[10]=p*w+y*z+m*H+g*L,r[14]=p*O+y*U+m*G+g*A,r[3]=S*E+M*C+v*B+R*b,r[7]=S*x+M*N+v*Y+R*_,r[11]=S*w+M*z+v*H+R*L,r[15]=S*O+M*U+v*G+R*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],y=e[7],m=e[11],g=e[15],S=c*d-l*f,M=a*d-l*u,v=a*f-c*u,R=o*d-l*h,E=o*f-c*h,x=o*u-a*h;return t*(y*S-m*M+g*v)-n*(p*S-m*R+g*E)+i*(p*M-y*R+g*x)-r*(p*v-y*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],y=e[13],m=e[14],g=e[15],S=t*a-n*o,M=t*c-i*o,v=t*l-r*o,R=n*c-i*a,E=n*l-r*a,x=i*l-r*c,w=h*y-u*p,O=h*m-f*p,C=h*g-d*p,N=u*m-f*y,z=u*g-d*y,U=f*g-d*m,B=S*U-M*z+v*N+R*C-E*O+x*w;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/B;return e[0]=(a*U-c*z+l*N)*Y,e[1]=(i*z-n*U-r*N)*Y,e[2]=(y*x-m*E+g*R)*Y,e[3]=(f*E-u*x-d*R)*Y,e[4]=(c*C-o*U-l*O)*Y,e[5]=(t*U-i*C+r*O)*Y,e[6]=(m*v-p*x-g*M)*Y,e[7]=(h*x-f*v+d*M)*Y,e[8]=(o*z-a*C+l*w)*Y,e[9]=(n*C-t*z-r*w)*Y,e[10]=(p*E-y*v+g*S)*Y,e[11]=(u*v-h*E-d*S)*Y,e[12]=(a*O-o*N-c*w)*Y,e[13]=(t*N-n*O+i*w)*Y,e[14]=(y*M-p*R-m*S)*Y,e[15]=(h*R-u*M+f*S)*Y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,y=o*h,m=o*u,g=a*u,S=c*l,M=c*h,v=c*u,R=n.x,E=n.y,x=n.z;return i[0]=(1-(y+g))*R,i[1]=(d+v)*R,i[2]=(p-M)*R,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+g))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(p+M)*x,i[9]=(m-S)*x,i[10]=(1-(f+y))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ao.set(i[0],i[1],i[2]).length(),a=ao.set(i[4],i[5],i[6]).length(),c=ao.set(i[8],i[9],i[10]).length();r<0&&(o=-o),xi.copy(this);let l=1/o,h=1/a,u=1/c;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,t.setFromRotationMatrix(xi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=oi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,y;if(c)p=r/(o-r),y=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ro)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=oi,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,y;if(c)p=1/(o-r),y=o/(o-r);else if(a===oi)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ro)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Hc.prototype.isMatrix4=!0;var at=Hc,ao=new K,xi=new at,dv=new K(0,0,0),pv=new K(1,1,1),As=new K,Ul=new K,Qn=new K,qp=new at,Yp=new Yt,li=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mv=0,Kp=new K,lo=new Yt,ji=new at,Bl=new K,ha=new K,gv=new K,xv=new Yt,Zp=new K(1,0,0),Jp=new K(0,1,0),$p=new K(0,0,1),jp={type:"added"},vv={type:"removed"},co={type:"childadded",child:null},Pu={type:"childremoved",child:null},Zt=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new K,t=new li,n=new Yt,i=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new wt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,t){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ha,Bl,this.up):ji.lookAt(Bl,ha,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),lo.setFromRotationMatrix(ji),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),co.child=e,this.dispatchEvent(co),co.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vv),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new K(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yv={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Lu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=Ff(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lu(o,r,e+1/3),this.g=Lu(o,r,e),this.b=Lu(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=v0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Rt.workingToColorSpace(In.copy(this),e),Math.round(zt(In.r*255,0,255))*65536+Math.round(zt(In.g*255,0,255))*256+Math.round(zt(In.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,r=In.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Bt){Rt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,i=In.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(Hl);let n=Sa(Rs.h,Hl.h,t),i=Sa(Rs.s,Hl.s,t),r=Sa(Rs.l,Hl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Ue;Ue.NAMES=v0;var Ra=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wr=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new K,Qi=new K,Du=new K,es=new K,ho=new K,uo=new K,Qp=new K,Nu=new K,zu=new K,ku=new K,Fu=new Xt,Ou=new Xt,Uu=new Xt,ss=class s{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vi.subVectors(i,t),Qi.subVectors(n,t),Du.subVectors(e,t);let o=vi.dot(vi),a=vi.dot(Qi),c=vi.dot(Du),l=Qi.dot(Qi),h=Qi.dot(Du),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,es.x),c.addScaledVector(o,es.y),c.addScaledVector(a,es.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Fu.setScalar(0),Ou.setScalar(0),Uu.setScalar(0),Fu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fu,r.x),o.addScaledVector(Ou,r.y),o.addScaledVector(Uu,r.z),o}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),Qi.subVectors(e,t),vi.cross(Qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),vi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ho.subVectors(i,n),uo.subVectors(r,n),Nu.subVectors(e,n);let c=ho.dot(Nu),l=uo.dot(Nu);if(c<=0&&l<=0)return t.copy(n);zu.subVectors(e,i);let h=ho.dot(zu),u=uo.dot(zu);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(ho,o);ku.subVectors(e,r);let d=ho.dot(ku),p=uo.dot(ku);if(p>=0&&d<=p)return t.copy(r);let y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(uo,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Qp.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Qp,a);let g=1/(m+y+f);return o=y*g,a=f*g,t.copy(n).addScaledVector(ho,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Vl.subVectors(this.max,ua),fo.subVectors(e.a,ua),po.subVectors(e.b,ua),mo.subVectors(e.c,ua),Cs.subVectors(po,fo),Is.subVectors(mo,po),dr.subVectors(fo,mo);let t=[0,-Cs.z,Cs.y,0,-Is.z,Is.y,0,-dr.z,dr.y,Cs.z,0,-Cs.x,Is.z,0,-Is.x,dr.z,0,-dr.x,-Cs.y,Cs.x,0,-Is.y,Is.x,0,-dr.y,dr.x,0];return!Bu(t,fo,po,mo,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Bu(t,fo,po,mo,Vl))?!1:(Wl.crossVectors(Cs,Is),t=[Wl.x,Wl.y,Wl.z],Bu(t,fo,po,mo,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,Gl=new $t,fo=new K,po=new K,mo=new K,Cs=new K,Is=new K,dr=new K,ua=new K,Vl=new K,Wl=new K,pr=new K;function Bu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pr.fromArray(s,r);let a=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),c=e.dot(pr),l=t.dot(pr),h=n.dot(pr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var pn=new K,Xl=new pt,_v=0,Tt=class extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zf,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?Ch(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bf(e,this.array)}};var Ca=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mv=new $t,fa=new K,Hu=new K,rn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Hu)),this.expandByPoint(fa.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bv=0,ri=new at,Gu=new Zt,go=new K,ei=new $t,da=new $t,bn=new K,Pt=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?Ia:Ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];da.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ei.min,da.min),ei.expandByPoint(bn),bn.addVectors(ei.max,da.max),ei.expandByPoint(bn)):(ei.expandByPoint(da.min),ei.expandByPoint(da.max))}ei.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bn.fromBufferAttribute(a,l),c&&(go.fromBufferAttribute(e,l),bn.add(go)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new K,c[O]=new K;let h=new K,u=new K,f=new K,d=new pt,p=new pt,y=new pt,m=new K,g=new K;function S(O,C,N){l[O]=l[C]=l[N]=1,h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,N),u.sub(h),f.sub(h),p.sub(d),y.sub(d);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(z),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(z),a[O].add(m),a[C].add(m),a[N].add(m),c[O].add(g),c[C].add(g),c[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,C=M.length;O<C;++O){let N=M[O],z=N.start,U=N.count;for(let B=z,Y=z+U;B<Y;B+=3)S(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new K,R=new K,E=new K,x=new K;function w(O){E.fromBufferAttribute(i,O),x.copy(E);let C=a[O];v.copy(C),v.sub(E.multiplyScalar(E.dot(C))).normalize(),R.crossVectors(x,C);let z=R.dot(c[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,z)}for(let O=0,C=n.count;O<C;++O)l[O]&&w(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new K,r=new K,o=new K,a=new K,c=new K,l=new K,h=new K,u=new K;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new Tt(f,h,u)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zf,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=em(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=em(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function em(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Bi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var kn=new K,Ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ch(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bf(e,this.data.array)}},Vu=new K,Sv=new K,wv=new wt,ti=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Vu.subVectors(n,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wv.getNormalMatrix(e),i=this.coplanarPoint(Vu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ev=0,Ln=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Ei,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=xf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zs=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xo,pa=new K,vo=new K,yo=new K,_o=new pt,ma=new pt,y0=new at,ql=new K,ga=new K,Yl=new K,tm=new pt,Wu=new pt,nm=new pt,Tr=class extends Zt{constructor(e=new zs){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Er(t,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new Ns(n,3,0,!1)),xo.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=xo,this.material=e,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),y0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-yo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Kl(ql.set(-.5,-.5,0),yo,o,vo,i,r),Kl(ga.set(.5,-.5,0),yo,o,vo,i,r),Kl(Yl.set(.5,.5,0),yo,o,vo,i,r),tm.set(0,0),Wu.set(1,0),nm.set(1,1);let a=e.ray.intersectTriangle(ql,ga,Yl,!1,pa);if(a===null&&(Kl(ga.set(-.5,.5,0),yo,o,vo,i,r),Wu.set(0,1),a=e.ray.intersectTriangle(ql,Yl,ga,!1,pa),a===null))return;let c=e.ray.origin.distanceTo(pa);c<e.near||c>e.far||t.push({distance:c,point:pa.clone(),uv:ss.getInterpolation(pa,ql,ga,Yl,tm,Wu,nm,new pt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Kl(s,e,t,n,i,r){_o.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ma.x=r*_o.x-i*_o.y,ma.y=i*_o.x+r*_o.y):ma.copy(_o),s.copy(e),s.x+=ma.x,s.y+=ma.y,s.applyMatrix4(y0)}var ns=new K,Xu=new K,Zl=new K,Jl=new K,ks=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xu.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Jl.copy(this.origin).sub(Xu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Jl.dot(this.direction),c=-Jl.dot(Zl),l=Jl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xu).addScaledVector(Zl,f),d}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),i=ns.dot(ns)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=n.x-o.x,S=n.y-o.y,M=n.z-o.z,v=Math.abs(c),R=Math.abs(l),E=Math.abs(h),x,w,O,C,N,z,U,B,Y,H,G,b;if(v>=R&&v>=E?(O=c,z=u,Y=p,b=g,c>=0?(x=l,w=h,C=f,N=d,U=y,B=m,H=S,G=M):(x=h,w=l,C=d,N=f,U=m,B=y,H=M,G=S)):R>=E?(O=l,z=f,Y=y,b=S,l>=0?(x=h,w=c,C=d,N=u,U=m,B=p,H=M,G=g):(x=c,w=h,C=u,N=d,U=p,B=m,H=g,G=M)):(O=h,z=d,Y=m,b=M,h>=0?(x=c,w=l,C=u,N=f,U=p,B=y,H=g,G=S):(x=l,w=c,C=f,N=u,U=y,B=p,H=S,G=g)),O===0)return null;let _=x/O,L=w/O,A=1/O,D=C-_*z,X=N-L*z,W=U-_*Y,J=B-L*Y,de=H-_*b,ie=G-L*b,ae=de*J-ie*W,Ce=D*ie-X*de,Be=W*X-J*D;if(i){if(ae<0||Ce<0||Be<0)return null}else if((ae<0||Ce<0||Be<0)&&(ae>0||Ce>0||Be>0))return null;let he=ae+Ce+Be;if(he===0)return null;let He=A*(ae*z+Ce*Y+Be*b);return(he>0?He<0:He>0)?null:this.at(He/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},im=new at,mr=new ks,$l=new rn,sm=new K,jl=new K,Ql=new K,ec=new K,qu=new K,tc=new K,rm=new K,nc=new K,St=class extends Zt{constructor(e=new Pt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(qu.fromBufferAttribute(u,e),o?tc.addScaledVector(qu,h):tc.addScaledVector(qu.sub(t),h))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(r),mr.copy(e.ray).recast(e.near),!($l.containsPoint(mr.origin)===!1&&(mr.intersectSphere($l,sm)===null||mr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(im.copy(r).invert(),mr.copy(e.ray).applyMatrix4(im),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,R=M;v<R;v+=3){let E=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);i=ic(this,g,e,n,l,h,u,E,x,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=ic(this,o,e,n,l,h,u,S,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=f.length;p<y;p++){let m=f[p],g=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,R=M;v<R;v+=3){let E=v,x=v+1,w=v+2;i=ic(this,g,e,n,l,h,u,E,x,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let S=m,M=m+1,v=m+2;i=ic(this,o,e,n,l,h,u,S,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Tv(s,e,t,n,i,r,o,a){let c;if(e.side===vn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Oi,a),c===null)return null;nc.copy(a),nc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(nc);return l<t.near||l>t.far?null:{distance:l,point:nc.clone(),object:s}}function ic(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,jl),s.getVertexPosition(c,Ql),s.getVertexPosition(l,ec);let h=Tv(s,e,t,n,jl,Ql,ec,rm);if(h){let u=new K;ss.getBarycoord(rm,jl,Ql,ec,u),i&&(h.uv=ss.getInterpolatedAttribute(i,a,c,l,u,new pt)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,c,l,u,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new K,materialIndex:0};ss.getNormal(jl,Ql,ec,f.normal),h.face=f,h.barycoord=u}return h}var xa=new Xt,om=new Xt,am=new Xt,Av=new Xt,lm=new at,sc=new K,Yu=new rn,cm=new at,Ku=new ks,Ar=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tf,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(i),e.ray.intersectsSphere(Yu)!==!1&&(cm.copy(i).invert(),Ku.copy(e.ray).applyMatrix4(cm),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===n0?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;om.fromBufferAttribute(i.attributes.skinIndex,e),am.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(xa.copy(t),t.set(0,0,0,0)):(xa.set(t.x,t.y,t.z,1),t.set(0,0,0)),xa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=am.getComponent(r);if(o!==0){let a=om.getComponent(r);lm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Av.copy(xa).applyMatrix4(lm),o)}}return t.isVector4&&(t.w=xa.w),t.applyMatrix4(this.bindMatrixInverse)}},No=class extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},os=class extends xn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=ln,h=ln,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hm=new at,Rv=new at,Pa=class s{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Rv;hm.multiplyMatrices(a,t[r]),hm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new os(t,e,e,Yn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ft("Skeleton: No bone found with UUID:",r),o=new No),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Un=class extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mo=new at,um=new at,rc=[],fm=new $t,Cv=new at,va=new St,ya=new rn,Rr=class extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),fm.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(fm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),ya.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mo),um.multiplyMatrices(n,Mo),va.matrixWorld=um,va.raycast(e,rc);for(let o=0,a=rc.length;o<a;o++){let c=rc[o];c.instanceId=r,c.object=this,t.push(c)}rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new os(new Float32Array(i*this.count),i,this.count,Zc,Fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gr=new rn,Iv=new pt(.5,.5),oc=new K,Mi=class{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],y=r[9],m=r[10],g=r[11],S=r[12],M=r[13],v=r[14],R=r[15];if(i[0].setComponents(l-o,d-h,g-p,R-S).normalize(),i[1].setComponents(l+o,d+h,g+p,R+S).normalize(),i[2].setComponents(l+a,d+u,g+y,R+M).normalize(),i[3].setComponents(l-a,d-u,g-y,R-M).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,g-m,R-v).normalize();else if(i[4].setComponents(l-c,d-f,g-m,R-v).normalize(),t===oi)i[5].setComponents(l+c,d+f,g+m,R+v).normalize();else if(t===Ro)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);let t=Iv.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(oc.x=i.normal.x>0?e.max.x:e.min.x,oc.y=i.normal.y>0?e.max.y:e.min.y,oc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dm=new at,La=class s{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];dm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Mi),n[i].setFromProjectionMatrix(dm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Mi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Zu(s,e){return s-e}function Pv(s,e){return s.z-e.z}function Lv(s,e){return e.z-s.z}var sf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Xn=new at,Dv=new Ue(1,1,1),Nv=new Mi,zv=new La,ac=new $t,xr=new rn,Ju=new K,pm=new K,mm=new K,kv=new K,$u=new sf,Pn=new St,lc=[];function Fv(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Di(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var zo=class extends St{constructor(e,t,n=t*2,i){super(new Pt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new os(t,e,e,Yn,Fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new os(t,e,e,Ya,ui);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new os(t,e,e,Yn,Fn);n.colorSpace=Rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Tt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Tt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingBoxAt(r,ac).applyMatrix4(Xn),e.union(ac)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingSphereAt(r,xr).applyMatrix4(Xn),e.union(xr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Zu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Xn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Dv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Zu),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);Fv(u,f,c);let d=u.itemSize;for(let p=u.count,y=l;p<y;p++){let m=c+p;for(let g=0;g<d;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,d=u;f<d;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=r.index,p=d.array,y=e-u;for(let m=h;m<h+f;m++)p[m]=p[m]+y;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let d in f){let p=f[d],{array:y,itemSize:m}=p;y.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new $t,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Ju.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new rn;this.getBoundingBoxAt(e,ac),ac.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Ju.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Ju))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Zu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Di(this._multiDrawCounts,i),Di(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),c=new Int32Array(e);Di(this._mergedDrawCounts,o),Di(this._mergedDrawStarts,a),Di(this._mergedDrawInstanceCounts,c),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=c,this._maxInstanceCount=e;let l=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Di(l.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Di(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Di(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Pt,this._initializeGeometry(r));let o=this.geometry;r.index&&Di(r.index.array,o.index.array);for(let a in r.attributes)Di(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Pn.material=this.material,Pn.geometry.index=o.index,Pn.geometry.attributes=o.attributes,Pn.geometry.boundingBox===null&&(Pn.geometry.boundingBox=new $t),Pn.geometry.boundingSphere===null&&(Pn.geometry.boundingSphere=new rn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];Pn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Pn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Pn.geometry.boundingBox),this.getBoundingSphereAt(l,Pn.geometry.boundingSphere),Pn.raycast(e,lc);for(let u=0,f=lc.length;u<f;u++){let d=lc[u];d.object=this,d.batchId=a,t.push(d)}lc.length=0}Pn.material=null,Pn.geometry.index=null,Pn.geometry.attributes={},Pn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,p=this._geometryInfo,y=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,S=e.isArrayCamera?zv:Nv;y&&(e.isArrayCamera?S.setFromArrayCamera(e):(Xn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),S.setFromProjectionMatrix(Xn,e.coordinateSystem,e.reversedDepth)));let M=0,v=0;if(this.sortObjects){Xn.copy(this.matrixWorld).invert(),pm.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Xn),mm.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Xn);for(let x=0,w=c.length;x<w;x++)if(c[x].visible&&c[x].active){let O=c[x].geometryIndex;this.getMatrixAt(x,Xn),this.getBoundingSphereAt(O,xr).applyMatrix4(Xn);let C=!1;if(y&&(C=!S.intersectsSphere(xr)),!C){let N=p[O],z=kv.subVectors(xr.center,pm).dot(mm);$u.push(N.start,N.count,z,x)}}let R=$u.list,E=this.customSort;E===null?R.sort(n.transparent?Lv:Pv):E.call(this,R,e);for(let x=0,w=R.length;x<w;x++){let O=R[x],C=O.start*o*a,N=O.count*a;i==="merged"?v>0&&u[v-1]===C&&f[v-1]===N?d[v-1]++:(u[v]=C,f[v]=N,d[v]=1,v++):(l[M]=C,h[M]=N),g[M]=O.index,M++}$u.reset()}else for(let R=0,E=c.length;R<E;R++)if(c[R].visible&&c[R].active){let x=c[R].geometryIndex,w=!1;if(y&&(this.getMatrixAt(R,Xn),this.getBoundingSphereAt(x,xr).applyMatrix4(Xn),w=!S.intersectsSphere(xr)),!w){let O=p[x],C=O.start*o*a,N=O.count*a;i==="merged"?v>0&&u[v-1]===C&&f[v-1]===N?d[v-1]++:(u[v]=C,f[v]=N,d[v]=1,v++):(l[M]=C,h[M]=N),g[M]=R,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=v,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},ko=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ac=new K,Rc=new K,gm=new at,_a=new ks,cc=new rn,ju=new K,xm=new K,Cr=class extends Zt{constructor(e=new Pt,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ac.fromBufferAttribute(t,i-1),Rc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new Dt(n,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;gm.copy(i).invert(),_a.copy(e.ray).applyMatrix4(gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=l){let g=h.getX(y),S=h.getX(y+1),M=hc(this,e,_a,c,g,S,y);M&&t.push(M)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(d),g=hc(this,e,_a,c,y,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=d,m=p-1;y<m;y+=l){let g=hc(this,e,_a,c,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=hc(this,e,_a,c,p-1,d,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hc(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ac.fromBufferAttribute(a,i),Rc.fromBufferAttribute(a,r),t.distanceSqToSegment(Ac,Rc,ju,xm)>n)return;ju.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ju);if(!(l<e.near||l>e.far))return{distance:l,point:xm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var vm=new K,ym=new K,Da=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)vm.fromBufferAttribute(t,i),ym.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vm.distanceTo(ym);e.setAttribute("lineDistance",new Dt(n,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Na=class extends Cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fo=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_m=new at,rf=new ks,uc=new rn,fc=new K,bi=class extends Zt{constructor(e=new Pt,t=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(i),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;_m.copy(i).invert(),rf.copy(e.ray).applyMatrix4(_m);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,y=d;p<y;p++){let m=l.getX(p);fc.fromBufferAttribute(u,m),Mm(fc,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,y=d;p<y;p++)fc.fromBufferAttribute(u,p),Mm(fc,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mm(s,e,t,n,i,r,o){let a=rf.distanceSqToPoint(s);if(a<t){let c=new K;rf.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var za=class extends xn{constructor(e=[],t=Hr,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ls=class extends xn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends xn{constructor(e,t,n=ui,i,r,o,a=ln,c=ln,l,h=as,u=1){if(h!==as&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends cs{constructor(e,t=ui,n=Hr,i,r,o=ln,a=ln,c,l=as){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function p(y,m,g,S,M,v,R,E,x,w,O){let C=v/x,N=R/w,z=v/2,U=R/2,B=E/2,Y=x+1,H=w+1,G=0,b=0,_=new K;for(let L=0;L<H;L++){let A=L*N-U;for(let D=0;D<Y;D++){let X=D*C-z;_[y]=X*S,_[m]=A*M,_[g]=B,l.push(_.x,_.y,_.z),_[y]=0,_[m]=0,_[g]=E>0?1:-1,h.push(_.x,_.y,_.z),u.push(D/x),u.push(1-L/w),G+=1}}for(let L=0;L<w;L++)for(let A=0;A<x;A++){let D=f+A+Y*L,X=f+A+Y*(L+1),W=f+(A+1)+Y*(L+1),J=f+(A+1)+Y*L;c.push(D,X,J),c.push(X,W,J),b+=6}a.addGroup(d,b,O),d+=b,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ir=class s extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new K,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kn=class s extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,y=[],m=n/2,g=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function S(){let v=new K,R=new K,E=0,x=(t-e)/n;for(let w=0;w<=r;w++){let O=[],C=w/r,N=C*(t-e)+e;for(let z=0;z<=i;z++){let U=z/i,B=U*c+a,Y=Math.sin(B),H=Math.cos(B);R.x=N*Y,R.y=-C*n+m,R.z=N*H,u.push(R.x,R.y,R.z),v.set(Y,x,H).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-C),O.push(p++)}y.push(O)}for(let w=0;w<i;w++)for(let O=0;O<r;O++){let C=y[O][w],N=y[O+1][w],z=y[O+1][w+1],U=y[O][w+1];(e>0||O!==0)&&(h.push(C,N,U),E+=3),(t>0||O!==r-1)&&(h.push(N,z,U),E+=3)}l.addGroup(g,E,0),g+=E}function M(v){let R=p,E=new pt,x=new K,w=0,O=v===!0?e:t,C=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let N=p;for(let z=0;z<=i;z++){let B=z/i*c+a,Y=Math.cos(B),H=Math.sin(B);x.x=O*H,x.y=m*C,x.z=O*Y,u.push(x.x,x.y,x.z),f.push(0,C,0),E.x=Y*.5+.5,E.y=H*.5*C+.5,d.push(E.x,E.y),p++}for(let z=0;z<i;z++){let U=R+z,B=N+z;v===!0?h.push(B,B+1,U):h.push(B+1,B,U),w+=3}l.addGroup(g,w,v===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hs=class s extends Kn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class s extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new K,v=new K,R=new K;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],v),d(t[E+2],R),c(M,v,R,S)}function c(S,M,v,R){let E=R+1,x=[];for(let w=0;w<=E;w++){x[w]=[];let O=S.clone().lerp(v,w/E),C=M.clone().lerp(v,w/E),N=E-w;for(let z=0;z<=N;z++)z===0&&w===E?x[w][z]=O:x[w][z]=O.clone().lerp(C,z/N)}for(let w=0;w<E;w++)for(let O=0;O<2*(E-w)-1;O++){let C=Math.floor(O/2);O%2===0?(f(x[w][C+1]),f(x[w+1][C]),f(x[w][C])):(f(x[w][C+1]),f(x[w+1][C+1]),f(x[w+1][C]))}}function l(S){let M=new K;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let S=new K;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let v=m(S)/2/Math.PI+.5,R=g(S)/Math.PI+.5;o.push(v,1-R)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){let M=o[S+0],v=o[S+2],R=o[S+4],E=Math.max(M,v,R),x=Math.min(M,v,R);E>.9&&x<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){let v=S*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){let S=new K,M=new K,v=new K,R=new K,E=new pt,x=new pt,w=new pt;for(let O=0,C=0;O<r.length;O+=9,C+=6){S.set(r[O+0],r[O+1],r[O+2]),M.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),E.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),w.set(o[C+4],o[C+5]),R.copy(S).add(M).add(v).divideScalar(3);let N=m(R);y(E,C+0,S,N),y(x,C+2,M,N),y(w,C+4,v,N)}}function y(S,M,v,R){R<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var us=class s extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var zi=class s extends Oo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Si=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let S=g*f-o;for(let M=0;M<l;M++){let v=M*u-r;p.push(v,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){let M=S+l*g,v=S+l*(g+1),R=S+1+l*(g+1),E=S+1+l*g;d.push(M,v,E),d.push(v,R,E)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Oa=class s extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new K,f=new K,d=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let S=[],M=g/n,v=o+M*a,R=e*Math.cos(v),E=Math.sqrt(e*e-R*R),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let O=w/t,C=i+O*r;u.x=-E*Math.cos(C),u.y=R,u.z=E*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(O+x,1-M),S.push(l++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let M=h[g][S+1],v=h[g][S],R=h[g+1][S],E=h[g+1][S+1];(g!==0||o>0)&&d.push(M,v,E),(g!==n-1||c<Math.PI)&&d.push(v,R,E)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ua=class s extends Oo{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Fs=class s extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new K,d=new K,p=new K;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let g=0;g<=i;g++){let S=g/i*r;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=i;m++){let g=(i+1)*y+m-1,S=(i+1)*(y-1)+m-1,M=(i+1)*(y-1)+m,v=(i+1)*y+m;c.push(g,S,v),c.push(S,M,v)}this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Wr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(bm(i))i.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bm(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Dn(s){let e={};for(let t=0;t<s.length;t++){let n=Wr(s[t]);for(let i in n)e[i]=n[i]}return e}function bm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ov(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var _0={clone:Wr,merge:Dn},Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new K().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new at().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cc=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pr=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _r('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_r('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var hn=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Gc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ic=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ls(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ma(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Hv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Sm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Gv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Lc=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vr,endingEnd:vr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case yr:r=e,a=2*t-n;break;case wa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yr:o=e,c=2*n-t;break;case wa:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),y=p*p,m=y*p,g=-f*m+2*f*y-f*p,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*y+.5*p,v=d*m-d*y;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+S*o[l+R]+M*o[c+R]+v*o[u+R];return r}},Ba=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Dc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends ki{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let y=o[l+p],m=o[c+p],g=d*f+p*2,S=u[g],M=u[g+1],v=e*f+p*2,R=h[v],E=h[v+1],x=Wv(n,t,S,R,i);r[p]=M0(x,y,M,E,m)}return r}};function M0(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Vv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Wv(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=M0(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=Vv(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Zn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ma(e.settings)&&(n.settings={inTangents:Ls(e.settings.inTangents,Array),outTangents:Ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break;case nf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Ma(this.settings)&&(wm(this.settings.inTangents,e),wm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ma(this.settings)&&(Em(this.settings.inTangents,e),Em(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){bt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){bt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Kx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){bt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[f+p]||y!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ma(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function wm(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Em(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=br;var fs=class extends Zn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Mr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};Ha.prototype.ValueTypeName="color";var ds=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};ds.prototype.ValueTypeName="number";var zc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ps=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Zn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Mr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};Os.prototype.ValueTypeName="vector";var wi=class{constructor(e="",t=-1,n=[],i=Rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(qv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Hv(c);c=Sm(c,1,h),l=Sm(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Xv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return Ha;case"quaternion":return ps;case"bool":case"boolean":return fs;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xv(s.type);if(s.times===void 0){let n=[],i=[];Gv(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ma(s.settings)&&(t.settings={inTangents:Ls(s.settings.inTangents,Float32Array),outTangents:Ls(s.settings.outTangents,Float32Array)}),t}var ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Tm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Tm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Tm(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},b0=new kc,Fi=class{constructor(e){this.manager=e!==void 0?e:b0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},of=class extends Error{constructor(e,t){super(e),this.response=t}},Uo=class extends Fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(is[e]!==void 0){is[e].push({onLoad:t,onProgress:n,onError:i});return}is[e]=[],is[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=is[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,y=0,m=new ReadableStream({start(g){S();function S(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{y+=v.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:d});for(let E=0,x=h.length;E<x;E++){let w=h[E];w.onProgress&&w.onProgress(R)}g.enqueue(v),S()}},M=>{g.error(M)})}}});return new Response(m)}else throw new of(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{ai.add(`file:${e}`,l);let h=is[e];delete is[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=is[e];if(h===void 0)throw this.manager.itemError(e),l;delete is[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var bo=new WeakMap,Fc=class extends Fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=bo.get(o);u===void 0&&(u=[],bo.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Co("img");function c(){h(),t&&t(this);let u=bo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}bo.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),ai.remove(`image:${e}`);let f=bo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}bo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Lr=class extends Fi{constructor(e){super(e)}load(e,t,n,i){let r=new xn,o=new Fc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Dr=class extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Nr=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qu=new at,Am=new K,Rm=new K,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Am.setFromMatrixPosition(e.matrixWorld),t.position.copy(Am),Rm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Qu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dc=new K,pc=new Yt,Ni=new K,Ga=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new K,Cm=new pt,Im=new pt,an=class extends Ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Im),t.subVectors(Im,Cm)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},af=class extends Bo{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Va=class extends Dr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new af}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lf=class extends Bo{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends Dr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kr=class extends Ga{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cf=class extends Bo{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ci=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new cf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Wa=class extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ef=new WeakMap,Xa=class extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&ft("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&ft("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{ef.has(o)===!0?(i&&i(ef.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ai.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ef.set(c,l),ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var So=-90,wo=1,Ho=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(So,wo,e,t);i.layers=this.layers,this.add(i);let r=new an(So,wo,e,t);r.layers=this.layers,this.add(r);let o=new an(So,wo,e,t);o.layers=this.layers,this.add(o);let a=new an(So,wo,e,t);a.layers=this.layers,this.add(a);let c=new an(So,wo,e,t);c.layers=this.layers,this.add(c);let l=new an(So,wo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oc=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Uc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Gf="\\[\\]\\.:\\/",Yv=new RegExp("["+Gf+"]","g"),Vf="[^"+Gf+"]",Kv="[^"+Gf.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",Vf),Jv=/(WCOD+)?/.source.replace("WCOD",Kv),$v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vf),jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vf),Qv=new RegExp("^"+Zv+Jv+$v+jv+"$"),ey=["material","materials","bones","map"],hf=class{constructor(e,t,n){let i=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){let t=Qv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=hf;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:vr,endingEnd:vr};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=i0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case r0:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Rh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===s0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===el){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=yr,i.endingEnd=yr):(e?i.endingStart=this.zeroSlopeAtStart?yr:vr:i.endingStart=wa,t?i.endingEnd=this.zeroSlopeAtEnd?yr:vr:i.endingEnd=wa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},ty=new Float32Array(1),Us=class extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;p=new Uc(qt.create(n,d,y),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ba(new Float32Array(2),new Float32Array(2),1,ty),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?wi.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Bc(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?wi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Pm=new at,qa=class{constructor(e,t,n=0,i=1/0){this.ray=new ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pm),this}intersectObject(e,t=!0,n=[]){return uf(e,this,n,t),n.sort(Lm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)uf(e[i],this,n,t);return n.sort(Lm),n}};function Lm(s,e){return s.distance-e.distance}function uf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)uf(r[o],e,t,!0)}}var Zf=class Zf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Zf.prototype.isMatrix2=!0;var ff=Zf;function Wf(s,e,t,n){let i=ny(n);switch(t){case Cf:return s*e;case Zc:return s*e/i.components*i.byteLength;case Ya:return s*e/i.components*i.byteLength;case Bs:return s*e*2/i.components*i.byteLength;case Jc:return s*e*2/i.components*i.byteLength;case If:return s*e*3/i.components*i.byteLength;case Yn:return s*e*4/i.components*i.byteLength;case $c:return s*e*4/i.components*i.byteLength;case Ka:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ja:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qc:case th:return Math.max(s,16)*Math.max(e,8)/4;case jc:case eh:return Math.max(s,8)*Math.max(e,8)/2;case nh:case ih:case rh:case oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sh:case ja:case ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bh:case Sh:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eh:case Th:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qa:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(s){switch(s){case $n:case Ef:return{byteLength:1,components:1};case Xo:case Tf:case Ti:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case ui:case qc:case Fn:return{byteLength:4,components:1};case Af:case Rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function W0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sy(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],y=u[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let y=u[d];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
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
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,yy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ry=`#define PI 3.141592653589793
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
} // validated`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
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
#endif`,n_=`uniform sampler2D dfgLUT;
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
}`,i_=`
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p_=`#if defined( USE_POINTS_UV )
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
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
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
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
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
#endif`,R_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V_=`float getShadowMask() {
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
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform float backgroundBlurriness;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,dM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,yM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,EM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,PM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,zM=`uniform vec3 color;
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
}`,kM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:ry,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:hy,aomap_fragment:uy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:xy,iridescence_fragment:vy,bumpmap_pars_fragment:yy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:by,clipping_planes_vertex:Sy,color_fragment:wy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:Ay,common:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Iy,displacementmap_vertex:Py,emissivemap_fragment:Ly,emissivemap_pars_fragment:Dy,colorspace_fragment:Ny,colorspace_pars_fragment:zy,envmap_fragment:ky,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Oy,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:Jy,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Zy,lights_toon_fragment:$y,lights_toon_pars_fragment:jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:e_,lights_physical_fragment:t_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:s_,lights_fragment_end:r_,lightprobes_pars_fragment:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:f_,map_particle_fragment:d_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:x_,morphcolor_vertex:v_,morphnormal_vertex:y_,morphtarget_pars_vertex:__,morphtarget_vertex:M_,normal_fragment_begin:b_,normal_fragment_maps:S_,normal_pars_fragment:w_,normal_pars_vertex:E_,normal_vertex:T_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:R_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:P_,opaque_fragment:L_,packing:D_,premultiplied_alpha_fragment:N_,project_vertex:z_,dithering_fragment:k_,dithering_pars_fragment:F_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:H_,shadowmap_vertex:G_,shadowmask_pars_fragment:V_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:$_,transmission_fragment:j_,transmission_pars_fragment:Q_,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:hM,depth_frag:uM,distance_vert:fM,distance_frag:dM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:xM,meshbasic_vert:vM,meshbasic_frag:yM,meshlambert_vert:_M,meshlambert_frag:MM,meshmatcap_vert:bM,meshmatcap_frag:SM,meshnormal_vert:wM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:IM,meshtoon_frag:PM,points_vert:LM,points_frag:DM,shadow_vert:NM,shadow_frag:zM,sprite_vert:kM,sprite_frag:FM},Qe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Gi={basic:{uniforms:Dn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Dn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Dn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Dn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Dn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Dn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Dn([Qe.points,Qe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Dn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Dn([Qe.common,Qe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Dn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Dn([Qe.sprite,Qe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Dn([Qe.common,Qe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Dn([Qe.lights,Qe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Gi.physical={uniforms:Dn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Ih={r:0,b:0,g:0},OM=new at,X0=new wt;X0.set(-1,0,0,0,1,0,0,0,1);function UM(s,e,t,n,i,r){let o=new Ue(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(S){let M=!1,v=d(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,M){let v=d(M);v&&v.isCubeTexture?(l===void 0&&(l=new St(new Qt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Wr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(X0),l.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Vt,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Si(2,2),new cn({name:"BackgroundMaterial",uniforms:Wr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,M){S.getRGB(Ih,Hf(s)),t.buffers.color.setClear(Ih.r,Ih.g,Ih.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:y,dispose:g}}function BM(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(N,z,U,B,Y){let H=!1,G=u(N,B,U,z);r!==G&&(r=G,l(r.object)),H=d(N,B,U,Y),H&&p(N,B,U,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(N,z,U,B),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function u(N,z,U,B){let Y=B.wireframe===!0,H=n[z.id];H===void 0&&(H={},n[z.id]=H);let G=N.isInstancedMesh===!0?N.id:0,b=H[G];b===void 0&&(b={},H[G]=b);let _=b[U.id];_===void 0&&(_={},b[U.id]=_);let L=_[Y];return L===void 0&&(L=f(c()),_[Y]=L),L}function f(N){let z=[],U=[],B=[];for(let Y=0;Y<t;Y++)z[Y]=0,U[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:U,attributeDivisors:B,object:N,attributes:{},index:null}}function d(N,z,U,B){let Y=r.attributes,H=z.attributes,G=0,b=U.getAttributes();for(let _ in b)if(b[_].location>=0){let A=Y[_],D=H[_];if(D===void 0&&(_==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),_==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),A===void 0||A.attribute!==D||D&&A.data!==D.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function p(N,z,U,B){let Y={},H=z.attributes,G=0,b=U.getAttributes();for(let _ in b)if(b[_].location>=0){let A=H[_];A===void 0&&(_==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),_==="instanceColor"&&N.instanceColor&&(A=N.instanceColor));let D={};D.attribute=A,A&&A.data&&(D.data=A.data),Y[_]=D,G++}r.attributes=Y,r.attributesNum=G,r.index=B}function y(){let N=r.newAttributes;for(let z=0,U=N.length;z<U;z++)N[z]=0}function m(N){g(N,0)}function g(N,z){let U=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;U[N]=1,B[N]===0&&(s.enableVertexAttribArray(N),B[N]=1),Y[N]!==z&&(s.vertexAttribDivisor(N,z),Y[N]=z)}function S(){let N=r.newAttributes,z=r.enabledAttributes;for(let U=0,B=z.length;U<B;U++)z[U]!==N[U]&&(s.disableVertexAttribArray(U),z[U]=0)}function M(N,z,U,B,Y,H,G){G===!0?s.vertexAttribIPointer(N,z,U,Y,H):s.vertexAttribPointer(N,z,U,B,Y,H)}function v(N,z,U,B){y();let Y=B.attributes,H=U.getAttributes(),G=z.defaultAttributeValues;for(let b in H){let _=H[b];if(_.location>=0){let L=Y[b];if(L===void 0&&(b==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),b==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),L!==void 0){let A=L.normalized,D=L.itemSize,X=e.get(L);if(X===void 0)continue;let W=X.buffer,J=X.type,de=X.bytesPerElement,ie=J===s.INT||J===s.UNSIGNED_INT||L.gpuType===qc;if(L.isInterleavedBufferAttribute){let ae=L.data,Ce=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Be=L.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let he=0;he<_.locationSize;he++)g(_.location+he,ae.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<_.locationSize;he++)m(_.location+he);s.bindBuffer(s.ARRAY_BUFFER,W);for(let he=0;he<_.locationSize;he++)M(_.location+he,D/_.locationSize,J,A,Ce*de,(Be+D/_.locationSize*he)*de,ie)}else{if(L.isInstancedBufferAttribute){for(let ae=0;ae<_.locationSize;ae++)g(_.location+ae,L.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ae=0;ae<_.locationSize;ae++)m(_.location+ae);s.bindBuffer(s.ARRAY_BUFFER,W);for(let ae=0;ae<_.locationSize;ae++)M(_.location+ae,D/_.locationSize,J,A,D*de,D/_.locationSize*ae*de,ie)}}else if(G!==void 0){let A=G[b];if(A!==void 0)switch(A.length){case 2:s.vertexAttrib2fv(_.location,A);break;case 3:s.vertexAttrib3fv(_.location,A);break;case 4:s.vertexAttrib4fv(_.location,A);break;default:s.vertexAttrib1fv(_.location,A)}}}}S()}function R(){O();for(let N in n){let z=n[N];for(let U in z){let B=z[U];for(let Y in B){let H=B[Y];for(let G in H)h(H[G].object),delete H[G];delete B[Y]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let U in z){let B=z[U];for(let Y in B){let H=B[Y];for(let G in H)h(H[G].object),delete H[G];delete B[Y]}}delete n[N.id]}function x(N){for(let z in n){let U=n[z];for(let B in U){let Y=U[B];if(Y[N.id]===void 0)continue;let H=Y[N.id];for(let G in H)h(H[G].object),delete H[G];delete Y[N.id]}}}function w(N){for(let z in n){let U=n[z],B=N.isInstancedMesh===!0?N.id:0,Y=U[B];if(Y!==void 0){for(let H in Y){let G=Y[H];for(let b in G)h(G[b].object),delete G[b];delete Y[H]}delete U[B],Object.keys(U).length===0&&delete n[z]}}}function O(){C(),o=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function HM(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function GM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Yn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==$n&&x!==Fn&&!w&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ft("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:R,samples:E}}function VM(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ti,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,M=S*4,v=g.clippingState||null;c.value=v,v=h(p,f,M,d);for(let R=0;R!==M;++R)v[R]=t[R];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=d+y*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=d;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ol=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new za(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Or});r.uniforms.tEquirect.value=t;let o=new St(i,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=gn),new Ho(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},S0=256,WM=3,XM=20,q0=256,Y0=16,qM=3,YM=new K,KM=new Ue,Lh=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ho(1,10,null),this._boxMesh=new St(new Qt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=YM}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(KM));let m=new Ho(n,i,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(S0,Of(e))}_fromTexture(e,t){e.mapping===Hr||e.mapping===Vo?this._setSize(e.image.length===0?S0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=w0(e,!1,!1),n=Math.log2(e)-WM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=w0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hr||e.mapping===Vo?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=E0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ZM(),this._integrationMaterial=JM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Y0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-qM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(q0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$M());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function w0(s,e,t){return new ol(s,{minFilter:hi,generateMipmaps:e,type:Ti,colorSpace:On,depthBuffer:t})}function al(s,e,t){return new cn({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:vn,blending:Or,depthTest:!1,depthWrite:!1})}function ZM(){return al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${q0}u

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
	`)}function JM(){return al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Y0}},`

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
	`)}function $M(){return al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${XM}
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
	`)}function E0(){return al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function T0(){return al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Vc||d===Wc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let y=new ol(p.height);return y.fromEquirectangularTexture(s,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Vc||d===Wc,y=d===Hr||d===Vo;if(p||y){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Lh(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return p&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new Lh(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Vc?f.mapping=Hr:d===Wc&&(f.mapping=Vo),f}function c(f){let d=0,p=6;for(let y=0;y<p;y++)f[y]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function QM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&_r("WebGLRenderer: "+n+" extension not supported."),i}}}function eb(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,y){return i[y.id]!==void 0||(y.addEventListener("dispose",a),i[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)e.update(y[m],s.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let S=y!==null?y.array.length:m.array.length/3-1,M=m.count>=65535?Ia:Ca,v=new M(Math.ceil(S/3)*6,1),R=v.array;if(y!==null){let x=y.array;g=y.version;for(let w=0,O=0;w<S;w+=3){let C=x[w+0],N=x[w+1],z=x[w+2];R[O++]=C,R[O++]=N,R[O++]=N,R[O++]=z,R[O++]=z,R[O++]=C}}else{g=m.version;for(let x=0,w=0;x<S;x+=3){let O=x+0,C=x+1,N=x+2;R[w++]=O,R[w++]=C,R[w++]=C,R[w++]=N,R[w++]=N,R[w++]=O}}v.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function f(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in i){let y=i[p].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function tb(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];t.update(y,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function nb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:bt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ib(s,e,t){let n=new WeakMap,i=new Xt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let O=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*R*4*u),x=new Aa(E,v,R,u);x.type=Fn,x.needsUpdate=!0;let w=M*4;for(let C=0;C<u;C++){let N=m[C],z=g[C],U=S[C],B=v*R*4*C;for(let Y=0;Y<N.count;Y++){let H=Y*w;d===!0&&(i.fromBufferAttribute(N,Y),E[B+H+0]=i.x,E[B+H+1]=i.y,E[B+H+2]=i.z,E[B+H+3]=0),p===!0&&(i.fromBufferAttribute(z,Y),E[B+H+4]=i.x,E[B+H+5]=i.y,E[B+H+6]=i.z,E[B+H+7]=0),y===!0&&(i.fromBufferAttribute(U,Y),E[B+H+8]=i.x,E[B+H+9]=i.y,E[B+H+10]=i.z,E[B+H+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new pt(v,R)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function sb(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var rb={[vf]:"LINEAR_TONE_MAPPING",[yf]:"REINHARD_TONE_MAPPING",[_f]:"CINEON_TONE_MAPPING",[Mf]:"ACES_FILMIC_TONE_MAPPING",[Sf]:"AGX_TONE_MAPPING",[Br]:"NEUTRAL_TONE_MAPPING",[bf]:"CUSTOM_TONE_MAPPING"};function ob(s,e,t,n,i,r){let o=new ni(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Pt;h.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let u=new Cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new St(h,u),d=new kr(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,S=null,M=[],v=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),c!==null&&c.setSize(R,E);for(let x=0;x<M.length;x++){let w=M[x];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){M=R,v=M.length>0&&M[0].isRenderPass===!0;let E=o.width,x=o.height;M.length>0&&a===null&&(a=new ni(E,x,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new ni(E,x,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&M.some(O=>O.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new cs(E,x),r===!0&&(l.format=xs,l.type=Vr)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let O=0;O<M.length;O++){let C=M[O];C.setSize&&C.setSize(E,x),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(R,E){if(m||R.toneMapping===Ui&&M.length===0)return!1;if(S=E,E!==null){let x=E.width,w=E.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return v===!1&&R.setRenderTarget(o),g=R.toneMapping,R.toneMapping=Ui,!0},this.hasRenderPass=function(){return v},this.end=function(R,E){R.toneMapping=g,m=!0;let x=o,w=a;for(let O=0;O<M.length;O++){let C=M[O];C.enabled!==!1&&(C.render(R,w,x,E),C.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(p!==R.outputColorSpace||y!==R.toneMapping){p=R.outputColorSpace,y=R.toneMapping,u.defines={},Rt.getTransfer(p)===Vt&&(u.defines.SRGB_TRANSFER="");let O=rb[y];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(S),R.render(f,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var K0=new xn,Z0=new cs(1,1),J0=new ka(1),$0=new Aa,j0=new Tc,Q0=new za,A0=[],R0=[],C0=new Float32Array(16),I0=new Float32Array(9),P0=new Float32Array(4);function Jo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=A0[i];if(r===void 0&&(r=new Float32Array(i),A0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dh(s,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ab(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function cb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function hb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function ub(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,n))return;P0.set(n),s.uniformMatrix2fv(this.addr,!1,P0),_n(t,n)}}function fb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,n))return;I0.set(n),s.uniformMatrix3fv(this.addr,!1,I0),_n(t,n)}}function db(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,n))return;C0.set(n),s.uniformMatrix4fv(this.addr,!1,C0),_n(t,n)}}function pb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function gb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function xb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function vb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function _b(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Mb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function Nh(s){return s.version===0&&(s.compareFunction=Nf,s.needsUpdate=!0),s}function bb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Nh(Z0):r=K0,t.setTexture2D(e||r,i)}function Sb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||j0,i)}function wb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Nh(J0):r=Q0,t.setTextureCube(e||r,i)}function Eb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$0,i)}function Tb(s){switch(s){case 5126:return ab;case 35664:return lb;case 35665:return cb;case 35666:return hb;case 35674:return ub;case 35675:return fb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return xb;case 5125:return vb;case 36294:return yb;case 36295:return _b;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Ab(s,e){s.uniform1fv(this.addr,e)}function Rb(s,e){let t=Jo(e,this.size,2);s.uniform2fv(this.addr,t)}function Cb(s,e){let t=Jo(e,this.size,3);s.uniform3fv(this.addr,t)}function Ib(s,e){let t=Jo(e,this.size,4);s.uniform4fv(this.addr,t)}function Pb(s,e){let t=Jo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Lb(s,e){let t=Jo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Db(s,e){let t=Jo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Nb(s,e){s.uniform1iv(this.addr,e)}function zb(s,e){s.uniform2iv(this.addr,e)}function kb(s,e){s.uniform3iv(this.addr,e)}function Fb(s,e){s.uniform4iv(this.addr,e)}function Ob(s,e){s.uniform1uiv(this.addr,e)}function Ub(s,e){s.uniform2uiv(this.addr,e)}function Bb(s,e){s.uniform3uiv(this.addr,e)}function Hb(s,e){s.uniform4uiv(this.addr,e)}function Gb(s,e,t){let n=this.cache,i=e.length,r=Dh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Nh(Z0):o=K0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Vb(s,e,t){let n=this.cache,i=e.length,r=Dh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||j0,r[o])}function Wb(s,e,t){let n=this.cache,i=e.length,r=Dh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Nh(J0):o=Q0;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Xb(s,e,t){let n=this.cache,i=e.length,r=Dh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$0,r[o])}function qb(s){switch(s){case 5126:return Ab;case 35664:return Rb;case 35665:return Cb;case 35666:return Ib;case 35674:return Pb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return zb;case 35668:case 35672:return kb;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return Ub;case 36295:return Bb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}var jf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tb(t.type)}},Qf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qb(t.type)}},ed=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Jf=/(\w+)(\])?(\[|\.)?/g;function L0(s,e){s.seq.push(e),s.map[e.id]=e}function Yb(s,e,t){let n=s.name,i=n.length;for(Jf.lastIndex=0;;){let r=Jf.exec(n),o=Jf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){L0(t,l===void 0?new jf(a,s,e):new Qf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ed(a),L0(t,u)),t=u}}}var Ko=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Yb(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function D0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Kb=37297,Zb=0;function Jb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var N0=new wt;function $b(s){Rt._getMatrix(N0,Rt.workingColorSpace,s);let e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Ea:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function z0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jb(s.getShaderSource(e),a)}else return r}function jb(s,e){let t=$b(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Qb={[vf]:"Linear",[yf]:"Reinhard",[_f]:"Cineon",[Mf]:"ACESFilmic",[Sf]:"AgX",[Br]:"Neutral",[bf]:"Custom"};function eS(s,e){let t=Qb[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ph=new K;function tS(){Rt.getLuminanceCoefficients(Ph);let s=Ph.x.toFixed(4),e=Ph.y.toFixed(4),t=Ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function iS(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sS(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rl(s){return s!==""}function k0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function F0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(rS,oS)}function oS(s,e){let t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return td(t)}var aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(s){return s.replace(aS,lS)}function lS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function U0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var cS={[Fr]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function hS(s){return cS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uS={[Vo]:"ENVMAP_MODE_REFRACTION"};function fS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dS={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[e0]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function pS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":dS[s.combine]||"ENVMAP_BLENDING_NONE"}function mS(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=hS(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fS(t),u=pS(t),f=nS(t),d=iS(r),p=i.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rl).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(rl).join(`
`),m.length>0&&(m+=`
`)):(y=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),m=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?At.tonemapping_pars_fragment:"",t.toneMapping!==Ui?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,jb("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=td(o),o=k0(o,t),o=F0(o,t),a=td(a),a=k0(a,t),a=F0(a,t),o=O0(o),a=O0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+y+o,M=g+m+a,v=D0(i,i.VERTEX_SHADER,S),R=D0(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(p)||"",z=i.getShaderInfoLog(v)||"",U=i.getShaderInfoLog(R)||"",B=N.trim(),Y=z.trim(),H=U.trim(),G=!0,b=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,R);else{let _=z0(i,v,"vertex"),L=z0(i,R,"fragment");bt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+_+`
`+L)}else B!==""?ft("WebGLProgram: Program Info Log:",B):(Y===""||H==="")&&(b=!1);b&&(C.diagnostics={runnable:G,programLog:B,vertexShader:{log:Y,prefix:y},fragmentShader:{log:H,prefix:m}})}i.deleteShader(v),i.deleteShader(R),x=new Ko(i,p),w=sS(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(p,Kb)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=R,this}var gS=0,nd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new id(e),t.set(e,n)),n}},id=class{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}};function xS(s){return s===Bs||s===ja||s===Qa}function vS(s,e,t,n,i,r){let o=new Lo,a=new nd,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,w,O,C,N,z){let U=C.fog,B=N.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||Y,H),b=f[x.type],_=n.precision;x.precision!==null&&(_=n.getMaxPrecision(x.precision),_!==x.precision&&ft("WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));let L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,A=L!==void 0?L.length:0,D=0;B.morphAttributes.position!==void 0&&(D=1),B.morphAttributes.normal!==void 0&&(D=2),B.morphAttributes.color!==void 0&&(D=3);let X,W,J,de;if(b){let qe=Gi[b];X=qe.vertexShader,W=qe.fragmentShader}else{X=x.vertexShader,W=x.fragmentShader;let qe=a.getVertexShaderStage(x),Nt=a.getFragmentShaderStage(x);a.update(x,qe,Nt),J=qe.id,de=Nt.id}let ie=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,he=!!x.map,He=!!x.matcap,le=!!G,j=le&&G.isPMREMTexture===!0,Le=!!x.aoMap,Ke=!!x.lightMap,ze=!!x.bumpMap&&x.wireframe===!1,Ve=!!x.normalMap,_t=!!x.displacementMap,Mt=!!x.emissiveMap,be=!!x.metalnessMap,ce=!!x.roughnessMap,Re=x.anisotropy>0,F=x.clearcoat>0,oe=x.diffuseRoughness>0,q=x.dispersion>0,se=x.retroreflectivity>0,re=x.iridescence>0,Ie=x.sheen>0,Se=x.transmission>0,De=Re&&!!x.anisotropyMap,I=F&&!!x.clearcoatMap,P=F&&!!x.clearcoatNormalMap,Q=F&&!!x.clearcoatRoughnessMap,ge=oe&&!!x.diffuseRoughnessMap,me=re&&!!x.iridescenceMap,we=re&&!!x.iridescenceThicknessMap,Ae=Ie&&!!x.sheenColorMap,xe=Ie&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Te=!!x.specularColorMap,V=!!x.specularIntensityMap,ee=Se&&!!x.transmissionMap,$=Se&&!!x.thicknessMap,Pe=!!x.gradientMap,ve=!!x.alphaMap,Oe=x.alphaTest>0,Ye=!!x.alphaHash,Ze=!!x.extensions,ke=Ui;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ke=s.toneMapping);let tt=j?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,gt={shaderID:b,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:W,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:He,envMap:le,envMapMode:le&&G.mapping,envMapPMREM:j,envMapMaxLod:j?tt.length-1:null,envMapSize:j?tt[0].width:null,aoMap:Le,lightMap:Ke,bumpMap:ze,normalMap:Ve,displacementMap:_t,emissiveMap:Mt,normalMapObjectSpace:Ve&&x.normalMapType===a0,normalMapTangentSpace:Ve&&x.normalMapType===nl,packedNormalMap:Ve&&x.normalMapType===nl&&xS(x.normalMap.format),metalnessMap:be,roughnessMap:ce,anisotropy:Re,anisotropyMap:De,clearcoat:F,clearcoatMap:I,clearcoatNormalMap:P,clearcoatRoughnessMap:Q,diffuseRoughness:oe,diffuseRoughnessMap:ge,dispersion:q,retroreflection:se,iridescence:re,iridescenceMap:me,iridescenceThicknessMap:we,sheen:Ie,sheenColorMap:Ae,sheenRoughnessMap:xe,specularMap:fe,specularColorMap:Te,specularIntensityMap:V,transmission:Se,transmissionMap:ee,thicknessMap:$,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Ei&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:Oe,alphaHash:Ye,combine:x.combine,mapUv:he&&d(x.map.channel),aoMapUv:Le&&d(x.aoMap.channel),lightMapUv:Ke&&d(x.lightMap.channel),bumpMapUv:ze&&d(x.bumpMap.channel),normalMapUv:Ve&&d(x.normalMap.channel),displacementMapUv:_t&&d(x.displacementMap.channel),emissiveMapUv:Mt&&d(x.emissiveMap.channel),metalnessMapUv:be&&d(x.metalnessMap.channel),roughnessMapUv:ce&&d(x.roughnessMap.channel),anisotropyMapUv:De&&d(x.anisotropyMap.channel),clearcoatMapUv:I&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:P&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:me&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&d(x.sheenRoughnessMap.channel),specularMapUv:fe&&d(x.specularMap.channel),specularColorMapUv:Te&&d(x.specularColorMap.channel),specularIntensityMapUv:V&&d(x.specularIntensityMap.channel),transmissionMapUv:ee&&d(x.transmissionMap.channel),thicknessMapUv:$&&d(x.thicknessMap.channel),alphaMapUv:ve&&d(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ve||Re),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(he||ve),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:D,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(qe=>qe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Vt,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===Vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&x.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function y(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)w.push(O),w.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(w,x),g(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let w=f[x.type],O;if(w){let C=Gi[w];O=_0.clone(C.uniforms)}else O=x.uniforms;return O}function M(x,w){let O=h.get(w);return O!==void 0?++O.usedTimes:(O=new mS(s,w,x,i),l.push(O),h.set(w,O)),O}function v(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:S,acquireProgram:M,releaseProgram:v,releaseShaderCache:R,programs:l,dispose:E}}function yS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function _S(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function B0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function H0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,y,m,g){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:g},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=o(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=m,S.group=g),e++,S}function c(f,d,p,y,m,g,S){S.reversedDepth===!0&&(m=-m);let M=a(f,d,p,y,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):t.push(M)}function l(f,d,p,y,m,g){let S=a(f,d,p,y,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(f,d){t.length>1&&t.sort(f||_S),n.length>1&&n.sort(d||B0),i.length>1&&i.sort(d||B0)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function MS(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new H0,s.set(n,[o])):i>=r.length?(o=new H0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function bS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new Ue};break;case"SpotLight":t={position:new K,direction:new K,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function SS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var wS=0;function ES(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TS(s){let e=new bS,t=SS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);let i=new K,r=new at,o=new at;function a(l){let h=0,u=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,p=0,y=0,m=0,g=0,S=0,M=0,v=0,R=0,E=0,x=0,w=0,O=0,C=0;l.sort(ES);for(let z=0,U=l.length;z<U;z++){let B=l[z],Y=B.color,H=B.intensity,G=B.distance,b=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Bs?b=B.shadow.map.texture:b=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=Y.r*H,u+=Y.g*H,f+=Y.b*H;else if(B.isLightProbe){for(let _=0;_<9;_++)n.probe[_].addScaledVector(B.sh.coefficients[_],H);C++}else if(B.isSunLight){let _=e.get(B);if(_.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=A,n.sunShadowMap[p]=b;let D=L.getViewportCount();for(let X=0;X<D;X++)n.sunShadowMatrix[y+X]=L.getMatrix(X),n.sunShadowCascade[y+X]=L._cascadeData[X];y+=D,p++}n.sun[d]=_,d++}else if(B.isDirectionalLight){let _=e.get(B);if(_.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.directionalShadow[m]=A,n.directionalShadowMap[m]=b,n.directionalShadowMatrix[m]=B.shadow.matrix,R++}n.directional[m]=_,m++}else if(B.isSpotLight){let _=e.get(B);_.position.setFromMatrixPosition(B.matrixWorld),_.color.copy(Y).multiplyScalar(H),_.distance=G,_.coneCos=Math.cos(B.angle),_.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),_.decay=B.decay,n.spot[S]=_;let L=B.shadow;if(B.map&&(n.spotLightMap[w]=B.map,w++,L.updateMatrices(B),B.castShadow&&O++),n.spotLightMatrix[S]=L.matrix,B.castShadow){let A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.spotShadow[S]=A,n.spotShadowMap[S]=b,x++}S++}else if(B.isRectAreaLight){let _=e.get(B);_.color.copy(Y).multiplyScalar(H),_.halfWidth.set(B.width*.5,0,0),_.halfHeight.set(0,B.height*.5,0),n.rectArea[M]=_,M++}else if(B.isPointLight){let _=e.get(B);if(_.color.copy(B.color).multiplyScalar(B.intensity),_.distance=B.distance,_.decay=B.decay,B.castShadow){let L=B.shadow,A=t.get(B);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,A.shadowCameraNear=L.camera.near,A.shadowCameraFar=L.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=b,n.pointShadowMatrix[g]=B.shadow.matrix,E++}n.point[g]=_,g++}else if(B.isHemisphereLight){let _=e.get(B);_.skyColor.copy(B.color).multiplyScalar(H),_.groundColor.copy(B.groundColor).multiplyScalar(H),n.hemi[v]=_,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qe.LTC_FLOAT_1,n.rectAreaLTC2=Qe.LTC_FLOAT_2):(n.rectAreaLTC1=Qe.LTC_HALF_1,n.rectAreaLTC2=Qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==S||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==R||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-O,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=g,N.spotLength=S,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=R,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=C,n.version=wS++)}function c(l,h){let u=0,f=0,d=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let S=0,M=l.length;S<M;S++){let v=l[S];if(v.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(g),f++}else if(v.isSpotLight){let R=n.spot[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function G0(s){let e=new TS(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function AS(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new G0(s),e.set(i,[a])):r>=o.length?(a=new G0(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,IS=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],PS=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],V0=new at,sl=new K,$f=new K;function LS(s,e,t){let n=new Mi,i=new pt,r=new pt,o=new Xt,a=new Ic,c=new Pc,l={},h=t.maxTextureSize,u={[Oi]:vn,[vn]:Oi,[en]:en},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let g=this.type;this.render=function(E,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===zm&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);let O=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Or),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=g!==this.type;U&&x.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Y=>Y.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Y=E.length;B<Y;B++){let H=E[B],G=H.shadow;if(G===void 0){ft("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let b=G.getFrameExtents();i.multiply(b),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/b.x),i.x=r.x*b.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/b.y),i.y=r.y*b.y,G.mapSize.y=r.y));let _=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Go){if(H.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ni(i.x,i.y,{format:Bs,type:Ti,minFilter:gn,magFilter:gn,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new cs(i.x,i.y,Fn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=as,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ln,G.map.depthTexture.magFilter=ln}else H.isPointLight?(G.map=new ol(i.x),G.map.depthTexture=new ka(i.x,ui)):(G.map=new ni(i.x,i.y),G.map.depthTexture=new cs(i.x,i.y,ui)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=as,this.type===Fr?(G.map.depthTexture.compareFunction=_?Df:Lf,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ln,G.map.depthTexture.magFilter=ln);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let L=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,w);let A=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:w.layers;for(let D=0;D<L;D++){let X=G.getCamera(D);if(H.isPointLight){let W=G.camera,J=G.matrix,de=H.distance||W.far;de!==W.far&&(W.far=de,W.updateProjectionMatrix()),sl.setFromMatrixPosition(H.matrixWorld),W.position.copy(sl),$f.copy(W.position),$f.add(IS[D]),W.up.copy(PS[D]),W.lookAt($f),W.updateMatrixWorld(),J.makeTranslation(-sl.x,-sl.y,-sl.z),V0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G._frustum.setFromProjectionMatrix(V0,W.coordinateSystem,W.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,D),s.clear();else{D===0&&(s.setRenderTarget(G.map),s.clear());let W=G.getViewport(D);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o)}n=G.getFrustum(D),v(x,w,X,H,A,this.type)}G.isPointLightShadow!==!0&&this.type===Go&&S(G,w),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(O,C,N)};function S(E,x){let w=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ni(i.x,i.y,{format:Bs,type:Ti}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,w,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,w,d,y,null)}function M(E,x,w,O){let C=null,N=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=w.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,U=x.uuid,B=l[z];B===void 0&&(B={},l[z]=B);let Y=B[U];Y===void 0&&(Y=C.clone(),B[U]=Y,x.addEventListener("dispose",R)),C=Y}if(C.visible=x.visible,C.wireframe=x.wireframe,O===Go?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=s.properties.get(C);z.light=w}return C}function v(E,x,w,O,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Go)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let B=e.update(E),Y=E.material;if(Array.isArray(Y)){let H=B.groups;for(let G=0,b=H.length;G<b;G++){let _=H[G],L=Y[_.materialIndex];if(L&&L.visible){let A=M(E,L,O,N);E.onBeforeShadow(s,E,x,w,B,A,_),s.renderBufferDirect(w,null,B,A,E,_),E.onAfterShadow(s,E,x,w,B,A,_)}}}else if(Y.visible){let H=M(E,Y,O,N);E.onBeforeShadow(s,E,x,w,B,H,null),s.renderBufferDirect(w,null,B,H,E,null),E.onAfterShadow(s,E,x,w,B,H,null)}}let U=E.children;for(let B=0,Y=U.length;B<Y;B++)v(U[B],x,w,O,C,N)}function R(E){E.target.removeEventListener("dispose",R);for(let w in l){let O=l[w],C=E.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function DS(s,e){function t(){let V=!1,ee=new Xt,$=null,Pe=new Xt(0,0,0,0);return{setMask:function(ve){$!==ve&&!V&&(s.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){V=ve},setClear:function(ve,Oe,Ye,Ze,ke){ke===!0&&(ve*=Ze,Oe*=Ze,Ye*=Ze),ee.set(ve,Oe,Ye,Ze),Pe.equals(ee)===!1&&(s.clearColor(ve,Oe,Ye,Ze),Pe.copy(ee))},reset:function(){V=!1,$=null,Pe.set(-1,0,0,0)}}}function n(){let V=!1,ee=!1,$=null,Pe=null,ve=null;return{setReversed:function(Oe){if(ee!==Oe){let Ye=e.get("EXT_clip_control");Oe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ee=Oe;let Ze=ve;ve=null,this.setClear(Ze)}},getReversed:function(){return ee},setTest:function(Oe){Oe?ae(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Oe){$!==Oe&&!V&&(s.depthMask(Oe),$=Oe)},setFunc:function(Oe){if(ee&&(Oe=x0[Oe]),Pe!==Oe){switch(Oe){case xc:s.depthFunc(s.NEVER);break;case vc:s.depthFunc(s.ALWAYS);break;case yc:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case _c:s.depthFunc(s.EQUAL);break;case Mc:s.depthFunc(s.GEQUAL);break;case bc:s.depthFunc(s.GREATER);break;case Sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Oe}},setLocked:function(Oe){V=Oe},setClear:function(Oe){ve!==Oe&&(ve=Oe,ee&&(Oe=1-Oe),s.clearDepth(Oe))},reset:function(){V=!1,$=null,Pe=null,ve=null,ee=!1}}}function i(){let V=!1,ee=null,$=null,Pe=null,ve=null,Oe=null,Ye=null,Ze=null,ke=null;return{setTest:function(tt){V||(tt?ae(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(tt){ee!==tt&&!V&&(s.stencilMask(tt),ee=tt)},setFunc:function(tt,gt,qe){($!==tt||Pe!==gt||ve!==qe)&&(s.stencilFunc(tt,gt,qe),$=tt,Pe=gt,ve=qe)},setOp:function(tt,gt,qe){(Oe!==tt||Ye!==gt||Ze!==qe)&&(s.stencilOp(tt,gt,qe),Oe=tt,Ye=gt,Ze=qe)},setLocked:function(tt){V=tt},setClear:function(tt){ke!==tt&&(s.clearStencil(tt),ke=tt)},reset:function(){V=!1,ee=null,$=null,Pe=null,ve=null,Oe=null,Ye=null,Ze=null,ke=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],y=null,m=!1,g=null,S=null,M=null,v=null,R=null,E=null,x=null,w=new Ue(0,0,0),O=0,C=!1,N=null,z=null,U=null,B=null,Y=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,b=0,_=s.getParameter(s.VERSION);_.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(_)[1]),G=b>=1):_.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(_)[1]),G=b>=2);let L=null,A={},D=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),W=new Xt().fromArray(D),J=new Xt().fromArray(X);function de(V,ee,$,Pe){let ve=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(V,Oe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<$;Ye++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ee+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Oe}let ie={};ie[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(To),ze(!1),Ve(df),ae(s.CULL_FACE),Le(Or);function ae(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function Ce(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Be(V,ee){return f[V]!==ee?(s.bindFramebuffer(V,ee),f[V]=ee,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ee),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function he(V,ee){let $=p,Pe=!1;if(V){$=d.get(ee),$===void 0&&($=[],d.set(ee,$));let ve=V.textures;if($.length!==ve.length||$[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,Ye=ve.length;Oe<Ye;Oe++)$[Oe]=s.COLOR_ATTACHMENT0+Oe;$.length=ve.length,Pe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers($)}function He(V){return y!==V?(s.useProgram(V),y=V,!0):!1}let le={[Ur]:s.FUNC_ADD,[Fm]:s.FUNC_SUBTRACT,[Om]:s.FUNC_REVERSE_SUBTRACT};le[Um]=s.MIN,le[Bm]=s.MAX;let j={[Hm]:s.ZERO,[Gm]:s.ONE,[Vm]:s.SRC_COLOR,[gf]:s.SRC_ALPHA,[Zm]:s.SRC_ALPHA_SATURATE,[Ym]:s.DST_COLOR,[Xm]:s.DST_ALPHA,[Wm]:s.ONE_MINUS_SRC_COLOR,[xf]:s.ONE_MINUS_SRC_ALPHA,[Km]:s.ONE_MINUS_DST_COLOR,[qm]:s.ONE_MINUS_DST_ALPHA,[Jm]:s.CONSTANT_COLOR,[$m]:s.ONE_MINUS_CONSTANT_COLOR,[jm]:s.CONSTANT_ALPHA,[Qm]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(V,ee,$,Pe,ve,Oe,Ye,Ze,ke,tt){if(V===Or){m===!0&&(Ce(s.BLEND),m=!1);return}if(m===!1&&(ae(s.BLEND),m=!0),V!==km){if(V!==g||tt!==C){if((S!==Ur||R!==Ur)&&(s.blendEquation(s.FUNC_ADD),S=Ur,R=Ur),tt)switch(V){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jn:s.blendFunc(s.ONE,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pf:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mf:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",V);break}M=null,v=null,E=null,x=null,w.set(0,0,0),O=0,g=V,C=tt}return}ve=ve||ee,Oe=Oe||$,Ye=Ye||Pe,(ee!==S||ve!==R)&&(s.blendEquationSeparate(le[ee],le[ve]),S=ee,R=ve),($!==M||Pe!==v||Oe!==E||Ye!==x)&&(s.blendFuncSeparate(j[$],j[Pe],j[Oe],j[Ye]),M=$,v=Pe,E=Oe,x=Ye),(Ze.equals(w)===!1||ke!==O)&&(s.blendColor(Ze.r,Ze.g,Ze.b,ke),w.copy(Ze),O=ke),g=V,C=!1}function Ke(V,ee){V.side===en?Ce(s.CULL_FACE):ae(s.CULL_FACE);let $=V.side===vn;ee&&($=!$),ze($),V.blending===Ei&&V.transparent===!1?Le(Or):Le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Pe=V.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Mt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(V){N!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),N=V)}function Ve(V){V!==Dm?(ae(s.CULL_FACE),V!==z&&(V===df?s.cullFace(s.BACK):V===Nm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),z=V}function _t(V){V!==U&&(G&&s.lineWidth(V),U=V)}function Mt(V,ee,$){V?(ae(s.POLYGON_OFFSET_FILL),(B!==ee||Y!==$)&&(B=ee,Y=$,o.getReversed()&&(ee=-ee,$=-$),s.polygonOffset(ee,$))):Ce(s.POLYGON_OFFSET_FILL)}function be(V){V?ae(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function ce(V){V===void 0&&(V=s.TEXTURE0+H-1),L!==V&&(s.activeTexture(V),L=V)}function Re(V,ee,$){$===void 0&&(L===null?$=s.TEXTURE0+H-1:$=L);let Pe=A[$];Pe===void 0&&(Pe={type:void 0,texture:void 0},A[$]=Pe),(Pe.type!==V||Pe.texture!==ee)&&(L!==$&&(s.activeTexture($),L=$),s.bindTexture(V,ee||ie[V]),Pe.type=V,Pe.texture=ee)}function F(){let V=A[L];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function se(){try{s.texSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function re(){try{s.texSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function Ie(){try{s.compressedTexSubImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function De(){try{s.texStorage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function I(){try{s.texStorage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function P(){try{s.texImage2D(...arguments)}catch(V){bt("WebGLState:",V)}}function Q(){try{s.texImage3D(...arguments)}catch(V){bt("WebGLState:",V)}}function ge(V){return u[V]!==void 0?u[V]:s.getParameter(V)}function me(V,ee){u[V]!==ee&&(s.pixelStorei(V,ee),u[V]=ee)}function we(V){W.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),W.copy(V))}function Ae(V){J.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function xe(V,ee){let $=l.get(ee);$===void 0&&($=new WeakMap,l.set(ee,$));let Pe=$.get(V);Pe===void 0&&(Pe=s.getUniformBlockIndex(ee,V.name),s.uniformBlockBinding(ee,Pe,Pe),$.set(V,Pe))}function fe(V,ee,$){let ve=l.get(ee).get(V);c[ve]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,$),c[ve]=$)}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,A={},f={},c={},d=new WeakMap,p=[],y=null,m=!1,g=null,S=null,M=null,v=null,R=null,E=null,x=null,w=new Ue(0,0,0),O=0,C=!1,N=null,z=null,U=null,B=null,Y=null,W.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ce,bindFramebuffer:Be,drawBuffers:he,useProgram:He,setBlending:Le,setMaterial:Ke,setFlipSided:ze,setCullFace:Ve,setLineWidth:_t,setPolygonOffset:Mt,setScissorTest:be,activeTexture:ce,bindTexture:Re,unbindTexture:F,compressedTexImage2D:oe,compressedTexImage3D:q,texImage2D:P,texImage3D:Q,pixelStorei:me,getParameter:ge,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:De,texStorage3D:I,texSubImage2D:se,texSubImage3D:re,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Se,scissor:we,viewport:Ae,reset:Te}}function NS(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,y=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,P){return m?new OffscreenCanvas(I,P):Co("canvas")}function S(I,P,Q){let ge=1,me=De(I);if((me.width>Q||me.height>Q)&&(ge=Q/Math.max(me.width,me.height)),ge<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let we=Math.floor(ge*me.width),Ae=Math.floor(ge*me.height);f===void 0&&(f=g(we,Ae));let xe=P?g(we,Ae):f;return xe.width=we,xe.height=Ae,xe.getContext("2d").drawImage(I,0,0,we,Ae),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+we+"x"+Ae+")."),xe}else return"data"in I&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function M(I){return I.generateMipmaps}function v(I){s.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(I,P,Q,ge,me,we=!1){if(I!==null){if(s[I]!==void 0)return s[I];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ae;ge&&(Ae=e.get("EXT_texture_norm16"),Ae||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=P;if(P===s.RED&&(Q===s.FLOAT&&(xe=s.R32F),Q===s.HALF_FLOAT&&(xe=s.R16F),Q===s.UNSIGNED_BYTE&&(xe=s.R8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.R16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.R16_SNORM_EXT)),P===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.R8UI),Q===s.UNSIGNED_SHORT&&(xe=s.R16UI),Q===s.UNSIGNED_INT&&(xe=s.R32UI),Q===s.BYTE&&(xe=s.R8I),Q===s.SHORT&&(xe=s.R16I),Q===s.INT&&(xe=s.R32I)),P===s.RG&&(Q===s.FLOAT&&(xe=s.RG32F),Q===s.HALF_FLOAT&&(xe=s.RG16F),Q===s.UNSIGNED_BYTE&&(xe=s.RG8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RG16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RG16_SNORM_EXT)),P===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RG16UI),Q===s.UNSIGNED_INT&&(xe=s.RG32UI),Q===s.BYTE&&(xe=s.RG8I),Q===s.SHORT&&(xe=s.RG16I),Q===s.INT&&(xe=s.RG32I)),P===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),Q===s.UNSIGNED_INT&&(xe=s.RGB32UI),Q===s.BYTE&&(xe=s.RGB8I),Q===s.SHORT&&(xe=s.RGB16I),Q===s.INT&&(xe=s.RGB32I)),P===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(xe=s.RGBA32UI),Q===s.BYTE&&(xe=s.RGBA8I),Q===s.SHORT&&(xe=s.RGBA16I),Q===s.INT&&(xe=s.RGBA32I)),P===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGB16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),P===s.RGBA){let fe=we?Ea:Rt.getTransfer(me);Q===s.FLOAT&&(xe=s.RGBA32F),Q===s.HALF_FLOAT&&(xe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(xe=fe===Vt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ae&&(xe=Ae.RGBA16_EXT),Q===s.SHORT&&Ae&&(xe=Ae.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function x(I,P){let Q;return I?P===null||P===ui||P===Vr?Q=s.DEPTH24_STENCIL8:P===Fn?Q=s.DEPTH32F_STENCIL8:P===Xo&&(Q=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ui||P===Vr?Q=s.DEPTH_COMPONENT24:P===Fn?Q=s.DEPTH_COMPONENT32F:P===Xo&&(Q=s.DEPTH_COMPONENT16),Q}function w(I,P){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==gn?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function O(I){let P=new WeakRef(I);n.get(I).__ref=P,p.add(P),y.register(I,P,P)}function C(I){let P=n.get(I).__ref;P!==void 0&&(p.delete(P),y.unregister(P))}function N(I){U(I.target)}function z(I){B(I.target)}function U(I){I.removeEventListener("dispose",N),C(I),H(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function B(I){I.removeEventListener("dispose",z),C(I),b(I)}function Y(){for(let I of p){let P=I.deref();P!==void 0&&(P.isRenderTarget===!0?B(P):U(P))}p.clear(),u.clear()}function H(I){let P=n.get(I);if(P.__webglInit===void 0)return;let Q=I.source,ge=d.get(Q);if(ge){let me=ge[P.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(I),Object.keys(ge).length===0&&d.delete(Q)}n.remove(I)}function G(I){let P=n.get(I);s.deleteTexture(P.__webglTexture);let Q=I.source,ge=d.get(Q);delete ge[P.__cacheKey],o.memory.textures--}function b(I){let P=n.get(I);P.__depthDisposeCallback&&P.__depthDisposeCallback();let Q=I.depthTexture;if(Q&&Q.renderTarget===I&&U(Q),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(P.__webglFramebuffer[me]))for(let we=0;we<P.__webglFramebuffer[me].length;we++)s.deleteFramebuffer(P.__webglFramebuffer[me][we]);else s.deleteFramebuffer(P.__webglFramebuffer[me]);P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer[me])}else{if(Array.isArray(P.__webglFramebuffer))for(let me=0;me<P.__webglFramebuffer.length;me++)s.deleteFramebuffer(P.__webglFramebuffer[me]);else s.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&s.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let me=0;me<P.__webglColorRenderbuffer.length;me++)P.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(P.__webglColorRenderbuffer[me]);P.__webglDepthRenderbuffer&&s.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let ge=I.textures;for(let me=0,we=ge.length;me<we;me++){let Ae=n.get(ge[me]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(ge[me])}n.remove(I)}let _=0;function L(){_=0}function A(){return _}function D(I){_=I}function X(){let I=_;return I>=i.maxTextures&&ft("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),_+=1,I}function W(I){let P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.mipmapsAutoUpdate),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function J(I,P){let Q=n.get(I);if(I.isVideoTexture&&Ie(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){let ge=I.image;if(ge===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(Q,I,P);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+P)}function de(I,P){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ke(Q,I,P);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+P)}function ie(I,P){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ke(Q,I,P);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+P)}function ae(I,P){let Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ze(Q,I,P);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+P)}let Ce={[Ds]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Ao]:s.MIRRORED_REPEAT},Be={[ln]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[Gr]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Wo]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},he={[c0]:s.NEVER,[Nf]:s.ALWAYS,[h0]:s.LESS,[Lf]:s.LEQUAL,[u0]:s.EQUAL,[Df]:s.GEQUAL,[f0]:s.GREATER,[d0]:s.NOTEQUAL};function He(I,P){if(P.type===Fn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===gn||P.magFilter===Wo||P.magFilter===Gr||P.magFilter===hi||P.minFilter===gn||P.minFilter===Wo||P.minFilter===Gr||P.minFilter===hi)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ce[P.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ce[P.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ce[P.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Be[P.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Be[P.minFilter]),P.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,he[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===ln||P.minFilter!==Gr&&P.minFilter!==hi||P.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function le(I,P){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",N),O(P));let ge=P.source,me=d.get(ge);me===void 0&&(me={},d.set(ge,me));let we=W(P);if(we!==I.__cacheKey){me[we]===void 0&&(me[we]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),me[we].usedTimes++;let Ae=me[I.__cacheKey];Ae!==void 0&&(me[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&G(P)),I.__cacheKey=we,I.__webglTexture=me[we].texture}return Q}function j(I,P,Q){return Math.floor(Math.floor(I/Q)/P)}function Le(I,P,Q,ge){let we=I.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,P.width,P.height,Q,ge,P.data);else{we.sort((V,ee)=>V.start-ee.start);let Ae=0;for(let V=1;V<we.length;V++){let ee=we[Ae],$=we[V],Pe=ee.start+ee.count,ve=j($.start,P.width,4),Oe=j(ee.start,P.width,4);$.start<=Pe+1&&ve===Oe&&j($.start+$.count-1,P.width,4)===ve?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++Ae,we[Ae]=$)}we.length=Ae+1;let xe=t.getParameter(s.UNPACK_ROW_LENGTH),fe=t.getParameter(s.UNPACK_SKIP_PIXELS),Te=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,P.width);for(let V=0,ee=we.length;V<ee;V++){let $=we[V],Pe=Math.floor($.start/4),ve=Math.ceil($.count/4),Oe=Pe%P.width,Ye=Math.floor(Pe/P.width),Ze=ve,ke=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(s.TEXTURE_2D,0,Oe,Ye,Ze,ke,Q,ge,P.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function Ke(I,P,Q){let ge=s.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=s.TEXTURE_3D);let me=le(I,P),we=P.source;t.bindTexture(ge,I.__webglTexture,s.TEXTURE0+Q);let Ae=n.get(we);if(we.version!==Ae.__version||me===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap!="undefined"&&P.image instanceof ImageBitmap)===!1){let ke=Rt.getPrimaries(Rt.workingColorSpace),tt=P.colorSpace===vs?null:Rt.getPrimaries(P.colorSpace),gt=P.colorSpace===vs||ke===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}t.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment);let fe=S(P.image,!1,i.maxTextureSize);fe=Se(P,fe);let Te=r.convert(P.format,P.colorSpace),V=r.convert(P.type),ee=E(P.internalFormat,Te,V,P.normalized,P.colorSpace,P.isVideoTexture);He(ge,P);let $,Pe=P.mipmaps,ve=P.isVideoTexture!==!0,Oe=Ae.__version===void 0||me===!0,Ye=we.dataReady,Ze=w(P,fe);if(P.isDepthTexture)ee=x(P.format===xs,P.type),Oe&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ee,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,ee,fe.width,fe.height,0,Te,V,null));else if(P.isDataTexture)if(Pe.length>0){ve&&Oe&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,Pe[0].width,Pe[0].height);for(let ke=0,tt=Pe.length;ke<tt;ke++)$=Pe[ke],ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ke,0,0,$.width,$.height,Te,V,$.data):t.texImage2D(s.TEXTURE_2D,ke,ee,$.width,$.height,0,Te,V,$.data);P.generateMipmaps=!1}else ve?(Oe&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,fe.width,fe.height),Ye&&Le(P,fe,Te,V)):t.texImage2D(s.TEXTURE_2D,0,ee,fe.width,fe.height,0,Te,V,fe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ve&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,ee,Pe[0].width,Pe[0].height,fe.depth);for(let ke=0,tt=Pe.length;ke<tt;ke++)if($=Pe[ke],P.format!==Yn)if(Te!==null)if(ve){if(Ye)if(P.layerUpdates.size>0){let gt=Wf($.width,$.height,P.format,P.type);for(let qe of P.layerUpdates){let Nt=$.data.subarray(qe*gt/$.data.BYTES_PER_ELEMENT,(qe+1)*gt/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ke,0,0,qe,$.width,$.height,1,Te,Nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ke,0,0,0,$.width,$.height,fe.depth,Te,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ke,ee,$.width,$.height,fe.depth,0,$.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ke,0,0,0,$.width,$.height,fe.depth,Te,V,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ke,ee,$.width,$.height,fe.depth,0,Te,V,$.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{ve&&Oe&&t.texStorage2D(s.TEXTURE_2D,Ze,ee,Pe[0].width,Pe[0].height);for(let ke=0,tt=Pe.length;ke<tt;ke++)$=Pe[ke],P.format!==Yn?Te!==null?ve?Ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,ke,0,0,$.width,$.height,Te,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ke,ee,$.width,$.height,0,$.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ke,0,0,$.width,$.height,Te,V,$.data):t.texImage2D(s.TEXTURE_2D,ke,ee,$.width,$.height,0,Te,V,$.data)}else if(P.isDataArrayTexture)if(ve){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ze,ee,fe.width,fe.height,fe.depth),Ye)if(P.layerUpdates.size>0){let ke=Wf(fe.width,fe.height,P.format,P.type);for(let tt of P.layerUpdates){let gt=fe.data.subarray(tt*ke/fe.data.BYTES_PER_ELEMENT,(tt+1)*ke/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,fe.width,fe.height,1,Te,V,gt)}P.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,V,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ee,fe.width,fe.height,fe.depth,0,Te,V,fe.data);else if(P.isData3DTexture)ve?(Oe&&t.texStorage3D(s.TEXTURE_3D,Ze,ee,fe.width,fe.height,fe.depth),Ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,V,fe.data)):t.texImage3D(s.TEXTURE_3D,0,ee,fe.width,fe.height,fe.depth,0,Te,V,fe.data);else if(P.isFramebufferTexture){if(Oe)if(ve)t.texStorage2D(s.TEXTURE_2D,Ze,ee,fe.width,fe.height);else{let ke=fe.width,tt=fe.height;for(let gt=0;gt<Ze;gt++)t.texImage2D(s.TEXTURE_2D,gt,ee,ke,tt,0,Te,V,null),ke>>=1,tt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in s){let ke=s.canvas;if(ke.hasAttribute("layoutsubtree")||ke.setAttribute("layoutsubtree","true"),fe.parentNode!==ke){ke.appendChild(fe),u.add(P),ke.onpaint=tt=>{let gt=tt.changedElements;for(let qe of u)gt.includes(qe.image)&&(qe.needsUpdate=!0)},ke.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,fe);else{let gt=s.RGBA,qe=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,gt,qe,Nt,fe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(ve&&Oe){let ke=De(Pe[0]);t.texStorage2D(s.TEXTURE_2D,Ze,ee,ke.width,ke.height)}for(let ke=0,tt=Pe.length;ke<tt;ke++)$=Pe[ke],ve?Ye&&t.texSubImage2D(s.TEXTURE_2D,ke,0,0,Te,V,$):t.texImage2D(s.TEXTURE_2D,ke,ee,Te,V,$);P.generateMipmaps=!1}else if(ve){if(Oe){let ke=De(fe);t.texStorage2D(s.TEXTURE_2D,Ze,ee,ke.width,ke.height)}Ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,V,fe)}else t.texImage2D(s.TEXTURE_2D,0,ee,Te,V,fe);M(P)&&P.mipmapsAutoUpdate===!0&&v(ge),Ae.__version=we.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ze(I,P,Q){if(P.image.length!==6)return;let ge=le(I,P),me=P.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);let we=n.get(me);if(me.version!==we.__version||ge===!0){t.activeTexture(s.TEXTURE0+Q);let Ae=Rt.getPrimaries(Rt.workingColorSpace),xe=P.colorSpace===vs?null:Rt.getPrimaries(P.colorSpace),fe=P.colorSpace===vs||Ae===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Te=P.isCompressedTexture||P.image[0].isCompressedTexture,V=P.image[0]&&P.image[0].isDataTexture,ee=[];for(let qe=0;qe<6;qe++)!Te&&!V?ee[qe]=S(P.image[qe],!0,i.maxCubemapSize):ee[qe]=V?P.image[qe].image:P.image[qe],ee[qe]=Se(P,ee[qe]);let $=ee[0],Pe=r.convert(P.format,P.colorSpace),ve=r.convert(P.type),Oe=E(P.internalFormat,Pe,ve,P.normalized,P.colorSpace),Ye=P.isVideoTexture!==!0,Ze=we.__version===void 0||ge===!0,ke=me.dataReady,tt=w(P,$);He(s.TEXTURE_CUBE_MAP,P);let gt;if(P.isDepthTexture){if(Oe=x(P.format===xs,P.type),Ze)if(Ye)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Oe,$.width,$.height);else for(let qe=0;qe<6;qe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Oe,$.width,$.height,0,Pe,ve,null)}else if(Te){Ye&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Oe,$.width,$.height);for(let qe=0;qe<6;qe++){gt=ee[qe].mipmaps;for(let Nt=0;Nt<gt.length;Nt++){let on=gt[Nt];P.format!==Yn?Pe!==null?Ye?ke&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt,0,0,on.width,on.height,Pe,on.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt,Oe,on.width,on.height,0,on.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt,0,0,on.width,on.height,Pe,ve,on.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt,Oe,on.width,on.height,0,Pe,ve,on.data)}}}else{if(gt=P.mipmaps,Ye&&Ze){gt.length>0&&tt++;let qe=De(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Oe,qe.width,qe.height)}for(let qe=0;qe<6;qe++)if(V){Ye?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,ee[qe].width,ee[qe].height,Pe,ve,ee[qe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Oe,ee[qe].width,ee[qe].height,0,Pe,ve,ee[qe].data);for(let Nt=0;Nt<gt.length;Nt++){let Ci=gt[Nt].image[qe].image;Ye?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt+1,0,0,Ci.width,Ci.height,Pe,ve,Ci.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt+1,Oe,Ci.width,Ci.height,0,Pe,ve,Ci.data)}}else{Ye?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,Pe,ve,ee[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Oe,Pe,ve,ee[qe]);for(let Nt=0;Nt<gt.length;Nt++){let on=gt[Nt];Ye?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt+1,0,0,Pe,ve,on.image[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Nt+1,Oe,Pe,ve,on.image[qe])}}}M(P)&&P.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),we.__version=me.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Ve(I,P,Q,ge,me,we){let Ae=r.convert(Q.format,Q.colorSpace),xe=r.convert(Q.type),fe=E(Q.internalFormat,Ae,xe,Q.normalized,Q.colorSpace),Te=n.get(P),V=n.get(Q);if(V.__renderTarget=P,!Te.__hasExternalTextures){let ee=Math.max(1,P.width>>we),$=Math.max(1,P.height>>we);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,we,fe,ee,$,P.depth,0,Ae,xe,null):t.texImage2D(me,we,fe,ee,$,0,Ae,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,V.__webglTexture,0,se(P)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,V.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(I,P,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),P.depthBuffer){let ge=P.depthTexture,me=ge&&ge.isDepthTexture?ge.type:null,we=x(P.stencilBuffer,me),Ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;re(P)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se(P),we,P.width,P.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,se(P),we,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,we,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,I)}else{let ge=P.textures;for(let me=0;me<ge.length;me++){let we=ge[me],Ae=r.convert(we.format,we.colorSpace),xe=r.convert(we.type),fe=E(we.internalFormat,Ae,xe,we.normalized,we.colorSpace);re(P)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se(P),fe,P.width,P.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,se(P),fe,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,fe,P.width,P.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(I,P,Q){let ge=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let me=n.get(P.depthTexture);me.__renderTarget=P;let we=ge?P.depthTexture.image[0]:P.depthTexture.image;(!me.__webglTexture||we.width!==P.width||we.height!==P.height)&&(we.width=P.width,we.height=P.height,P.depthTexture.needsUpdate=!0),ge?ae(P.depthTexture,0):J(P.depthTexture,0);let Ae=me.__webglTexture,xe=se(P),fe=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,Te=P.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(P.depthTexture.format===as)re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,fe,Ae,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Te,fe,Ae,0);else if(P.depthTexture.format===xs)re(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,fe,Ae,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Te,fe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(I){let P=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){let ge=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ge){let me=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ge.removeEventListener("dispose",me)};ge.addEventListener("dispose",me),P.__depthDisposeCallback=me}P.__boundDepthTexture=ge}if(I.depthTexture&&!P.__autoAllocateDepthBuffer)if(Q)for(let ge=0;ge<6;ge++)Mt(P.__webglFramebuffer[ge],I,ge);else I.texture.mipmaps.length>0?Mt(P.__webglFramebuffer[0],I,0):Mt(P.__webglFramebuffer,I,0);else if(Q){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]===void 0)P.__webglDepthbuffer[ge]=s.createRenderbuffer(),_t(P.__webglDepthbuffer[ge],I,!1);else{let me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=s.createRenderbuffer(),_t(P.__webglDepthbuffer,I,!1);else{let me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=P.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(I,P,Q){let ge=n.get(I);P!==void 0&&Ve(ge.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&be(I)}function Re(I){let P=I.texture,Q=n.get(I),ge=n.get(P);I.addEventListener("dispose",z),O(I);let me=I.textures,we=I.isWebGLCubeRenderTarget===!0,Ae=me.length>1;if(Ae||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=P.version,o.memory.textures++),we){Q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(P.mipmaps.length>0){Q.__webglFramebuffer[xe]=[];for(let fe=0;fe<P.mipmaps.length;fe++)Q.__webglFramebuffer[xe][fe]=s.createFramebuffer()}else Q.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(P.mipmaps.length>0){Q.__webglFramebuffer=[];for(let xe=0;xe<P.mipmaps.length;xe++)Q.__webglFramebuffer[xe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let xe=0,fe=me.length;xe<fe;xe++){let Te=n.get(me[xe]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&re(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let xe=0;xe<me.length;xe++){let fe=me[xe];Q.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[xe]);let Te=r.convert(fe.format,fe.colorSpace),V=r.convert(fe.type),ee=E(fe.internalFormat,Te,V,fe.normalized,fe.colorSpace,I.isXRRenderTarget===!0),$=se(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ee,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),He(s.TEXTURE_CUBE_MAP,P);for(let xe=0;xe<6;xe++)if(P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ve(Q.__webglFramebuffer[xe][fe],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,fe);else Ve(Q.__webglFramebuffer[xe],I,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);M(P)?v(s.TEXTURE_CUBE_MAP):P.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let xe=0,fe=me.length;xe<fe;xe++){let Te=me[xe],V=n.get(Te),ee=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),He(ee,Te),Ve(Q.__webglFramebuffer,I,Te,s.COLOR_ATTACHMENT0+xe,ee,0),M(Te)&&v(ee)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ge.__webglTexture),He(xe,P),P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ve(Q.__webglFramebuffer[fe],I,P,s.COLOR_ATTACHMENT0,xe,fe);else Ve(Q.__webglFramebuffer,I,P,s.COLOR_ATTACHMENT0,xe,0);M(P)?v(xe):P.mipmaps.length>0&&s.texParameteri(xe,s.TEXTURE_MAX_LEVEL,P.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&be(I)}function F(I){let P=I.textures;for(let Q=0,ge=P.length;Q<ge;Q++){let me=P[Q];if(M(me)&&me.mipmapsAutoUpdate===!0){let we=R(I),Ae=n.get(me).__webglTexture;t.bindTexture(we,Ae),v(we),t.unbindTexture()}}}let oe=[];function q(I){if(I.samples>0){if(re(I)===!1){let P=I.textures,Q=I.width,ge=I.height,me=s.COLOR_BUFFER_BIT,we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(I),xe=P.length>1;if(xe)for(let Te=0;Te<P.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<P.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let V=n.get(P[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,me,s.NEAREST),c===!0&&(oe.length=0,oe.push(s.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&oe.push(we),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<P.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let V=n.get(P[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let P=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[P])}}}function se(I){return Math.min(i.maxSamples,I.samples)}function re(I){let P=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ie(I){let P=o.render.frame;h.get(I)!==P&&(h.set(I,P),I.update())}function Se(I,P){let Q=I.colorSpace,ge=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==On&&Q!==vs&&(Rt.getTransfer(Q)===Vt?(ge!==Yn||me!==$n)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",Q)),P}function De(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=de,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=re,this.dispose=Y}function zS(s,e){function t(n,i=vs){let r,o=Rt.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===Yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ef)return s.BYTE;if(n===Tf)return s.SHORT;if(n===Xo)return s.UNSIGNED_SHORT;if(n===qc)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===Ti)return s.HALF_FLOAT;if(n===Cf)return s.ALPHA;if(n===If)return s.RGB;if(n===Yn)return s.RGBA;if(n===as)return s.DEPTH_COMPONENT;if(n===xs)return s.DEPTH_STENCIL;if(n===Zc)return s.RED;if(n===Ya)return s.RED_INTEGER;if(n===Bs)return s.RG;if(n===Jc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===Ka||n===Za||n===Ja||n===$a)if(o===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jc||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===sh||n===rh||n===oh||n===ja||n===ah)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nh||n===ih)return o===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rh)return r.COMPRESSED_R11_EAC;if(n===oh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===ah)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh||n===vh||n===yh||n===_h||n===Mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_h)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bh||n===Sh||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bh)return o===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Th||n===Qa||n===Ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`,sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:kS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rd=class extends _i{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,y=typeof XRWebGLBinding!="undefined",m=new sd,g={},S=t.getContextAttributes(),M=null,v=null,R=[],E=[],x=new pt,w=null,O=null,C=new an;C.viewport=new Xt;let N=new an;N.viewport=new Xt;let z=[C,N],U=new Oc,B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=R[W];return J===void 0&&(J=new Do,R[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=R[W];return J===void 0&&(J=new Do,R[W]=J),J.getGripSpace()},this.getHand=function(W){let J=R[W];return J===void 0&&(J=new Do,R[W]=J),J.getHandSpace()};function H(W){let J=E.indexOf(W.inputSource);if(J===-1)return;let de=R[J];de!==void 0&&(de.update(W.inputSource,W.frame,l||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",b);for(let W=0;W<R.length;W++){let J=E[W];J!==null&&(E[W]=null,R[W].disconnect(J))}B=null,Y=null,m.reset();for(let W in g)delete g[W];if(e.setRenderTarget(M),d=null,f=null,u=null,i=null,v=null,X.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),O!==null){let W=O.camera;W.fov=O.fov,W.zoom=O.zoom,W.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",G),i.addEventListener("inputsourceschange",b),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,ae=null;S.depth&&(ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?xs:as,ie=S.stencil?Vr:ui);let Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ni(f.textureWidth,f.textureHeight,{format:Yn,type:$n,depthTexture:new cs(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ni(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function b(W){for(let J=0;J<W.removed.length;J++){let de=W.removed[J],ie=E.indexOf(de);ie>=0&&(E[ie]=null,R[ie].disconnect(de))}for(let J=0;J<W.added.length;J++){let de=W.added[J],ie=E.indexOf(de);if(ie===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=E.length){E.push(de),ie=Ce;break}else if(E[Ce]===null){E[Ce]=de,ie=Ce;break}if(ie===-1)break}let ae=R[ie];ae&&ae.connect(de)}}function _(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let J=W.near,de=W.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),U.near=N.near=C.near=J,U.far=N.far=C.far=de,(B!==U.near||Y!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,Y=U.far),U.layers.mask=W.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let ie=W.parent,ae=U.cameras;_(U,ie);for(let Ce=0;Ce<ae.length;Ce++)_(ae[Ce],ie);U.projectionMatrix.copy(C.projectionMatrix),U.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&W.isPerspectiveCamera&&(O={camera:W,fov:W.fov,zoom:W.zoom}),L(W,U,ie)};function L(W,J,de){de===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(W){return g[W]};let A=null;function D(W,J){if(h=J.getViewerPose(l||o),p=J,h!==null){let de=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ie=!1;de.length!==U.cameras.length&&(U.cameras.length=0,ie=!0);for(let he=0;he<de.length;he++){let He=de[he],le=null;if(d!==null)le=d.getViewport(He);else{let Le=u.getViewSubImage(f,He);le=Le.viewport,he===0&&(e.setRenderTargetTextures(v,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(v))}let j=z[he];j===void 0&&(j=new an,j.layers.enable(he),j.viewport=new Xt,z[he]=j),j.matrix.fromArray(He.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(He.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(le.x,le.y,le.width,le.height),he===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ie===!0&&U.cameras.push(j)}let ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let he=u.getDepthInformation(de[0]);he&&he.isValid&&he.texture&&m.init(he,i.renderState)}if(ae&&ae.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let he=0;he<de.length;he++){let He=de[he].camera;if(He){let le=g[He];le||(le=new Fa,g[He]=le);let j=u.getCameraImage(He);le.sourceTexture=j}}}}for(let de=0;de<R.length;de++){let ie=E[de],ae=R[de];ie!==null&&ae!==void 0&&ae.update(ie,J,l||o)}A&&A(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let X=new W0;X.setAnimationLoop(D),this.setAnimationLoop=function(W){A=W},this.dispose=function(){}}},OS=new at,eg=new wt;eg.set(-1,0,0,0,1,0,0,0,1);function US(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Hf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,S,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=e.get(g),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,S,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function BS(s,e,t,n){let i={},r={};function o(S,M){let v=M.program;n.uniformBlockBinding(S,v,i[S.id])}function a(S,M){let v=i[S.id];v===void 0&&(p(S),v=c(S),i[S.id]=v,S.addEventListener("dispose",m));let R=M.program;n.updateUBOMapping(S,R);let E=e.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){let M=s.createBuffer(),v=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,R),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function l(S){let M=i[S.id],v=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,x=v.length;E<x;E++){let w=v[E];if(Array.isArray(w))for(let O=0,C=w.length;O<C;O++)h(w[O],E,O,R);else h(w,E,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,M,v,R){if(f(S,M,v,R)===!0){let E=S.__offset,x=S.value;if(Array.isArray(x)){let w=0;for(let O=0;O<x.length;O++){let C=x[O],N=y(C,!0);u(C,S.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,S.__data)}}function u(S,M,v){typeof S=="number"||typeof S=="boolean"?M[v]=S:S.isMatrix3?(M[v]=S.elements[0],M[v+1]=S.elements[1],M[v+2]=S.elements[2],M[v+3]=0,M[v+4]=S.elements[3],M[v+5]=S.elements[4],M[v+6]=S.elements[5],M[v+7]=0,M[v+8]=S.elements[6],M[v+9]=S.elements[7],M[v+10]=S.elements[8],M[v+11]=0):ArrayBuffer.isView(S)?M.set(S.subarray(0,M.length-v),v):S.toArray(M,v)}function f(S,M,v,R){let E=S.value,x=M+"_"+v;if(Array.isArray(E)){R[x]===void 0&&(R[x]=[]);let w=R[x],O=!1;for(let C=0;C<E.length;C++)d(E[C],w,C)===!0&&(O=!0);return O}return d(E,R,x)}function d(S,M,v){if(M[v]===void 0)return typeof S=="number"||typeof S=="boolean"?M[v]=S:ArrayBuffer.isView(S)?M[v]=S.slice():M[v]=S.clone(),!0;{let R=M[v];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return M[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function p(S){let M=S.uniforms,v=0,R=16;for(let x=0,w=M.length;x<w;x++){let O=Array.isArray(M[x])?M[x]:[M[x]];for(let C=0,N=O.length;C<N;C++){let z=O[C],U=Array.isArray(z.value)?z.value:[z.value],B=Array.isArray(M[x])||Array.isArray(z.value),Y=v;for(let G=0,b=U.length;G<b;G++){let _=U[G],L=y(_,B),A=v%R,D=A%L.boundary,X=A+D;v+=D,X!==0&&R-X<L.storage&&(v+=R-X),G===0&&(Y=v),v+=L.storage}let H=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new H((v-Y)/Float32Array.BYTES_PER_ELEMENT),z.__offset=Y}}let E=v%R;return E>0&&(v+=R-E),S.__size=v,S.__cache={},this}function y(S,M){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",S),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(S){let M=S.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var HS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function GS(){return Hi===null&&(Hi=new os(HS,16,16,Bs,Ti),Hi.name="DFG_LUT",Hi.minFilter=gn,Hi.magFilter=gn,Hi.wrapS=qn,Hi.wrapT=qn,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Zo=class{constructor(e={}){let{canvas:t=p0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=$n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=d,m=new Set([$c,Jc,Ya]),g=new Set([$n,ui,Xo,Vr,Yc,Kc]),S=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,E=null,x=[],w=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,z=null,U=null,B=null,Y=null;this._outputColorSpace=Bt;let H=0,G=0,b=null,_=-1,L=null,A=new Xt,D=new Xt,X=null,W=new Ue(0),J=0,de=t.width,ie=t.height,ae=1,Ce=null,Be=null,he=new Xt(0,0,de,ie),He=new Xt(0,0,de,ie),le=!1,j=new Mi,Le=new La,Ke=!1,ze=!1,Ve=new at,_t=new K,Mt=new Xt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Re(){return b===null?ae:1}let F=n;function oe(k,ne){return t.getContext(k,ne)}let q,se,re,Ie,Se,De,I,P,Q,ge,me,we,Ae,xe,fe,Te,V,ee,$,Pe,ve,Oe,Ye;try{let k={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",qe,!1),F===null){let ne="webgl2";if(F=oe(ne,k),F===null)throw oe(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(k){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),bt("WebGLRenderer: "+k.message),k}function Ze(){q=new QM(F),q.init(),ve=new zS(F,q),se=new GM(F,q,e,ve),re=new DS(F,q),se.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),U=F.createFramebuffer(),B=F.createFramebuffer(),Y=F.createFramebuffer(),Ie=new nb(F),Se=new yS,De=new NS(F,q,re,Se,se,ve,Ie),I=new jM(C),P=new sy(F),Oe=new BM(F,P),Q=new eb(F,P,Ie,Oe),ge=new sb(F,Q,P,Oe,Ie),ee=new ib(F,se,De),fe=new VM(Se),me=new vS(C,I,q,se,Oe,fe),we=new US(C,Se),Ae=new MS,xe=new AS(q),V=new UM(C,I,re,ge,p,c),Te=new LS(C,ge,se),Ye=new BS(F,Ie,se,re),$=new HM(F,q,Ie),Pe=new tb(F,q,Ie),Ie.programs=me.programs,C.capabilities=se,C.extensions=q,C.properties=Se,C.renderLists=Ae,C.shadowMap=Te,C.state=re,C.info=Ie}y!==$n&&(O=new ob(y,t.width,t.height,a,i,r));let ke=new rd(C,F);this.xr=ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let k=q.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=q.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(k){k!==void 0&&(ae=k,this.setSize(de,ie,!1))},this.getSize=function(k){return k.set(de,ie)},this.setSize=function(k,ne,_e=!0){if(ke.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}de=k,ie=ne,t.width=Math.floor(k*ae),t.height=Math.floor(ne*ae),_e===!0&&(t.style.width=k+"px",t.style.height=ne+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,k,ne)},this.getDrawingBufferSize=function(k){return k.set(de*ae,ie*ae).floor()},this.setDrawingBufferSize=function(k,ne,_e){de=k,ie=ne,ae=_e,t.width=Math.floor(k*_e),t.height=Math.floor(ne*_e),this.setViewport(0,0,k,ne)},this.setEffects=function(k){if(y===$n){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let ne=0;ne<k.length;ne++)if(k[ne].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(A)},this.getViewport=function(k){return k.copy(he)},this.setViewport=function(k,ne,_e,ue){k.isVector4?he.set(k.x,k.y,k.z,k.w):he.set(k,ne,_e,ue),re.viewport(A.copy(he).multiplyScalar(Re()).round())},this.getScissor=function(k){return k.copy(He)},this.setScissor=function(k,ne,_e,ue){k.isVector4?He.set(k.x,k.y,k.z,k.w):He.set(k,ne,_e,ue),re.scissor(D.copy(He).multiplyScalar(Re()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(k){re.setScissorTest(le=k)},this.setOpaqueSort=function(k){Ce=k},this.setTransparentSort=function(k){Be=k},this.getClearColor=function(k){return k.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(k=!0,ne=!0,_e=!0){let ue=0;if(k){let pe=!1;if(b!==null){let Ge=b.texture.format;pe=m.has(Ge)}if(pe){let Ge=b.texture.type,et=g.has(Ge),Xe=V.getClearColor(),Je=V.getClearAlpha(),nt=Xe.r,yt=Xe.g,Ct=Xe.b;et?(S[0]=nt,S[1]=yt,S[2]=Ct,S[3]=Je,F.clearBufferuiv(F.COLOR,0,S)):(M[0]=nt,M[1]=yt,M[2]=Ct,M[3]=Je,F.clearBufferiv(F.COLOR,0,M))}else ue|=F.COLOR_BUFFER_BIT}ne&&(ue|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(ue|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&F.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),z=k},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),V.dispose(),Ae.dispose(),xe.dispose(),De.dispose(),Se.dispose(),I.dispose(),ge.dispose(),Q.dispose(),Oe.dispose(),Ye.dispose(),me.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",er),ke.removeEventListener("sessionend",tr),Ki.stop()};function tt(k){k.preventDefault(),Ta("WebGLRenderer: Context Lost."),N=!0}function gt(){Ta("WebGLRenderer: Context Restored."),N=!1;let k=Ie.autoReset,ne=Te.enabled,_e=Te.autoUpdate,ue=Te.needsUpdate,pe=Te.type;Ze(),Ie.autoReset=k,Te.enabled=ne,Te.autoUpdate=_e,Te.needsUpdate=ue,Te.type=pe}function qe(k){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Nt(k){let ne=k.target;ne.removeEventListener("dispose",Nt),on(ne)}function on(k){Ci(k),Se.remove(k)}function Ci(k){let ne=Se.get(k).programs;ne!==void 0&&(ne.forEach(function(_e){me.releaseProgram(_e)}),k.isShaderMaterial&&me.releaseShaderCache(k))}this.renderBufferDirect=function(k,ne,_e,ue,pe,Ge){ne===null&&(ne=be);let et=pe.isMesh&&pe.matrixWorld.determinantAffine()<0,Xe=to(k,ne,_e,ue,pe);re.setMaterial(ue,et);let Je=_e.index,nt=1;if(ue.wireframe===!0){if(Je=Q.getWireframeAttribute(_e),Je===void 0)return;nt=2}let yt=_e.drawRange,Ct=_e.attributes.position,rt=yt.start*nt,It=(yt.start+yt.count)*nt;Ge!==null&&(rt=Math.max(rt,Ge.start*nt),It=Math.min(It,(Ge.start+Ge.count)*nt)),Je!==null?(rt=Math.max(rt,0),It=Math.min(It,Je.count)):Ct!=null&&(rt=Math.max(rt,0),It=Math.min(It,Ct.count));let sn=It-rt;if(sn<0||sn===1/0)return;Oe.setup(pe,ue,Xe,_e,Je);let Wt,Ot=$;if(Je!==null&&(Wt=P.get(Je),Ot=Pe,Ot.setIndex(Wt)),pe.isMesh)ue.wireframe===!0?(re.setLineWidth(ue.wireframeLinewidth*Re()),Ot.setMode(F.LINES)):Ot.setMode(F.TRIANGLES);else if(pe.isLine){let fn=ue.linewidth;fn===void 0&&(fn=1),re.setLineWidth(fn*Re()),pe.isLineSegments?Ot.setMode(F.LINES):pe.isLineLoop?Ot.setMode(F.LINE_LOOP):Ot.setMode(F.LINE_STRIP)}else pe.isPoints?Ot.setMode(F.POINTS):pe.isSprite&&Ot.setMode(F.TRIANGLES);if(pe.isBatchedMesh)if(q.get("WEBGL_multi_draw"))Ot.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{let fn=pe._multiDrawStarts,ot=pe._multiDrawCounts,Mn=pe._multiDrawCount,Ft=Je?P.get(Je).bytesPerElement:1,Ji=Se.get(ue).currentProgram.getUniforms();for(let Ut=0;Ut<Mn;Ut++)Ji.setValue(F,"_gl_DrawID",Ut),Ot.render(fn[Ut]/Ft,ot[Ut])}else if(pe.isInstancedMesh)Ot.renderInstances(rt,sn,pe.count);else if(_e.isInstancedBufferGeometry){let fn=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,ot=Math.min(_e.instanceCount,fn);Ot.renderInstances(rt,sn,ot)}else Ot.render(rt,sn)};function Qs(k,ne,_e,ue){z!==null&&k.isNodeMaterial&&z.setObject(ue,k),Ke===!0&&fe.setState(k,_e,!1),k.transparent===!0&&k.side===en&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,ws(k,ne,ue),k.side=Oi,k.needsUpdate=!0,ws(k,ne,ue),k.side=en):ws(k,ne,ue)}this.compile=function(k,ne,_e=null){_e===null&&(_e=k),z!==null&&z.renderStart(k,ne,_e),E=xe.get(_e),E.init(ne),w.push(E),_e.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ne.layers)&&(E.pushLight(pe),pe.castShadow&&E.pushShadow(pe))}),k!==_e&&k.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ne.layers)&&(E.pushLight(pe),pe.castShadow&&E.pushShadow(pe))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),ze=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,ze),Ke===!0&&fe.setGlobalState(this.clippingPlanes,ne),z!==null&&Te.render(E.state.shadowsArray,_e,ne);let ue=new Set;return k.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;let Ge=pe.material;if(Ge)if(Array.isArray(Ge))for(let et=0;et<Ge.length;et++){let Xe=Ge[et];Qs(Xe,_e,ne,pe),ue.add(Xe)}else Qs(Ge,_e,ne,pe),ue.add(Ge)}),E=w.pop(),z!==null&&z.renderEnd(),ue},this.compileAsync=function(k,ne,_e=null){let ue=this.compile(k,ne,_e);return new Promise(pe=>{function Ge(){if(ue.forEach(function(et){let Je=Se.get(et).currentProgram;(Je===void 0||Je.isReady())&&ue.delete(et)}),ue.size===0){pe(k);return}setTimeout(Ge,10)}q.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let bs=null;function Qr(k){bs&&bs(k)}function er(){Ki.stop()}function tr(){Ki.start()}let Ki=new W0;Ki.setAnimationLoop(Qr),typeof self!="undefined"&&Ki.setContext(self),this.setAnimationLoop=function(k){bs=k,ke.setAnimationLoop(k),k===null?Ki.stop():Ki.start()},ke.addEventListener("sessionstart",er),ke.addEventListener("sessionend",tr),this.render=function(k,ne){if(ne!==void 0&&ne.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(k,ne);let _e=ke.enabled===!0&&ke.isPresenting===!0,ue=O!==null&&(b===null||_e)&&O.begin(C,b);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ne),ne=ke.getCamera()),k.isScene===!0&&k.onBeforeRender(C,k,ne,b),E=xe.get(k,w.length),E.init(ne),E.state.textureUnits=De.getTextureUnits(),w.push(E),Ve.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ne.isArrayCamera?Le.setFromArrayCamera(ne):j.setFromProjectionMatrix(Ve,oi,ne.reversedDepth),ze=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,ze),R=Ae.get(k,x.length),R.init(),x.push(R),this.info.render.frame++,ke.enabled===!0&&ke.isPresenting===!0){let et=C.xr.getDepthSensingMesh();et!==null&&nr(et,ne,-1/0,C.sortObjects)}nr(k,ne,0,C.sortObjects),R.finish(),z!==null&&z.updateLights(E.state.lightsArray),C.sortObjects===!0&&R.sort(Ce,Be),ce=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,ce&&V.addToRenderList(R,k),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&fe.beginShadows();let pe=E.state.shadowsArray;if(Te.render(pe,k,ne),Ke===!0&&fe.endShadows(),(ue&&O.hasRenderPass())===!1){let et=R.opaque,Xe=R.transmissive;if(E.setupLights(),ne.isArrayCamera){let Je=ne.cameras;if(Xe.length>0)for(let nt=0,yt=Je.length;nt<yt;nt++){let Ct=Je[nt];Ss(et,Xe,k,Ct)}ce&&V.render(k);for(let nt=0,yt=Je.length;nt<yt;nt++){let Ct=Je[nt];El(R,k,Ct,Ct.viewport)}}else Xe.length>0&&Ss(et,Xe,k,ne),ce&&V.render(k),El(R,k,ne)}b!==null&&G===0&&(De.updateMultisampleRenderTarget(b),De.updateRenderTargetMipmap(b)),ue&&O.end(C),k.isScene===!0&&k.onAfterRender(C,k,ne),Oe.resetDefaultState(),_=-1,L=null,w.pop(),w.length>0?(E=w[w.length-1],De.setTextureUnits(E.state.textureUnits),Ke===!0&&fe.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,z!==null&&z.renderEnd()};function nr(k,ne,_e,ue){if(k.visible===!1)return;if(k.layers.test(ne.layers)){if(k.isGroup)_e=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(ne);else if(k.isLight)E.pushLight(k),k.castShadow&&E.pushShadow(k);else if(k.isSprite){let et=ne.isArrayCamera?Le:j;if(!k.frustumCulled||k.intersectsFrustum(et)){ue&&Mt.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ve);let Xe=ge.update(k),Je=k.material;Je.visible&&R.push(k,Xe,Je,_e,Mt.z,null,ne)}}else if(k.isMesh||k.isLine||k.isPoints){let et=ne.isArrayCamera?Le:j;if(!k.frustumCulled||k.intersectsFrustum(et)){let Xe=ge.update(k),Je=k.material;if(ue&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Mt.copy(k.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Mt.copy(Xe.boundingSphere.center)),Mt.applyMatrix4(k.matrixWorld).applyMatrix4(Ve)),Array.isArray(Je)){let nt=Xe.groups;for(let yt=0,Ct=nt.length;yt<Ct;yt++){let rt=nt[yt],It=Je[rt.materialIndex];It&&It.visible&&R.push(k,Xe,It,_e,Mt.z,rt,ne)}}else Je.visible&&R.push(k,Xe,Je,_e,Mt.z,null,ne)}}}let Ge=k.children;for(let et=0,Xe=Ge.length;et<Xe;et++)nr(Ge[et],ne,_e,ue)}function El(k,ne,_e,ue){let{opaque:pe,transmissive:Ge,transparent:et}=k;E.setupLightsView(_e),Ke===!0&&fe.setGlobalState(C.clippingPlanes,_e),ue&&re.viewport(A.copy(ue)),pe.length>0&&ir(pe,ne,_e),Ge.length>0&&ir(Ge,ne,_e),et.length>0&&ir(et,ne,_e),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Ss(k,ne,_e,ue){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ue.id]===void 0){let rt=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ue.id]=new ni(1,1,{generateMipmaps:!0,type:rt?Ti:$n,minFilter:hi,samples:Math.max(4,se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Ge=E.state.transmissionRenderTarget[ue.id],et=ue.viewport||A;Ge.setSize(et.z*C.transmissionResolutionScale,et.w*C.transmissionResolutionScale);let Xe=C.getRenderTarget(),Je=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Ge),C.getClearColor(W),J=C.getClearAlpha(),J<1&&C.setClearColor(16777215,.5),C.clear(),ce&&V.render(_e);let yt=C.toneMapping;C.toneMapping=Ui;let Ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),E.setupLightsView(ue),Ke===!0&&fe.setGlobalState(C.clippingPlanes,ue),ir(k,_e,ue),De.updateMultisampleRenderTarget(Ge),De.updateRenderTargetMipmap(Ge),q.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let It=0,sn=ne.length;It<sn;It++){let Wt=ne[It],{object:Ot,geometry:fn,material:ot,group:Mn}=Wt;if(ot.side===en&&Ot.layers.test(ue.layers)){let Ft=ot.side;ot.side=vn,ot.needsUpdate=!0,Ii(Ot,_e,ue,fn,ot,Mn),ot.side=Ft,ot.needsUpdate=!0,rt=!0}}rt===!0&&(De.updateMultisampleRenderTarget(Ge),De.updateRenderTargetMipmap(Ge))}C.setRenderTarget(Xe,Je,nt),C.setClearColor(W,J),Ct!==void 0&&(ue.viewport=Ct),C.toneMapping=yt}function ir(k,ne,_e){let ue=ne.isScene===!0?ne.overrideMaterial:null;for(let pe=0,Ge=k.length;pe<Ge;pe++){let et=k[pe],{object:Xe,geometry:Je,group:nt}=et,yt=et.material;yt.allowOverride===!0&&ue!==null&&(yt=ue),Xe.layers.test(_e.layers)&&Ii(Xe,ne,_e,Je,yt,nt)}}function Ii(k,ne,_e,ue,pe,Ge){z!==null&&pe.isNodeMaterial&&z.setObject(k,pe),k.onBeforeRender(C,ne,_e,ue,pe,Ge),k.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),pe.onBeforeRender(C,ne,_e,ue,k,Ge),pe.transparent===!0&&pe.side===en&&pe.forceSinglePass===!1?(pe.side=vn,pe.needsUpdate=!0,C.renderBufferDirect(_e,ne,ue,pe,k,Ge),pe.side=Oi,pe.needsUpdate=!0,C.renderBufferDirect(_e,ne,ue,pe,k,Ge),pe.side=en):C.renderBufferDirect(_e,ne,ue,pe,k,Ge),k.onAfterRender(C,ne,_e,ue,pe,Ge)}function Tl(k){let ne=0;for(let _e of k)_e.texture!==null&&ne++;return ne}function ws(k,ne,_e){ne.isScene!==!0&&(ne=be);let ue=Se.get(k),pe=E.state.lights,Ge=E.state.shadowsArray,et=pe.state.version,Xe=me.getParameters(k,pe.state,Ge,ne,_e,E.state.lightProbeGridArray),Je=me.getProgramCacheKey(Xe),nt=ue.programs;ue.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?ne.environment:null,ue.fog=ne.fog;let yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;ue.envMap=I.get(k.envMap||ue.environment,yt),ue.envMapRotation=ue.environment!==null&&k.envMap===null?ne.environmentRotation:k.envMapRotation,nt===void 0&&(k.addEventListener("dispose",Nt),nt=new Map,ue.programs=nt,ue.programVariants=new Map);let Ct=nt.get(Je);if(Ct!==void 0){if(ue.currentProgram===Ct&&ue.lightsStateVersion===et)return Al(k,Xe),Ct}else Xe.uniforms=me.getUniforms(k),z!==null&&k.isNodeMaterial&&z.build(k,_e,Xe),k.onBeforeCompile(Xe,C),Ct=me.acquireProgram(Xe,Je),nt.set(Je,Ct),ue.uniforms=Xe.uniforms;let rt=ue.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(rt.clippingPlanes=fe.uniform),Al(k,Xe),ue.needsLights=Zi(k),ue.lightsStateVersion=et,ue.needsLights&&(rt.ambientLightColor.value=pe.state.ambient,rt.lightProbe.value=pe.state.probe,rt.sunLights.value=pe.state.sun,rt.sunLightShadows.value=pe.state.sunShadow,rt.directionalLights.value=pe.state.directional,rt.directionalLightShadows.value=pe.state.directionalShadow,rt.spotLights.value=pe.state.spot,rt.spotLightShadows.value=pe.state.spotShadow,rt.rectAreaLights.value=pe.state.rectArea,rt.ltc_1.value=pe.state.rectAreaLTC1,rt.ltc_2.value=pe.state.rectAreaLTC2,rt.pointLights.value=pe.state.point,rt.pointLightShadows.value=pe.state.pointShadow,rt.hemisphereLights.value=pe.state.hemi,rt.sunShadowMatrix.value=pe.state.sunShadowMatrix,rt.sunShadowCascade.value=pe.state.sunShadowCascade,rt.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,rt.spotLightMatrix.value=pe.state.spotLightMatrix,rt.spotLightMap.value=pe.state.spotLightMap,rt.pointShadowMatrix.value=pe.state.pointShadowMatrix),ue.numLightProbeGrids=Tl(E.state.lightProbeGridArray),ue.currentProgram=Ct,ue.uniformsList=null,Ct}function eo(k,ne,_e,ue,pe){let Ge=Se.get(k),et=Ge.currentProgram.id+","+ue+","+pe,Xe=Ge.programVariants.get(et);return Xe===void 0?(Xe=ws(k,ne,_e),Ge.programVariants.set(et,Xe)):(Ge.currentProgram=Xe,Ge.uniformsList=null,Ge.outputColorSpace=ue,Ge.toneMapping=pe),Xe}function Es(k){if(k.uniformsList===null){let ne=k.currentProgram.getUniforms();k.uniformsList=Ko.seqWithValue(ne.seq,k.uniforms)}return k.uniformsList}function Al(k,ne){let _e=Se.get(k);_e.outputColorSpace=ne.outputColorSpace,_e.batching=ne.batching,_e.batchingColor=ne.batchingColor,_e.instancing=ne.instancing,_e.instancingColor=ne.instancingColor,_e.instancingMorph=ne.instancingMorph,_e.skinning=ne.skinning,_e.morphTargets=ne.morphTargets,_e.morphNormals=ne.morphNormals,_e.morphColors=ne.morphColors,_e.morphTargetsCount=ne.morphTargetsCount,_e.numClippingPlanes=ne.numClippingPlanes,_e.numIntersection=ne.numClipIntersection,_e.vertexAlphas=ne.vertexAlphas,_e.vertexTangents=ne.vertexTangents,_e.toneMapping=ne.toneMapping}function to(k,ne,_e,ue,pe){ne.isScene!==!0&&(ne=be),De.resetTextureUnits();let Ge=ne.fog,et=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ne.environment:null,Xe=b===null?C.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rt.workingColorSpace,Je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,nt=I.get(ue.envMap||et,Je),yt=ue.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,Ct=!!_e.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),rt=!!_e.morphAttributes.position,It=!!_e.morphAttributes.normal,sn=!!_e.morphAttributes.color,Wt=Ui;ue.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Wt=C.toneMapping);let Ot=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,fn=Ot!==void 0?Ot.length:0,ot=Se.get(ue),Mn=E.state.lights;if(Ke===!0&&(ze===!0||k!==L)){let Kt=k===L&&ue.id===_;fe.setState(ue,k,Kt)}let Ft=!1,Ji=!1;ue.version===ot.__version?ot.needsLights&&ot.lightsStateVersion!==Mn.state.version||pe.isBatchedMesh&&ot.batching===!1||!pe.isBatchedMesh&&ot.batching===!0||pe.isBatchedMesh&&ot.batchingColor===!0&&pe._colorsTexture===null||pe.isBatchedMesh&&ot.batchingColor===!1&&pe._colorsTexture!==null||pe.isInstancedMesh&&ot.instancing===!1||!pe.isInstancedMesh&&ot.instancing===!0||pe.isSkinnedMesh&&ot.skinning===!1||!pe.isSkinnedMesh&&ot.skinning===!0||pe.isInstancedMesh&&ot.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&ot.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&ot.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&ot.instancingMorph===!1&&pe.morphTexture!==null||ot.envMap!==nt||ue.fog===!0&&ot.fog!==Ge||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==fe.numPlanes||ot.numIntersection!==fe.numIntersection)||ot.vertexAlphas!==yt||ot.vertexTangents!==Ct||ot.morphTargets!==rt||ot.morphNormals!==It||ot.morphColors!==sn||ot.morphTargetsCount!==fn||ot.numLightProbeGrids!==Tl(E.state.lightProbeGridArray)?Ft=!0:(ot.outputColorSpace!==Xe||ot.toneMapping!==Wt)&&(Ji=!0):(Ft=!0,ot.__version=ue.version);let Ut=ot.currentProgram;(Ft===!0||Ji===!0)&&(Ut=Ji===!0?eo(ue,ne,pe,Xe,Wt):ws(ue,ne,pe),z&&ue.isNodeMaterial&&z.onUpdateProgram(ue,Ut,ot));let pi=!1,mi=!1,Pi=!1,kt=Ut.getUniforms(),Jt=ot.uniforms;if(re.useProgram(Ut.program)&&(pi=!0,mi=!0,Pi=!0),ue.id!==_&&(_=ue.id,mi=!0),pi||L!==k){re.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),kt.setValue(F,"projectionMatrix",k.projectionMatrix),kt.setValue(F,"viewMatrix",k.matrixWorldInverse);let dn=kt.map.cameraPosition;dn!==void 0&&dn.setValue(F,_t.setFromMatrixPosition(k.matrixWorld)),se.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&kt.setValue(F,"isOrthographic",k.isOrthographicCamera===!0),L!==k&&(L=k,mi=!0,Pi=!0)}if(ot.needsLights&&(Mn.state.sunShadowMap.length>0&&kt.setValue(F,"sunShadowMap",Mn.state.sunShadowMap,De),Mn.state.directionalShadowMap.length>0&&kt.setValue(F,"directionalShadowMap",Mn.state.directionalShadowMap,De),Mn.state.spotShadowMap.length>0&&kt.setValue(F,"spotShadowMap",Mn.state.spotShadowMap,De),Mn.state.pointShadowMap.length>0&&kt.setValue(F,"pointShadowMap",Mn.state.pointShadowMap,De)),pe.isSkinnedMesh){kt.setOptional(F,pe,"bindMatrix"),kt.setOptional(F,pe,"bindMatrixInverse");let Kt=pe.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),kt.setValue(F,"boneTexture",Kt.boneTexture,De))}pe.isBatchedMesh&&(kt.setOptional(F,pe,"batchingTexture"),kt.setValue(F,"batchingTexture",pe._matricesTexture,De),kt.setOptional(F,pe,"batchingIdTexture"),kt.setValue(F,"batchingIdTexture",pe._indirectTexture,De),kt.setOptional(F,pe,"batchingColorTexture"),pe._colorsTexture!==null&&kt.setValue(F,"batchingColorTexture",pe._colorsTexture,De));let Nn=_e.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ee.update(pe,_e,Ut),(mi||ot.receiveShadow!==pe.receiveShadow)&&(ot.receiveShadow=pe.receiveShadow,kt.setValue(F,"receiveShadow",pe.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ne.environment!==null&&(Jt.envMapIntensity.value=ne.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=GS()),mi){if(kt.setValue(F,"toneMappingExposure",C.toneMappingExposure),ot.needsLights&&Ts(Jt,Pi),Ge&&ue.fog===!0&&we.refreshFogUniforms(Jt,Ge),we.refreshMaterialUniforms(Jt,ue,ae,ie,E.state.transmissionRenderTarget[k.id]),ot.needsLights&&ot.numLightProbeGrids>0){let Kt=v,dn=0;for(let gi of E.state.lightProbeGridArray)gi.texture!==null&&(Kt.textures[dn]=gi.texture,Kt.min[dn]=gi.boundingBox.min,Kt.max[dn]=gi.boundingBox.max,Kt.resolution[dn]=gi.resolution,dn++);for(let gi in Kt)Kt[gi].length=dn;Jt.probesSH.value=Kt.textures,Jt.probesMin.value=Kt.min,Jt.probesMax.value=Kt.max,Jt.probesResolution.value=Kt.resolution}Ko.upload(F,Es(ot),Jt,De)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ko.upload(F,Es(ot),Jt,De),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&kt.setValue(F,"center",pe.center),kt.setValue(F,"modelViewMatrix",pe.modelViewMatrix),kt.setValue(F,"normalMatrix",pe.normalMatrix),kt.setValue(F,"modelMatrix",pe.matrixWorld),ue.uniformsGroups!==void 0){let Kt=ue.uniformsGroups;for(let dn=0,gi=Kt.length;dn<gi;dn++){let Rl=Kt[dn];Ye.update(Rl,Ut),Ye.bind(Rl,Ut)}}return Ut}function Ts(k,ne){k.ambientLightColor.needsUpdate=ne,k.lightProbe.needsUpdate=ne,k.sunLights.needsUpdate=ne,k.sunLightShadows.needsUpdate=ne,k.directionalLights.needsUpdate=ne,k.directionalLightShadows.needsUpdate=ne,k.pointLights.needsUpdate=ne,k.pointLightShadows.needsUpdate=ne,k.spotLights.needsUpdate=ne,k.spotLightShadows.needsUpdate=ne,k.rectAreaLights.needsUpdate=ne,k.hemisphereLights.needsUpdate=ne}function Zi(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(k,ne,_e){let ue=Se.get(k);ue.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Se.get(k.texture).__webglTexture=ne,Se.get(k.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:_e,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,ne){let _e=Se.get(k);_e.__webglFramebuffer=ne,_e.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(k,ne=0,_e=0){b=k,H=ne,G=_e;let ue=null,pe=!1,Ge=!1;if(k){let Xe=Se.get(k);if(Xe.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(F.FRAMEBUFFER,Xe.__webglFramebuffer),A.copy(k.viewport),D.copy(k.scissor),X=k.scissorTest,re.viewport(A),re.scissor(D),re.setScissorTest(X),_=-1;return}else if(Xe.__webglFramebuffer===void 0)De.setupRenderTarget(k);else if(Xe.__hasExternalTextures)De.rebindTextures(k,Se.get(k.texture).__webglTexture,Se.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let yt=k.depthTexture;if(Xe.__boundDepthTexture!==yt){if(yt!==null&&Se.has(yt)&&(k.width!==yt.image.width||k.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(k)}}let Je=k.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ge=!0);let nt=Se.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(nt[ne])?ue=nt[ne][_e]:ue=nt[ne],pe=!0):k.samples>0&&De.useMultisampledRTT(k)===!1?ue=Se.get(k).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[_e]:ue=nt,A.copy(k.viewport),D.copy(k.scissor),X=k.scissorTest}else A.copy(he).multiplyScalar(ae).floor(),D.copy(He).multiplyScalar(ae).floor(),X=le;if(_e!==0&&(ue=U),re.bindFramebuffer(F.FRAMEBUFFER,ue)&&re.drawBuffers(k,ue),re.viewport(A),re.scissor(D),re.setScissorTest(X),pe){let Xe=Se.get(k.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Xe.__webglTexture,_e)}else if(Ge){let Xe=ne;for(let Je=0;Je<k.textures.length;Je++){let nt=Se.get(k.textures[Je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Je,nt.__webglTexture,_e,Xe)}}else if(k!==null&&_e!==0){let Xe=Se.get(k.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,_e)}_=-1};function sr(k){let ne=Se.get(k);return(ne.__readFormat!==k.format||ne.__readType!==k.type)&&(ne.__readFormat=k.format,ne.__readType=k.type,ne.__formatReadable=se.textureFormatReadable(k.format),ne.__typeReadable=se.textureTypeReadable(k.type)),ne}this.readRenderTargetPixels=function(k,ne,_e,ue,pe,Ge,et,Xe=0){if(!(k&&k.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Se.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&et!==void 0&&(Je=Je[et],Array.isArray(Je)&&(Je=Je[0])),Je){re.bindFramebuffer(F.FRAMEBUFFER,Je);try{let nt=k.textures[Xe],yt=nt.format,Ct=nt.type;k.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe);let rt=sr(nt);if(rt.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(rt.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=k.width-ue&&_e>=0&&_e<=k.height-pe&&F.readPixels(ne,_e,ue,pe,ve.convert(yt),ve.convert(Ct),Ge)}finally{let nt=b!==null?Se.get(b).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(k,ne,_e,ue,pe,Ge,et,Xe=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Se.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&et!==void 0&&(Je=Je[et],Array.isArray(Je)&&(Je=Je[0])),Je)if(ne>=0&&ne<=k.width-ue&&_e>=0&&_e<=k.height-pe){re.bindFramebuffer(F.FRAMEBUFFER,Je);let nt=k.textures[Xe],yt=nt.format,Ct=nt.type;k.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe);let rt=sr(nt);if(rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.bufferData(F.PIXEL_PACK_BUFFER,Ge.byteLength,F.STREAM_READ),F.readPixels(ne,_e,ue,pe,ve.convert(yt),ve.convert(Ct),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let sn=b!==null?Se.get(b).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,sn);let Wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await g0(F,Wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(It),F.deleteSync(Wt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,ne=null,_e=0){let ue=Math.pow(2,-_e),pe=Math.floor(k.image.width*ue),Ge=Math.floor(k.image.height*ue),et=ne!==null?ne.x:0,Xe=ne!==null?ne.y:0;De.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,_e,0,0,et,Xe,pe,Ge),re.unbindTexture()},this.copyTextureToTexture=function(k,ne,_e=null,ue=null,pe=0,Ge=0){let et,Xe,Je,nt,yt,Ct,rt,It,sn,Wt=k.isCompressedTexture?k.mipmaps[Ge]:k.image;if(_e!==null)et=_e.max.x-_e.min.x,Xe=_e.max.y-_e.min.y,Je=_e.isBox3?_e.max.z-_e.min.z:1,nt=_e.min.x,yt=_e.min.y,Ct=_e.isBox3?_e.min.z:0;else{let kt=Math.pow(2,-pe);et=Math.floor(Wt.width*kt),Xe=Math.floor(Wt.height*kt),k.isDataArrayTexture?Je=Wt.depth:k.isData3DTexture?Je=Math.floor(Wt.depth*kt):Je=1,nt=0,yt=0,Ct=0}ue!==null?(rt=ue.x,It=ue.y,sn=ue.z):(rt=0,It=0,sn=0);let Ot=ve.convert(ne.format),fn=ve.convert(ne.type),ot;ne.isData3DTexture?(De.setTexture3D(ne,0),ot=F.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(De.setTexture2DArray(ne,0),ot=F.TEXTURE_2D_ARRAY):(De.setTexture2D(ne,0),ot=F.TEXTURE_2D),re.activeTexture(F.TEXTURE0),re.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ne.flipY),re.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),re.pixelStorei(F.UNPACK_ALIGNMENT,ne.unpackAlignment);let Mn=re.getParameter(F.UNPACK_ROW_LENGTH),Ft=re.getParameter(F.UNPACK_IMAGE_HEIGHT),Ji=re.getParameter(F.UNPACK_SKIP_PIXELS),Ut=re.getParameter(F.UNPACK_SKIP_ROWS),pi=re.getParameter(F.UNPACK_SKIP_IMAGES);re.pixelStorei(F.UNPACK_ROW_LENGTH,Wt.width),re.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Wt.height),re.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),re.pixelStorei(F.UNPACK_SKIP_ROWS,yt),re.pixelStorei(F.UNPACK_SKIP_IMAGES,Ct);let mi=k.isDataArrayTexture||k.isData3DTexture,Pi=ne.isDataArrayTexture||ne.isData3DTexture;if(k.isDepthTexture){let kt=Se.get(k),Jt=Se.get(ne),Nn=Se.get(kt.__renderTarget),Kt=Se.get(Jt.__renderTarget);re.bindFramebuffer(F.READ_FRAMEBUFFER,Nn.__webglFramebuffer),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let dn=0;dn<Je;dn++)mi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,pe,Ct+dn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(ne).__webglTexture,Ge,sn+dn)),F.blitFramebuffer(nt,yt,nt+et,yt+Xe,rt,It,rt+et,It+Xe,F.DEPTH_BUFFER_BIT,F.NEAREST);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(pe!==0||k.isRenderTargetTexture||Se.has(k)){let kt=Se.get(k),Jt=Se.get(ne);re.bindFramebuffer(F.READ_FRAMEBUFFER,B),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Y);for(let Nn=0;Nn<Je;Nn++)mi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.__webglTexture,pe,Ct+Nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,pe),Pi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,Ge,sn+Nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,Ge),pe!==0?F.blitFramebuffer(nt,yt,nt+et,yt+Xe,rt,It,rt+et,It+Xe,F.COLOR_BUFFER_BIT,F.NEAREST):Pi?F.copyTexSubImage3D(ot,Ge,rt,It,sn+Nn,nt,yt,et,Xe):F.copyTexSubImage2D(ot,Ge,rt,It,nt,yt,et,Xe);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pi?k.isDataTexture||k.isData3DTexture?F.texSubImage3D(ot,Ge,rt,It,sn,et,Xe,Je,Ot,fn,Wt.data):ne.isCompressedArrayTexture?F.compressedTexSubImage3D(ot,Ge,rt,It,sn,et,Xe,Je,Ot,Wt.data):F.texSubImage3D(ot,Ge,rt,It,sn,et,Xe,Je,Ot,fn,Wt):k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ge,rt,It,et,Xe,Ot,fn,Wt.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ge,rt,It,Wt.width,Wt.height,Ot,Wt.data):F.texSubImage2D(F.TEXTURE_2D,Ge,rt,It,et,Xe,Ot,fn,Wt);re.pixelStorei(F.UNPACK_ROW_LENGTH,Mn),re.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft),re.pixelStorei(F.UNPACK_SKIP_PIXELS,Ji),re.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),re.pixelStorei(F.UNPACK_SKIP_IMAGES,pi),Ge===0&&ne.generateMipmaps===!0&&ne.mipmapsAutoUpdate===!0&&F.generateMipmap(ot),re.unbindTexture()},this.initRenderTarget=function(k){Se.get(k).__webglFramebuffer===void 0&&De.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?De.setTextureCube(k,0):k.isData3DTexture?De.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?De.setTexture2DArray(k,0):De.setTexture2D(k,0),re.unbindTexture()},this.resetState=function(){H=0,G=0,b=null,re.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var $o=At;$o.__vkwToon||($o.__vkwToon=!0,$o.lights_lambert_pars_fragment=$o.lights_lambert_pars_fragment.replace("float dotNL = saturate( dot( geometryNormal, directLight.direction ) );",`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	#ifdef VKW_TOON
	dotNL = mix( 0.3, 1.0, smoothstep( 0.1, 0.2, dotNL ) );
	#endif`),$o.dithering_fragment=`#ifdef VKW_TOON
	{ float vkwL = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) ); gl_FragColor.rgb = max( vec3( 0.0 ), mix( vec3( vkwL ), gl_FragColor.rgb, 1.22 ) ); }
#endif
`+$o.dithering_fragment);var ll=new Map;function zh(s){let e=s.toFixed(4);if(ll.has(e))return ll.get(e);let t=new jt({color:"#21142c",side:vn,fog:!0});return t.name="vkw-outline",t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
	transformed += normalize( normal ) * ${s.toFixed(4)};`)},t.customProgramCacheKey=()=>"vkw-outline-"+e,ll.set(e,t),t}function tg(){for(let s of ll.values())s.dispose();ll.clear()}function od(s,e){let t=0;return s.traverse(n=>{if(n.material)for(let i of Array.isArray(n.material)?n.material:[n.material])!(i.isMeshLambertMaterial||i.isMeshBasicMaterial)||i.name==="vkw-outline"||!!(i.defines&&"VKW_TOON"in i.defines)===e||(i.defines={...i.defines||{}},e?i.defines.VKW_TOON="":delete i.defines.VKW_TOON,i.needsUpdate=!0,t++)}),t}function cl(s,e,t){let n=[];s.traverse(i=>{i.isMesh&&!i.userData.outline&&!i.userData.hasOutline&&(!t||t(i))&&n.push(i)});for(let i of n){let r;i.isSkinnedMesh?(r=new Ar(i.geometry,zh(e)),r.bind(i.skeleton,i.bindMatrix),r.bindMode=i.bindMode,i.boundingSphere&&(r.boundingSphere=i.boundingSphere)):r=new St(i.geometry,zh(e)),r.position.copy(i.position),r.quaternion.copy(i.quaternion),r.scale.copy(i.scale),r.matrixAutoUpdate=i.matrixAutoUpdate,i.matrixAutoUpdate||r.matrix.copy(i.matrix),r.frustumCulled=i.frustumCulled,r.castShadow=!1,r.receiveShadow=!1,r.renderOrder=i.renderOrder,r.userData.outline=!0,i.userData.hasOutline=r,i.parent.add(r)}}function ad(s){let e=[];s.traverse(t=>{t.userData.outline&&e.push(t),t.userData.hasOutline&&(t.userData.hasOutline=null)});for(let t of e)t.parent&&t.parent.remove(t)}var _s={};Bp(_s,{GROUPS:()=>Qo,allMaterials:()=>o1,altKitMaterial:()=>Gd,clips:()=>Hd,get:()=>jn,getBase:()=>e1,groupLoaded:()=>Wh,has:()=>Hn,load:()=>hg,loadGroups:()=>qr,material:()=>Ud,prop:()=>Tn,releaseGPU:()=>Vd,setBase:()=>Vh,tinted:()=>ea,villagerTinted:()=>Bd});function kh(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Pt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ng(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let p=ng(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function ng(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Tt(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let y=h.getComponent(f,p);a.setComponent(f+u,p,y)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function ld(s,e){if(e===Pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qo||e===tl){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===qo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Fh(s){let e=new Map,t=new Map,n=s.clone();return ig(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ig(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ig(s.children[n],e.children[n],t)}var Oh=class extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Uh(t,Lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uh(t,Lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);o=gs.resolveURL(l,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Uo(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===lg){try{o[Lt.KHR_BINARY_GLTF]=new Id(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Lt.KHR_MATERIALS_UNLIT:o[u]=new dd;break;case Lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Pd(r,this.dracoLoader);break;case Lt.KHR_TEXTURE_TRANSFORM:o[u]=new Ld;break;case Lt.KHR_MESH_QUANTIZATION:o[u]=new Dd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function WS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function tn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fd=class{constructor(e){this.parser=e,this.name=Lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],On);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ci(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zr(h),l.distance=u;break;case"spot":l=new Va(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},dd=class{constructor(){this.name=Lt.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},pd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pt(r,r)}return Promise.all(i)}},gd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},xd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},yd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},_d=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Md=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],On),Promise.all(i)}},bd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sd=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},wd=class{constructor(e){this.parser=e,this.name=Lt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ed=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=tn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Td=class{constructor(e){this.parser=e,this.name=Lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ad=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Rd=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Uh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Cd=class{constructor(e){this.name=Lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==fi.TRIANGLES&&l.mode!==fi.TRIANGLE_STRIP&&l.mode!==fi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let y=new at,m=new K,g=new Yt,S=new K(1,1,1),M=new Rr(p.geometry,p.material,f);for(let R=0;R<f;R++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,R),c.SCALE&&S.fromBufferAttribute(c.SCALE,R),M.setMatrixAt(R,y.compose(m,g,S));let v=null;for(let R in c)if(R==="_COLOR_0"){let E=c[R];M.instanceColor=new Un(E.array,E.itemSize,E.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(v===null){let x=M.geometry;v=new Pt,v.name=x.name;for(let w in x.attributes)v.setAttribute(w,x.attributes[w]);for(let w in x.morphAttributes)v.morphAttributes[w]=x.morphAttributes[w];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let w of x.groups)v.addGroup(w.start,w.count,w.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),M.geometry=v}let E=c[R];v.setAttribute(R,new Un(E.array,E.itemSize,E.normalized))}Zt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},lg="glTF",hl=12,sg={JSON:1313821514,BIN:5130562},Id=class{constructor(e){this.name=Lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,hl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-hl,r=new DataView(e,hl),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===sg.JSON){let l=new Uint8Array(e,hl+o,a);this.content=n.decode(l)}else if(c===sg.BIN){let l=hl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=zd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=zd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=jo[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let y=d.attributes[p],m=c[p];m!==void 0&&(y.normalized=m)}u(d)},a,l,On,f)})})}},Ld=class{constructor(){this.name=Lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Dd=class{constructor(){this.name=Lt.KHR_MESH_QUANTIZATION}},Bh=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,y=p-l,m=-2*d+3*f,g=d-f,S=1-m,M=g-f+u;for(let v=0;v!==a;v++){let R=o[y+v+a],E=o[y+v+c]*h,x=o[p+v+a],w=o[p+v]*h;r[v]=S*R+M*E+m*x+g*w}return r}},XS=new Yt,Nd=class extends Bh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return XS.fromArray(r).normalize().toArray(r),r}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rg={9728:ln,9729:gn,9984:Xc,9985:Wo,9986:Gr,9987:hi},og={33071:qn,33648:Ao,10497:Ds},cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qS={CUBICSPLINE:void 0,LINEAR:br,STEP:Mr},hd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function YS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),s.DefaultMaterial}function Xr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ZS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JS(s){let e,t=s.extensions&&s.extensions[Lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ud(t.attributes):e=s.indices+":"+ud(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ud(s.targets[n]);return e}function ud(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function kd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $S(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jS=new at,Fd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new Lr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Xa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xr(r,a,i),Vi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Lt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(gs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=cd[i.type],a=jo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Tt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=cd[i.type],l=jo[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,y,m;if(d&&d!==u){let g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(S);M||(y=new l(a,g*d,i.count*d/h),M=new Er(y,d/h),t.cache.add(S,M)),m=new Ns(M,c,f%d/h,p)}else a===null?y=new l(i.count*c):y=new l(a,f,i.count*c),m=new Tt(y,c,p);if(i.sparse!==void 0){let g=cd.SCALAR,S=jo[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new S(o[1],M,i.sparse.count*g),E=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,w=R.length;x<w;x++){let O=R[x];if(m.setX(O,E[x*c]),c>=2&&m.setY(O,E[x*c+1]),c>=3&&m.setZ(O,E[x*c+2]),c>=4&&m.setW(O,E[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=rg[f.magFilter]||gn,h.minFilter=rg[f.minFilter]||hi,h.wrapS=og[f.wrapS]||Ds,h.wrapT=og[f.wrapT]||Ds,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ln&&h.minFilter!==gn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let y=d;t.isImageBitmapLoader===!0&&(y=function(m){let g=new xn(m);g.needsUpdate=!0,d(g)}),t.load(gs.resolveURL(f,r.path),y,void 0,p)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),Vi(f,o),f.userData.mimeType=o.mimeType||$S(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Lt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fo,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ko,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Pr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Lt.KHR_MATERIALS_UNLIT]){let u=i[Lt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);let h=r.alphaMode||hd.OPAQUE;if(h===hd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jt){let u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],On)}return r.emissiveTexture!==void 0&&o!==jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Xr(i,u,r),u})}createUniqueName(e){let t=qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ag(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=JS(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Lt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ag(new Pt,l,t),l.mode===fi.TRIANGLE_STRIP?f=f.then(d=>ld(d,tl)):l.mode===fi.TRIANGLE_FAN&&(f=f.then(d=>ld(d,qo))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?YS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let y=h[d],m=o[d],g,S=l[d];if(m.mode===fi.TRIANGLES||m.mode===fi.TRIANGLE_STRIP||m.mode===fi.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Ar(y,S):new St(y,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===fi.LINES)g=new Da(y,S);else if(m.mode===fi.LINE_STRIP)g=new Cr(y,S);else if(m.mode===fi.LINE_LOOP)g=new Na(y,S);else if(m.mode===fi.POINTS)g=new bi(y,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ZS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Vi(g,r),m.extensions&&Xr(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Xr(i,u[0],r),u[0];let f=new Gt;r.extensions&&Xr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(Yo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new at;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pa(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],y=d.target,m=y.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(p),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],y=u[3],m=u[4],g=[];for(let M=0,v=f.length;M<v;M++){let R=f[M],E=d[M],x=p[M],w=y[M],O=m[M];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let C=n._createAnimationTracks(R,E,x,w,O);if(C)for(let N=0;N<C.length;N++)g.push(C[N])}let S=new wi(r,void 0,g);return Vi(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,jS)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new K().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new No:l.length>1?h=new Gt:l.length===1?h=l[0]:h=new Zt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Vi(h,r),r.extensions&&Xr(n,h,r),r.matrix!==void 0){let u=new at;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),Vi(r,n),n.extensions&&Xr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(Fh(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Ln||f instanceof xn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Hs[r.path]===Hs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Hs[r.path]){case Hs.weights:h=ds;break;case Hs.rotation:h=ps;break;case Hs.translation:case Hs.scale:h=Os;break;default:n.itemSize===1?h=ds:h=Os;break}let u=i.interpolation!==void 0?qS[i.interpolation]:br,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let y=new h(c[d]+"."+Hs[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=kd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ps?Nd:Bh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function QS(s,e,t){let n=e.attributes,i=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new K(c[0],c[1],c[2]),new K(l[0],l[1],l[2])),a.normalized){let h=kd(jo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new K,c=new K;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let y=kd(jo[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ag(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=zd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Rt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Vi(s,e),QS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KS(s,e.targets,t):s})}ai.enabled=!0;var Gh="assets/models/";function Vh(s){Gh=s.endsWith("/")?s:s+"/"}function e1(){return Gh}var Qo={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},ys=new Map,ul=new Map,di=new Map,Od=null,Wi=null;function t1(){return Od||(Od=new Oh),Od}function cg(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),di.has(t))return di.get(t);let n;return e==="window"?n=new jt({color:16777215,name:e,fog:!0}):(n=new hn({name:e,map:s.map||null,color:s.color?s.color.clone():new Ue(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Bt,n.map.anisotropy=2),di.set(t,n),n}function Ud(s){return di.get(s)}function n1(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(cg);else{let i=t.material;t.material=cg(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&s1(e)}function i1(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let c=a.getImageData(0,0,i.width,i.height).data,l=s.material.map.flipY;for(let h=0;h<t;h++){let u=r.getX(h)%1,f=r.getY(h)%1;u<0&&(u+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(u*i.width)),p=Math.min(i.height-1,Math.floor((l?1-f:f)*i.height));n[h]=Math.max(.05,c[(p*i.width+d)*4]/255)}}catch{}return n}function s1(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(l=>{let h=l.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||h.deleteAttribute(f);let u=l.material.name==="cloth";return h.setAttribute("aCloth",new Tt(u?i1(l):new Float32Array(h.attributes.position.count),1)),h}),c=kh(a,!1);if(!c)return;r.geometry.dispose(),r.geometry=c,r.userData.clothMerged=n.length>0;for(let l of o)l.parent.remove(l),l.geometry.dispose()}catch{}}var Hh=new Map;function Bd(s){if(Hh.has(s))return Hh.get(s);let e=di.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new Ue(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",Hh.set(s,t),t}function hg(s,e){if(ys.has(s))return e&&e(),Promise.resolve(ys.get(s));if(ul.has(s))return ul.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{t1().load(Gh+s,r=>{try{n1(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}ys.set(s,r),ul.delete(s),n(r)},void 0,r=>{ul.delete(s),i(r)})});return ul.set(s,t),t.then(n=>(e&&e(),n))}function qr(s,e){let t=[];for(let r of s)for(let o of Qo[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>hg(r,()=>{n++,e&&e(n,i)})))}function Hn(s){return ys.has(s)}function jn(s){return ys.get(s)}function Wh(s){return Qo[s].every(e=>ys.has(e))}var r1={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function Tn(s,e){let t=ys.get(r1[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function Hd(){let s=ys.get("characters/villager-anims.glb");return s?s.animations:[]}var fl=new Map;function ea(s,e,t){let n=s+"|"+e+(t||"");if(fl.has(n))return fl.get(n);let i=di.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,fl.set(n,r),r}function Gd(){if(di.has("fantasy-town-b"))return di.get("fantasy-town-b");let s=di.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",Wi||(Wi=new Lr().load(Gh+"textures/fantasy-town-b.png"),Wi.flipY=!1,Wi.colorSpace=Bt,Wi.anisotropy=2,s.map&&(Wi.wrapS=s.map.wrapS,Wi.wrapT=s.map.wrapT)),e.map=Wi,di.set("fantasy-town-b",e),e}function o1(){return[...di.values(),...fl.values()]}function Vd(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of ys.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of di.values())e(t),t.map&&e(t.map);for(let t of fl.values())e(t);for(let t of Hh.values())e(t);Wi&&e(Wi)}var Sn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],a1=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],Wd=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],Xd=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k","Takke","\xD6rg\xFC takke","Fes","Yemeni","Ke\xE7e k\xFClah","Kalpak","Ponponlu bere","\xC7i\xE7ek tac\u0131","A\u015F\xE7\u0131 ba\u015Fl\u0131\u011F\u0131","Ta\xE7"],qd=["Yok","B\u0131y\u0131k","G\xF6zl\xFCk","Sakal","Atk\u0131","Papyon"],l1=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],c1=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],ug=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],fg=Sn.map((s,e)=>({id:e,hex:s,name:a1[e]})),dg=Xd.map((s,e)=>({id:e,name:s,node:Wd[e]||null})),pg=qd.map((s,e)=>({id:e,name:s})),mg=l1.map((s,e)=>({id:e,name:s,desc:c1[e]}));var gg={vampir:!0};var ii={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},frame:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},clean:{label:"\u{1F9F9} Temizlik",color:"#b08af0"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ct=(s,e,t)=>s<e?e:s>t?t:s,Yd=(s,e,t)=>s+(e-s)*t,Gs=s=>s*s*(3-2*s),mn=(s,e)=>1-Math.exp(-s*e),it=Math.PI*2;function nn(s){return s=(s+Math.PI)%it,s<0&&(s+=it),s-Math.PI}function Gn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var h1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,u1=`
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
}`,f1=`
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
}`,d1=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function xg(s,e){let t=new Gt;t.name="sky",s.add(t);let n=new cn({vertexShader:h1,fragmentShader:u1,side:vn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new Ue},uHor:{value:new Ue},uSun:{value:new Ue},uSunDir:{value:new K(0,1,0)},uMoonDir:{value:new K(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new Ue(.93,.95,1)}}}),i=new St(new Oa(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=Gn(77),o=700,a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let m=0;m<o;m++){let g=r(),S=r(),M=g*it,v=.04+Math.pow(S,.8)*.96,R=Math.sqrt(1-v*v);a[m*3]=Math.cos(M)*R*420,a[m*3+1]=v*420,a[m*3+2]=Math.sin(M)*R*420,c[m]=1+Math.pow(r(),6)*3.2,l[m]=r()*3}let h=new Pt;h.setAttribute("position",new Tt(a,3)),h.setAttribute("aSize",new Tt(c,1)),h.setAttribute("aPhase",new Tt(l,1));let u=new cn({vertexShader:f1,fragmentShader:d1,transparent:!0,depthWrite:!1,blending:Jn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new bi(h,u);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=m1();t.add(d);let p=g1();return t.add(p),{group:t,update(m,g,S,M,v){let R=n.uniforms;v&&R.uMoonCol.value.copy(v),R.uTop.value.copy(m.top),R.uHor.value.copy(m.hor),R.uSun.value.copy(m.sun),R.uSunDir.value.copy(m.sunDir),R.uMoonDir.value.copy(m.moonDir),R.uSunVis.value=m.sunVis,R.uMoonVis.value=m.moonVis,R.uGlow.value=.6+m.dusk*1.4,u.uniforms.uTime.value=g,u.uniforms.uAlpha.value=m.stars,u.uniforms.uPx.value=M,f.visible=m.stars>.01,t.position.set(S.position.x,0,S.position.z),dl.color.copy(m.hor).lerp(m.sun,.35).lerp(p1,.55*(1-m.night)),dl.color.multiplyScalar(.55+.45*(1-m.night*.8)),d.rotation.y=g*.004,d.visible=e.clouds,ta.uniforms.uFar.value.copy(m.hor),ta.uniforms.uNear.value.copy(m.gnd).lerp(m.hor,.35).multiplyScalar(.9),ta.uniforms.uTint.value.copy(m.sky)},dispose(){t.traverse(m=>{m.geometry&&m.geometry.dispose()}),n.dispose(),u.dispose(),dl.dispose(),ta.dispose(),s.remove(t)}}}var p1=new Ue(1,1,1),dl=null,ta=null;function m1(){let s=Gn(4242),e=[];for(let a=0;a<11;a++){let c=s()*it,l=210+s()*120,h=70+s()*55,u=3+Math.floor(s()*4);for(let f=0;f<u;f++){let d=new us(1,0),p=9+s()*12;d.scale(p*(1.3+s()*.6),p*.55,p),d.translate((f-u/2)*13+s()*5,s()*4,s()*8),d.rotateY(c+Math.PI/2),d.translate(Math.cos(c)*l,h,Math.sin(c)*l),e.push(d)}}let t=x1(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let c=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c*1.03}t.setAttribute("color",new Tt(i,3)),dl=new jt({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new St(t,dl);return o.renderOrder=-8,o.frustumCulled=!1,o}function g1(){let s=Gn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let c=e.length/3,l=0;for(let h=0;h<=a.n;h++){let u=h/a.n*it,f=a.h*(.35+.65*Math.abs(Math.sin(u*3.1+a.k)*.6+Math.sin(u*7.3+1.7*a.k)*.3+(s()-.5)*.35));h===a.n&&(f=l),h===0&&(l=f);let d=Math.cos(u)*a.r,p=Math.sin(u)*a.r;if(e.push(d,-20,p,d,f,p),t.push(a.k,0,0,a.k,1,0),h<a.n){let y=c+h*2;n.push(y,y+2,y+1,y+1,y+2,y+3)}}}let r=new Pt;r.setAttribute("position",new Dt(e,3)),r.setAttribute("color",new Dt(t,3)),r.setIndex(n),ta=new cn({side:en,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new Ue},uNear:{value:new Ue},uTint:{value:new Ue}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new St(r,ta);return o.renderOrder=-7,o.frustumCulled=!1,o}function x1(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Pt;return i.setAttribute("position",new Tt(t,3)),i}function Xh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Kd(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=Xh(t,n),a=Xh(t+1,n),c=Xh(t,n+1),l=Xh(t+1,n+1);return o+(a-o)*i+(c-o)*r+(o-a-c+l)*i*r}function vg(s,e){return Kd(s,e)*.55+Kd(s*2.1,e*2.1)*.3+Kd(s*4.3,e*4.3)*.15}function yg(s,e){let r=[];for(let E=0;E<=56;E++){let x=E/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),c=new Float32Array(o*2),l=new Float32Array(o*3),h=[];for(let E=1;E<=56;E++)for(let x=0;x<120;x++){let w=1+(E-1)*120+x,O=1+(E-1)*120+(x+1)%120;if(E===1)h.push(0,O,w);else{let C=1+(E-2)*120+x,N=1+(E-2)*120+(x+1)%120;h.push(C,N,w,N,O,w)}}let u=new Pt;u.setAttribute("position",new Tt(a,3)),u.setAttribute("uv",new Tt(c,2)),u.setAttribute("color",new Tt(l,3)),u.setIndex(h);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),p=new ls(f);p.colorSpace=Bt,p.wrapS=p.wrapT=qn,p.anisotropy=4;let y=new hn({map:p,vertexColors:!0}),m=new St(u,y);m.receiveShadow=!0,m.name="ground",m.renderOrder=-1,s.add(m);let g=30,S=45;function M(E,x){let w=Math.hypot(E,x);if(w<=g)return 0;let O=Gs(ct((w-g)/26,0,1)),C=vg(E*.018+3,x*.018-7),N=ct((w-g)/140,0,1);return O*(.6+C*3.5)+N*N*N*(8+C*14)}function v(){let E=0,x=(w,O)=>{let C=M(w,O);a[E*3]=w,a[E*3+1]=C,a[E*3+2]=O,c[E*2]=w/(2*S)+.5,c[E*2+1]=1-(O/(2*S)+.5);let N=Math.hypot(w,O),z=vg(w*.05,O*.05),U=ct((N-g)/60,0,1),B=ct(C/30,0,1),Y=.92+(z-.5)*.22;l[E*3]=Y*(1-U*.32)+B*.08,l[E*3+1]=Y*(1-U*.22),l[E*3+2]=Y*(1-U*.18)+B*.06,E++};x(0,0);for(let w=1;w<=56;w++)for(let O=0;O<120;O++){let C=O/120*it+w%2*(Math.PI/120);x(Math.cos(C)*r[w],Math.sin(C)*r[w])}u.getAttribute("position").needsUpdate=!0,u.getAttribute("uv").needsUpdate=!0,u.getAttribute("color").needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function R(E,x){let w=!!(x&&x.snow);g=E.R+10,S=E.R+17,v();let O=f.width,C=O/(2*S),N=A=>(A+S)*C,z=A=>(A+S)*C,U=Gn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=w?"#e4ebf2":"#7db457",d.fillRect(0,0,O,O);for(let A=0;A<260;A++){let D=U()*O,X=U()*O,W=(2+U()*7)*C,J=d.createRadialGradient(D,X,0,D,X,W),de=w?U()<.5?"255,255,255":U()<.5?"200,212,228":"176,196,170":U()<.5?"120,170,82":U()<.5?"92,136,66":"138,160,78";J.addColorStop(0,`rgba(${de},0.45)`),J.addColorStop(1,`rgba(${de},0)`),d.fillStyle=J,d.fillRect(D-W,X-W,W*2,W*2)}for(let A=0;A<O*6;A++){let D=U()*O,X=U()*O;d.fillStyle=w?U()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":U()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(D,X,1+U()*1.5,1+U()*2.5)}for(let A=0;A<380;A++){let D=U()*it,X=E.Rp+2+U()*(S-E.Rp-2),W=N(Math.cos(D)*X),J=z(Math.sin(D)*X);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(U()*4)],d.globalAlpha=w?0:.8,d.beginPath(),d.arc(W,J,Math.max(1,C*.06),0,it),d.fill()}d.globalAlpha=1;for(let A of E.houses){let D=N(A.x),X=z(A.z),W=(A.size*.62+1.4)*C,J=d.createRadialGradient(D,X,W*.3,D,X,W);J.addColorStop(0,w?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),J.addColorStop(1,w?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=J,d.fillRect(D-W,X-W,W*2,W*2)}let B=(A,D,X,W)=>{d.globalAlpha=W,d.strokeStyle=X,d.lineWidth=D*C,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(N(A[0][0]),z(A[0][1]));for(let J=1;J<A.length;J++)d.lineTo(N(A[J][0]),z(A[J][1]));d.stroke(),d.globalAlpha=1},Y=[];for(let A of E.houses){let D=A.door,X=Math.atan2(D.ax,D.az),W=E.Rp-.5,J=[[D.dx,D.dz],[D.ax,D.az],[Math.sin(X)*E.Rr,Math.cos(X)*E.Rr],[Math.sin(X)*W,Math.cos(X)*W]];Y.push(J)}let H=E.gateAngle,G=[[Math.sin(H)*(E.Rp-.5),Math.cos(H)*(E.Rp-.5)],[Math.sin(H)*(E.R+2),Math.cos(H)*(E.R+2)],[Math.sin(H+.05)*(E.R+12),Math.cos(H+.05)*(E.R+12)],[Math.sin(H-.02)*(S+4),Math.cos(H-.02)*(S+4)]];Y.push(G);for(let A of Y)B(A,2.6,w?"#b4b8bf":"#8f7a52",.35);for(let A of Y)B(A,1.7,w?"#8f8476":"#a88d5e",.85);for(let A of Y)B(A,.7,w?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*C,d.beginPath(),d.arc(N(0),z(0),E.Rr*C,0,it),d.stroke(),d.globalAlpha=1;let b=(E.Rp+.8)*C,_=d.createRadialGradient(N(0),z(0),b*.6,N(0),z(0),b*1.08);w?(_.addColorStop(0,"rgba(170,166,160,1)"),_.addColorStop(.85,"rgba(184,186,190,0.95)"),_.addColorStop(1,"rgba(184,186,190,0)")):(_.addColorStop(0,"rgba(176,150,108,1)"),_.addColorStop(.85,"rgba(160,136,96,0.95)"),_.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=_,d.beginPath(),d.arc(N(0),z(0),b*1.08,0,it),d.fill();let L=Math.max(2,.55*C);for(let A=3.2;A<E.Rp+.3;A+=.62){let D=Math.floor(it*A/.66),X=U()*it;for(let W=0;W<D;W++){if(U()<.12)continue;let J=X+W/D*it,de=N(Math.cos(J)*A),ie=z(Math.sin(J)*A),ae=150+Math.floor(U()*40);d.fillStyle=w?`rgba(${ae+40},${ae+44},${ae+52},${.5+U()*.3})`:`rgba(${ae+12},${ae},${ae-22},${.55+U()*.3})`,d.save(),d.translate(de,ie),d.rotate(J+Math.PI/2),d.beginPath();let Ce=L*(.85+U()*.3),Be=L*(.7+U()*.25);d.roundRect?d.roundRect(-Ce/2,-Be/2,Ce,Be,Be*.3):d.rect(-Ce/2,-Be/2,Ce,Be),d.fill(),d.restore()}}if(_=d.createRadialGradient(N(0),z(0),0,N(0),z(0),3*C),_.addColorStop(0,"rgba(60,46,40,0.95)"),_.addColorStop(.5,"rgba(96,78,62,0.7)"),_.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=_,d.beginPath(),d.arc(N(0),z(0),3*C,0,it),d.fill(),E.grave){let A=N(E.grave.x),D=z(E.grave.z),X=6*C;_=d.createRadialGradient(A,D,0,A,D,X),_.addColorStop(0,"rgba(70,84,58,0.85)"),_.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=_,d.fillRect(A-X,D-X,X*2,X*2)}p.needsUpdate=!0}return{mesh:m,heightAt:M,paint:R,dispose(){u.dispose(),y.dispose(),p.dispose(),s.remove(m)}}}var qh=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],_g=[0,1,3,2,1,0,2,3];function v1(s){let e=_g[s%_g.length],t=qh[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function un(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function Mg(s,e){let t=s.slice().sort((g,S)=>g.seat-S.seat),n=t.length,i=t.findIndex(g=>g.id===e);if(i>=0){let g=Math.floor(n/2);t=t.map((S,M)=>t[(i-g+M+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(it-r)),a=ct(o*.5,7.2,13.5),c=o-5.4,l=(it-r)/Math.max(n,1),h=t.findIndex(g=>g.id===e),u=g=>r/2+l*(g+.5),f=h>=0?-u(h):Math.PI,d=nn(f),p=t.map((g,S)=>{let M=nn(u(S)+f+Math.PI*0),v=v1(g.seat),R=qh[v.type],E={id:g.id,seat:g.seat,angle:M,x:Math.sin(M)*o,z:Math.cos(M)*o,rotY:M+Math.PI,type:v.type,variant:v.variant,size:R.size},x=un(E,R.door[0],R.door[1]),w=un(E,R.approach[0],R.approach[1]);return E.door={dx:x.x,dz:x.z,ax:w.x,az:w.z},E}),y=o+6.5,m=d+7/y;return{n,R:o,Rp:a,Rr:c,step:l,gap:r,gateAngle:d,houses:p,grave:{x:Math.sin(m)*y,z:Math.cos(m)*y,angle:m,r:y}}}function Yh(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function Zd(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var bg=20,Sg=new at,y1=new at,_1=new Yt,M1=new Yt,b1=new K,wg=new K,Qd=new K(0,1,0),Eg=new Ue(.16,.11,.08),S1=new Ue("#ffc46b").multiplyScalar(1.25),w1=new Ue(.05,.045,.06),Tg=new Ue("#c9b48a");var Zh={value:1},Jh=new Map;function E1(s){if(Jh.has(s))return Jh.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=Zh,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,Jh.set(s,e),e}function T1(){for(let s of Jh.values())s.dispose()}var Ag=new wt,Vs=new K;function Jd(s){let e=new Gt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new at().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let c=new at().multiplyMatrices(o,a.matrixWorld),l=Array.isArray(a.material)?a.material[0]:a.material,h=l.uuid+(r?"|c":"");t.has(h)||t.set(h,{mat:l,cast:r,parts:[]});let u=t.get(h);for(let f of i)u.parts.push({geo:a.geometry,m:new at().multiplyMatrices(f,c),org:new K().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let y of n.parts)i+=y.geo.attributes.position.count,r+=y.geo.index?y.geo.index.count:y.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),c=new Float32Array(i*2),l=new Float32Array(i*3),h=i>65535?new Uint32Array(r):new Uint16Array(r),u=0,f=0;for(let y of n.parts){let m=y.geo,g=m.attributes.position,S=m.attributes.normal,M=m.attributes.uv;Ag.getNormalMatrix(y.m);for(let v=0;v<g.count;v++)Vs.fromBufferAttribute(g,v).applyMatrix4(y.m),o[(u+v)*3]=Vs.x,o[(u+v)*3+1]=Vs.y,o[(u+v)*3+2]=Vs.z,S&&(Vs.fromBufferAttribute(S,v).applyMatrix3(Ag).normalize(),a[(u+v)*3]=Vs.x,a[(u+v)*3+1]=Vs.y,a[(u+v)*3+2]=Vs.z),M&&(c[(u+v)*2]=M.getX(v),c[(u+v)*2+1]=M.getY(v)),l[(u+v)*3]=y.org.x,l[(u+v)*3+1]=y.org.y,l[(u+v)*3+2]=y.org.z;if(m.index){let v=m.index.array;for(let R=0;R<v.length;R++)h[f+R]=v[R]+u;f+=v.length}else{for(let v=0;v<g.count;v++)h[f+v]=u+v;f+=g.count}u+=g.count}let d=new Pt;d.setAttribute("position",new Tt(o,3)),d.setAttribute("normal",new Tt(a,3)),d.setAttribute("uv",new Tt(c,2)),d.setAttribute("aOrigin",new Tt(l,3)),d.setIndex(new Tt(h,1)),d.computeBoundingSphere();let p=new St(d,E1(n.mat));p.castShadow=n.cast,p.receiveShadow=!0,p.matrixAutoUpdate=!1,p.userData.merged=!0,e.add(p)}return e}function $d(s,e,t,n,i=1){return new at().compose(new K(s,e,t),new Yt().setFromAxisAngle(Qd,n),new K(i,i,i))}var ep=class{constructor(e){this.root=e,this.map=new Map}batchFor(e,t){let n=this.map.get(e.uuid);if(!n){let i=e.clone();i.name=e.name,i.userData={...e.userData,houseBatch:!0};let r=new zo(64,16384,32768,i);if(r.sortObjects=!1,r.perObjectFrustumCulled=!0,r.frustumCulled=!1,r.name="houses-"+e.name,this.root.add(r),n={mesh:r,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0,out:null},!t){let o=new zo(64,16384,32768,zh(.05));o.sortObjects=!1,o.perObjectFrustumCulled=!0,o.frustumCulled=!1,o.visible=!!this.outlines,o.castShadow=!1,o.receiveShadow=!1,o.name=r.name+"-outline",this.root.add(o),n.out=o}this.map.set(e.uuid,n)}return n}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx),e.out&&e.out.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.out&&(e.outGeo=(e.outGeo||new Map).set(r,e.out.addGeometry(t))),e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI),e.out&&e.out.setInstanceCount(e.maxI));let n=e.mesh.addInstance(t);return e.out&&(e.outIds=e.outIds||new Map,e.outIds.set(n,e.out.addInstance(e.outGeo.get(t)))),n}setOutlines(e){this.outlines=e;for(let t of this.map.values())t.out&&(t.out.visible=e)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose(),e.out&&(e.out.parent&&e.out.parent.remove(e.out),e.out.dispose());this.map.clear()}},tp=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Gt,this.parts=[],this.list=[];let o=jn(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new at().copy(o.matrixWorld).invert();for(let c of["body","door","banner"]){let l=o.getObjectByName(c);if(!l)continue;let h=new at().multiplyMatrices(a,l.matrixWorld),u=new at().copy(l.matrixWorld).invert();l.traverse(f=>{if(!f.isMesh)return;let d=new at().multiplyMatrices(u,f.matrixWorld),p=f.material,y=null;p.name==="window"?y="window":p.name.startsWith("tint")?(y="owner",p=ea(p.name,"#ffffff")):t===1&&p.name==="fantasy-town"&&(p=Gd());let m={kind:c,nodeM:h,local:d,colorMode:y,nodePos:new K().setFromMatrixPosition(h),nodeQ:new Yt().setFromRotationMatrix(h),ids:[]};try{let g=i.batchFor(p,y==="window");m.batch=g,m.batches=i,m.gid=i.geometryId(g,f.geometry),y==="window"?(g.mesh.castShadow=!1,g.mesh.receiveShadow=!1):(g.mesh.castShadow=!0,g.mesh.receiveShadow=!0)}catch{m.batch=null;let S=new Rr(f.geometry,p,bg);S.count=0,S.castShadow=y!=="window",S.receiveShadow=y!=="window",S.frustumCulled=!1,y&&(S.instanceColor=new Un(new Float32Array(bg*3).fill(1),3)),this.group.add(S),m.im=S}this.parts.push(m)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t),e.batch.out&&e.batch.out.setVisibleAt(e.batch.outIds.get(e.ids[i]),i<t)}setM(e,t,n){e.batch?(e.batch.mesh.setMatrixAt(e.ids[t],n),e.batch.out&&e.batch.out.setMatrixAt(e.batch.outIds.get(e.ids[t]),n)):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=y1.compose(b1.set(n.cx,0,n.cz),_1.setFromAxisAngle(Qd,n.crot),wg.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=M1.setFromAxisAngle(Qd,n.doorAngle).premultiply(r.nodeQ);o=Sg.compose(r.nodePos,a,wg.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=Sg.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}},jd=new Map,A1=new $t,Kh=new K;function R1(s,e){let t=s+":"+e;if(jd.has(t))return jd.get(t);let n=Tn(s,e),i=null;return n&&(n.updateWorldMatrix(!0,!0),A1.setFromObject(n).getSize(Kh),i={r:Math.max(Kh.x,Kh.z)/2,h:Kh.y}),jd.set(t,i),i}var C1=/grass|patch|rock-flat|campfire/;function Rg(s,e,t,n){let i=new Gt;i.name="village",s.add(i);let r=new Map,o=new ep(i),a=!1,c=new Map,l=[],h=[],u=null;function f(be,ce,Re,F,oe,q){if(C1.test(Re)||!d||Math.hypot(F,oe)>d.R+4)return;let se=R1(ce,Re);se&&(be.push({x:F,z:oe,r:se.r*q,h:se.h*q,name:Re}),u=null)}let d=null,p=null,y=null,m=null,g=!1,S=new Map,M=[],v=!0,R=!1,E=null,x=1,w=!1,O=new Ue("#ffc46b"),C=new Ue("#ff9a3c"),N=new Ue("#ffb85a");function z(be,ce){let Re=be+"-"+ce;return r.has(Re)||r.set(Re,new tp(be,ce,i,o)),r.get(Re)}function U(){for(let ce of r.values())ce.list.length=0;let be=[...c.values()].sort((ce,Re)=>ce.seat-Re.seat);for(let ce of be)z(ce.type,ce.variant).list.push(ce);v=!0}function B(be,ce){let Re=d;d=be;let F=new Set;for(let oe of be.houses){F.add(oe.id);let q=c.get(oe.id);if(!q||q.type!==oe.type||q.variant!==oe.variant){let se=q;q={id:oe.id,seat:oe.seat,type:oe.type,variant:oe.variant,cx:oe.x,cz:oe.z,crot:oe.rotY,sx:oe.x,sz:oe.z,srot:oe.rotY,scale:ce?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:se&&se.ownerColor||Tg.clone(),winColor:Eg.clone(),name:se?se.name:"",colorIdx:se?se.colorIdx:-1},c.set(oe.id,q)}q.seat=oe.seat,q.sx=q.cx,q.sz=q.cz,q.srot=q.crot,q.tx=oe.x,q.tz=oe.z,q.trot=oe.rotY,q.angle=oe.angle,q.info=qh[oe.type],q.removing=!1,ce||(q.cx=oe.x,q.cz=oe.z,q.crot=oe.rotY,q.scale=1)}for(let[oe,q]of c)F.has(oe)||(ce?(q.removing=!0,q.sx=q.cx,q.sz=q.cz,q.srot=q.crot,q.tx=q.cx,q.tz=q.cz,q.trot=q.crot):c.delete(oe));x=ce?0:1,U(),!ce||!Re?H():(E=!0,w=!0)}function Y(be){let ce={x:be.cx,z:be.cz,rotY:be.crot},Re=be.info;return{door:un(ce,Re.door[0],Re.door[1]-.25),inside:un(ce,Re.door[0],Re.door[1]-1.2),approach:un(ce,Re.approach[0],Re.approach[1]+.2),peek:un(ce,Re.peek[0],Re.peek[1]),backWin:un(ce,Re.backWin[0],Re.backWin[2]),frontWin:un(ce,Re.frontWin[0],Re.frontWin[2]+.12),lantern:un(ce,Re.door[0]+.95,Re.front+.45),tomb:un(ce,Re.door[0]-2.6,Re.front+1.6),plaque:un(ce,0,Re.front+.3),rotY:be.crot,height:Re.height}}function H(){p&&(i.remove(p),Mt(p)),p=new Gt,p.name="dressing",i.add(p),E=!1;let be=Gn(2024+d.n),ce=new Map;l=[],u=null;let Re=(V,ee,$,Pe,ve=1,Oe="village",Ye=null)=>{f(l,Oe,V,ee,$,ve);let Ze=Oe+":"+V;ce.has(Ze)||ce.set(Ze,[]);let ke=Ye==null?n.heightAt(ee,$):Ye;ce.get(Ze).push($d(ee,ke,$,Pe,ve))};M=[],Re("campfire-pit",0,0,.3,1,"village",0);let F=[],oe=[.55,2.35,4.15];for(let V=0;V<3;V++){let ee=oe[V],$=3.35;Re(V===1?"log-small":"log",Math.sin(ee)*$,Math.cos(ee)*$,ee+Math.PI/2,1,"village",0),F.push({x:Math.sin(ee)*$,z:Math.cos(ee)*$,a:ee,small:V===1})}Re("campfire-stand",0,0,1.2,.85,"village",0);let q=d.houses,se=V=>{let ee=null,$=1/0;for(let Pe=0;Pe<q.length;Pe++){let ve=q[Pe].angle,Oe=q[(Pe+1)%q.length].angle-ve;for(;Oe<0;)Oe+=it;if(q.length>1&&Oe>Math.PI)continue;let Ye=ve+Oe/2,Ze=Math.abs(((Ye-V+Math.PI)%it+it)%it-Math.PI);Ze<$&&($=Ze,ee=Ye)}return ee==null?V:ee},re=new Set,Ie=V=>{let ee=[];for(let $=0;$<V;$++)ee.push(d.gateAngle+Math.PI+(($+.5)/V-.5)*(it-1.4));return ee};for(let V of Ie(Math.min(6,Math.max(1,q.length-1)))){let ee=se(V),$=ee.toFixed(3);if(re.has($))continue;re.add($);let Pe=d.R-3.4,ve=Math.sin(ee)*Pe,Oe=Math.cos(ee)*Pe;Re("lamp-post",ve,Oe,ee+Math.PI,1),M.push({x:ve,y:3.55,z:Oe})}let Se=["barrel","crate","hay-bale","crate-bottles","bucket","wheel","barrel","crate"],De=new Set;Ie(8).forEach((V,ee)=>{let $=se(V+.11),Pe=$.toFixed(3);if(De.has(Pe))return;De.add(Pe);let ve=d.R+.4;Re(Se[ee],Math.sin($)*ve,Math.cos($)*ve,be()*it,1)});for(let V of c.values()){if(V.removing)continue;let ee={x:V.tx,z:V.tz,rotY:V.trot},$=un(ee,V.info.door[0]+.95,V.info.front+.45);Re("lantern",$.x,$.z,V.trot,.8,"village",0)}let I=V=>{for(let $ of q)if(Math.abs(((V-$.angle+Math.PI)%it+it)%it-Math.PI)<.2)return!1;return Math.abs(((V-d.gateAngle+Math.PI)%it+it)%it-Math.PI)>.3},P=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],Q=0;for(let V=0;V<40&&Q<4;V++){let ee=be()*it;if(!I(ee))continue;let $=d.Rp+2.2+be()*Math.max(.5,d.Rr-d.Rp-3.5),[Pe]=P[Q];Re(Pe,Math.sin(ee)*$,Math.cos(ee)*$,ee+Math.PI+(be()-.5)*.5,1),Q++}let ge=d.gateAngle,me=(V,ee)=>({x:Math.sin(ge+ee/V)*V,z:Math.cos(ge+ee/V)*V}),we=me(d.R+1,-2.4);Re("signpost",we.x,we.z,ge+.6,1),we=me(d.R-1,2.6),Re("banner-pole",we.x,we.z,ge+Math.PI,1.2),we=me(d.R+4,-2.6),Re("lantern-post-cabin",we.x,we.z,ge+Math.PI,1),M.push({x:we.x,y:2.9,z:we.z,small:!0});let Ae=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],xe=e.trees,fe=d.R+8.5;for(let V=0;V<xe;V++){let ee=be()*it,$=Math.pow(be(),1.35),Pe=fe+$*46,ve=Math.sin(ee)*Pe,Oe=Math.cos(ee)*Pe;if(Math.abs(((ee-ge+Math.PI)%it+it)%it-Math.PI)*Pe<4.5&&Pe<fe+30||d.grave&&Math.hypot(ve-d.grave.x,Oe-d.grave.z)<8.5)continue;let Ze=Ae[Math.floor(be()*Ae.length)];Re(Ze,ve,Oe,be()*it,.85+be()*.55+$*.3)}for(let V=0;V<e.scatter;V++){let ee=be()*it,$=d.R+4.6+be()*6,Pe=Math.sin(ee)*$,ve=Math.cos(ee)*$;if(Math.abs(((ee-ge+Math.PI)%it+it)%it-Math.PI)*$<3.5||d.grave&&Math.hypot(Pe-d.grave.x,ve-d.grave.z)<7)continue;let Ye=be();Re(Ye<.4?"grass-large":Ye<.7?"grass":"bush",Pe,ve,be()*it,.8+be()*.6)}for(let V=0;V<14;V++){let ee=be()*it,$=d.Rp+.8+be()*1.5;Re(be()<.7?"grass":"grass-large",Math.sin(ee)*$,Math.cos(ee)*$,be()*it,.8+be()*.4)}for(let V=0;V<3;V++){let ee=be()*it,$=d.R+24+be()*40;Re(be()<.5?"rock-large":"rock-wide",Math.sin(ee)*$,Math.cos(ee)*$,be()*it,.8+be()*1)}let Te=[];for(let[V,ee]of ce){let[$,Pe]=V.split(":"),ve=Tn($,Pe);ve&&Te.push({tpl:ve,mats:ee,cast:!/grass|patch|rock-flat|bush/.test(Pe)})}p.add(Jd(Te)),l.push({x:0,z:0,r:1.5,h:3.3,name:"fire"}),w&&(Zh.value=0,A=0,w=!1),X(),G=F,n.paint(d,_&&_.snow?{snow:!0}:null),Le(),b++,v=!0}let G=[],b=0,_=null,L=null,A=1,D=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(be=>new Ue(be));function X(){if(m&&(i.remove(m),Mt(m),m=null),!Hn("props/graveyard.glb")||!d||!d.grave)return;g=!0,m=new Gt,m.name="graveyard";let be=d.grave,ce=be.angle+Math.PI,Re=(Ie,Se)=>un({x:be.x,z:be.z,rotY:ce},Ie,Se),F=new Map,oe=(Ie,Se,De,I=0,P=1)=>{let Q=Re(Se,De);F.has(Ie)||F.set(Ie,[]),F.get(Ie).push($d(Q.x,n.heightAt(Q.x,Q.z),Q.z,ce+I,P))},q=Gn(66),se=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let Ie=0;Ie<6;Ie++)oe(se[Ie],-3.2+Ie*1.3+(q()-.5)*.3,-2.6+(q()-.5)*.4,(q()-.5)*.3,.85);oe("crypt",3.6,-3.4,-.3,1),oe("trunk-dead",-4.6,.6,1.1,1),oe("pine-crooked",-5.2,-3.6,.4,1),oe("candles",1.8,-2.4,0,1),oe("pumpkin-carved",-2.2,1.9,.5,.8),oe("urn",2.6,.4,0,.8),oe("iron-fence-gate",0,3.2,0,1);for(let Ie of[-2.5,-5,2.5,5])oe("iron-fence",Ie,3.2,0,1);let re=[];for(let[Ie,Se]of F){let De=Tn("graveyard",Ie);De&&re.push({tpl:De,mats:Se,cast:!0})}m.add(Jd(re)),i.add(m);for(let[Ie,Se]of S)de(Ie,Se)}let W=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function J(be,ce,Re,F){let oe=S.has(be);if(ce&&!oe){S.set(be,{obj:null,mound:null,colorIdx:Re,born:performance.now()}),de(be,S.get(be));let q=S.get(be);F&&q.obj&&(q.obj.userData.drop=0,q.obj.position.y=3.2)}else if(!ce&&oe){let q=S.get(be);q.obj&&q.obj.parent.remove(q.obj),q.mound&&q.mound.parent.remove(q.mound),S.delete(be)}}function de(be,ce){var re,Ie,Se;ce.obj&&(ce.obj.parent&&ce.obj.parent.remove(ce.obj),ce.obj=null),ce.mound&&(ce.mound.parent&&ce.mound.parent.remove(ce.mound),ce.mound=null);let Re=c.get(be);if(!Re||!Hn("props/graveyard.glb"))return;let F=Tn("graveyard",W[Re.seat%W.length]);if(!F)return;let oe={x:(re=Re.tx)!=null?re:Re.cx,z:(Ie=Re.tz)!=null?Ie:Re.cz,rotY:(Se=Re.trot)!=null?Se:Re.crot},q=un(oe,Re.info.door[0]-2.75,Re.info.front+1.7),se=F.clone();if(se.position.set(q.x,0,q.z),se.rotation.set(0,oe.rotY+.15,0),se.scale.setScalar(.62),se.traverse(De=>{De.isMesh&&(De.castShadow=!0,De.receiveShadow=!0)}),se.userData.pop=0,i.add(se),ce.obj=se,d&&d.grave){let De=[...S.keys()].indexOf(be),I=Tn("graveyard","grave-dirt");if(I){let P=d.grave,Q=P.angle+Math.PI,ge=-3.6+De%5*1.9,me=.3+Math.floor(De/5)*2,we=un({x:P.x,z:P.z,rotY:Q},ge,me),Ae=I.clone();Ae.position.set(we.x,n.heightAt(we.x,we.z),we.z),Ae.rotation.y=Q,Ae.scale.setScalar(.7),i.add(Ae),ce.mound=Ae}}}function ie(be,ce,Re){let F=c.get(be);F&&(F.colorIdx!==ce&&(F.colorIdx=ce,ce>=0?F.ownerColor.set(Sn[ce]):F.ownerColor.copy(Tg),v=!0),F.name=Re||"")}let ae=new Ue;function Ce(be,ce,Re){let F=!1;if(x<1){x=Math.min(1,x+be/1.3);let q=Gs(x);for(let[se,re]of c){re.cx=Yd(re.sx,re.tx,q),re.cz=Yd(re.sz,re.tz,q);let Ie=re.trot-re.srot;for(;Ie>Math.PI;)Ie-=it;for(;Ie<-Math.PI;)Ie+=it;re.crot=re.srot+Ie*q,re.removing?re.scale=Math.max(.01,1-q):re.scale=Math.min(1,re.scale+be*1.2)}if(x>=1){for(let[se,re]of c)re.removing&&c.delete(se);U(),E&&H()}F=!0}else for(let q of c.values())q.scale<1&&(q.scale=Math.min(1,q.scale+be*1.5),F=!0);A<1&&(A=Math.min(1,A+be/.9),Zh.value=A);for(let q of S.values()){let se=q.obj;if(se&&se.userData.drop!=null){let re=se.userData.drop+=be/.55;if(re>=1)se.position.y=0,delete se.userData.drop,F=!0;else{let Ie=re<.7?3.2*(1-re/.7*(re/.7)):Math.sin((re-.7)/.3*Math.PI)*.18;se.position.y=Math.max(0,Ie)}}}let oe=Re.lamps;for(let q of c.values()){q.doorHold>0&&(q.doorHold-=be,q.doorHold<=0&&(q.doorTarget=0));let se=q.doorOpen;q.doorOpen+=(q.doorTarget-q.doorOpen)*mn(q.doorTarget>q.doorOpen?9:5,be),Math.abs(q.doorOpen-se)>5e-4&&(F=!0),q.doorAngle=q.doorOpen*1.35*q.info.openSign;let re=q.dark||q.dead||q.flickOut?0:Math.max(q.litTarget,0);q.lit+=(re-q.lit)*mn(1.6,be);let Ie=ct(q.lit*(.25+.75*oe),0,1);if(q.flickT>0){q.flickT-=be;let De=q.flickDur-q.flickT,I=Math.floor(De/.075),P=Math.abs(Math.sin(I*12.9898+q.seat*78.233)*43758.5453)%1,Q=1-ct(De/q.flickDur,0,1);Ie=P>.12+.75*(1-Q)?.45+.55*Q:.03,q.flickT<=0&&(q.lit=0,Ie=0,q.flickOut=!0),R=!0}ae.copy(Eg).lerp(w1,ct(Re.night*1.2,0,1)).lerp(S1,Ie);let Se=q.winColor;Math.abs(ae.r-Se.r)+Math.abs(ae.g-Se.g)+Math.abs(ae.b-Se.b)>.006&&(Se.copy(ae),R=!0)}if(F&&(v=!0),v){for(let q of r.values())q.write();return v=!1,R=!1,!0}if(R){for(let q of r.values())q.writeColors();R=!1}return!1}function Be(be,ce,Re,F){let oe=be.lamps;if(oe<.02)return;let q=_&&_.dress==="fair";for(let se=0;se<M.length;se++){let re=M[se],Ie=.92+.08*Math.sin(ce*9+se*1.7),Se=q?D[se%D.length]:O;Re.add(re.x,re.y,re.z,re.small?1.4:2,Se,.85*oe*Ie),F.add(re.x,.03,re.z,re.small?6:8.5,q?Se:C,.3*oe)}if(q&&he)for(let se=0;se<he.length;se++){let re=he[se];Re.add(re.x,re.y,re.z,.7,D[se%D.length],.8*oe*(.8+.2*Math.sin(ce*3+se)))}for(let se of c.values()){if(se.scale<.9)continue;if(!se.gp||se.gp.x!==se.cx||se.gp.z!==se.cz||se.gp.r!==se.crot){let De={x:se.cx,z:se.cz,rotY:se.crot};se.gp={x:se.cx,z:se.cz,r:se.crot,ln:un(De,se.info.door[0]+.95,se.info.front+.45),w:un(De,se.info.frontWin[0],se.info.frontWin[2]+.25),wp:un(De,se.info.frontWin[0],se.info.frontWin[2]+1.6)}}let re=se.gp.ln,Ie=se.dead?.25:1;Re.add(re.x,.62,re.z,.9,O,.9*oe*Ie),F.add(re.x,.03,re.z,3.6,C,.26*oe*Ie);let Se=se.lit*oe*(.86+.08*Math.sin(ce*6.3+se.seat*2.1)+.06*Math.sin(ce*13.7+se.seat));if(Se>.02){let De=se.gp.w;Re.add(De.x,1.35,De.z,1.7,N,.5*Se);let I=se.gp.wp;F.add(I.x,.03,I.z,4.2,N,.22*Se)}}}let he=null,He=!1;function le(be){let ce=_;_=be&&be.id?be:null,O.set(_&&_.lamp?_.lamp:"#ffc46b"),C.set(_&&_.lamp?_.lamp:"#ff9a3c");let Re=!!(ce&&ce.snow)!=!!(_&&_.snow);d&&Re&&n.paint(d,_&&_.snow?{snow:!0}:null),j(!!(_&&_.snow)),Le()}function j(be){if(be===He)return;He=be;let ce=Re=>{!Re||!Re.isMeshLambertMaterial||!Re.map||Re.name==="villager"||(be?(Re.userData.preFrost||(Re.userData.preFrost=Re.emissive.clone()),Re.emissive.set("#a9bad0").multiplyScalar(.22)):Re.userData.preFrost&&Re.emissive.copy(Re.userData.preFrost))};s.traverse(Re=>{Re.material&&(Array.isArray(Re.material)?Re.material:[Re.material]).forEach(ce)})}function Le(){if(L&&(i.remove(L),L.traverse(oe=>{(oe.userData.merged||oe.userData.themeGeo)&&oe.geometry.dispose(),oe.userData.themeMat&&oe.material.dispose()}),L=null),he=null,h=[],u=null,!_||!_.dress||!d)return;L=new Gt,L.name="theme";let be=Gn(99+d.n),ce=new Map,Re=(oe,q,se,re,Ie=1)=>{f(h,"village",oe,q,se,Ie),ce.has(oe)||ce.set(oe,[]),ce.get(oe).push($d(q,n.heightAt(q,se),se,re,Ie))};if(_.dress==="harvest"){let oe=[...c.values()].filter(Ie=>!Ie.removing),q=Math.max(1,Math.ceil(oe.length/8));for(let Ie=0;Ie<oe.length;Ie+=q){let Se=oe[Ie],De={x:Se.tx,z:Se.tz,rotY:Se.trot},I=un(De,Se.info.door[0]-.9,Se.info.front+.7);if(Re("pumpkin",I.x,I.z,be()*it,.7+be()*.3),be()<.5){let P=un(De,-Se.info.hx+.5,Se.info.front+.9);Re("hay-bale",P.x,P.z,Se.trot+.3,.9)}}for(let Ie=0;Ie<6;Ie++){let Se=Ie/6*it+.4,De=d.Rp+1.2;Re(Ie%2?"pumpkin":"hay-bale",Math.sin(Se)*De,Math.cos(Se)*De,Se,Ie%2?.9:1)}let se=d.gateAngle+.5,re=d.Rp+2.6;Re("cart-hay",Math.sin(se)*re,Math.cos(se)*re,se+1.2,1)}else if(_.dress==="fair"){let oe=M.filter(re=>!re.small),q=[],se=[];he=[];for(let re=0;re<oe.length;re++){let Ie=oe[re],Se=oe[(re+1)%oe.length];if(Math.hypot(Ie.x-Se.x,Ie.z-Se.z)>14)continue;let De=9;for(let I=0;I<De;I++){let P=(I+.15)/De,Q=(I+.85)/De,ge=(I+.5)/De,me=V=>3.25-Math.sin(V*Math.PI)*.9,we=V=>[Ie.x+(Se.x-Ie.x)*V,me(V),Ie.z+(Se.z-Ie.z)*V],Ae=we(P),xe=we(Q),fe=we(ge);q.push(...Ae,...xe,fe[0],fe[1]-.45,fe[2]);let Te=D[(re+I)%D.length];for(let V=0;V<3;V++)se.push(Te.r,Te.g,Te.b);I%3===1&&he.push({x:fe[0],y:fe[1]+.05,z:fe[2]})}}if(q.length){let re=new Pt;re.setAttribute("position",new Dt(q,3)),re.setAttribute("color",new Dt(se,3)),re.computeVertexNormals();let Ie=new hn({vertexColors:!0,side:en}),Se=new St(re,Ie);Se.userData.themeGeo=!0,Se.userData.themeMat=!0,L.add(Se)}for(let re=0;re<5;re++){let Ie=re/5*it+.2,Se=d.Rp+1.6;Re("banner-pole",Math.sin(Ie)*Se,Math.cos(Ie)*Se,Ie+Math.PI,1.1)}}let F=[];for(let[oe,q]of ce){let se=Tn("village",oe);se&&F.push({tpl:se,mats:q,cast:!0})}F.length&&L.add(Jd(F)),i.add(L),He&&(He=!1,j(!0))}function Ke(be,ce){let Re=c.get(be);Re&&(Re.litTarget=ce)}function ze(be,ce=1.2){let Re=c.get(be);Re&&(Re.doorTarget=1,Re.doorHold=ce)}function Ve(be){let ce=null,Re=1/0,F=be.origin,oe=be.direction;for(let q of c.values()){if(q.removing)continue;let se=Math.cos(-q.crot),re=Math.sin(-q.crot),Ie=F.x-q.cx,Se=F.z-q.cz,De=Ie*se+Se*re,I=-Ie*re+Se*se,P=oe.x*se+oe.z*re,Q=-oe.x*re+oe.z*se,ge=[-q.info.hx-.3,0,-q.info.hz-.3],me=[q.info.hx+.3,q.info.height,q.info.hz+1.2],we=[De,F.y,I],Ae=[P,oe.y,Q],xe=-1/0,fe=1/0;for(let Te=0;Te<3;Te++){if(Math.abs(Ae[Te])<1e-6){if(we[Te]<ge[Te]||we[Te]>me[Te]){xe=1/0;break}continue}let V=(ge[Te]-we[Te])/Ae[Te],ee=(me[Te]-we[Te])/Ae[Te];if(V>ee){let $=V;V=ee,ee=$}xe=Math.max(xe,V),fe=Math.min(fe,ee)}xe<=fe&&fe>0&&xe<Re&&(Re=xe,ce=q)}return ce}function _t(){d&&X()}function Mt(be){be.traverse(ce=>{ce.isInstancedMesh?ce.dispose():ce.userData.merged&&ce.geometry.dispose()})}return{root:i,houses:c,get layout(){return d},get benchSlots(){return G},get busy(){return x<1},get version(){return b},lampList:()=>M,setOutlines(be){a=be,o.setOutlines(be)},get blockers(){return u||(u=l.concat(h)),u},setLayout:B,setOwner:ie,setLit:Ke,setDead:J,setTheme:le,openDoor:ze,anchors:Y,update:Ce,emitGlows:Be,pickHouse:Ve,onExtraLoaded:_t,flicker(be,ce=1.5){let Re=c.get(be);Re&&(Re.flickT=ce,Re.flickDur=ce)},house:be=>c.get(be),tombOf:be=>S.get(be),dispose(){j(!1);for(let be of r.values())be.dispose();o.dispose(),p&&Mt(p),m&&Mt(m),L&&L.traverse(be=>{(be.userData.merged||be.userData.themeGeo)&&be.geometry.dispose(),be.userData.themeMat&&be.material.dispose()}),T1(),Zh.value=1,s.remove(i)}}}var I1=`
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
}`,P1={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function L1(s,e){return new cn({vertexShader:I1,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${P1[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var Xi=class{constructor(e,t,n=Jn){this.max=t;let i=new Si(1,1),r=new Wa;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new Un(new Float32Array(t*4),4),this.col=new Un(new Float32Array(t*4),4),this.spin=new Un(new Float32Array(t),1),this.pos.setUsage(il),this.col.setUsage(il),this.spin.setUsage(il),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=L1(e,n),this.mesh=new St(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let c=this.n++,l=this.pos.array,h=this.col.array;l[c*4]=e,l[c*4+1]=t,l[c*4+2]=n,l[c*4+3]=i,h[c*4]=r.r,h[c*4+1]=r.g,h[c*4+2]=r.b,h[c*4+3]=o,this.spin.array[c]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},Cg=`
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
}`,Ig=`
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
}`,D1=`
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
}`,N1=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function Pg(s){let e=new Gt;e.name="campfire-fx";let t=[],n=new Si(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,p,,y,m]=i[f],g=new cn({vertexShader:Cg,fragmentShader:Ig,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Jn,side:en,fog:!1}),S=new St(n,g);S.position.set(d,.32,p),S.scale.set(y,m,1),S.renderOrder=6,S.frustumCulled=!1,e.add(S),t.push(S)}let r=s.sparks,o=Gn(5),a=new Float32Array(r*3),c=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,c[f*4]=o(),c[f*4+1]=o(),c[f*4+2]=o(),c[f*4+3]=o()*1.2;let l=new Pt;l.setAttribute("position",new Tt(a,3)),l.setAttribute("aSeed",new Tt(c,4));let h=new cn({vertexShader:D1,fragmentShader:N1,transparent:!0,depthWrite:!1,blending:Jn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),u=new bi(l,h);return u.frustumCulled=!1,u.renderOrder=7,e.add(u),{group:e,update(f,d,p){for(let y of t)y.material.uniforms.uTime.value=f,y.material.uniforms.uPower.value=p;h.uniforms.uTime.value=f,h.uniforms.uPx.value=d,h.uniforms.uPower.value=Math.min(1,p*1.2)},dispose(){n.dispose(),l.dispose(),h.dispose();for(let f of t)f.material.dispose()}}}var z1=`
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
}`,k1=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function Lg(s){let e=Gn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Pt;i.setAttribute("position",new Tt(t,3)),i.setAttribute("aSeed",new Tt(n,4));let r=new cn({vertexShader:z1,fragmentShader:k1,transparent:!0,depthWrite:!1,blending:Jn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new bi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,c){let l=Gn(123);for(let h=0;h<s;h++){let u=l()*it,f=a+l()*(c-a);t[h*3]=Math.cos(u)*f,t[h*3+1]=.6+l()*2.2,t[h*3+2]=Math.sin(u)*f}i.getAttribute("position").needsUpdate=!0},update(a,c,l){r.uniforms.uTime.value=a,r.uniforms.uPx.value=c,r.uniforms.uAlpha.value=l,o.visible=l>.01},dispose(){i.dispose(),r.dispose()}}}var jh=class{constructor(e=96){this.max=e,this.normal=new Xi("puff",e,Ei),this.add=new Xi("glow",e,Jn),this.list=[],this.tmp=new Ue,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new Ue(r):new Ue(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),c=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let l=0;l<o;l++){let h=Math.random()*it,u=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,p=.25+Math.random()*.3,y=a;e==="poof"&&(p=.35+Math.random()*.35),e==="dust"&&(u=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,p=.14+Math.random()*.1),e==="bubble"&&(u=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),p=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(u=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,p=.45+Math.random()*.4),e==="confetti"&&(u=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,p=.1+Math.random()*.08,y=new Ue(c[l%c.length])),this.list.push({kind:e,x:t+Math.cos(h)*.2,y:n+Math.random()*.4,z:i+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:f,vz:Math.sin(h)*u,t:0,life:d,size:p,c:y})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},$h=null;function Dg(s=.35,e=.6,t=1){$h||($h=new Si(1,1),$h.translate(0,.5,0));let n=new cn({vertexShader:Cg,fragmentShader:Ig,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Jn,side:en,fog:!1}),i=new St($h,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var F1=`
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
}`,O1=`
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
}`;function Ng(s){let t=Gn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let p=0;p<900;p++)n[p*3]=(t()-.5)*46,n[p*3+1]=t()*18,n[p*3+2]=(t()-.5)*46,i[p*4]=t(),i[p*4+1]=t(),i[p*4+2]=t(),i[p*4+3]=t();let r=new Pt;r.setAttribute("position",new Tt(n,3)),r.setAttribute("aSeed",new Tt(i,4));let o=new cn({vertexShader:F1,fragmentShader:O1,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new K}}}),a=new bi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let c=new Xi("puff",40,Ei);c.mesh.renderOrder=4,s.add(c.mesh);let l=[];for(let p=0;p<40;p++)l.push({a:t()*it,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let h="none",u=0,f=0,d=new Ue("#c9cfd8");return{set(p){h=p||"none"},get kind(){return h},update(p,y,m,g,S,M,v){if(u+=((h==="snow"||h==="leaves"?1:0)-u)*Math.min(1,p*.8),a.visible=u>.01&&S>0,a.visible){r.setDrawRange(0,Math.min(900,S));let x=o.uniforms;x.uTime.value=y,x.uPx.value=m,x.uKind.value=h==="leaves"?1:0,x.uAlpha.value=u*(h==="snow"?.9:1),x.uCenter.value.copy(g)}if(f+=((h==="fog"?1:0)-f)*Math.min(1,p*.5),c.begin(),f>.01){d.set("#cfd6de"),M&&d.lerp(M,.5),d.multiplyScalar(1-v*.6);let x=Math.min(40,Math.max(8,Math.round(S/20)));for(let w=0;w<x;w++){let O=l[w],C=O.a+y*O.sp;c.add(Math.sin(C)*O.r,O.y,Math.cos(C)*O.r,O.s,d,.16*f)}}c.end(y)},dispose(){r.dispose(),o.dispose(),c.dispose(),s.remove(a),s.remove(c.mesh)}}}var Xs=Math.PI*2,Ws=new Ue;function qi(s,{seg:e=20,p:t=2,sx:n=1,sz:i=1,color:r="#ffffff",from:o=0,to:a=Xs,wob:c=null}={}){let h=a-o>=Xs-1e-6?e:e+1,u=[],f=2/t;for(let g=0;g<s.length;g++){let[S,M]=s[g];for(let v=0;v<h;v++){let R=o+(a-o)*(v/e),E=Math.sin(R),x=Math.cos(R),w=c?c(v,g):1,O=Math.sign(E)*Math.pow(Math.abs(E),f),C=Math.sign(x)*Math.pow(Math.abs(x),f);u.push(O*S*n*w,M,C*S*i*w)}}let d=[],p=[];for(let g=0;g<s.length-1;g++)for(let S=0;S<e;S++){let M=g*h+S,v=g*h+(S+1)%h,R=(g+1)*h+(S+1)%h,E=(g+1)*h+S;d.push(M,v,R,M,R,E),p.push(S,g,S,g)}let y=new Pt;y.setAttribute("position",new Dt(u,3)),y.setIndex(d),y.computeVertexNormals();let m=y.toNonIndexed();return y.dispose(),kg(m,g=>typeof r=="function"?r(p[g*2],p[g*2+1]):r),m}function kg(s,e){let t=s.attributes.position.count,n=new Float32Array(t*3);for(let i=0;i<t/3;i++){Ws.set(typeof e=="function"?e(i):e);for(let r=0;r<3;r++)n[(i*3+r)*3]=Ws.r,n[(i*3+r)*3+1]=Ws.g,n[(i*3+r)*3+2]=Ws.b}return s.setAttribute("color",new Tt(n,3)),s}function Ht(s,e,{pos:t=[0,0,0],rot:n=[0,0,0],scale:i=[1,1,1],flat:r=!1}={}){let o=s.index?s.toNonIndexed():s;o!==s&&s.dispose();for(let c of Object.keys(o.attributes))c!=="position"&&c!=="normal"&&o.deleteAttribute(c);(r||!o.attributes.normal)&&o.computeVertexNormals();let a=new at().compose(new K(...t),new Yt().setFromEuler(new li(...n)),new K(...i));return o.applyMatrix4(a),kg(o,e)}function Ms(s,e,t,n,i){let r=new K(...s),o=new K(...e),a=r.distanceTo(o),c=new Qt(t,n,a),l=r.clone().add(o).multiplyScalar(.5),h=new at().lookAt(r,o,new K(0,1,0)),u=new Yt().setFromRotationMatrix(h),f=Ht(c,i);return f.applyMatrix4(new at().compose(l,u,new K(1,1,1))),f}function Yi(s){let e=kh(s,!1);for(let t of s)t.dispose();return e.computeBoundingBox(),e.computeBoundingSphere(),e}var ip=(s,e)=>{let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},eu=(s,e)=>(Ws.set(s),e<0?Ws.lerp(new Ue(0,0,0),-e):Ws.lerp(new Ue(1,1,1),e),"#"+Ws.getHexString());function zg(s,e,t,n){return qi([[.19,.196],[.199,.205],[.201,.222],[.201,.24],[.2,.256],[.197,.288],[.19,.316],[.172,.344],[.138,.368],[.086,.383],[0,.389]],{seg:20,p:4,color:(r,o)=>o>=1&&o<=3?o===2?r%2?e:t:r%2?t:e:o===0?t:n&&o>=5&&o<=8?(r+o)%2?s:n:s})}function U1(){let s="#b3222e",t=qi([[.2,.196],[.21,.208],[.21,.226],[.206,.3],[.192,.39],[.176,.466],[.176,.466],[.13,.473],[0,.475]],{seg:20,p:3.4,color:(i,r)=>r<=1?"#8f1a24":r>=6?"#a61f2a":s}),n="#1f1a26";return Yi([t,Ht(new Kn(.022,.022,.016,8),n,{pos:[0,.48,0]}),Ms([0,.482,0],[.09,.48,-.09],.012,.012,n),Ms([.09,.48,-.09],[.135,.455,-.135],.012,.012,n),Ms([.135,.455,-.135],[.15,.39,-.15],.012,.012,n),Ht(new Kn(.016,.034,.075,8),n,{pos:[.153,.35,-.153],rot:[.08,0,-.08]})])}function B1(){let s="#f6efe2",e="#e7d9bf",r=qi([[.25,.24],[.247,.29],[.232,.33],[.196,.364],[.13,.388],[.06,.397],[0,.399]],{seg:16,p:4,sz:.9,color:(d,p)=>p===0?e:s}),o=qi([[.268,-.06],[.258,.03],[.252,.15],[.25,.24]],{seg:14,p:4,sz:.9,from:.86,to:Xs-.86,color:(d,p)=>p===0?e:s}),a=[r,o],c=2/4,l=(d,p,y,m=0)=>{let g=Math.sin(d),S=Math.cos(d);return[Math.sign(g)*Math.pow(Math.abs(g),c)*(p+m),y,Math.sign(S)*Math.pow(Math.abs(S),c)*(p+m)*.9]},h=["#d9577a","#5f9e5a","#d9577a","#7a6bd0"],u=0;for(let[d,p,y,m,g]of[[.3,.247,9,.3,Xs],[.355,.21,5,0,Xs],[.14,.25,6,1.56,3.8]])for(let S=0;S<y;S++){let M=m+S/y*g;a.push(Ht(new Ua(.024,0),h[u++%h.length],{pos:l(M,p,d,.002),rot:[0,M,0],scale:[1,1,.35]}))}let f=["#e63946","#f2c12e","#2f9e44","#f06595","#2b59c3"];for(let d=0;d<=8;d++){let p=-.86+1.72*(d/8);a.push(Ht(new zi(.02,0),f[u++%f.length],{pos:l(p,.252,.243),scale:[1,.8,1]}))}for(let d of[-1,1])for(let p=1;p<=4;p++)a.push(Ht(new zi(.018,0),f[u++%f.length],{pos:l(d*.86,.262,.243-p*.07),scale:[1,.8,1]}));return a.push(Ht(new us(.048,0),s,{pos:[0,-.03,-.235],scale:[1.2,.9,.8]})),a.push(Ht(new hs(.05,.13,4),e,{pos:[-.04,-.1,-.24],rot:[.25,0,.2],scale:[1,1,.35]})),a.push(Ht(new hs(.05,.13,4),s,{pos:[.04,-.105,-.24],rot:[.25,0,-.25],scale:[1,1,.35]})),Yi(a)}function H1(){let s="#b08a5f",e="#8a6744";return qi([[.2,.194],[.222,.206],[.224,.25],[.206,.262],[.204,.29],[.18,.37],[.14,.46],[.096,.545],[.054,.607],[.022,.64],[0,.646]],{seg:16,p:3.4,color:(n,i)=>i<=2?e:eu(s,(ip(n,i)-.5)*.08)})}function G1(){let s="#55494a",e="#3b3036";return qi([[.205,.196],[.216,.226],[.219,.29],[.222,.35],[.224,.41],[.217,.452],[.198,.468],[.12,.474],[0,.476]],{seg:18,p:3.4,wob:(n,i)=>i>=1&&i<=5?1+(ip(n,i)-.5)*.08:1,color:(n,i)=>i>=6?e:i===0?eu(s,-.12):s})}function V1(){let s="#c94343",e="#a83535",t="#f3e9d2",i=qi([[.196,.19],[.208,.2],[.21,.262],[.2,.274],[.197,.276],[.195,.31],[.178,.35],[.142,.385],[.09,.41],[0,.42]],{seg:20,p:4,color:(o,a)=>a<=2?o%2?s:e:a===3?e:o%2?s:eu(s,-.06)}),r=Ht(new us(.07,1),o=>eu(t,(ip(o,7)-.5)*.12),{pos:[0,.458,0]});return Yi([i,r])}function W1(){let i=(c,l)=>{let h=Math.sin(c),u=Math.cos(c);return[Math.sign(h)*Math.pow(Math.abs(h),.5)*l,Math.sign(u)*Math.pow(Math.abs(u),.5)*l]},r=[qi([[.192,.27099999999999996],[.21200000000000002,.27299999999999996],[.21400000000000002,.297],[.194,.301],[.192,.27099999999999996]],{seg:20,p:4,color:"#4f8f3a"})],o=["#ff6f91","#ffffff","#ffd23f","#9b7bff","#ff8c42","#ffffff","#ff6f91","#9b7bff"],a=8;for(let c=0;c<a;c++){let l=c/a*Xs,[h,u]=i(l,.2+.012);r.push(Ht(new us(.052,0),o[c],{pos:[h,.285+.012,u],rot:[Math.cos(l)*.45,l,-Math.sin(l)*.45],scale:[1,.4,1]})),r.push(Ht(new zi(.022,0),o[c]==="#ffd23f"?"#e2622b":"#f2b52e",{pos:[h*1.04,.285+.03,u*1.04]}));let f=l+Math.PI/a,[d,p]=i(f,.2+.014);r.push(Ht(new zi(.03,0),"#6cb04a",{pos:[d,.285+.004,p],rot:[0,f,.6],scale:[.6,.35,1.3]}))}return Yi(r)}function X1(){let s="#fbfaf5",e="#e9e6dc";return qi([[.198,.194],[.205,.206],[.206,.3],[.206,.3],[.22,.31],[.248,.35],[.262,.43],[.254,.5],[.22,.55],[.155,.582],[.078,.596],[0,.598]],{seg:20,p:3.4,wob:(n,i)=>i>=5&&i<=8?1+.05*Math.cos(n/20*Xs*5):1,color:(n,i)=>i<=2?e:s})}function q1(){let s="#f2c12e",e="#d39a12",t=[qi([[.15,.3],[.16,.296],[.163,.36],[.154,.364],[.15,.3]],{seg:20,p:2.2,color:(i,r)=>r===1?e:s})];for(let i=0;i<5;i++){let r=i/5*Xs,o=Math.sin(r)*.155,a=Math.cos(r)*.155;t.push(Ht(new hs(.045,.1,4),s,{pos:[o,.41,a],rot:[0,r+Math.PI/4,0],scale:[1,1,.45]})),t.push(Ht(new zi(.018,0),"#fff4c2",{pos:[o*1.02,.468,a*1.02]}))}let n=[["#d7263d",0],["#2b59c3",.62],["#2f9e44",-.62]];for(let[i,r]of n)t.push(Ht(new zi(.022,0),i,{pos:[Math.sin(r)*.168,.33,Math.cos(r)*.168],rot:[0,r,0],scale:[1,1,.5]}));return Yi(t)}function Fg(s,e=.084){let t=[Ht(new Qt(.06,.036,.032),s,{pos:[0,e+.002,.184]})];for(let n of[-1,1])t.push(Ms([n*.024,e+.002,.184],[n*.068,e-.006,.181],.036,.034,s)),t.push(Ms([n*.066,e-.006,.181],[n*.098,e+.002,.177],.028,.026,s)),t.push(Ms([n*.096,e+.001,.177],[n*.112,e+.02,.174],.02,.02,s));return t}function Y1(){return Yi(Fg("#3a2417"))}function K1(){let s="#2a2333",e=[];for(let t of[-1,1])e.push(Ht(new Fs(.046,.009,4,14),s,{pos:[t*.075,.15,.184]})),e.push(Ms([t*.121,.155,.182],[t*.178,.155,.16],.012,.012,s)),e.push(Ms([t*.178,.155,.16],[t*.18,.15,.02],.01,.012,s));e.push(Ms([-.03,.158,.186],[.03,.158,.186],.01,.012,s));for(let t of[-1,1])e.push(Ht(new Kn(.04,.04,.004,12),"#cfe6ff",{pos:[t*.075,.15,.181],rot:[Math.PI/2,0,0]}));return Yi(e)}function Z1(){let s="#4a2f1f";return Yi([Ht(new Qt(.3,.13,.056),s,{pos:[0,-.012,.176]}),Ht(new Qt(.2,.04,.05),s,{pos:[0,-.094,.168]}),Ht(new Qt(.03,.16,.12),s,{pos:[-.158,.036,.126]}),Ht(new Qt(.03,.16,.12),s,{pos:[.158,.036,.126]}),...Fg("#3a2417",.09)])}function J1(){let s="#e0a526",e="#9c2f2f",t=Ht(new Fs(.158,.042,5,16),a=>Math.floor(a/10)%3===0?e:s,{pos:[0,.178,.006],rot:[Math.PI/2,0,0],scale:[1.02,.9,1]}),n=Ht(new Qt(.075,.17,.028),a=>(a<4||a>=8&&a<12,s),{pos:[.075,.075,.155],rot:[.12,0,.1]}),i=Ht(new Qt(.078,.022,.031),e,{pos:[.069,.11,.159],rot:[.12,0,.1]}),r=Ht(new Qt(.078,.022,.031),e,{pos:[.08,.035,.15],rot:[.12,0,.1]}),o=Ht(new Qt(.072,.02,.022),s,{pos:[.084,-.016,.148],rot:[.12,0,.1]});return Yi([t,n,i,r,o])}function $1(){let s="#b3222e";return Yi([Ht(new Qt(.035,.035,.03),"#8f1a24",{pos:[0,.148,.142]}),Ht(new hs(.04,.07,4),s,{pos:[-.048,.148,.14],rot:[0,0,-Math.PI/2],scale:[1,1,.45]}),Ht(new hs(.04,.07,4),s,{pos:[.048,.148,.14],rot:[0,0,Math.PI/2],scale:[1,1,.45]})])}var j1=[null,null,null,null,null,null,null,null,null,{kind:"cap",build:()=>zg("#f7f5ef","#e3ddcf","#fbf9f4")},{kind:"cap",build:()=>zg("#ece0c2","#d2bd8f","#f4ebd3","#e2d3ae")},{kind:"cap",build:U1},{kind:"cap",hair:"scarf",build:B1},{kind:"cap",build:H1},{kind:"cap",build:G1},{kind:"cap",build:V1},{kind:"top",fit:"wreath",build:W1},{kind:"cap",build:X1},{kind:"top",fit:"crown",build:q1}],sp=Xd.map((s,e)=>({name:s,node:Wd[e]||null,...j1[e]||{}})),BA=sp.length,Q1=[null,{bone:"head",build:Y1},{bone:"head",build:K1},{bone:"head",build:Z1},{bone:"torso",build:J1},{bone:"torso",build:$1}],Og=qd.map((s,e)=>({name:s,...Q1[e]||{}})),HA=Og.length,ew={wreath:[[0,1],[0,1.1],[-.005,1],[.01,1.06],[0,1],[.01,1.06],[0,1.02],[0,1.06],[.02,1],[0,1.1],[0,1],[0,1.06]],crown:[[0,1],[0,1],[-.01,1],[.02,1],[0,1],[.02,1],[0,1],[.012,1],[.03,1],[0,1.04],[.004,1],[.012,1]]},tw={cap:{y0:.205,sz:1,prof:[[.188,.205],[.19,.288],[.18,.31],[.156,.336],[.114,.355],[.056,.364],[0,.366]]},scarf:{y0:-.05,sz:.88,open:.95,openY:.235,prof:[[.236,-.05],[.236,.24],[.232,.288],[.215,.33],[.18,.362],[.11,.384],[0,.392]]}};function nw(s,e){for(let t=1;t<s.length;t++){let[n,i]=s[t];if(e<=i){let[r,o]=s[t-1];return r+(n-r)*((e-o)/(i-o))}}return 0}var Qh=new Map;function iw(s,e,t){let n=s+"|"+e;if(Qh.has(n))return Qh.get(n);let i=tw[e],r=null;try{let o=jn(`characters/villager-${String(s).padStart(2,"0")}.glb`),a=null;o.scene.traverse(l=>{l.isSkinnedMesh&&l.geometry===t&&(a=l)});let c=a?a.skeleton.bones.findIndex(l=>l.name==="head"):-1;if(c>=0){let l=a.skeleton.boneInverses[c].clone().multiply(a.bindMatrix),h=l.clone().invert();r=t.clone();let u=r.attributes.position,f=r.attributes.skinIndex,d=r.attributes.skinWeight,p=new K,y=i.prof[i.prof.length-1][1];for(let m=0;m<u.count;m++){let g=0;for(let v=0;v<4;v++)f.getComponent(m,v)===c&&(g+=d.getComponent(m,v));if(g<.5||(p.fromBufferAttribute(u,m).applyMatrix4(l),p.y<=i.y0)||i.open&&p.y<i.openY&&Math.abs(Math.atan2(p.x,p.z))<i.open)continue;p.y>y-.004&&(p.y=y-.004);let S=Math.pow(Math.pow(Math.abs(p.x),4)+Math.pow(Math.abs(p.z)/i.sz,4),.25),M=nw(i.prof,p.y);S<=M||S<1e-6||(p.x*=M/S,p.z*=M/S,p.applyMatrix4(h),u.setXYZ(m,p.x,p.y,p.z))}}}catch(o){console.warn("[VKWorld] sa\xE7 bast\u0131r\u0131lamad\u0131",s,o),r=null}return Qh.set(n,r),r}function Ug(s,e,t){let n=sp[e|0];!n||n.kind!=="cap"||s.traverse(i=>{if(!i.isSkinnedMesh||i.material.name!=="villager")return;let r=iw(ct(t|0,0,11),n.hair||"cap",i.geometry);r&&(i.geometry=r)})}var pl=null,np=new Map;function Bg(){return pl||(pl=new hn({name:"vkw-hat",vertexColors:!0,side:en})),pl}function Hg(s,e){let t=np.get(s);if(!t){try{t=e(),t.computeBoundingBox(),t.computeBoundingSphere()}catch(n){console.warn("[VKWorld] \u015Fapka \xFCretilemedi",s,n),t=null}np.set(s,t)}return t}function tu(s,e=0){let t=s|0,n=sp[t];if(!n||t===0)return null;let i=ct(e|0,0,11);if(n.node){if(!Hn("hats/hats.glb"))return null;let l=jn("hats/hats.glb").scene.getObjectByName(n.node);if(!l)return null;let h=l.clone(),u=ug[i]||0;return h.position.set(0,u,0),l.userData.vkwTop==null&&(l.userData.vkwTop=new $t().setFromObject(l).max.y),h.userData.top=l.userData.vkwTop+u,h}let r=Hg("h"+t,n.build);if(!r)return null;let o=new St(r,Bg());o.name="hat-"+t;let[a,c]=n.kind==="top"?ew[n.fit][i]:[0,1];return o.position.set(0,a,0),o.scale.set(c,1,c),o.userData.top=r.boundingBox.max.y+a,o.userData.cap=n.kind==="cap",o}function Gg(s){let e=s|0,t=Og[e];if(!t||e===0)return null;let n=Hg("a"+e,t.build);if(!n)return null;let i=new St(n,Bg());return i.name="acc-"+e,{obj:i,bone:t.bone}}function Vg(){for(let s of np.values())s&&s.dispose();for(let s of Qh.values())s&&s.dispose();pl&&pl.dispose()}var ml=1.12,sw=1.75,Wg=2.8,rw={walk:Wg,brisk:3.75,sneak:2.4,sprint:5.4,stroll:2.1};var qA=new K,rp=null,Ai=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Gt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*ml,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}|${e.acc|0}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ct(e.skin|0,0,11),n=jn(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=Fh(n.scene),r=ea("cloth",Sn[ct(e.color|0,0,19)]),o=null;i.traverse(u=>{if(u.isMesh){if(u.material.name==="cloth"&&r)u.material=r;else if(u.isSkinnedMesh&&u.userData.clothMerged&&u.material.name==="villager"){let f=Bd(Sn[ct(e.color|0,0,19)]);f&&(u.material=f)}u.castShadow=!0,u.receiveShadow=!1,u.isSkinnedMesh?(o?u.skeleton!==o&&u.skeleton.bones.length===o.bones.length&&(u.skeleton.dispose(),u.skeleton=o):o=u.skeleton,u.boundingSphere=new rn(new K(0,.3,-.15),.85),u.frustumCulled=!0):u.frustumCulled=!1}});let a=i.getObjectByName("head"),c=a?tu(e.hat,t):null;c&&(c.userData.cap&&Ug(i,e.hat,t),c.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),a.add(c));let l=Gg(e.acc),h=l&&i.getObjectByName(l.bone);h&&(l.obj.castShadow=!0,l.obj.frustumCulled=!1,h.add(l.obj)),i.scale.multiplyScalar(ml),this.world.toon&&cl(i,.012),this.model=i,this.root.add(i),this.mixer=new Us(i),this.clips=Hd(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.headAnimQ=null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=Math.max(1.72,c?.86+2.5*c.userData.top:0)*ml}buildGhost(e){let t=jn("characters/ghost.glb"),n=t.scene.clone(!0),i=ea("tint-ghost",Sn[ct(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(Sn[e.color|0]).multiplyScalar(.25));let r=Ud("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(ml*.95),this.model=n,this.root.add(n),this.mixer=new Us(n),rp||(rp=t.animations),this.clips=rp,this.headY=1.95*ml}action(e){if(this.actions[e])return this.actions[e];let t=wi.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(el,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(el,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk",n=0){this.path=e.slice(),this.mode=t,this.walkSpeed=n||0}setVisible(e){this.visible=e,this.root.visible=e&&(this.camFade==null||this.camFade>.001)}setFade(e){if(this.camFade=e,!!this.model){if(e>=.999){this.fadeMats&&(this.model.traverse(t=>{t.isMesh&&t.userData.origMat&&(t.material=t.userData.origMat,t.userData.origMat=null)}),this.fadeMats=null),this.root.visible=this.visible;return}this.fadeMats||(this.fadeMats=[],this.model.traverse(t=>{if(!t.isMesh||Array.isArray(t.material))return;let n=t.material.clone();n.transparent=!0,n.depthWrite=!0,t.userData.origMat=t.material,t.material=n,this.fadeMats.push(n)}));for(let t of this.fadeMats)t.opacity=e;this.root.visible=this.visible&&e>.001}}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let h=Math.atan2(l.x,l.z);this.yaw+=nn(h-this.yaw)*mn(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>3.7?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],h=l.x-this.pos.x,u=l.z-this.pos.z,f=Math.hypot(h,u),d=this.path.length===1;if(this.bestD==null||f<this.bestD-.05?(this.bestD=f,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,f<(d?.06:.45)||this.stuckT>.7&&(!d||f<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=this.walkSpeed||rw[this.mode]||Wg,d&&!(this.retargetAt!=null&&this.world.time-this.retargetAt<.5)&&(n=Math.min(n,.9+f*3.2));let p=h,y=u;if(!d&&f<1.2){let C=this.path[1],N=1-f/1.2;p=h*(1-N)+(C.x-this.pos.x)*N,y=u*(1-N)+(C.z-this.pos.z)*N}let m=Math.atan2(p,y),g=nn(m-this.yaw);this.yaw+=g*mn(12,e),n*=ct(1.25-Math.abs(g)/1.6,.2,1);let S=Math.min(f,this.speed*e),M=Math.sin(this.yaw),v=Math.cos(this.yaw),R=h/f,E=u/f,x=M*.55+R*.45,w=v*.55+E*.45,O=Math.hypot(x,w)||1;this.pos.x+=x/O*S,this.pos.z+=w/O*S}}else this.faceYaw!=null&&(this.yaw+=nn(this.faceYaw-this.yaw)*mn(4,e));let i=!this.path&&!(this.drive&&this.drive.speed>.05);this.speed+=(n-this.speed)*mn(n>this.speed?6:i?28:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let r=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(r){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=r?ct(this.speed/sw,.5,1.9)*(this.base==="sneak"?1.1:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=r?ct(this.speed/3.6,.6,2.2):1),r&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!r&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let o=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let h=l.t>=l.dur;o=Math.min(1,l.t/l.fade)*(h?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),h&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),o=0)}let a=0;for(let l in this.weights){let h=this.targets[l]||0,u=this.weights[l],f=this.fadeRate*e;u=u<h?Math.min(h,u+f):Math.max(h,u-f),this.weights[l]=u,a+=u}let c=a>1e-4?(1-o)/a:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let h=this.actions[l];h?h.setEffectiveWeight(this.weights[l]*c):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(o),this.animEvery===-1?this.animAcc=0:this.animAcc=Math.min(.25,(this.animAcc||0)+e),this.animTick=this.animEvery===-1?1:((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0?(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0,this.headBone&&(this.headAnimQ||(this.headAnimQ=new Yt),this.headAnimQ.copy(this.headBone.quaternion))):this.headBone&&this.headAnimQ&&this.headBone.quaternion.copy(this.headAnimQ),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let h=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ct(nn(h-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*mn(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}r&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk",n.speed),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){if(this.fadeMats){for(let e of this.fadeMats)e.dispose();this.fadeMats=null}this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var gl=new K(0,0,-620);function An(s,e,t,n,i,r,o=0,a=1){let c=Tn(e,t);if(!c)return null;let l=c.clone();return l.position.set(n,i,r),l.rotation.set(0,o*Math.PI/180,0),l.scale.setScalar(a),l.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),s.add(l),l}function op(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,c=null,l=null,h=[],u={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Hn("interior/furniture.glb")||!Hn("interior/clues.glb"))return t;e=new Gt,e.name="interior",e.position.copy(gl),e.visible=!1,s.scene.add(e);for(let B of[-2.5,0,2.5])for(let Y of[-2.5,0,2.5])An(e,"furniture","floor-planks",B,0,Y);for(let B of[-2.5,0,2.5])An(e,"furniture",B===0?"wall-wood-window":"wall-wood",B,0,-2.5,90);for(let B of[-2.5,0,2.5])An(e,"furniture",B===-2.5?"wall-wood-window":"wall-wood",-2.5,0,B,180);for(let B of[-2.5,0,2.5])An(e,"furniture",B===0?"wall-wood-door":"wall-wood",2.5,0,B,0);let O=new St(new Si(40,40),new hn({color:"#3f5a34"}));O.rotation.x=-Math.PI/2,O.position.y=-.02,e.add(O);let C=An(e,"furniture","bed",u.bed.x,0,u.bed.z);C&&C.traverse(B=>{B.isMesh&&B.material&&B.material.name==="carpet"&&(a||(a=B.material.clone()),B.material=a)}),c=An(e,"furniture","rug-round",u.rug.x,.01,u.rug.z),An(e,"furniture","table",1.6,0,-1.5),An(e,"furniture","chair",1.6,0,-.3,180),An(e,"furniture","candle",1.2,.79,-1.6),An(e,"clues","mug",1.85,.79,-1.35),An(e,"clues","bread",2.1,.79,-1.75),l=An(e,"furniture","chest",-.3,0,-2.8),An(e,"furniture","bookcase",-3.4,0,1.2,90),An(e,"furniture","lantern",u.lantern.x,0,u.lantern.z),An(e,"furniture","coat-rack",3.05,0,-2),An(e,"furniture","plant-pot",2.9,0,-3.05),An(e,"furniture","barrel",-3,0,3,0,.8),o=new hn({color:"#c9b48a",side:en});let z=new St(new Qt(.9,1.25,.04),o);z.position.set(1.55,1.75,-3.42),e.add(z);let U=new St(new Kn(.03,.03,1.1,6),new hn({color:"#5a3a22"}));return U.rotation.z=Math.PI/2,U.position.set(1.55,2.4,-3.4),e.add(U),t=!0,!0}let d=new K;function p(O,C=0){var N;return d.set(gl.x+O.x,gl.y+((N=O.y)!=null?N:C),gl.z+O.z).clone()}function y(O){if(!f())return!1;n=O;let C=Sn[ct((O.look&&O.look.color)|0,0,19)];return o.color.set(C),a&&a.color.set(C).lerp(new Ue("#ffffff"),.25),i&&(i.dispose(),i=null),O.look&&(i=new Ai(s,"room-sleeper",O.look),i.setBase("lie",0),i.pos.copy(p(u.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),m(),!0}function m(){c&&(c.position.set(u.rug.x,.01,u.rug.z),c.rotation.set(0,0,0));for(let O of h.splice(0))O.parent&&O.parent.remove(O)}function g(O){return y(O)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function S(){e&&(e.visible=!1),i&&(i.dispose(),i=null),R(),m(),n=null}function M(O,C,N,z,U=0){v(O);let B=new Ai(s,"room-"+O,C);return B.pos.copy(p(z)),B.yaw=U,B.root.rotation.y=U,s.scene.add(B.root),r.set(O,{ch:B,name:N,color:C.color|0,label:!!N}),B}function v(O){let C=r.get(O);C&&(C.ch.dispose(),r.delete(O))}function R(){for(let O of[...r.keys()])v(O)}function E(O){return e.add(O),h.push(O),O}function x(O,C){if(!(!e||!e.visible)){i&&(i.update(O,C),i.root.position.y=gl.y+u.sleeper.y+Math.sin(C*1.7)*.015);for(let N of r.values())N.ch.update(O,C)}}function w(O,C){return O==="window"?{pos:p({x:C?-6.9:-6.3,y:1.75,z:C?-2.95:-3}),look:p({x:-1.6,y:.9,z:-2.1}),fov:C?56:42}:O==="search"?{pos:p({x:C?.5:3.4,y:C?9:4.6,z:C?4.3:5.6}),look:p({x:-.5,y:.3,z:-.7}),fov:C?58:48}:{pos:p({x:C?.4:3.6,y:C?9.2:4.9,z:C?4.1:5.9}),look:p({x:C?-.45:-.9,y:.3,z:C?-.75:-1.1}),fov:C?58:48}}return{L:u,W:p,show:g,hide:S,dress:y,update:x,shot:w,addActor:M,removeActor:v,clearActors:R,addTemp:E,resetProps:m,get visible(){return!!(e&&e.visible)},get group(){return f(),e},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return c},get chest(){return l},lanternWorld(){return p(u.lantern)},dispose(){S(),e&&(s.scene.remove(e),e.traverse(O=>{O.geometry&&!O.geometry.userData.shared&&(O.geometry.type==="PlaneGeometry"||O.geometry.type==="BoxGeometry"||O.geometry.type==="CylinderGeometry")&&O.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var Yr={cancelled:!0},Xg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,na=s=>1-Math.pow(1-s,3);function nu(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===Yr&&s.preventDefault()}));function ap(s,e={}){let t=!!e.scoped,n=e.timeout||13,i=new Map,r=null,o=!1,a=0;function c(p,y,m){typeof y=="function"&&(m=y,y=null),i.set(y?p+":"+y:p,m)}function l(p){return i.get(p.kind+":"+(p.scene||""))||i.get(p.kind)}function h(p){return new Promise(y=>{if(o||!p||!p.kind){y();return}f();let m=l(p);if(!m){y();return}let g=++a;!t&&["death","hanged","shot","left"].includes(p.kind)&&s.holdDeaths((p.targets||[]).map(v=>v.id).filter(Boolean));let S=d(g,p),M={msg:p,resolve:y,ctx:S};r=M,(async()=>{try{await Promise.race([m(S,p),S.timeout(n)])}catch(v){v!==Yr&&console.warn("[VKWorld] sinematik hatas\u0131",v)}u(M)})()})}function u(p){if(!p.done){p.done=!0;try{p.ctx.cleanup()}catch(y){console.warn("[VKWorld] sinematik temizli\u011Fi",y)}r===p&&(r=null),p.resolve()}}function f(){if(r){let p=r;p.ctx.cancel(),u(p)}}function d(p,y){let m=new Map,g=new Set,S=new Set,M=[],v=[],R=!1,E=!1,x=!1,w=!1,O=()=>!o&&!R&&p===a,C=()=>O()&&!(t&&s.mainBusy&&s.mainBusy()),N={world:s,msg:y,alive:O,cancel(){R=!0;for(let z of S)z.reject(Yr);S.clear()},wait(z){return O()?nu(new Promise((U,B)=>{let Y={resolve:U,reject:B,left:z};S.add(Y),s.ticker.push(H=>S.has(Y)?(Y.left-=H,Y.left<=0?(S.delete(Y),U(),!0):!1):!0)})):nu(Promise.reject(Yr))},timeout(z){return new Promise(U=>{let B=setTimeout(U,z*1e3);g.add(B)})},tween(z,U,B=Xg){return O()?nu(new Promise((Y,H)=>{let G=0,b={resolve:Y,reject:H};S.add(b),s.ticker.push(_=>{if(!S.has(b))return!0;G=Math.min(z,G+_);try{U(B(z>0?G/z:1),_)}catch(L){console.warn(L)}return G>=z?(S.delete(b),Y(),!0):!1})})):nu(Promise.reject(Yr))},shot(z,U,B={}){C()&&(w=!0,s.rig.setOverride({pos:z.clone(),look:U.clone(),fov:B.fov||40,k:B.k||2.4}))},cut(z,U,B={}){C()&&(w=!0,s.rig.setOverride({pos:z.clone(),look:U.clone(),fov:B.fov||40,k:60},!0))},move(z,U,B,Y,H,G={}){let b=new K,_=new K;return N.cut(z,U,G),N.tween(H,L=>{C()&&(b.lerpVectors(z,B,L),_.lerpVectors(U,Y,L),s.rig.setOverride({pos:b,look:_,fov:G.fov||40,k:60},!0))},G.ease||Xg)},claim(z){let U=s.chars.get(z);return U?(m.has(U)||(m.set(U,{x:U.pos.x,y:U.pos.y,z:U.pos.z,yaw:U.yaw,visible:U.visible,inside:U.inside,peeking:U.peeking,base:U.base}),U.claimed=!0,U.run([])),U):null},add(z,U){return(U||s.scene).add(z),M.push(z),z},prop(z,U,B,Y,H,G=0,b=1){let _=s.assets.prop(z,U);if(!_)return null;let L=_.clone();return L.position.set(B,Y,H),L.rotation.y=G,L.scale.setScalar(b),L.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),N.add(L)},actor(z,U,B,Y,H=0,G){let b=s.makeActor(z,U,G);return b.pos.set(B,0,Y),b.yaw=H,b.root.rotation.y=H,M.push({dispose:()=>s.dropActor(b)}),b},hideObj(z){z&&z.visible&&(z.visible=!1,v.push(z))},tod(z,U){x=!0,s.setTodOverride(z,U)},room(){return E=!0,s.room},openRoom(z){return E=!0,t?s.openShowRoom(z):s.openRoom(z)},get scoped(){return t},fx:s.fx,sfx:(z,U)=>s.sfx(z,U),flash:(z,U)=>s.flash(z,U),cleanup(){R=!0;for(let z of g)clearTimeout(z);for(let z of S)z.reject(Yr);S.clear();for(let z of M.splice(0))z.dispose&&!z.isObject3D?z.dispose():z.parent&&z.parent.remove(z),z.userData&&z.userData.cleanup&&z.userData.cleanup();for(let z of v.splice(0))z.visible=!0;for(let[z,U]of m)z.claimed=!1,z.dropProps(),z.pos.set(U.x,U.y,U.z),z.yaw=U.yaw,z.inside=U.inside,z.peeking=U.peeking,z.alive!==!1&&z.setVisible(U.visible&&!s.isDeadShown(z.id)),z.setBase(U.base==="walk"||U.base==="sprint"||U.base==="sneak"?"idle":U.base||"idle",.2),z.run([]);t?(s.endShowRoom(),x&&s.setTodOverride(null),w&&!(s.mainBusy&&s.mainBusy())&&s.rig.setOverride(null)):(s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),x&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null)),m.size&&(m.clear(),s.reapply(!0))}};return N}return{register:c,announce:h,CANCEL:Yr,get running(){return!!r},get current(){return r?r.msg:null},skip(){f()},reset(){a++,f(),s.rig.setOverride(null)},dispose(){o=!0,a++,f()}}}var mt=(s,e,t)=>new K(s,e,t),xl=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function qg(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(b,_={}){var He;let L=e.houseAnchors(b);if(!L)return null;let A=_.back,D=A?L.backWin:{x:(L.door.x+L.frontWin.x)/2,z:(L.door.z+L.frontWin.z)/2},X=A?L.peek:L.approach,W=A?L.backWin:L.door,J=X.x-W.x,de=X.z-W.z,ie=Math.hypot(J,de)||1,ae=(_.dist||11)*(e.rig.portrait?1.3:1),Ce=(He=_.side)!=null?He:.18,Be=-de/ie*Ce,he=J/ie*Ce;return{pos:mt(D.x+(J/ie+Be)*ae,_.height||7.2,D.z+(de/ie+he)*ae),look:mt(D.x,_.lookY||1.8,D.z),a:L}}function r(b,_={}){let L=e.camera.position,A=L.x-b.x,D=L.z-b.z,X=Math.hypot(b.x,b.z);e.village.layout&&X>e.village.layout.Rp*.8&&(A=-b.x,D=-b.z),_.dir&&(A=_.dir.x,D=_.dir.z);let W=Math.hypot(A,D)||1,J=(_.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:mt(b.x+A/W*J,_.height||3,b.z+D/W*J),look:mt(b.x,_.lookY||1.1,b.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,c=()=>e.rig.portrait?1.6:1;function l(b,_,L){let A=0;e.ticker.push(D=>{if(!b.alive())return!0;if(A+=D,A<_)return!1;try{L()}catch(X){console.warn("[VKWorld]",X)}return!0})}function h(b,_,L=4.2,A=null){e.ticker.push(()=>{if(!b.alive())return!0;let D=e.camera.position;for(let X of _){if(X===A||!X.visible)continue;let W=X.pos.x-D.x,J=X.pos.z-D.z,de=X.pos.y+1-D.y;W*W+J*J+de*de*.25<L*L&&X.setVisible(!1)}return!1})}async function u(b,_,L,A,D=.3,X=2.2){if(!Hn("characters/ghost.glb")||!_)return;let W=b.actor(_,"",L,A,0,"ghost");W.root.position.y=D,b.sfx("poof",{volume:.5}),await b.tween(X,J=>{W.root.position.y=D+J*2.3,W.yaw+=.02;let de=1.3*(1-Math.max(0,J-.75)*3);W.root.scale.setScalar(Math.max(.05,de))},na),e.fx.emit("magic",L,D+2.6,A,Sn[_.color|0],12),W.setVisible(!1)}function f(b,_){e.markDead(_,{drop:!0});let L=e.houseAnchors(_);L&&l(b,.38,()=>e.fx.emit("poof",L.tomb.x,.2,L.tomb.z,"#b8a890",10)),b.sfx("poof",{volume:.6})}function d(b,_,L,A,D=10,X=2.4,W=3.5,J={x:0,z:-1},de=1){if(!Hn("characters/bat.glb"))return Promise.resolve();let ie=jn("characters/bat.glb").scene.children[0],ae=[];for(let Be=0;Be<D;Be++){let he=ie.clone(!0);he.scale.setScalar((1+Math.random()*.5)*de),b.add(he),ae.push({b:he,a:Be/D*it,r:W*(.6+Math.random()*.6),h:L+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:he.getObjectByName("wing-left"),wr:he.getObjectByName("wing-right"),ph:Math.random()*6})}b.sfx("whoosh",{volume:.6});let Ce=0;return b.tween(X,(Be,he)=>{Ce+=he;let He=Math.max(0,Be-.55)/.45;for(let le of ae){le.a+=le.sp*he;let j=le.r*(1+He*5),Le=_+Math.sin(le.a)*j+J.x*He*He*25,Ke=A+Math.cos(le.a)*j+J.z*He*He*25,ze=le.h+Math.sin(Ce*3+le.ph)*.4+He*8;le.b.position.set(Le,ze,Ke),le.b.rotation.y=le.a+Math.PI/2;let Ve=Math.sin(Ce*22+le.ph)*.9;le.wl&&(le.wl.rotation.z=Ve),le.wr&&(le.wr.rotation.z=-Ve)}},Be=>Be)}function p(b,_,L,A){if(!Hn("characters/vampire.glb"))return null;let D=jn("characters/vampire.glb"),X=D.scene.clone(!0);X.scale.multiplyScalar(1.05),X.position.set(_,0,L),X.rotation.y=A,b.add(X);let W=new Us(X),J=null,de=ae=>{let Ce=wi.findByName(D.animations,ae);if(!Ce)return;let Be=W.clipAction(Ce);J&&J!==Be&&J.fadeOut(.15),Be.reset().fadeIn(.15).play(),J=Be};de("idle"),e.ticker.push(ae=>X.parent?(W.update(ae),!1):(W.stopAllAction(),!0));let ie=y(.5,"#ff2244");return ie.position.set(0,1.85,.25),X.add(ie),{root:X,play:de}}function y(b,_){let L=g(),A=new zs({map:L,color:_,transparent:!0,depthWrite:!1,blending:Jn,fog:!1}),D=new Tr(A);return D.scale.setScalar(b),D.userData.cleanup=()=>A.dispose(),D}let m=null;function g(){if(m)return m;let b=document.createElement("canvas");b.width=b.height=64;let _=b.getContext("2d"),L=_.createRadialGradient(32,32,0,32,32,32);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.35,"rgba(255,255,255,0.45)"),L.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=L,_.fillRect(0,0,64,64),m=new ls(b),m.colorSpace=Bt,m}function S(b){let _=new Gt,L=new St(new Kn(.05,.06,.9,6),new hn({color:"#6b4426"}));L.position.y=.2,_.add(L);let A=new St(new Kn(.1,.07,.16,6),new hn({color:"#3a2a20"}));A.position.y=.66,_.add(A);let D=Dg(.38,.62,Math.random()*9);D.position.y=.7,_.add(D);let X=y(1.3,"#ffb347");return X.position.y=.95,_.add(X),e.ticker.push(()=>!_.parent&&_.userData.used?!0:(D.userData.tick(e.time),!1)),_.userData.holdScale=1/1.12/2.5*1,_.userData.used=!0,_.userData.cleanup=()=>{L.geometry.dispose(),L.material.dispose(),A.geometry.dispose(),A.material.dispose(),D.userData.cleanup(),X.userData.cleanup()},_}function M(b,_,L=1){let A=Tn(b,_);if(!A)return null;let D=A.clone();return D.userData.holdScale=1/(1.12*2.5)*L,D}function v(b=[],_=10){let L=[];for(let[A,D]of e.chars)if(!(!D.visible||b.includes(A)||D.isGhost)&&(L.push(D),L.length>=_))break;return L}function R(b,_){for(let L of b)L.faceYaw=Math.atan2(_.x-L.pos.x,_.z-L.pos.z),L.gaze(_,6,e.time)}function E(b,_,L=4){for(let A of b)A.gaze(_,L,e.time)}s.register("start",async b=>{let _=t(),L=v([],20);b.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let A=mt(0,_*1.1,_*1.3),D=mt(0,.4,0),X=mt(_*.3,4.8,_*.8+2),W=mt(0,1,0);l(b,.9,()=>E(L,e.camera.position,4)),await b.move(A,D,X,W,3,{fov:o()+4});for(let J of L)Math.random()<.6&&J.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await b.wait(1.6)}),s.register("night",async b=>{let _=t(),L=v([],20);for(let A of L)Math.random()<.7&&A.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});b.tod(21),b.sfx("whoosh",{volume:.5}),await b.move(mt(0,3.2,_*.75),mt(0,1.2,0),mt(0,_*.55,_*1.15),mt(0,_*.9,-_*2.5),3.6,{fov:o()+6}),await b.wait(.6)}),s.register("death",async(b,_)=>{let L=(_.targets||[]).slice(0,2);b.tod(5.7);for(let A of L){let D=A.cause==="zehir"?"poison":["bite","bats","vanish"].includes(A.scene)?A.scene:"bite";if(A.id===e.meId()){if(e.sawOwnDeath&&e.sawOwnDeath()){await O(b,A.id,L.length>1?.7:1);continue}if(await C(b,A,D==="poison"))continue}await w(b,A.id,D,L.length>1?.8:1)}});function x(b,_){let L=n();if(!L)return[];let A=L.houses,D=A.findIndex(W=>W.id===b);if(D<0)return[];let X=[];for(let W=1;W<A.length&&X.length<_;W++)for(let J of[D+W,D-W]){let de=A[(J%A.length+A.length)%A.length];!de||de.id===b||X.includes(de.id)||X.length>=_||e.isDeadShown(de.id)||de.id===e.meId()&&!e.playerById(de.id)||e.playerById(de.id)&&X.push(de.id)}return X}async function w(b,_,L,A){let D=i(_,{dist:9.5,height:4.6,side:.38,lookY:1});if(!D)return;let X=D.a,W=e.playerById(_),J=W?W.look:null,de=mt(D.pos.x*.9+X.approach.x*.1,D.pos.y-.8,D.pos.z*.9+X.approach.z*.1),ie={x:X.door.x+(X.approach.x-X.door.x)*1.15,z:X.door.z+(X.approach.z-X.door.z)*1.15},ae=mt(ie.x,.7,ie.z);b.cut(D.pos,ae,{fov:o()}),b.move(D.pos,ae,de,ae,5.6*A,{fov:o()}),await b.wait(.35*A),e.village.openDoor(_,4.5),b.sfx("door");let Ce=x(_,3),Be=[];if(h(b,Be,5),Ce.forEach((Le,Ke)=>l(b,(.9+Ke*.35)*A,()=>{let ze=e.houseAnchors(Le),Ve=e.playerById(Le);if(!ze||!Ve)return;e.village.openDoor(Le,2.5);let _t=b.actor(Ve.look,"",ze.inside.x,ze.inside.z,ze.rotY);Be.push(_t);let Mt={x:ze.approach.x+(ie.x-ze.approach.x)*.6,z:ze.approach.z+(ie.z-ze.approach.z)*.6};_t.run([{walk:[ze.approach,Mt],mode:"walk"},{faceTo:ie},{wait:.6},{once:Math.random()<.5?"emote-no":"interact-right",opts:{timeScale:.8}}])})),L==="vanish"){await b.wait(.4*A);for(let ze=0;ze<3;ze++)e.fx.emit("mist",X.door.x,.4+ze*.3,X.door.z,"#9b7bff",8),await b.wait(.22*A);let Le=J?tu(J.hat,J.skin):null;if(Le){Le.scale.multiplyScalar(4.5),Le.position.set(0,0,0);let ze=-new $t().setFromObject(Le).min.y;Le.position.y=ze;let Ve=new Gt;Ve.add(Le),Le=Ve}else{let ze=Tn("furniture","pillow");ze&&(Le=ze.clone(),Le.scale.setScalar(.6))}Le&&(Le.position.set(ie.x,.02,ie.z),Le.rotation.set(0,Math.random()*it,.25),b.add(Le),e.fx.emit("poof",ie.x,.2,ie.z,"#b8a890",6)),b.sfx("whoosh"),await b.wait(1.4*A),e.flickerHouse(_,1.2*A),await b.wait(.6*A);let Ke=u(b,J,X.door.x,X.door.z,.4,2*A);await b.wait(.6*A),f(b,_),await Ke;return}let he=J?b.actor(J,"",X.inside.x,X.inside.z,X.rotY):null;if(he){he.run([{walk:[X.door,ie],mode:"sneak"}]);let Le=0;e.ticker.push(Ke=>!b.alive()||!he.root.visible||he.base==="lie"?!0:(Le+=Ke*7,he.root.rotation.z=Math.sin(Le)*.12,!1))}if(L==="poison"){b.sfx("potion");for(let Le=0;Le<5;Le++)he&&e.fx.emit("bubble",he.pos.x,1.3,he.pos.z,"#94d82d",5),await b.wait(.24*A)}else L==="bats"?(b.sfx("bite",{volume:.6}),d(b,(X.door.x+X.backWin.x)/2,(X.height||4)+.6,(X.door.z+X.backWin.z)/2,6,2*A,1.6,{x:X.backWin.x-X.door.x,z:X.backWin.z-X.door.z},.8),await b.wait(1.2*A)):(await b.wait(1*A),b.sfx("bite",{volume:.5}),e.flash(.22,"#d7263d"),await b.wait(.2*A));he&&(he.run([]),he.path=null,he.root.rotation.z=0,he.faceYaw=Math.atan2(ie.x-X.door.x,ie.z-X.door.z),he.setBase("lie",.15),L==="poison"&&e.fx.emit("bubble",he.pos.x,.5,he.pos.z,"#94d82d",10),e.fx.emit("dust",he.pos.x,.1,he.pos.z,null,6)),e.flickerHouse(_,1.2*A),await b.wait(1.3*A);let He=he?he.pos.x:ie.x,le=he?he.pos.z:ie.z,j=u(b,J,He,le,.3,2*A);await b.wait(.7*A),he&&(e.fx.emit("poof",He,.3,le,"#d8d0ff",12),he.setVisible(!1)),f(b,_),await j,await b.wait(.2)}async function O(b,_,L){let A=i(_,{dist:11,height:7.4,side:.2,lookY:2.2});if(!A){e.markDead(_,{quiet:!0,drop:!0});return}b.cut(A.pos,A.look,{fov:o()}),await b.wait(.5*L),e.village.tombOf&&e.village.tombOf(_)?e.markDead(_,{quiet:!0}):f(b,_),await b.wait(1.3*L)}async function C(b,_,L){let A=b.openRoom(_.id);if(!A)return!1;let D=e.playerById(_.id),X=A.shot("inside",e.rig.portrait);b.cut(X.pos,X.look,{fov:X.fov});let W=A.L,J=A.W({x:W.bedside.x,z:W.bedside.z}),de=A.W({x:W.sleeper.x,z:W.sleeper.z});await b.wait(1.1),b.sfx("door",{volume:.6});let ie=A.W(W.doorStep),ae=A.W(W.doorIn),Ce=p(b,ie.x,ie.z,Math.atan2(ae.x-ie.x,ae.z-ie.z));if(Ce){L&&Ce.root.traverse(Ke=>{if(Ke.isMesh){let ze=new jt({color:"#0b0a12",transparent:!0,opacity:.82});Ke.material=ze,Ke.userData.cleanup=()=>ze.dispose()}}),Ce.play("walk");let he=[ie,ae,J],He=[Math.hypot(ae.x-ie.x,ae.z-ie.z),Math.hypot(J.x-ae.x,J.z-ae.z)],le=He[0]+He[1];await b.tween(le/1.6,Ke=>{let ze=Ke*le,[Ve,_t,Mt]=ze<He[0]?[he[0],he[1],ze/He[0]]:[he[1],he[2],(ze-He[0])/He[1]];Ce.root.position.x=Ve.x+(_t.x-Ve.x)*Mt,Ce.root.position.z=Ve.z+(_t.z-Ve.z)*Mt,Ce.root.rotation.y=Math.atan2(_t.x-Ve.x,_t.z-Ve.z)},Ke=>Ke),Ce.play("idle");let j=Ce.root.rotation.y,Le=Math.atan2(de.x-Ce.root.position.x,de.z-Ce.root.position.z);await b.tween(.5,Ke=>{Ce.root.rotation.y=j+(((Le-j+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*Ke,Ce.root.rotation.x=.35*Ke}),Ce.play("interact-right")}e.flickerRoom(1.5),b.sfx(L?"potion":"bite",{volume:.7}),L||e.flash(.25,"#d7263d"),await b.wait(1.6),Ce&&(e.fx.emit("smoke",Ce.root.position.x,1,Ce.root.position.z,"#2a2238",16),Ce.root.visible=!1),await b.wait(.3);let Be=u(b,D&&D.look,de.x,de.z,.9,2.2);return e.markDead(_.id,{quiet:!0,drop:!0}),await Be,await b.wait(.4),!0}s.register("safe",async b=>{let _=t();b.tod(5.4,!0),l(b,.05,()=>b.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((A,D)=>l(b,.7+D*.26,()=>e.village.openDoor(A,1.4))),await b.move(mt(-_*.9,_*.45,_*.95),mt(0,2,0),mt(_*.55,_*.55,_*1),mt(_*1.6,4,-_*.6),4.6,{fov:o()+4}),await b.wait(.3)}),s.register("nohang",async b=>{let _=t(),L=v([],20);E(L,mt(0,1,0),4),L.forEach((A,D)=>l(b,D*.09,()=>A.playOnce("emote-no",{timeScale:.9}))),await b.move(mt(0,4,_*.55),mt(0,1,0),mt(0,_*.8,_*1.15),mt(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async b=>{let _=t(),L=v([],20).map(A=>b.claim(A.id)).filter(Boolean);for(let A of L)A.setBase(Math.random()<.5?"sit":"warm",.5);b.tod(19.6),await b.move(mt(0,3.4,_*.7),mt(0,1,0),mt(0,_*.45,_*1.05),mt(0,_*.8,-_*2.5),4,{fov:o()+6})}),s.register("left",async(b,_)=>{let[L]=xl(_),A=L&&e.chars.get(L);if(A&&A.visible){b.claim(L);let D=r(A.pos,{dist:6});b.shot(D.pos,D.look,{fov:o()}),A.faceYaw=Math.atan2(e.camera.position.x-A.pos.x,e.camera.position.z-A.pos.z),await b.wait(.6),A.playOnce("emote-yes",{timeScale:.8}),await b.wait(1.4),e.fx.emit("mist",A.pos.x,.4,A.pos.z,"#c9c2d3",22),b.sfx("whoosh"),e.markDead(L,{quiet:!0}),A.setVisible(!1),await b.wait(1.4)}else if(L){let D=i(L,{dist:10});D&&(b.shot(D.pos,D.look,{fov:o()}),await b.wait(1),e.fx.emit("mist",D.a.door.x,.6,D.a.door.z,"#c9c2d3",20),f(b,L),await b.wait(1.6))}}),s.register("hanged",async(b,_)=>{let[L]=xl(_),A=["gallows","exile","cellar"].includes(_.scene)?_.scene:"gallows",D=L&&e.chars.get(L);if(!D){await b.wait(1.5);return}b.claim(L),D.setVisible(!0);let X=v([L],40).map(J=>b.claim(J.id)).filter(Boolean),W=X.slice(0,9);for(let J of X.slice(9))J.setVisible(!1);A==="gallows"?await U(b,D,W,L):A==="exile"?await B(b,D,W,L):await Y(b,D,W,L)});function N(b,_){let L=n(),A=L.gateAngle+b,D=L.Rp*_;return{x:Math.sin(A)*D,z:Math.cos(A)*D,a:A}}function z(b,_,L,A,D={}){let X=b.length,W=D.spread||2.2;b.forEach((J,de)=>{let ie=A+(D.front?0:Math.PI)+(de-(X-1)/2)/Math.max(1,X)*W;J.pos.set(_.x+Math.sin(ie)*L+(Math.random()-.5)*.4,0,_.z+Math.cos(ie)*L+(Math.random()-.5)*.4),J.yaw=Math.atan2(_.x-J.pos.x,_.z-J.pos.z),J.faceYaw=J.yaw,J.gaze(_,8,e.time)})}async function U(b,_,L,A){let D=N(.25,.82),X=D.a+Math.PI;b.prop("village","platform-wood",D.x,0,D.z,X,1),b.prop("village","frame-wood",D.x,1.18,D.z,X,1);let W={x:Math.sin(X),z:Math.cos(X)},J={x:Math.cos(X),z:-Math.sin(X)};b.prop("village","ladder",D.x+W.x*1.5-J.x*.75,0,D.z+W.z*1.5-J.z*.75,X,.8);let de=new St(new Kn(.035,.035,1,6),new hn({color:"#c8a46a"}));de.position.set(D.x,1.18+2.35-.5,D.z);let ie=new St(new Fs(.16,.035,6,12),de.material);ie.position.set(D.x,1.18+1.75,D.z),ie.userData.cleanup=()=>{de.geometry.dispose(),ie.geometry.dispose(),de.material.dispose()},b.add(de),b.add(ie);let ae=e.rig.portrait;z(L,{x:D.x,z:D.z},ae?3.6:4.2,X-1.25,{front:!0,spread:ae?1.4:1.7});let Ce={x:D.x+W.x*3.4,z:D.z+W.z*3.4};_.pos.set(Ce.x,0,Ce.z),_.yaw=X+Math.PI,_.faceYaw=_.yaw;let Be=ae?8:7.4,he=ae?8:9.6,He=ae?a():32,le=mt(D.x+W.x*Be+J.x*he,ae?6.2:5,D.z+W.z*Be+J.z*he),j=mt(D.x+W.x*Be*.8+J.x*he*.8,ae?5.2:4.2,D.z+W.z*Be*.8+J.z*he*.8),Le=Ve=>mt(D.x-W.x*(ae?0:.7)-J.x*.5,Ve,D.z-W.z*(ae?0:.7)-J.z*.5);b.move(le,Le(ae?1.6:1.7),j,Le(ae?1.9:2),4.2,{fov:He}),h(b,L,6),_.run([{walk:[{x:D.x+W.x*1.6,z:D.z+W.z*1.6}],mode:"walk"}]),await b.wait(1.4),await b.tween(.5,Ve=>{_.pos.y=Ve*1.2,_.pos.x=D.x+W.x*1.6*(1-Ve),_.pos.z=D.z+W.z*1.6*(1-Ve)}),_.run([]),_.faceYaw=X,_.yaw=X,_.setBase("idle",.2),await b.wait(.5),_.playOnce("emote-no",{timeScale:.9}),b.sfx("hang",{volume:.7}),await b.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",_.pos.x,1.4,_.pos.z,null,26),b.sfx("poof"),_.setVisible(!1);for(let Ve of L)Math.random()<.6&&Ve.playOnce(Math.random()<.5?"emote-no":"interact-right");let Ke=e.playerById(A),ze=u(b,Ke&&Ke.look,D.x,D.z,1.4,1.8);e.markDead(A,{quiet:!0,drop:!0}),await ze}async function B(b,_,L,A){let D=n(),X=D.gateAngle,W=(ze,Ve=0)=>({x:Math.sin(X+Ve/ze)*ze,z:Math.cos(X+Ve/ze)*ze}),J=W(D.R+2),de=W(D.R-.6),ie=e.fogBoost(.6),ae=X+Math.PI/2,Ce=b.prop("graveyard","iron-fence-gate",J.x,0,J.z,ae,1);_.pos.set(de.x,0,de.z),_.yaw=X,_.faceYaw=X;let Be=L.slice(0,6);Be.forEach((ze,Ve)=>{let _t=(Ve-(Be.length-1)/2)*1.1,Mt=W(D.R-3.3-Ve%2*1,_t*(e.rig.portrait?.75:1));ze.pos.set(Mt.x,0,Mt.z),ze.yaw=X,ze.faceYaw=X,Ve%2===0?(ze.hold(S(b),"right",[0,-.12,.02]),ze.setBase("hold",.2)):ze.hold(M("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let ze of L.slice(6))ze.setVisible(!1);let he=e.rig.portrait,He=W(Math.max(D.R-(he?12:11),2.8),he?1.2:-2.2),le=he?10.5:9.6,j=W(D.R+(he?1.5:3),0);b.cut(mt(He.x,le,He.z),mt(j.x,.8,j.z),{fov:a()});let Le=W(D.R+15);h(b,Be,8,_),_.run([{walk:[J,Le],mode:"walk"}]),Be.forEach((ze,Ve)=>{let _t=W(D.R-1.2-Ve%2*.9,(Ve-2.5)*1.1);ze.run([{wait:.4},{walk:[_t],mode:"walk"},{pose:Ve%2===0?"hold":"idle"}])}),b.sfx("whoosh",{volume:.4});let Ke=W(D.R-2,he?.6:-1.2);if(await b.move(mt(He.x,le,He.z),mt(j.x,.8,j.z),mt(Ke.x,he?6.8:6,Ke.z),mt(Le.x,.9,Le.z),4.8,{fov:a()}),e.fx.emit("mist",_.pos.x,.6,_.pos.z,"#d8dde4",16),_.setVisible(!1),Ce){let ze=Ce.rotation.y;Ce.rotation.y=ze+1.3,b.sfx("door"),await b.tween(.6,Ve=>{Ce.rotation.y=ze+1.3*(1-Ve)},na)}e.markDead(A,{quiet:!0,drop:!0}),await b.wait(.8),ie()}async function Y(b,_,L,A){let D=N(1.1,.9),X=D.a+Math.PI;b.prop("village","trapdoor",D.x,.01,D.z,X,.75);let W=new Gt;W.position.set(D.x-Math.cos(X)*.85,.12,D.z+Math.sin(X)*.85),W.rotation.y=X;let J=new St(new Qt(1.7,.1,1.7),new hn({color:"#7a5232"}));J.position.x=.85;let de=new St(new Qt(1.72,.12,.18),new hn({color:"#3a3a44"}));de.position.set(.85,.01,.45),W.add(J,de),W.userData.cleanup=()=>{J.geometry.dispose(),J.material.dispose(),de.geometry.dispose(),de.material.dispose()},b.add(W);let ie=new St(new Ir(.8,16),new jt({color:"#0b0910"}));ie.rotation.x=-Math.PI/2,ie.position.set(D.x,.03,D.z),ie.userData.cleanup=()=>{ie.geometry.dispose(),ie.material.dispose()},b.add(ie);let ae=e.rig.portrait;z(L,D,ae?3.4:4,X,{spread:ae?1.7:2.3});let Ce={x:Math.sin(X),z:Math.cos(X)},Be={x:Math.cos(X),z:-Math.sin(X)};_.pos.set(D.x+Ce.x*.5+Be.x*2.6,0,D.z+Ce.z*.5+Be.z*2.6);let he=ae?8.6:7.2,He=ae?2.2:3.8;b.cut(mt(D.x+Ce.x*he+Be.x*He,ae?5.4:4.4,D.z+Ce.z*he+Be.z*He),mt(D.x+Ce.x*.5,ae?.9:.7,D.z+Ce.z*.5),{fov:a()}),h(b,L,ae?4.6:4),b.sfx("door"),await b.tween(.8,j=>{W.rotation.z=j*1.9},na),_.run([{walk:[{x:D.x,z:D.z}],mode:"walk"}]),await b.wait(1.8),_.run([]),_.playOnce("fall",{timeScale:.6}),await b.tween(1,j=>{_.pos.y=-2.2*j},j=>j*j),_.setVisible(!1),b.sfx("door"),await b.tween(.5,j=>{W.rotation.z=1.9*(1-j)},j=>j*j),e.fx.emit("poof",D.x,.3,D.z,"#b8a890",14);let le=b.prop("clues","key",D.x+Be.x*.6,.35,D.z+Be.z*.6,X,1.4);le&&e.fx.emit("magic",le.position.x,.6,le.position.z,"#ffd27a",10),e.markDead(A,{quiet:!0,drop:!0});for(let j of L)Math.random()<.5&&j.playOnce("emote-yes",{timeScale:.8});await b.wait(1.3)}function H(b,_,L){let A=M("clues","bow",1.1);A&&(A.rotation.set(0,0,0),_.hold(A,"left",[0,-.13,.05])),_.setBase("holdboth",.25),L&&(_.faceYaw=Math.atan2(L.x-_.pos.x,L.z-_.pos.z),_.yaw=_.faceYaw)}async function G(b,_,L,A=.7){let D=Tn("clues","arrow");if(!D)return;let X=D.clone();X.scale.setScalar(.9),b.add(X);let W=mt(L.x-_.x,L.y-_.y,L.z-_.z);b.sfx("shot"),await b.tween(A,J=>{X.position.set(_.x+W.x*J,_.y+W.y*J+Math.sin(J*Math.PI)*1.2,_.z+W.z*J),X.rotation.y=Math.atan2(W.x,W.z),X.rotation.x=-Math.cos(J*Math.PI)*.5},J=>J)}return s.register("hunter",async(b,_)=>{let[L]=xl(_),A=L&&e.chars.get(L);if(A){b.claim(L),A.setVisible(!0),H(b,A,mt(0,0,0));let D=r(A.pos,{dist:4.8,height:1.4,lookY:1.4});b.move(mt(D.pos.x,.9,D.pos.z),D.look,mt(D.pos.x*1.05,2,D.pos.z*1.05),D.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),b.sfx("hunter",{volume:.6}),await b.wait(3.4)}else await b.wait(1.5)}),s.register("shot",async(b,_)=>{let[L]=xl(_),A=_.actorId&&e.chars.get(_.actorId),D=L&&e.chars.get(L);if(!D){await b.wait(1.5);return}b.claim(L),D.setVisible(!0),A&&(b.claim(_.actorId),A.setVisible(!0),H(b,A,D.pos)),D.faceYaw=A?Math.atan2(A.pos.x-D.pos.x,A.pos.z-D.pos.z):D.yaw;let X=A?A.pos:mt(0,0,0),W=mt(X.x-D.pos.x,0,X.z-D.pos.z).normalize(),J=mt(W.z,0,-W.x),de=mt((X.x+D.pos.x)/2,1,(X.z+D.pos.z)/2),ie=Math.max(4,Math.hypot(X.x-D.pos.x,X.z-D.pos.z)),ae=mt(-de.x,0,-de.z).normalize(),Ce=J.dot(ae)>=0?J:J.clone().multiplyScalar(-1);b.cut(mt(de.x+Ce.x*(ie*.9+4),4.6+ie*.2,de.z+Ce.z*(ie*.9+4)),de,{fov:o()}),await b.wait(1),A&&A.playOnce("attack-melee-right",{timeScale:1.4});let Be=G(b,mt(X.x,1.5,X.z),mt(D.pos.x,1.1,D.pos.z),.75),he=r(D.pos,{dir:Ce,dist:6,height:3.6});b.shot(he.pos,he.look,{fov:o(),k:2.5}),await Be,e.flash(.4,"#ff8364"),e.fx.emit("poof",D.pos.x,.9,D.pos.z,null,22),b.sfx("poof"),D.setVisible(!1);let He=e.playerById(L),le=u(b,He&&He.look,D.pos.x,D.pos.z,.3,1.8);e.markDead(L,{quiet:!0,drop:!0}),await le,await b.wait(.4)}),s.register("nohunt",async b=>{let _=e.getState(),L=_&&_.room.hunterId,A=L&&e.chars.get(L);if(A){b.claim(L),A.setVisible(!0);let D=mt(A.pos.x*3+8,0,A.pos.z*3-30);H(b,A,D);let X=r(A.pos,{dist:5.5});b.shot(X.pos,X.look,{fov:o()}),await b.wait(.9),await G(b,mt(A.pos.x,1.5,A.pos.z),mt(D.x,6,D.z),1.1),A.dropProps(),A.setBase("idle",.2),A.playOnce("emote-no"),await b.wait(1.6)}else await b.wait(1.5)}),s.register("win",async(b,_)=>{let L=xl(_),A=t(),D=_.winner;D==="vampir"?(b.tod(23.2,!0),e.moonOverride("#ff4a4a")):D==="soytari"?b.tod(18.4):b.tod(10.2);let X=L.map(ie=>e.chars.get(ie)).filter(ie=>ie&&ie.visible).slice(0,10);for(let ie of X)b.claim(ie.id);let W=v(L,12).map(ie=>b.claim(ie.id)).filter(Boolean);if(D==="soytari"&&X[0]){let ie=X[0];ie.pos.set(0,0,3),ie.yaw=0,ie.faceYaw=0,ie.setBase("cheer",.2),z(W,{x:0,z:3},4.5,0);for(let Ce of W)Ce.setBase("sad",.3);let ae=y(4,"#f2c12e");ae.position.set(0,1.2,3),b.add(ae)}else{for(let ie of X)ie.setBase(D==="vampir"?"loom":"cheer",.3);for(let ie of W)ie.setBase("sad",.3)}D==="vampir"&&d(b,0,5,0,16,5.5,A*.5,{x:0,z:-1});let J=0,de=D!=="vampir";await b.tween(5.6,(ie,ae)=>{let Ce=-.9+ie*1.6,Be=A*.85*c();if(e.rig.setOverride({pos:mt(Math.sin(Ce)*Be,A*.5*c(),Math.cos(Ce)*Be),look:mt(0,1,0),fov:o()+2,k:60},!0),J+=ae,de&&J>.55){J=0;let he=X[Math.floor(Math.random()*Math.max(1,X.length))];he&&(e.fx.emit("confetti",he.pos.x,2.2,he.pos.z,null,14),Math.random()<.5&&he.playOnce("jump"))}},ie=>ie)}),s.register("promote",async b=>{let _=e.meId(),L=_&&e.chars.get(_);if(L&&L.visible){b.claim(_);let A=r(L.pos,{dist:6,height:4.2});b.shot(A.pos,A.look,{fov:o()}),L.setBase("loom",.3);let D=y(.6,"#ff2244");D.position.set(0,.36,.12),L.headBone&&(L.headBone.add(D),b.add(D,L.headBone)),e.flash(.5,"#d7263d"),await d(b,L.pos.x,1.8,L.pos.z,12,3.4,1.8)}else if(_){let A=i(_,{dist:10});A&&(b.shot(A.pos,A.look,{fov:o()}),e.flash(.5,"#d7263d"),await d(b,A.a.door.x,3,A.a.door.z,12,3.4,3))}await b.wait(.4)}),s.register("seer",async(b,_)=>{let L=(_.targets||[])[0];if(!L)return;let A=e.openRoom(L.id);if(!A){await b.wait(1.5);return}let D=e.playerById(e.meId()),X=A.shot("search",e.rig.portrait);b.cut(X.pos,X.look,{fov:X.fov});let W=D?A.addActor("kahin",D.look,D.name,A.L.doorOut,-Math.PI/2):null,J=Be=>A.W(Be);W&&W.run([{walk:[J(A.L.doorIn),J({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:J(A.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[J({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:J({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[J({x:.9,z:.2})],mode:"sneak"},{faceTo:J(A.L.rug)},{pose:"peek"}]),b.sfx("door",{volume:.5}),await b.wait(4.6);let de=L.cause==="vampir",ie=A.rug;if(de){let Be=ie.position.x;b.tween(.7,le=>{ie.position.x=Be+1.6*le,ie.rotation.z=-.25*Math.sin(le*Math.PI)},na),await b.wait(.3);let he=A.addTemp(Tn("clues","coffin").clone());he.position.set(A.L.rug.x,-.4,A.L.rug.z),he.scale.setScalar(.62),he.rotation.y=.4,b.tween(.6,le=>{he.position.y=-.4+.42*le},na);for(let le=0;le<3;le++){let j=A.addTemp(Tn("clues","potion").clone());j.position.set(A.L.rug.x+.9+le*.32,0,A.L.rug.z-.6+le*.2);let Le=y(.9,"#ff2244");Le.position.y=.4,j.add(Le)}let He=A.W({x:A.L.rug.x,z:A.L.rug.z});e.fx.emit("magic",He.x,.8,He.z,"#ff2244",30),e.flash(.55,"#d7263d"),b.sfx("seer"),d(b,He.x,1.2,He.z,3,2,.8,{x:0,z:1},.45),W&&(W.setBase("idle",.2),W.playOnce("emote-no"))}else{let Be=["bread","cheese","apple","mug"],he=A.W({x:A.L.rug.x,z:A.L.rug.z});Be.forEach((He,le)=>{let j=Tn("clues",He);if(!j)return;let Le=A.addTemp(j.clone());Le.position.set(A.L.rug.x-.5+le*.35,.02,A.L.rug.z+.2-le%2*.3),Le.scale.setScalar(1.3)}),e.fx.emit("magic",he.x,.6,he.z,"#ffe08a",24),b.sfx("seer"),W&&(W.setBase("idle",.2),W.playOnce("emote-yes"))}let ae=A.shot("inside",e.rig.portrait),Ce=mt(ae.look.x+(ae.pos.x-ae.look.x)*.78,ae.look.y+(ae.pos.y-ae.look.y)*.8,ae.look.z+(ae.pos.z-ae.look.z)*.78);b.shot(Ce,A.W({x:A.L.rug.x,y:.4,z:A.L.rug.z}),{fov:ae.fov,k:2.5}),await b.wait(2.2)}),s.register("watch",async(b,_)=>{let L=(_.targets||[])[0];if(!L)return;if(e.showWatched&&e.showWatched(L.id)){await b.wait(.6);return}let A=e.openRoom(L.id);if(!A){await b.wait(1.5);return}let D=A.shot("window",e.rig.portrait);b.cut(D.pos,D.look,{fov:D.fov});let X=e.playerById(e.meId());X&&A.addActor("gozcu",X.look,"",A.L.winOut,Math.PI/2).setBase("peek",0);let W=(_.visitors||[]).map(ie=>e.playerById(ie)).filter(Boolean),J=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!W.length){await b.wait(2.2),e.diedTonight(L.id)?(e.flickerRoom(1.4),await b.wait(1.6)):await b.wait(1.4);return}let de=ct(4/W.length,.8,1.4);for(let ie=0;ie<W.length;ie++){let ae=W[ie],Ce=A.addActor("v"+ie,ae.look,ae.name,A.L.doorStep,-Math.PI/2),Be=J[ie%J.length];Ce.run([{walk:[A.W(A.L.doorIn),A.W(Be)],mode:"walk"},{faceTo:A.W({x:A.L.sleeper.x,z:-1.3})},{pose:"idle"}]),b.sfx("door",{volume:.35}),await b.wait(de)}await b.wait(1.6),e.diedTonight(L.id)?(e.flickerRoom(1.4),await b.wait(1.8)):await b.wait(1.2)}),{figure:p,ghostRise:u,makeGlow:y,bats:d,houseView:i,fov:o}}var ow={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},iu={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};iu["panayir-haftasi"]=iu.panayir;function Yg(s){return{...ow,...iu[s]||{},id:iu[s]?s:null}}var vl=new K,aw=new K,su=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new K,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new K,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new K,this.ovLook=new K,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,c){let l=this.scratch;l.fov=i,this.applyView(l);let h=aw.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),u=a,f=c;for(let d=0;d<22;d++){let p=(u+f)/2;l.position.copy(e).addScaledVector(h,p),l.lookAt(e),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert();let y=!0;for(let m=0;m<r.length&&y;m++){if(vl.copy(r[m]).applyMatrix4(l.matrixWorldInverse),vl.z>-.5){y=!1;break}vl.applyMatrix4(l.projectionMatrix),(Math.abs(vl.x)>o||Math.abs(vl.y)>o)&&(y=!1)}y?f=p:u=p}return f}drag(e,t){let n=this.user;n.az=ct(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ct(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ct(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let g=mn(r.active?1.2:3,e);r.az+=(0-r.az)*g,r.el+=(0-r.el)*g,r.zoom+=(1-r.zoom)*g,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:mn(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=nn(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,c=ct(i.el+r.el,.12,1.45),l=i.dist*r.zoom,h=this.camera,u=i.target.x+Math.sin(a)*Math.cos(c)*l,f=i.target.y+Math.sin(c)*l,d=i.target.z+Math.cos(a)*Math.cos(c)*l,p=this.override?1:0;if(this.ovW+=(p-this.ovW)*mn(this.override?this.override.k||2.5:2,e),this.override){let g=mn(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,g),this.ovLook.lerp(this.override.look,g)}let y=this.ovW;h.position.set(u+(this.ovPos.x-u)*y,f+(this.ovPos.y-f)*y,d+(this.ovPos.z-d)*y),this.clampFn&&y<.5&&this.clampFn(h.position),this.lookPoint||(this.lookPoint=new K),this.lookPoint.copy(i.target).lerp(this.ovLook,y),h.lookAt(this.lookPoint);let m=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*y;Math.abs(h.fov-m)>.01&&(h.fov=m,h.updateProjectionMatrix()),h.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var lw=`
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
`,qs=null,ru=0;function cw(){ru++,!qs&&(qs=document.createElement("style"),qs.id="vkw-style",qs.textContent=lw,document.head.appendChild(qs))}function hw(){ru--,ru<=0&&qs&&(qs.remove(),qs=null,ru=0)}var lp=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wn=new K;function Kg(s,e){cw();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,c=!1,l={top:0,bottom:0,left:0,right:0},h=0,u=document.createElement("button");u.className="vkw-recenter",u.type="button",u.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",u.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),u.textContent="\u2316",u.addEventListener("click",H=>{H.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',p='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",H=>{H.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",H=>H.stopPropagation()),t.appendChild(u),t.appendChild(f);function y(H,G){let b=0,_=0,L=0;H.addEventListener("pointerdown",A=>{b=A.clientX,_=A.clientY,L=performance.now(),A.stopPropagation()}),H.addEventListener("pointerup",A=>{A.stopPropagation(),Math.hypot(A.clientX-b,A.clientY-_)<12&&performance.now()-L<700&&G()}),H.addEventListener("click",A=>A.stopPropagation())}function m(H){let G=n.get(H);if(G)return G;let b=document.createElement("div");return b.className="vkw-tag",b.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(b,u),G={id:H,el:b,mark:b.children[0],votes:b.children[1],name:b.children[2],job:b.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},y(b,()=>e.onTagTap(H)),n.set(H,G),G}function g(H){let G=i.get(H);if(G)return G;let b=document.createElement("div");return b.className="vkw-plaque",t.insertBefore(b,t.firstChild),G={el:b,sig:"",cls:"",shown:!1},y(b,()=>e.onPlaqueTap(H)),i.set(H,G),G}function S(H,G){let b=m(H),_=G.name+"|"+G.job+"|"+G.color+"|"+G.badges;_!==b.sig&&(b.sig=_,b.name.innerHTML=`<i style="background:${Sn[G.color]||"#999"}"></i>${G.badges?`<span>${G.badges}</span>`:""}<span>${lp(G.name)}</span>`,b.job.textContent=G.job||"",b.jobText=G.job||"",b.measured=!1);let L=G.mark?G.mark.label+G.mark.color:"";L!==b.markSig&&(b.markSig=L,b.mark.hidden=!G.mark,G.mark&&(b.mark.textContent=G.mark.label,b.mark.style.setProperty("--c",G.mark.color)),b.measured=!1);let A=G.votes?G.votes.total+":"+G.votes.dots.join(","):"";A!==b.voteSig&&(b.voteSig=A,b.votes.hidden=!G.votes,G.votes&&(b.votes.innerHTML=`<b>${G.votes.total}</b>`+G.votes.dots.map(W=>`<i style="background:${W.color}">${W.w>1?"2":""}</i>`).join("")),b.measured=!1);let D=!!b.jobText&&(!c||G.picked||G.hover);b.job.hidden===D&&(b.job.hidden=!D,b.measured=!1);let X="vkw-tag"+(c?" cmp":"")+(G.me?" me":"")+(G.off?" off":"")+(G.dead?" dead":"")+(G.sel?" sel":"")+(G.picked?" picked":"")+(G.hover?" hover":"");X!==b.cls&&(b.cls=X,b.el.className=X),G.selColor&&b.el.style.setProperty("--c",G.selColor),b.data=G}function M(H,G){let b=g(H),_=G.name+"|"+G.color+"|"+(G.mark?G.mark.label:"");_!==b.sig&&(b.sig=_,b.el.innerHTML=`<i style="background:${Sn[G.color]||"#c9b48a"}"></i><span>${lp(G.name)}</span>${G.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${lp(G.mark.label)}</em>`:""}`);let L="vkw-plaque"+(G.sel?" sel":"")+(G.picked?" picked":"")+(G.dim?" dim":"")+(G.dead?" dead":"");L!==b.cls&&(b.cls=L,b.el.className=L),G.selColor&&b.el.style.setProperty("--c",G.selColor),b.data=G}function v(H,G){for(let[b,_]of H)G.has(b)||(_.el.remove(),H.delete(b))}function R(H,G){let b=String(H).replace(/\s+/g," ").trim();if(b.length<=G)return b;let _=b.slice(0,G-1),L=_.lastIndexOf(" ");return L>G*.6&&(_=_.slice(0,L)),_.replace(/[\s.,;:!?-]+$/,"")+"\u2026"}function E(H,G,b){let _=r.get(H);if(!_){let D=document.createElement("div");D.className="vkw-bubble",t.insertBefore(D,u),_={el:D,until:0,h:30,w:100,wx:-1e4,wy:-1e4},r.set(H,_)}let L=o<540,A=R(G,190);_.span||(_.span=document.createElement("span"),_.el.appendChild(_.span)),_.span.textContent=A,_.el.dataset.ch=b||"genel",_.el.classList.add("show"),_.until=performance.now()+2400+Math.min(7600,A.length*62),_.h=0,_.seq=++h}let x=[],w=(H,G)=>H.prio-G.prio,O=[],C=[],N=[],z=[],U=[];function B(H,G,b,_){var ae,Ce,Be,he,He;let L=O;L.length=0;for(let[le,j]of n){if(!(G(le,wn)&&_(le))){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1),j.vis=!1;continue}if(j.dist=wn.distanceTo(H.position),wn.project(H),wn.z>1||wn.x<-1.2||wn.x>1.2||wn.y<-1.2||wn.y>1.3){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1),j.vis=!1;continue}j.measured||(j.w=j.el.offsetWidth||60,j.h=j.el.offsetHeight||20,j.measured=!0),j.sx=(wn.x*.5+.5)*o,j.sy=(-wn.y*.5+.5)*a,j.depth=wn.z,j.vis=!0,L.push(j)}let A=performance.now();for(let le of L){let j=r.get(le.id);le.talk=!!(j&&A<j.until)}for(let le of L)le.prio=(le.data&&(le.data.me||le.data.picked||le.data.mark||le.data.votes)?0:1)*1e3+le.dist;L.sort(w),x.length=0;let D=L.length>6;for(let le of L){let j=le.sx-le.w/2,Le=le.sy-le.h,Ke=0;for(let ce=0;ce<6;ce++){let Re=!1;for(let F of x)j<F.x+F.w-2&&j+le.w>F.x+2&&Le<F.y+F.h-1&&Le+le.h>F.y+1&&(Le=F.y-le.h-1,Re=!0);if(!Re)break;Ke++}let ze=le.talk||le.data&&(le.data.me||le.data.sel||le.data.picked||le.data.mark||le.data.votes),Ve=D&&!ze&&(le.dist>15||Ke>0),_t=D&&!ze&&Ke>=3||!ze&&Le<l.top+2,Mt=(Ve?" far":"")+(_t?" gone":"");if(Mt!==le.fc&&(le.fc=Mt,le.el.classList.toggle("far",Ve),le.el.classList.toggle("gone",_t),le.measured=!1),_t){le.x=-1e4,le.y=-1e4;continue}j=Math.max(l.left+2,Math.min(o-l.right-le.w-2,j)),Le=Math.max(l.top+2,Math.min(a-l.bottom-le.h-2,Le)),x.push({x:j,y:Le,w:le.w,h:le.h,t:le}),le.x=j,le.y=Le,(!le.shown||Math.abs(j-((ae=le.wx)!=null?ae:-1e4))>.4||Math.abs(Le-((Ce=le.wy)!=null?Ce:-1e4))>.4)&&(le.el.style.transform=`translate3d(${j.toFixed(1)}px,${Le.toFixed(1)}px,0)`,le.wx=j,le.wy=Le);let be=10+Math.round((1-le.depth)*1e3);be!==le.wz&&(le.el.style.zIndex=String(be),le.wz=be),le.shown=!0}let X=A,W=N;W.length=0;for(let[le,j]of r){let Le=n.get(le);if(X>j.until&&j.el.classList.contains("show")&&j.el.classList.remove("show"),!(Le&&Le.vis&&Le.shown&&Le.x>-1e3&&X<=j.until+400&&Le.sx>l.left-8&&Le.sx<o-l.right+8&&Le.sy>l.top&&Le.sy<a-l.bottom+10)){j.wx!==-1e4&&(j.el.style.transform="translate3d(-9999px,0,0)",j.wx=-1e4);continue}j.h||(j.h=j.el.offsetHeight||26,j.w=j.el.offsetWidth||100),j.t=Le,W.push(j)}W.sort((le,j)=>j.seq-le.seq);let J=o<540?2:3,de=z;de.length=0;for(let le=0;le<W.length;le++){let j=W[le],Le=j.t,Ke=le>=J,ze=Math.max(l.left+4,Math.min(o-l.right-j.w-4,Le.sx-j.w/2)),Ve=Le.y-j.h-8;if(!Ke){for(let ce=0;ce<6;ce++){let Re=!1;for(let F of de)ze<F.x+F.w&&ze+j.w>F.x&&Ve<F.y+F.h+4&&Ve+j.h+4>F.y&&(Ve=F.y-j.h-6,Re=!0);for(let F of x){if(F.t===Le||!(ze<F.x+F.w&&ze+j.w>F.x&&Ve<F.y+F.h+2&&Ve+j.h+2>F.y))continue;let oe=F.x+F.w+2-ze,q=ze+j.w-F.x+2,se=oe<q?ze+oe:ze-q;Math.min(oe,q)<60&&Le.sx>se+12&&Le.sx<se+j.w-12&&se>=l.left+4&&se+j.w<=o-l.right-4?ze=se:Ve=F.y-j.h-4,Re=!0}if(!Re)break}if(le>0&&Le.y-j.h-8-Ve>36&&(Ke=!0),Ve<l.top+4&&(Ke=!0),!Ke){for(let ce of x)if(ce.t!==Le&&ce.t.data&&ce.t.data.sel&&ze<ce.x+ce.w&&ze+j.w>ce.x&&Ve<ce.y+ce.h&&Ve+j.h>ce.y){Ke=!0;break}}if(!Ke){for(let ce of C)if(ce.data&&ce.data.sel&&ce.shown&&ze<ce.wx+ce.w&&ze+j.w>ce.wx&&Ve<ce.wy+ce.h&&Ve+j.h>ce.wy){Ke=!0;break}}}if(Ke){j.wx!==-1e4&&(j.el.style.transform="translate3d(-9999px,0,0)",j.wx=-1e4);continue}let _t=U[de.length];_t||(_t={x:0,y:0,w:0,h:0},U.push(_t)),_t.x=ze,_t.y=Ve,_t.w=j.w,_t.h=j.h,de.push(_t);let Mt=Math.max(10,Math.min(j.w-10,Le.sx-ze));Math.abs(Mt-(j.tx||0))>.5&&(j.el.style.setProperty("--tx",Mt.toFixed(0)+"px"),j.tx=Mt),(Math.abs(ze-j.wx)>.4||Math.abs(Ve-((Be=j.wy)!=null?Be:-1e4))>.4)&&(j.el.style.transform=`translate3d(${ze.toFixed(1)}px,${Ve.toFixed(1)}px,0)`,j.wx=ze,j.wy=Ve);let be=String(2e3+(100-le));be!==j.wz&&(j.el.style.zIndex=be,j.wz=be)}let ie=C;ie.length=0;for(let[le,j]of i){if(!(b(le,wn)&&!(j.data&&j.data.hidden))){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1);continue}if(wn.project(H),wn.z>1||Math.abs(wn.x)>1.15||Math.abs(wn.y)>1.15){j.shown&&(j.el.style.transform="translate3d(-9999px,0,0)",j.shown=!1);continue}(!j.w||j.sigW!==j.sig+j.cls)&&(j.w=j.el.offsetWidth||70,j.h=j.el.offsetHeight||20,j.sigW=j.sig+j.cls),j.ax=(wn.x*.5+.5)*o,j.ay=(-wn.y*.5+.5)*a,j.px=j.ax,j.py=j.ay,ie.push(j)}for(let le=0;le<5;le++){for(let j=0;j<ie.length;j++){let Le=ie[j];for(let Ke=j+1;Ke<ie.length;Ke++){let ze=ie[Ke],Ve=(Le.w+ze.w)/2+3-Math.abs(Le.px-ze.px),_t=(Le.h+ze.h)/2+2-Math.abs(Le.py-ze.py);if(Ve>0&&_t>0)if(_t<Ve){let Mt=(Le.py<ze.py?-1:1)*_t/2;Le.py+=Mt,ze.py-=Mt}else{let Mt=(Le.px<ze.px?-1:1)*Ve/2;Le.px+=Mt,ze.px-=Mt}}}for(let j of ie){let Le=j.px-j.ax,Ke=j.py-j.ay,ze=Math.hypot(Le,Ke);ze>28&&(j.px=j.ax+Le/ze*28,j.py=j.ay+Ke/ze*28)}}for(let le of ie){let j=Math.max(l.left+2,Math.min(o-l.right-le.w-2,le.px-le.w/2)),Le=Math.max(l.top+2,Math.min(a-l.bottom-le.h-2,le.py-le.h/2));(!le.shown||Math.abs(j-((he=le.wx)!=null?he:-1e4))>.4||Math.abs(Le-((He=le.wy)!=null?He:-1e4))>.4)&&(le.el.style.transform=`translate3d(${j.toFixed(1)}px,${Le.toFixed(1)}px,0)`,le.wx=j,le.wy=Le);let Ke=le.data&&le.data.sel?"900":"5";Ke!==le.wz&&(le.el.style.zIndex=Ke,le.wz=Ke),le.shown=!0}}function Y(H,G){let b=document.createElement("div");b.className="vkw-ripple",b.style.left=H+"px",b.style.top=G+"px",t.appendChild(b),setTimeout(()=>b.remove(),600)}return{el:t,setSize(H,G){o=H,a=G;for(let b of n.values())b.measured=!1},setInsets(H){l={top:H.top||0,bottom:H.bottom||0,left:H.left||0,right:H.right||0}},setCompact(H){if(H!==c){c=H;for(let G of n.values())G.sig="",G.measured=!1}},setTag:S,setPlaque:M,bubble:E,project:B,ripple:Y,tags:n,plaques:i,sync(H,G){v(n,H),v(i,G);for(let[b,_]of r)H.has(b)||(_.el.remove(),r.delete(b))},setCamToggle(H,G,b){if(f.hidden=!H,!H)return;let _=G==="follow"?"f":"o";if(f.dataset.m!==_){f.dataset.m=_,f.innerHTML=G==="follow"?p:d;let L=G==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=L,f.setAttribute("aria-label",L)}f.style.right=12+(b.right||0)+"px",f.style.bottom=60+(b.bottom||0)+"px"},setRecenter(H,G){u.classList.toggle("show",!!H),u.style.right=12+(G.right||0)+"px",u.style.bottom=12+(G.bottom||0)+"px"},hitTag(H,G){for(let b of n.values())if(!(!b.vis||!b.data||!b.data.sel)&&H>=b.x-6&&H<=b.x+b.w+6&&G>=b.y-6&&G<=b.y+b.h+6)return b;return null},clear(){for(let H of[n,i,r]){for(let G of H.values())G.el.remove();H.clear()}},dispose(){t.remove(),hw()}}}var uw=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,yl=null;function fw(){yl||(yl=document.createElement("style"),yl.id="vkw-joy-style",yl.textContent=uw,document.head.appendChild(yl))}function Zg(s,e={}){var O;fw();let t=(O=e.touch)!=null?O:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,c=0,l=null,h=0,u=0,f=!1,d=new Set;function p(C,N){i.style.transform=`translate3d(${(C*r).toFixed(1)}px,${(-N*r).toFixed(1)}px,0)`}function y(C){if(!f||l!=null)return;C.preventDefault(),C.stopPropagation(),l=C.pointerId,n.setPointerCapture&&n.setPointerCapture(l);let N=n.getBoundingClientRect();h=N.left+N.width/2,u=N.top+N.height/2,n.classList.add("act"),m(C)}function m(C){if(C.pointerId!==l)return;C.preventDefault();let N=(C.clientX-h)/r,z=-(C.clientY-u)/r,U=Math.hypot(N,z);U>1&&(N/=U,z/=U);let B=Math.hypot(N,z);if(B<.12)a=0,c=0;else{let Y=(B-.12)/.88/B;a=N*Y,c=z*Y}p(N,z)}function g(C){C.pointerId===l&&(l=null,a=0,c=0,p(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",y),n.addEventListener("pointermove",m),n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g);let S=C=>!!(C&&C.tagName&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.tagName==="SELECT"||C.isContentEditable)),M=C=>S(C)||S(document.activeElement),v={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function R(C){if(!f||C.ctrlKey||C.metaKey||C.altKey||M(C.target))return;let N=v[C.code];N&&(d.add(N),C.code.startsWith("Arrow")&&C.preventDefault())}function E(C){let N=v[C.code];N&&d.delete(N)}let x=C=>{S(C.target)&&d.clear()};window.addEventListener("focusin",x);let w=()=>d.clear();return window.addEventListener("keydown",R),window.addEventListener("keyup",E),window.addEventListener("blur",w),{touch:t,vector(C){let N=a,z=c;if(d.size){N+=(d.has("r")?1:0)-(d.has("l")?1:0),z+=(d.has("u")?1:0)-(d.has("d")?1:0);let U=Math.hypot(N,z);U>1&&(N/=U,z/=U)}return C.x=N,C.y=z,C},setEnabled(C){C!==f&&(f=C,n.classList.toggle("on",C&&t&&!o),C||(d.clear(),a=0,c=0,l=null,p(0,0),n.classList.remove("act")))},place(C,N,z){let U=C.joystick,B,Y,H;if(U===null){o=!0,n.classList.remove("on");return}o=!1,U&&U.size>0?(H=Math.max(88,Math.min(160,U.size)),B=U.left||0,Y=z-(U.bottom||0)-H):(H=112,B=(C.left||0)+18,Y=Math.max((C.top||0)+10,z-(C.bottom||0)-18-H)),n.style.left=B+"px",n.style.top=Y+"px",n.style.width=n.style.height=H+"px";let G=Math.round(H*.41);i.style.width=i.style.height=G+"px",i.style.margin=-G/2+"px 0 0 "+-G/2+"px",r=H*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",R),window.removeEventListener("keyup",E),window.removeEventListener("blur",w),window.removeEventListener("focusin",x),n.remove()}}}var Jg=2.3;function _l(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function Kr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function dw(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,c=s.z+i*o,l=Math.hypot(a,c);if(l>=Jg)return;let h=a,u=c;l<.01&&(h=-i,u=n);let f=Math.hypot(h,u)||1,d=Jg+.25,p=n/Math.sqrt(r),y=i/Math.sqrt(r);t.push({x:h/f*d-p*1.2,z:u/f*d-y*1.2}),t.push({x:h/f*d+p*1.2,z:u/f*d+y*1.2})}function $g(s,e){let t=s[s.length-1];t&&dw(t,e,s),s.push({x:e.x,z:e.z})}function pw(s,e,t,n){let i=nn(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(Kr(e+i*o/r,n))}function Zr(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,c=_l(e).a;if(n!=null){let l=Kr(n,r);i.push(l),a=l,c=n}else if(_l(e).r>o){let l=_l(e),h=Kr(l.a,r);i.push(h),a=h,c=l.a}if(t.house){let l=t.angle,h=Math.abs(nn(l-c)),u=Kr(l,r);if(_l(a).r>r-.8&&h<1.4?pw(i,c,l,r):$g(i,u),t.peek){let d=t.house.peek,p=nn(_l(d).a-l)>=0?1:-1,y=(t.halfWidth||3)+1.4,m=s.R,g=Kr(l+p*(y/(m-2)),m-2.2),S=Kr(l+p*(y/(m+1)),m+1.2),M=Kr(l+p*((y-.6)/(m+3.4)),m+3.6);i.push(g,S,M,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else $g(i,t);return i}function cp(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,c=i.r+.32;if(a<c*c){let l=Math.sqrt(a)||.001;s.x=i.x+r/l*c,s.z=i.z+o/l*c}}}function Jr(s,e,t=.42){if(!e||!e.length||s.length<2)return s;let n=s;for(let i=0;i<3;i++){let r=[n[0]],o=!1;for(let a=1;a<n.length;a++){let c=r[r.length-1],l=n[a],h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=null,p=1,y=0;if(f>1e-4)for(let m of e){if(m.tag==="fire")continue;let g=((m.x-c.x)*h+(m.z-c.z)*u)/f;if(g<=.02||g>=.98)continue;let S=c.x+h*g-m.x,M=c.z+u*g-m.z,v=Math.hypot(S,M);v<m.r+t&&g<p&&(d=m,p=g,y=v)}if(d){let m=c.x+h*p-d.x,g=c.z+u*p-d.z;y<.001&&(m=-u,g=h);let S=Math.hypot(m,g)||1,M=d.r+t+.25;r.push({x:d.x+m/S*M,z:d.z+g/S*M}),o=!0}r.push(l)}if(n=r,!o)break}return n}function ou(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)cp(t,e,null);return t}var au=()=>typeof window!="undefined"&&window.VKRules||null;function lu(s){let e=au();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function mw(s,e){let t=au();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function jg(s,e,t){let n=au();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=lu(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!gg[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return mw(s,t)?!1:!(t==="poison"&&o);default:return!1}}function Ml(s){let e=au();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,c]of o)a===c&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function cu(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return ii.poison;if(n.witch.heal===e.id)return ii.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&ii[r.role])return r.role==="vampir"&&ii[n.myKind]||ii[r.role];let a=(n.team||[]).filter(c=>c.targetId===e.id&&c.vampId!==r.id).map(c=>c.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"}}return i&&i.myVote===e.id?ii.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function bl(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function hp(s,e){let t=lu(s);return t==="vote"?ii.vote.color:t==="shoot"?ii.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?ii.poison:ii.heal).color:(ii[s.me.role]||ii.vote).color:"#f2c12e"}var Qg=new Map,Ys={walk:2.8,brisk:3.75,sneak:2.4,sprint:5.4},si=.88,$r=7.6,Ks=1.1,Vn=1.15;function ex(s,e){if(typeof window!="undefined"){if(e){let t=window.__vkwTpLog||(window.__vkwTpLog=[]);t.length<20&&t.push(s+" "+e)}s==="entry"?window.__vkwEntryTeleports=(window.__vkwEntryTeleports||0)+1:s==="return"?window.__vkwReturnVanish=(window.__vkwReturnVanish||0)+1:window.__vkwTeleports=(window.__vkwTeleports||0)+1}}function xw(s){typeof window!="undefined"&&(s<=(window.__vkwShowLate||0)||(window.__vkwShowLate=+s.toFixed(2)))}typeof window!="undefined"&&(window.__vkwTeleports=window.__vkwTeleports||0,window.__vkwReturnVanish=window.__vkwReturnVanish||0,window.__vkwShowLate=window.__vkwShowLate||0);function tx(s){let e=new Map,t=null,n=new Map,i=-99,r=0;function o(M){for(let v of s.village.benchSlots)if(Math.hypot(M.x-v.x,M.z-v.z)<1.25)return v;return null}function a(M,v){let R=-M,E=-v,x=Math.hypot(R,E)||1,w=s.camera.position.x-M,O=s.camera.position.z-v,C=Math.hypot(w,O)||1;return Math.atan2(R/x*.45+w/C*.55,E/x*.45+O/C*.55)}function c(M){s.village.openDoor(M,1.3),s.sfxThrottled("door",.35)}function l(M,v,R,E){let x=s.village,w=x.layout;if(!w)return;let O=[];if(E){if(M.peeking=null,v.kind==="plaza"||v.kind==="gather")M.inside=null,M.pos.set(v.x,0,v.z),M.yaw=v.face!=null?v.face:a(v.x,v.z),M.faceYaw=M.yaw,M.setVisible(!0),M.run([{pose:v.pose||"idle",fade:0}]);else if(v.kind==="house"){let z=s.houseAnchors(v.house);if(!z)return;if(v.peek){M.inside=null;let U=Zr(w,z.approach,{house:z,angle:x.house(v.house).angle,peek:!0,halfWidth:x.house(v.house).info.hx});M.pos.set(z.peek.x,0,z.peek.z),M.yaw=Math.atan2(z.backWin.x-z.peek.x,z.backWin.z-z.peek.z),M.faceYaw=M.yaw,M.peeking=v.house,M.peekPath=U.slice(-5),M.setVisible(!0),M.run([{pose:"peek",fade:0}])}else M.inside=v.house,M.pos.set(z.inside.x,0,z.inside.z),M.setVisible(!1),M.run([{pose:"idle",fade:0}])}else v.kind==="gone"&&(M.setVisible(!1),M.run([]));return}if(v.kind==="gone"){M.visible&&(s.poofAt(M.pos.x,M.pos.z),M.setVisible(!1)),M.run([]);return}if(!M.visible&&!M.inside&&!M.peeking){if(v.kind==="plaza"||v.kind==="gather"){l(M,v,0,!0),s.fx.emit("magic",v.x,.8,v.z,"#f4e4c1",10);return}x.house(M.id)&&(M.inside=M.id)}R&&O.push({wait:R});let C={x:M.pos.x,z:M.pos.z},N=null;if(M.inside){let z=M.inside,U=s.houseAnchors(z),B=x.house(z);if(U&&B){if(v.kind==="house"&&v.house===z&&!v.peek)return;O.push({at:U.inside,face:U.rotY,snapFace:!0},{call:()=>c(z)},{wait:.12},{show:!0,call:Y=>{Y.inside=null}},{walk:[U.approach],mode:"walk"}),C=U.approach,N=B.angle}else M.inside=null}else if(M.peeking){if(v.kind==="house"&&v.peek&&v.house===M.peeking)return;let z=(M.peekPath||[]).slice().reverse();z.length>1&&(O.push({pose:"idle",fade:.2},{walk:z.slice(1),mode:"sneak",call:U=>{U.peeking=null}}),C=z[z.length-1]),M.peeking=null}if(v.kind==="plaza"||v.kind==="gather"){let z=ou({x:v.x,z:v.z},s.obstacles),U=Jr(Zr(w,C,z,N).map((Y,H,G)=>H>0&&H<G.length-1?ou(Y,s.obstacles):Y),s.obstacles);U.shift(),U.length&&O.push({walk:U,mode:v.mode||"walk"});let B=v.face!=null?v.face:a(z.x,z.z);O.push({face:B}),v.pose?O.push({pose:v.pose}):O.push({pose:"idle"})}else if(v.kind==="house"){let z=v.house,U=s.houseAnchors(z),B=x.house(z);if(!U||!B)return;let Y=Jr(Zr(w,C,{house:U,angle:B.angle,peek:!!v.peek,halfWidth:B.info.hx},N),s.obstacles);Y.shift();let H=u(C,Y)>12,G=v.mode||(H?v.house===M.id?"brisk":"sprint":"walk");if(v.peek){let b=Y.slice(-2),_=Y.slice(0,Y.length-2);_.length&&O.push({walk:_,mode:G}),O.push({walk:b,mode:"sneak"}),O.push({faceTo:U.backWin},{pose:"peek",call:L=>{L.peeking=z,L.peekPath=Y.slice(-5)}})}else{let b=v.budget;if(b!=null&&Y.length){let _=u(C,Y),L=Math.max(.6,b-(R||0)-1.4),A=_/L,D=A<2.4?"walk":A<3.4?"brisk":"sprint";if(A<=5)O.push({walk:Y,mode:v.mode||D});else if(A<=$r*si)O.push({walk:Y,mode:"sprint",speed:Math.min($r,A/si)});else{ex("entry");let X=Math.max(.5,L-.5)*5,W=0,J=C,de=[];for(let ie of Y){let ae=Math.hypot(ie.x-J.x,ie.z-J.z);if(W+ae>X)break;W+=ae,de.push(ie),J=ie}de.length&&O.push({walk:de,mode:"sprint"}),O.push({call:ie=>{s.fx.emit("mist",ie.pos.x,.6,ie.pos.z,"#c9c2d3",12)},hide:!0},{wait:.25},{at:U.approach,face:Math.atan2(U.door.x-U.approach.x,U.door.z-U.approach.z),snapFace:!0,show:!0,call:()=>s.fx.emit("mist",U.approach.x,.6,U.approach.z,"#c9c2d3",12)})}}else Y.length&&O.push({walk:Y,mode:G});O.push({faceTo:U.door},{wait:.05},{call:()=>c(z)},{wait:.15},{walk:[U.inside],mode:b!=null?"brisk":"walk"},{hide:!0,call:_=>{_.inside=z,n.set(z,s.time+9+Math.random()*4)}})}}M.run(O)}function h(M,v){if(!M.visible||M.inside||M.peeking||M.claimed||M.base==="sit"&&!v.pose)return!1;let R=v.x-M.pos.x,E=v.z-M.pos.z,x=Math.hypot(R,E);if(x>6)return!1;let w=R*R+E*E;if(w>1e-4){let N=-(M.pos.x*R+M.pos.z*E)/w;if(N=N<0?0:N>1?1:N,Math.hypot(M.pos.x+R*N,M.pos.z+E*N)<2.5)return!1}let O=ou({x:v.x,z:v.z},s.obstacles);M.retargetAt=s.time;let C=[];if(x>.05){let N=Jr([{x:M.pos.x,z:M.pos.z},O],s.obstacles);N.shift(),C.push({walk:N,mode:x>3?"brisk":"walk"})}return C.push({wait:.5},{face:v.face!=null?v.face:a(O.x,O.z)},{pose:v.pose||"idle"}),M.run(C),!0}function u(M,v){let R=0,E=M;for(let x of v)R+=Math.hypot(x.x-E.x,x.z-E.z),E=x;return R}function f(M,v,R,E,x,w,O){if(!R.length)return;E=Math.max(.5,E);let C=u(v,R),N=C/E;if(N<Ys.walk*si*.94){M.push({walk:R,mode:"walk"});return}if(N<Ys.brisk*si*.95){M.push({walk:R,mode:"brisk"});return}if(N<Ys.sprint*si*.96){M.push({walk:R,mode:"sprint"});return}if(!O&&N<=$r*si){M.push({walk:R,mode:"sprint",speed:Math.min($r,N/si*1.02)});return}let z=O?Ys.sprint:$r;ex(O?"return":"show",`len=${C.toFixed(1)} avail=${E.toFixed(2)}`);let U=Math.max(.4,E-.45)*z*si,B=0,Y=v,H=[];for(let G of R){let b=Math.hypot(G.x-Y.x,G.z-Y.z);if(B+b>U)break;B+=b,H.push(G),Y=G}H.length&&M.push({walk:H,mode:"sprint",speed:z}),M.push({call:G=>{s.fx.emit("mist",G.pos.x,.6,G.pos.z,"#c9c2d3",12)},hide:!0},{wait:.2},{at:x,face:w,snapFace:!0,show:!0,call:()=>s.fx.emit("mist",x.x,.6,x.z,"#c9c2d3",12)})}function d(M,v,R){let E=s.village,x=E.layout,w=s.houseAnchors(M),O=E.house(M),C=s.houseAnchors(v),N=E.house(v);if(!x||!w||!O||!C||!N)return null;let z=Jr(Zr(x,w.approach,{house:C,angle:N.angle,peek:!!R,halfWidth:N.info.hx},O.angle),s.obstacles);z.shift();let U=[],B=C.approach;R&&(U=z.splice(Math.max(0,z.length-2)),B=z.length?z[z.length-1]:w.approach);let Y=R?B:C.approach,H=Jr(Zr(x,Y,{house:w,angle:O.angle,halfWidth:O.info.hx},R?null:N.angle),s.obstacles);return H.shift(),{L:x,aH:w,hH:O,aT:C,hT:N,pts:z,tail:U,end:B,back:Y,pts2:H}}function p(M,v,R){let E=d(M,v,R);if(!E)return null;let x=u(E.aH.approach,E.pts),w=E.tail.length?u(E.pts.length?E.pts[E.pts.length-1]:E.aH.approach,E.tail):0;return{out:x,tail:w,back:u(E.back,E.pts2)}}function y(M){let v=d(M.home,M.to,M.peek),R=[];if(!v)return R;let{aH:E,aT:x,pts:w,tail:O,end:C,back:N,pts2:z}=v,U=M.clock(),B=H=>({call:()=>xw(M.clock()-H)});M.delay&&R.push({wait:M.delay}),R.push({at:E.inside,face:E.rotY,snapFace:!0},{call:()=>c(M.home)},{wait:.12},{show:!0,call:H=>{H.inside=null}},{walk:[E.approach],mode:"brisk"});let Y=M.tArrive-U-(M.delay||0)-Ks;if(M.peek){let H=u(C,O)/(Ys.sneak*si);f(R,E.approach,w,Y-H,C,Math.atan2((O[0]||C).x-C.x,(O[0]||C).z-C.z)),R.push({walk:O,mode:"sneak"},B(M.tArrive),{faceTo:x.backWin},{pose:"peek",call:G=>{G.peeking=M.to}},{until:()=>M.clock()>=M.tLeave},{pose:"idle",fade:.2,call:G=>{G.peeking=null}},{walk:O.slice(0,-1).reverse().concat([C]),mode:"sneak"})}else f(R,E.approach,w,Y,x.approach,Math.atan2(x.door.x-x.approach.x,x.door.z-x.approach.z)),R.push(B(M.tArrive),{faceTo:x.door},{wait:.05}),M.bounced?(R.push({once:"interact-right",opts:{timeScale:1.1}},{wait:.3},{call:H=>{s.fx.emit("poof",x.door.x,1.2,x.door.z,"#9fb3d1",5),s.sfxThrottled("door",.25),M.onBounce&&M.onBounce(H)}},{once:"emote-no",opts:{timeScale:1.2},part:.75}),M.tLeave!=null&&R.push({until:()=>M.clock()>=M.tLeave})):R.push({call:()=>c(M.to)},{wait:.15},{walk:[x.inside],mode:"brisk"},{hide:!0,call:H=>{H.inside=M.to,n.set(M.to,s.time+5),M.onInside&&M.onInside(H)}},{until:()=>M.clock()>=M.tLeave},{at:x.inside,face:x.rotY,snapFace:!0},{call:()=>c(M.to)},{wait:.12},{show:!0,call:H=>{H.inside=null,M.onOut&&M.onOut(H)}},{walk:[x.approach],mode:"brisk"});return R.push({call:H=>{let G=[];f(G,N,z,M.tHome-M.clock()-Vn,E.approach,Math.atan2(E.door.x-E.approach.x,E.door.z-E.approach.z),!0),G.push(B(M.tHome-Vn),{faceTo:E.door},{call:()=>c(M.home)},{wait:.12},{walk:[E.inside],mode:"brisk"},{hide:!0,call:b=>{b.inside=M.home,M.onHome&&M.onHome(b)}}),H.steps.splice(1,0,...G)}}),R}function m(M,v){let R=s.village,E=R.layout,x=s.houseAnchors(v),w=R.house(v);return!E||!x||!w?null:Jr(Zr(E,M,{house:x,angle:w.angle,halfWidth:w.info.hx},null),s.obstacles)}function g(M,v){let R=s.village,E=R.layout;if(!E||!M||!M.me)return;let{room:x,me:w,players:O}=M,C=x.phase,N=C==="reveal"||C==="night"||C==="day"||C==="hunter",z=!w.alive,U=C!==t;t=C;let B=M.room.night&&M.room.night.stage==="show"?Qg:Ml(M),Y=new Set(x.winners||[]),H=O.filter(D=>D.alive&&!D.left).sort((D,X)=>D.seat-X.seat).map(D=>D.id),G=Math.max(4.6,Math.min(7.5,E.Rp*.62)),b=D=>{let X=R.house(D.id),W=X?X.angle:D.seat/Math.max(1,O.length)*it;return{x:Math.sin(W)*G,z:Math.cos(W)*G,face:W+Math.PI}},_=new Map;if(C==="lobby"||C==="ended"){let D=[];for(let X of O){if(X.left)continue;let W=X.id===w.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,J=W?{x:W.x,z:W.z}:Yh(E,X.pos?X.pos.x:.5,X.pos?X.pos.y:.8);D.push({id:X.id,x:J.x,z:J.z,fixed:!!W})}for(let X=0;X<4;X++)for(let W=0;W<D.length;W++)for(let J=W+1;J<D.length;J++){let de=D[W],ie=D[J],ae=ie.x-de.x,Ce=ie.z-de.z,Be=Math.hypot(ae,Ce);if(Be>=.95)continue;let he=Be>.001?ae/Be:1,He=Be>.001?Ce/Be:0,le=(.95-Be)/2,j=de.fixed?0:ie.fixed?2:1,Le=ie.fixed?0:de.fixed?2:1;de.x-=he*le*j,de.z-=He*le*j,ie.x+=he*le*Le,ie.z+=He*le*Le}for(let X of D)_.set(X.id,{x:+X.x.toFixed(2),z:+X.z.toFixed(2)})}U&&C==="night"&&(i=s.time,r=s.leadInLeft?s.leadInLeft():3.6);let L=s.time-i,A=C==="night"&&L<r?Math.max(1,r-L):null;for(let D of O){let X=s.ensureChar(D);if(!X)continue;X.isMe=D.id===w.id;let W=!D.left&&(D.alive||C==="hunter"&&D.id===x.hunterId),J;if(!W)J={kind:"gone"};else if(C==="reveal"){let he=H.indexOf(D.id),He=Math.max(H.length,1),le=he/He*it+.3,j=4.3+(He>12?he%2*1.3:0);J={kind:"gather",x:Math.sin(le)*j,z:Math.cos(le)*j,face:le+Math.PI,pose:"warm"}}else if(C==="night")J={kind:"house",house:D.id};else if(C==="day"||C==="hunter"){let he=b(D);J={kind:"plaza",x:+he.x.toFixed(2),z:+he.z.toFixed(2),face:he.face,pose:D.connected?null:"sit",ring:!0}}else{let he=_.get(D.id)||Yh(E,D.pos?D.pos.x:.5,D.pos?D.pos.y:.8),He=null,le=null,j=o(he);D.connected?C==="ended"?He=Y.has(D.id)?"cheer":null:j&&(He="sit",le=j.a+Math.PI):He="sit",J={kind:"plaza",x:he.x,z:he.z,pose:He,face:le}}A!=null&&J.kind==="house"&&(J.budget=A);let de=J.kind+":"+(J.house||"")+":"+(J.peek?"p":"")+":"+(J.x!=null?J.x.toFixed(2)+","+J.z.toFixed(2):"")+":"+(J.pose||""),ie=e.get(D.id),ae=v||X.fresh;if(X.claimed&&!ae){e.delete(D.id);continue}if(X.fresh=!1,X.isMe&&s.driving&&J.kind==="plaza"&&!ae)e.set(D.id,"drive");else if(ie!==de||ae){e.set(D.id,de);let he=0;U&&!ae?C==="night"?he=X.isMe?.2:Math.random()*1.6:C==="day"||C==="hunter"?he=.3+Math.random()*2.2:C==="reveal"&&(he=Math.random()*.8):ie&&ie.startsWith("house")&&J.kind==="house"&&C==="night"&&!ae&&(he=.1),J.budget!=null&&(he=X.isMe?.1:Math.random()*.5),!ae&&!U&&J.kind==="plaza"&&ie&&ie.startsWith("plaza")&&h(X,J)||l(X,J,he,ae)}let Ce=s.showDead&&s.showDead.has(D.id)&&D.id===w.id;if(D.left?!1:(!D.alive||Ce)&&(N&&(z||Ce)||C==="ended")){let he=s.ensureGhost(D);if(he){let He=D.id===w.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,le=D.ghostPos||D.pos,j=He?{x:He.x,z:He.z}:Yh(E,le?le.x:.5,le?le.y:.8),Le="g:"+j.x.toFixed(2)+","+j.z.toFixed(2);D.id===w.id&&s.driving&&!he.fresh?e.set("g"+D.id,"drive"):(e.get("g"+D.id)!==Le||he.fresh)&&(e.set("g"+D.id,Le),he.fresh&&(he.pos.set(j.x,0,j.z),he.fresh=!1,he.yaw=a(j.x,j.z),s.fx.emit("magic",j.x,1,j.z,"#d8d0ff",12)),he.isMe=D.id===w.id,he.run([{walk:[{x:j.x,z:j.z}],mode:"stroll"},{face:a(j.x,j.z)}]))}}else s.removeGhost(D.id)}for(let D of O){let X=R.house(D.id);if(X)if(C==="lobby"&&(X.flickOut=!1),X.dead=N||C==="ended"?(!D.alive||D.left)&&!(s.isHeldDeath&&s.isHeldDeath(D.id)):!1,C==="night"){let W=(n.get(D.id)||0)>s.time?1:0;for(let[,J]of B)J===D.id&&(W=Math.max(W,.8));R.setLit(D.id,W)}else R.setLit(D.id,1)}C!=="night"&&n.clear()}function S(M){if(!M||M.room.phase!=="night")return;let v=s.village,R=M.room.night&&M.room.night.stage==="show"?Qg:Ml(M);for(let E of M.players){if(!v.house(E.id))continue;let x=(n.get(E.id)||0)>s.time?1:0;for(let[,w]of R)w===E.id&&(x=Math.max(x,.8));v.setLit(E.id,x)}}return{apply:g,tick:S,tripSteps:y,tripRoute:p,pathTo:m,lit(M,v){n.set(M,s.time+v)},reset(){e.clear(),t=null,n=new Map},forget(M){e.delete(M),e.delete("g"+M)}}}var Zs=20,Ri=Zs-.6,Js=3,Sl=Ys.sprint*si*.95,nx=8.6,vw=Vn+1,yw={kill:1,steal:1,poison:1};function up(s,e,t){return t?{dwell:3.5,dwellMin:2}:e?{dwell:1.9,dwellMin:1.5}:s?{dwell:Vn+3,dwellMin:Vn+2.3}:{dwell:Vn+1.4,dwellMin:Vn+.7}}function dp(s,e){let t=s.tail?s.tail/(Ys.sneak*si):0;return{outFix:Ks+t,backFix:(e?t:Ks)+Vn}}function _w(s,e,t){let n=dp(s,t);return n.outFix+s.out/Js+e+n.backFix+s.back/Js}function jr(s,e){let{outFix:t,backFix:n}=dp(s,e.peek),i=e.s0,r;e.tA!=null?(r=e.tA,i=Math.max(e.s0,r-t-s.out/Js)):(r=i+t+s.out/Js,e.tAmin!=null&&r<e.tAmin&&(r=e.tAmin),e.tAmax!=null&&r>e.tAmax&&(r=Math.max(e.tAmax,i+t+s.out/($r*si*.9))));let o=e.dwell,a=e.dwellMin!=null?Math.min(e.dwellMin,o):o,c=e.end-1.5;r+o+n>c&&(o=Math.max(a,c-r-n));let l=r+o+n+s.back/Js;return{s0:i,tA:r,tL:r+o,tH:Math.min(e.end,l)}}function fp(s,e){let t=s&&s.root.userData;if(!(!t||!t.mats))for(let n=0;n<t.mats.length;n++)t.mats[n].opacity=t.op*e}var Mw={attack:1,steal:1,poison:1},hu="#5fe08a",ix={seer:1,watch:1,promote:1,locked:1,bounced:1,lockreport:1,steal:1,stealfail:1,saved:1,attacked:1,killed:1};function sx(s,e,t,n){let i="",r=-1,o=-1,a=!1,c=null,l=null,h=null,u=!1,f=new Set,d=null;function p(){let N=document.createElement("canvas");N.width=N.height=64;let z=N.getContext("2d");z.shadowColor="rgba(95,224,138,0.9)",z.shadowBlur=10,z.fillStyle="#ffffff";let U=5,B=(H,G,b,_)=>{z.beginPath(),z.moveTo(H+U,G),z.arcTo(H+b,G,H+b,G+_,U),z.arcTo(H+b,G+_,H,G+_,U),z.arcTo(H,G+_,H,G,U),z.arcTo(H,G,H+b,G,U),z.fill()};B(25,10,14,44),B(10,25,44,14);let Y=new ls(N);return Y.colorSpace=Bt,Y}function y(){if(d)return d;let N=p(),z=[];for(let U=0;U<20;U++){let B=new zs({map:N,color:hu,transparent:!0,depthWrite:!1,fog:!1}),Y=new Tr(B);Y.visible=!1,Y.renderOrder=7,Y.userData={t:1,life:1,vy:0,vx:0,vz:0,sz:.4},s.scene.add(Y),z.push(Y)}return d={tex:N,list:z,ticking:!1},d}function m(N){let z=0;for(let U of d.list){let B=U.userData;if(B.t>=B.life)continue;if(B.t+=N,B.t>=B.life){U.visible=!1;continue}z++;let Y=B.t/B.life;U.position.x+=B.vx*N,U.position.y+=B.vy*N,U.position.z+=B.vz*N;let H=B.sz*(.6+Math.min(1,Y*4)*.4);U.scale.set(H,H,1),U.material.opacity=1-Y*Y}return z||(d.ticking=!1),!z}function g(N,z,U,B=8,Y=.9,H=1){let G=y(),b=0;for(let _ of G.list){if(b>=B)break;let L=_.userData;if(L.t<L.life)continue;b++;let A=Math.random()*Math.PI*2,D=Math.random()*Y;_.position.set(N+Math.cos(A)*D,z+Math.random()*.4,U+Math.sin(A)*D),L.t=0,L.life=1.2+Math.random()*.6,L.vy=.9+Math.random()*.7,L.vx=Math.cos(A)*.15,L.vz=Math.sin(A)*.15,L.sz=(.32+Math.random()*.22)*H,_.scale.set(.01,.01,1),_.visible=!0}G.ticking||(G.ticking=!0,s.ticker.push(m))}function S(N,z,U,B,Y={}){let H=n.figure(N,z,U,B);if(!H)return null;let G=[];if(H.root.traverse(b=>{if(b.isSprite&&!Y.eyes&&(b.visible=!1),b.isMesh){let _=new jt({color:Y.color||"#0b0a12",transparent:!0,opacity:Y.opacity||.86});b.material=_,G.push(_),b.userData.cleanup=()=>_.dispose()}}),H.root.userData.mats=G,H.root.userData.op=Y.opacity||.86,Y.glow){let b=n.makeGlow(1.6,Y.glow);b.position.set(0,1.2,0),H.root.add(b)}return H}async function M(N,z,U,B=1.8,Y="walk"){if(!z||U.length<2)return;let H=[],G=0;for(let b=1;b<U.length;b++){let _=Math.hypot(U[b].x-U[b-1].x,U[b].z-U[b-1].z);H.push(_),G+=_}G<.01||(z.play(Y),await N.tween(G/B,b=>{let _=b*G,L=0;for(;L<H.length-1&&_>H[L];)_-=H[L],L++;let A=U[L],D=U[L+1],X=H[L]>0?Math.min(1,_/H[L]):1;z.root.position.x=A.x+(D.x-A.x)*X,z.root.position.z=A.z+(D.z-A.z)*X,z.root.rotation.y=Math.atan2(D.x-A.x,D.z-A.z)},b=>b),z.play("idle"))}function v(N,z){N&&(N.root.rotation.y=Math.atan2(z.x-N.root.position.x,z.z-N.root.position.z))}function R(N,z){let U=N.players.find(B=>B.id===z);return U&&U.alive&&!U.left?U:null}e.register("show",async(N,z)=>{let{show:U,state:B}=z,Y=s.village,H=B.me.id,G=s.time,b=z.el||0,_=()=>b+(s.time-G),L=F=>N.wait(Math.max(0,F-_())),A=new Set,D=[],X=[],W=()=>s.rig.portrait,J=F=>{let oe=Y.house(F);if(!oe)return;X.push(new K(oe.cx,0,oe.cz),new K(oe.cx,oe.info.height,oe.cz));let q=Y.anchors(oe);X.push(new K(q.approach.x,0,q.approach.z))},de=F=>{let oe=Promise.resolve(F).catch(()=>{});return D.push(oe),oe},ie=(F,oe,q)=>t.tripRoute(F,oe,q)||{out:12,tail:q?3:0,back:12};function ae(F){if(A.has(F)||!R(B,F))return null;let oe=s.chars.get(F),q=s.houseAnchors(F);return!oe||!q||oe.claimed?null:(oe.run([]),oe.path=null,oe.peeking=null,oe.inside=F,oe.drive=null,oe.pos.set(q.inside.x,0,q.inside.z),oe.speed=0,oe.setVisible(!1),N.claim(F),A.add(F),f.add(F),oe)}async function Ce(F,oe,q,se={}){let re=se.again?s.chars.get(F):ae(F);if(!re||se.again&&!A.has(F))return;let Ie=t.tripSteps({home:F,to:oe,clock:_,...se,delay:Math.max(.05,q.s0-_()),tArrive:q.tA,tLeave:q.tL,tHome:q.tH});if(Ie.length)for(re.run(Ie);re.busy&&_()<Zs-.2;)await N.wait(.2)}let Be=U.trip&&U.trip.to!==H&&Y.house(U.trip.to)?U.trip:null,he=U.watch&&Y.house(U.watch.houseId)?U.watch:null,He=(U.home||[]).filter(F=>Mw[F.kind]);U.dead&&!He.some(F=>F.result==="died")&&He.push({kind:"attack",result:"died"});let j=(Array.isArray(U.trips)&&U.trips.length>1?U.trips:[Be]).filter(F=>F&&F.to!==H&&Y.house(F.to)).slice(0,2).filter(F=>!(he&&F.kind==="watch"&&F.to===he.houseId)),Le=null;if(Be&&j.length){J(H);let F=j.map(q=>{let se=yw[q.kind]&&q.outcome!=="bounced",re=q.outcome==="bounced",Ie=q.kind==="watch";return J(q.to),{tr:q,kill:se,bounced:re,peek:Ie,r:ie(H,q.to,Ie),dw:up(se,re,Ie)}});if(F.length===1){let q=F[0];q.p=jr(q.r,{s0:.15,tAmin:2.8,tAmax:q.kill?nx:9.5,end:Ri,peek:q.peek,...q.dw})}else{let q=F.map(Se=>_w(Se.r,Se.dw.dwell,Se.peek)),se=Ri-.15-.3,re=q[0]+q[1],Ie=.15+(re<=se?q[0]+(se-re)*.35:se*q[0]/re);F[0].p=jr(F[0].r,{s0:.15,tAmin:2.4,end:Ie,peek:F[0].peek,...F[0].dw}),F[1].p=jr(F[1].r,{s0:F[0].p.tH+.3,end:Ri,peek:F[1].peek,...F[1].dw})}Le=F[0].p;let oe=(U.team||[]).filter(q=>q.id!==H&&q.to===Be.to&&q.outcome!=="bounced"&&(q.kind||"kill")==="kill").map(q=>q.id);if(de((async()=>{for(let q=0;q<F.length;q++){let se=F[q];await Ce(H,se.tr.to,se.p,{again:q>0,peek:se.peek,bounced:se.bounced,onInside:se.kill&&se.tr.interior!==!1?()=>de(ze(se.tr,q===0?oe:[],se.p.tL)):null})}})()),U.saved){let q=F.find(se=>se.tr.kind==="protect"||se.tr.kind==="heal")||F[0];de(Ve(q.tr.to,q.p.tA+Vn+.5))}}else U.saved&&de(Ve(U.trip&&Y.house(U.trip.to)?U.trip.to:H));(U.team||[]).forEach((F,oe)=>{if(F.id===H||!Y.house(F.to))return;J(F.to);let q=F.outcome==="bounced",se=(F.kind||"kill")==="kill"&&!q,re=up(se,q,!1),Ie=ie(F.id,F.to,!1),Se;if(Le&&Be&&F.to===Be.to&&!q){let De=Le.tA+.35*(oe+1);Se=jr(Ie,{s0:.3,tA:De,dwell:Math.max(re.dwellMin,Le.tL+.15*(oe+1)-De),dwellMin:re.dwellMin,end:Ri})}else Se=jr(Ie,{s0:.3+oe*.2,tAmin:3,tAmax:se?nx:9.5,end:Ri,...re});de(Ce(F.id,F.to,Se,{bounced:q}))}),he&&de(_t(he)),He.length&&(J(H),de(be(He,U)));let Ke=U.home||[];for(let F of He){let oe=Ke.indexOf(F);F.byProtector=oe>=0&&Ke[oe+1]&&Ke[oe+1].kind==="protect"}l=X.length?X:null,s.showFocusChanged(),await Promise.all(D.slice());for(let F=0;F<3&&D.length;F++)await Promise.all(D.splice(0));a&&await Re();async function ze(F,oe,q){if(s.mainBusy())return;let se=N.openRoom(F.to);if(!se)return;let re=se.shot("inside",W());N.cut(re.pos,re.look,{fov:re.fov});let Ie=se.L,Se=ge=>se.W(ge),De=[H,...oe].slice(0,3),I=[Ie.bedside,Ie.bedside2,{x:-1.6,z:.9}],P=[];De.forEach((ge,me)=>{let we=s.playerById(ge);if(!we)return;let Ae=se.addActor("k"+me,we.look,we.name,Ie.doorIn,-Math.PI/2);P.push(Ae);let xe=F.kind==="steal"&&me===0?[{walk:[Se({x:-.3,z:-1.9})],mode:"sneak"},{faceTo:Se(Ie.chest)},{once:"pick-up",opts:{timeScale:1.1}}]:[];Ae.run([...xe,{walk:[Se(I[me%3])],mode:"sneak"},{faceTo:Se({x:Ie.sleeper.x,z:-1.4})},{pose:F.kind==="poison"?"hold":"loom"}])});let Q=Se({x:Ie.sleeper.x,y:.9,z:Ie.sleeper.z});if(await L(Math.max(_()+1.3,q-1.6)),!!E(se)){for(let ge of P)ge.playOnce(F.kind==="poison"?"interact-right":"attack-melee-right",{timeScale:.7});if(s.sfx(F.kind==="poison"?"potion":"bite",{volume:.6}),F.kind==="poison"&&s.fx.emit("bubble",Q.x,Q.y,Q.z,"#94d82d",10),await N.wait(.45),!!E(se)){if(F.outcome==="done"){s.flickerRoom(1.1);let ge=s.playerById(F.to);n.ghostRise(N,ge&&ge.look,Q.x,Q.z,.9,1.3)}else{g(Q.x,Q.y,Q.z,10,.6),s.sfx("safe",{volume:.5});for(let ge of P)ge.setBase("idle",.2),ge.playOnce("emote-no",{timeScale:1.1})}await L(q-.1),E(se)&&s.endShowRoom()}}}async function Ve(F,oe=6){await L(oe);let q=s.houseAnchors(F);if(q)for(let se=0;se<3;se++)g(q.door.x*.7+q.backWin.x*.3,q.height*.85,q.door.z*.7+q.backWin.z*.3,6,1.6,2.6),s.fx.emit("magic",q.door.x,1.4,q.door.z,hu,8),se===0&&s.sfx("safe",{volume:.5}),await N.wait(.4)}async function _t(F){let oe=F.houseId,q=s.houseAnchors(oe);c=oe,J(oe),J(H);let se=[],re=[],Ie=($,Pe,ve)=>re.push(new K($,Pe,ve)),Se=($,Pe)=>{let ve=$.x-q.approach.x,Oe=$.z-q.approach.z,Ye=Math.hypot(ve,Oe)||1,Ze=Math.min(1,Pe/Ye);Ie(q.approach.x+ve*Ze,0,q.approach.z+Oe*Ze)},De=ie(H,oe,!0),{outFix:I,backFix:P}=dp(De,!0),Q=(F.arrivals||[]).slice(0,8),ge=Q.length>1?Math.min(1.2,4.2/(Q.length-1)):0,me=Math.min(Sl*1.15,Math.max(Js,De.out/Math.max(1,7.5-.15-I))),we=Math.max(3,.15+I+De.out/me),Ae=we+2.5,xe=0;if(Q.forEach(($,Pe)=>{let ve=!!$.blocked,Oe=ve?up(!1,!0,!1):{dwell:vw,dwellMin:Vn+.6},Ye=we+1+Pe*ge,Ze=$.id&&$.id!==H&&$.id!==oe&&s.chars.get($.id)&&Y.house($.id)&&R(B,$.id)&&!A.has($.id),ke,tt;if(Ze){let gt=ie($.id,oe,!1);ke=Math.max(Ye,.3+Ks+gt.out/Sl);let qe=jr(gt,{s0:.3,tA:ke,dwell:Oe.dwell,dwellMin:Oe.dwellMin,end:Ri});tt=qe.tL,se.push(Ce($.id,oe,qe,{bounced:ve}));let Nt=s.houseAnchors($.id);Nt&&Se(Nt.approach,11)}else ke=Ye,tt=ke+Oe.dwell,se.push(Mt(oe,ve,ke,tt,Pe,gt=>Se(gt,11)));Ae=Math.max(Ae,tt+(ve?.3:.6)),ve||(xe=Math.max(xe,ke+Vn+.9))}),F.ownerWent&&F.ownerWent!==oe&&Y.house(F.ownerWent)){J(F.ownerWent);let $=ie(oe,F.ownerWent,!1),Pe={dwell:Vn+1.2,dwellMin:Vn+.5},ve=Ri-(Ks+$.out/Sl+Pe.dwellMin+Ks+$.back/Sl+Vn),Oe=Math.max(.4,Math.min(we+.5,ve)),Ye=jr($,{s0:Oe,end:Ri,...Pe});se.push(Ce(oe,F.ownerWent,Ye)),Ae=Math.max(Ae,Math.min(Ye.tA,Oe+Ks+10/Js));let Ze=s.houseAnchors(F.ownerWent);Ze&&Se(Ze.approach,11)}let fe=Math.min(13,xe||we+2);F.died?(se.push((async()=>{await L(fe),s.flickerHouse(oe,1.5),s.sfx("door",{volume:.3})})()),Ae=Math.max(Ae,fe+1.6)):F.saved&&(se.push(Ve(oe,fe)),Ae=Math.max(Ae,fe+1.4));let Te=Math.max(Ri-(P+De.back/Sl),Math.min(16,Ae)),V=Math.max(we+1.5,Math.min(Math.max(we+2.5,Ae),Te)),ee={s0:.15,tA:we,tL:V,tH:Math.min(Ri,V+P+De.back/Js)};if(A.has(H)||se.unshift(Ce(H,oe,ee,{peek:!0})),q){Ie(q.peek.x,0,q.peek.z),Ie(q.peek.x,1.9,q.peek.z),Ie(q.approach.x,0,q.approach.z),Ie(q.approach.x,1.9,q.approach.z);let $=Math.hypot(q.approach.x,q.approach.z)||1;Se({x:q.approach.x*(1-6/$),z:q.approach.z*(1-6/$)},6),h={hid:oe,pts:re}}await Promise.all(se.map($=>$.catch(()=>{})))}async function Mt(F,oe,q,se,re,Ie){let Se=s.houseAnchors(F),De=Y.house(F),I=Y.layout;if(!Se||!De||!I)return;let P=De.angle+Math.PI+(re%2?1:-1)*(.45+.3*(re>>1)),Q=P,ge=9;for(let ve=0;ve<I.houses.length;ve++){let Oe=I.houses[ve].angle,Ye=I.houses[(ve+1)%I.houses.length].angle,Ze=Oe+nn(Ye-Oe)/2,ke=Math.abs(nn(Ze-P));ke<ge&&(ge=ke,Q=Ze)}let me={x:Math.sin(Q)*(I.R-.8),z:Math.cos(Q)*(I.R-.8)},we=t.pathTo(me,F)||[me,Se.approach];Ie&&Ie(we.length>2?we[we.length-2]:me);let Ae=0;for(let ve=1;ve<we.length;ve++)Ae+=Math.hypot(we[ve].x-we[ve-1].x,we[ve].z-we[ve-1].z);let xe=Math.max(.4,q-Ae/2.7),fe=Math.max(2.2,Math.min(6.5,Ae/Math.max(.6,q-xe)));await L(xe);let Te=S(N,me.x,me.z,Math.atan2(we[1]?we[1].x-me.x:0,we[1]?we[1].z-me.z:1));if(!Te)return;fp(Te,0);let V=N.tween(.8,ve=>fp(Te,ve),ve=>ve);await M(N,Te,we,fe,fe>3.6?"sprint":"walk"),await V,v(Te,Se.door);let ee=we.slice().reverse();oe?(Te.play("interact-right"),await N.wait(.9),s.fx.emit("poof",Se.door.x,1.2,Se.door.z,"#9fb3d1",5),await L(se)):(s.village.openDoor(F,1),s.sfxThrottled("door",.35),await M(N,Te,[Se.approach,Se.inside],1.8),Te.root.visible=!1,await L(se),Te.root.visible=!0,s.village.openDoor(F,1),await M(N,Te,[Se.inside,Se.approach],2.2));let $=Math.max(2.4,Math.min(5.5,Ae/Math.max(1.5,Ri-1-_()))),Pe=M(N,Te,ee,$,$>3.6?"sprint":"walk");await N.wait(Math.max(0,Ae/$-.8)),await N.tween(.8,ve=>fp(Te,1-ve),ve=>ve),await Pe,Te.root.visible=!1}async function be(F,oe){await L(3.4);let q=F.some(fe=>fe.result==="died")||!!oe.dead,se=s.chars.get(H);if(!q&&se&&se.claimed&&se.visible){F.some(fe=>fe.result==="saved")&&await Ve(H,4.6);return}let re=!s.mainBusy()&&N.openRoom(H);if(!re){q&&(await L(6.8),s.flickerHouse(H,1.4),await L(8.2),ce());return}let Ie=re.shot("inside",W());N.cut(Ie.pos,Ie.look,{fov:Ie.fov});let Se=re.L,De=fe=>re.W(fe),I=De(Se.bedside),P=De(Se.bedside2),Q=De(Se.bedfoot),ge=De({x:Se.sleeper.x,y:.9,z:Se.sleeper.z}),me=De(Se.doorStep),we=De(Se.doorIn),Ae=null,xe=F.slice(0,2);for(let fe=0;fe<xe.length;fe++){let Te=xe[fe];if(!E(re))return;await L(fe===0?4.3:_()+.2),s.sfx("door",{volume:.5});let V=S(N,me.x,me.z,-Math.PI/2,{eyes:Te.kind==="attack",opacity:.9});if(!V)break;let ee=fe===0?I:P;if(await M(N,V,[me,we,ee],fe===0?2:2.6),v(V,ge),V.root.rotation.x=.3,V.play("interact-right"),Te.kind==="poison"&&s.fx.emit("bubble",ge.x,ge.y,ge.z,"#94d82d",10),Te.result==="saved")!Ae&&Te.byProtector&&(Ae=S(N,me.x,me.z,-Math.PI/2,{color:"#0d1a12",glow:hu,opacity:.85}),Ae&&await M(N,Ae,[me,we,Q],3.4,"sprint")),Ae&&(v(Ae,ge),Ae.play("interact-left")),g(ge.x,ge.y+.2,ge.z,12,.7),s.fx.emit("magic",ge.x,ge.y,ge.z,hu,14),s.sfx("safe",{volume:.6}),await N.wait(.9),g(ge.x,ge.y+.3,ge.z,8,.9),s.fx.emit("smoke",V.root.position.x,1,V.root.position.z,"#2a2238",14),V.root.visible=!1,await N.wait(.6);else if(Te.result==="died"){s.flickerRoom(1.4),s.sfx(Te.kind==="poison"?"potion":"bite",{volume:.7}),Te.kind!=="poison"&&s.flash(.25,"#d7263d"),await N.wait(1.4),s.fx.emit("smoke",V.root.position.x,1,V.root.position.z,"#2a2238",16),V.root.visible=!1,await N.wait(.2);let $=s.playerById(H);await n.ghostRise(N,$&&$.look,ge.x,ge.z,.9,1.8),ce(),E(re)&&s.endShowRoom();return}else await N.wait(1),await M(N,V,[ee,we,me],2.4),V.root.visible=!1}await N.wait(.5),E(re)&&s.endShowRoom()}function ce(){if(a)return;a=!0,s.showDead.add(H),s.markDead(H,{quiet:!0,drop:!0});let F=B.players.find(se=>se.id===H),oe=s.houseAnchors(H),q=F&&s.ensureGhost(F);q&&oe&&(q.fresh=!1,q.isMe=!0,q.pos.set(oe.approach.x,0,oe.approach.z),q.yaw=Math.atan2(-oe.approach.x,-oe.approach.z),s.fx.emit("magic",oe.approach.x,1,oe.approach.z,"#d8d0ff",12)),s.reapply()}async function Re(){let F=new K,oe=new K,q=!0;for(;_()<Zs+1.5;){let se=s.ghostOf(H);if(se&&!s.mainBusy()){let re=Math.hypot(se.pos.x,se.pos.z),Ie=re>3?se.pos.x/re:0,Se=re>3?se.pos.z/re:1,De=W()?9:7.5;F.set(se.pos.x,1.3,se.pos.z),oe.set(se.pos.x-Ie*De,W()?6.4:5.2,se.pos.z-Se*De),q?(N.cut(oe,F,{fov:W()?56:46}),q=!1):N.shot(oe,F,{fov:W()?56:46,k:1.6})}await N.wait(.25)}}});function E(N){return s.roomModeIs("show")&&s.room===N}function x(N){let z=N.room.night;return!z||!z.showUntil?0:Math.max(0,Zs-(z.showUntil-s.serverNow())/1e3)}function w(){u&&e.skip(),u=!1,h=null,l&&(l=null,s.showFocusChanged()),f.clear()}function O(N){o=N,a=!1,c=null,s.showDead.clear()}function C(N){let z=N.room;if(z.phase==="lobby"){w(),o!==-1&&O(-1),i="",r=-1;return}if(z.phase!=="night"){u&&w();return}if(z.round!==o&&O(z.round),(z.night&&z.night.stage)!=="show"){u&&w();return}let B=N.night&&N.night.show||null,Y=z.round+"|"+(B?JSON.stringify(B):"");if(Y===i)return;let H=x(N);if(r===z.round&&(H>2.5||!B)){i=Y;return}if(i=Y,r=z.round,u&&e.skip(),!B)return;if(H>Zs-7){B.dead&&!a&&(a=!0,s.showDead.add(N.me.id),s.reapply());return}u=!0;let G={kind:"show",show:B,state:N,el:H};e.announce(G).then(()=>{i===Y&&(u=!1,h=null,l&&(l=null,s.showFocusChanged()),f.clear())})}return{sync:C,stop:w,get running(){return u},get focus(){return l},get watchCam(){return h},actors:f,sawDeath:()=>a,watched:N=>c===N,dispose(){if(w(),d){for(let N of d.list)N.parent&&N.parent.remove(N),N.material.dispose();d.tex.dispose(),d=null}}}}var wl=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],rx=["top","hor","sun","sky","gnd"];for(let s of wl)for(let e of rx)s[e]=new Ue(s[e]);function ox(){return{h:12,top:new Ue,hor:new Ue,sun:new Ue,sky:new Ue,gnd:new Ue,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new K,moonDir:new K,lightDir:new K,sunVis:0,moonVis:0,night:0,dusk:0}}function bw(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ct(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function Sw(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ct(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var uu=new K,fu=new K;function ax(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<wl.length-2&&wl[t+1].h<=s;)t++;let n=wl[t],i=wl[t+1],r=Gs(ct((s-n.h)/(i.h-n.h),0,1));for(let a of rx)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,bw(s,e.sunDir),Sw(s,e.moonDir),e.sunVis=ct((e.sunDir.y+.06)/.12,0,1),e.moonVis=ct((e.moonDir.y+.04)/.12,0,1)*ct(1-e.sunVis*1.2,0,1);let o=ct((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ct(1-Math.abs(e.sunDir.y-.05)/.22,0,1),uu.copy(e.sunDir),uu.y=Math.max(uu.y,.24),fu.copy(e.moonDir),fu.y=Math.max(fu.y,.45),e.lightDir.copy(uu.normalize()).multiplyScalar(o).addScaledVector(fu.normalize(),1-o).normalize(),e}function lx(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var $s={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},pp=["saver","low","medium","high"];function cx(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function hx(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function ux(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var fx="vkw.quality.v2";function ww(){try{return JSON.parse(localStorage.getItem(fx)||"null")}catch{return null}}function Ew(s){try{localStorage.setItem(fx,JSON.stringify(s))}catch{}}var du=class{constructor(e,t={}){this.noRetry=!!t.noRetry;let n=ww();if(this.fails={},n&&Array.isArray(n.failed))for(let i of n.failed)this.fails[i]=1;else if(n&&n.fails&&typeof n.fails=="object")for(let i of Object.keys(n.fails))$s[i]&&(this.fails[i]=+n.fails[i]||0);this.level=n&&$s[n.tier]?n.tier:e,this.remembered=!!(n&&$s[n.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){Ew({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((m,g)=>m-g),r=this.cpu.slice().sort((m,g)=>m-g),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,c=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let h=$s[this.level].fps===30,u=h?40:30,f=pp.indexOf(this.level),d=o>u||a>u*1.8,p=h?a<36&&c<11:o<18&&a<26;if(d?(this.bad+=o>u*1.6?2:1,this.good=0):p?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=pp[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let y=pp[f+1];return y&&this.good>=(this.fails[y]?30:12)&&(this.fails[y]||0)<(this.noRetry?1:2)?(this.level=y,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},pu=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((h,u)=>h-u),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((h,u)=>h+u,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let h=this.trial;if(this.trial=null,o>h.p90*.92)return this.scale=h.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let c=a<o*.55,l=this.min||.6;return o>i*1.2&&c&&this.scale>l+.001?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(l,+(this.scale-.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function mp(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var dx=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function px(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!mp())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=hx(),a=cx(o),c=document.createElement("div");c.className="vkw-root",s.appendChild(c);let l;try{l=new Zo({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw c.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}l.outputColorSpace=Bt,l.toneMapping=Br,l.toneMappingExposure=1,l.shadowMap.type=Fr;let h=l.domElement;h.setAttribute("aria-label","K\xF6y"),c.appendChild(h);let u=document.createElement("div");u.className="vkw-vignette",c.appendChild(u);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",c.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",c.appendChild(d);function p(){p.enabled&&(d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0")}let y=new wr;y.fog=new Ra(2475,50,250);let m=new an(40,1,.3,900),g=new su(m);g.clampFn=T=>{let Z=_&&_.layout;if(!Z||Q!=="game")return;let te=Math.hypot(T.x,T.z),Me=Z.R-6.2;if(te>Me&&te<Z.R+6&&T.y<9.5){let Ee=Me/te,ye=Math.max(0,(T.y-7)/2.5),Ne=Ee+(1-Ee)*ye;T.x*=Ne,T.z*=Ne}};let S="auto",M=new du(ux(o),{noRetry:!o}),v=new pu;n.renderScale=1;let R=$s[M.level],E={...a,sparks:70,fireflies:56,clouds:R.clouds,trees:a.trees,scatter:a.scatter},x=new Nr(16777215,4473924,1);y.add(x);let w=new ci(16777215,2);w.shadow.bias=-6e-4,w.shadow.normalBias=.03,y.add(w),y.add(w.target);let O=new zr(16747050,20,17,1.5);O.position.set(0,1.4,0),y.add(O);let C=xg(y,E),N=yg(y,E),z=new Xi("glow",128),U=new Xi("pool",128),B=new Xi("blob",64,Ei),Y=new Xi("ring",48);for(let T of[U,B,Y,z])y.add(T.mesh);let H=new jh(160);y.add(H.normal.mesh),y.add(H.add.mesh);let G=Pg(E);y.add(G.group);let b=Lg(56);y.add(b.points);let _=null,L=new Map,A=new Map,D=new Set,X=new Map,W=0,J=[],de=null,ie=null,ae=null,Ce=null,Be=null,he=0,He=null,le=new Set,j=1,Le=!1,Ke=null,ze=null,Ve=Ng(y),_t=new ci(9417983,0);y.add(_t),y.add(_t.target);let Mt=new Map;function be(T,Z){let te=(Mt.get(T)||0)+1;Mt.set(T,te),(te===1||te===50)&&console.warn("[VKWorld] "+T+" hatas\u0131 (yakaland\u0131, devam ediliyor):",Z)}let ce={rig:g,camera:m,chars:L,scene:y,time:0,get village(){return _},fx:H,obstacles:[],localMove:null,sfx(T,Z){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(T,Z)}catch{}},sfxThrottled(T,Z){let te=performance.now();(Re[T]||0)+Z*1e3>te||(Re[T]=te,ce.sfx(T))},sfxStep(){ce.sfxThrottled("step",.32)},reapply(){ge&&I&&Q==="game"&&Zi(!1)},ticker:J,assets:_s,get room(){return ie},getState(){return I},playerById(T){let Z=I&&I.players.find(te=>te.id===T);return Z?{id:Z.id,look:Z.look,name:Z.name,role:Z.role}:null},makeActor(T,Z,te){let Me="cine:"+ ++W,Ee=new Ai(ce,Me,T,{ghost:te==="ghost"});return Ee.cineKey=Me,y.add(Ee.root),X.set(Me,{ch:Ee,name:Z||"",color:T.color|0}),Z&&(Le=!0),Ee},dropActor(T){X.delete(T.cineKey),T.dispose(),Le=!0},isDeadShown(T){let Z=I&&I.players.find(te=>te.id===T);return!!(Z&&I.room.phase!=="lobby"&&(!Z.alive||Z.left)&&!(I.room.phase==="hunter"&&I.room.hunterId===T))},openRoom(T){return ws(T,"cine")},endCineRoom(){ae==="cine"&&eo()},showDead:new Set,mainBusy(){return se.running},openShowRoom(T){return se.running?null:ws(T,"show")},endShowRoom(){ae==="show"&&eo()},roomModeIs(T){return ae===T},serverNow(){return Date.now()+Il},ghostOf(T){return A.get(T)||null},showFocusChanged(){ge&&I&&Q==="game"&&et(!1)},sawOwnDeath(){return De.sawDeath()},showWatched(T){return De.watched(T)},setTodOverride(T,Z){de=T,Z&&T!=null&&(Te=T)},cineTint(){},moonOverride(T){Ce=T?new Ue(T):null},fogBoost(T){return j=T,()=>{j=1}},footDust(T,Z){R.name!=="low"&&Q==="game"&&H.emit("dust",T,.05,Z,ze&&ze.snow?"#e8eef5":null,2)},houseAnchors(T){let Z=_&&_.house(T);return Z?_.anchors(Z):null},layoutR(){return _&&_.layout?_.layout.R:15},meId(){return I&&I.me?I.me.id:null},flickerRoom(T=1.4){Ii={t:0,dur:T}},toon:!1,flickerHouse(T,Z){_&&_.flicker(T,Z)},diedTonight(T){if(Be&&Be.ids.includes(T)&&Date.now()-Be.at<9e4)return!0;let Z=I&&I.players.find(te=>te.id===T);return!!(Z&&(!Z.alive||D.has(T))&&I.room.phase!=="lobby"&&le.has(T))},leadInLeft(){let T=I&&I.room&&I.room.timerFrom;return T?ct((T-(Date.now()+Il))/1e3-.3,1.2,4.5):3.6},flash(T,Z){if(!T){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${Z||"#d7263d"}55, ${Z||"#d7263d"}cc)`,f.style.opacity=String(T),clearTimeout(F),F=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(T,Z){H.emit("poof",T,.4,Z,null,16),ce.sfxThrottled("poof",.2)},isHeldDeath(T){return D.has(T)},holdDeaths(T){D.clear();for(let Z of T)D.add(Z)},releaseDeaths(){D.size&&(D.clear(),ce.reapply())},markDead(T,Z={}){D.delete(T);let te=L.get(T);te&&te.visible&&!te.claimed&&(Z.quiet||ce.poofAt(te.pos.x,te.pos.z),te.setVisible(!1)),_&&_.setDead(T,!0,te?te.look.color:0,Z.drop)},ensureChar(T){if(!ge)return null;let Z=L.get(T.id);return Z?Z.setLook(T.look):(Z=new Ai(ce,T.id,T.look),Z.fresh=!0,L.set(T.id,Z),y.add(Z.root),qe(Z)),Z},ensureGhost(T){if(!Hn("characters/ghost.glb"))return null;let Z=A.get(T.id);return Z||(Z=new Ai(ce,T.id,T.look,{ghost:!0}),Z.fresh=!0,A.set(T.id,Z),y.add(Z.root)),Z},removeGhost(T){let Z=A.get(T);Z&&(Z.dispose(),A.delete(T))}},Re={},F=0,oe=Kg(c,{onTagTap(T){Ft(T,!0)},onPlaqueTap(T){Ae.has(T)&&fn(T)},onRecenter(){Rp()},onCamToggle(){Cp()}}),q=Zg(c,{}),se=ap(ce),re=qg(se,ce),Ie=tx(ce),Se=ap(ce,{scoped:!0,timeout:Zs+3}),De=sx(ce,Se,Ie,re),I=null,P={},Q="menu",ge=!1,me=!1,we="",Ae=new Set,xe=new Set,fe=null,Te=18.3,V=18.3,ee=ox(),$={fog:1,tint:new Ue("#ffffff"),tintAmt:0,moon:new Ue("#eef2ff"),stars:1,weather:"none"},Pe=new Ue,ve=!0,Oe=0,Ye=new K,Ze=1,ke=1,tt=1,gt={top:0,bottom:0,left:0,right:0};function qe(T){T.model.traverse(Z=>{Z.isMesh&&(Z.castShadow=R.charShadow)})}let Nt=null;function on(T){Nt=T}function Ci(){Nt!=null&&(l.setPixelRatio(Nt),l.setSize(Ze,ke,!1),Nt=null)}let Qs=0;function bs(T,Z=!0){R=$s[T];let te=window.devicePixelRatio||1;tt=Math.min(te,o?R.pxMobile:R.px),ce.toon&&o&&(tt=Math.max(tt,Math.min(te,1))),v.min=ce.toon&&o?Math.min(1,1/tt):.6,(n.renderScale||1)<v.min&&(n.renderScale=Math.max(v.min,n.renderScale||1),v.scale=n.renderScale),on(tt*(n.renderScale||1)),Qs=ce.toon?0:R.shadows||(o?0:1);let Me=Qs>0;if(l.shadowMap.enabled!==Me&&(l.shadowMap.enabled=Me,y.traverse(Ee=>{Ee.material&&(Array.isArray(Ee.material)?Ee.material:[Ee.material]).forEach(ye=>{ye.needsUpdate=!0})})),w.castShadow=Me,Me){let Ee=R.shadowSize||1024;w.shadow.mapSize.x!==Ee&&(w.shadow.mapSize.set(Ee,Ee),w.shadow.map&&(w.shadow.map.dispose(),w.shadow.map=null)),l.shadowMap.autoUpdate=Qs===2}for(let Ee of L.values())qe(Ee);if(E.clouds=R.clouds,ve=!0,Z&&t.onQuality)try{t.onQuality(T)}catch{}}function Qr(){let T=c.getBoundingClientRect();Ze=Math.max(1,Math.round(T.width)),ke=Math.max(1,Math.round(T.height)),l.setSize(Ze,ke,!1),g.setSize(Ze,ke),oe.setSize(Ze,ke),q.place(Su(),Ze,ke),et(!0)}let er=null;window.ResizeObserver&&(er=new ResizeObserver(()=>Qr()),er.observe(c));let tr=()=>Qr();window.addEventListener("resize",tr),window.addEventListener("orientationchange",tr),bs(M.level,!1),Qr();let Ki=Qo.chars.length+Qo.village.length;qr(["village","chars"],(T,Z)=>{if(!me&&t.onProgress)try{t.onProgress(T,Z)}catch{}}).then(()=>{if(!me){if(El(),nr(),ge=!0,t.style==="toon")try{hr.setStyle("toon")}catch(T){be("g\xF6r\xFCn\xFCm",T)}if(I&&Q==="game"&&Zi(!0),t.onReady)try{t.onReady()}catch{}return qr(["extra"]).then(()=>{if(!me)return _.onExtraLoaded(),nr(),I&&Zi(!1),qr(["cine"]).then(()=>{me||(ie||(ie=op(ce)),nr(!0))})})}}).catch(T=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",T),t.onError)try{t.onError(T)}catch{}});function nr(T){try{let Z=[],te=ye=>ye.traverse(Ne=>{Ne.visible||(Ne.visible=!0,Z.push(Ne))});te(y);let Me=[];if(ie&&ie.group&&(ie.group.parent||y.add(ie.group),te(ie.group)),T)for(let ye of["props/village.glb","props/graveyard.glb","interior/furniture.glb","interior/clues.glb","characters/ghost.glb","characters/vampire.glb","characters/bat.glb"]){let Ne=jn(ye);Ne&&Me.push(Ne.scene)}let Ee=()=>{for(let ye of Z)ye.visible=!1};if(l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")){let ye=[l.compileAsync(y,m)];for(let Ne of Me)ye.push(l.compileAsync(Ne,m,y));Ee(),Promise.all(ye).catch(()=>{})}else{l.compile(y,m);for(let ye of Me)l.compile(ye,m,y);Ee()}}catch(Z){be("\xF6n derleme",Z)}}function El(){_=Rg(y,E,null,N),Ss(Q==="menu"||!I?null:I),b.place(8,40),et(!0)}function Ss(T){let Z,te=null;if(!T||Q==="menu")Z=dx;else{let Ne=T.room.phase==="lobby";Z=T.players.filter(ht=>!(Ne&&ht.left)).map(ht=>{var je;return{id:ht.id,seat:(je=ht.seat)!=null?je:0}}),te=T.me?T.me.id:null,Z.length||(Z=dx)}let Me=Z.map(Ne=>Ne.id+"@"+Ne.seat).join(",")+"|"+te;if(Me===we)return!1;let Ee=!!we&&T&&T.room.phase==="lobby"&&Q==="game"&&!we.startsWith("menu-");we=Me;let ye=Mg(Z,te);_.setLayout(ye,Ee),ir(ye),b.place(ye.Rp+1,ye.R+14),ve=!0,Ee||Ie.reset();for(let Ne of L.values())Ee||(Ne.fresh=!0);return!0}function ir(T){let Z=[{x:0,z:0,r:1.6,tag:"fire"}];for(let te of _.benchSlots){let Me=Math.cos(te.a),Ee=-Math.sin(te.a);for(let ye of te.small?[-.45,.45]:[-.85,0,.85])Z.push({x:te.x+Me*ye,z:te.z+Ee*ye,r:.3,tag:"bench"})}for(let te of _.lampList())te.small||Z.push({x:te.x,z:te.z,r:.35,tag:"lamp"});ce.obstacles=Z}let Ii=null;function Tl(T){if(!Ii)return 1;Ii.t+=T;let Z=Ii.t,te=Ii.dur;if(Z>=te)return .12;let Me=Math.floor(Z/.07);return Math.abs(Math.sin(Me*12.9898+3.1)*43758.5453)%1>.12+.75*(Z/te)?1-.4*(Z/te):.06}function ws(T,Z){if(ie||(ie=op(ce)),!ie.ready)return null;let te=ce.playerById(T)||{id:T,look:{color:0,hat:0,skin:0},name:""};return ie.hide(),ie.show(te),ae=Z,Le=!0,p(),ie}function eo(){ie&&ie.hide();let T=ae;ae=null,Ii=null,T&&((T==="cine"||!se.running)&&g.setOverride(null,!0),p()),Le=!0}function Es(T){T!==Ke&&(Ke=T,ze=Yg(T),$.fog=ze.fog,$.tint.set(ze.tint),$.tintAmt=ze.tintAmt,$.moon.set(ze.moon),$.stars=ze.stars,$.weather=ze.weather,$.nightTint=!!ze.nightTint,Ve.set(ze.weather),_&&_.setTheme(ze))}function Al(T,Z){if(!me&&(I=T,P=Z||{},!!ge))try{Zi(!1)}catch(te){be("durum",te)}}function to(){return!!(I&&I.room.phase==="night"&&I.room.night&&I.room.night.stage==="show")}function Ts(){if(!I)return null;let T=lu(I);return T==="night"&&to()?null:T}function Zi(T){if(!I||Q!=="game")return;let Z=Ss(I),{room:te,players:Me}=I;Es(te.scenario&&te.phase!=="lobby"?te.scenario.id:null);let Ee=te.phase!=="lobby",ye=new Set;for(let Ne of Me)ye.add(Ne.id),_.setOwner(Ne.id,Ne.look?Ne.look.color:-1,Ne.name),_.setDead(Ne.id,Ee&&(!Ne.alive||Ne.left||ce.showDead.has(Ne.id))&&!D.has(Ne.id),Ne.look?Ne.look.color:0);for(let[Ne,ht]of L)ye.has(Ne)||(ht.dispose(),L.delete(Ne),Ie.forget(Ne));for(let Ne of[...A.keys()])ye.has(Ne)||ce.removeGhost(Ne);if(te.phase==="lobby")for(let Ne of Me)_.tombOf(Ne.id)&&_.setDead(Ne.id,!1);if(te.phase==="night"&&!le.size)for(let Ne of Me)Ne.alive&&le.add(Ne.id);if(te.phase!=="night"&&te.phase!=="day"&&te.phase!=="hunter"&&le.clear(),te.phase==="night"&&He!=="night"){le.clear();for(let Ne of Me)Ne.alive&&le.add(Ne.id)}He=te.phase,Ie.apply(I,T||Z&&te.phase!=="lobby");try{De.sync(I)}catch(Ne){be("gece g\xF6sterisi",Ne)}Ae=Ts()?new Set(Me.filter(Ne=>jg(I,Ne,P.witchMode)).map(Ne=>Ne.id)):new Set,xe=to()?De.actors:new Set(Ml(I).keys()),sr(),et(!1)}function sr(){if(!I)return;let{room:T,me:Z,players:te,day:Me}=I,Ee=T.phase,ye=Ts(),Ne=hp(I,P.witchMode),ht=new Map(te.map(We=>[We.id,We])),je=new Set,ut=new Set,xt=te.filter(We=>!We.left).length;oe.setCompact(xt>7&&Ze<700||xt>12);for(let We of te){let st=L.get(We.id),dt=A.get(We.id);if(st||dt){je.add(We.id);let Fe=null,lt=Me&&Me.votes&&Me.votes[We.id];lt&&lt.length&&(Fe={total:lt.reduce((Rn,Li)=>Rn+(Li.w||1),0),dots:lt.map(Rn=>({color:ht.get(Rn.id)?Sn[ht.get(Rn.id).look.color]:"#999",w:Rn.w||1}))});let Et=(We.isHost&&Ee==="lobby"?"\u{1F451}":"")+(!We.connected&&!We.left?"\u{1F4F4}":"")+(Me&&Me.sleeping&&Me.sleeping.includes(We.id)?"\u{1F4A4}":"")+(Me&&Me.voted&&Me.voted.includes(We.id)&&!(Me.sleeping||[]).includes(We.id)?"\u2714":""),vt=ye!=="night"&&Ae.has(We.id);oe.setTag(We.id,{name:We.name,job:We.job&&We.job.label?We.job.label:"",color:We.look.color,badges:Et,me:We.id===Z.id,off:!We.connected,dead:!We.alive,sel:vt,picked:bl(I,We)&&ye!=="night",hover:fe===We.id&&vt,selColor:Ne,mark:ye!=="night"?cu(I,We,P.witchMode):Ee==="night"?null:cu(I,We,P.witchMode),votes:Fe})}if(_.house(We.id)){ut.add(We.id);let Fe=ye==="night"&&Ae.has(We.id),lt=Ee==="lobby"||Ee==="night"&&ye==="night"||Ee==="reveal";oe.setPlaque(We.id,{name:We.name,color:We.look.color,sel:Fe,picked:Ee==="night"&&bl(I,We),dim:!lt,hidden:!lt,dead:Ee!=="lobby"&&(!We.alive||We.left),selColor:Ne,mark:Ee==="night"?cu(I,We,P.witchMode):null})}}for(let[We,st]of X)st.name&&(je.add(We),oe.setTag(We,{name:st.name,job:"",color:st.color,badges:"",me:!1}));if(ce.room&&ae){for(let[We,st]of ce.room.actors)if(st.name){let dt="room:"+We;je.add(dt),oe.setTag(dt,{name:st.name,job:"",color:st.color,badges:"",me:!1})}}oe.sync(je,ut),Le=!1}let k=[],ne=new K,_e=0,ue="";function pe(T){if(!I||!_||!De.focus)return;let Z=g.portrait,te=L.get(I.me.id);if(!(te&&te.visible&&te.claimed)){te=null;for(let je of De.actors){let ut=L.get(je);if(ut&&ut.visible&&ut.claimed&&I.players.some(xt=>xt.id===je&&xt.role&&xt.role==="vampir")){te=ut;break}}}let Me=De.watchCam,Ee=Me&&te&&te.peeking===Me.hid?_.house(Me.hid):null;if(Ee&&te.isMe){if(ue==="watch"&&!T)return;ue="watch";let je=_.anchors(Ee),ut=Math.cos(Ee.angle),xt=-Math.sin(Ee.angle),We=(je.door.x-Ee.cx)*ut+(je.door.z-Ee.cz)*xt>=0?1:-1,st=0,dt=0;for(let Et of Me.pts)st+=Et.x,dt+=Et.z;st/=Me.pts.length,dt/=Me.pts.length;let Fe=Math.hypot(st,dt)||1,lt=Z?3.5:2;st-=st/Fe*lt,dt-=dt/Fe*lt,g.setShot({kind:"show",target:ne.set(st,.6,dt),az:Ee.angle+We*.6,el:Z?1.2:1.06,fov:Z?50:42,points:Me.pts,margin:Z?.84:.82,minDist:14,snap:T,speed:.9}),g.shot.dynamic=!1;return}if(te){ue="follow",g.setShot({kind:"show",target:ne.set(te.pos.x*.9,.6,te.pos.z*.9),az:.25,el:Z?.98:.8,fov:Z?46:40,dist:Z?27:21,snap:T,speed:1.3}),g.shot.dynamic=!1;return}if(ue==="wide"&&!T)return;ue="wide";let ye=De.focus,Ne=0,ht=0;for(let je of ye)Ne+=je.x,ht+=je.z;Ne/=ye.length,ht/=ye.length,g.setShot({kind:"show",target:ne.set(Ne*.85,.5,ht*.85),az:.25,el:Z?1.02:.78,fov:Z?44:40,points:ye,margin:Z?.78:.8,minDist:18,snap:T,speed:.9}),g.shot.dynamic=!1}for(let T=0;T<64;T++)k.push(new K);let Ge="";function et(T){if(!_||!_.layout){g.setShot({target:new K(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:T});return}let Z=_.layout,te=g.portrait,Me=I&&Q==="game"?I.room.phase:"menu",Ee=I&&Q==="game"?Ts():null,ye;Me==="menu"?ye="menu":ca()&&wu()?ye="follow":Me==="night"?ye=Ee==="night"?"overview":to()&&De.focus?"show":"sleep":Me==="reveal"?ye="gather":wu()?ye="follow":ye="plaza";let Ne=ye!==Ge;Ge=ye,Ne&&(g.recenter(),ye==="follow"&&($e.init=!1));let ht=g.shot;if(ye==="follow"){let je=0,ut=Z.R+3.6;for(let xt=0;xt<24;xt++){let We=xt/24*it;k[je++].set(Math.sin(We)*ut,0,Math.cos(We)*ut)}$e.ovDist=g.fit(wp,$e.az,te?1.15:.98,40,k.slice(0,je),.94,8,220),ht.dynamic=!1,ht.points=null,(Ne||T)&&Ip(0,!0);return}if(ye==="menu"){let je=Z.Rp+(te?3.5:2.5);g.setShot({kind:ye,target:new K(0,te?3.4:3,0),az:ht.az,el:te?.2:.16,dist:je,fov:te?64:50,speed:1.2}),ht.dynamic=!1}else if(ye==="show")ue="",pe(T);else if(ye==="show-wide"){let je=De.focus,ut=0,xt=0;for(let st of je)ut+=st.x,xt+=st.z;ut/=je.length,xt/=je.length;let We=te?1.02:.78;g.setShot({kind:ye,target:ne.set(ut*.85,.5,xt*.85),az:.25,el:We,fov:te?44:40,points:je,margin:te?.78:.8,minDist:18,snap:T,speed:1.1}),ht.dynamic=!1}else if(ye==="overview"||ye==="sleep"){let je=0,ut=Z.R+3.6;for(let We=0;We<24;We++){let st=We/24*it;k[je++].set(Math.sin(st)*ut,0,Math.cos(st)*ut),k[je++].set(Math.sin(st)*Z.R,4.5,Math.cos(st)*Z.R)}let xt=ye==="overview"?te?1.2:.98:te?.95:.62;g.setShot({kind:ye,target:new K(0,0,ye==="overview"?0:-Z.R*.08),az:ye==="sleep"?.25:0,el:xt,fov:40,points:k.slice(0,je),margin:ye==="overview"?.94:1.04,snap:T,speed:1.6}),ht.dynamic=!1}else{let je=k,ut=0,xt=ye==="gather"?5.6:3.2;for(let st=0;st<8;st++){let dt=st/8*it;je[ut++].set(Math.sin(dt)*xt,0,Math.cos(dt)*xt)}for(let st of L.values()){if(!st.visible||ut>60)continue;let dt=st.path&&st.path.length?st.path[st.path.length-1]:st.pos;Math.hypot(dt.x,dt.z)>Z.Rp+1.5||(je[ut++].set(dt.x,0,dt.z),je[ut++].set(dt.x,2.4,dt.z))}for(let st of A.values())ut<62&&(je[ut++].set(st.pos.x,2.6,st.pos.z),je[ut++].set(st.pos.x,0,st.pos.z));let We=ye==="gather"?te?.6:.5:te?1.02:.66;g.setShot({kind:ye,target:zp(je,ut),az:0,el:We,fov:te?44:38,points:je.slice(0,ut),margin:te?.92:.8,minDist:8,snap:T,speed:1.8}),ht.dynamic=!0,ht.points=je.slice(0,ut)}}let Xe=new qa,Je=new pt,nt=new K,yt=new K,Ct=new ti(new K(0,1,0),0);function rt(T,Z){return Je.set(T/Ze*2-1,-(Z/ke)*2+1),Xe.setFromCamera(Je,m),Xe.ray}function It(T,Z,te,Me=34){let Ee=null,ye=1/0;for(let[Ne,ht]of L){if(!ht.visible||!te(Ne)||(nt.set(ht.pos.x,.1,ht.pos.z).project(m),yt.set(ht.pos.x,ht.headY,ht.pos.z).project(m),nt.z>1))continue;let je=(nt.x*.5+.5)*Ze,ut=(-nt.y*.5+.5)*ke,xt=(yt.x*.5+.5)*Ze,We=(-yt.y*.5+.5)*ke,st=xt-je,dt=We-ut,Fe=st*st+dt*dt||1,lt=ct(((T-je)*st+(Z-ut)*dt)/Fe,0,1),Et=Math.hypot(T-(je+st*lt),Z-(ut+dt*lt)),vt=Math.max(Me,Math.sqrt(Fe)*.55);Et<vt&&Et<ye&&(ye=Et,Ee=Ne)}return Ee}function sn(T,Z,te){let Me=_.layout,Ee=null,ye=1/0;for(let dt of _.houses.values()){if(dt.removing||te&&!Ae.has(dt.id)||(nt.set(dt.cx,1.6,dt.cz).project(m),nt.z>1))continue;let Fe=(nt.x*.5+.5)*Ze,lt=(-nt.y*.5+.5)*ke;yt.set(dt.cx+Math.cos(dt.crot)*dt.info.hx,1.6,dt.cz-Math.sin(dt.crot)*dt.info.hx).project(m);let Et=Math.max(26,Math.hypot((yt.x*.5+.5)*Ze-Fe,(-yt.y*.5+.5)*ke-lt)*1.25),vt=Math.hypot(T-Fe,Z-lt);vt<Et&&vt<ye&&(ye=vt,Ee=dt)}if(Ee)return Ee.id;let Ne=rt(T,Z),ht=_.pickHouse(Ne);if(ht&&(!te||Ae.has(ht.id)))return ht.id;let je=Ne.intersectPlane(Ct,nt);if(!je)return null;let ut=Math.hypot(je.x,je.z);if(ut<Me.Rp*.75||ut>Me.R+8)return null;let xt=Math.atan2(je.x,je.z),We=null,st=1/0;for(let dt of _.houses.values()){if(te&&!Ae.has(dt.id))continue;let Fe=Math.abs(((xt-dt.angle+Math.PI)%it+it)%it-Math.PI);Fe<st&&(st=Fe,We=dt)}return We&&st<Me.step*.5?We.id:null}function Wt(T,Z){if(!I||Q!=="game")return null;let te=Ts();if(te==="night"){let Me=sn(T,Z,!0);return Me&&Ae.has(Me)?Me:null}return te==="vote"||te==="shoot"?It(T,Z,Me=>Ae.has(Me)):null}let Ot=0;function fn(T){if(Ot=performance.now()+450,t.onPick)try{t.onPick(T)}catch{}}let ot=T=>{performance.now()<Ot&&T.cancelable&&T.preventDefault()},Mn=T=>{performance.now()<Ot&&(Ot=0,T.stopPropagation(),T.preventDefault())};c.addEventListener("touchend",ot,{passive:!1}),window.addEventListener("click",Mn,!0);function Ft(T,Z){if(!I)return;if(Ae.has(T)){fn(T);return}let te=I.room.phase;T===I.me.id&&(te==="lobby"||te==="ended")&&t.onSelf&&t.onSelf()}function Ji(T,Z){if(!I||Q!=="game"||!ge)return;let te=Wt(T,Z);if(te){fn(te),oe.ripple(T,Z);return}let Me=I.room.phase,Ee=I.me;if((Me==="lobby"||Me==="ended")&&It(T,Z,ye=>ye===Ee.id,26)){t.onSelf&&t.onSelf();return}if(Nl()){let ye=rt(T,Z).intersectPlane(Ct,nt);if(!ye)return;let Ne=_.layout,ht=Math.hypot(ye.x,ye.z);if(ht>Ne.R+4)return;let je=Math.atan2(ye.x,ye.z);ht=ct(ht,Ne.Rp*.2,Ne.Rp*.96);let ut=Math.sin(je)*ht,xt=Math.cos(je)*ht,We=Zd(Ne,ut,xt);if(ce.localMove={x:ut,z:xt,until:performance.now()+1500},oe.ripple(T,Z),t.onMove)try{t.onMove(We.x,We.y)}catch{}Zi(!1)}}let Ut=new Map,pi=!1,mi=0,Pi=0,kt=0,Jt=0;function Nn(T){let Z=c.getBoundingClientRect();return{x:T.clientX-Z.left,y:T.clientY-Z.top}}function Kt(T){if(T.target!==h)return;h.setPointerCapture&&h.setPointerCapture(T.pointerId);let Z=Nn(T);if(Ut.set(T.pointerId,Z),Ut.size===1&&(pi=!1,mi=performance.now(),Pi=Z.x,kt=Z.y),Ut.size===2){let[te,Me]=[...Ut.values()];Jt=Math.hypot(te.x-Me.x,te.y-Me.y),pi=!0}}function dn(T){let Z=Nn(T);if(!Ut.has(T.pointerId)){T.pointerType==="mouse"&&vx(Z.x,Z.y);return}let te=Ut.get(T.pointerId);if(Ut.set(T.pointerId,Z),Ut.size===1)!pi&&Math.hypot(Z.x-Pi,Z.y-kt)>9&&(pi=!0),pi&&Q==="game"&&(Ge==="follow"?Sx(Z.x-te.x,Z.y-te.y):g.drag(Z.x-te.x,Z.y-te.y));else if(Ut.size===2){let[Me,Ee]=[...Ut.values()],ye=Math.hypot(Me.x-Ee.x,Me.y-Ee.y);Jt>0&&ye>0&&Q==="game"&&(Ge==="follow"?Ap(Jt/ye):g.zoom(Jt/ye)),Jt=ye}}function gi(T){if(!Ut.has(T.pointerId))return;let Z=Nn(T);Ut.delete(T.pointerId),Ut.size===0&&!pi&&performance.now()-mi<650&&Ji(Z.x,Z.y),Ut.size<2&&(Jt=0)}function Rl(T){Ut.delete(T.pointerId)}function xx(T){if(Q!=="game")return;T.preventDefault();let Z=Math.exp(ct(T.deltaY,-120,120)*.0015);Ge==="follow"?Ap(Z):g.zoom(Z)}function vx(T,Z){let te=Wt(T,Z);te!==fe&&(fe=te,h.style.cursor=te?"pointer":"",sr())}h.addEventListener("pointerdown",Kt),h.addEventListener("pointermove",dn),h.addEventListener("pointerup",gi),h.addEventListener("pointercancel",Rl),h.addEventListener("pointerleave",T=>{T.pointerType==="mouse"&&fe&&(fe=null,sr())}),h.addEventListener("wheel",xx,{passive:!1});let yx=T=>T.preventDefault();h.addEventListener("contextmenu",yx);let xu=document.hidden,Cl=!1,xp=()=>{xu=document.hidden,xu||(sa=performance.now(),M.reset(),Ll())};document.addEventListener("visibilitychange",xp),h.addEventListener("webglcontextlost",T=>{T.preventDefault(),Cl=!0}),h.addEventListener("webglcontextrestored",()=>{Cl=!1,ve=!0,sa=performance.now(),Ll()});function _x(){if(de!=null)return de;if(Q!=="game"||!I)return 18.35;let{room:T,day:Z}=I,te=Date.now()+(I.serverNow,0),Me=T.deadline?Math.max(0,T.deadline-(te+Il))/1e3:null;switch(T.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let Ee=T.settings&&T.settings.nightSec||30,ye=Me==null?.3:ct(1-Me/Ee,0,1);return T.night&&T.night.stage&&(T.night.stage==="show"?ye=.7+.3*(Me==null?0:ct(1-Me/Zs,0,1)):ye=.7*(Me==null?.3:ct(1-Me/(Ee+4),0,1))),(21.2+ye*7.6)%24}case"day":{let Ee=T.settings&&T.settings.daySec||120,ye;return Z&&Z.shortened?(ia==null&&(ia=vu,yp=Math.max(1,Me||10)),ye=ia+(1-ia)*ct(1-(Me||0)/yp,0,1)):(ia=null,ye=Me==null?.2:ct(1-Me/Ee,0,1)),vu=ye,7.4+ye*11.6}case"hunter":return Te>19.5||Te<6?7.6:Te;case"ended":return T.winner==="vampir"?23:T.winner==="soytari"?18.5:9.5;default:return 17}}let vu=0,vp=-1,ia=null,yp=10,Il=0,Pl=0,sa=performance.now(),_p=0,ra=0,Wn={fps:0,ms:0,calls:0,tris:0,frames:0};function Ll(){!Pl&&!me&&(Pl=requestAnimationFrame(Mx))}let oa=240,Dl=new Float32Array(oa),yu=new Float32Array(oa),aa=0,rr=0,Mp=new Float32Array(oa);function la(T,Z){return rr?(Mp.set(T),+Mp.subarray(0,rr).sort()[Math.min(rr-1,Math.floor(Z*(rr-1)))].toFixed(1)):0}function Mx(T){if(Pl=0,me||xu||Cl||(Ll(),Ze<2||ke<2)||R.fps<=30&&T-_p<1e3/30-4)return;let Z=ct((T-sa)/1e3,0,.1),te=T-sa;sa=T,_p=T;let Me=performance.now();try{bx(Z)}catch(Ne){be("kare",Ne)}Ci();let Ee=performance.now();try{l.render(y,m)}catch(Ne){be("\xE7izim",Ne)}let ye=performance.now();if(Wn.stepMs=(Wn.stepMs||0)*.9+(Ee-Me)*.1,Wn.renderMs=(Wn.renderMs||0)*.9+(ye-Ee)*.1,Wn.frames++,ra+=te,Wn.cpu=ye-Me,Dl[aa]=te,yu[aa]=ye-Me,aa=(aa+1)%oa,rr<oa&&rr++,ra>500&&(Wn.fps=Math.round(Wn.frames*1e3/ra),Wn.ms=+(ra/Wn.frames).toFixed(1),Wn.frames=0,ra=0),Wn.calls=l.info.render.calls,Wn.tris=l.info.render.triangles,S==="auto"&&ge){let Ne=M.sample(te,ye-Me,T);Ne&&Ne!==R.name&&(bs(Ne),v.reset())}if(ge&&!Cl){let Ne=v.sample(te,ye-Me,T,R.fps===30?36:24);Ne!=null&&(n.renderScale=Ne,on(tt*Ne))}}let Pw=new Ue,_u=new Ue(0,0,0),Mu=new Map;function no(T){return Mu.has(T)||Mu.set(T,new Ue(T)),Mu.get(T)}function bx(T){ce.time+=T;let Z=ce.time;V=_x(),Te=lx(Te,V,T,Q==="menu"?.6:1.3),ax(Te,ee);let te=I&&Q==="game"&&I.room.phase==="ended"&&I.room.winner==="vampir";Pe.copy(Ce||$.moon),te&&(Pe.set("#ff6a6a"),ee.sun.lerp(no("#ff5a6a"),.35));let Me=$.tintAmt*($.nightTint?ee.night:1);Me>0&&(ee.top.lerp($.tint,Me),ee.hor.lerp($.tint,Me*.8),ee.sky.lerp($.tint,Me*.5),ee.gnd.lerp($.tint,Me*.3)),ee.night>.3&&ee.sun.lerp(Pe,(Ce||$.nightTint?.55:.3)*ee.night),ee.fogNear*=$.fog*j,ee.fogFar*=$.fog*j,ee.stars*=$.stars,y.fog.color.copy(ee.hor);let Ee=Math.max(0,g.cur.dist*g.user.zoom-28)*(1-.35*ee.night);y.fog.near=ee.fogNear+Ee*.9,y.fog.far=ee.fogFar+Ee*1.1,_t.intensity=.9*ee.night*(ae?.4:1),_t.color.copy(Pe),_t.position.set(-m.position.x*.6,60,-m.position.z*.6-40),x.color.copy(ee.sky),x.groundColor.copy(ee.gnd),x.intensity=ee.hi,w.color.copy(ee.sun),w.intensity=ee.si,ce.toon&&(x.intensity*=1.3,w.intensity*=.75);let ye=_&&_.layout,Ne=ye?ye.R+14:40;if(w.position.copy(ee.lightDir).multiplyScalar(120),w.target.position.set(0,0,0),w.castShadow){let Fe=w.shadow.camera;Fe.right!==Ne&&(Fe.left=-Ne,Fe.right=Ne,Fe.top=Ne,Fe.bottom=-Ne,Fe.near=20,Fe.far=260,Fe.updateProjectionMatrix(),ve=!0),Ye.angleTo(ee.lightDir)>.0045&&(Ye.copy(ee.lightDir),ve=!0)}let ht=.82+.1*Math.sin(Z*13.1)+.06*Math.sin(Z*23.7+1)+.05*Math.sin(Z*5.3);if(ae&&ie){let Fe=ae==="window"||se.current&&se.current.kind==="watch";if(Fe){let Et=ie.W({x:-2.4,y:2.3,z:-1.2});O.position.copy(Et),x.color.lerp(Pe,.6),x.groundColor.lerp(Pe,.35),x.intensity=ee.hi+1.1}else{let Et=ie.lanternWorld();O.position.set(Et.x,Et.y+.9,Et.z+.8)}let lt=Tl(T);O.intensity=(Fe?13:9+5*ee.night)*ht*lt,Ii&&(x.intensity*=.3+.7*lt),O.distance=12}else O.intensity=(2+17*ee.night*ee.night)*ee.fire*ht,O.position.set(Math.sin(Z*7)*.08,1.4,0),O.distance=17;G.update(Z,tt,.75+.25*ee.fire),C.update(ee,Z,m,tt,Pe),b.update(Z,tt,R.fireflies?ct(ee.night*1.2-.2,0,1):0),u.style.opacity=String(.55+ee.night*.45+(ae==="window"?.12:0));for(let Fe=J.length-1;Fe>=0;Fe--){let lt=!0;try{lt=J[Fe](T,Z)}catch(Et){be("ticker",Et)}lt&&J.splice(Fe,1)}if(ie&&ie.visible)try{ie.update(T,Z)}catch(Fe){be("oda",Fe)}for(let Fe of X.values())try{Fe.ch.update(T,Z)}catch(lt){be("kopya",lt)}Le&&I&&Q==="game"&&sr(),Ve.update(T,Z,tt,g.cur.target,Q==="game"||Q==="menu"?R.weather:0,ze&&ze.fogTint?no(ze.fogTint):null,ee.night),_&&(_.update(T,Z,ee)&&(ve=!0),_.version!==vp&&_.layout&&(vp=_.version,ir(_.layout)),i-=T,I&&Q==="game"&&i<=0&&(i=.25,Ie.tick(I)));try{Ax(T)}catch(Fe){be("s\xFCr\xFC\u015F",Fe)}let je=ce.obstacles,ut=Cx;ut.length=0,kp.setFromProjectionMatrix(Ix.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse));for(let Fe of L.values()){Fp.center.set(Fe.pos.x,Fe.pos.y+.9,Fe.pos.z);let lt=Fe.visible&&kp.intersectsSphere(Fp);Fe.animEvery=!Fe.visible||Fe.inside?-1:lt?1:4;try{Fe.update(T,Z)}catch(Et){be("karakter",Et),bp(Fe)}Fe.visible&&!Fe.claimed&&ut.push(Fe)}for(let Fe of A.values())try{Fe.update(T,Z)}catch(lt){be("hayalet",lt),bp(Fe)}so&&Rx();for(let Fe=0;Fe<ut.length;Fe++){let lt=ut[Fe];for(let Et=Fe+1;Et<ut.length;Et++){let vt=ut[Et],Rn=vt.pos.x-lt.pos.x,Li=vt.pos.z-lt.pos.z,zn=Rn*Rn+Li*Li;if(zn<.72*.72&&zn>1e-6){let ro=Math.sqrt(zn),ur=(.72-ro)*.5,Fl=Rn/ro,Ol=Li/ro,fr=lt.speed>vt.speed?.75:.25;lt.pos.x-=Fl*ur*fr,lt.pos.z-=Ol*ur*fr,vt.pos.x+=Fl*ur*(1-fr),vt.pos.z+=Ol*ur*(1-fr)}}lt.peeking||cp(lt.pos,je,null)}z.begin(),U.begin(),B.begin(),Y.begin(),z.add(0,1,0,3.4,no("#ff8a2a"),.55*ee.fire*ht),U.add(0,.04,0,13+3*ee.night,no("#ff7a1a"),(.18+.3*ee.night)*ee.fire*ht),_&&_.emitGlows(ee,Z,z,U);let xt=ce.toon?.62:R.blob?.55:.32;if(ce.toon&&_)for(let Fe of _.houses.values())Fe.scale>.5&&B.add(Fe.cx,.03,Fe.cz,Fe.info.size*1.25*Fe.scale,_u,.32);let We=I?no(hp(I,P.witchMode)):null,st=I&&Q==="game"?Ts():null;for(let Fe of ut)if(B.add(Fe.pos.x,.025,Fe.pos.z,1.05,_u,xt),st&&st!=="night"&&Ae.has(Fe.id)){let lt=I&&bl(I,{id:Fe.id});Y.add(Fe.pos.x,.05,Fe.pos.z,lt?1.9:1.5,We,lt?1:fe===Fe.id?.95:.45,Fe.seed*6)}for(let Fe of L.values())Fe.claimed&&Fe.visible&&Fe.root.visible&&B.add(Fe.pos.x,.025,Fe.pos.z,1.05,_u,xt);for(let Fe of A.values())z.add(Fe.pos.x,1.2,Fe.pos.z,2.2,no(Sn[Fe.look.color]),.22);if(st==="night"&&_)for(let Fe of Ae){let lt=_.house(Fe);if(!lt)continue;let Et=_.anchors(lt),vt=bl(I,{id:Fe});Y.add(Et.approach.x,.05,Et.approach.z,vt?3.4:2.6,We,vt?1:fe===Fe?.95:.5,lt.seat)}if(H.update(T,Z),z.end(Z),U.end(Z),B.end(Z),Y.end(Z),Q==="menu"&&(g.shot.az+=T*.045),Ge==="show"?(_e-=T,_e<=0&&(_e=.2,pe(!1))):Ge==="sleep"&&to()&&(g.shot.az+=T*.025),(Ge==="plaza"||Ge==="gather")&&Lx(),bu-=T,Q==="game"&&I&&bu<=0&&(bu=.4,Ge==="follow"!==wu()&&(Ge==="follow"||Ge==="plaza"||ca())&&et(!1)),Ge==="follow")try{Ip(T)}catch(Fe){be("takip",Fe)}g.update(T,Z);try{Ex(T)}catch(Fe){be("\xF6rtme",Fe)}let dt=Q==="game"&&I&&!se.current&&!ae&&Tp();oe.setCamToggle(!!dt,Ge==="follow"?"follow":"overview",gt),oe.setRecenter(Q==="game"&&(Ge==="follow"?wx():g.offset),gt),Oe-=T,w.castShadow&&Qs===1&&ve&&Oe<=0&&(l.shadowMap.needsUpdate=!0,ve=!1,Oe=Px()?.1:.2),ce.toon&&(he-=T,he<=0&&(he=.5,od(y,!0))),r-=T,Q==="game"&&I&&r<=0&&(r=R.labelHz>=60?0:1/R.labelHz-.004,oe.project(m,Dx,zx,Nx))}function bp(T){try{T.once=null;let Z=T.look;T.lookKey=null,T.setLook(Z),qe(T)}catch{T.setVisible(!1)}}let Sp="vkw.cam",or="follow";try{let T=localStorage.getItem(Sp);(T==="follow"||T==="overview")&&(or=T)}catch{}let $e={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0,kd:1,ke:0},wp=new K(0,0,0),$i=new K,bu=0;function ar(){if(!I||!I.me)return null;let T=I.me;if(!T.alive){let te=A.get(T.id);if(te)return te}let Z=L.get(T.id);return Z&&Z.visible?Z:null}function Nl(){let T=I&&Q==="game"?I.room.phase:null;return T==="lobby"||T==="ended"||ca()}function ca(){if(!I||Q!=="game"||!I.me||I.me.alive)return!1;let T=I.room.phase;return T!=="lobby"&&T!=="ended"&&A.has(I.me.id)}function Su(){return gt.joystick===null&&ca()&&q&&q.touch?{...gt,joystick:void 0}:gt}let Ep=!1;function Tp(){return Nl()&&!!ar()}function wu(){return or==="follow"&&Tp()}function zl(T){return T.yaw+Math.PI+.38*$e.side}function Sx(T,Z){$e.az-=T*.0075,$e.el=ct($e.el+Z*.004,.12,1.15),$e.dragT=0}function Ap(T){$e.zoom=ct($e.zoom*T,.55,4.2),$e.zoomGoal=0,$e.dragT=Math.min($e.dragT,.5)}function wx(){let T=ar();return T?Math.abs($e.zoom-($e.wide?1.6:1))>.15||Math.abs($e.el-.42)>.12||T.speed<.3&&Math.abs(nn(zl(T)-$e.az))>.9:!1}function Rp(){if(Ge==="follow"){let T=ar();T&&($e.az=zl(T)),$e.el=.42,$e.zoom=$e.wide?1.6:1,$e.zoomGoal=0,$e.dragT=99;return}g.recenter()}function Cp(){or=or==="follow"?"overview":"follow";try{localStorage.setItem(Sp,or)}catch{}et(!1)}function Ip(T,Z){let te=ar(),Me=_&&_.layout;if(!te||!Me)return;let Ee=g.portrait;$e.init||($e.init=!0,$e.side=1,$e.az=zl(te),$e.el=.42,$e.zoom=1,$e.dragT=99,$e.zoomGoal=0,$e.wide=!1),$e.dragT+=T;let ye=Ts(),Ne=ye==="vote"||ye==="shoot";Ne!==$e.wide&&($e.wide=Ne,Ne&&$e.zoom<1.6&&($e.zoomGoal=1.6)),$e.zoomGoal&&($e.zoom+=($e.zoomGoal-$e.zoom)*mn(2.5,T),Math.abs($e.zoom-$e.zoomGoal)<.02&&($e.zoomGoal=0)),te.speed>.4&&$e.dragT>1.1&&($e.az+=nn(zl(te)-$e.az)*mn(te.drive?1.5:.9,T)),$e.az=nn($e.az);let ht=$e.zoom,je=Gs(ct((ht-1.7)/2.5,0,1)),ut=Ee?8.8:7.2;$i.set(te.pos.x,(te.isGhost?1.5:1.25)+(te.isGhost&&te.model?te.model.position.y:0),te.pos.z).lerp(wp,je);let xt=$e.el+((Ee?1.15:.98)-$e.el)*je,We=ut*ht+($e.ovDist-ut*ht)*je,st=(Ee?54:46)+(40-(Ee?54:46))*je;{let Fe=Math.cos(xt)*We,lt=$i.x+Math.sin($e.az)*Fe,Et=$i.z+Math.cos($e.az)*Fe,vt=Math.hypot(lt,Et)-(Me.R-6.2);if(vt>0&&je<.4&&$e.dragT>.8){let Rn=Math.atan2(-$i.x,-$i.z);$e.az=nn($e.az+nn(Rn-$e.az)*mn(ct(vt*.5,0,2.5),T))}}let dt=Me.R-6.2;if(je<.6)for(let Fe=0;Fe<14;Fe++){let lt=Math.cos(xt)*We,Et=$i.x+Math.sin($e.az)*lt,vt=$i.z+Math.cos($e.az)*lt;if(Math.hypot(Et,vt)<=dt)break;if(ht>1.25&&xt<1.05)xt+=.08;else if(We>4.4)We*=.9;else if(xt<1.05)xt+=.08;else break}if(je<.85){let Fe=Tx($i,$e.az,xt,We),lt=Fe.dist/We,Et=Fe.el-xt;Z&&($e.kd=lt,$e.ke=Et),$e.kd+=(lt-$e.kd)*mn(lt<$e.kd?9:1.8,T),$e.ke+=(Et-$e.ke)*mn(Et>$e.ke?7:1.5,T),We*=$e.kd,xt+=$e.ke}else $e.kd=1,$e.ke=0;g.setShot({kind:"follow",target:$i,az:$e.az,el:xt,dist:We,fov:st,speed:5.5,snap:!!Z}),g.shot.dynamic=!1}function Ex(T){let te=Ge==="follow"&&!g.override&&g.ovW<.05?ar():null,Me=m.position;for(let Ee of L.values()){let ye=Ee.camWant||!1;if(te&&Ee!==te&&Ee.visible&&!Ee.claimed){let je=Ee.pos.x-Me.x,ut=Ee.pos.z-Me.z,st=Math.hypot(je,ut)<(ye?4.3:3.4);if(!st){let dt=te.pos.x-Me.x,Fe=te.pos.z-Me.z,lt=dt*dt+Fe*Fe||1,Et=(je*dt+ut*Fe)/lt,vt=ye?1.15:.85;if(Et>0&&Et<.82){let Rn=je-dt*Et,Li=ut-Fe*Et;Rn*Rn+Li*Li<vt*vt&&(st=!0)}}ye=st}else ye=!1;Ee.camWant=ye;let Ne=Ee.camFade==null?1:Ee.camFade,ht=ye?Math.max(0,Ne-T*4):Math.min(1,Ne+T*4);if(ht!==Ne){Ee.setFade(ht);let je=ht<.5;je!==!!Ee.camHidden&&(Ee.camHidden=je,Le=!0)}}}let io={el:0,dist:0};function Tx(T,Z,te,Me){let Ee=_&&_.blockers,ye=te,Ne=Me;if(!Ee||!Ee.length)return io.el=ye,io.dist=Ne,io;let ht=Math.sin(Z),je=Math.cos(Z);for(let ut=0;ut<6;ut++){let xt=Math.cos(ye)*Ne,We=T.x+ht*xt,st=T.z+je*xt,dt=T.y+Math.sin(ye)*Ne,Fe=0,lt=1/0;for(let Et=0;Et<Ee.length;Et++){let vt=Ee[Et];if(vt.x+vt.r+.6<Math.min(T.x,We)||vt.x-vt.r-.6>Math.max(T.x,We)||vt.z+vt.r+.6<Math.min(T.z,st)||vt.z-vt.r-.6>Math.max(T.z,st))continue;let Rn=vt.x-T.x,Li=vt.z-T.z,zn=(Rn*ht+Li*je)/(xt||.001);zn=zn<0?0:zn>1?1:zn;let ro=T.x+ht*xt*zn-vt.x,ur=T.z+je*xt*zn-vt.z,Fl=Math.sqrt(ro*ro+ur*ur),Ol=T.y+(dt-T.y)*zn,fr=We-vt.x,Op=st-vt.z,Hx=vt.h>2.4?1.1:.35,Up=vt.h>2.4?.8:.45;if(fr*fr+Op*Op<(vt.r+Up)*(vt.r+Up)&&dt<vt.h+Hx){vt.h<2.4?Fe=Math.max(Fe,vt.h+.45-dt):lt=Math.min(lt,Math.max(0,zn*xt-vt.r-.5));continue}vt.h>=1.9&&vt.r>=.35&&zn>.12&&zn<1&&Fl<vt.r+.12&&Ol<vt.h&&(lt=Math.min(lt,Math.max(0,zn*xt-vt.r-.45)))}if(!Fe&&lt===1/0)break;if(lt!==1/0){let Et=lt/Math.max(.2,Math.cos(ye));Et>=3.6?Ne=Math.min(Ne,Et):ye=Math.min(1.2,ye+.12)}Fe&&(ye=Math.min(1.2,ye+Math.max(.06,Fe/Math.max(2,Ne))))}return io.el=ye,io.dist=Ne,io}let lr={x:0,y:0},cr=new K,so=!1,kl=0,Pp=-1,Lp=-1;Object.defineProperty(ce,"driving",{get:()=>so});function Dp(T,Z){let te=_&&_.layout;if(!te||!t.onMove)return;let Me=Zd(te,T.pos.x,T.pos.z);if(!(!Z&&Math.abs(Me.x-Pp)<.003&&Math.abs(Me.y-Lp)<.003)){Pp=Me.x,Lp=Me.y;try{t.onMove(Me.x,Me.y)}catch{}}}function Ax(T){let Z=ca();Z!==Ep&&(Ep=Z,q.place(Su(),Ze,ke));let te=ar(),Me=!!(ge&&te&&Nl()&&!ae&&!se.current&&!te.claimed);q.setEnabled(Me),q.vector(lr);let Ee=Me?Math.hypot(lr.x,lr.y):0,ye=performance.now();if(Ee>.08){m.getWorldDirection(cr),cr.y=0,cr.lengthSq()<1e-4&&cr.set(-Math.sin(g.cur.az),0,-Math.cos(g.cur.az)),cr.normalize();let Ne=cr.x,ht=cr.z,je=-ht,ut=Ne,xt=je*lr.x+Ne*lr.y,We=ut*lr.x+ht*lr.y,st=Math.hypot(xt,We)||1;xt/=st,We/=st;let dt=Ee>.92?4.8:.8+Ee*3;te.drive||(te.drive={x:0,z:0,speed:0}),te.drive.x=xt,te.drive.z=We,te.drive.speed=dt,so||(so=!0,kl=0);let Fe=ce.localMove||(ce.localMove={x:0,z:0,until:0});Fe.x=te.pos.x,Fe.z=te.pos.z,Fe.until=ye+2500,kl-=T,kl<=0&&(kl=.15,Dp(te,!1))}else if(so){so=!1;for(let Ne of[L.get(I&&I.me?I.me.id:""),A.get(I&&I.me?I.me.id:"")])Ne&&(Ne.drive=null);te&&Nl()&&(ce.localMove={x:te.pos.x,z:te.pos.z,until:ye+2500},Dp(te,!0),Zi(!1))}}function Rx(){let T=ar(),Z=_&&_.layout;if(!T||!Z)return;let te=Math.hypot(T.pos.x,T.pos.z)||.001,Me=Math.max(Z.Rp*.2,2.3),Ee=Z.Rp*.96;if(te<Me||te>Ee){let ye=ct(te,Me,Ee)/te;T.pos.x*=ye,T.pos.z*=ye}}let Np=new K;function zp(T,Z){let te=0,Me=0,Ee=0;for(let ye=8;ye<Z;ye++)te+=T[ye].x,Me+=T[ye].z,Ee++;return Ee?Np.set(te/Ee*.6,.9,Me/Ee*.6+.2):Np.set(0,.9,.2)}let Cx=[],kp=new Mi,Ix=new at,Fp=new rn(new K,1.3);function Px(){return!!(_&&_.busy)}let Eu=0;function Lx(){if(Eu-=1/60,Eu>0)return;Eu=.3;let T=_&&_.layout;if(!T||!g.shot.points)return;let te=0,Me=Ge==="gather"?5.6:3.2,Ee=[];for(let ye=0;ye<8;ye++){let Ne=ye/8*it;Ee.push(k[te++].set(Math.sin(Ne)*Me,0,Math.cos(Ne)*Me))}for(let ye of L.values()){if(!ye.visible||te>60)continue;let Ne=ye.path&&ye.path.length?ye.path[ye.path.length-1]:ye.pos;Math.hypot(Ne.x,Ne.z)>T.Rp+1.5||(Ee.push(k[te++].set(Ne.x,0,Ne.z)),Ee.push(k[te++].set(Ne.x,2.4,Ne.z)))}for(let ye of A.values())te<62&&(Ee.push(k[te++].set(ye.pos.x,2.6,ye.pos.z)),Ee.push(k[te++].set(ye.pos.x,0,ye.pos.z)));g.shot.points=Ee,g.shot.target.copy(zp(Ee,Ee.length))}function Dx(T,Z){if(T.startsWith("room:")){let Ee=ie&&ie.actors.get(T.slice(5));return!Ee||!Ee.ch.visible?!1:(Z.set(Ee.ch.pos.x,Ee.ch.pos.y+Ee.ch.headY+.15,Ee.ch.pos.z),!0)}if(T.startsWith("cine:")){let Ee=X.get(T);return!Ee||!Ee.ch.visible?!1:(Z.set(Ee.ch.pos.x,Ee.ch.root.position.y+Ee.ch.headY+.15,Ee.ch.pos.z),!0)}let te=L.get(T);if(te&&te.visible)return Z.set(te.pos.x,te.pos.y+te.headY+.15,te.pos.z),!0;let Me=A.get(T);return Me?(Z.set(Me.pos.x,Me.headY+.5+Me.model.position.y,Me.pos.z),!0):!1}function Nx(T){let Z=T.startsWith("room:")||T.startsWith("cine:");if(ae)return Z;if(Z)return!0;let te=L.get(T);return A.has(T)?!0:!(!te||!te.visible||te.camHidden||I&&I.room.phase==="night"&&T!==I.me.id&&!xe.has(T))}function zx(T,Z){if(ae)return!1;let te=_&&_.house(T);if(!te||te.scale<.6)return!1;let Me=_.layout,Ee=0;Me&&Me.n>9&&Ze<700&&(Ee=(te.seat%2?1:-1)*2.2);let ye=Math.hypot(te.cx,te.cz)||1;return Z.set(te.cx+te.cx/ye*Ee,te.info.height*.9,te.cz+te.cz/ye*Ee),!0}function kx(T){if(!(T!=="menu"&&T!=="game")&&T!==Q&&(Q=T,we="",c.dataset.view=T,!!ge)){if(T==="menu"){De.stop(),Se.reset(),ce.showDead.clear(),eo(),Es(null),oe.clear();for(let Z of L.values())Z.dispose();L.clear();for(let Z of A.values())Z.dispose();A.clear(),Ie.reset(),se.reset(),Ss(null);for(let Z of[..._.houses.keys()])_.setDead(Z,!1);for(let Z of _.houses.values())Z.litTarget=1,Z.dead=!1}else Ss(I),I&&Zi(!0);et(!0),g.snapNext=!1}}function Fx(){se.reset(),De.stop(),Se.reset(),ce.showDead.clear(),eo(),Es(null),oe.clear();for(let T of L.values())T.dispose();L.clear();for(let T of A.values())T.dispose();if(A.clear(),Ie.reset(),I=null,we="",vu=0,ge){if(_)for(let T of[..._.houses.keys()])_.setDead(T,!1);Ss(null)}g.recenter(),et(!0)}function Ox(T){if(T==="auto"){S="auto",M.failed.clear(),M.reset();return}$s[T]&&(S=T,M.level=T,bs(T))}function Ux(){if(!me){me=!0,se.dispose(),De.dispose(),Se.dispose(),cancelAnimationFrame(Pl),document.removeEventListener("visibilitychange",xp),window.removeEventListener("click",Mn,!0),window.removeEventListener("resize",tr),window.removeEventListener("orientationchange",tr),er&&er.disconnect();for(let T of L.values())T.dispose();for(let T of A.values())T.dispose();L.clear(),A.clear(),_&&_.dispose(),C.dispose(),N.dispose(),G.dispose(),b.dispose(),H.dispose(),Ve.dispose(),ie&&ie.dispose();for(let T of X.values())T.ch.dispose();X.clear(),J.length=0;for(let T of[z,U,B,Y])T.dispose();oe.dispose(),q.dispose(),tg(),w.shadow.map&&w.shadow.map.dispose(),l.dispose(),l.forceContextLoss(),Vd(),Vg(),c.remove(),clearTimeout(F)}}Ll();let hr={update:Al,announce(T){return me?Promise.resolve():!ge||Q!=="game"?(se.skip(),Promise.resolve()):(T&&T.kind==="start"&&T.scenario&&Es(T.scenario.id),T&&T.kind==="death"&&(Be={ids:(T.targets||[]).map(Z=>Z.id),at:Date.now()}),T&&T.kind&&!ix[T.kind]&&De.running&&De.stop(),se.announce(T))},skip(){se.skip()},sawOwnDeath(){return De.sawDeath()},bubble(T,Z,te){if(!Z)return;oe.bubble(T,String(Z),te);let Me=L.get(T);if(Me&&Me.visible&&!Me.busy&&!Me.once&&Me.base==="idle"&&Me.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),Me&&Me.visible)for(let Ee of L.values())Ee!==Me&&Ee.visible&&Math.hypot(Ee.pos.x-Me.pos.x,Ee.pos.z-Me.pos.z)<10&&Ee.gaze(Me.pos,3.5,ce.time)},setView:kx,setQuality:Ox,getQuality(){return S==="auto"?"auto":R.name},getTier(){return R.name},resize:Qr,reset:Fx,dispose:Ux,setInsets(T){T=T||{},gt={top:T.top||0,bottom:T.bottom||0,left:T.left||0,right:T.right||0,joystick:T.joystick===null?null:T.joystick&&typeof T.joystick=="object"?{left:+T.joystick.left||0,bottom:+T.joystick.bottom||0,size:+T.joystick.size||0}:void 0},g.setInsets(gt),oe.setInsets(gt),q.place(Su(),Ze,ke),et(!1)},recenter(){Rp()},setCameraMode(T){(T==="follow"||T==="overview")&&T!==or&&Cp()},getCameraMode(){return or},setMood(T={}){T.fog!=null&&($.fog=ct(+T.fog,.3,2)),T.tint!=null&&$.tint.set(T.tint),T.tintAmt!=null&&($.tintAmt=ct(+T.tintAmt,0,1)),T.moon!=null&&$.moon.set(T.moon),T.stars!=null&&($.stars=ct(+T.stars,0,1)),T.weather!=null&&($.weather=T.weather)},director:se,stats(){return{...Wn,tier:R.name,mode:S,px:tt,scale:+(n.renderScale||1).toFixed(2),hour:+Te.toFixed(2),ready:ge,p50:la(Dl,.5),p95:la(Dl,.95),p99:la(Dl,.99),cpu50:la(yu,.5),cpu95:la(yu,.95)}},resetStats(){rr=0,aa=0},setScenario(T){Es(T)},setStyle(T){let Z=T==="toon";if(Z!==ce.toon){ce.toon=Z,bs(R.name,!1);for(let te of[...L.values(),...A.values()])Z?cl(te.model,.012):ad(te.model);for(let te of X.values())Z?cl(te.ch.model,.012):ad(te.ch.model);_&&_.setOutlines(Z),od(y,Z),he=0}},getStyle(){return ce.toon?"toon":"default"},_debug:{world:ce,scene:y,renderer:l,camera:m,rig:g,fol:$e,get village(){return _},get room(){return ie},get roomMode(){return ae},setHour(T){Te=T}}},Bx=hr.update;hr.update=(T,Z)=>{T&&T.serverNow&&(Il=T.serverNow-Date.now()),Bx(T,Z)};for(let T of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode","setStyle"]){let Z=hr[T];hr[T]=function(...te){try{return Z.apply(hr,te)}catch(Me){return be("api."+T,Me),T==="announce"?Promise.resolve():void 0}}}return hr}var js=null,mu=new Set,gu=0,gp=0;function Tw(){if(js)return js;let s=new Zo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Bt,s.toneMapping=Br,s.setClearColor(0,0),js={renderer:s,users:0},js}function mx(s){if(gu=0,!mu.size||(gu=requestAnimationFrame(mx),document.hidden)||s-gp<1e3/24)return;let e=Math.min(.1,(s-gp)/1e3||.04);gp=s;for(let t of mu)t.draw(e)}function gx(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=Tw();r.users++;let o=new wr,a=new an(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let c=new Nr("#dfe8ff","#5a4a40",1.3);o.add(c);let l=new ci("#fff2dc",2.6);l.position.set(1.8,3.5,5);let h=new ci("#ffd7a8",.8);h.position.set(-3,1.5,3.5),o.add(h),o.add(l);let u=new ci("#8fb4ff",1.6);u.position.set(-3,2.5,-3),o.add(u);let f=new St(new Ir(.85,40),new jt({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,p={...e},y=!1,m=t.yaw!=null?t.yaw:.18,g=0,S=t.yaw!=null?t.yaw:0,M=!1,v=0,R=0,E=t.focus==="head"?1:0,x=E,w=t.turntable!==!1,O={sfxStep:null,sfx(){}};function C(){y||!Wh("chars")||(d?d.setLook(p):(d=new Ai(O,"preview",p),o.add(d.root),d.idleTimer=2))}Wh("chars")?C():qr(["chars"]).then(C).catch(()=>{});let N=Y=>{M=!0,v=Y.clientX,R=0,n.setPointerCapture&&n.setPointerCapture(Y.pointerId)},z=Y=>{if(!M)return;let H=Y.clientX-v;v=Y.clientX,m+=H*.012,R=H*.012*24},U=()=>{M=!1};n.addEventListener("pointerdown",N),n.addEventListener("pointermove",z),n.addEventListener("pointerup",U),n.addEventListener("pointercancel",U);let B={draw(Y){if(y||!d)return;let H=s.clientWidth,G=s.clientHeight;if(H<4||G<4||!n.isConnected)return;let b=Math.min(window.devicePixelRatio||1,2),_=Math.round(H*b),L=Math.round(G*b);(n.width!==_||n.height!==L)&&(n.width=_,n.height=L);let A=r.renderer,D=A.getSize(new pt);(D.x<_||D.y<L)&&A.setSize(Math.max(D.x,_),Math.max(D.y,L),!1);let X=A.getSize(new pt);A.setViewport(0,X.y-L,_,L),A.setScissor(0,X.y-L,_,L),A.setScissorTest(!0),a.aspect=H/G,E+=(x-E)*Math.min(1,Y*6);let W=(d.headY||1.93)+.06,J=.72,de=a.aspect<.8?1/Math.max(.55,a.aspect/.8):1,ie=1.22+((J+W)/2-1.22)*E,ae=7.8+((W-J)*.5/Math.tan(Yo.degToRad(15))/.8-7.8)*E;if(a.position.set(0,ie+.5-.15*E,ae*de),a.lookAt(0,ie,0),a.updateProjectionMatrix(),!M){g+=Y,m+=R*Y,R*=Math.exp(-3*Y);let Ce=m-S;Ce=Math.atan2(Math.sin(Ce),Math.cos(Ce));let Be=w?Math.sin(g*.7)*.42:0;Math.abs(R)<.4&&(m=S+Ce+(Be-Ce)*Math.min(1,Y*1.6))}d.yaw=m,d.update(Y,performance.now()/1e3),A.clear(),A.render(o,a),i.clearRect(0,0,_,L),i.drawImage(A.domElement,0,X.y-L,_,L,0,0,_,L)}};return mu.add(B),gu||(gu=requestAnimationFrame(mx)),{setLook(Y){p={...p,...Y},C()},setFocus(Y){x=Y==="head"?1:0},dispose(){y||(y=!0,mu.delete(B),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&js&&(js.renderer.dispose(),js.renderer.forceContextLoss(),js=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&Vh(new URL("../assets/models/",s).href)}catch{}var Aw="2.1.0",Rw=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function Cw(s){Vh(s)}return qx(Iw);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
