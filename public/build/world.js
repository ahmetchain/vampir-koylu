var VKWorld=(()=>{var Lh=Object.defineProperty;var d0=Object.getOwnPropertyDescriptor;var p0=Object.getOwnPropertyNames;var m0=Object.prototype.hasOwnProperty;var Nd=(s,e)=>{for(var t in e)Lh(s,t,{get:e[t],enumerable:!0})},g0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of p0(e))!m0.call(s,i)&&i!==t&&Lh(s,i,{get:()=>e[i],enumerable:!(n=d0(e,i))||n.enumerable});return s};var x0=s=>g0(Lh({},"__esModule",{value:!0}),s);var Rb={};Nd(Rb,{COLORS:()=>rg,HATS:()=>og,QUALITIES:()=>Eb,SKINS:()=>ag,create:()=>qg,preview:()=>Kg,setAssetBase:()=>Ab,supported:()=>fd,version:()=>Tb});var Ep=0,vu=1,Ap=2;var ar=1,Rp=2,io=3,Li=0,bn=1,nn=2,lr=0,Si=1,Yn=2,_u=3,yu=4,Cp=5;var cr=100,Ip=101,Pp=102,Lp=103,Np=104,Dp=200,Up=201,Fp=202,Op=203,Mu=204,Su=205,zp=206,kp=207,Bp=208,Hp=209,Gp=210,Vp=211,Wp=212,Xp=213,qp=214,Il=0,Pl=1,Ll=2,Gr=3,Nl=4,Dl=5,Ul=6,Fl=7,nc=0,Yp=1,Kp=2,Ni=0,bu=1,wu=2,Tu=3,Eu=4,Au=5,Ru=6,hr=7,au="attached",Zp="detached",Cu=300,ur=301,so=302,ic=303,sc=304,_s=1e3,Wn=1001,Vr=1002,en=1003,rc=1004;var fr=1005;var ln=1006,ro=1007;var oi=1008;var Kn=1009,Iu=1010,Pu=1011,oo=1012,oc=1013,ai=1014,Fn=1015,bi=1016,ac=1017,lc=1018,dr=1020,Lu=35902,Nu=35899,Du=1021,Uu=1022,Xn=1023,es=1026,ls=1027,cc=1028,fa=1029,ws=1030,hc=1031;var uc=1033,da=33776,pa=33777,ma=33778,ga=33779,fc=35840,dc=35841,pc=35842,mc=35843,gc=36196,xc=37492,vc=37496,_c=37488,yc=37489,xa=37490,Mc=37491,Sc=37808,bc=37809,wc=37810,Tc=37811,Ec=37812,Ac=37813,Rc=37814,Cc=37815,Ic=37816,Pc=37817,Lc=37818,Nc=37819,Dc=37820,Uc=37821,Fc=36492,Oc=36494,zc=36495,kc=36283,Bc=36284,va=36285,Hc=36286,_a=2200,Jp=2201,$p=2202,qs=2300,Ys=2301,Rl=2302,lu=2303,Vs=2400,Ws=2401,ko=2402,Gc=2500,jp=2501,Fu=0,ya=1,ao=2,Qp=3200;var Ma=0,em=1,cs="",Ft="srgb",On="srgb-linear",Bo="linear",Ot="srgb";var Cl=7680;var tm=519,nm=512,im=513,sm=514,Ou=515,rm=516,om=517,zu=518,ku=519,Bu=35044,Sa=35048;var Hu="300 es",ii=2e3,Wr=2001;function v0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function am(){let s=Xr("canvas");return s.style.display="block",s}var Dd={},qr=null;function Ho(...s){let e="THREE."+s.shift();qr?qr("log",e,...s):console.log(e,...s)}function lm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=lm(s);let e="THREE."+s.shift();if(qr)qr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function mt(...s){s=lm(s);let e="THREE."+s.shift();if(qr)qr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Xs(...s){let e=s.join(" ");e in Dd||(Dd[e]=!0,it(...s))}function cm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hm={[Il]:Il,[Ll]:Ul,[Nl]:Nl,[Gr]:Dl,[Pl]:Pl,[Ul]:Ll,[Fl]:Fl,[Dl]:Gr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=1234567,Oo=Math.PI/180,Ks=180/Math.PI;function Di(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Gu(s,e){return(s%e+e)%e}function y0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function M0(s,e,t){return s!==e?(t-s)/(e-s):0}function zo(s,e,t){return(1-t)*s+t*e}function S0(s,e,t,n){return zo(s,e,1-Math.exp(-t*n))}function b0(s,e=1){return e-Math.abs(Gu(s,e*2)-e)}function w0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function T0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function E0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A0(s,e){return s+Math.random()*(e-s)}function R0(s){return s*(.5-Math.random())}function C0(s){s!==void 0&&(Ud=s);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(s){return s*Oo}function P0(s){return s*Ks}function L0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function N0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function D0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wu(s,e){if(e.constructor===Float32Array)return s;let t=Vc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Xu(s,e){if(e.constructor===Float32Array)return s;let t=Vc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Wc={DEG2RAD:Oo,RAD2DEG:Ks,generateUUID:Di,clamp:Rt,euclideanModulo:Gu,mapLinear:y0,inverseLerp:M0,lerp:zo,damp:S0,pingpong:b0,smoothstep:w0,smootherstep:T0,randInt:E0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:I0,radToDeg:P0,isPowerOfTwo:L0,ceilPowerOfTwo:N0,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:D0,normalize:Xu,denormalize:Wu},Ju=class Ju{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ju.prototype.isVector2=!0;var st=Ju,Qt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(h!==_||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),L=Math.sin(M);g=Math.sin(g*M)/L,a=Math.sin(a*M)/L,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+_*a;let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$u=class $u{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$u.prototype.isVector3=!0;var V=$u,Nh=new V,Fd=new Qt,ju=class ju{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],p=i[3],g=i[6],M=i[1],L=i[4],S=i[7],T=i[2],E=i[5],x=i[8];return r[0]=o*_+a*M+l*T,r[3]=o*p+a*L+l*E,r[6]=o*g+a*S+l*x,r[1]=c*_+u*M+h*T,r[4]=c*p+u*L+h*E,r[7]=c*g+u*S+h*x,r[2]=f*_+d*M+m*T,r[5]=f*p+d*L+m*E,r[8]=f*g+d*S+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ju.prototype.isMatrix3=!0;var gt=ju,Dh=new gt,Od=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U0(){let s={enabled:!0,workingColorSpace:On,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(i.r=Hr(i.r),i.g=Hr(i.g),i.b=Hr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Bo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[On]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:Od,fromXYZ:zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:Od,fromXYZ:zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}var wt=U0();function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var br,Ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Xr("canvas")),br.width=e.width,br.height=e.height;let i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Yr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uh(i[o].image)):r.push(Uh(i[o]))}else r=Uh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var O0=0,Fh=new V,cn=class s extends gi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Wn,i=Wn,r=ln,o=oi,a=Xn,l=Kn,c=s.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Di(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Cu;cn.DEFAULT_ANISOTROPY=1;var Qu=class Qu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(c+1)/2,S=(d+1)/2,T=(g+1)/2,E=(u+f)/4,x=(h+_)/4,y=(m+p)/4;return L>S&&L>T?L<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(L),i=E/n,r=x/n):S>T?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=y/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=y/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qu.prototype.isVector4=!0;var Ht=Qu,zl=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tc=class tc{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,_,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,k0)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ds.crossVectors(n,jn),ds.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ds.crossVectors(n,jn)),ds.normalize(),ja.crossVectors(jn,ds),i[0]=ds.x,i[4]=ja.x,i[8]=jn.x,i[1]=ds.y,i[5]=ja.y,i[9]=jn.y,i[2]=ds.z,i[6]=ja.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],L=n[7],S=n[11],T=n[15],E=i[0],x=i[4],y=i[8],I=i[12],A=i[1],k=i[5],O=i[9],F=i[13],v=i[2],w=i[6],D=i[10],C=i[14],U=i[3],R=i[7],G=i[11],B=i[15];return r[0]=o*E+a*A+l*v+c*U,r[4]=o*x+a*k+l*w+c*R,r[8]=o*y+a*O+l*D+c*G,r[12]=o*I+a*F+l*C+c*B,r[1]=u*E+h*A+f*v+d*U,r[5]=u*x+h*k+f*w+d*R,r[9]=u*y+h*O+f*D+d*G,r[13]=u*I+h*F+f*C+d*B,r[2]=m*E+_*A+p*v+g*U,r[6]=m*x+_*k+p*w+g*R,r[10]=m*y+_*O+p*D+g*G,r[14]=m*I+_*F+p*C+g*B,r[3]=M*E+L*A+S*v+T*U,r[7]=M*x+L*k+S*w+T*R,r[11]=M*y+L*O+S*D+T*G,r[15]=M*I+L*F+S*C+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],M=l*d-c*f,L=a*d-c*h,S=a*f-l*h,T=o*d-c*u,E=o*f-l*u,x=o*h-a*u;return t*(_*M-p*L+g*S)-n*(m*M-p*T+g*E)+i*(m*L-_*T+g*x)-r*(m*S-_*E+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],M=t*a-n*o,L=t*l-i*o,S=t*c-r*o,T=n*l-i*a,E=n*c-r*a,x=i*c-r*l,y=u*_-h*m,I=u*p-f*m,A=u*g-d*m,k=h*p-f*_,O=h*g-d*_,F=f*g-d*p,v=M*F-L*O+S*k+T*A-E*I+x*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/v;return e[0]=(a*F-l*O+c*k)*w,e[1]=(i*O-n*F-r*k)*w,e[2]=(_*x-p*E+g*T)*w,e[3]=(f*E-h*x-d*T)*w,e[4]=(l*A-o*F-c*I)*w,e[5]=(t*F-i*A+r*I)*w,e[6]=(p*S-m*x-g*L)*w,e[7]=(u*x-f*S+d*L)*w,e[8]=(o*O-a*A+c*y)*w,e[9]=(n*A-t*O-r*y)*w,e[10]=(m*E-_*S+g*M)*w,e[11]=(h*S-u*E-d*M)*w,e[12]=(a*I-o*k-l*y)*w,e[13]=(t*k-n*I+i*y)*w,e[14]=(_*L-m*T-p*M)*w,e[15]=(u*T-h*L+f*M)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,_=o*u,p=o*h,g=a*h,M=l*c,L=l*u,S=l*h,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(d+S)*T,i[2]=(m-L)*T,i[3]=0,i[4]=(d-S)*E,i[5]=(1-(f+g))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+L)*x,i[9]=(p-M)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=wr.set(i[0],i[1],i[2]).length(),a=wr.set(i[4],i[5],i[6]).length(),l=wr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,u=1/a,h=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=ii,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===ii)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Wr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ii,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===ii)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Wr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};tc.prototype.isMatrix4=!0;var nt=tc,wr=new V,di=new nt,z0=new V(0,0,0),k0=new V(1,1,1),ds=new V,ja=new V,jn=new V,kd=new nt,Bd=new Qt,Ci=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},B0=0,Hd=new V,Tr=new Qt,Xi=new nt,Qa=new V,To=new V,H0=new V,G0=new Qt,Gd=new V(1,0,0),Vd=new V(0,1,0),Wd=new V(0,0,1),Xd={type:"added"},V0={type:"removed"},Er={type:"childadded",child:null},Oh={type:"childremoved",child:null},Wt=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new V,t=new Ci,n=new Qt,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new gt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(To,Qa,this.up):Xi.lookAt(Qa,To,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),Tr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),Er.child=e,this.dispatchEvent(Er),Er.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V0),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new V(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},el={h:0,s:0,l:0};function zh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=Gu(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zh(o,r,e+1/3),this.g=zh(o,r,e),this.b=zh(o,r,e-1/3)}return wt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(Rt(Cn.r*255,0,255))*65536+Math.round(Rt(Cn.g*255,0,255))*256+Math.round(Rt(Cn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,i=Cn.g,r=Cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Ft){wt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,i=Cn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(el);let n=zo(ps.h,el.h,t),i=zo(ps.s,el.s,t),r=zo(ps.l,el.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Te;Te.NAMES=um;var Vo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zs=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new V,qi=new V,kh=new V,Yi=new V,Ar=new V,Rr=new V,qd=new V,Bh=new V,Hh=new V,Gh=new V,Vh=new Ht,Wh=new Ht,Xh=new Ht,$i=class s{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pi.subVectors(i,t),qi.subVectors(n,t),kh.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(qi),l=pi.dot(kh),c=qi.dot(qi),u=qi.dot(kh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Vh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(e,t),Wh.fromBufferAttribute(e,n),Xh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Vh,r.x),o.addScaledVector(Wh,r.y),o.addScaledVector(Xh,r.z),o}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),qi.subVectors(e,t),pi.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ar.subVectors(i,n),Rr.subVectors(r,n),Bh.subVectors(e,n);let l=Ar.dot(Bh),c=Rr.dot(Bh);if(l<=0&&c<=0)return t.copy(n);Hh.subVectors(e,i);let u=Ar.dot(Hh),h=Rr.dot(Hh);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Ar,o);Gh.subVectors(e,r);let d=Ar.dot(Gh),m=Rr.dot(Gh);if(m>=0&&d<=m)return t.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Rr,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return qd.subVectors(r,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(qd,a);let g=1/(p+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),nl.subVectors(this.max,Eo),Cr.subVectors(e.a,Eo),Ir.subVectors(e.b,Eo),Pr.subVectors(e.c,Eo),ms.subVectors(Ir,Cr),gs.subVectors(Pr,Ir),zs.subVectors(Cr,Pr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-zs.z,zs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,zs.z,0,-zs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-zs.y,zs.x,0];return!qh(t,Cr,Ir,Pr,nl)||(t=[1,0,0,0,1,0,0,0,1],!qh(t,Cr,Ir,Pr,nl))?!1:(il.crossVectors(ms,gs),t=[il.x,il.y,il.z],qh(t,Cr,Ir,Pr,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,tl=new Sn,Cr=new V,Ir=new V,Pr=new V,ms=new V,gs=new V,zs=new V,Eo=new V,nl=new V,il=new V,ks=new V;function qh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ks.fromArray(s,r);let a=i.x*Math.abs(ks.x)+i.y*Math.abs(ks.y)+i.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),u=n.dot(ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var on=new V,sl=new st,X0=0,yt=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?Vc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xu(e,this.array)}};var Wo=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},q0=new Sn,Ao=new V,Yh=new V,Kt=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ao,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Yh)),this.expandByPoint(Ao.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Y0=0,ni=new nt,Kh=new Wt,Lr=new V,Qn=new Sn,Ro=new Sn,gn=new V,Ct=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v0(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Qn.min,Ro.min),Qn.expandByPoint(gn),gn.addVectors(Qn.max,Ro.max),Qn.expandByPoint(gn)):(Qn.expandByPoint(Ro.min),Qn.expandByPoint(Ro.max))}Qn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gn.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),gn.add(Lr)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new V,l[I]=new V;let u=new V,h=new V,f=new V,d=new st,m=new st,_=new st,p=new V,g=new V;function M(I,A,k){c[I]=c[A]=c[k]=1,u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,k),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,A),_.fromBufferAttribute(r,k),h.sub(u),f.sub(u),m.sub(d),_.sub(d);let O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(O),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(O),a[I].add(p),a[A].add(p),a[k].add(p),l[I].add(g),l[A].add(g),l[k].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let I=0,A=L.length;I<A;++I){let k=L[I],O=k.start,F=k.count;for(let v=O,w=O+F;v<w;v+=3)M(e.getX(v+0),e.getX(v+1),e.getX(v+2))}let S=new V,T=new V,E=new V,x=new V;function y(I){E.fromBufferAttribute(i,I),x.copy(E);let A=a[I];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(x,A);let O=T.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,O)}for(let I=0,A=n.count;I<A;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new yt(f,u,h)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Yd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Di()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Un=new V,ys=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Vc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xu(e,this.data.array)}},Zh=new V,K0=new V,Z0=new gt,ei=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Zh.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Zh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Z0.getNormalMatrix(e),i=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},J0=0,Pn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Si,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=Su,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cl,this.stencilZFail=Cl,this.stencilZPass=Cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ei().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jr=class extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Co=new V,Dr=new V,Ur=new V,Fr=new st,Io=new st,fm=new nt,rl=new V,Po=new V,ol=new V,Kd=new st,Jh=new st,Zd=new st,qo=class extends Wt{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Js(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new ys(n,3,0,!1)),Nr.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new st(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),fm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Ur.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;al(rl.set(-.5,-.5,0),Ur,o,Dr,i,r),al(Po.set(.5,-.5,0),Ur,o,Dr,i,r),al(ol.set(.5,.5,0),Ur,o,Dr,i,r),Kd.set(0,0),Jh.set(1,0),Zd.set(1,1);let a=e.ray.intersectTriangle(rl,Po,ol,!1,Co);if(a===null&&(al(Po.set(-.5,.5,0),Ur,o,Dr,i,r),Jh.set(0,1),a=e.ray.intersectTriangle(rl,ol,Po,!1,Co),a===null))return;let l=e.ray.origin.distanceTo(Co);l<e.near||l>e.far||t.push({distance:l,point:Co.clone(),uv:$i.getInterpolation(Co,rl,Po,ol,Kd,Jh,Zd,new st),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function al(s,e,t,n,i,r){Fr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Io.x=r*Fr.x-i*Fr.y,Io.y=i*Fr.x+r*Fr.y):Io.copy(Fr),s.copy(e),s.x+=Io.x,s.y+=Io.y,s.applyMatrix4(fm)}var Zi=new V,$h=new V,ll=new V,cl=new V,Ms=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$h.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),cl.copy(this.origin).sub($h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ll),a=cl.dot(this.direction),l=-cl.dot(ll),c=cl.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($h).addScaledVector(ll,f),d}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,M=n.y-o.y,L=n.z-o.z,S=Math.abs(l),T=Math.abs(c),E=Math.abs(u),x,y,I,A,k,O,F,v,w,D,C,U;if(S>=T&&S>=E?(I=l,O=h,w=m,U=g,l>=0?(x=c,y=u,A=f,k=d,F=_,v=p,D=M,C=L):(x=u,y=c,A=d,k=f,F=p,v=_,D=L,C=M)):T>=E?(I=c,O=f,w=_,U=M,c>=0?(x=u,y=l,A=d,k=h,F=p,v=m,D=L,C=g):(x=l,y=u,A=h,k=d,F=m,v=p,D=g,C=L)):(I=u,O=d,w=p,U=L,u>=0?(x=l,y=c,A=h,k=f,F=m,v=_,D=g,C=M):(x=c,y=l,A=f,k=h,F=_,v=m,D=M,C=g)),I===0)return null;let R=x/I,G=y/I,B=1/I,oe=A-R*O,ie=k-G*O,J=F-R*w,ce=v-G*w,X=D-R*U,Y=C-G*U,j=X*ce-Y*J,ye=oe*Y-ie*X,Le=J*ie-ce*oe;if(i){if(j<0||ye<0||Le<0)return null}else if((j<0||ye<0||Le<0)&&(j>0||ye>0||Le>0))return null;let ze=j+ye+Le;if(ze===0)return null;let Be=B*(j*O+ye*w+Le*U);return(ze>0?Be<0:Be>0)?null:this.at(Be/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jd=new nt,Bs=new Ms,hl=new Kt,$d=new V,ul=new V,fl=new V,dl=new V,jh=new V,pl=new V,jd=new V,ml=new V,Mt=class extends Wt{constructor(e=new Ct,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){pl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(jh.fromBufferAttribute(h,e),o?pl.addScaledVector(jh,u):pl.addScaledVector(jh.sub(t),u))}t.add(pl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(hl.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(hl,$d)===null||Bs.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),L=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,T=L;S<T;S+=3){let E=a.getX(S),x=a.getX(S+1),y=a.getX(S+2);i=gl(this,g,e,n,c,u,h,E,x,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=a.getX(p),L=a.getX(p+1),S=a.getX(p+2);i=gl(this,o,e,n,c,u,h,M,L,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),L=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,T=L;S<T;S+=3){let E=S,x=S+1,y=S+2;i=gl(this,g,e,n,c,u,h,E,x,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let M=p,L=p+1,S=p+2;i=gl(this,o,e,n,c,u,h,M,L,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function $0(s,e,t,n,i,r,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Li,a),l===null)return null;ml.copy(a),ml.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ml);return c<t.near||c>t.far?null:{distance:c,point:ml.clone(),object:s}}function gl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ul),s.getVertexPosition(l,fl),s.getVertexPosition(c,dl);let u=$0(s,e,t,n,ul,fl,dl,jd);if(u){let h=new V;$i.getBarycoord(jd,ul,fl,dl,h),i&&(u.uv=$i.getInterpolatedAttribute(i,a,l,c,h,new st)),r&&(u.uv1=$i.getInterpolatedAttribute(r,a,l,c,h,new st)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};$i.getNormal(ul,fl,dl,f.normal),u.face=f,u.barycoord=h}return u}var Lo=new Ht,Qd=new Ht,ep=new Ht,j0=new Ht,tp=new nt,xl=new V,Qh=new Kt,np=new nt,eu=new Ms,Yo=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xl),this.boundingBox.expandByPoint(xl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xl),this.boundingSphere.expandByPoint(xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(i),e.ray.intersectsSphere(Qh)!==!1&&(np.copy(i).invert(),eu.copy(e.ray).applyMatrix4(np),!(this.boundingBox!==null&&eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():it("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Qd.fromBufferAttribute(i.attributes.skinIndex,e),ep.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Lo.copy(t),t.set(0,0,0,0)):(Lo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Lo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ep.getComponent(r);if(o!==0){let a=Qd.getComponent(r);tp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(j0.copy(Lo).applyMatrix4(tp),o)}}return t.isVector4&&(t.w=Lo.w),t.applyMatrix4(this.bindMatrixInverse)}},$r=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qi=class extends cn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=en,u=en,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ip=new nt,Q0=new nt,Ko=class s{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){it("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Q0;ip.multiplyMatrices(a,t[r]),ip.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qi(t,e,e,Xn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(it("Skeleton: No bone found with UUID:",r),o=new $r),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},zn=class extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new nt,sp=new nt,vl=[],rp=new Sn,ex=new nt,No=new Mt,Do=new Kt,$s=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),rp.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(rp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Do.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Or),sp.multiplyMatrices(n,Or),No.matrixWorld=sp,No.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){let l=vl[o];l.instanceId=r,l.object=this,t.push(l)}vl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(i*this.count),i,this.count,cc,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hs=new Kt,tx=new st(.5,.5),_l=new V,xi=class{constructor(e=new ei,t=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],M=r[12],L=r[13],S=r[14],T=r[15];if(i[0].setComponents(c-o,d-u,g-m,T-M).normalize(),i[1].setComponents(c+o,d+u,g+m,T+M).normalize(),i[2].setComponents(c+a,d+h,g+_,T+L).normalize(),i[3].setComponents(c-a,d-h,g-_,T-L).normalize(),n)i[4].setComponents(l,f,p,S).normalize(),i[5].setComponents(c-l,d-f,g-p,T-S).normalize();else if(i[4].setComponents(c-l,d-f,g-p,T-S).normalize(),t===ii)i[5].setComponents(c+l,d+f,g+p,T+S).normalize();else if(t===Wr)i[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);let t=tx.distanceTo(e.center);return Hs.radius=.7071067811865476+t,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(_l.x=i.normal.x>0?e.max.x:e.min.x,_l.y=i.normal.y>0?e.max.y:e.min.y,_l.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},op=new nt,Zo=class s{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];op.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new xi),n[i].setFromProjectionMatrix(op,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new xi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function tu(s,e){return s-e}function nx(s,e){return s.z-e.z}function ix(s,e){return e.z-s.z}var cu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Vn=new nt,sx=new Te(1,1,1),rx=new xi,ox=new Zo,yl=new Sn,Gs=new Kt,nu=new V,ap=new V,lp=new V,ax=new V,iu=new cu,In=new Mt,Ml=[];function lx(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ai(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var Jo=class extends Mt{constructor(e,t,n=t*2,i){super(new Ct,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Qi(t,e,e,Xn,Fn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Qi(t,e,e,fa,ai);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Qi(t,e,e,Xn,Fn);n.colorSpace=wt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new yt(u,l,c);t.setAttribute(r,h)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new yt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,yl).applyMatrix4(Vn),e.union(yl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Gs).applyMatrix4(Vn),e.union(Gs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(tu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Vn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(sx.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(tu),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let u in n.attributes){let h=t.getAttribute(u),f=n.getAttribute(u);lx(h,f,l);let d=h.itemSize;for(let m=h.count,_=c;m<_;m++){let p=l+m;for(let g=0;g<d;g++)f.setComponent(p,g,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(i){let u=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(u+f,l+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(u+f,l);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:u,vertexStart:h,reservedIndexCount:f}=c,d=r.index,m=d.array,_=e-h;for(let p=u;p<u+f;p++)m[p]=m[p]+_;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:u,reservedVertexCount:h}=c,f=r.attributes;for(let d in f){let m=f[d],{array:_,itemSize:p}=m;_.copyWithin(e*p,u*p,(u+h)*p),m.addUpdateRange(e*p,h*p),m.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new Sn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;o&&(u=o.getX(u)),r.expandByPoint(nu.fromBufferAttribute(a,u))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new Kt;this.getBoundingBoxAt(e,yl),yl.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;o&&(h=o.getX(h)),nu.fromBufferAttribute(a,h),l=Math.max(l,r.center.distanceToSquared(nu))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(tu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ai(this._multiDrawCounts,i),Ai(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),l=new Int32Array(e);Ai(this._mergedDrawCounts,o),Ai(this._mergedDrawStarts,a),Ai(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=e;let c=this._indirectTexture,u=this._matricesTexture,h=this._colorsTexture;c.dispose(),this._initIndirectTexture(),Ai(c.image.data,this._indirectTexture.image.data),u.dispose(),this._initMatricesTexture(),Ai(u.image.data,this._matricesTexture.image.data),h&&(h.dispose(),this._initColorsTexture(),Ai(h.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ct,this._initializeGeometry(r));let o=this.geometry;r.index&&Ai(r.index.array,o.index.array);for(let a in r.attributes)Ai(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;In.material=this.material,In.geometry.index=o.index,In.geometry.attributes=o.attributes,In.geometry.boundingBox===null&&(In.geometry.boundingBox=new Sn),In.geometry.boundingSphere===null&&(In.geometry.boundingSphere=new Kt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,u=i[c];In.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,In.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,In.geometry.boundingBox),this.getBoundingSphereAt(c,In.geometry.boundingSphere),In.raycast(e,Ml);for(let h=0,f=Ml.length;h<f;h++){let d=Ml[h];d.object=this,d.batchId=a,t.push(d)}Ml.length=0}In.material=null,In.geometry.index=null,In.geometry.attributes={},In.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,m=this._geometryInfo,_=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data,M=e.isArrayCamera?ox:rx;_&&(e.isArrayCamera?M.setFromArrayCamera(e):(Vn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),M.setFromProjectionMatrix(Vn,e.coordinateSystem,e.reversedDepth)));let L=0,S=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),ap.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Vn),lp.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Vn);for(let x=0,y=l.length;x<y;x++)if(l[x].visible&&l[x].active){let I=l[x].geometryIndex;this.getMatrixAt(x,Vn),this.getBoundingSphereAt(I,Gs).applyMatrix4(Vn);let A=!1;if(_&&(A=!M.intersectsSphere(Gs)),!A){let k=m[I],O=ax.subVectors(Gs.center,ap).dot(lp);iu.push(k.start,k.count,O,x)}}let T=iu.list,E=this.customSort;E===null?T.sort(n.transparent?ix:nx):E.call(this,T,e);for(let x=0,y=T.length;x<y;x++){let I=T[x],A=I.start*o*a,k=I.count*a;i==="merged"?S>0&&h[S-1]===A&&f[S-1]===k?d[S-1]++:(h[S]=A,f[S]=k,d[S]=1,S++):(c[L]=A,u[L]=k),g[L]=I.index,L++}iu.reset()}else for(let T=0,E=l.length;T<E;T++)if(l[T].visible&&l[T].active){let x=l[T].geometryIndex,y=!1;if(_&&(this.getMatrixAt(T,Vn),this.getBoundingSphereAt(x,Gs).applyMatrix4(Vn),y=!M.intersectsSphere(Gs)),!y){let I=m[x],A=I.start*o*a,k=I.count*a;i==="merged"?S>0&&h[S-1]===A&&f[S-1]===k?d[S-1]++:(h[S]=A,f[S]=k,d[S]=1,S++):(c[L]=A,u[L]=k),g[L]=T,L++}}p.needsUpdate=!0,this._multiDrawCount=L,this._mergedDrawCount=S,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},jr=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new V,Hl=new V,cp=new nt,Uo=new Ms,Sl=new Kt,su=new V,hp=new V,js=class extends Wt{constructor(e=new Ct,t=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bl.fromBufferAttribute(t,i-1),Hl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bl.distanceTo(Hl);e.setAttribute("lineDistance",new Lt(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;cp.copy(i).invert(),Uo.copy(e.ray).applyMatrix4(cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=u.getX(_),M=u.getX(_+1),L=bl(this,e,Uo,l,g,M,_);L&&t.push(L)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(d),g=bl(this,e,Uo,l,_,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=bl(this,e,Uo,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=bl(this,e,Uo,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Bl.fromBufferAttribute(a,i),Hl.fromBufferAttribute(a,r),t.distanceSqToSegment(Bl,Hl,su,hp)>n)return;su.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(su);if(!(c<e.near||c>e.far))return{distance:c,point:hp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var up=new V,fp=new V,$o=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)up.fromBufferAttribute(t,i),fp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+up.distanceTo(fp);e.setAttribute("lineDistance",new Lt(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jo=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qr=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dp=new nt,hu=new Ms,wl=new Kt,Tl=new V,vi=class extends Wt{constructor(e=new Ct,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(i),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;dp.copy(i).invert(),hu.copy(e.ray).applyMatrix4(dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let p=c.getX(m);Tl.fromBufferAttribute(h,p),pp(Tl,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Tl.fromBufferAttribute(h,m),pp(Tl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pp(s,e,t,n,i,r,o){let a=hu.distanceSqToPoint(s);if(a<t){let l=new V;hu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Qo=class extends cn{constructor(e=[],t=ur,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qs=class extends cn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends cn{constructor(e,t,n=ai,i,r,o,a=en,l=en,c,u=es,h=1){if(u!==es&&u!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends ts{constructor(e,t=ai,n=ur,i,r,o=en,a=en,l,c=es){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_i=class s extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function m(_,p,g,M,L,S,T,E,x,y,I){let A=S/x,k=T/y,O=S/2,F=T/2,v=E/2,w=x+1,D=y+1,C=0,U=0,R=new V;for(let G=0;G<D;G++){let B=G*k-F;for(let oe=0;oe<w;oe++){let ie=oe*A-O;R[_]=ie*M,R[p]=B*L,R[g]=v,c.push(R.x,R.y,R.z),R[_]=0,R[p]=0,R[g]=E>0?1:-1,u.push(R.x,R.y,R.z),h.push(oe/x),h.push(1-G/y),C+=1}}for(let G=0;G<y;G++)for(let B=0;B<x;B++){let oe=f+B+w*G,ie=f+B+w*(G+1),J=f+(B+1)+w*(G+1),ce=f+(B+1)+w*G;l.push(oe,ie,ce),l.push(ie,J,ce),U+=6}a.addGroup(d,U,I),d+=U,f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var er=class s extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new V,u=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ns=class s extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,_=[],p=n/2,g=0;M(),o===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(d,2));function M(){let S=new V,T=new V,E=0,x=(t-e)/n;for(let y=0;y<=r;y++){let I=[],A=y/r,k=A*(t-e)+e;for(let O=0;O<=i;O++){let F=O/i,v=F*l+a,w=Math.sin(v),D=Math.cos(v);T.x=k*w,T.y=-A*n+p,T.z=k*D,h.push(T.x,T.y,T.z),S.set(w,x,D).normalize(),f.push(S.x,S.y,S.z),d.push(F,1-A),I.push(m++)}_.push(I)}for(let y=0;y<i;y++)for(let I=0;I<r;I++){let A=_[I][y],k=_[I+1][y],O=_[I+1][y+1],F=_[I][y+1];(e>0||I!==0)&&(u.push(A,k,F),E+=3),(t>0||I!==r-1)&&(u.push(k,O,F),E+=3)}c.addGroup(g,E,0),g+=E}function L(S){let T=m,E=new st,x=new V,y=0,I=S===!0?e:t,A=S===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,p*A,0),f.push(0,A,0),d.push(.5,.5),m++;let k=m;for(let O=0;O<=i;O++){let v=O/i*l+a,w=Math.cos(v),D=Math.sin(v);x.x=I*D,x.y=p*A,x.z=I*w,h.push(x.x,x.y,x.z),f.push(0,A,0),E.x=w*.5+.5,E.y=D*.5*A+.5,d.push(E.x,E.y),m++}for(let O=0;O<i;O++){let F=T+O,v=k+O;S===!0?u.push(v,v+1,F):u.push(v+1,v,F),y+=3}c.addGroup(g,y,S===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gl=class s extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let L=new V,S=new V,T=new V;for(let E=0;E<t.length;E+=3)d(t[E+0],L),d(t[E+1],S),d(t[E+2],T),l(L,S,T,M)}function l(M,L,S,T){let E=T+1,x=[];for(let y=0;y<=E;y++){x[y]=[];let I=M.clone().lerp(S,y/E),A=L.clone().lerp(S,y/E),k=E-y;for(let O=0;O<=k;O++)O===0&&y===E?x[y][O]=I:x[y][O]=I.clone().lerp(A,O/k)}for(let y=0;y<E;y++)for(let I=0;I<2*(E-y)-1;I++){let A=Math.floor(I/2);I%2===0?(f(x[y][A+1]),f(x[y+1][A]),f(x[y][A])):(f(x[y][A+1]),f(x[y+1][A+1]),f(x[y+1][A]))}}function c(M){let L=new V;for(let S=0;S<r.length;S+=3)L.x=r[S+0],L.y=r[S+1],L.z=r[S+2],L.normalize().multiplyScalar(M),r[S+0]=L.x,r[S+1]=L.y,r[S+2]=L.z}function u(){let M=new V;for(let L=0;L<r.length;L+=3){M.x=r[L+0],M.y=r[L+1],M.z=r[L+2];let S=p(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;o.push(S,1-T)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let L=o[M+0],S=o[M+2],T=o[M+4],E=Math.max(L,S,T),x=Math.min(L,S,T);E>.9&&x<.1&&(L<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,L){let S=M*3;L.x=e[S+0],L.y=e[S+1],L.z=e[S+2]}function m(){let M=new V,L=new V,S=new V,T=new V,E=new st,x=new st,y=new st;for(let I=0,A=0;I<r.length;I+=9,A+=6){M.set(r[I+0],r[I+1],r[I+2]),L.set(r[I+3],r[I+4],r[I+5]),S.set(r[I+6],r[I+7],r[I+8]),E.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),T.copy(M).add(L).add(S).divideScalar(3);let k=p(T);_(E,A+0,M,k),_(x,A+2,L,k),_(y,A+4,S,k)}}function _(M,L,S,T){T<0&&M.x===1&&(o[L]=M.x-1),S.x===0&&S.z===0&&(o[L]=T/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var na=class s extends Gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var yi=class s extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let M=g*f-o;for(let L=0;L<c;L++){let S=L*h-r;m.push(S,-M,0),_.push(0,0,1),p.push(L/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let L=M+c*g,S=M+c*(g+1),T=M+1+c*(g+1),E=M+1+c*g;d.push(L,S,E),d.push(S,T,E)}this.setIndex(d),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ia=class s extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new V,f=new V,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let M=[],L=g/n,S=o+L*a,T=e*Math.cos(S),E=Math.sqrt(e*e-T*T),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let I=y/t,A=i+I*r;h.x=-E*Math.cos(A),h.y=T,h.z=E*Math.sin(A),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(I+x,1-L),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let L=u[g][M+1],S=u[g][M],T=u[g+1][M],E=u[g+1][M+1];(g!==0||o>0)&&d.push(L,S,E),(g!==n-1||l<Math.PI)&&d.push(S,T,E)}this.setIndex(d),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sa=class s extends Ct{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new V,d=new V,m=new V;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=i;g++){let M=g/i*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/i),h.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,M=(i+1)*(_-1)+p-1,L=(i+1)*(_-1)+p,S=(i+1)*_+p;l.push(g,M,S),l.push(M,L,S)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function pr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(mp(i))i.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(mp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ln(s){let e={};for(let t=0;t<s.length;t++){let n=pr(s[t]);for(let i in n)e[i]=n[i]}return e}function mp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function cx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var dm={clone:pr,merge:Ln},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(i.value);break;case"v2":this.uniforms[n].value=new st().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vl=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tr=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var hn=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wl=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function fx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function dx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ql=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ws:r=e,a=2*t-n;break;case ko:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ws:o=e,l=2*n-t;break;case ko:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,L=(-1-d)*p+(1.5+d)*_+.5*m,S=d*p-d*_;for(let T=0;T!==a;++T)r[T]=g*o[u+T]+M*o[c+T]+L*o[l+T]+S*o[h+T];return r}},ra=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Yl=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Kl=class extends Ii{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=d*f+m*2,M=h[g],L=h[g+1],S=e*f+m*2,T=u[S],E=u[S+1],x=mx(n,t,M,T,i);r[m]=pm(x,_,L,E,p)}return r}};function pm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function px(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function mx(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=pm(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=px(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vs(t,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vs(e.times,Array),values:vs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Fo(e.settings)&&(n.settings={inTangents:vs(e.settings.inTangents,Array),outTangents:vs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break;case lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Fo(this.settings)&&(xp(this.settings.inTangents,e),xp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Fo(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Fo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function vp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ys;var is=class extends qn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=qs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};oa.prototype.ValueTypeName="color";var ss=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};ss.prototype.ValueTypeName="number";var Zl=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},rs=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends qn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=qs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Ss.prototype.ValueTypeName="vector";var Mi=class{constructor(e="",t=-1,n=[],i=Gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=fx(l);l=gp(l,1,u),c=gp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return oa;case"quaternion":return rs;case"bool":case"boolean":return is;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gx(s.type);if(s.times===void 0){let n=[],i=[];dx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Fo(s.settings)&&(t.settings={inTangents:vs(s.settings.inTangents,Float32Array),outTangents:vs(s.settings.outTangents,Float32Array)}),t}var si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(_p(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!_p(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function _p(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Jl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mm=new Jl,Pi=class{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},uu=class extends Error{constructor(e,t){super(e),this.response=t}},eo=class extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:i});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&it("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ji[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,_=0,p=new ReadableStream({start(g){M();function M(){h.read().then(({done:L,value:S})=>{if(L)g.close();else{_+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let E=0,x=u.length;E<x;E++){let y=u[E];y.onProgress&&y.onProgress(T)}g.enqueue(S),M()}},L=>{g.error(L)})}}});return new Response(p)}else throw new uu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{si.add(`file:${e}`,c);let u=Ji[e];delete Ji[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zr=new WeakMap,$l=class extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=zr.get(o);h===void 0&&(h=[],zr.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Xr("img");function l(){u(),t&&t(this);let h=zr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),si.remove(`image:${e}`);let f=zr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),si.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var nr=class extends Pi{constructor(e){super(e)}load(e,t,n,i){let r=new cn,o=new $l(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ir=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sr=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ru=new nt,yp=new V,Mp=new V,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xi,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ru,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Wr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},El=new V,Al=new Qt,Ri=new V,aa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(El,Al,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Al,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(El,Al,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Al,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new V,Sp=new st,bp=new st,jt=class extends aa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Sp,bp),t.subVectors(bp,Sp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fu=class extends to{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},la=class extends ir{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},du=class extends to{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},rr=class extends ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},or=class extends aa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pu=class extends to{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ri=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ca=class extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ou=new WeakMap,ha=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&it("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&it("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ou.has(o)===!0?(i&&i(ou.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ou.set(l,c),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var kr=-90,Br=1,no=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(kr,Br,e,t);i.layers=this.layers,this.add(i);let r=new jt(kr,Br,e,t);r.layers=this.layers,this.add(r);let o=new jt(kr,Br,e,t);o.layers=this.layers,this.add(o);let a=new jt(kr,Br,e,t);a.layers=this.layers,this.add(a);let l=new jt(kr,Br,e,t);l.layers=this.layers,this.add(l);let c=new jt(kr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ql=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Qt.multiplyQuaternionsFlat(e,o,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Yu="\\[\\]\\.:\\/",vx=new RegExp("["+Yu+"]","g"),Ku="[^"+Yu+"]",_x="[^"+Yu.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",Ku),Mx=/(WCOD+)?/.source.replace("WCOD",_x),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),wx=new RegExp("^"+yx+Mx+Sx+bx+"$"),Tx=["material","materials","bones","map"],mu=class{constructor(e,t,n){let i=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){let t=wx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=mu;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ec=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Jp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jp:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Gc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===$p;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===_a){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ws,i.endingEnd=Ws):(e?i.endingStart=this.zeroSlopeAtStart?Ws:Vs:i.endingStart=ko,t?i.endingEnd=this.zeroSlopeAtEnd?Ws:Vs:i.endingEnd=ko)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Ex=new Float32Array(1),bs=class extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;m=new Ql(Vt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ra(new Float32Array(2),new Float32Array(2),1,Ex),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Mi.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Gc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new ec(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Mi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var wp=new nt,ua=class{constructor(e,t,n=0,i=1/0){this.ray=new Ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,t=!0,n=[]){return gu(e,this,n,t),n.sort(Tp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)gu(e[i],this,n,t);return n.sort(Tp),n}};function Tp(s,e){return s.distance-e.distance}function gu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)gu(r[o],e,t,!0)}}var ef=class ef{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};ef.prototype.isMatrix2=!0;var xu=ef;function Zu(s,e,t,n){let i=Ax(n);switch(t){case Du:return s*e;case cc:return s*e/i.components*i.byteLength;case fa:return s*e/i.components*i.byteLength;case ws:return s*e*2/i.components*i.byteLength;case hc:return s*e*2/i.components*i.byteLength;case Uu:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case uc:return s*e*4/i.components*i.byteLength;case da:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:case mc:return Math.max(s,16)*Math.max(e,8)/4;case fc:case pc:return Math.max(s,8)*Math.max(e,8)/2;case gc:case xc:case _c:case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vc:case xa:case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kc:case Bc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case va:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ax(s){switch(s){case Kn:case Iu:return{byteLength:1,components:1};case oo:case Pu:case bi:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case ai:case oc:case Fn:return{byteLength:4,components:1};case Lu:case Nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Om(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Cx(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
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
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx=`#ifdef USE_BATCHING
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
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,ev=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,Av=`uniform sampler2D dfgLUT;
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
}`,Rv=`
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kv=`#if defined( USE_POINTS_UV )
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
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform float backgroundBlurriness;
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
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define MATCAP
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
}`,K_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,J_=`#define NORMAL
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
}`,$_=`#define PHONG
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
}`,j_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Ix,alphahash_pars_fragment:Px,alphamap_fragment:Lx,alphamap_pars_fragment:Nx,alphatest_fragment:Dx,alphatest_pars_fragment:Ux,aomap_fragment:Fx,aomap_pars_fragment:Ox,batching_pars_vertex:zx,batching_vertex:kx,begin_vertex:Bx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Vx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:Kx,color_fragment:Zx,color_pars_fragment:Jx,color_pars_vertex:$x,color_vertex:jx,common:Qx,defaultnormal_vertex:ev,displacementmap_pars_vertex:tv,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,colorspace_fragment:rv,colorspace_pars_fragment:ov,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:hv,envmap_physical_pars_fragment:Mv,envmap_vertex:uv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:xv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:_v,lights_pars_begin:yv,lights_toon_fragment:Sv,lights_toon_pars_fragment:bv,lights_phong_fragment:wv,lights_phong_pars_fragment:Tv,lights_physical_fragment:Ev,lights_physical_pars_fragment:Av,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Iv,lightprobes_pars_fragment:Pv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Nv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Uv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:zv,map_particle_pars_fragment:kv,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:Hv,morphinstance_vertex:Gv,morphcolor_vertex:Vv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:qv,normal_fragment_begin:Yv,normal_fragment_maps:Kv,normal_pars_fragment:Zv,normal_pars_vertex:Jv,normal_vertex:$v,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:o_,dithering_fragment:a_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:f_,shadowmap_vertex:d_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:x_,skinnormal_vertex:v_,specularmap_fragment:__,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:S_,transmission_fragment:b_,transmission_pars_fragment:w_,uv_pars_fragment:T_,uv_pars_vertex:E_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:I_,backgroundCube_vert:P_,backgroundCube_frag:L_,cube_vert:N_,cube_frag:D_,depth_vert:U_,depth_frag:F_,distance_vert:O_,distance_frag:z_,equirect_vert:k_,equirect_frag:B_,linedashed_vert:H_,linedashed_frag:G_,meshbasic_vert:V_,meshbasic_frag:W_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:K_,meshnormal_vert:Z_,meshnormal_frag:J_,meshphong_vert:$_,meshphong_frag:j_,meshphysical_vert:Q_,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},Ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Fi={basic:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Ln([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Ln([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Ln([Ve.points,Ve.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Ln([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Ln([Ve.common,Ve.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Ln([Ve.sprite,Ve.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Ln([Ve.common,Ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Ln([Ve.lights,Ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Fi.physical={uniforms:Ln([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var Xc={r:0,b:0,g:0},cy=new nt,zm=new gt;zm.set(-1,0,0,0,1,0,0,0,1);function hy(s,e,t,n,i,r){let o=new Te(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(M){let L=M.isScene===!0?M.background:null;if(L&&L.isTexture){let S=M.backgroundBlurriness>0;L=e.get(L,S)}return L}function m(M){let L=!1,S=d(M);S===null?p(o,a):S&&S.isColor&&(p(S,1),L=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,L){let S=d(L);S&&S.isCubeTexture?(c===void 0&&(c=new Mt(new _i(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:pr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(L.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zm),c.material.toneMapped=wt.getTransfer(S.colorSpace)!==Ot,(u!==S||h!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Mt(new yi(2,2),new tn({name:"BackgroundMaterial",uniforms:pr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=wt.getTransfer(S.colorSpace)!==Ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,L){M.getRGB(Xc,qu(s)),t.buffers.color.setClear(Xc.r,Xc.g,Xc.b,L,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,L=1){o.set(M),a=L,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:_,dispose:g}}function uy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(k,O,F,v,w){let D=!1,C=h(k,v,F,O);r!==C&&(r=C,c(r.object)),D=d(k,v,F,w),D&&m(k,v,F,w),w!==null&&e.update(w,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(k,O,F,v),w!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return s.createVertexArray()}function c(k){return s.bindVertexArray(k)}function u(k){return s.deleteVertexArray(k)}function h(k,O,F,v){let w=v.wireframe===!0,D=n[O.id];D===void 0&&(D={},n[O.id]=D);let C=k.isInstancedMesh===!0?k.id:0,U=D[C];U===void 0&&(U={},D[C]=U);let R=U[F.id];R===void 0&&(R={},U[F.id]=R);let G=R[w];return G===void 0&&(G=f(l()),R[w]=G),G}function f(k){let O=[],F=[],v=[];for(let w=0;w<t;w++)O[w]=0,F[w]=0,v[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:v,object:k,attributes:{},index:null}}function d(k,O,F,v){let w=r.attributes,D=O.attributes,C=0,U=F.getAttributes();for(let R in U)if(U[R].location>=0){let B=w[R],oe=D[R];if(oe===void 0&&(R==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),R==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),B===void 0||B.attribute!==oe||oe&&B.data!==oe.data)return!0;C++}return r.attributesNum!==C||r.index!==v}function m(k,O,F,v){let w={},D=O.attributes,C=0,U=F.getAttributes();for(let R in U)if(U[R].location>=0){let B=D[R];B===void 0&&(R==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),R==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));let oe={};oe.attribute=B,B&&B.data&&(oe.data=B.data),w[R]=oe,C++}r.attributes=w,r.attributesNum=C,r.index=v}function _(){let k=r.newAttributes;for(let O=0,F=k.length;O<F;O++)k[O]=0}function p(k){g(k,0)}function g(k,O){let F=r.newAttributes,v=r.enabledAttributes,w=r.attributeDivisors;F[k]=1,v[k]===0&&(s.enableVertexAttribArray(k),v[k]=1),w[k]!==O&&(s.vertexAttribDivisor(k,O),w[k]=O)}function M(){let k=r.newAttributes,O=r.enabledAttributes;for(let F=0,v=O.length;F<v;F++)O[F]!==k[F]&&(s.disableVertexAttribArray(F),O[F]=0)}function L(k,O,F,v,w,D,C){C===!0?s.vertexAttribIPointer(k,O,F,w,D):s.vertexAttribPointer(k,O,F,v,w,D)}function S(k,O,F,v){_();let w=v.attributes,D=F.getAttributes(),C=O.defaultAttributeValues;for(let U in D){let R=D[U];if(R.location>=0){let G=w[U];if(G===void 0&&(U==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),U==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){let B=G.normalized,oe=G.itemSize,ie=e.get(G);if(ie===void 0)continue;let J=ie.buffer,ce=ie.type,X=ie.bytesPerElement,Y=ce===s.INT||ce===s.UNSIGNED_INT||G.gpuType===oc;if(G.isInterleavedBufferAttribute){let j=G.data,ye=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Le=G.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let ze=0;ze<R.locationSize;ze++)g(R.location+ze,j.meshPerAttribute);k.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ze=0;ze<R.locationSize;ze++)p(R.location+ze);s.bindBuffer(s.ARRAY_BUFFER,J);for(let ze=0;ze<R.locationSize;ze++)L(R.location+ze,oe/R.locationSize,ce,B,ye*X,(Le+oe/R.locationSize*ze)*X,Y)}else{if(G.isInstancedBufferAttribute){for(let j=0;j<R.locationSize;j++)g(R.location+j,G.meshPerAttribute);k.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let j=0;j<R.locationSize;j++)p(R.location+j);s.bindBuffer(s.ARRAY_BUFFER,J);for(let j=0;j<R.locationSize;j++)L(R.location+j,oe/R.locationSize,ce,B,oe*X,oe/R.locationSize*j*X,Y)}}else if(C!==void 0){let B=C[U];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(R.location,B);break;case 3:s.vertexAttrib3fv(R.location,B);break;case 4:s.vertexAttrib4fv(R.location,B);break;default:s.vertexAttrib1fv(R.location,B)}}}}M()}function T(){I();for(let k in n){let O=n[k];for(let F in O){let v=O[F];for(let w in v){let D=v[w];for(let C in D)u(D[C].object),delete D[C];delete v[w]}}delete n[k]}}function E(k){if(n[k.id]===void 0)return;let O=n[k.id];for(let F in O){let v=O[F];for(let w in v){let D=v[w];for(let C in D)u(D[C].object),delete D[C];delete v[w]}}delete n[k.id]}function x(k){for(let O in n){let F=n[O];for(let v in F){let w=F[v];if(w[k.id]===void 0)continue;let D=w[k.id];for(let C in D)u(D[C].object),delete D[C];delete w[k.id]}}}function y(k){for(let O in n){let F=n[O],v=k.isInstancedMesh===!0?k.id:0,w=F[v];if(w!==void 0){for(let D in w){let C=w[D];for(let U in C)u(C[U].object),delete C[U];delete w[D]}delete F[v],Object.keys(F).length===0&&delete n[O]}}}function I(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function fy(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Xn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let y=x===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Kn&&x!==Fn&&!y&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:L,maxFragmentUniforms:S,maxSamples:T,samples:E}}function py(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ei,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,L=M*4,S=g.clippingState||null;l.value=S,S=u(m,f,L,d);for(let T=0;T!==L;++T)S[T]=t[T];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let L=0,S=d;L!==_;++L,S+=4)o.copy(h[L]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Ta=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:lr});r.uniforms.tEquirect.value=t;let o=new Mt(i,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=ln),new no(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},gm=256,my=3,gy=20,km=256,Bm=16,xy=3,vy=new V,_y=new Te,Yc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new Mt(new _i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=vy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(_y));let p=new no(n,i,u);return p.position.copy(a),p.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gm,Vu(e))}_fromTexture(e,t){e.mapping===ur||e.mapping===so?this._setSize(e.image.length===0?gm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xm(e,!1,!1),n=Math.log2(e)-my;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ur||e.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=_m()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yy(),this._integrationMaterial=My());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Bm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-xy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(km*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function xm(s,e,t){return new Ta(s,{minFilter:oi,generateMipmaps:e,type:bi,colorSpace:On,depthBuffer:t})}function Ea(s,e,t){return new tn({name:s,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:bn,blending:lr,depthTest:!1,depthWrite:!1})}function yy(){return Ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${km}u

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
	`)}function My(){return Ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bm}},`

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
	`)}function Sy(){return Ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gy}
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
	`)}function vm(){return Ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _m(){return Ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function by(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ic||d===sc)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Ta(m.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===ic||d===sc,_=d===ur||d===so;if(m||_){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Yc(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Yc(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===ic?f.mapping=ur:d===sc&&(f.mapping=so),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function wy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Xs("WebGLRenderer: "+n+" extension not supported."),i}}}function Ty(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(m){let _=m.attributes;for(let p in _)e.update(_[p],s.ARRAY_BUFFER)}function h(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let M=_!==null?_.array.length:p.array.length/3-1,L=p.count>=65535?Xo:Wo,S=new L(Math.ceil(M/3)*6,1),T=S.array;if(_!==null){let x=_.array;g=_.version;for(let y=0,I=0;y<M;y+=3){let A=x[y+0],k=x[y+1],O=x[y+2];T[I++]=A,T[I++]=k,T[I++]=k,T[I++]=O,T[I++]=O,T[I++]=A}}else{g=p.version;for(let x=0,y=0;x<M;x+=3){let I=x+0,A=x+1,k=x+2;T[y++]=I,T[y++]=A,T[y++]=A,T[y++]=k,T[y++]=k,T[y++]=I}}S.version=g;let E=r.get(m);E&&e.remove(E),r.set(m,S)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&h(m)}else h(m);return r.get(m)}function d(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Ey(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ay(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ry(s,e,t){let n=new WeakMap,i=new Ht;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],L=0;d===!0&&(L=1),m===!0&&(L=2),_===!0&&(L=3);let S=a.attributes.position.count*L,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*T*4*h),x=new Go(E,S,T,h);x.type=Fn,x.needsUpdate=!0;let y=L*4;for(let A=0;A<h;A++){let k=p[A],O=g[A],F=M[A],v=S*T*4*A;for(let w=0;w<k.count;w++){let D=w*y;d===!0&&(i.fromBufferAttribute(k,w),E[v+D+0]=i.x,E[v+D+1]=i.y,E[v+D+2]=i.z,E[v+D+3]=0),m===!0&&(i.fromBufferAttribute(O,w),E[v+D+4]=i.x,E[v+D+5]=i.y,E[v+D+6]=i.z,E[v+D+7]=0),_===!0&&(i.fromBufferAttribute(F,w),E[v+D+8]=i.x,E[v+D+9]=i.y,E[v+D+10]=i.z,E[v+D+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:x,size:new st(S,T)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Cy(s,e,t,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Iy={[bu]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Tu]:"CINEON_TONE_MAPPING",[Eu]:"ACES_FILMIC_TONE_MAPPING",[Ru]:"AGX_TONE_MAPPING",[hr]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function Py(s,e,t,n,i,r){let o=new ti(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ct;u.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new Vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Mt(u,h),d=new or(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,M=null,L=[],S=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<L.length;x++){let y=L[x];y.setSize&&y.setSize(T,E)}},this.setEffects=function(T){L=T,S=L.length>0&&L[0].isRenderPass===!0;let E=o.width,x=o.height;L.length>0&&a===null&&(a=new ti(E,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(E,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&L.some(I=>I.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new ts(E,x),r===!0&&(c.format=ls,c.type=dr)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let I=0;I<L.length;I++){let A=L[I];A.setSize&&A.setSize(E,x),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Ni&&L.length===0)return!1;if(M=E,E!==null){let x=E.width,y=E.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return S===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(T,E){T.toneMapping=g,p=!0;let x=o,y=a;for(let I=0;I<L.length;I++){let A=L[I];A.enabled!==!1&&(A.render(T,y,x,E),A.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,h.defines={},wt.getTransfer(m)===Ot&&(h.defines.SRGB_TRANSFER="");let I=Iy[_];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Hm=new cn,Gm=new ts(1,1),Vm=new ea(1),Wm=new Go,Xm=new kl,qm=new Qo,ym=[],Mm=[],Sm=new Float32Array(16),bm=new Float32Array(9),wm=new Float32Array(4);function ho(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ym[i];if(r===void 0&&(r=new Float32Array(i),ym[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Kc(s,e){let t=Mm[e];t===void 0&&(t=new Int32Array(e),Mm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ly(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function Dy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function Uy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function Fy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;wm.set(n),s.uniformMatrix2fv(this.addr,!1,wm),fn(t,n)}}function Oy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;bm.set(n),s.uniformMatrix3fv(this.addr,!1,bm),fn(t,n)}}function zy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Sm.set(n),s.uniformMatrix4fv(this.addr,!1,Sm),fn(t,n)}}function ky(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function By(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function Hy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function Gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function Vy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function Xy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function Zc(s){return s.version===0&&(s.compareFunction=ku,s.needsUpdate=!0),s}function Yy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Zc(Gm):r=Hm,t.setTexture2D(e||r,i)}function Ky(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xm,i)}function Zy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Zc(Vm):r=qm,t.setTextureCube(e||r,i)}function Jy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wm,i)}function $y(s){switch(s){case 5126:return Ly;case 35664:return Ny;case 35665:return Dy;case 35666:return Uy;case 35674:return Fy;case 35675:return Oy;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return By;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Vy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}function jy(s,e){s.uniform1fv(this.addr,e)}function Qy(s,e){let t=ho(e,this.size,2);s.uniform2fv(this.addr,t)}function eM(s,e){let t=ho(e,this.size,3);s.uniform3fv(this.addr,t)}function tM(s,e){let t=ho(e,this.size,4);s.uniform4fv(this.addr,t)}function nM(s,e){let t=ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iM(s,e){let t=ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sM(s,e){let t=ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rM(s,e){s.uniform1iv(this.addr,e)}function oM(s,e){s.uniform2iv(this.addr,e)}function aM(s,e){s.uniform3iv(this.addr,e)}function lM(s,e){s.uniform4iv(this.addr,e)}function cM(s,e){s.uniform1uiv(this.addr,e)}function hM(s,e){s.uniform2uiv(this.addr,e)}function uM(s,e){s.uniform3uiv(this.addr,e)}function fM(s,e){s.uniform4uiv(this.addr,e)}function dM(s,e,t){let n=this.cache,i=e.length,r=Kc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Zc(Gm):o=Hm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function pM(s,e,t){let n=this.cache,i=e.length,r=Kc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xm,r[o])}function mM(s,e,t){let n=this.cache,i=e.length,r=Kc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Zc(Vm):o=qm;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function gM(s,e,t){let n=this.cache,i=e.length,r=Kc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wm,r[o])}function xM(s){switch(s){case 5126:return jy;case 35664:return Qy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}var sf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$y(t.type)}},rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xM(t.type)}},of=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},tf=/(\w+)(\])?(\[|\.)?/g;function Tm(s,e){s.seq.push(e),s.map[e.id]=e}function vM(s,e,t){let n=s.name,i=n.length;for(tf.lastIndex=0;;){let r=tf.exec(n),o=tf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Tm(t,c===void 0?new sf(a,s,e):new rf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new of(a),Tm(t,h)),t=h}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);vM(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Em(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _M=37297,yM=0;function MM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Am=new gt;function SM(s){wt._getMatrix(Am,wt.workingColorSpace,s);let e=`mat3( ${Am.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Bo:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+MM(s.getShaderSource(e),a)}else return r}function bM(s,e){let t=SM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var wM={[bu]:"Linear",[wu]:"Reinhard",[Tu]:"Cineon",[Eu]:"ACESFilmic",[Ru]:"AgX",[hr]:"Neutral",[Au]:"Custom"};function TM(s,e){let t=wM[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qc=new V;function EM(){wt.getLuminanceCoefficients(qc);let s=qc.x.toFixed(4),e=qc.y.toFixed(4),t=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function RM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wa(s){return s!==""}function Cm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(s){return s.replace(IM,PM)}function PM(s,e){let t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return af(t)}var LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(s){return s.replace(LM,NM)}function NM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var DM={[ar]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function UM(s){return DM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FM={[so]:"ENVMAP_MODE_REFRACTION"};function OM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":FM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zM={[nc]:"ENVMAP_BLENDING_MULTIPLY",[Yp]:"ENVMAP_BLENDING_MIX",[Kp]:"ENVMAP_BLENDING_ADD"};function kM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":zM[s.combine]||"ENVMAP_BLENDING_NONE"}function BM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=UM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=OM(t),h=kM(t),f=AM(t),d=RM(r),m=i.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(wa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(wa).join(`
`),p.length>0&&(p+=`
`)):(_=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),p=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=af(o),o=Cm(o,t),o=Im(o,t),a=af(a),a=Cm(a,t),a=Im(a,t),o=Pm(o),a=Pm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=g+_+o,L=g+p+a,S=Em(i,i.VERTEX_SHADER,M),T=Em(i,i.FRAGMENT_SHADER,L);i.attachShader(m,S),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(m)||"",O=i.getShaderInfoLog(S)||"",F=i.getShaderInfoLog(T)||"",v=k.trim(),w=O.trim(),D=F.trim(),C=!0,U=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(C=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,T);else{let R=Rm(i,S,"vertex"),G=Rm(i,T,"fragment");mt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+v+`
`+R+`
`+G)}else v!==""?it("WebGLProgram: Program Info Log:",v):(w===""||D==="")&&(U=!1);U&&(A.diagnostics={runnable:C,programLog:v,vertexShader:{log:w,prefix:_},fragmentShader:{log:D,prefix:p}})}i.deleteShader(S),i.deleteShader(T),x=new lo(i,m),y=CM(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,_M)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}var HM=0,lf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cf(e),t.set(e,n)),n}},cf=class{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}};function GM(s){return s===ws||s===xa||s===va}function VM(s,e,t,n,i,r){let o=new Kr,a=new lf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,I,A,k,O){let F=A.fog,v=k.geometry,w=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,C=e.get(x.envMap||w,D),U=f[x.type],R=n.precision;x.precision!==null&&(R=n.getMaxPrecision(x.precision),R!==x.precision&&it("WebGLProgram.getParameters:",x.precision,"not supported, using",R,"instead."));let G=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,B=G!==void 0?G.length:0,oe=0;v.morphAttributes.position!==void 0&&(oe=1),v.morphAttributes.normal!==void 0&&(oe=2),v.morphAttributes.color!==void 0&&(oe=3);let ie,J,ce,X;if(U){let He=Fi[U];ie=He.vertexShader,J=He.fragmentShader}else{ie=x.vertexShader,J=x.fragmentShader;let He=a.getVertexShaderStage(x),Nt=a.getFragmentShaderStage(x);a.update(x,He,Nt),ce=He.id,X=Nt.id}let Y=s.getRenderTarget(),j=s.state.buffers.depth.getReversed(),ye=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,ze=!!x.map,Be=!!x.matcap,We=!!C,Ke=We&&C.isPMREMTexture===!0,Ut=!!x.aoMap,me=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,Fe=!!x.displacementMap,we=!!x.emissiveMap,fe=!!x.metalnessMap,xe=!!x.roughnessMap,Ee=x.anisotropy>0,H=x.clearcoat>0,$e=x.diffuseRoughness>0,ue=x.dispersion>0,lt=x.retroreflectivity>0,ve=x.iridescence>0,pt=x.sheen>0,qe=x.transmission>0,Qe=Ee&&!!x.anisotropyMap,z=H&&!!x.clearcoatMap,b=H&&!!x.clearcoatNormalMap,K=H&&!!x.clearcoatRoughnessMap,se=$e&&!!x.diffuseRoughnessMap,te=ve&&!!x.iridescenceMap,ee=ve&&!!x.iridescenceThicknessMap,_e=pt&&!!x.sheenColorMap,le=pt&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ce=!!x.specularColorMap,q=!!x.specularIntensityMap,ge=qe&&!!x.transmissionMap,ae=qe&&!!x.thicknessMap,Pe=!!x.gradientMap,Ie=!!x.alphaMap,Ne=x.alphaTest>0,et=!!x.alphaHash,_t=!!x.extensions,Ae=Ni;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ae=s.toneMapping);let tt=Ke?C.isCompressedCubeTexture?C.image[0].mipmaps:C.mipmaps:null,St={shaderID:U,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:J,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:R,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:ye,instancingColor:ye&&k.instanceColor!==null,instancingMorph:ye&&k.morphTexture!==null,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:Be,envMap:We,envMapMode:We&&C.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?tt.length-1:null,envMapSize:Ke?tt[0].width:null,aoMap:Ut,lightMap:me,bumpMap:be,normalMap:pe,displacementMap:Fe,emissiveMap:we,normalMapObjectSpace:pe&&x.normalMapType===em,normalMapTangentSpace:pe&&x.normalMapType===Ma,packedNormalMap:pe&&x.normalMapType===Ma&&GM(x.normalMap.format),metalnessMap:fe,roughnessMap:xe,anisotropy:Ee,anisotropyMap:Qe,clearcoat:H,clearcoatMap:z,clearcoatNormalMap:b,clearcoatRoughnessMap:K,diffuseRoughness:$e,diffuseRoughnessMap:se,dispersion:ue,retroreflection:lt,iridescence:ve,iridescenceMap:te,iridescenceThicknessMap:ee,sheen:pt,sheenColorMap:_e,sheenRoughnessMap:le,specularMap:de,specularColorMap:Ce,specularIntensityMap:q,transmission:qe,transmissionMap:ge,thicknessMap:ae,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Si&&x.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:et,combine:x.combine,mapUv:ze&&d(x.map.channel),aoMapUv:Ut&&d(x.aoMap.channel),lightMapUv:me&&d(x.lightMap.channel),bumpMapUv:be&&d(x.bumpMap.channel),normalMapUv:pe&&d(x.normalMap.channel),displacementMapUv:Fe&&d(x.displacementMap.channel),emissiveMapUv:we&&d(x.emissiveMap.channel),metalnessMapUv:fe&&d(x.metalnessMap.channel),roughnessMapUv:xe&&d(x.roughnessMap.channel),anisotropyMapUv:Qe&&d(x.anisotropyMap.channel),clearcoatMapUv:z&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:te&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&d(x.sheenRoughnessMap.channel),specularMapUv:de&&d(x.specularMap.channel),specularColorMapUv:Ce&&d(x.specularColorMap.channel),specularIntensityMapUv:q&&d(x.specularIntensityMap.channel),transmissionMapUv:ge&&d(x.transmissionMap.channel),thicknessMapUv:ae&&d(x.thicknessMap.channel),alphaMapUv:Ie&&d(x.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(pe||Ee),vertexNormals:!!v.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!v.attributes.uv&&(ze||Ie),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||v.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:oe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.filter(He=>He.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&wt.getTransfer(x.map.colorSpace)===Ot,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&wt.getTransfer(x.emissiveMap.colorSpace)===Ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(y,x),g(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let y=f[x.type],I;if(y){let A=Fi[y];I=dm.clone(A.uniforms)}else I=x.uniforms;return I}function L(x,y){let I=u.get(y);return I!==void 0?++I.usedTimes:(I=new BM(s,y,x,i),c.push(I),u.set(y,I)),I}function S(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:M,acquireProgram:L,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function WM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function XM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=m,M.materialVariant=o(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=p,M.group=g),e++,M}function l(f,d,m,_,p,g,M){M.reversedDepth===!0&&(p=-p);let L=a(f,d,m,_,p,g);m.transmission>0?n.push(L):m.transparent===!0?i.push(L):t.push(L)}function c(f,d,m,_,p,g){let M=a(f,d,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function u(f,d){t.length>1&&t.sort(f||XM),n.length>1&&n.sort(d||Nm),i.length>1&&i.sort(d||Nm)}function h(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function qM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Dm,s.set(n,[o])):i>=r.length?(o=new Dm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function YM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Te};break;case"SpotLight":t={position:new V,direction:new V,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function KM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ZM=0;function JM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $M(s){let e=new YM,t=KM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,r=new nt,o=new nt;function a(c){let u=0,h=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,M=0,L=0,S=0,T=0,E=0,x=0,y=0,I=0,A=0;c.sort(JM);for(let O=0,F=c.length;O<F;O++){let v=c[O],w=v.color,D=v.intensity,C=v.distance,U=null;if(v.shadow&&v.shadow.map&&(v.shadow.map.texture.format===ws?U=v.shadow.map.texture:U=v.shadow.map.depthTexture||v.shadow.map.texture),v.isAmbientLight)u+=w.r*D,h+=w.g*D,f+=w.b*D;else if(v.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(v.sh.coefficients[R],D);A++}else if(v.isSunLight){let R=e.get(v);if(R.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let G=v.shadow,B=t.get(v);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=B,n.sunShadowMap[m]=U;let oe=G.getViewportCount();for(let ie=0;ie<oe;ie++)n.sunShadowMatrix[_+ie]=G.getMatrix(ie),n.sunShadowCascade[_+ie]=G._cascadeData[ie];_+=oe,m++}n.sun[d]=R,d++}else if(v.isDirectionalLight){let R=e.get(v);if(R.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let G=v.shadow,B=t.get(v);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=v.shadow.matrix,T++}n.directional[p]=R,p++}else if(v.isSpotLight){let R=e.get(v);R.position.setFromMatrixPosition(v.matrixWorld),R.color.copy(w).multiplyScalar(D),R.distance=C,R.coneCos=Math.cos(v.angle),R.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),R.decay=v.decay,n.spot[M]=R;let G=v.shadow;if(v.map&&(n.spotLightMap[y]=v.map,y++,G.updateMatrices(v),v.castShadow&&I++),n.spotLightMatrix[M]=G.matrix,v.castShadow){let B=t.get(v);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=U,x++}M++}else if(v.isRectAreaLight){let R=e.get(v);R.color.copy(w).multiplyScalar(D),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),n.rectArea[L]=R,L++}else if(v.isPointLight){let R=e.get(v);if(R.color.copy(v.color).multiplyScalar(v.intensity),R.distance=v.distance,R.decay=v.decay,v.castShadow){let G=v.shadow,B=t.get(v);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=v.shadow.matrix,E++}n.point[g]=R,g++}else if(v.isHemisphereLight){let R=e.get(v);R.skyColor.copy(v.color).multiplyScalar(D),R.groundColor.copy(v.groundColor).multiplyScalar(D),n.hemi[S]=R,S++}}L>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let k=n.hash;(k.sunLength!==d||k.directionalLength!==p||k.pointLength!==g||k.spotLength!==M||k.rectAreaLength!==L||k.hemiLength!==S||k.numSunShadows!==m||k.numDirectionalShadows!==T||k.numPointShadows!==E||k.numSpotShadows!==x||k.numSpotMaps!==y||k.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=L,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,k.sunLength=d,k.directionalLength=p,k.pointLength=g,k.spotLength=M,k.rectAreaLength=L,k.hemiLength=S,k.numSunShadows=m,k.numDirectionalShadows=T,k.numPointShadows=E,k.numSpotShadows=x,k.numSpotMaps=y,k.numLightProbes=A,n.version=ZM++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0,p=0,g=u.matrixWorldInverse;for(let M=0,L=c.length;M<L;M++){let S=c[M];if(S.isSunLight){let T=n.sun[h];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),h++}else if(S.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(S.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Um(s){let e=new $M(s),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function o(h){h.isLightProbeGrid?i.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Um(s),e.set(i,[a])):r>=o.length?(a=new Um(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`,tS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],nS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Fm=new nt,ba=new V,nf=new V;function iS(s,e,t){let n=new xi,i=new st,r=new st,o=new Ht,a=new Wl,l=new Xl,c={},u=t.maxTextureSize,h={[Li]:bn,[bn]:Li,[nn]:nn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:QM,fragmentShader:eS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ct;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let g=this.type;this.render=function(E,x,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Rp&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);let I=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),O=s.state;O.setBlending(lr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=g!==this.type;F&&x.traverse(function(v){v.material&&(Array.isArray(v.material)?v.material.forEach(w=>w.needsUpdate=!0):v.material.needsUpdate=!0)});for(let v=0,w=E.length;v<w;v++){let D=E[v],C=D.shadow;if(C===void 0){it("WebGLShadowMap:",D,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);let U=C.getFrameExtents();i.multiply(U),r.copy(C.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,C.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,C.mapSize.y=r.y));let R=s.state.buffers.depth.getReversed();if(C.camera._reversedDepth=R,C.map===null||F===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===io){if(D.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new ti(i.x,i.y,{format:ws,type:bi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),C.map.texture.name=D.name+".shadowMap",C.map.depthTexture=new ts(i.x,i.y,Fn),C.map.depthTexture.name=D.name+".shadowMapDepth",C.map.depthTexture.format=es,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en}else D.isPointLight?(C.map=new Ta(i.x),C.map.depthTexture=new ea(i.x,ai)):(C.map=new ti(i.x,i.y),C.map.depthTexture=new ts(i.x,i.y,ai)),C.map.depthTexture.name=D.name+".shadowMap",C.map.depthTexture.format=es,this.type===ar?(C.map.depthTexture.compareFunction=R?zu:Ou,C.map.depthTexture.minFilter=ln,C.map.depthTexture.magFilter=ln):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==i.x||C.map.height!==i.y)&&C.map.setSize(i.x,i.y);let G=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();D.isPointLight!==!0&&C.updateMatrices(D,y);let B=(C.camera.layers.mask&4294967294)!==0?C.camera.layers:y.layers;for(let oe=0;oe<G;oe++){let ie=C.getCamera(oe);if(D.isPointLight){let J=C.camera,ce=C.matrix,X=D.distance||J.far;X!==J.far&&(J.far=X,J.updateProjectionMatrix()),ba.setFromMatrixPosition(D.matrixWorld),J.position.copy(ba),nf.copy(J.position),nf.add(tS[oe]),J.up.copy(nS[oe]),J.lookAt(nf),J.updateMatrixWorld(),ce.makeTranslation(-ba.x,-ba.y,-ba.z),Fm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),C._frustum.setFromProjectionMatrix(Fm,J.coordinateSystem,J.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)s.setRenderTarget(C.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(C.map),s.clear());let J=C.getViewport(oe);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(o)}n=C.getFrustum(oe),S(x,y,ie,D,B,this.type)}C.isPointLightShadow!==!0&&this.type===io&&M(C,y),C.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(I,A,k)};function M(E,x){let y=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(i.x,i.y,{format:ws,type:bi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,y,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,y,d,_,null)}function L(E,x,y,I){let A=null,k=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)A=k;else if(A=y.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=A.uuid,F=x.uuid,v=c[O];v===void 0&&(v={},c[O]=v);let w=v[F];w===void 0&&(w=A.clone(),v[F]=w,x.addEventListener("dispose",T)),A=w}if(A.visible=x.visible,A.wireframe=x.wireframe,I===io?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=s.properties.get(A);O.light=y}return A}function S(E,x,y,I,A,k){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===io)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let v=e.update(E),w=E.material;if(Array.isArray(w)){let D=v.groups;for(let C=0,U=D.length;C<U;C++){let R=D[C],G=w[R.materialIndex];if(G&&G.visible){let B=L(E,G,I,k);E.onBeforeShadow(s,E,x,y,v,B,R),s.renderBufferDirect(y,null,v,B,E,R),E.onAfterShadow(s,E,x,y,v,B,R)}}}else if(w.visible){let D=L(E,w,I,k);E.onBeforeShadow(s,E,x,y,v,D,null),s.renderBufferDirect(y,null,v,D,E,null),E.onAfterShadow(s,E,x,y,v,D,null)}}let F=E.children;for(let v=0,w=F.length;v<w;v++)S(F[v],x,y,I,A,k)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let I=c[y],A=E.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function sS(s,e){function t(){let q=!1,ge=new Ht,ae=null,Pe=new Ht(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!q&&(s.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,Ne,et,_t,Ae){Ae===!0&&(Ie*=_t,Ne*=_t,et*=_t),ge.set(Ie,Ne,et,_t),Pe.equals(ge)===!1&&(s.clearColor(Ie,Ne,et,_t),Pe.copy(ge))},reset:function(){q=!1,ae=null,Pe.set(-1,0,0,0)}}}function n(){let q=!1,ge=!1,ae=null,Pe=null,Ie=null;return{setReversed:function(Ne){if(ge!==Ne){let et=e.get("EXT_clip_control");Ne?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),ge=Ne;let _t=Ie;Ie=null,this.setClear(_t)}},getReversed:function(){return ge},setTest:function(Ne){Ne?j(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!q&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(ge&&(Ne=hm[Ne]),Pe!==Ne){switch(Ne){case Il:s.depthFunc(s.NEVER);break;case Pl:s.depthFunc(s.ALWAYS);break;case Ll:s.depthFunc(s.LESS);break;case Gr:s.depthFunc(s.LEQUAL);break;case Nl:s.depthFunc(s.EQUAL);break;case Dl:s.depthFunc(s.GEQUAL);break;case Ul:s.depthFunc(s.GREATER);break;case Fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ne}},setLocked:function(Ne){q=Ne},setClear:function(Ne){Ie!==Ne&&(Ie=Ne,ge&&(Ne=1-Ne),s.clearDepth(Ne))},reset:function(){q=!1,ae=null,Pe=null,Ie=null,ge=!1}}}function i(){let q=!1,ge=null,ae=null,Pe=null,Ie=null,Ne=null,et=null,_t=null,Ae=null;return{setTest:function(tt){q||(tt?j(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!q&&(s.stencilMask(tt),ge=tt)},setFunc:function(tt,St,He){(ae!==tt||Pe!==St||Ie!==He)&&(s.stencilFunc(tt,St,He),ae=tt,Pe=St,Ie=He)},setOp:function(tt,St,He){(Ne!==tt||et!==St||_t!==He)&&(s.stencilOp(tt,St,He),Ne=tt,et=St,_t=He)},setLocked:function(tt){q=tt},setClear:function(tt){Ae!==tt&&(s.clearStencil(tt),Ae=tt)},reset:function(){q=!1,ge=null,ae=null,Pe=null,Ie=null,Ne=null,et=null,_t=null,Ae=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,L=null,S=null,T=null,E=null,x=null,y=new Te(0,0,0),I=0,A=!1,k=null,O=null,F=null,v=null,w=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,U=0,R=s.getParameter(s.VERSION);R.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(R)[1]),C=U>=1):R.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),C=U>=2);let G=null,B={},oe=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),J=new Ht().fromArray(oe),ce=new Ht().fromArray(ie);function X(q,ge,ae,Pe){let Ie=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(q,Ne),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ae;et++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(ge+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ne}let Y={};Y[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(Gr),be(!1),pe(vu),j(s.CULL_FACE),Ut(lr);function j(q){u[q]!==!0&&(s.enable(q),u[q]=!0)}function ye(q){u[q]!==!1&&(s.disable(q),u[q]=!1)}function Le(q,ge){return f[q]!==ge?(s.bindFramebuffer(q,ge),f[q]=ge,q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ge),q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function ze(q,ge){let ae=m,Pe=!1;if(q){ae=d.get(ge),ae===void 0&&(ae=[],d.set(ge,ae));let Ie=q.textures;if(ae.length!==Ie.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,et=Ie.length;Ne<et;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=Ie.length,Pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ae)}function Be(q){return _!==q?(s.useProgram(q),_=q,!0):!1}let We={[cr]:s.FUNC_ADD,[Ip]:s.FUNC_SUBTRACT,[Pp]:s.FUNC_REVERSE_SUBTRACT};We[Lp]=s.MIN,We[Np]=s.MAX;let Ke={[Dp]:s.ZERO,[Up]:s.ONE,[Fp]:s.SRC_COLOR,[Mu]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[Bp]:s.DST_COLOR,[zp]:s.DST_ALPHA,[Op]:s.ONE_MINUS_SRC_COLOR,[Su]:s.ONE_MINUS_SRC_ALPHA,[Hp]:s.ONE_MINUS_DST_COLOR,[kp]:s.ONE_MINUS_DST_ALPHA,[Vp]:s.CONSTANT_COLOR,[Wp]:s.ONE_MINUS_CONSTANT_COLOR,[Xp]:s.CONSTANT_ALPHA,[qp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ut(q,ge,ae,Pe,Ie,Ne,et,_t,Ae,tt){if(q===lr){p===!0&&(ye(s.BLEND),p=!1);return}if(p===!1&&(j(s.BLEND),p=!0),q!==Cp){if(q!==g||tt!==A){if((M!==cr||T!==cr)&&(s.blendEquation(s.FUNC_ADD),M=cr,T=cr),tt)switch(q){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFunc(s.ONE,s.ONE);break;case _u:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:mt("WebGLState: Invalid blending: ",q);break}else switch(q){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _u:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",q);break}L=null,S=null,E=null,x=null,y.set(0,0,0),I=0,g=q,A=tt}return}Ie=Ie||ge,Ne=Ne||ae,et=et||Pe,(ge!==M||Ie!==T)&&(s.blendEquationSeparate(We[ge],We[Ie]),M=ge,T=Ie),(ae!==L||Pe!==S||Ne!==E||et!==x)&&(s.blendFuncSeparate(Ke[ae],Ke[Pe],Ke[Ne],Ke[et]),L=ae,S=Pe,E=Ne,x=et),(_t.equals(y)===!1||Ae!==I)&&(s.blendColor(_t.r,_t.g,_t.b,Ae),y.copy(_t),I=Ae),g=q,A=!1}function me(q,ge){q.side===nn?ye(s.CULL_FACE):j(s.CULL_FACE);let ae=q.side===bn;ge&&(ae=!ae),be(ae),q.blending===Si&&q.transparent===!1?Ut(lr):Ut(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Pe=q.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),we(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(q){k!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),k=q)}function pe(q){q!==Ep?(j(s.CULL_FACE),q!==O&&(q===vu?s.cullFace(s.BACK):q===Ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),O=q}function Fe(q){q!==F&&(C&&s.lineWidth(q),F=q)}function we(q,ge,ae){q?(j(s.POLYGON_OFFSET_FILL),(v!==ge||w!==ae)&&(v=ge,w=ae,o.getReversed()&&(ge=-ge,ae=-ae),s.polygonOffset(ge,ae))):ye(s.POLYGON_OFFSET_FILL)}function fe(q){q?j(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function xe(q){q===void 0&&(q=s.TEXTURE0+D-1),G!==q&&(s.activeTexture(q),G=q)}function Ee(q,ge,ae){ae===void 0&&(G===null?ae=s.TEXTURE0+D-1:ae=G);let Pe=B[ae];Pe===void 0&&(Pe={type:void 0,texture:void 0},B[ae]=Pe),(Pe.type!==q||Pe.texture!==ge)&&(G!==ae&&(s.activeTexture(ae),G=ae),s.bindTexture(q,ge||Y[q]),Pe.type=q,Pe.texture=ge)}function H(){let q=B[G];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function $e(){try{s.compressedTexImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function ue(){try{s.compressedTexImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function lt(){try{s.texSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function ve(){try{s.texSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function pt(){try{s.compressedTexSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function Qe(){try{s.texStorage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function z(){try{s.texStorage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function b(){try{s.texImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function K(){try{s.texImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function se(q){return h[q]!==void 0?h[q]:s.getParameter(q)}function te(q,ge){h[q]!==ge&&(s.pixelStorei(q,ge),h[q]=ge)}function ee(q){J.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),J.copy(q))}function _e(q){ce.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),ce.copy(q))}function le(q,ge){let ae=c.get(ge);ae===void 0&&(ae=new WeakMap,c.set(ge,ae));let Pe=ae.get(q);Pe===void 0&&(Pe=s.getUniformBlockIndex(ge,q.name),s.uniformBlockBinding(ge,Pe,Pe),ae.set(q,Pe))}function de(q,ge,ae){let Ie=c.get(ge).get(q);l[Ie]!==ae&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ie,ae),l[Ie]=ae)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},G=null,B={},f={},l={},d=new WeakMap,m=[],_=null,p=!1,g=null,M=null,L=null,S=null,T=null,E=null,x=null,y=new Te(0,0,0),I=0,A=!1,k=null,O=null,F=null,v=null,w=null,J.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Le,drawBuffers:ze,useProgram:Be,setBlending:Ut,setMaterial:me,setFlipSided:be,setCullFace:pe,setLineWidth:Fe,setPolygonOffset:we,setScissorTest:fe,activeTexture:xe,bindTexture:Ee,unbindTexture:H,compressedTexImage2D:$e,compressedTexImage3D:ue,texImage2D:b,texImage3D:K,pixelStorei:te,getParameter:se,updateUBOMapping:le,uniformBlockBinding:de,texStorage2D:Qe,texStorage3D:z,texSubImage2D:lt,texSubImage3D:ve,compressedTexSubImage2D:pt,compressedTexSubImage3D:qe,scissor:ee,viewport:_e,reset:Ce}}function rS(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,_=new FinalizationRegistry(z=>m.delete(z)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,b){return p?new OffscreenCanvas(z,b):Xr("canvas")}function M(z,b,K){let se=1,te=Qe(z);if((te.width>K||te.height>K)&&(se=K/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!="undefined"&&z instanceof VideoFrame){let ee=Math.floor(se*te.width),_e=Math.floor(se*te.height);f===void 0&&(f=g(ee,_e));let le=b?g(ee,_e):f;return le.width=ee,le.height=_e,le.getContext("2d").drawImage(z,0,0,ee,_e),it("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+_e+")."),le}else return"data"in z&&it("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),z;return z}function L(z){return z.generateMipmaps}function S(z){s.generateMipmap(z)}function T(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(z,b,K,se,te,ee=!1){if(z!==null){if(s[z]!==void 0)return s[z];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let _e;se&&(_e=e.get("EXT_texture_norm16"),_e||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=b;if(b===s.RED&&(K===s.FLOAT&&(le=s.R32F),K===s.HALF_FLOAT&&(le=s.R16F),K===s.UNSIGNED_BYTE&&(le=s.R8),K===s.UNSIGNED_SHORT&&_e&&(le=_e.R16_EXT),K===s.SHORT&&_e&&(le=_e.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.R8UI),K===s.UNSIGNED_SHORT&&(le=s.R16UI),K===s.UNSIGNED_INT&&(le=s.R32UI),K===s.BYTE&&(le=s.R8I),K===s.SHORT&&(le=s.R16I),K===s.INT&&(le=s.R32I)),b===s.RG&&(K===s.FLOAT&&(le=s.RG32F),K===s.HALF_FLOAT&&(le=s.RG16F),K===s.UNSIGNED_BYTE&&(le=s.RG8),K===s.UNSIGNED_SHORT&&_e&&(le=_e.RG16_EXT),K===s.SHORT&&_e&&(le=_e.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RG8UI),K===s.UNSIGNED_SHORT&&(le=s.RG16UI),K===s.UNSIGNED_INT&&(le=s.RG32UI),K===s.BYTE&&(le=s.RG8I),K===s.SHORT&&(le=s.RG16I),K===s.INT&&(le=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RGB8UI),K===s.UNSIGNED_SHORT&&(le=s.RGB16UI),K===s.UNSIGNED_INT&&(le=s.RGB32UI),K===s.BYTE&&(le=s.RGB8I),K===s.SHORT&&(le=s.RGB16I),K===s.INT&&(le=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),K===s.UNSIGNED_INT&&(le=s.RGBA32UI),K===s.BYTE&&(le=s.RGBA8I),K===s.SHORT&&(le=s.RGBA16I),K===s.INT&&(le=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&_e&&(le=_e.RGB16_EXT),K===s.SHORT&&_e&&(le=_e.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),b===s.RGBA){let de=ee?Bo:wt.getTransfer(te);K===s.FLOAT&&(le=s.RGBA32F),K===s.HALF_FLOAT&&(le=s.RGBA16F),K===s.UNSIGNED_BYTE&&(le=de===Ot?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&_e&&(le=_e.RGBA16_EXT),K===s.SHORT&&_e&&(le=_e.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(z,b){let K;return z?b===null||b===ai||b===dr?K=s.DEPTH24_STENCIL8:b===Fn?K=s.DEPTH32F_STENCIL8:b===oo&&(K=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===dr?K=s.DEPTH_COMPONENT24:b===Fn?K=s.DEPTH_COMPONENT32F:b===oo&&(K=s.DEPTH_COMPONENT16),K}function y(z,b){return L(z)===!0||z.isFramebufferTexture&&z.minFilter!==en&&z.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function I(z){let b=new WeakRef(z);n.get(z).__ref=b,m.add(b),_.register(z,b,b)}function A(z){let b=n.get(z).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function k(z){F(z.target)}function O(z){v(z.target)}function F(z){z.removeEventListener("dispose",k),A(z),D(z),z.isVideoTexture&&u.delete(z),z.isHTMLTexture&&h.delete(z)}function v(z){z.removeEventListener("dispose",O),A(z),U(z)}function w(){for(let z of m){let b=z.deref();b!==void 0&&(b.isRenderTarget===!0?v(b):F(b))}m.clear(),h.clear()}function D(z){let b=n.get(z);if(b.__webglInit===void 0)return;let K=z.source,se=d.get(K);if(se){let te=se[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(z),Object.keys(se).length===0&&d.delete(K)}n.remove(z)}function C(z){let b=n.get(z);s.deleteTexture(b.__webglTexture);let K=z.source,se=d.get(K);delete se[b.__cacheKey],o.memory.textures--}function U(z){let b=n.get(z);b.__depthDisposeCallback&&b.__depthDisposeCallback();let K=z.depthTexture;if(K&&K.renderTarget===z&&F(K),z.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ee=0;ee<b.__webglFramebuffer[te].length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[te][ee]);else s.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)s.deleteFramebuffer(b.__webglFramebuffer[te]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let se=z.textures;for(let te=0,ee=se.length;te<ee;te++){let _e=n.get(se[te]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(se[te])}n.remove(z)}let R=0;function G(){R=0}function B(){return R}function oe(z){R=z}function ie(){let z=R;return z>=i.maxTextures&&it("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+i.maxTextures),R+=1,z}function J(z){let b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.mipmapsAutoUpdate),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ce(z,b){let K=n.get(z);if(z.isVideoTexture&&pt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){let se=z.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{me(K,z,b);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function X(z,b){let K=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){me(K,z,b);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function Y(z,b){let K=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){me(K,z,b);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function j(z,b){let K=n.get(z);if(z.version>0&&K.__version!==z.version){be(K,z,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}let ye={[_s]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Vr]:s.MIRRORED_REPEAT},Le={[en]:s.NEAREST,[rc]:s.NEAREST_MIPMAP_NEAREST,[fr]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[ro]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},ze={[nm]:s.NEVER,[ku]:s.ALWAYS,[im]:s.LESS,[Ou]:s.LEQUAL,[sm]:s.EQUAL,[zu]:s.GEQUAL,[rm]:s.GREATER,[om]:s.NOTEQUAL};function Be(z,b){if(b.type===Fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===ro||b.magFilter===fr||b.magFilter===oi||b.minFilter===ln||b.minFilter===ro||b.minFilter===fr||b.minFilter===oi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ye[b.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ye[b.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ye[b.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,Le[b.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,Le[b.minFilter]),b.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,ze[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==fr&&b.minFilter!==oi||b.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function We(z,b){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",k),I(b));let se=b.source,te=d.get(se);te===void 0&&(te={},d.set(se,te));let ee=J(b);if(ee!==z.__cacheKey){te[ee]===void 0&&(te[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),te[ee].usedTimes++;let _e=te[z.__cacheKey];_e!==void 0&&(te[z.__cacheKey].usedTimes--,_e.usedTimes===0&&C(b)),z.__cacheKey=ee,z.__webglTexture=te[ee].texture}return K}function Ke(z,b,K){return Math.floor(Math.floor(z/K)/b)}function Ut(z,b,K,se){let ee=z.updateRanges;if(ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,se,b.data);else{ee.sort((q,ge)=>q.start-ge.start);let _e=0;for(let q=1;q<ee.length;q++){let ge=ee[_e],ae=ee[q],Pe=ge.start+ge.count,Ie=Ke(ae.start,b.width,4),Ne=Ke(ge.start,b.width,4);ae.start<=Pe+1&&Ie===Ne&&Ke(ae.start+ae.count-1,b.width,4)===Ie?ge.count=Math.max(ge.count,ae.start+ae.count-ge.start):(++_e,ee[_e]=ae)}ee.length=_e+1;let le=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let q=0,ge=ee.length;q<ge;q++){let ae=ee[q],Pe=Math.floor(ae.start/4),Ie=Math.ceil(ae.count/4),Ne=Pe%b.width,et=Math.floor(Pe/b.width),_t=Ie,Ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,et),t.texSubImage2D(s.TEXTURE_2D,0,Ne,et,_t,Ae,K,se,b.data)}z.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,le),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function me(z,b,K){let se=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=s.TEXTURE_3D);let te=We(z,b),ee=b.source;t.bindTexture(se,z.__webglTexture,s.TEXTURE0+K);let _e=n.get(ee);if(ee.version!==_e.__version||te===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let Ae=wt.getPrimaries(wt.workingColorSpace),tt=b.colorSpace===cs?null:wt.getPrimaries(b.colorSpace),St=b.colorSpace===cs||Ae===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let de=M(b.image,!1,i.maxTextureSize);de=qe(b,de);let Ce=r.convert(b.format,b.colorSpace),q=r.convert(b.type),ge=E(b.internalFormat,Ce,q,b.normalized,b.colorSpace,b.isVideoTexture);Be(se,b);let ae,Pe=b.mipmaps,Ie=b.isVideoTexture!==!0,Ne=_e.__version===void 0||te===!0,et=ee.dataReady,_t=y(b,de);if(b.isDepthTexture)ge=x(b.format===ls,b.type),Ne&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,ge,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,ge,de.width,de.height,0,Ce,q,null));else if(b.isDataTexture)if(Pe.length>0){Ie&&Ne&&t.texStorage2D(s.TEXTURE_2D,_t,ge,Pe[0].width,Pe[0].height);for(let Ae=0,tt=Pe.length;Ae<tt;Ae++)ae=Pe[Ae],Ie?et&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ae.width,ae.height,Ce,q,ae.data):t.texImage2D(s.TEXTURE_2D,Ae,ge,ae.width,ae.height,0,Ce,q,ae.data);b.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(s.TEXTURE_2D,_t,ge,de.width,de.height),et&&Ut(b,de,Ce,q)):t.texImage2D(s.TEXTURE_2D,0,ge,de.width,de.height,0,Ce,q,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_t,ge,Pe[0].width,Pe[0].height,de.depth);for(let Ae=0,tt=Pe.length;Ae<tt;Ae++)if(ae=Pe[Ae],b.format!==Xn)if(Ce!==null)if(Ie){if(et)if(b.layerUpdates.size>0){let St=Zu(ae.width,ae.height,b.format,b.type);for(let He of b.layerUpdates){let Nt=ae.data.subarray(He*St/ae.data.BYTES_PER_ELEMENT,(He+1)*St/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,He,ae.width,ae.height,1,Ce,Nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ae.width,ae.height,de.depth,Ce,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,ge,ae.width,ae.height,de.depth,0,ae.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?et&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ae.width,ae.height,de.depth,Ce,q,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,ge,ae.width,ae.height,de.depth,0,Ce,q,ae.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ie&&Ne&&t.texStorage2D(s.TEXTURE_2D,_t,ge,Pe[0].width,Pe[0].height);for(let Ae=0,tt=Pe.length;Ae<tt;Ae++)ae=Pe[Ae],b.format!==Xn?Ce!==null?Ie?et&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,ge,ae.width,ae.height,0,ae.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?et&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ae.width,ae.height,Ce,q,ae.data):t.texImage2D(s.TEXTURE_2D,Ae,ge,ae.width,ae.height,0,Ce,q,ae.data)}else if(b.isDataArrayTexture)if(Ie){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_t,ge,de.width,de.height,de.depth),et)if(b.layerUpdates.size>0){let Ae=Zu(de.width,de.height,b.format,b.type);for(let tt of b.layerUpdates){let St=de.data.subarray(tt*Ae/de.data.BYTES_PER_ELEMENT,(tt+1)*Ae/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,de.width,de.height,1,Ce,q,St)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,q,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,de.width,de.height,de.depth,0,Ce,q,de.data);else if(b.isData3DTexture)Ie?(Ne&&t.texStorage3D(s.TEXTURE_3D,_t,ge,de.width,de.height,de.depth),et&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,q,de.data)):t.texImage3D(s.TEXTURE_3D,0,ge,de.width,de.height,de.depth,0,Ce,q,de.data);else if(b.isFramebufferTexture){if(Ne)if(Ie)t.texStorage2D(s.TEXTURE_2D,_t,ge,de.width,de.height);else{let Ae=de.width,tt=de.height;for(let St=0;St<_t;St++)t.texImage2D(s.TEXTURE_2D,St,ge,Ae,tt,0,Ce,q,null),Ae>>=1,tt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let Ae=s.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),de.parentNode!==Ae){Ae.appendChild(de),h.add(b),Ae.onpaint=tt=>{let St=tt.changedElements;for(let He of h)St.includes(He.image)&&(He.needsUpdate=!0)},Ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{let St=s.RGBA,He=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,He,Nt,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ie&&Ne){let Ae=Qe(Pe[0]);t.texStorage2D(s.TEXTURE_2D,_t,ge,Ae.width,Ae.height)}for(let Ae=0,tt=Pe.length;Ae<tt;Ae++)ae=Pe[Ae],Ie?et&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce,q,ae):t.texImage2D(s.TEXTURE_2D,Ae,ge,Ce,q,ae);b.generateMipmaps=!1}else if(Ie){if(Ne){let Ae=Qe(de);t.texStorage2D(s.TEXTURE_2D,_t,ge,Ae.width,Ae.height)}et&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,q,de)}else t.texImage2D(s.TEXTURE_2D,0,ge,Ce,q,de);L(b)&&b.mipmapsAutoUpdate===!0&&S(se),_e.__version=ee.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function be(z,b,K){if(b.image.length!==6)return;let se=We(z,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+K);let ee=n.get(te);if(te.version!==ee.__version||se===!0){t.activeTexture(s.TEXTURE0+K);let _e=wt.getPrimaries(wt.workingColorSpace),le=b.colorSpace===cs?null:wt.getPrimaries(b.colorSpace),de=b.colorSpace===cs||_e===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,q=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let He=0;He<6;He++)!Ce&&!q?ge[He]=M(b.image[He],!0,i.maxCubemapSize):ge[He]=q?b.image[He].image:b.image[He],ge[He]=qe(b,ge[He]);let ae=ge[0],Pe=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Ne=E(b.internalFormat,Pe,Ie,b.normalized,b.colorSpace),et=b.isVideoTexture!==!0,_t=ee.__version===void 0||se===!0,Ae=te.dataReady,tt=y(b,ae);Be(s.TEXTURE_CUBE_MAP,b);let St;if(b.isDepthTexture){if(Ne=x(b.format===ls,b.type),_t)if(et)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ne,ae.width,ae.height);else for(let He=0;He<6;He++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,ae.width,ae.height,0,Pe,Ie,null)}else if(Ce){et&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Ne,ae.width,ae.height);for(let He=0;He<6;He++){St=ge[He].mipmaps;for(let Nt=0;Nt<St.length;Nt++){let Zt=St[Nt];b.format!==Xn?Pe!==null?et?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt,0,0,Zt.width,Zt.height,Pe,Zt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt,Ne,Zt.width,Zt.height,0,Zt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt,0,0,Zt.width,Zt.height,Pe,Ie,Zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt,Ne,Zt.width,Zt.height,0,Pe,Ie,Zt.data)}}}else{if(St=b.mipmaps,et&&_t){St.length>0&&tt++;let He=Qe(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,tt,Ne,He.width,He.height)}for(let He=0;He<6;He++)if(q){et?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,ge[He].width,ge[He].height,Pe,Ie,ge[He].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,ge[He].width,ge[He].height,0,Pe,Ie,ge[He].data);for(let Nt=0;Nt<St.length;Nt++){let ui=St[Nt].image[He].image;et?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt+1,0,0,ui.width,ui.height,Pe,Ie,ui.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt+1,Ne,ui.width,ui.height,0,Pe,Ie,ui.data)}}else{et?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Pe,Ie,ge[He]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ne,Pe,Ie,ge[He]);for(let Nt=0;Nt<St.length;Nt++){let Zt=St[Nt];et?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt+1,0,0,Pe,Ie,Zt.image[He]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,Nt+1,Ne,Pe,Ie,Zt.image[He])}}}L(b)&&b.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),ee.__version=te.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function pe(z,b,K,se,te,ee){let _e=r.convert(K.format,K.colorSpace),le=r.convert(K.type),de=E(K.internalFormat,_e,le,K.normalized,K.colorSpace),Ce=n.get(b),q=n.get(K);if(q.__renderTarget=b,!Ce.__hasExternalTextures){let ge=Math.max(1,b.width>>ee),ae=Math.max(1,b.height>>ee);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,de,ge,ae,b.depth,0,_e,le,null):t.texImage2D(te,ee,de,ge,ae,0,_e,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,z),ve(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,te,q.__webglTexture,0,lt(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,te,q.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(z,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,z),b.depthBuffer){let se=b.depthTexture,te=se&&se.isDepthTexture?se.type:null,ee=x(b.stencilBuffer,te),_e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(b),ee,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(b),ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,z)}else{let se=b.textures;for(let te=0;te<se.length;te++){let ee=se[te],_e=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),de=E(ee.internalFormat,_e,le,ee.normalized,ee.colorSpace);ve(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(b),de,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(b),de,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,de,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(z,b,K){let se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(b.depthTexture);te.__renderTarget=b;let ee=se?b.depthTexture.image[0]:b.depthTexture.image;(!te.__webglTexture||ee.width!==b.width||ee.height!==b.height)&&(ee.width=b.width,ee.height=b.height,b.depthTexture.needsUpdate=!0),se?j(b.depthTexture,0):ce(b.depthTexture,0);let _e=te.__webglTexture,le=lt(b),de=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Ce=b.depthTexture.format===ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===es)ve(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,_e,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,_e,0);else if(b.depthTexture.format===ls)ve(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,_e,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(z){let b=n.get(z),K=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){let se=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){let te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=se}if(z.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let se=0;se<6;se++)we(b.__webglFramebuffer[se],z,se);else z.texture.mipmaps.length>0?we(b.__webglFramebuffer[0],z,0):we(b.__webglFramebuffer,z,0);else if(K){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=s.createRenderbuffer(),Fe(b.__webglDepthbuffer[se],z,!1);else{let te=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ee)}}else if(z.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Fe(b.__webglDepthbuffer,z,!1);else{let te=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(z,b,K){let se=n.get(z);b!==void 0&&pe(se.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&fe(z)}function Ee(z){let b=z.texture,K=n.get(z),se=n.get(b);z.addEventListener("dispose",O),I(z);let te=z.textures,ee=z.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=b.version,o.memory.textures++),ee){K.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps.length>0){K.__webglFramebuffer[le]=[];for(let de=0;de<b.mipmaps.length;de++)K.__webglFramebuffer[le][de]=s.createFramebuffer()}else K.__webglFramebuffer[le]=s.createFramebuffer()}else{if(b.mipmaps.length>0){K.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)K.__webglFramebuffer[le]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(_e)for(let le=0,de=te.length;le<de;le++){let Ce=n.get(te[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(z.samples>0&&ve(z)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){let de=te[le];K.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[le]);let Ce=r.convert(de.format,de.colorSpace),q=r.convert(de.type),ge=E(de.internalFormat,Ce,q,de.normalized,de.colorSpace,z.isXRRenderTarget===!0),ae=lt(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,ge,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,K.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(K.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Be(s.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)pe(K.__webglFramebuffer[le][de],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else pe(K.__webglFramebuffer[le],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);L(b)?S(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let le=0,de=te.length;le<de;le++){let Ce=te[le],q=n.get(Ce),ge=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ge=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,q.__webglTexture),Be(ge,Ce),pe(K.__webglFramebuffer,z,Ce,s.COLOR_ATTACHMENT0+le,ge,0),L(Ce)&&S(ge)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(le=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,se.__webglTexture),Be(le,b),b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)pe(K.__webglFramebuffer[de],z,b,s.COLOR_ATTACHMENT0,le,de);else pe(K.__webglFramebuffer,z,b,s.COLOR_ATTACHMENT0,le,0);L(b)?S(le):b.mipmaps.length>0&&s.texParameteri(le,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}z.depthBuffer&&fe(z)}function H(z){let b=z.textures;for(let K=0,se=b.length;K<se;K++){let te=b[K];if(L(te)&&te.mipmapsAutoUpdate===!0){let ee=T(z),_e=n.get(te).__webglTexture;t.bindTexture(ee,_e),S(ee),t.unbindTexture()}}}let $e=[];function ue(z){if(z.samples>0){if(ve(z)===!1){let b=z.textures,K=z.width,se=z.height,te=s.COLOR_BUFFER_BIT,ee=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(z),le=b.length>1;if(le)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);let q=n.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,q,0)}s.blitFramebuffer(0,0,K,se,0,0,K,se,te,s.NEAREST),l===!0&&($e.length=0,$e.push(s.COLOR_ATTACHMENT0+Ce),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&$e.push(ee),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ce]);let q=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let b=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function lt(z){return Math.min(i.maxSamples,z.samples)}function ve(z){let b=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(z){let b=o.render.frame;u.get(z)!==b&&(u.set(z,b),z.update())}function qe(z,b){let K=z.colorSpace,se=z.format,te=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==On&&K!==cs&&(wt.getTransfer(K)===Ot?(se!==Xn||te!==Kn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",K)),b}function Qe(z){return typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame!="undefined"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=ie,this.resetTextureUnits=G,this.getTextureUnits=B,this.setTextureUnits=oe,this.setTexture2D=ce,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=xe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve,this.dispose=w}function oS(s,e){function t(n,i=cs){let r,o=wt.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===ac)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return s.BYTE;if(n===Pu)return s.SHORT;if(n===oo)return s.UNSIGNED_SHORT;if(n===oc)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===bi)return s.HALF_FLOAT;if(n===Du)return s.ALPHA;if(n===Uu)return s.RGB;if(n===Xn)return s.RGBA;if(n===es)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===fa)return s.RED_INTEGER;if(n===ws)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===dc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===xc||n===vc||n===_c||n===yc||n===xa||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===xc)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_c)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===bc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Oc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===Bc||n===va||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
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

}`,hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:aS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uf=class extends gi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new hf,g={},M=t.getContextAttributes(),L=null,S=null,T=[],E=[],x=new st,y=null,I=null,A=new jt;A.viewport=new Ht;let k=new jt;k.viewport=new Ht;let O=[A,k],F=new jl,v=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=T[J];return ce===void 0&&(ce=new Zr,T[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=T[J];return ce===void 0&&(ce=new Zr,T[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=T[J];return ce===void 0&&(ce=new Zr,T[J]=ce),ce.getHandSpace()};function D(J){let ce=E.indexOf(J.inputSource);if(ce===-1)return;let X=T[ce];X!==void 0&&(X.update(J.inputSource,J.frame,c||o),X.dispatchEvent({type:J.type,data:J.inputSource}))}function C(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",U);for(let J=0;J<T.length;J++){let ce=E[J];ce!==null&&(E[J]=null,T[J].disconnect(ce))}v=null,w=null,p.reset();for(let J in g)delete g[J];if(e.setRenderTarget(L),d=null,f=null,h=null,i=null,S=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){let J=I.camera;J.fov=I.fov,J.zoom=I.zoom,J.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(L=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",C),i.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,Y=null,j=null;M.depth&&(j=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=M.stencil?ls:es,Y=M.stencil?dr:ai);let ye={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ti(f.textureWidth,f.textureHeight,{format:Xn,type:Kn,depthTexture:new ts(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ti(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(J){for(let ce=0;ce<J.removed.length;ce++){let X=J.removed[ce],Y=E.indexOf(X);Y>=0&&(E[Y]=null,T[Y].disconnect(X))}for(let ce=0;ce<J.added.length;ce++){let X=J.added[ce],Y=E.indexOf(X);if(Y===-1){for(let ye=0;ye<T.length;ye++)if(ye>=E.length){E.push(X),Y=ye;break}else if(E[ye]===null){E[ye]=X,Y=ye;break}if(Y===-1)break}let j=T[Y];j&&j.connect(X)}}function R(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ce=J.near,X=J.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(X=p.depthFar)),F.near=k.near=A.near=ce,F.far=k.far=A.far=X,(v!==F.near||w!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),v=F.near,w=F.far),F.layers.mask=J.layers.mask|6,A.layers.mask=F.layers.mask&-5,k.layers.mask=F.layers.mask&-3;let Y=J.parent,j=F.cameras;R(F,Y);for(let ye=0;ye<j.length;ye++)R(j[ye],Y);F.projectionMatrix.copy(A.projectionMatrix),F.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&J.isPerspectiveCamera&&(I={camera:J,fov:J.fov,zoom:J.zoom}),G(J,F,Y)};function G(J,ce,X){X===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(X.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ks*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let B=null;function oe(J,ce){if(u=ce.getViewerPose(c||o),m=ce,u!==null){let X=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Y=!1;X.length!==F.cameras.length&&(F.cameras.length=0,Y=!0);for(let ze=0;ze<X.length;ze++){let Be=X[ze],We=null;if(d!==null)We=d.getViewport(Be);else{let Ut=h.getViewSubImage(f,Be);We=Ut.viewport,ze===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let Ke=O[ze];Ke===void 0&&(Ke=new jt,Ke.layers.enable(ze),Ke.viewport=new Ht,O[ze]=Ke),Ke.matrix.fromArray(Be.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Be.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(We.x,We.y,We.width,We.height),ze===0&&(F.matrix.copy(Ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Y===!0&&F.cameras.push(Ke)}let j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let ze=h.getDepthInformation(X[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,i.renderState)}if(j&&j.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let ze=0;ze<X.length;ze++){let Be=X[ze].camera;if(Be){let We=g[Be];We||(We=new ta,g[Be]=We);let Ke=h.getCameraImage(Be);We.sourceTexture=Ke}}}}for(let X=0;X<T.length;X++){let Y=E[X],j=T[X];Y!==null&&j!==void 0&&j.update(Y,ce,c||o)}B&&B(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),m=null}let ie=new Om;ie.setAnimationLoop(oe),this.setAnimationLoop=function(J){B=J},this.dispose=function(){}}},cS=new nt,Ym=new gt;Ym.set(-1,0,0,0,1,0,0,0,1);function hS(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,qu(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,L,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,S)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,L):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===bn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===bn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=e.get(g),L=M.envMap,S=M.envMapRotation;L&&(p.envMap.value=L,p.envMapRotation.value.setFromMatrix4(cS.makeRotationFromEuler(S)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ym),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,L){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=L*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uS(s,e,t,n){let i={},r={};function o(M,L){let S=L.program;n.uniformBlockBinding(M,S,i[M.id])}function a(M,L){let S=i[M.id];S===void 0&&(m(M),S=l(M),i[M.id]=S,M.addEventListener("dispose",p));let T=L.program;n.updateUBOMapping(M,T);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let L=s.createBuffer(),S=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),L}function c(M){let L=i[M.id],S=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let E=0,x=S.length;E<x;E++){let y=S[E];if(Array.isArray(y))for(let I=0,A=y.length;I<A;I++)u(y[I],E,I,T);else u(y,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,L,S,T){if(f(M,L,S,T)===!0){let E=M.__offset,x=M.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){let A=x[I],k=_(A,!0);h(A,M.__data,y),y+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,M.__data)}}function h(M,L,S){typeof M=="number"||typeof M=="boolean"?L[S]=M:M.isMatrix3?(L[S]=M.elements[0],L[S+1]=M.elements[1],L[S+2]=M.elements[2],L[S+3]=0,L[S+4]=M.elements[3],L[S+5]=M.elements[4],L[S+6]=M.elements[5],L[S+7]=0,L[S+8]=M.elements[6],L[S+9]=M.elements[7],L[S+10]=M.elements[8],L[S+11]=0):ArrayBuffer.isView(M)?L.set(M.subarray(0,L.length-S),S):M.toArray(L,S)}function f(M,L,S,T){let E=M.value,x=L+"_"+S;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let y=T[x],I=!1;for(let A=0;A<E.length;A++)d(E[A],y,A)===!0&&(I=!0);return I}return d(E,T,x)}function d(M,L,S){if(L[S]===void 0)return typeof M=="number"||typeof M=="boolean"?L[S]=M:ArrayBuffer.isView(M)?L[S]=M.slice():L[S]=M.clone(),!0;{let T=L[S];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return L[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function m(M){let L=M.uniforms,S=0,T=16;for(let x=0,y=L.length;x<y;x++){let I=Array.isArray(L[x])?L[x]:[L[x]];for(let A=0,k=I.length;A<k;A++){let O=I[A],F=Array.isArray(O.value)?O.value:[O.value],v=Array.isArray(L[x])||Array.isArray(O.value),w=S;for(let C=0,U=F.length;C<U;C++){let R=F[C],G=_(R,v),B=S%T,oe=B%G.boundary,ie=B+oe;S+=oe,ie!==0&&T-ie<G.storage&&(S+=T-ie),C===0&&(w=S),S+=G.storage}let D=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new D((S-w)/Float32Array.BYTES_PER_ELEMENT),O.__offset=w}}let E=S%T;return E>0&&(S+=T-E),M.__size=S,M.__cache={},this}function _(M,L){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):it("WebGLRenderer: Unsupported uniform value type.",M),L===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let L=M.target;L.removeEventListener("dispose",p),s.deleteBuffer(i[L.id]),delete i[L.id],delete r[L.id]}function g(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:g}}var fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function dS(){return Ui===null&&(Ui=new Qi(fS,16,16,ws,bi),Ui.name="DFG_LUT",Ui.minFilter=ln,Ui.magFilter=ln,Ui.wrapS=Wn,Ui.wrapT=Wn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var co=class{constructor(e={}){let{canvas:t=am(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Kn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([uc,hc,fa]),g=new Set([Kn,ai,oo,dr,ac,lc]),M=new Uint32Array(4),L=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,k=!1,O=null,F=null,v=null,w=null;this._outputColorSpace=Ft;let D=0,C=0,U=null,R=-1,G=null,B=new Ht,oe=new Ht,ie=null,J=new Te(0),ce=0,X=t.width,Y=t.height,j=1,ye=null,Le=null,ze=new Ht(0,0,X,Y),Be=new Ht(0,0,X,Y),We=!1,Ke=new xi,Ut=new Zo,me=!1,be=!1,pe=new nt,Fe=new V,we=new Ht,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Ee(){return U===null?j:1}let H=n;function $e(N,Z){return t.getContext(N,Z)}let ue,lt,ve,pt,qe,Qe,z,b,K,se,te,ee,_e,le,de,Ce,q,ge,ae,Pe,Ie,Ne,et;try{let N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",He,!1),H===null){let Z="webgl2";if(H=$e(Z,N),H===null)throw $e(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_t()}catch(N){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",He,!1),mt("WebGLRenderer: "+N.message),N}function _t(){ue=new wy(H),ue.init(),Ie=new oS(H,ue),lt=new dy(H,ue,e,Ie),ve=new sS(H,ue),lt.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),F=H.createFramebuffer(),v=H.createFramebuffer(),w=H.createFramebuffer(),pt=new Ay(H),qe=new WM,Qe=new rS(H,ue,ve,qe,lt,Ie,pt),z=new by(A),b=new Cx(H),Ne=new uy(H,b),K=new Ty(H,b,pt,Ne),se=new Cy(H,K,b,Ne,pt),ge=new Ry(H,lt,Qe),de=new py(qe),te=new VM(A,z,ue,lt,Ne,de),ee=new hS(A,qe),_e=new qM,le=new jM(ue),q=new hy(A,z,ve,se,m,l),Ce=new iS(A,se,lt),et=new uS(H,pt,lt,ve),ae=new fy(H,ue,pt),Pe=new Ey(H,ue,pt),pt.programs=te.programs,A.capabilities=lt,A.extensions=ue,A.properties=qe,A.renderLists=_e,A.shadowMap=Ce,A.state=ve,A.info=pt}_!==Kn&&(I=new Py(_,t.width,t.height,a,i,r));let Ae=new uf(A,H);this.xr=Ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let N=ue.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ue.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(X,Y,!1))},this.getSize=function(N){return N.set(X,Y)},this.setSize=function(N,Z,re=!0){if(Ae.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}X=N,Y=Z,t.width=Math.floor(N*j),t.height=Math.floor(Z*j),re===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(X*j,Y*j).floor()},this.setDrawingBufferSize=function(N,Z,re){X=N,Y=Z,j=re,t.width=Math.floor(N*re),t.height=Math.floor(Z*re),this.setViewport(0,0,N,Z)},this.setEffects=function(N){if(_===Kn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Z=0;Z<N.length;Z++)if(N[Z].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(ze)},this.setViewport=function(N,Z,re,Q){N.isVector4?ze.set(N.x,N.y,N.z,N.w):ze.set(N,Z,re,Q),ve.viewport(B.copy(ze).multiplyScalar(Ee()).round())},this.getScissor=function(N){return N.copy(Be)},this.setScissor=function(N,Z,re,Q){N.isVector4?Be.set(N.x,N.y,N.z,N.w):Be.set(N,Z,re,Q),ve.scissor(oe.copy(Be).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(N){ve.setScissorTest(We=N)},this.setOpaqueSort=function(N){ye=N},this.setTransparentSort=function(N){Le=N},this.getClearColor=function(N){return N.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(N=!0,Z=!0,re=!0){let Q=0;if(N){let ne=!1;if(U!==null){let Re=U.texture.format;ne=p.has(Re)}if(ne){let Re=U.texture.type,Xe=g.has(Re),Ue=q.getClearColor(),Ge=q.getClearAlpha(),je=Ue.r,ft=Ue.g,bt=Ue.b;Xe?(M[0]=je,M[1]=ft,M[2]=bt,M[3]=Ge,H.clearBufferuiv(H.COLOR,0,M)):(L[0]=je,L[1]=ft,L[2]=bt,L[3]=Ge,H.clearBufferiv(H.COLOR,0,L))}else Q|=H.COLOR_BUFFER_BIT}Z&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),O=N},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",He,!1),q.dispose(),_e.dispose(),le.dispose(),Qe.dispose(),qe.dispose(),z.dispose(),se.dispose(),K.dispose(),Ne.dispose(),et.dispose(),te.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ka),Ae.removeEventListener("sessionend",Ba),Hi.stop()};function tt(N){N.preventDefault(),Ho("WebGLRenderer: Context Lost."),k=!0}function St(){Ho("WebGLRenderer: Context Restored."),k=!1;let N=pt.autoReset,Z=Ce.enabled,re=Ce.autoUpdate,Q=Ce.needsUpdate,ne=Ce.type;_t(),pt.autoReset=N,Ce.enabled=Z,Ce.autoUpdate=re,Ce.needsUpdate=Q,Ce.type=ne}function He(N){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Nt(N){let Z=N.target;Z.removeEventListener("dispose",Nt),Zt(Z)}function Zt(N){ui(N),qe.remove(N)}function ui(N){let Z=qe.get(N).programs;Z!==void 0&&(Z.forEach(function(re){te.releaseProgram(re)}),N.isShaderMaterial&&te.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,re,Q,ne,Re){Z===null&&(Z=fe);let Xe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ue=us(N,Z,re,Q,ne);ve.setMaterial(Q,Xe);let Ge=re.index,je=1;if(Q.wireframe===!0){if(Ge=K.getWireframeAttribute(re),Ge===void 0)return;je=2}let ft=re.drawRange,bt=re.attributes.position,Ze=ft.start*je,At=(ft.start+ft.count)*je;Re!==null&&(Ze=Math.max(Ze,Re.start*je),At=Math.min(At,(Re.start+Re.count)*je)),Ge!==null?(Ze=Math.max(Ze,0),At=Math.min(At,Ge.count)):bt!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,bt.count));let Yt=At-Ze;if(Yt<0||Yt===1/0)return;Ne.setup(ne,Q,Ue,re,Ge);let Gt,zt=ae;if(Ge!==null&&(Gt=b.get(Ge),zt=Pe,zt.setIndex(Gt)),ne.isMesh)Q.wireframe===!0?(ve.setLineWidth(Q.wireframeLinewidth*Ee()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(ne.isLine){let pn=Q.linewidth;pn===void 0&&(pn=1),ve.setLineWidth(pn*Ee()),ne.isLineSegments?zt.setMode(H.LINES):ne.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else ne.isPoints?zt.setMode(H.POINTS):ne.isSprite&&zt.setMode(H.TRIANGLES);if(ne.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))zt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let pn=ne._multiDrawStarts,Je=ne._multiDrawCounts,an=ne._multiDrawCount,It=Ge?b.get(Ge).bytesPerElement:1,Ei=qe.get(Q).currentProgram.getUniforms();for(let mn=0;mn<an;mn++)Ei.setValue(H,"_gl_DrawID",mn),zt.render(pn[mn]/It,Je[mn])}else if(ne.isInstancedMesh)zt.renderInstances(Ze,Yt,ne.count);else if(re.isInstancedBufferGeometry){let pn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Je=Math.min(re.instanceCount,pn);zt.renderInstances(Ze,Yt,Je)}else zt.render(Ze,Yt)};function Ns(N,Z,re,Q){O!==null&&N.isNodeMaterial&&O.setObject(Q,N),me===!0&&de.setState(N,re,!1),N.transparent===!0&&N.side===nn&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,Gn(N,Z,Q),N.side=Li,N.needsUpdate=!0,Gn(N,Z,Q),N.side=nn):Gn(N,Z,Q)}this.compile=function(N,Z,re=null){re===null&&(re=N),O!==null&&O.renderStart(N,Z,re),E=le.get(re),E.init(Z),y.push(E),re.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(E.pushLight(ne),ne.castShadow&&E.pushShadow(ne))}),N!==re&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(E.pushLight(ne),ne.castShadow&&E.pushShadow(ne))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),be=this.localClippingEnabled,me=de.init(this.clippingPlanes,be),me===!0&&de.setGlobalState(this.clippingPlanes,Z),O!==null&&Ce.render(E.state.shadowsArray,re,Z);let Q=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Re=ne.material;if(Re)if(Array.isArray(Re))for(let Xe=0;Xe<Re.length;Xe++){let Ue=Re[Xe];Ns(Ue,re,Z,ne),Q.add(Ue)}else Ns(Re,re,Z,ne),Q.add(Re)}),E=y.pop(),O!==null&&O.renderEnd(),Q},this.compileAsync=function(N,Z,re=null){let Q=this.compile(N,Z,re);return new Promise(ne=>{function Re(){if(Q.forEach(function(Xe){let Ge=qe.get(Xe).currentProgram;(Ge===void 0||Ge.isReady())&&Q.delete(Xe)}),Q.size===0){ne(N);return}setTimeout(Re,10)}ue.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let vo=null;function bh(N){vo&&vo(N)}function ka(){Hi.stop()}function Ba(){Hi.start()}let Hi=new Om;Hi.setAnimationLoop(bh),typeof self!="undefined"&&Hi.setContext(self),this.setAnimationLoop=function(N){vo=N,Ae.setAnimationLoop(N),N===null?Hi.stop():Hi.start()},Ae.addEventListener("sessionstart",ka),Ae.addEventListener("sessionend",Ba),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;O!==null&&O.renderStart(N,Z);let re=Ae.enabled===!0&&Ae.isPresenting===!0,Q=I!==null&&(U===null||re)&&I.begin(A,U);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Z),Z=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Z,U),E=le.get(N,y.length),E.init(Z),E.state.textureUnits=Qe.getTextureUnits(),y.push(E),pe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?Ut.setFromArrayCamera(Z):Ke.setFromProjectionMatrix(pe,ii,Z.reversedDepth),be=this.localClippingEnabled,me=de.init(this.clippingPlanes,be),T=_e.get(N,x.length),T.init(),x.push(T),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){let Xe=A.xr.getDepthSensingMesh();Xe!==null&&Gi(Xe,Z,-1/0,A.sortObjects)}Gi(N,Z,0,A.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(ye,Le),xe=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,xe&&q.addToRenderList(T,N),this.info.autoReset===!0&&this.info.reset(),me===!0&&de.beginShadows();let ne=E.state.shadowsArray;if(Ce.render(ne,N,Z),me===!0&&de.endShadows(),(Q&&I.hasRenderPass())===!1){let Xe=T.opaque,Ue=T.transmissive;if(E.setupLights(),Z.isArrayCamera){let Ge=Z.cameras;if(Ue.length>0)for(let je=0,ft=Ge.length;je<ft;je++){let bt=Ge[je];Ti(Xe,Ue,N,bt)}xe&&q.render(N);for(let je=0,ft=Ge.length;je<ft;je++){let bt=Ge[je];Ha(T,N,bt,bt.viewport)}}else Ue.length>0&&Ti(Xe,Ue,N,Z),xe&&q.render(N),Ha(T,N,Z)}U!==null&&C===0&&(Qe.updateMultisampleRenderTarget(U),Qe.updateRenderTargetMipmap(U)),Q&&I.end(A),N.isScene===!0&&N.onAfterRender(A,N,Z),Ne.resetDefaultState(),R=-1,G=null,y.pop(),y.length>0?(E=y[y.length-1],Qe.setTextureUnits(E.state.textureUnits),me===!0&&de.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,O!==null&&O.renderEnd()};function Gi(N,Z,re,Q){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)re=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)E.pushLight(N),N.castShadow&&E.pushShadow(N);else if(N.isSprite){let Xe=Z.isArrayCamera?Ut:Ke;if(!N.frustumCulled||N.intersectsFrustum(Xe)){Q&&we.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);let Ue=se.update(N),Ge=N.material;Ge.visible&&T.push(N,Ue,Ge,re,we.z,null,Z)}}else if(N.isMesh||N.isLine||N.isPoints){let Xe=Z.isArrayCamera?Ut:Ke;if(!N.frustumCulled||N.intersectsFrustum(Xe)){let Ue=se.update(N),Ge=N.material;if(Q&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),we.copy(N.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),we.copy(Ue.boundingSphere.center)),we.applyMatrix4(N.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){let je=Ue.groups;for(let ft=0,bt=je.length;ft<bt;ft++){let Ze=je[ft],At=Ge[Ze.materialIndex];At&&At.visible&&T.push(N,Ue,At,re,we.z,Ze,Z)}}else Ge.visible&&T.push(N,Ue,Ge,re,we.z,null,Z)}}}let Re=N.children;for(let Xe=0,Ue=Re.length;Xe<Ue;Xe++)Gi(Re[Xe],Z,re,Q)}function Ha(N,Z,re,Q){let{opaque:ne,transmissive:Re,transparent:Xe}=N;E.setupLightsView(re),me===!0&&de.setGlobalState(A.clippingPlanes,re),Q&&ve.viewport(B.copy(Q)),ne.length>0&&Vi(ne,Z,re),Re.length>0&&Vi(Re,Z,re),Xe.length>0&&Vi(Xe,Z,re),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ti(N,Z,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let Ze=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new ti(1,1,{generateMipmaps:!0,type:Ze?bi:Kn,minFilter:oi,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let Re=E.state.transmissionRenderTarget[Q.id],Xe=Q.viewport||B;Re.setSize(Xe.z*A.transmissionResolutionScale,Xe.w*A.transmissionResolutionScale);let Ue=A.getRenderTarget(),Ge=A.getActiveCubeFace(),je=A.getActiveMipmapLevel();A.setRenderTarget(Re),A.getClearColor(J),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),xe&&q.render(re);let ft=A.toneMapping;A.toneMapping=Ni;let bt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),me===!0&&de.setGlobalState(A.clippingPlanes,Q),Vi(N,re,Q),Qe.updateMultisampleRenderTarget(Re),Qe.updateRenderTargetMipmap(Re),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Yt=Z.length;At<Yt;At++){let Gt=Z[At],{object:zt,geometry:pn,material:Je,group:an}=Gt;if(Je.side===nn&&zt.layers.test(Q.layers)){let It=Je.side;Je.side=bn,Je.needsUpdate=!0,Nn(zt,re,Q,pn,Je,an),Je.side=It,Je.needsUpdate=!0,Ze=!0}}Ze===!0&&(Qe.updateMultisampleRenderTarget(Re),Qe.updateRenderTargetMipmap(Re))}A.setRenderTarget(Ue,Ge,je),A.setClearColor(J,ce),bt!==void 0&&(Q.viewport=bt),A.toneMapping=ft}function Vi(N,Z,re){let Q=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Re=N.length;ne<Re;ne++){let Xe=N[ne],{object:Ue,geometry:Ge,group:je}=Xe,ft=Xe.material;ft.allowOverride===!0&&Q!==null&&(ft=Q),Ue.layers.test(re.layers)&&Nn(Ue,Z,re,Ge,ft,je)}}function Nn(N,Z,re,Q,ne,Re){O!==null&&ne.isNodeMaterial&&O.setObject(N,ne),N.onBeforeRender(A,Z,re,Q,ne,Re),N.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(A,Z,re,Q,N,Re),ne.transparent===!0&&ne.side===nn&&ne.forceSinglePass===!1?(ne.side=bn,ne.needsUpdate=!0,A.renderBufferDirect(re,Z,Q,ne,N,Re),ne.side=Li,ne.needsUpdate=!0,A.renderBufferDirect(re,Z,Q,ne,N,Re),ne.side=nn):A.renderBufferDirect(re,Z,Q,ne,N,Re),N.onAfterRender(A,Z,re,Q,ne,Re)}function dn(N){let Z=0;for(let re of N)re.texture!==null&&Z++;return Z}function Gn(N,Z,re){Z.isScene!==!0&&(Z=fe);let Q=qe.get(N),ne=E.state.lights,Re=E.state.shadowsArray,Xe=ne.state.version,Ue=te.getParameters(N,ne.state,Re,Z,re,E.state.lightProbeGridArray),Ge=te.getProgramCacheKey(Ue),je=Q.programs;Q.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Z.environment:null,Q.fog=Z.fog;let ft=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;Q.envMap=z.get(N.envMap||Q.environment,ft),Q.envMapRotation=Q.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,je===void 0&&(N.addEventListener("dispose",Nt),je=new Map,Q.programs=je,Q.programVariants=new Map);let bt=je.get(Ge);if(bt!==void 0){if(Q.currentProgram===bt&&Q.lightsStateVersion===Xe)return Jn(N,Ue),bt}else Ue.uniforms=te.getUniforms(N),O!==null&&N.isNodeMaterial&&O.build(N,re,Ue),N.onBeforeCompile(Ue,A),bt=te.acquireProgram(Ue,Ge),je.set(Ge,bt),Q.uniforms=Ue.uniforms;let Ze=Q.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=de.uniform),Jn(N,Ue),Q.needsLights=Wa(N),Q.lightsStateVersion=Xe,Q.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.sunLights.value=ne.state.sun,Ze.sunLightShadows.value=ne.state.sunShadow,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ze.sunShadowCascade.value=ne.state.sunShadowCascade,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),Q.numLightProbeGrids=dn(E.state.lightProbeGridArray),Q.currentProgram=bt,Q.uniformsList=null,bt}function Ga(N,Z,re,Q,ne){let Re=qe.get(N),Xe=Re.currentProgram.id+","+Q+","+ne,Ue=Re.programVariants.get(Xe);return Ue===void 0?(Ue=Gn(N,Z,re),Re.programVariants.set(Xe,Ue)):(Re.currentProgram=Ue,Re.uniformsList=null,Re.outputColorSpace=Q,Re.toneMapping=ne),Ue}function _o(N){if(N.uniformsList===null){let Z=N.currentProgram.getUniforms();N.uniformsList=lo.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Jn(N,Z){let re=qe.get(N);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function us(N,Z,re,Q,ne){Z.isScene!==!0&&(Z=fe),Qe.resetTextureUnits();let Re=Z.fog,Xe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Z.environment:null,Ue=U===null?A.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wt.workingColorSpace,Ge=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,je=z.get(Q.envMap||Xe,Ge),ft=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,bt=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!re.morphAttributes.position,At=!!re.morphAttributes.normal,Yt=!!re.morphAttributes.color,Gt=Ni;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Gt=A.toneMapping);let zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pn=zt!==void 0?zt.length:0,Je=qe.get(Q),an=E.state.lights;if(me===!0&&(be===!0||N!==G)){let kt=N===G&&Q.id===R;de.setState(Q,N,kt)}let It=!1,Ei=!1;Q.version===Je.__version?Je.needsLights&&Je.lightsStateVersion!==an.state.version||ne.isBatchedMesh&&Je.batching===!1||!ne.isBatchedMesh&&Je.batching===!0||ne.isBatchedMesh&&Je.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Je.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Je.instancing===!1||!ne.isInstancedMesh&&Je.instancing===!0||ne.isSkinnedMesh&&Je.skinning===!1||!ne.isSkinnedMesh&&Je.skinning===!0||ne.isInstancedMesh&&Je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Je.instancingMorph===!1&&ne.morphTexture!==null||Je.envMap!==je||Q.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==de.numPlanes||Je.numIntersection!==de.numIntersection)||Je.vertexAlphas!==ft||Je.vertexTangents!==bt||Je.morphTargets!==Ze||Je.morphNormals!==At||Je.morphColors!==Yt||Je.morphTargetsCount!==pn||Je.numLightProbeGrids!==dn(E.state.lightProbeGridArray)?It=!0:(Je.outputColorSpace!==Ue||Je.toneMapping!==Gt)&&(Ei=!0):(It=!0,Je.__version=Q.version);let mn=Je.currentProgram;(It===!0||Ei===!0)&&(mn=Ei===!0?Ga(Q,Z,ne,Ue,Gt):Gn(Q,Z,ne),O&&Q.isNodeMaterial&&O.onUpdateProgram(Q,mn,Je));let fs=!1,fi=!1,$n=!1,Pt=mn.getUniforms(),sn=Je.uniforms;if(ve.useProgram(mn.program)&&(fs=!0,fi=!0,$n=!0),Q.id!==R&&(R=Q.id,fi=!0),fs||G!==N){ve.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(H,"projectionMatrix",N.projectionMatrix),Pt.setValue(H,"viewMatrix",N.matrixWorldInverse);let Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(H,Fe.setFromMatrixPosition(N.matrixWorld)),lt.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),G!==N&&(G=N,fi=!0,$n=!0)}if(Je.needsLights&&(an.state.sunShadowMap.length>0&&Pt.setValue(H,"sunShadowMap",an.state.sunShadowMap,Qe),an.state.directionalShadowMap.length>0&&Pt.setValue(H,"directionalShadowMap",an.state.directionalShadowMap,Qe),an.state.spotShadowMap.length>0&&Pt.setValue(H,"spotShadowMap",an.state.spotShadowMap,Qe),an.state.pointShadowMap.length>0&&Pt.setValue(H,"pointShadowMap",an.state.pointShadowMap,Qe)),ne.isSkinnedMesh){Pt.setOptional(H,ne,"bindMatrix"),Pt.setOptional(H,ne,"bindMatrixInverse");let kt=ne.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Pt.setValue(H,"boneTexture",kt.boneTexture,Qe))}ne.isBatchedMesh&&(Pt.setOptional(H,ne,"batchingTexture"),Pt.setValue(H,"batchingTexture",ne._matricesTexture,Qe),Pt.setOptional(H,ne,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",ne._indirectTexture,Qe),Pt.setOptional(H,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",ne._colorsTexture,Qe));let An=re.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ge.update(ne,re,mn),(fi||Je.receiveShadow!==ne.receiveShadow)&&(Je.receiveShadow=ne.receiveShadow,Pt.setValue(H,"receiveShadow",ne.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dS()),fi){if(Pt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&Va(sn,$n),Re&&Q.fog===!0&&ee.refreshFogUniforms(sn,Re),ee.refreshMaterialUniforms(sn,Q,j,Y,E.state.transmissionRenderTarget[N.id]),Je.needsLights&&Je.numLightProbeGrids>0){let kt=S,Jt=0;for(let Dn of E.state.lightProbeGridArray)Dn.texture!==null&&(kt.textures[Jt]=Dn.texture,kt.min[Jt]=Dn.boundingBox.min,kt.max[Jt]=Dn.boundingBox.max,kt.resolution[Jt]=Dn.resolution,Jt++);for(let Dn in kt)kt[Dn].length=Jt;sn.probesSH.value=kt.textures,sn.probesMin.value=kt.min,sn.probesMax.value=kt.max,sn.probesResolution.value=kt.resolution}lo.upload(H,_o(Je),sn,Qe)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(lo.upload(H,_o(Je),sn,Qe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(H,"center",ne.center),Pt.setValue(H,"modelViewMatrix",ne.modelViewMatrix),Pt.setValue(H,"normalMatrix",ne.normalMatrix),Pt.setValue(H,"modelMatrix",ne.matrixWorld),Q.uniformsGroups!==void 0){let kt=Q.uniformsGroups;for(let Jt=0,Dn=kt.length;Jt<Dn;Jt++){let Mn=kt[Jt];et.update(Mn,mn),et.bind(Mn,mn)}}return mn}function Va(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.sunLights.needsUpdate=Z,N.sunLightShadows.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Wa(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(N,Z,re){let Q=qe.get(N);Q.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),qe.get(N.texture).__webglTexture=Z,qe.get(N.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Z){let re=qe.get(N);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,re=0){U=N,D=Z,C=re;let Q=null,ne=!1,Re=!1;if(N){let Ue=qe.get(N);if(Ue.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(H.FRAMEBUFFER,Ue.__webglFramebuffer),B.copy(N.viewport),oe.copy(N.scissor),ie=N.scissorTest,ve.viewport(B),ve.scissor(oe),ve.setScissorTest(ie),R=-1;return}else if(Ue.__webglFramebuffer===void 0)Qe.setupRenderTarget(N);else if(Ue.__hasExternalTextures)Qe.rebindTextures(N,qe.get(N.texture).__webglTexture,qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ft=N.depthTexture;if(Ue.__boundDepthTexture!==ft){if(ft!==null&&qe.has(ft)&&(N.width!==ft.image.width||N.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(N)}}let Ge=N.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);let je=qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?Q=je[Z][re]:Q=je[Z],ne=!0):N.samples>0&&Qe.useMultisampledRTT(N)===!1?Q=qe.get(N).__webglMultisampledFramebuffer:Array.isArray(je)?Q=je[re]:Q=je,B.copy(N.viewport),oe.copy(N.scissor),ie=N.scissorTest}else B.copy(ze).multiplyScalar(j).floor(),oe.copy(Be).multiplyScalar(j).floor(),ie=We;if(re!==0&&(Q=F),ve.bindFramebuffer(H.FRAMEBUFFER,Q)&&ve.drawBuffers(N,Q),ve.viewport(B),ve.scissor(oe),ve.setScissorTest(ie),ne){let Ue=qe.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ue.__webglTexture,re)}else if(Re){let Ue=Z;for(let Ge=0;Ge<N.textures.length;Ge++){let je=qe.get(N.textures[Ge]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ge,je.__webglTexture,re,Ue)}}else if(N!==null&&re!==0){let Ue=qe.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ue.__webglTexture,re)}R=-1};function yo(N){let Z=qe.get(N);return(Z.__readFormat!==N.format||Z.__readType!==N.type)&&(Z.__readFormat=N.format,Z.__readType=N.type,Z.__formatReadable=lt.textureFormatReadable(N.format),Z.__typeReadable=lt.textureTypeReadable(N.type)),Z}this.readRenderTargetPixels=function(N,Z,re,Q,ne,Re,Xe,Ue=0){if(!(N&&N.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ge=Ge[Xe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){ve.bindFramebuffer(H.FRAMEBUFFER,Ge);try{let je=N.textures[Ue],ft=je.format,bt=je.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue);let Ze=yo(je);if(Ze.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-Q&&re>=0&&re<=N.height-ne&&H.readPixels(Z,re,Q,ne,Ie.convert(ft),Ie.convert(bt),Re)}finally{let je=U!==null?qe.get(U).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(N,Z,re,Q,ne,Re,Xe,Ue=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ge=Ge[Xe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(Z>=0&&Z<=N.width-Q&&re>=0&&re<=N.height-ne){ve.bindFramebuffer(H.FRAMEBUFFER,Ge);let je=N.textures[Ue],ft=je.format,bt=je.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue);let Ze=yo(je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,At),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(Z,re,Q,ne,Ie.convert(ft),Ie.convert(bt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Yt=U!==null?qe.get(U).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Yt);let Gt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cm(H,Gt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,At),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(At),H.deleteSync(Gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Z=null,re=0){let Q=Math.pow(2,-re),ne=Math.floor(N.image.width*Q),Re=Math.floor(N.image.height*Q),Xe=Z!==null?Z.x:0,Ue=Z!==null?Z.y:0;Qe.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Xe,Ue,ne,Re),ve.unbindTexture()},this.copyTextureToTexture=function(N,Z,re=null,Q=null,ne=0,Re=0){let Xe,Ue,Ge,je,ft,bt,Ze,At,Yt,Gt=N.isCompressedTexture?N.mipmaps[Re]:N.image;if(re!==null)Xe=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,je=re.min.x,ft=re.min.y,bt=re.isBox3?re.min.z:0;else{let Pt=Math.pow(2,-ne);Xe=Math.floor(Gt.width*Pt),Ue=Math.floor(Gt.height*Pt),N.isDataArrayTexture?Ge=Gt.depth:N.isData3DTexture?Ge=Math.floor(Gt.depth*Pt):Ge=1,je=0,ft=0,bt=0}Q!==null?(Ze=Q.x,At=Q.y,Yt=Q.z):(Ze=0,At=0,Yt=0);let zt=Ie.convert(Z.format),pn=Ie.convert(Z.type),Je;Z.isData3DTexture?(Qe.setTexture3D(Z,0),Je=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Qe.setTexture2DArray(Z,0),Je=H.TEXTURE_2D_ARRAY):(Qe.setTexture2D(Z,0),Je=H.TEXTURE_2D),ve.activeTexture(H.TEXTURE0),ve.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),ve.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),ve.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);let an=ve.getParameter(H.UNPACK_ROW_LENGTH),It=ve.getParameter(H.UNPACK_IMAGE_HEIGHT),Ei=ve.getParameter(H.UNPACK_SKIP_PIXELS),mn=ve.getParameter(H.UNPACK_SKIP_ROWS),fs=ve.getParameter(H.UNPACK_SKIP_IMAGES);ve.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),ve.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),ve.pixelStorei(H.UNPACK_SKIP_PIXELS,je),ve.pixelStorei(H.UNPACK_SKIP_ROWS,ft),ve.pixelStorei(H.UNPACK_SKIP_IMAGES,bt);let fi=N.isDataArrayTexture||N.isData3DTexture,$n=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isDepthTexture){let Pt=qe.get(N),sn=qe.get(Z),An=qe.get(Pt.__renderTarget),kt=qe.get(sn.__renderTarget);ve.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Jt=0;Jt<Ge;Jt++)fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(N).__webglTexture,ne,bt+Jt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(Z).__webglTexture,Re,Yt+Jt)),H.blitFramebuffer(je,ft,je+Xe,ft+Ue,Ze,At,Ze+Xe,At+Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||qe.has(N)){let Pt=qe.get(N),sn=qe.get(Z);ve.bindFramebuffer(H.READ_FRAMEBUFFER,v),ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,w);for(let An=0;An<Ge;An++)fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,ne,bt+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pt.__webglTexture,ne),$n?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sn.__webglTexture,Re,Yt+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sn.__webglTexture,Re),ne!==0?H.blitFramebuffer(je,ft,je+Xe,ft+Ue,Ze,At,Ze+Xe,At+Ue,H.COLOR_BUFFER_BIT,H.NEAREST):$n?H.copyTexSubImage3D(Je,Re,Ze,At,Yt+An,je,ft,Xe,Ue):H.copyTexSubImage2D(Je,Re,Ze,At,je,ft,Xe,Ue);ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else $n?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(Je,Re,Ze,At,Yt,Xe,Ue,Ge,zt,pn,Gt.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Je,Re,Ze,At,Yt,Xe,Ue,Ge,zt,Gt.data):H.texSubImage3D(Je,Re,Ze,At,Yt,Xe,Ue,Ge,zt,pn,Gt):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,Ze,At,Xe,Ue,zt,pn,Gt.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,Ze,At,Gt.width,Gt.height,zt,Gt.data):H.texSubImage2D(H.TEXTURE_2D,Re,Ze,At,Xe,Ue,zt,pn,Gt);ve.pixelStorei(H.UNPACK_ROW_LENGTH,an),ve.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It),ve.pixelStorei(H.UNPACK_SKIP_PIXELS,Ei),ve.pixelStorei(H.UNPACK_SKIP_ROWS,mn),ve.pixelStorei(H.UNPACK_SKIP_IMAGES,fs),Re===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&H.generateMipmap(Je),ve.unbindTexture()},this.initRenderTarget=function(N){qe.get(N).__webglFramebuffer===void 0&&Qe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Qe.setTextureCube(N,0):N.isData3DTexture?Qe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Qe.setTexture2DArray(N,0):Qe.setTexture2D(N,0),ve.unbindTexture()},this.resetState=function(){D=0,C=0,U=null,ve.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Es={};Nd(Es,{GROUPS:()=>fo,allMaterials:()=>PS,altKitMaterial:()=>qf,clips:()=>Xf,get:()=>ki,getBase:()=>TS,groupLoaded:()=>ih,has:()=>Bn,load:()=>ig,loadGroups:()=>gr,material:()=>Vf,prop:()=>wn,releaseGPU:()=>Yf,setBase:()=>nh,tinted:()=>po,villagerTinted:()=>Wf});function Zm(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ct;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Km(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let m=Km(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Km(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let _=u.getComponent(f,m);a.setComponent(f+h,m,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function ff(s,e){if(e===Fu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ao||e===ya){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ao)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Jc(s){let e=new Map,t=new Map,n=s.clone();return Jm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Jm(s.children[n],e.children[n],t)}var $c=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new jc(t,Et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new jc(t,Et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=as.extractUrlBase(e);o=as.resolveURL(c,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new eo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===tg){try{o[Et.KHR_BINARY_GLTF]=new Df(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Et.KHR_MATERIALS_UNLIT:o[h]=new xf;break;case Et.KHR_DRACO_MESH_COMPRESSION:o[h]=new Uf(r,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:o[h]=new Ff;break;case Et.KHR_MESH_QUANTIZATION:o[h]=new Of;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function mS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Xt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gf=class{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],On);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ri(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rr(u),c.distance=h;break;case"spot":c=new la(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},xf=class{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},vf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},_f=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(r,r)}return Promise.all(i)}},yf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Mf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Sf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},bf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},wf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Tf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],On),Promise.all(i)}},Ef=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(i)}},Rf=class{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Cf=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},If=class{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Pf=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Lf=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},jc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Nf=class{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let _=new nt,p=new V,g=new Qt,M=new V(1,1,1),L=new $s(m.geometry,m.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),L.setMatrixAt(T,_.compose(p,g,M));let S=null;for(let T in l)if(T==="_COLOR_0"){let E=l[T];L.instanceColor=new zn(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(S===null){let x=L.geometry;S=new Ct,S.name=x.name;for(let y in x.attributes)S.setAttribute(y,x.attributes[y]);for(let y in x.morphAttributes)S.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let y of x.groups)S.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),L.geometry=S}let E=l[T];S.setAttribute(T,new zn(E.array,E.itemSize,E.normalized))}Wt.prototype.copy.call(L,m),this.parser.assignFinalMaterial(L),d.push(L)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},tg="glTF",Aa=12,$m={JSON:1313821514,BIN:5130562},Df=class{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Aa,r=new DataView(e,Aa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$m.JSON){let c=new Uint8Array(e,Aa+o,a);this.content=n.decode(c)}else if(l===$m.BIN){let c=Aa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=kf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=kf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=uo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let _=d.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(d)},a,c,On,f)})})}},Ff=class{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Of=class{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}},Qc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,_=m-c,p=-2*d+3*f,g=d-f,M=1-p,L=g-f+h;for(let S=0;S!==a;S++){let T=o[_+S+a],E=o[_+S+l]*u,x=o[m+S+a],y=o[m+S]*u;r[S]=M*T+L*E+p*x+g*y}return r}},gS=new Qt,zf=class extends Qc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return gS.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jm={9728:en,9729:ln,9984:rc,9985:ro,9986:fr,9987:oi},Qm={33071:Wn,33648:Vr,10497:_s},df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},pf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),s.DefaultMaterial}function mr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _S(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function yS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(s){let e,t=s.extensions&&s.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mf(t.attributes):e=s.indices+":"+mf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+mf(s.targets[n]);return e}function mf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Bf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bS=new nt,Hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new nr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ha(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mr(r,a,i),Oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(as.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=df[i.type],a=uo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new yt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=df[i.type],c=uo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,p;if(d&&d!==h){let g=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,L=t.cache.get(M);L||(_=new c(a,g*d,i.count*d/u),L=new Js(_,d/u),t.cache.add(M,L)),p=new ys(L,l,f%d/u,m)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new yt(_,l,m);if(i.sparse!==void 0){let g=df.SCALAR,M=uo[i.sparse.indices.componentType],L=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,T=new M(o[1],L,i.sparse.count*g),E=new c(o[2],S,i.sparse.count*l);a!==null&&(p=new yt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,y=T.length;x<y;x++){let I=T[x];if(p.setX(I,E[x*l]),l>=2&&p.setY(I,E[x*l+1]),l>=3&&p.setZ(I,E[x*l+2]),l>=4&&p.setW(I,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=jm[f.magFilter]||ln,u.minFilter=jm[f.minFilter]||oi,u.wrapS=Qm[f.wrapS]||_s,u.wrapT=Qm[f.wrapT]||_s,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==ln,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let _=d;t.isImageBitmapLoader===!0&&(_=function(p){let g=new cn(p);g.needsUpdate=!0,d(g)}),t.load(as.resolveURL(f,r.path),_,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),Oi(f,o),f.userData.mimeType=o.mimeType||SS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Qr,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new jr,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return tr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Et.KHR_MATERIALS_UNLIT]){let h=i[Et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);let u=r.alphaMode||pf.OPAQUE;if(u===pf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xn){let h=r.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],On)}return r.emissiveTexture!==void 0&&o!==xn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&mr(i,h,r),h})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return eg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=MS(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=eg(new Ct,c,t),c.mode===li.TRIANGLE_STRIP?f=f.then(d=>ff(d,ya)):c.mode===li.TRIANGLE_FAN&&(f=f.then(d=>ff(d,ao))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?vS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let _=u[d],p=o[d],g,M=c[d];if(p.mode===li.TRIANGLES||p.mode===li.TRIANGLE_STRIP||p.mode===li.TRIANGLE_FAN||p.mode===void 0){let L=r.isSkinnedMesh===!0,S=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");L&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=L&&S?new Yo(_,M):new Mt(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===li.LINES)g=new $o(_,M);else if(p.mode===li.LINE_STRIP)g=new js(_,M);else if(p.mode===li.LINE_LOOP)g=new jo(_,M);else if(p.mode===li.POINTS)g=new vi(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&yS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Oi(g,r),p.extensions&&mr(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&mr(i,h[0],r),h[0];let f=new Bt;r.extensions&&mr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Wc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new or(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new nt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ko(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],_=d.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let L=0,S=f.length;L<S;L++){let T=f[L],E=d[L],x=m[L],y=_[L],I=p[L];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let A=n._createAnimationTracks(T,E,x,y,I);if(A)for(let k=0;k<A.length;k++)g.push(A[k])}let M=new Mi(r,void 0,g);return Oi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,bS)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new V().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $r:c.length>1?u=new Bt:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Oi(u,r),r.extensions&&mr(n,u,r),r.matrix!==void 0){let h=new nt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),Oi(r,n),n.extensions&&mr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(Jc(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof Pn||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ts[r.path]===Ts.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Ts[r.path]){case Ts.weights:u=ss;break;case Ts.rotation:u=rs;break;case Ts.translation:case Ts.scale:u=Ss;break;default:n.itemSize===1?u=ss:u=Ss;break}let h=i.interpolation!==void 0?xS[i.interpolation]:Ys,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let _=new u(l[d]+"."+Ts[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof rs?zf:Qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wS(s,e,t){let n=e.attributes,i=new Sn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){let u=Bf(uo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let _=Bf(uo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Kt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function eg(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=kf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return wt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),Oi(s,e),wS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_S(s,e.targets,t):s})}si.enabled=!0;var th="assets/models/";function nh(s){th=s.endsWith("/")?s:s+"/"}function TS(){return th}var fo={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},hs=new Map,Ra=new Map,ci=new Map,Gf=null,zi=null;function ES(){return Gf||(Gf=new $c),Gf}function ng(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),ci.has(t))return ci.get(t);let n;return e==="window"?n=new xn({color:16777215,name:e,fog:!0}):(n=new hn({name:e,map:s.map||null,color:s.color?s.color.clone():new Te(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Ft,n.map.anisotropy=2),ci.set(t,n),n}function Vf(s){return ci.get(s)}function AS(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(ng);else{let i=t.material;t.material=ng(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&CS(e)}function RS(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let l=a.getImageData(0,0,i.width,i.height).data,c=s.material.map.flipY;for(let u=0;u<t;u++){let h=r.getX(u)%1,f=r.getY(u)%1;h<0&&(h+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(h*i.width)),m=Math.min(i.height-1,Math.floor((c?1-f:f)*i.height));n[u]=Math.max(.05,l[(m*i.width+d)*4]/255)}}catch{}return n}function CS(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(c=>{let u=c.geometry.clone();for(let f of Object.keys(u.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||u.deleteAttribute(f);let h=c.material.name==="cloth";return u.setAttribute("aCloth",new yt(h?RS(c):new Float32Array(u.attributes.position.count),1)),u}),l=Zm(a,!1);if(!l)return;r.geometry.dispose(),r.geometry=l,r.userData.clothMerged=n.length>0;for(let c of o)c.parent.remove(c),c.geometry.dispose()}catch{}}var eh=new Map;function Wf(s){if(eh.has(s))return eh.get(s);let e=ci.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new Te(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",eh.set(s,t),t}function ig(s,e){if(hs.has(s))return e&&e(),Promise.resolve(hs.get(s));if(Ra.has(s))return Ra.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{ES().load(th+s,r=>{try{AS(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}hs.set(s,r),Ra.delete(s),n(r)},void 0,r=>{Ra.delete(s),i(r)})});return Ra.set(s,t),t.then(n=>(e&&e(),n))}function gr(s,e){let t=[];for(let r of s)for(let o of fo[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>ig(r,()=>{n++,e&&e(n,i)})))}function Bn(s){return hs.has(s)}function ki(s){return hs.get(s)}function ih(s){return fo[s].every(e=>hs.has(e))}var IS={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function wn(s,e){let t=hs.get(IS[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function Xf(){let s=hs.get("characters/villager-anims.glb");return s?s.animations:[]}var Ca=new Map;function po(s,e,t){let n=s+"|"+e+(t||"");if(Ca.has(n))return Ca.get(n);let i=ci.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,Ca.set(n,r),r}function qf(){if(ci.has("fantasy-town-b"))return ci.get("fantasy-town-b");let s=ci.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",zi||(zi=new nr().load(th+"textures/fantasy-town-b.png"),zi.flipY=!1,zi.colorSpace=Ft,zi.anisotropy=2,s.map&&(zi.wrapS=s.map.wrapS,zi.wrapT=s.map.wrapT)),e.map=zi,ci.set("fantasy-town-b",e),e}function PS(){return[...ci.values(),...Ca.values()]}function Yf(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of hs.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of ci.values())e(t),t.map&&e(t.map);for(let t of Ca.values())e(t);for(let t of eh.values())e(t);zi&&e(zi)}var vn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],LS=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],Kf=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],NS=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],DS=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],US=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],sg=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],rg=vn.map((s,e)=>({id:e,hex:s,name:LS[e]})),og=NS.map((s,e)=>({id:e,name:s,node:Kf[e]})),ag=DS.map((s,e)=>({id:e,name:s,desc:US[e]}));var Zf={vampir:!0,iftiraci:!0};var hi={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ut=(s,e,t)=>s<e?e:s>t?t:s,Jf=(s,e,t)=>s+(e-s)*t,As=s=>s*s*(3-2*s),Tn=(s,e)=>1-Math.exp(-s*e),Ye=Math.PI*2;function _n(s){return s=(s+Math.PI)%Ye,s<0&&(s+=Ye),s-Math.PI}function Hn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var FS=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,OS=`
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
}`,zS=`
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
}`,kS=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function lg(s,e){let t=new Bt;t.name="sky",s.add(t);let n=new tn({vertexShader:FS,fragmentShader:OS,side:bn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new Te},uHor:{value:new Te},uSun:{value:new Te},uSunDir:{value:new V(0,1,0)},uMoonDir:{value:new V(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new Te(.93,.95,1)}}}),i=new Mt(new ia(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=Hn(77),o=700,a=new Float32Array(o*3),l=new Float32Array(o),c=new Float32Array(o);for(let p=0;p<o;p++){let g=r(),M=r(),L=g*Ye,S=.04+Math.pow(M,.8)*.96,T=Math.sqrt(1-S*S);a[p*3]=Math.cos(L)*T*420,a[p*3+1]=S*420,a[p*3+2]=Math.sin(L)*T*420,l[p]=1+Math.pow(r(),6)*3.2,c[p]=r()*3}let u=new Ct;u.setAttribute("position",new yt(a,3)),u.setAttribute("aSize",new yt(l,1)),u.setAttribute("aPhase",new yt(c,1));let h=new tn({vertexShader:zS,fragmentShader:kS,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new vi(u,h);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=HS();t.add(d);let m=GS();return t.add(m),{group:t,update(p,g,M,L,S){let T=n.uniforms;S&&T.uMoonCol.value.copy(S),T.uTop.value.copy(p.top),T.uHor.value.copy(p.hor),T.uSun.value.copy(p.sun),T.uSunDir.value.copy(p.sunDir),T.uMoonDir.value.copy(p.moonDir),T.uSunVis.value=p.sunVis,T.uMoonVis.value=p.moonVis,T.uGlow.value=.6+p.dusk*1.4,h.uniforms.uTime.value=g,h.uniforms.uAlpha.value=p.stars,h.uniforms.uPx.value=L,f.visible=p.stars>.01,t.position.set(M.position.x,0,M.position.z),Ia.color.copy(p.hor).lerp(p.sun,.35).lerp(BS,.55*(1-p.night)),Ia.color.multiplyScalar(.55+.45*(1-p.night*.8)),d.rotation.y=g*.004,d.visible=e.clouds,mo.uniforms.uFar.value.copy(p.hor),mo.uniforms.uNear.value.copy(p.gnd).lerp(p.hor,.35).multiplyScalar(.9),mo.uniforms.uTint.value.copy(p.sky)},dispose(){t.traverse(p=>{p.geometry&&p.geometry.dispose()}),n.dispose(),h.dispose(),Ia.dispose(),mo.dispose(),s.remove(t)}}}var BS=new Te(1,1,1),Ia=null,mo=null;function HS(){let s=Hn(4242),e=[];for(let a=0;a<11;a++){let l=s()*Ye,c=210+s()*120,u=70+s()*55,h=3+Math.floor(s()*4);for(let f=0;f<h;f++){let d=new na(1,0),m=9+s()*12;d.scale(m*(1.3+s()*.6),m*.55,m),d.translate((f-h/2)*13+s()*5,s()*4,s()*8),d.rotateY(l+Math.PI/2),d.translate(Math.cos(l)*c,u,Math.sin(l)*c),e.push(d)}}let t=VS(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let l=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=l,i[a*3+1]=l,i[a*3+2]=l*1.03}t.setAttribute("color",new yt(i,3)),Ia=new xn({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new Mt(t,Ia);return o.renderOrder=-8,o.frustumCulled=!1,o}function GS(){let s=Hn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let l=e.length/3,c=0;for(let u=0;u<=a.n;u++){let h=u/a.n*Ye,f=a.h*(.35+.65*Math.abs(Math.sin(h*3.1+a.k)*.6+Math.sin(h*7.3+1.7*a.k)*.3+(s()-.5)*.35));u===a.n&&(f=c),u===0&&(c=f);let d=Math.cos(h)*a.r,m=Math.sin(h)*a.r;if(e.push(d,-20,m,d,f,m),t.push(a.k,0,0,a.k,1,0),u<a.n){let _=l+u*2;n.push(_,_+2,_+1,_+1,_+2,_+3)}}}let r=new Ct;r.setAttribute("position",new Lt(e,3)),r.setAttribute("color",new Lt(t,3)),r.setIndex(n),mo=new tn({side:nn,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new Te},uNear:{value:new Te},uTint:{value:new Te}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new Mt(r,mo);return o.renderOrder=-7,o.frustumCulled=!1,o}function VS(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Ct;return i.setAttribute("position",new yt(t,3)),i}function sh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function $f(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=sh(t,n),a=sh(t+1,n),l=sh(t,n+1),c=sh(t+1,n+1);return o+(a-o)*i+(l-o)*r+(o-a-l+c)*i*r}function cg(s,e){return $f(s,e)*.55+$f(s*2.1,e*2.1)*.3+$f(s*4.3,e*4.3)*.15}function hg(s,e){let r=[];for(let E=0;E<=56;E++){let x=E/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),l=new Float32Array(o*2),c=new Float32Array(o*3),u=[];for(let E=1;E<=56;E++)for(let x=0;x<120;x++){let y=1+(E-1)*120+x,I=1+(E-1)*120+(x+1)%120;if(E===1)u.push(0,I,y);else{let A=1+(E-2)*120+x,k=1+(E-2)*120+(x+1)%120;u.push(A,k,y,k,I,y)}}let h=new Ct;h.setAttribute("position",new yt(a,3)),h.setAttribute("uv",new yt(l,2)),h.setAttribute("color",new yt(c,3)),h.setIndex(u);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),m=new Qs(f);m.colorSpace=Ft,m.wrapS=m.wrapT=Wn,m.anisotropy=4;let _=new hn({map:m,vertexColors:!0}),p=new Mt(h,_);p.receiveShadow=!0,p.name="ground",p.renderOrder=-1,s.add(p);let g=30,M=45;function L(E,x){let y=Math.hypot(E,x);if(y<=g)return 0;let I=As(ut((y-g)/26,0,1)),A=cg(E*.018+3,x*.018-7),k=ut((y-g)/140,0,1);return I*(.6+A*3.5)+k*k*k*(8+A*14)}function S(){let E=0,x=(y,I)=>{let A=L(y,I);a[E*3]=y,a[E*3+1]=A,a[E*3+2]=I,l[E*2]=y/(2*M)+.5,l[E*2+1]=1-(I/(2*M)+.5);let k=Math.hypot(y,I),O=cg(y*.05,I*.05),F=ut((k-g)/60,0,1),v=ut(A/30,0,1),w=.92+(O-.5)*.22;c[E*3]=w*(1-F*.32)+v*.08,c[E*3+1]=w*(1-F*.22),c[E*3+2]=w*(1-F*.18)+v*.06,E++};x(0,0);for(let y=1;y<=56;y++)for(let I=0;I<120;I++){let A=I/120*Ye+y%2*(Math.PI/120);x(Math.cos(A)*r[y],Math.sin(A)*r[y])}h.getAttribute("position").needsUpdate=!0,h.getAttribute("uv").needsUpdate=!0,h.getAttribute("color").needsUpdate=!0,h.computeVertexNormals(),h.computeBoundingSphere()}function T(E,x){let y=!!(x&&x.snow);g=E.R+10,M=E.R+17,S();let I=f.width,A=I/(2*M),k=B=>(B+M)*A,O=B=>(B+M)*A,F=Hn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=y?"#e4ebf2":"#7db457",d.fillRect(0,0,I,I);for(let B=0;B<260;B++){let oe=F()*I,ie=F()*I,J=(2+F()*7)*A,ce=d.createRadialGradient(oe,ie,0,oe,ie,J),X=y?F()<.5?"255,255,255":F()<.5?"200,212,228":"176,196,170":F()<.5?"120,170,82":F()<.5?"92,136,66":"138,160,78";ce.addColorStop(0,`rgba(${X},0.45)`),ce.addColorStop(1,`rgba(${X},0)`),d.fillStyle=ce,d.fillRect(oe-J,ie-J,J*2,J*2)}for(let B=0;B<I*6;B++){let oe=F()*I,ie=F()*I;d.fillStyle=y?F()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":F()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(oe,ie,1+F()*1.5,1+F()*2.5)}for(let B=0;B<380;B++){let oe=F()*Ye,ie=E.Rp+2+F()*(M-E.Rp-2),J=k(Math.cos(oe)*ie),ce=O(Math.sin(oe)*ie);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(F()*4)],d.globalAlpha=y?0:.8,d.beginPath(),d.arc(J,ce,Math.max(1,A*.06),0,Ye),d.fill()}d.globalAlpha=1;for(let B of E.houses){let oe=k(B.x),ie=O(B.z),J=(B.size*.62+1.4)*A,ce=d.createRadialGradient(oe,ie,J*.3,oe,ie,J);ce.addColorStop(0,y?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),ce.addColorStop(1,y?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=ce,d.fillRect(oe-J,ie-J,J*2,J*2)}let v=(B,oe,ie,J)=>{d.globalAlpha=J,d.strokeStyle=ie,d.lineWidth=oe*A,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(k(B[0][0]),O(B[0][1]));for(let ce=1;ce<B.length;ce++)d.lineTo(k(B[ce][0]),O(B[ce][1]));d.stroke(),d.globalAlpha=1},w=[];for(let B of E.houses){let oe=B.door,ie=Math.atan2(oe.ax,oe.az),J=E.Rp-.5,ce=[[oe.dx,oe.dz],[oe.ax,oe.az],[Math.sin(ie)*E.Rr,Math.cos(ie)*E.Rr],[Math.sin(ie)*J,Math.cos(ie)*J]];w.push(ce)}let D=E.gateAngle,C=[[Math.sin(D)*(E.Rp-.5),Math.cos(D)*(E.Rp-.5)],[Math.sin(D)*(E.R+2),Math.cos(D)*(E.R+2)],[Math.sin(D+.05)*(E.R+12),Math.cos(D+.05)*(E.R+12)],[Math.sin(D-.02)*(M+4),Math.cos(D-.02)*(M+4)]];w.push(C);for(let B of w)v(B,2.6,y?"#b4b8bf":"#8f7a52",.35);for(let B of w)v(B,1.7,y?"#8f8476":"#a88d5e",.85);for(let B of w)v(B,.7,y?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*A,d.beginPath(),d.arc(k(0),O(0),E.Rr*A,0,Ye),d.stroke(),d.globalAlpha=1;let U=(E.Rp+.8)*A,R=d.createRadialGradient(k(0),O(0),U*.6,k(0),O(0),U*1.08);y?(R.addColorStop(0,"rgba(170,166,160,1)"),R.addColorStop(.85,"rgba(184,186,190,0.95)"),R.addColorStop(1,"rgba(184,186,190,0)")):(R.addColorStop(0,"rgba(176,150,108,1)"),R.addColorStop(.85,"rgba(160,136,96,0.95)"),R.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=R,d.beginPath(),d.arc(k(0),O(0),U*1.08,0,Ye),d.fill();let G=Math.max(2,.55*A);for(let B=3.2;B<E.Rp+.3;B+=.62){let oe=Math.floor(Ye*B/.66),ie=F()*Ye;for(let J=0;J<oe;J++){if(F()<.12)continue;let ce=ie+J/oe*Ye,X=k(Math.cos(ce)*B),Y=O(Math.sin(ce)*B),j=150+Math.floor(F()*40);d.fillStyle=y?`rgba(${j+40},${j+44},${j+52},${.5+F()*.3})`:`rgba(${j+12},${j},${j-22},${.55+F()*.3})`,d.save(),d.translate(X,Y),d.rotate(ce+Math.PI/2),d.beginPath();let ye=G*(.85+F()*.3),Le=G*(.7+F()*.25);d.roundRect?d.roundRect(-ye/2,-Le/2,ye,Le,Le*.3):d.rect(-ye/2,-Le/2,ye,Le),d.fill(),d.restore()}}if(R=d.createRadialGradient(k(0),O(0),0,k(0),O(0),3*A),R.addColorStop(0,"rgba(60,46,40,0.95)"),R.addColorStop(.5,"rgba(96,78,62,0.7)"),R.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=R,d.beginPath(),d.arc(k(0),O(0),3*A,0,Ye),d.fill(),E.grave){let B=k(E.grave.x),oe=O(E.grave.z),ie=6*A;R=d.createRadialGradient(B,oe,0,B,oe,ie),R.addColorStop(0,"rgba(70,84,58,0.85)"),R.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=R,d.fillRect(B-ie,oe-ie,ie*2,ie*2)}m.needsUpdate=!0}return{mesh:p,heightAt:L,paint:T,dispose(){h.dispose(),_.dispose(),m.dispose(),s.remove(p)}}}var rh=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],ug=[0,1,3,2,1,0,2,3];function WS(s){let e=ug[s%ug.length],t=rh[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function qt(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function fg(s,e){let t=s.slice().sort((g,M)=>g.seat-M.seat),n=t.length,i=t.findIndex(g=>g.id===e);if(i>=0){let g=Math.floor(n/2);t=t.map((M,L)=>t[(i-g+L+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(Ye-r)),a=ut(o*.5,7.2,13.5),l=o-5.4,c=(Ye-r)/Math.max(n,1),u=t.findIndex(g=>g.id===e),h=g=>r/2+c*(g+.5),f=u>=0?-h(u):Math.PI,d=_n(f),m=t.map((g,M)=>{let L=_n(h(M)+f+Math.PI*0),S=WS(g.seat),T=rh[S.type],E={id:g.id,seat:g.seat,angle:L,x:Math.sin(L)*o,z:Math.cos(L)*o,rotY:L+Math.PI,type:S.type,variant:S.variant,size:T.size},x=qt(E,T.door[0],T.door[1]),y=qt(E,T.approach[0],T.approach[1]);return E.door={dx:x.x,dz:x.z,ax:y.x,az:y.z},E}),_=o+6.5,p=d+7/_;return{n,R:o,Rp:a,Rr:l,step:c,gap:r,gateAngle:d,houses:m,grave:{x:Math.sin(p)*_,z:Math.cos(p)*_,angle:p,r:_}}}function jf(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function Qf(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var dg=20,pg=new nt,XS=new nt,qS=new Qt,YS=new Qt,KS=new V,mg=new V,nd=new V(0,1,0),gg=new Te(.16,.11,.08),ZS=new Te("#ffc46b").multiplyScalar(1.25),JS=new Te(.05,.045,.06),xg=new Te("#c9b48a");var oh={value:1},ah=new Map;function $S(s){if(ah.has(s))return ah.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=oh,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,ah.set(s,e),e}function jS(){for(let s of ah.values())s.dispose()}var vg=new gt,Rs=new V;function ed(s){let e=new Bt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new nt().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let l=new nt().multiplyMatrices(o,a.matrixWorld),c=Array.isArray(a.material)?a.material[0]:a.material,u=c.uuid+(r?"|c":"");t.has(u)||t.set(u,{mat:c,cast:r,parts:[]});let h=t.get(u);for(let f of i)h.parts.push({geo:a.geometry,m:new nt().multiplyMatrices(f,l),org:new V().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let _ of n.parts)i+=_.geo.attributes.position.count,r+=_.geo.index?_.geo.index.count:_.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*2),c=new Float32Array(i*3),u=i>65535?new Uint32Array(r):new Uint16Array(r),h=0,f=0;for(let _ of n.parts){let p=_.geo,g=p.attributes.position,M=p.attributes.normal,L=p.attributes.uv;vg.getNormalMatrix(_.m);for(let S=0;S<g.count;S++)Rs.fromBufferAttribute(g,S).applyMatrix4(_.m),o[(h+S)*3]=Rs.x,o[(h+S)*3+1]=Rs.y,o[(h+S)*3+2]=Rs.z,M&&(Rs.fromBufferAttribute(M,S).applyMatrix3(vg).normalize(),a[(h+S)*3]=Rs.x,a[(h+S)*3+1]=Rs.y,a[(h+S)*3+2]=Rs.z),L&&(l[(h+S)*2]=L.getX(S),l[(h+S)*2+1]=L.getY(S)),c[(h+S)*3]=_.org.x,c[(h+S)*3+1]=_.org.y,c[(h+S)*3+2]=_.org.z;if(p.index){let S=p.index.array;for(let T=0;T<S.length;T++)u[f+T]=S[T]+h;f+=S.length}else{for(let S=0;S<g.count;S++)u[f+S]=h+S;f+=g.count}h+=g.count}let d=new Ct;d.setAttribute("position",new yt(o,3)),d.setAttribute("normal",new yt(a,3)),d.setAttribute("uv",new yt(l,2)),d.setAttribute("aOrigin",new yt(c,3)),d.setIndex(new yt(u,1)),d.computeBoundingSphere();let m=new Mt(d,$S(n.mat));m.castShadow=n.cast,m.receiveShadow=!0,m.matrixAutoUpdate=!1,m.userData.merged=!0,e.add(m)}return e}function td(s,e,t,n,i=1){return new nt().compose(new V(s,e,t),new Qt().setFromAxisAngle(nd,n),new V(i,i,i))}var id=class{constructor(e){this.root=e,this.map=new Map}batchFor(e){let t=this.map.get(e.uuid);if(!t){let n=e.clone();n.name=e.name,n.userData={...e.userData,houseBatch:!0};let i=new Jo(64,16384,32768,n);i.sortObjects=!1,i.perObjectFrustumCulled=!0,i.frustumCulled=!1,i.name="houses-"+e.name,this.root.add(i),t={mesh:i,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0},this.map.set(e.uuid,t)}return t}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){return e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI)),e.mesh.addInstance(t)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose();this.map.clear()}},sd=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Bt,this.parts=[],this.list=[];let o=ki(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new nt().copy(o.matrixWorld).invert();for(let l of["body","door","banner"]){let c=o.getObjectByName(l);if(!c)continue;let u=new nt().multiplyMatrices(a,c.matrixWorld),h=new nt().copy(c.matrixWorld).invert();c.traverse(f=>{if(!f.isMesh)return;let d=new nt().multiplyMatrices(h,f.matrixWorld),m=f.material,_=null;m.name==="window"?_="window":m.name.startsWith("tint")?(_="owner",m=po(m.name,"#ffffff")):t===1&&m.name==="fantasy-town"&&(m=qf());let p={kind:l,nodeM:u,local:d,colorMode:_,nodePos:new V().setFromMatrixPosition(u),nodeQ:new Qt().setFromRotationMatrix(u),ids:[]};try{let g=i.batchFor(m);p.batch=g,p.batches=i,p.gid=i.geometryId(g,f.geometry),_==="window"?(g.mesh.castShadow=!1,g.mesh.receiveShadow=!1):(g.mesh.castShadow=!0,g.mesh.receiveShadow=!0)}catch{p.batch=null;let M=new $s(f.geometry,m,dg);M.count=0,M.castShadow=_!=="window",M.receiveShadow=_!=="window",M.frustumCulled=!1,_&&(M.instanceColor=new zn(new Float32Array(dg*3).fill(1),3)),this.group.add(M),p.im=M}this.parts.push(p)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t)}setM(e,t,n){e.batch?e.batch.mesh.setMatrixAt(e.ids[t],n):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=XS.compose(KS.set(n.cx,0,n.cz),qS.setFromAxisAngle(nd,n.crot),mg.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=YS.setFromAxisAngle(nd,n.doorAngle).premultiply(r.nodeQ);o=pg.compose(r.nodePos,a,mg.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=pg.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}};function _g(s,e,t,n){let i=new Bt;i.name="village",s.add(i);let r=new Map,o=new id(i),a=new Map,l=null,c=null,u=null,h=null,f=!1,d=new Map,m=[],_=!0,p=!1,g=null,M=1,L=!1,S=new Te("#ffc46b"),T=new Te("#ff9a3c"),E=new Te("#ffb85a");function x(me,be){let pe=me+"-"+be;return r.has(pe)||r.set(pe,new sd(me,be,i,o)),r.get(pe)}function y(){for(let be of r.values())be.list.length=0;let me=[...a.values()].sort((be,pe)=>be.seat-pe.seat);for(let be of me)x(be.type,be.variant).list.push(be);_=!0}function I(me,be){let pe=l;l=me;let Fe=new Set;for(let we of me.houses){Fe.add(we.id);let fe=a.get(we.id);if(!fe||fe.type!==we.type||fe.variant!==we.variant){let xe=fe;fe={id:we.id,seat:we.seat,type:we.type,variant:we.variant,cx:we.x,cz:we.z,crot:we.rotY,sx:we.x,sz:we.z,srot:we.rotY,scale:be?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:xe&&xe.ownerColor||xg.clone(),winColor:gg.clone(),name:xe?xe.name:"",colorIdx:xe?xe.colorIdx:-1},a.set(we.id,fe)}fe.seat=we.seat,fe.sx=fe.cx,fe.sz=fe.cz,fe.srot=fe.crot,fe.tx=we.x,fe.tz=we.z,fe.trot=we.rotY,fe.angle=we.angle,fe.info=rh[we.type],fe.removing=!1,be||(fe.cx=we.x,fe.cz=we.z,fe.crot=we.rotY,fe.scale=1)}for(let[we,fe]of a)Fe.has(we)||(be?(fe.removing=!0,fe.sx=fe.cx,fe.sz=fe.cz,fe.srot=fe.crot,fe.tx=fe.cx,fe.tz=fe.cz,fe.trot=fe.crot):a.delete(we));M=be?0:1,y(),!be||!pe?k():(g=!0,L=!0)}function A(me){let be={x:me.cx,z:me.cz,rotY:me.crot},pe=me.info;return{door:qt(be,pe.door[0],pe.door[1]-.25),inside:qt(be,pe.door[0],pe.door[1]-1.2),approach:qt(be,pe.approach[0],pe.approach[1]+.2),peek:qt(be,pe.peek[0],pe.peek[1]),backWin:qt(be,pe.backWin[0],pe.backWin[2]),frontWin:qt(be,pe.frontWin[0],pe.frontWin[2]+.12),lantern:qt(be,pe.door[0]+.95,pe.front+.45),tomb:qt(be,pe.door[0]-2.6,pe.front+1.6),plaque:qt(be,0,pe.front+.3),rotY:me.crot,height:pe.height}}function k(){c&&(i.remove(c),Ut(c)),c=new Bt,c.name="dressing",i.add(c),g=!1;let me=Hn(2024+l.n),be=new Map,pe=(b,K,se,te,ee=1,_e="village",le=null)=>{let de=_e+":"+b;be.has(de)||be.set(de,[]);let Ce=le==null?n.heightAt(K,se):le;be.get(de).push(td(K,Ce,se,te,ee))};m=[],pe("campfire-pit",0,0,.3,1,"village",0);let Fe=[],we=[.55,2.35,4.15];for(let b=0;b<3;b++){let K=we[b],se=3.35;pe(b===1?"log-small":"log",Math.sin(K)*se,Math.cos(K)*se,K+Math.PI/2,1,"village",0),Fe.push({x:Math.sin(K)*se,z:Math.cos(K)*se,a:K,small:b===1})}pe("stump",Math.sin(5.4)*3.2,Math.cos(5.4)*3.2,.4,1,"village",0),pe("campfire-stand",0,0,1.2,.85,"village",0);let fe=l.houses,xe=["barrel","crate","hay-bale","crate-bottles","pumpkin","bucket","wheel","stool"];for(let b=0;b<fe.length;b++){let K=fe[b].angle,te=fe[(b+1)%fe.length].angle-K;for(;te<0;)te+=Ye;if(fe.length===1||te>Math.PI)continue;let ee=K+te/2,_e=l.R-3.4,le=Math.sin(ee)*_e,de=Math.cos(ee)*_e;pe("lamp-post",le,de,ee+Math.PI,1),m.push({x:le,y:3.55,z:de});let Ce=l.R+.4,q=xe[Math.floor(me()*xe.length)];pe(q,Math.sin(ee)*Ce,Math.cos(ee)*Ce,me()*Ye,1),me()<.6&&pe("bush",Math.sin(ee+.04)*(Ce+1.6),Math.cos(ee+.04)*(Ce+1.6),me()*Ye,1.2+me()*.5)}for(let b of a.values()){if(b.removing)continue;let K={x:b.tx,z:b.tz,rotY:b.trot},se=qt(K,b.info.door[0]+.95,b.info.front+.45);pe("lantern",se.x,se.z,b.trot,.8,"village",0);let te=qt(K,-b.info.hx-.6,-b.info.hz+.6);me()<.7&&pe(me()<.5?"stump":"barrel",te.x,te.z,me()*Ye,.9);let ee=qt(K,-b.info.hx+.2,b.info.front+1.2);me()<.5&&pe(me()<.5?"grass-large":"bush",ee.x,ee.z,me()*Ye,1)}let Ee=b=>{for(let se of fe)if(Math.abs(((b-se.angle+Math.PI)%Ye+Ye)%Ye-Math.PI)<.2)return!1;return Math.abs(((b-l.gateAngle+Math.PI)%Ye+Ye)%Ye-Math.PI)>.3},H=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],$e=0;for(let b=0;b<40&&$e<Math.min(4+Math.floor(l.n/5),H.length);b++){let K=me()*Ye;if(!Ee(K))continue;let se=l.Rp+2.2+me()*Math.max(.5,l.Rr-l.Rp-3.5),[te]=H[$e];pe(te,Math.sin(K)*se,Math.cos(K)*se,K+Math.PI+(me()-.5)*.5,1),$e++}let ue=l.gateAngle,lt=(b,K)=>({x:Math.sin(ue+K/b)*b,z:Math.cos(ue+K/b)*b}),ve=lt(l.R+1,-2.4);pe("signpost",ve.x,ve.z,ue+.6,1),ve=lt(l.R-1,2.6),pe("banner-pole",ve.x,ve.z,ue+Math.PI,1.2),ve=lt(l.R+4,-2.6),pe("lantern-post-cabin",ve.x,ve.z,ue+Math.PI,1),m.push({x:ve.x,y:2.9,z:ve.z,small:!0});let pt=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],qe=e.trees,Qe=l.R+8.5;for(let b=0;b<qe;b++){let K=me()*Ye,se=Math.pow(me(),1.35),te=Qe+se*46,ee=Math.sin(K)*te,_e=Math.cos(K)*te;if(Math.abs(((K-ue+Math.PI)%Ye+Ye)%Ye-Math.PI)*te<4.5&&te<Qe+30||l.grave&&Math.hypot(ee-l.grave.x,_e-l.grave.z)<8.5)continue;let de=pt[Math.floor(me()*pt.length)];pe(de,ee,_e,me()*Ye,.85+me()*.55+se*.3)}for(let b=0;b<e.scatter;b++){let K=me()*Ye,se=l.R+4.6+me()*6,te=Math.sin(K)*se,ee=Math.cos(K)*se;if(Math.abs(((K-ue+Math.PI)%Ye+Ye)%Ye-Math.PI)*se<3.5||l.grave&&Math.hypot(te-l.grave.x,ee-l.grave.z)<7)continue;let le=me();pe(le<.4?"grass-large":le<.7?"grass":"bush",te,ee,me()*Ye,.8+me()*.6)}for(let b=0;b<14;b++){let K=me()*Ye,se=l.Rp+.8+me()*1.5;pe(me()<.7?"grass":"grass-large",Math.sin(K)*se,Math.cos(K)*se,me()*Ye,.8+me()*.4)}for(let b=0;b<3;b++){let K=me()*Ye,se=l.R+24+me()*40;pe(me()<.5?"rock-large":"rock-wide",Math.sin(K)*se,Math.cos(K)*se,me()*Ye,.8+me()*1)}let z=[];for(let[b,K]of be){let[se,te]=b.split(":"),ee=wn(se,te);ee&&z.push({tpl:ee,mats:K,cast:!/grass|patch|rock-flat|bush/.test(te)})}c.add(ed(z)),L&&(oh.value=0,D=0,L=!1),U(),O=Fe,n.paint(l,v&&v.snow?{snow:!0}:null),Le(),F++,_=!0}let O=[],F=0,v=null,w=null,D=1,C=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(me=>new Te(me));function U(){if(h&&(i.remove(h),Ut(h),h=null),!Bn("props/graveyard.glb")||!l||!l.grave)return;f=!0,h=new Bt,h.name="graveyard";let me=l.grave,be=me.angle+Math.PI,pe=(H,$e)=>qt({x:me.x,z:me.z,rotY:be},H,$e),Fe=new Map,we=(H,$e,ue,lt=0,ve=1)=>{let pt=pe($e,ue);Fe.has(H)||Fe.set(H,[]),Fe.get(H).push(td(pt.x,n.heightAt(pt.x,pt.z),pt.z,be+lt,ve))},fe=Hn(66),xe=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let H=0;H<6;H++)we(xe[H],-3.2+H*1.3+(fe()-.5)*.3,-2.6+(fe()-.5)*.4,(fe()-.5)*.3,.85);we("crypt",3.6,-3.4,-.3,1),we("trunk-dead",-4.6,.6,1.1,1),we("pine-crooked",-5.2,-3.6,.4,1),we("candles",1.8,-2.4,0,1),we("pumpkin-carved",-2.2,1.9,.5,.8),we("urn",2.6,.4,0,.8),we("iron-fence-gate",0,3.2,0,1);for(let H of[-2.5,-5,2.5,5])we("iron-fence",H,3.2,0,1);let Ee=[];for(let[H,$e]of Fe){let ue=wn("graveyard",H);ue&&Ee.push({tpl:ue,mats:$e,cast:!0})}h.add(ed(Ee)),i.add(h);for(let[H,$e]of d)B(H,$e)}let R=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function G(me,be,pe,Fe){let we=d.has(me);if(be&&!we){d.set(me,{obj:null,mound:null,colorIdx:pe,born:performance.now()}),B(me,d.get(me));let fe=d.get(me);Fe&&fe.obj&&(fe.obj.userData.drop=0,fe.obj.position.y=3.2)}else if(!be&&we){let fe=d.get(me);fe.obj&&fe.obj.parent.remove(fe.obj),fe.mound&&fe.mound.parent.remove(fe.mound),d.delete(me)}}function B(me,be){var Ee,H,$e;be.obj&&(be.obj.parent&&be.obj.parent.remove(be.obj),be.obj=null),be.mound&&(be.mound.parent&&be.mound.parent.remove(be.mound),be.mound=null);let pe=a.get(me);if(!pe||!Bn("props/graveyard.glb"))return;let Fe=wn("graveyard",R[pe.seat%R.length]);if(!Fe)return;let we={x:(Ee=pe.tx)!=null?Ee:pe.cx,z:(H=pe.tz)!=null?H:pe.cz,rotY:($e=pe.trot)!=null?$e:pe.crot},fe=qt(we,pe.info.door[0]-2.75,pe.info.front+1.7),xe=Fe.clone();if(xe.position.set(fe.x,0,fe.z),xe.rotation.set(0,we.rotY+.15,0),xe.scale.setScalar(.62),xe.traverse(ue=>{ue.isMesh&&(ue.castShadow=!0,ue.receiveShadow=!0)}),xe.userData.pop=0,i.add(xe),be.obj=xe,l&&l.grave){let ue=[...d.keys()].indexOf(me),lt=wn("graveyard","grave-dirt");if(lt){let ve=l.grave,pt=ve.angle+Math.PI,qe=-3.6+ue%5*1.9,Qe=.3+Math.floor(ue/5)*2,z=qt({x:ve.x,z:ve.z,rotY:pt},qe,Qe),b=lt.clone();b.position.set(z.x,n.heightAt(z.x,z.z),z.z),b.rotation.y=pt,b.scale.setScalar(.7),i.add(b),be.mound=b}}}function oe(me,be,pe){let Fe=a.get(me);Fe&&(Fe.colorIdx!==be&&(Fe.colorIdx=be,be>=0?Fe.ownerColor.set(vn[be]):Fe.ownerColor.copy(xg),_=!0),Fe.name=pe||"")}let ie=new Te;function J(me,be,pe){let Fe=!1;if(M<1){M=Math.min(1,M+me/1.3);let fe=As(M);for(let[xe,Ee]of a){Ee.cx=Jf(Ee.sx,Ee.tx,fe),Ee.cz=Jf(Ee.sz,Ee.tz,fe);let H=Ee.trot-Ee.srot;for(;H>Math.PI;)H-=Ye;for(;H<-Math.PI;)H+=Ye;Ee.crot=Ee.srot+H*fe,Ee.removing?Ee.scale=Math.max(.01,1-fe):Ee.scale=Math.min(1,Ee.scale+me*1.2)}if(M>=1){for(let[xe,Ee]of a)Ee.removing&&a.delete(xe);y(),g&&k()}Fe=!0}else for(let fe of a.values())fe.scale<1&&(fe.scale=Math.min(1,fe.scale+me*1.5),Fe=!0);D<1&&(D=Math.min(1,D+me/.9),oh.value=D);for(let fe of d.values()){let xe=fe.obj;if(xe&&xe.userData.drop!=null){let Ee=xe.userData.drop+=me/.55;if(Ee>=1)xe.position.y=0,delete xe.userData.drop,Fe=!0;else{let H=Ee<.7?3.2*(1-Ee/.7*(Ee/.7)):Math.sin((Ee-.7)/.3*Math.PI)*.18;xe.position.y=Math.max(0,H)}}}let we=pe.lamps;for(let fe of a.values()){fe.doorHold>0&&(fe.doorHold-=me,fe.doorHold<=0&&(fe.doorTarget=0));let xe=fe.doorOpen;fe.doorOpen+=(fe.doorTarget-fe.doorOpen)*Tn(fe.doorTarget>fe.doorOpen?9:5,me),Math.abs(fe.doorOpen-xe)>5e-4&&(Fe=!0),fe.doorAngle=fe.doorOpen*1.35*fe.info.openSign;let Ee=fe.dark||fe.dead?0:Math.max(fe.litTarget,0);fe.lit+=(Ee-fe.lit)*Tn(1.6,me);let H=ut(fe.lit*(.25+.75*we),0,1);ie.copy(gg).lerp(JS,ut(pe.night*1.2,0,1)).lerp(ZS,H);let $e=fe.winColor;Math.abs(ie.r-$e.r)+Math.abs(ie.g-$e.g)+Math.abs(ie.b-$e.b)>.006&&($e.copy(ie),p=!0)}if(Fe&&(_=!0),_){for(let fe of r.values())fe.write();return _=!1,p=!1,!0}if(p){for(let fe of r.values())fe.writeColors();p=!1}return!1}function ce(me,be,pe,Fe){let we=me.lamps;if(we<.02)return;let fe=v&&v.dress==="fair";for(let xe=0;xe<m.length;xe++){let Ee=m[xe],H=.92+.08*Math.sin(be*9+xe*1.7),$e=fe?C[xe%C.length]:S;pe.add(Ee.x,Ee.y,Ee.z,Ee.small?1.4:2,$e,.85*we*H),Fe.add(Ee.x,.03,Ee.z,Ee.small?6:8.5,fe?$e:T,.3*we)}if(fe&&X)for(let xe=0;xe<X.length;xe++){let Ee=X[xe];pe.add(Ee.x,Ee.y,Ee.z,.7,C[xe%C.length],.8*we*(.8+.2*Math.sin(be*3+xe)))}for(let xe of a.values()){if(xe.scale<.9)continue;if(!xe.gp||xe.gp.x!==xe.cx||xe.gp.z!==xe.cz||xe.gp.r!==xe.crot){let ue={x:xe.cx,z:xe.cz,rotY:xe.crot};xe.gp={x:xe.cx,z:xe.cz,r:xe.crot,ln:qt(ue,xe.info.door[0]+.95,xe.info.front+.45),w:qt(ue,xe.info.frontWin[0],xe.info.frontWin[2]+.25),wp:qt(ue,xe.info.frontWin[0],xe.info.frontWin[2]+1.6)}}let Ee=xe.gp.ln,H=xe.dead?.25:1;pe.add(Ee.x,.62,Ee.z,.9,S,.9*we*H),Fe.add(Ee.x,.03,Ee.z,3.6,T,.26*we*H);let $e=xe.lit*we*(.86+.08*Math.sin(be*6.3+xe.seat*2.1)+.06*Math.sin(be*13.7+xe.seat));if($e>.02){let ue=xe.gp.w;pe.add(ue.x,1.35,ue.z,1.7,E,.5*$e);let lt=xe.gp.wp;Fe.add(lt.x,.03,lt.z,4.2,E,.22*$e)}}}let X=null,Y=!1;function j(me){let be=v;v=me&&me.id?me:null,S.set(v&&v.lamp?v.lamp:"#ffc46b"),T.set(v&&v.lamp?v.lamp:"#ff9a3c");let pe=!!(be&&be.snow)!=!!(v&&v.snow);l&&pe&&n.paint(l,v&&v.snow?{snow:!0}:null),ye(!!(v&&v.snow)),Le()}function ye(me){if(me===Y)return;Y=me;let be=pe=>{!pe||!pe.isMeshLambertMaterial||!pe.map||pe.name==="villager"||(me?(pe.userData.preFrost||(pe.userData.preFrost=pe.emissive.clone()),pe.emissive.set("#a9bad0").multiplyScalar(.22)):pe.userData.preFrost&&pe.emissive.copy(pe.userData.preFrost))};s.traverse(pe=>{pe.material&&(Array.isArray(pe.material)?pe.material:[pe.material]).forEach(be)})}function Le(){if(w&&(i.remove(w),w.traverse(we=>{(we.userData.merged||we.userData.themeGeo)&&we.geometry.dispose(),we.userData.themeMat&&we.material.dispose()}),w=null),X=null,!v||!v.dress||!l)return;w=new Bt,w.name="theme";let me=Hn(99+l.n),be=new Map,pe=(we,fe,xe,Ee,H=1)=>{be.has(we)||be.set(we,[]),be.get(we).push(td(fe,n.heightAt(fe,xe),xe,Ee,H))};if(v.dress==="harvest"){for(let xe of a.values()){if(xe.removing)continue;let Ee={x:xe.tx,z:xe.tz,rotY:xe.trot},H=qt(Ee,xe.info.door[0]-.9,xe.info.front+.7);if(pe("pumpkin",H.x,H.z,me()*Ye,.7+me()*.3),me()<.5){let $e=qt(Ee,-xe.info.hx+.5,xe.info.front+.9);pe("hay-bale",$e.x,$e.z,xe.trot+.3,.9)}}for(let xe=0;xe<6;xe++){let Ee=xe/6*Ye+.4,H=l.Rp+1.2;pe(xe%2?"pumpkin":"hay-bale",Math.sin(Ee)*H,Math.cos(Ee)*H,Ee,xe%2?.9:1)}let we=l.gateAngle+.5,fe=l.Rp+2.6;pe("cart-hay",Math.sin(we)*fe,Math.cos(we)*fe,we+1.2,1)}else if(v.dress==="fair"){let we=m.filter(Ee=>!Ee.small),fe=[],xe=[];X=[];for(let Ee=0;Ee<we.length;Ee++){let H=we[Ee],$e=we[(Ee+1)%we.length];if(Math.hypot(H.x-$e.x,H.z-$e.z)>14)continue;let ue=9;for(let lt=0;lt<ue;lt++){let ve=(lt+.15)/ue,pt=(lt+.85)/ue,qe=(lt+.5)/ue,Qe=ee=>3.25-Math.sin(ee*Math.PI)*.9,z=ee=>[H.x+($e.x-H.x)*ee,Qe(ee),H.z+($e.z-H.z)*ee],b=z(ve),K=z(pt),se=z(qe);fe.push(...b,...K,se[0],se[1]-.45,se[2]);let te=C[(Ee+lt)%C.length];for(let ee=0;ee<3;ee++)xe.push(te.r,te.g,te.b);lt%3===1&&X.push({x:se[0],y:se[1]+.05,z:se[2]})}}if(fe.length){let Ee=new Ct;Ee.setAttribute("position",new Lt(fe,3)),Ee.setAttribute("color",new Lt(xe,3)),Ee.computeVertexNormals();let H=new hn({vertexColors:!0,side:nn}),$e=new Mt(Ee,H);$e.userData.themeGeo=!0,$e.userData.themeMat=!0,w.add($e)}for(let Ee=0;Ee<5;Ee++){let H=Ee/5*Ye+.2,$e=l.Rp+1.6;pe("banner-pole",Math.sin(H)*$e,Math.cos(H)*$e,H+Math.PI,1.1)}}let Fe=[];for(let[we,fe]of be){let xe=wn("village",we);xe&&Fe.push({tpl:xe,mats:fe,cast:!0})}Fe.length&&w.add(ed(Fe)),i.add(w),Y&&(Y=!1,ye(!0))}function ze(me,be){let pe=a.get(me);pe&&(pe.litTarget=be)}function Be(me,be=1.2){let pe=a.get(me);pe&&(pe.doorTarget=1,pe.doorHold=be)}function We(me){let be=null,pe=1/0,Fe=me.origin,we=me.direction;for(let fe of a.values()){if(fe.removing)continue;let xe=Math.cos(-fe.crot),Ee=Math.sin(-fe.crot),H=Fe.x-fe.cx,$e=Fe.z-fe.cz,ue=H*xe+$e*Ee,lt=-H*Ee+$e*xe,ve=we.x*xe+we.z*Ee,pt=-we.x*Ee+we.z*xe,qe=[-fe.info.hx-.3,0,-fe.info.hz-.3],Qe=[fe.info.hx+.3,fe.info.height,fe.info.hz+1.2],z=[ue,Fe.y,lt],b=[ve,we.y,pt],K=-1/0,se=1/0;for(let te=0;te<3;te++){if(Math.abs(b[te])<1e-6){if(z[te]<qe[te]||z[te]>Qe[te]){K=1/0;break}continue}let ee=(qe[te]-z[te])/b[te],_e=(Qe[te]-z[te])/b[te];if(ee>_e){let le=ee;ee=_e,_e=le}K=Math.max(K,ee),se=Math.min(se,_e)}K<=se&&se>0&&K<pe&&(pe=K,be=fe)}return be}function Ke(){l&&U()}function Ut(me){me.traverse(be=>{be.isInstancedMesh?be.dispose():be.userData.merged&&be.geometry.dispose()})}return{root:i,houses:a,get layout(){return l},get benchSlots(){return O},get busy(){return M<1},get version(){return F},lampList:()=>m,setLayout:I,setOwner:oe,setLit:ze,setDead:G,setTheme:j,openDoor:Be,anchors:A,update:J,emitGlows:ce,pickHouse:We,onExtraLoaded:Ke,house:me=>a.get(me),tombOf:me=>d.get(me),dispose(){ye(!1);for(let me of r.values())me.dispose();o.dispose(),c&&Ut(c),h&&Ut(h),w&&w.traverse(me=>{(me.userData.merged||me.userData.themeGeo)&&me.geometry.dispose(),me.userData.themeMat&&me.material.dispose()}),jS(),oh.value=1,s.remove(i)}}}var QS=`
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
}`,eb={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function tb(s,e){return new tn({vertexShader:QS,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${eb[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var Bi=class{constructor(e,t,n=Yn){this.max=t;let i=new yi(1,1),r=new ca;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new zn(new Float32Array(t*4),4),this.col=new zn(new Float32Array(t*4),4),this.spin=new zn(new Float32Array(t),1),this.pos.setUsage(Sa),this.col.setUsage(Sa),this.spin.setUsage(Sa),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=tb(e,n),this.mesh=new Mt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let l=this.n++,c=this.pos.array,u=this.col.array;c[l*4]=e,c[l*4+1]=t,c[l*4+2]=n,c[l*4+3]=i,u[l*4]=r.r,u[l*4+1]=r.g,u[l*4+2]=r.b,u[l*4+3]=o,this.spin.array[l]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},yg=`
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
}`,Mg=`
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
}`,nb=`
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
}`,ib=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function Sg(s){let e=new Bt;e.name="campfire-fx";let t=[],n=new yi(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,m,,_,p]=i[f],g=new tn({vertexShader:yg,fragmentShader:Mg,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:nn,fog:!1}),M=new Mt(n,g);M.position.set(d,.32,m),M.scale.set(_,p,1),M.renderOrder=6,M.frustumCulled=!1,e.add(M),t.push(M)}let r=s.sparks,o=Hn(5),a=new Float32Array(r*3),l=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,l[f*4]=o(),l[f*4+1]=o(),l[f*4+2]=o(),l[f*4+3]=o()*1.2;let c=new Ct;c.setAttribute("position",new yt(a,3)),c.setAttribute("aSeed",new yt(l,4));let u=new tn({vertexShader:nb,fragmentShader:ib,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),h=new vi(c,u);return h.frustumCulled=!1,h.renderOrder=7,e.add(h),{group:e,update(f,d,m){for(let _ of t)_.material.uniforms.uTime.value=f,_.material.uniforms.uPower.value=m;u.uniforms.uTime.value=f,u.uniforms.uPx.value=d,u.uniforms.uPower.value=Math.min(1,m*1.2)},dispose(){n.dispose(),c.dispose(),u.dispose();for(let f of t)f.material.dispose()}}}var sb=`
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
}`,rb=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function bg(s){let e=Hn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Ct;i.setAttribute("position",new yt(t,3)),i.setAttribute("aSeed",new yt(n,4));let r=new tn({vertexShader:sb,fragmentShader:rb,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new vi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,l){let c=Hn(123);for(let u=0;u<s;u++){let h=c()*Ye,f=a+c()*(l-a);t[u*3]=Math.cos(h)*f,t[u*3+1]=.6+c()*2.2,t[u*3+2]=Math.sin(h)*f}i.getAttribute("position").needsUpdate=!0},update(a,l,c){r.uniforms.uTime.value=a,r.uniforms.uPx.value=l,r.uniforms.uAlpha.value=c,o.visible=c>.01},dispose(){i.dispose(),r.dispose()}}}var ch=class{constructor(e=96){this.max=e,this.normal=new Bi("puff",e,Si),this.add=new Bi("glow",e,Yn),this.list=[],this.tmp=new Te,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new Te(r):new Te(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),l=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let c=0;c<o;c++){let u=Math.random()*Ye,h=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,m=.25+Math.random()*.3,_=a;e==="poof"&&(m=.35+Math.random()*.35),e==="dust"&&(h=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,m=.14+Math.random()*.1),e==="bubble"&&(h=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),m=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(h=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,m=.45+Math.random()*.4),e==="confetti"&&(h=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,m=.1+Math.random()*.08,_=new Te(l[c%l.length])),this.list.push({kind:e,x:t+Math.cos(u)*.2,y:n+Math.random()*.4,z:i+Math.sin(u)*.2,vx:Math.cos(u)*h,vy:f,vz:Math.sin(u)*h,t:0,life:d,size:m,c:_})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},lh=null;function wg(s=.35,e=.6,t=1){lh||(lh=new yi(1,1),lh.translate(0,.5,0));let n=new tn({vertexShader:yg,fragmentShader:Mg,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:nn,fog:!1}),i=new Mt(lh,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var ob=`
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
}`,ab=`
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
}`;function Tg(s){let t=Hn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let m=0;m<900;m++)n[m*3]=(t()-.5)*46,n[m*3+1]=t()*18,n[m*3+2]=(t()-.5)*46,i[m*4]=t(),i[m*4+1]=t(),i[m*4+2]=t(),i[m*4+3]=t();let r=new Ct;r.setAttribute("position",new yt(n,3)),r.setAttribute("aSeed",new yt(i,4));let o=new tn({vertexShader:ob,fragmentShader:ab,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new V}}}),a=new vi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let l=new Bi("puff",40,Si);l.mesh.renderOrder=4,s.add(l.mesh);let c=[];for(let m=0;m<40;m++)c.push({a:t()*Ye,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let u="none",h=0,f=0,d=new Te("#c9cfd8");return{set(m){u=m||"none"},get kind(){return u},update(m,_,p,g,M,L,S){if(h+=((u==="snow"||u==="leaves"?1:0)-h)*Math.min(1,m*.8),a.visible=h>.01&&M>0,a.visible){r.setDrawRange(0,Math.min(900,M));let x=o.uniforms;x.uTime.value=_,x.uPx.value=p,x.uKind.value=u==="leaves"?1:0,x.uAlpha.value=h*(u==="snow"?.9:1),x.uCenter.value.copy(g)}if(f+=((u==="fog"?1:0)-f)*Math.min(1,m*.5),l.begin(),f>.01){d.set("#cfd6de"),L&&d.lerp(L,.5),d.multiplyScalar(1-S*.6);let x=Math.min(40,Math.max(8,Math.round(M/20)));for(let y=0;y<x;y++){let I=c[y],A=I.a+_*I.sp;l.add(Math.sin(A)*I.r,I.y,Math.cos(A)*I.r,I.s,d,.16*f)}}l.end(_)},dispose(){r.dispose(),o.dispose(),l.dispose(),s.remove(a),s.remove(l.mesh)}}}var Pa=1.12,od=1.75,lb={walk:od,brisk:2.35,sneak:1.5,sprint:3.4,stroll:1.3};var zT=new V,rd=null,wi=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Bt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*Pa,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ut(e.skin|0,0,11),n=ki(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=Jc(n.scene),r=po("cloth",vn[ut(e.color|0,0,19)]),o=null;i.traverse(c=>{if(c.isMesh){if(c.material.name==="cloth"&&r)c.material=r;else if(c.isSkinnedMesh&&c.userData.clothMerged&&c.material.name==="villager"){let u=Wf(vn[ut(e.color|0,0,19)]);u&&(c.material=u)}c.castShadow=!0,c.receiveShadow=!1,c.isSkinnedMesh?(o?c.skeleton!==o&&c.skeleton.bones.length===o.bones.length&&(c.skeleton.dispose(),c.skeleton=o):o=c.skeleton,c.boundingSphere=new Kt(new V(0,.3,-.15),.85),c.frustumCulled=!0):c.frustumCulled=!1}});let a=i.getObjectByName("head"),l=Kf[e.hat|0];if(a&&l&&Bn("hats/hats.glb")){let c=ki("hats/hats.glb").scene.getObjectByName(l);if(c){let u=c.clone();u.position.set(0,sg[t]||0,0),u.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1)}),a.add(u)}}i.scale.multiplyScalar(Pa),this.model=i,this.root.add(i),this.mixer=new bs(i),this.clips=Xf(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*Pa}buildGhost(e){let t=ki("characters/ghost.glb"),n=t.scene.clone(!0),i=po("tint-ghost",vn[ut(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(vn[e.color|0]).multiplyScalar(.25));let r=Vf("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(Pa*.95),this.model=n,this.root.add(n),this.mixer=new bs(n),rd||(rd=t.animations),this.clips=rd,this.headY=1.95*Pa}action(e){if(this.actions[e])return this.actions[e];let t=Mi.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(_a,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(_a,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk"){this.path=e.slice(),this.mode=t}setVisible(e){this.visible=e,this.root.visible=e}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let c=Math.atan2(l.x,l.z);this.yaw+=_n(c-this.yaw)*Tn(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>2.3?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],c=l.x-this.pos.x,u=l.z-this.pos.z,h=Math.hypot(c,u),f=this.path.length===1;if(this.bestD==null||h<this.bestD-.05?(this.bestD=h,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,h<(f?.06:.45)||this.stuckT>.7&&(!f||h<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=lb[this.mode]||od,f&&(n=Math.min(n,.6+h*2.2));let d=c,m=u;if(!f&&h<1.2){let y=this.path[1],I=1-h/1.2;d=c*(1-I)+(y.x-this.pos.x)*I,m=u*(1-I)+(y.z-this.pos.z)*I}let _=Math.atan2(d,m);this.yaw+=_n(_-this.yaw)*Tn(9,e);let p=Math.min(h,this.speed*e),g=Math.sin(this.yaw),M=Math.cos(this.yaw),L=c/h,S=u/h,T=g*.55+L*.45,E=M*.55+S*.45,x=Math.hypot(T,E)||1;this.pos.x+=T/x*p,this.pos.z+=E/x*p}}else this.faceYaw!=null&&(this.yaw+=_n(this.faceYaw-this.yaw)*Tn(4,e));this.speed+=(n-this.speed)*Tn(n>this.speed?6:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let i=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(i){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=i?ut(this.speed/od,.5,1.6)*(this.base==="sneak"?1.25:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=i?ut(this.speed/3.2,.6,1.4):1),i&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!i&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let r=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let c=l.t>=l.dur;r=Math.min(1,l.t/l.fade)*(c?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),c&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),r=0)}let o=0;for(let l in this.weights){let c=this.targets[l]||0,u=this.weights[l],h=this.fadeRate*e;u=u<c?Math.min(c,u+h):Math.max(c,u-h),this.weights[l]=u,o+=u}let a=o>1e-4?(1-r)/o:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let c=this.actions[l];c?c.setEffectiveWeight(this.weights[l]*a):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(r),this.animAcc=(this.animAcc||0)+e,this.animTick=((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0&&(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let c=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ut(_n(c-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*Tn(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}i&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk"),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var La=new V(0,0,-620);function En(s,e,t,n,i,r,o=0,a=1){let l=wn(e,t);if(!l)return null;let c=l.clone();return c.position.set(n,i,r),c.rotation.set(0,o*Math.PI/180,0),c.scale.setScalar(a),c.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.receiveShadow=!1)}),s.add(c),c}function Eg(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,l=null,c=null,u=[],h={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!Bn("interior/furniture.glb")||!Bn("interior/clues.glb"))return t;e=new Bt,e.name="interior",e.position.copy(La),e.visible=!1,s.scene.add(e);for(let v of[-2.5,0,2.5])for(let w of[-2.5,0,2.5])En(e,"furniture","floor-planks",v,0,w);for(let v of[-2.5,0,2.5])En(e,"furniture",v===0?"wall-wood-window":"wall-wood",v,0,-2.5,90);for(let v of[-2.5,0,2.5])En(e,"furniture",v===-2.5?"wall-wood-window":"wall-wood",-2.5,0,v,180);for(let v of[-2.5,0,2.5])En(e,"furniture",v===0?"wall-wood-door":"wall-wood",2.5,0,v,0);let I=new Mt(new yi(40,40),new hn({color:"#3f5a34"}));I.rotation.x=-Math.PI/2,I.position.y=-.02,e.add(I);let A=En(e,"furniture","bed",h.bed.x,0,h.bed.z);A&&A.traverse(v=>{v.isMesh&&v.material&&v.material.name==="carpet"&&(a||(a=v.material.clone()),v.material=a)}),l=En(e,"furniture","rug-round",h.rug.x,.01,h.rug.z),En(e,"furniture","table",1.6,0,-1.5),En(e,"furniture","chair",1.6,0,-.3,180),En(e,"furniture","candle",1.2,.79,-1.6),En(e,"clues","mug",1.85,.79,-1.35),En(e,"clues","bread",2.1,.79,-1.75),c=En(e,"furniture","chest",-.3,0,-2.8),En(e,"furniture","bookcase",-3.4,0,1.2,90),En(e,"furniture","lantern",h.lantern.x,0,h.lantern.z),En(e,"furniture","coat-rack",3.05,0,-2),En(e,"furniture","plant-pot",2.9,0,-3.05),En(e,"furniture","barrel",-3,0,3,0,.8),o=new hn({color:"#c9b48a",side:nn});let O=new Mt(new _i(.9,1.25,.04),o);O.position.set(1.55,1.75,-3.42),e.add(O);let F=new Mt(new ns(.03,.03,1.1,6),new hn({color:"#5a3a22"}));return F.rotation.z=Math.PI/2,F.position.set(1.55,2.4,-3.4),e.add(F),t=!0,!0}let d=new V;function m(I,A=0){var k;return d.set(La.x+I.x,La.y+((k=I.y)!=null?k:A),La.z+I.z).clone()}function _(I){if(!f())return!1;n=I;let A=vn[ut((I.look&&I.look.color)|0,0,19)];return o.color.set(A),a&&a.color.set(A).lerp(new Te("#ffffff"),.25),i&&(i.dispose(),i=null),I.look&&(i=new wi(s,"room-sleeper",I.look),i.setBase("lie",0),i.pos.copy(m(h.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),p(),!0}function p(){l&&(l.position.set(h.rug.x,.01,h.rug.z),l.rotation.set(0,0,0));for(let I of u.splice(0))I.parent&&I.parent.remove(I)}function g(I){return _(I)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function M(){e&&(e.visible=!1),i&&(i.dispose(),i=null),T(),p(),n=null}function L(I,A,k,O,F=0){S(I);let v=new wi(s,"room-"+I,A);return v.pos.copy(m(O)),v.yaw=F,v.root.rotation.y=F,s.scene.add(v.root),r.set(I,{ch:v,name:k,color:A.color|0,label:!!k}),v}function S(I){let A=r.get(I);A&&(A.ch.dispose(),r.delete(I))}function T(){for(let I of[...r.keys()])S(I)}function E(I){return e.add(I),u.push(I),I}function x(I,A){if(!(!e||!e.visible)){i&&(i.update(I,A),i.root.position.y=La.y+h.sleeper.y+Math.sin(A*1.7)*.015);for(let k of r.values())k.ch.update(I,A)}}function y(I,A){return I==="window"?{pos:m({x:A?-6.9:-6.3,y:1.75,z:A?-2.95:-3}),look:m({x:-1.6,y:.9,z:-2.1}),fov:A?56:42}:I==="search"?{pos:m({x:A?.5:3.4,y:A?9:4.6,z:A?4.3:5.6}),look:m({x:-.5,y:.3,z:-.7}),fov:A?58:48}:{pos:m({x:A?.4:3.6,y:A?9.2:4.9,z:A?4.1:5.9}),look:m({x:A?-.45:-.9,y:.3,z:A?-.75:-1.1}),fov:A?58:48}}return{L:h,W:m,show:g,hide:M,dress:_,update:x,shot:y,addActor:L,removeActor:S,clearActors:T,addTemp:E,resetProps:p,get visible(){return!!(e&&e.visible)},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return l},get chest(){return c},lanternWorld(){return m(h.lantern)},dispose(){M(),e&&(s.scene.remove(e),e.traverse(I=>{I.geometry&&!I.geometry.userData.shared&&(I.geometry.type==="PlaneGeometry"||I.geometry.type==="BoxGeometry"||I.geometry.type==="CylinderGeometry")&&I.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var xr={cancelled:!0},Ag=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,go=s=>1-Math.pow(1-s,3);function hh(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===xr&&s.preventDefault()}));function Rg(s){let e=new Map,t=null,n=!1,i=0;function r(h,f,d){typeof f=="function"&&(d=f,f=null),e.set(f?h+":"+f:h,d)}function o(h){return e.get(h.kind+":"+(h.scene||""))||e.get(h.kind)}function a(h){return new Promise(f=>{if(n||!h||!h.kind){f();return}c();let d=o(h);if(!d){f();return}let m=++i;["death","hanged","shot","left"].includes(h.kind)&&s.holdDeaths((h.targets||[]).map(g=>g.id).filter(Boolean));let _=u(m,h),p={msg:h,resolve:f,ctx:_};t=p,(async()=>{try{await Promise.race([d(_,h),_.timeout(13)])}catch(g){g!==xr&&console.warn("[VKWorld] sinematik hatas\u0131",g)}l(p)})()})}function l(h){if(!h.done){h.done=!0;try{h.ctx.cleanup()}catch(f){console.warn("[VKWorld] sinematik temizli\u011Fi",f)}t===h&&(t=null),h.resolve()}}function c(){if(t){let h=t;h.ctx.cancel(),l(h)}}function u(h,f){let d=new Map,m=new Set,_=new Set,p=[],g=[],M=!1,L=!1,S=!1,T=()=>!n&&!M&&h===i,E={world:s,msg:f,alive:T,cancel(){M=!0;for(let x of _)x.reject(xr);_.clear()},wait(x){return T()?hh(new Promise((y,I)=>{let A={resolve:y,reject:I,left:x};_.add(A),s.ticker.push(k=>_.has(A)?(A.left-=k,A.left<=0?(_.delete(A),y(),!0):!1):!0)})):hh(Promise.reject(xr))},timeout(x){return new Promise(y=>{let I=setTimeout(y,x*1e3);m.add(I)})},tween(x,y,I=Ag){return T()?hh(new Promise((A,k)=>{let O=0,F={resolve:A,reject:k};_.add(F),s.ticker.push(v=>{if(!_.has(F))return!0;O=Math.min(x,O+v);try{y(I(x>0?O/x:1),v)}catch(w){console.warn(w)}return O>=x?(_.delete(F),A(),!0):!1})})):hh(Promise.reject(xr))},shot(x,y,I={}){T()&&s.rig.setOverride({pos:x.clone(),look:y.clone(),fov:I.fov||40,k:I.k||2.4})},cut(x,y,I={}){T()&&s.rig.setOverride({pos:x.clone(),look:y.clone(),fov:I.fov||40,k:60},!0)},move(x,y,I,A,k,O={}){let F=new V,v=new V;return E.cut(x,y,O),E.tween(k,w=>{F.lerpVectors(x,I,w),v.lerpVectors(y,A,w),s.rig.setOverride({pos:F,look:v,fov:O.fov||40,k:60},!0)},O.ease||Ag)},claim(x){let y=s.chars.get(x);return y?(d.has(y)||(d.set(y,{x:y.pos.x,y:y.pos.y,z:y.pos.z,yaw:y.yaw,visible:y.visible,inside:y.inside,peeking:y.peeking,base:y.base}),y.claimed=!0,y.run([])),y):null},add(x,y){return(y||s.scene).add(x),p.push(x),x},prop(x,y,I,A,k,O=0,F=1){let v=s.assets.prop(x,y);if(!v)return null;let w=v.clone();return w.position.set(I,A,k),w.rotation.y=O,w.scale.setScalar(F),w.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),E.add(w)},actor(x,y,I,A,k=0,O){let F=s.makeActor(x,y,O);return F.pos.set(I,0,A),F.yaw=k,F.root.rotation.y=k,p.push({dispose:()=>s.dropActor(F)}),F},hideObj(x){x&&x.visible&&(x.visible=!1,g.push(x))},tod(x,y){S=!0,s.setTodOverride(x,y)},room(){return L=!0,s.room},fx:s.fx,sfx:(x,y)=>s.sfx(x,y),flash:(x,y)=>s.flash(x,y),cleanup(){M=!0;for(let x of m)clearTimeout(x);for(let x of _)x.reject(xr);_.clear();for(let x of p.splice(0))x.dispose&&!x.isObject3D?x.dispose():x.parent&&x.parent.remove(x),x.userData&&x.userData.cleanup&&x.userData.cleanup();for(let x of g.splice(0))x.visible=!0;for(let[x,y]of d)x.claimed=!1,x.dropProps(),x.pos.set(y.x,y.y,y.z),x.yaw=y.yaw,x.inside=y.inside,x.peeking=y.peeking,x.alive!==!1&&x.setVisible(y.visible&&!s.isDeadShown(x.id)),x.setBase(y.base==="walk"||y.base==="sprint"||y.base==="sneak"?"idle":y.base||"idle",.2),x.run([]);s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),S&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null),d.size&&(d.clear(),s.reapply(!0))}};return E}return{register:r,announce:a,CANCEL:xr,get running(){return!!t},get current(){return t?t.msg:null},skip(){c()},reset(){i++,c(),s.rig.setOverride(null)},dispose(){n=!0,i++,c()}}}var at=(s,e,t)=>new V(s,e,t),Na=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function Cg(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(v,w={}){var j;let D=e.houseAnchors(v);if(!D)return null;let C=w.back,U=C?D.backWin:{x:(D.door.x+D.frontWin.x)/2,z:(D.door.z+D.frontWin.z)/2},R=C?D.peek:D.approach,G=C?D.backWin:D.door,B=R.x-G.x,oe=R.z-G.z,ie=Math.hypot(B,oe)||1,J=(w.dist||11)*(e.rig.portrait?1.3:1),ce=(j=w.side)!=null?j:.18,X=-oe/ie*ce,Y=B/ie*ce;return{pos:at(U.x+(B/ie+X)*J,w.height||7.2,U.z+(oe/ie+Y)*J),look:at(U.x,w.lookY||1.8,U.z),a:D}}function r(v,w={}){let D=e.camera.position,C=D.x-v.x,U=D.z-v.z,R=Math.hypot(v.x,v.z);e.village.layout&&R>e.village.layout.Rp*.8&&(C=-v.x,U=-v.z),w.dir&&(C=w.dir.x,U=w.dir.z);let G=Math.hypot(C,U)||1,B=(w.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:at(v.x+C/G*B,w.height||3,v.z+U/G*B),look:at(v.x,w.lookY||1.1,v.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,l=()=>e.rig.portrait?1.6:1;function c(v,w,D){let C=0;e.ticker.push(U=>{if(!v.alive())return!0;if(C+=U,C<w)return!1;try{D()}catch(R){console.warn("[VKWorld]",R)}return!0})}async function u(v,w,D,C,U=.3,R=2.2){if(!Bn("characters/ghost.glb")||!w)return;let G=v.actor(w,"",D,C,0,"ghost");G.root.position.y=U,v.sfx("poof",{volume:.5}),await v.tween(R,B=>{G.root.position.y=U+B*2.3,G.yaw+=.02;let oe=1.3*(1-Math.max(0,B-.75)*3);G.root.scale.setScalar(Math.max(.05,oe))},go),e.fx.emit("magic",D,U+2.6,C,vn[w.color|0],12),G.setVisible(!1)}function h(v,w){e.markDead(w,{drop:!0});let D=e.houseAnchors(w);D&&c(v,.38,()=>e.fx.emit("poof",D.tomb.x,.2,D.tomb.z,"#b8a890",10)),v.sfx("poof",{volume:.6})}function f(v,w,D,C,U=10,R=2.4,G=3.5,B={x:0,z:-1},oe=1){if(!Bn("characters/bat.glb"))return Promise.resolve();let ie=ki("characters/bat.glb").scene.children[0],J=[];for(let X=0;X<U;X++){let Y=ie.clone(!0);Y.scale.setScalar((1+Math.random()*.5)*oe),v.add(Y),J.push({b:Y,a:X/U*Ye,r:G*(.6+Math.random()*.6),h:D+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:Y.getObjectByName("wing-left"),wr:Y.getObjectByName("wing-right"),ph:Math.random()*6})}v.sfx("whoosh",{volume:.6});let ce=0;return v.tween(R,(X,Y)=>{ce+=Y;let j=Math.max(0,X-.55)/.45;for(let ye of J){ye.a+=ye.sp*Y;let Le=ye.r*(1+j*5),ze=w+Math.sin(ye.a)*Le+B.x*j*j*25,Be=C+Math.cos(ye.a)*Le+B.z*j*j*25,We=ye.h+Math.sin(ce*3+ye.ph)*.4+j*8;ye.b.position.set(ze,We,Be),ye.b.rotation.y=ye.a+Math.PI/2;let Ke=Math.sin(ce*22+ye.ph)*.9;ye.wl&&(ye.wl.rotation.z=Ke),ye.wr&&(ye.wr.rotation.z=-Ke)}},X=>X)}function d(v,w,D,C){if(!Bn("characters/vampire.glb"))return null;let U=ki("characters/vampire.glb"),R=U.scene.clone(!0);R.scale.multiplyScalar(1.05),R.position.set(w,0,D),R.rotation.y=C,v.add(R);let G=new bs(R),B=null,oe=J=>{let ce=Mi.findByName(U.animations,J);if(!ce)return;let X=G.clipAction(ce);B&&B!==X&&B.fadeOut(.15),X.reset().fadeIn(.15).play(),B=X};oe("idle"),e.ticker.push(J=>R.parent?(G.update(J),!1):(G.stopAllAction(),!0));let ie=m(.5,"#ff2244");return ie.position.set(0,1.85,.25),R.add(ie),{root:R,play:oe}}function m(v,w){let D=p(),C=new Jr({map:D,color:w,transparent:!0,depthWrite:!1,blending:Yn,fog:!1}),U=new qo(C);return U.scale.setScalar(v),U.userData.cleanup=()=>C.dispose(),U}let _=null;function p(){if(_)return _;let v=document.createElement("canvas");v.width=v.height=64;let w=v.getContext("2d"),D=w.createRadialGradient(32,32,0,32,32,32);return D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.35,"rgba(255,255,255,0.45)"),D.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=D,w.fillRect(0,0,64,64),_=new Qs(v),_.colorSpace=Ft,_}function g(v){let w=new Bt,D=new Mt(new ns(.05,.06,.9,6),new hn({color:"#6b4426"}));D.position.y=.2,w.add(D);let C=new Mt(new ns(.1,.07,.16,6),new hn({color:"#3a2a20"}));C.position.y=.66,w.add(C);let U=wg(.38,.62,Math.random()*9);U.position.y=.7,w.add(U);let R=m(1.3,"#ffb347");return R.position.y=.95,w.add(R),e.ticker.push(()=>!w.parent&&w.userData.used?!0:(U.userData.tick(e.time),!1)),w.userData.holdScale=1/1.12/2.5*1,w.userData.used=!0,w.userData.cleanup=()=>{D.geometry.dispose(),D.material.dispose(),C.geometry.dispose(),C.material.dispose(),U.userData.cleanup(),R.userData.cleanup()},w}function M(v,w,D=1){let C=wn(v,w);if(!C)return null;let U=C.clone();return U.userData.holdScale=1/(1.12*2.5)*D,U}function L(v=[],w=10){let D=[];for(let[C,U]of e.chars)if(!(!U.visible||v.includes(C)||U.isGhost)&&(D.push(U),D.length>=w))break;return D}function S(v,w){for(let D of v)D.faceYaw=Math.atan2(w.x-D.pos.x,w.z-D.pos.z),D.gaze(w,6,e.time)}function T(v,w,D=4){for(let C of v)C.gaze(w,D,e.time)}s.register("start",async v=>{let w=t(),D=L([],20);v.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let C=at(0,w*1.1,w*1.3),U=at(0,.4,0),R=at(w*.3,4.8,w*.8+2),G=at(0,1,0);c(v,.9,()=>T(D,e.camera.position,4)),await v.move(C,U,R,G,3,{fov:o()+4});for(let B of D)Math.random()<.6&&B.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await v.wait(1.6)}),s.register("night",async v=>{let w=t(),D=L([],20);for(let C of D)Math.random()<.7&&C.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});v.tod(21),v.sfx("whoosh",{volume:.5}),await v.move(at(0,3.2,w*.75),at(0,1.2,0),at(0,w*.55,w*1.15),at(0,w*.9,-w*2.5),3.6,{fov:o()+6}),await v.wait(.6)}),s.register("death",async(v,w)=>{let D=(w.targets||[]).slice(0,2);v.tod(5.7);for(let C of D){let U=C.cause==="zehir"?"poison":["bite","bats","vanish"].includes(C.scene)?C.scene:"bite";await E(v,C.id,U,D.length>1?.8:1)}});async function E(v,w,D,C){let U=i(w,{dist:11,height:7.4,side:.2,lookY:2.2});if(!U)return;let R=U.a,G=e.playerById(w),B=G?G.look:null,oe=at(U.pos.x*.88+R.door.x*.12,U.pos.y-1.2,U.pos.z*.88+R.door.z*.12);if(v.cut(U.pos,U.look,{fov:o()}),v.move(U.pos,U.look,oe,U.look,3.4*C,{fov:o()}),D==="bite"){await v.wait(.4*C),e.village.openDoor(w,1.2),v.sfx("door");let X=d(v,R.inside.x,R.inside.z,Math.atan2(R.approach.x-R.inside.x,R.approach.z-R.inside.z));X&&(X.play("sprint"),await v.tween(.9*C,Y=>{X.root.position.x=R.inside.x+(R.approach.x-R.inside.x)*1.6*Y,X.root.position.z=R.inside.z+(R.approach.z-R.inside.z)*1.6*Y},Y=>Y),e.fx.emit("smoke",X.root.position.x,.8,X.root.position.z,"#2a2238",16),X.root.visible=!1,v.sfx("bite"),f(v,X.root.position.x,1.6,X.root.position.z,8,1.6,1.2,{x:R.approach.x-R.door.x,z:R.approach.z-R.door.z})),await v.wait(.6*C)}else if(D==="bats")v.sfx("bite"),e.flash(.35,"#d7263d"),await f(v,(R.door.x+R.backWin.x)/2,3.2,(R.door.z+R.backWin.z)/2,14,2.2*C,3.6,{x:R.approach.x-R.door.x,z:R.approach.z-R.door.z});else if(D==="vanish"){await v.wait(.3),e.village.openDoor(w,1.6);for(let X=0;X<4;X++)e.fx.emit("mist",R.door.x,.4+X*.3,R.door.z,"#9b7bff",10),await v.wait(.25*C);v.sfx("whoosh"),e.flash(.3,"#7048e8"),await v.wait(.4*C)}else if(D==="poison"){v.sfx("potion");for(let X=0;X<6;X++)e.fx.emit("bubble",R.frontWin.x,1.3,R.frontWin.z,"#94d82d",6),e.fx.emit("smoke",R.door.x*.6+R.backWin.x*.4,4.6,R.door.z*.6+R.backWin.z*.4,"#6f8a3a",3),await v.wait(.22*C);e.flash(.35,"#5fbf2a")}let ie=R.door.x*.4+R.approach.x*.6,J=R.door.z*.4+R.approach.z*.6,ce=u(v,B,ie,J,.2,2.2*C);await v.wait(.7*C),h(v,w),await ce,await v.wait(.2)}s.register("safe",async v=>{let w=t();v.tod(5.4,!0),c(v,.05,()=>v.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((C,U)=>c(v,.7+U*.26,()=>e.village.openDoor(C,1.4))),await v.move(at(-w*.9,w*.45,w*.95),at(0,2,0),at(w*.55,w*.55,w*1),at(w*1.6,4,-w*.6),4.6,{fov:o()+4}),await v.wait(.3)}),s.register("nohang",async v=>{let w=t(),D=L([],20);T(D,at(0,1,0),4),D.forEach((C,U)=>c(v,U*.09,()=>C.playOnce("emote-no",{timeScale:.9}))),await v.move(at(0,4,w*.55),at(0,1,0),at(0,w*.8,w*1.15),at(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async v=>{let w=t(),D=L([],20).map(C=>v.claim(C.id)).filter(Boolean);for(let C of D)C.setBase(Math.random()<.5?"sit":"warm",.5);v.tod(19.6),await v.move(at(0,3.4,w*.7),at(0,1,0),at(0,w*.45,w*1.05),at(0,w*.8,-w*2.5),4,{fov:o()+6})}),s.register("left",async(v,w)=>{let[D]=Na(w),C=D&&e.chars.get(D);if(C&&C.visible){v.claim(D);let U=r(C.pos,{dist:6});v.shot(U.pos,U.look,{fov:o()}),C.faceYaw=Math.atan2(e.camera.position.x-C.pos.x,e.camera.position.z-C.pos.z),await v.wait(.6),C.playOnce("emote-yes",{timeScale:.8}),await v.wait(1.4),e.fx.emit("mist",C.pos.x,.4,C.pos.z,"#c9c2d3",22),v.sfx("whoosh"),e.markDead(D,{quiet:!0}),C.setVisible(!1),await v.wait(1.4)}else if(D){let U=i(D,{dist:10});U&&(v.shot(U.pos,U.look,{fov:o()}),await v.wait(1),e.fx.emit("mist",U.a.door.x,.6,U.a.door.z,"#c9c2d3",20),h(v,D),await v.wait(1.6))}}),s.register("hanged",async(v,w)=>{let[D]=Na(w),C=["gallows","exile","cellar"].includes(w.scene)?w.scene:"gallows",U=D&&e.chars.get(D);if(!U){await v.wait(1.5);return}v.claim(D),U.setVisible(!0);let R=L([D],40).map(B=>v.claim(B.id)).filter(Boolean),G=R.slice(0,9);for(let B of R.slice(9))B.setVisible(!1);C==="gallows"?await I(v,U,G,D):C==="exile"?await A(v,U,G,D):await k(v,U,G,D)});function x(v,w){let D=n(),C=D.gateAngle+v,U=D.Rp*w;return{x:Math.sin(C)*U,z:Math.cos(C)*U,a:C}}function y(v,w,D,C,U={}){let R=v.length,G=U.spread||2.2;v.forEach((B,oe)=>{let ie=C+(U.front?0:Math.PI)+(oe-(R-1)/2)/Math.max(1,R)*G;B.pos.set(w.x+Math.sin(ie)*D+(Math.random()-.5)*.4,0,w.z+Math.cos(ie)*D+(Math.random()-.5)*.4),B.yaw=Math.atan2(w.x-B.pos.x,w.z-B.pos.z),B.faceYaw=B.yaw,B.gaze(w,8,e.time)})}async function I(v,w,D,C){let U=x(.25,.82),R=U.a+Math.PI;v.prop("village","platform-wood",U.x,0,U.z,R,1),v.prop("village","frame-wood",U.x,1.18,U.z,R,1);let G={x:Math.sin(R),z:Math.cos(R)},B={x:Math.cos(R),z:-Math.sin(R)};v.prop("village","ladder",U.x+G.x*1.5+B.x*.6,0,U.z+G.z*1.5+B.z*.6,R,.8);let oe=new Mt(new ns(.035,.035,1,6),new hn({color:"#c8a46a"}));oe.position.set(U.x,1.18+2.35-.5,U.z);let ie=new Mt(new sa(.16,.035,6,12),oe.material);ie.position.set(U.x,1.18+1.75,U.z),ie.userData.cleanup=()=>{oe.geometry.dispose(),ie.geometry.dispose(),oe.material.dispose()},v.add(oe),v.add(ie);let J=e.rig.portrait;y(D,{x:U.x,z:U.z},J?3.3:4.4,R,{front:!0,spread:J?2:2.3});let ce={x:U.x+G.x*1.9+B.x*2.6,z:U.z+G.z*1.9+B.z*2.6};w.pos.set(ce.x,0,ce.z),w.yaw=Math.atan2(-B.x,-B.z),w.faceYaw=w.yaw;let X=J?11.5:9,Y=J?3.2:4,j=at(U.x+G.x*X+B.x*Y,J?8.4:6.4,U.z+G.z*X+B.z*Y),ye=at(U.x+G.x*(X-1.6)+B.x*Y*.8,J?7.4:5.6,U.z+G.z*(X-1.6)+B.z*Y*.8);v.move(j,at(U.x+G.x*.4,J?1.3:1.5,U.z+G.z*.4),ye,at(U.x+G.x*.3,J?1.7:1.9,U.z+G.z*.3),4.2,{fov:a()}),w.run([{walk:[{x:U.x+G.x*1.6,z:U.z+G.z*1.6}],mode:"walk"}]),await v.wait(1.4),await v.tween(.5,Be=>{w.pos.y=Be*1.2,w.pos.x=U.x+G.x*1.6*(1-Be),w.pos.z=U.z+G.z*1.6*(1-Be)}),w.run([]),w.faceYaw=R,w.yaw=R,w.setBase("idle",.2),await v.wait(.5),w.playOnce("emote-no",{timeScale:.9}),v.sfx("hang",{volume:.7}),await v.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",w.pos.x,1.4,w.pos.z,null,26),v.sfx("poof"),w.setVisible(!1);for(let Be of D)Math.random()<.6&&Be.playOnce(Math.random()<.5?"emote-no":"interact-right");let Le=e.playerById(C),ze=u(v,Le&&Le.look,U.x,U.z,1.4,1.8);e.markDead(C,{quiet:!0,drop:!0}),await ze}async function A(v,w,D,C){let U=n(),R=U.gateAngle,G=(Be,We=0)=>({x:Math.sin(R+We/Be)*Be,z:Math.cos(R+We/Be)*Be}),B=G(U.R+2),oe=G(U.R-.6),ie=e.fogBoost(.35),J=R+Math.PI/2,ce=v.prop("graveyard","iron-fence-gate",B.x,0,B.z,J,1);w.pos.set(oe.x,0,oe.z),w.yaw=R,w.faceYaw=R;let X=D.slice(0,6);X.forEach((Be,We)=>{let Ke=(We-(X.length-1)/2)*1.1,Ut=G(U.R-3.3-We%2*1,Ke*(e.rig.portrait?.75:1));Be.pos.set(Ut.x,0,Ut.z),Be.yaw=R,Be.faceYaw=R,We%2===0?(Be.hold(g(v),"right",[0,-.12,.02]),Be.setBase("hold",.2)):Be.hold(M("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let Be of D.slice(6))Be.setVisible(!1);let Y=e.rig.portrait,j=G(Math.max(U.R-(Y?12.5:11),3.4),Y?1.8:-3),ye=Y?8.2:6;v.cut(at(j.x,ye,j.z),at(B.x,1.2,B.z),{fov:a()});let Le=G(U.R+14);w.run([{walk:[B,Le],mode:"walk"}]),X.forEach((Be,We)=>{let Ke=G(U.R-1.2-We%2*.9,(We-2.5)*1.1);Be.run([{wait:.4},{walk:[Ke],mode:"walk"},{pose:We%2===0?"hold":"idle"}])}),v.sfx("whoosh",{volume:.4});let ze=G(Math.max(U.R-9,5.5),Y?-1.2:-2.5);if(await v.move(at(j.x,ye,j.z),at(B.x,1.2,B.z),at(ze.x,ye+.8,ze.z),at(Le.x,.8,Le.z),4.8,{fov:a()}),e.fx.emit("mist",w.pos.x,.6,w.pos.z,"#d8dde4",16),w.setVisible(!1),ce){let Be=ce.rotation.y;ce.rotation.y=Be+1.3,v.sfx("door"),await v.tween(.6,We=>{ce.rotation.y=Be+1.3*(1-We)},go)}e.markDead(C,{quiet:!0,drop:!0}),await v.wait(.8),ie()}async function k(v,w,D,C){let U=x(1.1,.9),R=U.a+Math.PI;v.prop("village","trapdoor",U.x,.01,U.z,R,.75);let G=new Bt;G.position.set(U.x-Math.cos(R)*.85,.12,U.z+Math.sin(R)*.85),G.rotation.y=R;let B=new Mt(new _i(1.7,.1,1.7),new hn({color:"#7a5232"}));B.position.x=.85;let oe=new Mt(new _i(1.72,.12,.18),new hn({color:"#3a3a44"}));oe.position.set(.85,.01,.45),G.add(B,oe),G.userData.cleanup=()=>{B.geometry.dispose(),B.material.dispose(),oe.geometry.dispose(),oe.material.dispose()},v.add(G);let ie=new Mt(new er(.8,16),new xn({color:"#0b0910"}));ie.rotation.x=-Math.PI/2,ie.position.set(U.x,.03,U.z),ie.userData.cleanup=()=>{ie.geometry.dispose(),ie.material.dispose()},v.add(ie);let J=e.rig.portrait;y(D,U,J?3.4:4,R,{spread:J?1.7:2.3});let ce={x:Math.sin(R),z:Math.cos(R)},X={x:Math.cos(R),z:-Math.sin(R)};w.pos.set(U.x+ce.x*.5+X.x*2.6,0,U.z+ce.z*.5+X.z*2.6);let Y=J?8.6:7.2,j=J?2.2:3.8;v.cut(at(U.x+ce.x*Y+X.x*j,J?5.4:4.4,U.z+ce.z*Y+X.z*j),at(U.x+ce.x*.5,J?.9:.7,U.z+ce.z*.5),{fov:a()}),v.sfx("door"),await v.tween(.8,Le=>{G.rotation.z=Le*1.9},go),w.run([{walk:[{x:U.x,z:U.z}],mode:"walk"}]),await v.wait(1.8),w.run([]),w.playOnce("fall",{timeScale:.6}),await v.tween(1,Le=>{w.pos.y=-2.2*Le},Le=>Le*Le),w.setVisible(!1),v.sfx("door"),await v.tween(.5,Le=>{G.rotation.z=1.9*(1-Le)},Le=>Le*Le),e.fx.emit("poof",U.x,.3,U.z,"#b8a890",14);let ye=v.prop("clues","key",U.x+X.x*.6,.35,U.z+X.z*.6,R,1.4);ye&&e.fx.emit("magic",ye.position.x,.6,ye.position.z,"#ffd27a",10),e.markDead(C,{quiet:!0,drop:!0});for(let Le of D)Math.random()<.5&&Le.playOnce("emote-yes",{timeScale:.8});await v.wait(1.3)}function O(v,w,D){let C=M("clues","bow",1.1);C&&(C.rotation.set(0,0,0),w.hold(C,"left",[0,-.13,.05])),w.setBase("holdboth",.25),D&&(w.faceYaw=Math.atan2(D.x-w.pos.x,D.z-w.pos.z),w.yaw=w.faceYaw)}async function F(v,w,D,C=.7){let U=wn("clues","arrow");if(!U)return;let R=U.clone();R.scale.setScalar(.9),v.add(R);let G=at(D.x-w.x,D.y-w.y,D.z-w.z);v.sfx("shot"),await v.tween(C,B=>{R.position.set(w.x+G.x*B,w.y+G.y*B+Math.sin(B*Math.PI)*1.2,w.z+G.z*B),R.rotation.y=Math.atan2(G.x,G.z),R.rotation.x=-Math.cos(B*Math.PI)*.5},B=>B)}s.register("hunter",async(v,w)=>{let[D]=Na(w),C=D&&e.chars.get(D);if(C){v.claim(D),C.setVisible(!0),O(v,C,at(0,0,0));let U=r(C.pos,{dist:4.8,height:1.4,lookY:1.4});v.move(at(U.pos.x,.9,U.pos.z),U.look,at(U.pos.x*1.05,2,U.pos.z*1.05),U.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),v.sfx("hunter",{volume:.6}),await v.wait(3.4)}else await v.wait(1.5)}),s.register("shot",async(v,w)=>{let[D]=Na(w),C=w.actorId&&e.chars.get(w.actorId),U=D&&e.chars.get(D);if(!U){await v.wait(1.5);return}v.claim(D),U.setVisible(!0),C&&(v.claim(w.actorId),C.setVisible(!0),O(v,C,U.pos)),U.faceYaw=C?Math.atan2(C.pos.x-U.pos.x,C.pos.z-U.pos.z):U.yaw;let R=C?C.pos:at(0,0,0),G=at(R.x-U.pos.x,0,R.z-U.pos.z).normalize(),B=at(G.z,0,-G.x),oe=at((R.x+U.pos.x)/2,1,(R.z+U.pos.z)/2),ie=Math.max(4,Math.hypot(R.x-U.pos.x,R.z-U.pos.z)),J=at(-oe.x,0,-oe.z).normalize(),ce=B.dot(J)>=0?B:B.clone().multiplyScalar(-1);v.cut(at(oe.x+ce.x*(ie*.9+4),4.6+ie*.2,oe.z+ce.z*(ie*.9+4)),oe,{fov:o()}),await v.wait(1),C&&C.playOnce("attack-melee-right",{timeScale:1.4});let X=F(v,at(R.x,1.5,R.z),at(U.pos.x,1.1,U.pos.z),.75),Y=r(U.pos,{dir:ce,dist:6,height:3.6});v.shot(Y.pos,Y.look,{fov:o(),k:2.5}),await X,e.flash(.4,"#ff8364"),e.fx.emit("poof",U.pos.x,.9,U.pos.z,null,22),v.sfx("poof"),U.setVisible(!1);let j=e.playerById(D),ye=u(v,j&&j.look,U.pos.x,U.pos.z,.3,1.8);e.markDead(D,{quiet:!0,drop:!0}),await ye,await v.wait(.4)}),s.register("nohunt",async v=>{let w=e.getState(),D=w&&w.room.hunterId,C=D&&e.chars.get(D);if(C){v.claim(D),C.setVisible(!0);let U=at(C.pos.x*3+8,0,C.pos.z*3-30);O(v,C,U);let R=r(C.pos,{dist:5.5});v.shot(R.pos,R.look,{fov:o()}),await v.wait(.9),await F(v,at(C.pos.x,1.5,C.pos.z),at(U.x,6,U.z),1.1),C.dropProps(),C.setBase("idle",.2),C.playOnce("emote-no"),await v.wait(1.6)}else await v.wait(1.5)}),s.register("win",async(v,w)=>{let D=Na(w),C=t(),U=w.winner;U==="vampir"?(v.tod(23.2,!0),e.moonOverride("#ff4a4a")):U==="soytari"?v.tod(18.4):v.tod(10.2);let R=D.map(ie=>e.chars.get(ie)).filter(ie=>ie&&ie.visible).slice(0,10);for(let ie of R)v.claim(ie.id);let G=L(D,12).map(ie=>v.claim(ie.id)).filter(Boolean);if(U==="soytari"&&R[0]){let ie=R[0];ie.pos.set(0,0,3),ie.yaw=0,ie.faceYaw=0,ie.setBase("cheer",.2),y(G,{x:0,z:3},4.5,0);for(let ce of G)ce.setBase("sad",.3);let J=m(4,"#f2c12e");J.position.set(0,1.2,3),v.add(J)}else{for(let ie of R)ie.setBase(U==="vampir"?"loom":"cheer",.3);for(let ie of G)ie.setBase("sad",.3)}U==="vampir"&&f(v,0,5,0,16,5.5,C*.5,{x:0,z:-1});let B=0,oe=U!=="vampir";await v.tween(5.6,(ie,J)=>{let ce=-.9+ie*1.6,X=C*.85*l();if(e.rig.setOverride({pos:at(Math.sin(ce)*X,C*.5*l(),Math.cos(ce)*X),look:at(0,1,0),fov:o()+2,k:60},!0),B+=J,oe&&B>.55){B=0;let Y=R[Math.floor(Math.random()*Math.max(1,R.length))];Y&&(e.fx.emit("confetti",Y.pos.x,2.2,Y.pos.z,null,14),Math.random()<.5&&Y.playOnce("jump"))}},ie=>ie)}),s.register("promote",async v=>{let w=e.meId(),D=w&&e.chars.get(w);if(D&&D.visible){v.claim(w);let C=r(D.pos,{dist:6,height:4.2});v.shot(C.pos,C.look,{fov:o()}),D.setBase("loom",.3);let U=m(.6,"#ff2244");U.position.set(0,.36,.12),D.headBone&&(D.headBone.add(U),v.add(U,D.headBone)),e.flash(.5,"#d7263d"),await f(v,D.pos.x,1.8,D.pos.z,12,3.4,1.8)}else if(w){let C=i(w,{dist:10});C&&(v.shot(C.pos,C.look,{fov:o()}),e.flash(.5,"#d7263d"),await f(v,C.a.door.x,3,C.a.door.z,12,3.4,3))}await v.wait(.4)}),s.register("seer",async(v,w)=>{let D=(w.targets||[])[0];if(!D)return;let C=e.openRoom(D.id);if(!C){await v.wait(1.5);return}let U=e.playerById(e.meId()),R=C.shot("search",e.rig.portrait);v.cut(R.pos,R.look,{fov:R.fov});let G=U?C.addActor("kahin",U.look,U.name,C.L.doorOut,-Math.PI/2):null,B=X=>C.W(X);G&&G.run([{walk:[B(C.L.doorIn),B({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:B(C.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[B({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:B({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[B({x:.9,z:.2})],mode:"sneak"},{faceTo:B(C.L.rug)},{pose:"peek"}]),v.sfx("door",{volume:.5}),await v.wait(4.6);let oe=D.cause==="vampir",ie=C.rug;if(oe){let X=ie.position.x;v.tween(.7,ye=>{ie.position.x=X+1.6*ye,ie.rotation.z=-.25*Math.sin(ye*Math.PI)},go),await v.wait(.3);let Y=C.addTemp(wn("clues","coffin").clone());Y.position.set(C.L.rug.x,-.4,C.L.rug.z),Y.scale.setScalar(.62),Y.rotation.y=.4,v.tween(.6,ye=>{Y.position.y=-.4+.42*ye},go);for(let ye=0;ye<3;ye++){let Le=C.addTemp(wn("clues","potion").clone());Le.position.set(C.L.rug.x+.9+ye*.32,0,C.L.rug.z-.6+ye*.2);let ze=m(.9,"#ff2244");ze.position.y=.4,Le.add(ze)}let j=C.W({x:C.L.rug.x,z:C.L.rug.z});e.fx.emit("magic",j.x,.8,j.z,"#ff2244",30),e.flash(.55,"#d7263d"),v.sfx("seer"),f(v,j.x,1.2,j.z,3,2,.8,{x:0,z:1},.45),G&&(G.setBase("idle",.2),G.playOnce("emote-no"))}else{let X=["bread","cheese","apple","mug"],Y=C.W({x:C.L.rug.x,z:C.L.rug.z});X.forEach((j,ye)=>{let Le=wn("clues",j);if(!Le)return;let ze=C.addTemp(Le.clone());ze.position.set(C.L.rug.x-.5+ye*.35,.02,C.L.rug.z+.2-ye%2*.3),ze.scale.setScalar(1.3)}),e.fx.emit("magic",Y.x,.6,Y.z,"#ffe08a",24),v.sfx("seer"),G&&(G.setBase("idle",.2),G.playOnce("emote-yes"))}let J=C.shot("inside",e.rig.portrait),ce=at(J.look.x+(J.pos.x-J.look.x)*.78,J.look.y+(J.pos.y-J.look.y)*.8,J.look.z+(J.pos.z-J.look.z)*.78);v.shot(ce,C.W({x:C.L.rug.x,y:.4,z:C.L.rug.z}),{fov:J.fov,k:2.5}),await v.wait(2.2)}),s.register("watch",async(v,w)=>{let D=(w.targets||[])[0];if(!D)return;let C=e.openRoom(D.id);if(!C){await v.wait(1.5);return}let U=C.shot("window",e.rig.portrait);v.cut(U.pos,U.look,{fov:U.fov});let R=e.playerById(e.meId());R&&C.addActor("gozcu",R.look,"",C.L.winOut,Math.PI/2).setBase("peek",0);let G=(w.visitors||[]).map(ie=>e.playerById(ie)).filter(Boolean),B=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!G.length){await v.wait(3.6);return}let oe=ut(4/G.length,.8,1.4);for(let ie=0;ie<G.length;ie++){let J=G[ie],ce=C.addActor("v"+ie,J.look,J.name,C.L.doorStep,-Math.PI/2),X=B[ie%B.length];ce.run([{walk:[C.W(C.L.doorIn),C.W(X)],mode:"walk"},{faceTo:C.W({x:C.L.sleeper.x,z:-1.3})},{pose:"idle"}]),v.sfx("door",{volume:.35}),await v.wait(oe)}await v.wait(2.8)})}var cb={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},uh={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};uh["panayir-haftasi"]=uh.panayir;function Ig(s){return{...cb,...uh[s]||{},id:uh[s]?s:null}}var Da=new V,hb=new V,fh=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new V,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new V,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new V,this.ovLook=new V,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,l){let c=this.scratch;c.fov=i,this.applyView(c);let u=hb.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),h=a,f=l;for(let d=0;d<22;d++){let m=(h+f)/2;c.position.copy(e).addScaledVector(u,m),c.lookAt(e),c.updateMatrixWorld(),c.matrixWorldInverse.copy(c.matrixWorld).invert();let _=!0;for(let p=0;p<r.length&&_;p++){if(Da.copy(r[p]).applyMatrix4(c.matrixWorldInverse),Da.z>-.5){_=!1;break}Da.applyMatrix4(c.projectionMatrix),(Math.abs(Da.x)>o||Math.abs(Da.y)>o)&&(_=!1)}_?f=m:h=m}return f}drag(e,t){let n=this.user;n.az=ut(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ut(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ut(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let g=Tn(r.active?1.2:3,e);r.az+=(0-r.az)*g,r.el+=(0-r.el)*g,r.zoom+=(1-r.zoom)*g,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:Tn(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=_n(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,l=ut(i.el+r.el,.12,1.45),c=i.dist*r.zoom,u=this.camera,h=i.target.x+Math.sin(a)*Math.cos(l)*c,f=i.target.y+Math.sin(l)*c,d=i.target.z+Math.cos(a)*Math.cos(l)*c,m=this.override?1:0;if(this.ovW+=(m-this.ovW)*Tn(this.override?this.override.k||2.5:2,e),this.override){let g=Tn(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,g),this.ovLook.lerp(this.override.look,g)}let _=this.ovW;u.position.set(h+(this.ovPos.x-h)*_,f+(this.ovPos.y-f)*_,d+(this.ovPos.z-d)*_),this.lookPoint||(this.lookPoint=new V),this.lookPoint.copy(i.target).lerp(this.ovLook,_),u.lookAt(this.lookPoint);let p=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*_;Math.abs(u.fov-p)>.01&&(u.fov=p,u.updateProjectionMatrix()),u.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var ub=`
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
`,Cs=null,dh=0;function fb(){dh++,!Cs&&(Cs=document.createElement("style"),Cs.id="vkw-style",Cs.textContent=ub,document.head.appendChild(Cs))}function db(){dh--,dh<=0&&Cs&&(Cs.remove(),Cs=null,dh=0)}var ad=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),yn=new V;function Pg(s,e){fb();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,l=!1,c={top:0,bottom:0,left:0,right:0},u=0,h=document.createElement("button");h.className="vkw-recenter",h.type="button",h.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",h.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),h.textContent="\u2316",h.addEventListener("click",O=>{O.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',m='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",O=>{O.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",O=>O.stopPropagation()),t.appendChild(h),t.appendChild(f);function _(O,F){let v=0,w=0,D=0;O.addEventListener("pointerdown",C=>{v=C.clientX,w=C.clientY,D=performance.now(),C.stopPropagation()}),O.addEventListener("pointerup",C=>{C.stopPropagation(),Math.hypot(C.clientX-v,C.clientY-w)<12&&performance.now()-D<700&&F()}),O.addEventListener("click",C=>C.stopPropagation())}function p(O){let F=n.get(O);if(F)return F;let v=document.createElement("div");return v.className="vkw-tag",v.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(v,h),F={el:v,mark:v.children[0],votes:v.children[1],name:v.children[2],job:v.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},_(v,()=>e.onTagTap(O)),n.set(O,F),F}function g(O){let F=i.get(O);if(F)return F;let v=document.createElement("div");return v.className="vkw-plaque",t.insertBefore(v,t.firstChild),F={el:v,sig:"",cls:"",shown:!1},_(v,()=>e.onPlaqueTap(O)),i.set(O,F),F}function M(O,F){let v=p(O),w=F.name+"|"+F.job+"|"+F.color+"|"+F.badges;w!==v.sig&&(v.sig=w,v.name.innerHTML=`<i style="background:${vn[F.color]||"#999"}"></i>${F.badges?`<span>${F.badges}</span>`:""}<span>${ad(F.name)}</span>`,v.job.textContent=F.job||"",v.jobText=F.job||"",v.measured=!1);let D=F.mark?F.mark.label+F.mark.color:"";D!==v.markSig&&(v.markSig=D,v.mark.hidden=!F.mark,F.mark&&(v.mark.textContent=F.mark.label,v.mark.style.setProperty("--c",F.mark.color)),v.measured=!1);let C=F.votes?F.votes.total+":"+F.votes.dots.join(","):"";C!==v.voteSig&&(v.voteSig=C,v.votes.hidden=!F.votes,F.votes&&(v.votes.innerHTML=`<b>${F.votes.total}</b>`+F.votes.dots.map(G=>`<i style="background:${G.color}">${G.w>1?"2":""}</i>`).join("")),v.measured=!1);let U=!!v.jobText&&(!l||F.picked||F.hover);v.job.hidden===U&&(v.job.hidden=!U,v.measured=!1);let R="vkw-tag"+(l?" cmp":"")+(F.me?" me":"")+(F.off?" off":"")+(F.dead?" dead":"")+(F.sel?" sel":"")+(F.picked?" picked":"")+(F.hover?" hover":"");R!==v.cls&&(v.cls=R,v.el.className=R),F.selColor&&v.el.style.setProperty("--c",F.selColor),v.data=F}function L(O,F){let v=g(O),w=F.name+"|"+F.color+"|"+(F.mark?F.mark.label:"");w!==v.sig&&(v.sig=w,v.el.innerHTML=`<i style="background:${vn[F.color]||"#c9b48a"}"></i><span>${ad(F.name)}</span>${F.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${ad(F.mark.label)}</em>`:""}`);let D="vkw-plaque"+(F.sel?" sel":"")+(F.picked?" picked":"")+(F.dim?" dim":"")+(F.dead?" dead":"");D!==v.cls&&(v.cls=D,v.el.className=D),F.selColor&&v.el.style.setProperty("--c",F.selColor),v.data=F}function S(O,F){for(let[v,w]of O)F.has(v)||(w.el.remove(),O.delete(v))}function T(O,F,v){let w=r.get(O);if(!w){let D=document.createElement("div");D.className="vkw-bubble",t.insertBefore(D,h),w={el:D,until:0,h:30},r.set(O,w)}w.el.textContent=F.length>90?F.slice(0,88)+"\u2026":F,w.el.dataset.ch=v||"genel",w.el.classList.add("show"),w.until=performance.now()+3200+Math.min(3e3,F.length*45),w.h=0,w.seq=++u}let E=[],x=(O,F)=>O.prio-F.prio,y=[],I=[];function A(O,F,v,w){var oe,ie,J,ce;let D=y;D.length=0;for(let[X,Y]of n){if(!(F(X,yn)&&w(X))){Y.shown&&(Y.el.style.transform="translate3d(-9999px,0,0)",Y.shown=!1),Y.vis=!1;continue}if(Y.dist=yn.distanceTo(O.position),yn.project(O),yn.z>1||yn.x<-1.2||yn.x>1.2||yn.y<-1.2||yn.y>1.3){Y.shown&&(Y.el.style.transform="translate3d(-9999px,0,0)",Y.shown=!1),Y.vis=!1;continue}Y.measured||(Y.w=Y.el.offsetWidth||60,Y.h=Y.el.offsetHeight||20,Y.measured=!0),Y.sx=(yn.x*.5+.5)*o,Y.sy=(-yn.y*.5+.5)*a,Y.depth=yn.z,Y.vis=!0,D.push(Y)}for(let X of D)X.prio=(X.data&&(X.data.me||X.data.picked||X.data.mark||X.data.votes)?0:1)*1e3+X.dist;D.sort(x),E.length=0;let C=D.length>6;for(let X of D){let Y=X.sx-X.w/2,j=X.sy-X.h,ye=0;for(let Ut=0;Ut<6;Ut++){let me=!1;for(let be of E)Y<be.x+be.w-2&&Y+X.w>be.x+2&&j<be.y+be.h-1&&j+X.h>be.y+1&&(j=be.y-X.h-1,me=!0);if(!me)break;ye++}let Le=X.data&&(X.data.me||X.data.sel||X.data.picked||X.data.mark||X.data.votes),ze=C&&!Le&&(X.dist>15||ye>0),Be=C&&!Le&&ye>=3||!Le&&j<c.top+2,We=(ze?" far":"")+(Be?" gone":"");if(We!==X.fc&&(X.fc=We,X.el.classList.toggle("far",ze),X.el.classList.toggle("gone",Be),X.measured=!1),Be){X.x=-1e4,X.y=-1e4;continue}Y=Math.max(c.left+2,Math.min(o-c.right-X.w-2,Y)),j=Math.max(c.top+2,Math.min(a-c.bottom-X.h-2,j)),E.push({x:Y,y:j,w:X.w,h:X.h,t:X}),X.x=Y,X.y=j,(!X.shown||Math.abs(Y-((oe=X.wx)!=null?oe:-1e4))>.4||Math.abs(j-((ie=X.wy)!=null?ie:-1e4))>.4)&&(X.el.style.transform=`translate3d(${Y.toFixed(1)}px,${j.toFixed(1)}px,0)`,X.wx=Y,X.wy=j);let Ke=10+Math.round((1-X.depth)*1e3);Ke!==X.wz&&(X.el.style.zIndex=String(Ke),X.wz=Ke),X.shown=!0}let U=performance.now(),R=[];for(let[X,Y]of r){let j=n.get(X);if(U>Y.until&&Y.el.classList.contains("show")&&Y.el.classList.remove("show"),!j||!j.vis||U>Y.until+400){Y.el.style.transform="translate3d(-9999px,0,0)";continue}Y.h||(Y.h=Y.el.offsetHeight||30,Y.w=Y.el.offsetWidth||100),R.push({b:Y,t:j})}R.sort((X,Y)=>Y.b.seq-X.b.seq);let G=[];R.forEach(({b:X,t:Y},j)=>{let ye=Math.max(c.left+4,Math.min(o-c.right-X.w-4,Y.sx-X.w/2)),Le=Y.y-X.h-8;for(let ze=0;ze<6;ze++){let Be=!1;for(let We of G)ye<We.x+We.w&&ye+X.w>We.x&&Le<We.y+We.h+4&&Le+X.h+4>We.y&&(Le=We.y-X.h-6,Be=!0);for(let We of E)We.t!==Y&&ye<We.x+We.w&&ye+X.w>We.x&&Le<We.y+We.h+2&&Le+X.h+2>We.y&&(Le=We.y-X.h-4,Be=!0);if(!Be)break}Le=Math.max(c.top+4,Le),G.push({x:ye,y:Le,w:X.w,h:X.h}),X.el.classList.toggle("old",j>=3),X.el.style.transform=`translate3d(${ye.toFixed(1)}px,${Le.toFixed(1)}px,0)`,X.el.style.zIndex=String(2e3+(100-j))});let B=I;B.length=0;for(let[X,Y]of i){if(!(v(X,yn)&&!(Y.data&&Y.data.hidden))){Y.shown&&(Y.el.style.transform="translate3d(-9999px,0,0)",Y.shown=!1);continue}if(yn.project(O),yn.z>1||Math.abs(yn.x)>1.15||Math.abs(yn.y)>1.15){Y.shown&&(Y.el.style.transform="translate3d(-9999px,0,0)",Y.shown=!1);continue}(!Y.w||Y.sigW!==Y.sig+Y.cls)&&(Y.w=Y.el.offsetWidth||70,Y.h=Y.el.offsetHeight||20,Y.sigW=Y.sig+Y.cls),Y.ax=(yn.x*.5+.5)*o,Y.ay=(-yn.y*.5+.5)*a,Y.px=Y.ax,Y.py=Y.ay,B.push(Y)}for(let X=0;X<5;X++){for(let Y=0;Y<B.length;Y++){let j=B[Y];for(let ye=Y+1;ye<B.length;ye++){let Le=B[ye],ze=(j.w+Le.w)/2+3-Math.abs(j.px-Le.px),Be=(j.h+Le.h)/2+2-Math.abs(j.py-Le.py);if(ze>0&&Be>0)if(Be<ze){let We=(j.py<Le.py?-1:1)*Be/2;j.py+=We,Le.py-=We}else{let We=(j.px<Le.px?-1:1)*ze/2;j.px+=We,Le.px-=We}}}for(let Y of B){let j=Y.px-Y.ax,ye=Y.py-Y.ay,Le=Math.hypot(j,ye);Le>28&&(Y.px=Y.ax+j/Le*28,Y.py=Y.ay+ye/Le*28)}}for(let X of B){let Y=Math.max(c.left+2,Math.min(o-c.right-X.w-2,X.px-X.w/2)),j=Math.max(c.top+2,Math.min(a-c.bottom-X.h-2,X.py-X.h/2));(!X.shown||Math.abs(Y-((J=X.wx)!=null?J:-1e4))>.4||Math.abs(j-((ce=X.wy)!=null?ce:-1e4))>.4)&&(X.el.style.transform=`translate3d(${Y.toFixed(1)}px,${j.toFixed(1)}px,0)`,X.wx=Y,X.wy=j);let ye=X.data&&X.data.sel?"900":"5";ye!==X.wz&&(X.el.style.zIndex=ye,X.wz=ye),X.shown=!0}}function k(O,F){let v=document.createElement("div");v.className="vkw-ripple",v.style.left=O+"px",v.style.top=F+"px",t.appendChild(v),setTimeout(()=>v.remove(),600)}return{el:t,setSize(O,F){o=O,a=F;for(let v of n.values())v.measured=!1},setInsets(O){c={top:O.top||0,bottom:O.bottom||0,left:O.left||0,right:O.right||0}},setCompact(O){if(O!==l){l=O;for(let F of n.values())F.sig="",F.measured=!1}},setTag:M,setPlaque:L,bubble:T,project:A,ripple:k,tags:n,plaques:i,sync(O,F){S(n,O),S(i,F);for(let[v,w]of r)O.has(v)||(w.el.remove(),r.delete(v))},setCamToggle(O,F,v){if(f.hidden=!O,!O)return;let w=F==="follow"?"f":"o";if(f.dataset.m!==w){f.dataset.m=w,f.innerHTML=F==="follow"?m:d;let D=F==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=D,f.setAttribute("aria-label",D)}f.style.right=12+(v.right||0)+"px",f.style.bottom=60+(v.bottom||0)+"px"},setRecenter(O,F){h.classList.toggle("show",!!O),h.style.right=12+(F.right||0)+"px",h.style.bottom=12+(F.bottom||0)+"px"},hitTag(O,F){for(let v of n.values())if(!(!v.vis||!v.data||!v.data.sel)&&O>=v.x-6&&O<=v.x+v.w+6&&F>=v.y-6&&F<=v.y+v.h+6)return v;return null},clear(){for(let O of[n,i,r]){for(let F of O.values())F.el.remove();O.clear()}},dispose(){t.remove(),db()}}}var pb=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,Ua=null;function mb(){Ua||(Ua=document.createElement("style"),Ua.id="vkw-joy-style",Ua.textContent=pb,document.head.appendChild(Ua))}function Lg(s,e={}){var I;mb();let t=(I=e.touch)!=null?I:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,l=0,c=null,u=0,h=0,f=!1,d=new Set;function m(A,k){i.style.transform=`translate3d(${(A*r).toFixed(1)}px,${(-k*r).toFixed(1)}px,0)`}function _(A){if(!f||c!=null)return;A.preventDefault(),A.stopPropagation(),c=A.pointerId,n.setPointerCapture&&n.setPointerCapture(c);let k=n.getBoundingClientRect();u=k.left+k.width/2,h=k.top+k.height/2,n.classList.add("act"),p(A)}function p(A){if(A.pointerId!==c)return;A.preventDefault();let k=(A.clientX-u)/r,O=-(A.clientY-h)/r,F=Math.hypot(k,O);F>1&&(k/=F,O/=F);let v=Math.hypot(k,O);if(v<.12)a=0,l=0;else{let w=(v-.12)/.88/v;a=k*w,l=O*w}m(k,O)}function g(A){A.pointerId===c&&(c=null,a=0,l=0,m(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",_),n.addEventListener("pointermove",p),n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g);let M=A=>!!(A&&A.tagName&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.tagName==="SELECT"||A.isContentEditable)),L=A=>M(A)||M(document.activeElement),S={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function T(A){if(!f||A.ctrlKey||A.metaKey||A.altKey||L(A.target))return;let k=S[A.code];k&&(d.add(k),A.code.startsWith("Arrow")&&A.preventDefault())}function E(A){let k=S[A.code];k&&d.delete(k)}let x=A=>{M(A.target)&&d.clear()};window.addEventListener("focusin",x);let y=()=>d.clear();return window.addEventListener("keydown",T),window.addEventListener("keyup",E),window.addEventListener("blur",y),{touch:t,vector(A){let k=a,O=l;if(d.size){k+=(d.has("r")?1:0)-(d.has("l")?1:0),O+=(d.has("u")?1:0)-(d.has("d")?1:0);let F=Math.hypot(k,O);F>1&&(k/=F,O/=F)}return A.x=k,A.y=O,A},setEnabled(A){A!==f&&(f=A,n.classList.toggle("on",A&&t&&!o),A||(d.clear(),a=0,l=0,c=null,m(0,0),n.classList.remove("act")))},place(A,k,O){let F=A.joystick,v,w,D;if(F===null){o=!0,n.classList.remove("on");return}o=!1,F&&F.size>0?(D=Math.max(88,Math.min(160,F.size)),v=F.left||0,w=O-(F.bottom||0)-D):(D=112,v=(A.left||0)+18,w=Math.max((A.top||0)+10,O-(A.bottom||0)-18-D)),n.style.left=v+"px",n.style.top=w+"px",n.style.width=n.style.height=D+"px";let C=Math.round(D*.41);i.style.width=i.style.height=C+"px",i.style.margin=-C/2+"px 0 0 "+-C/2+"px",r=D*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",T),window.removeEventListener("keyup",E),window.removeEventListener("blur",y),window.removeEventListener("focusin",x),n.remove()}}}var Ng=2.3;function Fa(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function vr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function gb(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,l=s.z+i*o,c=Math.hypot(a,l);if(c>=Ng)return;let u=a,h=l;c<.01&&(u=-i,h=n);let f=Math.hypot(u,h)||1,d=Ng+.25,m=n/Math.sqrt(r),_=i/Math.sqrt(r);t.push({x:u/f*d-m*1.2,z:h/f*d-_*1.2}),t.push({x:u/f*d+m*1.2,z:h/f*d+_*1.2})}function Dg(s,e){let t=s[s.length-1];t&&gb(t,e,s),s.push({x:e.x,z:e.z})}function xb(s,e,t,n){let i=_n(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(vr(e+i*o/r,n))}function ph(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,l=Fa(e).a;if(n!=null){let c=vr(n,r);i.push(c),a=c,l=n}else if(Fa(e).r>o){let c=Fa(e),u=vr(c.a,r);i.push(u),a=u,l=c.a}if(t.house){let c=t.angle,u=Math.abs(_n(c-l)),h=vr(c,r);if(Fa(a).r>r-.8&&u<1.4?xb(i,l,c,r):Dg(i,h),t.peek){let d=t.house.peek,m=_n(Fa(d).a-c)>=0?1:-1,_=(t.halfWidth||3)+1.4,p=s.R,g=vr(c+m*(_/(p-2)),p-2.2),M=vr(c+m*(_/(p+1)),p+1.2),L=vr(c+m*((_-.6)/(p+3.4)),p+3.6);i.push(g,M,L,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else Dg(i,t);return i}function ld(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,l=i.r+.32;if(a<l*l){let c=Math.sqrt(a)||.001;s.x=i.x+r/c*l,s.z=i.z+o/c*l}}}function cd(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)ld(t,e,null);return t}var mh=()=>typeof window!="undefined"&&window.VKRules||null;function Is(s){let e=mh();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function vb(s,e){let t=mh();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function Ug(s,e,t){let n=mh();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=Is(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!Zf[e.role];case"iftiraci":return!o&&!Zf[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return vb(s,t)?!1:!(t==="poison"&&o);default:return!1}}function xo(s){let e=mh();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,l]of o)a===l&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function gh(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return hi.poison;if(n.witch.heal===e.id)return hi.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&hi[r.role])return hi[r.role];let a=(n.team||[]).filter(l=>l.targetId===e.id&&l.vampId!==r.id).map(l=>l.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?hi.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function Oa(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function hd(s,e){let t=Is(s);return t==="vote"?hi.vote.color:t==="shoot"?hi.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?hi.poison:hi.heal).color:(hi[s.me.role]||hi.vote).color:"#f2c12e"}function Fg(s){let e=new Map,t=null,n=new Map;function i(h){for(let f of s.village.benchSlots)if(Math.hypot(h.x-f.x,h.z-f.z)<1.25)return f;return null}function r(h,f){let d=-h,m=-f,_=Math.hypot(d,m)||1,p=s.camera.position.x-h,g=s.camera.position.z-f,M=Math.hypot(p,g)||1;return Math.atan2(d/_*.45+p/M*.55,m/_*.45+g/M*.55)}function o(h){s.village.openDoor(h,1.3),s.sfxThrottled("door",.35)}function a(h,f,d,m){let _=s.village,p=_.layout;if(!p)return;let g=[];if(m){if(h.peeking=null,f.kind==="plaza"||f.kind==="gather")h.inside=null,h.pos.set(f.x,0,f.z),h.yaw=f.face!=null?f.face:r(f.x,f.z),h.faceYaw=h.yaw,h.setVisible(!0),h.run([{pose:f.pose||"idle",fade:0}]);else if(f.kind==="house"){let S=s.houseAnchors(f.house);if(!S)return;if(f.peek){h.inside=null;let T=ph(p,S.approach,{house:S,angle:_.house(f.house).angle,peek:!0,halfWidth:_.house(f.house).info.hx});h.pos.set(S.peek.x,0,S.peek.z),h.yaw=Math.atan2(S.backWin.x-S.peek.x,S.backWin.z-S.peek.z),h.faceYaw=h.yaw,h.peeking=f.house,h.peekPath=T.slice(-5),h.setVisible(!0),h.run([{pose:"peek",fade:0}])}else h.inside=f.house,h.pos.set(S.inside.x,0,S.inside.z),h.setVisible(!1),h.run([{pose:"idle",fade:0}])}else f.kind==="gone"&&(h.setVisible(!1),h.run([]));return}if(f.kind==="gone"){h.visible&&(s.poofAt(h.pos.x,h.pos.z),h.setVisible(!1)),h.run([]);return}if(!h.visible&&!h.inside&&!h.peeking){if(f.kind==="plaza"||f.kind==="gather"){a(h,f,0,!0),s.fx.emit("magic",f.x,.8,f.z,"#f4e4c1",10);return}_.house(h.id)&&(h.inside=h.id)}d&&g.push({wait:d});let M={x:h.pos.x,z:h.pos.z},L=null;if(h.inside){let S=h.inside,T=s.houseAnchors(S),E=_.house(S);if(T&&E){if(f.kind==="house"&&f.house===S&&!f.peek)return;g.push({at:T.inside,face:T.rotY,snapFace:!0},{call:()=>o(S)},{wait:.3},{show:!0,call:x=>{x.inside=null}},{walk:[T.approach],mode:"walk"}),M=T.approach,L=E.angle}else h.inside=null}else if(h.peeking){if(f.kind==="house"&&f.peek&&f.house===h.peeking)return;let S=(h.peekPath||[]).slice().reverse();S.length>1&&(g.push({pose:"idle",fade:.2},{walk:S.slice(1),mode:"sneak",call:T=>{T.peeking=null}}),M=S[S.length-1]),h.peeking=null}if(f.kind==="plaza"||f.kind==="gather"){let S=cd({x:f.x,z:f.z},s.obstacles),T=ph(p,M,S,L).map((x,y,I)=>y>0&&y<I.length-1?cd(x,s.obstacles):x);T.shift(),T.length&&g.push({walk:T,mode:f.mode||"walk"});let E=f.face!=null?f.face:r(S.x,S.z);g.push({face:E}),f.pose?g.push({pose:f.pose}):g.push({pose:"idle"})}else if(f.kind==="house"){let S=f.house,T=s.houseAnchors(S),E=_.house(S);if(!T||!E)return;let x=ph(p,M,{house:T,angle:E.angle,peek:!!f.peek,halfWidth:E.info.hx},L);x.shift();let y=l(M,x)>12,I=f.mode||(y?f.house===h.id?"brisk":"sprint":"walk");if(f.peek){let A=x.slice(-2),k=x.slice(0,x.length-2);k.length&&g.push({walk:k,mode:I}),g.push({walk:A,mode:"sneak"}),g.push({faceTo:T.backWin},{pose:"peek",call:O=>{O.peeking=S,O.peekPath=x.slice(-5)}})}else x.length&&g.push({walk:x,mode:I}),g.push({faceTo:T.door},{wait:.15},{call:()=>o(S)},{wait:.35},{walk:[T.inside],mode:"walk"},{hide:!0,call:A=>{A.inside=S,n.set(S,s.time+9+Math.random()*4)}})}h.run(g)}function l(h,f){let d=0,m=h;for(let _ of f)d+=Math.hypot(_.x-m.x,_.z-m.z),m=_;return d}function c(h,f){let d=s.village,m=d.layout;if(!m||!h||!h.me)return;let{room:_,me:p,players:g}=h,M=_.phase,L=M==="reveal"||M==="night"||M==="day"||M==="hunter",S=!p.alive,T=M!==t;t=M;let E=xo(h),x=new Set(_.winners||[]),y=g.filter(I=>I.alive&&!I.left).sort((I,A)=>I.seat-A.seat).map(I=>I.id);for(let I of g){let A=s.ensureChar(I);if(!A)continue;A.isMe=I.id===p.id;let k=!I.left&&(I.alive||M==="hunter"&&I.id===_.hunterId),O;if(!k)O={kind:"gone"};else if(M==="reveal"){let C=y.indexOf(I.id),U=Math.max(y.length,1),R=C/U*Ye+.3,G=4.3+(U>12?C%2*1.3:0);O={kind:"gather",x:Math.sin(R)*G,z:Math.cos(R)*G,face:R+Math.PI,pose:"warm"}}else if(M==="night"){let C=E.get(I.id);C&&C!==I.id&&d.house(C)?O={kind:"house",house:C,peek:A.isMe&&p.role==="gozcu"}:O={kind:"house",house:I.id}}else{let C=A.isMe&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,U=C?{x:C.x,z:C.z}:jf(m,I.pos?I.pos.x:.5,I.pos?I.pos.y:.8),R=null,G=null,B=i(U);I.connected?M==="ended"?R=x.has(I.id)?"cheer":null:B&&M!=="hunter"&&(R="sit",G=B.a+Math.PI):R="sit",O={kind:"plaza",x:U.x,z:U.z,pose:R,face:G}}let F=O.kind+":"+(O.house||"")+":"+(O.peek?"p":"")+":"+(O.x!=null?O.x.toFixed(2)+","+O.z.toFixed(2):"")+":"+(O.pose||""),v=e.get(I.id),w=f||A.fresh;if(A.claimed&&!w){e.delete(I.id);continue}if(A.fresh=!1,A.isMe&&s.driving&&O.kind==="plaza"&&!w)e.set(I.id,"drive");else if(v!==F||w){e.set(I.id,F);let C=0;T&&!w?M==="night"?C=A.isMe?.2:Math.random()*1.6:M==="day"||M==="hunter"?C=.3+Math.random()*2.2:M==="reveal"&&(C=Math.random()*.8):v&&v.startsWith("house")&&O.kind==="house"&&M==="night"&&!w&&(C=.1),a(A,O,C,w)}if(I.left?!1:!I.alive&&(L&&S||M==="ended")){let C=s.ensureGhost(I);if(C){let U=I.id===p.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,R=U?{x:U.x,z:U.z}:jf(m,I.pos?I.pos.x:.5,I.pos?I.pos.y:.8),G="g:"+R.x.toFixed(2)+","+R.z.toFixed(2);I.id===p.id&&s.driving&&!C.fresh?e.set("g"+I.id,"drive"):(e.get("g"+I.id)!==G||C.fresh)&&(e.set("g"+I.id,G),C.fresh&&(C.pos.set(R.x,0,R.z),C.fresh=!1,C.yaw=r(R.x,R.z),s.fx.emit("magic",R.x,1,R.z,"#d8d0ff",12)),C.isMe=I.id===p.id,C.run([{walk:[{x:R.x,z:R.z}],mode:"stroll"},{face:r(R.x,R.z)}]))}}else s.removeGhost(I.id)}for(let I of g){let A=d.house(I.id);if(A)if(A.dead=L||M==="ended"?!I.alive||I.left:!1,M==="night"){let k=(n.get(I.id)||0)>s.time?1:0;for(let[,O]of E)O===I.id&&(k=Math.max(k,.8));d.setLit(I.id,k)}else d.setLit(I.id,1)}M!=="night"&&n.clear()}function u(h){if(!h||h.room.phase!=="night")return;let f=s.village,d=xo(h);for(let m of h.players){if(!f.house(m.id))continue;let _=(n.get(m.id)||0)>s.time?1:0;for(let[,p]of d)p===m.id&&(_=Math.max(_,.8));f.setLit(m.id,_)}}return{apply:c,tick:u,reset(){e.clear(),t=null,n=new Map},forget(h){e.delete(h),e.delete("g"+h)}}}var za=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],Og=["top","hor","sun","sky","gnd"];for(let s of za)for(let e of Og)s[e]=new Te(s[e]);function zg(){return{h:12,top:new Te,hor:new Te,sun:new Te,sky:new Te,gnd:new Te,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new V,moonDir:new V,lightDir:new V,sunVis:0,moonVis:0,night:0,dusk:0}}function yb(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ut(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function Mb(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ut(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var xh=new V,vh=new V;function kg(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<za.length-2&&za[t+1].h<=s;)t++;let n=za[t],i=za[t+1],r=As(ut((s-n.h)/(i.h-n.h),0,1));for(let a of Og)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,yb(s,e.sunDir),Mb(s,e.moonDir),e.sunVis=ut((e.sunDir.y+.06)/.12,0,1),e.moonVis=ut((e.moonDir.y+.04)/.12,0,1)*ut(1-e.sunVis*1.2,0,1);let o=ut((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ut(1-Math.abs(e.sunDir.y-.05)/.22,0,1),xh.copy(e.sunDir),xh.y=Math.max(xh.y,.24),vh.copy(e.moonDir),vh.y=Math.max(vh.y,.45),e.lightDir.copy(xh.normalize()).multiplyScalar(o).addScaledVector(vh.normalize(),1-o).normalize(),e}function Bg(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Ps={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},ud=["saver","low","medium","high"];function Hg(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function Gg(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function Vg(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var Wg="vkw.quality.v2";function Sb(){try{return JSON.parse(localStorage.getItem(Wg)||"null")}catch{return null}}function bb(s){try{localStorage.setItem(Wg,JSON.stringify(s))}catch{}}var _h=class{constructor(e){let t=Sb();if(this.fails={},t&&Array.isArray(t.failed))for(let n of t.failed)this.fails[n]=1;else if(t&&t.fails&&typeof t.fails=="object")for(let n of Object.keys(t.fails))Ps[n]&&(this.fails[n]=+t.fails[n]||0);this.level=t&&Ps[t.tier]?t.tier:e,this.remembered=!!(t&&Ps[t.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){bb({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((p,g)=>p-g),r=this.cpu.slice().sort((p,g)=>p-g),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,l=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let u=Ps[this.level].fps===30,h=u?40:30,f=ud.indexOf(this.level),d=o>h||a>h*1.8,m=u?a<36&&l<11:o<18&&a<26;if(d?(this.bad+=o>h*1.6?2:1,this.good=0):m?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=ud[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let _=ud[f+1];return _&&this.good>=(this.fails[_]?30:12)&&(this.fails[_]||0)<2?(this.level=_,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},yh=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((c,u)=>c-u),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((c,u)=>c+u,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let c=this.trial;if(this.trial=null,o>c.p90*.92)return this.scale=c.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let l=a<o*.55;return o>i*1.2&&l&&this.scale>.6?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(.6,+(this.scale-.1).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function fd(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var Xg=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function qg(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!fd())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=Gg(),a=Hg(o),l=document.createElement("div");l.className="vkw-root",s.appendChild(l);let c;try{c=new co({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw l.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}c.outputColorSpace=Ft,c.toneMapping=hr,c.toneMappingExposure=1,c.shadowMap.type=ar;let u=c.domElement;u.setAttribute("aria-label","K\xF6y"),l.appendChild(u);let h=document.createElement("div");h.className="vkw-vignette",l.appendChild(h);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",l.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",l.appendChild(d);function m(){d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0"}let _=new Zs;_.fog=new Vo(2475,50,250);let p=new jt(40,1,.3,900),g=new fh(p),M="auto",L=new _h(Vg(o)),S=new yh;n.renderScale=1;let T=Ps[L.level],E={...a,sparks:70,fireflies:56,clouds:T.clouds,trees:a.trees,scatter:a.scatter},x=new sr(16777215,4473924,1);_.add(x);let y=new ri(16777215,2);y.shadow.bias=-6e-4,y.shadow.normalBias=.03,_.add(y),_.add(y.target);let I=new rr(16747050,20,17,1.5);I.position.set(0,1.4,0),_.add(I);let A=lg(_,E),k=hg(_,E),O=new Bi("glow",128),F=new Bi("pool",128),v=new Bi("blob",64,Si),w=new Bi("ring",48);for(let P of[F,v,w,O])_.add(P.mesh);let D=new ch(160);_.add(D.normal.mesh),_.add(D.add.mesh);let C=Sg(E);_.add(C.group);let U=bg(56);_.add(U.points);let R=null,G=new Map,B=new Map,oe=new Set,ie=new Map,J=0,ce=[],X=null,Y=null,j=null,ye="",Le=null,ze=1,Be=!1,We=null,Ke=null,Ut=Tg(_),me=new ri(9417983,0);_.add(me),_.add(me.target);let be=new Map;function pe(P,W){let $=(be.get(P)||0)+1;be.set(P,$),($===1||$===50)&&console.warn("[VKWorld] "+P+" hatas\u0131 (yakaland\u0131, devam ediliyor):",W)}let Fe={rig:g,camera:p,chars:G,scene:_,time:0,get village(){return R},fx:D,obstacles:[],localMove:null,sfx(P,W){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(P,W)}catch{}},sfxThrottled(P,W){let $=performance.now();(we[P]||0)+W*1e3>$||(we[P]=$,Fe.sfx(P))},sfxStep(){Fe.sfxThrottled("step",.32)},reapply(){pt&&ue&&ve==="game"&&Ti(!1)},ticker:ce,assets:Es,get room(){return Y},getState(){return ue},playerById(P){let W=ue&&ue.players.find($=>$.id===P);return W?{id:W.id,look:W.look,name:W.name,role:W.role}:null},makeActor(P,W,$){let he="cine:"+ ++J,Me=new wi(Fe,he,P,{ghost:$==="ghost"});return Me.cineKey=he,_.add(Me.root),ie.set(he,{ch:Me,name:W||"",color:P.color|0}),W&&(Be=!0),Me},dropActor(P){ie.delete(P.cineKey),P.dispose(),Be=!0},isDeadShown(P){let W=ue&&ue.players.find($=>$.id===P);return!!(W&&ue.room.phase!=="lobby"&&(!W.alive||W.left)&&!(ue.room.phase==="hunter"&&ue.room.hunterId===P))},openRoom(P){return ui(P,"cine")},endCineRoom(){j==="cine"&&Ns()},setTodOverride(P,W){X=P,W&&P!=null&&(se=P)},cineTint(){},moonOverride(P){Le=P?new Te(P):null},fogBoost(P){return ze=P,()=>{ze=1}},footDust(P,W){T.name!=="low"&&ve==="game"&&D.emit("dust",P,.05,W,Ke&&Ke.snow?"#e8eef5":null,2)},houseAnchors(P){let W=R&&R.house(P);return W?R.anchors(W):null},layoutR(){return R&&R.layout?R.layout.R:15},meId(){return ue&&ue.me?ue.me.id:null},flash(P,W){if(!P){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${W||"#d7263d"}55, ${W||"#d7263d"}cc)`,f.style.opacity=String(P),clearTimeout(fe),fe=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(P,W){D.emit("poof",P,.4,W,null,16),Fe.sfxThrottled("poof",.2)},holdDeaths(P){oe.clear();for(let W of P)oe.add(W)},releaseDeaths(){oe.size&&(oe.clear(),Fe.reapply())},markDead(P,W={}){oe.delete(P);let $=G.get(P);$&&$.visible&&!$.claimed&&(W.quiet||Fe.poofAt($.pos.x,$.pos.z),$.setVisible(!1)),R&&R.setDead(P,!0,$?$.look.color:0,W.drop)},ensureChar(P){if(!pt)return null;let W=G.get(P.id);return W?W.setLook(P.look):(W=new wi(Fe,P.id,P.look),W.fresh=!0,G.set(P.id,W),_.add(W.root),Ne(W)),W},ensureGhost(P){if(!Bn("characters/ghost.glb"))return null;let W=B.get(P.id);return W||(W=new wi(Fe,P.id,P.look,{ghost:!0}),W.fresh=!0,B.set(P.id,W),_.add(W.root)),W},removeGhost(P){let W=B.get(P);W&&(W.dispose(),B.delete(P))}},we={},fe=0,xe=Pg(l,{onTagTap(P){Q(P,!0)},onPlaqueTap(P){z.has(P)&&re(P)},onRecenter(){Md()},onCamToggle(){Sd()}}),Ee=Lg(l,{}),H=Rg(Fe);Cg(H,Fe);let $e=Fg(Fe),ue=null,lt={},ve="menu",pt=!1,qe=!1,Qe="",z=new Set,b=new Set,K=null,se=18.3,te=18.3,ee=zg(),_e={fog:1,tint:new Te("#ffffff"),tintAmt:0,moon:new Te("#eef2ff"),stars:1,weather:"none"},le=new Te,de=!0,Ce=0,q=new V,ge=1,ae=1,Pe=1,Ie={top:0,bottom:0,left:0,right:0};function Ne(P){P.model.traverse(W=>{W.isMesh&&(W.castShadow=T.charShadow)})}function et(P,W=!0){T=Ps[P];let $=window.devicePixelRatio||1;Pe=Math.min($,o?T.pxMobile:T.px),c.setPixelRatio(Pe*(n.renderScale||1)),c.setSize(ge,ae,!1);let he=T.shadows>0;c.shadowMap.enabled!==he&&(c.shadowMap.enabled=he,_.traverse(Me=>{Me.material&&(Array.isArray(Me.material)?Me.material:[Me.material]).forEach(Se=>{Se.needsUpdate=!0})})),y.castShadow=he,he&&(y.shadow.mapSize.x!==T.shadowSize&&(y.shadow.mapSize.set(T.shadowSize,T.shadowSize),y.shadow.map&&(y.shadow.map.dispose(),y.shadow.map=null)),c.shadowMap.autoUpdate=T.shadows===2);for(let Me of G.values())Ne(Me);if(E.clouds=T.clouds,de=!0,W&&t.onQuality)try{t.onQuality(P)}catch{}}function _t(){let P=l.getBoundingClientRect();ge=Math.max(1,Math.round(P.width)),ae=Math.max(1,Math.round(P.height)),c.setSize(ge,ae,!1),g.setSize(ge,ae),xe.setSize(ge,ae),Ee.place(Ie,ge,ae),Gn(!0)}let Ae=null;window.ResizeObserver&&(Ae=new ResizeObserver(()=>_t()),Ae.observe(l));let tt=()=>_t();window.addEventListener("resize",tt),window.addEventListener("orientationchange",tt),et(L.level,!1),_t();let St=fo.chars.length+fo.village.length;gr(["village","chars"],(P,W)=>{if(!qe&&t.onProgress)try{t.onProgress(P,W)}catch{}}).then(()=>{if(!qe){if(He(),pt=!0,ue&&ve==="game"&&Ti(!0),t.onReady)try{t.onReady()}catch{}return gr(["extra"]).then(()=>{if(!qe)return R.onExtraLoaded(),ue&&Ti(!1),gr(["cine"])})}}).catch(P=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",P),t.onError)try{t.onError(P)}catch{}});function He(){R=_g(_,E,null,k),Nt(ve==="menu"||!ue?null:ue),U.place(8,40),Gn(!0)}function Nt(P){let W,$=null;if(!P||ve==="menu")W=Xg;else{let De=P.room.phase==="lobby";W=P.players.filter(ct=>!(De&&ct.left)).map(ct=>{var ot;return{id:ct.id,seat:(ot=ct.seat)!=null?ot:0}}),$=P.me?P.me.id:null,W.length||(W=Xg)}let he=W.map(De=>De.id+"@"+De.seat).join(",")+"|"+$;if(he===Qe)return!1;let Me=!!Qe&&P&&P.room.phase==="lobby"&&ve==="game"&&!Qe.startsWith("menu-");Qe=he;let Se=fg(W,$);R.setLayout(Se,Me),Zt(Se),U.place(Se.Rp+1,Se.R+14),de=!0,Me||$e.reset();for(let De of G.values())Me||(De.fresh=!0);return!0}function Zt(P){let W=[{x:0,z:0,r:1.6,tag:"fire"}];for(let $ of R.benchSlots){let he=Math.cos($.a),Me=-Math.sin($.a);for(let Se of $.small?[-.45,.45]:[-.85,0,.85])W.push({x:$.x+he*Se,z:$.z+Me*Se,r:.3,tag:"bench"})}for(let $ of R.lampList())$.small||W.push({x:$.x,z:$.z,r:.35,tag:"lamp"});Fe.obstacles=W}function ui(P,W){if(Y||(Y=Eg(Fe)),!Y.ready)return null;let $=Fe.playerById(P)||{id:P,look:{color:0,hat:0,skin:0},name:""};return Y.hide(),Y.show($),j=W,Be=!0,m(),Y}function Ns(){Y&&Y.hide();let P=j;j=null,ye="",P&&((P==="cine"||!H.running)&&g.setOverride(null,!0),m()),Be=!0}function vo(){if(!ue||ve!=="game"||!pt||H.running)return null;let{room:P,me:W}=ue;if(P.phase!=="night"||!W.alive)return null;let $=G.get(W.id);return $?$.inside&&$.inside!==W.id&&R.house($.inside)?{mode:"visit",house:$.inside}:$.peeking&&R.house($.peeking)?{mode:"window",house:$.peeking}:null:null}function bh(P,W){let $=Y.L,he=Se=>Y.W(Se),Me=[$.bedside,$.bedside2,{x:-1.6,z:.9}][W%3];switch(P){case"vampir":return[{walk:[he(Me)],mode:"sneak"},{faceTo:he({x:$.sleeper.x,z:-1.4})},{pose:"loom"},{wait:2.2+Math.random()},{once:"attack-melee-right",opts:{timeScale:.45}},{wait:1.5}];case"doktor":return[{walk:[he($.bedfoot)],mode:"walk"},{faceTo:he({x:$.sleeper.x,z:-1.6})},{pose:"hold"},{wait:3.5},{once:"interact-left",opts:{timeScale:.6}},{wait:2}];case"kahin":return[{walk:[he({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:he($.bookcase)},{once:"pick-up",opts:{timeScale:.7}},{walk:[he({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:he({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.7}},{walk:[he({x:1.5,z:-.6})],mode:"sneak"},{faceTo:he({x:1.6,z:-1.5})},{once:"interact-left",opts:{timeScale:.7}}];case"cadi":return[{walk:[he(Me)],mode:"sneak"},{faceTo:he({x:$.sleeper.x,z:-1.3})},{pose:"hold"},{wait:1.8},{once:"interact-right",opts:{timeScale:.5}},{wait:1.8}];case"iftiraci":return[{walk:[he({x:-.3,z:-1.75})],mode:"sneak"},{faceTo:he({x:-.3,z:-2.8})},{pose:"peek"},{wait:1.2},{once:"pick-up",opts:{timeScale:.6}},{wait:1.6}];default:return[{walk:[he($.bedfoot)],mode:"walk"},{faceTo:he($.bed)},{wait:3}]}}let ka={doktor:["furniture","lantern",.55],cadi:["clues","potion",.75],iftiraci:["clues","key",.9]};function Ba(P,W){let $=ui(P.house,P.mode);if(!$)return!1;let he=ue.me,Me=Fe.playerById(he.id),Se=g.portrait;if(P.mode==="visit"){[{id:he.id,look:Me.look,name:Me.name,role:he.role},...W.map(ot=>{let ht=Fe.playerById(ot);return ht?{id:ot,look:ht.look,name:ht.name,role:ht.role||"vampir"}:null}).filter(Boolean)].forEach((ot,ht)=>{let Dt=$.addActor("a"+ht,ot.look,ot.name,$.L.doorIn,-Math.PI/2);Dt.roomRole=ot.role,Dt.roomIndex=ht;let ke=ka[ot.role];if(ke){let dt=wn(ke[0],ke[1]);if(dt){let xt=dt.clone();xt.userData.holdScale=ke[2]/2.8,Dt.hold(xt,"right",[0,-.15,.06])}}});let ct=$.shot("inside",Se);g.setOverride({pos:ct.pos,look:ct.look,fov:ct.fov,k:60},!0)}else{$.addActor("gozcu",Me.look,"",$.L.winOut,Math.PI/2).setBase("peek",0);let ct=$.shot("window",Se);g.setOverride({pos:ct.pos,look:ct.look,fov:ct.fov,k:60},!0)}return!0}function Hi(){if(!pt||j==="cine")return;let P=vo();if(P){let W=xo(ue),$=[];for(let[Me,Se]of W)Se===P.house&&Me!==ue.me.id&&$.push(Me);let he=P.mode+":"+P.house+":"+$.join(",")+":"+(g.portrait?"p":"l");if(he!==ye&&Ba(P,$)&&(ye=he),Y&&P.mode==="visit")for(let Me of Y.actors.values())Me.ch.busy||Me.ch.run(bh(Me.ch.roomRole,Me.ch.roomIndex))}else(j==="visit"||j==="window")&&Ns()}function Gi(P){P!==We&&(We=P,Ke=Ig(P),_e.fog=Ke.fog,_e.tint.set(Ke.tint),_e.tintAmt=Ke.tintAmt,_e.moon.set(Ke.moon),_e.stars=Ke.stars,_e.weather=Ke.weather,_e.nightTint=!!Ke.nightTint,Ut.set(Ke.weather),R&&R.setTheme(Ke))}function Ha(P,W){if(!qe&&(ue=P,lt=W||{},!!pt))try{Ti(!1)}catch($){pe("durum",$)}}function Ti(P){if(!ue||ve!=="game")return;let W=Nt(ue),{room:$,players:he}=ue;Gi($.scenario&&$.phase!=="lobby"?$.scenario.id:null);let Me=$.phase!=="lobby",Se=new Set;for(let De of he)Se.add(De.id),R.setOwner(De.id,De.look?De.look.color:-1,De.name),R.setDead(De.id,Me&&(!De.alive||De.left)&&!oe.has(De.id),De.look?De.look.color:0);for(let[De,ct]of G)Se.has(De)||(ct.dispose(),G.delete(De),$e.forget(De));for(let De of[...B.keys()])Se.has(De)||Fe.removeGhost(De);if($.phase==="lobby")for(let De of he)R.tombOf(De.id)&&R.setDead(De.id,!1);$e.apply(ue,P||W&&$.phase!=="lobby"),z=new Set(he.filter(De=>Ug(ue,De,lt.witchMode)).map(De=>De.id)),b=new Set(xo(ue).keys()),Vi(),Gn(!1)}function Vi(){if(!ue)return;let{room:P,me:W,players:$,day:he}=ue,Me=P.phase,Se=Is(ue),De=hd(ue,lt.witchMode),ct=new Map($.map(ke=>[ke.id,ke])),ot=new Set,ht=new Set,Dt=$.filter(ke=>!ke.left).length;xe.setCompact(Dt>7&&ge<700||Dt>12);for(let ke of $){let dt=G.get(ke.id),xt=B.get(ke.id);if(dt||xt){ot.add(ke.id);let Oe=null,vt=he&&he.votes&&he.votes[ke.id];vt&&vt.length&&(Oe={total:vt.reduce((Wi,wo)=>Wi+(wo.w||1),0),dots:vt.map(Wi=>({color:ct.get(Wi.id)?vn[ct.get(Wi.id).look.color]:"#999",w:Wi.w||1}))});let rn=(ke.isHost&&Me==="lobby"?"\u{1F451}":"")+(!ke.connected&&!ke.left?"\u{1F4F4}":"")+(he&&he.sleeping&&he.sleeping.includes(ke.id)?"\u{1F4A4}":"")+(he&&he.voted&&he.voted.includes(ke.id)&&!(he.sleeping||[]).includes(ke.id)?"\u2714":""),$t=Se!=="night"&&z.has(ke.id);xe.setTag(ke.id,{name:ke.name,job:ke.job&&ke.job.label?ke.job.label:"",color:ke.look.color,badges:rn,me:ke.id===W.id,off:!ke.connected,dead:!ke.alive,sel:$t,picked:Oa(ue,ke)&&Se!=="night",hover:K===ke.id&&$t,selColor:De,mark:Se!=="night"?gh(ue,ke,lt.witchMode):Me==="night"?null:gh(ue,ke,lt.witchMode),votes:Oe})}if(R.house(ke.id)){ht.add(ke.id);let Oe=Se==="night"&&z.has(ke.id),vt=Me==="lobby"||Me==="night"&&Se==="night"||Me==="reveal";xe.setPlaque(ke.id,{name:ke.name,color:ke.look.color,sel:Oe,picked:Me==="night"&&Oa(ue,ke),dim:!vt,hidden:!vt,dead:Me!=="lobby"&&(!ke.alive||ke.left),selColor:De,mark:Me==="night"?gh(ue,ke,lt.witchMode):null})}}for(let[ke,dt]of ie)dt.name&&(ot.add(ke),xe.setTag(ke,{name:dt.name,job:"",color:dt.color,badges:"",me:!1}));if(Fe.room&&j){for(let[ke,dt]of Fe.room.actors)if(dt.name){let xt="room:"+ke;ot.add(xt),xe.setTag(xt,{name:dt.name,job:"",color:dt.color,badges:"",me:!1})}}xe.sync(ot,ht),Be=!1}let Nn=[];for(let P=0;P<64;P++)Nn.push(new V);let dn="";function Gn(P){if(!R||!R.layout){g.setShot({target:new V(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:P});return}let W=R.layout,$=g.portrait,he=ue&&ve==="game"?ue.room.phase:"menu",Me=ue&&ve==="game"?Is(ue):null,Se;he==="menu"?Se="menu":he==="night"?Se=Me==="night"?"overview":"sleep":he==="reveal"?Se="gather":_d()?Se="follow":Se="plaza";let De=Se!==dn;dn=Se,De&&(g.recenter(),Se==="follow"&&(rt.init=!1));let ct=g.shot;if(Se==="follow"){let ot=0,ht=W.R+3.6;for(let Dt=0;Dt<24;Dt++){let ke=Dt/24*Ye;Nn[ot++].set(Math.sin(ke)*ht,0,Math.cos(ke)*ht)}rt.ovDist=g.fit(xd,rt.az,$?1.15:.98,40,Nn.slice(0,ot),.94,8,220),ct.dynamic=!1,ct.points=null,(De||P)&&bd(0,!0);return}if(Se==="menu"){let ot=W.Rp+($?3.5:2.5);g.setShot({kind:Se,target:new V(0,$?3.4:3,0),az:ct.az,el:$?.2:.16,dist:ot,fov:$?64:50,speed:1.2}),ct.dynamic=!1}else if(Se==="overview"||Se==="sleep"){let ot=0,ht=W.R+3.6;for(let ke=0;ke<24;ke++){let dt=ke/24*Ye;Nn[ot++].set(Math.sin(dt)*ht,0,Math.cos(dt)*ht),Nn[ot++].set(Math.sin(dt)*W.R,4.5,Math.cos(dt)*W.R)}let Dt=Se==="overview"?$?1.2:.98:$?.95:.62;g.setShot({kind:Se,target:new V(0,0,Se==="overview"?0:-W.R*.08),az:Se==="sleep"?.25:0,el:Dt,fov:40,points:Nn.slice(0,ot),margin:Se==="overview"?.94:1.04,snap:P,speed:1.6}),ct.dynamic=!1}else{let ot=Nn,ht=0,Dt=Se==="gather"?5.6:3.2;for(let dt=0;dt<8;dt++){let xt=dt/8*Ye;ot[ht++].set(Math.sin(xt)*Dt,0,Math.cos(xt)*Dt)}for(let dt of G.values()){if(!dt.visible||ht>60)continue;let xt=dt.path&&dt.path.length?dt.path[dt.path.length-1]:dt.pos;Math.hypot(xt.x,xt.z)>W.Rp+1.5||(ot[ht++].set(xt.x,0,xt.z),ot[ht++].set(xt.x,2.4,xt.z))}for(let dt of B.values())ht<62&&(ot[ht++].set(dt.pos.x,2.6,dt.pos.z),ot[ht++].set(dt.pos.x,0,dt.pos.z));let ke=Se==="gather"?$?.6:.5:$?.58:.54;g.setShot({kind:Se,target:Rd(ot,ht),az:0,el:ke,fov:$?44:38,points:ot.slice(0,ht),margin:$?.92:.8,minDist:8,snap:P,speed:1.8}),ct.dynamic=!0,ct.points=ot.slice(0,ht)}}let Ga=new ua,_o=new st,Jn=new V,us=new V,Va=new ei(new V(0,1,0),0);function Wa(P,W){return _o.set(P/ge*2-1,-(W/ae)*2+1),Ga.setFromCamera(_o,p),Ga.ray}function yo(P,W,$,he=34){let Me=null,Se=1/0;for(let[De,ct]of G){if(!ct.visible||!$(De)||(Jn.set(ct.pos.x,.1,ct.pos.z).project(p),us.set(ct.pos.x,ct.headY,ct.pos.z).project(p),Jn.z>1))continue;let ot=(Jn.x*.5+.5)*ge,ht=(-Jn.y*.5+.5)*ae,Dt=(us.x*.5+.5)*ge,ke=(-us.y*.5+.5)*ae,dt=Dt-ot,xt=ke-ht,Oe=dt*dt+xt*xt||1,vt=ut(((P-ot)*dt+(W-ht)*xt)/Oe,0,1),rn=Math.hypot(P-(ot+dt*vt),W-(ht+xt*vt)),$t=Math.max(he,Math.sqrt(Oe)*.55);rn<$t&&rn<Se&&(Se=rn,Me=De)}return Me}function N(P,W,$){let he=R.layout,Me=null,Se=1/0;for(let xt of R.houses.values()){if(xt.removing||$&&!z.has(xt.id)||(Jn.set(xt.cx,1.6,xt.cz).project(p),Jn.z>1))continue;let Oe=(Jn.x*.5+.5)*ge,vt=(-Jn.y*.5+.5)*ae;us.set(xt.cx+Math.cos(xt.crot)*xt.info.hx,1.6,xt.cz-Math.sin(xt.crot)*xt.info.hx).project(p);let rn=Math.max(26,Math.hypot((us.x*.5+.5)*ge-Oe,(-us.y*.5+.5)*ae-vt)*1.25),$t=Math.hypot(P-Oe,W-vt);$t<rn&&$t<Se&&(Se=$t,Me=xt)}if(Me)return Me.id;let De=Wa(P,W),ct=R.pickHouse(De);if(ct&&(!$||z.has(ct.id)))return ct.id;let ot=De.intersectPlane(Va,Jn);if(!ot)return null;let ht=Math.hypot(ot.x,ot.z);if(ht<he.Rp*.75||ht>he.R+8)return null;let Dt=Math.atan2(ot.x,ot.z),ke=null,dt=1/0;for(let xt of R.houses.values()){if($&&!z.has(xt.id))continue;let Oe=Math.abs(((Dt-xt.angle+Math.PI)%Ye+Ye)%Ye-Math.PI);Oe<dt&&(dt=Oe,ke=xt)}return ke&&dt<he.step*.5?ke.id:null}function Z(P,W){if(!ue||ve!=="game")return null;let $=Is(ue);if($==="night"){let he=N(P,W,!0);return he&&z.has(he)?he:null}return $==="vote"||$==="shoot"?yo(P,W,he=>z.has(he)):null}function re(P){if(t.onPick)try{t.onPick(P)}catch{}}function Q(P,W){if(!ue)return;if(z.has(P)){re(P);return}let $=ue.room.phase;P===ue.me.id&&($==="lobby"||$==="ended")&&t.onSelf&&t.onSelf()}function ne(P,W){if(!ue||ve!=="game"||!pt)return;let $=Z(P,W);if($){re($),xe.ripple(P,W);return}let he=ue.room.phase,Me=ue.me;if((he==="lobby"||he==="ended")&&yo(P,W,Se=>Se===Me.id,26)){t.onSelf&&t.onSelf();return}if(he==="lobby"||he==="day"||he==="ended"){let Se=Wa(P,W).intersectPlane(Va,Jn);if(!Se)return;let De=R.layout,ct=Math.hypot(Se.x,Se.z);if(ct>De.R+4)return;let ot=Math.atan2(Se.x,Se.z);ct=ut(ct,De.Rp*.2,De.Rp*.96);let ht=Math.sin(ot)*ct,Dt=Math.cos(ot)*ct,ke=Qf(De,ht,Dt);if(Fe.localMove={x:ht,z:Dt,until:performance.now()+1500},xe.ripple(P,W),t.onMove)try{t.onMove(ke.x,ke.y)}catch{}Ti(!1)}}let Re=new Map,Xe=!1,Ue=0,Ge=0,je=0,ft=0;function bt(P){let W=l.getBoundingClientRect();return{x:P.clientX-W.left,y:P.clientY-W.top}}function Ze(P){if(P.target!==u)return;u.setPointerCapture&&u.setPointerCapture(P.pointerId);let W=bt(P);if(Re.set(P.pointerId,W),Re.size===1&&(Xe=!1,Ue=performance.now(),Ge=W.x,je=W.y),Re.size===2){let[$,he]=[...Re.values()];ft=Math.hypot($.x-he.x,$.y-he.y),Xe=!0}}function At(P){let W=bt(P);if(!Re.has(P.pointerId)){P.pointerType==="mouse"&&pn(W.x,W.y);return}let $=Re.get(P.pointerId);if(Re.set(P.pointerId,W),Re.size===1)!Xe&&Math.hypot(W.x-Ge,W.y-je)>9&&(Xe=!0),Xe&&ve==="game"&&(dn==="follow"?jg(W.x-$.x,W.y-$.y):g.drag(W.x-$.x,W.y-$.y));else if(Re.size===2){let[he,Me]=[...Re.values()],Se=Math.hypot(he.x-Me.x,he.y-Me.y);ft>0&&Se>0&&ve==="game"&&(dn==="follow"?yd(ft/Se):g.zoom(ft/Se)),ft=Se}}function Yt(P){if(!Re.has(P.pointerId))return;let W=bt(P);Re.delete(P.pointerId),Re.size===0&&!Xe&&performance.now()-Ue<650&&ne(W.x,W.y),Re.size<2&&(ft=0)}function Gt(P){Re.delete(P.pointerId)}function zt(P){if(ve!=="game")return;P.preventDefault();let W=Math.exp(ut(P.deltaY,-120,120)*.0015);dn==="follow"?yd(W):g.zoom(W)}function pn(P,W){let $=Z(P,W);$!==K&&(K=$,u.style.cursor=$?"pointer":"",Vi())}u.addEventListener("pointerdown",Ze),u.addEventListener("pointermove",At),u.addEventListener("pointerup",Yt),u.addEventListener("pointercancel",Gt),u.addEventListener("pointerleave",P=>{P.pointerType==="mouse"&&K&&(K=null,Vi())}),u.addEventListener("wheel",zt,{passive:!1});let Je=P=>P.preventDefault();u.addEventListener("contextmenu",Je);let an=document.hidden,It=!1,Ei=()=>{an=document.hidden,an||(kt=performance.now(),L.reset(),Xa())};document.addEventListener("visibilitychange",Ei),u.addEventListener("webglcontextlost",P=>{P.preventDefault(),It=!0}),u.addEventListener("webglcontextrestored",()=>{It=!1,de=!0,kt=performance.now(),Xa()});function mn(){if(X!=null)return X;if(ve!=="game"||!ue)return 18.35;let{room:P,day:W}=ue,$=Date.now()+(ue.serverNow,0),he=P.deadline?Math.max(0,P.deadline-($+sn))/1e3:null;switch(P.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let Me=P.settings&&P.settings.nightSec||30;return(21.2+(he==null?.3:ut(1-he/Me,0,1))*7.6)%24}case"day":{let Me=P.settings&&P.settings.daySec||120,Se;return W&&W.shortened?($n==null&&($n=fs,Pt=Math.max(1,he||10)),Se=$n+(1-$n)*ut(1-(he||0)/Pt,0,1)):($n=null,Se=he==null?.2:ut(1-he/Me,0,1)),fs=Se,7.4+Se*11.6}case"hunter":return se>19.5||se<6?7.6:se;case"ended":return P.winner==="vampir"?23:P.winner==="soytari"?18.5:9.5;default:return 17}}let fs=0,fi=-1,$n=null,Pt=10,sn=0,An=0,kt=performance.now(),Jt=0,Dn=0,Mn={fps:0,ms:0,calls:0,tris:0,frames:0};function Xa(){!An&&!qe&&(An=requestAnimationFrame(Zg))}let Mo=240,qa=new Float32Array(Mo),wh=new Float32Array(Mo),So=0,Ds=0,pd=new Float32Array(Mo);function bo(P,W){return Ds?(pd.set(P),+pd.subarray(0,Ds).sort()[Math.min(Ds-1,Math.floor(W*(Ds-1)))].toFixed(1)):0}function Zg(P){if(An=0,qe||an||It||(Xa(),ge<2||ae<2)||T.fps<=30&&P-Jt<1e3/30-4)return;let W=ut((P-kt)/1e3,0,.1),$=P-kt;kt=P,Jt=P;let he=performance.now();try{$g(W)}catch(De){pe("kare",De)}let Me=performance.now();try{c.render(_,p)}catch(De){pe("\xE7izim",De)}let Se=performance.now();if(Mn.stepMs=(Mn.stepMs||0)*.9+(Me-he)*.1,Mn.renderMs=(Mn.renderMs||0)*.9+(Se-Me)*.1,Mn.frames++,Dn+=$,Mn.cpu=Se-he,qa[So]=$,wh[So]=Se-he,So=(So+1)%Mo,Ds<Mo&&Ds++,Dn>500&&(Mn.fps=Math.round(Mn.frames*1e3/Dn),Mn.ms=+(Dn/Mn.frames).toFixed(1),Mn.frames=0,Dn=0),Mn.calls=c.info.render.calls,Mn.tris=c.info.render.triangles,M==="auto"&&pt){let De=L.sample($,Se-he,P);De&&De!==T.name&&(et(De),S.reset())}if(pt&&!It){let De=S.sample($,Se-he,P,T.fps===30?36:24);De!=null&&(n.renderScale=De,c.setPixelRatio(Pe*De),c.setSize(ge,ae,!1))}}let Cb=new Te,Jg=new Te(0,0,0),Th=new Map;function _r(P){return Th.has(P)||Th.set(P,new Te(P)),Th.get(P)}function $g(P){Fe.time+=P;let W=Fe.time;te=mn(),se=Bg(se,te,P,ve==="menu"?.6:1.3),kg(se,ee);let $=ue&&ve==="game"&&ue.room.phase==="ended"&&ue.room.winner==="vampir";le.copy(Le||_e.moon),$&&(le.set("#ff6a6a"),ee.sun.lerp(_r("#ff5a6a"),.35));let he=_e.tintAmt*(_e.nightTint?ee.night:1);he>0&&(ee.top.lerp(_e.tint,he),ee.hor.lerp(_e.tint,he*.8),ee.sky.lerp(_e.tint,he*.5),ee.gnd.lerp(_e.tint,he*.3)),ee.night>.3&&ee.sun.lerp(le,(Le||_e.nightTint?.55:.3)*ee.night),ee.fogNear*=_e.fog*ze,ee.fogFar*=_e.fog*ze,ee.stars*=_e.stars,_.fog.color.copy(ee.hor);let Me=Math.max(0,g.cur.dist*g.user.zoom-28)*(1-.35*ee.night);_.fog.near=ee.fogNear+Me*.9,_.fog.far=ee.fogFar+Me*1.1,me.intensity=.9*ee.night*(j?.4:1),me.color.copy(le),me.position.set(-p.position.x*.6,60,-p.position.z*.6-40),x.color.copy(ee.sky),x.groundColor.copy(ee.gnd),x.intensity=ee.hi,y.color.copy(ee.sun),y.intensity=ee.si;let Se=R&&R.layout,De=Se?Se.R+14:40;if(y.position.copy(ee.lightDir).multiplyScalar(120),y.target.position.set(0,0,0),y.castShadow){let Oe=y.shadow.camera;Oe.right!==De&&(Oe.left=-De,Oe.right=De,Oe.top=De,Oe.bottom=-De,Oe.near=20,Oe.far=260,Oe.updateProjectionMatrix(),de=!0),q.angleTo(ee.lightDir)>.026&&(q.copy(ee.lightDir),de=!0)}let ct=.82+.1*Math.sin(W*13.1)+.06*Math.sin(W*23.7+1)+.05*Math.sin(W*5.3);if(j&&Y){let Oe=j==="window"||H.current&&H.current.kind==="watch";if(Oe){let vt=Y.W({x:-2.4,y:2.3,z:-1.2});I.position.copy(vt),x.color.lerp(le,.6),x.groundColor.lerp(le,.35),x.intensity=ee.hi+1.1}else{let vt=Y.lanternWorld();I.position.set(vt.x,vt.y+.9,vt.z+.8)}I.intensity=(Oe?13:9+5*ee.night)*ct,I.distance=12}else I.intensity=(2+17*ee.night*ee.night)*ee.fire*ct,I.position.set(Math.sin(W*7)*.08,1.4,0),I.distance=17;C.update(W,Pe,.75+.25*ee.fire),A.update(ee,W,p,Pe,le),U.update(W,Pe,T.fireflies?ut(ee.night*1.2-.2,0,1):0),h.style.opacity=String(.55+ee.night*.45+(j==="window"?.12:0));for(let Oe=ce.length-1;Oe>=0;Oe--){let vt=!0;try{vt=ce[Oe](P,W)}catch(rn){pe("ticker",rn)}vt&&ce.splice(Oe,1)}try{Hi()}catch(Oe){pe("i\xE7 mek\xE2n",Oe)}if(Y&&Y.visible)try{Y.update(P,W)}catch(Oe){pe("oda",Oe)}for(let Oe of ie.values())try{Oe.ch.update(P,W)}catch(vt){pe("kopya",vt)}Be&&ue&&ve==="game"&&Vi(),Ut.update(P,W,Pe,g.cur.target,ve==="game"||ve==="menu"?T.weather:0,Ke&&Ke.fogTint?_r(Ke.fogTint):null,ee.night),R&&(R.update(P,W,ee)&&(de=!0),R.version!==fi&&R.layout&&(fi=R.version,Zt(R.layout)),i-=P,ue&&ve==="game"&&i<=0&&(i=.25,$e.tick(ue)));try{e0(P)}catch(Oe){pe("s\xFCr\xFC\u015F",Oe)}let ot=Fe.obstacles,ht=n0;ht.length=0,Cd.setFromProjectionMatrix(i0.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse));for(let Oe of G.values()){Rh.center.set(Oe.pos.x,Oe.pos.y+.9,Oe.pos.z);let vt=Oe.visible&&Cd.intersectsSphere(Rh),rn=p.position.distanceToSquared(Rh.center)>676;Oe.animEvery=vt?Math.max(rn?2:1,T.animLod||1):4;try{Oe.update(P,W)}catch($t){pe("karakter",$t),md(Oe)}Oe.visible&&!Oe.claimed&&ht.push(Oe)}for(let Oe of B.values())try{Oe.update(P,W)}catch(vt){pe("hayalet",vt),md(Oe)}Mr&&t0();for(let Oe=0;Oe<ht.length;Oe++){let vt=ht[Oe];for(let rn=Oe+1;rn<ht.length;rn++){let $t=ht[rn],Wi=$t.pos.x-vt.pos.x,wo=$t.pos.z-vt.pos.z,Ih=Wi*Wi+wo*wo;if(Ih<.72*.72&&Ih>1e-6){let Ph=Math.sqrt(Ih),Ja=(.72-Ph)*.5,Pd=Wi/Ph,Ld=wo/Ph,$a=vt.speed>$t.speed?.75:.25;vt.pos.x-=Pd*Ja*$a,vt.pos.z-=Ld*Ja*$a,$t.pos.x+=Pd*Ja*(1-$a),$t.pos.z+=Ld*Ja*(1-$a)}}vt.peeking||ld(vt.pos,ot,null)}O.begin(),F.begin(),v.begin(),w.begin(),O.add(0,1,0,3.4,_r("#ff8a2a"),.55*ee.fire*ct),F.add(0,.04,0,13+3*ee.night,_r("#ff7a1a"),(.18+.3*ee.night)*ee.fire*ct),R&&R.emitGlows(ee,W,O,F);let Dt=T.blob?.55:.32,ke=ue?_r(hd(ue,lt.witchMode)):null,dt=ue&&ve==="game"?Is(ue):null;for(let Oe of ht)if(v.add(Oe.pos.x,.025,Oe.pos.z,1.05,Jg,Dt),dt&&dt!=="night"&&z.has(Oe.id)){let vt=ue&&Oa(ue,{id:Oe.id});w.add(Oe.pos.x,.05,Oe.pos.z,vt?1.9:1.5,ke,vt?1:K===Oe.id?.95:.45,Oe.seed*6)}for(let Oe of B.values())O.add(Oe.pos.x,1.2,Oe.pos.z,2.2,_r(vn[Oe.look.color]),.22);if(dt==="night"&&R)for(let Oe of z){let vt=R.house(Oe);if(!vt)continue;let rn=R.anchors(vt),$t=Oa(ue,{id:Oe});w.add(rn.approach.x,.05,rn.approach.z,$t?3.4:2.6,ke,$t?1:K===Oe?.95:.5,vt.seat)}if(D.update(P,W),O.end(W),F.end(W),v.end(W),w.end(W),ve==="menu"&&(g.shot.az+=P*.045),(dn==="plaza"||dn==="gather")&&s0(),Eh-=P,ve==="game"&&ue&&Eh<=0&&(Eh=.4,dn==="follow"!==_d()&&(dn==="follow"||dn==="plaza")&&Gn(!1)),dn==="follow")try{bd(P)}catch(Oe){pe("takip",Oe)}g.update(P,W);let xt=ve==="game"&&ue&&!H.current&&!j&&vd();xe.setCamToggle(!!xt,dn==="follow"?"follow":"overview",Ie),xe.setRecenter(ve==="game"&&(dn==="follow"?Qg():g.offset),Ie),Ce-=P,ee.night>.7&&de&&Ce<=0&&!Id()&&(Ce=2),y.castShadow&&T.shadows===1&&de&&Ce<=0&&(c.shadowMap.needsUpdate=!0,de=!1,Ce=Id()?.25:1.5),r-=P,ve==="game"&&ue&&r<=0&&(r=T.labelHz>=60?0:1/T.labelHz-.004,xe.project(p,r0,a0,o0))}function md(P){try{P.once=null;let W=P.look;P.lookKey=null,P.setLook(W),Ne(P)}catch{P.setVisible(!1)}}let gd="vkw.cam",Us="follow";try{let P=localStorage.getItem(gd);(P==="follow"||P==="overview")&&(Us=P)}catch{}let rt={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0},xd=new V(0,0,0),Ya=new V,Eh=0;function yr(){if(!ue||!ue.me)return null;let P=ue.me;if(!P.alive){let $=B.get(P.id);if($)return $}let W=G.get(P.id);return W&&W.visible?W:null}function Ah(){let P=ue&&ve==="game"?ue.room.phase:null;return P==="lobby"||P==="day"||P==="ended"}function vd(){return Ah()&&!!yr()}function _d(){return Us==="follow"&&vd()}function Ka(P){return P.yaw+Math.PI+.38*rt.side}function jg(P,W){rt.az-=P*.0075,rt.el=ut(rt.el+W*.004,.12,1.15),rt.dragT=0}function yd(P){rt.zoom=ut(rt.zoom*P,.55,4.2),rt.zoomGoal=0,rt.dragT=Math.min(rt.dragT,.5)}function Qg(){let P=yr();return P?Math.abs(rt.zoom-(rt.wide?1.6:1))>.15||Math.abs(rt.el-.42)>.12||P.speed<.3&&Math.abs(_n(Ka(P)-rt.az))>.9:!1}function Md(){if(dn==="follow"){let P=yr();P&&(rt.az=Ka(P)),rt.el=.42,rt.zoom=rt.wide?1.6:1,rt.zoomGoal=0,rt.dragT=99;return}g.recenter()}function Sd(){Us=Us==="follow"?"overview":"follow";try{localStorage.setItem(gd,Us)}catch{}Gn(!1)}function bd(P,W){let $=yr(),he=R&&R.layout;if(!$||!he)return;let Me=g.portrait;rt.init||(rt.init=!0,rt.side=1,rt.az=Ka($),rt.el=.42,rt.zoom=1,rt.dragT=99,rt.zoomGoal=0,rt.wide=!1),rt.dragT+=P;let Se=Is(ue),De=Se==="vote"||Se==="shoot";De!==rt.wide&&(rt.wide=De,De&&rt.zoom<1.6&&(rt.zoomGoal=1.6)),rt.zoomGoal&&(rt.zoom+=(rt.zoomGoal-rt.zoom)*Tn(2.5,P),Math.abs(rt.zoom-rt.zoomGoal)<.02&&(rt.zoomGoal=0)),$.speed>.4&&rt.dragT>1.1&&(rt.az+=_n(Ka($)-rt.az)*Tn($.drive?1.5:.9,P)),rt.az=_n(rt.az);let ct=rt.zoom,ot=As(ut((ct-1.7)/2.5,0,1)),ht=Me?8.8:7.2;Ya.set($.pos.x,($.isGhost?1.5:1.25)+($.isGhost&&$.model?$.model.position.y:0),$.pos.z).lerp(xd,ot);let Dt=rt.el+((Me?1.15:.98)-rt.el)*ot,ke=ht*ct+(rt.ovDist-ht*ct)*ot,dt=(Me?54:46)+(40-(Me?54:46))*ot,xt=he.R-4.6;if(ot<.6)for(let Oe=0;Oe<14;Oe++){let vt=Math.cos(Dt)*ke,rn=Ya.x+Math.sin(rt.az)*vt,$t=Ya.z+Math.cos(rt.az)*vt;if(Math.hypot(rn,$t)<=xt)break;if(ct>1.25&&Dt<1.05)Dt+=.08;else if(ke>4.4)ke*=.9;else if(Dt<1.05)Dt+=.08;else break}g.setShot({kind:"follow",target:Ya,az:rt.az,el:Dt,dist:ke,fov:dt,speed:5.5,snap:!!W}),g.shot.dynamic=!1}let Fs={x:0,y:0},Os=new V,Mr=!1,Za=0,wd=-1,Td=-1;Object.defineProperty(Fe,"driving",{get:()=>Mr});function Ed(P,W){let $=R&&R.layout;if(!$||!t.onMove)return;let he=Qf($,P.pos.x,P.pos.z);if(!(!W&&Math.abs(he.x-wd)<.003&&Math.abs(he.y-Td)<.003)){wd=he.x,Td=he.y;try{t.onMove(he.x,he.y)}catch{}}}function e0(P){let W=yr(),$=!!(pt&&W&&Ah()&&!j&&!H.current&&!W.claimed);Ee.setEnabled($),Ee.vector(Fs);let he=$?Math.hypot(Fs.x,Fs.y):0,Me=performance.now();if(he>.08){p.getWorldDirection(Os),Os.y=0,Os.lengthSq()<1e-4&&Os.set(-Math.sin(g.cur.az),0,-Math.cos(g.cur.az)),Os.normalize();let Se=Os.x,De=Os.z,ct=-De,ot=Se,ht=ct*Fs.x+Se*Fs.y,Dt=ot*Fs.x+De*Fs.y,ke=Math.hypot(ht,Dt)||1;ht/=ke,Dt/=ke;let dt=he>.92?3:.5+he*1.9;W.drive||(W.drive={x:0,z:0,speed:0}),W.drive.x=ht,W.drive.z=Dt,W.drive.speed=dt,Mr||(Mr=!0,Za=0);let xt=Fe.localMove||(Fe.localMove={x:0,z:0,until:0});xt.x=W.pos.x,xt.z=W.pos.z,xt.until=Me+2500,Za-=P,Za<=0&&(Za=.15,Ed(W,!1))}else if(Mr){Mr=!1;for(let Se of[G.get(ue&&ue.me?ue.me.id:""),B.get(ue&&ue.me?ue.me.id:"")])Se&&(Se.drive=null);W&&Ah()&&(Fe.localMove={x:W.pos.x,z:W.pos.z,until:Me+2500},Ed(W,!0),Ti(!1))}}function t0(){let P=yr(),W=R&&R.layout;if(!P||!W)return;let $=Math.hypot(P.pos.x,P.pos.z)||.001,he=Math.max(W.Rp*.2,2.3),Me=W.Rp*.96;if($<he||$>Me){let Se=ut($,he,Me)/$;P.pos.x*=Se,P.pos.z*=Se}}let Ad=new V;function Rd(P,W){let $=0,he=0,Me=0;for(let Se=8;Se<W;Se++)$+=P[Se].x,he+=P[Se].z,Me++;return Me?Ad.set($/Me*.6,.9,he/Me*.6+.2):Ad.set(0,.9,.2)}let n0=[],Cd=new xi,i0=new nt,Rh=new Kt(new V,1.3);function Id(){return!!(R&&R.busy)}let Ch=0;function s0(){if(Ch-=1/60,Ch>0)return;Ch=.3;let P=R&&R.layout;if(!P||!g.shot.points)return;let $=0,he=dn==="gather"?5.6:3.2,Me=[];for(let Se=0;Se<8;Se++){let De=Se/8*Ye;Me.push(Nn[$++].set(Math.sin(De)*he,0,Math.cos(De)*he))}for(let Se of G.values()){if(!Se.visible||$>60)continue;let De=Se.path&&Se.path.length?Se.path[Se.path.length-1]:Se.pos;Math.hypot(De.x,De.z)>P.Rp+1.5||(Me.push(Nn[$++].set(De.x,0,De.z)),Me.push(Nn[$++].set(De.x,2.4,De.z)))}for(let Se of B.values())$<62&&(Me.push(Nn[$++].set(Se.pos.x,2.6,Se.pos.z)),Me.push(Nn[$++].set(Se.pos.x,0,Se.pos.z)));g.shot.points=Me,g.shot.target.copy(Rd(Me,Me.length))}function r0(P,W){if(P.startsWith("room:")){let Me=Y&&Y.actors.get(P.slice(5));return!Me||!Me.ch.visible?!1:(W.set(Me.ch.pos.x,Me.ch.pos.y+Me.ch.headY+.15,Me.ch.pos.z),!0)}if(P.startsWith("cine:")){let Me=ie.get(P);return!Me||!Me.ch.visible?!1:(W.set(Me.ch.pos.x,Me.ch.root.position.y+Me.ch.headY+.15,Me.ch.pos.z),!0)}let $=G.get(P);if($&&$.visible)return W.set($.pos.x,$.pos.y+$.headY+.15,$.pos.z),!0;let he=B.get(P);return he?(W.set(he.pos.x,he.headY+.5+he.model.position.y,he.pos.z),!0):!1}function o0(P){let W=P.startsWith("room:")||P.startsWith("cine:");if(j)return W;if(W)return!0;let $=G.get(P);return B.has(P)?!0:!(!$||!$.visible||ue&&ue.room.phase==="night"&&P!==ue.me.id&&!b.has(P))}function a0(P,W){if(j)return!1;let $=R&&R.house(P);if(!$||$.scale<.6)return!1;let he=R.layout,Me=0;he&&he.n>9&&ge<700&&(Me=($.seat%2?1:-1)*2.2);let Se=Math.hypot($.cx,$.cz)||1;return W.set($.cx+$.cx/Se*Me,$.info.height*.9,$.cz+$.cz/Se*Me),!0}function l0(P){if(!(P!=="menu"&&P!=="game")&&P!==ve&&(ve=P,Qe="",l.dataset.view=P,!!pt)){if(P==="menu"){Ns(),Gi(null),xe.clear();for(let W of G.values())W.dispose();G.clear();for(let W of B.values())W.dispose();B.clear(),$e.reset(),H.reset(),Nt(null);for(let W of[...R.houses.keys()])R.setDead(W,!1);for(let W of R.houses.values())W.litTarget=1,W.dead=!1}else Nt(ue),ue&&Ti(!0);Gn(!0),g.snapNext=!1}}function c0(){H.reset(),Ns(),Gi(null),xe.clear();for(let P of G.values())P.dispose();G.clear();for(let P of B.values())P.dispose();if(B.clear(),$e.reset(),ue=null,Qe="",fs=0,pt){if(R)for(let P of[...R.houses.keys()])R.setDead(P,!1);Nt(null)}g.recenter(),Gn(!0)}function h0(P){if(P==="auto"){M="auto",L.failed.clear(),L.reset();return}Ps[P]&&(M=P,L.level=P,et(P))}function u0(){if(!qe){qe=!0,H.dispose(),cancelAnimationFrame(An),document.removeEventListener("visibilitychange",Ei),window.removeEventListener("resize",tt),window.removeEventListener("orientationchange",tt),Ae&&Ae.disconnect();for(let P of G.values())P.dispose();for(let P of B.values())P.dispose();G.clear(),B.clear(),R&&R.dispose(),A.dispose(),k.dispose(),C.dispose(),U.dispose(),D.dispose(),Ut.dispose(),Y&&Y.dispose();for(let P of ie.values())P.ch.dispose();ie.clear(),ce.length=0;for(let P of[O,F,v,w])P.dispose();xe.dispose(),Ee.dispose(),y.shadow.map&&y.shadow.map.dispose(),c.dispose(),c.forceContextLoss(),Yf(),l.remove(),clearTimeout(fe)}}Xa();let Sr={update:Ha,announce(P){return qe?Promise.resolve():!pt||ve!=="game"?(H.skip(),Promise.resolve()):(P&&P.kind==="start"&&P.scenario&&Gi(P.scenario.id),H.announce(P))},skip(){H.skip()},bubble(P,W,$){if(!W)return;xe.bubble(P,String(W),$);let he=G.get(P);if(he&&he.visible&&!he.busy&&!he.once&&he.base==="idle"&&he.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),he&&he.visible)for(let Me of G.values())Me!==he&&Me.visible&&Math.hypot(Me.pos.x-he.pos.x,Me.pos.z-he.pos.z)<10&&Me.gaze(he.pos,3.5,Fe.time)},setView:l0,setQuality:h0,getQuality(){return M==="auto"?"auto":T.name},getTier(){return T.name},resize:_t,reset:c0,dispose:u0,setInsets(P){P=P||{},Ie={top:P.top||0,bottom:P.bottom||0,left:P.left||0,right:P.right||0,joystick:P.joystick===null?null:P.joystick&&typeof P.joystick=="object"?{left:+P.joystick.left||0,bottom:+P.joystick.bottom||0,size:+P.joystick.size||0}:void 0},g.setInsets(Ie),xe.setInsets(Ie),Ee.place(Ie,ge,ae),Gn(!1)},recenter(){Md()},setCameraMode(P){(P==="follow"||P==="overview")&&P!==Us&&Sd()},getCameraMode(){return Us},setMood(P={}){P.fog!=null&&(_e.fog=ut(+P.fog,.3,2)),P.tint!=null&&_e.tint.set(P.tint),P.tintAmt!=null&&(_e.tintAmt=ut(+P.tintAmt,0,1)),P.moon!=null&&_e.moon.set(P.moon),P.stars!=null&&(_e.stars=ut(+P.stars,0,1)),P.weather!=null&&(_e.weather=P.weather)},director:H,stats(){return{...Mn,tier:T.name,mode:M,px:Pe,scale:+(n.renderScale||1).toFixed(2),hour:+se.toFixed(2),ready:pt,p50:bo(qa,.5),p95:bo(qa,.95),p99:bo(qa,.99),cpu50:bo(wh,.5),cpu95:bo(wh,.95)}},resetStats(){Ds=0,So=0},setScenario(P){Gi(P)},_debug:{world:Fe,scene:_,renderer:c,camera:p,rig:g,get village(){return R},get room(){return Y},get roomMode(){return j},setHour(P){se=P}}},f0=Sr.update;Sr.update=(P,W)=>{P&&P.serverNow&&(sn=P.serverNow-Date.now()),f0(P,W)};for(let P of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode"]){let W=Sr[P];Sr[P]=function(...$){try{return W.apply(Sr,$)}catch(he){return pe("api."+P,he),P==="announce"?Promise.resolve():void 0}}}return Sr}var Ls=null,Mh=new Set,Sh=0,dd=0;function wb(){if(Ls)return Ls;let s=new co({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Ft,s.toneMapping=hr,s.setClearColor(0,0),Ls={renderer:s,users:0},Ls}function Yg(s){if(Sh=0,!Mh.size||(Sh=requestAnimationFrame(Yg),document.hidden)||s-dd<1e3/24)return;let e=Math.min(.1,(s-dd)/1e3||.04);dd=s;for(let t of Mh)t.draw(e)}function Kg(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=wb();r.users++;let o=new Zs,a=new jt(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let l=new sr("#dfe8ff","#5a4a40",1.3);o.add(l);let c=new ri("#fff2dc",2.6);c.position.set(1.8,3.5,5);let u=new ri("#ffd7a8",.8);u.position.set(-3,1.5,3.5),o.add(u),o.add(c);let h=new ri("#8fb4ff",1.6);h.position.set(-3,2.5,-3),o.add(h);let f=new Mt(new er(.85,40),new xn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,m={...e},_=!1,p=t.yaw!=null?t.yaw:.18,g=0,M=t.yaw!=null?t.yaw:0,L=!1,S=0,T=0,E=t.turntable!==!1,x={sfxStep:null,sfx(){}};function y(){_||!ih("chars")||(d?d.setLook(m):(d=new wi(x,"preview",m),o.add(d.root),d.idleTimer=2))}ih("chars")?y():gr(["chars"]).then(y).catch(()=>{});let I=F=>{L=!0,S=F.clientX,T=0,n.setPointerCapture&&n.setPointerCapture(F.pointerId)},A=F=>{if(!L)return;let v=F.clientX-S;S=F.clientX,p+=v*.012,T=v*.012*24},k=()=>{L=!1};n.addEventListener("pointerdown",I),n.addEventListener("pointermove",A),n.addEventListener("pointerup",k),n.addEventListener("pointercancel",k);let O={draw(F){if(_||!d)return;let v=s.clientWidth,w=s.clientHeight;if(v<4||w<4||!n.isConnected)return;let D=Math.min(window.devicePixelRatio||1,2),C=Math.round(v*D),U=Math.round(w*D);(n.width!==C||n.height!==U)&&(n.width=C,n.height=U);let R=r.renderer,G=R.getSize(new st);(G.x<C||G.y<U)&&R.setSize(Math.max(G.x,C),Math.max(G.y,U),!1);let B=R.getSize(new st);if(R.setViewport(0,B.y-U,C,U),R.setScissor(0,B.y-U,C,U),R.setScissorTest(!0),a.aspect=v/w,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!L){g+=F,p+=T*F,T*=Math.exp(-3*F);let oe=p-M;oe=Math.atan2(Math.sin(oe),Math.cos(oe));let ie=E?Math.sin(g*.7)*.42:0;Math.abs(T)<.4&&(p=M+oe+(ie-oe)*Math.min(1,F*1.6))}d.yaw=p,d.update(F,performance.now()/1e3),R.clear(),R.render(o,a),i.clearRect(0,0,C,U),i.drawImage(R.domElement,0,B.y-U,C,U,0,0,C,U)}};return Mh.add(O),Sh||(Sh=requestAnimationFrame(Yg)),{setLook(F){m={...m,...F},y()},dispose(){_||(_=!0,Mh.delete(O),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&Ls&&(Ls.renderer.dispose(),Ls.renderer.forceContextLoss(),Ls=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&nh(new URL("../assets/models/",s).href)}catch{}var Tb="2.1.0",Eb=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function Ab(s){nh(s)}return x0(Rb);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
