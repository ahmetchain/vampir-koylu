var VKWorld=(()=>{var iu=Object.defineProperty;var ex=Object.getOwnPropertyDescriptor;var tx=Object.getOwnPropertyNames;var nx=Object.prototype.hasOwnProperty;var hp=(s,e)=>{for(var t in e)iu(s,t,{get:e[t],enumerable:!0})},ix=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of tx(e))!nx.call(s,i)&&i!==t&&iu(s,i,{get:()=>e[i],enumerable:!(n=ex(e,i))||n.enumerable});return s};var sx=s=>ix(iu({},"__esModule",{value:!0}),s);var Mw={};hp(Mw,{COLORS:()=>O0,HATS:()=>F0,QUALITIES:()=>yw,SKINS:()=>k0,create:()=>Tg,preview:()=>Rg,setAssetBase:()=>_w,supported:()=>kd,version:()=>vw});var im=0,Vu=1,sm=2;var _r=1,rm=2,_o=3,Li=0,gn=1,rn=2,Mr=0,_i=1,qn=2,Wu=3,Xu=4,om=5;var br=100,am=101,lm=102,cm=103,hm=104,um=200,fm=201,dm=202,pm=203,qu=204,Yu=205,mm=206,gm=207,xm=208,vm=209,ym=210,_m=211,Mm=212,bm=213,Sm=214,Jl=0,$l=1,jl=2,so=3,Ql=4,ec=5,tc=6,nc=7,bc=0,wm=1,Em=2,Di=0,Ku=1,Zu=2,Ju=3,$u=4,ju=5,Qu=6,Sr=7,Lu="attached",Tm="detached",ef=300,wr=301,Mo=302,Sc=303,wc=304,bs=1e3,Vn=1001,ro=1002,nn=1003,Ec=1004;var Er=1005;var dn=1006,bo=1007;var ii=1008;var Yn=1009,tf=1010,nf=1011,So=1012,Tc=1013,si=1014,Un=1015,Mi=1016,Ac=1017,Rc=1018,Tr=1020,sf=35902,rf=35899,of=1021,af=1022,Wn=1023,Qi=1026,ls=1027,Cc=1028,Aa=1029,Rs=1030,Ic=1031;var Pc=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Lc=35840,Dc=35841,Nc=35842,zc=35843,Uc=36196,Oc=37492,Fc=37496,kc=37488,Bc=37489,La=37490,Hc=37491,Gc=37808,Vc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,Kc=37814,Zc=37815,Jc=37816,$c=37817,jc=37818,Qc=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,oh=36284,Da=36285,ah=36286,Na=2200,Am=2201,Rm=2202,sr=2300,rr=2301,Kl=2302,Du=2303,tr=2400,nr=2401,ia=2402,lh=2500,Cm=2501,lf=0,za=1,wo=2,Im=3200;var Ua=0,Pm=1,cs="",Bt="srgb",On="srgb-linear",sa="linear",Ht="srgb";var Zl=7680;var Lm=519,Dm=512,Nm=513,zm=514,cf=515,Um=516,Om=517,hf=518,uf=519,ff=35044,Oa=35048;var df="300 es",ei=2e3,oo=2001;function rx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ox(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fm(){let s=ao("canvas");return s.style.display="block",s}var up={},lo=null;function ra(...s){let e="THREE."+s.shift();lo?lo("log",e,...s):console.log(e,...s)}function km(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=km(s);let e="THREE."+s.shift();if(lo)lo("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=km(s);let e="THREE."+s.shift();if(lo)lo("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ir(...s){let e=s.join(" ");e in up||(up[e]=!0,ft(...s))}function Bm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hm={[Jl]:Jl,[jl]:tc,[Ql]:Ql,[so]:ec,[$l]:$l,[tc]:jl,[nc]:nc,[ec]:so},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fp=1234567,ta=Math.PI/180,or=180/Math.PI;function Ni(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function pf(s,e){return(s%e+e)%e}function ax(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lx(s,e,t){return s!==e?(t-s)/(e-s):0}function na(s,e,t){return(1-t)*s+t*e}function cx(s,e,t,n){return na(s,e,1-Math.exp(-t*n))}function hx(s,e=1){return e-Math.abs(pf(s,e*2)-e)}function ux(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function px(s,e){return s+Math.random()*(e-s)}function mx(s){return s*(.5-Math.random())}function gx(s){s!==void 0&&(fp=s);let e=fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xx(s){return s*ta}function vx(s){return s*or}function yx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _x(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mx(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ch(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gf(s,e){if(e.constructor===Float32Array)return s;let t=ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function xf(s,e){if(e.constructor===Float32Array)return s;let t=ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var hh={DEG2RAD:ta,RAD2DEG:or,generateUUID:Ni,clamp:Lt,euclideanModulo:pf,mapLinear:ax,inverseLerp:lx,lerp:na,damp:cx,pingpong:hx,smoothstep:ux,smootherstep:fx,randInt:dx,randFloat:px,randFloatSpread:mx,seededRandom:gx,degToRad:xx,radToDeg:vx,isPowerOfTwo:yx,ceilPowerOfTwo:_x,floorPowerOfTwo:mf,setQuaternionFromProperEuler:Mx,normalize:xf,denormalize:gf},bf=class bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;var pt=bf,Zt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,a=Math.sin(a*M)/A,c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+y*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+y*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sf=class Sf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sf.prototype.isVector3=!0;var Y=Sf,su=new Y,dp=new Zt,wf=class wf{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],p=i[3],m=i[6],M=i[1],A=i[4],b=i[7],C=i[2],I=i[5],x=i[8];return r[0]=o*y+a*M+c*C,r[3]=o*p+a*A+c*I,r[6]=o*m+a*b+c*x,r[1]=l*y+h*M+u*C,r[4]=l*p+h*A+u*I,r[7]=l*m+h*b+u*x,r[2]=f*y+d*M+g*C,r[5]=f*p+d*A+g*I,r[8]=f*m+d*b+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wf.prototype.isMatrix3=!0;var St=wf,ru=new St,pp=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mp=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){let s={enabled:!0,workingColorSpace:On,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(i.r=io(i.r),i.g=io(i.g),i.b=io(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[On]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var Rt=bx();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var kr,ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=ao("canvas")),kr.width=e.width,kr.height=e.height;let i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sx=0,co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ou(i[o].image)):r.push(ou(i[o]))}else r=ou(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ou(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ic.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var wx=0,au=new Y,pn=class s extends pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Vn,i=Vn,r=dn,o=ii,a=Wn,c=Yn,l=s.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ni(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ef;pn.DEFAULT_ANISOTROPY=1;var Ef=class Ef{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,b=(d+1)/2,C=(m+1)/2,I=(h+f)/4,x=(u+y)/4,E=(g+p)/4;return A>b&&A>C?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=I/n,r=x/n):b>C?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=I/i,r=E/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=x/r,i=E/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-y)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ef.prototype.isVector4=!0;var Wt=Ef,sc=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new co(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mc=class Mc{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,p)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f+y*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f-y*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+y,t[1]=c*u,t[5]=y*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ex,e,Tx)}lookAt(e,t,n){let i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),gs.crossVectors(n,Kn),gs.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),gs.crossVectors(n,Kn)),gs.normalize(),vl.crossVectors(Kn,gs),i[0]=gs.x,i[4]=vl.x,i[8]=Kn.x,i[1]=gs.y,i[5]=vl.y,i[9]=Kn.y,i[2]=gs.z,i[6]=vl.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],M=n[3],A=n[7],b=n[11],C=n[15],I=i[0],x=i[4],E=i[8],U=i[12],S=i[1],F=i[5],D=i[9],k=i[13],O=i[2],X=i[6],W=i[10],B=i[14],_=i[3],v=i[7],R=i[11],T=i[15];return r[0]=o*I+a*S+c*O+l*_,r[4]=o*x+a*F+c*X+l*v,r[8]=o*E+a*D+c*W+l*R,r[12]=o*U+a*k+c*B+l*T,r[1]=h*I+u*S+f*O+d*_,r[5]=h*x+u*F+f*X+d*v,r[9]=h*E+u*D+f*W+d*R,r[13]=h*U+u*k+f*B+d*T,r[2]=g*I+y*S+p*O+m*_,r[6]=g*x+y*F+p*X+m*v,r[10]=g*E+y*D+p*W+m*R,r[14]=g*U+y*k+p*B+m*T,r[3]=M*I+A*S+b*O+C*_,r[7]=M*x+A*F+b*X+C*v,r[11]=M*E+A*D+b*W+C*R,r[15]=M*U+A*k+b*B+C*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],y=e[7],p=e[11],m=e[15],M=c*d-l*f,A=a*d-l*u,b=a*f-c*u,C=o*d-l*h,I=o*f-c*h,x=o*u-a*h;return t*(y*M-p*A+m*b)-n*(g*M-p*C+m*I)+i*(g*A-y*C+m*x)-r*(g*b-y*I+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],y=e[13],p=e[14],m=e[15],M=t*a-n*o,A=t*c-i*o,b=t*l-r*o,C=n*c-i*a,I=n*l-r*a,x=i*l-r*c,E=h*y-u*g,U=h*p-f*g,S=h*m-d*g,F=u*p-f*y,D=u*m-d*y,k=f*m-d*p,O=M*k-A*D+b*F+C*S-I*U+x*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return e[0]=(a*k-c*D+l*F)*X,e[1]=(i*D-n*k-r*F)*X,e[2]=(y*x-p*I+m*C)*X,e[3]=(f*I-u*x-d*C)*X,e[4]=(c*S-o*k-l*U)*X,e[5]=(t*k-i*S+r*U)*X,e[6]=(p*b-g*x-m*A)*X,e[7]=(h*x-f*b+d*A)*X,e[8]=(o*D-a*S+l*E)*X,e[9]=(n*S-t*D-r*E)*X,e[10]=(g*I-y*b+m*M)*X,e[11]=(u*b-h*I-d*M)*X,e[12]=(a*U-o*F-c*E)*X,e[13]=(t*F-n*U+i*E)*X,e[14]=(y*A-g*C-p*M)*X,e[15]=(h*C-u*A+f*M)*X,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,M=c*l,A=c*h,b=c*u,C=n.x,I=n.y,x=n.z;return i[0]=(1-(y+m))*C,i[1]=(d+b)*C,i[2]=(g-A)*C,i[3]=0,i[4]=(d-b)*I,i[5]=(1-(f+m))*I,i[6]=(p+M)*I,i[7]=0,i[8]=(g+A)*x,i[9]=(p-M)*x,i[10]=(1-(f+y))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),c=Br.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ui.copy(this);let l=1/o,h=1/a,u=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=ei,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ei)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===oo)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ei,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ei)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===oo)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Mc.prototype.isMatrix4=!0;var ut=Mc,Br=new Y,ui=new ut,Ex=new Y(0,0,0),Tx=new Y(1,1,1),gs=new Y,vl=new Y,Kn=new Y,gp=new ut,xp=new Zt,Ci=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ax=0,vp=new Y,Hr=new Zt,Wi=new ut,yl=new Y,Vo=new Y,Rx=new Y,Cx=new Zt,yp=new Y(1,0,0),_p=new Y(0,1,0),Mp=new Y(0,0,1),bp={type:"added"},Ix={type:"removed"},Gr={type:"childadded",child:null},lu={type:"childremoved",child:null},Yt=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new Y,t=new Ci,n=new Zt,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new St}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(Mp,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(Mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yl.copy(e):yl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Vo,yl,this.up):Wi.lookAt(yl,Vo,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(Wi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new Y(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},_l={h:0,s:0,l:0};function cu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=pf(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cu(o,r,e+1/3),this.g=cu(o,r,e),this.b=cu(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Rt.workingToColorSpace(An.copy(this),e),Math.round(Lt(An.r*255,0,255))*65536+Math.round(Lt(An.g*255,0,255))*256+Math.round(Lt(An.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(An.copy(this),t);let n=An.r,i=An.g,r=An.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Bt){Rt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,i=An.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(_l);let n=na(xs.h,_l.h,t),i=na(xs.s,_l.s,t),r=na(xs.l,_l.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ve;Ve.NAMES=Gm;var aa=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ar=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new Y,Xi=new Y,hu=new Y,qi=new Y,Vr=new Y,Wr=new Y,Sp=new Y,uu=new Y,fu=new Y,du=new Y,pu=new Wt,mu=new Wt,gu=new Wt,Ji=class s{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fi.subVectors(i,t),Xi.subVectors(n,t),hu.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Xi),c=fi.dot(hu),l=Xi.dot(Xi),h=Xi.dot(hu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,t),mu.fromBufferAttribute(e,n),gu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pu,r.x),o.addScaledVector(mu,r.y),o.addScaledVector(gu,r.z),o}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Xi.subVectors(e,t),fi.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Vr.subVectors(i,n),Wr.subVectors(r,n),uu.subVectors(e,n);let c=Vr.dot(uu),l=Wr.dot(uu);if(c<=0&&l<=0)return t.copy(n);fu.subVectors(e,i);let h=Vr.dot(fu),u=Wr.dot(fu);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Vr,o);du.subVectors(e,r);let d=Vr.dot(du),g=Wr.dot(du);if(g>=0&&d<=g)return t.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Wr,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Sp.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Sp,a);let m=1/(p+y+f);return o=y*m,a=f*m,t.copy(n).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ml.copy(n.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),bl.subVectors(this.max,Wo),Xr.subVectors(e.a,Wo),qr.subVectors(e.b,Wo),Yr.subVectors(e.c,Wo),vs.subVectors(qr,Xr),ys.subVectors(Yr,qr),Js.subVectors(Xr,Yr);let t=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-Js.z,Js.y,vs.z,0,-vs.x,ys.z,0,-ys.x,Js.z,0,-Js.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-Js.y,Js.x,0];return!xu(t,Xr,qr,Yr,bl)||(t=[1,0,0,0,1,0,0,0,1],!xu(t,Xr,qr,Yr,bl))?!1:(Sl.crossVectors(vs,ys),t=[Sl.x,Sl.y,Sl.z],xu(t,Xr,qr,Yr,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],di=new Y,Ml=new fn,Xr=new Y,qr=new Y,Yr=new Y,vs=new Y,ys=new Y,Js=new Y,Wo=new Y,bl=new Y,Sl=new Y,$s=new Y;function xu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$s.fromArray(s,r);let a=i.x*Math.abs($s.x)+i.y*Math.abs($s.y)+i.z*Math.abs($s.z),c=e.dot($s),l=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cn=new Y,wl=new pt,Lx=0,Et=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ff,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?ch(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):gf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xf(e,this.array)}};var la=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ca=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var zt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dx=new fn,Xo=new Y,vu=new Y,Qt=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);let t=Xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(vu)),this.expandByPoint(Xo.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nx=0,Qn=new ut,yu=new Yt,Kr=new Y,Zn=new fn,qo=new fn,_n=new Y,Dt=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?ca:la)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Zn.min,qo.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,qo.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(qo.min),Zn.expandByPoint(qo.max))}Zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_n.fromBufferAttribute(a,l),c&&(Kr.fromBufferAttribute(e,l),_n.add(Kr)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Et(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new Y,c[U]=new Y;let h=new Y,u=new Y,f=new Y,d=new pt,g=new pt,y=new pt,p=new Y,m=new Y;function M(U,S,F){l[U]=l[S]=l[F]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,F),d.fromBufferAttribute(r,U),g.fromBufferAttribute(r,S),y.fromBufferAttribute(r,F),u.sub(h),f.sub(h),g.sub(d),y.sub(d);let D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(D),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(D),a[U].add(p),a[S].add(p),a[F].add(p),c[U].add(m),c[S].add(m),c[F].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,S=A.length;U<S;++U){let F=A[U],D=F.start,k=F.count;for(let O=D,X=D+k;O<X;O+=3)M(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let b=new Y,C=new Y,I=new Y,x=new Y;function E(U){I.fromBufferAttribute(i,U),x.copy(I);let S=a[U];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),C.crossVectors(x,S);let D=C.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,S=n.count;U<S;++U)l[U]&&E(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new Y,r=new Y,o=new Y,a=new Y,c=new Y,l=new Y,h=new Y,u=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ff,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wp(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ni()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var zn=new Y,Ss=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?ch(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):gf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xf(e,this.data.array)}},_u=new Y,zx=new Y,Ux=new St,Jn=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_u.subVectors(n,t).cross(zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ux.getNormalMatrix(e),i=this.coplanarPoint(_u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ox=0,Cn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=_i,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Yu,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ws=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Yo=new Y,Jr=new Y,$r=new Y,jr=new pt,Ko=new pt,Vm=new ut,El=new Y,Zo=new Y,Tl=new Y,Ep=new pt,Mu=new pt,Tp=new pt,cr=class extends Yt{constructor(e=new ws){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lr(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new Ss(n,3,0,!1)),Zr.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Vm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-$r.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Al(El.set(-.5,-.5,0),$r,o,Jr,i,r),Al(Zo.set(.5,-.5,0),$r,o,Jr,i,r),Al(Tl.set(.5,.5,0),$r,o,Jr,i,r),Ep.set(0,0),Mu.set(1,0),Tp.set(1,1);let a=e.ray.intersectTriangle(El,Zo,Tl,!1,Yo);if(a===null&&(Al(Zo.set(-.5,.5,0),$r,o,Jr,i,r),Mu.set(0,1),a=e.ray.intersectTriangle(El,Tl,Zo,!1,Yo),a===null))return;let c=e.ray.origin.distanceTo(Yo);c<e.near||c>e.far||t.push({distance:c,point:Yo.clone(),uv:Ji.getInterpolation(Yo,El,Zo,Tl,Ep,Mu,Tp,new pt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Al(s,e,t,n,i,r){jr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ko.x=r*jr.x-i*jr.y,Ko.y=i*jr.x+r*jr.y):Ko.copy(jr),s.copy(e),s.x+=Ko.x,s.y+=Ko.y,s.applyMatrix4(Vm)}var Ki=new Y,bu=new Y,Rl=new Y,Cl=new Y,Es=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bu.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Cl.copy(this.origin).sub(bu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=Cl.dot(this.direction),c=-Cl.dot(Rl),l=Cl.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(bu).addScaledVector(Rl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,y=t.y-o.y,p=t.z-o.z,m=n.x-o.x,M=n.y-o.y,A=n.z-o.z,b=Math.abs(c),C=Math.abs(l),I=Math.abs(h),x,E,U,S,F,D,k,O,X,W,B,_;if(b>=C&&b>=I?(U=c,D=u,X=g,_=m,c>=0?(x=l,E=h,S=f,F=d,k=y,O=p,W=M,B=A):(x=h,E=l,S=d,F=f,k=p,O=y,W=A,B=M)):C>=I?(U=l,D=f,X=y,_=M,l>=0?(x=h,E=c,S=d,F=u,k=p,O=g,W=A,B=m):(x=c,E=h,S=u,F=d,k=g,O=p,W=m,B=A)):(U=h,D=d,X=p,_=A,h>=0?(x=c,E=l,S=u,F=f,k=g,O=y,W=m,B=M):(x=l,E=c,S=f,F=u,k=y,O=g,W=M,B=m)),U===0)return null;let v=x/U,R=E/U,T=1/U,z=S-v*D,q=F-R*D,V=k-v*X,Q=O-R*X,ye=W-v*_,oe=B-R*_,ne=ye*Q-oe*V,Se=z*oe-q*ye,Fe=V*q-Q*z;if(i){if(ne<0||Se<0||Fe<0)return null}else if((ne<0||Se<0||Fe<0)&&(ne>0||Se>0||Fe>0))return null;let ue=ne+Se+Fe;if(ue===0)return null;let Xe=T*(ne*D+Se*X+Fe*_);return(ue>0?Xe<0:Xe>0)?null:this.at(Xe/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ap=new ut,js=new Es,Il=new Qt,Rp=new Y,Pl=new Y,Ll=new Y,Dl=new Y,Su=new Y,Nl=new Y,Cp=new Y,zl=new Y,wt=class extends Yt{constructor(e=new Dt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Nl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Su.fromBufferAttribute(u,e),o?Nl.addScaledVector(Su,h):Nl.addScaledVector(Su.sub(t),h))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere),Il.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(Il.containsPoint(js.origin)===!1&&(js.intersectSphere(Il,Rp)===null||js.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(Ap.copy(r).invert(),js.copy(e.ray).applyMatrix4(Ap),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),A=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=M,C=A;b<C;b+=3){let I=a.getX(b),x=a.getX(b+1),E=a.getX(b+2);i=Ul(this,m,e,n,l,h,u,I,x,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=a.getX(p),A=a.getX(p+1),b=a.getX(p+2);i=Ul(this,o,e,n,l,h,u,M,A,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),A=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=M,C=A;b<C;b+=3){let I=b,x=b+1,E=b+2;i=Ul(this,m,e,n,l,h,u,I,x,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=p,A=p+1,b=p+2;i=Ul(this,o,e,n,l,h,u,M,A,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Fx(s,e,t,n,i,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Li,a),c===null)return null;zl.copy(a),zl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(zl);return l<t.near||l>t.far?null:{distance:l,point:zl.clone(),object:s}}function Ul(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Pl),s.getVertexPosition(c,Ll),s.getVertexPosition(l,Dl);let h=Fx(s,e,t,n,Pl,Ll,Dl,Cp);if(h){let u=new Y;Ji.getBarycoord(Cp,Pl,Ll,Dl,u),i&&(h.uv=Ji.getInterpolatedAttribute(i,a,c,l,u,new pt)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,c,l,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new Y,materialIndex:0};Ji.getNormal(Pl,Ll,Dl,f.normal),h.face=f,h.barycoord=u}return h}var Jo=new Wt,Ip=new Wt,Pp=new Wt,kx=new Wt,Lp=new ut,Ol=new Y,wu=new Qt,Dp=new ut,Eu=new Es,hr=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lu,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ol),this.boundingBox.expandByPoint(Ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ol),this.boundingSphere.expandByPoint(Ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wu.copy(this.boundingSphere),wu.applyMatrix4(i),e.ray.intersectsSphere(wu)!==!1&&(Dp.copy(i).invert(),Eu.copy(e.ray).applyMatrix4(Dp),!(this.boundingBox!==null&&Eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ip.fromBufferAttribute(i.attributes.skinIndex,e),Pp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Jo.copy(t),t.set(0,0,0,0)):(Jo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Jo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Pp.getComponent(r);if(o!==0){let a=Ip.getComponent(r);Lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kx.copy(Jo).applyMatrix4(Lp),o)}}return t.isVector4&&(t.w=Jo.w),t.applyMatrix4(this.bindMatrixInverse)}},fo=class extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ji=class extends pn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Np=new ut,Bx=new ut,ha=class s{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Bx;Np.multiplyMatrices(a,t[r]),Np.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ji(t,e,e,Wn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ft("Skeleton: No bone found with UUID:",r),o=new fo),this.bones.push(o),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Fn=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new ut,zp=new ut,Fl=[],Up=new fn,Hx=new ut,$o=new wt,jo=new Qt,ur=class extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),Up.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qr),jo.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),e.ray.intersectsSphere(jo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qr),zp.multiplyMatrices(n,Qr),$o.matrixWorld=zp,$o.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){let c=Fl[o];c.instanceId=r,c.object=this,t.push(c)}Fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(i*this.count),i,this.count,Cc,Un));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qs=new Qt,Gx=new pt(.5,.5),kl=new Y,mi=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],A=r[13],b=r[14],C=r[15];if(i[0].setComponents(l-o,d-h,m-g,C-M).normalize(),i[1].setComponents(l+o,d+h,m+g,C+M).normalize(),i[2].setComponents(l+a,d+u,m+y,C+A).normalize(),i[3].setComponents(l-a,d-u,m-y,C-A).normalize(),n)i[4].setComponents(c,f,p,b).normalize(),i[5].setComponents(l-c,d-f,m-p,C-b).normalize();else if(i[4].setComponents(l-c,d-f,m-p,C-b).normalize(),t===ei)i[5].setComponents(l+c,d+f,m+p,C+b).normalize();else if(t===oo)i[5].setComponents(c,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);let t=Gx.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(kl.x=i.normal.x>0?e.max.x:e.min.x,kl.y=i.normal.y>0?e.max.y:e.min.y,kl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Op=new ut,ua=class s{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Op.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new mi),n[i].setFromProjectionMatrix(Op,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new mi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function Tu(s,e){return s-e}function Vx(s,e){return s.z-e.z}function Wx(s,e){return e.z-s.z}var Nu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Gn=new ut,Xx=new Ve(1,1,1),qx=new mi,Yx=new ua,Bl=new fn,er=new Qt,Au=new Y,Fp=new Y,kp=new Y,Kx=new Y,Ru=new Nu,Rn=new wt,Hl=[];function Zx(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ai(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var po=class extends wt{constructor(e,t,n=t*2,i){super(new Dt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ji(t,e,e,Wn,Un);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ji(t,e,e,Aa,si);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ji(t,e,e,Wn,Un);n.colorSpace=Rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Et(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Et(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Gn),this.getBoundingBoxAt(r,Bl).applyMatrix4(Gn),e.union(Bl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Gn),this.getBoundingSphereAt(r,er).applyMatrix4(Gn),e.union(er)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Tu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Gn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Xx.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Tu),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);Zx(u,f,c);let d=u.itemSize;for(let g=u.count,y=l;g<y;g++){let p=c+g;for(let m=0;m<d;m++)f.setComponent(p,m,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,d=u;f<d;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=r.index,g=d.array,y=e-u;for(let p=h;p<h+f;p++)g[p]=g[p]+y;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let d in f){let g=f[d],{array:y,itemSize:p}=g;y.copyWithin(e*p,h*p,(h+u)*p),g.addUpdateRange(e*p,u*p),g.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new fn,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Au.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new Qt;this.getBoundingBoxAt(e,Bl),Bl.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Au.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Au))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Tu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ai(this._multiDrawCounts,i),Ai(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),c=new Int32Array(e);Ai(this._mergedDrawCounts,o),Ai(this._mergedDrawStarts,a),Ai(this._mergedDrawInstanceCounts,c),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=c,this._maxInstanceCount=e;let l=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Ai(l.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Ai(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ai(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Dt,this._initializeGeometry(r));let o=this.geometry;r.index&&Ai(r.index.array,o.index.array);for(let a in r.attributes)Ai(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Rn.material=this.material,Rn.geometry.index=o.index,Rn.geometry.attributes=o.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new fn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new Qt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];Rn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Rn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Rn.geometry.boundingBox),this.getBoundingSphereAt(l,Rn.geometry.boundingSphere),Rn.raycast(e,Hl);for(let u=0,f=Hl.length;u<f;u++){let d=Hl[u];d.object=this,d.batchId=a,t.push(d)}Hl.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,g=this._geometryInfo,y=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data,M=e.isArrayCamera?Yx:qx;y&&(e.isArrayCamera?M.setFromArrayCamera(e):(Gn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),M.setFromProjectionMatrix(Gn,e.coordinateSystem,e.reversedDepth)));let A=0,b=0;if(this.sortObjects){Gn.copy(this.matrixWorld).invert(),Fp.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Gn),kp.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Gn);for(let x=0,E=c.length;x<E;x++)if(c[x].visible&&c[x].active){let U=c[x].geometryIndex;this.getMatrixAt(x,Gn),this.getBoundingSphereAt(U,er).applyMatrix4(Gn);let S=!1;if(y&&(S=!M.intersectsSphere(er)),!S){let F=g[U],D=Kx.subVectors(er.center,Fp).dot(kp);Ru.push(F.start,F.count,D,x)}}let C=Ru.list,I=this.customSort;I===null?C.sort(n.transparent?Wx:Vx):I.call(this,C,e);for(let x=0,E=C.length;x<E;x++){let U=C[x],S=U.start*o*a,F=U.count*a;i==="merged"?b>0&&u[b-1]===S&&f[b-1]===F?d[b-1]++:(u[b]=S,f[b]=F,d[b]=1,b++):(l[A]=S,h[A]=F),m[A]=U.index,A++}Ru.reset()}else for(let C=0,I=c.length;C<I;C++)if(c[C].visible&&c[C].active){let x=c[C].geometryIndex,E=!1;if(y&&(this.getMatrixAt(C,Gn),this.getBoundingSphereAt(x,er).applyMatrix4(Gn),E=!M.intersectsSphere(er)),!E){let U=g[x],S=U.start*o*a,F=U.count*a;i==="merged"?b>0&&u[b-1]===S&&f[b-1]===F?d[b-1]++:(u[b]=S,f[b]=F,d[b]=1,b++):(l[A]=S,h[A]=F),m[A]=C,A++}}p.needsUpdate=!0,this._multiDrawCount=A,this._mergedDrawCount=b,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},mo=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oc=new Y,ac=new Y,Bp=new ut,Qo=new Es,Gl=new Qt,Cu=new Y,Hp=new Y,fr=class extends Yt{constructor(e=new Dt,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oc.fromBufferAttribute(t,i-1),ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new zt(n,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(i),Gl.radius+=r,e.ray.intersectsSphere(Gl)===!1)return;Bp.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=h.getX(y),M=h.getX(y+1),A=Vl(this,e,Qo,c,m,M,y);A&&t.push(A)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=Vl(this,e,Qo,c,y,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=Vl(this,e,Qo,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Vl(this,e,Qo,c,g-1,d,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(oc.fromBufferAttribute(a,i),ac.fromBufferAttribute(a,r),t.distanceSqToSegment(oc,ac,Cu,Hp)>n)return;Cu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Cu);if(!(l<e.near||l>e.far))return{distance:l,point:Hp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Gp=new Y,Vp=new Y,fa=class extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gp.fromBufferAttribute(t,i),Vp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gp.distanceTo(Vp);e.setAttribute("lineDistance",new zt(n,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},go=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wp=new ut,zu=new Es,Wl=new Qt,Xl=new Y,gi=class extends Yt{constructor(e=new Dt,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(i),Wl.radius+=r,e.ray.intersectsSphere(Wl)===!1)return;Wp.copy(i).invert(),zu.copy(e.ray).applyMatrix4(Wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=l.getX(g);Xl.fromBufferAttribute(u,p),Xp(Xl,p,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Xl.fromBufferAttribute(u,g),Xp(Xl,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xp(s,e,t,n,i,r,o){let a=zu.distanceSqToPoint(s);if(a<t){let c=new Y;zu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pa=class extends pn{constructor(e=[],t=wr,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},es=class extends pn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends pn{constructor(e,t,n=si,i,r,o,a=nn,c=nn,l,h=Qi,u=1){if(h!==Qi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ma=class extends ts{constructor(e,t=si,n=wr,i,r,o=nn,a=nn,c,l=Qi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xi=class s extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(y,p,m,M,A,b,C,I,x,E,U){let S=b/x,F=C/E,D=b/2,k=C/2,O=I/2,X=x+1,W=E+1,B=0,_=0,v=new Y;for(let R=0;R<W;R++){let T=R*F-k;for(let z=0;z<X;z++){let q=z*S-D;v[y]=q*M,v[p]=T*A,v[m]=O,l.push(v.x,v.y,v.z),v[y]=0,v[p]=0,v[m]=I>0?1:-1,h.push(v.x,v.y,v.z),u.push(z/x),u.push(1-R/E),B+=1}}for(let R=0;R<E;R++)for(let T=0;T<x;T++){let z=f+T+X*R,q=f+T+X*(R+1),V=f+(T+1)+X*(R+1),Q=f+(T+1)+X*R;c.push(z,q,Q),c.push(q,V,Q),_+=6}a.addGroup(d,_,U),d+=_,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var dr=class s extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new Y,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ns=class s extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=n/2,m=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function M(){let b=new Y,C=new Y,I=0,x=(t-e)/n;for(let E=0;E<=r;E++){let U=[],S=E/r,F=S*(t-e)+e;for(let D=0;D<=i;D++){let k=D/i,O=k*c+a,X=Math.sin(O),W=Math.cos(O);C.x=F*X,C.y=-S*n+p,C.z=F*W,u.push(C.x,C.y,C.z),b.set(X,x,W).normalize(),f.push(b.x,b.y,b.z),d.push(k,1-S),U.push(g++)}y.push(U)}for(let E=0;E<i;E++)for(let U=0;U<r;U++){let S=y[U][E],F=y[U+1][E],D=y[U+1][E+1],k=y[U][E+1];(e>0||U!==0)&&(h.push(S,F,k),I+=3),(t>0||U!==r-1)&&(h.push(F,D,k),I+=3)}l.addGroup(m,I,0),m+=I}function A(b){let C=g,I=new pt,x=new Y,E=0,U=b===!0?e:t,S=b===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;let F=g;for(let D=0;D<=i;D++){let O=D/i*c+a,X=Math.cos(O),W=Math.sin(O);x.x=U*W,x.y=p*S,x.z=U*X,u.push(x.x,x.y,x.z),f.push(0,S,0),I.x=X*.5+.5,I.y=W*.5*S+.5,d.push(I.x,I.y),g++}for(let D=0;D<i;D++){let k=C+D,O=F+D;b===!0?h.push(O,O+1,k):h.push(O+1,O,k),E+=3}l.addGroup(m,E,b===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var lc=class s extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let A=new Y,b=new Y,C=new Y;for(let I=0;I<t.length;I+=3)d(t[I+0],A),d(t[I+1],b),d(t[I+2],C),c(A,b,C,M)}function c(M,A,b,C){let I=C+1,x=[];for(let E=0;E<=I;E++){x[E]=[];let U=M.clone().lerp(b,E/I),S=A.clone().lerp(b,E/I),F=I-E;for(let D=0;D<=F;D++)D===0&&E===I?x[E][D]=U:x[E][D]=U.clone().lerp(S,D/F)}for(let E=0;E<I;E++)for(let U=0;U<2*(I-E)-1;U++){let S=Math.floor(U/2);U%2===0?(f(x[E][S+1]),f(x[E+1][S]),f(x[E][S])):(f(x[E][S+1]),f(x[E+1][S+1]),f(x[E+1][S]))}}function l(M){let A=new Y;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(M),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function h(){let M=new Y;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let b=p(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;o.push(b,1-C)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let A=o[M+0],b=o[M+2],C=o[M+4],I=Math.max(A,b,C),x=Math.min(A,b,C);I>.9&&x<.1&&(A<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,A){let b=M*3;A.x=e[b+0],A.y=e[b+1],A.z=e[b+2]}function g(){let M=new Y,A=new Y,b=new Y,C=new Y,I=new pt,x=new pt,E=new pt;for(let U=0,S=0;U<r.length;U+=9,S+=6){M.set(r[U+0],r[U+1],r[U+2]),A.set(r[U+3],r[U+4],r[U+5]),b.set(r[U+6],r[U+7],r[U+8]),I.set(o[S+0],o[S+1]),x.set(o[S+2],o[S+3]),E.set(o[S+4],o[S+5]),C.copy(M).add(A).add(b).divideScalar(3);let F=p(C);y(I,S+0,M,F),y(x,S+2,A,F),y(E,S+4,b,F)}}function y(M,A,b,C){C<0&&M.x===1&&(o[A]=M.x-1),b.x===0&&b.z===0&&(o[A]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var xa=class s extends lc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var vi=class s extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let M=m*f-o;for(let A=0;A<l;A++){let b=A*u-r;g.push(b,-M,0),y.push(0,0,1),p.push(A/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let A=M+l*m,b=M+l*(m+1),C=M+1+l*(m+1),I=M+1+l*m;d.push(A,b,I),d.push(b,C,I)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var va=class s extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new Y,f=new Y,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let M=[],A=m/n,b=o+A*a,C=e*Math.cos(b),I=Math.sqrt(e*e-C*C),x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let U=E/t,S=i+U*r;u.x=-I*Math.cos(S),u.y=C,u.z=I*Math.sin(S),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(U+x,1-A),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=h[m][M+1],b=h[m][M],C=h[m+1][M],I=h[m+1][M+1];(m!==0||o>0)&&d.push(A,b,I),(m!==n-1||c<Math.PI)&&d.push(b,C,I)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ya=class s extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new Y,d=new Y,g=new Y;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=i;m++){let M=m/i*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=i;p++){let m=(i+1)*y+p-1,M=(i+1)*(y-1)+p-1,A=(i+1)*(y-1)+p,b=(i+1)*y+p;c.push(m,M,b),c.push(M,A,b)}this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(qp(i))i.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function In(s){let e={};for(let t=0;t<s.length;t++){let n=Ar(s[t]);for(let i in n)e[i]=n[i]}return e}function qp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var Wm={clone:Ar,merge:In},$x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new St().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cc=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pr=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mn=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=bc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hc=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ea(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Qx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ev(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nr:r=e,a=2*t-n;break;case ia:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nr:o=e,c=2*n-t;break;case ia:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,M=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,A=(-1-d)*p+(1.5+d)*y+.5*g,b=d*p-d*y;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+M*o[l+C]+A*o[c+C]+b*o[u+C];return r}},_a=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},dc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},pc=class extends Ii{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),y=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*g;return r}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let y=o[l+g],p=o[c+g],m=d*f+g*2,M=u[m],A=u[m+1],b=e*f+g*2,C=h[b],I=h[b+1],x=nv(n,t,M,C,i);r[g]=Xm(x,y,A,I,p)}return r}};function Xm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function tv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function nv(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Xm(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=tv(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ea(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break;case Du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return Kl;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;ea(this.settings)&&(Kp(this.settings.inTangents,e),Kp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ea(this.settings)&&(Zp(this.settings.inTangents,e),Zp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(bt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(bt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){bt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){bt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&ox(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){bt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ea(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Kp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Zp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=rr;var is=class extends Xn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=sr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};Ma.prototype.ValueTypeName="color";var ss=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};ss.prototype.ValueTypeName="number";var mc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Zt.slerpFlat(r,0,o,l-a,o,l,c);return r}},rs=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Xn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=sr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};Ts.prototype.ValueTypeName="vector";var yi=class{constructor(e="",t=-1,n=[],i=lh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Qx(c);c=Yp(c,1,h),l=Yp(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function iv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Ma;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=iv(s.type);if(s.times===void 0){let n=[],i=[];ev(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ea(s.settings)&&(t.settings={inTangents:Ms(s.settings.inTangents,Float32Array),outTangents:Ms(s.settings.outTangents,Float32Array)}),t}var ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Jp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Jp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Jp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var gc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qm=new gc,Pi=class{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},Uu=class extends Error{constructor(e,t){super(e),this.response=t}},xo=class extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ti.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Zi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,y=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:A,value:b})=>{if(A)m.close();else{y+=b.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let I=0,x=h.length;I<x;I++){let E=h[I];E.onProgress&&E.onProgress(C)}m.enqueue(b),M()}},A=>{m.error(A)})}}});return new Response(p)}else throw new Uu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ti.add(`file:${e}`,l);let h=Zi[e];delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Zi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var eo=new WeakMap,xc=class extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ti.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=eo.get(o);u===void 0&&(u=[],eo.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=ao("img");function c(){h(),t&&t(this);let u=eo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}eo.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),ti.remove(`image:${e}`);let f=eo.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}eo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ti.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var mr=class extends Pi{constructor(e){super(e)}load(e,t,n,i){let r=new pn,o=new xc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},gr=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xr=class extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Iu=new ut,$p=new Y,jp=new Y,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$p.setFromMatrixPosition(e.matrixWorld),t.position.copy($p),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Iu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===oo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ql=new Y,Yl=new Zt,Ri=new Y,ba=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,Yl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ql,Yl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new Y,Qp=new pt,em=new pt,tn=class extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,Qp,em),t.subVectors(em,Qp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ou=class extends vo{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Sa=class extends gr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fu=class extends vo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},vr=class extends gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yr=class extends ba{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ku=class extends vo{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ni=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wa=class extends Dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Pu=new WeakMap,Ea=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&ft("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&ft("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ti.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Pu.has(o)===!0?(i&&i(Pu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Pu.set(c,l),ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var to=-90,no=1,yo=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tn(to,no,e,t);i.layers=this.layers,this.add(i);let r=new tn(to,no,e,t);r.layers=this.layers,this.add(r);let o=new tn(to,no,e,t);o.layers=this.layers,this.add(o);let a=new tn(to,no,e,t);a.layers=this.layers,this.add(a);let c=new tn(to,no,e,t);c.layers=this.layers,this.add(c);let l=new tn(to,no,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var yc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,o,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},yf="\\[\\]\\.:\\/",rv=new RegExp("["+yf+"]","g"),_f="[^"+yf+"]",ov="[^"+yf.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",_f),lv=/(WCOD+)?/.source.replace("WCOD",ov),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),uv=new RegExp("^"+av+lv+cv+hv+"$"),fv=["material","materials","bones","map"],Bu=class{constructor(e,t,n){let i=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(e){let t=uv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Bu;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _c=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:tr,endingEnd:tr};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Am,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Cm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case lh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Rm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Na){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=nr,i.endingEnd=nr):(e?i.endingStart=this.zeroSlopeAtStart?nr:tr:i.endingStart=ia,t?i.endingEnd=this.zeroSlopeAtEnd?nr:tr:i.endingEnd=ia)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},dv=new Float32Array(1),As=class extends pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new yc(Xt.create(n,d,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new _a(new Float32Array(2),new Float32Array(2),1,dv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?yi.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new _c(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?yi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var tm=new ut,Ta=class{constructor(e,t,n=0,i=1/0){this.ray=new Es(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(e,t=!0,n=[]){return Hu(e,this,n,t),n.sort(nm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Hu(e[i],this,n,t);return n.sort(nm),n}};function nm(s,e){return s.distance-e.distance}function Hu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Hu(r[o],e,t,!0)}}var Tf=class Tf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Tf.prototype.isMatrix2=!0;var Gu=Tf;function Mf(s,e,t,n){let i=pv(n);switch(t){case of:return s*e;case Cc:return s*e/i.components*i.byteLength;case Aa:return s*e/i.components*i.byteLength;case Rs:return s*e*2/i.components*i.byteLength;case Ic:return s*e*2/i.components*i.byteLength;case af:return s*e*3/i.components*i.byteLength;case Wn:return s*e*4/i.components*i.byteLength;case Pc:return s*e*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:case zc:return Math.max(s,16)*Math.max(e,8)/4;case Lc:case Nc:return Math.max(s,8)*Math.max(e,8)/2;case Uc:case Oc:case kc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case La:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rh:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Da:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(s){switch(s){case Yn:case tf:return{byteLength:1,components:1};case So:case nf:case Mi:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case si:case Tc:case Un:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function p0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gv(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vv=`#ifdef USE_ALPHAHASH
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
#endif`,yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ev=`#ifdef USE_BATCHING
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
#endif`,Tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Pv=`#ifdef USE_BUMPMAP
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
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bv=`#define PI 3.141592653589793
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
} // validated`,Hv=`vec3 transformedNormal = objectNormal;
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
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
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
}`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dy=`PhysicalMaterial material;
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
#endif`,py=`uniform sampler2D dfgLUT;
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
}`,my=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iy=`#if defined( USE_MORPHCOLORS )
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
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
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
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform float backgroundBlurriness;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,E_=`#define DISTANCE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,z_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,F_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,B_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,V_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:xv,alphahash_pars_fragment:vv,alphamap_fragment:yv,alphamap_pars_fragment:_v,alphatest_fragment:Mv,alphatest_pars_fragment:bv,aomap_fragment:Sv,aomap_pars_fragment:wv,batching_pars_vertex:Ev,batching_vertex:Tv,begin_vertex:Av,beginnormal_vertex:Rv,bsdfs:Cv,iridescence_fragment:Iv,bumpmap_pars_fragment:Pv,clipping_planes_fragment:Lv,clipping_planes_pars_fragment:Dv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:zv,color_fragment:Uv,color_pars_fragment:Ov,color_pars_vertex:Fv,color_vertex:kv,common:Bv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Vv,emissivemap_fragment:Wv,emissivemap_pars_fragment:Xv,colorspace_fragment:qv,colorspace_pars_fragment:Yv,envmap_fragment:Kv,envmap_common_pars_fragment:Zv,envmap_pars_fragment:Jv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:ly,envmap_vertex:jv,fog_vertex:Qv,fog_pars_vertex:ey,fog_fragment:ty,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:sy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:oy,lights_pars_begin:ay,lights_toon_fragment:cy,lights_toon_pars_fragment:hy,lights_phong_fragment:uy,lights_phong_pars_fragment:fy,lights_physical_fragment:dy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:xy,lightprobes_pars_fragment:vy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:by,map_fragment:Sy,map_pars_fragment:wy,map_particle_fragment:Ey,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ry,morphinstance_vertex:Cy,morphcolor_vertex:Iy,morphnormal_vertex:Py,morphtarget_pars_vertex:Ly,morphtarget_vertex:Dy,normal_fragment_begin:Ny,normal_fragment_maps:zy,normal_pars_fragment:Uy,normal_pars_vertex:Oy,normal_vertex:Fy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Vy,opaque_fragment:Wy,packing:Xy,premultiplied_alpha_fragment:qy,project_vertex:Yy,dithering_fragment:Ky,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Qy,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:o_,specularmap_pars_fragment:a_,tonemapping_fragment:l_,tonemapping_pars_fragment:c_,transmission_fragment:h_,transmission_pars_fragment:u_,uv_pars_fragment:f_,uv_pars_vertex:d_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:x_,backgroundCube_vert:v_,backgroundCube_frag:y_,cube_vert:__,cube_frag:M_,depth_vert:b_,depth_frag:S_,distance_vert:w_,distance_frag:E_,equirect_vert:T_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:I_,meshbasic_frag:P_,meshlambert_vert:L_,meshlambert_frag:D_,meshmatcap_vert:N_,meshmatcap_frag:z_,meshnormal_vert:U_,meshnormal_frag:O_,meshphong_vert:F_,meshphong_frag:k_,meshphysical_vert:B_,meshphysical_frag:H_,meshtoon_vert:G_,meshtoon_frag:V_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:K_,sprite_frag:Z_},je={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Ui={basic:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:In([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:In([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Ve(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:In([je.points,je.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:In([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:In([je.common,je.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:In([je.sprite,je.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:In([je.common,je.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:In([je.lights,je.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ui.physical={uniforms:In([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var uh={r:0,b:0,g:0},J_=new ut,m0=new St;m0.set(-1,0,0,0,1,0,0,0,1);function $_(s,e,t,n,i,r){let o=new Ve(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(M){let A=!1,b=d(M);b===null?p(o,a):b&&b.isColor&&(p(b,1),A=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(M,A){let b=d(A);b&&b.isCubeTexture?(l===void 0&&(l=new wt(new xi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ar(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(m0),l.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ht,(h!==b||u!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wt(new vi(2,2),new sn({name:"BackgroundMaterial",uniforms:Ar(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(uh,vf(s)),t.buffers.color.setClear(uh.r,uh.g,uh.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:y,dispose:m}}function j_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(F,D,k,O,X){let W=!1,B=u(F,O,k,D);r!==B&&(r=B,l(r.object)),W=d(F,O,k,X),W&&g(F,O,k,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,b(F,D,k,O),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function u(F,D,k,O){let X=O.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let B=F.isInstancedMesh===!0?F.id:0,_=W[B];_===void 0&&(_={},W[B]=_);let v=_[k.id];v===void 0&&(v={},_[k.id]=v);let R=v[X];return R===void 0&&(R=f(c()),v[X]=R),R}function f(F){let D=[],k=[],O=[];for(let X=0;X<t;X++)D[X]=0,k[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:O,object:F,attributes:{},index:null}}function d(F,D,k,O){let X=r.attributes,W=D.attributes,B=0,_=k.getAttributes();for(let v in _)if(_[v].location>=0){let T=X[v],z=W[v];if(z===void 0&&(v==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),v==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),T===void 0||T.attribute!==z||z&&T.data!==z.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(F,D,k,O){let X={},W=D.attributes,B=0,_=k.getAttributes();for(let v in _)if(_[v].location>=0){let T=W[v];T===void 0&&(v==="instanceMatrix"&&F.instanceMatrix&&(T=F.instanceMatrix),v==="instanceColor"&&F.instanceColor&&(T=F.instanceColor));let z={};z.attribute=T,T&&T.data&&(z.data=T.data),X[v]=z,B++}r.attributes=X,r.attributesNum=B,r.index=O}function y(){let F=r.newAttributes;for(let D=0,k=F.length;D<k;D++)F[D]=0}function p(F){m(F,0)}function m(F,D){let k=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;k[F]=1,O[F]===0&&(s.enableVertexAttribArray(F),O[F]=1),X[F]!==D&&(s.vertexAttribDivisor(F,D),X[F]=D)}function M(){let F=r.newAttributes,D=r.enabledAttributes;for(let k=0,O=D.length;k<O;k++)D[k]!==F[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function A(F,D,k,O,X,W,B){B===!0?s.vertexAttribIPointer(F,D,k,X,W):s.vertexAttribPointer(F,D,k,O,X,W)}function b(F,D,k,O){y();let X=O.attributes,W=k.getAttributes(),B=D.defaultAttributeValues;for(let _ in W){let v=W[_];if(v.location>=0){let R=X[_];if(R===void 0&&(_==="instanceMatrix"&&F.instanceMatrix&&(R=F.instanceMatrix),_==="instanceColor"&&F.instanceColor&&(R=F.instanceColor)),R!==void 0){let T=R.normalized,z=R.itemSize,q=e.get(R);if(q===void 0)continue;let V=q.buffer,Q=q.type,ye=q.bytesPerElement,oe=Q===s.INT||Q===s.UNSIGNED_INT||R.gpuType===Tc;if(R.isInterleavedBufferAttribute){let ne=R.data,Se=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,Fe=R.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let ue=0;ue<v.locationSize;ue++)m(v.location+ue,ne.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<v.locationSize;ue++)p(v.location+ue);s.bindBuffer(s.ARRAY_BUFFER,V);for(let ue=0;ue<v.locationSize;ue++)A(v.location+ue,z/v.locationSize,Q,T,Se*ye,(Fe+z/v.locationSize*ue)*ye,oe)}else{if(R.isInstancedBufferAttribute){for(let ne=0;ne<v.locationSize;ne++)m(v.location+ne,R.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ne=0;ne<v.locationSize;ne++)p(v.location+ne);s.bindBuffer(s.ARRAY_BUFFER,V);for(let ne=0;ne<v.locationSize;ne++)A(v.location+ne,z/v.locationSize,Q,T,z*ye,z/v.locationSize*ne*ye,oe)}}else if(B!==void 0){let T=B[_];if(T!==void 0)switch(T.length){case 2:s.vertexAttrib2fv(v.location,T);break;case 3:s.vertexAttrib3fv(v.location,T);break;case 4:s.vertexAttrib4fv(v.location,T);break;default:s.vertexAttrib1fv(v.location,T)}}}}M()}function C(){U();for(let F in n){let D=n[F];for(let k in D){let O=D[k];for(let X in O){let W=O[X];for(let B in W)h(W[B].object),delete W[B];delete O[X]}}delete n[F]}}function I(F){if(n[F.id]===void 0)return;let D=n[F.id];for(let k in D){let O=D[k];for(let X in O){let W=O[X];for(let B in W)h(W[B].object),delete W[B];delete O[X]}}delete n[F.id]}function x(F){for(let D in n){let k=n[D];for(let O in k){let X=k[O];if(X[F.id]===void 0)continue;let W=X[F.id];for(let B in W)h(W[B].object),delete W[B];delete X[F.id]}}}function E(F){for(let D in n){let k=n[D],O=F.isInstancedMesh===!0?F.id:0,X=k[O];if(X!==void 0){for(let W in X){let B=X[W];for(let _ in B)h(B[_].object),delete B[_];delete X[W]}delete k[O],Object.keys(k).length===0&&delete n[D]}}}function U(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Q_(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function eM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Wn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let E=x===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==Un&&!E&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ft("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:C,samples:I}}function tM(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Jn,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,A=M*4,b=m.clippingState||null;c.value=b,b=h(g,f,A,d);for(let C=0;C!==A;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,b=d;A!==y;++A,b+=4)o.copy(u[A]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Ba=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Mr});r.uniforms.tEquirect.value=t;let o=new wt(i,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=dn),new yo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ym=256,nM=3,iM=20,g0=256,x0=16,sM=3,rM=new Y,oM=new Ve,dh=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yo(1,10,null),this._boxMesh=new wt(new xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=rM}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(oM));let p=new yo(n,i,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ym,mf(e))}_fromTexture(e,t){e.mapping===wr||e.mapping===Mo?this._setSize(e.image.length===0?Ym:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Km(e,!1,!1),n=Math.log2(e)-nM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wr||e.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=aM(),this._integrationMaterial=lM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/x0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-sM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(g0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cM());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Km(s,e,t){return new Ba(s,{minFilter:ii,generateMipmaps:e,type:Mi,colorSpace:On,depthBuffer:t})}function Ha(s,e,t){return new sn({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:gn,blending:Mr,depthTest:!1,depthWrite:!1})}function aM(){return Ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${g0}u

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
	`)}function lM(){return Ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:x0}},`

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
	`)}function cM(){return Ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iM}
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
	`)}function Zm(){return Ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jm(){return Ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Sc||d===wc)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Ba(g.height);return y.fromEquirectangularTexture(s,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Sc||d===wc,y=d===wr||d===Mo;if(g||y){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new dh(s)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new dh(s)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Sc?f.mapping=wr:d===wc&&(f.mapping=Mo),f}function c(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function uM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ir("WebGLRenderer: "+n+" extension not supported."),i}}}function fM(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,y){return i[y.id]!==void 0||(y.addEventListener("dispose",a),i[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)e.update(y[p],s.ARRAY_BUFFER)}function u(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=y!==null?y.array.length:p.array.length/3-1,A=p.count>=65535?ca:la,b=new A(Math.ceil(M/3)*6,1),C=b.array;if(y!==null){let x=y.array;m=y.version;for(let E=0,U=0;E<M;E+=3){let S=x[E+0],F=x[E+1],D=x[E+2];C[U++]=S,C[U++]=F,C[U++]=F,C[U++]=D,C[U++]=D,C[U++]=S}}else{m=p.version;for(let x=0,E=0;x<M;x+=3){let U=x+0,S=x+1,F=x+2;C[E++]=U,C[E++]=S,C[E++]=S,C[E++]=F,C[E++]=F,C[E++]=U}}b.version=m;let I=r.get(g);I&&e.remove(I),r.set(g,b)}function f(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in i){let y=i[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function dM(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];t.update(y,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function pM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:bt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mM(s,e,t){let n=new WeakMap,i=new Wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let U=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let b=a.attributes.position.count*A,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let I=new Float32Array(b*C*4*u),x=new oa(I,b,C,u);x.type=Un,x.needsUpdate=!0;let E=A*4;for(let S=0;S<u;S++){let F=p[S],D=m[S],k=M[S],O=b*C*4*S;for(let X=0;X<F.count;X++){let W=X*E;d===!0&&(i.fromBufferAttribute(F,X),I[O+W+0]=i.x,I[O+W+1]=i.y,I[O+W+2]=i.z,I[O+W+3]=0),g===!0&&(i.fromBufferAttribute(D,X),I[O+W+4]=i.x,I[O+W+5]=i.y,I[O+W+6]=i.z,I[O+W+7]=0),y===!0&&(i.fromBufferAttribute(k,X),I[O+W+8]=i.x,I[O+W+9]=i.y,I[O+W+10]=i.z,I[O+W+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new pt(b,C)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function gM(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var xM={[Ku]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[Sr]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function vM(s,e,t,n,i,r){let o=new $n(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Dt;h.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new zt([0,2,0,0,2,0],2));let u=new cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new wt(h,u),d=new yr(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,M=null,A=[],b=!1;this.setSize=function(C,I){o.setSize(C,I),a!==null&&a.setSize(C,I),c!==null&&c.setSize(C,I);for(let x=0;x<A.length;x++){let E=A[x];E.setSize&&E.setSize(C,I)}},this.setEffects=function(C){A=C,b=A.length>0&&A[0].isRenderPass===!0;let I=o.width,x=o.height;A.length>0&&a===null&&(a=new $n(I,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),c=new $n(I,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let E=i===!0&&A.some(U=>U.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&l===null&&(l=new ts(I,x),r===!0&&(l.format=ls,l.type=Tr)),o.dispose(),o.depthTexture=E?l:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let U=0;U<A.length;U++){let S=A[U];S.setSize&&S.setSize(I,x),E&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(C,I){if(p||C.toneMapping===Di&&A.length===0)return!1;if(M=I,I!==null){let x=I.width,E=I.height;(o.width!==x||o.height!==E)&&this.setSize(x,E)}return b===!1&&C.setRenderTarget(o),m=C.toneMapping,C.toneMapping=Di,!0},this.hasRenderPass=function(){return b},this.end=function(C,I){C.toneMapping=m,p=!0;let x=o,E=a;for(let U=0;U<A.length;U++){let S=A[U];S.enabled!==!1&&(S.render(C,E,x,I),S.needsSwap!==!1&&(x=E,E=E===a?c:a))}if(g!==C.outputColorSpace||y!==C.toneMapping){g=C.outputColorSpace,y=C.toneMapping,u.defines={},Rt.getTransfer(g)===Ht&&(u.defines.SRGB_TRANSFER="");let U=xM[y];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var v0=new pn,y0=new ts(1,1),_0=new ma(1),M0=new oa,b0=new rc,S0=new pa,$m=[],jm=[],Qm=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function Ao(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=$m[i];if(r===void 0&&(r=new Float32Array(i),$m[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ph(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _M(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function MM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function bM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function SM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;t0.set(n),s.uniformMatrix2fv(this.addr,!1,t0),vn(t,n)}}function wM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;e0.set(n),s.uniformMatrix3fv(this.addr,!1,e0),vn(t,n)}}function EM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,n))return;Qm.set(n),s.uniformMatrix4fv(this.addr,!1,Qm),vn(t,n)}}function TM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function RM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function CM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function IM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function PM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function LM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function DM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function mh(s){return s.version===0&&(s.compareFunction=uf,s.needsUpdate=!0),s}function NM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=mh(y0):r=v0,t.setTexture2D(e||r,i)}function zM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||b0,i)}function UM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=mh(_0):r=S0,t.setTextureCube(e||r,i)}function OM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||M0,i)}function FM(s){switch(s){case 5126:return yM;case 35664:return _M;case 35665:return MM;case 35666:return bM;case 35674:return SM;case 35675:return wM;case 35676:return EM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return IM;case 36294:return PM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}function kM(s,e){s.uniform1fv(this.addr,e)}function BM(s,e){let t=Ao(e,this.size,2);s.uniform2fv(this.addr,t)}function HM(s,e){let t=Ao(e,this.size,3);s.uniform3fv(this.addr,t)}function GM(s,e){let t=Ao(e,this.size,4);s.uniform4fv(this.addr,t)}function VM(s,e){let t=Ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function WM(s,e){let t=Ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function XM(s,e){let t=Ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qM(s,e){s.uniform1iv(this.addr,e)}function YM(s,e){s.uniform2iv(this.addr,e)}function KM(s,e){s.uniform3iv(this.addr,e)}function ZM(s,e){s.uniform4iv(this.addr,e)}function JM(s,e){s.uniform1uiv(this.addr,e)}function $M(s,e){s.uniform2uiv(this.addr,e)}function jM(s,e){s.uniform3uiv(this.addr,e)}function QM(s,e){s.uniform4uiv(this.addr,e)}function eb(s,e,t){let n=this.cache,i=e.length,r=ph(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=mh(y0):o=v0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function tb(s,e,t){let n=this.cache,i=e.length,r=ph(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||b0,r[o])}function nb(s,e,t){let n=this.cache,i=e.length,r=ph(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=mh(_0):o=S0;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function ib(s,e,t){let n=this.cache,i=e.length,r=ph(t,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||M0,r[o])}function sb(s){switch(s){case 5126:return kM;case 35664:return BM;case 35665:return HM;case 35666:return GM;case 35674:return VM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return $M;case 36295:return jM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}var Cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}},If=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sb(t.type)}},Pf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Af=/(\w+)(\])?(\[|\.)?/g;function n0(s,e){s.seq.push(e),s.map[e.id]=e}function rb(s,e,t){let n=s.name,i=n.length;for(Af.lastIndex=0;;){let r=Af.exec(n),o=Af.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){n0(t,l===void 0?new Cf(a,s,e):new If(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Pf(a),n0(t,u)),t=u}}}var Eo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);rb(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function i0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ob=37297,ab=0;function lb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var s0=new St;function cb(s){Rt._getMatrix(s0,Rt.workingColorSpace,s);let e=`mat3( ${s0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case sa:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function r0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lb(s.getShaderSource(e),a)}else return r}function hb(s,e){let t=cb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ub={[Ku]:"Linear",[Zu]:"Reinhard",[Ju]:"Cineon",[$u]:"ACESFilmic",[Qu]:"AgX",[Sr]:"Neutral",[ju]:"Custom"};function fb(s,e){let t=ub[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fh=new Y;function db(){Rt.getLuminanceCoefficients(fh);let s=fh.x.toFixed(4),e=fh.y.toFixed(4),t=fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function mb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ka(s){return s!==""}function o0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function a0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(xb,vb)}function vb(s,e){let t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lf(t)}var yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(s){return s.replace(yb,_b)}function _b(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function c0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Mb={[_r]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function bb(s){return Mb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sb={[Mo]:"ENVMAP_MODE_REFRACTION"};function wb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Eb={[bc]:"ENVMAP_BLENDING_MULTIPLY",[wm]:"ENVMAP_BLENDING_MIX",[Em]:"ENVMAP_BLENDING_ADD"};function Tb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Eb[s.combine]||"ENVMAP_BLENDING_NONE"}function Ab(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=bb(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=wb(t),u=Tb(t),f=pb(t),d=mb(r),g=i.createProgram(),y,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ka).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(y=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?At.tonemapping_pars_fragment:"",t.toneMapping!==Di?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,hb("linearToOutputTexel",t.outputColorSpace),db(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=Lf(o),o=o0(o,t),o=a0(o,t),a=Lf(a),a=o0(a,t),a=a0(a,t),o=l0(o),a=l0(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+y+o,A=m+p+a,b=i0(i,i.VERTEX_SHADER,M),C=i0(i,i.FRAGMENT_SHADER,A);i.attachShader(g,b),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function I(S){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(g)||"",D=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(C)||"",O=F.trim(),X=D.trim(),W=k.trim(),B=!0,_=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,C);else{let v=r0(i,b,"vertex"),R=r0(i,C,"fragment");bt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+v+`
`+R)}else O!==""?ft("WebGLProgram: Program Info Log:",O):(X===""||W==="")&&(_=!1);_&&(S.diagnostics={runnable:B,programLog:O,vertexShader:{log:X,prefix:y},fragmentShader:{log:W,prefix:p}})}i.deleteShader(b),i.deleteShader(C),x=new Eo(i,g),E=gb(i,g)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,ob)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}var Rb=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nf(e),t.set(e,n)),n}},Nf=class{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}};function Cb(s){return s===Rs||s===La||s===Da}function Ib(s,e,t,n,i,r){let o=new ho,a=new Df,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,E,U,S,F,D){let k=S.fog,O=F.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||X,W),_=f[x.type],v=n.precision;x.precision!==null&&(v=n.getMaxPrecision(x.precision),v!==x.precision&&ft("WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));let R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,T=R!==void 0?R.length:0,z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let q,V,Q,ye;if(_){let Ke=Ui[_];q=Ke.vertexShader,V=Ke.fragmentShader}else{q=x.vertexShader,V=x.fragmentShader;let Ke=a.getVertexShaderStage(x),Ut=a.getFragmentShaderStage(x);a.update(x,Ke,Ut),Q=Ke.id,ye=Ut.id}let oe=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ue=!!x.map,Xe=!!x.matcap,le=!!B,ee=le&&B.isPMREMTexture===!0,Ue=!!x.aoMap,Ze=!!x.lightMap,Ce=!!x.bumpMap&&x.wireframe===!1,We=!!x.normalMap,we=!!x.displacementMap,ke=!!x.emissiveMap,se=!!x.metalnessMap,Z=!!x.roughnessMap,ce=x.anisotropy>0,H=x.clearcoat>0,me=x.diffuseRoughness>0,re=x.dispersion>0,de=x.retroreflectivity>0,ae=x.iridescence>0,Re=x.sheen>0,Te=x.transmission>0,Be=ce&&!!x.anisotropyMap,P=H&&!!x.clearcoatMap,L=H&&!!x.clearcoatNormalMap,J=H&&!!x.clearcoatRoughnessMap,Ee=me&&!!x.diffuseRoughnessMap,pe=ae&&!!x.iridescenceMap,Ie=ae&&!!x.iridescenceThicknessMap,ze=Re&&!!x.sheenColorMap,Me=Re&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Ne=!!x.specularColorMap,G=!!x.specularIntensityMap,j=Te&&!!x.transmissionMap,ie=Te&&!!x.thicknessMap,Pe=!!x.gradientMap,Le=!!x.alphaMap,He=x.alphaTest>0,it=!!x.alphaHash,st=!!x.extensions,Oe=Di;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Oe=s.toneMapping);let rt=ee?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,yt={shaderID:_,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:V,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:Xe,envMap:le,envMapMode:le&&B.mapping,envMapPMREM:ee,envMapMaxLod:ee?rt.length-1:null,envMapSize:ee?rt[0].width:null,aoMap:Ue,lightMap:Ze,bumpMap:Ce,normalMap:We,displacementMap:we,emissiveMap:ke,normalMapObjectSpace:We&&x.normalMapType===Pm,normalMapTangentSpace:We&&x.normalMapType===Ua,packedNormalMap:We&&x.normalMapType===Ua&&Cb(x.normalMap.format),metalnessMap:se,roughnessMap:Z,anisotropy:ce,anisotropyMap:Be,clearcoat:H,clearcoatMap:P,clearcoatNormalMap:L,clearcoatRoughnessMap:J,diffuseRoughness:me,diffuseRoughnessMap:Ee,dispersion:re,retroreflection:de,iridescence:ae,iridescenceMap:pe,iridescenceThicknessMap:Ie,sheen:Re,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Ne,specularIntensityMap:G,transmission:Te,transmissionMap:j,thicknessMap:ie,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===_i&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:He,alphaHash:it,combine:x.combine,mapUv:ue&&d(x.map.channel),aoMapUv:Ue&&d(x.aoMap.channel),lightMapUv:Ze&&d(x.lightMap.channel),bumpMapUv:Ce&&d(x.bumpMap.channel),normalMapUv:We&&d(x.normalMap.channel),displacementMapUv:we&&d(x.displacementMap.channel),emissiveMapUv:ke&&d(x.emissiveMap.channel),metalnessMapUv:se&&d(x.metalnessMap.channel),roughnessMapUv:Z&&d(x.roughnessMap.channel),anisotropyMapUv:Be&&d(x.anisotropyMap.channel),clearcoatMapUv:P&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:L&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&d(x.sheenRoughnessMap.channel),specularMapUv:ve&&d(x.specularMap.channel),specularColorMapUv:Ne&&d(x.specularColorMap.channel),specularIntensityMapUv:G&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:ie&&d(x.thicknessMap.channel),alphaMapUv:Le&&d(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(We||ce),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ue||Le),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&We===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:z,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.filter(Ke=>Ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Ht,decodeVideoTextureEmissive:ke&&x.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(x.emissiveMap.colorSpace)===Ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function y(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(E,x),m(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function m(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let E=f[x.type],U;if(E){let S=Ui[E];U=Wm.clone(S.uniforms)}else U=x.uniforms;return U}function A(x,E){let U=h.get(E);return U!==void 0?++U.usedTimes:(U=new Ab(s,E,x,i),l.push(U),h.set(E,U)),U}function b(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function I(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:l,dispose:I}}function Pb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function h0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function u0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},s[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=o(f),M.groupOrder=y,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function c(f,d,g,y,p,m,M){M.reversedDepth===!0&&(p=-p);let A=a(f,d,g,y,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):t.push(A)}function l(f,d,g,y,p,m){let M=a(f,d,g,y,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||Lb),n.length>1&&n.sort(d||h0),i.length>1&&i.sort(d||h0)}function u(){for(let f=e,d=s.length;f<d;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function Db(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new u0,s.set(n,[o])):i>=r.length?(o=new u0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Nb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Ve};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function zb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Ub=0;function Ob(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fb(s){let e=new Nb,t=zb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);let i=new Y,r=new ut,o=new ut;function a(l){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,M=0,A=0,b=0,C=0,I=0,x=0,E=0,U=0,S=0;l.sort(Ob);for(let D=0,k=l.length;D<k;D++){let O=l[D],X=O.color,W=O.intensity,B=O.distance,_=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Rs?_=O.shadow.map.texture:_=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=X.r*W,u+=X.g*W,f+=X.b*W;else if(O.isLightProbe){for(let v=0;v<9;v++)n.probe[v].addScaledVector(O.sh.coefficients[v],W);S++}else if(O.isSunLight){let v=e.get(O);if(v.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let R=O.shadow,T=t.get(O);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=T,n.sunShadowMap[g]=_;let z=R.getViewportCount();for(let q=0;q<z;q++)n.sunShadowMatrix[y+q]=R.getMatrix(q),n.sunShadowCascade[y+q]=R._cascadeData[q];y+=z,g++}n.sun[d]=v,d++}else if(O.isDirectionalLight){let v=e.get(O);if(v.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let R=O.shadow,T=t.get(O);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,n.directionalShadow[p]=T,n.directionalShadowMap[p]=_,n.directionalShadowMatrix[p]=O.shadow.matrix,C++}n.directional[p]=v,p++}else if(O.isSpotLight){let v=e.get(O);v.position.setFromMatrixPosition(O.matrixWorld),v.color.copy(X).multiplyScalar(W),v.distance=B,v.coneCos=Math.cos(O.angle),v.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),v.decay=O.decay,n.spot[M]=v;let R=O.shadow;if(O.map&&(n.spotLightMap[E]=O.map,E++,R.updateMatrices(O),O.castShadow&&U++),n.spotLightMatrix[M]=R.matrix,O.castShadow){let T=t.get(O);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,n.spotShadow[M]=T,n.spotShadowMap[M]=_,x++}M++}else if(O.isRectAreaLight){let v=e.get(O);v.color.copy(X).multiplyScalar(W),v.halfWidth.set(O.width*.5,0,0),v.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=v,A++}else if(O.isPointLight){let v=e.get(O);if(v.color.copy(O.color).multiplyScalar(O.intensity),v.distance=O.distance,v.decay=O.decay,O.castShadow){let R=O.shadow,T=t.get(O);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,T.shadowCameraNear=R.camera.near,T.shadowCameraFar=R.camera.far,n.pointShadow[m]=T,n.pointShadowMap[m]=_,n.pointShadowMatrix[m]=O.shadow.matrix,I++}n.point[m]=v,m++}else if(O.isHemisphereLight){let v=e.get(O);v.skyColor.copy(O.color).multiplyScalar(W),v.groundColor.copy(O.groundColor).multiplyScalar(W),n.hemi[b]=v,b++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let F=n.hash;(F.sunLength!==d||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==b||F.numSunShadows!==g||F.numDirectionalShadows!==C||F.numPointShadows!==I||F.numSpotShadows!==x||F.numSpotMaps!==E||F.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+E-U,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=S,F.sunLength=d,F.directionalLength=p,F.pointLength=m,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=b,F.numSunShadows=g,F.numDirectionalShadows=C,F.numPointShadows=I,F.numSpotShadows=x,F.numSpotMaps=E,F.numLightProbes=S,n.version=Ub++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let b=l[M];if(b.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),f++}else if(b.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function f0(s){let e=new Fb(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function kb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new f0(s),e.set(i,[a])):r>=o.length?(a=new f0(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
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
}`,Gb=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Vb=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],d0=new ut,Fa=new Y,Rf=new Y;function Wb(s,e,t){let n=new mi,i=new pt,r=new pt,o=new Wt,a=new hc,c=new uc,l={},h=t.maxTextureSize,u={[Li]:gn,[gn]:Li,[rn]:rn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Bb,fragmentShader:Hb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let m=this.type;this.render=function(I,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;this.type===rm&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let U=s.getRenderTarget(),S=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Mr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=m!==this.type;k&&x.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=I.length;O<X;O++){let W=I[O],B=W.shadow;if(B===void 0){ft("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let _=B.getFrameExtents();i.multiply(_),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/_.x),i.x=r.x*_.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/_.y),i.y=r.y*_.y,B.mapSize.y=r.y));let v=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=v,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_o){if(W.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new $n(i.x,i.y,{format:Rs,type:Mi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new ts(i.x,i.y,Un),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=Qi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=nn,B.map.depthTexture.magFilter=nn}else W.isPointLight?(B.map=new Ba(i.x),B.map.depthTexture=new ma(i.x,si)):(B.map=new $n(i.x,i.y),B.map.depthTexture=new ts(i.x,i.y,si)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=Qi,this.type===_r?(B.map.depthTexture.compareFunction=v?hf:cf,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=nn,B.map.depthTexture.magFilter=nn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let R=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();W.isPointLight!==!0&&B.updateMatrices(W,E);let T=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:E.layers;for(let z=0;z<R;z++){let q=B.getCamera(z);if(W.isPointLight){let V=B.camera,Q=B.matrix,ye=W.distance||V.far;ye!==V.far&&(V.far=ye,V.updateProjectionMatrix()),Fa.setFromMatrixPosition(W.matrixWorld),V.position.copy(Fa),Rf.copy(V.position),Rf.add(Gb[z]),V.up.copy(Vb[z]),V.lookAt(Rf),V.updateMatrixWorld(),Q.makeTranslation(-Fa.x,-Fa.y,-Fa.z),d0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B._frustum.setFromProjectionMatrix(d0,V.coordinateSystem,V.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,z),s.clear();else{z===0&&(s.setRenderTarget(B.map),s.clear());let V=B.getViewport(z);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(o)}n=B.getFrustum(z),b(x,E,q,W,T,this.type)}B.isPointLightShadow!==!0&&this.type===_o&&M(B,E),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(U,S,F)};function M(I,x){let E=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null?I.mapPass=new $n(i.x,i.y,{format:Rs,type:Mi}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(x,null,E,f,y,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(x,null,E,d,y,null)}function A(I,x,E,U){let S=null,F=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)S=F;else if(S=E.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=S.uuid,k=x.uuid,O=l[D];O===void 0&&(O={},l[D]=O);let X=O[k];X===void 0&&(X=S.clone(),O[k]=X,x.addEventListener("dispose",C)),S=X}if(S.visible=x.visible,S.wireframe=x.wireframe,U===_o?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:u[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=s.properties.get(S);D.light=E}return S}function b(I,x,E,U,S,F){if(I.visible===!1)return;if(I.layers.test(S)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&F===_o)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);let O=e.update(I),X=I.material;if(Array.isArray(X)){let W=O.groups;for(let B=0,_=W.length;B<_;B++){let v=W[B],R=X[v.materialIndex];if(R&&R.visible){let T=A(I,R,U,F);I.onBeforeShadow(s,I,x,E,O,T,v),s.renderBufferDirect(E,null,O,T,I,v),I.onAfterShadow(s,I,x,E,O,T,v)}}}else if(X.visible){let W=A(I,X,U,F);I.onBeforeShadow(s,I,x,E,O,W,null),s.renderBufferDirect(E,null,O,W,I,null),I.onAfterShadow(s,I,x,E,O,W,null)}}let k=I.children;for(let O=0,X=k.length;O<X;O++)b(k[O],x,E,U,S,F)}function C(I){I.target.removeEventListener("dispose",C);for(let E in l){let U=l[E],S=I.target.uuid;S in U&&(U[S].dispose(),delete U[S])}}}function Xb(s,e){function t(){let G=!1,j=new Wt,ie=null,Pe=new Wt(0,0,0,0);return{setMask:function(Le){ie!==Le&&!G&&(s.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){G=Le},setClear:function(Le,He,it,st,Oe){Oe===!0&&(Le*=st,He*=st,it*=st),j.set(Le,He,it,st),Pe.equals(j)===!1&&(s.clearColor(Le,He,it,st),Pe.copy(j))},reset:function(){G=!1,ie=null,Pe.set(-1,0,0,0)}}}function n(){let G=!1,j=!1,ie=null,Pe=null,Le=null;return{setReversed:function(He){if(j!==He){let it=e.get("EXT_clip_control");He?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),j=He;let st=Le;Le=null,this.setClear(st)}},getReversed:function(){return j},setTest:function(He){He?ne(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(He){ie!==He&&!G&&(s.depthMask(He),ie=He)},setFunc:function(He){if(j&&(He=Hm[He]),Pe!==He){switch(He){case Jl:s.depthFunc(s.NEVER);break;case $l:s.depthFunc(s.ALWAYS);break;case jl:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case ec:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=He}},setLocked:function(He){G=He},setClear:function(He){Le!==He&&(Le=He,j&&(He=1-He),s.clearDepth(He))},reset:function(){G=!1,ie=null,Pe=null,Le=null,j=!1}}}function i(){let G=!1,j=null,ie=null,Pe=null,Le=null,He=null,it=null,st=null,Oe=null;return{setTest:function(rt){G||(rt?ne(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(rt){j!==rt&&!G&&(s.stencilMask(rt),j=rt)},setFunc:function(rt,yt,Ke){(ie!==rt||Pe!==yt||Le!==Ke)&&(s.stencilFunc(rt,yt,Ke),ie=rt,Pe=yt,Le=Ke)},setOp:function(rt,yt,Ke){(He!==rt||it!==yt||st!==Ke)&&(s.stencilOp(rt,yt,Ke),He=rt,it=yt,st=Ke)},setLocked:function(rt){G=rt},setClear:function(rt){Oe!==rt&&(s.clearStencil(rt),Oe=rt)},reset:function(){G=!1,j=null,ie=null,Pe=null,Le=null,He=null,it=null,st=null,Oe=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,A=null,b=null,C=null,I=null,x=null,E=new Ve(0,0,0),U=0,S=!1,F=null,D=null,k=null,O=null,X=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,_=0,v=s.getParameter(s.VERSION);v.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(v)[1]),B=_>=1):v.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),B=_>=2);let R=null,T={},z=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),V=new Wt().fromArray(z),Q=new Wt().fromArray(q);function ye(G,j,ie,Pe){let Le=new Uint8Array(4),He=s.createTexture();s.bindTexture(G,He),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ie;it++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(j+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return He}let oe={};oe[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(so),Ce(!1),We(Vu),ne(s.CULL_FACE),Ue(Mr);function ne(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function Se(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function Fe(G,j){return f[G]!==j?(s.bindFramebuffer(G,j),f[G]=j,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=j),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=j),!0):!1}function ue(G,j){let ie=g,Pe=!1;if(G){ie=d.get(j),ie===void 0&&(ie=[],d.set(j,ie));let Le=G.textures;if(ie.length!==Le.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let He=0,it=Le.length;He<it;He++)ie[He]=s.COLOR_ATTACHMENT0+He;ie.length=Le.length,Pe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ie)}function Xe(G){return y!==G?(s.useProgram(G),y=G,!0):!1}let le={[br]:s.FUNC_ADD,[am]:s.FUNC_SUBTRACT,[lm]:s.FUNC_REVERSE_SUBTRACT};le[cm]=s.MIN,le[hm]=s.MAX;let ee={[um]:s.ZERO,[fm]:s.ONE,[dm]:s.SRC_COLOR,[qu]:s.SRC_ALPHA,[ym]:s.SRC_ALPHA_SATURATE,[xm]:s.DST_COLOR,[mm]:s.DST_ALPHA,[pm]:s.ONE_MINUS_SRC_COLOR,[Yu]:s.ONE_MINUS_SRC_ALPHA,[vm]:s.ONE_MINUS_DST_COLOR,[gm]:s.ONE_MINUS_DST_ALPHA,[_m]:s.CONSTANT_COLOR,[Mm]:s.ONE_MINUS_CONSTANT_COLOR,[bm]:s.CONSTANT_ALPHA,[Sm]:s.ONE_MINUS_CONSTANT_ALPHA};function Ue(G,j,ie,Pe,Le,He,it,st,Oe,rt){if(G===Mr){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(ne(s.BLEND),p=!0),G!==om){if(G!==m||rt!==S){if((M!==br||C!==br)&&(s.blendEquation(s.FUNC_ADD),M=br,C=br),rt)switch(G){case _i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFunc(s.ONE,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",G);break}else switch(G){case _i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wu:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xu:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",G);break}A=null,b=null,I=null,x=null,E.set(0,0,0),U=0,m=G,S=rt}return}Le=Le||j,He=He||ie,it=it||Pe,(j!==M||Le!==C)&&(s.blendEquationSeparate(le[j],le[Le]),M=j,C=Le),(ie!==A||Pe!==b||He!==I||it!==x)&&(s.blendFuncSeparate(ee[ie],ee[Pe],ee[He],ee[it]),A=ie,b=Pe,I=He,x=it),(st.equals(E)===!1||Oe!==U)&&(s.blendColor(st.r,st.g,st.b,Oe),E.copy(st),U=Oe),m=G,S=!1}function Ze(G,j){G.side===rn?Se(s.CULL_FACE):ne(s.CULL_FACE);let ie=G.side===gn;j&&(ie=!ie),Ce(ie),G.blending===_i&&G.transparent===!1?Ue(Mr):Ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Pe=G.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){F!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),F=G)}function We(G){G!==im?(ne(s.CULL_FACE),G!==D&&(G===Vu?s.cullFace(s.BACK):G===sm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),D=G}function we(G){G!==k&&(B&&s.lineWidth(G),k=G)}function ke(G,j,ie){G?(ne(s.POLYGON_OFFSET_FILL),(O!==j||X!==ie)&&(O=j,X=ie,o.getReversed()&&(j=-j,ie=-ie),s.polygonOffset(j,ie))):Se(s.POLYGON_OFFSET_FILL)}function se(G){G?ne(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Z(G){G===void 0&&(G=s.TEXTURE0+W-1),R!==G&&(s.activeTexture(G),R=G)}function ce(G,j,ie){ie===void 0&&(R===null?ie=s.TEXTURE0+W-1:ie=R);let Pe=T[ie];Pe===void 0&&(Pe={type:void 0,texture:void 0},T[ie]=Pe),(Pe.type!==G||Pe.texture!==j)&&(R!==ie&&(s.activeTexture(ie),R=ie),s.bindTexture(G,j||oe[G]),Pe.type=G,Pe.texture=j)}function H(){let G=T[R];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(G){bt("WebGLState:",G)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(G){bt("WebGLState:",G)}}function de(){try{s.texSubImage2D(...arguments)}catch(G){bt("WebGLState:",G)}}function ae(){try{s.texSubImage3D(...arguments)}catch(G){bt("WebGLState:",G)}}function Re(){try{s.compressedTexSubImage2D(...arguments)}catch(G){bt("WebGLState:",G)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(G){bt("WebGLState:",G)}}function Be(){try{s.texStorage2D(...arguments)}catch(G){bt("WebGLState:",G)}}function P(){try{s.texStorage3D(...arguments)}catch(G){bt("WebGLState:",G)}}function L(){try{s.texImage2D(...arguments)}catch(G){bt("WebGLState:",G)}}function J(){try{s.texImage3D(...arguments)}catch(G){bt("WebGLState:",G)}}function Ee(G){return u[G]!==void 0?u[G]:s.getParameter(G)}function pe(G,j){u[G]!==j&&(s.pixelStorei(G,j),u[G]=j)}function Ie(G){V.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),V.copy(G))}function ze(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Me(G,j){let ie=l.get(j);ie===void 0&&(ie=new WeakMap,l.set(j,ie));let Pe=ie.get(G);Pe===void 0&&(Pe=s.getUniformBlockIndex(j,G.name),s.uniformBlockBinding(j,Pe,Pe),ie.set(G,Pe))}function ve(G,j,ie){let Le=l.get(j).get(G);c[Le]!==ie&&(s.bindBufferBase(s.UNIFORM_BUFFER,Le,ie),c[Le]=ie)}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},R=null,T={},f={},c={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,A=null,b=null,C=null,I=null,x=null,E=new Ve(0,0,0),U=0,S=!1,F=null,D=null,k=null,O=null,X=null,V.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Se,bindFramebuffer:Fe,drawBuffers:ue,useProgram:Xe,setBlending:Ue,setMaterial:Ze,setFlipSided:Ce,setCullFace:We,setLineWidth:we,setPolygonOffset:ke,setScissorTest:se,activeTexture:Z,bindTexture:ce,unbindTexture:H,compressedTexImage2D:me,compressedTexImage3D:re,texImage2D:L,texImage3D:J,pixelStorei:pe,getParameter:Ee,updateUBOMapping:Me,uniformBlockBinding:ve,texStorage2D:Be,texStorage3D:P,texSubImage2D:de,texSubImage3D:ae,compressedTexSubImage2D:Re,compressedTexSubImage3D:Te,scissor:Ie,viewport:ze,reset:Ne}}function qb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,y=new FinalizationRegistry(P=>g.delete(P)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,L){return p?new OffscreenCanvas(P,L):ao("canvas")}function M(P,L,J){let Ee=1,pe=Be(P);if((pe.width>J||pe.height>J)&&(Ee=J/Math.max(pe.width,pe.height)),Ee<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let Ie=Math.floor(Ee*pe.width),ze=Math.floor(Ee*pe.height);f===void 0&&(f=m(Ie,ze));let Me=L?m(Ie,ze):f;return Me.width=Ie,Me.height=ze,Me.getContext("2d").drawImage(P,0,0,Ie,ze),ft("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ie+"x"+ze+")."),Me}else return"data"in P&&ft("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function A(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(P,L,J,Ee,pe,Ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ze;Ee&&(ze=e.get("EXT_texture_norm16"),ze||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Me=L;if(L===s.RED&&(J===s.FLOAT&&(Me=s.R32F),J===s.HALF_FLOAT&&(Me=s.R16F),J===s.UNSIGNED_BYTE&&(Me=s.R8),J===s.UNSIGNED_SHORT&&ze&&(Me=ze.R16_EXT),J===s.SHORT&&ze&&(Me=ze.R16_SNORM_EXT)),L===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(Me=s.R8UI),J===s.UNSIGNED_SHORT&&(Me=s.R16UI),J===s.UNSIGNED_INT&&(Me=s.R32UI),J===s.BYTE&&(Me=s.R8I),J===s.SHORT&&(Me=s.R16I),J===s.INT&&(Me=s.R32I)),L===s.RG&&(J===s.FLOAT&&(Me=s.RG32F),J===s.HALF_FLOAT&&(Me=s.RG16F),J===s.UNSIGNED_BYTE&&(Me=s.RG8),J===s.UNSIGNED_SHORT&&ze&&(Me=ze.RG16_EXT),J===s.SHORT&&ze&&(Me=ze.RG16_SNORM_EXT)),L===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(Me=s.RG8UI),J===s.UNSIGNED_SHORT&&(Me=s.RG16UI),J===s.UNSIGNED_INT&&(Me=s.RG32UI),J===s.BYTE&&(Me=s.RG8I),J===s.SHORT&&(Me=s.RG16I),J===s.INT&&(Me=s.RG32I)),L===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(Me=s.RGB8UI),J===s.UNSIGNED_SHORT&&(Me=s.RGB16UI),J===s.UNSIGNED_INT&&(Me=s.RGB32UI),J===s.BYTE&&(Me=s.RGB8I),J===s.SHORT&&(Me=s.RGB16I),J===s.INT&&(Me=s.RGB32I)),L===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(Me=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(Me=s.RGBA16UI),J===s.UNSIGNED_INT&&(Me=s.RGBA32UI),J===s.BYTE&&(Me=s.RGBA8I),J===s.SHORT&&(Me=s.RGBA16I),J===s.INT&&(Me=s.RGBA32I)),L===s.RGB&&(J===s.UNSIGNED_SHORT&&ze&&(Me=ze.RGB16_EXT),J===s.SHORT&&ze&&(Me=ze.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(Me=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(Me=s.R11F_G11F_B10F)),L===s.RGBA){let ve=Ie?sa:Rt.getTransfer(pe);J===s.FLOAT&&(Me=s.RGBA32F),J===s.HALF_FLOAT&&(Me=s.RGBA16F),J===s.UNSIGNED_BYTE&&(Me=ve===Ht?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&ze&&(Me=ze.RGBA16_EXT),J===s.SHORT&&ze&&(Me=ze.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function x(P,L){let J;return P?L===null||L===si||L===Tr?J=s.DEPTH24_STENCIL8:L===Un?J=s.DEPTH32F_STENCIL8:L===So&&(J=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===si||L===Tr?J=s.DEPTH_COMPONENT24:L===Un?J=s.DEPTH_COMPONENT32F:L===So&&(J=s.DEPTH_COMPONENT16),J}function E(P,L){return A(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==dn?Math.log2(Math.max(L.width,L.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?L.mipmaps.length:1}function U(P){let L=new WeakRef(P);n.get(P).__ref=L,g.add(L),y.register(P,L,L)}function S(P){let L=n.get(P).__ref;L!==void 0&&(g.delete(L),y.unregister(L))}function F(P){k(P.target)}function D(P){O(P.target)}function k(P){P.removeEventListener("dispose",F),S(P),W(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function O(P){P.removeEventListener("dispose",D),S(P),_(P)}function X(){for(let P of g){let L=P.deref();L!==void 0&&(L.isRenderTarget===!0?O(L):k(L))}g.clear(),u.clear()}function W(P){let L=n.get(P);if(L.__webglInit===void 0)return;let J=P.source,Ee=d.get(J);if(Ee){let pe=Ee[L.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(P),Object.keys(Ee).length===0&&d.delete(J)}n.remove(P)}function B(P){let L=n.get(P);s.deleteTexture(L.__webglTexture);let J=P.source,Ee=d.get(J);delete Ee[L.__cacheKey],o.memory.textures--}function _(P){let L=n.get(P);L.__depthDisposeCallback&&L.__depthDisposeCallback();let J=P.depthTexture;if(J&&J.renderTarget===P&&k(J),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(L.__webglFramebuffer[pe]))for(let Ie=0;Ie<L.__webglFramebuffer[pe].length;Ie++)s.deleteFramebuffer(L.__webglFramebuffer[pe][Ie]);else s.deleteFramebuffer(L.__webglFramebuffer[pe]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[pe])}else{if(Array.isArray(L.__webglFramebuffer))for(let pe=0;pe<L.__webglFramebuffer.length;pe++)s.deleteFramebuffer(L.__webglFramebuffer[pe]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let pe=0;pe<L.__webglColorRenderbuffer.length;pe++)L.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[pe]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let Ee=P.textures;for(let pe=0,Ie=Ee.length;pe<Ie;pe++){let ze=n.get(Ee[pe]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),o.memory.textures--),n.remove(Ee[pe])}n.remove(P)}let v=0;function R(){v=0}function T(){return v}function z(P){v=P}function q(){let P=v;return P>=i.maxTextures&&ft("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),v+=1,P}function V(P){let L=[];return L.push(P.wrapS),L.push(P.wrapT),L.push(P.wrapR||0),L.push(P.magFilter),L.push(P.minFilter),L.push(P.anisotropy),L.push(P.internalFormat),L.push(P.format),L.push(P.type),L.push(P.generateMipmaps),L.push(P.mipmapsAutoUpdate),L.push(P.premultiplyAlpha),L.push(P.flipY),L.push(P.unpackAlignment),L.push(P.colorSpace),L.join()}function Q(P,L){let J=n.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){let Ee=P.image;if(Ee===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(J,P,L);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+L)}function ye(P,L){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ze(J,P,L);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+L)}function oe(P,L){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ze(J,P,L);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+L)}function ne(P,L){let J=n.get(P);if(P.version>0&&J.__version!==P.version){Ce(J,P,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+L)}let Se={[bs]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[ro]:s.MIRRORED_REPEAT},Fe={[nn]:s.NEAREST,[Ec]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[bo]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},ue={[Dm]:s.NEVER,[uf]:s.ALWAYS,[Nm]:s.LESS,[cf]:s.LEQUAL,[zm]:s.EQUAL,[hf]:s.GEQUAL,[Um]:s.GREATER,[Om]:s.NOTEQUAL};function Xe(P,L){if(L.type===Un&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===dn||L.magFilter===bo||L.magFilter===Er||L.magFilter===ii||L.minFilter===dn||L.minFilter===bo||L.minFilter===Er||L.minFilter===ii)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Se[L.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Se[L.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Se[L.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Fe[L.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Fe[L.minFilter]),L.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===nn||L.minFilter!==Er&&L.minFilter!==ii||L.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function le(P,L){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,L.addEventListener("dispose",F),U(L));let Ee=L.source,pe=d.get(Ee);pe===void 0&&(pe={},d.set(Ee,pe));let Ie=V(L);if(Ie!==P.__cacheKey){pe[Ie]===void 0&&(pe[Ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pe[Ie].usedTimes++;let ze=pe[P.__cacheKey];ze!==void 0&&(pe[P.__cacheKey].usedTimes--,ze.usedTimes===0&&B(L)),P.__cacheKey=Ie,P.__webglTexture=pe[Ie].texture}return J}function ee(P,L,J){return Math.floor(Math.floor(P/J)/L)}function Ue(P,L,J,Ee){let Ie=P.updateRanges;if(Ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,L.width,L.height,J,Ee,L.data);else{Ie.sort((G,j)=>G.start-j.start);let ze=0;for(let G=1;G<Ie.length;G++){let j=Ie[ze],ie=Ie[G],Pe=j.start+j.count,Le=ee(ie.start,L.width,4),He=ee(j.start,L.width,4);ie.start<=Pe+1&&Le===He&&ee(ie.start+ie.count-1,L.width,4)===Le?j.count=Math.max(j.count,ie.start+ie.count-j.start):(++ze,Ie[ze]=ie)}Ie.length=ze+1;let Me=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,L.width);for(let G=0,j=Ie.length;G<j;G++){let ie=Ie[G],Pe=Math.floor(ie.start/4),Le=Math.ceil(ie.count/4),He=Pe%L.width,it=Math.floor(Pe/L.width),st=Le,Oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,He),t.pixelStorei(s.UNPACK_SKIP_ROWS,it),t.texSubImage2D(s.TEXTURE_2D,0,He,it,st,Oe,J,Ee,L.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function Ze(P,L,J){let Ee=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Ee=s.TEXTURE_3D);let pe=le(P,L),Ie=L.source;t.bindTexture(Ee,P.__webglTexture,s.TEXTURE0+J);let ze=n.get(Ie);if(Ie.version!==ze.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap!="undefined"&&L.image instanceof ImageBitmap)===!1){let Oe=Rt.getPrimaries(Rt.workingColorSpace),rt=L.colorSpace===cs?null:Rt.getPrimaries(L.colorSpace),yt=L.colorSpace===cs||Oe===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment);let ve=M(L.image,!1,i.maxTextureSize);ve=Te(L,ve);let Ne=r.convert(L.format,L.colorSpace),G=r.convert(L.type),j=I(L.internalFormat,Ne,G,L.normalized,L.colorSpace,L.isVideoTexture);Xe(Ee,L);let ie,Pe=L.mipmaps,Le=L.isVideoTexture!==!0,He=ze.__version===void 0||pe===!0,it=Ie.dataReady,st=E(L,ve);if(L.isDepthTexture)j=x(L.format===ls,L.type),He&&(Le?t.texStorage2D(s.TEXTURE_2D,1,j,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,j,ve.width,ve.height,0,Ne,G,null));else if(L.isDataTexture)if(Pe.length>0){Le&&He&&t.texStorage2D(s.TEXTURE_2D,st,j,Pe[0].width,Pe[0].height);for(let Oe=0,rt=Pe.length;Oe<rt;Oe++)ie=Pe[Oe],Le?it&&t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,ie.width,ie.height,Ne,G,ie.data):t.texImage2D(s.TEXTURE_2D,Oe,j,ie.width,ie.height,0,Ne,G,ie.data);L.generateMipmaps=!1}else Le?(He&&t.texStorage2D(s.TEXTURE_2D,st,j,ve.width,ve.height),it&&Ue(L,ve,Ne,G)):t.texImage2D(s.TEXTURE_2D,0,j,ve.width,ve.height,0,Ne,G,ve.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Le&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,st,j,Pe[0].width,Pe[0].height,ve.depth);for(let Oe=0,rt=Pe.length;Oe<rt;Oe++)if(ie=Pe[Oe],L.format!==Wn)if(Ne!==null)if(Le){if(it)if(L.layerUpdates.size>0){let yt=Mf(ie.width,ie.height,L.format,L.type);for(let Ke of L.layerUpdates){let Ut=ie.data.subarray(Ke*yt/ie.data.BYTES_PER_ELEMENT,(Ke+1)*yt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Oe,0,0,Ke,ie.width,ie.height,1,Ne,Ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Oe,0,0,0,ie.width,ie.height,ve.depth,Ne,ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Oe,j,ie.width,ie.height,ve.depth,0,ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?it&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Oe,0,0,0,ie.width,ie.height,ve.depth,Ne,G,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Oe,j,ie.width,ie.height,ve.depth,0,Ne,G,ie.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{Le&&He&&t.texStorage2D(s.TEXTURE_2D,st,j,Pe[0].width,Pe[0].height);for(let Oe=0,rt=Pe.length;Oe<rt;Oe++)ie=Pe[Oe],L.format!==Wn?Ne!==null?Le?it&&t.compressedTexSubImage2D(s.TEXTURE_2D,Oe,0,0,ie.width,ie.height,Ne,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Oe,j,ie.width,ie.height,0,ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?it&&t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,ie.width,ie.height,Ne,G,ie.data):t.texImage2D(s.TEXTURE_2D,Oe,j,ie.width,ie.height,0,Ne,G,ie.data)}else if(L.isDataArrayTexture)if(Le){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,st,j,ve.width,ve.height,ve.depth),it)if(L.layerUpdates.size>0){let Oe=Mf(ve.width,ve.height,L.format,L.type);for(let rt of L.layerUpdates){let yt=ve.data.subarray(rt*Oe/ve.data.BYTES_PER_ELEMENT,(rt+1)*Oe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,rt,ve.width,ve.height,1,Ne,G,yt)}L.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,G,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,j,ve.width,ve.height,ve.depth,0,Ne,G,ve.data);else if(L.isData3DTexture)Le?(He&&t.texStorage3D(s.TEXTURE_3D,st,j,ve.width,ve.height,ve.depth),it&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,G,ve.data)):t.texImage3D(s.TEXTURE_3D,0,j,ve.width,ve.height,ve.depth,0,Ne,G,ve.data);else if(L.isFramebufferTexture){if(He)if(Le)t.texStorage2D(s.TEXTURE_2D,st,j,ve.width,ve.height);else{let Oe=ve.width,rt=ve.height;for(let yt=0;yt<st;yt++)t.texImage2D(s.TEXTURE_2D,yt,j,Oe,rt,0,Ne,G,null),Oe>>=1,rt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in s){let Oe=s.canvas;if(Oe.hasAttribute("layoutsubtree")||Oe.setAttribute("layoutsubtree","true"),ve.parentNode!==Oe){Oe.appendChild(ve),u.add(L),Oe.onpaint=rt=>{let yt=rt.changedElements;for(let Ke of u)yt.includes(Ke.image)&&(Ke.needsUpdate=!0)},Oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{let yt=s.RGBA,Ke=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,Ke,Ut,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&He){let Oe=Be(Pe[0]);t.texStorage2D(s.TEXTURE_2D,st,j,Oe.width,Oe.height)}for(let Oe=0,rt=Pe.length;Oe<rt;Oe++)ie=Pe[Oe],Le?it&&t.texSubImage2D(s.TEXTURE_2D,Oe,0,0,Ne,G,ie):t.texImage2D(s.TEXTURE_2D,Oe,j,Ne,G,ie);L.generateMipmaps=!1}else if(Le){if(He){let Oe=Be(ve);t.texStorage2D(s.TEXTURE_2D,st,j,Oe.width,Oe.height)}it&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,G,ve)}else t.texImage2D(s.TEXTURE_2D,0,j,Ne,G,ve);A(L)&&L.mipmapsAutoUpdate===!0&&b(Ee),ze.__version=Ie.version,L.onUpdate&&L.onUpdate(L)}P.__version=L.version}function Ce(P,L,J){if(L.image.length!==6)return;let Ee=le(P,L),pe=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);let Ie=n.get(pe);if(pe.version!==Ie.__version||Ee===!0){t.activeTexture(s.TEXTURE0+J);let ze=Rt.getPrimaries(Rt.workingColorSpace),Me=L.colorSpace===cs?null:Rt.getPrimaries(L.colorSpace),ve=L.colorSpace===cs||ze===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ne=L.isCompressedTexture||L.image[0].isCompressedTexture,G=L.image[0]&&L.image[0].isDataTexture,j=[];for(let Ke=0;Ke<6;Ke++)!Ne&&!G?j[Ke]=M(L.image[Ke],!0,i.maxCubemapSize):j[Ke]=G?L.image[Ke].image:L.image[Ke],j[Ke]=Te(L,j[Ke]);let ie=j[0],Pe=r.convert(L.format,L.colorSpace),Le=r.convert(L.type),He=I(L.internalFormat,Pe,Le,L.normalized,L.colorSpace),it=L.isVideoTexture!==!0,st=Ie.__version===void 0||Ee===!0,Oe=pe.dataReady,rt=E(L,ie);Xe(s.TEXTURE_CUBE_MAP,L);let yt;if(L.isDepthTexture){if(He=x(L.format===ls,L.type),st)if(it)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,He,ie.width,ie.height);else for(let Ke=0;Ke<6;Ke++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,ie.width,ie.height,0,Pe,Le,null)}else if(Ne){it&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,He,ie.width,ie.height);for(let Ke=0;Ke<6;Ke++){yt=j[Ke].mipmaps;for(let Ut=0;Ut<yt.length;Ut++){let en=yt[Ut];L.format!==Wn?Pe!==null?it?Oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut,0,0,en.width,en.height,Pe,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut,He,en.width,en.height,0,en.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut,0,0,en.width,en.height,Pe,Le,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut,He,en.width,en.height,0,Pe,Le,en.data)}}}else{if(yt=L.mipmaps,it&&st){yt.length>0&&rt++;let Ke=Be(j[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,He,Ke.width,Ke.height)}for(let Ke=0;Ke<6;Ke++)if(G){it?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,j[Ke].width,j[Ke].height,Pe,Le,j[Ke].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,j[Ke].width,j[Ke].height,0,Pe,Le,j[Ke].data);for(let Ut=0;Ut<yt.length;Ut++){let Si=yt[Ut].image[Ke].image;it?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut+1,0,0,Si.width,Si.height,Pe,Le,Si.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut+1,He,Si.width,Si.height,0,Pe,Le,Si.data)}}else{it?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,Pe,Le,j[Ke]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,Pe,Le,j[Ke]);for(let Ut=0;Ut<yt.length;Ut++){let en=yt[Ut];it?Oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut+1,0,0,Pe,Le,en.image[Ke]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Ut+1,He,Pe,Le,en.image[Ke])}}}A(L)&&L.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Ie.__version=pe.version,L.onUpdate&&L.onUpdate(L)}P.__version=L.version}function We(P,L,J,Ee,pe,Ie){let ze=r.convert(J.format,J.colorSpace),Me=r.convert(J.type),ve=I(J.internalFormat,ze,Me,J.normalized,J.colorSpace),Ne=n.get(L),G=n.get(J);if(G.__renderTarget=L,!Ne.__hasExternalTextures){let j=Math.max(1,L.width>>Ie),ie=Math.max(1,L.height>>Ie);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ie,ve,j,ie,L.depth,0,ze,Me,null):t.texImage2D(pe,Ie,ve,j,ie,0,ze,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ae(L)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,pe,G.__webglTexture,0,de(L)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,pe,G.__webglTexture,Ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(P,L,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),L.depthBuffer){let Ee=L.depthTexture,pe=Ee&&Ee.isDepthTexture?Ee.type:null,Ie=x(L.stencilBuffer,pe),ze=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ae(L)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de(L),Ie,L.width,L.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,de(L),Ie,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,P)}else{let Ee=L.textures;for(let pe=0;pe<Ee.length;pe++){let Ie=Ee[pe],ze=r.convert(Ie.format,Ie.colorSpace),Me=r.convert(Ie.type),ve=I(Ie.internalFormat,ze,Me,Ie.normalized,Ie.colorSpace);ae(L)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de(L),ve,L.width,L.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,de(L),ve,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,ve,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(P,L,J){let Ee=L.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=n.get(L.depthTexture);pe.__renderTarget=L;let Ie=Ee?L.depthTexture.image[0]:L.depthTexture.image;(!pe.__webglTexture||Ie.width!==L.width||Ie.height!==L.height)&&(Ie.width=L.width,Ie.height=L.height,L.depthTexture.needsUpdate=!0),Ee?ne(L.depthTexture,0):Q(L.depthTexture,0);let ze=pe.__webglTexture,Me=de(L),ve=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Ne=L.depthTexture.format===ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(L.depthTexture.format===Qi)ae(L)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,ve,ze,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,ve,ze,0);else if(L.depthTexture.format===ls)ae(L)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,ve,ze,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,ve,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){let L=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==P.depthTexture){let Ee=P.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),Ee){let pe=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,Ee.removeEventListener("dispose",pe)};Ee.addEventListener("dispose",pe),L.__depthDisposeCallback=pe}L.__boundDepthTexture=Ee}if(P.depthTexture&&!L.__autoAllocateDepthBuffer)if(J)for(let Ee=0;Ee<6;Ee++)ke(L.__webglFramebuffer[Ee],P,Ee);else P.texture.mipmaps.length>0?ke(L.__webglFramebuffer[0],P,0):ke(L.__webglFramebuffer,P,0);else if(J){L.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[Ee]),L.__webglDepthbuffer[Ee]===void 0)L.__webglDepthbuffer[Ee]=s.createRenderbuffer(),we(L.__webglDepthbuffer[Ee],P,!1);else{let pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=L.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ie)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=s.createRenderbuffer(),we(L.__webglDepthbuffer,P,!1);else{let pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=L.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(P,L,J){let Ee=n.get(P);L!==void 0&&We(Ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&se(P)}function ce(P){let L=P.texture,J=n.get(P),Ee=n.get(L);P.addEventListener("dispose",D),U(P);let pe=P.textures,Ie=P.isWebGLCubeRenderTarget===!0,ze=pe.length>1;if(ze||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=L.version,o.memory.textures++),Ie){J.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(L.mipmaps.length>0){J.__webglFramebuffer[Me]=[];for(let ve=0;ve<L.mipmaps.length;ve++)J.__webglFramebuffer[Me][ve]=s.createFramebuffer()}else J.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(L.mipmaps.length>0){J.__webglFramebuffer=[];for(let Me=0;Me<L.mipmaps.length;Me++)J.__webglFramebuffer[Me]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Me=0,ve=pe.length;Me<ve;Me++){let Ne=n.get(pe[Me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ae(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Me=0;Me<pe.length;Me++){let ve=pe[Me];J.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);let Ne=r.convert(ve.format,ve.colorSpace),G=r.convert(ve.type),j=I(ve.internalFormat,Ne,G,ve.normalized,ve.colorSpace,P.isXRRenderTarget===!0),ie=de(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,j,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,J.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),we(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,L);for(let Me=0;Me<6;Me++)if(L.mipmaps.length>0)for(let ve=0;ve<L.mipmaps.length;ve++)We(J.__webglFramebuffer[Me][ve],P,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ve);else We(J.__webglFramebuffer[Me],P,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);A(L)?b(s.TEXTURE_CUBE_MAP):L.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}else if(ze){for(let Me=0,ve=pe.length;Me<ve;Me++){let Ne=pe[Me],G=n.get(Ne),j=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,G.__webglTexture),Xe(j,Ne),We(J.__webglFramebuffer,P,Ne,s.COLOR_ATTACHMENT0+Me,j,0),A(Ne)&&b(j)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ee.__webglTexture),Xe(Me,L),L.mipmaps.length>0)for(let ve=0;ve<L.mipmaps.length;ve++)We(J.__webglFramebuffer[ve],P,L,s.COLOR_ATTACHMENT0,Me,ve);else We(J.__webglFramebuffer,P,L,s.COLOR_ATTACHMENT0,Me,0);A(L)?b(Me):L.mipmaps.length>0&&s.texParameteri(Me,s.TEXTURE_MAX_LEVEL,L.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&se(P)}function H(P){let L=P.textures;for(let J=0,Ee=L.length;J<Ee;J++){let pe=L[J];if(A(pe)&&pe.mipmapsAutoUpdate===!0){let Ie=C(P),ze=n.get(pe).__webglTexture;t.bindTexture(Ie,ze),b(Ie),t.unbindTexture()}}}let me=[];function re(P){if(P.samples>0){if(ae(P)===!1){let L=P.textures,J=P.width,Ee=P.height,pe=s.COLOR_BUFFER_BIT,Ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(P),Me=L.length>1;if(Me)for(let Ne=0;Ne<L.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ne=0;Ne<L.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let G=n.get(L[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,G,0)}s.blitFramebuffer(0,0,J,Ee,0,0,J,Ee,pe,s.NEAREST),c===!0&&(me.length=0,me.push(s.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&me.push(Ie),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Ne=0;Ne<L.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ne]);let G=n.get(L[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,G,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let L=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])}}}function de(P){return Math.min(i.maxSamples,P.samples)}function ae(P){let L=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Re(P){let L=o.render.frame;h.get(P)!==L&&(h.set(P,L),P.update())}function Te(P,L){let J=P.colorSpace,Ee=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==On&&J!==cs&&(Rt.getTransfer(J)===Ht?(Ee!==Wn||pe!==Yn)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",J)),L}function Be(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=R,this.getTextureUnits=T,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=ye,this.setTexture3D=oe,this.setTextureCube=ne,this.rebindTextures=Z,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ae,this.dispose=X}function Yb(s,e){function t(n,i=cs){let r,o=Rt.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===Ac)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===tf)return s.BYTE;if(n===nf)return s.SHORT;if(n===So)return s.UNSIGNED_SHORT;if(n===Tc)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Mi)return s.HALF_FLOAT;if(n===of)return s.ALPHA;if(n===af)return s.RGB;if(n===Wn)return s.RGBA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===Cc)return s.RED;if(n===Aa)return s.RED_INTEGER;if(n===Rs)return s.RG;if(n===Ic)return s.RG_INTEGER;if(n===Pc)return s.RGBA_INTEGER;if(n===Ra||n===Ca||n===Ia||n===Pa)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Dc||n===Nc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Oc||n===Fc||n===kc||n===Bc||n===La||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Oc)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return r.COMPRESSED_R11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===La)return r.COMPRESSED_RG11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===Zc||n===Jc||n===$c||n===jc||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nh)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===oh||n===Da||n===ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
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

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sn({vertexShader:Kb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uf=class extends pi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding!="undefined",p=new zf,m={},M=t.getContextAttributes(),A=null,b=null,C=[],I=[],x=new pt,E=null,U=null,S=new tn;S.viewport=new Wt;let F=new tn;F.viewport=new Wt;let D=[S,F],k=new vc,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=C[V];return Q===void 0&&(Q=new uo,C[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=C[V];return Q===void 0&&(Q=new uo,C[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=C[V];return Q===void 0&&(Q=new uo,C[V]=Q),Q.getHandSpace()};function W(V){let Q=I.indexOf(V.inputSource);if(Q===-1)return;let ye=C[Q];ye!==void 0&&(ye.update(V.inputSource,V.frame,l||o),ye.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",_);for(let V=0;V<C.length;V++){let Q=I[V];Q!==null&&(I[V]=null,C[V].disconnect(Q))}O=null,X=null,p.reset();for(let V in m)delete m[V];if(e.setRenderTarget(A),d=null,f=null,u=null,i=null,b=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),U!==null){let V=U.camera;V.fov=U.fov,V.zoom=U.zoom,V.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",B),i.addEventListener("inputsourceschange",_),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,oe=null,ne=null;M.depth&&(ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?ls:Qi,oe=M.stencil?Tr:si);let Se={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $n(f.textureWidth,f.textureHeight,{format:Wn,type:Yn,depthTexture:new ts(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $n(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function _(V){for(let Q=0;Q<V.removed.length;Q++){let ye=V.removed[Q],oe=I.indexOf(ye);oe>=0&&(I[oe]=null,C[oe].disconnect(ye))}for(let Q=0;Q<V.added.length;Q++){let ye=V.added[Q],oe=I.indexOf(ye);if(oe===-1){for(let Se=0;Se<C.length;Se++)if(Se>=I.length){I.push(ye),oe=Se;break}else if(I[Se]===null){I[Se]=ye,oe=Se;break}if(oe===-1)break}let ne=C[oe];ne&&ne.connect(ye)}}function v(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let Q=V.near,ye=V.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),k.near=F.near=S.near=Q,k.far=F.far=S.far=ye,(O!==k.near||X!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,X=k.far),k.layers.mask=V.layers.mask|6,S.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let oe=V.parent,ne=k.cameras;v(k,oe);for(let Se=0;Se<ne.length;Se++)v(ne[Se],oe);k.projectionMatrix.copy(S.projectionMatrix),k.projectionMatrixInverse.copy(S.projectionMatrixInverse),U===null&&V.isPerspectiveCamera&&(U={camera:V,fov:V.fov,zoom:V.zoom}),R(V,k,oe)};function R(V,Q,ye){ye===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ye.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=or*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(V){return m[V]};let T=null;function z(V,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let oe=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,oe=!0);for(let ue=0;ue<ye.length;ue++){let Xe=ye[ue],le=null;if(d!==null)le=d.getViewport(Xe);else{let Ue=u.getViewSubImage(f,Xe);le=Ue.viewport,ue===0&&(e.setRenderTargetTextures(b,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(b))}let ee=D[ue];ee===void 0&&(ee=new tn,ee.layers.enable(ue),ee.viewport=new Wt,D[ue]=ee),ee.matrix.fromArray(Xe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Xe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(le.x,le.y,le.width,le.height),ue===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),oe===!0&&k.cameras.push(ee)}let ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ue=u.getDepthInformation(ye[0]);ue&&ue.isValid&&ue.texture&&p.init(ue,i.renderState)}if(ne&&ne.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ue=0;ue<ye.length;ue++){let Xe=ye[ue].camera;if(Xe){let le=m[Xe];le||(le=new ga,m[Xe]=le);let ee=u.getCameraImage(Xe);le.sourceTexture=ee}}}}for(let ye=0;ye<C.length;ye++){let oe=I[ye],ne=C[ye];oe!==null&&ne!==void 0&&ne.update(oe,Q,l||o)}T&&T(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let q=new p0;q.setAnimationLoop(z),this.setAnimationLoop=function(V){T=V},this.dispose=function(){}}},Jb=new ut,w0=new St;w0.set(-1,0,0,0,1,0,0,0,1);function $b(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,b=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(w0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jb(s,e,t,n){let i={},r={};function o(M,A){let b=A.program;n.uniformBlockBinding(M,b,i[M.id])}function a(M,A){let b=i[M.id];b===void 0&&(g(M),b=c(M),i[M.id]=b,M.addEventListener("dispose",p));let C=A.program;n.updateUBOMapping(M,C);let I=e.render.frame;r[M.id]!==I&&(l(M),r[M.id]=I)}function c(M){let A=s.createBuffer(),b=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,b,C),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function l(M){let A=i[M.id],b=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let I=0,x=b.length;I<x;I++){let E=b[I];if(Array.isArray(E))for(let U=0,S=E.length;U<S;U++)h(E[U],I,U,C);else h(E,I,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,A,b,C){if(f(M,A,b,C)===!0){let I=M.__offset,x=M.value;if(Array.isArray(x)){let E=0;for(let U=0;U<x.length;U++){let S=x[U],F=y(S,!0);u(S,M.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,M.__data)}}function u(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function f(M,A,b,C){let I=M.value,x=A+"_"+b;if(Array.isArray(I)){C[x]===void 0&&(C[x]=[]);let E=C[x],U=!1;for(let S=0;S<I.length;S++)d(I[S],E,S)===!0&&(U=!0);return U}return d(I,C,x)}function d(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let C=A[b];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(M){let A=M.uniforms,b=0,C=16;for(let x=0,E=A.length;x<E;x++){let U=Array.isArray(A[x])?A[x]:[A[x]];for(let S=0,F=U.length;S<F;S++){let D=U[S],k=Array.isArray(D.value)?D.value:[D.value],O=Array.isArray(A[x])||Array.isArray(D.value),X=b;for(let B=0,_=k.length;B<_;B++){let v=k[B],R=y(v,O),T=b%C,z=T%R.boundary,q=T+z;b+=z,q!==0&&C-q<R.storage&&(b+=C-q),B===0&&(X=b),b+=R.storage}let W=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new W((b-X)/Float32Array.BYTES_PER_ELEMENT),D.__offset=X}}let I=b%C;return I>0&&(b+=C-I),M.__size=b,M.__cache={},this}function y(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let A=M.target;A.removeEventListener("dispose",p),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:m}}var Qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function eS(){return zi===null&&(zi=new ji(Qb,16,16,Rs,Mi),zi.name="DFG_LUT",zi.minFilter=dn,zi.magFilter=dn,zi.wrapS=Vn,zi.wrapT=Vn,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var To=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Pc,Ic,Aa]),m=new Set([Yn,si,So,Tr,Ac,Rc]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},C=null,I=null,x=[],E=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,F=!1,D=null,k=null,O=null,X=null;this._outputColorSpace=Bt;let W=0,B=0,_=null,v=-1,R=null,T=new Wt,z=new Wt,q=null,V=new Ve(0),Q=0,ye=t.width,oe=t.height,ne=1,Se=null,Fe=null,ue=new Wt(0,0,ye,oe),Xe=new Wt(0,0,ye,oe),le=!1,ee=new mi,Ue=new ua,Ze=!1,Ce=!1,We=new ut,we=new Y,ke=new Wt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ce(){return _===null?ne:1}let H=n;function me(N,te){return t.getContext(N,te)}let re,de,ae,Re,Te,Be,P,L,J,Ee,pe,Ie,ze,Me,ve,Ne,G,j,ie,Pe,Le,He,it;try{let N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),H===null){let te="webgl2";if(H=me(te,N),H===null)throw me(te)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(N){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),bt("WebGLRenderer: "+N.message),N}function st(){re=new uM(H),re.init(),Le=new Yb(H,re),de=new eM(H,re,e,Le),ae=new Xb(H,re),de.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),k=H.createFramebuffer(),O=H.createFramebuffer(),X=H.createFramebuffer(),Re=new pM(H),Te=new Pb,Be=new qb(H,re,ae,Te,de,Le,Re),P=new hM(S),L=new gv(H),He=new j_(H,L),J=new fM(H,L,Re,He),Ee=new gM(H,J,L,He,Re),j=new mM(H,de,Be),ve=new tM(Te),pe=new Ib(S,P,re,de,He,ve),Ie=new $b(S,Te),ze=new Db,Me=new kb(re),G=new $_(S,P,ae,Ee,g,c),Ne=new Wb(S,Ee,de),it=new jb(H,Re,de,ae),ie=new Q_(H,re,Re),Pe=new dM(H,re,Re),Re.programs=pe.programs,S.capabilities=de,S.extensions=re,S.properties=Te,S.renderLists=ze,S.shadowMap=Ne,S.state=ae,S.info=Re}y!==Yn&&(U=new vM(y,t.width,t.height,a,i,r));let Oe=new Uf(S,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let N=re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(N){N!==void 0&&(ne=N,this.setSize(ye,oe,!1))},this.getSize=function(N){return N.set(ye,oe)},this.setSize=function(N,te,ge=!0){if(Oe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=N,oe=te,t.width=Math.floor(N*ne),t.height=Math.floor(te*ne),ge===!0&&(t.style.width=N+"px",t.style.height=te+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,te)},this.getDrawingBufferSize=function(N){return N.set(ye*ne,oe*ne).floor()},this.setDrawingBufferSize=function(N,te,ge){ye=N,oe=te,ne=ge,t.width=Math.floor(N*ge),t.height=Math.floor(te*ge),this.setViewport(0,0,N,te)},this.setEffects=function(N){if(y===Yn){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let te=0;te<N.length;te++)if(N[te].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(T)},this.getViewport=function(N){return N.copy(ue)},this.setViewport=function(N,te,ge,he){N.isVector4?ue.set(N.x,N.y,N.z,N.w):ue.set(N,te,ge,he),ae.viewport(T.copy(ue).multiplyScalar(ce()).round())},this.getScissor=function(N){return N.copy(Xe)},this.setScissor=function(N,te,ge,he){N.isVector4?Xe.set(N.x,N.y,N.z,N.w):Xe.set(N,te,ge,he),ae.scissor(z.copy(Xe).multiplyScalar(ce()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(N){ae.setScissorTest(le=N)},this.setOpaqueSort=function(N){Se=N},this.setTransparentSort=function(N){Fe=N},this.getClearColor=function(N){return N.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(N=!0,te=!0,ge=!0){let he=0;if(N){let fe=!1;if(_!==null){let Ge=_.texture.format;fe=p.has(Ge)}if(fe){let Ge=_.texture.type,Qe=m.has(Ge),qe=G.getClearColor(),Je=G.getClearAlpha(),et=qe.r,vt=qe.g,Ct=qe.b;Qe?(M[0]=et,M[1]=vt,M[2]=Ct,M[3]=Je,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=et,A[1]=vt,A[2]=Ct,A[3]=Je,H.clearBufferiv(H.COLOR,0,A))}else he|=H.COLOR_BUFFER_BIT}te&&(he|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(he|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&H.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),D=N},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),G.dispose(),ze.dispose(),Me.dispose(),Be.dispose(),Te.dispose(),P.dispose(),Ee.dispose(),J.dispose(),He.dispose(),it.dispose(),pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Os),Oe.removeEventListener("sessionend",Fs),Bi.stop()};function rt(N){N.preventDefault(),ra("WebGLRenderer: Context Lost."),F=!0}function yt(){ra("WebGLRenderer: Context Restored."),F=!1;let N=Re.autoReset,te=Ne.enabled,ge=Ne.autoUpdate,he=Ne.needsUpdate,fe=Ne.type;st(),Re.autoReset=N,Ne.enabled=te,Ne.autoUpdate=ge,Ne.needsUpdate=he,Ne.type=fe}function Ke(N){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ut(N){let te=N.target;te.removeEventListener("dispose",Ut),en(te)}function en(N){Si(N),Te.remove(N)}function Si(N){let te=Te.get(N).programs;te!==void 0&&(te.forEach(function(ge){pe.releaseProgram(ge)}),N.isShaderMaterial&&pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,te,ge,he,fe,Ge){te===null&&(te=se);let Qe=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,qe=Nr(N,te,ge,he,fe);ae.setMaterial(he,Qe);let Je=ge.index,et=1;if(he.wireframe===!0){if(Je=J.getWireframeAttribute(ge),Je===void 0)return;et=2}let vt=ge.drawRange,Ct=ge.attributes.position,ot=vt.start*et,It=(vt.start+vt.count)*et;Ge!==null&&(ot=Math.max(ot,Ge.start*et),It=Math.min(It,(Ge.start+Ge.count)*et)),Je!==null?(ot=Math.max(ot,0),It=Math.min(It,Je.count)):Ct!=null&&(ot=Math.max(ot,0),It=Math.min(It,Ct.count));let jt=It-ot;if(jt<0||jt===1/0)return;He.setup(fe,he,qe,ge,Je);let Gt,Ft=ie;if(Je!==null&&(Gt=L.get(Je),Ft=Pe,Ft.setIndex(Gt)),fe.isMesh)he.wireframe===!0?(ae.setLineWidth(he.wireframeLinewidth*ce()),Ft.setMode(H.LINES)):Ft.setMode(H.TRIANGLES);else if(fe.isLine){let an=he.linewidth;an===void 0&&(an=1),ae.setLineWidth(an*ce()),fe.isLineSegments?Ft.setMode(H.LINES):fe.isLineLoop?Ft.setMode(H.LINE_LOOP):Ft.setMode(H.LINE_STRIP)}else fe.isPoints?Ft.setMode(H.POINTS):fe.isSprite&&Ft.setMode(H.TRIANGLES);if(fe.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ft.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{let an=fe._multiDrawStarts,at=fe._multiDrawCounts,yn=fe._multiDrawCount,Ot=Je?L.get(Je).bytesPerElement:1,Gi=Te.get(he).currentProgram.getUniforms();for(let kt=0;kt<yn;kt++)Gi.setValue(H,"_gl_DrawID",kt),Ft.render(an[kt]/Ot,at[kt])}else if(fe.isInstancedMesh)Ft.renderInstances(ot,jt,fe.count);else if(ge.isInstancedBufferGeometry){let an=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,at=Math.min(ge.instanceCount,an);Ft.renderInstances(ot,jt,at)}else Ft.render(ot,jt)};function Us(N,te,ge,he){D!==null&&N.isNodeMaterial&&D.setObject(he,N),Ze===!0&&ve.setState(N,ge,!1),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,ds(N,te,he),N.side=Li,N.needsUpdate=!0,ds(N,te,he),N.side=rn):ds(N,te,he)}this.compile=function(N,te,ge=null){ge===null&&(ge=N),D!==null&&D.renderStart(N,te,ge),I=Me.get(ge),I.init(te),E.push(I),ge.traverseVisible(function(fe){fe.isLight&&fe.layers.test(te.layers)&&(I.pushLight(fe),fe.castShadow&&I.pushShadow(fe))}),N!==ge&&N.traverseVisible(function(fe){fe.isLight&&fe.layers.test(te.layers)&&(I.pushLight(fe),fe.castShadow&&I.pushShadow(fe))}),I.setupLights(),D!==null&&D.updateLights(I.state.lightsArray),Ce=this.localClippingEnabled,Ze=ve.init(this.clippingPlanes,Ce),Ze===!0&&ve.setGlobalState(this.clippingPlanes,te),D!==null&&Ne.render(I.state.shadowsArray,ge,te);let he=new Set;return N.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;let Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){let qe=Ge[Qe];Us(qe,ge,te,fe),he.add(qe)}else Us(Ge,ge,te,fe),he.add(Ge)}),I=E.pop(),D!==null&&D.renderEnd(),he},this.compileAsync=function(N,te,ge=null){let he=this.compile(N,te,ge);return new Promise(fe=>{function Ge(){if(he.forEach(function(Qe){let Je=Te.get(Qe).currentProgram;(Je===void 0||Je.isReady())&&he.delete(Qe)}),he.size===0){fe(N);return}setTimeout(Ge,10)}re.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let us=null;function Lr(N){us&&us(N)}function Os(){Bi.stop()}function Fs(){Bi.start()}let Bi=new p0;Bi.setAnimationLoop(Lr),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(N){us=N,Oe.setAnimationLoop(N),N===null?Bi.stop():Bi.start()},Oe.addEventListener("sessionstart",Os),Oe.addEventListener("sessionend",Fs),this.render=function(N,te){if(te!==void 0&&te.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D!==null&&D.renderStart(N,te);let ge=Oe.enabled===!0&&Oe.isPresenting===!0,he=U!==null&&(_===null||ge)&&U.begin(S,_);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(te),te=Oe.getCamera()),N.isScene===!0&&N.onBeforeRender(S,N,te,_),I=Me.get(N,E.length),I.init(te),I.state.textureUnits=Be.getTextureUnits(),E.push(I),We.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),te.isArrayCamera?Ue.setFromArrayCamera(te):ee.setFromProjectionMatrix(We,ei,te.reversedDepth),Ce=this.localClippingEnabled,Ze=ve.init(this.clippingPlanes,Ce),C=ze.get(N,x.length),C.init(),x.push(C),this.info.render.frame++,Oe.enabled===!0&&Oe.isPresenting===!0){let Qe=S.xr.getDepthSensingMesh();Qe!==null&&ks(Qe,te,-1/0,S.sortObjects)}ks(N,te,0,S.sortObjects),C.finish(),D!==null&&D.updateLights(I.state.lightsArray),S.sortObjects===!0&&C.sort(Se,Fe),Z=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Z&&G.addToRenderList(C,N),this.info.autoReset===!0&&this.info.reset(),Ze===!0&&ve.beginShadows();let fe=I.state.shadowsArray;if(Ne.render(fe,N,te),Ze===!0&&ve.endShadows(),(he&&U.hasRenderPass())===!1){let Qe=C.opaque,qe=C.transmissive;if(I.setupLights(),te.isArrayCamera){let Je=te.cameras;if(qe.length>0)for(let et=0,vt=Je.length;et<vt;et++){let Ct=Je[et];fs(Qe,qe,N,Ct)}Z&&G.render(N);for(let et=0,vt=Je.length;et<vt;et++){let Ct=Je[et];sl(C,N,Ct,Ct.viewport)}}else qe.length>0&&fs(Qe,qe,N,te),Z&&G.render(N),sl(C,N,te)}_!==null&&B===0&&(Be.updateMultisampleRenderTarget(_),Be.updateRenderTargetMipmap(_)),he&&U.end(S),N.isScene===!0&&N.onAfterRender(S,N,te),He.resetDefaultState(),v=-1,R=null,E.pop(),E.length>0?(I=E[E.length-1],Be.setTextureUnits(I.state.textureUnits),Ze===!0&&ve.setGlobalState(S.clippingPlanes,I.state.camera)):I=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,D!==null&&D.renderEnd()};function ks(N,te,ge,he){if(N.visible===!1)return;if(N.layers.test(te.layers)){if(N.isGroup)ge=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(te);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){let Qe=te.isArrayCamera?Ue:ee;if(!N.frustumCulled||N.intersectsFrustum(Qe)){he&&ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);let qe=Ee.update(N),Je=N.material;Je.visible&&C.push(N,qe,Je,ge,ke.z,null,te)}}else if(N.isMesh||N.isLine||N.isPoints){let Qe=te.isArrayCamera?Ue:ee;if(!N.frustumCulled||N.intersectsFrustum(Qe)){let qe=Ee.update(N),Je=N.material;if(he&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ke.copy(N.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ke.copy(qe.boundingSphere.center)),ke.applyMatrix4(N.matrixWorld).applyMatrix4(We)),Array.isArray(Je)){let et=qe.groups;for(let vt=0,Ct=et.length;vt<Ct;vt++){let ot=et[vt],It=Je[ot.materialIndex];It&&It.visible&&C.push(N,qe,It,ge,ke.z,ot,te)}}else Je.visible&&C.push(N,qe,Je,ge,ke.z,null,te)}}}let Ge=N.children;for(let Qe=0,qe=Ge.length;Qe<qe;Qe++)ks(Ge[Qe],te,ge,he)}function sl(N,te,ge,he){let{opaque:fe,transmissive:Ge,transparent:Qe}=N;I.setupLightsView(ge),Ze===!0&&ve.setGlobalState(S.clippingPlanes,ge),he&&ae.viewport(T.copy(he)),fe.length>0&&Bs(fe,te,ge),Ge.length>0&&Bs(Ge,te,ge),Qe.length>0&&Bs(Qe,te,ge),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function fs(N,te,ge,he){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[he.id]===void 0){let ot=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[he.id]=new $n(1,1,{generateMipmaps:!0,type:ot?Mi:Yn,minFilter:ii,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let Ge=I.state.transmissionRenderTarget[he.id],Qe=he.viewport||T;Ge.setSize(Qe.z*S.transmissionResolutionScale,Qe.w*S.transmissionResolutionScale);let qe=S.getRenderTarget(),Je=S.getActiveCubeFace(),et=S.getActiveMipmapLevel();S.setRenderTarget(Ge),S.getClearColor(V),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),Z&&G.render(ge);let vt=S.toneMapping;S.toneMapping=Di;let Ct=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),I.setupLightsView(he),Ze===!0&&ve.setGlobalState(S.clippingPlanes,he),Bs(N,ge,he),Be.updateMultisampleRenderTarget(Ge),Be.updateRenderTargetMipmap(Ge),re.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let It=0,jt=te.length;It<jt;It++){let Gt=te[It],{object:Ft,geometry:an,material:at,group:yn}=Gt;if(at.side===rn&&Ft.layers.test(he.layers)){let Ot=at.side;at.side=gn,at.needsUpdate=!0,wi(Ft,ge,he,an,at,yn),at.side=Ot,at.needsUpdate=!0,ot=!0}}ot===!0&&(Be.updateMultisampleRenderTarget(Ge),Be.updateRenderTargetMipmap(Ge))}S.setRenderTarget(qe,Je,et),S.setClearColor(V,Q),Ct!==void 0&&(he.viewport=Ct),S.toneMapping=vt}function Bs(N,te,ge){let he=te.isScene===!0?te.overrideMaterial:null;for(let fe=0,Ge=N.length;fe<Ge;fe++){let Qe=N[fe],{object:qe,geometry:Je,group:et}=Qe,vt=Qe.material;vt.allowOverride===!0&&he!==null&&(vt=he),qe.layers.test(ge.layers)&&wi(qe,te,ge,Je,vt,et)}}function wi(N,te,ge,he,fe,Ge){D!==null&&fe.isNodeMaterial&&D.setObject(N,fe),N.onBeforeRender(S,te,ge,he,fe,Ge),N.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),fe.onBeforeRender(S,te,ge,he,N,Ge),fe.transparent===!0&&fe.side===rn&&fe.forceSinglePass===!1?(fe.side=gn,fe.needsUpdate=!0,S.renderBufferDirect(ge,te,he,fe,N,Ge),fe.side=Li,fe.needsUpdate=!0,S.renderBufferDirect(ge,te,he,fe,N,Ge),fe.side=rn):S.renderBufferDirect(ge,te,he,fe,N,Ge),N.onAfterRender(S,te,ge,he,fe,Ge)}function rl(N){let te=0;for(let ge of N)ge.texture!==null&&te++;return te}function ds(N,te,ge){te.isScene!==!0&&(te=se);let he=Te.get(N),fe=I.state.lights,Ge=I.state.shadowsArray,Qe=fe.state.version,qe=pe.getParameters(N,fe.state,Ge,te,ge,I.state.lightProbeGridArray),Je=pe.getProgramCacheKey(qe),et=he.programs;he.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?te.environment:null,he.fog=te.fog;let vt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;he.envMap=P.get(N.envMap||he.environment,vt),he.envMapRotation=he.environment!==null&&N.envMap===null?te.environmentRotation:N.envMapRotation,et===void 0&&(N.addEventListener("dispose",Ut),et=new Map,he.programs=et,he.programVariants=new Map);let Ct=et.get(Je);if(Ct!==void 0){if(he.currentProgram===Ct&&he.lightsStateVersion===Qe)return ol(N,qe),Ct}else qe.uniforms=pe.getUniforms(N),D!==null&&N.isNodeMaterial&&D.build(N,ge,qe),N.onBeforeCompile(qe,S),Ct=pe.acquireProgram(qe,Je),et.set(Je,Ct),he.uniforms=qe.uniforms;let ot=he.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ot.clippingPlanes=ve.uniform),ol(N,qe),he.needsLights=Hi(N),he.lightsStateVersion=Qe,he.needsLights&&(ot.ambientLightColor.value=fe.state.ambient,ot.lightProbe.value=fe.state.probe,ot.sunLights.value=fe.state.sun,ot.sunLightShadows.value=fe.state.sunShadow,ot.directionalLights.value=fe.state.directional,ot.directionalLightShadows.value=fe.state.directionalShadow,ot.spotLights.value=fe.state.spot,ot.spotLightShadows.value=fe.state.spotShadow,ot.rectAreaLights.value=fe.state.rectArea,ot.ltc_1.value=fe.state.rectAreaLTC1,ot.ltc_2.value=fe.state.rectAreaLTC2,ot.pointLights.value=fe.state.point,ot.pointLightShadows.value=fe.state.pointShadow,ot.hemisphereLights.value=fe.state.hemi,ot.sunShadowMatrix.value=fe.state.sunShadowMatrix,ot.sunShadowCascade.value=fe.state.sunShadowCascade,ot.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,ot.spotLightMatrix.value=fe.state.spotLightMatrix,ot.spotLightMap.value=fe.state.spotLightMap,ot.pointShadowMatrix.value=fe.state.pointShadowMatrix),he.numLightProbeGrids=rl(I.state.lightProbeGridArray),he.currentProgram=Ct,he.uniformsList=null,Ct}function Dr(N,te,ge,he,fe){let Ge=Te.get(N),Qe=Ge.currentProgram.id+","+he+","+fe,qe=Ge.programVariants.get(Qe);return qe===void 0?(qe=ds(N,te,ge),Ge.programVariants.set(Qe,qe)):(Ge.currentProgram=qe,Ge.uniformsList=null,Ge.outputColorSpace=he,Ge.toneMapping=fe),qe}function ps(N){if(N.uniformsList===null){let te=N.currentProgram.getUniforms();N.uniformsList=Eo.seqWithValue(te.seq,N.uniforms)}return N.uniformsList}function ol(N,te){let ge=Te.get(N);ge.outputColorSpace=te.outputColorSpace,ge.batching=te.batching,ge.batchingColor=te.batchingColor,ge.instancing=te.instancing,ge.instancingColor=te.instancingColor,ge.instancingMorph=te.instancingMorph,ge.skinning=te.skinning,ge.morphTargets=te.morphTargets,ge.morphNormals=te.morphNormals,ge.morphColors=te.morphColors,ge.morphTargetsCount=te.morphTargetsCount,ge.numClippingPlanes=te.numClippingPlanes,ge.numIntersection=te.numClipIntersection,ge.vertexAlphas=te.vertexAlphas,ge.vertexTangents=te.vertexTangents,ge.toneMapping=te.toneMapping}function Nr(N,te,ge,he,fe){te.isScene!==!0&&(te=se),Be.resetTextureUnits();let Ge=te.fog,Qe=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?te.environment:null,qe=_===null?S.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Rt.workingColorSpace,Je=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,et=P.get(he.envMap||Qe,Je),vt=he.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,Ct=!!ge.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),ot=!!ge.morphAttributes.position,It=!!ge.morphAttributes.normal,jt=!!ge.morphAttributes.color,Gt=Di;he.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Gt=S.toneMapping);let Ft=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,an=Ft!==void 0?Ft.length:0,at=Te.get(he),yn=I.state.lights;if(Ze===!0&&(Ce===!0||N!==R)){let qt=N===R&&he.id===v;ve.setState(he,N,qt)}let Ot=!1,Gi=!1;he.version===at.__version?at.needsLights&&at.lightsStateVersion!==yn.state.version||fe.isBatchedMesh&&at.batching===!1||!fe.isBatchedMesh&&at.batching===!0||fe.isBatchedMesh&&at.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&at.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&at.instancing===!1||!fe.isInstancedMesh&&at.instancing===!0||fe.isSkinnedMesh&&at.skinning===!1||!fe.isSkinnedMesh&&at.skinning===!0||fe.isInstancedMesh&&at.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&at.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&at.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&at.instancingMorph===!1&&fe.morphTexture!==null||at.envMap!==et||he.fog===!0&&at.fog!==Ge||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==ve.numPlanes||at.numIntersection!==ve.numIntersection)||at.vertexAlphas!==vt||at.vertexTangents!==Ct||at.morphTargets!==ot||at.morphNormals!==It||at.morphColors!==jt||at.morphTargetsCount!==an||at.numLightProbeGrids!==rl(I.state.lightProbeGridArray)?Ot=!0:(at.outputColorSpace!==qe||at.toneMapping!==Gt)&&(Gi=!0):(Ot=!0,at.__version=he.version);let kt=at.currentProgram;(Ot===!0||Gi===!0)&&(kt=Gi===!0?Dr(he,te,fe,qe,Gt):ds(he,te,fe),D&&he.isNodeMaterial&&D.onUpdateProgram(he,kt,at));let li=!1,ci=!1,Ei=!1,Nt=kt.getUniforms(),Kt=at.uniforms;if(ae.useProgram(kt.program)&&(li=!0,ci=!0,Ei=!0),he.id!==v&&(v=he.id,ci=!0),li||R!==N){ae.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Nt.setValue(H,"projectionMatrix",N.projectionMatrix),Nt.setValue(H,"viewMatrix",N.matrixWorldInverse);let ln=Nt.map.cameraPosition;ln!==void 0&&ln.setValue(H,we.setFromMatrixPosition(N.matrixWorld)),de.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,ci=!0,Ei=!0)}if(at.needsLights&&(yn.state.sunShadowMap.length>0&&Nt.setValue(H,"sunShadowMap",yn.state.sunShadowMap,Be),yn.state.directionalShadowMap.length>0&&Nt.setValue(H,"directionalShadowMap",yn.state.directionalShadowMap,Be),yn.state.spotShadowMap.length>0&&Nt.setValue(H,"spotShadowMap",yn.state.spotShadowMap,Be),yn.state.pointShadowMap.length>0&&Nt.setValue(H,"pointShadowMap",yn.state.pointShadowMap,Be)),fe.isSkinnedMesh){Nt.setOptional(H,fe,"bindMatrix"),Nt.setOptional(H,fe,"bindMatrixInverse");let qt=fe.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(H,"boneTexture",qt.boneTexture,Be))}fe.isBatchedMesh&&(Nt.setOptional(H,fe,"batchingTexture"),Nt.setValue(H,"batchingTexture",fe._matricesTexture,Be),Nt.setOptional(H,fe,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",fe._indirectTexture,Be),Nt.setOptional(H,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",fe._colorsTexture,Be));let Dn=ge.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&j.update(fe,ge,kt),(ci||at.receiveShadow!==fe.receiveShadow)&&(at.receiveShadow=fe.receiveShadow,Nt.setValue(H,"receiveShadow",fe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&te.environment!==null&&(Kt.envMapIntensity.value=te.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=eS()),ci){if(Nt.setValue(H,"toneMappingExposure",S.toneMappingExposure),at.needsLights&&ms(Kt,Ei),Ge&&he.fog===!0&&Ie.refreshFogUniforms(Kt,Ge),Ie.refreshMaterialUniforms(Kt,he,ne,oe,I.state.transmissionRenderTarget[N.id]),at.needsLights&&at.numLightProbeGrids>0){let qt=b,ln=0;for(let hi of I.state.lightProbeGridArray)hi.texture!==null&&(qt.textures[ln]=hi.texture,qt.min[ln]=hi.boundingBox.min,qt.max[ln]=hi.boundingBox.max,qt.resolution[ln]=hi.resolution,ln++);for(let hi in qt)qt[hi].length=ln;Kt.probesSH.value=qt.textures,Kt.probesMin.value=qt.min,Kt.probesMax.value=qt.max,Kt.probesResolution.value=qt.resolution}Eo.upload(H,ps(at),Kt,Be)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Eo.upload(H,ps(at),Kt,Be),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Nt.setValue(H,"center",fe.center),Nt.setValue(H,"modelViewMatrix",fe.modelViewMatrix),Nt.setValue(H,"normalMatrix",fe.normalMatrix),Nt.setValue(H,"modelMatrix",fe.matrixWorld),he.uniformsGroups!==void 0){let qt=he.uniformsGroups;for(let ln=0,hi=qt.length;ln<hi;ln++){let al=qt[ln];it.update(al,kt),it.bind(al,kt)}}return kt}function ms(N,te){N.ambientLightColor.needsUpdate=te,N.lightProbe.needsUpdate=te,N.sunLights.needsUpdate=te,N.sunLightShadows.needsUpdate=te,N.directionalLights.needsUpdate=te,N.directionalLightShadows.needsUpdate=te,N.pointLights.needsUpdate=te,N.pointLightShadows.needsUpdate=te,N.spotLights.needsUpdate=te,N.spotLightShadows.needsUpdate=te,N.rectAreaLights.needsUpdate=te,N.hemisphereLights.needsUpdate=te}function Hi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(N,te,ge){let he=Te.get(N);he.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),Te.get(N.texture).__webglTexture=te,Te.get(N.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ge,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,te){let ge=Te.get(N);ge.__webglFramebuffer=te,ge.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(N,te=0,ge=0){_=N,W=te,B=ge;let he=null,fe=!1,Ge=!1;if(N){let qe=Te.get(N);if(qe.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(H.FRAMEBUFFER,qe.__webglFramebuffer),T.copy(N.viewport),z.copy(N.scissor),q=N.scissorTest,ae.viewport(T),ae.scissor(z),ae.setScissorTest(q),v=-1;return}else if(qe.__webglFramebuffer===void 0)Be.setupRenderTarget(N);else if(qe.__hasExternalTextures)Be.rebindTextures(N,Te.get(N.texture).__webglTexture,Te.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let vt=N.depthTexture;if(qe.__boundDepthTexture!==vt){if(vt!==null&&Te.has(vt)&&(N.width!==vt.image.width||N.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(N)}}let Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ge=!0);let et=Te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(et[te])?he=et[te][ge]:he=et[te],fe=!0):N.samples>0&&Be.useMultisampledRTT(N)===!1?he=Te.get(N).__webglMultisampledFramebuffer:Array.isArray(et)?he=et[ge]:he=et,T.copy(N.viewport),z.copy(N.scissor),q=N.scissorTest}else T.copy(ue).multiplyScalar(ne).floor(),z.copy(Xe).multiplyScalar(ne).floor(),q=le;if(ge!==0&&(he=k),ae.bindFramebuffer(H.FRAMEBUFFER,he)&&ae.drawBuffers(N,he),ae.viewport(T),ae.scissor(z),ae.setScissorTest(q),fe){let qe=Te.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+te,qe.__webglTexture,ge)}else if(Ge){let qe=te;for(let Je=0;Je<N.textures.length;Je++){let et=Te.get(N.textures[Je]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Je,et.__webglTexture,ge,qe)}}else if(N!==null&&ge!==0){let qe=Te.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qe.__webglTexture,ge)}v=-1};function Hs(N){let te=Te.get(N);return(te.__readFormat!==N.format||te.__readType!==N.type)&&(te.__readFormat=N.format,te.__readType=N.type,te.__formatReadable=de.textureFormatReadable(N.format),te.__typeReadable=de.textureTypeReadable(N.type)),te}this.readRenderTargetPixels=function(N,te,ge,he,fe,Ge,Qe,qe=0){if(!(N&&N.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qe!==void 0&&(Je=Je[Qe],Array.isArray(Je)&&(Je=Je[0])),Je){ae.bindFramebuffer(H.FRAMEBUFFER,Je);try{let et=N.textures[qe],vt=et.format,Ct=et.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qe);let ot=Hs(et);if(ot.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=N.width-he&&ge>=0&&ge<=N.height-fe&&H.readPixels(te,ge,he,fe,Le.convert(vt),Le.convert(Ct),Ge)}finally{let et=_!==null?Te.get(_).__webglFramebuffer:null;ae.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(N,te,ge,he,fe,Ge,Qe,qe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qe!==void 0&&(Je=Je[Qe],Array.isArray(Je)&&(Je=Je[0])),Je)if(te>=0&&te<=N.width-he&&ge>=0&&ge<=N.height-fe){ae.bindFramebuffer(H.FRAMEBUFFER,Je);let et=N.textures[qe],vt=et.format,Ct=et.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qe);let ot=Hs(et);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.bufferData(H.PIXEL_PACK_BUFFER,Ge.byteLength,H.STREAM_READ),H.readPixels(te,ge,he,fe,Le.convert(vt),Le.convert(Ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let jt=_!==null?Te.get(_).__webglFramebuffer:null;ae.bindFramebuffer(H.FRAMEBUFFER,jt);let Gt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Bm(H,Gt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(It),H.deleteSync(Gt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,te=null,ge=0){let he=Math.pow(2,-ge),fe=Math.floor(N.image.width*he),Ge=Math.floor(N.image.height*he),Qe=te!==null?te.x:0,qe=te!==null?te.y:0;Be.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,ge,0,0,Qe,qe,fe,Ge),ae.unbindTexture()},this.copyTextureToTexture=function(N,te,ge=null,he=null,fe=0,Ge=0){let Qe,qe,Je,et,vt,Ct,ot,It,jt,Gt=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(ge!==null)Qe=ge.max.x-ge.min.x,qe=ge.max.y-ge.min.y,Je=ge.isBox3?ge.max.z-ge.min.z:1,et=ge.min.x,vt=ge.min.y,Ct=ge.isBox3?ge.min.z:0;else{let Nt=Math.pow(2,-fe);Qe=Math.floor(Gt.width*Nt),qe=Math.floor(Gt.height*Nt),N.isDataArrayTexture?Je=Gt.depth:N.isData3DTexture?Je=Math.floor(Gt.depth*Nt):Je=1,et=0,vt=0,Ct=0}he!==null?(ot=he.x,It=he.y,jt=he.z):(ot=0,It=0,jt=0);let Ft=Le.convert(te.format),an=Le.convert(te.type),at;te.isData3DTexture?(Be.setTexture3D(te,0),at=H.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(Be.setTexture2DArray(te,0),at=H.TEXTURE_2D_ARRAY):(Be.setTexture2D(te,0),at=H.TEXTURE_2D),ae.activeTexture(H.TEXTURE0),ae.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),ae.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),ae.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment);let yn=ae.getParameter(H.UNPACK_ROW_LENGTH),Ot=ae.getParameter(H.UNPACK_IMAGE_HEIGHT),Gi=ae.getParameter(H.UNPACK_SKIP_PIXELS),kt=ae.getParameter(H.UNPACK_SKIP_ROWS),li=ae.getParameter(H.UNPACK_SKIP_IMAGES);ae.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),ae.pixelStorei(H.UNPACK_SKIP_PIXELS,et),ae.pixelStorei(H.UNPACK_SKIP_ROWS,vt),ae.pixelStorei(H.UNPACK_SKIP_IMAGES,Ct);let ci=N.isDataArrayTexture||N.isData3DTexture,Ei=te.isDataArrayTexture||te.isData3DTexture;if(N.isDepthTexture){let Nt=Te.get(N),Kt=Te.get(te),Dn=Te.get(Nt.__renderTarget),qt=Te.get(Kt.__renderTarget);ae.bindFramebuffer(H.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ln=0;ln<Je;ln++)ci&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,fe,Ct+ln),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.get(te).__webglTexture,Ge,jt+ln)),H.blitFramebuffer(et,vt,et+Qe,vt+qe,ot,It,ot+Qe,It+qe,H.DEPTH_BUFFER_BIT,H.NEAREST);ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(fe!==0||N.isRenderTargetTexture||Te.has(N)){let Nt=Te.get(N),Kt=Te.get(te);ae.bindFramebuffer(H.READ_FRAMEBUFFER,O),ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,X);for(let Dn=0;Dn<Je;Dn++)ci?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.__webglTexture,fe,Ct+Dn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,fe),Ei?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,Ge,jt+Dn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,Ge),fe!==0?H.blitFramebuffer(et,vt,et+Qe,vt+qe,ot,It,ot+Qe,It+qe,H.COLOR_BUFFER_BIT,H.NEAREST):Ei?H.copyTexSubImage3D(at,Ge,ot,It,jt+Dn,et,vt,Qe,qe):H.copyTexSubImage2D(at,Ge,ot,It,et,vt,Qe,qe);ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ei?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(at,Ge,ot,It,jt,Qe,qe,Je,Ft,an,Gt.data):te.isCompressedArrayTexture?H.compressedTexSubImage3D(at,Ge,ot,It,jt,Qe,qe,Je,Ft,Gt.data):H.texSubImage3D(at,Ge,ot,It,jt,Qe,qe,Je,Ft,an,Gt):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ge,ot,It,Qe,qe,Ft,an,Gt.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ge,ot,It,Gt.width,Gt.height,Ft,Gt.data):H.texSubImage2D(H.TEXTURE_2D,Ge,ot,It,Qe,qe,Ft,an,Gt);ae.pixelStorei(H.UNPACK_ROW_LENGTH,yn),ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot),ae.pixelStorei(H.UNPACK_SKIP_PIXELS,Gi),ae.pixelStorei(H.UNPACK_SKIP_ROWS,kt),ae.pixelStorei(H.UNPACK_SKIP_IMAGES,li),Ge===0&&te.generateMipmaps===!0&&te.mipmapsAutoUpdate===!0&&H.generateMipmap(at),ae.unbindTexture()},this.initRenderTarget=function(N){Te.get(N).__webglFramebuffer===void 0&&Be.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Be.setTextureCube(N,0):N.isData3DTexture?Be.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Be.setTexture2DArray(N,0):Be.setTexture2D(N,0),ae.unbindTexture()},this.resetState=function(){W=0,B=0,_=null,ae.reset(),He.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var Ro=At;Ro.__vkwToon||(Ro.__vkwToon=!0,Ro.lights_lambert_pars_fragment=Ro.lights_lambert_pars_fragment.replace("float dotNL = saturate( dot( geometryNormal, directLight.direction ) );",`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	#ifdef VKW_TOON
	dotNL = mix( 0.3, 1.0, smoothstep( 0.1, 0.2, dotNL ) );
	#endif`),Ro.dithering_fragment=`#ifdef VKW_TOON
	{ float vkwL = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) ); gl_FragColor.rgb = max( vec3( 0.0 ), mix( vec3( vkwL ), gl_FragColor.rgb, 1.22 ) ); }
#endif
`+Ro.dithering_fragment);var Ga=new Map;function gh(s){let e=s.toFixed(4);if(Ga.has(e))return Ga.get(e);let t=new Jt({color:"#21142c",side:gn,fog:!0});return t.name="vkw-outline",t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
	transformed += normalize( normal ) * ${s.toFixed(4)};`)},t.customProgramCacheKey=()=>"vkw-outline-"+e,Ga.set(e,t),t}function E0(){for(let s of Ga.values())s.dispose();Ga.clear()}function Of(s,e){let t=0;return s.traverse(n=>{if(n.material)for(let i of Array.isArray(n.material)?n.material:[n.material])!(i.isMeshLambertMaterial||i.isMeshBasicMaterial)||i.name==="vkw-outline"||!!(i.defines&&"VKW_TOON"in i.defines)===e||(i.defines={...i.defines||{}},e?i.defines.VKW_TOON="":delete i.defines.VKW_TOON,i.needsUpdate=!0,t++)}),t}function Va(s,e,t){let n=[];s.traverse(i=>{i.isMesh&&!i.userData.outline&&!i.userData.hasOutline&&(!t||t(i))&&n.push(i)});for(let i of n){let r;i.isSkinnedMesh?(r=new hr(i.geometry,gh(e)),r.bind(i.skeleton,i.bindMatrix),r.bindMode=i.bindMode,i.boundingSphere&&(r.boundingSphere=i.boundingSphere)):r=new wt(i.geometry,gh(e)),r.position.copy(i.position),r.quaternion.copy(i.quaternion),r.scale.copy(i.scale),r.matrixAutoUpdate=i.matrixAutoUpdate,i.matrixAutoUpdate||r.matrix.copy(i.matrix),r.frustumCulled=i.frustumCulled,r.castShadow=!1,r.receiveShadow=!1,r.renderOrder=i.renderOrder,r.userData.outline=!0,i.userData.hasOutline=r,i.parent.add(r)}}function Ff(s){let e=[];s.traverse(t=>{t.userData.outline&&e.push(t),t.userData.hasOutline&&(t.userData.hasOutline=null)});for(let t of e)t.parent&&t.parent.remove(t)}var Is={};hp(Is,{GROUPS:()=>Io,allMaterials:()=>vS,altKitMaterial:()=>yd,clips:()=>vd,get:()=>jn,getBase:()=>fS,groupLoaded:()=>wh,has:()=>Ln,load:()=>z0,loadGroups:()=>Cr,material:()=>gd,prop:()=>Sn,releaseGPU:()=>_d,setBase:()=>Sh,tinted:()=>Po,villagerTinted:()=>xd});function A0(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Dt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=T0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=T0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function T0(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Et(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function kf(s,e){if(e===lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wo||e===za){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===wo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function xh(s){let e=new Map,t=new Map,n=s.clone();return R0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function R0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)R0(s.children[n],e.children[n],t)}var vh=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new yh(t,Pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new yh(t,Pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new od(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=as.extractUrlBase(e);o=as.resolveURL(l,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xo(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===D0){try{o[Pt.KHR_BINARY_GLTF]=new ad(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Pt.KHR_MATERIALS_UNLIT:o[u]=new Wf;break;case Pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ld(r,this.dracoLoader);break;case Pt.KHR_TEXTURE_TRANSFORM:o[u]=new cd;break;case Pt.KHR_MESH_QUANTIZATION:o[u]=new hd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function nS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function $t(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vf=class{constructor(e){this.parser=e,this.name=Pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],On);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ni(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vr(h),l.distance=u;break;case"spot":l=new Sa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Wf=class{constructor(){this.name=Pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let i=[];e.color=new Ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},Xf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},qf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pt(r,r)}return Promise.all(i)}},Yf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Kf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Zf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Jf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},$f=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},jf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],On),Promise.all(i)}},Qf=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},td=class{constructor(e){this.parser=e,this.name=Pt.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},nd=class{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},id=class{constructor(e){this.parser=e,this.name=Pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},sd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},rd=class{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},yh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},od=class{constructor(e){this.name=Pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let y=new ut,p=new Y,m=new Zt,M=new Y(1,1,1),A=new ur(g.geometry,g.material,f);for(let C=0;C<f;C++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,C),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,C),c.SCALE&&M.fromBufferAttribute(c.SCALE,C),A.setMatrixAt(C,y.compose(p,m,M));let b=null;for(let C in c)if(C==="_COLOR_0"){let I=c[C];A.instanceColor=new Fn(I.array,I.itemSize,I.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(b===null){let x=A.geometry;b=new Dt,b.name=x.name;for(let E in x.attributes)b.setAttribute(E,x.attributes[E]);for(let E in x.morphAttributes)b.morphAttributes[E]=x.morphAttributes[E];x.index!==null&&b.setIndex(x.index),b.morphTargetsRelative=x.morphTargetsRelative;for(let E of x.groups)b.addGroup(E.start,E.count,E.materialIndex);x.boundingBox!==null&&(b.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(b.boundingSphere=x.boundingSphere.clone()),b.drawRange.start=x.drawRange.start,b.drawRange.count=x.drawRange.count,b.userData=Object.assign({},x.userData),A.geometry=b}let I=c[C];b.setAttribute(C,new Fn(I.array,I.itemSize,I.normalized))}Yt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),d.push(A)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},D0="glTF",Wa=12,C0={JSON:1313821514,BIN:5130562},ad=class{constructor(e){this.name=Pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==D0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Wa,r=new DataView(e,Wa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===C0.JSON){let l=new Uint8Array(e,Wa+o,a);this.content=n.decode(l)}else if(c===C0.BIN){let l=Wa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=fd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=fd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Co[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let y=d.attributes[g],p=c[g];p!==void 0&&(y.normalized=p)}u(d)},a,l,On,f)})})}},cd=class{constructor(){this.name=Pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},hd=class{constructor(){this.name=Pt.KHR_MESH_QUANTIZATION}},_h=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,y=g-l,p=-2*d+3*f,m=d-f,M=1-p,A=m-f+u;for(let b=0;b!==a;b++){let C=o[y+b+a],I=o[y+b+c]*h,x=o[g+b+a],E=o[g+b]*h;r[b]=M*C+A*I+p*x+m*E}return r}},iS=new Zt,ud=class extends _h{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return iS.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I0={9728:nn,9729:dn,9984:Ec,9985:bo,9986:Er,9987:ii},P0={33071:Vn,33648:ro,10497:bs},Bf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sS={CUBICSPLINE:void 0,LINEAR:rr,STEP:sr},Hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new pr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),s.DefaultMaterial}function Rr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function aS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lS(s){let e,t=s.extensions&&s.extensions[Pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gf(t.attributes):e=s.indices+":"+Gf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gf(s.targets[n]);return e}function Gf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hS=new ut,pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new mr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ea(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Rr(r,a,i),Oi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(as.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Bf[i.type],a=Co[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Et(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Bf[i.type],l=Co[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,p;if(d&&d!==u){let m=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=t.cache.get(M);A||(y=new l(a,m*d,i.count*d/h),A=new lr(y,d/h),t.cache.add(M,A)),p=new Ss(A,c,f%d/h,g)}else a===null?y=new l(i.count*c):y=new l(a,f,i.count*c),p=new Et(y,c,g);if(i.sparse!==void 0){let m=Bf.SCALAR,M=Co[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new M(o[1],A,i.sparse.count*m),I=new l(o[2],b,i.sparse.count*c);a!==null&&(p=new Et(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,E=C.length;x<E;x++){let U=C[x];if(p.setX(U,I[x*c]),c>=2&&p.setY(U,I[x*c+1]),c>=3&&p.setZ(U,I[x*c+2]),c>=4&&p.setW(U,I[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=I0[f.magFilter]||dn,h.minFilter=I0[f.minFilter]||ii,h.wrapS=P0[f.wrapS]||bs,h.wrapT=P0[f.wrapT]||bs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==dn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,g){let y=d;t.isImageBitmapLoader===!0&&(y=function(p){let m=new pn(p);m.needsUpdate=!0,d(m)}),t.load(as.resolveURL(f,r.path),y,void 0,g)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),Oi(f,o),f.userData.mimeType=o.mimeType||cS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Pt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new go,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new mo,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Pt.KHR_MATERIALS_UNLIT]){let u=i[Pt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=rn);let h=r.alphaMode||Hf.OPAQUE;if(h===Hf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Hf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],On)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rr(i,u,r),u})}createUniqueName(e){let t=Xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return L0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=lS(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Pt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=L0(new Dt,l,t),l.mode===ri.TRIANGLE_STRIP?f=f.then(d=>kf(d,za)):l.mode===ri.TRIANGLE_FAN&&(f=f.then(d=>kf(d,wo))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?rS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let y=h[d],p=o[d],m,M=l[d];if(p.mode===ri.TRIANGLES||p.mode===ri.TRIANGLE_STRIP||p.mode===ri.TRIANGLE_FAN||p.mode===void 0){let A=r.isSkinnedMesh===!0,b=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");A&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&b?new hr(y,M):new wt(y,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===ri.LINES)m=new fa(y,M);else if(p.mode===ri.LINE_STRIP)m=new fr(y,M);else if(p.mode===ri.LINE_LOOP)m=new da(y,M);else if(p.mode===ri.POINTS)m=new gi(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&aS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Oi(m,r),p.extensions&&Rr(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Rr(i,u[0],r),u[0];let f=new Vt;r.extensions&&Rr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(hh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ut;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ha(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],y=d.target,p=y.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],y=u[3],p=u[4],m=[];for(let A=0,b=f.length;A<b;A++){let C=f[A],I=d[A],x=g[A],E=y[A],U=p[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let S=n._createAnimationTracks(C,I,x,E,U);if(S)for(let F=0;F<S.length;F++)m.push(S[F])}let M=new yi(r,void 0,m);return Oi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new Y().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new fo:l.length>1?h=new Vt:l.length===1?h=l[0]:h=new Yt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Oi(h,r),r.extensions&&Rr(n,h,r),r.matrix!==void 0){let u=new ut;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Vt;n.name&&(r.name=i.createUniqueName(n.name)),Oi(r,n),n.extensions&&Rr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(xh(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Cn||f instanceof pn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Cs[r.path]===Cs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Cs[r.path]){case Cs.weights:h=ss;break;case Cs.rotation:h=rs;break;case Cs.translation:case Cs.scale:h=Ts;break;default:n.itemSize===1?h=ss:h=Ts;break}let u=i.interpolation!==void 0?sS[i.interpolation]:rr,f=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){let y=new h(c[d]+"."+Cs[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=dd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof rs?ud:_h;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uS(s,e,t){let n=e.attributes,i=new fn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new Y(c[0],c[1],c[2]),new Y(l[0],l[1],l[2])),a.normalized){let h=dd(Co[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new Y,c=new Y;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let y=dd(Co[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Qt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function L0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=fd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Rt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Oi(s,e),uS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?oS(s,e.targets,t):s})}ti.enabled=!0;var bh="assets/models/";function Sh(s){bh=s.endsWith("/")?s:s+"/"}function fS(){return bh}var Io={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},hs=new Map,Xa=new Map,oi=new Map,md=null,Fi=null;function dS(){return md||(md=new vh),md}function N0(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),oi.has(t))return oi.get(t);let n;return e==="window"?n=new Jt({color:16777215,name:e,fog:!0}):(n=new mn({name:e,map:s.map||null,color:s.color?s.color.clone():new Ve(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Bt,n.map.anisotropy=2),oi.set(t,n),n}function gd(s){return oi.get(s)}function pS(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(N0);else{let i=t.material;t.material=N0(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&gS(e)}function mS(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let c=a.getImageData(0,0,i.width,i.height).data,l=s.material.map.flipY;for(let h=0;h<t;h++){let u=r.getX(h)%1,f=r.getY(h)%1;u<0&&(u+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(u*i.width)),g=Math.min(i.height-1,Math.floor((l?1-f:f)*i.height));n[h]=Math.max(.05,c[(g*i.width+d)*4]/255)}}catch{}return n}function gS(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(l=>{let h=l.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||h.deleteAttribute(f);let u=l.material.name==="cloth";return h.setAttribute("aCloth",new Et(u?mS(l):new Float32Array(h.attributes.position.count),1)),h}),c=A0(a,!1);if(!c)return;r.geometry.dispose(),r.geometry=c,r.userData.clothMerged=n.length>0;for(let l of o)l.parent.remove(l),l.geometry.dispose()}catch{}}var Mh=new Map;function xd(s){if(Mh.has(s))return Mh.get(s);let e=oi.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new Ve(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",Mh.set(s,t),t}function z0(s,e){if(hs.has(s))return e&&e(),Promise.resolve(hs.get(s));if(Xa.has(s))return Xa.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{dS().load(bh+s,r=>{try{pS(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}hs.set(s,r),Xa.delete(s),n(r)},void 0,r=>{Xa.delete(s),i(r)})});return Xa.set(s,t),t.then(n=>(e&&e(),n))}function Cr(s,e){let t=[];for(let r of s)for(let o of Io[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>z0(r,()=>{n++,e&&e(n,i)})))}function Ln(s){return hs.has(s)}function jn(s){return hs.get(s)}function wh(s){return Io[s].every(e=>hs.has(e))}var xS={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function Sn(s,e){let t=hs.get(xS[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function vd(){let s=hs.get("characters/villager-anims.glb");return s?s.animations:[]}var qa=new Map;function Po(s,e,t){let n=s+"|"+e+(t||"");if(qa.has(n))return qa.get(n);let i=oi.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,qa.set(n,r),r}function yd(){if(oi.has("fantasy-town-b"))return oi.get("fantasy-town-b");let s=oi.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",Fi||(Fi=new mr().load(bh+"textures/fantasy-town-b.png"),Fi.flipY=!1,Fi.colorSpace=Bt,Fi.anisotropy=2,s.map&&(Fi.wrapS=s.map.wrapS,Fi.wrapT=s.map.wrapT)),e.map=Fi,oi.set("fantasy-town-b",e),e}function vS(){return[...oi.values(),...qa.values()]}function _d(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of hs.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of oi.values())e(t),t.map&&e(t.map);for(let t of qa.values())e(t);for(let t of Mh.values())e(t);Fi&&e(Fi)}var Mn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],yS=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],Ya=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],_S=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],MS=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],bS=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],U0=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],O0=Mn.map((s,e)=>({id:e,hex:s,name:yS[e]})),F0=_S.map((s,e)=>({id:e,name:s,node:Ya[e]})),k0=MS.map((s,e)=>({id:e,name:s,desc:bS[e]}));var Md={vampir:!0,iftiraci:!0};var ai={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},dt=(s,e,t)=>s<e?e:s>t?t:s,bd=(s,e,t)=>s+(e-s)*t,Ps=s=>s*s*(3-2*s),hn=(s,e)=>1-Math.exp(-s*e),nt=Math.PI*2;function un(s){return s=(s+Math.PI)%nt,s<0&&(s+=nt),s-Math.PI}function Bn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var SS=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,wS=`
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
}`,ES=`
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
}`,TS=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function B0(s,e){let t=new Vt;t.name="sky",s.add(t);let n=new sn({vertexShader:SS,fragmentShader:wS,side:gn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new Ve},uHor:{value:new Ve},uSun:{value:new Ve},uSunDir:{value:new Y(0,1,0)},uMoonDir:{value:new Y(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new Ve(.93,.95,1)}}}),i=new wt(new va(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=Bn(77),o=700,a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let p=0;p<o;p++){let m=r(),M=r(),A=m*nt,b=.04+Math.pow(M,.8)*.96,C=Math.sqrt(1-b*b);a[p*3]=Math.cos(A)*C*420,a[p*3+1]=b*420,a[p*3+2]=Math.sin(A)*C*420,c[p]=1+Math.pow(r(),6)*3.2,l[p]=r()*3}let h=new Dt;h.setAttribute("position",new Et(a,3)),h.setAttribute("aSize",new Et(c,1)),h.setAttribute("aPhase",new Et(l,1));let u=new sn({vertexShader:ES,fragmentShader:TS,transparent:!0,depthWrite:!1,blending:qn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new gi(h,u);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=RS();t.add(d);let g=CS();return t.add(g),{group:t,update(p,m,M,A,b){let C=n.uniforms;b&&C.uMoonCol.value.copy(b),C.uTop.value.copy(p.top),C.uHor.value.copy(p.hor),C.uSun.value.copy(p.sun),C.uSunDir.value.copy(p.sunDir),C.uMoonDir.value.copy(p.moonDir),C.uSunVis.value=p.sunVis,C.uMoonVis.value=p.moonVis,C.uGlow.value=.6+p.dusk*1.4,u.uniforms.uTime.value=m,u.uniforms.uAlpha.value=p.stars,u.uniforms.uPx.value=A,f.visible=p.stars>.01,t.position.set(M.position.x,0,M.position.z),Ka.color.copy(p.hor).lerp(p.sun,.35).lerp(AS,.55*(1-p.night)),Ka.color.multiplyScalar(.55+.45*(1-p.night*.8)),d.rotation.y=m*.004,d.visible=e.clouds,Lo.uniforms.uFar.value.copy(p.hor),Lo.uniforms.uNear.value.copy(p.gnd).lerp(p.hor,.35).multiplyScalar(.9),Lo.uniforms.uTint.value.copy(p.sky)},dispose(){t.traverse(p=>{p.geometry&&p.geometry.dispose()}),n.dispose(),u.dispose(),Ka.dispose(),Lo.dispose(),s.remove(t)}}}var AS=new Ve(1,1,1),Ka=null,Lo=null;function RS(){let s=Bn(4242),e=[];for(let a=0;a<11;a++){let c=s()*nt,l=210+s()*120,h=70+s()*55,u=3+Math.floor(s()*4);for(let f=0;f<u;f++){let d=new xa(1,0),g=9+s()*12;d.scale(g*(1.3+s()*.6),g*.55,g),d.translate((f-u/2)*13+s()*5,s()*4,s()*8),d.rotateY(c+Math.PI/2),d.translate(Math.cos(c)*l,h,Math.sin(c)*l),e.push(d)}}let t=IS(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let c=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c*1.03}t.setAttribute("color",new Et(i,3)),Ka=new Jt({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new wt(t,Ka);return o.renderOrder=-8,o.frustumCulled=!1,o}function CS(){let s=Bn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let c=e.length/3,l=0;for(let h=0;h<=a.n;h++){let u=h/a.n*nt,f=a.h*(.35+.65*Math.abs(Math.sin(u*3.1+a.k)*.6+Math.sin(u*7.3+1.7*a.k)*.3+(s()-.5)*.35));h===a.n&&(f=l),h===0&&(l=f);let d=Math.cos(u)*a.r,g=Math.sin(u)*a.r;if(e.push(d,-20,g,d,f,g),t.push(a.k,0,0,a.k,1,0),h<a.n){let y=c+h*2;n.push(y,y+2,y+1,y+1,y+2,y+3)}}}let r=new Dt;r.setAttribute("position",new zt(e,3)),r.setAttribute("color",new zt(t,3)),r.setIndex(n),Lo=new sn({side:rn,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new Ve},uNear:{value:new Ve},uTint:{value:new Ve}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new wt(r,Lo);return o.renderOrder=-7,o.frustumCulled=!1,o}function IS(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Dt;return i.setAttribute("position",new Et(t,3)),i}function Eh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Sd(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=Eh(t,n),a=Eh(t+1,n),c=Eh(t,n+1),l=Eh(t+1,n+1);return o+(a-o)*i+(c-o)*r+(o-a-c+l)*i*r}function H0(s,e){return Sd(s,e)*.55+Sd(s*2.1,e*2.1)*.3+Sd(s*4.3,e*4.3)*.15}function G0(s,e){let r=[];for(let I=0;I<=56;I++){let x=I/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),c=new Float32Array(o*2),l=new Float32Array(o*3),h=[];for(let I=1;I<=56;I++)for(let x=0;x<120;x++){let E=1+(I-1)*120+x,U=1+(I-1)*120+(x+1)%120;if(I===1)h.push(0,U,E);else{let S=1+(I-2)*120+x,F=1+(I-2)*120+(x+1)%120;h.push(S,F,E,F,U,E)}}let u=new Dt;u.setAttribute("position",new Et(a,3)),u.setAttribute("uv",new Et(c,2)),u.setAttribute("color",new Et(l,3)),u.setIndex(h);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),g=new es(f);g.colorSpace=Bt,g.wrapS=g.wrapT=Vn,g.anisotropy=4;let y=new mn({map:g,vertexColors:!0}),p=new wt(u,y);p.receiveShadow=!0,p.name="ground",p.renderOrder=-1,s.add(p);let m=30,M=45;function A(I,x){let E=Math.hypot(I,x);if(E<=m)return 0;let U=Ps(dt((E-m)/26,0,1)),S=H0(I*.018+3,x*.018-7),F=dt((E-m)/140,0,1);return U*(.6+S*3.5)+F*F*F*(8+S*14)}function b(){let I=0,x=(E,U)=>{let S=A(E,U);a[I*3]=E,a[I*3+1]=S,a[I*3+2]=U,c[I*2]=E/(2*M)+.5,c[I*2+1]=1-(U/(2*M)+.5);let F=Math.hypot(E,U),D=H0(E*.05,U*.05),k=dt((F-m)/60,0,1),O=dt(S/30,0,1),X=.92+(D-.5)*.22;l[I*3]=X*(1-k*.32)+O*.08,l[I*3+1]=X*(1-k*.22),l[I*3+2]=X*(1-k*.18)+O*.06,I++};x(0,0);for(let E=1;E<=56;E++)for(let U=0;U<120;U++){let S=U/120*nt+E%2*(Math.PI/120);x(Math.cos(S)*r[E],Math.sin(S)*r[E])}u.getAttribute("position").needsUpdate=!0,u.getAttribute("uv").needsUpdate=!0,u.getAttribute("color").needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function C(I,x){let E=!!(x&&x.snow);m=I.R+10,M=I.R+17,b();let U=f.width,S=U/(2*M),F=T=>(T+M)*S,D=T=>(T+M)*S,k=Bn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=E?"#e4ebf2":"#7db457",d.fillRect(0,0,U,U);for(let T=0;T<260;T++){let z=k()*U,q=k()*U,V=(2+k()*7)*S,Q=d.createRadialGradient(z,q,0,z,q,V),ye=E?k()<.5?"255,255,255":k()<.5?"200,212,228":"176,196,170":k()<.5?"120,170,82":k()<.5?"92,136,66":"138,160,78";Q.addColorStop(0,`rgba(${ye},0.45)`),Q.addColorStop(1,`rgba(${ye},0)`),d.fillStyle=Q,d.fillRect(z-V,q-V,V*2,V*2)}for(let T=0;T<U*6;T++){let z=k()*U,q=k()*U;d.fillStyle=E?k()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":k()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(z,q,1+k()*1.5,1+k()*2.5)}for(let T=0;T<380;T++){let z=k()*nt,q=I.Rp+2+k()*(M-I.Rp-2),V=F(Math.cos(z)*q),Q=D(Math.sin(z)*q);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(k()*4)],d.globalAlpha=E?0:.8,d.beginPath(),d.arc(V,Q,Math.max(1,S*.06),0,nt),d.fill()}d.globalAlpha=1;for(let T of I.houses){let z=F(T.x),q=D(T.z),V=(T.size*.62+1.4)*S,Q=d.createRadialGradient(z,q,V*.3,z,q,V);Q.addColorStop(0,E?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),Q.addColorStop(1,E?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=Q,d.fillRect(z-V,q-V,V*2,V*2)}let O=(T,z,q,V)=>{d.globalAlpha=V,d.strokeStyle=q,d.lineWidth=z*S,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(F(T[0][0]),D(T[0][1]));for(let Q=1;Q<T.length;Q++)d.lineTo(F(T[Q][0]),D(T[Q][1]));d.stroke(),d.globalAlpha=1},X=[];for(let T of I.houses){let z=T.door,q=Math.atan2(z.ax,z.az),V=I.Rp-.5,Q=[[z.dx,z.dz],[z.ax,z.az],[Math.sin(q)*I.Rr,Math.cos(q)*I.Rr],[Math.sin(q)*V,Math.cos(q)*V]];X.push(Q)}let W=I.gateAngle,B=[[Math.sin(W)*(I.Rp-.5),Math.cos(W)*(I.Rp-.5)],[Math.sin(W)*(I.R+2),Math.cos(W)*(I.R+2)],[Math.sin(W+.05)*(I.R+12),Math.cos(W+.05)*(I.R+12)],[Math.sin(W-.02)*(M+4),Math.cos(W-.02)*(M+4)]];X.push(B);for(let T of X)O(T,2.6,E?"#b4b8bf":"#8f7a52",.35);for(let T of X)O(T,1.7,E?"#8f8476":"#a88d5e",.85);for(let T of X)O(T,.7,E?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*S,d.beginPath(),d.arc(F(0),D(0),I.Rr*S,0,nt),d.stroke(),d.globalAlpha=1;let _=(I.Rp+.8)*S,v=d.createRadialGradient(F(0),D(0),_*.6,F(0),D(0),_*1.08);E?(v.addColorStop(0,"rgba(170,166,160,1)"),v.addColorStop(.85,"rgba(184,186,190,0.95)"),v.addColorStop(1,"rgba(184,186,190,0)")):(v.addColorStop(0,"rgba(176,150,108,1)"),v.addColorStop(.85,"rgba(160,136,96,0.95)"),v.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=v,d.beginPath(),d.arc(F(0),D(0),_*1.08,0,nt),d.fill();let R=Math.max(2,.55*S);for(let T=3.2;T<I.Rp+.3;T+=.62){let z=Math.floor(nt*T/.66),q=k()*nt;for(let V=0;V<z;V++){if(k()<.12)continue;let Q=q+V/z*nt,ye=F(Math.cos(Q)*T),oe=D(Math.sin(Q)*T),ne=150+Math.floor(k()*40);d.fillStyle=E?`rgba(${ne+40},${ne+44},${ne+52},${.5+k()*.3})`:`rgba(${ne+12},${ne},${ne-22},${.55+k()*.3})`,d.save(),d.translate(ye,oe),d.rotate(Q+Math.PI/2),d.beginPath();let Se=R*(.85+k()*.3),Fe=R*(.7+k()*.25);d.roundRect?d.roundRect(-Se/2,-Fe/2,Se,Fe,Fe*.3):d.rect(-Se/2,-Fe/2,Se,Fe),d.fill(),d.restore()}}if(v=d.createRadialGradient(F(0),D(0),0,F(0),D(0),3*S),v.addColorStop(0,"rgba(60,46,40,0.95)"),v.addColorStop(.5,"rgba(96,78,62,0.7)"),v.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=v,d.beginPath(),d.arc(F(0),D(0),3*S,0,nt),d.fill(),I.grave){let T=F(I.grave.x),z=D(I.grave.z),q=6*S;v=d.createRadialGradient(T,z,0,T,z,q),v.addColorStop(0,"rgba(70,84,58,0.85)"),v.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=v,d.fillRect(T-q,z-q,q*2,q*2)}g.needsUpdate=!0}return{mesh:p,heightAt:A,paint:C,dispose(){u.dispose(),y.dispose(),g.dispose(),s.remove(p)}}}var Th=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],V0=[0,1,3,2,1,0,2,3];function PS(s){let e=V0[s%V0.length],t=Th[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function on(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function W0(s,e){let t=s.slice().sort((m,M)=>m.seat-M.seat),n=t.length,i=t.findIndex(m=>m.id===e);if(i>=0){let m=Math.floor(n/2);t=t.map((M,A)=>t[(i-m+A+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(nt-r)),a=dt(o*.5,7.2,13.5),c=o-5.4,l=(nt-r)/Math.max(n,1),h=t.findIndex(m=>m.id===e),u=m=>r/2+l*(m+.5),f=h>=0?-u(h):Math.PI,d=un(f),g=t.map((m,M)=>{let A=un(u(M)+f+Math.PI*0),b=PS(m.seat),C=Th[b.type],I={id:m.id,seat:m.seat,angle:A,x:Math.sin(A)*o,z:Math.cos(A)*o,rotY:A+Math.PI,type:b.type,variant:b.variant,size:C.size},x=on(I,C.door[0],C.door[1]),E=on(I,C.approach[0],C.approach[1]);return I.door={dx:x.x,dz:x.z,ax:E.x,az:E.z},I}),y=o+6.5,p=d+7/y;return{n,R:o,Rp:a,Rr:c,step:l,gap:r,gateAngle:d,houses:g,grave:{x:Math.sin(p)*y,z:Math.cos(p)*y,angle:p,r:y}}}function Ah(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function wd(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var X0=20,q0=new ut,LS=new ut,DS=new Zt,NS=new Zt,zS=new Y,Y0=new Y,Rd=new Y(0,1,0),K0=new Ve(.16,.11,.08),US=new Ve("#ffc46b").multiplyScalar(1.25),OS=new Ve(.05,.045,.06),Z0=new Ve("#c9b48a");var Ch={value:1},Ih=new Map;function FS(s){if(Ih.has(s))return Ih.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=Ch,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,Ih.set(s,e),e}function kS(){for(let s of Ih.values())s.dispose()}var J0=new St,Ls=new Y;function Ed(s){let e=new Vt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new ut().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let c=new ut().multiplyMatrices(o,a.matrixWorld),l=Array.isArray(a.material)?a.material[0]:a.material,h=l.uuid+(r?"|c":"");t.has(h)||t.set(h,{mat:l,cast:r,parts:[]});let u=t.get(h);for(let f of i)u.parts.push({geo:a.geometry,m:new ut().multiplyMatrices(f,c),org:new Y().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let y of n.parts)i+=y.geo.attributes.position.count,r+=y.geo.index?y.geo.index.count:y.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),c=new Float32Array(i*2),l=new Float32Array(i*3),h=i>65535?new Uint32Array(r):new Uint16Array(r),u=0,f=0;for(let y of n.parts){let p=y.geo,m=p.attributes.position,M=p.attributes.normal,A=p.attributes.uv;J0.getNormalMatrix(y.m);for(let b=0;b<m.count;b++)Ls.fromBufferAttribute(m,b).applyMatrix4(y.m),o[(u+b)*3]=Ls.x,o[(u+b)*3+1]=Ls.y,o[(u+b)*3+2]=Ls.z,M&&(Ls.fromBufferAttribute(M,b).applyMatrix3(J0).normalize(),a[(u+b)*3]=Ls.x,a[(u+b)*3+1]=Ls.y,a[(u+b)*3+2]=Ls.z),A&&(c[(u+b)*2]=A.getX(b),c[(u+b)*2+1]=A.getY(b)),l[(u+b)*3]=y.org.x,l[(u+b)*3+1]=y.org.y,l[(u+b)*3+2]=y.org.z;if(p.index){let b=p.index.array;for(let C=0;C<b.length;C++)h[f+C]=b[C]+u;f+=b.length}else{for(let b=0;b<m.count;b++)h[f+b]=u+b;f+=m.count}u+=m.count}let d=new Dt;d.setAttribute("position",new Et(o,3)),d.setAttribute("normal",new Et(a,3)),d.setAttribute("uv",new Et(c,2)),d.setAttribute("aOrigin",new Et(l,3)),d.setIndex(new Et(h,1)),d.computeBoundingSphere();let g=new wt(d,FS(n.mat));g.castShadow=n.cast,g.receiveShadow=!0,g.matrixAutoUpdate=!1,g.userData.merged=!0,e.add(g)}return e}function Td(s,e,t,n,i=1){return new ut().compose(new Y(s,e,t),new Zt().setFromAxisAngle(Rd,n),new Y(i,i,i))}var Cd=class{constructor(e){this.root=e,this.map=new Map}batchFor(e,t){let n=this.map.get(e.uuid);if(!n){let i=e.clone();i.name=e.name,i.userData={...e.userData,houseBatch:!0};let r=new po(64,16384,32768,i);if(r.sortObjects=!1,r.perObjectFrustumCulled=!0,r.frustumCulled=!1,r.name="houses-"+e.name,this.root.add(r),n={mesh:r,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0,out:null},!t){let o=new po(64,16384,32768,gh(.05));o.sortObjects=!1,o.perObjectFrustumCulled=!0,o.frustumCulled=!1,o.visible=!!this.outlines,o.castShadow=!1,o.receiveShadow=!1,o.name=r.name+"-outline",this.root.add(o),n.out=o}this.map.set(e.uuid,n)}return n}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx),e.out&&e.out.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.out&&(e.outGeo=(e.outGeo||new Map).set(r,e.out.addGeometry(t))),e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI),e.out&&e.out.setInstanceCount(e.maxI));let n=e.mesh.addInstance(t);return e.out&&(e.outIds=e.outIds||new Map,e.outIds.set(n,e.out.addInstance(e.outGeo.get(t)))),n}setOutlines(e){this.outlines=e;for(let t of this.map.values())t.out&&(t.out.visible=e)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose(),e.out&&(e.out.parent&&e.out.parent.remove(e.out),e.out.dispose());this.map.clear()}},Id=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Vt,this.parts=[],this.list=[];let o=jn(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new ut().copy(o.matrixWorld).invert();for(let c of["body","door","banner"]){let l=o.getObjectByName(c);if(!l)continue;let h=new ut().multiplyMatrices(a,l.matrixWorld),u=new ut().copy(l.matrixWorld).invert();l.traverse(f=>{if(!f.isMesh)return;let d=new ut().multiplyMatrices(u,f.matrixWorld),g=f.material,y=null;g.name==="window"?y="window":g.name.startsWith("tint")?(y="owner",g=Po(g.name,"#ffffff")):t===1&&g.name==="fantasy-town"&&(g=yd());let p={kind:c,nodeM:h,local:d,colorMode:y,nodePos:new Y().setFromMatrixPosition(h),nodeQ:new Zt().setFromRotationMatrix(h),ids:[]};try{let m=i.batchFor(g,y==="window");p.batch=m,p.batches=i,p.gid=i.geometryId(m,f.geometry),y==="window"?(m.mesh.castShadow=!1,m.mesh.receiveShadow=!1):(m.mesh.castShadow=!0,m.mesh.receiveShadow=!0)}catch{p.batch=null;let M=new ur(f.geometry,g,X0);M.count=0,M.castShadow=y!=="window",M.receiveShadow=y!=="window",M.frustumCulled=!1,y&&(M.instanceColor=new Fn(new Float32Array(X0*3).fill(1),3)),this.group.add(M),p.im=M}this.parts.push(p)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t),e.batch.out&&e.batch.out.setVisibleAt(e.batch.outIds.get(e.ids[i]),i<t)}setM(e,t,n){e.batch?(e.batch.mesh.setMatrixAt(e.ids[t],n),e.batch.out&&e.batch.out.setMatrixAt(e.batch.outIds.get(e.ids[t]),n)):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=LS.compose(zS.set(n.cx,0,n.cz),DS.setFromAxisAngle(Rd,n.crot),Y0.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=NS.setFromAxisAngle(Rd,n.doorAngle).premultiply(r.nodeQ);o=q0.compose(r.nodePos,a,Y0.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=q0.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}},Ad=new Map,BS=new fn,Rh=new Y;function HS(s,e){let t=s+":"+e;if(Ad.has(t))return Ad.get(t);let n=Sn(s,e),i=null;return n&&(n.updateWorldMatrix(!0,!0),BS.setFromObject(n).getSize(Rh),i={r:Math.max(Rh.x,Rh.z)/2,h:Rh.y}),Ad.set(t,i),i}var GS=/grass|patch|rock-flat|campfire/;function $0(s,e,t,n){let i=new Vt;i.name="village",s.add(i);let r=new Map,o=new Cd(i),a=!1,c=new Map,l=[],h=[],u=null;function f(se,Z,ce,H,me,re){if(GS.test(ce)||!d||Math.hypot(H,me)>d.R+4)return;let de=HS(Z,ce);de&&(se.push({x:H,z:me,r:de.r*re,h:de.h*re,name:ce}),u=null)}let d=null,g=null,y=null,p=null,m=!1,M=new Map,A=[],b=!0,C=!1,I=null,x=1,E=!1,U=new Ve("#ffc46b"),S=new Ve("#ff9a3c"),F=new Ve("#ffb85a");function D(se,Z){let ce=se+"-"+Z;return r.has(ce)||r.set(ce,new Id(se,Z,i,o)),r.get(ce)}function k(){for(let Z of r.values())Z.list.length=0;let se=[...c.values()].sort((Z,ce)=>Z.seat-ce.seat);for(let Z of se)D(Z.type,Z.variant).list.push(Z);b=!0}function O(se,Z){let ce=d;d=se;let H=new Set;for(let me of se.houses){H.add(me.id);let re=c.get(me.id);if(!re||re.type!==me.type||re.variant!==me.variant){let de=re;re={id:me.id,seat:me.seat,type:me.type,variant:me.variant,cx:me.x,cz:me.z,crot:me.rotY,sx:me.x,sz:me.z,srot:me.rotY,scale:Z?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:de&&de.ownerColor||Z0.clone(),winColor:K0.clone(),name:de?de.name:"",colorIdx:de?de.colorIdx:-1},c.set(me.id,re)}re.seat=me.seat,re.sx=re.cx,re.sz=re.cz,re.srot=re.crot,re.tx=me.x,re.tz=me.z,re.trot=me.rotY,re.angle=me.angle,re.info=Th[me.type],re.removing=!1,Z||(re.cx=me.x,re.cz=me.z,re.crot=me.rotY,re.scale=1)}for(let[me,re]of c)H.has(me)||(Z?(re.removing=!0,re.sx=re.cx,re.sz=re.cz,re.srot=re.crot,re.tx=re.cx,re.tz=re.cz,re.trot=re.crot):c.delete(me));x=Z?0:1,k(),!Z||!ce?W():(I=!0,E=!0)}function X(se){let Z={x:se.cx,z:se.cz,rotY:se.crot},ce=se.info;return{door:on(Z,ce.door[0],ce.door[1]-.25),inside:on(Z,ce.door[0],ce.door[1]-1.2),approach:on(Z,ce.approach[0],ce.approach[1]+.2),peek:on(Z,ce.peek[0],ce.peek[1]),backWin:on(Z,ce.backWin[0],ce.backWin[2]),frontWin:on(Z,ce.frontWin[0],ce.frontWin[2]+.12),lantern:on(Z,ce.door[0]+.95,ce.front+.45),tomb:on(Z,ce.door[0]-2.6,ce.front+1.6),plaque:on(Z,0,ce.front+.3),rotY:se.crot,height:ce.height}}function W(){g&&(i.remove(g),ke(g)),g=new Vt,g.name="dressing",i.add(g),I=!1;let se=Bn(2024+d.n),Z=new Map;l=[],u=null;let ce=(G,j,ie,Pe,Le=1,He="village",it=null)=>{f(l,He,G,j,ie,Le);let st=He+":"+G;Z.has(st)||Z.set(st,[]);let Oe=it==null?n.heightAt(j,ie):it;Z.get(st).push(Td(j,Oe,ie,Pe,Le))};A=[],ce("campfire-pit",0,0,.3,1,"village",0);let H=[],me=[.55,2.35,4.15];for(let G=0;G<3;G++){let j=me[G],ie=3.35;ce(G===1?"log-small":"log",Math.sin(j)*ie,Math.cos(j)*ie,j+Math.PI/2,1,"village",0),H.push({x:Math.sin(j)*ie,z:Math.cos(j)*ie,a:j,small:G===1})}ce("campfire-stand",0,0,1.2,.85,"village",0);let re=d.houses,de=G=>{let j=null,ie=1/0;for(let Pe=0;Pe<re.length;Pe++){let Le=re[Pe].angle,He=re[(Pe+1)%re.length].angle-Le;for(;He<0;)He+=nt;if(re.length>1&&He>Math.PI)continue;let it=Le+He/2,st=Math.abs(((it-G+Math.PI)%nt+nt)%nt-Math.PI);st<ie&&(ie=st,j=it)}return j==null?G:j},ae=new Set,Re=G=>{let j=[];for(let ie=0;ie<G;ie++)j.push(d.gateAngle+Math.PI+((ie+.5)/G-.5)*(nt-1.4));return j};for(let G of Re(Math.min(6,Math.max(1,re.length-1)))){let j=de(G),ie=j.toFixed(3);if(ae.has(ie))continue;ae.add(ie);let Pe=d.R-3.4,Le=Math.sin(j)*Pe,He=Math.cos(j)*Pe;ce("lamp-post",Le,He,j+Math.PI,1),A.push({x:Le,y:3.55,z:He})}let Te=["barrel","crate","hay-bale","crate-bottles","bucket","wheel","barrel","crate"],Be=new Set;Re(8).forEach((G,j)=>{let ie=de(G+.11),Pe=ie.toFixed(3);if(Be.has(Pe))return;Be.add(Pe);let Le=d.R+.4;ce(Te[j],Math.sin(ie)*Le,Math.cos(ie)*Le,se()*nt,1)});for(let G of c.values()){if(G.removing)continue;let j={x:G.tx,z:G.tz,rotY:G.trot},ie=on(j,G.info.door[0]+.95,G.info.front+.45);ce("lantern",ie.x,ie.z,G.trot,.8,"village",0)}let P=G=>{for(let ie of re)if(Math.abs(((G-ie.angle+Math.PI)%nt+nt)%nt-Math.PI)<.2)return!1;return Math.abs(((G-d.gateAngle+Math.PI)%nt+nt)%nt-Math.PI)>.3},L=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],J=0;for(let G=0;G<40&&J<4;G++){let j=se()*nt;if(!P(j))continue;let ie=d.Rp+2.2+se()*Math.max(.5,d.Rr-d.Rp-3.5),[Pe]=L[J];ce(Pe,Math.sin(j)*ie,Math.cos(j)*ie,j+Math.PI+(se()-.5)*.5,1),J++}let Ee=d.gateAngle,pe=(G,j)=>({x:Math.sin(Ee+j/G)*G,z:Math.cos(Ee+j/G)*G}),Ie=pe(d.R+1,-2.4);ce("signpost",Ie.x,Ie.z,Ee+.6,1),Ie=pe(d.R-1,2.6),ce("banner-pole",Ie.x,Ie.z,Ee+Math.PI,1.2),Ie=pe(d.R+4,-2.6),ce("lantern-post-cabin",Ie.x,Ie.z,Ee+Math.PI,1),A.push({x:Ie.x,y:2.9,z:Ie.z,small:!0});let ze=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],Me=e.trees,ve=d.R+8.5;for(let G=0;G<Me;G++){let j=se()*nt,ie=Math.pow(se(),1.35),Pe=ve+ie*46,Le=Math.sin(j)*Pe,He=Math.cos(j)*Pe;if(Math.abs(((j-Ee+Math.PI)%nt+nt)%nt-Math.PI)*Pe<4.5&&Pe<ve+30||d.grave&&Math.hypot(Le-d.grave.x,He-d.grave.z)<8.5)continue;let st=ze[Math.floor(se()*ze.length)];ce(st,Le,He,se()*nt,.85+se()*.55+ie*.3)}for(let G=0;G<e.scatter;G++){let j=se()*nt,ie=d.R+4.6+se()*6,Pe=Math.sin(j)*ie,Le=Math.cos(j)*ie;if(Math.abs(((j-Ee+Math.PI)%nt+nt)%nt-Math.PI)*ie<3.5||d.grave&&Math.hypot(Pe-d.grave.x,Le-d.grave.z)<7)continue;let it=se();ce(it<.4?"grass-large":it<.7?"grass":"bush",Pe,Le,se()*nt,.8+se()*.6)}for(let G=0;G<14;G++){let j=se()*nt,ie=d.Rp+.8+se()*1.5;ce(se()<.7?"grass":"grass-large",Math.sin(j)*ie,Math.cos(j)*ie,se()*nt,.8+se()*.4)}for(let G=0;G<3;G++){let j=se()*nt,ie=d.R+24+se()*40;ce(se()<.5?"rock-large":"rock-wide",Math.sin(j)*ie,Math.cos(j)*ie,se()*nt,.8+se()*1)}let Ne=[];for(let[G,j]of Z){let[ie,Pe]=G.split(":"),Le=Sn(ie,Pe);Le&&Ne.push({tpl:Le,mats:j,cast:!/grass|patch|rock-flat|bush/.test(Pe)})}g.add(Ed(Ne)),l.push({x:0,z:0,r:1.5,h:3.3,name:"fire"}),E&&(Ch.value=0,T=0,E=!1),q(),B=H,n.paint(d,v&&v.snow?{snow:!0}:null),Ue(),_++,b=!0}let B=[],_=0,v=null,R=null,T=1,z=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(se=>new Ve(se));function q(){if(p&&(i.remove(p),ke(p),p=null),!Ln("props/graveyard.glb")||!d||!d.grave)return;m=!0,p=new Vt,p.name="graveyard";let se=d.grave,Z=se.angle+Math.PI,ce=(Re,Te)=>on({x:se.x,z:se.z,rotY:Z},Re,Te),H=new Map,me=(Re,Te,Be,P=0,L=1)=>{let J=ce(Te,Be);H.has(Re)||H.set(Re,[]),H.get(Re).push(Td(J.x,n.heightAt(J.x,J.z),J.z,Z+P,L))},re=Bn(66),de=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let Re=0;Re<6;Re++)me(de[Re],-3.2+Re*1.3+(re()-.5)*.3,-2.6+(re()-.5)*.4,(re()-.5)*.3,.85);me("crypt",3.6,-3.4,-.3,1),me("trunk-dead",-4.6,.6,1.1,1),me("pine-crooked",-5.2,-3.6,.4,1),me("candles",1.8,-2.4,0,1),me("pumpkin-carved",-2.2,1.9,.5,.8),me("urn",2.6,.4,0,.8),me("iron-fence-gate",0,3.2,0,1);for(let Re of[-2.5,-5,2.5,5])me("iron-fence",Re,3.2,0,1);let ae=[];for(let[Re,Te]of H){let Be=Sn("graveyard",Re);Be&&ae.push({tpl:Be,mats:Te,cast:!0})}p.add(Ed(ae)),i.add(p);for(let[Re,Te]of M)ye(Re,Te)}let V=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function Q(se,Z,ce,H){let me=M.has(se);if(Z&&!me){M.set(se,{obj:null,mound:null,colorIdx:ce,born:performance.now()}),ye(se,M.get(se));let re=M.get(se);H&&re.obj&&(re.obj.userData.drop=0,re.obj.position.y=3.2)}else if(!Z&&me){let re=M.get(se);re.obj&&re.obj.parent.remove(re.obj),re.mound&&re.mound.parent.remove(re.mound),M.delete(se)}}function ye(se,Z){var ae,Re,Te;Z.obj&&(Z.obj.parent&&Z.obj.parent.remove(Z.obj),Z.obj=null),Z.mound&&(Z.mound.parent&&Z.mound.parent.remove(Z.mound),Z.mound=null);let ce=c.get(se);if(!ce||!Ln("props/graveyard.glb"))return;let H=Sn("graveyard",V[ce.seat%V.length]);if(!H)return;let me={x:(ae=ce.tx)!=null?ae:ce.cx,z:(Re=ce.tz)!=null?Re:ce.cz,rotY:(Te=ce.trot)!=null?Te:ce.crot},re=on(me,ce.info.door[0]-2.75,ce.info.front+1.7),de=H.clone();if(de.position.set(re.x,0,re.z),de.rotation.set(0,me.rotY+.15,0),de.scale.setScalar(.62),de.traverse(Be=>{Be.isMesh&&(Be.castShadow=!0,Be.receiveShadow=!0)}),de.userData.pop=0,i.add(de),Z.obj=de,d&&d.grave){let Be=[...M.keys()].indexOf(se),P=Sn("graveyard","grave-dirt");if(P){let L=d.grave,J=L.angle+Math.PI,Ee=-3.6+Be%5*1.9,pe=.3+Math.floor(Be/5)*2,Ie=on({x:L.x,z:L.z,rotY:J},Ee,pe),ze=P.clone();ze.position.set(Ie.x,n.heightAt(Ie.x,Ie.z),Ie.z),ze.rotation.y=J,ze.scale.setScalar(.7),i.add(ze),Z.mound=ze}}}function oe(se,Z,ce){let H=c.get(se);H&&(H.colorIdx!==Z&&(H.colorIdx=Z,Z>=0?H.ownerColor.set(Mn[Z]):H.ownerColor.copy(Z0),b=!0),H.name=ce||"")}let ne=new Ve;function Se(se,Z,ce){let H=!1;if(x<1){x=Math.min(1,x+se/1.3);let re=Ps(x);for(let[de,ae]of c){ae.cx=bd(ae.sx,ae.tx,re),ae.cz=bd(ae.sz,ae.tz,re);let Re=ae.trot-ae.srot;for(;Re>Math.PI;)Re-=nt;for(;Re<-Math.PI;)Re+=nt;ae.crot=ae.srot+Re*re,ae.removing?ae.scale=Math.max(.01,1-re):ae.scale=Math.min(1,ae.scale+se*1.2)}if(x>=1){for(let[de,ae]of c)ae.removing&&c.delete(de);k(),I&&W()}H=!0}else for(let re of c.values())re.scale<1&&(re.scale=Math.min(1,re.scale+se*1.5),H=!0);T<1&&(T=Math.min(1,T+se/.9),Ch.value=T);for(let re of M.values()){let de=re.obj;if(de&&de.userData.drop!=null){let ae=de.userData.drop+=se/.55;if(ae>=1)de.position.y=0,delete de.userData.drop,H=!0;else{let Re=ae<.7?3.2*(1-ae/.7*(ae/.7)):Math.sin((ae-.7)/.3*Math.PI)*.18;de.position.y=Math.max(0,Re)}}}let me=ce.lamps;for(let re of c.values()){re.doorHold>0&&(re.doorHold-=se,re.doorHold<=0&&(re.doorTarget=0));let de=re.doorOpen;re.doorOpen+=(re.doorTarget-re.doorOpen)*hn(re.doorTarget>re.doorOpen?9:5,se),Math.abs(re.doorOpen-de)>5e-4&&(H=!0),re.doorAngle=re.doorOpen*1.35*re.info.openSign;let ae=re.dark||re.dead||re.flickOut?0:Math.max(re.litTarget,0);re.lit+=(ae-re.lit)*hn(1.6,se);let Re=dt(re.lit*(.25+.75*me),0,1);if(re.flickT>0){re.flickT-=se;let Be=re.flickDur-re.flickT,P=Math.floor(Be/.075),L=Math.abs(Math.sin(P*12.9898+re.seat*78.233)*43758.5453)%1,J=1-dt(Be/re.flickDur,0,1);Re=L>.12+.75*(1-J)?.45+.55*J:.03,re.flickT<=0&&(re.lit=0,Re=0,re.flickOut=!0),C=!0}ne.copy(K0).lerp(OS,dt(ce.night*1.2,0,1)).lerp(US,Re);let Te=re.winColor;Math.abs(ne.r-Te.r)+Math.abs(ne.g-Te.g)+Math.abs(ne.b-Te.b)>.006&&(Te.copy(ne),C=!0)}if(H&&(b=!0),b){for(let re of r.values())re.write();return b=!1,C=!1,!0}if(C){for(let re of r.values())re.writeColors();C=!1}return!1}function Fe(se,Z,ce,H){let me=se.lamps;if(me<.02)return;let re=v&&v.dress==="fair";for(let de=0;de<A.length;de++){let ae=A[de],Re=.92+.08*Math.sin(Z*9+de*1.7),Te=re?z[de%z.length]:U;ce.add(ae.x,ae.y,ae.z,ae.small?1.4:2,Te,.85*me*Re),H.add(ae.x,.03,ae.z,ae.small?6:8.5,re?Te:S,.3*me)}if(re&&ue)for(let de=0;de<ue.length;de++){let ae=ue[de];ce.add(ae.x,ae.y,ae.z,.7,z[de%z.length],.8*me*(.8+.2*Math.sin(Z*3+de)))}for(let de of c.values()){if(de.scale<.9)continue;if(!de.gp||de.gp.x!==de.cx||de.gp.z!==de.cz||de.gp.r!==de.crot){let Be={x:de.cx,z:de.cz,rotY:de.crot};de.gp={x:de.cx,z:de.cz,r:de.crot,ln:on(Be,de.info.door[0]+.95,de.info.front+.45),w:on(Be,de.info.frontWin[0],de.info.frontWin[2]+.25),wp:on(Be,de.info.frontWin[0],de.info.frontWin[2]+1.6)}}let ae=de.gp.ln,Re=de.dead?.25:1;ce.add(ae.x,.62,ae.z,.9,U,.9*me*Re),H.add(ae.x,.03,ae.z,3.6,S,.26*me*Re);let Te=de.lit*me*(.86+.08*Math.sin(Z*6.3+de.seat*2.1)+.06*Math.sin(Z*13.7+de.seat));if(Te>.02){let Be=de.gp.w;ce.add(Be.x,1.35,Be.z,1.7,F,.5*Te);let P=de.gp.wp;H.add(P.x,.03,P.z,4.2,F,.22*Te)}}}let ue=null,Xe=!1;function le(se){let Z=v;v=se&&se.id?se:null,U.set(v&&v.lamp?v.lamp:"#ffc46b"),S.set(v&&v.lamp?v.lamp:"#ff9a3c");let ce=!!(Z&&Z.snow)!=!!(v&&v.snow);d&&ce&&n.paint(d,v&&v.snow?{snow:!0}:null),ee(!!(v&&v.snow)),Ue()}function ee(se){if(se===Xe)return;Xe=se;let Z=ce=>{!ce||!ce.isMeshLambertMaterial||!ce.map||ce.name==="villager"||(se?(ce.userData.preFrost||(ce.userData.preFrost=ce.emissive.clone()),ce.emissive.set("#a9bad0").multiplyScalar(.22)):ce.userData.preFrost&&ce.emissive.copy(ce.userData.preFrost))};s.traverse(ce=>{ce.material&&(Array.isArray(ce.material)?ce.material:[ce.material]).forEach(Z)})}function Ue(){if(R&&(i.remove(R),R.traverse(me=>{(me.userData.merged||me.userData.themeGeo)&&me.geometry.dispose(),me.userData.themeMat&&me.material.dispose()}),R=null),ue=null,h=[],u=null,!v||!v.dress||!d)return;R=new Vt,R.name="theme";let se=Bn(99+d.n),Z=new Map,ce=(me,re,de,ae,Re=1)=>{f(h,"village",me,re,de,Re),Z.has(me)||Z.set(me,[]),Z.get(me).push(Td(re,n.heightAt(re,de),de,ae,Re))};if(v.dress==="harvest"){let me=[...c.values()].filter(Re=>!Re.removing),re=Math.max(1,Math.ceil(me.length/8));for(let Re=0;Re<me.length;Re+=re){let Te=me[Re],Be={x:Te.tx,z:Te.tz,rotY:Te.trot},P=on(Be,Te.info.door[0]-.9,Te.info.front+.7);if(ce("pumpkin",P.x,P.z,se()*nt,.7+se()*.3),se()<.5){let L=on(Be,-Te.info.hx+.5,Te.info.front+.9);ce("hay-bale",L.x,L.z,Te.trot+.3,.9)}}for(let Re=0;Re<6;Re++){let Te=Re/6*nt+.4,Be=d.Rp+1.2;ce(Re%2?"pumpkin":"hay-bale",Math.sin(Te)*Be,Math.cos(Te)*Be,Te,Re%2?.9:1)}let de=d.gateAngle+.5,ae=d.Rp+2.6;ce("cart-hay",Math.sin(de)*ae,Math.cos(de)*ae,de+1.2,1)}else if(v.dress==="fair"){let me=A.filter(ae=>!ae.small),re=[],de=[];ue=[];for(let ae=0;ae<me.length;ae++){let Re=me[ae],Te=me[(ae+1)%me.length];if(Math.hypot(Re.x-Te.x,Re.z-Te.z)>14)continue;let Be=9;for(let P=0;P<Be;P++){let L=(P+.15)/Be,J=(P+.85)/Be,Ee=(P+.5)/Be,pe=G=>3.25-Math.sin(G*Math.PI)*.9,Ie=G=>[Re.x+(Te.x-Re.x)*G,pe(G),Re.z+(Te.z-Re.z)*G],ze=Ie(L),Me=Ie(J),ve=Ie(Ee);re.push(...ze,...Me,ve[0],ve[1]-.45,ve[2]);let Ne=z[(ae+P)%z.length];for(let G=0;G<3;G++)de.push(Ne.r,Ne.g,Ne.b);P%3===1&&ue.push({x:ve[0],y:ve[1]+.05,z:ve[2]})}}if(re.length){let ae=new Dt;ae.setAttribute("position",new zt(re,3)),ae.setAttribute("color",new zt(de,3)),ae.computeVertexNormals();let Re=new mn({vertexColors:!0,side:rn}),Te=new wt(ae,Re);Te.userData.themeGeo=!0,Te.userData.themeMat=!0,R.add(Te)}for(let ae=0;ae<5;ae++){let Re=ae/5*nt+.2,Te=d.Rp+1.6;ce("banner-pole",Math.sin(Re)*Te,Math.cos(Re)*Te,Re+Math.PI,1.1)}}let H=[];for(let[me,re]of Z){let de=Sn("village",me);de&&H.push({tpl:de,mats:re,cast:!0})}H.length&&R.add(Ed(H)),i.add(R),Xe&&(Xe=!1,ee(!0))}function Ze(se,Z){let ce=c.get(se);ce&&(ce.litTarget=Z)}function Ce(se,Z=1.2){let ce=c.get(se);ce&&(ce.doorTarget=1,ce.doorHold=Z)}function We(se){let Z=null,ce=1/0,H=se.origin,me=se.direction;for(let re of c.values()){if(re.removing)continue;let de=Math.cos(-re.crot),ae=Math.sin(-re.crot),Re=H.x-re.cx,Te=H.z-re.cz,Be=Re*de+Te*ae,P=-Re*ae+Te*de,L=me.x*de+me.z*ae,J=-me.x*ae+me.z*de,Ee=[-re.info.hx-.3,0,-re.info.hz-.3],pe=[re.info.hx+.3,re.info.height,re.info.hz+1.2],Ie=[Be,H.y,P],ze=[L,me.y,J],Me=-1/0,ve=1/0;for(let Ne=0;Ne<3;Ne++){if(Math.abs(ze[Ne])<1e-6){if(Ie[Ne]<Ee[Ne]||Ie[Ne]>pe[Ne]){Me=1/0;break}continue}let G=(Ee[Ne]-Ie[Ne])/ze[Ne],j=(pe[Ne]-Ie[Ne])/ze[Ne];if(G>j){let ie=G;G=j,j=ie}Me=Math.max(Me,G),ve=Math.min(ve,j)}Me<=ve&&ve>0&&Me<ce&&(ce=Me,Z=re)}return Z}function we(){d&&q()}function ke(se){se.traverse(Z=>{Z.isInstancedMesh?Z.dispose():Z.userData.merged&&Z.geometry.dispose()})}return{root:i,houses:c,get layout(){return d},get benchSlots(){return B},get busy(){return x<1},get version(){return _},lampList:()=>A,setOutlines(se){a=se,o.setOutlines(se)},get blockers(){return u||(u=l.concat(h)),u},setLayout:O,setOwner:oe,setLit:Ze,setDead:Q,setTheme:le,openDoor:Ce,anchors:X,update:Se,emitGlows:Fe,pickHouse:We,onExtraLoaded:we,flicker(se,Z=1.5){let ce=c.get(se);ce&&(ce.flickT=Z,ce.flickDur=Z)},house:se=>c.get(se),tombOf:se=>M.get(se),dispose(){ee(!1);for(let se of r.values())se.dispose();o.dispose(),g&&ke(g),p&&ke(p),R&&R.traverse(se=>{(se.userData.merged||se.userData.themeGeo)&&se.geometry.dispose(),se.userData.themeMat&&se.material.dispose()}),kS(),Ch.value=1,s.remove(i)}}}var VS=`
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
}`,WS={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function XS(s,e){return new sn({vertexShader:VS,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${WS[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var ki=class{constructor(e,t,n=qn){this.max=t;let i=new vi(1,1),r=new wa;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new Fn(new Float32Array(t*4),4),this.col=new Fn(new Float32Array(t*4),4),this.spin=new Fn(new Float32Array(t),1),this.pos.setUsage(Oa),this.col.setUsage(Oa),this.spin.setUsage(Oa),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=XS(e,n),this.mesh=new wt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let c=this.n++,l=this.pos.array,h=this.col.array;l[c*4]=e,l[c*4+1]=t,l[c*4+2]=n,l[c*4+3]=i,h[c*4]=r.r,h[c*4+1]=r.g,h[c*4+2]=r.b,h[c*4+3]=o,this.spin.array[c]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},j0=`
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
}`,Q0=`
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
}`,qS=`
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
}`,YS=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function eg(s){let e=new Vt;e.name="campfire-fx";let t=[],n=new vi(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,g,,y,p]=i[f],m=new sn({vertexShader:j0,fragmentShader:Q0,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:qn,side:rn,fog:!1}),M=new wt(n,m);M.position.set(d,.32,g),M.scale.set(y,p,1),M.renderOrder=6,M.frustumCulled=!1,e.add(M),t.push(M)}let r=s.sparks,o=Bn(5),a=new Float32Array(r*3),c=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,c[f*4]=o(),c[f*4+1]=o(),c[f*4+2]=o(),c[f*4+3]=o()*1.2;let l=new Dt;l.setAttribute("position",new Et(a,3)),l.setAttribute("aSeed",new Et(c,4));let h=new sn({vertexShader:qS,fragmentShader:YS,transparent:!0,depthWrite:!1,blending:qn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),u=new gi(l,h);return u.frustumCulled=!1,u.renderOrder=7,e.add(u),{group:e,update(f,d,g){for(let y of t)y.material.uniforms.uTime.value=f,y.material.uniforms.uPower.value=g;h.uniforms.uTime.value=f,h.uniforms.uPx.value=d,h.uniforms.uPower.value=Math.min(1,g*1.2)},dispose(){n.dispose(),l.dispose(),h.dispose();for(let f of t)f.material.dispose()}}}var KS=`
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
}`,ZS=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function tg(s){let e=Bn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Dt;i.setAttribute("position",new Et(t,3)),i.setAttribute("aSeed",new Et(n,4));let r=new sn({vertexShader:KS,fragmentShader:ZS,transparent:!0,depthWrite:!1,blending:qn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new gi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,c){let l=Bn(123);for(let h=0;h<s;h++){let u=l()*nt,f=a+l()*(c-a);t[h*3]=Math.cos(u)*f,t[h*3+1]=.6+l()*2.2,t[h*3+2]=Math.sin(u)*f}i.getAttribute("position").needsUpdate=!0},update(a,c,l){r.uniforms.uTime.value=a,r.uniforms.uPx.value=c,r.uniforms.uAlpha.value=l,o.visible=l>.01},dispose(){i.dispose(),r.dispose()}}}var Lh=class{constructor(e=96){this.max=e,this.normal=new ki("puff",e,_i),this.add=new ki("glow",e,qn),this.list=[],this.tmp=new Ve,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new Ve(r):new Ve(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),c=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let l=0;l<o;l++){let h=Math.random()*nt,u=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,g=.25+Math.random()*.3,y=a;e==="poof"&&(g=.35+Math.random()*.35),e==="dust"&&(u=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,g=.14+Math.random()*.1),e==="bubble"&&(u=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),g=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(u=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,g=.45+Math.random()*.4),e==="confetti"&&(u=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,g=.1+Math.random()*.08,y=new Ve(c[l%c.length])),this.list.push({kind:e,x:t+Math.cos(h)*.2,y:n+Math.random()*.4,z:i+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:f,vz:Math.sin(h)*u,t:0,life:d,size:g,c:y})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},Ph=null;function ng(s=.35,e=.6,t=1){Ph||(Ph=new vi(1,1),Ph.translate(0,.5,0));let n=new sn({vertexShader:j0,fragmentShader:Q0,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:qn,side:rn,fog:!1}),i=new wt(Ph,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var JS=`
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
}`,$S=`
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
}`;function ig(s){let t=Bn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let g=0;g<900;g++)n[g*3]=(t()-.5)*46,n[g*3+1]=t()*18,n[g*3+2]=(t()-.5)*46,i[g*4]=t(),i[g*4+1]=t(),i[g*4+2]=t(),i[g*4+3]=t();let r=new Dt;r.setAttribute("position",new Et(n,3)),r.setAttribute("aSeed",new Et(i,4));let o=new sn({vertexShader:JS,fragmentShader:$S,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new Y}}}),a=new gi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let c=new ki("puff",40,_i);c.mesh.renderOrder=4,s.add(c.mesh);let l=[];for(let g=0;g<40;g++)l.push({a:t()*nt,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let h="none",u=0,f=0,d=new Ve("#c9cfd8");return{set(g){h=g||"none"},get kind(){return h},update(g,y,p,m,M,A,b){if(u+=((h==="snow"||h==="leaves"?1:0)-u)*Math.min(1,g*.8),a.visible=u>.01&&M>0,a.visible){r.setDrawRange(0,Math.min(900,M));let x=o.uniforms;x.uTime.value=y,x.uPx.value=p,x.uKind.value=h==="leaves"?1:0,x.uAlpha.value=u*(h==="snow"?.9:1),x.uCenter.value.copy(m)}if(f+=((h==="fog"?1:0)-f)*Math.min(1,g*.5),c.begin(),f>.01){d.set("#cfd6de"),A&&d.lerp(A,.5),d.multiplyScalar(1-b*.6);let x=Math.min(40,Math.max(8,Math.round(M/20)));for(let E=0;E<x;E++){let U=l[E],S=U.a+y*U.sp;c.add(Math.sin(S)*U.r,U.y,Math.cos(S)*U.r,U.s,d,.16*f)}}c.end(y)},dispose(){r.dispose(),o.dispose(),c.dispose(),s.remove(a),s.remove(c.mesh)}}}var Za=1.12,jS=1.75,sg=2.8,QS={walk:sg,brisk:3.75,sneak:2.4,sprint:5.4,stroll:2.1};var NT=new Y,Pd=null,bi=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Vt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*Za,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=dt(e.skin|0,0,11),n=jn(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=xh(n.scene),r=Po("cloth",Mn[dt(e.color|0,0,19)]),o=null;i.traverse(l=>{if(l.isMesh){if(l.material.name==="cloth"&&r)l.material=r;else if(l.isSkinnedMesh&&l.userData.clothMerged&&l.material.name==="villager"){let h=xd(Mn[dt(e.color|0,0,19)]);h&&(l.material=h)}l.castShadow=!0,l.receiveShadow=!1,l.isSkinnedMesh?(o?l.skeleton!==o&&l.skeleton.bones.length===o.bones.length&&(l.skeleton.dispose(),l.skeleton=o):o=l.skeleton,l.boundingSphere=new Qt(new Y(0,.3,-.15),.85),l.frustumCulled=!0):l.frustumCulled=!1}});let a=i.getObjectByName("head"),c=Ya[e.hat|0];if(a&&c&&Ln("hats/hats.glb")){let l=jn("hats/hats.glb").scene.getObjectByName(c);if(l){let h=l.clone();h.position.set(0,U0[t]||0,0),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),a.add(h)}}i.scale.multiplyScalar(Za),this.world.toon&&Va(i,.012),this.model=i,this.root.add(i),this.mixer=new As(i),this.clips=vd(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.headAnimQ=null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*Za}buildGhost(e){let t=jn("characters/ghost.glb"),n=t.scene.clone(!0),i=Po("tint-ghost",Mn[dt(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(Mn[e.color|0]).multiplyScalar(.25));let r=gd("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(Za*.95),this.model=n,this.root.add(n),this.mixer=new As(n),Pd||(Pd=t.animations),this.clips=Pd,this.headY=1.95*Za}action(e){if(this.actions[e])return this.actions[e];let t=yi.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(Na,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(Na,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk"){this.path=e.slice(),this.mode=t}setVisible(e){this.visible=e,this.root.visible=e&&(this.camFade==null||this.camFade>.001)}setFade(e){if(this.camFade=e,!!this.model){if(e>=.999){this.fadeMats&&(this.model.traverse(t=>{t.isMesh&&t.userData.origMat&&(t.material=t.userData.origMat,t.userData.origMat=null)}),this.fadeMats=null),this.root.visible=this.visible;return}this.fadeMats||(this.fadeMats=[],this.model.traverse(t=>{if(!t.isMesh||Array.isArray(t.material))return;let n=t.material.clone();n.transparent=!0,n.depthWrite=!0,t.userData.origMat=t.material,t.material=n,this.fadeMats.push(n)}));for(let t of this.fadeMats)t.opacity=e;this.root.visible=this.visible&&e>.001}}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let h=Math.atan2(l.x,l.z);this.yaw+=un(h-this.yaw)*hn(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>3.7?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],h=l.x-this.pos.x,u=l.z-this.pos.z,f=Math.hypot(h,u),d=this.path.length===1;if(this.bestD==null||f<this.bestD-.05?(this.bestD=f,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,f<(d?.06:.45)||this.stuckT>.7&&(!d||f<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=QS[this.mode]||sg,d&&!(this.retargetAt!=null&&this.world.time-this.retargetAt<.5)&&(n=Math.min(n,.9+f*3.2));let g=h,y=u;if(!d&&f<1.2){let S=this.path[1],F=1-f/1.2;g=h*(1-F)+(S.x-this.pos.x)*F,y=u*(1-F)+(S.z-this.pos.z)*F}let p=Math.atan2(g,y),m=un(p-this.yaw);this.yaw+=m*hn(12,e),n*=dt(1.25-Math.abs(m)/1.6,.2,1);let M=Math.min(f,this.speed*e),A=Math.sin(this.yaw),b=Math.cos(this.yaw),C=h/f,I=u/f,x=A*.55+C*.45,E=b*.55+I*.45,U=Math.hypot(x,E)||1;this.pos.x+=x/U*M,this.pos.z+=E/U*M}}else this.faceYaw!=null&&(this.yaw+=un(this.faceYaw-this.yaw)*hn(4,e));let i=!this.path&&!(this.drive&&this.drive.speed>.05);this.speed+=(n-this.speed)*hn(n>this.speed?6:i?28:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let r=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(r){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=r?dt(this.speed/jS,.5,1.9)*(this.base==="sneak"?1.1:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=r?dt(this.speed/3.6,.6,1.6):1),r&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!r&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let o=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let h=l.t>=l.dur;o=Math.min(1,l.t/l.fade)*(h?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),h&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),o=0)}let a=0;for(let l in this.weights){let h=this.targets[l]||0,u=this.weights[l],f=this.fadeRate*e;u=u<h?Math.min(h,u+f):Math.max(h,u-f),this.weights[l]=u,a+=u}let c=a>1e-4?(1-o)/a:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let h=this.actions[l];h?h.setEffectiveWeight(this.weights[l]*c):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(o),this.animEvery===-1?this.animAcc=0:this.animAcc=Math.min(.25,(this.animAcc||0)+e),this.animTick=this.animEvery===-1?1:((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0?(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0,this.headBone&&(this.headAnimQ||(this.headAnimQ=new Zt),this.headAnimQ.copy(this.headBone.quaternion))):this.headBone&&this.headAnimQ&&this.headBone.quaternion.copy(this.headAnimQ),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let h=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=dt(un(h-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*hn(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}r&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk"),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){if(this.fadeMats){for(let e of this.fadeMats)e.dispose();this.fadeMats=null}this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var Ja=new Y(0,0,-620);function wn(s,e,t,n,i,r,o=0,a=1){let c=Sn(e,t);if(!c)return null;let l=c.clone();return l.position.set(n,i,r),l.rotation.set(0,o*Math.PI/180,0),l.scale.setScalar(a),l.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),s.add(l),l}function Ld(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,c=null,l=null,h=[],u={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Ln("interior/furniture.glb")||!Ln("interior/clues.glb"))return t;e=new Vt,e.name="interior",e.position.copy(Ja),e.visible=!1,s.scene.add(e);for(let O of[-2.5,0,2.5])for(let X of[-2.5,0,2.5])wn(e,"furniture","floor-planks",O,0,X);for(let O of[-2.5,0,2.5])wn(e,"furniture",O===0?"wall-wood-window":"wall-wood",O,0,-2.5,90);for(let O of[-2.5,0,2.5])wn(e,"furniture",O===-2.5?"wall-wood-window":"wall-wood",-2.5,0,O,180);for(let O of[-2.5,0,2.5])wn(e,"furniture",O===0?"wall-wood-door":"wall-wood",2.5,0,O,0);let U=new wt(new vi(40,40),new mn({color:"#3f5a34"}));U.rotation.x=-Math.PI/2,U.position.y=-.02,e.add(U);let S=wn(e,"furniture","bed",u.bed.x,0,u.bed.z);S&&S.traverse(O=>{O.isMesh&&O.material&&O.material.name==="carpet"&&(a||(a=O.material.clone()),O.material=a)}),c=wn(e,"furniture","rug-round",u.rug.x,.01,u.rug.z),wn(e,"furniture","table",1.6,0,-1.5),wn(e,"furniture","chair",1.6,0,-.3,180),wn(e,"furniture","candle",1.2,.79,-1.6),wn(e,"clues","mug",1.85,.79,-1.35),wn(e,"clues","bread",2.1,.79,-1.75),l=wn(e,"furniture","chest",-.3,0,-2.8),wn(e,"furniture","bookcase",-3.4,0,1.2,90),wn(e,"furniture","lantern",u.lantern.x,0,u.lantern.z),wn(e,"furniture","coat-rack",3.05,0,-2),wn(e,"furniture","plant-pot",2.9,0,-3.05),wn(e,"furniture","barrel",-3,0,3,0,.8),o=new mn({color:"#c9b48a",side:rn});let D=new wt(new xi(.9,1.25,.04),o);D.position.set(1.55,1.75,-3.42),e.add(D);let k=new wt(new ns(.03,.03,1.1,6),new mn({color:"#5a3a22"}));return k.rotation.z=Math.PI/2,k.position.set(1.55,2.4,-3.4),e.add(k),t=!0,!0}let d=new Y;function g(U,S=0){var F;return d.set(Ja.x+U.x,Ja.y+((F=U.y)!=null?F:S),Ja.z+U.z).clone()}function y(U){if(!f())return!1;n=U;let S=Mn[dt((U.look&&U.look.color)|0,0,19)];return o.color.set(S),a&&a.color.set(S).lerp(new Ve("#ffffff"),.25),i&&(i.dispose(),i=null),U.look&&(i=new bi(s,"room-sleeper",U.look),i.setBase("lie",0),i.pos.copy(g(u.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),p(),!0}function p(){c&&(c.position.set(u.rug.x,.01,u.rug.z),c.rotation.set(0,0,0));for(let U of h.splice(0))U.parent&&U.parent.remove(U)}function m(U){return y(U)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function M(){e&&(e.visible=!1),i&&(i.dispose(),i=null),C(),p(),n=null}function A(U,S,F,D,k=0){b(U);let O=new bi(s,"room-"+U,S);return O.pos.copy(g(D)),O.yaw=k,O.root.rotation.y=k,s.scene.add(O.root),r.set(U,{ch:O,name:F,color:S.color|0,label:!!F}),O}function b(U){let S=r.get(U);S&&(S.ch.dispose(),r.delete(U))}function C(){for(let U of[...r.keys()])b(U)}function I(U){return e.add(U),h.push(U),U}function x(U,S){if(!(!e||!e.visible)){i&&(i.update(U,S),i.root.position.y=Ja.y+u.sleeper.y+Math.sin(S*1.7)*.015);for(let F of r.values())F.ch.update(U,S)}}function E(U,S){return U==="window"?{pos:g({x:S?-6.9:-6.3,y:1.75,z:S?-2.95:-3}),look:g({x:-1.6,y:.9,z:-2.1}),fov:S?56:42}:U==="search"?{pos:g({x:S?.5:3.4,y:S?9:4.6,z:S?4.3:5.6}),look:g({x:-.5,y:.3,z:-.7}),fov:S?58:48}:{pos:g({x:S?.4:3.6,y:S?9.2:4.9,z:S?4.1:5.9}),look:g({x:S?-.45:-.9,y:.3,z:S?-.75:-1.1}),fov:S?58:48}}return{L:u,W:g,show:m,hide:M,dress:y,update:x,shot:E,addActor:A,removeActor:b,clearActors:C,addTemp:I,resetProps:p,get visible(){return!!(e&&e.visible)},get group(){return f(),e},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return c},get chest(){return l},lanternWorld(){return g(u.lantern)},dispose(){M(),e&&(s.scene.remove(e),e.traverse(U=>{U.geometry&&!U.geometry.userData.shared&&(U.geometry.type==="PlaneGeometry"||U.geometry.type==="BoxGeometry"||U.geometry.type==="CylinderGeometry")&&U.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var Ir={cancelled:!0},rg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Do=s=>1-Math.pow(1-s,3);function Dh(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===Ir&&s.preventDefault()}));function Dd(s,e={}){let t=!!e.scoped,n=e.timeout||13,i=new Map,r=null,o=!1,a=0;function c(g,y,p){typeof y=="function"&&(p=y,y=null),i.set(y?g+":"+y:g,p)}function l(g){return i.get(g.kind+":"+(g.scene||""))||i.get(g.kind)}function h(g){return new Promise(y=>{if(o||!g||!g.kind){y();return}f();let p=l(g);if(!p){y();return}let m=++a;!t&&["death","hanged","shot","left"].includes(g.kind)&&s.holdDeaths((g.targets||[]).map(b=>b.id).filter(Boolean));let M=d(m,g),A={msg:g,resolve:y,ctx:M};r=A,(async()=>{try{await Promise.race([p(M,g),M.timeout(n)])}catch(b){b!==Ir&&console.warn("[VKWorld] sinematik hatas\u0131",b)}u(A)})()})}function u(g){if(!g.done){g.done=!0;try{g.ctx.cleanup()}catch(y){console.warn("[VKWorld] sinematik temizli\u011Fi",y)}r===g&&(r=null),g.resolve()}}function f(){if(r){let g=r;g.ctx.cancel(),u(g)}}function d(g,y){let p=new Map,m=new Set,M=new Set,A=[],b=[],C=!1,I=!1,x=!1,E=!1,U=()=>!o&&!C&&g===a,S=()=>U()&&!(t&&s.mainBusy&&s.mainBusy()),F={world:s,msg:y,alive:U,cancel(){C=!0;for(let D of M)D.reject(Ir);M.clear()},wait(D){return U()?Dh(new Promise((k,O)=>{let X={resolve:k,reject:O,left:D};M.add(X),s.ticker.push(W=>M.has(X)?(X.left-=W,X.left<=0?(M.delete(X),k(),!0):!1):!0)})):Dh(Promise.reject(Ir))},timeout(D){return new Promise(k=>{let O=setTimeout(k,D*1e3);m.add(O)})},tween(D,k,O=rg){return U()?Dh(new Promise((X,W)=>{let B=0,_={resolve:X,reject:W};M.add(_),s.ticker.push(v=>{if(!M.has(_))return!0;B=Math.min(D,B+v);try{k(O(D>0?B/D:1),v)}catch(R){console.warn(R)}return B>=D?(M.delete(_),X(),!0):!1})})):Dh(Promise.reject(Ir))},shot(D,k,O={}){S()&&(E=!0,s.rig.setOverride({pos:D.clone(),look:k.clone(),fov:O.fov||40,k:O.k||2.4}))},cut(D,k,O={}){S()&&(E=!0,s.rig.setOverride({pos:D.clone(),look:k.clone(),fov:O.fov||40,k:60},!0))},move(D,k,O,X,W,B={}){let _=new Y,v=new Y;return F.cut(D,k,B),F.tween(W,R=>{S()&&(_.lerpVectors(D,O,R),v.lerpVectors(k,X,R),s.rig.setOverride({pos:_,look:v,fov:B.fov||40,k:60},!0))},B.ease||rg)},claim(D){let k=s.chars.get(D);return k?(p.has(k)||(p.set(k,{x:k.pos.x,y:k.pos.y,z:k.pos.z,yaw:k.yaw,visible:k.visible,inside:k.inside,peeking:k.peeking,base:k.base}),k.claimed=!0,k.run([])),k):null},add(D,k){return(k||s.scene).add(D),A.push(D),D},prop(D,k,O,X,W,B=0,_=1){let v=s.assets.prop(D,k);if(!v)return null;let R=v.clone();return R.position.set(O,X,W),R.rotation.y=B,R.scale.setScalar(_),R.traverse(T=>{T.isMesh&&(T.castShadow=!0)}),F.add(R)},actor(D,k,O,X,W=0,B){let _=s.makeActor(D,k,B);return _.pos.set(O,0,X),_.yaw=W,_.root.rotation.y=W,A.push({dispose:()=>s.dropActor(_)}),_},hideObj(D){D&&D.visible&&(D.visible=!1,b.push(D))},tod(D,k){x=!0,s.setTodOverride(D,k)},room(){return I=!0,s.room},openRoom(D){return I=!0,t?s.openShowRoom(D):s.openRoom(D)},get scoped(){return t},fx:s.fx,sfx:(D,k)=>s.sfx(D,k),flash:(D,k)=>s.flash(D,k),cleanup(){C=!0;for(let D of m)clearTimeout(D);for(let D of M)D.reject(Ir);M.clear();for(let D of A.splice(0))D.dispose&&!D.isObject3D?D.dispose():D.parent&&D.parent.remove(D),D.userData&&D.userData.cleanup&&D.userData.cleanup();for(let D of b.splice(0))D.visible=!0;for(let[D,k]of p)D.claimed=!1,D.dropProps(),D.pos.set(k.x,k.y,k.z),D.yaw=k.yaw,D.inside=k.inside,D.peeking=k.peeking,D.alive!==!1&&D.setVisible(k.visible&&!s.isDeadShown(D.id)),D.setBase(k.base==="walk"||k.base==="sprint"||k.base==="sneak"?"idle":k.base||"idle",.2),D.run([]);t?(s.endShowRoom(),x&&s.setTodOverride(null),E&&!(s.mainBusy&&s.mainBusy())&&s.rig.setOverride(null)):(s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),x&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null)),p.size&&(p.clear(),s.reapply(!0))}};return F}return{register:c,announce:h,CANCEL:Ir,get running(){return!!r},get current(){return r?r.msg:null},skip(){f()},reset(){a++,f(),s.rig.setOverride(null)},dispose(){o=!0,a++,f()}}}var mt=(s,e,t)=>new Y(s,e,t),$a=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function og(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(_,v={}){var Xe;let R=e.houseAnchors(_);if(!R)return null;let T=v.back,z=T?R.backWin:{x:(R.door.x+R.frontWin.x)/2,z:(R.door.z+R.frontWin.z)/2},q=T?R.peek:R.approach,V=T?R.backWin:R.door,Q=q.x-V.x,ye=q.z-V.z,oe=Math.hypot(Q,ye)||1,ne=(v.dist||11)*(e.rig.portrait?1.3:1),Se=(Xe=v.side)!=null?Xe:.18,Fe=-ye/oe*Se,ue=Q/oe*Se;return{pos:mt(z.x+(Q/oe+Fe)*ne,v.height||7.2,z.z+(ye/oe+ue)*ne),look:mt(z.x,v.lookY||1.8,z.z),a:R}}function r(_,v={}){let R=e.camera.position,T=R.x-_.x,z=R.z-_.z,q=Math.hypot(_.x,_.z);e.village.layout&&q>e.village.layout.Rp*.8&&(T=-_.x,z=-_.z),v.dir&&(T=v.dir.x,z=v.dir.z);let V=Math.hypot(T,z)||1,Q=(v.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:mt(_.x+T/V*Q,v.height||3,_.z+z/V*Q),look:mt(_.x,v.lookY||1.1,_.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,c=()=>e.rig.portrait?1.6:1;function l(_,v,R){let T=0;e.ticker.push(z=>{if(!_.alive())return!0;if(T+=z,T<v)return!1;try{R()}catch(q){console.warn("[VKWorld]",q)}return!0})}function h(_,v,R=4.2,T=null){e.ticker.push(()=>{if(!_.alive())return!0;let z=e.camera.position;for(let q of v){if(q===T||!q.visible)continue;let V=q.pos.x-z.x,Q=q.pos.z-z.z,ye=q.pos.y+1-z.y;V*V+Q*Q+ye*ye*.25<R*R&&q.setVisible(!1)}return!1})}async function u(_,v,R,T,z=.3,q=2.2){if(!Ln("characters/ghost.glb")||!v)return;let V=_.actor(v,"",R,T,0,"ghost");V.root.position.y=z,_.sfx("poof",{volume:.5}),await _.tween(q,Q=>{V.root.position.y=z+Q*2.3,V.yaw+=.02;let ye=1.3*(1-Math.max(0,Q-.75)*3);V.root.scale.setScalar(Math.max(.05,ye))},Do),e.fx.emit("magic",R,z+2.6,T,Mn[v.color|0],12),V.setVisible(!1)}function f(_,v){e.markDead(v,{drop:!0});let R=e.houseAnchors(v);R&&l(_,.38,()=>e.fx.emit("poof",R.tomb.x,.2,R.tomb.z,"#b8a890",10)),_.sfx("poof",{volume:.6})}function d(_,v,R,T,z=10,q=2.4,V=3.5,Q={x:0,z:-1},ye=1){if(!Ln("characters/bat.glb"))return Promise.resolve();let oe=jn("characters/bat.glb").scene.children[0],ne=[];for(let Fe=0;Fe<z;Fe++){let ue=oe.clone(!0);ue.scale.setScalar((1+Math.random()*.5)*ye),_.add(ue),ne.push({b:ue,a:Fe/z*nt,r:V*(.6+Math.random()*.6),h:R+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:ue.getObjectByName("wing-left"),wr:ue.getObjectByName("wing-right"),ph:Math.random()*6})}_.sfx("whoosh",{volume:.6});let Se=0;return _.tween(q,(Fe,ue)=>{Se+=ue;let Xe=Math.max(0,Fe-.55)/.45;for(let le of ne){le.a+=le.sp*ue;let ee=le.r*(1+Xe*5),Ue=v+Math.sin(le.a)*ee+Q.x*Xe*Xe*25,Ze=T+Math.cos(le.a)*ee+Q.z*Xe*Xe*25,Ce=le.h+Math.sin(Se*3+le.ph)*.4+Xe*8;le.b.position.set(Ue,Ce,Ze),le.b.rotation.y=le.a+Math.PI/2;let We=Math.sin(Se*22+le.ph)*.9;le.wl&&(le.wl.rotation.z=We),le.wr&&(le.wr.rotation.z=-We)}},Fe=>Fe)}function g(_,v,R,T){if(!Ln("characters/vampire.glb"))return null;let z=jn("characters/vampire.glb"),q=z.scene.clone(!0);q.scale.multiplyScalar(1.05),q.position.set(v,0,R),q.rotation.y=T,_.add(q);let V=new As(q),Q=null,ye=ne=>{let Se=yi.findByName(z.animations,ne);if(!Se)return;let Fe=V.clipAction(Se);Q&&Q!==Fe&&Q.fadeOut(.15),Fe.reset().fadeIn(.15).play(),Q=Fe};ye("idle"),e.ticker.push(ne=>q.parent?(V.update(ne),!1):(V.stopAllAction(),!0));let oe=y(.5,"#ff2244");return oe.position.set(0,1.85,.25),q.add(oe),{root:q,play:ye}}function y(_,v){let R=m(),T=new ws({map:R,color:v,transparent:!0,depthWrite:!1,blending:qn,fog:!1}),z=new cr(T);return z.scale.setScalar(_),z.userData.cleanup=()=>T.dispose(),z}let p=null;function m(){if(p)return p;let _=document.createElement("canvas");_.width=_.height=64;let v=_.getContext("2d"),R=v.createRadialGradient(32,32,0,32,32,32);return R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(.35,"rgba(255,255,255,0.45)"),R.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=R,v.fillRect(0,0,64,64),p=new es(_),p.colorSpace=Bt,p}function M(_){let v=new Vt,R=new wt(new ns(.05,.06,.9,6),new mn({color:"#6b4426"}));R.position.y=.2,v.add(R);let T=new wt(new ns(.1,.07,.16,6),new mn({color:"#3a2a20"}));T.position.y=.66,v.add(T);let z=ng(.38,.62,Math.random()*9);z.position.y=.7,v.add(z);let q=y(1.3,"#ffb347");return q.position.y=.95,v.add(q),e.ticker.push(()=>!v.parent&&v.userData.used?!0:(z.userData.tick(e.time),!1)),v.userData.holdScale=1/1.12/2.5*1,v.userData.used=!0,v.userData.cleanup=()=>{R.geometry.dispose(),R.material.dispose(),T.geometry.dispose(),T.material.dispose(),z.userData.cleanup(),q.userData.cleanup()},v}function A(_,v,R=1){let T=Sn(_,v);if(!T)return null;let z=T.clone();return z.userData.holdScale=1/(1.12*2.5)*R,z}function b(_=[],v=10){let R=[];for(let[T,z]of e.chars)if(!(!z.visible||_.includes(T)||z.isGhost)&&(R.push(z),R.length>=v))break;return R}function C(_,v){for(let R of _)R.faceYaw=Math.atan2(v.x-R.pos.x,v.z-R.pos.z),R.gaze(v,6,e.time)}function I(_,v,R=4){for(let T of _)T.gaze(v,R,e.time)}s.register("start",async _=>{let v=t(),R=b([],20);_.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let T=mt(0,v*1.1,v*1.3),z=mt(0,.4,0),q=mt(v*.3,4.8,v*.8+2),V=mt(0,1,0);l(_,.9,()=>I(R,e.camera.position,4)),await _.move(T,z,q,V,3,{fov:o()+4});for(let Q of R)Math.random()<.6&&Q.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await _.wait(1.6)}),s.register("night",async _=>{let v=t(),R=b([],20);for(let T of R)Math.random()<.7&&T.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});_.tod(21),_.sfx("whoosh",{volume:.5}),await _.move(mt(0,3.2,v*.75),mt(0,1.2,0),mt(0,v*.55,v*1.15),mt(0,v*.9,-v*2.5),3.6,{fov:o()+6}),await _.wait(.6)}),s.register("death",async(_,v)=>{let R=(v.targets||[]).slice(0,2);_.tod(5.7);for(let T of R){let z=T.cause==="zehir"?"poison":["bite","bats","vanish"].includes(T.scene)?T.scene:"bite";if(T.id===e.meId()){if(e.sawOwnDeath&&e.sawOwnDeath()){await U(_,T.id,R.length>1?.7:1);continue}if(await S(_,T,z==="poison"))continue}await E(_,T.id,z,R.length>1?.8:1)}});function x(_,v){let R=n();if(!R)return[];let T=R.houses,z=T.findIndex(V=>V.id===_);if(z<0)return[];let q=[];for(let V=1;V<T.length&&q.length<v;V++)for(let Q of[z+V,z-V]){let ye=T[(Q%T.length+T.length)%T.length];!ye||ye.id===_||q.includes(ye.id)||q.length>=v||e.isDeadShown(ye.id)||ye.id===e.meId()&&!e.playerById(ye.id)||e.playerById(ye.id)&&q.push(ye.id)}return q}async function E(_,v,R,T){let z=i(v,{dist:9.5,height:4.6,side:.38,lookY:1});if(!z)return;let q=z.a,V=e.playerById(v),Q=V?V.look:null,ye=mt(z.pos.x*.9+q.approach.x*.1,z.pos.y-.8,z.pos.z*.9+q.approach.z*.1),oe={x:q.door.x+(q.approach.x-q.door.x)*1.15,z:q.door.z+(q.approach.z-q.door.z)*1.15},ne=mt(oe.x,.7,oe.z);_.cut(z.pos,ne,{fov:o()}),_.move(z.pos,ne,ye,ne,5.6*T,{fov:o()}),await _.wait(.35*T),e.village.openDoor(v,4.5),_.sfx("door");let Se=x(v,3),Fe=[];if(h(_,Fe,5),Se.forEach((Ue,Ze)=>l(_,(.9+Ze*.35)*T,()=>{let Ce=e.houseAnchors(Ue),We=e.playerById(Ue);if(!Ce||!We)return;e.village.openDoor(Ue,2.5);let we=_.actor(We.look,"",Ce.inside.x,Ce.inside.z,Ce.rotY);Fe.push(we);let ke={x:Ce.approach.x+(oe.x-Ce.approach.x)*.6,z:Ce.approach.z+(oe.z-Ce.approach.z)*.6};we.run([{walk:[Ce.approach,ke],mode:"walk"},{faceTo:oe},{wait:.6},{once:Math.random()<.5?"emote-no":"interact-right",opts:{timeScale:.8}}])})),R==="vanish"){await _.wait(.4*T);for(let we=0;we<3;we++)e.fx.emit("mist",q.door.x,.4+we*.3,q.door.z,"#9b7bff",8),await _.wait(.22*T);let Ue=Q?Ya[Q.hat|0]:null,Ze=Ue&&Ln("hats/hats.glb")?jn("hats/hats.glb").scene.getObjectByName(Ue):null,Ce=null;if(Ze)Ce=Ze.clone(),Ce.scale.multiplyScalar(4.5);else{let we=Sn("furniture","pillow");we&&(Ce=we.clone(),Ce.scale.setScalar(.6))}Ce&&(Ce.position.set(oe.x,.02,oe.z),Ce.rotation.set(0,Math.random()*nt,.25),_.add(Ce),e.fx.emit("poof",oe.x,.2,oe.z,"#b8a890",6)),_.sfx("whoosh"),await _.wait(1.4*T),e.flickerHouse(v,1.2*T),await _.wait(.6*T);let We=u(_,Q,q.door.x,q.door.z,.4,2*T);await _.wait(.6*T),f(_,v),await We;return}let ue=Q?_.actor(Q,"",q.inside.x,q.inside.z,q.rotY):null;if(ue){ue.run([{walk:[q.door,oe],mode:"sneak"}]);let Ue=0;e.ticker.push(Ze=>!_.alive()||!ue.root.visible||ue.base==="lie"?!0:(Ue+=Ze*7,ue.root.rotation.z=Math.sin(Ue)*.12,!1))}if(R==="poison"){_.sfx("potion");for(let Ue=0;Ue<5;Ue++)ue&&e.fx.emit("bubble",ue.pos.x,1.3,ue.pos.z,"#94d82d",5),await _.wait(.24*T)}else R==="bats"?(_.sfx("bite",{volume:.6}),d(_,(q.door.x+q.backWin.x)/2,(q.height||4)+.6,(q.door.z+q.backWin.z)/2,6,2*T,1.6,{x:q.backWin.x-q.door.x,z:q.backWin.z-q.door.z},.8),await _.wait(1.2*T)):(await _.wait(1*T),_.sfx("bite",{volume:.5}),e.flash(.22,"#d7263d"),await _.wait(.2*T));ue&&(ue.run([]),ue.path=null,ue.root.rotation.z=0,ue.faceYaw=Math.atan2(oe.x-q.door.x,oe.z-q.door.z),ue.setBase("lie",.15),R==="poison"&&e.fx.emit("bubble",ue.pos.x,.5,ue.pos.z,"#94d82d",10),e.fx.emit("dust",ue.pos.x,.1,ue.pos.z,null,6)),e.flickerHouse(v,1.2*T),await _.wait(1.3*T);let Xe=ue?ue.pos.x:oe.x,le=ue?ue.pos.z:oe.z,ee=u(_,Q,Xe,le,.3,2*T);await _.wait(.7*T),ue&&(e.fx.emit("poof",Xe,.3,le,"#d8d0ff",12),ue.setVisible(!1)),f(_,v),await ee,await _.wait(.2)}async function U(_,v,R){let T=i(v,{dist:11,height:7.4,side:.2,lookY:2.2});if(!T){e.markDead(v,{quiet:!0,drop:!0});return}_.cut(T.pos,T.look,{fov:o()}),await _.wait(.5*R),e.village.tombOf&&e.village.tombOf(v)?e.markDead(v,{quiet:!0}):f(_,v),await _.wait(1.3*R)}async function S(_,v,R){let T=_.openRoom(v.id);if(!T)return!1;let z=e.playerById(v.id),q=T.shot("inside",e.rig.portrait);_.cut(q.pos,q.look,{fov:q.fov});let V=T.L,Q=T.W({x:V.bedside.x,z:V.bedside.z}),ye=T.W({x:V.sleeper.x,z:V.sleeper.z});await _.wait(1.1),_.sfx("door",{volume:.6});let oe=T.W(V.doorStep),ne=T.W(V.doorIn),Se=g(_,oe.x,oe.z,Math.atan2(ne.x-oe.x,ne.z-oe.z));if(Se){R&&Se.root.traverse(Ze=>{if(Ze.isMesh){let Ce=new Jt({color:"#0b0a12",transparent:!0,opacity:.82});Ze.material=Ce,Ze.userData.cleanup=()=>Ce.dispose()}}),Se.play("walk");let ue=[oe,ne,Q],Xe=[Math.hypot(ne.x-oe.x,ne.z-oe.z),Math.hypot(Q.x-ne.x,Q.z-ne.z)],le=Xe[0]+Xe[1];await _.tween(le/1.6,Ze=>{let Ce=Ze*le,[We,we,ke]=Ce<Xe[0]?[ue[0],ue[1],Ce/Xe[0]]:[ue[1],ue[2],(Ce-Xe[0])/Xe[1]];Se.root.position.x=We.x+(we.x-We.x)*ke,Se.root.position.z=We.z+(we.z-We.z)*ke,Se.root.rotation.y=Math.atan2(we.x-We.x,we.z-We.z)},Ze=>Ze),Se.play("idle");let ee=Se.root.rotation.y,Ue=Math.atan2(ye.x-Se.root.position.x,ye.z-Se.root.position.z);await _.tween(.5,Ze=>{Se.root.rotation.y=ee+(((Ue-ee+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*Ze,Se.root.rotation.x=.35*Ze}),Se.play("interact-right")}e.flickerRoom(1.5),_.sfx(R?"potion":"bite",{volume:.7}),R||e.flash(.25,"#d7263d"),await _.wait(1.6),Se&&(e.fx.emit("smoke",Se.root.position.x,1,Se.root.position.z,"#2a2238",16),Se.root.visible=!1),await _.wait(.3);let Fe=u(_,z&&z.look,ye.x,ye.z,.9,2.2);return e.markDead(v.id,{quiet:!0,drop:!0}),await Fe,await _.wait(.4),!0}s.register("safe",async _=>{let v=t();_.tod(5.4,!0),l(_,.05,()=>_.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((T,z)=>l(_,.7+z*.26,()=>e.village.openDoor(T,1.4))),await _.move(mt(-v*.9,v*.45,v*.95),mt(0,2,0),mt(v*.55,v*.55,v*1),mt(v*1.6,4,-v*.6),4.6,{fov:o()+4}),await _.wait(.3)}),s.register("nohang",async _=>{let v=t(),R=b([],20);I(R,mt(0,1,0),4),R.forEach((T,z)=>l(_,z*.09,()=>T.playOnce("emote-no",{timeScale:.9}))),await _.move(mt(0,4,v*.55),mt(0,1,0),mt(0,v*.8,v*1.15),mt(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async _=>{let v=t(),R=b([],20).map(T=>_.claim(T.id)).filter(Boolean);for(let T of R)T.setBase(Math.random()<.5?"sit":"warm",.5);_.tod(19.6),await _.move(mt(0,3.4,v*.7),mt(0,1,0),mt(0,v*.45,v*1.05),mt(0,v*.8,-v*2.5),4,{fov:o()+6})}),s.register("left",async(_,v)=>{let[R]=$a(v),T=R&&e.chars.get(R);if(T&&T.visible){_.claim(R);let z=r(T.pos,{dist:6});_.shot(z.pos,z.look,{fov:o()}),T.faceYaw=Math.atan2(e.camera.position.x-T.pos.x,e.camera.position.z-T.pos.z),await _.wait(.6),T.playOnce("emote-yes",{timeScale:.8}),await _.wait(1.4),e.fx.emit("mist",T.pos.x,.4,T.pos.z,"#c9c2d3",22),_.sfx("whoosh"),e.markDead(R,{quiet:!0}),T.setVisible(!1),await _.wait(1.4)}else if(R){let z=i(R,{dist:10});z&&(_.shot(z.pos,z.look,{fov:o()}),await _.wait(1),e.fx.emit("mist",z.a.door.x,.6,z.a.door.z,"#c9c2d3",20),f(_,R),await _.wait(1.6))}}),s.register("hanged",async(_,v)=>{let[R]=$a(v),T=["gallows","exile","cellar"].includes(v.scene)?v.scene:"gallows",z=R&&e.chars.get(R);if(!z){await _.wait(1.5);return}_.claim(R),z.setVisible(!0);let q=b([R],40).map(Q=>_.claim(Q.id)).filter(Boolean),V=q.slice(0,9);for(let Q of q.slice(9))Q.setVisible(!1);T==="gallows"?await k(_,z,V,R):T==="exile"?await O(_,z,V,R):await X(_,z,V,R)});function F(_,v){let R=n(),T=R.gateAngle+_,z=R.Rp*v;return{x:Math.sin(T)*z,z:Math.cos(T)*z,a:T}}function D(_,v,R,T,z={}){let q=_.length,V=z.spread||2.2;_.forEach((Q,ye)=>{let oe=T+(z.front?0:Math.PI)+(ye-(q-1)/2)/Math.max(1,q)*V;Q.pos.set(v.x+Math.sin(oe)*R+(Math.random()-.5)*.4,0,v.z+Math.cos(oe)*R+(Math.random()-.5)*.4),Q.yaw=Math.atan2(v.x-Q.pos.x,v.z-Q.pos.z),Q.faceYaw=Q.yaw,Q.gaze(v,8,e.time)})}async function k(_,v,R,T){let z=F(.25,.82),q=z.a+Math.PI;_.prop("village","platform-wood",z.x,0,z.z,q,1),_.prop("village","frame-wood",z.x,1.18,z.z,q,1);let V={x:Math.sin(q),z:Math.cos(q)},Q={x:Math.cos(q),z:-Math.sin(q)};_.prop("village","ladder",z.x+V.x*1.5-Q.x*.75,0,z.z+V.z*1.5-Q.z*.75,q,.8);let ye=new wt(new ns(.035,.035,1,6),new mn({color:"#c8a46a"}));ye.position.set(z.x,1.18+2.35-.5,z.z);let oe=new wt(new ya(.16,.035,6,12),ye.material);oe.position.set(z.x,1.18+1.75,z.z),oe.userData.cleanup=()=>{ye.geometry.dispose(),oe.geometry.dispose(),ye.material.dispose()},_.add(ye),_.add(oe);let ne=e.rig.portrait;D(R,{x:z.x,z:z.z},ne?3.6:4.2,q-1.25,{front:!0,spread:ne?1.4:1.7});let Se={x:z.x+V.x*3.4,z:z.z+V.z*3.4};v.pos.set(Se.x,0,Se.z),v.yaw=q+Math.PI,v.faceYaw=v.yaw;let Fe=ne?8:7.4,ue=ne?8:9.6,Xe=ne?a():32,le=mt(z.x+V.x*Fe+Q.x*ue,ne?6.2:5,z.z+V.z*Fe+Q.z*ue),ee=mt(z.x+V.x*Fe*.8+Q.x*ue*.8,ne?5.2:4.2,z.z+V.z*Fe*.8+Q.z*ue*.8),Ue=We=>mt(z.x-V.x*(ne?0:.7)-Q.x*.5,We,z.z-V.z*(ne?0:.7)-Q.z*.5);_.move(le,Ue(ne?1.6:1.7),ee,Ue(ne?1.9:2),4.2,{fov:Xe}),h(_,R,6),v.run([{walk:[{x:z.x+V.x*1.6,z:z.z+V.z*1.6}],mode:"walk"}]),await _.wait(1.4),await _.tween(.5,We=>{v.pos.y=We*1.2,v.pos.x=z.x+V.x*1.6*(1-We),v.pos.z=z.z+V.z*1.6*(1-We)}),v.run([]),v.faceYaw=q,v.yaw=q,v.setBase("idle",.2),await _.wait(.5),v.playOnce("emote-no",{timeScale:.9}),_.sfx("hang",{volume:.7}),await _.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",v.pos.x,1.4,v.pos.z,null,26),_.sfx("poof"),v.setVisible(!1);for(let We of R)Math.random()<.6&&We.playOnce(Math.random()<.5?"emote-no":"interact-right");let Ze=e.playerById(T),Ce=u(_,Ze&&Ze.look,z.x,z.z,1.4,1.8);e.markDead(T,{quiet:!0,drop:!0}),await Ce}async function O(_,v,R,T){let z=n(),q=z.gateAngle,V=(Ce,We=0)=>({x:Math.sin(q+We/Ce)*Ce,z:Math.cos(q+We/Ce)*Ce}),Q=V(z.R+2),ye=V(z.R-.6),oe=e.fogBoost(.6),ne=q+Math.PI/2,Se=_.prop("graveyard","iron-fence-gate",Q.x,0,Q.z,ne,1);v.pos.set(ye.x,0,ye.z),v.yaw=q,v.faceYaw=q;let Fe=R.slice(0,6);Fe.forEach((Ce,We)=>{let we=(We-(Fe.length-1)/2)*1.1,ke=V(z.R-3.3-We%2*1,we*(e.rig.portrait?.75:1));Ce.pos.set(ke.x,0,ke.z),Ce.yaw=q,Ce.faceYaw=q,We%2===0?(Ce.hold(M(_),"right",[0,-.12,.02]),Ce.setBase("hold",.2)):Ce.hold(A("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let Ce of R.slice(6))Ce.setVisible(!1);let ue=e.rig.portrait,Xe=V(Math.max(z.R-(ue?12:11),2.8),ue?1.2:-2.2),le=ue?10.5:9.6,ee=V(z.R+(ue?1.5:3),0);_.cut(mt(Xe.x,le,Xe.z),mt(ee.x,.8,ee.z),{fov:a()});let Ue=V(z.R+15);h(_,Fe,8,v),v.run([{walk:[Q,Ue],mode:"walk"}]),Fe.forEach((Ce,We)=>{let we=V(z.R-1.2-We%2*.9,(We-2.5)*1.1);Ce.run([{wait:.4},{walk:[we],mode:"walk"},{pose:We%2===0?"hold":"idle"}])}),_.sfx("whoosh",{volume:.4});let Ze=V(z.R-2,ue?.6:-1.2);if(await _.move(mt(Xe.x,le,Xe.z),mt(ee.x,.8,ee.z),mt(Ze.x,ue?6.8:6,Ze.z),mt(Ue.x,.9,Ue.z),4.8,{fov:a()}),e.fx.emit("mist",v.pos.x,.6,v.pos.z,"#d8dde4",16),v.setVisible(!1),Se){let Ce=Se.rotation.y;Se.rotation.y=Ce+1.3,_.sfx("door"),await _.tween(.6,We=>{Se.rotation.y=Ce+1.3*(1-We)},Do)}e.markDead(T,{quiet:!0,drop:!0}),await _.wait(.8),oe()}async function X(_,v,R,T){let z=F(1.1,.9),q=z.a+Math.PI;_.prop("village","trapdoor",z.x,.01,z.z,q,.75);let V=new Vt;V.position.set(z.x-Math.cos(q)*.85,.12,z.z+Math.sin(q)*.85),V.rotation.y=q;let Q=new wt(new xi(1.7,.1,1.7),new mn({color:"#7a5232"}));Q.position.x=.85;let ye=new wt(new xi(1.72,.12,.18),new mn({color:"#3a3a44"}));ye.position.set(.85,.01,.45),V.add(Q,ye),V.userData.cleanup=()=>{Q.geometry.dispose(),Q.material.dispose(),ye.geometry.dispose(),ye.material.dispose()},_.add(V);let oe=new wt(new dr(.8,16),new Jt({color:"#0b0910"}));oe.rotation.x=-Math.PI/2,oe.position.set(z.x,.03,z.z),oe.userData.cleanup=()=>{oe.geometry.dispose(),oe.material.dispose()},_.add(oe);let ne=e.rig.portrait;D(R,z,ne?3.4:4,q,{spread:ne?1.7:2.3});let Se={x:Math.sin(q),z:Math.cos(q)},Fe={x:Math.cos(q),z:-Math.sin(q)};v.pos.set(z.x+Se.x*.5+Fe.x*2.6,0,z.z+Se.z*.5+Fe.z*2.6);let ue=ne?8.6:7.2,Xe=ne?2.2:3.8;_.cut(mt(z.x+Se.x*ue+Fe.x*Xe,ne?5.4:4.4,z.z+Se.z*ue+Fe.z*Xe),mt(z.x+Se.x*.5,ne?.9:.7,z.z+Se.z*.5),{fov:a()}),h(_,R,ne?4.6:4),_.sfx("door"),await _.tween(.8,ee=>{V.rotation.z=ee*1.9},Do),v.run([{walk:[{x:z.x,z:z.z}],mode:"walk"}]),await _.wait(1.8),v.run([]),v.playOnce("fall",{timeScale:.6}),await _.tween(1,ee=>{v.pos.y=-2.2*ee},ee=>ee*ee),v.setVisible(!1),_.sfx("door"),await _.tween(.5,ee=>{V.rotation.z=1.9*(1-ee)},ee=>ee*ee),e.fx.emit("poof",z.x,.3,z.z,"#b8a890",14);let le=_.prop("clues","key",z.x+Fe.x*.6,.35,z.z+Fe.z*.6,q,1.4);le&&e.fx.emit("magic",le.position.x,.6,le.position.z,"#ffd27a",10),e.markDead(T,{quiet:!0,drop:!0});for(let ee of R)Math.random()<.5&&ee.playOnce("emote-yes",{timeScale:.8});await _.wait(1.3)}function W(_,v,R){let T=A("clues","bow",1.1);T&&(T.rotation.set(0,0,0),v.hold(T,"left",[0,-.13,.05])),v.setBase("holdboth",.25),R&&(v.faceYaw=Math.atan2(R.x-v.pos.x,R.z-v.pos.z),v.yaw=v.faceYaw)}async function B(_,v,R,T=.7){let z=Sn("clues","arrow");if(!z)return;let q=z.clone();q.scale.setScalar(.9),_.add(q);let V=mt(R.x-v.x,R.y-v.y,R.z-v.z);_.sfx("shot"),await _.tween(T,Q=>{q.position.set(v.x+V.x*Q,v.y+V.y*Q+Math.sin(Q*Math.PI)*1.2,v.z+V.z*Q),q.rotation.y=Math.atan2(V.x,V.z),q.rotation.x=-Math.cos(Q*Math.PI)*.5},Q=>Q)}return s.register("hunter",async(_,v)=>{let[R]=$a(v),T=R&&e.chars.get(R);if(T){_.claim(R),T.setVisible(!0),W(_,T,mt(0,0,0));let z=r(T.pos,{dist:4.8,height:1.4,lookY:1.4});_.move(mt(z.pos.x,.9,z.pos.z),z.look,mt(z.pos.x*1.05,2,z.pos.z*1.05),z.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),_.sfx("hunter",{volume:.6}),await _.wait(3.4)}else await _.wait(1.5)}),s.register("shot",async(_,v)=>{let[R]=$a(v),T=v.actorId&&e.chars.get(v.actorId),z=R&&e.chars.get(R);if(!z){await _.wait(1.5);return}_.claim(R),z.setVisible(!0),T&&(_.claim(v.actorId),T.setVisible(!0),W(_,T,z.pos)),z.faceYaw=T?Math.atan2(T.pos.x-z.pos.x,T.pos.z-z.pos.z):z.yaw;let q=T?T.pos:mt(0,0,0),V=mt(q.x-z.pos.x,0,q.z-z.pos.z).normalize(),Q=mt(V.z,0,-V.x),ye=mt((q.x+z.pos.x)/2,1,(q.z+z.pos.z)/2),oe=Math.max(4,Math.hypot(q.x-z.pos.x,q.z-z.pos.z)),ne=mt(-ye.x,0,-ye.z).normalize(),Se=Q.dot(ne)>=0?Q:Q.clone().multiplyScalar(-1);_.cut(mt(ye.x+Se.x*(oe*.9+4),4.6+oe*.2,ye.z+Se.z*(oe*.9+4)),ye,{fov:o()}),await _.wait(1),T&&T.playOnce("attack-melee-right",{timeScale:1.4});let Fe=B(_,mt(q.x,1.5,q.z),mt(z.pos.x,1.1,z.pos.z),.75),ue=r(z.pos,{dir:Se,dist:6,height:3.6});_.shot(ue.pos,ue.look,{fov:o(),k:2.5}),await Fe,e.flash(.4,"#ff8364"),e.fx.emit("poof",z.pos.x,.9,z.pos.z,null,22),_.sfx("poof"),z.setVisible(!1);let Xe=e.playerById(R),le=u(_,Xe&&Xe.look,z.pos.x,z.pos.z,.3,1.8);e.markDead(R,{quiet:!0,drop:!0}),await le,await _.wait(.4)}),s.register("nohunt",async _=>{let v=e.getState(),R=v&&v.room.hunterId,T=R&&e.chars.get(R);if(T){_.claim(R),T.setVisible(!0);let z=mt(T.pos.x*3+8,0,T.pos.z*3-30);W(_,T,z);let q=r(T.pos,{dist:5.5});_.shot(q.pos,q.look,{fov:o()}),await _.wait(.9),await B(_,mt(T.pos.x,1.5,T.pos.z),mt(z.x,6,z.z),1.1),T.dropProps(),T.setBase("idle",.2),T.playOnce("emote-no"),await _.wait(1.6)}else await _.wait(1.5)}),s.register("win",async(_,v)=>{let R=$a(v),T=t(),z=v.winner;z==="vampir"?(_.tod(23.2,!0),e.moonOverride("#ff4a4a")):z==="soytari"?_.tod(18.4):_.tod(10.2);let q=R.map(oe=>e.chars.get(oe)).filter(oe=>oe&&oe.visible).slice(0,10);for(let oe of q)_.claim(oe.id);let V=b(R,12).map(oe=>_.claim(oe.id)).filter(Boolean);if(z==="soytari"&&q[0]){let oe=q[0];oe.pos.set(0,0,3),oe.yaw=0,oe.faceYaw=0,oe.setBase("cheer",.2),D(V,{x:0,z:3},4.5,0);for(let Se of V)Se.setBase("sad",.3);let ne=y(4,"#f2c12e");ne.position.set(0,1.2,3),_.add(ne)}else{for(let oe of q)oe.setBase(z==="vampir"?"loom":"cheer",.3);for(let oe of V)oe.setBase("sad",.3)}z==="vampir"&&d(_,0,5,0,16,5.5,T*.5,{x:0,z:-1});let Q=0,ye=z!=="vampir";await _.tween(5.6,(oe,ne)=>{let Se=-.9+oe*1.6,Fe=T*.85*c();if(e.rig.setOverride({pos:mt(Math.sin(Se)*Fe,T*.5*c(),Math.cos(Se)*Fe),look:mt(0,1,0),fov:o()+2,k:60},!0),Q+=ne,ye&&Q>.55){Q=0;let ue=q[Math.floor(Math.random()*Math.max(1,q.length))];ue&&(e.fx.emit("confetti",ue.pos.x,2.2,ue.pos.z,null,14),Math.random()<.5&&ue.playOnce("jump"))}},oe=>oe)}),s.register("promote",async _=>{let v=e.meId(),R=v&&e.chars.get(v);if(R&&R.visible){_.claim(v);let T=r(R.pos,{dist:6,height:4.2});_.shot(T.pos,T.look,{fov:o()}),R.setBase("loom",.3);let z=y(.6,"#ff2244");z.position.set(0,.36,.12),R.headBone&&(R.headBone.add(z),_.add(z,R.headBone)),e.flash(.5,"#d7263d"),await d(_,R.pos.x,1.8,R.pos.z,12,3.4,1.8)}else if(v){let T=i(v,{dist:10});T&&(_.shot(T.pos,T.look,{fov:o()}),e.flash(.5,"#d7263d"),await d(_,T.a.door.x,3,T.a.door.z,12,3.4,3))}await _.wait(.4)}),s.register("seer",async(_,v)=>{let R=(v.targets||[])[0];if(!R)return;let T=e.openRoom(R.id);if(!T){await _.wait(1.5);return}let z=e.playerById(e.meId()),q=T.shot("search",e.rig.portrait);_.cut(q.pos,q.look,{fov:q.fov});let V=z?T.addActor("kahin",z.look,z.name,T.L.doorOut,-Math.PI/2):null,Q=Fe=>T.W(Fe);V&&V.run([{walk:[Q(T.L.doorIn),Q({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:Q(T.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[Q({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:Q({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[Q({x:.9,z:.2})],mode:"sneak"},{faceTo:Q(T.L.rug)},{pose:"peek"}]),_.sfx("door",{volume:.5}),await _.wait(4.6);let ye=R.cause==="vampir",oe=T.rug;if(ye){let Fe=oe.position.x;_.tween(.7,le=>{oe.position.x=Fe+1.6*le,oe.rotation.z=-.25*Math.sin(le*Math.PI)},Do),await _.wait(.3);let ue=T.addTemp(Sn("clues","coffin").clone());ue.position.set(T.L.rug.x,-.4,T.L.rug.z),ue.scale.setScalar(.62),ue.rotation.y=.4,_.tween(.6,le=>{ue.position.y=-.4+.42*le},Do);for(let le=0;le<3;le++){let ee=T.addTemp(Sn("clues","potion").clone());ee.position.set(T.L.rug.x+.9+le*.32,0,T.L.rug.z-.6+le*.2);let Ue=y(.9,"#ff2244");Ue.position.y=.4,ee.add(Ue)}let Xe=T.W({x:T.L.rug.x,z:T.L.rug.z});e.fx.emit("magic",Xe.x,.8,Xe.z,"#ff2244",30),e.flash(.55,"#d7263d"),_.sfx("seer"),d(_,Xe.x,1.2,Xe.z,3,2,.8,{x:0,z:1},.45),V&&(V.setBase("idle",.2),V.playOnce("emote-no"))}else{let Fe=["bread","cheese","apple","mug"],ue=T.W({x:T.L.rug.x,z:T.L.rug.z});Fe.forEach((Xe,le)=>{let ee=Sn("clues",Xe);if(!ee)return;let Ue=T.addTemp(ee.clone());Ue.position.set(T.L.rug.x-.5+le*.35,.02,T.L.rug.z+.2-le%2*.3),Ue.scale.setScalar(1.3)}),e.fx.emit("magic",ue.x,.6,ue.z,"#ffe08a",24),_.sfx("seer"),V&&(V.setBase("idle",.2),V.playOnce("emote-yes"))}let ne=T.shot("inside",e.rig.portrait),Se=mt(ne.look.x+(ne.pos.x-ne.look.x)*.78,ne.look.y+(ne.pos.y-ne.look.y)*.8,ne.look.z+(ne.pos.z-ne.look.z)*.78);_.shot(Se,T.W({x:T.L.rug.x,y:.4,z:T.L.rug.z}),{fov:ne.fov,k:2.5}),await _.wait(2.2)}),s.register("watch",async(_,v)=>{let R=(v.targets||[])[0];if(!R)return;if(e.showWatched&&e.showWatched(R.id)){await _.wait(.6);return}let T=e.openRoom(R.id);if(!T){await _.wait(1.5);return}let z=T.shot("window",e.rig.portrait);_.cut(z.pos,z.look,{fov:z.fov});let q=e.playerById(e.meId());q&&T.addActor("gozcu",q.look,"",T.L.winOut,Math.PI/2).setBase("peek",0);let V=(v.visitors||[]).map(oe=>e.playerById(oe)).filter(Boolean),Q=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!V.length){await _.wait(2.2),e.diedTonight(R.id)?(e.flickerRoom(1.4),await _.wait(1.6)):await _.wait(1.4);return}let ye=dt(4/V.length,.8,1.4);for(let oe=0;oe<V.length;oe++){let ne=V[oe],Se=T.addActor("v"+oe,ne.look,ne.name,T.L.doorStep,-Math.PI/2),Fe=Q[oe%Q.length];Se.run([{walk:[T.W(T.L.doorIn),T.W(Fe)],mode:"walk"},{faceTo:T.W({x:T.L.sleeper.x,z:-1.3})},{pose:"idle"}]),_.sfx("door",{volume:.35}),await _.wait(ye)}await _.wait(1.6),e.diedTonight(R.id)?(e.flickerRoom(1.4),await _.wait(1.8)):await _.wait(1.2)}),{figure:g,ghostRise:u,makeGlow:y,bats:d,houseView:i,fov:o}}var ew={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},Nh={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};Nh["panayir-haftasi"]=Nh.panayir;function ag(s){return{...ew,...Nh[s]||{},id:Nh[s]?s:null}}var ja=new Y,tw=new Y,zh=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new Y,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new Y,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new Y,this.ovLook=new Y,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,c){let l=this.scratch;l.fov=i,this.applyView(l);let h=tw.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),u=a,f=c;for(let d=0;d<22;d++){let g=(u+f)/2;l.position.copy(e).addScaledVector(h,g),l.lookAt(e),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert();let y=!0;for(let p=0;p<r.length&&y;p++){if(ja.copy(r[p]).applyMatrix4(l.matrixWorldInverse),ja.z>-.5){y=!1;break}ja.applyMatrix4(l.projectionMatrix),(Math.abs(ja.x)>o||Math.abs(ja.y)>o)&&(y=!1)}y?f=g:u=g}return f}drag(e,t){let n=this.user;n.az=dt(n.az-e*.006,-this.limits.az,this.limits.az),n.el=dt(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=dt(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let m=hn(r.active?1.2:3,e);r.az+=(0-r.az)*m,r.el+=(0-r.el)*m,r.zoom+=(1-r.zoom)*m,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:hn(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=un(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,c=dt(i.el+r.el,.12,1.45),l=i.dist*r.zoom,h=this.camera,u=i.target.x+Math.sin(a)*Math.cos(c)*l,f=i.target.y+Math.sin(c)*l,d=i.target.z+Math.cos(a)*Math.cos(c)*l,g=this.override?1:0;if(this.ovW+=(g-this.ovW)*hn(this.override?this.override.k||2.5:2,e),this.override){let m=hn(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,m),this.ovLook.lerp(this.override.look,m)}let y=this.ovW;h.position.set(u+(this.ovPos.x-u)*y,f+(this.ovPos.y-f)*y,d+(this.ovPos.z-d)*y),this.clampFn&&y<.5&&this.clampFn(h.position),this.lookPoint||(this.lookPoint=new Y),this.lookPoint.copy(i.target).lerp(this.ovLook,y),h.lookAt(this.lookPoint);let p=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*y;Math.abs(h.fov-p)>.01&&(h.fov=p,h.updateProjectionMatrix()),h.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var nw=`
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
.vkw-bubble{max-width:180px;padding:5px 9px;border-radius:12px;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#f4e4c1;color:#2a1c10;font-size:12.5px;font-weight:600;line-height:1.3;box-shadow:0 3px 8px rgba(0,0,0,.35);opacity:0;transition:opacity .25s;word-break:break-word}
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
@media (max-width:540px){.vkw-bubble{max-width:62vw;font-size:12px;padding:4px 8px}.vkw-job{font-size:9.5px}.vkw-tag.sel .vkw-name{padding:3px 8px 3px 5px;font-size:12.5px}.vkw-plaque.sel{font-size:11.5px;padding:3px 7px 3px 4px}.vkw-plaque span{max-width:64px}.vkw-plaque{font-size:10.5px}}
@media (min-width:900px){.vkw-name{font-size:13px}.vkw-plaque{font-size:12px}}
`,Ds=null,Uh=0;function iw(){Uh++,!Ds&&(Ds=document.createElement("style"),Ds.id="vkw-style",Ds.textContent=nw,document.head.appendChild(Ds))}function sw(){Uh--,Uh<=0&&Ds&&(Ds.remove(),Ds=null,Uh=0)}var Nd=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bn=new Y;function lg(s,e){iw();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,c=!1,l={top:0,bottom:0,left:0,right:0},h=0,u=document.createElement("button");u.className="vkw-recenter",u.type="button",u.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",u.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),u.textContent="\u2316",u.addEventListener("click",W=>{W.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',g='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",W=>{W.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",W=>W.stopPropagation()),t.appendChild(u),t.appendChild(f);function y(W,B){let _=0,v=0,R=0;W.addEventListener("pointerdown",T=>{_=T.clientX,v=T.clientY,R=performance.now(),T.stopPropagation()}),W.addEventListener("pointerup",T=>{T.stopPropagation(),Math.hypot(T.clientX-_,T.clientY-v)<12&&performance.now()-R<700&&B()}),W.addEventListener("click",T=>T.stopPropagation())}function p(W){let B=n.get(W);if(B)return B;let _=document.createElement("div");return _.className="vkw-tag",_.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(_,u),B={id:W,el:_,mark:_.children[0],votes:_.children[1],name:_.children[2],job:_.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},y(_,()=>e.onTagTap(W)),n.set(W,B),B}function m(W){let B=i.get(W);if(B)return B;let _=document.createElement("div");return _.className="vkw-plaque",t.insertBefore(_,t.firstChild),B={el:_,sig:"",cls:"",shown:!1},y(_,()=>e.onPlaqueTap(W)),i.set(W,B),B}function M(W,B){let _=p(W),v=B.name+"|"+B.job+"|"+B.color+"|"+B.badges;v!==_.sig&&(_.sig=v,_.name.innerHTML=`<i style="background:${Mn[B.color]||"#999"}"></i>${B.badges?`<span>${B.badges}</span>`:""}<span>${Nd(B.name)}</span>`,_.job.textContent=B.job||"",_.jobText=B.job||"",_.measured=!1);let R=B.mark?B.mark.label+B.mark.color:"";R!==_.markSig&&(_.markSig=R,_.mark.hidden=!B.mark,B.mark&&(_.mark.textContent=B.mark.label,_.mark.style.setProperty("--c",B.mark.color)),_.measured=!1);let T=B.votes?B.votes.total+":"+B.votes.dots.join(","):"";T!==_.voteSig&&(_.voteSig=T,_.votes.hidden=!B.votes,B.votes&&(_.votes.innerHTML=`<b>${B.votes.total}</b>`+B.votes.dots.map(V=>`<i style="background:${V.color}">${V.w>1?"2":""}</i>`).join("")),_.measured=!1);let z=!!_.jobText&&(!c||B.picked||B.hover);_.job.hidden===z&&(_.job.hidden=!z,_.measured=!1);let q="vkw-tag"+(c?" cmp":"")+(B.me?" me":"")+(B.off?" off":"")+(B.dead?" dead":"")+(B.sel?" sel":"")+(B.picked?" picked":"")+(B.hover?" hover":"");q!==_.cls&&(_.cls=q,_.el.className=q),B.selColor&&_.el.style.setProperty("--c",B.selColor),_.data=B}function A(W,B){let _=m(W),v=B.name+"|"+B.color+"|"+(B.mark?B.mark.label:"");v!==_.sig&&(_.sig=v,_.el.innerHTML=`<i style="background:${Mn[B.color]||"#c9b48a"}"></i><span>${Nd(B.name)}</span>${B.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${Nd(B.mark.label)}</em>`:""}`);let R="vkw-plaque"+(B.sel?" sel":"")+(B.picked?" picked":"")+(B.dim?" dim":"")+(B.dead?" dead":"");R!==_.cls&&(_.cls=R,_.el.className=R),B.selColor&&_.el.style.setProperty("--c",B.selColor),_.data=B}function b(W,B){for(let[_,v]of W)B.has(_)||(v.el.remove(),W.delete(_))}function C(W,B){let _=String(W).replace(/\s+/g," ").trim();if(_.length<=B)return _;let v=_.slice(0,B-1),R=v.lastIndexOf(" ");return R>B*.6&&(v=v.slice(0,R)),v.replace(/[\s.,;:!?-]+$/,"")+"\u2026"}function I(W,B,_){let v=r.get(W);if(!v){let z=document.createElement("div");z.className="vkw-bubble",t.insertBefore(z,u),v={el:z,until:0,h:30,w:100,wx:-1e4,wy:-1e4},r.set(W,v)}let R=o<540,T=C(B,R?40:64);v.el.textContent=T,v.el.dataset.ch=_||"genel",v.el.classList.add("show"),v.until=performance.now()+(R?2600:3e3)+Math.min(R?1800:2600,T.length*45),v.h=0,v.seq=++h}let x=[],E=(W,B)=>W.prio-B.prio,U=[],S=[],F=[],D=[],k=[];function O(W,B,_,v){var ne,Se,Fe,ue,Xe;let R=U;R.length=0;for(let[le,ee]of n){if(!(B(le,bn)&&v(le))){ee.shown&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.shown=!1),ee.vis=!1;continue}if(ee.dist=bn.distanceTo(W.position),bn.project(W),bn.z>1||bn.x<-1.2||bn.x>1.2||bn.y<-1.2||bn.y>1.3){ee.shown&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.shown=!1),ee.vis=!1;continue}ee.measured||(ee.w=ee.el.offsetWidth||60,ee.h=ee.el.offsetHeight||20,ee.measured=!0),ee.sx=(bn.x*.5+.5)*o,ee.sy=(-bn.y*.5+.5)*a,ee.depth=bn.z,ee.vis=!0,R.push(ee)}let T=performance.now();for(let le of R){let ee=r.get(le.id);le.talk=!!(ee&&T<ee.until)}for(let le of R)le.prio=(le.data&&(le.data.me||le.data.picked||le.data.mark||le.data.votes)?0:1)*1e3+le.dist;R.sort(E),x.length=0;let z=R.length>6;for(let le of R){let ee=le.sx-le.w/2,Ue=le.sy-le.h,Ze=0;for(let Z=0;Z<6;Z++){let ce=!1;for(let H of x)ee<H.x+H.w-2&&ee+le.w>H.x+2&&Ue<H.y+H.h-1&&Ue+le.h>H.y+1&&(Ue=H.y-le.h-1,ce=!0);if(!ce)break;Ze++}let Ce=le.talk||le.data&&(le.data.me||le.data.sel||le.data.picked||le.data.mark||le.data.votes),We=z&&!Ce&&(le.dist>15||Ze>0),we=z&&!Ce&&Ze>=3||!Ce&&Ue<l.top+2,ke=(We?" far":"")+(we?" gone":"");if(ke!==le.fc&&(le.fc=ke,le.el.classList.toggle("far",We),le.el.classList.toggle("gone",we),le.measured=!1),we){le.x=-1e4,le.y=-1e4;continue}ee=Math.max(l.left+2,Math.min(o-l.right-le.w-2,ee)),Ue=Math.max(l.top+2,Math.min(a-l.bottom-le.h-2,Ue)),x.push({x:ee,y:Ue,w:le.w,h:le.h,t:le}),le.x=ee,le.y=Ue,(!le.shown||Math.abs(ee-((ne=le.wx)!=null?ne:-1e4))>.4||Math.abs(Ue-((Se=le.wy)!=null?Se:-1e4))>.4)&&(le.el.style.transform=`translate3d(${ee.toFixed(1)}px,${Ue.toFixed(1)}px,0)`,le.wx=ee,le.wy=Ue);let se=10+Math.round((1-le.depth)*1e3);se!==le.wz&&(le.el.style.zIndex=String(se),le.wz=se),le.shown=!0}let q=T,V=F;V.length=0;for(let[le,ee]of r){let Ue=n.get(le);if(q>ee.until&&ee.el.classList.contains("show")&&ee.el.classList.remove("show"),!(Ue&&Ue.vis&&Ue.shown&&Ue.x>-1e3&&q<=ee.until+400&&Ue.sx>l.left-8&&Ue.sx<o-l.right+8&&Ue.sy>l.top&&Ue.sy<a-l.bottom+10)){ee.wx!==-1e4&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.wx=-1e4);continue}ee.h||(ee.h=ee.el.offsetHeight||26,ee.w=ee.el.offsetWidth||100),ee.t=Ue,V.push(ee)}V.sort((le,ee)=>ee.seq-le.seq);let Q=o<540?2:3,ye=D;ye.length=0;for(let le=0;le<V.length;le++){let ee=V[le],Ue=ee.t,Ze=le>=Q,Ce=Math.max(l.left+4,Math.min(o-l.right-ee.w-4,Ue.sx-ee.w/2)),We=Ue.y-ee.h-8;if(!Ze){for(let Z=0;Z<6;Z++){let ce=!1;for(let H of ye)Ce<H.x+H.w&&Ce+ee.w>H.x&&We<H.y+H.h+4&&We+ee.h+4>H.y&&(We=H.y-ee.h-6,ce=!0);for(let H of x){if(H.t===Ue||!(Ce<H.x+H.w&&Ce+ee.w>H.x&&We<H.y+H.h+2&&We+ee.h+2>H.y))continue;let me=H.x+H.w+2-Ce,re=Ce+ee.w-H.x+2,de=me<re?Ce+me:Ce-re;Math.min(me,re)<60&&Ue.sx>de+12&&Ue.sx<de+ee.w-12&&de>=l.left+4&&de+ee.w<=o-l.right-4?Ce=de:We=H.y-ee.h-4,ce=!0}if(!ce)break}if(le>0&&Ue.y-ee.h-8-We>36&&(Ze=!0),We<l.top+4&&(Ze=!0),!Ze){for(let Z of x)if(Z.t!==Ue&&Z.t.data&&Z.t.data.sel&&Ce<Z.x+Z.w&&Ce+ee.w>Z.x&&We<Z.y+Z.h&&We+ee.h>Z.y){Ze=!0;break}}if(!Ze){for(let Z of S)if(Z.data&&Z.data.sel&&Z.shown&&Ce<Z.wx+Z.w&&Ce+ee.w>Z.wx&&We<Z.wy+Z.h&&We+ee.h>Z.wy){Ze=!0;break}}}if(Ze){ee.wx!==-1e4&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.wx=-1e4);continue}let we=k[ye.length];we||(we={x:0,y:0,w:0,h:0},k.push(we)),we.x=Ce,we.y=We,we.w=ee.w,we.h=ee.h,ye.push(we);let ke=Math.max(10,Math.min(ee.w-10,Ue.sx-Ce));Math.abs(ke-(ee.tx||0))>.5&&(ee.el.style.setProperty("--tx",ke.toFixed(0)+"px"),ee.tx=ke),(Math.abs(Ce-ee.wx)>.4||Math.abs(We-((Fe=ee.wy)!=null?Fe:-1e4))>.4)&&(ee.el.style.transform=`translate3d(${Ce.toFixed(1)}px,${We.toFixed(1)}px,0)`,ee.wx=Ce,ee.wy=We);let se=String(2e3+(100-le));se!==ee.wz&&(ee.el.style.zIndex=se,ee.wz=se)}let oe=S;oe.length=0;for(let[le,ee]of i){if(!(_(le,bn)&&!(ee.data&&ee.data.hidden))){ee.shown&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.shown=!1);continue}if(bn.project(W),bn.z>1||Math.abs(bn.x)>1.15||Math.abs(bn.y)>1.15){ee.shown&&(ee.el.style.transform="translate3d(-9999px,0,0)",ee.shown=!1);continue}(!ee.w||ee.sigW!==ee.sig+ee.cls)&&(ee.w=ee.el.offsetWidth||70,ee.h=ee.el.offsetHeight||20,ee.sigW=ee.sig+ee.cls),ee.ax=(bn.x*.5+.5)*o,ee.ay=(-bn.y*.5+.5)*a,ee.px=ee.ax,ee.py=ee.ay,oe.push(ee)}for(let le=0;le<5;le++){for(let ee=0;ee<oe.length;ee++){let Ue=oe[ee];for(let Ze=ee+1;Ze<oe.length;Ze++){let Ce=oe[Ze],We=(Ue.w+Ce.w)/2+3-Math.abs(Ue.px-Ce.px),we=(Ue.h+Ce.h)/2+2-Math.abs(Ue.py-Ce.py);if(We>0&&we>0)if(we<We){let ke=(Ue.py<Ce.py?-1:1)*we/2;Ue.py+=ke,Ce.py-=ke}else{let ke=(Ue.px<Ce.px?-1:1)*We/2;Ue.px+=ke,Ce.px-=ke}}}for(let ee of oe){let Ue=ee.px-ee.ax,Ze=ee.py-ee.ay,Ce=Math.hypot(Ue,Ze);Ce>28&&(ee.px=ee.ax+Ue/Ce*28,ee.py=ee.ay+Ze/Ce*28)}}for(let le of oe){let ee=Math.max(l.left+2,Math.min(o-l.right-le.w-2,le.px-le.w/2)),Ue=Math.max(l.top+2,Math.min(a-l.bottom-le.h-2,le.py-le.h/2));(!le.shown||Math.abs(ee-((ue=le.wx)!=null?ue:-1e4))>.4||Math.abs(Ue-((Xe=le.wy)!=null?Xe:-1e4))>.4)&&(le.el.style.transform=`translate3d(${ee.toFixed(1)}px,${Ue.toFixed(1)}px,0)`,le.wx=ee,le.wy=Ue);let Ze=le.data&&le.data.sel?"900":"5";Ze!==le.wz&&(le.el.style.zIndex=Ze,le.wz=Ze),le.shown=!0}}function X(W,B){let _=document.createElement("div");_.className="vkw-ripple",_.style.left=W+"px",_.style.top=B+"px",t.appendChild(_),setTimeout(()=>_.remove(),600)}return{el:t,setSize(W,B){o=W,a=B;for(let _ of n.values())_.measured=!1},setInsets(W){l={top:W.top||0,bottom:W.bottom||0,left:W.left||0,right:W.right||0}},setCompact(W){if(W!==c){c=W;for(let B of n.values())B.sig="",B.measured=!1}},setTag:M,setPlaque:A,bubble:I,project:O,ripple:X,tags:n,plaques:i,sync(W,B){b(n,W),b(i,B);for(let[_,v]of r)W.has(_)||(v.el.remove(),r.delete(_))},setCamToggle(W,B,_){if(f.hidden=!W,!W)return;let v=B==="follow"?"f":"o";if(f.dataset.m!==v){f.dataset.m=v,f.innerHTML=B==="follow"?g:d;let R=B==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=R,f.setAttribute("aria-label",R)}f.style.right=12+(_.right||0)+"px",f.style.bottom=60+(_.bottom||0)+"px"},setRecenter(W,B){u.classList.toggle("show",!!W),u.style.right=12+(B.right||0)+"px",u.style.bottom=12+(B.bottom||0)+"px"},hitTag(W,B){for(let _ of n.values())if(!(!_.vis||!_.data||!_.data.sel)&&W>=_.x-6&&W<=_.x+_.w+6&&B>=_.y-6&&B<=_.y+_.h+6)return _;return null},clear(){for(let W of[n,i,r]){for(let B of W.values())B.el.remove();W.clear()}},dispose(){t.remove(),sw()}}}var rw=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,Qa=null;function ow(){Qa||(Qa=document.createElement("style"),Qa.id="vkw-joy-style",Qa.textContent=rw,document.head.appendChild(Qa))}function cg(s,e={}){var U;ow();let t=(U=e.touch)!=null?U:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,c=0,l=null,h=0,u=0,f=!1,d=new Set;function g(S,F){i.style.transform=`translate3d(${(S*r).toFixed(1)}px,${(-F*r).toFixed(1)}px,0)`}function y(S){if(!f||l!=null)return;S.preventDefault(),S.stopPropagation(),l=S.pointerId,n.setPointerCapture&&n.setPointerCapture(l);let F=n.getBoundingClientRect();h=F.left+F.width/2,u=F.top+F.height/2,n.classList.add("act"),p(S)}function p(S){if(S.pointerId!==l)return;S.preventDefault();let F=(S.clientX-h)/r,D=-(S.clientY-u)/r,k=Math.hypot(F,D);k>1&&(F/=k,D/=k);let O=Math.hypot(F,D);if(O<.12)a=0,c=0;else{let X=(O-.12)/.88/O;a=F*X,c=D*X}g(F,D)}function m(S){S.pointerId===l&&(l=null,a=0,c=0,g(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",y),n.addEventListener("pointermove",p),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m);let M=S=>!!(S&&S.tagName&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.tagName==="SELECT"||S.isContentEditable)),A=S=>M(S)||M(document.activeElement),b={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function C(S){if(!f||S.ctrlKey||S.metaKey||S.altKey||A(S.target))return;let F=b[S.code];F&&(d.add(F),S.code.startsWith("Arrow")&&S.preventDefault())}function I(S){let F=b[S.code];F&&d.delete(F)}let x=S=>{M(S.target)&&d.clear()};window.addEventListener("focusin",x);let E=()=>d.clear();return window.addEventListener("keydown",C),window.addEventListener("keyup",I),window.addEventListener("blur",E),{touch:t,vector(S){let F=a,D=c;if(d.size){F+=(d.has("r")?1:0)-(d.has("l")?1:0),D+=(d.has("u")?1:0)-(d.has("d")?1:0);let k=Math.hypot(F,D);k>1&&(F/=k,D/=k)}return S.x=F,S.y=D,S},setEnabled(S){S!==f&&(f=S,n.classList.toggle("on",S&&t&&!o),S||(d.clear(),a=0,c=0,l=null,g(0,0),n.classList.remove("act")))},place(S,F,D){let k=S.joystick,O,X,W;if(k===null){o=!0,n.classList.remove("on");return}o=!1,k&&k.size>0?(W=Math.max(88,Math.min(160,k.size)),O=k.left||0,X=D-(k.bottom||0)-W):(W=112,O=(S.left||0)+18,X=Math.max((S.top||0)+10,D-(S.bottom||0)-18-W)),n.style.left=O+"px",n.style.top=X+"px",n.style.width=n.style.height=W+"px";let B=Math.round(W*.41);i.style.width=i.style.height=B+"px",i.style.margin=-B/2+"px 0 0 "+-B/2+"px",r=W*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",C),window.removeEventListener("keyup",I),window.removeEventListener("blur",E),window.removeEventListener("focusin",x),n.remove()}}}var hg=2.3;function el(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function Pr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function aw(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,c=s.z+i*o,l=Math.hypot(a,c);if(l>=hg)return;let h=a,u=c;l<.01&&(h=-i,u=n);let f=Math.hypot(h,u)||1,d=hg+.25,g=n/Math.sqrt(r),y=i/Math.sqrt(r);t.push({x:h/f*d-g*1.2,z:u/f*d-y*1.2}),t.push({x:h/f*d+g*1.2,z:u/f*d+y*1.2})}function ug(s,e){let t=s[s.length-1];t&&aw(t,e,s),s.push({x:e.x,z:e.z})}function lw(s,e,t,n){let i=un(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(Pr(e+i*o/r,n))}function No(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,c=el(e).a;if(n!=null){let l=Pr(n,r);i.push(l),a=l,c=n}else if(el(e).r>o){let l=el(e),h=Pr(l.a,r);i.push(h),a=h,c=l.a}if(t.house){let l=t.angle,h=Math.abs(un(l-c)),u=Pr(l,r);if(el(a).r>r-.8&&h<1.4?lw(i,c,l,r):ug(i,u),t.peek){let d=t.house.peek,g=un(el(d).a-l)>=0?1:-1,y=(t.halfWidth||3)+1.4,p=s.R,m=Pr(l+g*(y/(p-2)),p-2.2),M=Pr(l+g*(y/(p+1)),p+1.2),A=Pr(l+g*((y-.6)/(p+3.4)),p+3.6);i.push(m,M,A,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else ug(i,t);return i}function zd(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,c=i.r+.32;if(a<c*c){let l=Math.sqrt(a)||.001;s.x=i.x+r/l*c,s.z=i.z+o/l*c}}}function zo(s,e,t=.42){if(!e||!e.length||s.length<2)return s;let n=s;for(let i=0;i<3;i++){let r=[n[0]],o=!1;for(let a=1;a<n.length;a++){let c=r[r.length-1],l=n[a],h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=null,g=1,y=0;if(f>1e-4)for(let p of e){if(p.tag==="fire")continue;let m=((p.x-c.x)*h+(p.z-c.z)*u)/f;if(m<=.02||m>=.98)continue;let M=c.x+h*m-p.x,A=c.z+u*m-p.z,b=Math.hypot(M,A);b<p.r+t&&m<g&&(d=p,g=m,y=b)}if(d){let p=c.x+h*g-d.x,m=c.z+u*g-d.z;y<.001&&(p=-u,m=h);let M=Math.hypot(p,m)||1,A=d.r+t+.25;r.push({x:d.x+p/M*A,z:d.z+m/M*A}),o=!0}r.push(l)}if(n=r,!o)break}return n}function Oh(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)zd(t,e,null);return t}var Fh=()=>typeof window!="undefined"&&window.VKRules||null;function kh(s){let e=Fh();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function cw(s,e){let t=Fh();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function fg(s,e,t){let n=Fh();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=kh(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!Md[e.role];case"iftiraci":return!o&&!Md[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return cw(s,t)?!1:!(t==="poison"&&o);default:return!1}}function tl(s){let e=Fh();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,c]of o)a===c&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function Bh(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return ai.poison;if(n.witch.heal===e.id)return ai.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&ai[r.role])return ai[r.role];let a=(n.team||[]).filter(c=>c.targetId===e.id&&c.vampId!==r.id).map(c=>c.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?ai.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function nl(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function Ud(s,e){let t=kh(s);return t==="vote"?ai.vote.color:t==="shoot"?ai.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?ai.poison:ai.heal).color:(ai[s.me.role]||ai.vote).color:"#f2c12e"}var dg=new Map;function pg(s){let e=new Map,t=null,n=new Map,i=-99,r=0;function o(p){for(let m of s.village.benchSlots)if(Math.hypot(p.x-m.x,p.z-m.z)<1.25)return m;return null}function a(p,m){let M=-p,A=-m,b=Math.hypot(M,A)||1,C=s.camera.position.x-p,I=s.camera.position.z-m,x=Math.hypot(C,I)||1;return Math.atan2(M/b*.45+C/x*.55,A/b*.45+I/x*.55)}function c(p){s.village.openDoor(p,1.3),s.sfxThrottled("door",.35)}function l(p,m,M,A){let b=s.village,C=b.layout;if(!C)return;let I=[];if(A){if(p.peeking=null,m.kind==="plaza"||m.kind==="gather")p.inside=null,p.pos.set(m.x,0,m.z),p.yaw=m.face!=null?m.face:a(m.x,m.z),p.faceYaw=p.yaw,p.setVisible(!0),p.run([{pose:m.pose||"idle",fade:0}]);else if(m.kind==="house"){let U=s.houseAnchors(m.house);if(!U)return;if(m.peek){p.inside=null;let S=No(C,U.approach,{house:U,angle:b.house(m.house).angle,peek:!0,halfWidth:b.house(m.house).info.hx});p.pos.set(U.peek.x,0,U.peek.z),p.yaw=Math.atan2(U.backWin.x-U.peek.x,U.backWin.z-U.peek.z),p.faceYaw=p.yaw,p.peeking=m.house,p.peekPath=S.slice(-5),p.setVisible(!0),p.run([{pose:"peek",fade:0}])}else p.inside=m.house,p.pos.set(U.inside.x,0,U.inside.z),p.setVisible(!1),p.run([{pose:"idle",fade:0}])}else m.kind==="gone"&&(p.setVisible(!1),p.run([]));return}if(m.kind==="gone"){p.visible&&(s.poofAt(p.pos.x,p.pos.z),p.setVisible(!1)),p.run([]);return}if(!p.visible&&!p.inside&&!p.peeking){if(m.kind==="plaza"||m.kind==="gather"){l(p,m,0,!0),s.fx.emit("magic",m.x,.8,m.z,"#f4e4c1",10);return}b.house(p.id)&&(p.inside=p.id)}M&&I.push({wait:M});let x={x:p.pos.x,z:p.pos.z},E=null;if(p.inside){let U=p.inside,S=s.houseAnchors(U),F=b.house(U);if(S&&F){if(m.kind==="house"&&m.house===U&&!m.peek)return;I.push({at:S.inside,face:S.rotY,snapFace:!0},{call:()=>c(U)},{wait:.12},{show:!0,call:D=>{D.inside=null}},{walk:[S.approach],mode:"walk"}),x=S.approach,E=F.angle}else p.inside=null}else if(p.peeking){if(m.kind==="house"&&m.peek&&m.house===p.peeking)return;let U=(p.peekPath||[]).slice().reverse();U.length>1&&(I.push({pose:"idle",fade:.2},{walk:U.slice(1),mode:"sneak",call:S=>{S.peeking=null}}),x=U[U.length-1]),p.peeking=null}if(m.kind==="plaza"||m.kind==="gather"){let U=Oh({x:m.x,z:m.z},s.obstacles),S=zo(No(C,x,U,E).map((D,k,O)=>k>0&&k<O.length-1?Oh(D,s.obstacles):D),s.obstacles);S.shift(),S.length&&I.push({walk:S,mode:m.mode||"walk"});let F=m.face!=null?m.face:a(U.x,U.z);I.push({face:F}),m.pose?I.push({pose:m.pose}):I.push({pose:"idle"})}else if(m.kind==="house"){let U=m.house,S=s.houseAnchors(U),F=b.house(U);if(!S||!F)return;let D=zo(No(C,x,{house:S,angle:F.angle,peek:!!m.peek,halfWidth:F.info.hx},E),s.obstacles);D.shift();let k=u(x,D)>12,O=m.mode||(k?m.house===p.id?"brisk":"sprint":"walk");if(m.peek){let X=D.slice(-2),W=D.slice(0,D.length-2);W.length&&I.push({walk:W,mode:O}),I.push({walk:X,mode:"sneak"}),I.push({faceTo:S.backWin},{pose:"peek",call:B=>{B.peeking=U,B.peekPath=D.slice(-5)}})}else{let X=m.budget;if(X!=null&&D.length){let W=u(x,D),B=Math.max(.6,X-(M||0)-1.4),_=W/B,v=_<2.4?"walk":_<3.4?"brisk":"sprint";if(_<=5)I.push({walk:D,mode:m.mode||v});else{let R=Math.max(.5,B-.5)*5,T=0,z=x,q=[];for(let V of D){let Q=Math.hypot(V.x-z.x,V.z-z.z);if(T+Q>R)break;T+=Q,q.push(V),z=V}q.length&&I.push({walk:q,mode:"sprint"}),I.push({call:V=>{s.fx.emit("mist",V.pos.x,.6,V.pos.z,"#c9c2d3",12)},hide:!0},{wait:.25},{at:S.approach,face:Math.atan2(S.door.x-S.approach.x,S.door.z-S.approach.z),snapFace:!0,show:!0,call:()=>s.fx.emit("mist",S.approach.x,.6,S.approach.z,"#c9c2d3",12)})}}else D.length&&I.push({walk:D,mode:O});I.push({faceTo:S.door},{wait:.05},{call:()=>c(U)},{wait:.15},{walk:[S.inside],mode:X!=null?"brisk":"walk"},{hide:!0,call:W=>{W.inside=U,n.set(U,s.time+9+Math.random()*4)}})}}p.run(I)}function h(p,m){if(!p.visible||p.inside||p.peeking||p.claimed||p.base==="sit"&&!m.pose)return!1;let M=m.x-p.pos.x,A=m.z-p.pos.z,b=Math.hypot(M,A);if(b>6)return!1;let C=M*M+A*A;if(C>1e-4){let E=-(p.pos.x*M+p.pos.z*A)/C;if(E=E<0?0:E>1?1:E,Math.hypot(p.pos.x+M*E,p.pos.z+A*E)<2.5)return!1}let I=Oh({x:m.x,z:m.z},s.obstacles);p.retargetAt=s.time;let x=[];if(b>.05){let E=zo([{x:p.pos.x,z:p.pos.z},I],s.obstacles);E.shift(),x.push({walk:E,mode:b>3?"brisk":"walk"})}return x.push({wait:.5},{face:m.face!=null?m.face:a(I.x,I.z)},{pose:m.pose||"idle"}),p.run(x),!0}function u(p,m){let M=0,A=p;for(let b of m)M+=Math.hypot(b.x-A.x,b.z-A.z),A=b;return M}function f(p,m,M,A,b,C){if(!M.length)return;A=Math.max(.5,A);let x=u(m,M)/A;if(x<=5){p.push({walk:M,mode:x<2.4?"walk":x<3.4?"brisk":"sprint"});return}let E=Math.max(.4,A-.45)*5,U=0,S=m,F=[];for(let D of M){let k=Math.hypot(D.x-S.x,D.z-S.z);if(U+k>E)break;U+=k,F.push(D),S=D}F.length&&p.push({walk:F,mode:"sprint"}),p.push({call:D=>{s.fx.emit("mist",D.pos.x,.6,D.pos.z,"#c9c2d3",12)},hide:!0},{wait:.2},{at:b,face:C,snapFace:!0,show:!0,call:()=>s.fx.emit("mist",b.x,.6,b.z,"#c9c2d3",12)})}function d(p){let m=s.village,M=m.layout,A=s.houseAnchors(p.home),b=m.house(p.home),C=s.houseAnchors(p.to),I=m.house(p.to),x=[];if(!M||!A||!b||!C||!I)return x;let E=p.clock();p.delay&&x.push({wait:p.delay}),x.push({at:A.inside,face:A.rotY,snapFace:!0},{call:()=>c(p.home)},{wait:.12},{show:!0,call:O=>{O.inside=null}},{walk:[A.approach],mode:"brisk"});let U={house:C,angle:I.angle,peek:!!p.peek,halfWidth:I.info.hx},S=zo(No(M,A.approach,U,b.angle),s.obstacles);S.shift();let F=p.tArrive-E-(p.delay||0)-.7,D=C.approach;if(p.peek){let O=S.splice(Math.max(0,S.length-2)),X=S.length?S[S.length-1]:A.approach;f(x,A.approach,S,F-.9,X,Math.atan2((O[0]||X).x-X.x,(O[0]||X).z-X.z)),x.push({walk:O,mode:"sneak"},{faceTo:C.backWin},{pose:"peek",call:W=>{W.peeking=p.to}},{until:()=>p.clock()>=p.tLeave},{pose:"idle",fade:.2,call:W=>{W.peeking=null}},{walk:O.slice(0,-1).reverse().concat([X]),mode:"sneak"}),D=X}else f(x,A.approach,S,F,C.approach,Math.atan2(C.door.x-C.approach.x,C.door.z-C.approach.z)),x.push({faceTo:C.door},{wait:.05}),p.bounced?x.push({until:()=>p.clock()>=p.tArrive-.3},{once:"interact-right",opts:{timeScale:1.2}},{wait:.35},{call:O=>{s.fx.emit("poof",C.door.x,1.2,C.door.z,"#9fb3d1",5),p.onBounce&&p.onBounce(O)}},{once:"emote-no",opts:{timeScale:1.3},part:.7}):x.push({call:()=>c(p.to)},{wait:.15},{walk:[C.inside],mode:"brisk"},{hide:!0,call:O=>{O.inside=p.to,n.set(p.to,s.time+5),p.onInside&&p.onInside(O)}},{until:()=>p.clock()>=p.tLeave},{at:C.inside,face:C.rotY,snapFace:!0},{call:()=>c(p.to)},{wait:.12},{show:!0,call:O=>{O.inside=null,p.onOut&&p.onOut(O)}},{walk:[C.approach],mode:"brisk"});let k=zo(No(M,D,{house:A,angle:b.angle,halfWidth:b.info.hx},p.peek?null:I.angle),s.obstacles);return k.shift(),x.push({call:O=>{let X=[];f(X,D,k,p.tHome-p.clock()-.7,A.approach,Math.atan2(A.door.x-A.approach.x,A.door.z-A.approach.z)),X.push({faceTo:A.door},{call:()=>c(p.home)},{wait:.12},{walk:[A.inside],mode:"brisk"},{hide:!0,call:W=>{W.inside=p.home,p.onHome&&p.onHome(W)}}),O.steps.splice(1,0,...X)}}),x}function g(p,m){let M=s.village,A=M.layout;if(!A||!p||!p.me)return;let{room:b,me:C,players:I}=p,x=b.phase,E=x==="reveal"||x==="night"||x==="day"||x==="hunter",U=!C.alive,S=x!==t;t=x;let F=p.room.night&&p.room.night.stage==="show"?dg:tl(p),D=new Set(b.winners||[]),k=I.filter(v=>v.alive&&!v.left).sort((v,R)=>v.seat-R.seat).map(v=>v.id),O=Math.max(4.6,Math.min(7.5,A.Rp*.62)),X=v=>{let R=M.house(v.id),T=R?R.angle:v.seat/Math.max(1,I.length)*nt;return{x:Math.sin(T)*O,z:Math.cos(T)*O,face:T+Math.PI}},W=new Map;if(x==="lobby"||x==="ended"){let v=[];for(let R of I){if(R.left)continue;let T=R.id===C.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,z=T?{x:T.x,z:T.z}:Ah(A,R.pos?R.pos.x:.5,R.pos?R.pos.y:.8);v.push({id:R.id,x:z.x,z:z.z,fixed:!!T})}for(let R=0;R<4;R++)for(let T=0;T<v.length;T++)for(let z=T+1;z<v.length;z++){let q=v[T],V=v[z],Q=V.x-q.x,ye=V.z-q.z,oe=Math.hypot(Q,ye);if(oe>=.95)continue;let ne=oe>.001?Q/oe:1,Se=oe>.001?ye/oe:0,Fe=(.95-oe)/2,ue=q.fixed?0:V.fixed?2:1,Xe=V.fixed?0:q.fixed?2:1;q.x-=ne*Fe*ue,q.z-=Se*Fe*ue,V.x+=ne*Fe*Xe,V.z+=Se*Fe*Xe}for(let R of v)W.set(R.id,{x:+R.x.toFixed(2),z:+R.z.toFixed(2)})}S&&x==="night"&&(i=s.time,r=s.leadInLeft?s.leadInLeft():3.6);let B=s.time-i,_=x==="night"&&B<r?Math.max(1,r-B):null;for(let v of I){let R=s.ensureChar(v);if(!R)continue;R.isMe=v.id===C.id;let T=!v.left&&(v.alive||x==="hunter"&&v.id===b.hunterId),z;if(!T)z={kind:"gone"};else if(x==="reveal"){let ne=k.indexOf(v.id),Se=Math.max(k.length,1),Fe=ne/Se*nt+.3,ue=4.3+(Se>12?ne%2*1.3:0);z={kind:"gather",x:Math.sin(Fe)*ue,z:Math.cos(Fe)*ue,face:Fe+Math.PI,pose:"warm"}}else if(x==="night")z={kind:"house",house:v.id};else if(x==="day"||x==="hunter"){let ne=X(v);z={kind:"plaza",x:+ne.x.toFixed(2),z:+ne.z.toFixed(2),face:ne.face,pose:v.connected?null:"sit",ring:!0}}else{let ne=W.get(v.id)||Ah(A,v.pos?v.pos.x:.5,v.pos?v.pos.y:.8),Se=null,Fe=null,ue=o(ne);v.connected?x==="ended"?Se=D.has(v.id)?"cheer":null:ue&&(Se="sit",Fe=ue.a+Math.PI):Se="sit",z={kind:"plaza",x:ne.x,z:ne.z,pose:Se,face:Fe}}_!=null&&z.kind==="house"&&(z.budget=_);let q=z.kind+":"+(z.house||"")+":"+(z.peek?"p":"")+":"+(z.x!=null?z.x.toFixed(2)+","+z.z.toFixed(2):"")+":"+(z.pose||""),V=e.get(v.id),Q=m||R.fresh;if(R.claimed&&!Q){e.delete(v.id);continue}if(R.fresh=!1,R.isMe&&s.driving&&z.kind==="plaza"&&!Q)e.set(v.id,"drive");else if(V!==q||Q){e.set(v.id,q);let ne=0;S&&!Q?x==="night"?ne=R.isMe?.2:Math.random()*1.6:x==="day"||x==="hunter"?ne=.3+Math.random()*2.2:x==="reveal"&&(ne=Math.random()*.8):V&&V.startsWith("house")&&z.kind==="house"&&x==="night"&&!Q&&(ne=.1),z.budget!=null&&(ne=R.isMe?.1:Math.random()*.5),!Q&&!S&&z.kind==="plaza"&&V&&V.startsWith("plaza")&&h(R,z)||l(R,z,ne,Q)}let ye=s.showDead&&s.showDead.has(v.id)&&v.id===C.id;if(v.left?!1:(!v.alive||ye)&&(E&&(U||ye)||x==="ended")){let ne=s.ensureGhost(v);if(ne){let Se=v.id===C.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,Fe=v.ghostPos||v.pos,ue=Se?{x:Se.x,z:Se.z}:Ah(A,Fe?Fe.x:.5,Fe?Fe.y:.8),Xe="g:"+ue.x.toFixed(2)+","+ue.z.toFixed(2);v.id===C.id&&s.driving&&!ne.fresh?e.set("g"+v.id,"drive"):(e.get("g"+v.id)!==Xe||ne.fresh)&&(e.set("g"+v.id,Xe),ne.fresh&&(ne.pos.set(ue.x,0,ue.z),ne.fresh=!1,ne.yaw=a(ue.x,ue.z),s.fx.emit("magic",ue.x,1,ue.z,"#d8d0ff",12)),ne.isMe=v.id===C.id,ne.run([{walk:[{x:ue.x,z:ue.z}],mode:"stroll"},{face:a(ue.x,ue.z)}]))}}else s.removeGhost(v.id)}for(let v of I){let R=M.house(v.id);if(R)if(x==="lobby"&&(R.flickOut=!1),R.dead=E||x==="ended"?(!v.alive||v.left)&&!(s.isHeldDeath&&s.isHeldDeath(v.id)):!1,x==="night"){let T=(n.get(v.id)||0)>s.time?1:0;for(let[,z]of F)z===v.id&&(T=Math.max(T,.8));M.setLit(v.id,T)}else M.setLit(v.id,1)}x!=="night"&&n.clear()}function y(p){if(!p||p.room.phase!=="night")return;let m=s.village,M=p.room.night&&p.room.night.stage==="show"?dg:tl(p);for(let A of p.players){if(!m.house(A.id))continue;let b=(n.get(A.id)||0)>s.time?1:0;for(let[,C]of M)C===A.id&&(b=Math.max(b,.8));m.setLit(A.id,b)}}return{apply:g,tick:y,tripSteps:d,lit(p,m){n.set(p,s.time+m)},reset(){e.clear(),t=null,n=new Map},forget(p){e.delete(p),e.delete("g"+p)}}}var Od=14,uw={kill:1,steal:1,poison:1},fw={attack:1,steal:1,poison:1},Hh="#5fe08a",mg={seer:1,watch:1,promote:1,locked:1,bounced:1,lockreport:1,steal:1,stealfail:1,saved:1,attacked:1,killed:1};function gg(s,e,t,n){let i="",r=-1,o=-1,a=!1,c=null,l=null,h=!1,u=new Set,f=null;function d(){let S=document.createElement("canvas");S.width=S.height=64;let F=S.getContext("2d");F.shadowColor="rgba(95,224,138,0.9)",F.shadowBlur=10,F.fillStyle="#ffffff";let D=5,k=(X,W,B,_)=>{F.beginPath(),F.moveTo(X+D,W),F.arcTo(X+B,W,X+B,W+_,D),F.arcTo(X+B,W+_,X,W+_,D),F.arcTo(X,W+_,X,W,D),F.arcTo(X,W,X+B,W,D),F.fill()};k(25,10,14,44),k(10,25,44,14);let O=new es(S);return O.colorSpace=Bt,O}function g(){if(f)return f;let S=d(),F=[];for(let D=0;D<20;D++){let k=new ws({map:S,color:Hh,transparent:!0,depthWrite:!1,fog:!1}),O=new cr(k);O.visible=!1,O.renderOrder=7,O.userData={t:1,life:1,vy:0,vx:0,vz:0,sz:.4},s.scene.add(O),F.push(O)}return f={tex:S,list:F,ticking:!1},f}function y(S){let F=0;for(let D of f.list){let k=D.userData;if(k.t>=k.life)continue;if(k.t+=S,k.t>=k.life){D.visible=!1;continue}F++;let O=k.t/k.life;D.position.x+=k.vx*S,D.position.y+=k.vy*S,D.position.z+=k.vz*S;let X=k.sz*(.6+Math.min(1,O*4)*.4);D.scale.set(X,X,1),D.material.opacity=1-O*O}return F||(f.ticking=!1),!F}function p(S,F,D,k=8,O=.9,X=1){let W=g(),B=0;for(let _ of W.list){if(B>=k)break;let v=_.userData;if(v.t<v.life)continue;B++;let R=Math.random()*Math.PI*2,T=Math.random()*O;_.position.set(S+Math.cos(R)*T,F+Math.random()*.4,D+Math.sin(R)*T),v.t=0,v.life=1.2+Math.random()*.6,v.vy=.9+Math.random()*.7,v.vx=Math.cos(R)*.15,v.vz=Math.sin(R)*.15,v.sz=(.32+Math.random()*.22)*X,_.scale.set(.01,.01,1),_.visible=!0}W.ticking||(W.ticking=!0,s.ticker.push(y))}function m(S,F,D,k,O={}){let X=n.figure(S,F,D,k);if(!X)return null;if(X.root.traverse(W=>{if(W.isSprite&&!O.eyes&&(W.visible=!1),W.isMesh){let B=new Jt({color:O.color||"#0b0a12",transparent:!0,opacity:O.opacity||.86});W.material=B,W.userData.cleanup=()=>B.dispose()}}),O.glow){let W=n.makeGlow(1.6,O.glow);W.position.set(0,1.2,0),X.root.add(W)}return X}async function M(S,F,D,k=1.8,O="walk"){if(!F||D.length<2)return;let X=[],W=0;for(let B=1;B<D.length;B++){let _=Math.hypot(D[B].x-D[B-1].x,D[B].z-D[B-1].z);X.push(_),W+=_}W<.01||(F.play(O),await S.tween(W/k,B=>{let _=B*W,v=0;for(;v<X.length-1&&_>X[v];)_-=X[v],v++;let R=D[v],T=D[v+1],z=X[v]>0?Math.min(1,_/X[v]):1;F.root.position.x=R.x+(T.x-R.x)*z,F.root.position.z=R.z+(T.z-R.z)*z,F.root.rotation.y=Math.atan2(T.x-R.x,T.z-R.z)},B=>B),F.play("idle"))}function A(S,F){S&&(S.root.rotation.y=Math.atan2(F.x-S.root.position.x,F.z-S.root.position.z))}function b(S,F){let D=S.players.find(k=>k.id===F);return D&&D.alive&&!D.left?D:null}e.register("show",async(S,F)=>{let{show:D,state:k}=F,O=s.village,X=k.me.id,W=s.time,B=F.el||0,_=()=>B+(s.time-W),v=we=>S.wait(Math.max(0,we-_())),R=new Set,T=[],z=[],q=()=>s.rig.portrait,V=we=>{let ke=O.house(we);if(!ke)return;z.push(new Y(ke.cx,0,ke.cz),new Y(ke.cx,ke.info.height,ke.cz));let se=O.anchors(ke);z.push(new Y(se.approach.x,0,se.approach.z))},Q=we=>{let ke=Promise.resolve(we).catch(()=>{});return T.push(ke),ke};function ye(we){if(R.has(we)||!b(k,we))return null;let ke=s.chars.get(we),se=s.houseAnchors(we);return!ke||!se||ke.claimed?null:(ke.run([]),ke.path=null,ke.peeking=null,ke.inside=we,ke.drive=null,ke.pos.set(se.inside.x,0,se.inside.z),ke.speed=0,ke.setVisible(!1),S.claim(we),R.add(we),u.add(we),ke)}async function oe(we,ke,se){let Z=se.again?s.chars.get(we):ye(we);if(!Z||se.again&&!R.has(we))return;let ce=t.tripSteps({home:we,to:ke,clock:_,...se});if(ce.length)for(Z.run(ce);Z.busy&&_()<Od-1;)await S.wait(.2)}let ne=D.trip&&D.trip.to!==X&&O.house(D.trip.to)?D.trip:null,Se=(D.home||[]).filter(we=>fw[we.kind]);D.dead&&!Se.some(we=>we.result==="died")&&Se.push({kind:"attack",result:"died"});let Fe=(Array.isArray(D.trips)&&D.trips.length>1?D.trips:[ne]).filter(we=>we&&we.to!==X&&O.house(we.to)).slice(0,2);if(ne&&Fe.length){V(X);let we=Fe.length>1,ke=Fe.map((Z,ce)=>{let H=uw[Z.kind]&&Z.outcome!=="bounced",me=Z.kind==="watch";return V(Z.to),we?ce===0?{tr:Z,kill:H,peek:me,tArr:2.6,tLeave:H?4.6:3.6,tHome:H?6.4:5.4}:{tr:Z,kill:H,peek:me,tArr:H?8:7.4,tLeave:H?10:8.6,tHome:12.2}:{tr:Z,kill:H,peek:me,tArr:me?3.2:3.6,tLeave:me?8.8:H?7:5.4,tHome:me?11.2:10.2}}),se=(D.team||[]).filter(Z=>Z.id!==X&&Z.to===ne.to&&Z.outcome!=="bounced"&&(Z.kind||"kill")==="kill").map(Z=>Z.id);if(Q((async()=>{for(let Z=0;Z<ke.length;Z++){let ce=ke[Z];await oe(X,ce.tr.to,{again:Z>0,peek:ce.peek,bounced:ce.tr.outcome==="bounced",tArrive:ce.tArr,tLeave:ce.tLeave,tHome:ce.tHome,delay:Z?.05:.15,onInside:ce.kill&&ce.tr.interior!==!1?()=>Q(Xe(ce.tr,Z===0?se:[],ce.tLeave)):null})}})()),D.saved){let Z=Fe.find(ce=>ce.kind==="protect"||ce.kind==="heal");Q(le(Z?Z.to:ne.to))}}else D.saved&&Q(le(D.trip&&O.house(D.trip.to)?D.trip.to:X));(D.team||[]).forEach((we,ke)=>{if(we.id===X||!O.house(we.to))return;V(we.to);let se=we.outcome==="bounced",Z=(we.kind||"kill")==="kill"&&!se;Q(oe(we.id,we.to,{bounced:se,tArrive:3.8+ke*.25,tLeave:(Z?7:5.6)+ke*.15,tHome:10.4,delay:.3+ke*.2}))}),D.watch&&O.house(D.watch.houseId)&&Q(ee(D.watch,ne)),Se.length&&(V(X),Q(Ze(Se,D)));let ue=D.home||[];for(let we of Se){let ke=ue.indexOf(we);we.byProtector=ke>=0&&ue[ke+1]&&ue[ke+1].kind==="protect"}l=z.length?z:null,s.showFocusChanged(),await Promise.all(T.slice());for(let we=0;we<3&&T.length;we++)await Promise.all(T.splice(0));a&&await We();async function Xe(we,ke,se){if(s.mainBusy())return;let Z=S.openRoom(we.to);if(!Z)return;let ce=Z.shot("inside",q());S.cut(ce.pos,ce.look,{fov:ce.fov});let H=Z.L,me=Te=>Z.W(Te),re=[X,...ke].slice(0,3),de=[H.bedside,H.bedside2,{x:-1.6,z:.9}],ae=[];re.forEach((Te,Be)=>{let P=s.playerById(Te);if(!P)return;let L=Z.addActor("k"+Be,P.look,P.name,H.doorIn,-Math.PI/2);ae.push(L);let J=we.kind==="steal"&&Be===0?[{walk:[me({x:-.3,z:-1.9})],mode:"sneak"},{faceTo:me(H.chest)},{once:"pick-up",opts:{timeScale:1.1}}]:[];L.run([...J,{walk:[me(de[Be%3])],mode:"sneak"},{faceTo:me({x:H.sleeper.x,z:-1.4})},{pose:we.kind==="poison"?"hold":"loom"}])});let Re=me({x:H.sleeper.x,y:.9,z:H.sleeper.z});if(await v(Math.max(_()+1.3,se-1.6)),!!C(Z)){for(let Te of ae)Te.playOnce(we.kind==="poison"?"interact-right":"attack-melee-right",{timeScale:.7});if(s.sfx(we.kind==="poison"?"potion":"bite",{volume:.6}),we.kind==="poison"&&s.fx.emit("bubble",Re.x,Re.y,Re.z,"#94d82d",10),await S.wait(.45),!!C(Z)){if(we.outcome==="done"){s.flickerRoom(1.1);let Te=s.playerById(we.to);n.ghostRise(S,Te&&Te.look,Re.x,Re.z,.9,1.3)}else{p(Re.x,Re.y,Re.z,10,.6),s.sfx("safe",{volume:.5});for(let Te of ae)Te.setBase("idle",.2),Te.playOnce("emote-no",{timeScale:1.1})}await v(se-.1),C(Z)&&s.endShowRoom()}}}async function le(we,ke=5.7){await v(ke);let se=s.houseAnchors(we);if(se)for(let Z=0;Z<3;Z++)p(se.door.x*.7+se.backWin.x*.3,se.height*.85,se.door.z*.7+se.backWin.z*.3,6,1.6,2.6),s.fx.emit("magic",se.door.x,1.4,se.door.z,Hh,8),Z===0&&s.sfx("safe",{volume:.5}),await S.wait(.4)}async function ee(we,ke){let se=we.houseId;c=se,V(se),V(X);let Z=[];(!ke||ke.kind!=="watch"||ke.to!==se)&&Z.push(oe(X,se,{peek:!0,tArrive:3.2,tLeave:8.8,tHome:11.2,delay:.15})),we.ownerWent&&we.ownerWent!==se&&O.house(we.ownerWent)&&(V(we.ownerWent),Z.push(oe(se,we.ownerWent,{tArrive:3,tLeave:6.6,tHome:10.6,delay:.4})));let ce=(we.arrivals||[]).slice(0,8),H=ce.length>1?Math.min(.8,3.2/(ce.length-1)):0;ce.forEach((re,de)=>{let ae=3.6+de*H;re.id&&re.id!==X&&re.id!==se&&s.chars.get(re.id)&&!R.has(re.id)?Z.push(oe(re.id,se,{bounced:!!re.blocked,tArrive:ae,tLeave:ae+1.6,tHome:10.8,delay:.2+de*.15})):Z.push(Ue(se,!!re.blocked,ae,ae+1.6,de))});let me=Math.min(8.2,4.8+ce.length*H+1);we.died?Z.push((async()=>{await v(me),s.flickerHouse(se,1.5),s.sfx("door",{volume:.3})})()):we.saved&&Z.push(le(se,me)),await Promise.all(Z.map(re=>re.catch(()=>{})))}async function Ue(we,ke,se,Z,ce){let H=s.houseAnchors(we);if(!H)return;let me=Math.hypot(H.approach.x,H.approach.z)||1,re=(ce%2?1:-1)*1.2,de={x:H.approach.x-H.approach.x/me*7+-H.approach.z/me*re,z:H.approach.z-H.approach.z/me*7+H.approach.x/me*re};await v(se-3),s.fx.emit("mist",de.x,.6,de.z,"#7d7690",8);let ae=m(S,de.x,de.z,0);ae&&(await M(S,ae,[de,H.approach],2.3),A(ae,H.door),ke?(ae.play("interact-right"),await S.wait(.8),await M(S,ae,[H.approach,de],2.6)):(s.village.openDoor(we,1),s.sfxThrottled("door",.35),await M(S,ae,[H.approach,H.inside],1.8),ae.root.visible=!1,await v(Z),ae.root.visible=!0,s.village.openDoor(we,1),await M(S,ae,[H.inside,H.approach,de],2.6)),s.fx.emit("mist",ae.root.position.x,.6,ae.root.position.z,"#7d7690",10),ae.root.visible=!1)}async function Ze(we,ke){await v(2.7);let se=!s.mainBusy()&&S.openRoom(X),Z=we.some(J=>J.result==="died")||!!ke.dead;if(!se){Z&&(await v(6),s.flickerHouse(X,1.4),await v(7.4),Ce());return}let ce=se.shot("inside",q());S.cut(ce.pos,ce.look,{fov:ce.fov});let H=se.L,me=J=>se.W(J),re=me(H.bedside),de=me(H.bedside2),ae=me(H.bedfoot),Re=me({x:H.sleeper.x,y:.9,z:H.sleeper.z}),Te=me(H.doorStep),Be=me(H.doorIn),P=null,L=we.slice(0,2);for(let J=0;J<L.length;J++){let Ee=L[J];if(!C(se))return;await v(J===0?3.5:_()+.2),s.sfx("door",{volume:.5});let pe=m(S,Te.x,Te.z,-Math.PI/2,{eyes:Ee.kind==="attack",opacity:.9});if(!pe)break;let Ie=J===0?re:de;if(await M(S,pe,[Te,Be,Ie],J===0?2:2.6),A(pe,Re),pe.root.rotation.x=.3,pe.play("interact-right"),Ee.kind==="poison"&&s.fx.emit("bubble",Re.x,Re.y,Re.z,"#94d82d",10),Ee.result==="saved")!P&&Ee.byProtector&&(P=m(S,Te.x,Te.z,-Math.PI/2,{color:"#0d1a12",glow:Hh,opacity:.85}),P&&await M(S,P,[Te,Be,ae],3.4,"sprint")),P&&(A(P,Re),P.play("interact-left")),p(Re.x,Re.y+.2,Re.z,12,.7),s.fx.emit("magic",Re.x,Re.y,Re.z,Hh,14),s.sfx("safe",{volume:.6}),await S.wait(.9),p(Re.x,Re.y+.3,Re.z,8,.9),s.fx.emit("smoke",pe.root.position.x,1,pe.root.position.z,"#2a2238",14),pe.root.visible=!1,await S.wait(.6);else if(Ee.result==="died"){s.flickerRoom(1.4),s.sfx(Ee.kind==="poison"?"potion":"bite",{volume:.7}),Ee.kind!=="poison"&&s.flash(.25,"#d7263d"),await S.wait(1.4),s.fx.emit("smoke",pe.root.position.x,1,pe.root.position.z,"#2a2238",16),pe.root.visible=!1,await S.wait(.2);let ze=s.playerById(X);await n.ghostRise(S,ze&&ze.look,Re.x,Re.z,.9,1.8),Ce(),C(se)&&s.endShowRoom();return}else await S.wait(1),await M(S,pe,[Ie,Be,Te],2.4),pe.root.visible=!1}await S.wait(.5),C(se)&&s.endShowRoom()}function Ce(){if(a)return;a=!0,s.showDead.add(X),s.markDead(X,{quiet:!0,drop:!0});let we=k.players.find(Z=>Z.id===X),ke=s.houseAnchors(X),se=we&&s.ensureGhost(we);se&&ke&&(se.fresh=!1,se.isMe=!0,se.pos.set(ke.approach.x,0,ke.approach.z),se.yaw=Math.atan2(-ke.approach.x,-ke.approach.z),s.fx.emit("magic",ke.approach.x,1,ke.approach.z,"#d8d0ff",12)),s.reapply()}async function We(){let we=new Y,ke=new Y,se=!0;for(;_()<Od+1.5;){let Z=s.ghostOf(X);if(Z&&!s.mainBusy()){let ce=Math.hypot(Z.pos.x,Z.pos.z),H=ce>3?Z.pos.x/ce:0,me=ce>3?Z.pos.z/ce:1,re=q()?9:7.5;we.set(Z.pos.x,1.3,Z.pos.z),ke.set(Z.pos.x-H*re,q()?6.4:5.2,Z.pos.z-me*re),se?(S.cut(ke,we,{fov:q()?56:46}),se=!1):S.shot(ke,we,{fov:q()?56:46,k:1.6})}await S.wait(.25)}}});function C(S){return s.roomModeIs("show")&&s.room===S}function I(S){let F=S.room.night;return!F||!F.showUntil?0:Math.max(0,Od-(F.showUntil-s.serverNow())/1e3)}function x(){h&&e.skip(),h=!1,l&&(l=null,s.showFocusChanged()),u.clear()}function E(S){o=S,a=!1,c=null,s.showDead.clear()}function U(S){let F=S.room;if(F.phase==="lobby"){x(),o!==-1&&E(-1),i="",r=-1;return}if(F.phase!=="night"){h&&x();return}if(F.round!==o&&E(F.round),(F.night&&F.night.stage)!=="show"){h&&x();return}let k=S.night&&S.night.show||null,O=F.round+"|"+(k?JSON.stringify(k):"");if(O===i)return;let X=I(S);if(r===F.round&&(X>2.5||!k)){i=O;return}if(i=O,r=F.round,h&&e.skip(),!k)return;if(X>9.5){k.dead&&!a&&(a=!0,s.showDead.add(S.me.id),s.reapply());return}h=!0;let W={kind:"show",show:k,state:S,el:X};e.announce(W).then(()=>{i===O&&(h=!1,l&&(l=null,s.showFocusChanged()),u.clear())})}return{sync:U,stop:x,get running(){return h},get focus(){return l},actors:u,sawDeath:()=>a,watched:S=>c===S,dispose(){if(x(),f){for(let S of f.list)S.parent&&S.parent.remove(S),S.material.dispose();f.tex.dispose(),f=null}}}}var il=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],xg=["top","hor","sun","sky","gnd"];for(let s of il)for(let e of xg)s[e]=new Ve(s[e]);function vg(){return{h:12,top:new Ve,hor:new Ve,sun:new Ve,sky:new Ve,gnd:new Ve,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new Y,moonDir:new Y,lightDir:new Y,sunVis:0,moonVis:0,night:0,dusk:0}}function dw(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(dt(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function pw(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(dt(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var Gh=new Y,Vh=new Y;function yg(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<il.length-2&&il[t+1].h<=s;)t++;let n=il[t],i=il[t+1],r=Ps(dt((s-n.h)/(i.h-n.h),0,1));for(let a of xg)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,dw(s,e.sunDir),pw(s,e.moonDir),e.sunVis=dt((e.sunDir.y+.06)/.12,0,1),e.moonVis=dt((e.moonDir.y+.04)/.12,0,1)*dt(1-e.sunVis*1.2,0,1);let o=dt((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=dt(1-Math.abs(e.sunDir.y-.05)/.22,0,1),Gh.copy(e.sunDir),Gh.y=Math.max(Gh.y,.24),Vh.copy(e.moonDir),Vh.y=Math.max(Vh.y,.45),e.lightDir.copy(Gh.normalize()).multiplyScalar(o).addScaledVector(Vh.normalize(),1-o).normalize(),e}function _g(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Ns={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},Fd=["saver","low","medium","high"];function Mg(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function bg(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function Sg(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var wg="vkw.quality.v2";function mw(){try{return JSON.parse(localStorage.getItem(wg)||"null")}catch{return null}}function gw(s){try{localStorage.setItem(wg,JSON.stringify(s))}catch{}}var Wh=class{constructor(e,t={}){this.noRetry=!!t.noRetry;let n=mw();if(this.fails={},n&&Array.isArray(n.failed))for(let i of n.failed)this.fails[i]=1;else if(n&&n.fails&&typeof n.fails=="object")for(let i of Object.keys(n.fails))Ns[i]&&(this.fails[i]=+n.fails[i]||0);this.level=n&&Ns[n.tier]?n.tier:e,this.remembered=!!(n&&Ns[n.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){gw({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((p,m)=>p-m),r=this.cpu.slice().sort((p,m)=>p-m),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,c=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let h=Ns[this.level].fps===30,u=h?40:30,f=Fd.indexOf(this.level),d=o>u||a>u*1.8,g=h?a<36&&c<11:o<18&&a<26;if(d?(this.bad+=o>u*1.6?2:1,this.good=0):g?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=Fd[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let y=Fd[f+1];return y&&this.good>=(this.fails[y]?30:12)&&(this.fails[y]||0)<(this.noRetry?1:2)?(this.level=y,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},Xh=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((h,u)=>h-u),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((h,u)=>h+u,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let h=this.trial;if(this.trial=null,o>h.p90*.92)return this.scale=h.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let c=a<o*.55,l=this.min||.6;return o>i*1.2&&c&&this.scale>l+.001?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(l,+(this.scale-.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function kd(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var Eg=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function Tg(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!kd())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=bg(),a=Mg(o),c=document.createElement("div");c.className="vkw-root",s.appendChild(c);let l;try{l=new To({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw c.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}l.outputColorSpace=Bt,l.toneMapping=Sr,l.toneMappingExposure=1,l.shadowMap.type=_r;let h=l.domElement;h.setAttribute("aria-label","K\xF6y"),c.appendChild(h);let u=document.createElement("div");u.className="vkw-vignette",c.appendChild(u);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",c.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",c.appendChild(d);function g(){g.enabled&&(d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0")}let y=new ar;y.fog=new aa(2475,50,250);let p=new tn(40,1,.3,900),m=new zh(p);m.clampFn=w=>{let K=v&&v.layout;if(!K||J!=="game")return;let $=Math.hypot(w.x,w.z),_e=K.R-6.2;if($>_e&&$<K.R+6&&w.y<9.5){let be=_e/$,xe=Math.max(0,(w.y-7)/2.5),Ae=be+(1-be)*xe;w.x*=Ae,w.z*=Ae}};let M="auto",A=new Wh(Sg(o),{noRetry:!o}),b=new Xh;n.renderScale=1;let C=Ns[A.level],I={...a,sparks:70,fireflies:56,clouds:C.clouds,trees:a.trees,scatter:a.scatter},x=new xr(16777215,4473924,1);y.add(x);let E=new ni(16777215,2);E.shadow.bias=-6e-4,E.shadow.normalBias=.03,y.add(E),y.add(E.target);let U=new vr(16747050,20,17,1.5);U.position.set(0,1.4,0),y.add(U);let S=B0(y,I),F=G0(y,I),D=new ki("glow",128),k=new ki("pool",128),O=new ki("blob",64,_i),X=new ki("ring",48);for(let w of[k,O,X,D])y.add(w.mesh);let W=new Lh(160);y.add(W.normal.mesh),y.add(W.add.mesh);let B=eg(I);y.add(B.group);let _=tg(56);y.add(_.points);let v=null,R=new Map,T=new Map,z=new Set,q=new Map,V=0,Q=[],ye=null,oe=null,ne=null,Se=null,Fe=null,ue=0,Xe=null,le=new Set,ee=1,Ue=!1,Ze=null,Ce=null,We=ig(y),we=new ni(9417983,0);y.add(we),y.add(we.target);let ke=new Map;function se(w,K){let $=(ke.get(w)||0)+1;ke.set(w,$),($===1||$===50)&&console.warn("[VKWorld] "+w+" hatas\u0131 (yakaland\u0131, devam ediliyor):",K)}let Z={rig:m,camera:p,chars:R,scene:y,time:0,get village(){return v},fx:W,obstacles:[],localMove:null,sfx(w,K){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(w,K)}catch{}},sfxThrottled(w,K){let $=performance.now();(ce[w]||0)+K*1e3>$||(ce[w]=$,Z.sfx(w))},sfxStep(){Z.sfxThrottled("step",.32)},reapply(){Ee&&P&&J==="game"&&Hi(!1)},ticker:Q,assets:Is,get room(){return oe},getState(){return P},playerById(w){let K=P&&P.players.find($=>$.id===w);return K?{id:K.id,look:K.look,name:K.name,role:K.role}:null},makeActor(w,K,$){let _e="cine:"+ ++V,be=new bi(Z,_e,w,{ghost:$==="ghost"});return be.cineKey=_e,y.add(be.root),q.set(_e,{ch:be,name:K||"",color:w.color|0}),K&&(Ue=!0),be},dropActor(w){q.delete(w.cineKey),w.dispose(),Ue=!0},isDeadShown(w){let K=P&&P.players.find($=>$.id===w);return!!(K&&P.room.phase!=="lobby"&&(!K.alive||K.left)&&!(P.room.phase==="hunter"&&P.room.hunterId===w))},openRoom(w){return ds(w,"cine")},endCineRoom(){ne==="cine"&&Dr()},showDead:new Set,mainBusy(){return de.running},openShowRoom(w){return de.running?null:ds(w,"show")},endShowRoom(){ne==="show"&&Dr()},roomModeIs(w){return ne===w},serverNow(){return Date.now()+cl},ghostOf(w){return T.get(w)||null},showFocusChanged(){Ee&&P&&J==="game"&&Qe(!1)},sawOwnDeath(){return Be.sawDeath()},showWatched(w){return Be.watched(w)},setTodOverride(w,K){ye=w,K&&w!=null&&(Ne=w)},cineTint(){},moonOverride(w){Se=w?new Ve(w):null},fogBoost(w){return ee=w,()=>{ee=1}},footDust(w,K){C.name!=="low"&&J==="game"&&W.emit("dust",w,.05,K,Ce&&Ce.snow?"#e8eef5":null,2)},houseAnchors(w){let K=v&&v.house(w);return K?v.anchors(K):null},layoutR(){return v&&v.layout?v.layout.R:15},meId(){return P&&P.me?P.me.id:null},flickerRoom(w=1.4){wi={t:0,dur:w}},toon:!1,flickerHouse(w,K){v&&v.flicker(w,K)},diedTonight(w){if(Fe&&Fe.ids.includes(w)&&Date.now()-Fe.at<9e4)return!0;let K=P&&P.players.find($=>$.id===w);return!!(K&&(!K.alive||z.has(w))&&P.room.phase!=="lobby"&&le.has(w))},leadInLeft(){let w=P&&P.room&&P.room.timerFrom;return w?dt((w-(Date.now()+cl))/1e3-.3,1.2,4.5):3.6},flash(w,K){if(!w){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${K||"#d7263d"}55, ${K||"#d7263d"}cc)`,f.style.opacity=String(w),clearTimeout(H),H=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(w,K){W.emit("poof",w,.4,K,null,16),Z.sfxThrottled("poof",.2)},isHeldDeath(w){return z.has(w)},holdDeaths(w){z.clear();for(let K of w)z.add(K)},releaseDeaths(){z.size&&(z.clear(),Z.reapply())},markDead(w,K={}){z.delete(w);let $=R.get(w);$&&$.visible&&!$.claimed&&(K.quiet||Z.poofAt($.pos.x,$.pos.z),$.setVisible(!1)),v&&v.setDead(w,!0,$?$.look.color:0,K.drop)},ensureChar(w){if(!Ee)return null;let K=R.get(w.id);return K?K.setLook(w.look):(K=new bi(Z,w.id,w.look),K.fresh=!0,R.set(w.id,K),y.add(K.root),Ke(K)),K},ensureGhost(w){if(!Ln("characters/ghost.glb"))return null;let K=T.get(w.id);return K||(K=new bi(Z,w.id,w.look,{ghost:!0}),K.fresh=!0,T.set(w.id,K),y.add(K.root)),K},removeGhost(w){let K=T.get(w);K&&(K.dispose(),T.delete(w))}},ce={},H=0,me=lg(c,{onTagTap(w){Ot(w,!0)},onPlaqueTap(w){ze.has(w)&&an(w)},onRecenter(){jd()},onCamToggle(){Qd()}}),re=cg(c,{}),de=Dd(Z),ae=og(de,Z),Re=pg(Z),Te=Dd(Z,{scoped:!0,timeout:16}),Be=gg(Z,Te,Re,ae),P=null,L={},J="menu",Ee=!1,pe=!1,Ie="",ze=new Set,Me=new Set,ve=null,Ne=18.3,G=18.3,j=vg(),ie={fog:1,tint:new Ve("#ffffff"),tintAmt:0,moon:new Ve("#eef2ff"),stars:1,weather:"none"},Pe=new Ve,Le=!0,He=0,it=new Y,st=1,Oe=1,rt=1,yt={top:0,bottom:0,left:0,right:0};function Ke(w){w.model.traverse(K=>{K.isMesh&&(K.castShadow=C.charShadow)})}let Ut=null;function en(w){Ut=w}function Si(){Ut!=null&&(l.setPixelRatio(Ut),l.setSize(st,Oe,!1),Ut=null)}let Us=0;function us(w,K=!0){C=Ns[w];let $=window.devicePixelRatio||1;rt=Math.min($,o?C.pxMobile:C.px),Z.toon&&o&&(rt=Math.max(rt,Math.min($,1))),b.min=Z.toon&&o?Math.min(1,1/rt):.6,(n.renderScale||1)<b.min&&(n.renderScale=Math.max(b.min,n.renderScale||1),b.scale=n.renderScale),en(rt*(n.renderScale||1)),Us=Z.toon?0:C.shadows||(o?0:1);let _e=Us>0;if(l.shadowMap.enabled!==_e&&(l.shadowMap.enabled=_e,y.traverse(be=>{be.material&&(Array.isArray(be.material)?be.material:[be.material]).forEach(xe=>{xe.needsUpdate=!0})})),E.castShadow=_e,_e){let be=C.shadowSize||1024;E.shadow.mapSize.x!==be&&(E.shadow.mapSize.set(be,be),E.shadow.map&&(E.shadow.map.dispose(),E.shadow.map=null)),l.shadowMap.autoUpdate=Us===2}for(let be of R.values())Ke(be);if(I.clouds=C.clouds,Le=!0,K&&t.onQuality)try{t.onQuality(w)}catch{}}function Lr(){let w=c.getBoundingClientRect();st=Math.max(1,Math.round(w.width)),Oe=Math.max(1,Math.round(w.height)),l.setSize(st,Oe,!1),m.setSize(st,Oe),me.setSize(st,Oe),re.place(eu(),st,Oe),Qe(!0)}let Os=null;window.ResizeObserver&&(Os=new ResizeObserver(()=>Lr()),Os.observe(c));let Fs=()=>Lr();window.addEventListener("resize",Fs),window.addEventListener("orientationchange",Fs),us(A.level,!1),Lr();let Bi=Io.chars.length+Io.village.length;Cr(["village","chars"],(w,K)=>{if(!pe&&t.onProgress)try{t.onProgress(w,K)}catch{}}).then(()=>{if(!pe){if(sl(),ks(),Ee=!0,t.style==="toon")try{Ys.setStyle("toon")}catch(w){se("g\xF6r\xFCn\xFCm",w)}if(P&&J==="game"&&Hi(!0),t.onReady)try{t.onReady()}catch{}return Cr(["extra"]).then(()=>{if(!pe)return v.onExtraLoaded(),ks(),P&&Hi(!1),Cr(["cine"]).then(()=>{pe||(oe||(oe=Ld(Z)),ks(!0))})})}}).catch(w=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",w),t.onError)try{t.onError(w)}catch{}});function ks(w){try{let K=[],$=xe=>xe.traverse(Ae=>{Ae.visible||(Ae.visible=!0,K.push(Ae))});$(y);let _e=[];if(oe&&oe.group&&(oe.group.parent||y.add(oe.group),$(oe.group)),w)for(let xe of["props/village.glb","props/graveyard.glb","interior/furniture.glb","interior/clues.glb","characters/ghost.glb","characters/vampire.glb","characters/bat.glb"]){let Ae=jn(xe);Ae&&_e.push(Ae.scene)}let be=()=>{for(let xe of K)xe.visible=!1};if(l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")){let xe=[l.compileAsync(y,p)];for(let Ae of _e)xe.push(l.compileAsync(Ae,p,y));be(),Promise.all(xe).catch(()=>{})}else{l.compile(y,p);for(let xe of _e)l.compile(xe,p,y);be()}}catch(K){se("\xF6n derleme",K)}}function sl(){v=$0(y,I,null,F),fs(J==="menu"||!P?null:P),_.place(8,40),Qe(!0)}function fs(w){let K,$=null;if(!w||J==="menu")K=Eg;else{let Ae=w.room.phase==="lobby";K=w.players.filter(lt=>!(Ae&&lt.left)).map(lt=>{var tt;return{id:lt.id,seat:(tt=lt.seat)!=null?tt:0}}),$=w.me?w.me.id:null,K.length||(K=Eg)}let _e=K.map(Ae=>Ae.id+"@"+Ae.seat).join(",")+"|"+$;if(_e===Ie)return!1;let be=!!Ie&&w&&w.room.phase==="lobby"&&J==="game"&&!Ie.startsWith("menu-");Ie=_e;let xe=W0(K,$);v.setLayout(xe,be),Bs(xe),_.place(xe.Rp+1,xe.R+14),Le=!0,be||Re.reset();for(let Ae of R.values())be||(Ae.fresh=!0);return!0}function Bs(w){let K=[{x:0,z:0,r:1.6,tag:"fire"}];for(let $ of v.benchSlots){let _e=Math.cos($.a),be=-Math.sin($.a);for(let xe of $.small?[-.45,.45]:[-.85,0,.85])K.push({x:$.x+_e*xe,z:$.z+be*xe,r:.3,tag:"bench"})}for(let $ of v.lampList())$.small||K.push({x:$.x,z:$.z,r:.35,tag:"lamp"});Z.obstacles=K}let wi=null;function rl(w){if(!wi)return 1;wi.t+=w;let K=wi.t,$=wi.dur;if(K>=$)return .12;let _e=Math.floor(K/.07);return Math.abs(Math.sin(_e*12.9898+3.1)*43758.5453)%1>.12+.75*(K/$)?1-.4*(K/$):.06}function ds(w,K){if(oe||(oe=Ld(Z)),!oe.ready)return null;let $=Z.playerById(w)||{id:w,look:{color:0,hat:0,skin:0},name:""};return oe.hide(),oe.show($),ne=K,Ue=!0,g(),oe}function Dr(){oe&&oe.hide();let w=ne;ne=null,wi=null,w&&((w==="cine"||!de.running)&&m.setOverride(null,!0),g()),Ue=!0}function ps(w){w!==Ze&&(Ze=w,Ce=ag(w),ie.fog=Ce.fog,ie.tint.set(Ce.tint),ie.tintAmt=Ce.tintAmt,ie.moon.set(Ce.moon),ie.stars=Ce.stars,ie.weather=Ce.weather,ie.nightTint=!!Ce.nightTint,We.set(Ce.weather),v&&v.setTheme(Ce))}function ol(w,K){if(!pe&&(P=w,L=K||{},!!Ee))try{Hi(!1)}catch($){se("durum",$)}}function Nr(){return!!(P&&P.room.phase==="night"&&P.room.night&&P.room.night.stage==="show")}function ms(){if(!P)return null;let w=kh(P);return w==="night"&&Nr()?null:w}function Hi(w){if(!P||J!=="game")return;let K=fs(P),{room:$,players:_e}=P;ps($.scenario&&$.phase!=="lobby"?$.scenario.id:null);let be=$.phase!=="lobby",xe=new Set;for(let Ae of _e)xe.add(Ae.id),v.setOwner(Ae.id,Ae.look?Ae.look.color:-1,Ae.name),v.setDead(Ae.id,be&&(!Ae.alive||Ae.left||Z.showDead.has(Ae.id))&&!z.has(Ae.id),Ae.look?Ae.look.color:0);for(let[Ae,lt]of R)xe.has(Ae)||(lt.dispose(),R.delete(Ae),Re.forget(Ae));for(let Ae of[...T.keys()])xe.has(Ae)||Z.removeGhost(Ae);if($.phase==="lobby")for(let Ae of _e)v.tombOf(Ae.id)&&v.setDead(Ae.id,!1);if($.phase==="night"&&!le.size)for(let Ae of _e)Ae.alive&&le.add(Ae.id);if($.phase!=="night"&&$.phase!=="day"&&$.phase!=="hunter"&&le.clear(),$.phase==="night"&&Xe!=="night"){le.clear();for(let Ae of _e)Ae.alive&&le.add(Ae.id)}Xe=$.phase,Re.apply(P,w||K&&$.phase!=="lobby");try{Be.sync(P)}catch(Ae){se("gece g\xF6sterisi",Ae)}ze=ms()?new Set(_e.filter(Ae=>fg(P,Ae,L.witchMode)).map(Ae=>Ae.id)):new Set,Me=Nr()?Be.actors:new Set(tl(P).keys()),Hs(),Qe(!1)}function Hs(){if(!P)return;let{room:w,me:K,players:$,day:_e}=P,be=w.phase,xe=ms(),Ae=Ud(P,L.witchMode),lt=new Map($.map(Ye=>[Ye.id,Ye])),tt=new Set,gt=new Set,Mt=$.filter(Ye=>!Ye.left).length;me.setCompact(Mt>7&&st<700||Mt>12);for(let Ye of $){let ct=R.get(Ye.id),_t=T.get(Ye.id);if(ct||_t){tt.add(Ye.id);let De=null,ht=_e&&_e.votes&&_e.votes[Ye.id];ht&&ht.length&&(De={total:ht.reduce((En,Ti)=>En+(Ti.w||1),0),dots:ht.map(En=>({color:lt.get(En.id)?Mn[lt.get(En.id).look.color]:"#999",w:En.w||1}))});let Tt=(Ye.isHost&&be==="lobby"?"\u{1F451}":"")+(!Ye.connected&&!Ye.left?"\u{1F4F4}":"")+(_e&&_e.sleeping&&_e.sleeping.includes(Ye.id)?"\u{1F4A4}":"")+(_e&&_e.voted&&_e.voted.includes(Ye.id)&&!(_e.sleeping||[]).includes(Ye.id)?"\u2714":""),xt=xe!=="night"&&ze.has(Ye.id);me.setTag(Ye.id,{name:Ye.name,job:Ye.job&&Ye.job.label?Ye.job.label:"",color:Ye.look.color,badges:Tt,me:Ye.id===K.id,off:!Ye.connected,dead:!Ye.alive,sel:xt,picked:nl(P,Ye)&&xe!=="night",hover:ve===Ye.id&&xt,selColor:Ae,mark:xe!=="night"?Bh(P,Ye,L.witchMode):be==="night"?null:Bh(P,Ye,L.witchMode),votes:De})}if(v.house(Ye.id)){gt.add(Ye.id);let De=xe==="night"&&ze.has(Ye.id),ht=be==="lobby"||be==="night"&&xe==="night"||be==="reveal";me.setPlaque(Ye.id,{name:Ye.name,color:Ye.look.color,sel:De,picked:be==="night"&&nl(P,Ye),dim:!ht,hidden:!ht,dead:be!=="lobby"&&(!Ye.alive||Ye.left),selColor:Ae,mark:be==="night"?Bh(P,Ye,L.witchMode):null})}}for(let[Ye,ct]of q)ct.name&&(tt.add(Ye),me.setTag(Ye,{name:ct.name,job:"",color:ct.color,badges:"",me:!1}));if(Z.room&&ne){for(let[Ye,ct]of Z.room.actors)if(ct.name){let _t="room:"+Ye;tt.add(_t),me.setTag(_t,{name:ct.name,job:"",color:ct.color,badges:"",me:!1})}}me.sync(tt,gt),Ue=!1}let N=[],te=new Y,ge=0,he="";function fe(w){if(!P||!v||!Be.focus)return;let K=m.portrait,$=R.get(P.me.id);if(!($&&$.visible&&$.claimed)){$=null;for(let Ae of Be.actors){let lt=R.get(Ae);if(lt&&lt.visible&&lt.claimed&&P.players.some(tt=>tt.id===Ae&&tt.role&&(tt.role==="vampir"||tt.role==="iftiraci"))){$=lt;break}}}if($){he="follow",m.setShot({kind:"show",target:te.set($.pos.x*.9,.6,$.pos.z*.9),az:.25,el:K?.98:.8,fov:K?46:40,dist:K?27:21,snap:w,speed:1.3}),m.shot.dynamic=!1;return}if(he==="wide"&&!w)return;he="wide";let _e=Be.focus,be=0,xe=0;for(let Ae of _e)be+=Ae.x,xe+=Ae.z;be/=_e.length,xe/=_e.length,m.setShot({kind:"show",target:te.set(be*.85,.5,xe*.85),az:.25,el:K?1.02:.78,fov:K?44:40,points:_e,margin:K?.78:.8,minDist:18,snap:w,speed:.9}),m.shot.dynamic=!1}for(let w=0;w<64;w++)N.push(new Y);let Ge="";function Qe(w){if(!v||!v.layout){m.setShot({target:new Y(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:w});return}let K=v.layout,$=m.portrait,_e=P&&J==="game"?P.room.phase:"menu",be=P&&J==="game"?ms():null,xe;_e==="menu"?xe="menu":Go()&&tu()?xe="follow":_e==="night"?xe=be==="night"?"overview":Nr()&&Be.focus?"show":"sleep":_e==="reveal"?xe="gather":tu()?xe="follow":xe="plaza";let Ae=xe!==Ge;Ge=xe,Ae&&(m.recenter(),xe==="follow"&&($e.init=!1));let lt=m.shot;if(xe==="follow"){let tt=0,gt=K.R+3.6;for(let Mt=0;Mt<24;Mt++){let Ye=Mt/24*nt;N[tt++].set(Math.sin(Ye)*gt,0,Math.cos(Ye)*gt)}$e.ovDist=m.fit(Kd,$e.az,$?1.15:.98,40,N.slice(0,tt),.94,8,220),lt.dynamic=!1,lt.points=null,(Ae||w)&&ep(0,!0);return}if(xe==="menu"){let tt=K.Rp+($?3.5:2.5);m.setShot({kind:xe,target:new Y(0,$?3.4:3,0),az:lt.az,el:$?.2:.16,dist:tt,fov:$?64:50,speed:1.2}),lt.dynamic=!1}else if(xe==="show")he="",fe(w);else if(xe==="show-wide"){let tt=Be.focus,gt=0,Mt=0;for(let ct of tt)gt+=ct.x,Mt+=ct.z;gt/=tt.length,Mt/=tt.length;let Ye=$?1.02:.78;m.setShot({kind:xe,target:te.set(gt*.85,.5,Mt*.85),az:.25,el:Ye,fov:$?44:40,points:tt,margin:$?.78:.8,minDist:18,snap:w,speed:1.1}),lt.dynamic=!1}else if(xe==="overview"||xe==="sleep"){let tt=0,gt=K.R+3.6;for(let Ye=0;Ye<24;Ye++){let ct=Ye/24*nt;N[tt++].set(Math.sin(ct)*gt,0,Math.cos(ct)*gt),N[tt++].set(Math.sin(ct)*K.R,4.5,Math.cos(ct)*K.R)}let Mt=xe==="overview"?$?1.2:.98:$?.95:.62;m.setShot({kind:xe,target:new Y(0,0,xe==="overview"?0:-K.R*.08),az:xe==="sleep"?.25:0,el:Mt,fov:40,points:N.slice(0,tt),margin:xe==="overview"?.94:1.04,snap:w,speed:1.6}),lt.dynamic=!1}else{let tt=N,gt=0,Mt=xe==="gather"?5.6:3.2;for(let ct=0;ct<8;ct++){let _t=ct/8*nt;tt[gt++].set(Math.sin(_t)*Mt,0,Math.cos(_t)*Mt)}for(let ct of R.values()){if(!ct.visible||gt>60)continue;let _t=ct.path&&ct.path.length?ct.path[ct.path.length-1]:ct.pos;Math.hypot(_t.x,_t.z)>K.Rp+1.5||(tt[gt++].set(_t.x,0,_t.z),tt[gt++].set(_t.x,2.4,_t.z))}for(let ct of T.values())gt<62&&(tt[gt++].set(ct.pos.x,2.6,ct.pos.z),tt[gt++].set(ct.pos.x,0,ct.pos.z));let Ye=xe==="gather"?$?.6:.5:$?1.02:.66;m.setShot({kind:xe,target:rp(tt,gt),az:0,el:Ye,fov:$?44:38,points:tt.slice(0,gt),margin:$?.92:.8,minDist:8,snap:w,speed:1.8}),lt.dynamic=!0,lt.points=tt.slice(0,gt)}}let qe=new Ta,Je=new pt,et=new Y,vt=new Y,Ct=new Jn(new Y(0,1,0),0);function ot(w,K){return Je.set(w/st*2-1,-(K/Oe)*2+1),qe.setFromCamera(Je,p),qe.ray}function It(w,K,$,_e=34){let be=null,xe=1/0;for(let[Ae,lt]of R){if(!lt.visible||!$(Ae)||(et.set(lt.pos.x,.1,lt.pos.z).project(p),vt.set(lt.pos.x,lt.headY,lt.pos.z).project(p),et.z>1))continue;let tt=(et.x*.5+.5)*st,gt=(-et.y*.5+.5)*Oe,Mt=(vt.x*.5+.5)*st,Ye=(-vt.y*.5+.5)*Oe,ct=Mt-tt,_t=Ye-gt,De=ct*ct+_t*_t||1,ht=dt(((w-tt)*ct+(K-gt)*_t)/De,0,1),Tt=Math.hypot(w-(tt+ct*ht),K-(gt+_t*ht)),xt=Math.max(_e,Math.sqrt(De)*.55);Tt<xt&&Tt<xe&&(xe=Tt,be=Ae)}return be}function jt(w,K,$){let _e=v.layout,be=null,xe=1/0;for(let _t of v.houses.values()){if(_t.removing||$&&!ze.has(_t.id)||(et.set(_t.cx,1.6,_t.cz).project(p),et.z>1))continue;let De=(et.x*.5+.5)*st,ht=(-et.y*.5+.5)*Oe;vt.set(_t.cx+Math.cos(_t.crot)*_t.info.hx,1.6,_t.cz-Math.sin(_t.crot)*_t.info.hx).project(p);let Tt=Math.max(26,Math.hypot((vt.x*.5+.5)*st-De,(-vt.y*.5+.5)*Oe-ht)*1.25),xt=Math.hypot(w-De,K-ht);xt<Tt&&xt<xe&&(xe=xt,be=_t)}if(be)return be.id;let Ae=ot(w,K),lt=v.pickHouse(Ae);if(lt&&(!$||ze.has(lt.id)))return lt.id;let tt=Ae.intersectPlane(Ct,et);if(!tt)return null;let gt=Math.hypot(tt.x,tt.z);if(gt<_e.Rp*.75||gt>_e.R+8)return null;let Mt=Math.atan2(tt.x,tt.z),Ye=null,ct=1/0;for(let _t of v.houses.values()){if($&&!ze.has(_t.id))continue;let De=Math.abs(((Mt-_t.angle+Math.PI)%nt+nt)%nt-Math.PI);De<ct&&(ct=De,Ye=_t)}return Ye&&ct<_e.step*.5?Ye.id:null}function Gt(w,K){if(!P||J!=="game")return null;let $=ms();if($==="night"){let _e=jt(w,K,!0);return _e&&ze.has(_e)?_e:null}return $==="vote"||$==="shoot"?It(w,K,_e=>ze.has(_e)):null}let Ft=0;function an(w){if(Ft=performance.now()+450,t.onPick)try{t.onPick(w)}catch{}}let at=w=>{performance.now()<Ft&&w.cancelable&&w.preventDefault()},yn=w=>{performance.now()<Ft&&(Ft=0,w.stopPropagation(),w.preventDefault())};c.addEventListener("touchend",at,{passive:!1}),window.addEventListener("click",yn,!0);function Ot(w,K){if(!P)return;if(ze.has(w)){an(w);return}let $=P.room.phase;w===P.me.id&&($==="lobby"||$==="ended")&&t.onSelf&&t.onSelf()}function Gi(w,K){if(!P||J!=="game"||!Ee)return;let $=Gt(w,K);if($){an($),me.ripple(w,K);return}let _e=P.room.phase,be=P.me;if((_e==="lobby"||_e==="ended")&&It(w,K,xe=>xe===be.id,26)){t.onSelf&&t.onSelf();return}if(dl()){let xe=ot(w,K).intersectPlane(Ct,et);if(!xe)return;let Ae=v.layout,lt=Math.hypot(xe.x,xe.z);if(lt>Ae.R+4)return;let tt=Math.atan2(xe.x,xe.z);lt=dt(lt,Ae.Rp*.2,Ae.Rp*.96);let gt=Math.sin(tt)*lt,Mt=Math.cos(tt)*lt,Ye=wd(Ae,gt,Mt);if(Z.localMove={x:gt,z:Mt,until:performance.now()+1500},me.ripple(w,K),t.onMove)try{t.onMove(Ye.x,Ye.y)}catch{}Hi(!1)}}let kt=new Map,li=!1,ci=0,Ei=0,Nt=0,Kt=0;function Dn(w){let K=c.getBoundingClientRect();return{x:w.clientX-K.left,y:w.clientY-K.top}}function qt(w){if(w.target!==h)return;h.setPointerCapture&&h.setPointerCapture(w.pointerId);let K=Dn(w);if(kt.set(w.pointerId,K),kt.size===1&&(li=!1,ci=performance.now(),Ei=K.x,Nt=K.y),kt.size===2){let[$,_e]=[...kt.values()];Kt=Math.hypot($.x-_e.x,$.y-_e.y),li=!0}}function ln(w){let K=Dn(w);if(!kt.has(w.pointerId)){w.pointerType==="mouse"&&Ig(K.x,K.y);return}let $=kt.get(w.pointerId);if(kt.set(w.pointerId,K),kt.size===1)!li&&Math.hypot(K.x-Ei,K.y-Nt)>9&&(li=!0),li&&J==="game"&&(Ge==="follow"?zg(K.x-$.x,K.y-$.y):m.drag(K.x-$.x,K.y-$.y));else if(kt.size===2){let[_e,be]=[...kt.values()],xe=Math.hypot(_e.x-be.x,_e.y-be.y);Kt>0&&xe>0&&J==="game"&&(Ge==="follow"?$d(Kt/xe):m.zoom(Kt/xe)),Kt=xe}}function hi(w){if(!kt.has(w.pointerId))return;let K=Dn(w);kt.delete(w.pointerId),kt.size===0&&!li&&performance.now()-ci<650&&Gi(K.x,K.y),kt.size<2&&(Kt=0)}function al(w){kt.delete(w.pointerId)}function Cg(w){if(J!=="game")return;w.preventDefault();let K=Math.exp(dt(w.deltaY,-120,120)*.0015);Ge==="follow"?$d(K):m.zoom(K)}function Ig(w,K){let $=Gt(w,K);$!==ve&&(ve=$,h.style.cursor=$?"pointer":"",Hs())}h.addEventListener("pointerdown",qt),h.addEventListener("pointermove",ln),h.addEventListener("pointerup",hi),h.addEventListener("pointercancel",al),h.addEventListener("pointerleave",w=>{w.pointerType==="mouse"&&ve&&(ve=null,Hs())}),h.addEventListener("wheel",Cg,{passive:!1});let Pg=w=>w.preventDefault();h.addEventListener("contextmenu",Pg);let Kh=document.hidden,ll=!1,Hd=()=>{Kh=document.hidden,Kh||(Oo=performance.now(),A.reset(),ul())};document.addEventListener("visibilitychange",Hd),h.addEventListener("webglcontextlost",w=>{w.preventDefault(),ll=!0}),h.addEventListener("webglcontextrestored",()=>{ll=!1,Le=!0,Oo=performance.now(),ul()});function Lg(){if(ye!=null)return ye;if(J!=="game"||!P)return 18.35;let{room:w,day:K}=P,$=Date.now()+(P.serverNow,0),_e=w.deadline?Math.max(0,w.deadline-($+cl))/1e3:null;switch(w.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let be=w.settings&&w.settings.nightSec||30,xe=_e==null?.3:dt(1-_e/be,0,1);return w.night&&w.night.stage&&(w.night.stage==="show"?xe=.7+.3*(_e==null?0:dt(1-_e/14,0,1)):xe=.7*(_e==null?.3:dt(1-_e/(be+4),0,1))),(21.2+xe*7.6)%24}case"day":{let be=w.settings&&w.settings.daySec||120,xe;return K&&K.shortened?(Uo==null&&(Uo=Zh,Vd=Math.max(1,_e||10)),xe=Uo+(1-Uo)*dt(1-(_e||0)/Vd,0,1)):(Uo=null,xe=_e==null?.2:dt(1-_e/be,0,1)),Zh=xe,7.4+xe*11.6}case"hunter":return Ne>19.5||Ne<6?7.6:Ne;case"ended":return w.winner==="vampir"?23:w.winner==="soytari"?18.5:9.5;default:return 17}}let Zh=0,Gd=-1,Uo=null,Vd=10,cl=0,hl=0,Oo=performance.now(),Wd=0,Fo=0,Hn={fps:0,ms:0,calls:0,tris:0,frames:0};function ul(){!hl&&!pe&&(hl=requestAnimationFrame(Dg))}let ko=240,fl=new Float32Array(ko),Jh=new Float32Array(ko),Bo=0,Gs=0,Xd=new Float32Array(ko);function Ho(w,K){return Gs?(Xd.set(w),+Xd.subarray(0,Gs).sort()[Math.min(Gs-1,Math.floor(K*(Gs-1)))].toFixed(1)):0}function Dg(w){if(hl=0,pe||Kh||ll||(ul(),st<2||Oe<2)||C.fps<=30&&w-Wd<1e3/30-4)return;let K=dt((w-Oo)/1e3,0,.1),$=w-Oo;Oo=w,Wd=w;let _e=performance.now();try{Ng(K)}catch(Ae){se("kare",Ae)}Si();let be=performance.now();try{l.render(y,p)}catch(Ae){se("\xE7izim",Ae)}let xe=performance.now();if(Hn.stepMs=(Hn.stepMs||0)*.9+(be-_e)*.1,Hn.renderMs=(Hn.renderMs||0)*.9+(xe-be)*.1,Hn.frames++,Fo+=$,Hn.cpu=xe-_e,fl[Bo]=$,Jh[Bo]=xe-_e,Bo=(Bo+1)%ko,Gs<ko&&Gs++,Fo>500&&(Hn.fps=Math.round(Hn.frames*1e3/Fo),Hn.ms=+(Fo/Hn.frames).toFixed(1),Hn.frames=0,Fo=0),Hn.calls=l.info.render.calls,Hn.tris=l.info.render.triangles,M==="auto"&&Ee){let Ae=A.sample($,xe-_e,w);Ae&&Ae!==C.name&&(us(Ae),b.reset())}if(Ee&&!ll){let Ae=b.sample($,xe-_e,w,C.fps===30?36:24);Ae!=null&&(n.renderScale=Ae,en(rt*Ae))}}let bw=new Ve,$h=new Ve(0,0,0),jh=new Map;function zr(w){return jh.has(w)||jh.set(w,new Ve(w)),jh.get(w)}function Ng(w){Z.time+=w;let K=Z.time;G=Lg(),Ne=_g(Ne,G,w,J==="menu"?.6:1.3),yg(Ne,j);let $=P&&J==="game"&&P.room.phase==="ended"&&P.room.winner==="vampir";Pe.copy(Se||ie.moon),$&&(Pe.set("#ff6a6a"),j.sun.lerp(zr("#ff5a6a"),.35));let _e=ie.tintAmt*(ie.nightTint?j.night:1);_e>0&&(j.top.lerp(ie.tint,_e),j.hor.lerp(ie.tint,_e*.8),j.sky.lerp(ie.tint,_e*.5),j.gnd.lerp(ie.tint,_e*.3)),j.night>.3&&j.sun.lerp(Pe,(Se||ie.nightTint?.55:.3)*j.night),j.fogNear*=ie.fog*ee,j.fogFar*=ie.fog*ee,j.stars*=ie.stars,y.fog.color.copy(j.hor);let be=Math.max(0,m.cur.dist*m.user.zoom-28)*(1-.35*j.night);y.fog.near=j.fogNear+be*.9,y.fog.far=j.fogFar+be*1.1,we.intensity=.9*j.night*(ne?.4:1),we.color.copy(Pe),we.position.set(-p.position.x*.6,60,-p.position.z*.6-40),x.color.copy(j.sky),x.groundColor.copy(j.gnd),x.intensity=j.hi,E.color.copy(j.sun),E.intensity=j.si,Z.toon&&(x.intensity*=1.3,E.intensity*=.75);let xe=v&&v.layout,Ae=xe?xe.R+14:40;if(E.position.copy(j.lightDir).multiplyScalar(120),E.target.position.set(0,0,0),E.castShadow){let De=E.shadow.camera;De.right!==Ae&&(De.left=-Ae,De.right=Ae,De.top=Ae,De.bottom=-Ae,De.near=20,De.far=260,De.updateProjectionMatrix(),Le=!0),it.angleTo(j.lightDir)>.0045&&(it.copy(j.lightDir),Le=!0)}let lt=.82+.1*Math.sin(K*13.1)+.06*Math.sin(K*23.7+1)+.05*Math.sin(K*5.3);if(ne&&oe){let De=ne==="window"||de.current&&de.current.kind==="watch";if(De){let Tt=oe.W({x:-2.4,y:2.3,z:-1.2});U.position.copy(Tt),x.color.lerp(Pe,.6),x.groundColor.lerp(Pe,.35),x.intensity=j.hi+1.1}else{let Tt=oe.lanternWorld();U.position.set(Tt.x,Tt.y+.9,Tt.z+.8)}let ht=rl(w);U.intensity=(De?13:9+5*j.night)*lt*ht,wi&&(x.intensity*=.3+.7*ht),U.distance=12}else U.intensity=(2+17*j.night*j.night)*j.fire*lt,U.position.set(Math.sin(K*7)*.08,1.4,0),U.distance=17;B.update(K,rt,.75+.25*j.fire),S.update(j,K,p,rt,Pe),_.update(K,rt,C.fireflies?dt(j.night*1.2-.2,0,1):0),u.style.opacity=String(.55+j.night*.45+(ne==="window"?.12:0));for(let De=Q.length-1;De>=0;De--){let ht=!0;try{ht=Q[De](w,K)}catch(Tt){se("ticker",Tt)}ht&&Q.splice(De,1)}if(oe&&oe.visible)try{oe.update(w,K)}catch(De){se("oda",De)}for(let De of q.values())try{De.ch.update(w,K)}catch(ht){se("kopya",ht)}Ue&&P&&J==="game"&&Hs(),We.update(w,K,rt,m.cur.target,J==="game"||J==="menu"?C.weather:0,Ce&&Ce.fogTint?zr(Ce.fogTint):null,j.night),v&&(v.update(w,K,j)&&(Le=!0),v.version!==Gd&&v.layout&&(Gd=v.version,Bs(v.layout)),i-=w,P&&J==="game"&&i<=0&&(i=.25,Re.tick(P)));try{kg(w)}catch(De){se("s\xFCr\xFC\u015F",De)}let tt=Z.obstacles,gt=Hg;gt.length=0,op.setFromProjectionMatrix(Gg.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse));for(let De of R.values()){ap.center.set(De.pos.x,De.pos.y+.9,De.pos.z);let ht=De.visible&&op.intersectsSphere(ap);De.animEvery=!De.visible||De.inside?-1:ht?1:4;try{De.update(w,K)}catch(Tt){se("karakter",Tt),qd(De)}De.visible&&!De.claimed&&gt.push(De)}for(let De of T.values())try{De.update(w,K)}catch(ht){se("hayalet",ht),qd(De)}Or&&Bg();for(let De=0;De<gt.length;De++){let ht=gt[De];for(let Tt=De+1;Tt<gt.length;Tt++){let xt=gt[Tt],En=xt.pos.x-ht.pos.x,Ti=xt.pos.z-ht.pos.z,Nn=En*En+Ti*Ti;if(Nn<.72*.72&&Nn>1e-6){let Fr=Math.sqrt(Nn),Ks=(.72-Fr)*.5,gl=En/Fr,xl=Ti/Fr,Zs=ht.speed>xt.speed?.75:.25;ht.pos.x-=gl*Ks*Zs,ht.pos.z-=xl*Ks*Zs,xt.pos.x+=gl*Ks*(1-Zs),xt.pos.z+=xl*Ks*(1-Zs)}}ht.peeking||zd(ht.pos,tt,null)}D.begin(),k.begin(),O.begin(),X.begin(),D.add(0,1,0,3.4,zr("#ff8a2a"),.55*j.fire*lt),k.add(0,.04,0,13+3*j.night,zr("#ff7a1a"),(.18+.3*j.night)*j.fire*lt),v&&v.emitGlows(j,K,D,k);let Mt=Z.toon?.62:C.blob?.55:.32;if(Z.toon&&v)for(let De of v.houses.values())De.scale>.5&&O.add(De.cx,.03,De.cz,De.info.size*1.25*De.scale,$h,.32);let Ye=P?zr(Ud(P,L.witchMode)):null,ct=P&&J==="game"?ms():null;for(let De of gt)if(O.add(De.pos.x,.025,De.pos.z,1.05,$h,Mt),ct&&ct!=="night"&&ze.has(De.id)){let ht=P&&nl(P,{id:De.id});X.add(De.pos.x,.05,De.pos.z,ht?1.9:1.5,Ye,ht?1:ve===De.id?.95:.45,De.seed*6)}for(let De of R.values())De.claimed&&De.visible&&De.root.visible&&O.add(De.pos.x,.025,De.pos.z,1.05,$h,Mt);for(let De of T.values())D.add(De.pos.x,1.2,De.pos.z,2.2,zr(Mn[De.look.color]),.22);if(ct==="night"&&v)for(let De of ze){let ht=v.house(De);if(!ht)continue;let Tt=v.anchors(ht),xt=nl(P,{id:De});X.add(Tt.approach.x,.05,Tt.approach.z,xt?3.4:2.6,Ye,xt?1:ve===De?.95:.5,ht.seat)}if(W.update(w,K),D.end(K),k.end(K),O.end(K),X.end(K),J==="menu"&&(m.shot.az+=w*.045),Ge==="show"?(ge-=w,ge<=0&&(ge=.2,fe(!1))):Ge==="sleep"&&Nr()&&(m.shot.az+=w*.025),(Ge==="plaza"||Ge==="gather")&&Wg(),Qh-=w,J==="game"&&P&&Qh<=0&&(Qh=.4,Ge==="follow"!==tu()&&(Ge==="follow"||Ge==="plaza"||Go())&&Qe(!1)),Ge==="follow")try{ep(w)}catch(De){se("takip",De)}m.update(w,K);try{Og(w)}catch(De){se("\xF6rtme",De)}let _t=J==="game"&&P&&!de.current&&!ne&&Jd();me.setCamToggle(!!_t,Ge==="follow"?"follow":"overview",yt),me.setRecenter(J==="game"&&(Ge==="follow"?Ug():m.offset),yt),He-=w,E.castShadow&&Us===1&&Le&&He<=0&&(l.shadowMap.needsUpdate=!0,Le=!1,He=Vg()?.1:.2),Z.toon&&(ue-=w,ue<=0&&(ue=.5,Of(y,!0))),r-=w,J==="game"&&P&&r<=0&&(r=C.labelHz>=60?0:1/C.labelHz-.004,me.project(p,Xg,Yg,qg))}function qd(w){try{w.once=null;let K=w.look;w.lookKey=null,w.setLook(K),Ke(w)}catch{w.setVisible(!1)}}let Yd="vkw.cam",Vs="follow";try{let w=localStorage.getItem(Yd);(w==="follow"||w==="overview")&&(Vs=w)}catch{}let $e={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0,kd:1,ke:0},Kd=new Y(0,0,0),Vi=new Y,Qh=0;function Ws(){if(!P||!P.me)return null;let w=P.me;if(!w.alive){let $=T.get(w.id);if($)return $}let K=R.get(w.id);return K&&K.visible?K:null}function dl(){let w=P&&J==="game"?P.room.phase:null;return w==="lobby"||w==="ended"||Go()}function Go(){if(!P||J!=="game"||!P.me||P.me.alive)return!1;let w=P.room.phase;return w!=="lobby"&&w!=="ended"&&T.has(P.me.id)}function eu(){return yt.joystick===null&&Go()&&re&&re.touch?{...yt,joystick:void 0}:yt}let Zd=!1;function Jd(){return dl()&&!!Ws()}function tu(){return Vs==="follow"&&Jd()}function pl(w){return w.yaw+Math.PI+.38*$e.side}function zg(w,K){$e.az-=w*.0075,$e.el=dt($e.el+K*.004,.12,1.15),$e.dragT=0}function $d(w){$e.zoom=dt($e.zoom*w,.55,4.2),$e.zoomGoal=0,$e.dragT=Math.min($e.dragT,.5)}function Ug(){let w=Ws();return w?Math.abs($e.zoom-($e.wide?1.6:1))>.15||Math.abs($e.el-.42)>.12||w.speed<.3&&Math.abs(un(pl(w)-$e.az))>.9:!1}function jd(){if(Ge==="follow"){let w=Ws();w&&($e.az=pl(w)),$e.el=.42,$e.zoom=$e.wide?1.6:1,$e.zoomGoal=0,$e.dragT=99;return}m.recenter()}function Qd(){Vs=Vs==="follow"?"overview":"follow";try{localStorage.setItem(Yd,Vs)}catch{}Qe(!1)}function ep(w,K){let $=Ws(),_e=v&&v.layout;if(!$||!_e)return;let be=m.portrait;$e.init||($e.init=!0,$e.side=1,$e.az=pl($),$e.el=.42,$e.zoom=1,$e.dragT=99,$e.zoomGoal=0,$e.wide=!1),$e.dragT+=w;let xe=ms(),Ae=xe==="vote"||xe==="shoot";Ae!==$e.wide&&($e.wide=Ae,Ae&&$e.zoom<1.6&&($e.zoomGoal=1.6)),$e.zoomGoal&&($e.zoom+=($e.zoomGoal-$e.zoom)*hn(2.5,w),Math.abs($e.zoom-$e.zoomGoal)<.02&&($e.zoomGoal=0)),$.speed>.4&&$e.dragT>1.1&&($e.az+=un(pl($)-$e.az)*hn($.drive?1.5:.9,w)),$e.az=un($e.az);let lt=$e.zoom,tt=Ps(dt((lt-1.7)/2.5,0,1)),gt=be?8.8:7.2;Vi.set($.pos.x,($.isGhost?1.5:1.25)+($.isGhost&&$.model?$.model.position.y:0),$.pos.z).lerp(Kd,tt);let Mt=$e.el+((be?1.15:.98)-$e.el)*tt,Ye=gt*lt+($e.ovDist-gt*lt)*tt,ct=(be?54:46)+(40-(be?54:46))*tt;{let De=Math.cos(Mt)*Ye,ht=Vi.x+Math.sin($e.az)*De,Tt=Vi.z+Math.cos($e.az)*De,xt=Math.hypot(ht,Tt)-(_e.R-6.2);if(xt>0&&tt<.4&&$e.dragT>.8){let En=Math.atan2(-Vi.x,-Vi.z);$e.az=un($e.az+un(En-$e.az)*hn(dt(xt*.5,0,2.5),w))}}let _t=_e.R-6.2;if(tt<.6)for(let De=0;De<14;De++){let ht=Math.cos(Mt)*Ye,Tt=Vi.x+Math.sin($e.az)*ht,xt=Vi.z+Math.cos($e.az)*ht;if(Math.hypot(Tt,xt)<=_t)break;if(lt>1.25&&Mt<1.05)Mt+=.08;else if(Ye>4.4)Ye*=.9;else if(Mt<1.05)Mt+=.08;else break}if(tt<.85){let De=Fg(Vi,$e.az,Mt,Ye),ht=De.dist/Ye,Tt=De.el-Mt;K&&($e.kd=ht,$e.ke=Tt),$e.kd+=(ht-$e.kd)*hn(ht<$e.kd?9:1.8,w),$e.ke+=(Tt-$e.ke)*hn(Tt>$e.ke?7:1.5,w),Ye*=$e.kd,Mt+=$e.ke}else $e.kd=1,$e.ke=0;m.setShot({kind:"follow",target:Vi,az:$e.az,el:Mt,dist:Ye,fov:ct,speed:5.5,snap:!!K}),m.shot.dynamic=!1}function Og(w){let $=Ge==="follow"&&!m.override&&m.ovW<.05?Ws():null,_e=p.position;for(let be of R.values()){let xe=be.camWant||!1;if($&&be!==$&&be.visible&&!be.claimed){let tt=be.pos.x-_e.x,gt=be.pos.z-_e.z,ct=Math.hypot(tt,gt)<(xe?4.3:3.4);if(!ct){let _t=$.pos.x-_e.x,De=$.pos.z-_e.z,ht=_t*_t+De*De||1,Tt=(tt*_t+gt*De)/ht,xt=xe?1.15:.85;if(Tt>0&&Tt<.82){let En=tt-_t*Tt,Ti=gt-De*Tt;En*En+Ti*Ti<xt*xt&&(ct=!0)}}xe=ct}else xe=!1;be.camWant=xe;let Ae=be.camFade==null?1:be.camFade,lt=xe?Math.max(0,Ae-w*4):Math.min(1,Ae+w*4);if(lt!==Ae){be.setFade(lt);let tt=lt<.5;tt!==!!be.camHidden&&(be.camHidden=tt,Ue=!0)}}}let Ur={el:0,dist:0};function Fg(w,K,$,_e){let be=v&&v.blockers,xe=$,Ae=_e;if(!be||!be.length)return Ur.el=xe,Ur.dist=Ae,Ur;let lt=Math.sin(K),tt=Math.cos(K);for(let gt=0;gt<6;gt++){let Mt=Math.cos(xe)*Ae,Ye=w.x+lt*Mt,ct=w.z+tt*Mt,_t=w.y+Math.sin(xe)*Ae,De=0,ht=1/0;for(let Tt=0;Tt<be.length;Tt++){let xt=be[Tt];if(xt.x+xt.r+.6<Math.min(w.x,Ye)||xt.x-xt.r-.6>Math.max(w.x,Ye)||xt.z+xt.r+.6<Math.min(w.z,ct)||xt.z-xt.r-.6>Math.max(w.z,ct))continue;let En=xt.x-w.x,Ti=xt.z-w.z,Nn=(En*lt+Ti*tt)/(Mt||.001);Nn=Nn<0?0:Nn>1?1:Nn;let Fr=w.x+lt*Mt*Nn-xt.x,Ks=w.z+tt*Mt*Nn-xt.z,gl=Math.sqrt(Fr*Fr+Ks*Ks),xl=w.y+(_t-w.y)*Nn,Zs=Ye-xt.x,lp=ct-xt.z,Qg=xt.h>2.4?1.1:.35,cp=xt.h>2.4?.8:.45;if(Zs*Zs+lp*lp<(xt.r+cp)*(xt.r+cp)&&_t<xt.h+Qg){xt.h<2.4?De=Math.max(De,xt.h+.45-_t):ht=Math.min(ht,Math.max(0,Nn*Mt-xt.r-.5));continue}xt.h>=1.9&&xt.r>=.35&&Nn>.12&&Nn<1&&gl<xt.r+.12&&xl<xt.h&&(ht=Math.min(ht,Math.max(0,Nn*Mt-xt.r-.45)))}if(!De&&ht===1/0)break;if(ht!==1/0){let Tt=ht/Math.max(.2,Math.cos(xe));Tt>=3.6?Ae=Math.min(Ae,Tt):xe=Math.min(1.2,xe+.12)}De&&(xe=Math.min(1.2,xe+Math.max(.06,De/Math.max(2,Ae))))}return Ur.el=xe,Ur.dist=Ae,Ur}let Xs={x:0,y:0},qs=new Y,Or=!1,ml=0,tp=-1,np=-1;Object.defineProperty(Z,"driving",{get:()=>Or});function ip(w,K){let $=v&&v.layout;if(!$||!t.onMove)return;let _e=wd($,w.pos.x,w.pos.z);if(!(!K&&Math.abs(_e.x-tp)<.003&&Math.abs(_e.y-np)<.003)){tp=_e.x,np=_e.y;try{t.onMove(_e.x,_e.y)}catch{}}}function kg(w){let K=Go();K!==Zd&&(Zd=K,re.place(eu(),st,Oe));let $=Ws(),_e=!!(Ee&&$&&dl()&&!ne&&!de.current&&!$.claimed);re.setEnabled(_e),re.vector(Xs);let be=_e?Math.hypot(Xs.x,Xs.y):0,xe=performance.now();if(be>.08){p.getWorldDirection(qs),qs.y=0,qs.lengthSq()<1e-4&&qs.set(-Math.sin(m.cur.az),0,-Math.cos(m.cur.az)),qs.normalize();let Ae=qs.x,lt=qs.z,tt=-lt,gt=Ae,Mt=tt*Xs.x+Ae*Xs.y,Ye=gt*Xs.x+lt*Xs.y,ct=Math.hypot(Mt,Ye)||1;Mt/=ct,Ye/=ct;let _t=be>.92?4.8:.8+be*3;$.drive||($.drive={x:0,z:0,speed:0}),$.drive.x=Mt,$.drive.z=Ye,$.drive.speed=_t,Or||(Or=!0,ml=0);let De=Z.localMove||(Z.localMove={x:0,z:0,until:0});De.x=$.pos.x,De.z=$.pos.z,De.until=xe+2500,ml-=w,ml<=0&&(ml=.15,ip($,!1))}else if(Or){Or=!1;for(let Ae of[R.get(P&&P.me?P.me.id:""),T.get(P&&P.me?P.me.id:"")])Ae&&(Ae.drive=null);$&&dl()&&(Z.localMove={x:$.pos.x,z:$.pos.z,until:xe+2500},ip($,!0),Hi(!1))}}function Bg(){let w=Ws(),K=v&&v.layout;if(!w||!K)return;let $=Math.hypot(w.pos.x,w.pos.z)||.001,_e=Math.max(K.Rp*.2,2.3),be=K.Rp*.96;if($<_e||$>be){let xe=dt($,_e,be)/$;w.pos.x*=xe,w.pos.z*=xe}}let sp=new Y;function rp(w,K){let $=0,_e=0,be=0;for(let xe=8;xe<K;xe++)$+=w[xe].x,_e+=w[xe].z,be++;return be?sp.set($/be*.6,.9,_e/be*.6+.2):sp.set(0,.9,.2)}let Hg=[],op=new mi,Gg=new ut,ap=new Qt(new Y,1.3);function Vg(){return!!(v&&v.busy)}let nu=0;function Wg(){if(nu-=1/60,nu>0)return;nu=.3;let w=v&&v.layout;if(!w||!m.shot.points)return;let $=0,_e=Ge==="gather"?5.6:3.2,be=[];for(let xe=0;xe<8;xe++){let Ae=xe/8*nt;be.push(N[$++].set(Math.sin(Ae)*_e,0,Math.cos(Ae)*_e))}for(let xe of R.values()){if(!xe.visible||$>60)continue;let Ae=xe.path&&xe.path.length?xe.path[xe.path.length-1]:xe.pos;Math.hypot(Ae.x,Ae.z)>w.Rp+1.5||(be.push(N[$++].set(Ae.x,0,Ae.z)),be.push(N[$++].set(Ae.x,2.4,Ae.z)))}for(let xe of T.values())$<62&&(be.push(N[$++].set(xe.pos.x,2.6,xe.pos.z)),be.push(N[$++].set(xe.pos.x,0,xe.pos.z)));m.shot.points=be,m.shot.target.copy(rp(be,be.length))}function Xg(w,K){if(w.startsWith("room:")){let be=oe&&oe.actors.get(w.slice(5));return!be||!be.ch.visible?!1:(K.set(be.ch.pos.x,be.ch.pos.y+be.ch.headY+.15,be.ch.pos.z),!0)}if(w.startsWith("cine:")){let be=q.get(w);return!be||!be.ch.visible?!1:(K.set(be.ch.pos.x,be.ch.root.position.y+be.ch.headY+.15,be.ch.pos.z),!0)}let $=R.get(w);if($&&$.visible)return K.set($.pos.x,$.pos.y+$.headY+.15,$.pos.z),!0;let _e=T.get(w);return _e?(K.set(_e.pos.x,_e.headY+.5+_e.model.position.y,_e.pos.z),!0):!1}function qg(w){let K=w.startsWith("room:")||w.startsWith("cine:");if(ne)return K;if(K)return!0;let $=R.get(w);return T.has(w)?!0:!(!$||!$.visible||$.camHidden||P&&P.room.phase==="night"&&w!==P.me.id&&!Me.has(w))}function Yg(w,K){if(ne)return!1;let $=v&&v.house(w);if(!$||$.scale<.6)return!1;let _e=v.layout,be=0;_e&&_e.n>9&&st<700&&(be=($.seat%2?1:-1)*2.2);let xe=Math.hypot($.cx,$.cz)||1;return K.set($.cx+$.cx/xe*be,$.info.height*.9,$.cz+$.cz/xe*be),!0}function Kg(w){if(!(w!=="menu"&&w!=="game")&&w!==J&&(J=w,Ie="",c.dataset.view=w,!!Ee)){if(w==="menu"){Be.stop(),Te.reset(),Z.showDead.clear(),Dr(),ps(null),me.clear();for(let K of R.values())K.dispose();R.clear();for(let K of T.values())K.dispose();T.clear(),Re.reset(),de.reset(),fs(null);for(let K of[...v.houses.keys()])v.setDead(K,!1);for(let K of v.houses.values())K.litTarget=1,K.dead=!1}else fs(P),P&&Hi(!0);Qe(!0),m.snapNext=!1}}function Zg(){de.reset(),Be.stop(),Te.reset(),Z.showDead.clear(),Dr(),ps(null),me.clear();for(let w of R.values())w.dispose();R.clear();for(let w of T.values())w.dispose();if(T.clear(),Re.reset(),P=null,Ie="",Zh=0,Ee){if(v)for(let w of[...v.houses.keys()])v.setDead(w,!1);fs(null)}m.recenter(),Qe(!0)}function Jg(w){if(w==="auto"){M="auto",A.failed.clear(),A.reset();return}Ns[w]&&(M=w,A.level=w,us(w))}function $g(){if(!pe){pe=!0,de.dispose(),Be.dispose(),Te.dispose(),cancelAnimationFrame(hl),document.removeEventListener("visibilitychange",Hd),window.removeEventListener("click",yn,!0),window.removeEventListener("resize",Fs),window.removeEventListener("orientationchange",Fs),Os&&Os.disconnect();for(let w of R.values())w.dispose();for(let w of T.values())w.dispose();R.clear(),T.clear(),v&&v.dispose(),S.dispose(),F.dispose(),B.dispose(),_.dispose(),W.dispose(),We.dispose(),oe&&oe.dispose();for(let w of q.values())w.ch.dispose();q.clear(),Q.length=0;for(let w of[D,k,O,X])w.dispose();me.dispose(),re.dispose(),E0(),E.shadow.map&&E.shadow.map.dispose(),l.dispose(),l.forceContextLoss(),_d(),c.remove(),clearTimeout(H)}}ul();let Ys={update:ol,announce(w){return pe?Promise.resolve():!Ee||J!=="game"?(de.skip(),Promise.resolve()):(w&&w.kind==="start"&&w.scenario&&ps(w.scenario.id),w&&w.kind==="death"&&(Fe={ids:(w.targets||[]).map(K=>K.id),at:Date.now()}),w&&w.kind&&!mg[w.kind]&&Be.running&&Be.stop(),de.announce(w))},skip(){de.skip()},bubble(w,K,$){if(!K)return;me.bubble(w,String(K),$);let _e=R.get(w);if(_e&&_e.visible&&!_e.busy&&!_e.once&&_e.base==="idle"&&_e.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),_e&&_e.visible)for(let be of R.values())be!==_e&&be.visible&&Math.hypot(be.pos.x-_e.pos.x,be.pos.z-_e.pos.z)<10&&be.gaze(_e.pos,3.5,Z.time)},setView:Kg,setQuality:Jg,getQuality(){return M==="auto"?"auto":C.name},getTier(){return C.name},resize:Lr,reset:Zg,dispose:$g,setInsets(w){w=w||{},yt={top:w.top||0,bottom:w.bottom||0,left:w.left||0,right:w.right||0,joystick:w.joystick===null?null:w.joystick&&typeof w.joystick=="object"?{left:+w.joystick.left||0,bottom:+w.joystick.bottom||0,size:+w.joystick.size||0}:void 0},m.setInsets(yt),me.setInsets(yt),re.place(eu(),st,Oe),Qe(!1)},recenter(){jd()},setCameraMode(w){(w==="follow"||w==="overview")&&w!==Vs&&Qd()},getCameraMode(){return Vs},setMood(w={}){w.fog!=null&&(ie.fog=dt(+w.fog,.3,2)),w.tint!=null&&ie.tint.set(w.tint),w.tintAmt!=null&&(ie.tintAmt=dt(+w.tintAmt,0,1)),w.moon!=null&&ie.moon.set(w.moon),w.stars!=null&&(ie.stars=dt(+w.stars,0,1)),w.weather!=null&&(ie.weather=w.weather)},director:de,stats(){return{...Hn,tier:C.name,mode:M,px:rt,scale:+(n.renderScale||1).toFixed(2),hour:+Ne.toFixed(2),ready:Ee,p50:Ho(fl,.5),p95:Ho(fl,.95),p99:Ho(fl,.99),cpu50:Ho(Jh,.5),cpu95:Ho(Jh,.95)}},resetStats(){Gs=0,Bo=0},setScenario(w){ps(w)},setStyle(w){let K=w==="toon";if(K!==Z.toon){Z.toon=K,us(C.name,!1);for(let $ of[...R.values(),...T.values()])K?Va($.model,.012):Ff($.model);for(let $ of q.values())K?Va($.ch.model,.012):Ff($.ch.model);v&&v.setOutlines(K),Of(y,K),ue=0}},getStyle(){return Z.toon?"toon":"default"},_debug:{world:Z,scene:y,renderer:l,camera:p,rig:m,fol:$e,get village(){return v},get room(){return oe},get roomMode(){return ne},setHour(w){Ne=w}}},jg=Ys.update;Ys.update=(w,K)=>{w&&w.serverNow&&(cl=w.serverNow-Date.now()),jg(w,K)};for(let w of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode","setStyle"]){let K=Ys[w];Ys[w]=function(...$){try{return K.apply(Ys,$)}catch(_e){return se("api."+w,_e),w==="announce"?Promise.resolve():void 0}}}return Ys}var zs=null,qh=new Set,Yh=0,Bd=0;function xw(){if(zs)return zs;let s=new To({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Bt,s.toneMapping=Sr,s.setClearColor(0,0),zs={renderer:s,users:0},zs}function Ag(s){if(Yh=0,!qh.size||(Yh=requestAnimationFrame(Ag),document.hidden)||s-Bd<1e3/24)return;let e=Math.min(.1,(s-Bd)/1e3||.04);Bd=s;for(let t of qh)t.draw(e)}function Rg(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=xw();r.users++;let o=new ar,a=new tn(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let c=new xr("#dfe8ff","#5a4a40",1.3);o.add(c);let l=new ni("#fff2dc",2.6);l.position.set(1.8,3.5,5);let h=new ni("#ffd7a8",.8);h.position.set(-3,1.5,3.5),o.add(h),o.add(l);let u=new ni("#8fb4ff",1.6);u.position.set(-3,2.5,-3),o.add(u);let f=new wt(new dr(.85,40),new Jt({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,g={...e},y=!1,p=t.yaw!=null?t.yaw:.18,m=0,M=t.yaw!=null?t.yaw:0,A=!1,b=0,C=0,I=t.turntable!==!1,x={sfxStep:null,sfx(){}};function E(){y||!wh("chars")||(d?d.setLook(g):(d=new bi(x,"preview",g),o.add(d.root),d.idleTimer=2))}wh("chars")?E():Cr(["chars"]).then(E).catch(()=>{});let U=k=>{A=!0,b=k.clientX,C=0,n.setPointerCapture&&n.setPointerCapture(k.pointerId)},S=k=>{if(!A)return;let O=k.clientX-b;b=k.clientX,p+=O*.012,C=O*.012*24},F=()=>{A=!1};n.addEventListener("pointerdown",U),n.addEventListener("pointermove",S),n.addEventListener("pointerup",F),n.addEventListener("pointercancel",F);let D={draw(k){if(y||!d)return;let O=s.clientWidth,X=s.clientHeight;if(O<4||X<4||!n.isConnected)return;let W=Math.min(window.devicePixelRatio||1,2),B=Math.round(O*W),_=Math.round(X*W);(n.width!==B||n.height!==_)&&(n.width=B,n.height=_);let v=r.renderer,R=v.getSize(new pt);(R.x<B||R.y<_)&&v.setSize(Math.max(R.x,B),Math.max(R.y,_),!1);let T=v.getSize(new pt);if(v.setViewport(0,T.y-_,B,_),v.setScissor(0,T.y-_,B,_),v.setScissorTest(!0),a.aspect=O/X,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!A){m+=k,p+=C*k,C*=Math.exp(-3*k);let z=p-M;z=Math.atan2(Math.sin(z),Math.cos(z));let q=I?Math.sin(m*.7)*.42:0;Math.abs(C)<.4&&(p=M+z+(q-z)*Math.min(1,k*1.6))}d.yaw=p,d.update(k,performance.now()/1e3),v.clear(),v.render(o,a),i.clearRect(0,0,B,_),i.drawImage(v.domElement,0,T.y-_,B,_,0,0,B,_)}};return qh.add(D),Yh||(Yh=requestAnimationFrame(Ag)),{setLook(k){g={...g,...k},E()},dispose(){y||(y=!0,qh.delete(D),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&zs&&(zs.renderer.dispose(),zs.renderer.forceContextLoss(),zs=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&Sh(new URL("../assets/models/",s).href)}catch{}var vw="2.1.0",yw=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function _w(s){Sh(s)}return sx(Mw);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
