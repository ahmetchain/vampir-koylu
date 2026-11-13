var VKWorld=(()=>{var zh=Object.defineProperty;var b0=Object.getOwnPropertyDescriptor;var S0=Object.getOwnPropertyNames;var w0=Object.prototype.hasOwnProperty;var zd=(s,e)=>{for(var t in e)zh(s,t,{get:e[t],enumerable:!0})},E0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of S0(e))!w0.call(s,i)&&i!==t&&zh(s,i,{get:()=>e[i],enumerable:!(n=b0(e,i))||n.enumerable});return s};var T0=s=>E0(zh({},"__esModule",{value:!0}),s);var HS={};zd(HS,{COLORS:()=>hg,HATS:()=>ug,QUALITIES:()=>kS,SKINS:()=>fg,create:()=>jg,preview:()=>e0,setAssetBase:()=>BS,supported:()=>gd,version:()=>zS});var Pp=0,wu=1,Lp=2;var dr=1,Np=2,ho=3,Di=0,En=1,sn=2,pr=0,wi=1,Kn=2,Eu=3,Tu=4,Dp=5;var mr=100,Up=101,Fp=102,Op=103,zp=104,kp=200,Bp=201,Hp=202,Gp=203,Au=204,Ru=205,Vp=206,Wp=207,Xp=208,qp=209,Yp=210,Kp=211,Zp=212,Jp=213,$p=214,Ul=0,Fl=1,Ol=2,Zr=3,zl=4,kl=5,Bl=6,Hl=7,ac=0,jp=1,Qp=2,Ui=0,Cu=1,Iu=2,Pu=3,Lu=4,Nu=5,Du=6,gr=7,du="attached",em="detached",Uu=300,xr=301,uo=302,lc=303,cc=304,Ms=1e3,Xn=1001,Jr=1002,tn=1003,hc=1004;var vr=1005;var fn=1006,fo=1007;var li=1008;var Zn=1009,Fu=1010,Ou=1011,po=1012,uc=1013,ci=1014,On=1015,Ei=1016,fc=1017,dc=1018,_r=1020,zu=35902,ku=35899,Bu=1021,Hu=1022,qn=1023,ns=1026,hs=1027,pc=1028,va=1029,Ts=1030,mc=1031;var gc=1033,_a=33776,ya=33777,Ma=33778,ba=33779,xc=35840,vc=35841,_c=35842,yc=35843,Mc=36196,bc=37492,Sc=37496,wc=37488,Ec=37489,Sa=37490,Tc=37491,Ac=37808,Rc=37809,Cc=37810,Ic=37811,Pc=37812,Lc=37813,Nc=37814,Dc=37815,Uc=37816,Fc=37817,Oc=37818,zc=37819,kc=37820,Bc=37821,Hc=36492,Gc=36494,Vc=36495,Wc=36283,Xc=36284,wa=36285,qc=36286,Ea=2200,tm=2201,nm=2202,js=2300,Qs=2301,Nl=2302,pu=2303,Zs=2400,Js=2401,Xo=2402,Yc=2500,im=2501,Gu=0,Ta=1,mo=2,sm=3200;var Aa=0,rm=1,us="",zt="srgb",zn="srgb-linear",qo="linear",kt="srgb";var Dl=7680;var om=519,am=512,lm=513,cm=514,Vu=515,hm=516,um=517,Wu=518,Xu=519,qu=35044,Ra=35048;var Yu="300 es",ri=2e3,$r=2001;function A0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function R0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fm(){let s=jr("canvas");return s.style.display="block",s}var kd={},Qr=null;function Yo(...s){let e="THREE."+s.shift();Qr?Qr("log",e,...s):console.log(e,...s)}function dm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=dm(s);let e="THREE."+s.shift();if(Qr)Qr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function gt(...s){s=dm(s);let e="THREE."+s.shift();if(Qr)Qr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function $s(...s){let e=s.join(" ");e in kd||(kd[e]=!0,at(...s))}function pm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mm={[Ul]:Ul,[Ol]:Bl,[zl]:zl,[Zr]:kl,[Fl]:Fl,[Bl]:Ol,[Hl]:Hl,[kl]:Zr},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,Vo=Math.PI/180,er=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Ku(s,e){return(s%e+e)%e}function C0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function I0(s,e,t){return s!==e?(t-s)/(e-s):0}function Wo(s,e,t){return(1-t)*s+t*e}function P0(s,e,t,n){return Wo(s,e,1-Math.exp(-t*n))}function L0(s,e=1){return e-Math.abs(Ku(s,e*2)-e)}function N0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function D0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function U0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function F0(s,e){return s+Math.random()*(e-s)}function O0(s){return s*(.5-Math.random())}function z0(s){s!==void 0&&(Bd=s);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k0(s){return s*Vo}function B0(s){return s*er}function H0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function G0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function V0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ju(s,e){if(e.constructor===Float32Array)return s;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function $u(s,e){if(e.constructor===Float32Array)return s;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Zc={DEG2RAD:Vo,RAD2DEG:er,generateUUID:Fi,clamp:Ct,euclideanModulo:Ku,mapLinear:C0,inverseLerp:I0,lerp:Wo,damp:P0,pingpong:L0,smoothstep:N0,smootherstep:D0,randInt:U0,randFloat:F0,randFloatSpread:O0,seededRandom:z0,degToRad:k0,radToDeg:B0,isPowerOfTwo:H0,ceilPowerOfTwo:G0,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:V0,normalize:$u,denormalize:Ju},nf=class nf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nf.prototype.isVector2=!0;var lt=nf,Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*v;g<0&&(f=-f,d=-d,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),I=Math.sin(y);m=Math.sin(m*y)/I,a=Math.sin(a*y)/I,c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+v*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+v*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sf=class sf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;var q=sf,kh=new q,Hd=new Yt,rf=class rf{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=i[0],g=i[3],m=i[6],y=i[1],I=i[4],M=i[7],w=i[2],T=i[5],x=i[8];return r[0]=o*v+a*y+c*w,r[3]=o*g+a*I+c*T,r[6]=o*m+a*M+c*x,r[1]=l*v+h*y+u*w,r[4]=l*g+h*I+u*T,r[7]=l*m+h*M+u*x,r[2]=f*v+d*y+p*w,r[5]=f*g+d*I+p*T,r[8]=f*m+d*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rf.prototype.isMatrix3=!0;var xt=rf,Bh=new xt,Gd=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){let s={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===kt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zn]:{primaries:e,whitePoint:n,transfer:qo,toXYZ:Gd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:Gd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),s}var wt=W0();function es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ir,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=jr("canvas")),Ir.width=e.width,Ir.height=e.height;let i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X0=0,eo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hh(i[o].image)):r.push(Hh(i[o]))}else r=Hh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var q0=0,Gh=new q,dn=class s extends vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Xn,i=Xn,r=fn,o=li,a=qn,c=Zn,l=s.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Fi(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Uu;dn.DEFAULT_ANISOTROPY=1;var of=class of{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(l+1)/2,M=(d+1)/2,w=(m+1)/2,T=(h+f)/4,x=(u+v)/4,_=(p+g)/4;return I>M&&I>w?I<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(I),i=T/n,r=x/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=x/r,i=_/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;var Vt=of,Vl=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ko=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oc=class oc{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f+v*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,K0)}lookAt(e,t,n){let i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ms.crossVectors(n,ei),ms.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ms.crossVectors(n,ei)),ms.normalize(),il.crossVectors(ei,ms),i[0]=ms.x,i[4]=il.x,i[8]=ei.x,i[1]=ms.y,i[5]=il.y,i[9]=ei.y,i[2]=ms.z,i[6]=il.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],I=n[7],M=n[11],w=n[15],T=i[0],x=i[4],_=i[8],U=i[12],A=i[1],B=i[5],k=i[9],O=i[13],P=i[2],S=i[6],L=i[10],C=i[14],D=i[3],b=i[7],F=i[11],G=i[15];return r[0]=o*T+a*A+c*P+l*D,r[4]=o*x+a*B+c*S+l*b,r[8]=o*_+a*k+c*L+l*F,r[12]=o*U+a*O+c*C+l*G,r[1]=h*T+u*A+f*P+d*D,r[5]=h*x+u*B+f*S+d*b,r[9]=h*_+u*k+f*L+d*F,r[13]=h*U+u*O+f*C+d*G,r[2]=p*T+v*A+g*P+m*D,r[6]=p*x+v*B+g*S+m*b,r[10]=p*_+v*k+g*L+m*F,r[14]=p*U+v*O+g*C+m*G,r[3]=y*T+I*A+M*P+w*D,r[7]=y*x+I*B+M*S+w*b,r[11]=y*_+I*k+M*L+w*F,r[15]=y*U+I*O+M*C+w*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15],y=c*d-l*f,I=a*d-l*u,M=a*f-c*u,w=o*d-l*h,T=o*f-c*h,x=o*u-a*h;return t*(v*y-g*I+m*M)-n*(p*y-g*w+m*T)+i*(p*I-v*w+m*x)-r*(p*M-v*T+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=t*a-n*o,I=t*c-i*o,M=t*l-r*o,w=n*c-i*a,T=n*l-r*a,x=i*l-r*c,_=h*v-u*p,U=h*g-f*p,A=h*m-d*p,B=u*g-f*v,k=u*m-d*v,O=f*m-d*g,P=y*O-I*k+M*B+w*A-T*U+x*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/P;return e[0]=(a*O-c*k+l*B)*S,e[1]=(i*k-n*O-r*B)*S,e[2]=(v*x-g*T+m*w)*S,e[3]=(f*T-u*x-d*w)*S,e[4]=(c*A-o*O-l*U)*S,e[5]=(t*O-i*A+r*U)*S,e[6]=(g*M-p*x-m*I)*S,e[7]=(h*x-f*M+d*I)*S,e[8]=(o*k-a*A+l*_)*S,e[9]=(n*A-t*k-r*_)*S,e[10]=(p*T-v*M+m*y)*S,e[11]=(u*M-h*T-d*y)*S,e[12]=(a*U-o*B-c*_)*S,e[13]=(t*B-n*U+i*_)*S,e[14]=(v*I-p*w-g*y)*S,e[15]=(h*w-u*I+f*y)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,v=o*h,g=o*u,m=a*u,y=c*l,I=c*h,M=c*u,w=n.x,T=n.y,x=n.z;return i[0]=(1-(v+m))*w,i[1]=(d+M)*w,i[2]=(p-I)*w,i[3]=0,i[4]=(d-M)*T,i[5]=(1-(f+m))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(p+I)*x,i[9]=(g-y)*x,i[10]=(1-(f+v))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Pr.set(i[0],i[1],i[2]).length(),a=Pr.set(i[4],i[5],i[6]).length(),c=Pr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),mi.copy(this);let l=1/o,h=1/a,u=1/c;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=ri,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===$r)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ri,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===ri)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===$r)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};oc.prototype.isMatrix4=!0;var rt=oc,Pr=new q,mi=new rt,Y0=new q(0,0,0),K0=new q(1,1,1),ms=new q,il=new q,ei=new q,Wd=new rt,Xd=new Yt,Pi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z0=0,qd=new q,Lr=new Yt,Yi=new rt,sl=new q,Po=new q,J0=new q,$0=new Yt,Yd=new q(1,0,0),Kd=new q(0,1,0),Zd=new q(0,0,1),Jd={type:"added"},j0={type:"removed"},Nr={type:"childadded",child:null},Vh={type:"childremoved",child:null},qt=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new q,t=new Pi,n=new Yt,i=new q(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new xt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Po,sl,this.up):Yi.lookAt(sl,Po,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Lr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new q(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q0={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Wh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=Ku(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wh(o,r,e+1/3),this.g=Wh(o,r,e),this.b=Wh(o,r,e-1/3)}return wt.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(Ct(Cn.r*255,0,255))*65536+Math.round(Ct(Cn.g*255,0,255))*256+Math.round(Ct(Cn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,i=Cn.g,r=Cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=zt){wt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,i=Cn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(rl);let n=Wo(gs.h,rl.h,t),i=Wo(gs.s,rl.s,t),r=Wo(gs.l,rl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Ce;Ce.NAMES=gm;var Zo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gi=new q,Ki=new q,Xh=new q,Zi=new q,Dr=new q,Ur=new q,$d=new q,qh=new q,Yh=new q,Kh=new q,Zh=new Vt,Jh=new Vt,$h=new Vt,Qi=class s{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gi.subVectors(i,t),Ki.subVectors(n,t),Xh.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Ki),c=gi.dot(Xh),l=Ki.dot(Ki),h=Ki.dot(Xh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Zh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Zh.fromBufferAttribute(e,t),Jh.fromBufferAttribute(e,n),$h.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Zh,r.x),o.addScaledVector(Jh,r.y),o.addScaledVector($h,r.z),o}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),Ki.subVectors(e,t),gi.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),gi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Dr.subVectors(i,n),Ur.subVectors(r,n),qh.subVectors(e,n);let c=Dr.dot(qh),l=Ur.dot(qh);if(c<=0&&l<=0)return t.copy(n);Yh.subVectors(e,i);let h=Dr.dot(Yh),u=Ur.dot(Yh);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Dr,o);Kh.subVectors(e,r);let d=Dr.dot(Kh),p=Ur.dot(Kh);if(p>=0&&d<=p)return t.copy(r);let v=d*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Ur,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return $d.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector($d,a);let m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),al.subVectors(this.max,Lo),Fr.subVectors(e.a,Lo),Or.subVectors(e.b,Lo),zr.subVectors(e.c,Lo),xs.subVectors(Or,Fr),vs.subVectors(zr,Or),Ws.subVectors(Fr,zr);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Ws.z,Ws.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Ws.z,0,-Ws.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Ws.y,Ws.x,0];return!jh(t,Fr,Or,zr,al)||(t=[1,0,0,0,1,0,0,0,1],!jh(t,Fr,Or,zr,al))?!1:(ll.crossVectors(xs,vs),t=[ll.x,ll.y,ll.z],jh(t,Fr,Or,zr,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ji=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,ol=new un,Fr=new q,Or=new q,zr=new q,xs=new q,vs=new q,Ws=new q,Lo=new q,al=new q,ll=new q,Xs=new q;function jh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xs.fromArray(s,r);let a=i.x*Math.abs(Xs.x)+i.y*Math.abs(Xs.y)+i.z*Math.abs(Xs.z),c=e.dot(Xs),l=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var on=new q,cl=new lt,ex=0,yt=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qu,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?Kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ju(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$u(e,this.array)}};var Jo=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $o=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tx=new un,No=new q,Qh=new q,Jt=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);let t=No.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(No,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Qh)),this.expandByPoint(No.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nx=0,si=new rt,eu=new qt,kr=new q,ti=new un,Do=new un,_n=new q,It=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?$o:Jo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ti.min,Do.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Do.max),ti.expandByPoint(_n)):(ti.expandByPoint(Do.min),ti.expandByPoint(Do.max))}ti.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_n.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(e,l),_n.add(kr)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new q,c[U]=new q;let h=new q,u=new q,f=new q,d=new lt,p=new lt,v=new lt,g=new q,m=new q;function y(U,A,B){l[U]=l[A]=l[B]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,B),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,A),v.fromBufferAttribute(r,B),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let k=1/(p.x*v.y-v.x*p.y);isFinite(k)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(k),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(k),a[U].add(g),a[A].add(g),a[B].add(g),c[U].add(m),c[A].add(m),c[B].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let U=0,A=I.length;U<A;++U){let B=I[U],k=B.start,O=B.count;for(let P=k,S=k+O;P<S;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new q,w=new q,T=new q,x=new q;function _(U){T.fromBufferAttribute(i,U),x.copy(T);let A=a[U];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(x,A);let k=w.dot(c[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,k)}for(let U=0,A=n.count;U<A;++U)l[U]&&_(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new q,r=new q,o=new q,a=new q,c=new q,l=new q,h=new q,u=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new yt(f,h,u)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function jd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Fi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Fn=new q,bs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Kc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ju(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$u(e,this.data.array)}},tu=new q,ix=new q,sx=new xt,ni=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=tu.subVectors(n,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sx.getNormalMatrix(e),i=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rx=0,Pn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=wi,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},io=class extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Uo=new q,Hr=new q,Gr=new q,Vr=new lt,Fo=new lt,xm=new rt,hl=new q,Oo=new q,ul=new q,Qd=new lt,nu=new lt,ep=new lt,jo=class extends qt{constructor(e=new io){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nr(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new bs(n,3,0,!1)),Br.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=Br,this.material=e,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;fl(hl.set(-.5,-.5,0),Gr,o,Hr,i,r),fl(Oo.set(.5,-.5,0),Gr,o,Hr,i,r),fl(ul.set(.5,.5,0),Gr,o,Hr,i,r),Qd.set(0,0),nu.set(1,0),ep.set(1,1);let a=e.ray.intersectTriangle(hl,Oo,ul,!1,Uo);if(a===null&&(fl(Oo.set(-.5,.5,0),Gr,o,Hr,i,r),nu.set(0,1),a=e.ray.intersectTriangle(hl,ul,Oo,!1,Uo),a===null))return;let c=e.ray.origin.distanceTo(Uo);c<e.near||c>e.far||t.push({distance:c,point:Uo.clone(),uv:Qi.getInterpolation(Uo,hl,Oo,ul,Qd,nu,ep,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function fl(s,e,t,n,i,r){Vr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Fo.x=r*Vr.x-i*Vr.y,Fo.y=i*Vr.x+r*Vr.y):Fo.copy(Vr),s.copy(e),s.x+=Fo.x,s.y+=Fo.y,s.applyMatrix4(xm)}var $i=new q,iu=new q,dl=new q,pl=new q,Ss=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){iu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),pl.copy(this.origin).sub(iu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=pl.dot(this.direction),c=-pl.dot(dl),l=pl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(iu).addScaledVector(dl,f),d}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),i=$i.dot($i)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,g=t.z-o.z,m=n.x-o.x,y=n.y-o.y,I=n.z-o.z,M=Math.abs(c),w=Math.abs(l),T=Math.abs(h),x,_,U,A,B,k,O,P,S,L,C,D;if(M>=w&&M>=T?(U=c,k=u,S=p,D=m,c>=0?(x=l,_=h,A=f,B=d,O=v,P=g,L=y,C=I):(x=h,_=l,A=d,B=f,O=g,P=v,L=I,C=y)):w>=T?(U=l,k=f,S=v,D=y,l>=0?(x=h,_=c,A=d,B=u,O=g,P=p,L=I,C=m):(x=c,_=h,A=u,B=d,O=p,P=g,L=m,C=I)):(U=h,k=d,S=g,D=I,h>=0?(x=c,_=l,A=u,B=f,O=p,P=v,L=m,C=y):(x=l,_=c,A=f,B=u,O=v,P=p,L=y,C=m)),U===0)return null;let b=x/U,F=_/U,G=1/U,Z=A-b*k,de=B-F*k,Y=O-b*S,Q=P-F*S,K=L-b*D,W=C-F*D,ee=K*Q-W*Y,Ee=Z*W-de*K,Te=Y*de-Q*Z;if(i){if(ee<0||Ee<0||Te<0)return null}else if((ee<0||Ee<0||Te<0)&&(ee>0||Ee>0||Te>0))return null;let Ie=ee+Ee+Te;if(Ie===0)return null;let Je=G*(ee*k+Ee*S+Te*D);return(Ie>0?Je<0:Je>0)?null:this.at(Je/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tp=new rt,qs=new Ss,ml=new Jt,np=new q,gl=new q,xl=new q,vl=new q,su=new q,_l=new q,ip=new q,yl=new q,Mt=class extends qt{constructor(e=new It,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){_l.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(su.fromBufferAttribute(u,e),o?_l.addScaledVector(su,h):_l.addScaledVector(su.sub(t),h))}t.add(_l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(ml.containsPoint(qs.origin)===!1&&(qs.intersectSphere(ml,np)===null||qs.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(r).invert(),qs.copy(e.ray).applyMatrix4(tp),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),I=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,w=I;M<w;M+=3){let T=a.getX(M),x=a.getX(M+1),_=a.getX(M+2);i=Ml(this,m,e,n,l,h,u,T,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let y=a.getX(g),I=a.getX(g+1),M=a.getX(g+2);i=Ml(this,o,e,n,l,h,u,y,I,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),I=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,w=I;M<w;M+=3){let T=M,x=M+1,_=M+2;i=Ml(this,m,e,n,l,h,u,T,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let y=g,I=g+1,M=g+2;i=Ml(this,o,e,n,l,h,u,y,I,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function ox(s,e,t,n,i,r,o,a){let c;if(e.side===En?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Di,a),c===null)return null;yl.copy(a),yl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(yl);return l<t.near||l>t.far?null:{distance:l,point:yl.clone(),object:s}}function Ml(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,gl),s.getVertexPosition(c,xl),s.getVertexPosition(l,vl);let h=ox(s,e,t,n,gl,xl,vl,ip);if(h){let u=new q;Qi.getBarycoord(ip,gl,xl,vl,u),i&&(h.uv=Qi.getInterpolatedAttribute(i,a,c,l,u,new lt)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=Qi.getInterpolatedAttribute(o,a,c,l,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new q,materialIndex:0};Qi.getNormal(gl,xl,vl,f.normal),h.face=f,h.barycoord=u}return h}var zo=new Vt,sp=new Vt,rp=new Vt,ax=new Vt,op=new rt,bl=new q,ru=new Jt,ap=new rt,ou=new Ss,Qo=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=du,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ru.copy(this.boundingSphere),ru.applyMatrix4(i),e.ray.intersectsSphere(ru)!==!1&&(ap.copy(i).invert(),ou.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ou)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===du?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===em?this.bindMatrixInverse.copy(this.bindMatrix).invert():at("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;sp.fromBufferAttribute(i.attributes.skinIndex,e),rp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(zo.copy(t),t.set(0,0,0,0)):(zo.set(t.x,t.y,t.z,1),t.set(0,0,0)),zo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=rp.getComponent(r);if(o!==0){let a=sp.getComponent(r);op.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ax.copy(zo).applyMatrix4(op),o)}}return t.isVector4&&(t.w=zo.w),t.applyMatrix4(this.bindMatrixInverse)}},so=class extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ts=class extends dn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=tn,h=tn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lp=new rt,lx=new rt,ea=class s{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){at("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lx;lp.multiplyMatrices(a,t[r]),lp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ts(t,e,e,qn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(at("Skeleton: No bone found with UUID:",r),o=new so),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},kn=class extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wr=new rt,cp=new rt,Sl=[],hp=new un,cx=new rt,ko=new Mt,Bo=new Jt,ir=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),hp.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(hp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Bo.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wr),cp.multiplyMatrices(n,Wr),ko.matrixWorld=cp,ko.raycast(e,Sl);for(let o=0,a=Sl.length;o<a;o++){let c=Sl[o];c.instanceId=r,c.object=this,t.push(c)}Sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(i*this.count),i,this.count,pc,On));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Jt,hx=new lt(.5,.5),wl=new q,_i=class{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,o=new ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],y=r[12],I=r[13],M=r[14],w=r[15];if(i[0].setComponents(l-o,d-h,m-p,w-y).normalize(),i[1].setComponents(l+o,d+h,m+p,w+y).normalize(),i[2].setComponents(l+a,d+u,m+v,w+I).normalize(),i[3].setComponents(l-a,d-u,m-v,w-I).normalize(),n)i[4].setComponents(c,f,g,M).normalize(),i[5].setComponents(l-c,d-f,m-g,w-M).normalize();else if(i[4].setComponents(l-c,d-f,m-g,w-M).normalize(),t===ri)i[5].setComponents(l+c,d+f,m+g,w+M).normalize();else if(t===$r)i[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=hx.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(wl.x=i.normal.x>0?e.max.x:e.min.x,wl.y=i.normal.y>0?e.max.y:e.min.y,wl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},up=new rt,ta=class s{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];up.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new _i),n[i].setFromProjectionMatrix(up,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new _i),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function au(s,e){return s-e}function ux(s,e){return s.z-e.z}function fx(s,e){return e.z-s.z}var mu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Wn=new rt,dx=new Ce(1,1,1),px=new _i,mx=new ta,El=new un,Ks=new Jt,lu=new q,fp=new q,dp=new q,gx=new q,cu=new mu,In=new Mt,Tl=[];function xx(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ci(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var na=class extends Mt{constructor(e,t,n=t*2,i){super(new It,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ts(t,e,e,qn,On);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ts(t,e,e,va,ci);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ts(t,e,e,qn,On);n.colorSpace=wt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new yt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new yt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Wn),this.getBoundingBoxAt(r,El).applyMatrix4(Wn),e.union(El)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Wn),this.getBoundingSphereAt(r,Ks).applyMatrix4(Wn),e.union(Ks)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(au),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Wn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(dx.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(au),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);xx(u,f,c);let d=u.itemSize;for(let p=u.count,v=l;p<v;p++){let g=c+p;for(let m=0;m<d;m++)f.setComponent(g,m,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,d=u;f<d;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=r.index,p=d.array,v=e-u;for(let g=h;g<h+f;g++)p[g]=p[g]+v;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let d in f){let p=f[d],{array:v,itemSize:g}=p;v.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g),p.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new un,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(lu.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new Jt;this.getBoundingBoxAt(e,El),El.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),lu.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(lu))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(au);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ci(this._multiDrawCounts,i),Ci(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),c=new Int32Array(e);Ci(this._mergedDrawCounts,o),Ci(this._mergedDrawStarts,a),Ci(this._mergedDrawInstanceCounts,c),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=c,this._maxInstanceCount=e;let l=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Ci(l.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Ci(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ci(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new It,this._initializeGeometry(r));let o=this.geometry;r.index&&Ci(r.index.array,o.index.array);for(let a in r.attributes)Ci(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;In.material=this.material,In.geometry.index=o.index,In.geometry.attributes=o.attributes,In.geometry.boundingBox===null&&(In.geometry.boundingBox=new un),In.geometry.boundingSphere===null&&(In.geometry.boundingSphere=new Jt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];In.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,In.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,In.geometry.boundingBox),this.getBoundingSphereAt(l,In.geometry.boundingSphere),In.raycast(e,Tl);for(let u=0,f=Tl.length;u<f;u++){let d=Tl[u];d.object=this,d.batchId=a,t.push(d)}Tl.length=0}In.material=null,In.geometry.index=null,In.geometry.attributes={},In.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,p=this._geometryInfo,v=this.perObjectFrustumCulled,g=this._indirectTexture,m=g.image.data,y=e.isArrayCamera?mx:px;v&&(e.isArrayCamera?y.setFromArrayCamera(e):(Wn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),y.setFromProjectionMatrix(Wn,e.coordinateSystem,e.reversedDepth)));let I=0,M=0;if(this.sortObjects){Wn.copy(this.matrixWorld).invert(),fp.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Wn),dp.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Wn);for(let x=0,_=c.length;x<_;x++)if(c[x].visible&&c[x].active){let U=c[x].geometryIndex;this.getMatrixAt(x,Wn),this.getBoundingSphereAt(U,Ks).applyMatrix4(Wn);let A=!1;if(v&&(A=!y.intersectsSphere(Ks)),!A){let B=p[U],k=gx.subVectors(Ks.center,fp).dot(dp);cu.push(B.start,B.count,k,x)}}let w=cu.list,T=this.customSort;T===null?w.sort(n.transparent?fx:ux):T.call(this,w,e);for(let x=0,_=w.length;x<_;x++){let U=w[x],A=U.start*o*a,B=U.count*a;i==="merged"?M>0&&u[M-1]===A&&f[M-1]===B?d[M-1]++:(u[M]=A,f[M]=B,d[M]=1,M++):(l[I]=A,h[I]=B),m[I]=U.index,I++}cu.reset()}else for(let w=0,T=c.length;w<T;w++)if(c[w].visible&&c[w].active){let x=c[w].geometryIndex,_=!1;if(v&&(this.getMatrixAt(w,Wn),this.getBoundingSphereAt(x,Ks).applyMatrix4(Wn),_=!y.intersectsSphere(Ks)),!_){let U=p[x],A=U.start*o*a,B=U.count*a;i==="merged"?M>0&&u[M-1]===A&&f[M-1]===B?d[M-1]++:(u[M]=A,f[M]=B,d[M]=1,M++):(l[I]=A,h[I]=B),m[I]=w,I++}}g.needsUpdate=!0,this._multiDrawCount=I,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},ro=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xl=new q,ql=new q,pp=new rt,Ho=new Ss,Al=new Jt,hu=new q,mp=new q,sr=class extends qt{constructor(e=new It,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xl.fromBufferAttribute(t,i-1),ql.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xl.distanceTo(ql);e.setAttribute("lineDistance",new Nt(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(i),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;pp.copy(i).invert(),Ho.copy(e.ray).applyMatrix4(pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=l){let m=h.getX(v),y=h.getX(v+1),I=Rl(this,e,Ho,c,m,y,v);I&&t.push(I)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(d),m=Rl(this,e,Ho,c,v,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=l){let m=Rl(this,e,Ho,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Rl(this,e,Ho,c,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Xl.fromBufferAttribute(a,i),ql.fromBufferAttribute(a,r),t.distanceSqToSegment(Xl,ql,hu,mp)>n)return;hu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(hu);if(!(l<e.near||l>e.far))return{distance:l,point:mp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var gp=new q,xp=new q,ia=class extends sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gp.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gp.distanceTo(xp);e.setAttribute("lineDistance",new Nt(n,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},oo=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vp=new rt,gu=new Ss,Cl=new Jt,Il=new q,yi=class extends qt{constructor(e=new It,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(i),Cl.radius+=r,e.ray.intersectsSphere(Cl)===!1)return;vp.copy(i).invert(),gu.copy(e.ray).applyMatrix4(vp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,v=d;p<v;p++){let g=l.getX(p);Il.fromBufferAttribute(u,g),_p(Il,g,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,v=d;p<v;p++)Il.fromBufferAttribute(u,p),_p(Il,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _p(s,e,t,n,i,r,o){let a=gu.distanceSqToPoint(s);if(a<t){let c=new q;gu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends dn{constructor(e=[],t=xr,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rr=class extends dn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends dn{constructor(e,t,n=ci,i,r,o,a=tn,c=tn,l,h=ns,u=1){if(h!==ns&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends is{constructor(e,t=ci,n=xr,i,r,o=tn,a=tn,c,l=ns){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class s extends It{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function p(v,g,m,y,I,M,w,T,x,_,U){let A=M/x,B=w/_,k=M/2,O=w/2,P=T/2,S=x+1,L=_+1,C=0,D=0,b=new q;for(let F=0;F<L;F++){let G=F*B-O;for(let Z=0;Z<S;Z++){let de=Z*A-k;b[v]=de*y,b[g]=G*I,b[m]=P,l.push(b.x,b.y,b.z),b[v]=0,b[g]=0,b[m]=T>0?1:-1,h.push(b.x,b.y,b.z),u.push(Z/x),u.push(1-F/_),C+=1}}for(let F=0;F<_;F++)for(let G=0;G<x;G++){let Z=f+G+S*F,de=f+G+S*(F+1),Y=f+(G+1)+S*(F+1),Q=f+(G+1)+S*F;c.push(Z,de,Q),c.push(de,Y,Q),D+=6}a.addGroup(d,D,U),d+=D,f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var or=class s extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new q,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ss=class s extends It{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],g=n/2,m=0;y(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function y(){let M=new q,w=new q,T=0,x=(t-e)/n;for(let _=0;_<=r;_++){let U=[],A=_/r,B=A*(t-e)+e;for(let k=0;k<=i;k++){let O=k/i,P=O*c+a,S=Math.sin(P),L=Math.cos(P);w.x=B*S,w.y=-A*n+g,w.z=B*L,u.push(w.x,w.y,w.z),M.set(S,x,L).normalize(),f.push(M.x,M.y,M.z),d.push(O,1-A),U.push(p++)}v.push(U)}for(let _=0;_<i;_++)for(let U=0;U<r;U++){let A=v[U][_],B=v[U+1][_],k=v[U+1][_+1],O=v[U][_+1];(e>0||U!==0)&&(h.push(A,B,O),T+=3),(t>0||U!==r-1)&&(h.push(B,k,O),T+=3)}l.addGroup(m,T,0),m+=T}function I(M){let w=p,T=new lt,x=new q,_=0,U=M===!0?e:t,A=M===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;let B=p;for(let k=0;k<=i;k++){let P=k/i*c+a,S=Math.cos(P),L=Math.sin(P);x.x=U*L,x.y=g*A,x.z=U*S,u.push(x.x,x.y,x.z),f.push(0,A,0),T.x=S*.5+.5,T.y=L*.5*A+.5,d.push(T.x,T.y),p++}for(let k=0;k<i;k++){let O=w+k,P=B+k;M===!0?h.push(P,P+1,O):h.push(P+1,P,O),_+=3}l.addGroup(m,_,M===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yl=class s extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let I=new q,M=new q,w=new q;for(let T=0;T<t.length;T+=3)d(t[T+0],I),d(t[T+1],M),d(t[T+2],w),c(I,M,w,y)}function c(y,I,M,w){let T=w+1,x=[];for(let _=0;_<=T;_++){x[_]=[];let U=y.clone().lerp(M,_/T),A=I.clone().lerp(M,_/T),B=T-_;for(let k=0;k<=B;k++)k===0&&_===T?x[_][k]=U:x[_][k]=U.clone().lerp(A,k/B)}for(let _=0;_<T;_++)for(let U=0;U<2*(T-_)-1;U++){let A=Math.floor(U/2);U%2===0?(f(x[_][A+1]),f(x[_+1][A]),f(x[_][A])):(f(x[_][A+1]),f(x[_+1][A+1]),f(x[_+1][A]))}}function l(y){let I=new q;for(let M=0;M<r.length;M+=3)I.x=r[M+0],I.y=r[M+1],I.z=r[M+2],I.normalize().multiplyScalar(y),r[M+0]=I.x,r[M+1]=I.y,r[M+2]=I.z}function h(){let y=new q;for(let I=0;I<r.length;I+=3){y.x=r[I+0],y.y=r[I+1],y.z=r[I+2];let M=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(M,1-w)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let I=o[y+0],M=o[y+2],w=o[y+4],T=Math.max(I,M,w),x=Math.min(I,M,w);T>.9&&x<.1&&(I<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,I){let M=y*3;I.x=e[M+0],I.y=e[M+1],I.z=e[M+2]}function p(){let y=new q,I=new q,M=new q,w=new q,T=new lt,x=new lt,_=new lt;for(let U=0,A=0;U<r.length;U+=9,A+=6){y.set(r[U+0],r[U+1],r[U+2]),I.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),T.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),w.copy(y).add(I).add(M).divideScalar(3);let B=g(w);v(T,A+0,y,B),v(x,A+2,I,B),v(_,A+4,M,B)}}function v(y,I,M,w){w<0&&y.x===1&&(o[I]=y.x-1),M.x===0&&M.z===0&&(o[I]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var la=class s extends Yl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var bi=class s extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let I=0;I<l;I++){let M=I*u-r;p.push(M,-y,0),v.push(0,0,1),g.push(I/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let I=y+l*m,M=y+l*(m+1),w=y+1+l*(m+1),T=y+1+l*m;d.push(I,M,T),d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ca=class s extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new q,f=new q,d=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let y=[],I=m/n,M=o+I*a,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let _=0;_<=t;_++){let U=_/t,A=i+U*r;u.x=-T*Math.cos(A),u.y=w,u.z=T*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(U+x,1-I),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let I=h[m][y+1],M=h[m][y],w=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&d.push(I,M,T),(m!==n-1||c<Math.PI)&&d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ha=class s extends It{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new q,d=new q,p=new q;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let m=0;m<=i;m++){let y=m/i*r;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let m=(i+1)*v+g-1,y=(i+1)*(v-1)+g-1,I=(i+1)*(v-1)+g,M=(i+1)*v+g;c.push(m,y,M),c.push(y,I,M)}this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function yr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(yp(i))i.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ln(s){let e={};for(let t=0;t<s.length;t++){let n=yr(s[t]);for(let i in n)e[i]=n[i]}return e}function yp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var vm={clone:yr,merge:Ln},_x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Kl=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ar=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends ar{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return $s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){$s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pn=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=ac,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zl=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ys(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Go(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Mx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function bx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Li=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$l=class extends Li{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Js:r=e,a=2*t-n;break;case Xo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Js:o=e,c=2*n-t;break;case Xo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,I=(-1-d)*g+(1.5+d)*v+.5*p,M=d*g-d*v;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+y*o[l+w]+I*o[c+w]+M*o[u+w];return r}},ua=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},jl=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ql=class extends Li{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),v=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[l+p],g=o[c+p],m=d*f+p*2,y=u[m],I=u[m+1],M=e*f+p*2,w=h[M],T=h[M+1],x=wx(n,t,y,w,i);r[p]=_m(x,v,I,T,g)}return r}};function _m(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Sx(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function wx(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=_m(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=Sx(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Go(e.settings)&&(n.settings={inTangents:ys(e.settings.inTangents,Array),outTangents:ys(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Nl;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Go(this.settings)&&(bp(this.settings.inTangents,e),bp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Go(this.settings)&&(Sp(this.settings.inTangents,e),Sp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){gt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){gt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&R0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){gt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Go(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function bp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Sp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Qs;var rs=class extends Yn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=js;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};fa.prototype.ValueTypeName="color";var os=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};os.prototype.ValueTypeName="number";var ec=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},as=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Yn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=js;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};ws.prototype.ValueTypeName="vector";var Si=class{constructor(e="",t=-1,n=[],i=Yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Mx(c);c=Mp(c,1,h),l=Mp(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new os(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ex(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return fa;case"quaternion":return as;case"bool":case"boolean":return rs;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Tx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ex(s.type);if(s.times===void 0){let n=[],i=[];bx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Go(s.settings)&&(t.settings={inTangents:ys(s.settings.inTangents,Float32Array),outTangents:ys(s.settings.outTangents,Float32Array)}),t}var oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(wp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!wp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function wp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var tc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ym=new tc,Ni=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},xu=class extends Error{constructor(e,t){super(e),this.response=t}},ao=class extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&at("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,v=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:I,value:M})=>{if(I)m.close();else{v+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let T=0,x=h.length;T<x;T++){let _=h[T];_.onProgress&&_.onProgress(w)}m.enqueue(M),y()}},I=>{m.error(I)})}}});return new Response(g)}else throw new xu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{oi.add(`file:${e}`,l);let h=ji[e];delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xr=new WeakMap,nc=class extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=oi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Xr.get(o);u===void 0&&(u=[],Xr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=jr("img");function c(){h(),t&&t(this);let u=Xr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Xr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),oi.remove(`image:${e}`);let f=Xr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Xr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var lr=class extends Ni{constructor(e){super(e)}load(e,t,n,i){let r=new dn,o=new nc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},cr=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hr=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uu=new rt,Ep=new q,Tp=new q,lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===$r||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=new q,Ll=new Yt,Ii=new q,da=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Ll,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pl,Ll,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new q,Ap=new lt,Rp=new lt,en=class extends da{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vu=class extends lo{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},pa=class extends cr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_u=class extends lo{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fr=class extends da{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yu=class extends lo{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ai=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ma=class extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var fu=new WeakMap,ga=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&at("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&at("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=oi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{fu.has(o)===!0?(i&&i(fu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),fu.set(c,l),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qr=-90,Yr=1,co=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en(qr,Yr,e,t);i.layers=this.layers,this.add(i);let r=new en(qr,Yr,e,t);r.layers=this.layers,this.add(r);let o=new en(qr,Yr,e,t);o.layers=this.layers,this.add(o);let a=new en(qr,Yr,e,t);a.layers=this.layers,this.add(a);let c=new en(qr,Yr,e,t);c.layers=this.layers,this.add(c);let l=new en(qr,Yr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ic=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Qu="\\[\\]\\.:\\/",Ax=new RegExp("["+Qu+"]","g"),ef="[^"+Qu+"]",Rx="[^"+Qu.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",ef),Ix=/(WCOD+)?/.source.replace("WCOD",Rx),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),Nx=new RegExp("^"+Cx+Ix+Px+Lx+"$"),Dx=["material","materials","bones","map"],Mu=class{constructor(e,t,n){let i=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){let t=Nx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Mu;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Zs,endingEnd:Zs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case im:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Yc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===nm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Ea){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Js,i.endingEnd=Js):(e?i.endingStart=this.zeroSlopeAtStart?Js:Zs:i.endingStart=Xo,t?i.endingEnd=this.zeroSlopeAtEnd?Js:Zs:i.endingEnd=Xo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Ux=new Float32Array(1),Es=class extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new sc(Xt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ua(new Float32Array(2),new Float32Array(2),1,Ux),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Si.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Yc),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new rc(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Si.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Cp=new rt,xa=class{constructor(e,t,n=0,i=1/0){this.ray=new Ss(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cp),this}intersectObject(e,t=!0,n=[]){return bu(e,this,n,t),n.sort(Ip),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bu(e[i],this,n,t);return n.sort(Ip),n}};function Ip(s,e){return s.distance-e.distance}function bu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)bu(r[o],e,t,!0)}}var af=class af{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};af.prototype.isMatrix2=!0;var Su=af;function tf(s,e,t,n){let i=Fx(n);switch(t){case Bu:return s*e;case pc:return s*e/i.components*i.byteLength;case va:return s*e/i.components*i.byteLength;case Ts:return s*e*2/i.components*i.byteLength;case mc:return s*e*2/i.components*i.byteLength;case Hu:return s*e*3/i.components*i.byteLength;case qn:return s*e*4/i.components*i.byteLength;case gc:return s*e*4/i.components*i.byteLength;case _a:case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:case yc:return Math.max(s,16)*Math.max(e,8)/4;case xc:case _c:return Math.max(s,8)*Math.max(e,8)/2;case Mc:case bc:case wc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Sa:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Gc:case Vc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wa:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fx(s){switch(s){case Zn:case Fu:return{byteLength:1,components:1};case po:case Ou:case Ei:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case ci:case uc:case On:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gm(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zx(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
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
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,cv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,Tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uv=`PhysicalMaterial material;
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
#endif`,Fv=`uniform sampler2D dfgLUT;
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
}`,Ov=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform float backgroundBlurriness;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,q_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define MATCAP
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
}`,iy=`#define MATCAP
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
}`,sy=`#define NORMAL
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
}`,ry=`#define NORMAL
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
}`,oy=`#define PHONG
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
}`,ay=`#define PHONG
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
}`,ly=`#define STANDARD
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
}`,cy=`#define STANDARD
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
}`,hy=`#define TOON
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
}`,uy=`#define TOON
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
}`,fy=`uniform float size;
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 color;
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
}`,gy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:kx,alphahash_pars_fragment:Bx,alphamap_fragment:Hx,alphamap_pars_fragment:Gx,alphatest_fragment:Vx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:Kx,begin_vertex:Zx,beginnormal_vertex:Jx,bsdfs:$x,iridescence_fragment:jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:ov,color_vertex:av,common:lv,defaultnormal_vertex:cv,displacementmap_pars_vertex:hv,displacementmap_vertex:uv,emissivemap_fragment:fv,emissivemap_pars_fragment:dv,colorspace_fragment:pv,colorspace_pars_fragment:mv,envmap_fragment:gv,envmap_common_pars_fragment:xv,envmap_pars_fragment:vv,envmap_pars_vertex:_v,envmap_physical_pars_fragment:Iv,envmap_vertex:yv,fog_vertex:Mv,fog_pars_vertex:bv,fog_fragment:Sv,fog_pars_fragment:wv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:Tv,lights_lambert_fragment:Av,lights_lambert_pars_fragment:Rv,lights_pars_begin:Cv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Uv,lights_physical_pars_fragment:Fv,lights_fragment_begin:Ov,lights_fragment_maps:zv,lights_fragment_end:kv,lightprobes_pars_fragment:Bv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:$v,morphcolor_vertex:jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:s_,normal_pars_vertex:r_,normal_vertex:o_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:u_,opaque_fragment:f_,packing:d_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:x_,roughnessmap_fragment:v_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:M_,shadowmap_vertex:b_,shadowmask_pars_fragment:S_,skinbase_vertex:w_,skinning_pars_vertex:E_,skinning_vertex:T_,skinnormal_vertex:A_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:I_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:N_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:F_,worldpos_vertex:O_,background_vert:z_,background_frag:k_,backgroundCube_vert:B_,backgroundCube_frag:H_,cube_vert:G_,cube_frag:V_,depth_vert:W_,depth_frag:X_,distance_vert:q_,distance_frag:Y_,equirect_vert:K_,equirect_frag:Z_,linedashed_vert:J_,linedashed_frag:$_,meshbasic_vert:j_,meshbasic_frag:Q_,meshlambert_vert:ey,meshlambert_frag:ty,meshmatcap_vert:ny,meshmatcap_frag:iy,meshnormal_vert:sy,meshnormal_frag:ry,meshphong_vert:oy,meshphong_frag:ay,meshphysical_vert:ly,meshphysical_frag:cy,meshtoon_vert:hy,meshtoon_frag:uy,points_vert:fy,points_frag:dy,shadow_vert:py,shadow_frag:my,sprite_vert:gy,sprite_frag:xy},We={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},zi={basic:{uniforms:Ln([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Ln([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Ln([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Ln([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Ln([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Ln([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Ln([We.points,We.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Ln([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Ln([We.common,We.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Ln([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Ln([We.sprite,We.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Ln([We.common,We.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Ln([We.lights,We.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};zi.physical={uniforms:Ln([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Jc={r:0,b:0,g:0},vy=new rt,Vm=new xt;Vm.set(-1,0,0,0,1,0,0,0,1);function _y(s,e,t,n,i,r){let o=new Ce(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(y){let I=y.isScene===!0?y.background:null;if(I&&I.isTexture){let M=y.backgroundBlurriness>0;I=e.get(I,M)}return I}function p(y){let I=!1,M=d(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),I=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,I){let M=d(I);M&&M.isCubeTexture?(l===void 0&&(l=new Mt(new Mi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:yr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vm),l.material.toneMapped=wt.getTransfer(M.colorSpace)!==kt,(h!==M||u!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mt(new bi(2,2),new nn({name:"BackgroundMaterial",uniforms:yr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=wt.getTransfer(M.colorSpace)!==kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,I){y.getRGB(Jc,ju(s)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,I,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,I=1){o.set(y),a=I,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:v,dispose:m}}function yy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(B,k,O,P,S){let L=!1,C=u(B,P,O,k);r!==C&&(r=C,l(r.object)),L=d(B,P,O,S),L&&p(B,P,O,S),S!==null&&e.update(S,s.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,M(B,k,O,P),S!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))}function c(){return s.createVertexArray()}function l(B){return s.bindVertexArray(B)}function h(B){return s.deleteVertexArray(B)}function u(B,k,O,P){let S=P.wireframe===!0,L=n[k.id];L===void 0&&(L={},n[k.id]=L);let C=B.isInstancedMesh===!0?B.id:0,D=L[C];D===void 0&&(D={},L[C]=D);let b=D[O.id];b===void 0&&(b={},D[O.id]=b);let F=b[S];return F===void 0&&(F=f(c()),b[S]=F),F}function f(B){let k=[],O=[],P=[];for(let S=0;S<t;S++)k[S]=0,O[S]=0,P[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:P,object:B,attributes:{},index:null}}function d(B,k,O,P){let S=r.attributes,L=k.attributes,C=0,D=O.getAttributes();for(let b in D)if(D[b].location>=0){let G=S[b],Z=L[b];if(Z===void 0&&(b==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),b==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),G===void 0||G.attribute!==Z||Z&&G.data!==Z.data)return!0;C++}return r.attributesNum!==C||r.index!==P}function p(B,k,O,P){let S={},L=k.attributes,C=0,D=O.getAttributes();for(let b in D)if(D[b].location>=0){let G=L[b];G===void 0&&(b==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),b==="instanceColor"&&B.instanceColor&&(G=B.instanceColor));let Z={};Z.attribute=G,G&&G.data&&(Z.data=G.data),S[b]=Z,C++}r.attributes=S,r.attributesNum=C,r.index=P}function v(){let B=r.newAttributes;for(let k=0,O=B.length;k<O;k++)B[k]=0}function g(B){m(B,0)}function m(B,k){let O=r.newAttributes,P=r.enabledAttributes,S=r.attributeDivisors;O[B]=1,P[B]===0&&(s.enableVertexAttribArray(B),P[B]=1),S[B]!==k&&(s.vertexAttribDivisor(B,k),S[B]=k)}function y(){let B=r.newAttributes,k=r.enabledAttributes;for(let O=0,P=k.length;O<P;O++)k[O]!==B[O]&&(s.disableVertexAttribArray(O),k[O]=0)}function I(B,k,O,P,S,L,C){C===!0?s.vertexAttribIPointer(B,k,O,S,L):s.vertexAttribPointer(B,k,O,P,S,L)}function M(B,k,O,P){v();let S=P.attributes,L=O.getAttributes(),C=k.defaultAttributeValues;for(let D in L){let b=L[D];if(b.location>=0){let F=S[D];if(F===void 0&&(D==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),D==="instanceColor"&&B.instanceColor&&(F=B.instanceColor)),F!==void 0){let G=F.normalized,Z=F.itemSize,de=e.get(F);if(de===void 0)continue;let Y=de.buffer,Q=de.type,K=de.bytesPerElement,W=Q===s.INT||Q===s.UNSIGNED_INT||F.gpuType===uc;if(F.isInterleavedBufferAttribute){let ee=F.data,Ee=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,Te=F.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let Ie=0;Ie<b.locationSize;Ie++)m(b.location+Ie,ee.meshPerAttribute);B.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ie=0;Ie<b.locationSize;Ie++)g(b.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ie=0;Ie<b.locationSize;Ie++)I(b.location+Ie,Z/b.locationSize,Q,G,Ee*K,(Te+Z/b.locationSize*Ie)*K,W)}else{if(F.isInstancedBufferAttribute){for(let ee=0;ee<b.locationSize;ee++)m(b.location+ee,F.meshPerAttribute);B.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<b.locationSize;ee++)g(b.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ee=0;ee<b.locationSize;ee++)I(b.location+ee,Z/b.locationSize,Q,G,Z*K,Z/b.locationSize*ee*K,W)}}else if(C!==void 0){let G=C[D];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(b.location,G);break;case 3:s.vertexAttrib3fv(b.location,G);break;case 4:s.vertexAttrib4fv(b.location,G);break;default:s.vertexAttrib1fv(b.location,G)}}}}y()}function w(){U();for(let B in n){let k=n[B];for(let O in k){let P=k[O];for(let S in P){let L=P[S];for(let C in L)h(L[C].object),delete L[C];delete P[S]}}delete n[B]}}function T(B){if(n[B.id]===void 0)return;let k=n[B.id];for(let O in k){let P=k[O];for(let S in P){let L=P[S];for(let C in L)h(L[C].object),delete L[C];delete P[S]}}delete n[B.id]}function x(B){for(let k in n){let O=n[k];for(let P in O){let S=O[P];if(S[B.id]===void 0)continue;let L=S[B.id];for(let C in L)h(L[C].object),delete L[C];delete S[B.id]}}}function _(B){for(let k in n){let O=n[k],P=B.isInstancedMesh===!0?B.id:0,S=O[P];if(S!==void 0){for(let L in S){let C=S[L];for(let D in C)h(C[D].object),delete C[D];delete S[L]}delete O[P],Object.keys(O).length===0&&delete n[k]}}}function U(){A(),o=!0,r!==i&&(r=i,l(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function My(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function by(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==qn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Zn&&x!==On&&!_&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(at("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:I,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Sy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ni,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,I=y*4,M=m.clippingState||null;c.value=M,M=h(p,f,I,d);for(let w=0;w!==I;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,p!==!0||g===null){let m=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let I=0,M=d;I!==v;++I,M+=4)o.copy(u[I]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Pa=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ra(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:pr});r.uniforms.tEquirect.value=t;let o=new Mt(i,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=fn),new co(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Mm=256,wy=3,Ey=20,Wm=256,Xm=16,Ty=3,Ay=new q,Ry=new Ce,jc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new Mt(new Mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ay}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Ry));let g=new co(n,i,h);return g.position.copy(a),g.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mm,Zu(e))}_fromTexture(e,t){e.mapping===xr||e.mapping===uo?this._setSize(e.image.length===0?Mm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=bm(e,!1,!1),n=Math.log2(e)-wy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xr||e.mapping===uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cy(),this._integrationMaterial=Iy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Ty)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Wm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Py());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function bm(s,e,t){return new Pa(s,{minFilter:li,generateMipmaps:e,type:Ei,colorSpace:zn,depthBuffer:t})}function La(s,e,t){return new nn({name:s,uniforms:e,vertexShader:Et.cube_vert,fragmentShader:t,side:En,blending:pr,depthTest:!1,depthWrite:!1})}function Cy(){return La("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wm}u

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
	`)}function Iy(){return La("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xm}},`

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
	`)}function Py(){return La("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ey}
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
	`)}function Sm(){return La("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wm(){return La("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ly(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===lc||d===cc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Pa(p.height);return v.fromEquirectangularTexture(s,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===lc||d===cc,v=d===xr||d===uo;if(p||v){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new jc(s)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return p&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new jc(s)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===lc?f.mapping=xr:d===cc&&(f.mapping=uo),f}function c(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Ny(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&$s("WebGLRenderer: "+n+" extension not supported."),i}}}function Dy(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let g in v)e.update(v[g],s.ARRAY_BUFFER)}function u(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=v!==null?v.array.length:g.array.length/3-1,I=g.count>=65535?$o:Jo,M=new I(Math.ceil(y/3)*6,1),w=M.array;if(v!==null){let x=v.array;m=v.version;for(let _=0,U=0;_<y;_+=3){let A=x[_+0],B=x[_+1],k=x[_+2];w[U++]=A,w[U++]=B,w[U++]=B,w[U++]=k,w[U++]=k,w[U++]=A}}else{m=g.version;for(let x=0,_=0;x<y;x+=3){let U=x+0,A=x+1,B=x+2;w[_++]=U,w[_++]=A,w[_++]=A,w[_++]=B,w[_++]=B,w[_++]=U}}M.version=m;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function f(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in i){let v=i[p].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function Uy(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Fy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Oy(s,e,t){let n=new WeakMap,i=new Vt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let U=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],I=0;d===!0&&(I=1),p===!0&&(I=2),v===!0&&(I=3);let M=a.attributes.position.count*I,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*w*4*u),x=new Ko(T,M,w,u);x.type=On,x.needsUpdate=!0;let _=I*4;for(let A=0;A<u;A++){let B=g[A],k=m[A],O=y[A],P=M*w*4*A;for(let S=0;S<B.count;S++){let L=S*_;d===!0&&(i.fromBufferAttribute(B,S),T[P+L+0]=i.x,T[P+L+1]=i.y,T[P+L+2]=i.z,T[P+L+3]=0),p===!0&&(i.fromBufferAttribute(k,S),T[P+L+4]=i.x,T[P+L+5]=i.y,T[P+L+6]=i.z,T[P+L+7]=0),v===!0&&(i.fromBufferAttribute(O,S),T[P+L+8]=i.x,T[P+L+9]=i.y,T[P+L+10]=i.z,T[P+L+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new lt(M,w)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function zy(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ky={[Cu]:"LINEAR_TONE_MAPPING",[Iu]:"REINHARD_TONE_MAPPING",[Pu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Du]:"AGX_TONE_MAPPING",[gr]:"NEUTRAL_TONE_MAPPING",[Nu]:"CUSTOM_TONE_MAPPING"};function By(s,e,t,n,i,r){let o=new ii(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new It;h.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let u=new Kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Mt(h,u),d=new fr(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,y=null,I=[],M=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),c!==null&&c.setSize(w,T);for(let x=0;x<I.length;x++){let _=I[x];_.setSize&&_.setSize(w,T)}},this.setEffects=function(w){I=w,M=I.length>0&&I[0].isRenderPass===!0;let T=o.width,x=o.height;I.length>0&&a===null&&(a=new ii(T,x,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),c=new ii(T,x,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&I.some(U=>U.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&l===null&&(l=new is(T,x),r===!0&&(l.format=hs,l.type=_r)),o.dispose(),o.depthTexture=_?l:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let U=0;U<I.length;U++){let A=I[U];A.setSize&&A.setSize(T,x),_&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(w,T){if(g||w.toneMapping===Ui&&I.length===0)return!1;if(y=T,T!==null){let x=T.width,_=T.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return M===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Ui,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=m,g=!0;let x=o,_=a;for(let U=0;U<I.length;U++){let A=I[U];A.enabled!==!1&&(A.render(w,_,x,T),A.needsSwap!==!1&&(x=_,_=_===a?c:a))}if(p!==w.outputColorSpace||v!==w.toneMapping){p=w.outputColorSpace,v=w.toneMapping,u.defines={},wt.getTransfer(p)===kt&&(u.defines.SRGB_TRANSFER="");let U=ky[v];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(y),w.render(f,d),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var qm=new dn,Ym=new is(1,1),Km=new oa(1),Zm=new Ko,Jm=new Wl,$m=new ra,Em=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function vo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Em[i];if(r===void 0&&(r=new Float32Array(i),Em[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qc(s,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Hy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function Vy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function Wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function Xy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Cm.set(n),s.uniformMatrix2fv(this.addr,!1,Cm),gn(t,n)}}function qy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Rm.set(n),s.uniformMatrix3fv(this.addr,!1,Rm),gn(t,n)}}function Yy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Am.set(n),s.uniformMatrix4fv(this.addr,!1,Am),gn(t,n)}}function Ky(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function Jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function $y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function jy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function eM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function tM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function eh(s){return s.version===0&&(s.compareFunction=Xu,s.needsUpdate=!0),s}function nM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=eh(Ym):r=qm,t.setTexture2D(e||r,i)}function iM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jm,i)}function sM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=eh(Km):r=$m,t.setTextureCube(e||r,i)}function rM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function oM(s){switch(s){case 5126:return Hy;case 35664:return Gy;case 35665:return Vy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Qy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(s,e){s.uniform1fv(this.addr,e)}function lM(s,e){let t=vo(e,this.size,2);s.uniform2fv(this.addr,t)}function cM(s,e){let t=vo(e,this.size,3);s.uniform3fv(this.addr,t)}function hM(s,e){let t=vo(e,this.size,4);s.uniform4fv(this.addr,t)}function uM(s,e){let t=vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fM(s,e){let t=vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dM(s,e){let t=vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pM(s,e){s.uniform1iv(this.addr,e)}function mM(s,e){s.uniform2iv(this.addr,e)}function gM(s,e){s.uniform3iv(this.addr,e)}function xM(s,e){s.uniform4iv(this.addr,e)}function vM(s,e){s.uniform1uiv(this.addr,e)}function _M(s,e){s.uniform2uiv(this.addr,e)}function yM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,t){let n=this.cache,i=e.length,r=Qc(t,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=eh(Ym):o=qm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function SM(s,e,t){let n=this.cache,i=e.length,r=Qc(t,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jm,r[o])}function wM(s,e,t){let n=this.cache,i=e.length,r=Qc(t,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=eh(Km):o=$m;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function EM(s,e,t){let n=this.cache,i=e.length,r=Qc(t,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,r[o])}function TM(s){switch(s){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return _M;case 36295:return yM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return EM}}var hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}},uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TM(t.type)}},ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function AM(s,e,t){let n=s.name,i=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),o=lf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Im(t,l===void 0?new hf(a,s,e):new uf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ff(a),Im(t,u)),t=u}}}var go=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);AM(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Pm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var RM=37297,CM=0;function IM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Lm=new xt;function PM(s){wt._getMatrix(Lm,wt.workingColorSpace,s);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case qo:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+IM(s.getShaderSource(e),a)}else return r}function LM(s,e){let t=PM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var NM={[Cu]:"Linear",[Iu]:"Reinhard",[Pu]:"Cineon",[Lu]:"ACESFilmic",[Du]:"AgX",[gr]:"Neutral",[Nu]:"Custom"};function DM(s,e){let t=NM[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new q;function UM(){wt.getLuminanceCoefficients($c);let s=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function OM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ia(s){return s!==""}function Dm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(s){return s.replace(kM,BM)}function BM(s,e){let t=Et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return df(t)}var HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(s){return s.replace(HM,GM)}function GM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Om(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var VM={[dr]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function WM(s){return VM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XM={[uo]:"ENVMAP_MODE_REFRACTION"};function qM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YM={[ac]:"ENVMAP_BLENDING_MULTIPLY",[jp]:"ENVMAP_BLENDING_MIX",[Qp]:"ENVMAP_BLENDING_ADD"};function KM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":YM[s.combine]||"ENVMAP_BLENDING_NONE"}function ZM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=WM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qM(t),u=KM(t),f=FM(t),d=OM(r),p=i.createProgram(),v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ia).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(v=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Et.tonemapping_pars_fragment:"",t.toneMapping!==Ui?DM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,LM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=df(o),o=Dm(o,t),o=Um(o,t),a=df(a),a=Dm(a,t),a=Um(a,t),o=Fm(o),a=Fm(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+v+o,I=m+g+a,M=Pm(i,i.VERTEX_SHADER,y),w=Pm(i,i.FRAGMENT_SHADER,I);i.attachShader(p,M),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(A){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(p)||"",k=i.getShaderInfoLog(M)||"",O=i.getShaderInfoLog(w)||"",P=B.trim(),S=k.trim(),L=O.trim(),C=!0,D=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(C=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,w);else{let b=Nm(i,M,"vertex"),F=Nm(i,w,"fragment");gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+b+`
`+F)}else P!==""?at("WebGLProgram: Program Info Log:",P):(S===""||L==="")&&(D=!1);D&&(A.diagnostics={runnable:C,programLog:P,vertexShader:{log:S,prefix:v},fragmentShader:{log:L,prefix:g}})}i.deleteShader(M),i.deleteShader(w),x=new go(i,p),_=zM(i,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(p,RM)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}var JM=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}},mf=class{constructor(e){this.id=JM++,this.code=e,this.usedTimes=0}};function $M(s){return s===Ts||s===Sa||s===wa}function jM(s,e,t,n,i,r){let o=new to,a=new pf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,_,U,A,B,k){let O=A.fog,P=B.geometry,S=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,C=e.get(x.envMap||S,L),D=f[x.type],b=n.precision;x.precision!==null&&(b=n.getMaxPrecision(x.precision),b!==x.precision&&at("WebGLProgram.getParameters:",x.precision,"not supported, using",b,"instead."));let F=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=F!==void 0?F.length:0,Z=0;P.morphAttributes.position!==void 0&&(Z=1),P.morphAttributes.normal!==void 0&&(Z=2),P.morphAttributes.color!==void 0&&(Z=3);let de,Y,Q,K;if(D){let Be=zi[D];de=Be.vertexShader,Y=Be.fragmentShader}else{de=x.vertexShader,Y=x.fragmentShader;let Be=a.getVertexShaderStage(x),Dt=a.getFragmentShaderStage(x);a.update(x,Be,Dt),Q=Be.id,K=Dt.id}let W=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,Ie=!!x.map,Je=!!x.matcap,Ke=!!C,ke=Ke&&C.isPMREMTexture===!0,dt=!!x.aoMap,Ut=!!x.lightMap,Ot=!!x.bumpMap&&x.wireframe===!1,Tt=!!x.normalMap,_t=!!x.displacementMap,_e=!!x.emissiveMap,Ae=!!x.metalnessMap,ge=!!x.roughnessMap,et=x.anisotropy>0,H=x.clearcoat>0,he=x.diffuseRoughness>0,J=x.dispersion>0,we=x.retroreflectivity>0,ie=x.iridescence>0,Oe=x.sheen>0,De=x.transmission>0,Ve=et&&!!x.anisotropyMap,z=H&&!!x.clearcoatMap,R=H&&!!x.clearcoatNormalMap,ne=H&&!!x.clearcoatRoughnessMap,Me=he&&!!x.diffuseRoughnessMap,pe=ie&&!!x.iridescenceMap,me=ie&&!!x.iridescenceThicknessMap,ye=Oe&&!!x.sheenColorMap,ue=Oe&&!!x.sheenRoughnessMap,le=!!x.specularMap,ce=!!x.specularColorMap,V=!!x.specularIntensityMap,te=De&&!!x.transmissionMap,se=De&&!!x.thicknessMap,be=!!x.gradientMap,Se=!!x.alphaMap,Pe=x.alphaTest>0,qe=!!x.alphaHash,vt=!!x.extensions,Le=Ui;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Le=s.toneMapping);let it=ke?C.isCompressedCubeTexture?C.image[0].mipmaps:C.mipmaps:null,bt={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:Y,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:b,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Je,envMap:Ke,envMapMode:Ke&&C.mapping,envMapPMREM:ke,envMapMaxLod:ke?it.length-1:null,envMapSize:ke?it[0].width:null,aoMap:dt,lightMap:Ut,bumpMap:Ot,normalMap:Tt,displacementMap:_t,emissiveMap:_e,normalMapObjectSpace:Tt&&x.normalMapType===rm,normalMapTangentSpace:Tt&&x.normalMapType===Aa,packedNormalMap:Tt&&x.normalMapType===Aa&&$M(x.normalMap.format),metalnessMap:Ae,roughnessMap:ge,anisotropy:et,anisotropyMap:Ve,clearcoat:H,clearcoatMap:z,clearcoatNormalMap:R,clearcoatRoughnessMap:ne,diffuseRoughness:he,diffuseRoughnessMap:Me,dispersion:J,retroreflection:we,iridescence:ie,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:Oe,sheenColorMap:ye,sheenRoughnessMap:ue,specularMap:le,specularColorMap:ce,specularIntensityMap:V,transmission:De,transmissionMap:te,thicknessMap:se,gradientMap:be,opaque:x.transparent===!1&&x.blending===wi&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:Pe,alphaHash:qe,combine:x.combine,mapUv:Ie&&d(x.map.channel),aoMapUv:dt&&d(x.aoMap.channel),lightMapUv:Ut&&d(x.lightMap.channel),bumpMapUv:Ot&&d(x.bumpMap.channel),normalMapUv:Tt&&d(x.normalMap.channel),displacementMapUv:_t&&d(x.displacementMap.channel),emissiveMapUv:_e&&d(x.emissiveMap.channel),metalnessMapUv:Ae&&d(x.metalnessMap.channel),roughnessMapUv:ge&&d(x.roughnessMap.channel),anisotropyMapUv:Ve&&d(x.anisotropyMap.channel),clearcoatMapUv:z&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:R&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&d(x.sheenRoughnessMap.channel),specularMapUv:le&&d(x.specularMap.channel),specularColorMapUv:ce&&d(x.specularColorMap.channel),specularIntensityMapUv:V&&d(x.specularIntensityMap.channel),transmissionMapUv:te&&d(x.transmissionMap.channel),thicknessMapUv:se&&d(x.thicknessMap.channel),alphaMapUv:Se&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Tt||et),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!P.attributes.uv&&(Ie||Se),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ee,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Z,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:k.filter(Be=>Be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&wt.getTransfer(x.map.colorSpace)===kt,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&wt.getTransfer(x.emissiveMap.colorSpace)===kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function v(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)_.push(U),_.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(_,x),m(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function g(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function m(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let _=f[x.type],U;if(_){let A=zi[_];U=vm.clone(A.uniforms)}else U=x.uniforms;return U}function I(x,_){let U=h.get(_);return U!==void 0?++U.usedTimes:(U=new ZM(s,_,x,i),l.push(U),h.set(_,U)),U}function M(x){if(--x.usedTimes===0){let _=l.indexOf(x);l[_]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:I,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:T}}function QM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function eb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,v,g,m){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},s[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=g,y.group=m),e++,y}function c(f,d,p,v,g,m,y){y.reversedDepth===!0&&(g=-g);let I=a(f,d,p,v,g,m);p.transmission>0?n.push(I):p.transparent===!0?i.push(I):t.push(I)}function l(f,d,p,v,g,m){let y=a(f,d,p,v,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||eb),n.length>1&&n.sort(d||zm),i.length>1&&i.sort(d||zm)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function tb(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new km,s.set(n,[o])):i>=r.length?(o=new km,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function nb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new Ce};break;case"SpotLight":t={position:new q,direction:new q,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function ib(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var sb=0;function rb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ob(s){let e=new nb,t=ib(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let i=new q,r=new rt,o=new rt;function a(l){let h=0,u=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,y=0,I=0,M=0,w=0,T=0,x=0,_=0,U=0,A=0;l.sort(rb);for(let k=0,O=l.length;k<O;k++){let P=l[k],S=P.color,L=P.intensity,C=P.distance,D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ts?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=S.r*L,u+=S.g*L,f+=S.b*L;else if(P.isLightProbe){for(let b=0;b<9;b++)n.probe[b].addScaledVector(P.sh.coefficients[b],L);A++}else if(P.isSunLight){let b=e.get(P);if(b.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,G=t.get(P);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=D;let Z=F.getViewportCount();for(let de=0;de<Z;de++)n.sunShadowMatrix[v+de]=F.getMatrix(de),n.sunShadowCascade[v+de]=F._cascadeData[de];v+=Z,p++}n.sun[d]=b,d++}else if(P.isDirectionalLight){let b=e.get(P);if(b.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,G=t.get(P);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=b,g++}else if(P.isSpotLight){let b=e.get(P);b.position.setFromMatrixPosition(P.matrixWorld),b.color.copy(S).multiplyScalar(L),b.distance=C,b.coneCos=Math.cos(P.angle),b.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),b.decay=P.decay,n.spot[y]=b;let F=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,F.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[y]=F.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=D,x++}y++}else if(P.isRectAreaLight){let b=e.get(P);b.color.copy(S).multiplyScalar(L),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),n.rectArea[I]=b,I++}else if(P.isPointLight){let b=e.get(P);if(b.color.copy(P.color).multiplyScalar(P.intensity),b.distance=P.distance,b.decay=P.decay,P.castShadow){let F=P.shadow,G=t.get(P);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=b,m++}else if(P.isHemisphereLight){let b=e.get(P);b.skyColor.copy(P.color).multiplyScalar(L),b.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[M]=b,M++}}I>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let B=n.hash;(B.sunLength!==d||B.directionalLength!==g||B.pointLength!==m||B.spotLength!==y||B.rectAreaLength!==I||B.hemiLength!==M||B.numSunShadows!==p||B.numDirectionalShadows!==w||B.numPointShadows!==T||B.numSpotShadows!==x||B.numSpotMaps!==_||B.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=I,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+_-U,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=A,B.sunLength=d,B.directionalLength=g,B.pointLength=m,B.spotLength=y,B.rectAreaLength=I,B.hemiLength=M,B.numSunShadows=p,B.numDirectionalShadows=w,B.numPointShadows=T,B.numSpotShadows=x,B.numSpotMaps=_,B.numLightProbes=A,n.version=sb++)}function c(l,h){let u=0,f=0,d=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let y=0,I=l.length;y<I;y++){let M=l[y];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),f++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Bm(s){let e=new ob(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ab(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Bm(s),e.set(i,[a])):r>=o.length?(a=new Bm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
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
}`,hb=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],ub=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Hm=new rt,Ca=new q,cf=new q;function fb(s,e,t){let n=new _i,i=new lt,r=new lt,o=new Vt,a=new Zl,c=new Jl,l={},h=t.maxTextureSize,u={[Di]:En,[En]:Di,[sn]:sn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new It;p.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let m=this.type;this.render=function(T,x,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Np&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let U=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),k=s.state;k.setBlending(pr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=m!==this.type;O&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(S=>S.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,S=T.length;P<S;P++){let L=T[P],C=L.shadow;if(C===void 0){at("WebGLShadowMap:",L,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);let D=C.getFrameExtents();i.multiply(D),r.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/D.x),i.x=r.x*D.x,C.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/D.y),i.y=r.y*D.y,C.mapSize.y=r.y));let b=s.state.buffers.depth.getReversed();if(C.camera._reversedDepth=b,C.map===null||O===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===ho){if(L.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new ii(i.x,i.y,{format:Ts,type:Ei,minFilter:fn,magFilter:fn,generateMipmaps:!1}),C.map.texture.name=L.name+".shadowMap",C.map.depthTexture=new is(i.x,i.y,On),C.map.depthTexture.name=L.name+".shadowMapDepth",C.map.depthTexture.format=ns,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=tn,C.map.depthTexture.magFilter=tn}else L.isPointLight?(C.map=new Pa(i.x),C.map.depthTexture=new oa(i.x,ci)):(C.map=new ii(i.x,i.y),C.map.depthTexture=new is(i.x,i.y,ci)),C.map.depthTexture.name=L.name+".shadowMap",C.map.depthTexture.format=ns,this.type===dr?(C.map.depthTexture.compareFunction=b?Wu:Vu,C.map.depthTexture.minFilter=fn,C.map.depthTexture.magFilter=fn):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=tn,C.map.depthTexture.magFilter=tn);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==i.x||C.map.height!==i.y)&&C.map.setSize(i.x,i.y);let F=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();L.isPointLight!==!0&&C.updateMatrices(L,_);let G=(C.camera.layers.mask&4294967294)!==0?C.camera.layers:_.layers;for(let Z=0;Z<F;Z++){let de=C.getCamera(Z);if(L.isPointLight){let Y=C.camera,Q=C.matrix,K=L.distance||Y.far;K!==Y.far&&(Y.far=K,Y.updateProjectionMatrix()),Ca.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Ca),cf.copy(Y.position),cf.add(hb[Z]),Y.up.copy(ub[Z]),Y.lookAt(cf),Y.updateMatrixWorld(),Q.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Hm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),C._frustum.setFromProjectionMatrix(Hm,Y.coordinateSystem,Y.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)s.setRenderTarget(C.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(C.map),s.clear());let Y=C.getViewport(Z);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),k.viewport(o)}n=C.getFrustum(Z),M(x,_,de,L,G,this.type)}C.isPointLightShadow!==!0&&this.type===ho&&y(C,_),C.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(U,A,B)};function y(T,x){let _=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ii(i.x,i.y,{format:Ts,type:Ei}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(x,null,_,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(x,null,_,d,v,null)}function I(T,x,_,U){let A=null,B=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)A=B;else if(A=_.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=A.uuid,O=x.uuid,P=l[k];P===void 0&&(P={},l[k]=P);let S=P[O];S===void 0&&(S=A.clone(),P[O]=S,x.addEventListener("dispose",w)),A=S}if(A.visible=x.visible,A.wireframe=x.wireframe,U===ho?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=s.properties.get(A);k.light=_}return A}function M(T,x,_,U,A,B){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===ho)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let P=e.update(T),S=T.material;if(Array.isArray(S)){let L=P.groups;for(let C=0,D=L.length;C<D;C++){let b=L[C],F=S[b.materialIndex];if(F&&F.visible){let G=I(T,F,U,B);T.onBeforeShadow(s,T,x,_,P,G,b),s.renderBufferDirect(_,null,P,G,T,b),T.onAfterShadow(s,T,x,_,P,G,b)}}}else if(S.visible){let L=I(T,S,U,B);T.onBeforeShadow(s,T,x,_,P,L,null),s.renderBufferDirect(_,null,P,L,T,null),T.onAfterShadow(s,T,x,_,P,L,null)}}let O=T.children;for(let P=0,S=O.length;P<S;P++)M(O[P],x,_,U,A,B)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in l){let U=l[_],A=T.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}}function db(s,e){function t(){let V=!1,te=new Vt,se=null,be=new Vt(0,0,0,0);return{setMask:function(Se){se!==Se&&!V&&(s.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){V=Se},setClear:function(Se,Pe,qe,vt,Le){Le===!0&&(Se*=vt,Pe*=vt,qe*=vt),te.set(Se,Pe,qe,vt),be.equals(te)===!1&&(s.clearColor(Se,Pe,qe,vt),be.copy(te))},reset:function(){V=!1,se=null,be.set(-1,0,0,0)}}}function n(){let V=!1,te=!1,se=null,be=null,Se=null;return{setReversed:function(Pe){if(te!==Pe){let qe=e.get("EXT_clip_control");Pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),te=Pe;let vt=Se;Se=null,this.setClear(vt)}},getReversed:function(){return te},setTest:function(Pe){Pe?ee(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!V&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(te&&(Pe=mm[Pe]),be!==Pe){switch(Pe){case Ul:s.depthFunc(s.NEVER);break;case Fl:s.depthFunc(s.ALWAYS);break;case Ol:s.depthFunc(s.LESS);break;case Zr:s.depthFunc(s.LEQUAL);break;case zl:s.depthFunc(s.EQUAL);break;case kl:s.depthFunc(s.GEQUAL);break;case Bl:s.depthFunc(s.GREATER);break;case Hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Se!==Pe&&(Se=Pe,te&&(Pe=1-Pe),s.clearDepth(Pe))},reset:function(){V=!1,se=null,be=null,Se=null,te=!1}}}function i(){let V=!1,te=null,se=null,be=null,Se=null,Pe=null,qe=null,vt=null,Le=null;return{setTest:function(it){V||(it?ee(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(it){te!==it&&!V&&(s.stencilMask(it),te=it)},setFunc:function(it,bt,Be){(se!==it||be!==bt||Se!==Be)&&(s.stencilFunc(it,bt,Be),se=it,be=bt,Se=Be)},setOp:function(it,bt,Be){(Pe!==it||qe!==bt||vt!==Be)&&(s.stencilOp(it,bt,Be),Pe=it,qe=bt,vt=Be)},setLocked:function(it){V=it},setClear:function(it){Le!==it&&(s.clearStencil(it),Le=it)},reset:function(){V=!1,te=null,se=null,be=null,Se=null,Pe=null,qe=null,vt=null,Le=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,g=!1,m=null,y=null,I=null,M=null,w=null,T=null,x=null,_=new Ce(0,0,0),U=0,A=!1,B=null,k=null,O=null,P=null,S=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,D=0,b=s.getParameter(s.VERSION);b.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(b)[1]),C=D>=1):b.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),C=D>=2);let F=null,G={},Z=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Y=new Vt().fromArray(Z),Q=new Vt().fromArray(de);function K(V,te,se,be){let Se=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<se;qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(te+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Pe}let W={};W[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),o.setFunc(Zr),Ot(!1),Tt(wu),ee(s.CULL_FACE),dt(pr);function ee(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function Ee(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Te(V,te){return f[V]!==te?(s.bindFramebuffer(V,te),f[V]=te,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=te),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Ie(V,te){let se=p,be=!1;if(V){se=d.get(te),se===void 0&&(se=[],d.set(te,se));let Se=V.textures;if(se.length!==Se.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,qe=Se.length;Pe<qe;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=Se.length,be=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,be=!0);be&&s.drawBuffers(se)}function Je(V){return v!==V?(s.useProgram(V),v=V,!0):!1}let Ke={[mr]:s.FUNC_ADD,[Up]:s.FUNC_SUBTRACT,[Fp]:s.FUNC_REVERSE_SUBTRACT};Ke[Op]=s.MIN,Ke[zp]=s.MAX;let ke={[kp]:s.ZERO,[Bp]:s.ONE,[Hp]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[Yp]:s.SRC_ALPHA_SATURATE,[Xp]:s.DST_COLOR,[Vp]:s.DST_ALPHA,[Gp]:s.ONE_MINUS_SRC_COLOR,[Ru]:s.ONE_MINUS_SRC_ALPHA,[qp]:s.ONE_MINUS_DST_COLOR,[Wp]:s.ONE_MINUS_DST_ALPHA,[Kp]:s.CONSTANT_COLOR,[Zp]:s.ONE_MINUS_CONSTANT_COLOR,[Jp]:s.CONSTANT_ALPHA,[$p]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(V,te,se,be,Se,Pe,qe,vt,Le,it){if(V===pr){g===!0&&(Ee(s.BLEND),g=!1);return}if(g===!1&&(ee(s.BLEND),g=!0),V!==Dp){if(V!==m||it!==A){if((y!==mr||w!==mr)&&(s.blendEquation(s.FUNC_ADD),y=mr,w=mr),it)switch(V){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFunc(s.ONE,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:gt("WebGLState: Invalid blending: ",V);break}else switch(V){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Eu:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",V);break}I=null,M=null,T=null,x=null,_.set(0,0,0),U=0,m=V,A=it}return}Se=Se||te,Pe=Pe||se,qe=qe||be,(te!==y||Se!==w)&&(s.blendEquationSeparate(Ke[te],Ke[Se]),y=te,w=Se),(se!==I||be!==M||Pe!==T||qe!==x)&&(s.blendFuncSeparate(ke[se],ke[be],ke[Pe],ke[qe]),I=se,M=be,T=Pe,x=qe),(vt.equals(_)===!1||Le!==U)&&(s.blendColor(vt.r,vt.g,vt.b,Le),_.copy(vt),U=Le),m=V,A=!1}function Ut(V,te){V.side===sn?Ee(s.CULL_FACE):ee(s.CULL_FACE);let se=V.side===En;te&&(se=!se),Ot(se),V.blending===wi&&V.transparent===!1?dt(pr):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let be=V.stencilWrite;a.setTest(be),be&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_e(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){B!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),B=V)}function Tt(V){V!==Pp?(ee(s.CULL_FACE),V!==k&&(V===wu?s.cullFace(s.BACK):V===Lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),k=V}function _t(V){V!==O&&(C&&s.lineWidth(V),O=V)}function _e(V,te,se){V?(ee(s.POLYGON_OFFSET_FILL),(P!==te||S!==se)&&(P=te,S=se,o.getReversed()&&(te=-te,se=-se),s.polygonOffset(te,se))):Ee(s.POLYGON_OFFSET_FILL)}function Ae(V){V?ee(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function ge(V){V===void 0&&(V=s.TEXTURE0+L-1),F!==V&&(s.activeTexture(V),F=V)}function et(V,te,se){se===void 0&&(F===null?se=s.TEXTURE0+L-1:se=F);let be=G[se];be===void 0&&(be={type:void 0,texture:void 0},G[se]=be),(be.type!==V||be.texture!==te)&&(F!==se&&(s.activeTexture(se),F=se),s.bindTexture(V,te||W[V]),be.type=V,be.texture=te)}function H(){let V=G[F];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{s.compressedTexImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function we(){try{s.texSubImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function ie(){try{s.texSubImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function Oe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function De(){try{s.compressedTexSubImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function Ve(){try{s.texStorage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function z(){try{s.texStorage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function R(){try{s.texImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function ne(){try{s.texImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function Me(V){return u[V]!==void 0?u[V]:s.getParameter(V)}function pe(V,te){u[V]!==te&&(s.pixelStorei(V,te),u[V]=te)}function me(V){Y.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Y.copy(V))}function ye(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ue(V,te){let se=l.get(te);se===void 0&&(se=new WeakMap,l.set(te,se));let be=se.get(V);be===void 0&&(be=s.getUniformBlockIndex(te,V.name),s.uniformBlockBinding(te,be,be),se.set(V,be))}function le(V,te,se){let Se=l.get(te).get(V);c[Se]!==se&&(s.bindBufferBase(s.UNIFORM_BUFFER,Se,se),c[Se]=se)}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,G={},f={},c={},d=new WeakMap,p=[],v=null,g=!1,m=null,y=null,I=null,M=null,w=null,T=null,x=null,_=new Ce(0,0,0),U=0,A=!1,B=null,k=null,O=null,P=null,S=null,Y.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Ee,bindFramebuffer:Te,drawBuffers:Ie,useProgram:Je,setBlending:dt,setMaterial:Ut,setFlipSided:Ot,setCullFace:Tt,setLineWidth:_t,setPolygonOffset:_e,setScissorTest:Ae,activeTexture:ge,bindTexture:et,unbindTexture:H,compressedTexImage2D:he,compressedTexImage3D:J,texImage2D:R,texImage3D:ne,pixelStorei:pe,getParameter:Me,updateUBOMapping:ue,uniformBlockBinding:le,texStorage2D:Ve,texStorage3D:z,texSubImage2D:we,texSubImage3D:ie,compressedTexSubImage2D:Oe,compressedTexSubImage3D:De,scissor:me,viewport:ye,reset:ce}}function pb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(z=>p.delete(z)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(z,R){return g?new OffscreenCanvas(z,R):jr("canvas")}function y(z,R,ne){let Me=1,pe=Ve(z);if((pe.width>ne||pe.height>ne)&&(Me=ne/Math.max(pe.width,pe.height)),Me<1)if(typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!="undefined"&&z instanceof VideoFrame){let me=Math.floor(Me*pe.width),ye=Math.floor(Me*pe.height);f===void 0&&(f=m(me,ye));let ue=R?m(me,ye):f;return ue.width=me,ue.height=ye,ue.getContext("2d").drawImage(z,0,0,me,ye),at("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+me+"x"+ye+")."),ue}else return"data"in z&&at("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),z;return z}function I(z){return z.generateMipmaps}function M(z){s.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(z,R,ne,Me,pe,me=!1){if(z!==null){if(s[z]!==void 0)return s[z];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ye;Me&&(ye=e.get("EXT_texture_norm16"),ye||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=R;if(R===s.RED&&(ne===s.FLOAT&&(ue=s.R32F),ne===s.HALF_FLOAT&&(ue=s.R16F),ne===s.UNSIGNED_BYTE&&(ue=s.R8),ne===s.UNSIGNED_SHORT&&ye&&(ue=ye.R16_EXT),ne===s.SHORT&&ye&&(ue=ye.R16_SNORM_EXT)),R===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.R8UI),ne===s.UNSIGNED_SHORT&&(ue=s.R16UI),ne===s.UNSIGNED_INT&&(ue=s.R32UI),ne===s.BYTE&&(ue=s.R8I),ne===s.SHORT&&(ue=s.R16I),ne===s.INT&&(ue=s.R32I)),R===s.RG&&(ne===s.FLOAT&&(ue=s.RG32F),ne===s.HALF_FLOAT&&(ue=s.RG16F),ne===s.UNSIGNED_BYTE&&(ue=s.RG8),ne===s.UNSIGNED_SHORT&&ye&&(ue=ye.RG16_EXT),ne===s.SHORT&&ye&&(ue=ye.RG16_SNORM_EXT)),R===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RG16UI),ne===s.UNSIGNED_INT&&(ue=s.RG32UI),ne===s.BYTE&&(ue=s.RG8I),ne===s.SHORT&&(ue=s.RG16I),ne===s.INT&&(ue=s.RG32I)),R===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),ne===s.UNSIGNED_INT&&(ue=s.RGB32UI),ne===s.BYTE&&(ue=s.RGB8I),ne===s.SHORT&&(ue=s.RGB16I),ne===s.INT&&(ue=s.RGB32I)),R===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),ne===s.UNSIGNED_INT&&(ue=s.RGBA32UI),ne===s.BYTE&&(ue=s.RGBA8I),ne===s.SHORT&&(ue=s.RGBA16I),ne===s.INT&&(ue=s.RGBA32I)),R===s.RGB&&(ne===s.UNSIGNED_SHORT&&ye&&(ue=ye.RGB16_EXT),ne===s.SHORT&&ye&&(ue=ye.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),R===s.RGBA){let le=me?qo:wt.getTransfer(pe);ne===s.FLOAT&&(ue=s.RGBA32F),ne===s.HALF_FLOAT&&(ue=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ue=le===kt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&ye&&(ue=ye.RGBA16_EXT),ne===s.SHORT&&ye&&(ue=ye.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(z,R){let ne;return z?R===null||R===ci||R===_r?ne=s.DEPTH24_STENCIL8:R===On?ne=s.DEPTH32F_STENCIL8:R===po&&(ne=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ci||R===_r?ne=s.DEPTH_COMPONENT24:R===On?ne=s.DEPTH_COMPONENT32F:R===po&&(ne=s.DEPTH_COMPONENT16),ne}function _(z,R){return I(z)===!0||z.isFramebufferTexture&&z.minFilter!==tn&&z.minFilter!==fn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function U(z){let R=new WeakRef(z);n.get(z).__ref=R,p.add(R),v.register(z,R,R)}function A(z){let R=n.get(z).__ref;R!==void 0&&(p.delete(R),v.unregister(R))}function B(z){O(z.target)}function k(z){P(z.target)}function O(z){z.removeEventListener("dispose",B),A(z),L(z),z.isVideoTexture&&h.delete(z),z.isHTMLTexture&&u.delete(z)}function P(z){z.removeEventListener("dispose",k),A(z),D(z)}function S(){for(let z of p){let R=z.deref();R!==void 0&&(R.isRenderTarget===!0?P(R):O(R))}p.clear(),u.clear()}function L(z){let R=n.get(z);if(R.__webglInit===void 0)return;let ne=z.source,Me=d.get(ne);if(Me){let pe=Me[R.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(z),Object.keys(Me).length===0&&d.delete(ne)}n.remove(z)}function C(z){let R=n.get(z);s.deleteTexture(R.__webglTexture);let ne=z.source,Me=d.get(ne);delete Me[R.__cacheKey],o.memory.textures--}function D(z){let R=n.get(z);R.__depthDisposeCallback&&R.__depthDisposeCallback();let ne=z.depthTexture;if(ne&&ne.renderTarget===z&&O(ne),z.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let me=0;me<R.__webglFramebuffer[pe].length;me++)s.deleteFramebuffer(R.__webglFramebuffer[pe][me]);else s.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)s.deleteFramebuffer(R.__webglFramebuffer[pe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Me=z.textures;for(let pe=0,me=Me.length;pe<me;pe++){let ye=n.get(Me[pe]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(Me[pe])}n.remove(z)}let b=0;function F(){b=0}function G(){return b}function Z(z){b=z}function de(){let z=b;return z>=i.maxTextures&&at("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+i.maxTextures),b+=1,z}function Y(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.mipmapsAutoUpdate),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function Q(z,R){let ne=n.get(z);if(z.isVideoTexture&&Oe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){let Me=z.image;if(Me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(ne,z,R);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+R)}function K(z,R){let ne=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ut(ne,z,R);return}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+R)}function W(z,R){let ne=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ut(ne,z,R);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+R)}function ee(z,R){let ne=n.get(z);if(z.version>0&&ne.__version!==z.version){Ot(ne,z,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+R)}let Ee={[Ms]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},Te={[tn]:s.NEAREST,[hc]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[fo]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},Ie={[am]:s.NEVER,[Xu]:s.ALWAYS,[lm]:s.LESS,[Vu]:s.LEQUAL,[cm]:s.EQUAL,[Wu]:s.GEQUAL,[hm]:s.GREATER,[um]:s.NOTEQUAL};function Je(z,R){if(R.type===On&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===fn||R.magFilter===fo||R.magFilter===vr||R.magFilter===li||R.minFilter===fn||R.minFilter===fo||R.minFilter===vr||R.minFilter===li)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,Ee[R.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,Ee[R.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,Ee[R.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,Te[R.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,Te[R.minFilter]),R.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,Ie[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===tn||R.minFilter!==vr&&R.minFilter!==li||R.type===On&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ke(z,R){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",B),U(R));let Me=R.source,pe=d.get(Me);pe===void 0&&(pe={},d.set(Me,pe));let me=Y(R);if(me!==z.__cacheKey){pe[me]===void 0&&(pe[me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),pe[me].usedTimes++;let ye=pe[z.__cacheKey];ye!==void 0&&(pe[z.__cacheKey].usedTimes--,ye.usedTimes===0&&C(R)),z.__cacheKey=me,z.__webglTexture=pe[me].texture}return ne}function ke(z,R,ne){return Math.floor(Math.floor(z/ne)/R)}function dt(z,R,ne,Me){let me=z.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,ne,Me,R.data);else{me.sort((V,te)=>V.start-te.start);let ye=0;for(let V=1;V<me.length;V++){let te=me[ye],se=me[V],be=te.start+te.count,Se=ke(se.start,R.width,4),Pe=ke(te.start,R.width,4);se.start<=be+1&&Se===Pe&&ke(se.start+se.count-1,R.width,4)===Se?te.count=Math.max(te.count,se.start+se.count-te.start):(++ye,me[ye]=se)}me.length=ye+1;let ue=t.getParameter(s.UNPACK_ROW_LENGTH),le=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let V=0,te=me.length;V<te;V++){let se=me[V],be=Math.floor(se.start/4),Se=Math.ceil(se.count/4),Pe=be%R.width,qe=Math.floor(be/R.width),vt=Se,Le=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(s.TEXTURE_2D,0,Pe,qe,vt,Le,ne,Me,R.data)}z.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function Ut(z,R,ne){let Me=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Me=s.TEXTURE_3D);let pe=Ke(z,R),me=R.source;t.bindTexture(Me,z.__webglTexture,s.TEXTURE0+ne);let ye=n.get(me);if(me.version!==ye.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap!="undefined"&&R.image instanceof ImageBitmap)===!1){let Le=wt.getPrimaries(wt.workingColorSpace),it=R.colorSpace===us?null:wt.getPrimaries(R.colorSpace),bt=R.colorSpace===us||Le===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}t.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment);let le=y(R.image,!1,i.maxTextureSize);le=De(R,le);let ce=r.convert(R.format,R.colorSpace),V=r.convert(R.type),te=T(R.internalFormat,ce,V,R.normalized,R.colorSpace,R.isVideoTexture);Je(Me,R);let se,be=R.mipmaps,Se=R.isVideoTexture!==!0,Pe=ye.__version===void 0||pe===!0,qe=me.dataReady,vt=_(R,le);if(R.isDepthTexture)te=x(R.format===hs,R.type),Pe&&(Se?t.texStorage2D(s.TEXTURE_2D,1,te,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,te,le.width,le.height,0,ce,V,null));else if(R.isDataTexture)if(be.length>0){Se&&Pe&&t.texStorage2D(s.TEXTURE_2D,vt,te,be[0].width,be[0].height);for(let Le=0,it=be.length;Le<it;Le++)se=be[Le],Se?qe&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,se.width,se.height,ce,V,se.data):t.texImage2D(s.TEXTURE_2D,Le,te,se.width,se.height,0,ce,V,se.data);R.generateMipmaps=!1}else Se?(Pe&&t.texStorage2D(s.TEXTURE_2D,vt,te,le.width,le.height),qe&&dt(R,le,ce,V)):t.texImage2D(s.TEXTURE_2D,0,te,le.width,le.height,0,ce,V,le.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Se&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,vt,te,be[0].width,be[0].height,le.depth);for(let Le=0,it=be.length;Le<it;Le++)if(se=be[Le],R.format!==qn)if(ce!==null)if(Se){if(qe)if(R.layerUpdates.size>0){let bt=tf(se.width,se.height,R.format,R.type);for(let Be of R.layerUpdates){let Dt=se.data.subarray(Be*bt/se.data.BYTES_PER_ELEMENT,(Be+1)*bt/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,Be,se.width,se.height,1,ce,Dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,se.width,se.height,le.depth,ce,se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Le,te,se.width,se.height,le.depth,0,se.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?qe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,se.width,se.height,le.depth,ce,V,se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Le,te,se.width,se.height,le.depth,0,ce,V,se.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{Se&&Pe&&t.texStorage2D(s.TEXTURE_2D,vt,te,be[0].width,be[0].height);for(let Le=0,it=be.length;Le<it;Le++)se=be[Le],R.format!==qn?ce!==null?Se?qe&&t.compressedTexSubImage2D(s.TEXTURE_2D,Le,0,0,se.width,se.height,ce,se.data):t.compressedTexImage2D(s.TEXTURE_2D,Le,te,se.width,se.height,0,se.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?qe&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,se.width,se.height,ce,V,se.data):t.texImage2D(s.TEXTURE_2D,Le,te,se.width,se.height,0,ce,V,se.data)}else if(R.isDataArrayTexture)if(Se){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,vt,te,le.width,le.height,le.depth),qe)if(R.layerUpdates.size>0){let Le=tf(le.width,le.height,R.format,R.type);for(let it of R.layerUpdates){let bt=le.data.subarray(it*Le/le.data.BYTES_PER_ELEMENT,(it+1)*Le/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,le.width,le.height,1,ce,V,bt)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ce,V,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,le.width,le.height,le.depth,0,ce,V,le.data);else if(R.isData3DTexture)Se?(Pe&&t.texStorage3D(s.TEXTURE_3D,vt,te,le.width,le.height,le.depth),qe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ce,V,le.data)):t.texImage3D(s.TEXTURE_3D,0,te,le.width,le.height,le.depth,0,ce,V,le.data);else if(R.isFramebufferTexture){if(Pe)if(Se)t.texStorage2D(s.TEXTURE_2D,vt,te,le.width,le.height);else{let Le=le.width,it=le.height;for(let bt=0;bt<vt;bt++)t.texImage2D(s.TEXTURE_2D,bt,te,Le,it,0,ce,V,null),Le>>=1,it>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in s){let Le=s.canvas;if(Le.hasAttribute("layoutsubtree")||Le.setAttribute("layoutsubtree","true"),le.parentNode!==Le){Le.appendChild(le),u.add(R),Le.onpaint=it=>{let bt=it.changedElements;for(let Be of u)bt.includes(Be.image)&&(Be.needsUpdate=!0)},Le.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,le);else{let bt=s.RGBA,Be=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,Be,Dt,le)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(be.length>0){if(Se&&Pe){let Le=Ve(be[0]);t.texStorage2D(s.TEXTURE_2D,vt,te,Le.width,Le.height)}for(let Le=0,it=be.length;Le<it;Le++)se=be[Le],Se?qe&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,ce,V,se):t.texImage2D(s.TEXTURE_2D,Le,te,ce,V,se);R.generateMipmaps=!1}else if(Se){if(Pe){let Le=Ve(le);t.texStorage2D(s.TEXTURE_2D,vt,te,Le.width,Le.height)}qe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,V,le)}else t.texImage2D(s.TEXTURE_2D,0,te,ce,V,le);I(R)&&R.mipmapsAutoUpdate===!0&&M(Me),ye.__version=me.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ot(z,R,ne){if(R.image.length!==6)return;let Me=Ke(z,R),pe=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+ne);let me=n.get(pe);if(pe.version!==me.__version||Me===!0){t.activeTexture(s.TEXTURE0+ne);let ye=wt.getPrimaries(wt.workingColorSpace),ue=R.colorSpace===us?null:wt.getPrimaries(R.colorSpace),le=R.colorSpace===us||ye===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ce=R.isCompressedTexture||R.image[0].isCompressedTexture,V=R.image[0]&&R.image[0].isDataTexture,te=[];for(let Be=0;Be<6;Be++)!ce&&!V?te[Be]=y(R.image[Be],!0,i.maxCubemapSize):te[Be]=V?R.image[Be].image:R.image[Be],te[Be]=De(R,te[Be]);let se=te[0],be=r.convert(R.format,R.colorSpace),Se=r.convert(R.type),Pe=T(R.internalFormat,be,Se,R.normalized,R.colorSpace),qe=R.isVideoTexture!==!0,vt=me.__version===void 0||Me===!0,Le=pe.dataReady,it=_(R,se);Je(s.TEXTURE_CUBE_MAP,R);let bt;if(R.isDepthTexture){if(Pe=x(R.format===hs,R.type),vt)if(qe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Pe,se.width,se.height);else for(let Be=0;Be<6;Be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,se.width,se.height,0,be,Se,null)}else if(ce){qe&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,it,Pe,se.width,se.height);for(let Be=0;Be<6;Be++){bt=te[Be].mipmaps;for(let Dt=0;Dt<bt.length;Dt++){let $t=bt[Dt];R.format!==qn?be!==null?qe?Le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt,0,0,$t.width,$t.height,be,$t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt,Pe,$t.width,$t.height,0,$t.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt,0,0,$t.width,$t.height,be,Se,$t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt,Pe,$t.width,$t.height,0,be,Se,$t.data)}}}else{if(bt=R.mipmaps,qe&&vt){bt.length>0&&it++;let Be=Ve(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,it,Pe,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(V){qe?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,te[Be].width,te[Be].height,be,Se,te[Be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,te[Be].width,te[Be].height,0,be,Se,te[Be].data);for(let Dt=0;Dt<bt.length;Dt++){let di=bt[Dt].image[Be].image;qe?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt+1,0,0,di.width,di.height,be,Se,di.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt+1,Pe,di.width,di.height,0,be,Se,di.data)}}else{qe?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,be,Se,te[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,be,Se,te[Be]);for(let Dt=0;Dt<bt.length;Dt++){let $t=bt[Dt];qe?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt+1,0,0,be,Se,$t.image[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Dt+1,Pe,be,Se,$t.image[Be])}}}I(R)&&R.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),me.__version=pe.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Tt(z,R,ne,Me,pe,me){let ye=r.convert(ne.format,ne.colorSpace),ue=r.convert(ne.type),le=T(ne.internalFormat,ye,ue,ne.normalized,ne.colorSpace),ce=n.get(R),V=n.get(ne);if(V.__renderTarget=R,!ce.__hasExternalTextures){let te=Math.max(1,R.width>>me),se=Math.max(1,R.height>>me);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,me,le,te,se,R.depth,0,ye,ue,null):t.texImage2D(pe,me,le,te,se,0,ye,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,z),ie(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,pe,V.__webglTexture,0,we(R)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,pe,V.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(z,R,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,z),R.depthBuffer){let Me=R.depthTexture,pe=Me&&Me.isDepthTexture?Me.type:null,me=x(R.stencilBuffer,pe),ye=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ie(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(R),me,R.width,R.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(R),me,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,z)}else{let Me=R.textures;for(let pe=0;pe<Me.length;pe++){let me=Me[pe],ye=r.convert(me.format,me.colorSpace),ue=r.convert(me.type),le=T(me.internalFormat,ye,ue,me.normalized,me.colorSpace);ie(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(R),le,R.width,R.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(R),le,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,le,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(z,R,ne){let Me=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pe=n.get(R.depthTexture);pe.__renderTarget=R;let me=Me?R.depthTexture.image[0]:R.depthTexture.image;(!pe.__webglTexture||me.width!==R.width||me.height!==R.height)&&(me.width=R.width,me.height=R.height,R.depthTexture.needsUpdate=!0),Me?ee(R.depthTexture,0):Q(R.depthTexture,0);let ye=pe.__webglTexture,ue=we(R),le=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ce=R.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(R.depthTexture.format===ns)ie(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,le,ye,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,ce,le,ye,0);else if(R.depthTexture.format===hs)ie(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,le,ye,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,ce,le,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(z){let R=n.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let Me=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Me){let pe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Me.removeEventListener("dispose",pe)};Me.addEventListener("dispose",pe),R.__depthDisposeCallback=pe}R.__boundDepthTexture=Me}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(ne)for(let Me=0;Me<6;Me++)_e(R.__webglFramebuffer[Me],z,Me);else z.texture.mipmaps.length>0?_e(R.__webglFramebuffer[0],z,0):_e(R.__webglFramebuffer,z,0);else if(ne){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]===void 0)R.__webglDepthbuffer[Me]=s.createRenderbuffer(),_t(R.__webglDepthbuffer[Me],z,!1);else{let pe=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,me)}}else if(z.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),_t(R.__webglDepthbuffer,z,!1);else{let pe=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(z,R,ne){let Me=n.get(z);R!==void 0&&Tt(Me.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ae(z)}function et(z){let R=z.texture,ne=n.get(z),Me=n.get(R);z.addEventListener("dispose",k),U(z);let pe=z.textures,me=z.isWebGLCubeRenderTarget===!0,ye=pe.length>1;if(ye||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=R.version,o.memory.textures++),me){ne.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(R.mipmaps.length>0){ne.__webglFramebuffer[ue]=[];for(let le=0;le<R.mipmaps.length;le++)ne.__webglFramebuffer[ue][le]=s.createFramebuffer()}else ne.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ue=0;ue<R.mipmaps.length;ue++)ne.__webglFramebuffer[ue]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ue=0,le=pe.length;ue<le;ue++){let ce=n.get(pe[ue]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(z.samples>0&&ie(z)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ue=0;ue<pe.length;ue++){let le=pe[ue];ne.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[ue]);let ce=r.convert(le.format,le.colorSpace),V=r.convert(le.type),te=T(le.internalFormat,ce,V,le.normalized,le.colorSpace,z.isXRRenderTarget===!0),se=we(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,se,te,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ne.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(ne.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Je(s.TEXTURE_CUBE_MAP,R);for(let ue=0;ue<6;ue++)if(R.mipmaps.length>0)for(let le=0;le<R.mipmaps.length;le++)Tt(ne.__webglFramebuffer[ue][le],z,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,le);else Tt(ne.__webglFramebuffer[ue],z,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);I(R)?M(s.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let ue=0,le=pe.length;ue<le;ue++){let ce=pe[ue],V=n.get(ce),te=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(te=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),Je(te,ce),Tt(ne.__webglFramebuffer,z,ce,s.COLOR_ATTACHMENT0+ue,te,0),I(ce)&&M(te)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ue=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Me.__webglTexture),Je(ue,R),R.mipmaps.length>0)for(let le=0;le<R.mipmaps.length;le++)Tt(ne.__webglFramebuffer[le],z,R,s.COLOR_ATTACHMENT0,ue,le);else Tt(ne.__webglFramebuffer,z,R,s.COLOR_ATTACHMENT0,ue,0);I(R)?M(ue):R.mipmaps.length>0&&s.texParameteri(ue,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}z.depthBuffer&&Ae(z)}function H(z){let R=z.textures;for(let ne=0,Me=R.length;ne<Me;ne++){let pe=R[ne];if(I(pe)&&pe.mipmapsAutoUpdate===!0){let me=w(z),ye=n.get(pe).__webglTexture;t.bindTexture(me,ye),M(me),t.unbindTexture()}}}let he=[];function J(z){if(z.samples>0){if(ie(z)===!1){let R=z.textures,ne=z.width,Me=z.height,pe=s.COLOR_BUFFER_BIT,me=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(z),ue=R.length>1;if(ue)for(let ce=0;ce<R.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ce=0;ce<R.length;ce++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);let V=n.get(R[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,ne,Me,0,0,ne,Me,pe,s.NEAREST),c===!0&&(he.length=0,he.push(s.COLOR_ATTACHMENT0+ce),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&he.push(me),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<R.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);let V=n.get(R[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){let R=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function we(z){return Math.min(i.maxSamples,z.samples)}function ie(z){let R=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Oe(z){let R=o.render.frame;h.get(z)!==R&&(h.set(z,R),z.update())}function De(z,R){let ne=z.colorSpace,Me=z.format,pe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==zn&&ne!==us&&(wt.getTransfer(ne)===kt?(Me!==qn||pe!==Zn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",ne)),R}function Ve(z){return typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame!="undefined"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=de,this.resetTextureUnits=F,this.getTextureUnits=G,this.setTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=ge,this.setupRenderTarget=et,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ie,this.dispose=S}function mb(s,e){function t(n,i=us){let r,o=wt.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===fc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return s.BYTE;if(n===Ou)return s.SHORT;if(n===po)return s.UNSIGNED_SHORT;if(n===uc)return s.INT;if(n===ci)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===Ei)return s.HALF_FLOAT;if(n===Bu)return s.ALPHA;if(n===Hu)return s.RGB;if(n===qn)return s.RGBA;if(n===ns)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===pc)return s.RED;if(n===va)return s.RED_INTEGER;if(n===Ts)return s.RG;if(n===mc)return s.RG_INTEGER;if(n===gc)return s.RGBA_INTEGER;if(n===_a||n===ya||n===Ma||n===ba)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===_c||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===bc||n===Sc||n===wc||n===Ec||n===Sa||n===Tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===bc)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wc)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Uc||n===Fc||n===Oc||n===zc||n===kc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Gc||n===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===Xc||n===wa||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
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

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:gb,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends vi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding!="undefined",g=new gf,m={},y=t.getContextAttributes(),I=null,M=null,w=[],T=[],x=new lt,_=null,U=null,A=new en;A.viewport=new Vt;let B=new en;B.viewport=new Vt;let k=[A,B],O=new ic,P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new no,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new no,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new no,w[Y]=Q),Q.getHandSpace()};function L(Y){let Q=T.indexOf(Y.inputSource);if(Q===-1)return;let K=w[Q];K!==void 0&&(K.update(Y.inputSource,Y.frame,l||o),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function C(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",D);for(let Y=0;Y<w.length;Y++){let Q=T[Y];Q!==null&&(T[Y]=null,w[Y].disconnect(Q))}P=null,S=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(I),d=null,f=null,u=null,i=null,M=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),U!==null){let Y=U.camera;Y.fov=U.fov,Y.zoom=U.zoom,Y.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(I=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",C),i.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,W=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?hs:ns,W=y.stencil?_r:ci);let Ee={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ii(f.textureWidth,f.textureHeight,{format:qn,type:Zn,depthTexture:new is(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ii(d.framebufferWidth,d.framebufferHeight,{format:qn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(Y){for(let Q=0;Q<Y.removed.length;Q++){let K=Y.removed[Q],W=T.indexOf(K);W>=0&&(T[W]=null,w[W].disconnect(K))}for(let Q=0;Q<Y.added.length;Q++){let K=Y.added[Q],W=T.indexOf(K);if(W===-1){for(let Ee=0;Ee<w.length;Ee++)if(Ee>=T.length){T.push(K),W=Ee;break}else if(T[Ee]===null){T[Ee]=K,W=Ee;break}if(W===-1)break}let ee=w[W];ee&&ee.connect(K)}}function b(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,K=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(K=g.depthFar)),O.near=B.near=A.near=Q,O.far=B.far=A.far=K,(P!==O.near||S!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,S=O.far),O.layers.mask=Y.layers.mask|6,A.layers.mask=O.layers.mask&-5,B.layers.mask=O.layers.mask&-3;let W=Y.parent,ee=O.cameras;b(O,W);for(let Ee=0;Ee<ee.length;Ee++)b(ee[Ee],W);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),U===null&&Y.isPerspectiveCamera&&(U={camera:Y,fov:Y.fov,zoom:Y.zoom}),F(Y,O,W)};function F(Y,Q,K){K===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let G=null;function Z(Y,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){let K=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let W=!1;K.length!==O.cameras.length&&(O.cameras.length=0,W=!0);for(let Ie=0;Ie<K.length;Ie++){let Je=K[Ie],Ke=null;if(d!==null)Ke=d.getViewport(Je);else{let dt=u.getViewSubImage(f,Je);Ke=dt.viewport,Ie===0&&(e.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(M))}let ke=k[Ie];ke===void 0&&(ke=new en,ke.layers.enable(Ie),ke.viewport=new Vt,k[Ie]=ke),ke.matrix.fromArray(Je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ie===0&&(O.matrix.copy(ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),W===!0&&O.cameras.push(ke)}let ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ie=u.getDepthInformation(K[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,i.renderState)}if(ee&&ee.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ie=0;Ie<K.length;Ie++){let Je=K[Ie].camera;if(Je){let Ke=m[Je];Ke||(Ke=new aa,m[Je]=Ke);let ke=u.getCameraImage(Je);Ke.sourceTexture=ke}}}}for(let K=0;K<w.length;K++){let W=T[K],ee=w[K];W!==null&&ee!==void 0&&ee.update(W,Q,l||o)}G&&G(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let de=new Gm;de.setAnimationLoop(Z),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}},vb=new rt,jm=new xt;jm.set(-1,0,0,0,1,0,0,0,1);function _b(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ju(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,I,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,I):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),I=y.envMap,M=y.envMapRotation;I&&(g.envMap.value=I,g.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,I){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=I*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yb(s,e,t,n){let i={},r={};function o(y,I){let M=I.program;n.uniformBlockBinding(y,M,i[y.id])}function a(y,I){let M=i[y.id];M===void 0&&(p(y),M=c(y),i[y.id]=M,y.addEventListener("dispose",g));let w=I.program;n.updateUBOMapping(y,w);let T=e.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let I=s.createBuffer(),M=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),I}function l(y){let I=i[y.id],M=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let T=0,x=M.length;T<x;T++){let _=M[T];if(Array.isArray(_))for(let U=0,A=_.length;U<A;U++)h(_[U],T,U,w);else h(_,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,I,M,w){if(f(y,I,M,w)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let _=0;for(let U=0;U<x.length;U++){let A=x[U],B=v(A,!0);u(A,y.__data,_),_+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,y.__data)}}function u(y,I,M){typeof y=="number"||typeof y=="boolean"?I[M]=y:y.isMatrix3?(I[M]=y.elements[0],I[M+1]=y.elements[1],I[M+2]=y.elements[2],I[M+3]=0,I[M+4]=y.elements[3],I[M+5]=y.elements[4],I[M+6]=y.elements[5],I[M+7]=0,I[M+8]=y.elements[6],I[M+9]=y.elements[7],I[M+10]=y.elements[8],I[M+11]=0):ArrayBuffer.isView(y)?I.set(y.subarray(0,I.length-M),M):y.toArray(I,M)}function f(y,I,M,w){let T=y.value,x=I+"_"+M;if(Array.isArray(T)){w[x]===void 0&&(w[x]=[]);let _=w[x],U=!1;for(let A=0;A<T.length;A++)d(T[A],_,A)===!0&&(U=!0);return U}return d(T,w,x)}function d(y,I,M){if(I[M]===void 0)return typeof y=="number"||typeof y=="boolean"?I[M]=y:ArrayBuffer.isView(y)?I[M]=y.slice():I[M]=y.clone(),!0;{let w=I[M];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return I[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let I=y.uniforms,M=0,w=16;for(let x=0,_=I.length;x<_;x++){let U=Array.isArray(I[x])?I[x]:[I[x]];for(let A=0,B=U.length;A<B;A++){let k=U[A],O=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(I[x])||Array.isArray(k.value),S=M;for(let C=0,D=O.length;C<D;C++){let b=O[C],F=v(b,P),G=M%w,Z=G%F.boundary,de=G+Z;M+=Z,de!==0&&w-de<F.storage&&(M+=w-de),C===0&&(S=M),M+=F.storage}let L=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new L((M-S)/Float32Array.BYTES_PER_ELEMENT),k.__offset=S}}let T=M%w;return T>0&&(M+=w-T),y.__size=M,y.__cache={},this}function v(y,I){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):at("WebGLRenderer: Unsupported uniform value type.",y),I===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(y){let I=y.target;I.removeEventListener("dispose",g),s.deleteBuffer(i[I.id]),delete i[I.id],delete r[I.id]}function m(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:m}}var Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function bb(){return Oi===null&&(Oi=new ts(Mb,16,16,Ts,Ei),Oi.name="DFG_LUT",Oi.minFilter=fn,Oi.magFilter=fn,Oi.wrapS=Xn,Oi.wrapT=Xn,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var xo=class{constructor(e={}){let{canvas:t=fm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Zn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,g=new Set([gc,mc,va]),m=new Set([Zn,ci,po,_r,fc,dc]),y=new Uint32Array(4),I=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,x=[],_=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,B=!1,k=null,O=null,P=null,S=null;this._outputColorSpace=zt;let L=0,C=0,D=null,b=-1,F=null,G=new Vt,Z=new Vt,de=null,Y=new Ce(0),Q=0,K=t.width,W=t.height,ee=1,Ee=null,Te=null,Ie=new Vt(0,0,K,W),Je=new Vt(0,0,K,W),Ke=!1,ke=new _i,dt=new ta,Ut=!1,Ot=!1,Tt=new rt,_t=new q,_e=new Vt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function et(){return D===null?ee:1}let H=n;function he(N,$){return t.getContext(N,$)}let J,we,ie,Oe,De,Ve,z,R,ne,Me,pe,me,ye,ue,le,ce,V,te,se,be,Se,Pe,qe;try{let N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Be,!1),H===null){let $="webgl2";if(H=he($,N),H===null)throw he($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(N){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),gt("WebGLRenderer: "+N.message),N}function vt(){J=new Ny(H),J.init(),Se=new mb(H,J),we=new by(H,J,e,Se),ie=new db(H,J),we.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),O=H.createFramebuffer(),P=H.createFramebuffer(),S=H.createFramebuffer(),Oe=new Fy(H),De=new QM,Ve=new pb(H,J,ie,De,we,Se,Oe),z=new Ly(A),R=new zx(H),Pe=new yy(H,R),ne=new Dy(H,R,Oe,Pe),Me=new zy(H,ne,R,Pe,Oe),te=new Oy(H,we,Ve),le=new Sy(De),pe=new jM(A,z,J,we,Pe,le),me=new _b(A,De),ye=new tb,ue=new ab(J),V=new _y(A,z,ie,Me,p,c),ce=new fb(A,Me,we),qe=new yb(H,Oe,we,ie),se=new My(H,J,Oe),be=new Uy(H,J,Oe),Oe.programs=pe.programs,A.capabilities=we,A.extensions=J,A.properties=De,A.renderLists=ye,A.shadowMap=ce,A.state=ie,A.info=Oe}v!==Zn&&(U=new By(v,t.width,t.height,a,i,r));let Le=new xf(A,H);this.xr=Le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let N=J.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=J.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(N){N!==void 0&&(ee=N,this.setSize(K,W,!1))},this.getSize=function(N){return N.set(K,W)},this.setSize=function(N,$,fe=!0){if(Le.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,W=$,t.width=Math.floor(N*ee),t.height=Math.floor($*ee),fe===!0&&(t.style.width=N+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(K*ee,W*ee).floor()},this.setDrawingBufferSize=function(N,$,fe){K=N,W=$,ee=fe,t.width=Math.floor(N*fe),t.height=Math.floor($*fe),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(v===Zn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(Ie)},this.setViewport=function(N,$,fe,re){N.isVector4?Ie.set(N.x,N.y,N.z,N.w):Ie.set(N,$,fe,re),ie.viewport(G.copy(Ie).multiplyScalar(et()).round())},this.getScissor=function(N){return N.copy(Je)},this.setScissor=function(N,$,fe,re){N.isVector4?Je.set(N.x,N.y,N.z,N.w):Je.set(N,$,fe,re),ie.scissor(Z.copy(Je).multiplyScalar(et()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(N){ie.setScissorTest(Ke=N)},this.setOpaqueSort=function(N){Ee=N},this.setTransparentSort=function(N){Te=N},this.getClearColor=function(N){return N.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,fe=!0){let re=0;if(N){let oe=!1;if(D!==null){let Ne=D.texture.format;oe=g.has(Ne)}if(oe){let Ne=D.texture.type,Xe=m.has(Ne),ze=V.getClearColor(),He=V.getClearAlpha(),Qe=ze.r,ft=ze.g,St=ze.b;Xe?(y[0]=Qe,y[1]=ft,y[2]=St,y[3]=He,H.clearBufferuiv(H.COLOR,0,y)):(I[0]=Qe,I[1]=ft,I[2]=St,I[3]=He,H.clearBufferiv(H.COLOR,0,I))}else re|=H.COLOR_BUFFER_BIT}$&&(re|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),k=N},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),V.dispose(),ye.dispose(),ue.dispose(),Ve.dispose(),De.dispose(),z.dispose(),Me.dispose(),ne.dispose(),Pe.dispose(),qe.dispose(),pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Xa),Le.removeEventListener("sessionend",qa),Vi.stop()};function it(N){N.preventDefault(),Yo("WebGLRenderer: Context Lost."),B=!0}function bt(){Yo("WebGLRenderer: Context Restored."),B=!1;let N=Oe.autoReset,$=ce.enabled,fe=ce.autoUpdate,re=ce.needsUpdate,oe=ce.type;vt(),Oe.autoReset=N,ce.enabled=$,ce.autoUpdate=fe,ce.needsUpdate=re,ce.type=oe}function Be(N){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Dt(N){let $=N.target;$.removeEventListener("dispose",Dt),$t($)}function $t(N){di(N),De.remove(N)}function di(N){let $=De.get(N).programs;$!==void 0&&($.forEach(function(fe){pe.releaseProgram(fe)}),N.isShaderMaterial&&pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,fe,re,oe,Ne){$===null&&($=Ae);let Xe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,ze=ds(N,$,fe,re,oe);ie.setMaterial(re,Xe);let He=fe.index,Qe=1;if(re.wireframe===!0){if(He=ne.getWireframeAttribute(fe),He===void 0)return;Qe=2}let ft=fe.drawRange,St=fe.attributes.position,$e=ft.start*Qe,Rt=(ft.start+ft.count)*Qe;Ne!==null&&($e=Math.max($e,Ne.start*Qe),Rt=Math.min(Rt,(Ne.start+Ne.count)*Qe)),He!==null?($e=Math.max($e,0),Rt=Math.min(Rt,He.count)):St!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,St.count));let Zt=Rt-$e;if(Zt<0||Zt===1/0)return;Pe.setup(oe,re,ze,fe,He);let Wt,Bt=se;if(He!==null&&(Wt=R.get(He),Bt=be,Bt.setIndex(Wt)),oe.isMesh)re.wireframe===!0?(ie.setLineWidth(re.wireframeLinewidth*et()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(oe.isLine){let xn=re.linewidth;xn===void 0&&(xn=1),ie.setLineWidth(xn*et()),oe.isLineSegments?Bt.setMode(H.LINES):oe.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else oe.isPoints?Bt.setMode(H.POINTS):oe.isSprite&&Bt.setMode(H.TRIANGLES);if(oe.isBatchedMesh)if(J.get("WEBGL_multi_draw"))Bt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let xn=oe._multiDrawStarts,je=oe._multiDrawCounts,hn=oe._multiDrawCount,Pt=He?R.get(He).bytesPerElement:1,Ri=De.get(re).currentProgram.getUniforms();for(let vn=0;vn<hn;vn++)Ri.setValue(H,"_gl_DrawID",vn),Bt.render(xn[vn]/Pt,je[vn])}else if(oe.isInstancedMesh)Bt.renderInstances($e,Zt,oe.count);else if(fe.isInstancedBufferGeometry){let xn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,je=Math.min(fe.instanceCount,xn);Bt.renderInstances($e,Zt,je)}else Bt.render($e,Zt)};function Us(N,$,fe,re){k!==null&&N.isNodeMaterial&&k.setObject(re,N),Ut===!0&&le.setState(N,fe,!1),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=En,N.needsUpdate=!0,Vn(N,$,re),N.side=Di,N.needsUpdate=!0,Vn(N,$,re),N.side=sn):Vn(N,$,re)}this.compile=function(N,$,fe=null){fe===null&&(fe=N),k!==null&&k.renderStart(N,$,fe),T=ue.get(fe),T.init($),_.push(T),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(T.pushLight(oe),oe.castShadow&&T.pushShadow(oe))}),N!==fe&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(T.pushLight(oe),oe.castShadow&&T.pushShadow(oe))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Ot=this.localClippingEnabled,Ut=le.init(this.clippingPlanes,Ot),Ut===!0&&le.setGlobalState(this.clippingPlanes,$),k!==null&&ce.render(T.state.shadowsArray,fe,$);let re=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Ne=oe.material;if(Ne)if(Array.isArray(Ne))for(let Xe=0;Xe<Ne.length;Xe++){let ze=Ne[Xe];Us(ze,fe,$,oe),re.add(ze)}else Us(Ne,fe,$,oe),re.add(Ne)}),T=_.pop(),k!==null&&k.renderEnd(),re},this.compileAsync=function(N,$,fe=null){let re=this.compile(N,$,fe);return new Promise(oe=>{function Ne(){if(re.forEach(function(Xe){let He=De.get(Xe).currentProgram;(He===void 0||He.isReady())&&re.delete(Xe)}),re.size===0){oe(N);return}setTimeout(Ne,10)}J.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Eo=null;function Lh(N){Eo&&Eo(N)}function Xa(){Vi.stop()}function qa(){Vi.start()}let Vi=new Gm;Vi.setAnimationLoop(Lh),typeof self!="undefined"&&Vi.setContext(self),this.setAnimationLoop=function(N){Eo=N,Le.setAnimationLoop(N),N===null?Vi.stop():Vi.start()},Le.addEventListener("sessionstart",Xa),Le.addEventListener("sessionend",qa),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;k!==null&&k.renderStart(N,$);let fe=Le.enabled===!0&&Le.isPresenting===!0,re=U!==null&&(D===null||fe)&&U.begin(A,D);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera($),$=Le.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,$,D),T=ue.get(N,_.length),T.init($),T.state.textureUnits=Ve.getTextureUnits(),_.push(T),Tt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?dt.setFromArrayCamera($):ke.setFromProjectionMatrix(Tt,ri,$.reversedDepth),Ot=this.localClippingEnabled,Ut=le.init(this.clippingPlanes,Ot),w=ye.get(N,x.length),w.init(),x.push(w),this.info.render.frame++,Le.enabled===!0&&Le.isPresenting===!0){let Xe=A.xr.getDepthSensingMesh();Xe!==null&&Wi(Xe,$,-1/0,A.sortObjects)}Wi(N,$,0,A.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(Ee,Te),ge=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ge&&V.addToRenderList(w,N),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&le.beginShadows();let oe=T.state.shadowsArray;if(ce.render(oe,N,$),Ut===!0&&le.endShadows(),(re&&U.hasRenderPass())===!1){let Xe=w.opaque,ze=w.transmissive;if(T.setupLights(),$.isArrayCamera){let He=$.cameras;if(ze.length>0)for(let Qe=0,ft=He.length;Qe<ft;Qe++){let St=He[Qe];Ai(Xe,ze,N,St)}ge&&V.render(N);for(let Qe=0,ft=He.length;Qe<ft;Qe++){let St=He[Qe];Ya(w,N,St,St.viewport)}}else ze.length>0&&Ai(Xe,ze,N,$),ge&&V.render(N),Ya(w,N,$)}D!==null&&C===0&&(Ve.updateMultisampleRenderTarget(D),Ve.updateRenderTargetMipmap(D)),re&&U.end(A),N.isScene===!0&&N.onAfterRender(A,N,$),Pe.resetDefaultState(),b=-1,F=null,_.pop(),_.length>0?(T=_[_.length-1],Ve.setTextureUnits(T.state.textureUnits),Ut===!0&&le.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,k!==null&&k.renderEnd()};function Wi(N,$,fe,re){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){let Xe=$.isArrayCamera?dt:ke;if(!N.frustumCulled||N.intersectsFrustum(Xe)){re&&_e.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Tt);let ze=Me.update(N),He=N.material;He.visible&&w.push(N,ze,He,fe,_e.z,null,$)}}else if(N.isMesh||N.isLine||N.isPoints){let Xe=$.isArrayCamera?dt:ke;if(!N.frustumCulled||N.intersectsFrustum(Xe)){let ze=Me.update(N),He=N.material;if(re&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),_e.copy(N.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),_e.copy(ze.boundingSphere.center)),_e.applyMatrix4(N.matrixWorld).applyMatrix4(Tt)),Array.isArray(He)){let Qe=ze.groups;for(let ft=0,St=Qe.length;ft<St;ft++){let $e=Qe[ft],Rt=He[$e.materialIndex];Rt&&Rt.visible&&w.push(N,ze,Rt,fe,_e.z,$e,$)}}else He.visible&&w.push(N,ze,He,fe,_e.z,null,$)}}}let Ne=N.children;for(let Xe=0,ze=Ne.length;Xe<ze;Xe++)Wi(Ne[Xe],$,fe,re)}function Ya(N,$,fe,re){let{opaque:oe,transmissive:Ne,transparent:Xe}=N;T.setupLightsView(fe),Ut===!0&&le.setGlobalState(A.clippingPlanes,fe),re&&ie.viewport(G.copy(re)),oe.length>0&&Xi(oe,$,fe),Ne.length>0&&Xi(Ne,$,fe),Xe.length>0&&Xi(Xe,$,fe),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ai(N,$,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[re.id]===void 0){let $e=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[re.id]=new ii(1,1,{generateMipmaps:!0,type:$e?Ei:Zn,minFilter:li,samples:Math.max(4,we.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[re.id],Xe=re.viewport||G;Ne.setSize(Xe.z*A.transmissionResolutionScale,Xe.w*A.transmissionResolutionScale);let ze=A.getRenderTarget(),He=A.getActiveCubeFace(),Qe=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(Y),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),ge&&V.render(fe);let ft=A.toneMapping;A.toneMapping=Ui;let St=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),T.setupLightsView(re),Ut===!0&&le.setGlobalState(A.clippingPlanes,re),Xi(N,fe,re),Ve.updateMultisampleRenderTarget(Ne),Ve.updateRenderTargetMipmap(Ne),J.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Rt=0,Zt=$.length;Rt<Zt;Rt++){let Wt=$[Rt],{object:Bt,geometry:xn,material:je,group:hn}=Wt;if(je.side===sn&&Bt.layers.test(re.layers)){let Pt=je.side;je.side=En,je.needsUpdate=!0,Nn(Bt,fe,re,xn,je,hn),je.side=Pt,je.needsUpdate=!0,$e=!0}}$e===!0&&(Ve.updateMultisampleRenderTarget(Ne),Ve.updateRenderTargetMipmap(Ne))}A.setRenderTarget(ze,He,Qe),A.setClearColor(Y,Q),St!==void 0&&(re.viewport=St),A.toneMapping=ft}function Xi(N,$,fe){let re=$.isScene===!0?$.overrideMaterial:null;for(let oe=0,Ne=N.length;oe<Ne;oe++){let Xe=N[oe],{object:ze,geometry:He,group:Qe}=Xe,ft=Xe.material;ft.allowOverride===!0&&re!==null&&(ft=re),ze.layers.test(fe.layers)&&Nn(ze,$,fe,He,ft,Qe)}}function Nn(N,$,fe,re,oe,Ne){k!==null&&oe.isNodeMaterial&&k.setObject(N,oe),N.onBeforeRender(A,$,fe,re,oe,Ne),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(A,$,fe,re,N,Ne),oe.transparent===!0&&oe.side===sn&&oe.forceSinglePass===!1?(oe.side=En,oe.needsUpdate=!0,A.renderBufferDirect(fe,$,re,oe,N,Ne),oe.side=Di,oe.needsUpdate=!0,A.renderBufferDirect(fe,$,re,oe,N,Ne),oe.side=sn):A.renderBufferDirect(fe,$,re,oe,N,Ne),N.onAfterRender(A,$,fe,re,oe,Ne)}function cn(N){let $=0;for(let fe of N)fe.texture!==null&&$++;return $}function Vn(N,$,fe){$.isScene!==!0&&($=Ae);let re=De.get(N),oe=T.state.lights,Ne=T.state.shadowsArray,Xe=oe.state.version,ze=pe.getParameters(N,oe.state,Ne,$,fe,T.state.lightProbeGridArray),He=pe.getProgramCacheKey(ze),Qe=re.programs;re.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;let ft=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;re.envMap=z.get(N.envMap||re.environment,ft),re.envMapRotation=re.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",Dt),Qe=new Map,re.programs=Qe,re.programVariants=new Map);let St=Qe.get(He);if(St!==void 0){if(re.currentProgram===St&&re.lightsStateVersion===Xe)return $n(N,ze),St}else ze.uniforms=pe.getUniforms(N),k!==null&&N.isNodeMaterial&&k.build(N,fe,ze),N.onBeforeCompile(ze,A),St=pe.acquireProgram(ze,He),Qe.set(He,St),re.uniforms=ze.uniforms;let $e=re.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=le.uniform),$n(N,ze),re.needsLights=Ja(N),re.lightsStateVersion=Xe,re.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.sunLights.value=oe.state.sun,$e.sunLightShadows.value=oe.state.sunShadow,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.sunShadowMatrix.value=oe.state.sunShadowMatrix,$e.sunShadowCascade.value=oe.state.sunShadowCascade,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.numLightProbeGrids=cn(T.state.lightProbeGridArray),re.currentProgram=St,re.uniformsList=null,St}function Ka(N,$,fe,re,oe){let Ne=De.get(N),Xe=Ne.currentProgram.id+","+re+","+oe,ze=Ne.programVariants.get(Xe);return ze===void 0?(ze=Vn(N,$,fe),Ne.programVariants.set(Xe,ze)):(Ne.currentProgram=ze,Ne.uniformsList=null,Ne.outputColorSpace=re,Ne.toneMapping=oe),ze}function To(N){if(N.uniformsList===null){let $=N.currentProgram.getUniforms();N.uniformsList=go.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function $n(N,$){let fe=De.get(N);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function ds(N,$,fe,re,oe){$.isScene!==!0&&($=Ae),Ve.resetTextureUnits();let Ne=$.fog,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,ze=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:wt.workingColorSpace,He=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Qe=z.get(re.envMap||Xe,He),ft=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!fe.morphAttributes.position,Rt=!!fe.morphAttributes.normal,Zt=!!fe.morphAttributes.color,Wt=Ui;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Wt=A.toneMapping);let Bt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,xn=Bt!==void 0?Bt.length:0,je=De.get(re),hn=T.state.lights;if(Ut===!0&&(Ot===!0||N!==F)){let Ht=N===F&&re.id===b;le.setState(re,N,Ht)}let Pt=!1,Ri=!1;re.version===je.__version?je.needsLights&&je.lightsStateVersion!==hn.state.version||oe.isBatchedMesh&&je.batching===!1||!oe.isBatchedMesh&&je.batching===!0||oe.isBatchedMesh&&je.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&je.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&je.instancing===!1||!oe.isInstancedMesh&&je.instancing===!0||oe.isSkinnedMesh&&je.skinning===!1||!oe.isSkinnedMesh&&je.skinning===!0||oe.isInstancedMesh&&je.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&je.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&je.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&je.instancingMorph===!1&&oe.morphTexture!==null||je.envMap!==Qe||re.fog===!0&&je.fog!==Ne||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==le.numPlanes||je.numIntersection!==le.numIntersection)||je.vertexAlphas!==ft||je.vertexTangents!==St||je.morphTargets!==$e||je.morphNormals!==Rt||je.morphColors!==Zt||je.morphTargetsCount!==xn||je.numLightProbeGrids!==cn(T.state.lightProbeGridArray)?Pt=!0:(je.outputColorSpace!==ze||je.toneMapping!==Wt)&&(Ri=!0):(Pt=!0,je.__version=re.version);let vn=je.currentProgram;(Pt===!0||Ri===!0)&&(vn=Ri===!0?Ka(re,$,oe,ze,Wt):Vn(re,$,oe),k&&re.isNodeMaterial&&k.onUpdateProgram(re,vn,je));let ps=!1,pi=!1,jn=!1,Lt=vn.getUniforms(),jt=je.uniforms;if(ie.useProgram(vn.program)&&(ps=!0,pi=!0,jn=!0),re.id!==b&&(b=re.id,pi=!0),ps||F!==N){ie.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Lt.setValue(H,"projectionMatrix",N.projectionMatrix),Lt.setValue(H,"viewMatrix",N.matrixWorldInverse);let Qt=Lt.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,_t.setFromMatrixPosition(N.matrixWorld)),we.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),F!==N&&(F=N,pi=!0,jn=!0)}if(je.needsLights&&(hn.state.sunShadowMap.length>0&&Lt.setValue(H,"sunShadowMap",hn.state.sunShadowMap,Ve),hn.state.directionalShadowMap.length>0&&Lt.setValue(H,"directionalShadowMap",hn.state.directionalShadowMap,Ve),hn.state.spotShadowMap.length>0&&Lt.setValue(H,"spotShadowMap",hn.state.spotShadowMap,Ve),hn.state.pointShadowMap.length>0&&Lt.setValue(H,"pointShadowMap",hn.state.pointShadowMap,Ve)),oe.isSkinnedMesh){Lt.setOptional(H,oe,"bindMatrix"),Lt.setOptional(H,oe,"bindMatrixInverse");let Ht=oe.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Lt.setValue(H,"boneTexture",Ht.boneTexture,Ve))}oe.isBatchedMesh&&(Lt.setOptional(H,oe,"batchingTexture"),Lt.setValue(H,"batchingTexture",oe._matricesTexture,Ve),Lt.setOptional(H,oe,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",oe._indirectTexture,Ve),Lt.setOptional(H,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",oe._colorsTexture,Ve));let An=fe.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&te.update(oe,fe,vn),(pi||je.receiveShadow!==oe.receiveShadow)&&(je.receiveShadow=oe.receiveShadow,Lt.setValue(H,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=bb()),pi){if(Lt.setValue(H,"toneMappingExposure",A.toneMappingExposure),je.needsLights&&Za(jt,jn),Ne&&re.fog===!0&&me.refreshFogUniforms(jt,Ne),me.refreshMaterialUniforms(jt,re,ee,W,T.state.transmissionRenderTarget[N.id]),je.needsLights&&je.numLightProbeGrids>0){let Ht=M,Qt=0;for(let Dn of T.state.lightProbeGridArray)Dn.texture!==null&&(Ht.textures[Qt]=Dn.texture,Ht.min[Qt]=Dn.boundingBox.min,Ht.max[Qt]=Dn.boundingBox.max,Ht.resolution[Qt]=Dn.resolution,Qt++);for(let Dn in Ht)Ht[Dn].length=Qt;jt.probesSH.value=Ht.textures,jt.probesMin.value=Ht.min,jt.probesMax.value=Ht.max,jt.probesResolution.value=Ht.resolution}go.upload(H,To(je),jt,Ve)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(go.upload(H,To(je),jt,Ve),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(H,"center",oe.center),Lt.setValue(H,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(H,"normalMatrix",oe.normalMatrix),Lt.setValue(H,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){let Ht=re.uniformsGroups;for(let Qt=0,Dn=Ht.length;Qt<Dn;Qt++){let wn=Ht[Qt];qe.update(wn,vn),qe.bind(wn,vn)}}return vn}function Za(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.sunLights.needsUpdate=$,N.sunLightShadows.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Ja(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(N,$,fe){let re=De.get(N);re.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),De.get(N.texture).__webglTexture=$,De.get(N.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){let fe=De.get(N);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,fe=0){D=N,L=$,C=fe;let re=null,oe=!1,Ne=!1;if(N){let ze=De.get(N);if(ze.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(H.FRAMEBUFFER,ze.__webglFramebuffer),G.copy(N.viewport),Z.copy(N.scissor),de=N.scissorTest,ie.viewport(G),ie.scissor(Z),ie.setScissorTest(de),b=-1;return}else if(ze.__webglFramebuffer===void 0)Ve.setupRenderTarget(N);else if(ze.__hasExternalTextures)Ve.rebindTextures(N,De.get(N.texture).__webglTexture,De.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ft=N.depthTexture;if(ze.__boundDepthTexture!==ft){if(ft!==null&&De.has(ft)&&(N.width!==ft.image.width||N.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(N)}}let He=N.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ne=!0);let Qe=De.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?re=Qe[$][fe]:re=Qe[$],oe=!0):N.samples>0&&Ve.useMultisampledRTT(N)===!1?re=De.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?re=Qe[fe]:re=Qe,G.copy(N.viewport),Z.copy(N.scissor),de=N.scissorTest}else G.copy(Ie).multiplyScalar(ee).floor(),Z.copy(Je).multiplyScalar(ee).floor(),de=Ke;if(fe!==0&&(re=O),ie.bindFramebuffer(H.FRAMEBUFFER,re)&&ie.drawBuffers(N,re),ie.viewport(G),ie.scissor(Z),ie.setScissorTest(de),oe){let ze=De.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,fe)}else if(Ne){let ze=$;for(let He=0;He<N.textures.length;He++){let Qe=De.get(N.textures[He]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+He,Qe.__webglTexture,fe,ze)}}else if(N!==null&&fe!==0){let ze=De.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,fe)}b=-1};function Ao(N){let $=De.get(N);return($.__readFormat!==N.format||$.__readType!==N.type)&&($.__readFormat=N.format,$.__readType=N.type,$.__formatReadable=we.textureFormatReadable(N.format),$.__typeReadable=we.textureTypeReadable(N.type)),$}this.readRenderTargetPixels=function(N,$,fe,re,oe,Ne,Xe,ze=0){if(!(N&&N.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=De.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He){ie.bindFramebuffer(H.FRAMEBUFFER,He);try{let Qe=N.textures[ze],ft=Qe.format,St=Qe.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze);let $e=Ao(Qe);if($e.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-re&&fe>=0&&fe<=N.height-oe&&H.readPixels($,fe,re,oe,Se.convert(ft),Se.convert(St),Ne)}finally{let Qe=D!==null?De.get(D).__webglFramebuffer:null;ie.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,$,fe,re,oe,Ne,Xe,ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=De.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He)if($>=0&&$<=N.width-re&&fe>=0&&fe<=N.height-oe){ie.bindFramebuffer(H.FRAMEBUFFER,He);let Qe=N.textures[ze],ft=Qe.format,St=Qe.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze);let $e=Ao(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.bufferData(H.PIXEL_PACK_BUFFER,Ne.byteLength,H.STREAM_READ),H.readPixels($,fe,re,oe,Se.convert(ft),Se.convert(St),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Zt=D!==null?De.get(D).__webglFramebuffer:null;ie.bindFramebuffer(H.FRAMEBUFFER,Zt);let Wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pm(H,Wt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ne),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Rt),H.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,fe=0){let re=Math.pow(2,-fe),oe=Math.floor(N.image.width*re),Ne=Math.floor(N.image.height*re),Xe=$!==null?$.x:0,ze=$!==null?$.y:0;Ve.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Xe,ze,oe,Ne),ie.unbindTexture()},this.copyTextureToTexture=function(N,$,fe=null,re=null,oe=0,Ne=0){let Xe,ze,He,Qe,ft,St,$e,Rt,Zt,Wt=N.isCompressedTexture?N.mipmaps[Ne]:N.image;if(fe!==null)Xe=fe.max.x-fe.min.x,ze=fe.max.y-fe.min.y,He=fe.isBox3?fe.max.z-fe.min.z:1,Qe=fe.min.x,ft=fe.min.y,St=fe.isBox3?fe.min.z:0;else{let Lt=Math.pow(2,-oe);Xe=Math.floor(Wt.width*Lt),ze=Math.floor(Wt.height*Lt),N.isDataArrayTexture?He=Wt.depth:N.isData3DTexture?He=Math.floor(Wt.depth*Lt):He=1,Qe=0,ft=0,St=0}re!==null?($e=re.x,Rt=re.y,Zt=re.z):($e=0,Rt=0,Zt=0);let Bt=Se.convert($.format),xn=Se.convert($.type),je;$.isData3DTexture?(Ve.setTexture3D($,0),je=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Ve.setTexture2DArray($,0),je=H.TEXTURE_2D_ARRAY):(Ve.setTexture2D($,0),je=H.TEXTURE_2D),ie.activeTexture(H.TEXTURE0),ie.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),ie.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ie.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);let hn=ie.getParameter(H.UNPACK_ROW_LENGTH),Pt=ie.getParameter(H.UNPACK_IMAGE_HEIGHT),Ri=ie.getParameter(H.UNPACK_SKIP_PIXELS),vn=ie.getParameter(H.UNPACK_SKIP_ROWS),ps=ie.getParameter(H.UNPACK_SKIP_IMAGES);ie.pixelStorei(H.UNPACK_ROW_LENGTH,Wt.width),ie.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt.height),ie.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),ie.pixelStorei(H.UNPACK_SKIP_ROWS,ft),ie.pixelStorei(H.UNPACK_SKIP_IMAGES,St);let pi=N.isDataArrayTexture||N.isData3DTexture,jn=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){let Lt=De.get(N),jt=De.get($),An=De.get(Lt.__renderTarget),Ht=De.get(jt.__renderTarget);ie.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Qt=0;Qt<He;Qt++)pi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get(N).__webglTexture,oe,St+Qt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get($).__webglTexture,Ne,Zt+Qt)),H.blitFramebuffer(Qe,ft,Qe+Xe,ft+ze,$e,Rt,$e+Xe,Rt+ze,H.DEPTH_BUFFER_BIT,H.NEAREST);ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||De.has(N)){let Lt=De.get(N),jt=De.get($);ie.bindFramebuffer(H.READ_FRAMEBUFFER,P),ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,S);for(let An=0;An<He;An++)pi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,St+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Lt.__webglTexture,oe),jn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.__webglTexture,Ne,Zt+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,jt.__webglTexture,Ne),oe!==0?H.blitFramebuffer(Qe,ft,Qe+Xe,ft+ze,$e,Rt,$e+Xe,Rt+ze,H.COLOR_BUFFER_BIT,H.NEAREST):jn?H.copyTexSubImage3D(je,Ne,$e,Rt,Zt+An,Qe,ft,Xe,ze):H.copyTexSubImage2D(je,Ne,$e,Rt,Qe,ft,Xe,ze);ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else jn?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(je,Ne,$e,Rt,Zt,Xe,ze,He,Bt,xn,Wt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(je,Ne,$e,Rt,Zt,Xe,ze,He,Bt,Wt.data):H.texSubImage3D(je,Ne,$e,Rt,Zt,Xe,ze,He,Bt,xn,Wt):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ne,$e,Rt,Xe,ze,Bt,xn,Wt.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ne,$e,Rt,Wt.width,Wt.height,Bt,Wt.data):H.texSubImage2D(H.TEXTURE_2D,Ne,$e,Rt,Xe,ze,Bt,xn,Wt);ie.pixelStorei(H.UNPACK_ROW_LENGTH,hn),ie.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt),ie.pixelStorei(H.UNPACK_SKIP_PIXELS,Ri),ie.pixelStorei(H.UNPACK_SKIP_ROWS,vn),ie.pixelStorei(H.UNPACK_SKIP_IMAGES,ps),Ne===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&H.generateMipmap(je),ie.unbindTexture()},this.initRenderTarget=function(N){De.get(N).__webglFramebuffer===void 0&&Ve.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ve.setTextureCube(N,0):N.isData3DTexture?Ve.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ve.setTexture2DArray(N,0):Ve.setTexture2D(N,0),ie.unbindTexture()},this.resetState=function(){L=0,C=0,D=null,ie.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Rs={};zd(Rs,{GROUPS:()=>yo,allMaterials:()=>Bb,altKitMaterial:()=>jf,clips:()=>$f,get:()=>Hi,getBase:()=>Db,groupLoaded:()=>lh,has:()=>Hn,load:()=>lg,loadGroups:()=>br,material:()=>Zf,prop:()=>Mn,releaseGPU:()=>Qf,setBase:()=>ah,tinted:()=>Mo,villagerTinted:()=>Jf});function eg(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new It;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let p=Qm(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Qm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let v=h.getComponent(f,p);a.setComponent(f+u,p,v)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function vf(s,e){if(e===Gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mo||e===Ta){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===mo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function th(s){let e=new Map,t=new Map,n=s.clone();return tg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tg(s.children[n],e.children[n],t)}var nh=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ef(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new ih(t,At.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ih(t,At.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=cs.extractUrlBase(e);o=cs.resolveURL(l,this.path)}else o=cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ao(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===og){try{o[At.KHR_BINARY_GLTF]=new Bf(e)}catch(u){i&&i(u);return}r=JSON.parse(o[At.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case At.KHR_MATERIALS_UNLIT:o[u]=new Sf;break;case At.KHR_DRACO_MESH_COMPRESSION:o[u]=new Hf(r,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:o[u]=new Gf;break;case At.KHR_MESH_QUANTIZATION:o[u]=new Vf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function wb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Kt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ai(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ur(h),l.distance=u;break;case"spot":l=new pa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Sf=class{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(i)}},wf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(r,r)}return Promise.all(i)}},Tf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Af=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Rf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Cf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,zt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},If=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Pf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],zn),Promise.all(i)}},Lf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Nf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],zn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,zt)),Promise.all(i)}},Df=class{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Uf=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ff=class{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Of=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},zf=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ih=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},kf=class{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==hi.TRIANGLES&&l.mode!==hi.TRIANGLE_STRIP&&l.mode!==hi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let v=new rt,g=new q,m=new Yt,y=new q(1,1,1),I=new ir(p.geometry,p.material,f);for(let w=0;w<f;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&y.fromBufferAttribute(c.SCALE,w),I.setMatrixAt(w,v.compose(g,m,y));let M=null;for(let w in c)if(w==="_COLOR_0"){let T=c[w];I.instanceColor=new kn(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let x=I.geometry;M=new It,M.name=x.name;for(let _ in x.attributes)M.setAttribute(_,x.attributes[_]);for(let _ in x.morphAttributes)M.morphAttributes[_]=x.morphAttributes[_];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let _ of x.groups)M.addGroup(_.start,_.count,_.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),I.geometry=M}let T=c[w];M.setAttribute(w,new kn(T.array,T.itemSize,T.normalized))}qt.prototype.copy.call(I,p),this.parser.assignFinalMaterial(I),d.push(I)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},og="glTF",Na=12,ng={JSON:1313821514,BIN:5130562},Bf=class{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Na,r=new DataView(e,Na),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===ng.JSON){let l=new Uint8Array(e,Na+o,a);this.content=n.decode(l)}else if(c===ng.BIN){let l=Na+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Xf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=_o[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let v=d.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}u(d)},a,l,zn,f)})})}},Gf=class{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Vf=class{constructor(){this.name=At.KHR_MESH_QUANTIZATION}},sh=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,v=p-l,g=-2*d+3*f,m=d-f,y=1-g,I=m-f+u;for(let M=0;M!==a;M++){let w=o[v+M+a],T=o[v+M+c]*h,x=o[p+M+a],_=o[p+M]*h;r[M]=y*w+I*T+g*x+m*_}return r}},Eb=new Yt,Wf=class extends sh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Eb.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ig={9728:tn,9729:fn,9984:hc,9985:fo,9986:vr,9987:li},sg={33071:Xn,33648:Jr,10497:Ms},_f={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tb={CUBICSPLINE:void 0,LINEAR:Qs,STEP:js},yf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ab(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ar({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function Mr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Rb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Cb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ib(s){let e,t=s.extensions&&s.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=s.indices+":"+Mf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Mf(s.targets[n]);return e}function Mf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function qf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Lb=new rt,Yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new lr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ga(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ao(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mr(r,a,i),ki(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(cs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=_f[i.type],a=_o[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new yt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=_f[i.type],l=_o[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,g;if(d&&d!==u){let m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,I=t.cache.get(y);I||(v=new l(a,m*d,i.count*d/h),I=new nr(v,d/h),t.cache.add(y,I)),g=new bs(I,c,f%d/h,p)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new yt(v,c,p);if(i.sparse!==void 0){let m=_f.SCALAR,y=_o[i.sparse.indices.componentType],I=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new y(o[1],I,i.sparse.count*m),T=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,_=w.length;x<_;x++){let U=w[x];if(g.setX(U,T[x*c]),c>=2&&g.setY(U,T[x*c+1]),c>=3&&g.setZ(U,T[x*c+2]),c>=4&&g.setW(U,T[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ig[f.magFilter]||fn,h.minFilter=ig[f.minFilter]||li,h.wrapS=sg[f.wrapS]||Ms,h.wrapT=sg[f.wrapT]||Ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){let m=new dn(g);m.needsUpdate=!0,d(m)}),t.load(cs.resolveURL(f,r.path),v,void 0,p)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),ki(f,o),f.userData.mimeType=o.mimeType||Pb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[At.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new oo,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ro,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ar}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[At.KHR_MATERIALS_UNLIT]){let u=i[At.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,zt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);let h=r.alphaMode||yf.OPAQUE;if(h===yf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn){let u=r.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],zn)}return r.emissiveTexture!==void 0&&o!==yn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(i,u,r),u})}createUniqueName(e){let t=Xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return rg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Ib(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[At.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=rg(new It,l,t),l.mode===hi.TRIANGLE_STRIP?f=f.then(d=>vf(d,Ta)):l.mode===hi.TRIANGLE_FAN&&(f=f.then(d=>vf(d,mo))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Ab(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let v=h[d],g=o[d],m,y=l[d];if(g.mode===hi.TRIANGLES||g.mode===hi.TRIANGLE_STRIP||g.mode===hi.TRIANGLE_FAN||g.mode===void 0){let I=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");I&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=I&&M?new Qo(v,y):new Mt(v,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===hi.LINES)m=new ia(v,y);else if(g.mode===hi.LINE_STRIP)m=new sr(v,y);else if(g.mode===hi.LINE_LOOP)m=new sa(v,y);else if(g.mode===hi.POINTS)m=new yi(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Cb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ki(m,r),g.extensions&&Mr(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Mr(i,u[0],r),u[0];let f=new Gt;r.extensions&&Mr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Zc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new rt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ea(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],v=d.target,g=v.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let I=0,M=f.length;I<M;I++){let w=f[I],T=d[I],x=p[I],_=v[I],U=g[I];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let A=n._createAnimationTracks(w,T,x,_,U);if(A)for(let B=0;B<A.length;B++)m.push(A[B])}let y=new Si(r,void 0,m);return ki(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Lb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new q().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new so:l.length>1?h=new Gt:l.length===1?h=l[0]:h=new qt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ki(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new rt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),ki(r,n),n.extensions&&Mr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(th(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Pn||f instanceof dn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}As[r.path]===As.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(As[r.path]){case As.weights:h=os;break;case As.rotation:h=as;break;case As.translation:case As.scale:h=ws;break;default:n.itemSize===1?h=os:h=ws;break}let u=i.interpolation!==void 0?Tb[i.interpolation]:Qs,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let v=new h(c[d]+"."+As[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof as?Wf:sh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Nb(s,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),a.normalized){let h=qf(_o[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new q,c=new q;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let v=qf(_o[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Jt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function rg(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Xf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return wt.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),ki(s,e),Nb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Rb(s,e.targets,t):s})}oi.enabled=!0;var oh="assets/models/";function ah(s){oh=s.endsWith("/")?s:s+"/"}function Db(){return oh}var yo={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},fs=new Map,Da=new Map,ui=new Map,Kf=null,Bi=null;function Ub(){return Kf||(Kf=new nh),Kf}function ag(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),ui.has(t))return ui.get(t);let n;return e==="window"?n=new yn({color:16777215,name:e,fog:!0}):(n=new pn({name:e,map:s.map||null,color:s.color?s.color.clone():new Ce(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=zt,n.map.anisotropy=2),ui.set(t,n),n}function Zf(s){return ui.get(s)}function Fb(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(ag);else{let i=t.material;t.material=ag(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&zb(e)}function Ob(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let c=a.getImageData(0,0,i.width,i.height).data,l=s.material.map.flipY;for(let h=0;h<t;h++){let u=r.getX(h)%1,f=r.getY(h)%1;u<0&&(u+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(u*i.width)),p=Math.min(i.height-1,Math.floor((l?1-f:f)*i.height));n[h]=Math.max(.05,c[(p*i.width+d)*4]/255)}}catch{}return n}function zb(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(l=>{let h=l.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||h.deleteAttribute(f);let u=l.material.name==="cloth";return h.setAttribute("aCloth",new yt(u?Ob(l):new Float32Array(h.attributes.position.count),1)),h}),c=eg(a,!1);if(!c)return;r.geometry.dispose(),r.geometry=c,r.userData.clothMerged=n.length>0;for(let l of o)l.parent.remove(l),l.geometry.dispose()}catch{}}var rh=new Map;function Jf(s){if(rh.has(s))return rh.get(s);let e=ui.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new Ce(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",rh.set(s,t),t}function lg(s,e){if(fs.has(s))return e&&e(),Promise.resolve(fs.get(s));if(Da.has(s))return Da.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{Ub().load(oh+s,r=>{try{Fb(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}fs.set(s,r),Da.delete(s),n(r)},void 0,r=>{Da.delete(s),i(r)})});return Da.set(s,t),t.then(n=>(e&&e(),n))}function br(s,e){let t=[];for(let r of s)for(let o of yo[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>lg(r,()=>{n++,e&&e(n,i)})))}function Hn(s){return fs.has(s)}function Hi(s){return fs.get(s)}function lh(s){return yo[s].every(e=>fs.has(e))}var kb={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function Mn(s,e){let t=fs.get(kb[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function $f(){let s=fs.get("characters/villager-anims.glb");return s?s.animations:[]}var Ua=new Map;function Mo(s,e,t){let n=s+"|"+e+(t||"");if(Ua.has(n))return Ua.get(n);let i=ui.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,Ua.set(n,r),r}function jf(){if(ui.has("fantasy-town-b"))return ui.get("fantasy-town-b");let s=ui.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",Bi||(Bi=new lr().load(oh+"textures/fantasy-town-b.png"),Bi.flipY=!1,Bi.colorSpace=zt,Bi.anisotropy=2,s.map&&(Bi.wrapS=s.map.wrapS,Bi.wrapT=s.map.wrapT)),e.map=Bi,ui.set("fantasy-town-b",e),e}function Bb(){return[...ui.values(),...Ua.values()]}function Qf(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of fs.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of ui.values())e(t),t.map&&e(t.map);for(let t of Ua.values())e(t);for(let t of rh.values())e(t);Bi&&e(Bi)}var bn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],Hb=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],ed=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],Gb=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],Vb=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],Wb=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],cg=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],hg=bn.map((s,e)=>({id:e,hex:s,name:Hb[e]})),ug=Gb.map((s,e)=>({id:e,name:s,node:ed[e]})),fg=Vb.map((s,e)=>({id:e,name:s,desc:Wb[e]}));var td={vampir:!0,iftiraci:!0};var fi={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ct=(s,e,t)=>s<e?e:s>t?t:s,nd=(s,e,t)=>s+(e-s)*t,Cs=s=>s*s*(3-2*s),an=(s,e)=>1-Math.exp(-s*e),Ye=Math.PI*2;function ln(s){return s=(s+Math.PI)%Ye,s<0&&(s+=Ye),s-Math.PI}function Gn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var Xb=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,qb=`
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
}`,Yb=`
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
}`,Kb=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function dg(s,e){let t=new Gt;t.name="sky",s.add(t);let n=new nn({vertexShader:Xb,fragmentShader:qb,side:En,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new Ce},uHor:{value:new Ce},uSun:{value:new Ce},uSunDir:{value:new q(0,1,0)},uMoonDir:{value:new q(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new Ce(.93,.95,1)}}}),i=new Mt(new ca(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=Gn(77),o=700,a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let g=0;g<o;g++){let m=r(),y=r(),I=m*Ye,M=.04+Math.pow(y,.8)*.96,w=Math.sqrt(1-M*M);a[g*3]=Math.cos(I)*w*420,a[g*3+1]=M*420,a[g*3+2]=Math.sin(I)*w*420,c[g]=1+Math.pow(r(),6)*3.2,l[g]=r()*3}let h=new It;h.setAttribute("position",new yt(a,3)),h.setAttribute("aSize",new yt(c,1)),h.setAttribute("aPhase",new yt(l,1));let u=new nn({vertexShader:Yb,fragmentShader:Kb,transparent:!0,depthWrite:!1,blending:Kn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new yi(h,u);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=Jb();t.add(d);let p=$b();return t.add(p),{group:t,update(g,m,y,I,M){let w=n.uniforms;M&&w.uMoonCol.value.copy(M),w.uTop.value.copy(g.top),w.uHor.value.copy(g.hor),w.uSun.value.copy(g.sun),w.uSunDir.value.copy(g.sunDir),w.uMoonDir.value.copy(g.moonDir),w.uSunVis.value=g.sunVis,w.uMoonVis.value=g.moonVis,w.uGlow.value=.6+g.dusk*1.4,u.uniforms.uTime.value=m,u.uniforms.uAlpha.value=g.stars,u.uniforms.uPx.value=I,f.visible=g.stars>.01,t.position.set(y.position.x,0,y.position.z),Fa.color.copy(g.hor).lerp(g.sun,.35).lerp(Zb,.55*(1-g.night)),Fa.color.multiplyScalar(.55+.45*(1-g.night*.8)),d.rotation.y=m*.004,d.visible=e.clouds,bo.uniforms.uFar.value.copy(g.hor),bo.uniforms.uNear.value.copy(g.gnd).lerp(g.hor,.35).multiplyScalar(.9),bo.uniforms.uTint.value.copy(g.sky)},dispose(){t.traverse(g=>{g.geometry&&g.geometry.dispose()}),n.dispose(),u.dispose(),Fa.dispose(),bo.dispose(),s.remove(t)}}}var Zb=new Ce(1,1,1),Fa=null,bo=null;function Jb(){let s=Gn(4242),e=[];for(let a=0;a<11;a++){let c=s()*Ye,l=210+s()*120,h=70+s()*55,u=3+Math.floor(s()*4);for(let f=0;f<u;f++){let d=new la(1,0),p=9+s()*12;d.scale(p*(1.3+s()*.6),p*.55,p),d.translate((f-u/2)*13+s()*5,s()*4,s()*8),d.rotateY(c+Math.PI/2),d.translate(Math.cos(c)*l,h,Math.sin(c)*l),e.push(d)}}let t=jb(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let c=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c*1.03}t.setAttribute("color",new yt(i,3)),Fa=new yn({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new Mt(t,Fa);return o.renderOrder=-8,o.frustumCulled=!1,o}function $b(){let s=Gn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let c=e.length/3,l=0;for(let h=0;h<=a.n;h++){let u=h/a.n*Ye,f=a.h*(.35+.65*Math.abs(Math.sin(u*3.1+a.k)*.6+Math.sin(u*7.3+1.7*a.k)*.3+(s()-.5)*.35));h===a.n&&(f=l),h===0&&(l=f);let d=Math.cos(u)*a.r,p=Math.sin(u)*a.r;if(e.push(d,-20,p,d,f,p),t.push(a.k,0,0,a.k,1,0),h<a.n){let v=c+h*2;n.push(v,v+2,v+1,v+1,v+2,v+3)}}}let r=new It;r.setAttribute("position",new Nt(e,3)),r.setAttribute("color",new Nt(t,3)),r.setIndex(n),bo=new nn({side:sn,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new Ce},uNear:{value:new Ce},uTint:{value:new Ce}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new Mt(r,bo);return o.renderOrder=-7,o.frustumCulled=!1,o}function jb(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new It;return i.setAttribute("position",new yt(t,3)),i}function ch(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function id(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=ch(t,n),a=ch(t+1,n),c=ch(t,n+1),l=ch(t+1,n+1);return o+(a-o)*i+(c-o)*r+(o-a-c+l)*i*r}function pg(s,e){return id(s,e)*.55+id(s*2.1,e*2.1)*.3+id(s*4.3,e*4.3)*.15}function mg(s,e){let r=[];for(let T=0;T<=56;T++){let x=T/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),c=new Float32Array(o*2),l=new Float32Array(o*3),h=[];for(let T=1;T<=56;T++)for(let x=0;x<120;x++){let _=1+(T-1)*120+x,U=1+(T-1)*120+(x+1)%120;if(T===1)h.push(0,U,_);else{let A=1+(T-2)*120+x,B=1+(T-2)*120+(x+1)%120;h.push(A,B,_,B,U,_)}}let u=new It;u.setAttribute("position",new yt(a,3)),u.setAttribute("uv",new yt(c,2)),u.setAttribute("color",new yt(l,3)),u.setIndex(h);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),p=new rr(f);p.colorSpace=zt,p.wrapS=p.wrapT=Xn,p.anisotropy=4;let v=new pn({map:p,vertexColors:!0}),g=new Mt(u,v);g.receiveShadow=!0,g.name="ground",g.renderOrder=-1,s.add(g);let m=30,y=45;function I(T,x){let _=Math.hypot(T,x);if(_<=m)return 0;let U=Cs(ct((_-m)/26,0,1)),A=pg(T*.018+3,x*.018-7),B=ct((_-m)/140,0,1);return U*(.6+A*3.5)+B*B*B*(8+A*14)}function M(){let T=0,x=(_,U)=>{let A=I(_,U);a[T*3]=_,a[T*3+1]=A,a[T*3+2]=U,c[T*2]=_/(2*y)+.5,c[T*2+1]=1-(U/(2*y)+.5);let B=Math.hypot(_,U),k=pg(_*.05,U*.05),O=ct((B-m)/60,0,1),P=ct(A/30,0,1),S=.92+(k-.5)*.22;l[T*3]=S*(1-O*.32)+P*.08,l[T*3+1]=S*(1-O*.22),l[T*3+2]=S*(1-O*.18)+P*.06,T++};x(0,0);for(let _=1;_<=56;_++)for(let U=0;U<120;U++){let A=U/120*Ye+_%2*(Math.PI/120);x(Math.cos(A)*r[_],Math.sin(A)*r[_])}u.getAttribute("position").needsUpdate=!0,u.getAttribute("uv").needsUpdate=!0,u.getAttribute("color").needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function w(T,x){let _=!!(x&&x.snow);m=T.R+10,y=T.R+17,M();let U=f.width,A=U/(2*y),B=G=>(G+y)*A,k=G=>(G+y)*A,O=Gn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=_?"#e4ebf2":"#7db457",d.fillRect(0,0,U,U);for(let G=0;G<260;G++){let Z=O()*U,de=O()*U,Y=(2+O()*7)*A,Q=d.createRadialGradient(Z,de,0,Z,de,Y),K=_?O()<.5?"255,255,255":O()<.5?"200,212,228":"176,196,170":O()<.5?"120,170,82":O()<.5?"92,136,66":"138,160,78";Q.addColorStop(0,`rgba(${K},0.45)`),Q.addColorStop(1,`rgba(${K},0)`),d.fillStyle=Q,d.fillRect(Z-Y,de-Y,Y*2,Y*2)}for(let G=0;G<U*6;G++){let Z=O()*U,de=O()*U;d.fillStyle=_?O()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":O()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(Z,de,1+O()*1.5,1+O()*2.5)}for(let G=0;G<380;G++){let Z=O()*Ye,de=T.Rp+2+O()*(y-T.Rp-2),Y=B(Math.cos(Z)*de),Q=k(Math.sin(Z)*de);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(O()*4)],d.globalAlpha=_?0:.8,d.beginPath(),d.arc(Y,Q,Math.max(1,A*.06),0,Ye),d.fill()}d.globalAlpha=1;for(let G of T.houses){let Z=B(G.x),de=k(G.z),Y=(G.size*.62+1.4)*A,Q=d.createRadialGradient(Z,de,Y*.3,Z,de,Y);Q.addColorStop(0,_?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),Q.addColorStop(1,_?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=Q,d.fillRect(Z-Y,de-Y,Y*2,Y*2)}let P=(G,Z,de,Y)=>{d.globalAlpha=Y,d.strokeStyle=de,d.lineWidth=Z*A,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(B(G[0][0]),k(G[0][1]));for(let Q=1;Q<G.length;Q++)d.lineTo(B(G[Q][0]),k(G[Q][1]));d.stroke(),d.globalAlpha=1},S=[];for(let G of T.houses){let Z=G.door,de=Math.atan2(Z.ax,Z.az),Y=T.Rp-.5,Q=[[Z.dx,Z.dz],[Z.ax,Z.az],[Math.sin(de)*T.Rr,Math.cos(de)*T.Rr],[Math.sin(de)*Y,Math.cos(de)*Y]];S.push(Q)}let L=T.gateAngle,C=[[Math.sin(L)*(T.Rp-.5),Math.cos(L)*(T.Rp-.5)],[Math.sin(L)*(T.R+2),Math.cos(L)*(T.R+2)],[Math.sin(L+.05)*(T.R+12),Math.cos(L+.05)*(T.R+12)],[Math.sin(L-.02)*(y+4),Math.cos(L-.02)*(y+4)]];S.push(C);for(let G of S)P(G,2.6,_?"#b4b8bf":"#8f7a52",.35);for(let G of S)P(G,1.7,_?"#8f8476":"#a88d5e",.85);for(let G of S)P(G,.7,_?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*A,d.beginPath(),d.arc(B(0),k(0),T.Rr*A,0,Ye),d.stroke(),d.globalAlpha=1;let D=(T.Rp+.8)*A,b=d.createRadialGradient(B(0),k(0),D*.6,B(0),k(0),D*1.08);_?(b.addColorStop(0,"rgba(170,166,160,1)"),b.addColorStop(.85,"rgba(184,186,190,0.95)"),b.addColorStop(1,"rgba(184,186,190,0)")):(b.addColorStop(0,"rgba(176,150,108,1)"),b.addColorStop(.85,"rgba(160,136,96,0.95)"),b.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=b,d.beginPath(),d.arc(B(0),k(0),D*1.08,0,Ye),d.fill();let F=Math.max(2,.55*A);for(let G=3.2;G<T.Rp+.3;G+=.62){let Z=Math.floor(Ye*G/.66),de=O()*Ye;for(let Y=0;Y<Z;Y++){if(O()<.12)continue;let Q=de+Y/Z*Ye,K=B(Math.cos(Q)*G),W=k(Math.sin(Q)*G),ee=150+Math.floor(O()*40);d.fillStyle=_?`rgba(${ee+40},${ee+44},${ee+52},${.5+O()*.3})`:`rgba(${ee+12},${ee},${ee-22},${.55+O()*.3})`,d.save(),d.translate(K,W),d.rotate(Q+Math.PI/2),d.beginPath();let Ee=F*(.85+O()*.3),Te=F*(.7+O()*.25);d.roundRect?d.roundRect(-Ee/2,-Te/2,Ee,Te,Te*.3):d.rect(-Ee/2,-Te/2,Ee,Te),d.fill(),d.restore()}}if(b=d.createRadialGradient(B(0),k(0),0,B(0),k(0),3*A),b.addColorStop(0,"rgba(60,46,40,0.95)"),b.addColorStop(.5,"rgba(96,78,62,0.7)"),b.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=b,d.beginPath(),d.arc(B(0),k(0),3*A,0,Ye),d.fill(),T.grave){let G=B(T.grave.x),Z=k(T.grave.z),de=6*A;b=d.createRadialGradient(G,Z,0,G,Z,de),b.addColorStop(0,"rgba(70,84,58,0.85)"),b.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=b,d.fillRect(G-de,Z-de,de*2,de*2)}p.needsUpdate=!0}return{mesh:g,heightAt:I,paint:w,dispose(){u.dispose(),v.dispose(),p.dispose(),s.remove(g)}}}var hh=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],gg=[0,1,3,2,1,0,2,3];function Qb(s){let e=gg[s%gg.length],t=hh[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function rn(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function xg(s,e){let t=s.slice().sort((m,y)=>m.seat-y.seat),n=t.length,i=t.findIndex(m=>m.id===e);if(i>=0){let m=Math.floor(n/2);t=t.map((y,I)=>t[(i-m+I+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(Ye-r)),a=ct(o*.5,7.2,13.5),c=o-5.4,l=(Ye-r)/Math.max(n,1),h=t.findIndex(m=>m.id===e),u=m=>r/2+l*(m+.5),f=h>=0?-u(h):Math.PI,d=ln(f),p=t.map((m,y)=>{let I=ln(u(y)+f+Math.PI*0),M=Qb(m.seat),w=hh[M.type],T={id:m.id,seat:m.seat,angle:I,x:Math.sin(I)*o,z:Math.cos(I)*o,rotY:I+Math.PI,type:M.type,variant:M.variant,size:w.size},x=rn(T,w.door[0],w.door[1]),_=rn(T,w.approach[0],w.approach[1]);return T.door={dx:x.x,dz:x.z,ax:_.x,az:_.z},T}),v=o+6.5,g=d+7/v;return{n,R:o,Rp:a,Rr:c,step:l,gap:r,gateAngle:d,houses:p,grave:{x:Math.sin(g)*v,z:Math.cos(g)*v,angle:g,r:v}}}function uh(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function sd(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var vg=20,_g=new rt,eS=new rt,tS=new Yt,nS=new Yt,iS=new q,yg=new q,ld=new q(0,1,0),Mg=new Ce(.16,.11,.08),sS=new Ce("#ffc46b").multiplyScalar(1.25),rS=new Ce(.05,.045,.06),bg=new Ce("#c9b48a");var dh={value:1},ph=new Map;function oS(s){if(ph.has(s))return ph.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=dh,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,ph.set(s,e),e}function aS(){for(let s of ph.values())s.dispose()}var Sg=new xt,Is=new q;function rd(s){let e=new Gt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new rt().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let c=new rt().multiplyMatrices(o,a.matrixWorld),l=Array.isArray(a.material)?a.material[0]:a.material,h=l.uuid+(r?"|c":"");t.has(h)||t.set(h,{mat:l,cast:r,parts:[]});let u=t.get(h);for(let f of i)u.parts.push({geo:a.geometry,m:new rt().multiplyMatrices(f,c),org:new q().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let v of n.parts)i+=v.geo.attributes.position.count,r+=v.geo.index?v.geo.index.count:v.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),c=new Float32Array(i*2),l=new Float32Array(i*3),h=i>65535?new Uint32Array(r):new Uint16Array(r),u=0,f=0;for(let v of n.parts){let g=v.geo,m=g.attributes.position,y=g.attributes.normal,I=g.attributes.uv;Sg.getNormalMatrix(v.m);for(let M=0;M<m.count;M++)Is.fromBufferAttribute(m,M).applyMatrix4(v.m),o[(u+M)*3]=Is.x,o[(u+M)*3+1]=Is.y,o[(u+M)*3+2]=Is.z,y&&(Is.fromBufferAttribute(y,M).applyMatrix3(Sg).normalize(),a[(u+M)*3]=Is.x,a[(u+M)*3+1]=Is.y,a[(u+M)*3+2]=Is.z),I&&(c[(u+M)*2]=I.getX(M),c[(u+M)*2+1]=I.getY(M)),l[(u+M)*3]=v.org.x,l[(u+M)*3+1]=v.org.y,l[(u+M)*3+2]=v.org.z;if(g.index){let M=g.index.array;for(let w=0;w<M.length;w++)h[f+w]=M[w]+u;f+=M.length}else{for(let M=0;M<m.count;M++)h[f+M]=u+M;f+=m.count}u+=m.count}let d=new It;d.setAttribute("position",new yt(o,3)),d.setAttribute("normal",new yt(a,3)),d.setAttribute("uv",new yt(c,2)),d.setAttribute("aOrigin",new yt(l,3)),d.setIndex(new yt(h,1)),d.computeBoundingSphere();let p=new Mt(d,oS(n.mat));p.castShadow=n.cast,p.receiveShadow=!0,p.matrixAutoUpdate=!1,p.userData.merged=!0,e.add(p)}return e}function od(s,e,t,n,i=1){return new rt().compose(new q(s,e,t),new Yt().setFromAxisAngle(ld,n),new q(i,i,i))}var cd=class{constructor(e){this.root=e,this.map=new Map}batchFor(e){let t=this.map.get(e.uuid);if(!t){let n=e.clone();n.name=e.name,n.userData={...e.userData,houseBatch:!0};let i=new na(64,16384,32768,n);i.sortObjects=!1,i.perObjectFrustumCulled=!0,i.frustumCulled=!1,i.name="houses-"+e.name,this.root.add(i),t={mesh:i,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0},this.map.set(e.uuid,t)}return t}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){return e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI)),e.mesh.addInstance(t)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose();this.map.clear()}},hd=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Gt,this.parts=[],this.list=[];let o=Hi(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new rt().copy(o.matrixWorld).invert();for(let c of["body","door","banner"]){let l=o.getObjectByName(c);if(!l)continue;let h=new rt().multiplyMatrices(a,l.matrixWorld),u=new rt().copy(l.matrixWorld).invert();l.traverse(f=>{if(!f.isMesh)return;let d=new rt().multiplyMatrices(u,f.matrixWorld),p=f.material,v=null;p.name==="window"?v="window":p.name.startsWith("tint")?(v="owner",p=Mo(p.name,"#ffffff")):t===1&&p.name==="fantasy-town"&&(p=jf());let g={kind:c,nodeM:h,local:d,colorMode:v,nodePos:new q().setFromMatrixPosition(h),nodeQ:new Yt().setFromRotationMatrix(h),ids:[]};try{let m=i.batchFor(p);g.batch=m,g.batches=i,g.gid=i.geometryId(m,f.geometry),v==="window"?(m.mesh.castShadow=!1,m.mesh.receiveShadow=!1):(m.mesh.castShadow=!0,m.mesh.receiveShadow=!0)}catch{g.batch=null;let y=new ir(f.geometry,p,vg);y.count=0,y.castShadow=v!=="window",y.receiveShadow=v!=="window",y.frustumCulled=!1,v&&(y.instanceColor=new kn(new Float32Array(vg*3).fill(1),3)),this.group.add(y),g.im=y}this.parts.push(g)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t)}setM(e,t,n){e.batch?e.batch.mesh.setMatrixAt(e.ids[t],n):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=eS.compose(iS.set(n.cx,0,n.cz),tS.setFromAxisAngle(ld,n.crot),yg.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=nS.setFromAxisAngle(ld,n.doorAngle).premultiply(r.nodeQ);o=_g.compose(r.nodePos,a,yg.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=_g.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}},ad=new Map,lS=new un,fh=new q;function cS(s,e){let t=s+":"+e;if(ad.has(t))return ad.get(t);let n=Mn(s,e),i=null;return n&&(n.updateWorldMatrix(!0,!0),lS.setFromObject(n).getSize(fh),i={r:Math.max(fh.x,fh.z)/2,h:fh.y}),ad.set(t,i),i}var hS=/grass|patch|rock-flat|campfire/;function wg(s,e,t,n){let i=new Gt;i.name="village",s.add(i);let r=new Map,o=new cd(i),a=new Map,c=[],l=[],h=null;function u(_e,Ae,ge,et,H,he){if(hS.test(ge)||!f||Math.hypot(et,H)>f.R+4)return;let J=cS(Ae,ge);J&&(_e.push({x:et,z:H,r:J.r*he,h:J.h*he,name:ge}),h=null)}let f=null,d=null,p=null,v=null,g=!1,m=new Map,y=[],I=!0,M=!1,w=null,T=1,x=!1,_=new Ce("#ffc46b"),U=new Ce("#ff9a3c"),A=new Ce("#ffb85a");function B(_e,Ae){let ge=_e+"-"+Ae;return r.has(ge)||r.set(ge,new hd(_e,Ae,i,o)),r.get(ge)}function k(){for(let Ae of r.values())Ae.list.length=0;let _e=[...a.values()].sort((Ae,ge)=>Ae.seat-ge.seat);for(let Ae of _e)B(Ae.type,Ae.variant).list.push(Ae);I=!0}function O(_e,Ae){let ge=f;f=_e;let et=new Set;for(let H of _e.houses){et.add(H.id);let he=a.get(H.id);if(!he||he.type!==H.type||he.variant!==H.variant){let J=he;he={id:H.id,seat:H.seat,type:H.type,variant:H.variant,cx:H.x,cz:H.z,crot:H.rotY,sx:H.x,sz:H.z,srot:H.rotY,scale:Ae?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:J&&J.ownerColor||bg.clone(),winColor:Mg.clone(),name:J?J.name:"",colorIdx:J?J.colorIdx:-1},a.set(H.id,he)}he.seat=H.seat,he.sx=he.cx,he.sz=he.cz,he.srot=he.crot,he.tx=H.x,he.tz=H.z,he.trot=H.rotY,he.angle=H.angle,he.info=hh[H.type],he.removing=!1,Ae||(he.cx=H.x,he.cz=H.z,he.crot=H.rotY,he.scale=1)}for(let[H,he]of a)et.has(H)||(Ae?(he.removing=!0,he.sx=he.cx,he.sz=he.cz,he.srot=he.crot,he.tx=he.cx,he.tz=he.cz,he.trot=he.crot):a.delete(H));T=Ae?0:1,k(),!Ae||!ge?S():(w=!0,x=!0)}function P(_e){let Ae={x:_e.cx,z:_e.cz,rotY:_e.crot},ge=_e.info;return{door:rn(Ae,ge.door[0],ge.door[1]-.25),inside:rn(Ae,ge.door[0],ge.door[1]-1.2),approach:rn(Ae,ge.approach[0],ge.approach[1]+.2),peek:rn(Ae,ge.peek[0],ge.peek[1]),backWin:rn(Ae,ge.backWin[0],ge.backWin[2]),frontWin:rn(Ae,ge.frontWin[0],ge.frontWin[2]+.12),lantern:rn(Ae,ge.door[0]+.95,ge.front+.45),tomb:rn(Ae,ge.door[0]-2.6,ge.front+1.6),plaque:rn(Ae,0,ge.front+.3),rotY:_e.crot,height:ge.height}}function S(){d&&(i.remove(d),_t(d)),d=new Gt,d.name="dressing",i.add(d),w=!1;let _e=Gn(2024+f.n),Ae=new Map;c=[],h=null;let ge=(ce,V,te,se,be=1,Se="village",Pe=null)=>{u(c,Se,ce,V,te,be);let qe=Se+":"+ce;Ae.has(qe)||Ae.set(qe,[]);let vt=Pe==null?n.heightAt(V,te):Pe;Ae.get(qe).push(od(V,vt,te,se,be))};y=[],ge("campfire-pit",0,0,.3,1,"village",0);let et=[],H=[.55,2.35,4.15];for(let ce=0;ce<3;ce++){let V=H[ce],te=3.35;ge(ce===1?"log-small":"log",Math.sin(V)*te,Math.cos(V)*te,V+Math.PI/2,1,"village",0),et.push({x:Math.sin(V)*te,z:Math.cos(V)*te,a:V,small:ce===1})}ge("campfire-stand",0,0,1.2,.85,"village",0);let he=f.houses,J=ce=>{let V=null,te=1/0;for(let se=0;se<he.length;se++){let be=he[se].angle,Se=he[(se+1)%he.length].angle-be;for(;Se<0;)Se+=Ye;if(he.length>1&&Se>Math.PI)continue;let Pe=be+Se/2,qe=Math.abs(((Pe-ce+Math.PI)%Ye+Ye)%Ye-Math.PI);qe<te&&(te=qe,V=Pe)}return V==null?ce:V},we=new Set,ie=ce=>{let V=[];for(let te=0;te<ce;te++)V.push(f.gateAngle+Math.PI+((te+.5)/ce-.5)*(Ye-1.4));return V};for(let ce of ie(Math.min(6,Math.max(1,he.length-1)))){let V=J(ce),te=V.toFixed(3);if(we.has(te))continue;we.add(te);let se=f.R-3.4,be=Math.sin(V)*se,Se=Math.cos(V)*se;ge("lamp-post",be,Se,V+Math.PI,1),y.push({x:be,y:3.55,z:Se})}let Oe=["barrel","crate","hay-bale","crate-bottles","bucket","wheel","barrel","crate"],De=new Set;ie(8).forEach((ce,V)=>{let te=J(ce+.11),se=te.toFixed(3);if(De.has(se))return;De.add(se);let be=f.R+.4;ge(Oe[V],Math.sin(te)*be,Math.cos(te)*be,_e()*Ye,1)});for(let ce of a.values()){if(ce.removing)continue;let V={x:ce.tx,z:ce.tz,rotY:ce.trot},te=rn(V,ce.info.door[0]+.95,ce.info.front+.45);ge("lantern",te.x,te.z,ce.trot,.8,"village",0)}let Ve=ce=>{for(let te of he)if(Math.abs(((ce-te.angle+Math.PI)%Ye+Ye)%Ye-Math.PI)<.2)return!1;return Math.abs(((ce-f.gateAngle+Math.PI)%Ye+Ye)%Ye-Math.PI)>.3},z=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],R=0;for(let ce=0;ce<40&&R<4;ce++){let V=_e()*Ye;if(!Ve(V))continue;let te=f.Rp+2.2+_e()*Math.max(.5,f.Rr-f.Rp-3.5),[se]=z[R];ge(se,Math.sin(V)*te,Math.cos(V)*te,V+Math.PI+(_e()-.5)*.5,1),R++}let ne=f.gateAngle,Me=(ce,V)=>({x:Math.sin(ne+V/ce)*ce,z:Math.cos(ne+V/ce)*ce}),pe=Me(f.R+1,-2.4);ge("signpost",pe.x,pe.z,ne+.6,1),pe=Me(f.R-1,2.6),ge("banner-pole",pe.x,pe.z,ne+Math.PI,1.2),pe=Me(f.R+4,-2.6),ge("lantern-post-cabin",pe.x,pe.z,ne+Math.PI,1),y.push({x:pe.x,y:2.9,z:pe.z,small:!0});let me=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],ye=e.trees,ue=f.R+8.5;for(let ce=0;ce<ye;ce++){let V=_e()*Ye,te=Math.pow(_e(),1.35),se=ue+te*46,be=Math.sin(V)*se,Se=Math.cos(V)*se;if(Math.abs(((V-ne+Math.PI)%Ye+Ye)%Ye-Math.PI)*se<4.5&&se<ue+30||f.grave&&Math.hypot(be-f.grave.x,Se-f.grave.z)<8.5)continue;let qe=me[Math.floor(_e()*me.length)];ge(qe,be,Se,_e()*Ye,.85+_e()*.55+te*.3)}for(let ce=0;ce<e.scatter;ce++){let V=_e()*Ye,te=f.R+4.6+_e()*6,se=Math.sin(V)*te,be=Math.cos(V)*te;if(Math.abs(((V-ne+Math.PI)%Ye+Ye)%Ye-Math.PI)*te<3.5||f.grave&&Math.hypot(se-f.grave.x,be-f.grave.z)<7)continue;let Pe=_e();ge(Pe<.4?"grass-large":Pe<.7?"grass":"bush",se,be,_e()*Ye,.8+_e()*.6)}for(let ce=0;ce<14;ce++){let V=_e()*Ye,te=f.Rp+.8+_e()*1.5;ge(_e()<.7?"grass":"grass-large",Math.sin(V)*te,Math.cos(V)*te,_e()*Ye,.8+_e()*.4)}for(let ce=0;ce<3;ce++){let V=_e()*Ye,te=f.R+24+_e()*40;ge(_e()<.5?"rock-large":"rock-wide",Math.sin(V)*te,Math.cos(V)*te,_e()*Ye,.8+_e()*1)}let le=[];for(let[ce,V]of Ae){let[te,se]=ce.split(":"),be=Mn(te,se);be&&le.push({tpl:be,mats:V,cast:!/grass|patch|rock-flat|bush/.test(se)})}d.add(rd(le)),c.push({x:0,z:0,r:1.5,h:3.3,name:"fire"}),x&&(dh.value=0,F=0,x=!1),Z(),L=et,n.paint(f,D&&D.snow?{snow:!0}:null),ke(),C++,I=!0}let L=[],C=0,D=null,b=null,F=1,G=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(_e=>new Ce(_e));function Z(){if(v&&(i.remove(v),_t(v),v=null),!Hn("props/graveyard.glb")||!f||!f.grave)return;g=!0,v=new Gt,v.name="graveyard";let _e=f.grave,Ae=_e.angle+Math.PI,ge=(ie,Oe)=>rn({x:_e.x,z:_e.z,rotY:Ae},ie,Oe),et=new Map,H=(ie,Oe,De,Ve=0,z=1)=>{let R=ge(Oe,De);et.has(ie)||et.set(ie,[]),et.get(ie).push(od(R.x,n.heightAt(R.x,R.z),R.z,Ae+Ve,z))},he=Gn(66),J=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let ie=0;ie<6;ie++)H(J[ie],-3.2+ie*1.3+(he()-.5)*.3,-2.6+(he()-.5)*.4,(he()-.5)*.3,.85);H("crypt",3.6,-3.4,-.3,1),H("trunk-dead",-4.6,.6,1.1,1),H("pine-crooked",-5.2,-3.6,.4,1),H("candles",1.8,-2.4,0,1),H("pumpkin-carved",-2.2,1.9,.5,.8),H("urn",2.6,.4,0,.8),H("iron-fence-gate",0,3.2,0,1);for(let ie of[-2.5,-5,2.5,5])H("iron-fence",ie,3.2,0,1);let we=[];for(let[ie,Oe]of et){let De=Mn("graveyard",ie);De&&we.push({tpl:De,mats:Oe,cast:!0})}v.add(rd(we)),i.add(v);for(let[ie,Oe]of m)Q(ie,Oe)}let de=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function Y(_e,Ae,ge,et){let H=m.has(_e);if(Ae&&!H){m.set(_e,{obj:null,mound:null,colorIdx:ge,born:performance.now()}),Q(_e,m.get(_e));let he=m.get(_e);et&&he.obj&&(he.obj.userData.drop=0,he.obj.position.y=3.2)}else if(!Ae&&H){let he=m.get(_e);he.obj&&he.obj.parent.remove(he.obj),he.mound&&he.mound.parent.remove(he.mound),m.delete(_e)}}function Q(_e,Ae){var we,ie,Oe;Ae.obj&&(Ae.obj.parent&&Ae.obj.parent.remove(Ae.obj),Ae.obj=null),Ae.mound&&(Ae.mound.parent&&Ae.mound.parent.remove(Ae.mound),Ae.mound=null);let ge=a.get(_e);if(!ge||!Hn("props/graveyard.glb"))return;let et=Mn("graveyard",de[ge.seat%de.length]);if(!et)return;let H={x:(we=ge.tx)!=null?we:ge.cx,z:(ie=ge.tz)!=null?ie:ge.cz,rotY:(Oe=ge.trot)!=null?Oe:ge.crot},he=rn(H,ge.info.door[0]-2.75,ge.info.front+1.7),J=et.clone();if(J.position.set(he.x,0,he.z),J.rotation.set(0,H.rotY+.15,0),J.scale.setScalar(.62),J.traverse(De=>{De.isMesh&&(De.castShadow=!0,De.receiveShadow=!0)}),J.userData.pop=0,i.add(J),Ae.obj=J,f&&f.grave){let De=[...m.keys()].indexOf(_e),Ve=Mn("graveyard","grave-dirt");if(Ve){let z=f.grave,R=z.angle+Math.PI,ne=-3.6+De%5*1.9,Me=.3+Math.floor(De/5)*2,pe=rn({x:z.x,z:z.z,rotY:R},ne,Me),me=Ve.clone();me.position.set(pe.x,n.heightAt(pe.x,pe.z),pe.z),me.rotation.y=R,me.scale.setScalar(.7),i.add(me),Ae.mound=me}}}function K(_e,Ae,ge){let et=a.get(_e);et&&(et.colorIdx!==Ae&&(et.colorIdx=Ae,Ae>=0?et.ownerColor.set(bn[Ae]):et.ownerColor.copy(bg),I=!0),et.name=ge||"")}let W=new Ce;function ee(_e,Ae,ge){let et=!1;if(T<1){T=Math.min(1,T+_e/1.3);let he=Cs(T);for(let[J,we]of a){we.cx=nd(we.sx,we.tx,he),we.cz=nd(we.sz,we.tz,he);let ie=we.trot-we.srot;for(;ie>Math.PI;)ie-=Ye;for(;ie<-Math.PI;)ie+=Ye;we.crot=we.srot+ie*he,we.removing?we.scale=Math.max(.01,1-he):we.scale=Math.min(1,we.scale+_e*1.2)}if(T>=1){for(let[J,we]of a)we.removing&&a.delete(J);k(),w&&S()}et=!0}else for(let he of a.values())he.scale<1&&(he.scale=Math.min(1,he.scale+_e*1.5),et=!0);F<1&&(F=Math.min(1,F+_e/.9),dh.value=F);for(let he of m.values()){let J=he.obj;if(J&&J.userData.drop!=null){let we=J.userData.drop+=_e/.55;if(we>=1)J.position.y=0,delete J.userData.drop,et=!0;else{let ie=we<.7?3.2*(1-we/.7*(we/.7)):Math.sin((we-.7)/.3*Math.PI)*.18;J.position.y=Math.max(0,ie)}}}let H=ge.lamps;for(let he of a.values()){he.doorHold>0&&(he.doorHold-=_e,he.doorHold<=0&&(he.doorTarget=0));let J=he.doorOpen;he.doorOpen+=(he.doorTarget-he.doorOpen)*an(he.doorTarget>he.doorOpen?9:5,_e),Math.abs(he.doorOpen-J)>5e-4&&(et=!0),he.doorAngle=he.doorOpen*1.35*he.info.openSign;let we=he.dark||he.dead?0:Math.max(he.litTarget,0);he.lit+=(we-he.lit)*an(1.6,_e);let ie=ct(he.lit*(.25+.75*H),0,1);W.copy(Mg).lerp(rS,ct(ge.night*1.2,0,1)).lerp(sS,ie);let Oe=he.winColor;Math.abs(W.r-Oe.r)+Math.abs(W.g-Oe.g)+Math.abs(W.b-Oe.b)>.006&&(Oe.copy(W),M=!0)}if(et&&(I=!0),I){for(let he of r.values())he.write();return I=!1,M=!1,!0}if(M){for(let he of r.values())he.writeColors();M=!1}return!1}function Ee(_e,Ae,ge,et){let H=_e.lamps;if(H<.02)return;let he=D&&D.dress==="fair";for(let J=0;J<y.length;J++){let we=y[J],ie=.92+.08*Math.sin(Ae*9+J*1.7),Oe=he?G[J%G.length]:_;ge.add(we.x,we.y,we.z,we.small?1.4:2,Oe,.85*H*ie),et.add(we.x,.03,we.z,we.small?6:8.5,he?Oe:U,.3*H)}if(he&&Te)for(let J=0;J<Te.length;J++){let we=Te[J];ge.add(we.x,we.y,we.z,.7,G[J%G.length],.8*H*(.8+.2*Math.sin(Ae*3+J)))}for(let J of a.values()){if(J.scale<.9)continue;if(!J.gp||J.gp.x!==J.cx||J.gp.z!==J.cz||J.gp.r!==J.crot){let De={x:J.cx,z:J.cz,rotY:J.crot};J.gp={x:J.cx,z:J.cz,r:J.crot,ln:rn(De,J.info.door[0]+.95,J.info.front+.45),w:rn(De,J.info.frontWin[0],J.info.frontWin[2]+.25),wp:rn(De,J.info.frontWin[0],J.info.frontWin[2]+1.6)}}let we=J.gp.ln,ie=J.dead?.25:1;ge.add(we.x,.62,we.z,.9,_,.9*H*ie),et.add(we.x,.03,we.z,3.6,U,.26*H*ie);let Oe=J.lit*H*(.86+.08*Math.sin(Ae*6.3+J.seat*2.1)+.06*Math.sin(Ae*13.7+J.seat));if(Oe>.02){let De=J.gp.w;ge.add(De.x,1.35,De.z,1.7,A,.5*Oe);let Ve=J.gp.wp;et.add(Ve.x,.03,Ve.z,4.2,A,.22*Oe)}}}let Te=null,Ie=!1;function Je(_e){let Ae=D;D=_e&&_e.id?_e:null,_.set(D&&D.lamp?D.lamp:"#ffc46b"),U.set(D&&D.lamp?D.lamp:"#ff9a3c");let ge=!!(Ae&&Ae.snow)!=!!(D&&D.snow);f&&ge&&n.paint(f,D&&D.snow?{snow:!0}:null),Ke(!!(D&&D.snow)),ke()}function Ke(_e){if(_e===Ie)return;Ie=_e;let Ae=ge=>{!ge||!ge.isMeshLambertMaterial||!ge.map||ge.name==="villager"||(_e?(ge.userData.preFrost||(ge.userData.preFrost=ge.emissive.clone()),ge.emissive.set("#a9bad0").multiplyScalar(.22)):ge.userData.preFrost&&ge.emissive.copy(ge.userData.preFrost))};s.traverse(ge=>{ge.material&&(Array.isArray(ge.material)?ge.material:[ge.material]).forEach(Ae)})}function ke(){if(b&&(i.remove(b),b.traverse(H=>{(H.userData.merged||H.userData.themeGeo)&&H.geometry.dispose(),H.userData.themeMat&&H.material.dispose()}),b=null),Te=null,l=[],h=null,!D||!D.dress||!f)return;b=new Gt,b.name="theme";let _e=Gn(99+f.n),Ae=new Map,ge=(H,he,J,we,ie=1)=>{u(l,"village",H,he,J,ie),Ae.has(H)||Ae.set(H,[]),Ae.get(H).push(od(he,n.heightAt(he,J),J,we,ie))};if(D.dress==="harvest"){let H=[...a.values()].filter(ie=>!ie.removing),he=Math.max(1,Math.ceil(H.length/8));for(let ie=0;ie<H.length;ie+=he){let Oe=H[ie],De={x:Oe.tx,z:Oe.tz,rotY:Oe.trot},Ve=rn(De,Oe.info.door[0]-.9,Oe.info.front+.7);if(ge("pumpkin",Ve.x,Ve.z,_e()*Ye,.7+_e()*.3),_e()<.5){let z=rn(De,-Oe.info.hx+.5,Oe.info.front+.9);ge("hay-bale",z.x,z.z,Oe.trot+.3,.9)}}for(let ie=0;ie<6;ie++){let Oe=ie/6*Ye+.4,De=f.Rp+1.2;ge(ie%2?"pumpkin":"hay-bale",Math.sin(Oe)*De,Math.cos(Oe)*De,Oe,ie%2?.9:1)}let J=f.gateAngle+.5,we=f.Rp+2.6;ge("cart-hay",Math.sin(J)*we,Math.cos(J)*we,J+1.2,1)}else if(D.dress==="fair"){let H=y.filter(we=>!we.small),he=[],J=[];Te=[];for(let we=0;we<H.length;we++){let ie=H[we],Oe=H[(we+1)%H.length];if(Math.hypot(ie.x-Oe.x,ie.z-Oe.z)>14)continue;let De=9;for(let Ve=0;Ve<De;Ve++){let z=(Ve+.15)/De,R=(Ve+.85)/De,ne=(Ve+.5)/De,Me=ce=>3.25-Math.sin(ce*Math.PI)*.9,pe=ce=>[ie.x+(Oe.x-ie.x)*ce,Me(ce),ie.z+(Oe.z-ie.z)*ce],me=pe(z),ye=pe(R),ue=pe(ne);he.push(...me,...ye,ue[0],ue[1]-.45,ue[2]);let le=G[(we+Ve)%G.length];for(let ce=0;ce<3;ce++)J.push(le.r,le.g,le.b);Ve%3===1&&Te.push({x:ue[0],y:ue[1]+.05,z:ue[2]})}}if(he.length){let we=new It;we.setAttribute("position",new Nt(he,3)),we.setAttribute("color",new Nt(J,3)),we.computeVertexNormals();let ie=new pn({vertexColors:!0,side:sn}),Oe=new Mt(we,ie);Oe.userData.themeGeo=!0,Oe.userData.themeMat=!0,b.add(Oe)}for(let we=0;we<5;we++){let ie=we/5*Ye+.2,Oe=f.Rp+1.6;ge("banner-pole",Math.sin(ie)*Oe,Math.cos(ie)*Oe,ie+Math.PI,1.1)}}let et=[];for(let[H,he]of Ae){let J=Mn("village",H);J&&et.push({tpl:J,mats:he,cast:!0})}et.length&&b.add(rd(et)),i.add(b),Ie&&(Ie=!1,Ke(!0))}function dt(_e,Ae){let ge=a.get(_e);ge&&(ge.litTarget=Ae)}function Ut(_e,Ae=1.2){let ge=a.get(_e);ge&&(ge.doorTarget=1,ge.doorHold=Ae)}function Ot(_e){let Ae=null,ge=1/0,et=_e.origin,H=_e.direction;for(let he of a.values()){if(he.removing)continue;let J=Math.cos(-he.crot),we=Math.sin(-he.crot),ie=et.x-he.cx,Oe=et.z-he.cz,De=ie*J+Oe*we,Ve=-ie*we+Oe*J,z=H.x*J+H.z*we,R=-H.x*we+H.z*J,ne=[-he.info.hx-.3,0,-he.info.hz-.3],Me=[he.info.hx+.3,he.info.height,he.info.hz+1.2],pe=[De,et.y,Ve],me=[z,H.y,R],ye=-1/0,ue=1/0;for(let le=0;le<3;le++){if(Math.abs(me[le])<1e-6){if(pe[le]<ne[le]||pe[le]>Me[le]){ye=1/0;break}continue}let ce=(ne[le]-pe[le])/me[le],V=(Me[le]-pe[le])/me[le];if(ce>V){let te=ce;ce=V,V=te}ye=Math.max(ye,ce),ue=Math.min(ue,V)}ye<=ue&&ue>0&&ye<ge&&(ge=ye,Ae=he)}return Ae}function Tt(){f&&Z()}function _t(_e){_e.traverse(Ae=>{Ae.isInstancedMesh?Ae.dispose():Ae.userData.merged&&Ae.geometry.dispose()})}return{root:i,houses:a,get layout(){return f},get benchSlots(){return L},get busy(){return T<1},get version(){return C},lampList:()=>y,get blockers(){return h||(h=c.concat(l)),h},setLayout:O,setOwner:K,setLit:dt,setDead:Y,setTheme:Je,openDoor:Ut,anchors:P,update:ee,emitGlows:Ee,pickHouse:Ot,onExtraLoaded:Tt,house:_e=>a.get(_e),tombOf:_e=>m.get(_e),dispose(){Ke(!1);for(let _e of r.values())_e.dispose();o.dispose(),d&&_t(d),v&&_t(v),b&&b.traverse(_e=>{(_e.userData.merged||_e.userData.themeGeo)&&_e.geometry.dispose(),_e.userData.themeMat&&_e.material.dispose()}),aS(),dh.value=1,s.remove(i)}}}var uS=`
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
}`,fS={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function dS(s,e){return new nn({vertexShader:uS,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${fS[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var Gi=class{constructor(e,t,n=Kn){this.max=t;let i=new bi(1,1),r=new ma;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new kn(new Float32Array(t*4),4),this.col=new kn(new Float32Array(t*4),4),this.spin=new kn(new Float32Array(t),1),this.pos.setUsage(Ra),this.col.setUsage(Ra),this.spin.setUsage(Ra),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=dS(e,n),this.mesh=new Mt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let c=this.n++,l=this.pos.array,h=this.col.array;l[c*4]=e,l[c*4+1]=t,l[c*4+2]=n,l[c*4+3]=i,h[c*4]=r.r,h[c*4+1]=r.g,h[c*4+2]=r.b,h[c*4+3]=o,this.spin.array[c]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},Eg=`
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
}`,Tg=`
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
}`,pS=`
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
}`,mS=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function Ag(s){let e=new Gt;e.name="campfire-fx";let t=[],n=new bi(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,p,,v,g]=i[f],m=new nn({vertexShader:Eg,fragmentShader:Tg,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Kn,side:sn,fog:!1}),y=new Mt(n,m);y.position.set(d,.32,p),y.scale.set(v,g,1),y.renderOrder=6,y.frustumCulled=!1,e.add(y),t.push(y)}let r=s.sparks,o=Gn(5),a=new Float32Array(r*3),c=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,c[f*4]=o(),c[f*4+1]=o(),c[f*4+2]=o(),c[f*4+3]=o()*1.2;let l=new It;l.setAttribute("position",new yt(a,3)),l.setAttribute("aSeed",new yt(c,4));let h=new nn({vertexShader:pS,fragmentShader:mS,transparent:!0,depthWrite:!1,blending:Kn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),u=new yi(l,h);return u.frustumCulled=!1,u.renderOrder=7,e.add(u),{group:e,update(f,d,p){for(let v of t)v.material.uniforms.uTime.value=f,v.material.uniforms.uPower.value=p;h.uniforms.uTime.value=f,h.uniforms.uPx.value=d,h.uniforms.uPower.value=Math.min(1,p*1.2)},dispose(){n.dispose(),l.dispose(),h.dispose();for(let f of t)f.material.dispose()}}}var gS=`
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
}`,xS=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function Rg(s){let e=Gn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new It;i.setAttribute("position",new yt(t,3)),i.setAttribute("aSeed",new yt(n,4));let r=new nn({vertexShader:gS,fragmentShader:xS,transparent:!0,depthWrite:!1,blending:Kn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new yi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,c){let l=Gn(123);for(let h=0;h<s;h++){let u=l()*Ye,f=a+l()*(c-a);t[h*3]=Math.cos(u)*f,t[h*3+1]=.6+l()*2.2,t[h*3+2]=Math.sin(u)*f}i.getAttribute("position").needsUpdate=!0},update(a,c,l){r.uniforms.uTime.value=a,r.uniforms.uPx.value=c,r.uniforms.uAlpha.value=l,o.visible=l>.01},dispose(){i.dispose(),r.dispose()}}}var gh=class{constructor(e=96){this.max=e,this.normal=new Gi("puff",e,wi),this.add=new Gi("glow",e,Kn),this.list=[],this.tmp=new Ce,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new Ce(r):new Ce(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),c=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let l=0;l<o;l++){let h=Math.random()*Ye,u=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,p=.25+Math.random()*.3,v=a;e==="poof"&&(p=.35+Math.random()*.35),e==="dust"&&(u=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,p=.14+Math.random()*.1),e==="bubble"&&(u=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),p=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(u=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,p=.45+Math.random()*.4),e==="confetti"&&(u=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,p=.1+Math.random()*.08,v=new Ce(c[l%c.length])),this.list.push({kind:e,x:t+Math.cos(h)*.2,y:n+Math.random()*.4,z:i+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:f,vz:Math.sin(h)*u,t:0,life:d,size:p,c:v})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},mh=null;function Cg(s=.35,e=.6,t=1){mh||(mh=new bi(1,1),mh.translate(0,.5,0));let n=new nn({vertexShader:Eg,fragmentShader:Tg,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Kn,side:sn,fog:!1}),i=new Mt(mh,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var vS=`
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
}`,_S=`
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
}`;function Ig(s){let t=Gn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let p=0;p<900;p++)n[p*3]=(t()-.5)*46,n[p*3+1]=t()*18,n[p*3+2]=(t()-.5)*46,i[p*4]=t(),i[p*4+1]=t(),i[p*4+2]=t(),i[p*4+3]=t();let r=new It;r.setAttribute("position",new yt(n,3)),r.setAttribute("aSeed",new yt(i,4));let o=new nn({vertexShader:vS,fragmentShader:_S,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new q}}}),a=new yi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let c=new Gi("puff",40,wi);c.mesh.renderOrder=4,s.add(c.mesh);let l=[];for(let p=0;p<40;p++)l.push({a:t()*Ye,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let h="none",u=0,f=0,d=new Ce("#c9cfd8");return{set(p){h=p||"none"},get kind(){return h},update(p,v,g,m,y,I,M){if(u+=((h==="snow"||h==="leaves"?1:0)-u)*Math.min(1,p*.8),a.visible=u>.01&&y>0,a.visible){r.setDrawRange(0,Math.min(900,y));let x=o.uniforms;x.uTime.value=v,x.uPx.value=g,x.uKind.value=h==="leaves"?1:0,x.uAlpha.value=u*(h==="snow"?.9:1),x.uCenter.value.copy(m)}if(f+=((h==="fog"?1:0)-f)*Math.min(1,p*.5),c.begin(),f>.01){d.set("#cfd6de"),I&&d.lerp(I,.5),d.multiplyScalar(1-M*.6);let x=Math.min(40,Math.max(8,Math.round(y/20)));for(let _=0;_<x;_++){let U=l[_],A=U.a+v*U.sp;c.add(Math.sin(A)*U.r,U.y,Math.cos(A)*U.r,U.s,d,.16*f)}}c.end(v)},dispose(){r.dispose(),o.dispose(),c.dispose(),s.remove(a),s.remove(c.mesh)}}}var Oa=1.12,yS=1.75,Pg=2.8,MS={walk:Pg,brisk:3.75,sneak:2.4,sprint:5.4,stroll:2.1};var $E=new q,ud=null,Ti=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Gt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*Oa,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ct(e.skin|0,0,11),n=Hi(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=th(n.scene),r=Mo("cloth",bn[ct(e.color|0,0,19)]),o=null;i.traverse(l=>{if(l.isMesh){if(l.material.name==="cloth"&&r)l.material=r;else if(l.isSkinnedMesh&&l.userData.clothMerged&&l.material.name==="villager"){let h=Jf(bn[ct(e.color|0,0,19)]);h&&(l.material=h)}l.castShadow=!0,l.receiveShadow=!1,l.isSkinnedMesh?(o?l.skeleton!==o&&l.skeleton.bones.length===o.bones.length&&(l.skeleton.dispose(),l.skeleton=o):o=l.skeleton,l.boundingSphere=new Jt(new q(0,.3,-.15),.85),l.frustumCulled=!0):l.frustumCulled=!1}});let a=i.getObjectByName("head"),c=ed[e.hat|0];if(a&&c&&Hn("hats/hats.glb")){let l=Hi("hats/hats.glb").scene.getObjectByName(c);if(l){let h=l.clone();h.position.set(0,cg[t]||0,0),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),a.add(h)}}i.scale.multiplyScalar(Oa),this.model=i,this.root.add(i),this.mixer=new Es(i),this.clips=$f(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.headAnimQ=null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*Oa}buildGhost(e){let t=Hi("characters/ghost.glb"),n=t.scene.clone(!0),i=Mo("tint-ghost",bn[ct(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(bn[e.color|0]).multiplyScalar(.25));let r=Zf("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(Oa*.95),this.model=n,this.root.add(n),this.mixer=new Es(n),ud||(ud=t.animations),this.clips=ud,this.headY=1.95*Oa}action(e){if(this.actions[e])return this.actions[e];let t=Si.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(Ea,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(Ea,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk"){this.path=e.slice(),this.mode=t}setVisible(e){this.visible=e,this.root.visible=e&&!this.camHidden}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let h=Math.atan2(l.x,l.z);this.yaw+=ln(h-this.yaw)*an(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>3.7?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],h=l.x-this.pos.x,u=l.z-this.pos.z,f=Math.hypot(h,u),d=this.path.length===1;if(this.bestD==null||f<this.bestD-.05?(this.bestD=f,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,f<(d?.06:.45)||this.stuckT>.7&&(!d||f<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=MS[this.mode]||Pg,d&&!(this.retargetAt!=null&&this.world.time-this.retargetAt<.5)&&(n=Math.min(n,.9+f*3.2));let p=h,v=u;if(!d&&f<1.2){let A=this.path[1],B=1-f/1.2;p=h*(1-B)+(A.x-this.pos.x)*B,v=u*(1-B)+(A.z-this.pos.z)*B}let g=Math.atan2(p,v),m=ln(g-this.yaw);this.yaw+=m*an(12,e),n*=ct(1.25-Math.abs(m)/1.6,.2,1);let y=Math.min(f,this.speed*e),I=Math.sin(this.yaw),M=Math.cos(this.yaw),w=h/f,T=u/f,x=I*.55+w*.45,_=M*.55+T*.45,U=Math.hypot(x,_)||1;this.pos.x+=x/U*y,this.pos.z+=_/U*y}}else this.faceYaw!=null&&(this.yaw+=ln(this.faceYaw-this.yaw)*an(4,e));let i=!this.path&&!(this.drive&&this.drive.speed>.05);this.speed+=(n-this.speed)*an(n>this.speed?6:i?28:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let r=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(r){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=r?ct(this.speed/yS,.5,1.9)*(this.base==="sneak"?1.1:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=r?ct(this.speed/3.6,.6,1.6):1),r&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!r&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let o=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let h=l.t>=l.dur;o=Math.min(1,l.t/l.fade)*(h?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),h&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),o=0)}let a=0;for(let l in this.weights){let h=this.targets[l]||0,u=this.weights[l],f=this.fadeRate*e;u=u<h?Math.min(h,u+f):Math.max(h,u-f),this.weights[l]=u,a+=u}let c=a>1e-4?(1-o)/a:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let h=this.actions[l];h?h.setEffectiveWeight(this.weights[l]*c):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(o),this.animAcc=(this.animAcc||0)+e,this.animTick=((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0?(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0,this.headBone&&(this.headAnimQ||(this.headAnimQ=new Yt),this.headAnimQ.copy(this.headBone.quaternion))):this.headBone&&this.headAnimQ&&this.headBone.quaternion.copy(this.headAnimQ),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let h=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ct(ln(h-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*an(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}r&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk"),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var za=new q(0,0,-620);function Tn(s,e,t,n,i,r,o=0,a=1){let c=Mn(e,t);if(!c)return null;let l=c.clone();return l.position.set(n,i,r),l.rotation.set(0,o*Math.PI/180,0),l.scale.setScalar(a),l.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),s.add(l),l}function Lg(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,c=null,l=null,h=[],u={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Hn("interior/furniture.glb")||!Hn("interior/clues.glb"))return t;e=new Gt,e.name="interior",e.position.copy(za),e.visible=!1,s.scene.add(e);for(let P of[-2.5,0,2.5])for(let S of[-2.5,0,2.5])Tn(e,"furniture","floor-planks",P,0,S);for(let P of[-2.5,0,2.5])Tn(e,"furniture",P===0?"wall-wood-window":"wall-wood",P,0,-2.5,90);for(let P of[-2.5,0,2.5])Tn(e,"furniture",P===-2.5?"wall-wood-window":"wall-wood",-2.5,0,P,180);for(let P of[-2.5,0,2.5])Tn(e,"furniture",P===0?"wall-wood-door":"wall-wood",2.5,0,P,0);let U=new Mt(new bi(40,40),new pn({color:"#3f5a34"}));U.rotation.x=-Math.PI/2,U.position.y=-.02,e.add(U);let A=Tn(e,"furniture","bed",u.bed.x,0,u.bed.z);A&&A.traverse(P=>{P.isMesh&&P.material&&P.material.name==="carpet"&&(a||(a=P.material.clone()),P.material=a)}),c=Tn(e,"furniture","rug-round",u.rug.x,.01,u.rug.z),Tn(e,"furniture","table",1.6,0,-1.5),Tn(e,"furniture","chair",1.6,0,-.3,180),Tn(e,"furniture","candle",1.2,.79,-1.6),Tn(e,"clues","mug",1.85,.79,-1.35),Tn(e,"clues","bread",2.1,.79,-1.75),l=Tn(e,"furniture","chest",-.3,0,-2.8),Tn(e,"furniture","bookcase",-3.4,0,1.2,90),Tn(e,"furniture","lantern",u.lantern.x,0,u.lantern.z),Tn(e,"furniture","coat-rack",3.05,0,-2),Tn(e,"furniture","plant-pot",2.9,0,-3.05),Tn(e,"furniture","barrel",-3,0,3,0,.8),o=new pn({color:"#c9b48a",side:sn});let k=new Mt(new Mi(.9,1.25,.04),o);k.position.set(1.55,1.75,-3.42),e.add(k);let O=new Mt(new ss(.03,.03,1.1,6),new pn({color:"#5a3a22"}));return O.rotation.z=Math.PI/2,O.position.set(1.55,2.4,-3.4),e.add(O),t=!0,!0}let d=new q;function p(U,A=0){var B;return d.set(za.x+U.x,za.y+((B=U.y)!=null?B:A),za.z+U.z).clone()}function v(U){if(!f())return!1;n=U;let A=bn[ct((U.look&&U.look.color)|0,0,19)];return o.color.set(A),a&&a.color.set(A).lerp(new Ce("#ffffff"),.25),i&&(i.dispose(),i=null),U.look&&(i=new Ti(s,"room-sleeper",U.look),i.setBase("lie",0),i.pos.copy(p(u.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),g(),!0}function g(){c&&(c.position.set(u.rug.x,.01,u.rug.z),c.rotation.set(0,0,0));for(let U of h.splice(0))U.parent&&U.parent.remove(U)}function m(U){return v(U)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function y(){e&&(e.visible=!1),i&&(i.dispose(),i=null),w(),g(),n=null}function I(U,A,B,k,O=0){M(U);let P=new Ti(s,"room-"+U,A);return P.pos.copy(p(k)),P.yaw=O,P.root.rotation.y=O,s.scene.add(P.root),r.set(U,{ch:P,name:B,color:A.color|0,label:!!B}),P}function M(U){let A=r.get(U);A&&(A.ch.dispose(),r.delete(U))}function w(){for(let U of[...r.keys()])M(U)}function T(U){return e.add(U),h.push(U),U}function x(U,A){if(!(!e||!e.visible)){i&&(i.update(U,A),i.root.position.y=za.y+u.sleeper.y+Math.sin(A*1.7)*.015);for(let B of r.values())B.ch.update(U,A)}}function _(U,A){return U==="window"?{pos:p({x:A?-6.9:-6.3,y:1.75,z:A?-2.95:-3}),look:p({x:-1.6,y:.9,z:-2.1}),fov:A?56:42}:U==="search"?{pos:p({x:A?.5:3.4,y:A?9:4.6,z:A?4.3:5.6}),look:p({x:-.5,y:.3,z:-.7}),fov:A?58:48}:{pos:p({x:A?.4:3.6,y:A?9.2:4.9,z:A?4.1:5.9}),look:p({x:A?-.45:-.9,y:.3,z:A?-.75:-1.1}),fov:A?58:48}}return{L:u,W:p,show:m,hide:y,dress:v,update:x,shot:_,addActor:I,removeActor:M,clearActors:w,addTemp:T,resetProps:g,get visible(){return!!(e&&e.visible)},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return c},get chest(){return l},lanternWorld(){return p(u.lantern)},dispose(){y(),e&&(s.scene.remove(e),e.traverse(U=>{U.geometry&&!U.geometry.userData.shared&&(U.geometry.type==="PlaneGeometry"||U.geometry.type==="BoxGeometry"||U.geometry.type==="CylinderGeometry")&&U.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var Sr={cancelled:!0},Ng=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,So=s=>1-Math.pow(1-s,3);function xh(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===Sr&&s.preventDefault()}));function Dg(s){let e=new Map,t=null,n=!1,i=0;function r(u,f,d){typeof f=="function"&&(d=f,f=null),e.set(f?u+":"+f:u,d)}function o(u){return e.get(u.kind+":"+(u.scene||""))||e.get(u.kind)}function a(u){return new Promise(f=>{if(n||!u||!u.kind){f();return}l();let d=o(u);if(!d){f();return}let p=++i;["death","hanged","shot","left"].includes(u.kind)&&s.holdDeaths((u.targets||[]).map(m=>m.id).filter(Boolean));let v=h(p,u),g={msg:u,resolve:f,ctx:v};t=g,(async()=>{try{await Promise.race([d(v,u),v.timeout(13)])}catch(m){m!==Sr&&console.warn("[VKWorld] sinematik hatas\u0131",m)}c(g)})()})}function c(u){if(!u.done){u.done=!0;try{u.ctx.cleanup()}catch(f){console.warn("[VKWorld] sinematik temizli\u011Fi",f)}t===u&&(t=null),u.resolve()}}function l(){if(t){let u=t;u.ctx.cancel(),c(u)}}function h(u,f){let d=new Map,p=new Set,v=new Set,g=[],m=[],y=!1,I=!1,M=!1,w=()=>!n&&!y&&u===i,T={world:s,msg:f,alive:w,cancel(){y=!0;for(let x of v)x.reject(Sr);v.clear()},wait(x){return w()?xh(new Promise((_,U)=>{let A={resolve:_,reject:U,left:x};v.add(A),s.ticker.push(B=>v.has(A)?(A.left-=B,A.left<=0?(v.delete(A),_(),!0):!1):!0)})):xh(Promise.reject(Sr))},timeout(x){return new Promise(_=>{let U=setTimeout(_,x*1e3);p.add(U)})},tween(x,_,U=Ng){return w()?xh(new Promise((A,B)=>{let k=0,O={resolve:A,reject:B};v.add(O),s.ticker.push(P=>{if(!v.has(O))return!0;k=Math.min(x,k+P);try{_(U(x>0?k/x:1),P)}catch(S){console.warn(S)}return k>=x?(v.delete(O),A(),!0):!1})})):xh(Promise.reject(Sr))},shot(x,_,U={}){w()&&s.rig.setOverride({pos:x.clone(),look:_.clone(),fov:U.fov||40,k:U.k||2.4})},cut(x,_,U={}){w()&&s.rig.setOverride({pos:x.clone(),look:_.clone(),fov:U.fov||40,k:60},!0)},move(x,_,U,A,B,k={}){let O=new q,P=new q;return T.cut(x,_,k),T.tween(B,S=>{O.lerpVectors(x,U,S),P.lerpVectors(_,A,S),s.rig.setOverride({pos:O,look:P,fov:k.fov||40,k:60},!0)},k.ease||Ng)},claim(x){let _=s.chars.get(x);return _?(d.has(_)||(d.set(_,{x:_.pos.x,y:_.pos.y,z:_.pos.z,yaw:_.yaw,visible:_.visible,inside:_.inside,peeking:_.peeking,base:_.base}),_.claimed=!0,_.run([])),_):null},add(x,_){return(_||s.scene).add(x),g.push(x),x},prop(x,_,U,A,B,k=0,O=1){let P=s.assets.prop(x,_);if(!P)return null;let S=P.clone();return S.position.set(U,A,B),S.rotation.y=k,S.scale.setScalar(O),S.traverse(L=>{L.isMesh&&(L.castShadow=!0)}),T.add(S)},actor(x,_,U,A,B=0,k){let O=s.makeActor(x,_,k);return O.pos.set(U,0,A),O.yaw=B,O.root.rotation.y=B,g.push({dispose:()=>s.dropActor(O)}),O},hideObj(x){x&&x.visible&&(x.visible=!1,m.push(x))},tod(x,_){M=!0,s.setTodOverride(x,_)},room(){return I=!0,s.room},fx:s.fx,sfx:(x,_)=>s.sfx(x,_),flash:(x,_)=>s.flash(x,_),cleanup(){y=!0;for(let x of p)clearTimeout(x);for(let x of v)x.reject(Sr);v.clear();for(let x of g.splice(0))x.dispose&&!x.isObject3D?x.dispose():x.parent&&x.parent.remove(x),x.userData&&x.userData.cleanup&&x.userData.cleanup();for(let x of m.splice(0))x.visible=!0;for(let[x,_]of d)x.claimed=!1,x.dropProps(),x.pos.set(_.x,_.y,_.z),x.yaw=_.yaw,x.inside=_.inside,x.peeking=_.peeking,x.alive!==!1&&x.setVisible(_.visible&&!s.isDeadShown(x.id)),x.setBase(_.base==="walk"||_.base==="sprint"||_.base==="sneak"?"idle":_.base||"idle",.2),x.run([]);s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),M&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null),d.size&&(d.clear(),s.reapply(!0))}};return T}return{register:r,announce:a,CANCEL:Sr,get running(){return!!t},get current(){return t?t.msg:null},skip(){l()},reset(){i++,l(),s.rig.setOverride(null)},dispose(){n=!0,i++,l()}}}var ht=(s,e,t)=>new q(s,e,t),ka=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function Ug(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(S,L={}){var Ee;let C=e.houseAnchors(S);if(!C)return null;let D=L.back,b=D?C.backWin:{x:(C.door.x+C.frontWin.x)/2,z:(C.door.z+C.frontWin.z)/2},F=D?C.peek:C.approach,G=D?C.backWin:C.door,Z=F.x-G.x,de=F.z-G.z,Y=Math.hypot(Z,de)||1,Q=(L.dist||11)*(e.rig.portrait?1.3:1),K=(Ee=L.side)!=null?Ee:.18,W=-de/Y*K,ee=Z/Y*K;return{pos:ht(b.x+(Z/Y+W)*Q,L.height||7.2,b.z+(de/Y+ee)*Q),look:ht(b.x,L.lookY||1.8,b.z),a:C}}function r(S,L={}){let C=e.camera.position,D=C.x-S.x,b=C.z-S.z,F=Math.hypot(S.x,S.z);e.village.layout&&F>e.village.layout.Rp*.8&&(D=-S.x,b=-S.z),L.dir&&(D=L.dir.x,b=L.dir.z);let G=Math.hypot(D,b)||1,Z=(L.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:ht(S.x+D/G*Z,L.height||3,S.z+b/G*Z),look:ht(S.x,L.lookY||1.1,S.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,c=()=>e.rig.portrait?1.6:1;function l(S,L,C){let D=0;e.ticker.push(b=>{if(!S.alive())return!0;if(D+=b,D<L)return!1;try{C()}catch(F){console.warn("[VKWorld]",F)}return!0})}function h(S,L,C=4.2,D=null){e.ticker.push(()=>{if(!S.alive())return!0;let b=e.camera.position;for(let F of L){if(F===D||!F.visible)continue;let G=F.pos.x-b.x,Z=F.pos.z-b.z,de=F.pos.y+1-b.y;G*G+Z*Z+de*de*.25<C*C&&F.setVisible(!1)}return!1})}async function u(S,L,C,D,b=.3,F=2.2){if(!Hn("characters/ghost.glb")||!L)return;let G=S.actor(L,"",C,D,0,"ghost");G.root.position.y=b,S.sfx("poof",{volume:.5}),await S.tween(F,Z=>{G.root.position.y=b+Z*2.3,G.yaw+=.02;let de=1.3*(1-Math.max(0,Z-.75)*3);G.root.scale.setScalar(Math.max(.05,de))},So),e.fx.emit("magic",C,b+2.6,D,bn[L.color|0],12),G.setVisible(!1)}function f(S,L){e.markDead(L,{drop:!0});let C=e.houseAnchors(L);C&&l(S,.38,()=>e.fx.emit("poof",C.tomb.x,.2,C.tomb.z,"#b8a890",10)),S.sfx("poof",{volume:.6})}function d(S,L,C,D,b=10,F=2.4,G=3.5,Z={x:0,z:-1},de=1){if(!Hn("characters/bat.glb"))return Promise.resolve();let Y=Hi("characters/bat.glb").scene.children[0],Q=[];for(let W=0;W<b;W++){let ee=Y.clone(!0);ee.scale.setScalar((1+Math.random()*.5)*de),S.add(ee),Q.push({b:ee,a:W/b*Ye,r:G*(.6+Math.random()*.6),h:C+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:ee.getObjectByName("wing-left"),wr:ee.getObjectByName("wing-right"),ph:Math.random()*6})}S.sfx("whoosh",{volume:.6});let K=0;return S.tween(F,(W,ee)=>{K+=ee;let Ee=Math.max(0,W-.55)/.45;for(let Te of Q){Te.a+=Te.sp*ee;let Ie=Te.r*(1+Ee*5),Je=L+Math.sin(Te.a)*Ie+Z.x*Ee*Ee*25,Ke=D+Math.cos(Te.a)*Ie+Z.z*Ee*Ee*25,ke=Te.h+Math.sin(K*3+Te.ph)*.4+Ee*8;Te.b.position.set(Je,ke,Ke),Te.b.rotation.y=Te.a+Math.PI/2;let dt=Math.sin(K*22+Te.ph)*.9;Te.wl&&(Te.wl.rotation.z=dt),Te.wr&&(Te.wr.rotation.z=-dt)}},W=>W)}function p(S,L,C,D){if(!Hn("characters/vampire.glb"))return null;let b=Hi("characters/vampire.glb"),F=b.scene.clone(!0);F.scale.multiplyScalar(1.05),F.position.set(L,0,C),F.rotation.y=D,S.add(F);let G=new Es(F),Z=null,de=Q=>{let K=Si.findByName(b.animations,Q);if(!K)return;let W=G.clipAction(K);Z&&Z!==W&&Z.fadeOut(.15),W.reset().fadeIn(.15).play(),Z=W};de("idle"),e.ticker.push(Q=>F.parent?(G.update(Q),!1):(G.stopAllAction(),!0));let Y=v(.5,"#ff2244");return Y.position.set(0,1.85,.25),F.add(Y),{root:F,play:de}}function v(S,L){let C=m(),D=new io({map:C,color:L,transparent:!0,depthWrite:!1,blending:Kn,fog:!1}),b=new jo(D);return b.scale.setScalar(S),b.userData.cleanup=()=>D.dispose(),b}let g=null;function m(){if(g)return g;let S=document.createElement("canvas");S.width=S.height=64;let L=S.getContext("2d"),C=L.createRadialGradient(32,32,0,32,32,32);return C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.35,"rgba(255,255,255,0.45)"),C.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=C,L.fillRect(0,0,64,64),g=new rr(S),g.colorSpace=zt,g}function y(S){let L=new Gt,C=new Mt(new ss(.05,.06,.9,6),new pn({color:"#6b4426"}));C.position.y=.2,L.add(C);let D=new Mt(new ss(.1,.07,.16,6),new pn({color:"#3a2a20"}));D.position.y=.66,L.add(D);let b=Cg(.38,.62,Math.random()*9);b.position.y=.7,L.add(b);let F=v(1.3,"#ffb347");return F.position.y=.95,L.add(F),e.ticker.push(()=>!L.parent&&L.userData.used?!0:(b.userData.tick(e.time),!1)),L.userData.holdScale=1/1.12/2.5*1,L.userData.used=!0,L.userData.cleanup=()=>{C.geometry.dispose(),C.material.dispose(),D.geometry.dispose(),D.material.dispose(),b.userData.cleanup(),F.userData.cleanup()},L}function I(S,L,C=1){let D=Mn(S,L);if(!D)return null;let b=D.clone();return b.userData.holdScale=1/(1.12*2.5)*C,b}function M(S=[],L=10){let C=[];for(let[D,b]of e.chars)if(!(!b.visible||S.includes(D)||b.isGhost)&&(C.push(b),C.length>=L))break;return C}function w(S,L){for(let C of S)C.faceYaw=Math.atan2(L.x-C.pos.x,L.z-C.pos.z),C.gaze(L,6,e.time)}function T(S,L,C=4){for(let D of S)D.gaze(L,C,e.time)}s.register("start",async S=>{let L=t(),C=M([],20);S.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let D=ht(0,L*1.1,L*1.3),b=ht(0,.4,0),F=ht(L*.3,4.8,L*.8+2),G=ht(0,1,0);l(S,.9,()=>T(C,e.camera.position,4)),await S.move(D,b,F,G,3,{fov:o()+4});for(let Z of C)Math.random()<.6&&Z.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await S.wait(1.6)}),s.register("night",async S=>{let L=t(),C=M([],20);for(let D of C)Math.random()<.7&&D.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});S.tod(21),S.sfx("whoosh",{volume:.5}),await S.move(ht(0,3.2,L*.75),ht(0,1.2,0),ht(0,L*.55,L*1.15),ht(0,L*.9,-L*2.5),3.6,{fov:o()+6}),await S.wait(.6)}),s.register("death",async(S,L)=>{let C=(L.targets||[]).slice(0,2);S.tod(5.7);for(let D of C){let b=D.cause==="zehir"?"poison":["bite","bats","vanish"].includes(D.scene)?D.scene:"bite";await x(S,D.id,b,C.length>1?.8:1)}});async function x(S,L,C,D){let b=i(L,{dist:11,height:7.4,side:.2,lookY:2.2});if(!b)return;let F=b.a,G=e.playerById(L),Z=G?G.look:null,de=ht(b.pos.x*.88+F.door.x*.12,b.pos.y-1.2,b.pos.z*.88+F.door.z*.12);if(S.cut(b.pos,b.look,{fov:o()}),S.move(b.pos,b.look,de,b.look,3.4*D,{fov:o()}),C==="bite"){await S.wait(.4*D),e.village.openDoor(L,1.2),S.sfx("door");let W=p(S,F.inside.x,F.inside.z,Math.atan2(F.approach.x-F.inside.x,F.approach.z-F.inside.z));W&&(W.play("sprint"),await S.tween(.9*D,ee=>{W.root.position.x=F.inside.x+(F.approach.x-F.inside.x)*1.6*ee,W.root.position.z=F.inside.z+(F.approach.z-F.inside.z)*1.6*ee},ee=>ee),e.fx.emit("smoke",W.root.position.x,.8,W.root.position.z,"#2a2238",16),W.root.visible=!1,S.sfx("bite"),d(S,W.root.position.x,1.6,W.root.position.z,8,1.6,1.2,{x:F.approach.x-F.door.x,z:F.approach.z-F.door.z})),await S.wait(.6*D)}else if(C==="bats")S.sfx("bite"),e.flash(.35,"#d7263d"),await d(S,(F.door.x+F.backWin.x)/2,3.2,(F.door.z+F.backWin.z)/2,14,2.2*D,3.6,{x:F.approach.x-F.door.x,z:F.approach.z-F.door.z});else if(C==="vanish"){await S.wait(.3),e.village.openDoor(L,1.6);for(let W=0;W<4;W++)e.fx.emit("mist",F.door.x,.4+W*.3,F.door.z,"#9b7bff",10),await S.wait(.25*D);S.sfx("whoosh"),e.flash(.3,"#7048e8"),await S.wait(.4*D)}else if(C==="poison"){S.sfx("potion");for(let W=0;W<6;W++)e.fx.emit("bubble",F.frontWin.x,1.3,F.frontWin.z,"#94d82d",6),e.fx.emit("smoke",F.door.x*.6+F.backWin.x*.4,4.6,F.door.z*.6+F.backWin.z*.4,"#6f8a3a",3),await S.wait(.22*D);e.flash(.35,"#5fbf2a")}let Y=F.door.x*.4+F.approach.x*.6,Q=F.door.z*.4+F.approach.z*.6,K=u(S,Z,Y,Q,.2,2.2*D);await S.wait(.7*D),f(S,L),await K,await S.wait(.2)}s.register("safe",async S=>{let L=t();S.tod(5.4,!0),l(S,.05,()=>S.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((D,b)=>l(S,.7+b*.26,()=>e.village.openDoor(D,1.4))),await S.move(ht(-L*.9,L*.45,L*.95),ht(0,2,0),ht(L*.55,L*.55,L*1),ht(L*1.6,4,-L*.6),4.6,{fov:o()+4}),await S.wait(.3)}),s.register("nohang",async S=>{let L=t(),C=M([],20);T(C,ht(0,1,0),4),C.forEach((D,b)=>l(S,b*.09,()=>D.playOnce("emote-no",{timeScale:.9}))),await S.move(ht(0,4,L*.55),ht(0,1,0),ht(0,L*.8,L*1.15),ht(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async S=>{let L=t(),C=M([],20).map(D=>S.claim(D.id)).filter(Boolean);for(let D of C)D.setBase(Math.random()<.5?"sit":"warm",.5);S.tod(19.6),await S.move(ht(0,3.4,L*.7),ht(0,1,0),ht(0,L*.45,L*1.05),ht(0,L*.8,-L*2.5),4,{fov:o()+6})}),s.register("left",async(S,L)=>{let[C]=ka(L),D=C&&e.chars.get(C);if(D&&D.visible){S.claim(C);let b=r(D.pos,{dist:6});S.shot(b.pos,b.look,{fov:o()}),D.faceYaw=Math.atan2(e.camera.position.x-D.pos.x,e.camera.position.z-D.pos.z),await S.wait(.6),D.playOnce("emote-yes",{timeScale:.8}),await S.wait(1.4),e.fx.emit("mist",D.pos.x,.4,D.pos.z,"#c9c2d3",22),S.sfx("whoosh"),e.markDead(C,{quiet:!0}),D.setVisible(!1),await S.wait(1.4)}else if(C){let b=i(C,{dist:10});b&&(S.shot(b.pos,b.look,{fov:o()}),await S.wait(1),e.fx.emit("mist",b.a.door.x,.6,b.a.door.z,"#c9c2d3",20),f(S,C),await S.wait(1.6))}}),s.register("hanged",async(S,L)=>{let[C]=ka(L),D=["gallows","exile","cellar"].includes(L.scene)?L.scene:"gallows",b=C&&e.chars.get(C);if(!b){await S.wait(1.5);return}S.claim(C),b.setVisible(!0);let F=M([C],40).map(Z=>S.claim(Z.id)).filter(Boolean),G=F.slice(0,9);for(let Z of F.slice(9))Z.setVisible(!1);D==="gallows"?await A(S,b,G,C):D==="exile"?await B(S,b,G,C):await k(S,b,G,C)});function _(S,L){let C=n(),D=C.gateAngle+S,b=C.Rp*L;return{x:Math.sin(D)*b,z:Math.cos(D)*b,a:D}}function U(S,L,C,D,b={}){let F=S.length,G=b.spread||2.2;S.forEach((Z,de)=>{let Y=D+(b.front?0:Math.PI)+(de-(F-1)/2)/Math.max(1,F)*G;Z.pos.set(L.x+Math.sin(Y)*C+(Math.random()-.5)*.4,0,L.z+Math.cos(Y)*C+(Math.random()-.5)*.4),Z.yaw=Math.atan2(L.x-Z.pos.x,L.z-Z.pos.z),Z.faceYaw=Z.yaw,Z.gaze(L,8,e.time)})}async function A(S,L,C,D){let b=_(.25,.82),F=b.a+Math.PI;S.prop("village","platform-wood",b.x,0,b.z,F,1),S.prop("village","frame-wood",b.x,1.18,b.z,F,1);let G={x:Math.sin(F),z:Math.cos(F)},Z={x:Math.cos(F),z:-Math.sin(F)};S.prop("village","ladder",b.x+G.x*1.5-Z.x*.75,0,b.z+G.z*1.5-Z.z*.75,F,.8);let de=new Mt(new ss(.035,.035,1,6),new pn({color:"#c8a46a"}));de.position.set(b.x,1.18+2.35-.5,b.z);let Y=new Mt(new ha(.16,.035,6,12),de.material);Y.position.set(b.x,1.18+1.75,b.z),Y.userData.cleanup=()=>{de.geometry.dispose(),Y.geometry.dispose(),de.material.dispose()},S.add(de),S.add(Y);let Q=e.rig.portrait;U(C,{x:b.x,z:b.z},Q?3.6:4.2,F-1.25,{front:!0,spread:Q?1.4:1.7});let K={x:b.x+G.x*3.4,z:b.z+G.z*3.4};L.pos.set(K.x,0,K.z),L.yaw=F+Math.PI,L.faceYaw=L.yaw;let W=Q?8:7.4,ee=Q?8:9.6,Ee=Q?a():32,Te=ht(b.x+G.x*W+Z.x*ee,Q?6.2:5,b.z+G.z*W+Z.z*ee),Ie=ht(b.x+G.x*W*.8+Z.x*ee*.8,Q?5.2:4.2,b.z+G.z*W*.8+Z.z*ee*.8),Je=dt=>ht(b.x-G.x*(Q?0:.7)-Z.x*.5,dt,b.z-G.z*(Q?0:.7)-Z.z*.5);S.move(Te,Je(Q?1.6:1.7),Ie,Je(Q?1.9:2),4.2,{fov:Ee}),h(S,C,6),L.run([{walk:[{x:b.x+G.x*1.6,z:b.z+G.z*1.6}],mode:"walk"}]),await S.wait(1.4),await S.tween(.5,dt=>{L.pos.y=dt*1.2,L.pos.x=b.x+G.x*1.6*(1-dt),L.pos.z=b.z+G.z*1.6*(1-dt)}),L.run([]),L.faceYaw=F,L.yaw=F,L.setBase("idle",.2),await S.wait(.5),L.playOnce("emote-no",{timeScale:.9}),S.sfx("hang",{volume:.7}),await S.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",L.pos.x,1.4,L.pos.z,null,26),S.sfx("poof"),L.setVisible(!1);for(let dt of C)Math.random()<.6&&dt.playOnce(Math.random()<.5?"emote-no":"interact-right");let Ke=e.playerById(D),ke=u(S,Ke&&Ke.look,b.x,b.z,1.4,1.8);e.markDead(D,{quiet:!0,drop:!0}),await ke}async function B(S,L,C,D){let b=n(),F=b.gateAngle,G=(ke,dt=0)=>({x:Math.sin(F+dt/ke)*ke,z:Math.cos(F+dt/ke)*ke}),Z=G(b.R+2),de=G(b.R-.6),Y=e.fogBoost(.6),Q=F+Math.PI/2,K=S.prop("graveyard","iron-fence-gate",Z.x,0,Z.z,Q,1);L.pos.set(de.x,0,de.z),L.yaw=F,L.faceYaw=F;let W=C.slice(0,6);W.forEach((ke,dt)=>{let Ut=(dt-(W.length-1)/2)*1.1,Ot=G(b.R-3.3-dt%2*1,Ut*(e.rig.portrait?.75:1));ke.pos.set(Ot.x,0,Ot.z),ke.yaw=F,ke.faceYaw=F,dt%2===0?(ke.hold(y(S),"right",[0,-.12,.02]),ke.setBase("hold",.2)):ke.hold(I("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let ke of C.slice(6))ke.setVisible(!1);let ee=e.rig.portrait,Ee=G(Math.max(b.R-(ee?12:11),2.8),ee?1.2:-2.2),Te=ee?10.5:9.6,Ie=G(b.R+(ee?1.5:3),0);S.cut(ht(Ee.x,Te,Ee.z),ht(Ie.x,.8,Ie.z),{fov:a()});let Je=G(b.R+15);h(S,W,8,L),L.run([{walk:[Z,Je],mode:"walk"}]),W.forEach((ke,dt)=>{let Ut=G(b.R-1.2-dt%2*.9,(dt-2.5)*1.1);ke.run([{wait:.4},{walk:[Ut],mode:"walk"},{pose:dt%2===0?"hold":"idle"}])}),S.sfx("whoosh",{volume:.4});let Ke=G(b.R-2,ee?.6:-1.2);if(await S.move(ht(Ee.x,Te,Ee.z),ht(Ie.x,.8,Ie.z),ht(Ke.x,ee?6.8:6,Ke.z),ht(Je.x,.9,Je.z),4.8,{fov:a()}),e.fx.emit("mist",L.pos.x,.6,L.pos.z,"#d8dde4",16),L.setVisible(!1),K){let ke=K.rotation.y;K.rotation.y=ke+1.3,S.sfx("door"),await S.tween(.6,dt=>{K.rotation.y=ke+1.3*(1-dt)},So)}e.markDead(D,{quiet:!0,drop:!0}),await S.wait(.8),Y()}async function k(S,L,C,D){let b=_(1.1,.9),F=b.a+Math.PI;S.prop("village","trapdoor",b.x,.01,b.z,F,.75);let G=new Gt;G.position.set(b.x-Math.cos(F)*.85,.12,b.z+Math.sin(F)*.85),G.rotation.y=F;let Z=new Mt(new Mi(1.7,.1,1.7),new pn({color:"#7a5232"}));Z.position.x=.85;let de=new Mt(new Mi(1.72,.12,.18),new pn({color:"#3a3a44"}));de.position.set(.85,.01,.45),G.add(Z,de),G.userData.cleanup=()=>{Z.geometry.dispose(),Z.material.dispose(),de.geometry.dispose(),de.material.dispose()},S.add(G);let Y=new Mt(new or(.8,16),new yn({color:"#0b0910"}));Y.rotation.x=-Math.PI/2,Y.position.set(b.x,.03,b.z),Y.userData.cleanup=()=>{Y.geometry.dispose(),Y.material.dispose()},S.add(Y);let Q=e.rig.portrait;U(C,b,Q?3.4:4,F,{spread:Q?1.7:2.3});let K={x:Math.sin(F),z:Math.cos(F)},W={x:Math.cos(F),z:-Math.sin(F)};L.pos.set(b.x+K.x*.5+W.x*2.6,0,b.z+K.z*.5+W.z*2.6);let ee=Q?8.6:7.2,Ee=Q?2.2:3.8;S.cut(ht(b.x+K.x*ee+W.x*Ee,Q?5.4:4.4,b.z+K.z*ee+W.z*Ee),ht(b.x+K.x*.5,Q?.9:.7,b.z+K.z*.5),{fov:a()}),h(S,C,Q?4.6:4),S.sfx("door"),await S.tween(.8,Ie=>{G.rotation.z=Ie*1.9},So),L.run([{walk:[{x:b.x,z:b.z}],mode:"walk"}]),await S.wait(1.8),L.run([]),L.playOnce("fall",{timeScale:.6}),await S.tween(1,Ie=>{L.pos.y=-2.2*Ie},Ie=>Ie*Ie),L.setVisible(!1),S.sfx("door"),await S.tween(.5,Ie=>{G.rotation.z=1.9*(1-Ie)},Ie=>Ie*Ie),e.fx.emit("poof",b.x,.3,b.z,"#b8a890",14);let Te=S.prop("clues","key",b.x+W.x*.6,.35,b.z+W.z*.6,F,1.4);Te&&e.fx.emit("magic",Te.position.x,.6,Te.position.z,"#ffd27a",10),e.markDead(D,{quiet:!0,drop:!0});for(let Ie of C)Math.random()<.5&&Ie.playOnce("emote-yes",{timeScale:.8});await S.wait(1.3)}function O(S,L,C){let D=I("clues","bow",1.1);D&&(D.rotation.set(0,0,0),L.hold(D,"left",[0,-.13,.05])),L.setBase("holdboth",.25),C&&(L.faceYaw=Math.atan2(C.x-L.pos.x,C.z-L.pos.z),L.yaw=L.faceYaw)}async function P(S,L,C,D=.7){let b=Mn("clues","arrow");if(!b)return;let F=b.clone();F.scale.setScalar(.9),S.add(F);let G=ht(C.x-L.x,C.y-L.y,C.z-L.z);S.sfx("shot"),await S.tween(D,Z=>{F.position.set(L.x+G.x*Z,L.y+G.y*Z+Math.sin(Z*Math.PI)*1.2,L.z+G.z*Z),F.rotation.y=Math.atan2(G.x,G.z),F.rotation.x=-Math.cos(Z*Math.PI)*.5},Z=>Z)}s.register("hunter",async(S,L)=>{let[C]=ka(L),D=C&&e.chars.get(C);if(D){S.claim(C),D.setVisible(!0),O(S,D,ht(0,0,0));let b=r(D.pos,{dist:4.8,height:1.4,lookY:1.4});S.move(ht(b.pos.x,.9,b.pos.z),b.look,ht(b.pos.x*1.05,2,b.pos.z*1.05),b.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),S.sfx("hunter",{volume:.6}),await S.wait(3.4)}else await S.wait(1.5)}),s.register("shot",async(S,L)=>{let[C]=ka(L),D=L.actorId&&e.chars.get(L.actorId),b=C&&e.chars.get(C);if(!b){await S.wait(1.5);return}S.claim(C),b.setVisible(!0),D&&(S.claim(L.actorId),D.setVisible(!0),O(S,D,b.pos)),b.faceYaw=D?Math.atan2(D.pos.x-b.pos.x,D.pos.z-b.pos.z):b.yaw;let F=D?D.pos:ht(0,0,0),G=ht(F.x-b.pos.x,0,F.z-b.pos.z).normalize(),Z=ht(G.z,0,-G.x),de=ht((F.x+b.pos.x)/2,1,(F.z+b.pos.z)/2),Y=Math.max(4,Math.hypot(F.x-b.pos.x,F.z-b.pos.z)),Q=ht(-de.x,0,-de.z).normalize(),K=Z.dot(Q)>=0?Z:Z.clone().multiplyScalar(-1);S.cut(ht(de.x+K.x*(Y*.9+4),4.6+Y*.2,de.z+K.z*(Y*.9+4)),de,{fov:o()}),await S.wait(1),D&&D.playOnce("attack-melee-right",{timeScale:1.4});let W=P(S,ht(F.x,1.5,F.z),ht(b.pos.x,1.1,b.pos.z),.75),ee=r(b.pos,{dir:K,dist:6,height:3.6});S.shot(ee.pos,ee.look,{fov:o(),k:2.5}),await W,e.flash(.4,"#ff8364"),e.fx.emit("poof",b.pos.x,.9,b.pos.z,null,22),S.sfx("poof"),b.setVisible(!1);let Ee=e.playerById(C),Te=u(S,Ee&&Ee.look,b.pos.x,b.pos.z,.3,1.8);e.markDead(C,{quiet:!0,drop:!0}),await Te,await S.wait(.4)}),s.register("nohunt",async S=>{let L=e.getState(),C=L&&L.room.hunterId,D=C&&e.chars.get(C);if(D){S.claim(C),D.setVisible(!0);let b=ht(D.pos.x*3+8,0,D.pos.z*3-30);O(S,D,b);let F=r(D.pos,{dist:5.5});S.shot(F.pos,F.look,{fov:o()}),await S.wait(.9),await P(S,ht(D.pos.x,1.5,D.pos.z),ht(b.x,6,b.z),1.1),D.dropProps(),D.setBase("idle",.2),D.playOnce("emote-no"),await S.wait(1.6)}else await S.wait(1.5)}),s.register("win",async(S,L)=>{let C=ka(L),D=t(),b=L.winner;b==="vampir"?(S.tod(23.2,!0),e.moonOverride("#ff4a4a")):b==="soytari"?S.tod(18.4):S.tod(10.2);let F=C.map(Y=>e.chars.get(Y)).filter(Y=>Y&&Y.visible).slice(0,10);for(let Y of F)S.claim(Y.id);let G=M(C,12).map(Y=>S.claim(Y.id)).filter(Boolean);if(b==="soytari"&&F[0]){let Y=F[0];Y.pos.set(0,0,3),Y.yaw=0,Y.faceYaw=0,Y.setBase("cheer",.2),U(G,{x:0,z:3},4.5,0);for(let K of G)K.setBase("sad",.3);let Q=v(4,"#f2c12e");Q.position.set(0,1.2,3),S.add(Q)}else{for(let Y of F)Y.setBase(b==="vampir"?"loom":"cheer",.3);for(let Y of G)Y.setBase("sad",.3)}b==="vampir"&&d(S,0,5,0,16,5.5,D*.5,{x:0,z:-1});let Z=0,de=b!=="vampir";await S.tween(5.6,(Y,Q)=>{let K=-.9+Y*1.6,W=D*.85*c();if(e.rig.setOverride({pos:ht(Math.sin(K)*W,D*.5*c(),Math.cos(K)*W),look:ht(0,1,0),fov:o()+2,k:60},!0),Z+=Q,de&&Z>.55){Z=0;let ee=F[Math.floor(Math.random()*Math.max(1,F.length))];ee&&(e.fx.emit("confetti",ee.pos.x,2.2,ee.pos.z,null,14),Math.random()<.5&&ee.playOnce("jump"))}},Y=>Y)}),s.register("promote",async S=>{let L=e.meId(),C=L&&e.chars.get(L);if(C&&C.visible){S.claim(L);let D=r(C.pos,{dist:6,height:4.2});S.shot(D.pos,D.look,{fov:o()}),C.setBase("loom",.3);let b=v(.6,"#ff2244");b.position.set(0,.36,.12),C.headBone&&(C.headBone.add(b),S.add(b,C.headBone)),e.flash(.5,"#d7263d"),await d(S,C.pos.x,1.8,C.pos.z,12,3.4,1.8)}else if(L){let D=i(L,{dist:10});D&&(S.shot(D.pos,D.look,{fov:o()}),e.flash(.5,"#d7263d"),await d(S,D.a.door.x,3,D.a.door.z,12,3.4,3))}await S.wait(.4)}),s.register("seer",async(S,L)=>{let C=(L.targets||[])[0];if(!C)return;let D=e.openRoom(C.id);if(!D){await S.wait(1.5);return}let b=e.playerById(e.meId()),F=D.shot("search",e.rig.portrait);S.cut(F.pos,F.look,{fov:F.fov});let G=b?D.addActor("kahin",b.look,b.name,D.L.doorOut,-Math.PI/2):null,Z=W=>D.W(W);G&&G.run([{walk:[Z(D.L.doorIn),Z({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:Z(D.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[Z({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:Z({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[Z({x:.9,z:.2})],mode:"sneak"},{faceTo:Z(D.L.rug)},{pose:"peek"}]),S.sfx("door",{volume:.5}),await S.wait(4.6);let de=C.cause==="vampir",Y=D.rug;if(de){let W=Y.position.x;S.tween(.7,Te=>{Y.position.x=W+1.6*Te,Y.rotation.z=-.25*Math.sin(Te*Math.PI)},So),await S.wait(.3);let ee=D.addTemp(Mn("clues","coffin").clone());ee.position.set(D.L.rug.x,-.4,D.L.rug.z),ee.scale.setScalar(.62),ee.rotation.y=.4,S.tween(.6,Te=>{ee.position.y=-.4+.42*Te},So);for(let Te=0;Te<3;Te++){let Ie=D.addTemp(Mn("clues","potion").clone());Ie.position.set(D.L.rug.x+.9+Te*.32,0,D.L.rug.z-.6+Te*.2);let Je=v(.9,"#ff2244");Je.position.y=.4,Ie.add(Je)}let Ee=D.W({x:D.L.rug.x,z:D.L.rug.z});e.fx.emit("magic",Ee.x,.8,Ee.z,"#ff2244",30),e.flash(.55,"#d7263d"),S.sfx("seer"),d(S,Ee.x,1.2,Ee.z,3,2,.8,{x:0,z:1},.45),G&&(G.setBase("idle",.2),G.playOnce("emote-no"))}else{let W=["bread","cheese","apple","mug"],ee=D.W({x:D.L.rug.x,z:D.L.rug.z});W.forEach((Ee,Te)=>{let Ie=Mn("clues",Ee);if(!Ie)return;let Je=D.addTemp(Ie.clone());Je.position.set(D.L.rug.x-.5+Te*.35,.02,D.L.rug.z+.2-Te%2*.3),Je.scale.setScalar(1.3)}),e.fx.emit("magic",ee.x,.6,ee.z,"#ffe08a",24),S.sfx("seer"),G&&(G.setBase("idle",.2),G.playOnce("emote-yes"))}let Q=D.shot("inside",e.rig.portrait),K=ht(Q.look.x+(Q.pos.x-Q.look.x)*.78,Q.look.y+(Q.pos.y-Q.look.y)*.8,Q.look.z+(Q.pos.z-Q.look.z)*.78);S.shot(K,D.W({x:D.L.rug.x,y:.4,z:D.L.rug.z}),{fov:Q.fov,k:2.5}),await S.wait(2.2)}),s.register("watch",async(S,L)=>{let C=(L.targets||[])[0];if(!C)return;let D=e.openRoom(C.id);if(!D){await S.wait(1.5);return}let b=D.shot("window",e.rig.portrait);S.cut(b.pos,b.look,{fov:b.fov});let F=e.playerById(e.meId());F&&D.addActor("gozcu",F.look,"",D.L.winOut,Math.PI/2).setBase("peek",0);let G=(L.visitors||[]).map(Y=>e.playerById(Y)).filter(Boolean),Z=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!G.length){await S.wait(3.6);return}let de=ct(4/G.length,.8,1.4);for(let Y=0;Y<G.length;Y++){let Q=G[Y],K=D.addActor("v"+Y,Q.look,Q.name,D.L.doorStep,-Math.PI/2),W=Z[Y%Z.length];K.run([{walk:[D.W(D.L.doorIn),D.W(W)],mode:"walk"},{faceTo:D.W({x:D.L.sleeper.x,z:-1.3})},{pose:"idle"}]),S.sfx("door",{volume:.35}),await S.wait(de)}await S.wait(2.8)})}var bS={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},vh={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};vh["panayir-haftasi"]=vh.panayir;function Fg(s){return{...bS,...vh[s]||{},id:vh[s]?s:null}}var Ba=new q,SS=new q,_h=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new q,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new q,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new q,this.ovLook=new q,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,c){let l=this.scratch;l.fov=i,this.applyView(l);let h=SS.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),u=a,f=c;for(let d=0;d<22;d++){let p=(u+f)/2;l.position.copy(e).addScaledVector(h,p),l.lookAt(e),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert();let v=!0;for(let g=0;g<r.length&&v;g++){if(Ba.copy(r[g]).applyMatrix4(l.matrixWorldInverse),Ba.z>-.5){v=!1;break}Ba.applyMatrix4(l.projectionMatrix),(Math.abs(Ba.x)>o||Math.abs(Ba.y)>o)&&(v=!1)}v?f=p:u=p}return f}drag(e,t){let n=this.user;n.az=ct(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ct(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ct(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let m=an(r.active?1.2:3,e);r.az+=(0-r.az)*m,r.el+=(0-r.el)*m,r.zoom+=(1-r.zoom)*m,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:an(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=ln(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,c=ct(i.el+r.el,.12,1.45),l=i.dist*r.zoom,h=this.camera,u=i.target.x+Math.sin(a)*Math.cos(c)*l,f=i.target.y+Math.sin(c)*l,d=i.target.z+Math.cos(a)*Math.cos(c)*l,p=this.override?1:0;if(this.ovW+=(p-this.ovW)*an(this.override?this.override.k||2.5:2,e),this.override){let m=an(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,m),this.ovLook.lerp(this.override.look,m)}let v=this.ovW;h.position.set(u+(this.ovPos.x-u)*v,f+(this.ovPos.y-f)*v,d+(this.ovPos.z-d)*v),this.clampFn&&v<.5&&this.clampFn(h.position),this.lookPoint||(this.lookPoint=new q),this.lookPoint.copy(i.target).lerp(this.ovLook,v),h.lookAt(this.lookPoint);let g=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*v;Math.abs(h.fov-g)>.01&&(h.fov=g,h.updateProjectionMatrix()),h.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var wS=`
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
.vkw-bubble{max-width:180px;padding:5px 9px;border-radius:12px;background:#f4e4c1;color:#2a1c10;font-size:12.5px;font-weight:600;line-height:1.3;white-space:normal;box-shadow:0 3px 8px rgba(0,0,0,.35);opacity:0;transition:opacity .25s;word-break:break-word}
.vkw-bubble::after{content:'';position:absolute;left:50%;bottom:-6px;margin-left:-6px;border:6px solid transparent;border-bottom:0;border-top-color:inherit;border-top-color:#f4e4c1}
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
@media (max-width:540px){.vkw-job{font-size:9.5px}.vkw-tag.sel .vkw-name{padding:3px 8px 3px 5px;font-size:12.5px}.vkw-plaque.sel{font-size:11.5px;padding:3px 7px 3px 4px}.vkw-plaque span{max-width:64px}.vkw-plaque{font-size:10.5px}}
@media (min-width:900px){.vkw-name{font-size:13px}.vkw-plaque{font-size:12px}}
`,Ps=null,yh=0;function ES(){yh++,!Ps&&(Ps=document.createElement("style"),Ps.id="vkw-style",Ps.textContent=wS,document.head.appendChild(Ps))}function TS(){yh--,yh<=0&&Ps&&(Ps.remove(),Ps=null,yh=0)}var fd=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Sn=new q;function Og(s,e){ES();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,c=!1,l={top:0,bottom:0,left:0,right:0},h=0,u=document.createElement("button");u.className="vkw-recenter",u.type="button",u.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",u.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),u.textContent="\u2316",u.addEventListener("click",k=>{k.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',p='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",k=>{k.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",k=>k.stopPropagation()),t.appendChild(u),t.appendChild(f);function v(k,O){let P=0,S=0,L=0;k.addEventListener("pointerdown",C=>{P=C.clientX,S=C.clientY,L=performance.now(),C.stopPropagation()}),k.addEventListener("pointerup",C=>{C.stopPropagation(),Math.hypot(C.clientX-P,C.clientY-S)<12&&performance.now()-L<700&&O()}),k.addEventListener("click",C=>C.stopPropagation())}function g(k){let O=n.get(k);if(O)return O;let P=document.createElement("div");return P.className="vkw-tag",P.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(P,u),O={el:P,mark:P.children[0],votes:P.children[1],name:P.children[2],job:P.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},v(P,()=>e.onTagTap(k)),n.set(k,O),O}function m(k){let O=i.get(k);if(O)return O;let P=document.createElement("div");return P.className="vkw-plaque",t.insertBefore(P,t.firstChild),O={el:P,sig:"",cls:"",shown:!1},v(P,()=>e.onPlaqueTap(k)),i.set(k,O),O}function y(k,O){let P=g(k),S=O.name+"|"+O.job+"|"+O.color+"|"+O.badges;S!==P.sig&&(P.sig=S,P.name.innerHTML=`<i style="background:${bn[O.color]||"#999"}"></i>${O.badges?`<span>${O.badges}</span>`:""}<span>${fd(O.name)}</span>`,P.job.textContent=O.job||"",P.jobText=O.job||"",P.measured=!1);let L=O.mark?O.mark.label+O.mark.color:"";L!==P.markSig&&(P.markSig=L,P.mark.hidden=!O.mark,O.mark&&(P.mark.textContent=O.mark.label,P.mark.style.setProperty("--c",O.mark.color)),P.measured=!1);let C=O.votes?O.votes.total+":"+O.votes.dots.join(","):"";C!==P.voteSig&&(P.voteSig=C,P.votes.hidden=!O.votes,O.votes&&(P.votes.innerHTML=`<b>${O.votes.total}</b>`+O.votes.dots.map(F=>`<i style="background:${F.color}">${F.w>1?"2":""}</i>`).join("")),P.measured=!1);let D=!!P.jobText&&(!c||O.picked||O.hover);P.job.hidden===D&&(P.job.hidden=!D,P.measured=!1);let b="vkw-tag"+(c?" cmp":"")+(O.me?" me":"")+(O.off?" off":"")+(O.dead?" dead":"")+(O.sel?" sel":"")+(O.picked?" picked":"")+(O.hover?" hover":"");b!==P.cls&&(P.cls=b,P.el.className=b),O.selColor&&P.el.style.setProperty("--c",O.selColor),P.data=O}function I(k,O){let P=m(k),S=O.name+"|"+O.color+"|"+(O.mark?O.mark.label:"");S!==P.sig&&(P.sig=S,P.el.innerHTML=`<i style="background:${bn[O.color]||"#c9b48a"}"></i><span>${fd(O.name)}</span>${O.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${fd(O.mark.label)}</em>`:""}`);let L="vkw-plaque"+(O.sel?" sel":"")+(O.picked?" picked":"")+(O.dim?" dim":"")+(O.dead?" dead":"");L!==P.cls&&(P.cls=L,P.el.className=L),O.selColor&&P.el.style.setProperty("--c",O.selColor),P.data=O}function M(k,O){for(let[P,S]of k)O.has(P)||(S.el.remove(),k.delete(P))}function w(k,O,P){let S=r.get(k);if(!S){let L=document.createElement("div");L.className="vkw-bubble",t.insertBefore(L,u),S={el:L,until:0,h:30},r.set(k,S)}S.el.textContent=O.length>90?O.slice(0,88)+"\u2026":O,S.el.dataset.ch=P||"genel",S.el.classList.add("show"),S.until=performance.now()+3200+Math.min(3e3,O.length*45),S.h=0,S.seq=++h}let T=[],x=(k,O)=>k.prio-O.prio,_=[],U=[];function A(k,O,P,S){var Z,de,Y,Q;let L=_;L.length=0;for(let[K,W]of n){if(!(O(K,Sn)&&S(K))){W.shown&&(W.el.style.transform="translate3d(-9999px,0,0)",W.shown=!1),W.vis=!1;continue}if(W.dist=Sn.distanceTo(k.position),Sn.project(k),Sn.z>1||Sn.x<-1.2||Sn.x>1.2||Sn.y<-1.2||Sn.y>1.3){W.shown&&(W.el.style.transform="translate3d(-9999px,0,0)",W.shown=!1),W.vis=!1;continue}W.measured||(W.w=W.el.offsetWidth||60,W.h=W.el.offsetHeight||20,W.measured=!0),W.sx=(Sn.x*.5+.5)*o,W.sy=(-Sn.y*.5+.5)*a,W.depth=Sn.z,W.vis=!0,L.push(W)}for(let K of L)K.prio=(K.data&&(K.data.me||K.data.picked||K.data.mark||K.data.votes)?0:1)*1e3+K.dist;L.sort(x),T.length=0;let C=L.length>6;for(let K of L){let W=K.sx-K.w/2,ee=K.sy-K.h,Ee=0;for(let dt=0;dt<6;dt++){let Ut=!1;for(let Ot of T)W<Ot.x+Ot.w-2&&W+K.w>Ot.x+2&&ee<Ot.y+Ot.h-1&&ee+K.h>Ot.y+1&&(ee=Ot.y-K.h-1,Ut=!0);if(!Ut)break;Ee++}let Te=K.data&&(K.data.me||K.data.sel||K.data.picked||K.data.mark||K.data.votes),Ie=C&&!Te&&(K.dist>15||Ee>0),Je=C&&!Te&&Ee>=3||!Te&&ee<l.top+2,Ke=(Ie?" far":"")+(Je?" gone":"");if(Ke!==K.fc&&(K.fc=Ke,K.el.classList.toggle("far",Ie),K.el.classList.toggle("gone",Je),K.measured=!1),Je){K.x=-1e4,K.y=-1e4;continue}W=Math.max(l.left+2,Math.min(o-l.right-K.w-2,W)),ee=Math.max(l.top+2,Math.min(a-l.bottom-K.h-2,ee)),T.push({x:W,y:ee,w:K.w,h:K.h,t:K}),K.x=W,K.y=ee,(!K.shown||Math.abs(W-((Z=K.wx)!=null?Z:-1e4))>.4||Math.abs(ee-((de=K.wy)!=null?de:-1e4))>.4)&&(K.el.style.transform=`translate3d(${W.toFixed(1)}px,${ee.toFixed(1)}px,0)`,K.wx=W,K.wy=ee);let ke=10+Math.round((1-K.depth)*1e3);ke!==K.wz&&(K.el.style.zIndex=String(ke),K.wz=ke),K.shown=!0}let D=performance.now(),b=[];for(let[K,W]of r){let ee=n.get(K);if(D>W.until&&W.el.classList.contains("show")&&W.el.classList.remove("show"),!ee||!ee.vis||D>W.until+400){W.el.style.transform="translate3d(-9999px,0,0)";continue}W.h||(W.h=W.el.offsetHeight||30,W.w=W.el.offsetWidth||100),b.push({b:W,t:ee})}b.sort((K,W)=>W.b.seq-K.b.seq);let F=[];b.forEach(({b:K,t:W},ee)=>{let Ee=Math.max(l.left+4,Math.min(o-l.right-K.w-4,W.sx-K.w/2)),Te=W.y-K.h-8;for(let Ie=0;Ie<6;Ie++){let Je=!1;for(let Ke of F)Ee<Ke.x+Ke.w&&Ee+K.w>Ke.x&&Te<Ke.y+Ke.h+4&&Te+K.h+4>Ke.y&&(Te=Ke.y-K.h-6,Je=!0);for(let Ke of T)Ke.t!==W&&Ee<Ke.x+Ke.w&&Ee+K.w>Ke.x&&Te<Ke.y+Ke.h+2&&Te+K.h+2>Ke.y&&(Te=Ke.y-K.h-4,Je=!0);if(!Je)break}Te=Math.max(l.top+4,Te),F.push({x:Ee,y:Te,w:K.w,h:K.h}),K.el.classList.toggle("old",ee>=3),K.el.style.transform=`translate3d(${Ee.toFixed(1)}px,${Te.toFixed(1)}px,0)`,K.el.style.zIndex=String(2e3+(100-ee))});let G=U;G.length=0;for(let[K,W]of i){if(!(P(K,Sn)&&!(W.data&&W.data.hidden))){W.shown&&(W.el.style.transform="translate3d(-9999px,0,0)",W.shown=!1);continue}if(Sn.project(k),Sn.z>1||Math.abs(Sn.x)>1.15||Math.abs(Sn.y)>1.15){W.shown&&(W.el.style.transform="translate3d(-9999px,0,0)",W.shown=!1);continue}(!W.w||W.sigW!==W.sig+W.cls)&&(W.w=W.el.offsetWidth||70,W.h=W.el.offsetHeight||20,W.sigW=W.sig+W.cls),W.ax=(Sn.x*.5+.5)*o,W.ay=(-Sn.y*.5+.5)*a,W.px=W.ax,W.py=W.ay,G.push(W)}for(let K=0;K<5;K++){for(let W=0;W<G.length;W++){let ee=G[W];for(let Ee=W+1;Ee<G.length;Ee++){let Te=G[Ee],Ie=(ee.w+Te.w)/2+3-Math.abs(ee.px-Te.px),Je=(ee.h+Te.h)/2+2-Math.abs(ee.py-Te.py);if(Ie>0&&Je>0)if(Je<Ie){let Ke=(ee.py<Te.py?-1:1)*Je/2;ee.py+=Ke,Te.py-=Ke}else{let Ke=(ee.px<Te.px?-1:1)*Ie/2;ee.px+=Ke,Te.px-=Ke}}}for(let W of G){let ee=W.px-W.ax,Ee=W.py-W.ay,Te=Math.hypot(ee,Ee);Te>28&&(W.px=W.ax+ee/Te*28,W.py=W.ay+Ee/Te*28)}}for(let K of G){let W=Math.max(l.left+2,Math.min(o-l.right-K.w-2,K.px-K.w/2)),ee=Math.max(l.top+2,Math.min(a-l.bottom-K.h-2,K.py-K.h/2));(!K.shown||Math.abs(W-((Y=K.wx)!=null?Y:-1e4))>.4||Math.abs(ee-((Q=K.wy)!=null?Q:-1e4))>.4)&&(K.el.style.transform=`translate3d(${W.toFixed(1)}px,${ee.toFixed(1)}px,0)`,K.wx=W,K.wy=ee);let Ee=K.data&&K.data.sel?"900":"5";Ee!==K.wz&&(K.el.style.zIndex=Ee,K.wz=Ee),K.shown=!0}}function B(k,O){let P=document.createElement("div");P.className="vkw-ripple",P.style.left=k+"px",P.style.top=O+"px",t.appendChild(P),setTimeout(()=>P.remove(),600)}return{el:t,setSize(k,O){o=k,a=O;for(let P of n.values())P.measured=!1},setInsets(k){l={top:k.top||0,bottom:k.bottom||0,left:k.left||0,right:k.right||0}},setCompact(k){if(k!==c){c=k;for(let O of n.values())O.sig="",O.measured=!1}},setTag:y,setPlaque:I,bubble:w,project:A,ripple:B,tags:n,plaques:i,sync(k,O){M(n,k),M(i,O);for(let[P,S]of r)k.has(P)||(S.el.remove(),r.delete(P))},setCamToggle(k,O,P){if(f.hidden=!k,!k)return;let S=O==="follow"?"f":"o";if(f.dataset.m!==S){f.dataset.m=S,f.innerHTML=O==="follow"?p:d;let L=O==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=L,f.setAttribute("aria-label",L)}f.style.right=12+(P.right||0)+"px",f.style.bottom=60+(P.bottom||0)+"px"},setRecenter(k,O){u.classList.toggle("show",!!k),u.style.right=12+(O.right||0)+"px",u.style.bottom=12+(O.bottom||0)+"px"},hitTag(k,O){for(let P of n.values())if(!(!P.vis||!P.data||!P.data.sel)&&k>=P.x-6&&k<=P.x+P.w+6&&O>=P.y-6&&O<=P.y+P.h+6)return P;return null},clear(){for(let k of[n,i,r]){for(let O of k.values())O.el.remove();k.clear()}},dispose(){t.remove(),TS()}}}var AS=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,Ha=null;function RS(){Ha||(Ha=document.createElement("style"),Ha.id="vkw-joy-style",Ha.textContent=AS,document.head.appendChild(Ha))}function zg(s,e={}){var U;RS();let t=(U=e.touch)!=null?U:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,c=0,l=null,h=0,u=0,f=!1,d=new Set;function p(A,B){i.style.transform=`translate3d(${(A*r).toFixed(1)}px,${(-B*r).toFixed(1)}px,0)`}function v(A){if(!f||l!=null)return;A.preventDefault(),A.stopPropagation(),l=A.pointerId,n.setPointerCapture&&n.setPointerCapture(l);let B=n.getBoundingClientRect();h=B.left+B.width/2,u=B.top+B.height/2,n.classList.add("act"),g(A)}function g(A){if(A.pointerId!==l)return;A.preventDefault();let B=(A.clientX-h)/r,k=-(A.clientY-u)/r,O=Math.hypot(B,k);O>1&&(B/=O,k/=O);let P=Math.hypot(B,k);if(P<.12)a=0,c=0;else{let S=(P-.12)/.88/P;a=B*S,c=k*S}p(B,k)}function m(A){A.pointerId===l&&(l=null,a=0,c=0,p(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",v),n.addEventListener("pointermove",g),n.addEventListener("pointerup",m),n.addEventListener("pointercancel",m);let y=A=>!!(A&&A.tagName&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.tagName==="SELECT"||A.isContentEditable)),I=A=>y(A)||y(document.activeElement),M={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function w(A){if(!f||A.ctrlKey||A.metaKey||A.altKey||I(A.target))return;let B=M[A.code];B&&(d.add(B),A.code.startsWith("Arrow")&&A.preventDefault())}function T(A){let B=M[A.code];B&&d.delete(B)}let x=A=>{y(A.target)&&d.clear()};window.addEventListener("focusin",x);let _=()=>d.clear();return window.addEventListener("keydown",w),window.addEventListener("keyup",T),window.addEventListener("blur",_),{touch:t,vector(A){let B=a,k=c;if(d.size){B+=(d.has("r")?1:0)-(d.has("l")?1:0),k+=(d.has("u")?1:0)-(d.has("d")?1:0);let O=Math.hypot(B,k);O>1&&(B/=O,k/=O)}return A.x=B,A.y=k,A},setEnabled(A){A!==f&&(f=A,n.classList.toggle("on",A&&t&&!o),A||(d.clear(),a=0,c=0,l=null,p(0,0),n.classList.remove("act")))},place(A,B,k){let O=A.joystick,P,S,L;if(O===null){o=!0,n.classList.remove("on");return}o=!1,O&&O.size>0?(L=Math.max(88,Math.min(160,O.size)),P=O.left||0,S=k-(O.bottom||0)-L):(L=112,P=(A.left||0)+18,S=Math.max((A.top||0)+10,k-(A.bottom||0)-18-L)),n.style.left=P+"px",n.style.top=S+"px",n.style.width=n.style.height=L+"px";let C=Math.round(L*.41);i.style.width=i.style.height=C+"px",i.style.margin=-C/2+"px 0 0 "+-C/2+"px",r=L*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",w),window.removeEventListener("keyup",T),window.removeEventListener("blur",_),window.removeEventListener("focusin",x),n.remove()}}}var kg=2.3;function Ga(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function wr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function CS(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,c=s.z+i*o,l=Math.hypot(a,c);if(l>=kg)return;let h=a,u=c;l<.01&&(h=-i,u=n);let f=Math.hypot(h,u)||1,d=kg+.25,p=n/Math.sqrt(r),v=i/Math.sqrt(r);t.push({x:h/f*d-p*1.2,z:u/f*d-v*1.2}),t.push({x:h/f*d+p*1.2,z:u/f*d+v*1.2})}function Bg(s,e){let t=s[s.length-1];t&&CS(t,e,s),s.push({x:e.x,z:e.z})}function IS(s,e,t,n){let i=ln(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(wr(e+i*o/r,n))}function Mh(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,c=Ga(e).a;if(n!=null){let l=wr(n,r);i.push(l),a=l,c=n}else if(Ga(e).r>o){let l=Ga(e),h=wr(l.a,r);i.push(h),a=h,c=l.a}if(t.house){let l=t.angle,h=Math.abs(ln(l-c)),u=wr(l,r);if(Ga(a).r>r-.8&&h<1.4?IS(i,c,l,r):Bg(i,u),t.peek){let d=t.house.peek,p=ln(Ga(d).a-l)>=0?1:-1,v=(t.halfWidth||3)+1.4,g=s.R,m=wr(l+p*(v/(g-2)),g-2.2),y=wr(l+p*(v/(g+1)),g+1.2),I=wr(l+p*((v-.6)/(g+3.4)),g+3.6);i.push(m,y,I,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else Bg(i,t);return i}function dd(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,c=i.r+.32;if(a<c*c){let l=Math.sqrt(a)||.001;s.x=i.x+r/l*c,s.z=i.z+o/l*c}}}function bh(s,e,t=.42){if(!e||!e.length||s.length<2)return s;let n=s;for(let i=0;i<3;i++){let r=[n[0]],o=!1;for(let a=1;a<n.length;a++){let c=r[r.length-1],l=n[a],h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=null,p=1,v=0;if(f>1e-4)for(let g of e){if(g.tag==="fire")continue;let m=((g.x-c.x)*h+(g.z-c.z)*u)/f;if(m<=.02||m>=.98)continue;let y=c.x+h*m-g.x,I=c.z+u*m-g.z,M=Math.hypot(y,I);M<g.r+t&&m<p&&(d=g,p=m,v=M)}if(d){let g=c.x+h*p-d.x,m=c.z+u*p-d.z;v<.001&&(g=-u,m=h);let y=Math.hypot(g,m)||1,I=d.r+t+.25;r.push({x:d.x+g/y*I,z:d.z+m/y*I}),o=!0}r.push(l)}if(n=r,!o)break}return n}function Sh(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)dd(t,e,null);return t}var wh=()=>typeof window!="undefined"&&window.VKRules||null;function Ls(s){let e=wh();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function PS(s,e){let t=wh();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function Hg(s,e,t){let n=wh();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=Ls(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!td[e.role];case"iftiraci":return!o&&!td[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return PS(s,t)?!1:!(t==="poison"&&o);default:return!1}}function wo(s){let e=wh();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,c]of o)a===c&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function Eh(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return fi.poison;if(n.witch.heal===e.id)return fi.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&fi[r.role])return fi[r.role];let a=(n.team||[]).filter(c=>c.targetId===e.id&&c.vampId!==r.id).map(c=>c.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?fi.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function Va(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function pd(s,e){let t=Ls(s);return t==="vote"?fi.vote.color:t==="shoot"?fi.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?fi.poison:fi.heal).color:(fi[s.me.role]||fi.vote).color:"#f2c12e"}function Gg(s){let e=new Map,t=null,n=new Map,i=-99,r=0;function o(p){for(let v of s.village.benchSlots)if(Math.hypot(p.x-v.x,p.z-v.z)<1.25)return v;return null}function a(p,v){let g=-p,m=-v,y=Math.hypot(g,m)||1,I=s.camera.position.x-p,M=s.camera.position.z-v,w=Math.hypot(I,M)||1;return Math.atan2(g/y*.45+I/w*.55,m/y*.45+M/w*.55)}function c(p){s.village.openDoor(p,1.3),s.sfxThrottled("door",.35)}function l(p,v,g,m){let y=s.village,I=y.layout;if(!I)return;let M=[];if(m){if(p.peeking=null,v.kind==="plaza"||v.kind==="gather")p.inside=null,p.pos.set(v.x,0,v.z),p.yaw=v.face!=null?v.face:a(v.x,v.z),p.faceYaw=p.yaw,p.setVisible(!0),p.run([{pose:v.pose||"idle",fade:0}]);else if(v.kind==="house"){let x=s.houseAnchors(v.house);if(!x)return;if(v.peek){p.inside=null;let _=Mh(I,x.approach,{house:x,angle:y.house(v.house).angle,peek:!0,halfWidth:y.house(v.house).info.hx});p.pos.set(x.peek.x,0,x.peek.z),p.yaw=Math.atan2(x.backWin.x-x.peek.x,x.backWin.z-x.peek.z),p.faceYaw=p.yaw,p.peeking=v.house,p.peekPath=_.slice(-5),p.setVisible(!0),p.run([{pose:"peek",fade:0}])}else p.inside=v.house,p.pos.set(x.inside.x,0,x.inside.z),p.setVisible(!1),p.run([{pose:"idle",fade:0}])}else v.kind==="gone"&&(p.setVisible(!1),p.run([]));return}if(v.kind==="gone"){p.visible&&(s.poofAt(p.pos.x,p.pos.z),p.setVisible(!1)),p.run([]);return}if(!p.visible&&!p.inside&&!p.peeking){if(v.kind==="plaza"||v.kind==="gather"){l(p,v,0,!0),s.fx.emit("magic",v.x,.8,v.z,"#f4e4c1",10);return}y.house(p.id)&&(p.inside=p.id)}g&&M.push({wait:g});let w={x:p.pos.x,z:p.pos.z},T=null;if(p.inside){let x=p.inside,_=s.houseAnchors(x),U=y.house(x);if(_&&U){if(v.kind==="house"&&v.house===x&&!v.peek)return;M.push({at:_.inside,face:_.rotY,snapFace:!0},{call:()=>c(x)},{wait:.12},{show:!0,call:A=>{A.inside=null}},{walk:[_.approach],mode:"walk"}),w=_.approach,T=U.angle}else p.inside=null}else if(p.peeking){if(v.kind==="house"&&v.peek&&v.house===p.peeking)return;let x=(p.peekPath||[]).slice().reverse();x.length>1&&(M.push({pose:"idle",fade:.2},{walk:x.slice(1),mode:"sneak",call:_=>{_.peeking=null}}),w=x[x.length-1]),p.peeking=null}if(v.kind==="plaza"||v.kind==="gather"){let x=Sh({x:v.x,z:v.z},s.obstacles),_=bh(Mh(I,w,x,T).map((A,B,k)=>B>0&&B<k.length-1?Sh(A,s.obstacles):A),s.obstacles);_.shift(),_.length&&M.push({walk:_,mode:v.mode||"walk"});let U=v.face!=null?v.face:a(x.x,x.z);M.push({face:U}),v.pose?M.push({pose:v.pose}):M.push({pose:"idle"})}else if(v.kind==="house"){let x=v.house,_=s.houseAnchors(x),U=y.house(x);if(!_||!U)return;let A=bh(Mh(I,w,{house:_,angle:U.angle,peek:!!v.peek,halfWidth:U.info.hx},T),s.obstacles);A.shift();let B=u(w,A)>12,k=v.mode||(B?v.house===p.id?"brisk":"sprint":"walk");if(v.peek){let O=A.slice(-2),P=A.slice(0,A.length-2);P.length&&M.push({walk:P,mode:k}),M.push({walk:O,mode:"sneak"}),M.push({faceTo:_.backWin},{pose:"peek",call:S=>{S.peeking=x,S.peekPath=A.slice(-5)}})}else{let O=v.budget;if(O!=null&&A.length){let P=u(w,A),S=Math.max(.6,O-(g||0)-1.4),L=P/S,C=L<2.4?"walk":L<3.4?"brisk":"sprint";if(L<=5)M.push({walk:A,mode:v.mode||C});else{let D=Math.max(.5,S-.5)*5,b=0,F=w,G=[];for(let Z of A){let de=Math.hypot(Z.x-F.x,Z.z-F.z);if(b+de>D)break;b+=de,G.push(Z),F=Z}G.length&&M.push({walk:G,mode:"sprint"}),M.push({call:Z=>{s.fx.emit("mist",Z.pos.x,.6,Z.pos.z,"#c9c2d3",12)},hide:!0},{wait:.25},{at:_.approach,face:Math.atan2(_.door.x-_.approach.x,_.door.z-_.approach.z),snapFace:!0,show:!0,call:()=>s.fx.emit("mist",_.approach.x,.6,_.approach.z,"#c9c2d3",12)})}}else A.length&&M.push({walk:A,mode:k});M.push({faceTo:_.door},{wait:.05},{call:()=>c(x)},{wait:.15},{walk:[_.inside],mode:O!=null?"brisk":"walk"},{hide:!0,call:P=>{P.inside=x,n.set(x,s.time+9+Math.random()*4)}})}}p.run(M)}function h(p,v){if(!p.visible||p.inside||p.peeking||p.claimed||p.base==="sit"&&!v.pose)return!1;let g=v.x-p.pos.x,m=v.z-p.pos.z,y=Math.hypot(g,m);if(y>6)return!1;let I=g*g+m*m;if(I>1e-4){let T=-(p.pos.x*g+p.pos.z*m)/I;if(T=T<0?0:T>1?1:T,Math.hypot(p.pos.x+g*T,p.pos.z+m*T)<2.5)return!1}let M=Sh({x:v.x,z:v.z},s.obstacles);p.retargetAt=s.time;let w=[];if(y>.05){let T=bh([{x:p.pos.x,z:p.pos.z},M],s.obstacles);T.shift(),w.push({walk:T,mode:y>3?"brisk":"walk"})}return w.push({wait:.5},{face:v.face!=null?v.face:a(M.x,M.z)},{pose:v.pose||"idle"}),p.run(w),!0}function u(p,v){let g=0,m=p;for(let y of v)g+=Math.hypot(y.x-m.x,y.z-m.z),m=y;return g}function f(p,v){let g=s.village,m=g.layout;if(!m||!p||!p.me)return;let{room:y,me:I,players:M}=p,w=y.phase,T=w==="reveal"||w==="night"||w==="day"||w==="hunter",x=!I.alive,_=w!==t;t=w;let U=wo(p),A=new Set(y.winners||[]),B=M.filter(C=>C.alive&&!C.left).sort((C,D)=>C.seat-D.seat).map(C=>C.id),k=Math.max(4.6,Math.min(7.5,m.Rp*.62)),O=C=>{let D=g.house(C.id),b=D?D.angle:C.seat/Math.max(1,M.length)*Ye;return{x:Math.sin(b)*k,z:Math.cos(b)*k,face:b+Math.PI}},P=new Map;if(w==="lobby"||w==="ended"){let C=[];for(let D of M){if(D.left)continue;let b=D.id===I.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,F=b?{x:b.x,z:b.z}:uh(m,D.pos?D.pos.x:.5,D.pos?D.pos.y:.8);C.push({id:D.id,x:F.x,z:F.z,fixed:!!b})}for(let D=0;D<4;D++)for(let b=0;b<C.length;b++)for(let F=b+1;F<C.length;F++){let G=C[b],Z=C[F],de=Z.x-G.x,Y=Z.z-G.z,Q=Math.hypot(de,Y);if(Q>=.95)continue;let K=Q>.001?de/Q:1,W=Q>.001?Y/Q:0,ee=(.95-Q)/2,Ee=G.fixed?0:Z.fixed?2:1,Te=Z.fixed?0:G.fixed?2:1;G.x-=K*ee*Ee,G.z-=W*ee*Ee,Z.x+=K*ee*Te,Z.z+=W*ee*Te}for(let D of C)P.set(D.id,{x:+D.x.toFixed(2),z:+D.z.toFixed(2)})}_&&w==="night"&&(i=s.time,r=s.leadInLeft?s.leadInLeft():3.6);let S=s.time-i,L=w==="night"&&S<r?Math.max(1,r-S):null;for(let C of M){let D=s.ensureChar(C);if(!D)continue;D.isMe=C.id===I.id;let b=!C.left&&(C.alive||w==="hunter"&&C.id===y.hunterId),F;if(!b)F={kind:"gone"};else if(w==="reveal"){let Q=B.indexOf(C.id),K=Math.max(B.length,1),W=Q/K*Ye+.3,ee=4.3+(K>12?Q%2*1.3:0);F={kind:"gather",x:Math.sin(W)*ee,z:Math.cos(W)*ee,face:W+Math.PI,pose:"warm"}}else if(w==="night"){let Q=U.get(C.id);Q&&Q!==C.id&&g.house(Q)?F={kind:"house",house:Q,peek:D.isMe&&I.role==="gozcu"}:F={kind:"house",house:C.id}}else if(w==="day"||w==="hunter"){let Q=O(C);F={kind:"plaza",x:+Q.x.toFixed(2),z:+Q.z.toFixed(2),face:Q.face,pose:C.connected?null:"sit",ring:!0}}else{let Q=P.get(C.id)||uh(m,C.pos?C.pos.x:.5,C.pos?C.pos.y:.8),K=null,W=null,ee=o(Q);C.connected?w==="ended"?K=A.has(C.id)?"cheer":null:ee&&(K="sit",W=ee.a+Math.PI):K="sit",F={kind:"plaza",x:Q.x,z:Q.z,pose:K,face:W}}L!=null&&F.kind==="house"&&(F.budget=L);let G=F.kind+":"+(F.house||"")+":"+(F.peek?"p":"")+":"+(F.x!=null?F.x.toFixed(2)+","+F.z.toFixed(2):"")+":"+(F.pose||""),Z=e.get(C.id),de=v||D.fresh;if(D.claimed&&!de){e.delete(C.id);continue}if(D.fresh=!1,D.isMe&&s.driving&&F.kind==="plaza"&&!de)e.set(C.id,"drive");else if(Z!==G||de){e.set(C.id,G);let Q=0;_&&!de?w==="night"?Q=D.isMe?.2:Math.random()*1.6:w==="day"||w==="hunter"?Q=.3+Math.random()*2.2:w==="reveal"&&(Q=Math.random()*.8):Z&&Z.startsWith("house")&&F.kind==="house"&&w==="night"&&!de&&(Q=.1),F.budget!=null&&(Q=D.isMe?.1:Math.random()*.5),!de&&!_&&F.kind==="plaza"&&Z&&Z.startsWith("plaza")&&h(D,F)||l(D,F,Q,de)}if(C.left?!1:!C.alive&&(T&&x||w==="ended")){let Q=s.ensureGhost(C);if(Q){let K=C.id===I.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,W=K?{x:K.x,z:K.z}:uh(m,C.pos?C.pos.x:.5,C.pos?C.pos.y:.8),ee="g:"+W.x.toFixed(2)+","+W.z.toFixed(2);C.id===I.id&&s.driving&&!Q.fresh?e.set("g"+C.id,"drive"):(e.get("g"+C.id)!==ee||Q.fresh)&&(e.set("g"+C.id,ee),Q.fresh&&(Q.pos.set(W.x,0,W.z),Q.fresh=!1,Q.yaw=a(W.x,W.z),s.fx.emit("magic",W.x,1,W.z,"#d8d0ff",12)),Q.isMe=C.id===I.id,Q.run([{walk:[{x:W.x,z:W.z}],mode:"stroll"},{face:a(W.x,W.z)}]))}}else s.removeGhost(C.id)}for(let C of M){let D=g.house(C.id);if(D)if(D.dead=T||w==="ended"?!C.alive||C.left:!1,w==="night"){let b=(n.get(C.id)||0)>s.time?1:0;for(let[,F]of U)F===C.id&&(b=Math.max(b,.8));g.setLit(C.id,b)}else g.setLit(C.id,1)}w!=="night"&&n.clear()}function d(p){if(!p||p.room.phase!=="night")return;let v=s.village,g=wo(p);for(let m of p.players){if(!v.house(m.id))continue;let y=(n.get(m.id)||0)>s.time?1:0;for(let[,I]of g)I===m.id&&(y=Math.max(y,.8));v.setLit(m.id,y)}}return{apply:f,tick:d,reset(){e.clear(),t=null,n=new Map},forget(p){e.delete(p),e.delete("g"+p)}}}var Wa=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],Vg=["top","hor","sun","sky","gnd"];for(let s of Wa)for(let e of Vg)s[e]=new Ce(s[e]);function Wg(){return{h:12,top:new Ce,hor:new Ce,sun:new Ce,sky:new Ce,gnd:new Ce,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new q,moonDir:new q,lightDir:new q,sunVis:0,moonVis:0,night:0,dusk:0}}function NS(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ct(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function DS(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ct(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var Th=new q,Ah=new q;function Xg(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<Wa.length-2&&Wa[t+1].h<=s;)t++;let n=Wa[t],i=Wa[t+1],r=Cs(ct((s-n.h)/(i.h-n.h),0,1));for(let a of Vg)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,NS(s,e.sunDir),DS(s,e.moonDir),e.sunVis=ct((e.sunDir.y+.06)/.12,0,1),e.moonVis=ct((e.moonDir.y+.04)/.12,0,1)*ct(1-e.sunVis*1.2,0,1);let o=ct((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ct(1-Math.abs(e.sunDir.y-.05)/.22,0,1),Th.copy(e.sunDir),Th.y=Math.max(Th.y,.24),Ah.copy(e.moonDir),Ah.y=Math.max(Ah.y,.45),e.lightDir.copy(Th.normalize()).multiplyScalar(o).addScaledVector(Ah.normalize(),1-o).normalize(),e}function qg(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Ns={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},md=["saver","low","medium","high"];function Yg(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function Kg(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function Zg(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var Jg="vkw.quality.v2";function US(){try{return JSON.parse(localStorage.getItem(Jg)||"null")}catch{return null}}function FS(s){try{localStorage.setItem(Jg,JSON.stringify(s))}catch{}}var Rh=class{constructor(e){let t=US();if(this.fails={},t&&Array.isArray(t.failed))for(let n of t.failed)this.fails[n]=1;else if(t&&t.fails&&typeof t.fails=="object")for(let n of Object.keys(t.fails))Ns[n]&&(this.fails[n]=+t.fails[n]||0);this.level=t&&Ns[t.tier]?t.tier:e,this.remembered=!!(t&&Ns[t.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){FS({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((g,m)=>g-m),r=this.cpu.slice().sort((g,m)=>g-m),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,c=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let h=Ns[this.level].fps===30,u=h?40:30,f=md.indexOf(this.level),d=o>u||a>u*1.8,p=h?a<36&&c<11:o<18&&a<26;if(d?(this.bad+=o>u*1.6?2:1,this.good=0):p?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=md[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let v=md[f+1];return v&&this.good>=(this.fails[v]?30:12)&&(this.fails[v]||0)<2?(this.level=v,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},Ch=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((l,h)=>l-h),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((l,h)=>l+h,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let l=this.trial;if(this.trial=null,o>l.p90*.92)return this.scale=l.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let c=a<o*.55;return o>i*1.2&&c&&this.scale>.6?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(.6,+(this.scale-.1).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function gd(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var $g=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function jg(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!gd())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=Kg(),a=Yg(o),c=document.createElement("div");c.className="vkw-root",s.appendChild(c);let l;try{l=new xo({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw c.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}l.outputColorSpace=zt,l.toneMapping=gr,l.toneMappingExposure=1,l.shadowMap.type=dr;let h=l.domElement;h.setAttribute("aria-label","K\xF6y"),c.appendChild(h);let u=document.createElement("div");u.className="vkw-vignette",c.appendChild(u);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",c.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",c.appendChild(d);function p(){d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0"}let v=new tr;v.fog=new Zo(2475,50,250);let g=new en(40,1,.3,900),m=new _h(g);m.clampFn=E=>{let X=b&&b.layout;if(!X||ie!=="game")return;let j=Math.hypot(E.x,E.z),ae=X.R-6.2;if(j>ae&&j<X.R+6&&E.y<9.5){let ve=ae/j,xe=Math.max(0,(E.y-7)/2.5),Re=ve+(1-ve)*xe;E.x*=Re,E.z*=Re}};let y="auto",I=new Rh(Zg(o)),M=new Ch;n.renderScale=1;let w=Ns[I.level],T={...a,sparks:70,fireflies:56,clouds:w.clouds,trees:a.trees,scatter:a.scatter},x=new hr(16777215,4473924,1);v.add(x);let _=new ai(16777215,2);_.shadow.bias=-6e-4,_.shadow.normalBias=.03,v.add(_),v.add(_.target);let U=new ur(16747050,20,17,1.5);U.position.set(0,1.4,0),v.add(U);let A=dg(v,T),B=mg(v,T),k=new Gi("glow",128),O=new Gi("pool",128),P=new Gi("blob",64,wi),S=new Gi("ring",48);for(let E of[O,P,S,k])v.add(E.mesh);let L=new gh(160);v.add(L.normal.mesh),v.add(L.add.mesh);let C=Ag(T);v.add(C.group);let D=Rg(56);v.add(D.points);let b=null,F=new Map,G=new Map,Z=new Set,de=new Map,Y=0,Q=[],K=null,W=null,ee=null,Ee="",Te=null,Ie=1,Je=!1,Ke=null,ke=null,dt=Ig(v),Ut=new ai(9417983,0);v.add(Ut),v.add(Ut.target);let Ot=new Map;function Tt(E,X){let j=(Ot.get(E)||0)+1;Ot.set(E,j),(j===1||j===50)&&console.warn("[VKWorld] "+E+" hatas\u0131 (yakaland\u0131, devam ediliyor):",X)}let _t={rig:m,camera:g,chars:F,scene:v,time:0,get village(){return b},fx:L,obstacles:[],localMove:null,sfx(E,X){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(E,X)}catch{}},sfxThrottled(E,X){let j=performance.now();(_e[E]||0)+X*1e3>j||(_e[E]=j,_t.sfx(E))},sfxStep(){_t.sfxThrottled("step",.32)},reapply(){Oe&&J&&ie==="game"&&Ai(!1)},ticker:Q,assets:Rs,get room(){return W},getState(){return J},playerById(E){let X=J&&J.players.find(j=>j.id===E);return X?{id:X.id,look:X.look,name:X.name,role:X.role}:null},makeActor(E,X,j){let ae="cine:"+ ++Y,ve=new Ti(_t,ae,E,{ghost:j==="ghost"});return ve.cineKey=ae,v.add(ve.root),de.set(ae,{ch:ve,name:X||"",color:E.color|0}),X&&(Je=!0),ve},dropActor(E){de.delete(E.cineKey),E.dispose(),Je=!0},isDeadShown(E){let X=J&&J.players.find(j=>j.id===E);return!!(X&&J.room.phase!=="lobby"&&(!X.alive||X.left)&&!(J.room.phase==="hunter"&&J.room.hunterId===E))},openRoom(E){return di(E,"cine")},endCineRoom(){ee==="cine"&&Us()},setTodOverride(E,X){K=E,X&&E!=null&&(Me=E)},cineTint(){},moonOverride(E){Te=E?new Ce(E):null},fogBoost(E){return Ie=E,()=>{Ie=1}},footDust(E,X){w.name!=="low"&&ie==="game"&&L.emit("dust",E,.05,X,ke&&ke.snow?"#e8eef5":null,2)},houseAnchors(E){let X=b&&b.house(E);return X?b.anchors(X):null},layoutR(){return b&&b.layout?b.layout.R:15},meId(){return J&&J.me?J.me.id:null},leadInLeft(){let E=J&&J.room&&J.room.timerFrom;return E?ct((E-(Date.now()+jt))/1e3-.3,1.2,4.5):3.6},flash(E,X){if(!E){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${X||"#d7263d"}55, ${X||"#d7263d"}cc)`,f.style.opacity=String(E),clearTimeout(Ae),Ae=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(E,X){L.emit("poof",E,.4,X,null,16),_t.sfxThrottled("poof",.2)},holdDeaths(E){Z.clear();for(let X of E)Z.add(X)},releaseDeaths(){Z.size&&(Z.clear(),_t.reapply())},markDead(E,X={}){Z.delete(E);let j=F.get(E);j&&j.visible&&!j.claimed&&(X.quiet||_t.poofAt(j.pos.x,j.pos.z),j.setVisible(!1)),b&&b.setDead(E,!0,j?j.look.color:0,X.drop)},ensureChar(E){if(!Oe)return null;let X=F.get(E.id);return X?X.setLook(E.look):(X=new Ti(_t,E.id,E.look),X.fresh=!0,F.set(E.id,X),v.add(X.root),Pe(X)),X},ensureGhost(E){if(!Hn("characters/ghost.glb"))return null;let X=G.get(E.id);return X||(X=new Ti(_t,E.id,E.look,{ghost:!0}),X.fresh=!0,G.set(E.id,X),v.add(X.root)),X},removeGhost(E){let X=G.get(E);X&&(X.dispose(),G.delete(E))}},_e={},Ae=0,ge=Og(c,{onTagTap(E){re(E,!0)},onPlaqueTap(E){z.has(E)&&fe(E)},onRecenter(){Ed()},onCamToggle(){Td()}}),et=zg(c,{}),H=Dg(_t);Ug(H,_t);let he=Gg(_t),J=null,we={},ie="menu",Oe=!1,De=!1,Ve="",z=new Set,R=new Set,ne=null,Me=18.3,pe=18.3,me=Wg(),ye={fog:1,tint:new Ce("#ffffff"),tintAmt:0,moon:new Ce("#eef2ff"),stars:1,weather:"none"},ue=new Ce,le=!0,ce=0,V=new q,te=1,se=1,be=1,Se={top:0,bottom:0,left:0,right:0};function Pe(E){E.model.traverse(X=>{X.isMesh&&(X.castShadow=w.charShadow)})}function qe(E,X=!0){w=Ns[E];let j=window.devicePixelRatio||1;be=Math.min(j,o?w.pxMobile:w.px),l.setPixelRatio(be*(n.renderScale||1)),l.setSize(te,se,!1);let ae=w.shadows>0;l.shadowMap.enabled!==ae&&(l.shadowMap.enabled=ae,v.traverse(ve=>{ve.material&&(Array.isArray(ve.material)?ve.material:[ve.material]).forEach(xe=>{xe.needsUpdate=!0})})),_.castShadow=ae,ae&&(_.shadow.mapSize.x!==w.shadowSize&&(_.shadow.mapSize.set(w.shadowSize,w.shadowSize),_.shadow.map&&(_.shadow.map.dispose(),_.shadow.map=null)),l.shadowMap.autoUpdate=w.shadows===2);for(let ve of F.values())Pe(ve);if(T.clouds=w.clouds,le=!0,X&&t.onQuality)try{t.onQuality(E)}catch{}}function vt(){let E=c.getBoundingClientRect();te=Math.max(1,Math.round(E.width)),se=Math.max(1,Math.round(E.height)),l.setSize(te,se,!1),m.setSize(te,se),ge.setSize(te,se),et.place(Se,te,se),Vn(!0)}let Le=null;window.ResizeObserver&&(Le=new ResizeObserver(()=>vt()),Le.observe(c));let it=()=>vt();window.addEventListener("resize",it),window.addEventListener("orientationchange",it),qe(I.level,!1),vt();let bt=yo.chars.length+yo.village.length;br(["village","chars"],(E,X)=>{if(!De&&t.onProgress)try{t.onProgress(E,X)}catch{}}).then(()=>{if(!De){if(Be(),Oe=!0,J&&ie==="game"&&Ai(!0),t.onReady)try{t.onReady()}catch{}return br(["extra"]).then(()=>{if(!De)return b.onExtraLoaded(),J&&Ai(!1),br(["cine"])})}}).catch(E=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",E),t.onError)try{t.onError(E)}catch{}});function Be(){b=wg(v,T,null,B),Dt(ie==="menu"||!J?null:J),D.place(8,40),Vn(!0)}function Dt(E){let X,j=null;if(!E||ie==="menu")X=$g;else{let Re=E.room.phase==="lobby";X=E.players.filter(st=>!(Re&&st.left)).map(st=>{var Ze;return{id:st.id,seat:(Ze=st.seat)!=null?Ze:0}}),j=E.me?E.me.id:null,X.length||(X=$g)}let ae=X.map(Re=>Re.id+"@"+Re.seat).join(",")+"|"+j;if(ae===Ve)return!1;let ve=!!Ve&&E&&E.room.phase==="lobby"&&ie==="game"&&!Ve.startsWith("menu-");Ve=ae;let xe=xg(X,j);b.setLayout(xe,ve),$t(xe),D.place(xe.Rp+1,xe.R+14),le=!0,ve||he.reset();for(let Re of F.values())ve||(Re.fresh=!0);return!0}function $t(E){let X=[{x:0,z:0,r:1.6,tag:"fire"}];for(let j of b.benchSlots){let ae=Math.cos(j.a),ve=-Math.sin(j.a);for(let xe of j.small?[-.45,.45]:[-.85,0,.85])X.push({x:j.x+ae*xe,z:j.z+ve*xe,r:.3,tag:"bench"})}for(let j of b.lampList())j.small||X.push({x:j.x,z:j.z,r:.35,tag:"lamp"});_t.obstacles=X}function di(E,X){if(W||(W=Lg(_t)),!W.ready)return null;let j=_t.playerById(E)||{id:E,look:{color:0,hat:0,skin:0},name:""};return W.hide(),W.show(j),ee=X,Je=!0,p(),W}function Us(){W&&W.hide();let E=ee;ee=null,Ee="",E&&((E==="cine"||!H.running)&&m.setOverride(null,!0),p()),Je=!0}function Eo(){if(!J||ie!=="game"||!Oe||H.running)return null;let{room:E,me:X}=J;if(E.phase!=="night"||!X.alive)return null;let j=F.get(X.id);return j?j.inside&&j.inside!==X.id&&b.house(j.inside)?{mode:"visit",house:j.inside}:j.peeking&&b.house(j.peeking)?{mode:"window",house:j.peeking}:null:null}function Lh(E,X){let j=W.L,ae=xe=>W.W(xe),ve=[j.bedside,j.bedside2,{x:-1.6,z:.9}][X%3];switch(E){case"vampir":return[{walk:[ae(ve)],mode:"sneak"},{faceTo:ae({x:j.sleeper.x,z:-1.4})},{pose:"loom"},{wait:2.2+Math.random()},{once:"attack-melee-right",opts:{timeScale:.45}},{wait:1.5}];case"doktor":return[{walk:[ae(j.bedfoot)],mode:"walk"},{faceTo:ae({x:j.sleeper.x,z:-1.6})},{pose:"hold"},{wait:3.5},{once:"interact-left",opts:{timeScale:.6}},{wait:2}];case"kahin":return[{walk:[ae({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:ae(j.bookcase)},{once:"pick-up",opts:{timeScale:.7}},{walk:[ae({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:ae({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.7}},{walk:[ae({x:1.5,z:-.6})],mode:"sneak"},{faceTo:ae({x:1.6,z:-1.5})},{once:"interact-left",opts:{timeScale:.7}}];case"cadi":return[{walk:[ae(ve)],mode:"sneak"},{faceTo:ae({x:j.sleeper.x,z:-1.3})},{pose:"hold"},{wait:1.8},{once:"interact-right",opts:{timeScale:.5}},{wait:1.8}];case"iftiraci":return[{walk:[ae({x:-.3,z:-1.75})],mode:"sneak"},{faceTo:ae({x:-.3,z:-2.8})},{pose:"peek"},{wait:1.2},{once:"pick-up",opts:{timeScale:.6}},{wait:1.6}];default:return[{walk:[ae(j.bedfoot)],mode:"walk"},{faceTo:ae(j.bed)},{wait:3}]}}let Xa={doktor:["furniture","lantern",.55],cadi:["clues","potion",.75],iftiraci:["clues","key",.9]};function qa(E,X){let j=di(E.house,E.mode);if(!j)return!1;let ae=J.me,ve=_t.playerById(ae.id),xe=m.portrait;if(E.mode==="visit"){[{id:ae.id,look:ve.look,name:ve.name,role:ae.role},...X.map(Ze=>{let tt=_t.playerById(Ze);return tt?{id:Ze,look:tt.look,name:tt.name,role:tt.role||"vampir"}:null}).filter(Boolean)].forEach((Ze,tt)=>{let mt=j.addActor("a"+tt,Ze.look,Ze.name,j.L.doorIn,-Math.PI/2);mt.roomRole=Ze.role,mt.roomIndex=tt;let Fe=Xa[Ze.role];if(Fe){let ot=Mn(Fe[0],Fe[1]);if(ot){let ut=ot.clone();ut.userData.holdScale=Fe[2]/2.8,mt.hold(ut,"right",[0,-.15,.06])}}});let st=j.shot("inside",xe);m.setOverride({pos:st.pos,look:st.look,fov:st.fov,k:60},!0)}else{j.addActor("gozcu",ve.look,"",j.L.winOut,Math.PI/2).setBase("peek",0);let st=j.shot("window",xe);m.setOverride({pos:st.pos,look:st.look,fov:st.fov,k:60},!0)}return!0}function Vi(){if(!Oe||ee==="cine")return;let E=Eo();if(E){let X=wo(J),j=[];for(let[ve,xe]of X)xe===E.house&&ve!==J.me.id&&j.push(ve);let ae=E.mode+":"+E.house+":"+j.join(",")+":"+(m.portrait?"p":"l");if(ae!==Ee&&qa(E,j)&&(Ee=ae),W&&E.mode==="visit")for(let ve of W.actors.values())ve.ch.busy||ve.ch.run(Lh(ve.ch.roomRole,ve.ch.roomIndex))}else(ee==="visit"||ee==="window")&&Us()}function Wi(E){E!==Ke&&(Ke=E,ke=Fg(E),ye.fog=ke.fog,ye.tint.set(ke.tint),ye.tintAmt=ke.tintAmt,ye.moon.set(ke.moon),ye.stars=ke.stars,ye.weather=ke.weather,ye.nightTint=!!ke.nightTint,dt.set(ke.weather),b&&b.setTheme(ke))}function Ya(E,X){if(!De&&(J=E,we=X||{},!!Oe))try{Ai(!1)}catch(j){Tt("durum",j)}}function Ai(E){if(!J||ie!=="game")return;let X=Dt(J),{room:j,players:ae}=J;Wi(j.scenario&&j.phase!=="lobby"?j.scenario.id:null);let ve=j.phase!=="lobby",xe=new Set;for(let Re of ae)xe.add(Re.id),b.setOwner(Re.id,Re.look?Re.look.color:-1,Re.name),b.setDead(Re.id,ve&&(!Re.alive||Re.left)&&!Z.has(Re.id),Re.look?Re.look.color:0);for(let[Re,st]of F)xe.has(Re)||(st.dispose(),F.delete(Re),he.forget(Re));for(let Re of[...G.keys()])xe.has(Re)||_t.removeGhost(Re);if(j.phase==="lobby")for(let Re of ae)b.tombOf(Re.id)&&b.setDead(Re.id,!1);he.apply(J,E||X&&j.phase!=="lobby"),z=new Set(ae.filter(Re=>Hg(J,Re,we.witchMode)).map(Re=>Re.id)),R=new Set(wo(J).keys()),Xi(),Vn(!1)}function Xi(){if(!J)return;let{room:E,me:X,players:j,day:ae}=J,ve=E.phase,xe=Ls(J),Re=pd(J,we.witchMode),st=new Map(j.map(Fe=>[Fe.id,Fe])),Ze=new Set,tt=new Set,mt=j.filter(Fe=>!Fe.left).length;ge.setCompact(mt>7&&te<700||mt>12);for(let Fe of j){let ot=F.get(Fe.id),ut=G.get(Fe.id);if(ot||ut){Ze.add(Fe.id);let Ue=null,nt=ae&&ae.votes&&ae.votes[Fe.id];nt&&nt.length&&(Ue={total:nt.reduce((Qn,Hs)=>Qn+(Hs.w||1),0),dots:nt.map(Qn=>({color:st.get(Qn.id)?bn[st.get(Qn.id).look.color]:"#999",w:Qn.w||1}))});let Ft=(Fe.isHost&&ve==="lobby"?"\u{1F451}":"")+(!Fe.connected&&!Fe.left?"\u{1F4F4}":"")+(ae&&ae.sleeping&&ae.sleeping.includes(Fe.id)?"\u{1F4A4}":"")+(ae&&ae.voted&&ae.voted.includes(Fe.id)&&!(ae.sleeping||[]).includes(Fe.id)?"\u2714":""),pt=xe!=="night"&&z.has(Fe.id);ge.setTag(Fe.id,{name:Fe.name,job:Fe.job&&Fe.job.label?Fe.job.label:"",color:Fe.look.color,badges:Ft,me:Fe.id===X.id,off:!Fe.connected,dead:!Fe.alive,sel:pt,picked:Va(J,Fe)&&xe!=="night",hover:ne===Fe.id&&pt,selColor:Re,mark:xe!=="night"?Eh(J,Fe,we.witchMode):ve==="night"?null:Eh(J,Fe,we.witchMode),votes:Ue})}if(b.house(Fe.id)){tt.add(Fe.id);let Ue=xe==="night"&&z.has(Fe.id),nt=ve==="lobby"||ve==="night"&&xe==="night"||ve==="reveal";ge.setPlaque(Fe.id,{name:Fe.name,color:Fe.look.color,sel:Ue,picked:ve==="night"&&Va(J,Fe),dim:!nt,hidden:!nt,dead:ve!=="lobby"&&(!Fe.alive||Fe.left),selColor:Re,mark:ve==="night"?Eh(J,Fe,we.witchMode):null})}}for(let[Fe,ot]of de)ot.name&&(Ze.add(Fe),ge.setTag(Fe,{name:ot.name,job:"",color:ot.color,badges:"",me:!1}));if(_t.room&&ee){for(let[Fe,ot]of _t.room.actors)if(ot.name){let ut="room:"+Fe;Ze.add(ut),ge.setTag(ut,{name:ot.name,job:"",color:ot.color,badges:"",me:!1})}}ge.sync(Ze,tt),Je=!1}let Nn=[];for(let E=0;E<64;E++)Nn.push(new q);let cn="";function Vn(E){if(!b||!b.layout){m.setShot({target:new q(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:E});return}let X=b.layout,j=m.portrait,ae=J&&ie==="game"?J.room.phase:"menu",ve=J&&ie==="game"?Ls(J):null,xe;ae==="menu"?xe="menu":ae==="night"?xe=ve==="night"?"overview":"sleep":ae==="reveal"?xe="gather":Sd()?xe="follow":xe="plaza";let Re=xe!==cn;cn=xe,Re&&(m.recenter(),xe==="follow"&&(Ge.init=!1));let st=m.shot;if(xe==="follow"){let Ze=0,tt=X.R+3.6;for(let mt=0;mt<24;mt++){let Fe=mt/24*Ye;Nn[Ze++].set(Math.sin(Fe)*tt,0,Math.cos(Fe)*tt)}Ge.ovDist=m.fit(Md,Ge.az,j?1.15:.98,40,Nn.slice(0,Ze),.94,8,220),st.dynamic=!1,st.points=null,(Re||E)&&Ad(0,!0);return}if(xe==="menu"){let Ze=X.Rp+(j?3.5:2.5);m.setShot({kind:xe,target:new q(0,j?3.4:3,0),az:st.az,el:j?.2:.16,dist:Ze,fov:j?64:50,speed:1.2}),st.dynamic=!1}else if(xe==="overview"||xe==="sleep"){let Ze=0,tt=X.R+3.6;for(let Fe=0;Fe<24;Fe++){let ot=Fe/24*Ye;Nn[Ze++].set(Math.sin(ot)*tt,0,Math.cos(ot)*tt),Nn[Ze++].set(Math.sin(ot)*X.R,4.5,Math.cos(ot)*X.R)}let mt=xe==="overview"?j?1.2:.98:j?.95:.62;m.setShot({kind:xe,target:new q(0,0,xe==="overview"?0:-X.R*.08),az:xe==="sleep"?.25:0,el:mt,fov:40,points:Nn.slice(0,Ze),margin:xe==="overview"?.94:1.04,snap:E,speed:1.6}),st.dynamic=!1}else{let Ze=Nn,tt=0,mt=xe==="gather"?5.6:3.2;for(let ot=0;ot<8;ot++){let ut=ot/8*Ye;Ze[tt++].set(Math.sin(ut)*mt,0,Math.cos(ut)*mt)}for(let ot of F.values()){if(!ot.visible||tt>60)continue;let ut=ot.path&&ot.path.length?ot.path[ot.path.length-1]:ot.pos;Math.hypot(ut.x,ut.z)>X.Rp+1.5||(Ze[tt++].set(ut.x,0,ut.z),Ze[tt++].set(ut.x,2.4,ut.z))}for(let ot of G.values())tt<62&&(Ze[tt++].set(ot.pos.x,2.6,ot.pos.z),Ze[tt++].set(ot.pos.x,0,ot.pos.z));let Fe=xe==="gather"?j?.6:.5:j?1.02:.66;m.setShot({kind:xe,target:Ld(Ze,tt),az:0,el:Fe,fov:j?44:38,points:Ze.slice(0,tt),margin:j?.92:.8,minDist:8,snap:E,speed:1.8}),st.dynamic=!0,st.points=Ze.slice(0,tt)}}let Ka=new xa,To=new lt,$n=new q,ds=new q,Za=new ni(new q(0,1,0),0);function Ja(E,X){return To.set(E/te*2-1,-(X/se)*2+1),Ka.setFromCamera(To,g),Ka.ray}function Ao(E,X,j,ae=34){let ve=null,xe=1/0;for(let[Re,st]of F){if(!st.visible||!j(Re)||($n.set(st.pos.x,.1,st.pos.z).project(g),ds.set(st.pos.x,st.headY,st.pos.z).project(g),$n.z>1))continue;let Ze=($n.x*.5+.5)*te,tt=(-$n.y*.5+.5)*se,mt=(ds.x*.5+.5)*te,Fe=(-ds.y*.5+.5)*se,ot=mt-Ze,ut=Fe-tt,Ue=ot*ot+ut*ut||1,nt=ct(((E-Ze)*ot+(X-tt)*ut)/Ue,0,1),Ft=Math.hypot(E-(Ze+ot*nt),X-(tt+ut*nt)),pt=Math.max(ae,Math.sqrt(Ue)*.55);Ft<pt&&Ft<xe&&(xe=Ft,ve=Re)}return ve}function N(E,X,j){let ae=b.layout,ve=null,xe=1/0;for(let ut of b.houses.values()){if(ut.removing||j&&!z.has(ut.id)||($n.set(ut.cx,1.6,ut.cz).project(g),$n.z>1))continue;let Ue=($n.x*.5+.5)*te,nt=(-$n.y*.5+.5)*se;ds.set(ut.cx+Math.cos(ut.crot)*ut.info.hx,1.6,ut.cz-Math.sin(ut.crot)*ut.info.hx).project(g);let Ft=Math.max(26,Math.hypot((ds.x*.5+.5)*te-Ue,(-ds.y*.5+.5)*se-nt)*1.25),pt=Math.hypot(E-Ue,X-nt);pt<Ft&&pt<xe&&(xe=pt,ve=ut)}if(ve)return ve.id;let Re=Ja(E,X),st=b.pickHouse(Re);if(st&&(!j||z.has(st.id)))return st.id;let Ze=Re.intersectPlane(Za,$n);if(!Ze)return null;let tt=Math.hypot(Ze.x,Ze.z);if(tt<ae.Rp*.75||tt>ae.R+8)return null;let mt=Math.atan2(Ze.x,Ze.z),Fe=null,ot=1/0;for(let ut of b.houses.values()){if(j&&!z.has(ut.id))continue;let Ue=Math.abs(((mt-ut.angle+Math.PI)%Ye+Ye)%Ye-Math.PI);Ue<ot&&(ot=Ue,Fe=ut)}return Fe&&ot<ae.step*.5?Fe.id:null}function $(E,X){if(!J||ie!=="game")return null;let j=Ls(J);if(j==="night"){let ae=N(E,X,!0);return ae&&z.has(ae)?ae:null}return j==="vote"||j==="shoot"?Ao(E,X,ae=>z.has(ae)):null}function fe(E){if(t.onPick)try{t.onPick(E)}catch{}}function re(E,X){if(!J)return;if(z.has(E)){fe(E);return}let j=J.room.phase;E===J.me.id&&(j==="lobby"||j==="ended")&&t.onSelf&&t.onSelf()}function oe(E,X){if(!J||ie!=="game"||!Oe)return;let j=$(E,X);if(j){fe(j),ge.ripple(E,X);return}let ae=J.room.phase,ve=J.me;if((ae==="lobby"||ae==="ended")&&Ao(E,X,xe=>xe===ve.id,26)){t.onSelf&&t.onSelf();return}if(ae==="lobby"||ae==="ended"){let xe=Ja(E,X).intersectPlane(Za,$n);if(!xe)return;let Re=b.layout,st=Math.hypot(xe.x,xe.z);if(st>Re.R+4)return;let Ze=Math.atan2(xe.x,xe.z);st=ct(st,Re.Rp*.2,Re.Rp*.96);let tt=Math.sin(Ze)*st,mt=Math.cos(Ze)*st,Fe=sd(Re,tt,mt);if(_t.localMove={x:tt,z:mt,until:performance.now()+1500},ge.ripple(E,X),t.onMove)try{t.onMove(Fe.x,Fe.y)}catch{}Ai(!1)}}let Ne=new Map,Xe=!1,ze=0,He=0,Qe=0,ft=0;function St(E){let X=c.getBoundingClientRect();return{x:E.clientX-X.left,y:E.clientY-X.top}}function $e(E){if(E.target!==h)return;h.setPointerCapture&&h.setPointerCapture(E.pointerId);let X=St(E);if(Ne.set(E.pointerId,X),Ne.size===1&&(Xe=!1,ze=performance.now(),He=X.x,Qe=X.y),Ne.size===2){let[j,ae]=[...Ne.values()];ft=Math.hypot(j.x-ae.x,j.y-ae.y),Xe=!0}}function Rt(E){let X=St(E);if(!Ne.has(E.pointerId)){E.pointerType==="mouse"&&xn(X.x,X.y);return}let j=Ne.get(E.pointerId);if(Ne.set(E.pointerId,X),Ne.size===1)!Xe&&Math.hypot(X.x-He,X.y-Qe)>9&&(Xe=!0),Xe&&ie==="game"&&(cn==="follow"?s0(X.x-j.x,X.y-j.y):m.drag(X.x-j.x,X.y-j.y));else if(Ne.size===2){let[ae,ve]=[...Ne.values()],xe=Math.hypot(ae.x-ve.x,ae.y-ve.y);ft>0&&xe>0&&ie==="game"&&(cn==="follow"?wd(ft/xe):m.zoom(ft/xe)),ft=xe}}function Zt(E){if(!Ne.has(E.pointerId))return;let X=St(E);Ne.delete(E.pointerId),Ne.size===0&&!Xe&&performance.now()-ze<650&&oe(X.x,X.y),Ne.size<2&&(ft=0)}function Wt(E){Ne.delete(E.pointerId)}function Bt(E){if(ie!=="game")return;E.preventDefault();let X=Math.exp(ct(E.deltaY,-120,120)*.0015);cn==="follow"?wd(X):m.zoom(X)}function xn(E,X){let j=$(E,X);j!==ne&&(ne=j,h.style.cursor=j?"pointer":"",Xi())}h.addEventListener("pointerdown",$e),h.addEventListener("pointermove",Rt),h.addEventListener("pointerup",Zt),h.addEventListener("pointercancel",Wt),h.addEventListener("pointerleave",E=>{E.pointerType==="mouse"&&ne&&(ne=null,Xi())}),h.addEventListener("wheel",Bt,{passive:!1});let je=E=>E.preventDefault();h.addEventListener("contextmenu",je);let hn=document.hidden,Pt=!1,Ri=()=>{hn=document.hidden,hn||(Ht=performance.now(),I.reset(),$a())};document.addEventListener("visibilitychange",Ri),h.addEventListener("webglcontextlost",E=>{E.preventDefault(),Pt=!0}),h.addEventListener("webglcontextrestored",()=>{Pt=!1,le=!0,Ht=performance.now(),$a()});function vn(){if(K!=null)return K;if(ie!=="game"||!J)return 18.35;let{room:E,day:X}=J,j=Date.now()+(J.serverNow,0),ae=E.deadline?Math.max(0,E.deadline-(j+jt))/1e3:null;switch(E.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let ve=E.settings&&E.settings.nightSec||30;return(21.2+(ae==null?.3:ct(1-ae/ve,0,1))*7.6)%24}case"day":{let ve=E.settings&&E.settings.daySec||120,xe;return X&&X.shortened?(jn==null&&(jn=ps,Lt=Math.max(1,ae||10)),xe=jn+(1-jn)*ct(1-(ae||0)/Lt,0,1)):(jn=null,xe=ae==null?.2:ct(1-ae/ve,0,1)),ps=xe,7.4+xe*11.6}case"hunter":return Me>19.5||Me<6?7.6:Me;case"ended":return E.winner==="vampir"?23:E.winner==="soytari"?18.5:9.5;default:return 17}}let ps=0,pi=-1,jn=null,Lt=10,jt=0,An=0,Ht=performance.now(),Qt=0,Dn=0,wn={fps:0,ms:0,calls:0,tris:0,frames:0};function $a(){!An&&!De&&(An=requestAnimationFrame(t0))}let Ro=240,ja=new Float32Array(Ro),Nh=new Float32Array(Ro),Co=0,Fs=0,vd=new Float32Array(Ro);function Io(E,X){return Fs?(vd.set(E),+vd.subarray(0,Fs).sort()[Math.min(Fs-1,Math.floor(X*(Fs-1)))].toFixed(1)):0}function t0(E){if(An=0,De||hn||Pt||($a(),te<2||se<2)||w.fps<=30&&E-Qt<1e3/30-4)return;let X=ct((E-Ht)/1e3,0,.1),j=E-Ht;Ht=E,Qt=E;let ae=performance.now();try{i0(X)}catch(Re){Tt("kare",Re)}let ve=performance.now();try{l.render(v,g)}catch(Re){Tt("\xE7izim",Re)}let xe=performance.now();if(wn.stepMs=(wn.stepMs||0)*.9+(ve-ae)*.1,wn.renderMs=(wn.renderMs||0)*.9+(xe-ve)*.1,wn.frames++,Dn+=j,wn.cpu=xe-ae,ja[Co]=j,Nh[Co]=xe-ae,Co=(Co+1)%Ro,Fs<Ro&&Fs++,Dn>500&&(wn.fps=Math.round(wn.frames*1e3/Dn),wn.ms=+(Dn/wn.frames).toFixed(1),wn.frames=0,Dn=0),wn.calls=l.info.render.calls,wn.tris=l.info.render.triangles,y==="auto"&&Oe){let Re=I.sample(j,xe-ae,E);Re&&Re!==w.name&&(qe(Re),M.reset())}if(Oe&&!Pt){let Re=M.sample(j,xe-ae,E,w.fps===30?36:24);Re!=null&&(n.renderScale=Re,l.setPixelRatio(be*Re),l.setSize(te,se,!1))}}let GS=new Ce,n0=new Ce(0,0,0),Dh=new Map;function Er(E){return Dh.has(E)||Dh.set(E,new Ce(E)),Dh.get(E)}function i0(E){_t.time+=E;let X=_t.time;pe=vn(),Me=qg(Me,pe,E,ie==="menu"?.6:1.3),Xg(Me,me);let j=J&&ie==="game"&&J.room.phase==="ended"&&J.room.winner==="vampir";ue.copy(Te||ye.moon),j&&(ue.set("#ff6a6a"),me.sun.lerp(Er("#ff5a6a"),.35));let ae=ye.tintAmt*(ye.nightTint?me.night:1);ae>0&&(me.top.lerp(ye.tint,ae),me.hor.lerp(ye.tint,ae*.8),me.sky.lerp(ye.tint,ae*.5),me.gnd.lerp(ye.tint,ae*.3)),me.night>.3&&me.sun.lerp(ue,(Te||ye.nightTint?.55:.3)*me.night),me.fogNear*=ye.fog*Ie,me.fogFar*=ye.fog*Ie,me.stars*=ye.stars,v.fog.color.copy(me.hor);let ve=Math.max(0,m.cur.dist*m.user.zoom-28)*(1-.35*me.night);v.fog.near=me.fogNear+ve*.9,v.fog.far=me.fogFar+ve*1.1,Ut.intensity=.9*me.night*(ee?.4:1),Ut.color.copy(ue),Ut.position.set(-g.position.x*.6,60,-g.position.z*.6-40),x.color.copy(me.sky),x.groundColor.copy(me.gnd),x.intensity=me.hi,_.color.copy(me.sun),_.intensity=me.si;let xe=b&&b.layout,Re=xe?xe.R+14:40;if(_.position.copy(me.lightDir).multiplyScalar(120),_.target.position.set(0,0,0),_.castShadow){let Ue=_.shadow.camera;Ue.right!==Re&&(Ue.left=-Re,Ue.right=Re,Ue.top=Re,Ue.bottom=-Re,Ue.near=20,Ue.far=260,Ue.updateProjectionMatrix(),le=!0),V.angleTo(me.lightDir)>.026&&(V.copy(me.lightDir),le=!0)}let st=.82+.1*Math.sin(X*13.1)+.06*Math.sin(X*23.7+1)+.05*Math.sin(X*5.3);if(ee&&W){let Ue=ee==="window"||H.current&&H.current.kind==="watch";if(Ue){let nt=W.W({x:-2.4,y:2.3,z:-1.2});U.position.copy(nt),x.color.lerp(ue,.6),x.groundColor.lerp(ue,.35),x.intensity=me.hi+1.1}else{let nt=W.lanternWorld();U.position.set(nt.x,nt.y+.9,nt.z+.8)}U.intensity=(Ue?13:9+5*me.night)*st,U.distance=12}else U.intensity=(2+17*me.night*me.night)*me.fire*st,U.position.set(Math.sin(X*7)*.08,1.4,0),U.distance=17;C.update(X,be,.75+.25*me.fire),A.update(me,X,g,be,ue),D.update(X,be,w.fireflies?ct(me.night*1.2-.2,0,1):0),u.style.opacity=String(.55+me.night*.45+(ee==="window"?.12:0));for(let Ue=Q.length-1;Ue>=0;Ue--){let nt=!0;try{nt=Q[Ue](E,X)}catch(Ft){Tt("ticker",Ft)}nt&&Q.splice(Ue,1)}try{Vi()}catch(Ue){Tt("i\xE7 mek\xE2n",Ue)}if(W&&W.visible)try{W.update(E,X)}catch(Ue){Tt("oda",Ue)}for(let Ue of de.values())try{Ue.ch.update(E,X)}catch(nt){Tt("kopya",nt)}Je&&J&&ie==="game"&&Xi(),dt.update(E,X,be,m.cur.target,ie==="game"||ie==="menu"?w.weather:0,ke&&ke.fogTint?Er(ke.fogTint):null,me.night),b&&(b.update(E,X,me)&&(le=!0),b.version!==pi&&b.layout&&(pi=b.version,$t(b.layout)),i-=E,J&&ie==="game"&&i<=0&&(i=.25,he.tick(J)));try{l0(E)}catch(Ue){Tt("s\xFCr\xFC\u015F",Ue)}let Ze=_t.obstacles,tt=h0;tt.length=0,Nd.setFromProjectionMatrix(u0.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse));for(let Ue of F.values()){Dd.center.set(Ue.pos.x,Ue.pos.y+.9,Ue.pos.z);let nt=Ue.visible&&Nd.intersectsSphere(Dd);Ue.animEvery=nt?1:4;try{Ue.update(E,X)}catch(Ft){Tt("karakter",Ft),_d(Ue)}Ue.visible&&!Ue.claimed&&tt.push(Ue)}for(let Ue of G.values())try{Ue.update(E,X)}catch(nt){Tt("hayalet",nt),_d(Ue)}Ar&&c0();for(let Ue=0;Ue<tt.length;Ue++){let nt=tt[Ue];for(let Ft=Ue+1;Ft<tt.length;Ft++){let pt=tt[Ft],Qn=pt.pos.x-nt.pos.x,Hs=pt.pos.z-nt.pos.z,Un=Qn*Qn+Hs*Hs;if(Un<.72*.72&&Un>1e-6){let Cr=Math.sqrt(Un),Gs=(.72-Cr)*.5,tl=Qn/Cr,nl=Hs/Cr,Vs=nt.speed>pt.speed?.75:.25;nt.pos.x-=tl*Gs*Vs,nt.pos.z-=nl*Gs*Vs,pt.pos.x+=tl*Gs*(1-Vs),pt.pos.z+=nl*Gs*(1-Vs)}}nt.peeking||dd(nt.pos,Ze,null)}k.begin(),O.begin(),P.begin(),S.begin(),k.add(0,1,0,3.4,Er("#ff8a2a"),.55*me.fire*st),O.add(0,.04,0,13+3*me.night,Er("#ff7a1a"),(.18+.3*me.night)*me.fire*st),b&&b.emitGlows(me,X,k,O);let mt=w.blob?.55:.32,Fe=J?Er(pd(J,we.witchMode)):null,ot=J&&ie==="game"?Ls(J):null;for(let Ue of tt)if(P.add(Ue.pos.x,.025,Ue.pos.z,1.05,n0,mt),ot&&ot!=="night"&&z.has(Ue.id)){let nt=J&&Va(J,{id:Ue.id});S.add(Ue.pos.x,.05,Ue.pos.z,nt?1.9:1.5,Fe,nt?1:ne===Ue.id?.95:.45,Ue.seed*6)}for(let Ue of G.values())k.add(Ue.pos.x,1.2,Ue.pos.z,2.2,Er(bn[Ue.look.color]),.22);if(ot==="night"&&b)for(let Ue of z){let nt=b.house(Ue);if(!nt)continue;let Ft=b.anchors(nt),pt=Va(J,{id:Ue});S.add(Ft.approach.x,.05,Ft.approach.z,pt?3.4:2.6,Fe,pt?1:ne===Ue?.95:.5,nt.seat)}if(L.update(E,X),k.end(X),O.end(X),P.end(X),S.end(X),ie==="menu"&&(m.shot.az+=E*.045),(cn==="plaza"||cn==="gather")&&f0(),Uh-=E,ie==="game"&&J&&Uh<=0&&(Uh=.4,cn==="follow"!==Sd()&&(cn==="follow"||cn==="plaza")&&Vn(!1)),cn==="follow")try{Ad(E)}catch(Ue){Tt("takip",Ue)}m.update(E,X);try{o0()}catch(Ue){Tt("\xF6rtme",Ue)}let ut=ie==="game"&&J&&!H.current&&!ee&&bd();ge.setCamToggle(!!ut,cn==="follow"?"follow":"overview",Se),ge.setRecenter(ie==="game"&&(cn==="follow"?r0():m.offset),Se),ce-=E,me.night>.7&&le&&ce<=0&&!Ud()&&(ce=2),_.castShadow&&w.shadows===1&&le&&ce<=0&&(l.shadowMap.needsUpdate=!0,le=!1,ce=Ud()?.25:1.5),r-=E,ie==="game"&&J&&r<=0&&(r=w.labelHz>=60?0:1/w.labelHz-.004,ge.project(g,d0,m0,p0))}function _d(E){try{E.once=null;let X=E.look;E.lookKey=null,E.setLook(X),Pe(E)}catch{E.setVisible(!1)}}let yd="vkw.cam",Os="follow";try{let E=localStorage.getItem(yd);(E==="follow"||E==="overview")&&(Os=E)}catch{}let Ge={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0,kd:1,ke:0},Md=new q(0,0,0),qi=new q,Uh=0;function zs(){if(!J||!J.me)return null;let E=J.me;if(!E.alive){let j=G.get(E.id);if(j)return j}let X=F.get(E.id);return X&&X.visible?X:null}function Fh(){let E=J&&ie==="game"?J.room.phase:null;return E==="lobby"||E==="ended"}function bd(){return Fh()&&!!zs()}function Sd(){return Os==="follow"&&bd()}function Qa(E){return E.yaw+Math.PI+.38*Ge.side}function s0(E,X){Ge.az-=E*.0075,Ge.el=ct(Ge.el+X*.004,.12,1.15),Ge.dragT=0}function wd(E){Ge.zoom=ct(Ge.zoom*E,.55,4.2),Ge.zoomGoal=0,Ge.dragT=Math.min(Ge.dragT,.5)}function r0(){let E=zs();return E?Math.abs(Ge.zoom-(Ge.wide?1.6:1))>.15||Math.abs(Ge.el-.42)>.12||E.speed<.3&&Math.abs(ln(Qa(E)-Ge.az))>.9:!1}function Ed(){if(cn==="follow"){let E=zs();E&&(Ge.az=Qa(E)),Ge.el=.42,Ge.zoom=Ge.wide?1.6:1,Ge.zoomGoal=0,Ge.dragT=99;return}m.recenter()}function Td(){Os=Os==="follow"?"overview":"follow";try{localStorage.setItem(yd,Os)}catch{}Vn(!1)}function Ad(E,X){let j=zs(),ae=b&&b.layout;if(!j||!ae)return;let ve=m.portrait;Ge.init||(Ge.init=!0,Ge.side=1,Ge.az=Qa(j),Ge.el=.42,Ge.zoom=1,Ge.dragT=99,Ge.zoomGoal=0,Ge.wide=!1),Ge.dragT+=E;let xe=Ls(J),Re=xe==="vote"||xe==="shoot";Re!==Ge.wide&&(Ge.wide=Re,Re&&Ge.zoom<1.6&&(Ge.zoomGoal=1.6)),Ge.zoomGoal&&(Ge.zoom+=(Ge.zoomGoal-Ge.zoom)*an(2.5,E),Math.abs(Ge.zoom-Ge.zoomGoal)<.02&&(Ge.zoomGoal=0)),j.speed>.4&&Ge.dragT>1.1&&(Ge.az+=ln(Qa(j)-Ge.az)*an(j.drive?1.5:.9,E)),Ge.az=ln(Ge.az);let st=Ge.zoom,Ze=Cs(ct((st-1.7)/2.5,0,1)),tt=ve?8.8:7.2;qi.set(j.pos.x,(j.isGhost?1.5:1.25)+(j.isGhost&&j.model?j.model.position.y:0),j.pos.z).lerp(Md,Ze);let mt=Ge.el+((ve?1.15:.98)-Ge.el)*Ze,Fe=tt*st+(Ge.ovDist-tt*st)*Ze,ot=(ve?54:46)+(40-(ve?54:46))*Ze;{let Ue=Math.cos(mt)*Fe,nt=qi.x+Math.sin(Ge.az)*Ue,Ft=qi.z+Math.cos(Ge.az)*Ue,pt=Math.hypot(nt,Ft)-(ae.R-6.2);if(pt>0&&Ze<.4&&Ge.dragT>.8){let Qn=Math.atan2(-qi.x,-qi.z);Ge.az=ln(Ge.az+ln(Qn-Ge.az)*an(ct(pt*.5,0,2.5),E))}}let ut=ae.R-6.2;if(Ze<.6)for(let Ue=0;Ue<14;Ue++){let nt=Math.cos(mt)*Fe,Ft=qi.x+Math.sin(Ge.az)*nt,pt=qi.z+Math.cos(Ge.az)*nt;if(Math.hypot(Ft,pt)<=ut)break;if(st>1.25&&mt<1.05)mt+=.08;else if(Fe>4.4)Fe*=.9;else if(mt<1.05)mt+=.08;else break}if(Ze<.85){let Ue=a0(qi,Ge.az,mt,Fe),nt=Ue.dist/Fe,Ft=Ue.el-mt;X&&(Ge.kd=nt,Ge.ke=Ft),Ge.kd+=(nt-Ge.kd)*an(nt<Ge.kd?9:1.8,E),Ge.ke+=(Ft-Ge.ke)*an(Ft>Ge.ke?7:1.5,E),Fe*=Ge.kd,mt+=Ge.ke}else Ge.kd=1,Ge.ke=0;m.setShot({kind:"follow",target:qi,az:Ge.az,el:mt,dist:Fe,fov:ot,speed:5.5,snap:!!X}),m.shot.dynamic=!1}function o0(){let X=cn==="follow"&&!m.override&&m.ovW<.05?zs():null,j=g.position;for(let ae of F.values()){let ve=!1;if(X&&ae!==X&&ae.visible&&!ae.claimed){let xe=ae.pos.x-j.x,Re=ae.pos.z-j.z;if(xe*xe+Re*Re<3.6*3.6)ve=!0;else{let Ze=X.pos.x-j.x,tt=X.pos.z-j.z,mt=Ze*Ze+tt*tt||1,Fe=(xe*Ze+Re*tt)/mt;if(Fe>0&&Fe<.82){let ot=xe-Ze*Fe,ut=Re-tt*Fe;ot*ot+ut*ut<.9*.9&&(ve=!0)}}}ve!==!!ae.camHidden&&(ae.camHidden=ve,ae.root.visible=ae.visible&&!ve,Je=!0)}}let Tr={el:0,dist:0};function a0(E,X,j,ae){let ve=b&&b.blockers,xe=j,Re=ae;if(!ve||!ve.length)return Tr.el=xe,Tr.dist=Re,Tr;let st=Math.sin(X),Ze=Math.cos(X);for(let tt=0;tt<6;tt++){let mt=Math.cos(xe)*Re,Fe=E.x+st*mt,ot=E.z+Ze*mt,ut=E.y+Math.sin(xe)*Re,Ue=0,nt=1/0;for(let Ft=0;Ft<ve.length;Ft++){let pt=ve[Ft];if(pt.x+pt.r+.6<Math.min(E.x,Fe)||pt.x-pt.r-.6>Math.max(E.x,Fe)||pt.z+pt.r+.6<Math.min(E.z,ot)||pt.z-pt.r-.6>Math.max(E.z,ot))continue;let Qn=pt.x-E.x,Hs=pt.z-E.z,Un=(Qn*st+Hs*Ze)/(mt||.001);Un=Un<0?0:Un>1?1:Un;let Cr=E.x+st*mt*Un-pt.x,Gs=E.z+Ze*mt*Un-pt.z,tl=Math.sqrt(Cr*Cr+Gs*Gs),nl=E.y+(ut-E.y)*Un,Vs=Fe-pt.x,Fd=ot-pt.z,M0=pt.h>2.4?1.1:.35,Od=pt.h>2.4?.8:.45;if(Vs*Vs+Fd*Fd<(pt.r+Od)*(pt.r+Od)&&ut<pt.h+M0){pt.h<2.4?Ue=Math.max(Ue,pt.h+.45-ut):nt=Math.min(nt,Math.max(0,Un*mt-pt.r-.5));continue}pt.h>=1.9&&pt.r>=.35&&Un>.12&&Un<1&&tl<pt.r+.12&&nl<pt.h&&(nt=Math.min(nt,Math.max(0,Un*mt-pt.r-.45)))}if(!Ue&&nt===1/0)break;if(nt!==1/0){let Ft=nt/Math.max(.2,Math.cos(xe));Ft>=3.6?Re=Math.min(Re,Ft):xe=Math.min(1.2,xe+.12)}Ue&&(xe=Math.min(1.2,xe+Math.max(.06,Ue/Math.max(2,Re))))}return Tr.el=xe,Tr.dist=Re,Tr}let ks={x:0,y:0},Bs=new q,Ar=!1,el=0,Rd=-1,Cd=-1;Object.defineProperty(_t,"driving",{get:()=>Ar});function Id(E,X){let j=b&&b.layout;if(!j||!t.onMove)return;let ae=sd(j,E.pos.x,E.pos.z);if(!(!X&&Math.abs(ae.x-Rd)<.003&&Math.abs(ae.y-Cd)<.003)){Rd=ae.x,Cd=ae.y;try{t.onMove(ae.x,ae.y)}catch{}}}function l0(E){let X=zs(),j=!!(Oe&&X&&Fh()&&!ee&&!H.current&&!X.claimed);et.setEnabled(j),et.vector(ks);let ae=j?Math.hypot(ks.x,ks.y):0,ve=performance.now();if(ae>.08){g.getWorldDirection(Bs),Bs.y=0,Bs.lengthSq()<1e-4&&Bs.set(-Math.sin(m.cur.az),0,-Math.cos(m.cur.az)),Bs.normalize();let xe=Bs.x,Re=Bs.z,st=-Re,Ze=xe,tt=st*ks.x+xe*ks.y,mt=Ze*ks.x+Re*ks.y,Fe=Math.hypot(tt,mt)||1;tt/=Fe,mt/=Fe;let ot=ae>.92?4.8:.8+ae*3;X.drive||(X.drive={x:0,z:0,speed:0}),X.drive.x=tt,X.drive.z=mt,X.drive.speed=ot,Ar||(Ar=!0,el=0);let ut=_t.localMove||(_t.localMove={x:0,z:0,until:0});ut.x=X.pos.x,ut.z=X.pos.z,ut.until=ve+2500,el-=E,el<=0&&(el=.15,Id(X,!1))}else if(Ar){Ar=!1;for(let xe of[F.get(J&&J.me?J.me.id:""),G.get(J&&J.me?J.me.id:"")])xe&&(xe.drive=null);X&&Fh()&&(_t.localMove={x:X.pos.x,z:X.pos.z,until:ve+2500},Id(X,!0),Ai(!1))}}function c0(){let E=zs(),X=b&&b.layout;if(!E||!X)return;let j=Math.hypot(E.pos.x,E.pos.z)||.001,ae=Math.max(X.Rp*.2,2.3),ve=X.Rp*.96;if(j<ae||j>ve){let xe=ct(j,ae,ve)/j;E.pos.x*=xe,E.pos.z*=xe}}let Pd=new q;function Ld(E,X){let j=0,ae=0,ve=0;for(let xe=8;xe<X;xe++)j+=E[xe].x,ae+=E[xe].z,ve++;return ve?Pd.set(j/ve*.6,.9,ae/ve*.6+.2):Pd.set(0,.9,.2)}let h0=[],Nd=new _i,u0=new rt,Dd=new Jt(new q,1.3);function Ud(){return!!(b&&b.busy)}let Oh=0;function f0(){if(Oh-=1/60,Oh>0)return;Oh=.3;let E=b&&b.layout;if(!E||!m.shot.points)return;let j=0,ae=cn==="gather"?5.6:3.2,ve=[];for(let xe=0;xe<8;xe++){let Re=xe/8*Ye;ve.push(Nn[j++].set(Math.sin(Re)*ae,0,Math.cos(Re)*ae))}for(let xe of F.values()){if(!xe.visible||j>60)continue;let Re=xe.path&&xe.path.length?xe.path[xe.path.length-1]:xe.pos;Math.hypot(Re.x,Re.z)>E.Rp+1.5||(ve.push(Nn[j++].set(Re.x,0,Re.z)),ve.push(Nn[j++].set(Re.x,2.4,Re.z)))}for(let xe of G.values())j<62&&(ve.push(Nn[j++].set(xe.pos.x,2.6,xe.pos.z)),ve.push(Nn[j++].set(xe.pos.x,0,xe.pos.z)));m.shot.points=ve,m.shot.target.copy(Ld(ve,ve.length))}function d0(E,X){if(E.startsWith("room:")){let ve=W&&W.actors.get(E.slice(5));return!ve||!ve.ch.visible?!1:(X.set(ve.ch.pos.x,ve.ch.pos.y+ve.ch.headY+.15,ve.ch.pos.z),!0)}if(E.startsWith("cine:")){let ve=de.get(E);return!ve||!ve.ch.visible?!1:(X.set(ve.ch.pos.x,ve.ch.root.position.y+ve.ch.headY+.15,ve.ch.pos.z),!0)}let j=F.get(E);if(j&&j.visible)return X.set(j.pos.x,j.pos.y+j.headY+.15,j.pos.z),!0;let ae=G.get(E);return ae?(X.set(ae.pos.x,ae.headY+.5+ae.model.position.y,ae.pos.z),!0):!1}function p0(E){let X=E.startsWith("room:")||E.startsWith("cine:");if(ee)return X;if(X)return!0;let j=F.get(E);return G.has(E)?!0:!(!j||!j.visible||j.camHidden||J&&J.room.phase==="night"&&E!==J.me.id&&!R.has(E))}function m0(E,X){if(ee)return!1;let j=b&&b.house(E);if(!j||j.scale<.6)return!1;let ae=b.layout,ve=0;ae&&ae.n>9&&te<700&&(ve=(j.seat%2?1:-1)*2.2);let xe=Math.hypot(j.cx,j.cz)||1;return X.set(j.cx+j.cx/xe*ve,j.info.height*.9,j.cz+j.cz/xe*ve),!0}function g0(E){if(!(E!=="menu"&&E!=="game")&&E!==ie&&(ie=E,Ve="",c.dataset.view=E,!!Oe)){if(E==="menu"){Us(),Wi(null),ge.clear();for(let X of F.values())X.dispose();F.clear();for(let X of G.values())X.dispose();G.clear(),he.reset(),H.reset(),Dt(null);for(let X of[...b.houses.keys()])b.setDead(X,!1);for(let X of b.houses.values())X.litTarget=1,X.dead=!1}else Dt(J),J&&Ai(!0);Vn(!0),m.snapNext=!1}}function x0(){H.reset(),Us(),Wi(null),ge.clear();for(let E of F.values())E.dispose();F.clear();for(let E of G.values())E.dispose();if(G.clear(),he.reset(),J=null,Ve="",ps=0,Oe){if(b)for(let E of[...b.houses.keys()])b.setDead(E,!1);Dt(null)}m.recenter(),Vn(!0)}function v0(E){if(E==="auto"){y="auto",I.failed.clear(),I.reset();return}Ns[E]&&(y=E,I.level=E,qe(E))}function _0(){if(!De){De=!0,H.dispose(),cancelAnimationFrame(An),document.removeEventListener("visibilitychange",Ri),window.removeEventListener("resize",it),window.removeEventListener("orientationchange",it),Le&&Le.disconnect();for(let E of F.values())E.dispose();for(let E of G.values())E.dispose();F.clear(),G.clear(),b&&b.dispose(),A.dispose(),B.dispose(),C.dispose(),D.dispose(),L.dispose(),dt.dispose(),W&&W.dispose();for(let E of de.values())E.ch.dispose();de.clear(),Q.length=0;for(let E of[k,O,P,S])E.dispose();ge.dispose(),et.dispose(),_.shadow.map&&_.shadow.map.dispose(),l.dispose(),l.forceContextLoss(),Qf(),c.remove(),clearTimeout(Ae)}}$a();let Rr={update:Ya,announce(E){return De?Promise.resolve():!Oe||ie!=="game"?(H.skip(),Promise.resolve()):(E&&E.kind==="start"&&E.scenario&&Wi(E.scenario.id),H.announce(E))},skip(){H.skip()},bubble(E,X,j){if(!X)return;ge.bubble(E,String(X),j);let ae=F.get(E);if(ae&&ae.visible&&!ae.busy&&!ae.once&&ae.base==="idle"&&ae.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),ae&&ae.visible)for(let ve of F.values())ve!==ae&&ve.visible&&Math.hypot(ve.pos.x-ae.pos.x,ve.pos.z-ae.pos.z)<10&&ve.gaze(ae.pos,3.5,_t.time)},setView:g0,setQuality:v0,getQuality(){return y==="auto"?"auto":w.name},getTier(){return w.name},resize:vt,reset:x0,dispose:_0,setInsets(E){E=E||{},Se={top:E.top||0,bottom:E.bottom||0,left:E.left||0,right:E.right||0,joystick:E.joystick===null?null:E.joystick&&typeof E.joystick=="object"?{left:+E.joystick.left||0,bottom:+E.joystick.bottom||0,size:+E.joystick.size||0}:void 0},m.setInsets(Se),ge.setInsets(Se),et.place(Se,te,se),Vn(!1)},recenter(){Ed()},setCameraMode(E){(E==="follow"||E==="overview")&&E!==Os&&Td()},getCameraMode(){return Os},setMood(E={}){E.fog!=null&&(ye.fog=ct(+E.fog,.3,2)),E.tint!=null&&ye.tint.set(E.tint),E.tintAmt!=null&&(ye.tintAmt=ct(+E.tintAmt,0,1)),E.moon!=null&&ye.moon.set(E.moon),E.stars!=null&&(ye.stars=ct(+E.stars,0,1)),E.weather!=null&&(ye.weather=E.weather)},director:H,stats(){return{...wn,tier:w.name,mode:y,px:be,scale:+(n.renderScale||1).toFixed(2),hour:+Me.toFixed(2),ready:Oe,p50:Io(ja,.5),p95:Io(ja,.95),p99:Io(ja,.99),cpu50:Io(Nh,.5),cpu95:Io(Nh,.95)}},resetStats(){Fs=0,Co=0},setScenario(E){Wi(E)},_debug:{world:_t,scene:v,renderer:l,camera:g,rig:m,fol:Ge,get village(){return b},get room(){return W},get roomMode(){return ee},setHour(E){Me=E}}},y0=Rr.update;Rr.update=(E,X)=>{E&&E.serverNow&&(jt=E.serverNow-Date.now()),y0(E,X)};for(let E of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode"]){let X=Rr[E];Rr[E]=function(...j){try{return X.apply(Rr,j)}catch(ae){return Tt("api."+E,ae),E==="announce"?Promise.resolve():void 0}}}return Rr}var Ds=null,Ih=new Set,Ph=0,xd=0;function OS(){if(Ds)return Ds;let s=new xo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=zt,s.toneMapping=gr,s.setClearColor(0,0),Ds={renderer:s,users:0},Ds}function Qg(s){if(Ph=0,!Ih.size||(Ph=requestAnimationFrame(Qg),document.hidden)||s-xd<1e3/24)return;let e=Math.min(.1,(s-xd)/1e3||.04);xd=s;for(let t of Ih)t.draw(e)}function e0(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=OS();r.users++;let o=new tr,a=new en(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let c=new hr("#dfe8ff","#5a4a40",1.3);o.add(c);let l=new ai("#fff2dc",2.6);l.position.set(1.8,3.5,5);let h=new ai("#ffd7a8",.8);h.position.set(-3,1.5,3.5),o.add(h),o.add(l);let u=new ai("#8fb4ff",1.6);u.position.set(-3,2.5,-3),o.add(u);let f=new Mt(new or(.85,40),new yn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,p={...e},v=!1,g=t.yaw!=null?t.yaw:.18,m=0,y=t.yaw!=null?t.yaw:0,I=!1,M=0,w=0,T=t.turntable!==!1,x={sfxStep:null,sfx(){}};function _(){v||!lh("chars")||(d?d.setLook(p):(d=new Ti(x,"preview",p),o.add(d.root),d.idleTimer=2))}lh("chars")?_():br(["chars"]).then(_).catch(()=>{});let U=O=>{I=!0,M=O.clientX,w=0,n.setPointerCapture&&n.setPointerCapture(O.pointerId)},A=O=>{if(!I)return;let P=O.clientX-M;M=O.clientX,g+=P*.012,w=P*.012*24},B=()=>{I=!1};n.addEventListener("pointerdown",U),n.addEventListener("pointermove",A),n.addEventListener("pointerup",B),n.addEventListener("pointercancel",B);let k={draw(O){if(v||!d)return;let P=s.clientWidth,S=s.clientHeight;if(P<4||S<4||!n.isConnected)return;let L=Math.min(window.devicePixelRatio||1,2),C=Math.round(P*L),D=Math.round(S*L);(n.width!==C||n.height!==D)&&(n.width=C,n.height=D);let b=r.renderer,F=b.getSize(new lt);(F.x<C||F.y<D)&&b.setSize(Math.max(F.x,C),Math.max(F.y,D),!1);let G=b.getSize(new lt);if(b.setViewport(0,G.y-D,C,D),b.setScissor(0,G.y-D,C,D),b.setScissorTest(!0),a.aspect=P/S,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!I){m+=O,g+=w*O,w*=Math.exp(-3*O);let Z=g-y;Z=Math.atan2(Math.sin(Z),Math.cos(Z));let de=T?Math.sin(m*.7)*.42:0;Math.abs(w)<.4&&(g=y+Z+(de-Z)*Math.min(1,O*1.6))}d.yaw=g,d.update(O,performance.now()/1e3),b.clear(),b.render(o,a),i.clearRect(0,0,C,D),i.drawImage(b.domElement,0,G.y-D,C,D,0,0,C,D)}};return Ih.add(k),Ph||(Ph=requestAnimationFrame(Qg)),{setLook(O){p={...p,...O},_()},dispose(){v||(v=!0,Ih.delete(k),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&Ds&&(Ds.renderer.dispose(),Ds.renderer.forceContextLoss(),Ds=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&ah(new URL("../assets/models/",s).href)}catch{}var zS="2.1.0",kS=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function BS(s){ah(s)}return T0(HS);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
