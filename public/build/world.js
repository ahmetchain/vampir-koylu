var VKWorld=(()=>{var Zh=Object.defineProperty;var B0=Object.getOwnPropertyDescriptor;var H0=Object.getOwnPropertyNames;var G0=Object.prototype.hasOwnProperty;var tp=(s,e)=>{for(var t in e)Zh(s,t,{get:e[t],enumerable:!0})},V0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of H0(e))!G0.call(s,i)&&i!==t&&Zh(s,i,{get:()=>e[i],enumerable:!(n=B0(e,i))||n.enumerable});return s};var W0=s=>V0(Zh({},"__esModule",{value:!0}),s);var rw={};tp(rw,{COLORS:()=>Rg,HATS:()=>Cg,QUALITIES:()=>iw,SKINS:()=>Ig,create:()=>m0,preview:()=>x0,setAssetBase:()=>sw,supported:()=>Id,version:()=>nw});var Kp=0,Uu=1,Zp=2;var dr=1,Jp=2,mo=3,Li=0,mn=1,sn=2,pr=0,yi=1,Yn=2,Fu=3,Ou=4,$p=5;var mr=100,jp=101,Qp=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,zu=204,ku=205,om=206,am=207,lm=208,cm=209,hm=210,um=211,fm=212,dm=213,pm=214,Hl=0,Gl=1,Vl=2,jr=3,Wl=4,Xl=5,ql=6,Yl=7,dc=0,mm=1,gm=2,Di=0,Bu=1,Hu=2,Gu=3,Vu=4,Wu=5,Xu=6,gr=7,wu="attached",xm="detached",qu=300,xr=301,go=302,pc=303,mc=304,xs=1e3,Wn=1001,Qr=1002,en=1003,gc=1004;var vr=1005;var fn=1006,xo=1007;var ri=1008;var Kn=1009,Yu=1010,Ku=1011,vo=1012,xc=1013,oi=1014,Dn=1015,Mi=1016,vc=1017,_c=1018,_r=1020,Zu=35902,Ju=35899,$u=1021,ju=1022,Xn=1023,Qi=1026,as=1027,yc=1028,wa=1029,bs=1030,Mc=1031;var bc=1033,Ea=33776,Ta=33777,Aa=33778,Ra=33779,Sc=35840,wc=35841,Ec=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Ic=37488,Pc=37489,Ca=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,zc=37813,kc=37814,Bc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Kc=36494,Zc=36495,Jc=36283,$c=36284,Ia=36285,jc=36286,Pa=2200,vm=2201,_m=2202,$s=2300,js=2301,kl=2302,Eu=2303,Ks=2400,Zs=2401,Qo=2402,Qc=2500,ym=2501,Qu=0,La=1,_o=2,Mm=3200;var Da=0,bm=1,ls="",Ot="srgb",Nn="srgb-linear",ea="linear",zt="srgb";var Bl=7680;var Sm=519,wm=512,Em=513,Tm=514,ef=515,Am=516,Rm=517,tf=518,nf=519,sf=35044,Na=35048;var rf="300 es",ni=2e3,eo=2001;function X0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function q0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function to(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cm(){let s=to("canvas");return s.style.display="block",s}var np={},no=null;function ta(...s){let e="THREE."+s.shift();no?no("log",e,...s):console.log(e,...s)}function Im(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=Im(s);let e="THREE."+s.shift();if(no)no("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function mt(...s){s=Im(s);let e="THREE."+s.shift();if(no)no("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Js(...s){let e=s.join(" ");e in np||(np[e]=!0,ct(...s))}function Pm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[Hl]:Hl,[Vl]:ql,[Wl]:Wl,[jr]:Xl,[Gl]:Gl,[ql]:Vl,[Yl]:Yl,[Xl]:jr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ip=1234567,$o=Math.PI/180,Qs=180/Math.PI;function Ni(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function of(s,e){return(s%e+e)%e}function Y0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function K0(s,e,t){return s!==e?(t-s)/(e-s):0}function jo(s,e,t){return(1-t)*s+t*e}function Z0(s,e,t,n){return jo(s,e,1-Math.exp(-t*n))}function J0(s,e=1){return e-Math.abs(of(s,e*2)-e)}function $0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function j0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Q0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ex(s,e){return s+Math.random()*(e-s)}function tx(s){return s*(.5-Math.random())}function nx(s){s!==void 0&&(ip=s);let e=ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ix(s){return s*$o}function sx(s){return s*Qs}function rx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ox(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function af(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ax(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function eh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lf(s,e){if(e.constructor===Float32Array)return s;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function cf(s,e){if(e.constructor===Float32Array)return s;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var th={DEG2RAD:$o,RAD2DEG:Qs,generateUUID:Ni,clamp:It,euclideanModulo:of,mapLinear:Y0,inverseLerp:K0,lerp:jo,damp:Z0,pingpong:J0,smoothstep:$0,smootherstep:j0,randInt:Q0,randFloat:ex,randFloatSpread:tx,seededRandom:nx,degToRad:ix,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:ox,floorPowerOfTwo:af,setQuaternionFromProperEuler:ax,normalize:cf,denormalize:lf},pf=class pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(It(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pf.prototype.isVector2=!0;var ht=pf,Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*v;m<0&&(f=-f,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),P=Math.sin(M);g=Math.sin(g*M)/P,a=Math.sin(a*M)/P,c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+v*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+v*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mf=class mf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(It(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mf.prototype.isVector3=!0;var X=mf,Jh=new X,sp=new Kt,gf=class gf{constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],v=i[0],m=i[3],g=i[6],M=i[1],P=i[4],b=i[7],T=i[2],C=i[5],x=i[8];return r[0]=o*v+a*M+c*T,r[3]=o*m+a*P+c*C,r[6]=o*g+a*b+c*x,r[1]=l*v+h*M+u*T,r[4]=l*m+h*P+u*C,r[7]=l*g+h*b+u*x,r[2]=f*v+d*M+p*T,r[5]=f*m+d*P+p*C,r[8]=f*g+d*b+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($h.makeScale(e,t)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($h.makeRotation(-e)),this}translate(e,t){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gf.prototype.isMatrix3=!0;var xt=gf,$h=new xt,rp=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),op=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){let s={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===zt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===zt&&(i.r=$r(i.r),i.g=$r(i.g),i.b=$r(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Nn]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:rp,fromXYZ:op,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:zt,toXYZ:rp,fromXYZ:op,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),s}var At=lx();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Dr,Kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=to("canvas")),Dr.width=e.width,Dr.height=e.height;let i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cx=0,io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jh(i[o].image)):r.push(jh(i[o]))}else r=jh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function jh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Kl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var hx=0,Qh=new X,dn=class s extends pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Wn,i=Wn,r=fn,o=ri,a=Xn,c=Kn,l=s.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ni(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=qu;dn.DEFAULT_ANISOTROPY=1;var xf=class xf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(l+1)/2,b=(d+1)/2,T=(g+1)/2,C=(h+f)/4,x=(u+v)/4,_=(p+m)/4;return P>b&&P>T?P<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(P),i=C/n,r=x/n):b>T?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=C/i,r=_/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=_/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(It(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xf.prototype.isVector4=!0;var Ht=xf,Zl=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new io(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fc=class fc{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f+v*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,fx)}lookAt(e,t,n){let i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),us.crossVectors(n,$n),us.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),us.crossVectors(n,$n)),us.normalize(),cl.crossVectors($n,us),i[0]=us.x,i[4]=cl.x,i[8]=$n.x,i[1]=us.y,i[5]=cl.y,i[9]=$n.y,i[2]=us.z,i[6]=cl.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],M=n[3],P=n[7],b=n[11],T=n[15],C=i[0],x=i[4],_=i[8],N=i[12],I=i[1],H=i[5],B=i[9],O=i[13],L=i[2],J=i[6],S=i[10],E=i[14],z=i[3],y=i[7],R=i[11],U=i[15];return r[0]=o*C+a*I+c*L+l*z,r[4]=o*x+a*H+c*J+l*y,r[8]=o*_+a*B+c*S+l*R,r[12]=o*N+a*O+c*E+l*U,r[1]=h*C+u*I+f*L+d*z,r[5]=h*x+u*H+f*J+d*y,r[9]=h*_+u*B+f*S+d*R,r[13]=h*N+u*O+f*E+d*U,r[2]=p*C+v*I+m*L+g*z,r[6]=p*x+v*H+m*J+g*y,r[10]=p*_+v*B+m*S+g*R,r[14]=p*N+v*O+m*E+g*U,r[3]=M*C+P*I+b*L+T*z,r[7]=M*x+P*H+b*J+T*y,r[11]=M*_+P*B+b*S+T*R,r[15]=M*N+P*O+b*E+T*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15],M=c*d-l*f,P=a*d-l*u,b=a*f-c*u,T=o*d-l*h,C=o*f-c*h,x=o*u-a*h;return t*(v*M-m*P+g*b)-n*(p*M-m*T+g*C)+i*(p*P-v*T+g*x)-r*(p*b-v*C+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],M=t*a-n*o,P=t*c-i*o,b=t*l-r*o,T=n*c-i*a,C=n*l-r*a,x=i*l-r*c,_=h*v-u*p,N=h*m-f*p,I=h*g-d*p,H=u*m-f*v,B=u*g-d*v,O=f*g-d*m,L=M*O-P*B+b*H+T*I-C*N+x*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/L;return e[0]=(a*O-c*B+l*H)*J,e[1]=(i*B-n*O-r*H)*J,e[2]=(v*x-m*C+g*T)*J,e[3]=(f*C-u*x-d*T)*J,e[4]=(c*I-o*O-l*N)*J,e[5]=(t*O-i*I+r*N)*J,e[6]=(m*b-p*x-g*P)*J,e[7]=(h*x-f*b+d*P)*J,e[8]=(o*B-a*I+l*_)*J,e[9]=(n*I-t*B-r*_)*J,e[10]=(p*C-v*b+g*M)*J,e[11]=(u*b-h*C-d*M)*J,e[12]=(a*N-o*H-c*_)*J,e[13]=(t*H-n*N+i*_)*J,e[14]=(v*P-p*T-m*M)*J,e[15]=(h*T-u*P+f*M)*J,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,v=o*h,m=o*u,g=a*u,M=c*l,P=c*h,b=c*u,T=n.x,C=n.y,x=n.z;return i[0]=(1-(v+g))*T,i[1]=(d+b)*T,i[2]=(p-P)*T,i[3]=0,i[4]=(d-b)*C,i[5]=(1-(f+g))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(p+P)*x,i[9]=(m-M)*x,i[10]=(1-(f+v))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Nr.set(i[0],i[1],i[2]).length(),a=Nr.set(i[4],i[5],i[6]).length(),c=Nr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ui.copy(this);let l=1/o,h=1/a,u=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=ni,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===eo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ni,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===ni)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===eo)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fc.prototype.isMatrix4=!0;var ot=fc,Nr=new X,ui=new ot,ux=new X(0,0,0),fx=new X(1,1,1),us=new X,cl=new X,$n=new X,ap=new ot,lp=new Kt,Ci=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dx=0,cp=new X,Ur=new Kt,Wi=new ot,hl=new X,ko=new X,px=new X,mx=new Kt,hp=new X(1,0,0),up=new X(0,1,0),fp=new X(0,0,1),dp={type:"added"},gx={type:"removed"},Fr={type:"childadded",child:null},eu={type:"childremoved",child:null},Xt=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new X,t=new Ci,n=new Kt,i=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new xt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ko,hl,this.up):Wi.lookAt(hl,ko,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),Ur.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gx),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new X(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},ul={h:0,s:0,l:0};function tu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=of(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tu(o,r,e+1/3),this.g=tu(o,r,e),this.b=tu(o,r,e-1/3)}return At.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return At.workingToColorSpace(An.copy(this),e),Math.round(It(An.r*255,0,255))*65536+Math.round(It(An.g*255,0,255))*256+Math.round(It(An.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(An.copy(this),t);let n=An.r,i=An.g,r=An.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Ot){At.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,i=An.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(ul);let n=jo(fs.h,ul.h,t),i=jo(fs.s,ul.s,t),r=jo(fs.l,ul.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ne;Ne.NAMES=Dm;var ia=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new X,Xi=new X,nu=new X,qi=new X,Or=new X,zr=new X,pp=new X,iu=new X,su=new X,ru=new X,ou=new Ht,au=new Ht,lu=new Ht,Ji=class s{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fi.subVectors(i,t),Xi.subVectors(n,t),nu.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Xi),c=fi.dot(nu),l=Xi.dot(Xi),h=Xi.dot(nu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Xi.subVectors(e,t),fi.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Or.subVectors(i,n),zr.subVectors(r,n),iu.subVectors(e,n);let c=Or.dot(iu),l=zr.dot(iu);if(c<=0&&l<=0)return t.copy(n);su.subVectors(e,i);let h=Or.dot(su),u=zr.dot(su);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Or,o);ru.subVectors(e,r);let d=Or.dot(ru),p=zr.dot(ru);if(p>=0&&d<=p)return t.copy(r);let v=d*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(zr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return pp.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(pp,a);let g=1/(m+v+f);return o=v*g,a=f*g,t.copy(n).addScaledVector(Or,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fl.copy(n.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),dl.subVectors(this.max,Bo),kr.subVectors(e.a,Bo),Br.subVectors(e.b,Bo),Hr.subVectors(e.c,Bo),ds.subVectors(Br,kr),ps.subVectors(Hr,Br),Vs.subVectors(kr,Hr);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Vs.z,Vs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Vs.z,0,-Vs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Vs.y,Vs.x,0];return!cu(t,kr,Br,Hr,dl)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,kr,Br,Hr,dl))?!1:(pl.crossVectors(ds,ps),t=[pl.x,pl.y,pl.z],cu(t,kr,Br,Hr,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,fl=new un,kr=new X,Br=new X,Hr=new X,ds=new X,ps=new X,Vs=new X,Bo=new X,dl=new X,pl=new X,Ws=new X;function cu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ws.fromArray(s,r);let a=i.x*Math.abs(Ws.x)+i.y*Math.abs(Ws.y)+i.z*Math.abs(Ws.z),c=e.dot(Ws),l=t.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var an=new X,ml=new ht,vx=0,bt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sf,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):cf(e,this.array)}};var sa=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ra=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},_x=new un,Ho=new X,hu=new X,jt=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(hu)),this.expandByPoint(Ho.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yx=0,ti=new ot,uu=new Xt,Gr=new X,jn=new un,Go=new un,_n=new X,Pt=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?ra:sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(jn.min,Go.min),jn.expandByPoint(_n),_n.addVectors(jn.max,Go.max),jn.expandByPoint(_n)):(jn.expandByPoint(Go.min),jn.expandByPoint(Go.max))}jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_n.fromBufferAttribute(a,l),c&&(Gr.fromBufferAttribute(e,l),_n.add(Gr)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new X,c[N]=new X;let h=new X,u=new X,f=new X,d=new ht,p=new ht,v=new ht,m=new X,g=new X;function M(N,I,H){l[N]=l[I]=l[H]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,H),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,I),v.fromBufferAttribute(r,H),u.sub(h),f.sub(h),p.sub(d),v.sub(d);let B=1/(p.x*v.y-v.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(B),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(B),a[N].add(m),a[I].add(m),a[H].add(m),c[N].add(g),c[I].add(g),c[H].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let N=0,I=P.length;N<I;++N){let H=P[N],B=H.start,O=H.count;for(let L=B,J=B+O;L<J;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new X,T=new X,C=new X,x=new X;function _(N){C.fromBufferAttribute(i,N),x.copy(C);let I=a[N];b.copy(I),b.sub(C.multiplyScalar(C.dot(I))).normalize(),T.crossVectors(x,I);let B=T.dot(c[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,B)}for(let N=0,I=n.count;N<I;++N)l[N]&&_(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new X,r=new X,o=new X,a=new X,c=new X,l=new X,h=new X,u=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new bt(f,h,u)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sf,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mp(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ni()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Ln=new X,vs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?eh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):cf(e,this.data.array)}},fu=new X,Mx=new X,bx=new xt,Qn=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fu.subVectors(n,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bx.getNormalMatrix(e),i=this.coplanarPoint(fu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sx=0,Cn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=yi,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=ku,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oo=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Vo=new X,Wr=new X,Xr=new X,qr=new ht,Wo=new ht,Nm=new ot,gl=new X,Xo=new X,xl=new X,gp=new ht,du=new ht,xp=new ht,oa=class extends Xt{constructor(e=new oo){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tr(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new vs(n,3,0,!1)),Vr.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new ht(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;vl(gl.set(-.5,-.5,0),Xr,o,Wr,i,r),vl(Xo.set(.5,-.5,0),Xr,o,Wr,i,r),vl(xl.set(.5,.5,0),Xr,o,Wr,i,r),gp.set(0,0),du.set(1,0),xp.set(1,1);let a=e.ray.intersectTriangle(gl,Xo,xl,!1,Vo);if(a===null&&(vl(Xo.set(-.5,.5,0),Xr,o,Wr,i,r),du.set(0,1),a=e.ray.intersectTriangle(gl,xl,Xo,!1,Vo),a===null))return;let c=e.ray.origin.distanceTo(Vo);c<e.near||c>e.far||t.push({distance:c,point:Vo.clone(),uv:Ji.getInterpolation(Vo,gl,Xo,xl,gp,du,xp,new ht),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function vl(s,e,t,n,i,r){qr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Wo.x=r*qr.x-i*qr.y,Wo.y=i*qr.x+r*qr.y):Wo.copy(qr),s.copy(e),s.x+=Wo.x,s.y+=Wo.y,s.applyMatrix4(Nm)}var Ki=new X,pu=new X,_l=new X,yl=new X,_s=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),yl.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=yl.dot(this.direction),c=-yl.dot(_l),l=yl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(pu).addScaledVector(_l,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,P=n.z-o.z,b=Math.abs(c),T=Math.abs(l),C=Math.abs(h),x,_,N,I,H,B,O,L,J,S,E,z;if(b>=T&&b>=C?(N=c,B=u,J=p,z=g,c>=0?(x=l,_=h,I=f,H=d,O=v,L=m,S=M,E=P):(x=h,_=l,I=d,H=f,O=m,L=v,S=P,E=M)):T>=C?(N=l,B=f,J=v,z=M,l>=0?(x=h,_=c,I=d,H=u,O=m,L=p,S=P,E=g):(x=c,_=h,I=u,H=d,O=p,L=m,S=g,E=P)):(N=h,B=d,J=m,z=P,h>=0?(x=c,_=l,I=u,H=f,O=p,L=v,S=g,E=M):(x=l,_=c,I=f,H=u,O=v,L=p,S=M,E=g)),N===0)return null;let y=x/N,R=_/N,U=1/N,Y=I-y*B,ie=H-R*B,Q=O-y*J,Z=L-R*J,W=S-y*z,V=E-R*z,j=W*Z-V*Q,ve=Y*V-ie*W,De=Q*ie-Z*Y;if(i){if(j<0||ve<0||De<0)return null}else if((j<0||ve<0||De<0)&&(j>0||ve>0||De>0))return null;let Ee=j+ve+De;if(Ee===0)return null;let ke=U*(j*B+ve*J+De*z);return(Ee>0?ke<0:ke>0)?null:this.at(ke/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vp=new ot,Xs=new _s,Ml=new jt,_p=new X,bl=new X,Sl=new X,wl=new X,mu=new X,El=new X,yp=new X,Tl=new X,Mt=class extends Xt{constructor(e=new Pt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){El.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mu.fromBufferAttribute(u,e),o?El.addScaledVector(mu,h):El.addScaledVector(mu.sub(t),h))}t.add(El)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ml.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ml,_p)===null||Xs.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(vp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(vp),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),P=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,T=P;b<T;b+=3){let C=a.getX(b),x=a.getX(b+1),_=a.getX(b+2);i=Al(this,g,e,n,l,h,u,C,x,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let M=a.getX(m),P=a.getX(m+1),b=a.getX(m+2);i=Al(this,o,e,n,l,h,u,M,P,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let m=f[p],g=o[m.materialIndex],M=Math.max(m.start,d.start),P=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=M,T=P;b<T;b+=3){let C=b,x=b+1,_=b+2;i=Al(this,g,e,n,l,h,u,C,x,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let M=m,P=m+1,b=m+2;i=Al(this,o,e,n,l,h,u,M,P,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function wx(s,e,t,n,i,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Li,a),c===null)return null;Tl.copy(a),Tl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Tl);return l<t.near||l>t.far?null:{distance:l,point:Tl.clone(),object:s}}function Al(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,bl),s.getVertexPosition(c,Sl),s.getVertexPosition(l,wl);let h=wx(s,e,t,n,bl,Sl,wl,yp);if(h){let u=new X;Ji.getBarycoord(yp,bl,Sl,wl,u),i&&(h.uv=Ji.getInterpolatedAttribute(i,a,c,l,u,new ht)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,c,l,u,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new X,materialIndex:0};Ji.getNormal(bl,Sl,wl,f.normal),h.face=f,h.barycoord=u}return h}var qo=new Ht,Mp=new Ht,bp=new Ht,Ex=new Ht,Sp=new ot,Rl=new X,gu=new jt,wp=new ot,xu=new _s,nr=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingBox.expandByPoint(Rl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rl),this.boundingSphere.expandByPoint(Rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gu.copy(this.boundingSphere),gu.applyMatrix4(i),e.ray.intersectsSphere(gu)!==!1&&(wp.copy(i).invert(),xu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xm?this.bindMatrixInverse.copy(this.bindMatrix).invert():ct("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Mp.fromBufferAttribute(i.attributes.skinIndex,e),bp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(qo.copy(t),t.set(0,0,0,0)):(qo.set(t.x,t.y,t.z,1),t.set(0,0,0)),qo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=bp.getComponent(r);if(o!==0){let a=Mp.getComponent(r);Sp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ex.copy(qo).applyMatrix4(Sp),o)}}return t.isVector4&&(t.w=qo.w),t.applyMatrix4(this.bindMatrixInverse)}},ao=class extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ji=class extends dn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=en,h=en,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ep=new ot,Tx=new ot,aa=class s{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ct("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Tx;Ep.multiplyMatrices(a,t[r]),Ep.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ji(t,e,e,Xn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ct("Skeleton: No bone found with UUID:",r),o=new ao),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Un=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new ot,Tp=new ot,Cl=[],Ap=new un,Ax=new ot,Yo=new Mt,Ko=new jt,ir=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),Ap.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),Ko.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yr),Tp.multiplyMatrices(n,Yr),Yo.matrixWorld=Tp,Yo.raycast(e,Cl);for(let o=0,a=Cl.length;o<a;o++){let c=Cl[o];c.instanceId=r,c.object=this,t.push(c)}Cl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(i*this.count),i,this.count,yc,Dn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new jt,Rx=new ht(.5,.5),Il=new X,mi=class{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],M=r[12],P=r[13],b=r[14],T=r[15];if(i[0].setComponents(l-o,d-h,g-p,T-M).normalize(),i[1].setComponents(l+o,d+h,g+p,T+M).normalize(),i[2].setComponents(l+a,d+u,g+v,T+P).normalize(),i[3].setComponents(l-a,d-u,g-v,T-P).normalize(),n)i[4].setComponents(c,f,m,b).normalize(),i[5].setComponents(l-c,d-f,g-m,T-b).normalize();else if(i[4].setComponents(l-c,d-f,g-m,T-b).normalize(),t===ni)i[5].setComponents(l+c,d+f,g+m,T+b).normalize();else if(t===eo)i[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=Rx.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Il.x=i.normal.x>0?e.max.x:e.min.x,Il.y=i.normal.y>0?e.max.y:e.min.y,Il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rp=new ot,la=class s{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Rp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new mi),n[i].setFromProjectionMatrix(Rp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new mi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};function vu(s,e){return s-e}function Cx(s,e){return s.z-e.z}function Ix(s,e){return e.z-s.z}var Tu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Vn=new ot,Px=new Ne(1,1,1),Lx=new mi,Dx=new la,Pl=new un,Ys=new jt,_u=new X,Cp=new X,Ip=new X,Nx=new X,yu=new Tu,Rn=new Mt,Ll=[];function Ux(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ai(s,e){if(s.constructor!==e.constructor){let t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{let t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}var lo=class extends Mt{constructor(e,t,n=t*2,i){super(new Pt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ji(t,e,e,Xn,Dn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ji(t,e,e,wa,oi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ji(t,e,e,Xn,Dn);n.colorSpace=At.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new bt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new bt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,Pl).applyMatrix4(Vn),e.union(Pl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Ys).applyMatrix4(Vn),e.union(Ys)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(vu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Vn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Px.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(vu),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),f=n.getAttribute(h);Ux(u,f,c);let d=u.itemSize;for(let p=u.count,v=l;p<v;p++){let m=c+p;for(let g=0;g<d;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,d=u;f<d;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:f}=l,d=r.index,p=d.array,v=e-u;for(let m=h;m<h+f;m++)p[m]=p[m]+v;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,f=r.attributes;for(let d in f){let p=f[d],{array:v,itemSize:m}=p;v.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m),p.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){let r=new un,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(_u.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){let r=new jt;this.getBoundingBoxAt(e,Pl),Pl.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),_u.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(_u))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(vu);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let i=new Int32Array(e),r=new Int32Array(e);Ai(this._multiDrawCounts,i),Ai(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),c=new Int32Array(e);Ai(this._mergedDrawCounts,o),Ai(this._mergedDrawStarts,a),Ai(this._mergedDrawInstanceCounts,c),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=c,this._maxInstanceCount=e;let l=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Ai(l.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Ai(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ai(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Pt,this._initializeGeometry(r));let o=this.geometry;r.index&&Ai(r.index.array,o.index.array);for(let a in r.attributes)Ai(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Rn.material=this.material,Rn.geometry.index=o.index,Rn.geometry.attributes=o.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new un),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new jt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];Rn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Rn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Rn.geometry.boundingBox),this.getBoundingSphereAt(l,Rn.geometry.boundingSphere),Rn.raycast(e,Ll);for(let u=0,f=Ll.length;u<f;u++){let d=Ll[u];d.object=this,d.batchId=a,t.push(d)}Ll.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,f=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,p=this._geometryInfo,v=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,M=e.isArrayCamera?Dx:Lx;v&&(e.isArrayCamera?M.setFromArrayCamera(e):(Vn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),M.setFromProjectionMatrix(Vn,e.coordinateSystem,e.reversedDepth)));let P=0,b=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),Cp.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Vn),Ip.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Vn);for(let x=0,_=c.length;x<_;x++)if(c[x].visible&&c[x].active){let N=c[x].geometryIndex;this.getMatrixAt(x,Vn),this.getBoundingSphereAt(N,Ys).applyMatrix4(Vn);let I=!1;if(v&&(I=!M.intersectsSphere(Ys)),!I){let H=p[N],B=Nx.subVectors(Ys.center,Cp).dot(Ip);yu.push(H.start,H.count,B,x)}}let T=yu.list,C=this.customSort;C===null?T.sort(n.transparent?Ix:Cx):C.call(this,T,e);for(let x=0,_=T.length;x<_;x++){let N=T[x],I=N.start*o*a,H=N.count*a;i==="merged"?b>0&&u[b-1]===I&&f[b-1]===H?d[b-1]++:(u[b]=I,f[b]=H,d[b]=1,b++):(l[P]=I,h[P]=H),g[P]=N.index,P++}yu.reset()}else for(let T=0,C=c.length;T<C;T++)if(c[T].visible&&c[T].active){let x=c[T].geometryIndex,_=!1;if(v&&(this.getMatrixAt(T,Vn),this.getBoundingSphereAt(x,Ys).applyMatrix4(Vn),_=!M.intersectsSphere(Ys)),!_){let N=p[x],I=N.start*o*a,H=N.count*a;i==="merged"?b>0&&u[b-1]===I&&f[b-1]===H?d[b-1]++:(u[b]=I,f[b]=H,d[b]=1,b++):(l[P]=I,h[P]=H),g[P]=T,P++}}m.needsUpdate=!0,this._multiDrawCount=P,this._mergedDrawCount=b,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,i,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(e,t,n,i,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}},co=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new X,jl=new X,Pp=new ot,Zo=new _s,Dl=new jt,Mu=new X,Lp=new X,sr=class extends Xt{constructor(e=new Pt,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$l.fromBufferAttribute(t,i-1),jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$l.distanceTo(jl);e.setAttribute("lineDistance",new Dt(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(i),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Pp.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){let g=h.getX(v),M=h.getX(v+1),P=Nl(this,e,Zo,c,g,M,v);P&&t.push(P)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(d),g=Nl(this,e,Zo,c,v,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){let g=Nl(this,e,Zo,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=Nl(this,e,Zo,c,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if($l.fromBufferAttribute(a,i),jl.fromBufferAttribute(a,r),t.distanceSqToSegment($l,jl,Mu,Lp)>n)return;Mu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:Lp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Dp=new X,Np=new X,ca=class extends sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dp.fromBufferAttribute(t,i),Np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dp.distanceTo(Np);e.setAttribute("lineDistance",new Dt(n,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ha=class extends sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ho=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Up=new ot,Au=new _s,Ul=new jt,Fl=new X,gi=class extends Xt{constructor(e=new Pt,t=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(i),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Up.copy(i).invert(),Au.copy(e.ray).applyMatrix4(Up);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,v=d;p<v;p++){let m=l.getX(p);Fl.fromBufferAttribute(u,m),Fp(Fl,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,v=d;p<v;p++)Fl.fromBufferAttribute(u,p),Fp(Fl,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fp(s,e,t,n,i,r,o){let a=Au.distanceSqToPoint(s);if(a<t){let c=new X;Au.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class extends dn{constructor(e=[],t=xr,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rr=class extends dn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends dn{constructor(e,t,n=oi,i,r,o,a=en,c=en,l,h=Qi,u=1){if(h!==Qi&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends es{constructor(e,t=oi,n=xr,i,r,o=en,a=en,c,l=Qi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},da=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xi=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function p(v,m,g,M,P,b,T,C,x,_,N){let I=b/x,H=T/_,B=b/2,O=T/2,L=C/2,J=x+1,S=_+1,E=0,z=0,y=new X;for(let R=0;R<S;R++){let U=R*H-O;for(let Y=0;Y<J;Y++){let ie=Y*I-B;y[v]=ie*M,y[m]=U*P,y[g]=L,l.push(y.x,y.y,y.z),y[v]=0,y[m]=0,y[g]=C>0?1:-1,h.push(y.x,y.y,y.z),u.push(Y/x),u.push(1-R/_),E+=1}}for(let R=0;R<_;R++)for(let U=0;U<x;U++){let Y=f+U+J*R,ie=f+U+J*(R+1),Q=f+(U+1)+J*(R+1),Z=f+(U+1)+J*R;c.push(Y,ie,Z),c.push(ie,Q,Z),z+=6}a.addGroup(d,z,N),d+=z,f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var or=class s extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new X,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ts=class s extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],m=n/2,g=0;M(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function M(){let b=new X,T=new X,C=0,x=(t-e)/n;for(let _=0;_<=r;_++){let N=[],I=_/r,H=I*(t-e)+e;for(let B=0;B<=i;B++){let O=B/i,L=O*c+a,J=Math.sin(L),S=Math.cos(L);T.x=H*J,T.y=-I*n+m,T.z=H*S,u.push(T.x,T.y,T.z),b.set(J,x,S).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-I),N.push(p++)}v.push(N)}for(let _=0;_<i;_++)for(let N=0;N<r;N++){let I=v[N][_],H=v[N+1][_],B=v[N+1][_+1],O=v[N][_+1];(e>0||N!==0)&&(h.push(I,H,O),C+=3),(t>0||N!==r-1)&&(h.push(H,B,O),C+=3)}l.addGroup(g,C,0),g+=C}function P(b){let T=p,C=new ht,x=new X,_=0,N=b===!0?e:t,I=b===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*I,0),f.push(0,I,0),d.push(.5,.5),p++;let H=p;for(let B=0;B<=i;B++){let L=B/i*c+a,J=Math.cos(L),S=Math.sin(L);x.x=N*S,x.y=m*I,x.z=N*J,u.push(x.x,x.y,x.z),f.push(0,I,0),C.x=J*.5+.5,C.y=S*.5*I+.5,d.push(C.x,C.y),p++}for(let B=0;B<i;B++){let O=T+B,L=H+B;b===!0?h.push(L,L+1,O):h.push(L+1,L,O),_+=3}l.addGroup(g,_,b===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ql=class s extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let P=new X,b=new X,T=new X;for(let C=0;C<t.length;C+=3)d(t[C+0],P),d(t[C+1],b),d(t[C+2],T),c(P,b,T,M)}function c(M,P,b,T){let C=T+1,x=[];for(let _=0;_<=C;_++){x[_]=[];let N=M.clone().lerp(b,_/C),I=P.clone().lerp(b,_/C),H=C-_;for(let B=0;B<=H;B++)B===0&&_===C?x[_][B]=N:x[_][B]=N.clone().lerp(I,B/H)}for(let _=0;_<C;_++)for(let N=0;N<2*(C-_)-1;N++){let I=Math.floor(N/2);N%2===0?(f(x[_][I+1]),f(x[_+1][I]),f(x[_][I])):(f(x[_][I+1]),f(x[_+1][I+1]),f(x[_+1][I]))}}function l(M){let P=new X;for(let b=0;b<r.length;b+=3)P.x=r[b+0],P.y=r[b+1],P.z=r[b+2],P.normalize().multiplyScalar(M),r[b+0]=P.x,r[b+1]=P.y,r[b+2]=P.z}function h(){let M=new X;for(let P=0;P<r.length;P+=3){M.x=r[P+0],M.y=r[P+1],M.z=r[P+2];let b=m(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;o.push(b,1-T)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let P=o[M+0],b=o[M+2],T=o[M+4],C=Math.max(P,b,T),x=Math.min(P,b,T);C>.9&&x<.1&&(P<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,P){let b=M*3;P.x=e[b+0],P.y=e[b+1],P.z=e[b+2]}function p(){let M=new X,P=new X,b=new X,T=new X,C=new ht,x=new ht,_=new ht;for(let N=0,I=0;N<r.length;N+=9,I+=6){M.set(r[N+0],r[N+1],r[N+2]),P.set(r[N+3],r[N+4],r[N+5]),b.set(r[N+6],r[N+7],r[N+8]),C.set(o[I+0],o[I+1]),x.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),T.copy(M).add(P).add(b).divideScalar(3);let H=m(T);v(C,I+0,M,H),v(x,I+2,P,H),v(_,I+4,b,H)}}function v(M,P,b,T){T<0&&M.x===1&&(o[P]=M.x-1),b.x===0&&b.z===0&&(o[P]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var pa=class s extends Ql{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var vi=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let M=g*f-o;for(let P=0;P<l;P++){let b=P*u-r;p.push(b,-M,0),v.push(0,0,1),m.push(P/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){let P=M+l*g,b=M+l*(g+1),T=M+1+l*(g+1),C=M+1+l*g;d.push(P,b,C),d.push(b,T,C)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ma=class s extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new X,f=new X,d=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let M=[],P=g/n,b=o+P*a,T=e*Math.cos(b),C=Math.sqrt(e*e-T*T),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let _=0;_<=t;_++){let N=_/t,I=i+N*r;u.x=-C*Math.cos(I),u.y=T,u.z=C*Math.sin(I),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(N+x,1-P),M.push(l++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let P=h[g][M+1],b=h[g][M],T=h[g+1][M],C=h[g+1][M+1];(g!==0||o>0)&&d.push(P,b,C),(g!==n-1||c<Math.PI)&&d.push(b,T,C)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ga=class s extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new X,d=new X,p=new X;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=i;g++){let M=g/i*r;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){let g=(i+1)*v+m-1,M=(i+1)*(v-1)+m-1,P=(i+1)*(v-1)+m,b=(i+1)*v+m;c.push(g,M,b),c.push(M,P,b)}this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function yr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Op(i))i.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Op(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function In(s){let e={};for(let t=0;t<s.length;t++){let n=yr(s[t]);for(let i in n)e[i]=n[i]}return e}function Op(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Fx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Um={clone:yr,merge:In},Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ec=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ar=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends ar{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Js('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Js('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pn=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tc=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nc=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Jo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function kx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Bx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ks,endingEnd:Ks}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zs:r=e,a=2*t-n;break;case Qo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zs:o=e,c=2*n-t;break;case Qo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,M=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,P=(-1-d)*m+(1.5+d)*v+.5*p,b=d*m-d*v;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+M*o[l+T]+P*o[c+T]+b*o[u+T];return r}},xa=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},sc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends Ii{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let v=o[l+p],m=o[c+p],g=d*f+p*2,M=u[g],P=u[g+1],b=e*f+p*2,T=h[b],C=h[b+1],x=Gx(n,t,M,T,i);r[p]=Fm(x,v,P,C,m)}return r}};function Fm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Hx(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Gx(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Fm(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=Hx(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Jo(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break;case Eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return kl;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Jo(this.settings)&&(kp(this.settings.inTangents,e),kp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Jo(this.settings)&&(Bp(this.settings.inTangents,e),Bp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){mt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&q0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){mt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Jo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function kp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Bp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=js;var ns=class extends qn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=$s;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};va.prototype.ValueTypeName="color";var is=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};is.prototype.ValueTypeName="number";var oc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ss=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends qn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$s;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};ys.prototype.ValueTypeName="vector";var _i=class{constructor(e="",t=-1,n=[],i=Qc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=kx(c);c=zp(c,1,h),l=zp(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new is(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return va;case"quaternion":return ss;case"bool":case"boolean":return ns;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Wx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vx(s.type);if(s.times===void 0){let n=[],i=[];Bx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Jo(s.settings)&&(t.settings={inTangents:gs(s.settings.inTangents,Float32Array),outTangents:gs(s.settings.outTangents,Float32Array)}),t}var ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Hp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Hp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ac=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new ac,Pi=class{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},Ru=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ii.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Zi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,v=0,m=new ReadableStream({start(g){M();function M(){u.read().then(({done:P,value:b})=>{if(P)g.close();else{v+=b.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let C=0,x=h.length;C<x;C++){let _=h[C];_.onProgress&&_.onProgress(T)}g.enqueue(b),M()}},P=>{g.error(P)})}}});return new Response(m)}else throw new Ru(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{ii.add(`file:${e}`,l);let h=Zi[e];delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Zi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Kr=new WeakMap,lc=class extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Kr.get(o);u===void 0&&(u=[],Kr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=to("img");function c(){h(),t&&t(this);let u=Kr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),ii.remove(`image:${e}`);let f=Kr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var lr=class extends Pi{constructor(e){super(e)}load(e,t,n,i){let r=new dn,o=new lc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},cr=class extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hr=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bu=new ot,Gp=new X,Vp=new X,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Vp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===eo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=new X,zl=new Kt,Ri=new X,_a=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,zl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,zl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ol,zl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,zl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new X,Wp=new ht,Xp=new ht,Qt=class extends _a{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Wp,Xp),t.subVectors(Xp,Wp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cu=class extends fo{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ya=class extends cr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Iu=class extends fo{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Iu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fr=class extends _a{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pu=class extends fo{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ma=class extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Su=new WeakMap,ba=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&ct("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&ct("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Su.has(o)===!0?(i&&i(Su.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Su.set(c,l),ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zr=-90,Jr=1,po=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(Zr,Jr,e,t);i.layers=this.layers,this.add(i);let r=new Qt(Zr,Jr,e,t);r.layers=this.layers,this.add(r);let o=new Qt(Zr,Jr,e,t);o.layers=this.layers,this.add(o);let a=new Qt(Zr,Jr,e,t);a.layers=this.layers,this.add(a);let c=new Qt(Zr,Jr,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Zr,Jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},cc=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var hc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},uf="\\[\\]\\.:\\/",Xx=new RegExp("["+uf+"]","g"),ff="[^"+uf+"]",qx="[^"+uf.replace("\\.","")+"]",Yx=/((?:WC+[\/:])*)/.source.replace("WC",ff),Kx=/(WCOD+)?/.source.replace("WCOD",qx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),$x=new RegExp("^"+Yx+Kx+Zx+Jx+"$"),jx=["material","materials","bones","map"],Lu=class{constructor(e,t,n){let i=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){let t=$x.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Lu;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ks,endingEnd:Ks};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=vm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ym:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Qc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===_m;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Pa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Zs,i.endingEnd=Zs):(e?i.endingStart=this.zeroSlopeAtStart?Zs:Ks:i.endingStart=Qo,t?i.endingEnd=this.zeroSlopeAtEnd?Zs:Ks:i.endingEnd=Qo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Qx=new Float32Array(1),Ms=class extends pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new hc(Vt.create(n,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xa(new Float32Array(2),new Float32Array(2),1,Qx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?_i.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Qc),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new uc(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?_i.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var qp=new ot,Sa=class{constructor(e,t,n=0,i=1/0){this.ray=new _s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qp),this}intersectObject(e,t=!0,n=[]){return Du(e,this,n,t),n.sort(Yp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Du(e[i],this,n,t);return n.sort(Yp),n}};function Yp(s,e){return s.distance-e.distance}function Du(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Du(r[o],e,t,!0)}}var vf=class vf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};vf.prototype.isMatrix2=!0;var Nu=vf;function df(s,e,t,n){let i=ev(n);switch(t){case $u:return s*e;case yc:return s*e/i.components*i.byteLength;case wa:return s*e/i.components*i.byteLength;case bs:return s*e*2/i.components*i.byteLength;case Mc:return s*e*2/i.components*i.byteLength;case ju:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case bc:return s*e*4/i.components*i.byteLength;case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:case Tc:return Math.max(s,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(s,8)*Math.max(e,8)/2;case Ac:case Rc:case Ic:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ca:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yc:case Kc:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ia:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ev(s){switch(s){case Kn:case Yu:return{byteLength:1,components:1};case vo:case Ku:case Mi:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case oi:case xc:case Dn:return{byteLength:4,components:1};case Zu:case Ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rg(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nv(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
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
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gv=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Av=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
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
}`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,e_=`uniform sampler2D dfgLUT;
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
}`,t_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
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
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H_=`float getShadowMask() {
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform float backgroundBlurriness;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Iy=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:iv,alphahash_pars_fragment:sv,alphamap_fragment:rv,alphamap_pars_fragment:ov,alphatest_fragment:av,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:hv,batching_pars_vertex:uv,batching_vertex:fv,begin_vertex:dv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:gv,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:yv,clipping_planes_vertex:Mv,color_fragment:bv,color_pars_fragment:Sv,color_pars_vertex:wv,color_vertex:Ev,common:Tv,defaultnormal_vertex:Av,displacementmap_pars_vertex:Rv,displacementmap_vertex:Cv,emissivemap_fragment:Iv,emissivemap_pars_fragment:Pv,colorspace_fragment:Lv,colorspace_pars_fragment:Dv,envmap_fragment:Nv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Fv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Bv,fog_fragment:Hv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Jv,lights_phong_fragment:$v,lights_phong_pars_fragment:jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:e_,lights_fragment_begin:t_,lights_fragment_maps:n_,lights_fragment_end:i_,lightprobes_pars_fragment:s_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:h_,map_particle_fragment:u_,map_particle_pars_fragment:f_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:x_,morphtarget_pars_vertex:v_,morphtarget_vertex:__,normal_fragment_begin:y_,normal_fragment_maps:M_,normal_pars_fragment:b_,normal_pars_vertex:S_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:R_,iridescence_pars_fragment:C_,opaque_fragment:I_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:D_,dithering_fragment:N_,dithering_pars_fragment:U_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:B_,shadowmask_pars_fragment:H_,skinbase_vertex:G_,skinning_pars_vertex:V_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:Y_,tonemapping_fragment:K_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:$_,uv_pars_fragment:j_,uv_pars_vertex:Q_,uv_vertex:ey,worldpos_vertex:ty,background_vert:ny,background_frag:iy,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:oy,cube_frag:ay,depth_vert:ly,depth_frag:cy,distance_vert:hy,distance_frag:uy,equirect_vert:fy,equirect_frag:dy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:xy,meshlambert_vert:vy,meshlambert_frag:_y,meshmatcap_vert:yy,meshmatcap_frag:My,meshnormal_vert:by,meshnormal_frag:Sy,meshphong_vert:wy,meshphong_frag:Ey,meshphysical_vert:Ty,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Iy,points_frag:Py,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Ny,sprite_frag:Uy},Ye={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Fi={basic:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:In([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:In([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:In([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:In([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:In([Ye.points,Ye.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:In([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:In([Ye.common,Ye.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:In([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:In([Ye.sprite,Ye.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:In([Ye.common,Ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:In([Ye.lights,Ye.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Fi.physical={uniforms:In([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var nh={r:0,b:0,g:0},Fy=new ot,og=new xt;og.set(-1,0,0,0,1,0,0,0,1);function Oy(s,e,t,n,i,r){let o=new Ne(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(M){let P=M.isScene===!0?M.background:null;if(P&&P.isTexture){let b=M.backgroundBlurriness>0;P=e.get(P,b)}return P}function p(M){let P=!1,b=d(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),P=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,P){let b=d(P);b&&b.isCubeTexture?(l===void 0&&(l=new Mt(new xi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:yr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(P.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(og),l.material.toneMapped=At.getTransfer(b.colorSpace)!==zt,(h!==b||u!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Mt(new vi(2,2),new nn({name:"BackgroundMaterial",uniforms:yr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=At.getTransfer(b.colorSpace)!==zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,P){M.getRGB(nh,hf(s)),t.buffers.color.setClear(nh.r,nh.g,nh.b,P,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,P=1){o.set(M),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:v,dispose:g}}function zy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(H,B,O,L,J){let S=!1,E=u(H,L,O,B);r!==E&&(r=E,l(r.object)),S=d(H,L,O,J),S&&p(H,L,O,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(S||o)&&(o=!1,b(H,B,O,L),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return s.createVertexArray()}function l(H){return s.bindVertexArray(H)}function h(H){return s.deleteVertexArray(H)}function u(H,B,O,L){let J=L.wireframe===!0,S=n[B.id];S===void 0&&(S={},n[B.id]=S);let E=H.isInstancedMesh===!0?H.id:0,z=S[E];z===void 0&&(z={},S[E]=z);let y=z[O.id];y===void 0&&(y={},z[O.id]=y);let R=y[J];return R===void 0&&(R=f(c()),y[J]=R),R}function f(H){let B=[],O=[],L=[];for(let J=0;J<t;J++)B[J]=0,O[J]=0,L[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:L,object:H,attributes:{},index:null}}function d(H,B,O,L){let J=r.attributes,S=B.attributes,E=0,z=O.getAttributes();for(let y in z)if(z[y].location>=0){let U=J[y],Y=S[y];if(Y===void 0&&(y==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),y==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;E++}return r.attributesNum!==E||r.index!==L}function p(H,B,O,L){let J={},S=B.attributes,E=0,z=O.getAttributes();for(let y in z)if(z[y].location>=0){let U=S[y];U===void 0&&(y==="instanceMatrix"&&H.instanceMatrix&&(U=H.instanceMatrix),y==="instanceColor"&&H.instanceColor&&(U=H.instanceColor));let Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),J[y]=Y,E++}r.attributes=J,r.attributesNum=E,r.index=L}function v(){let H=r.newAttributes;for(let B=0,O=H.length;B<O;B++)H[B]=0}function m(H){g(H,0)}function g(H,B){let O=r.newAttributes,L=r.enabledAttributes,J=r.attributeDivisors;O[H]=1,L[H]===0&&(s.enableVertexAttribArray(H),L[H]=1),J[H]!==B&&(s.vertexAttribDivisor(H,B),J[H]=B)}function M(){let H=r.newAttributes,B=r.enabledAttributes;for(let O=0,L=B.length;O<L;O++)B[O]!==H[O]&&(s.disableVertexAttribArray(O),B[O]=0)}function P(H,B,O,L,J,S,E){E===!0?s.vertexAttribIPointer(H,B,O,J,S):s.vertexAttribPointer(H,B,O,L,J,S)}function b(H,B,O,L){v();let J=L.attributes,S=O.getAttributes(),E=B.defaultAttributeValues;for(let z in S){let y=S[z];if(y.location>=0){let R=J[z];if(R===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(R=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(R=H.instanceColor)),R!==void 0){let U=R.normalized,Y=R.itemSize,ie=e.get(R);if(ie===void 0)continue;let Q=ie.buffer,Z=ie.type,W=ie.bytesPerElement,V=Z===s.INT||Z===s.UNSIGNED_INT||R.gpuType===xc;if(R.isInterleavedBufferAttribute){let j=R.data,ve=j.isInterleavedBuffer===!0?j.stride:j.itemSize,De=R.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let Ee=0;Ee<y.locationSize;Ee++)g(y.location+Ee,j.meshPerAttribute);H.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<y.locationSize;Ee++)m(y.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Ee=0;Ee<y.locationSize;Ee++)P(y.location+Ee,Y/y.locationSize,Z,U,ve*W,(De+Y/y.locationSize*Ee)*W,V)}else{if(R.isInstancedBufferAttribute){for(let j=0;j<y.locationSize;j++)g(y.location+j,R.meshPerAttribute);H.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let j=0;j<y.locationSize;j++)m(y.location+j);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let j=0;j<y.locationSize;j++)P(y.location+j,Y/y.locationSize,Z,U,Y*W,Y/y.locationSize*j*W,V)}}else if(E!==void 0){let U=E[z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(y.location,U);break;case 3:s.vertexAttrib3fv(y.location,U);break;case 4:s.vertexAttrib4fv(y.location,U);break;default:s.vertexAttrib1fv(y.location,U)}}}}M()}function T(){N();for(let H in n){let B=n[H];for(let O in B){let L=B[O];for(let J in L){let S=L[J];for(let E in S)h(S[E].object),delete S[E];delete L[J]}}delete n[H]}}function C(H){if(n[H.id]===void 0)return;let B=n[H.id];for(let O in B){let L=B[O];for(let J in L){let S=L[J];for(let E in S)h(S[E].object),delete S[E];delete L[J]}}delete n[H.id]}function x(H){for(let B in n){let O=n[B];for(let L in O){let J=O[L];if(J[H.id]===void 0)continue;let S=J[H.id];for(let E in S)h(S[E].object),delete S[E];delete J[H.id]}}}function _(H){for(let B in n){let O=n[B],L=H.isInstancedMesh===!0?H.id:0,J=O[L];if(J!==void 0){for(let S in J){let E=J[S];for(let z in E)h(E[z].object),delete E[z];delete J[S]}delete O[L],Object.keys(O).length===0&&delete n[B]}}}function N(){I(),o=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function ky(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function By(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Xn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Kn&&x!==Dn&&!_&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ct("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:P,maxFragmentUniforms:b,maxSamples:T,samples:C}}function Hy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Qn,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,P=M*4,b=g.clippingState||null;c.value=b,b=h(p,f,P,d);for(let T=0;T!==P;++T)b[T]=t[T];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,p!==!0||m===null){let g=d+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let P=0,b=d;P!==v;++P,b+=4)o.copy(u[P]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Oa=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ua(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:pr});r.uniforms.tEquirect.value=t;let o=new Mt(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=fn),new po(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},zm=256,Gy=3,Vy=20,ag=256,lg=16,Wy=3,Xy=new X,qy=new Ne,sh=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new po(1,10,null),this._boxMesh=new Mt(new xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Xy}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,p=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(qy));let m=new po(n,i,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zm,af(e))}_fromTexture(e,t){e.mapping===xr||e.mapping===go?this._setSize(e.image.length===0?zm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=km(e,!1,!1),n=Math.log2(e)-Gy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xr||e.mapping===go?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yy(),this._integrationMaterial=Ky());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Wy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(ag*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function km(s,e,t){return new Oa(s,{minFilter:ri,generateMipmaps:e,type:Mi,colorSpace:Nn,depthBuffer:t})}function za(s,e,t){return new nn({name:s,uniforms:e,vertexShader:Et.cube_vert,fragmentShader:t,side:mn,blending:pr,depthTest:!1,depthWrite:!1})}function Yy(){return za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ag}u

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
	`)}function Ky(){return za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lg}},`

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
	`)}function Zy(){return za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vy}
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
	`)}function Bm(){return za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hm(){return za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===pc||d===mc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new Oa(p.height);return v.fromEquirectangularTexture(s,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===pc||d===mc,v=d===xr||d===go;if(p||v){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new sh(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return p&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new sh(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===pc?f.mapping=xr:d===mc&&(f.mapping=go),f}function c(f){let d=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function $y(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Js("WebGLRenderer: "+n+" extension not supported."),i}}}function jy(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],s.ARRAY_BUFFER)}function u(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,P=m.count>=65535?ra:sa,b=new P(Math.ceil(M/3)*6,1),T=b.array;if(v!==null){let x=v.array;g=v.version;for(let _=0,N=0;_<M;_+=3){let I=x[_+0],H=x[_+1],B=x[_+2];T[N++]=I,T[N++]=H,T[N++]=H,T[N++]=B,T[N++]=B,T[N++]=I}}else{g=m.version;for(let x=0,_=0;x<M;x+=3){let N=x+0,I=x+1,H=x+2;T[_++]=N,T[_++]=I,T[_++]=I,T[_++]=H,T[_++]=H,T[_++]=N}}b.version=g;let C=r.get(p);C&&e.remove(C),r.set(p,b)}function f(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in i){let v=i[p].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function Qy(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function eM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tM(s,e,t){let n=new WeakMap,i=new Ht;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],P=0;d===!0&&(P=1),p===!0&&(P=2),v===!0&&(P=3);let b=a.attributes.position.count*P,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let C=new Float32Array(b*T*4*u),x=new na(C,b,T,u);x.type=Dn,x.needsUpdate=!0;let _=P*4;for(let I=0;I<u;I++){let H=m[I],B=g[I],O=M[I],L=b*T*4*I;for(let J=0;J<H.count;J++){let S=J*_;d===!0&&(i.fromBufferAttribute(H,J),C[L+S+0]=i.x,C[L+S+1]=i.y,C[L+S+2]=i.z,C[L+S+3]=0),p===!0&&(i.fromBufferAttribute(B,J),C[L+S+4]=i.x,C[L+S+5]=i.y,C[L+S+6]=i.z,C[L+S+7]=0),v===!0&&(i.fromBufferAttribute(O,J),C[L+S+8]=i.x,C[L+S+9]=i.y,C[L+S+10]=i.z,C[L+S+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new ht(b,T)},n.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function nM(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var iM={[Bu]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Gu]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[gr]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function sM(s,e,t,n,i,r){let o=new ei(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Pt;h.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let u=new ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Mt(h,u),d=new fr(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,M=null,P=[],b=!1;this.setSize=function(T,C){o.setSize(T,C),a!==null&&a.setSize(T,C),c!==null&&c.setSize(T,C);for(let x=0;x<P.length;x++){let _=P[x];_.setSize&&_.setSize(T,C)}},this.setEffects=function(T){P=T,b=P.length>0&&P[0].isRenderPass===!0;let C=o.width,x=o.height;P.length>0&&a===null&&(a=new ei(C,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),c=new ei(C,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&P.some(N=>N.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&l===null&&(l=new es(C,x),r===!0&&(l.format=as,l.type=_r)),o.dispose(),o.depthTexture=_?l:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let N=0;N<P.length;N++){let I=P[N];I.setSize&&I.setSize(C,x),_&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(T,C){if(m||T.toneMapping===Di&&P.length===0)return!1;if(M=C,C!==null){let x=C.width,_=C.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return b===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Di,!0},this.hasRenderPass=function(){return b},this.end=function(T,C){T.toneMapping=g,m=!0;let x=o,_=a;for(let N=0;N<P.length;N++){let I=P[N];I.enabled!==!1&&(I.render(T,_,x,C),I.needsSwap!==!1&&(x=_,_=_===a?c:a))}if(p!==T.outputColorSpace||v!==T.toneMapping){p=T.outputColorSpace,v=T.toneMapping,u.defines={},At.getTransfer(p)===zt&&(u.defines.SRGB_TRANSFER="");let N=iM[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(f,d),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var cg=new dn,hg=new es(1,1),ug=new fa(1),fg=new na,dg=new Jl,pg=new ua,Gm=[],Vm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function bo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Gm[i];if(r===void 0&&(r=new Float32Array(i),Gm[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rh(s,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function rM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function oM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function aM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function lM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function cM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;qm.set(n),s.uniformMatrix2fv(this.addr,!1,qm),xn(t,n)}}function hM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Xm.set(n),s.uniformMatrix3fv(this.addr,!1,Xm),xn(t,n)}}function uM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Wm.set(n),s.uniformMatrix4fv(this.addr,!1,Wm),xn(t,n)}}function fM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function dM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function pM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function mM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function gM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function vM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function _M(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function oh(s){return s.version===0&&(s.compareFunction=nf,s.needsUpdate=!0),s}function yM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=oh(hg):r=cg,t.setTexture2D(e||r,i)}function MM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dg,i)}function bM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=oh(ug):r=pg,t.setTextureCube(e||r,i)}function SM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fg,i)}function wM(s){switch(s){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return hM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return xM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return SM}}function EM(s,e){s.uniform1fv(this.addr,e)}function TM(s,e){let t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function AM(s,e){let t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function RM(s,e){let t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function CM(s,e){let t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function IM(s,e){let t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function PM(s,e){let t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function LM(s,e){s.uniform1iv(this.addr,e)}function DM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function UM(s,e){s.uniform4iv(this.addr,e)}function FM(s,e){s.uniform1uiv(this.addr,e)}function OM(s,e){s.uniform2uiv(this.addr,e)}function zM(s,e){s.uniform3uiv(this.addr,e)}function kM(s,e){s.uniform4uiv(this.addr,e)}function BM(s,e,t){let n=this.cache,i=e.length,r=rh(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=oh(hg):o=cg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function HM(s,e,t){let n=this.cache,i=e.length,r=rh(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dg,r[o])}function GM(s,e,t){let n=this.cache,i=e.length,r=rh(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=oh(ug):o=pg;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function VM(s,e,t){let n=this.cache,i=e.length,r=rh(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fg,r[o])}function WM(s){switch(s){case 5126:return EM;case 35664:return TM;case 35665:return AM;case 35666:return RM;case 35674:return CM;case 35675:return IM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return NM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return VM}}var Mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wM(t.type)}},bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WM(t.type)}},Sf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},_f=/(\w+)(\])?(\[|\.)?/g;function Ym(s,e){s.seq.push(e),s.map[e.id]=e}function XM(s,e,t){let n=s.name,i=n.length;for(_f.lastIndex=0;;){let r=_f.exec(n),o=_f.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ym(t,l===void 0?new Mf(a,s,e):new bf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Sf(a),Ym(t,u)),t=u}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);XM(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Km(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var qM=37297,YM=0;function KM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zm=new xt;function ZM(s){At._getMatrix(Zm,At.workingColorSpace,s);let e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+KM(s.getShaderSource(e),a)}else return r}function JM(s,e){let t=ZM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $M={[Bu]:"Linear",[Hu]:"Reinhard",[Gu]:"Cineon",[Vu]:"ACESFilmic",[Xu]:"AgX",[gr]:"Neutral",[Wu]:"Custom"};function jM(s,e){let t=$M[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ih=new X;function QM(){At.getLuminanceCoefficients(ih);let s=ih.x.toFixed(4),e=ih.y.toFixed(4),t=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function tb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Fa(s){return s!==""}function $m(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(s){return s.replace(ib,sb)}function sb(s,e){let t=Et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wf(t)}var rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(s){return s.replace(rb,ob)}function ob(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function eg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var ab={[dr]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function lb(s){return ab[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cb={[go]:"ENVMAP_MODE_REFRACTION"};function hb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ub={[dc]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function fb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ub[s.combine]||"ENVMAP_BLENDING_NONE"}function db(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=lb(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hb(t),u=fb(t),f=eb(t),d=tb(r),p=i.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(v=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Et.tonemapping_pars_fragment:"",t.toneMapping!==Di?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,JM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=wf(o),o=$m(o,t),o=jm(o,t),a=wf(a),a=$m(a,t),a=jm(a,t),o=Qm(o),a=Qm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+v+o,P=g+m+a,b=Km(i,i.VERTEX_SHADER,M),T=Km(i,i.FRAGMENT_SHADER,P);i.attachShader(p,b),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function C(I){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(p)||"",B=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(T)||"",L=H.trim(),J=B.trim(),S=O.trim(),E=!0,z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(E=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,T);else{let y=Jm(i,b,"vertex"),R=Jm(i,T,"fragment");mt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+y+`
`+R)}else L!==""?ct("WebGLProgram: Program Info Log:",L):(J===""||S==="")&&(z=!1);z&&(I.diagnostics={runnable:E,programLog:L,vertexShader:{log:J,prefix:v},fragmentShader:{log:S,prefix:m}})}i.deleteShader(b),i.deleteShader(T),x=new yo(i,p),_=nb(i,p)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(p,qM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}var pb=0,Ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tf(e),t.set(e,n)),n}},Tf=class{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}};function mb(s){return s===bs||s===Ca||s===Ia}function gb(s,e,t,n,i,r){let o=new so,a=new Ef,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,_,N,I,H,B){let O=I.fog,L=H.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,S=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,E=e.get(x.envMap||J,S),z=f[x.type],y=n.precision;x.precision!==null&&(y=n.getMaxPrecision(x.precision),y!==x.precision&&ct("WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));let R=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=R!==void 0?R.length:0,Y=0;L.morphAttributes.position!==void 0&&(Y=1),L.morphAttributes.normal!==void 0&&(Y=2),L.morphAttributes.color!==void 0&&(Y=3);let ie,Q,Z,W;if(z){let Ge=Fi[z];ie=Ge.vertexShader,Q=Ge.fragmentShader}else{ie=x.vertexShader,Q=x.fragmentShader;let Ge=a.getVertexShaderStage(x),Ft=a.getFragmentShaderStage(x);a.update(x,Ge,Ft),Z=Ge.id,W=Ft.id}let V=s.getRenderTarget(),j=s.state.buffers.depth.getReversed(),ve=H.isInstancedMesh===!0,De=H.isBatchedMesh===!0,Ee=!!x.map,ke=!!x.matcap,Xe=!!E,Ke=Xe&&E.isPMREMTexture===!0,at=!!x.aoMap,Qe=!!x.lightMap,Lt=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,wn=!!x.displacementMap,kt=!!x.emissiveMap,ye=!!x.metalnessMap,Me=!!x.roughnessMap,ce=x.anisotropy>0,q=x.clearcoat>0,Pe=x.diffuseRoughness>0,re=x.dispersion>0,_e=x.retroreflectivity>0,ae=x.iridescence>0,Ue=x.sheen>0,ee=x.transmission>0,Fe=ce&&!!x.anisotropyMap,F=q&&!!x.clearcoatMap,A=q&&!!x.clearcoatNormalMap,te=q&&!!x.clearcoatRoughnessMap,be=Pe&&!!x.diffuseRoughnessMap,xe=ae&&!!x.iridescenceMap,Ae=ae&&!!x.iridescenceThicknessMap,Ie=Ue&&!!x.sheenColorMap,fe=Ue&&!!x.sheenRoughnessMap,ge=!!x.specularMap,pe=!!x.specularColorMap,k=!!x.specularIntensityMap,se=ee&&!!x.transmissionMap,ne=ee&&!!x.thicknessMap,Te=!!x.gradientMap,Re=!!x.alphaMap,we=x.alphaTest>0,He=!!x.alphaHash,nt=!!x.extensions,Le=Di;x.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Le=s.toneMapping);let lt=Ke?E.isCompressedCubeTexture?E.image[0].mipmaps:E.mipmaps:null,yt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:Q,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:De,batchingColor:De&&H._colorsTexture!==null,instancing:ve,instancingColor:ve&&H.instanceColor!==null,instancingMorph:ve&&H.morphTexture!==null,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:ke,envMap:Xe,envMapMode:Xe&&E.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?lt.length-1:null,envMapSize:Ke?lt[0].width:null,aoMap:at,lightMap:Qe,bumpMap:Lt,normalMap:vt,displacementMap:wn,emissiveMap:kt,normalMapObjectSpace:vt&&x.normalMapType===bm,normalMapTangentSpace:vt&&x.normalMapType===Da,packedNormalMap:vt&&x.normalMapType===Da&&mb(x.normalMap.format),metalnessMap:ye,roughnessMap:Me,anisotropy:ce,anisotropyMap:Fe,clearcoat:q,clearcoatMap:F,clearcoatNormalMap:A,clearcoatRoughnessMap:te,diffuseRoughness:Pe,diffuseRoughnessMap:be,dispersion:re,retroreflection:_e,iridescence:ae,iridescenceMap:xe,iridescenceThicknessMap:Ae,sheen:Ue,sheenColorMap:Ie,sheenRoughnessMap:fe,specularMap:ge,specularColorMap:pe,specularIntensityMap:k,transmission:ee,transmissionMap:se,thicknessMap:ne,gradientMap:Te,opaque:x.transparent===!1&&x.blending===yi&&x.alphaToCoverage===!1,alphaMap:Re,alphaTest:we,alphaHash:He,combine:x.combine,mapUv:Ee&&d(x.map.channel),aoMapUv:at&&d(x.aoMap.channel),lightMapUv:Qe&&d(x.lightMap.channel),bumpMapUv:Lt&&d(x.bumpMap.channel),normalMapUv:vt&&d(x.normalMap.channel),displacementMapUv:wn&&d(x.displacementMap.channel),emissiveMapUv:kt&&d(x.emissiveMap.channel),metalnessMapUv:ye&&d(x.metalnessMap.channel),roughnessMapUv:Me&&d(x.roughnessMap.channel),anisotropyMapUv:Fe&&d(x.anisotropyMap.channel),clearcoatMapUv:F&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&d(x.sheenRoughnessMap.channel),specularMapUv:ge&&d(x.specularMap.channel),specularColorMapUv:pe&&d(x.specularColorMap.channel),specularIntensityMapUv:k&&d(x.specularIntensityMap.channel),transmissionMapUv:se&&d(x.transmissionMap.channel),thicknessMapUv:ne&&d(x.thicknessMap.channel),alphaMapUv:Re&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(vt||ce),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!L.attributes.uv&&(Ee||Re),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:B.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&At.getTransfer(x.map.colorSpace)===zt,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&At.getTransfer(x.emissiveMap.colorSpace)===zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function v(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)_.push(N),_.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(_,x),g(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function m(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function g(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let _=f[x.type],N;if(_){let I=Fi[_];N=Um.clone(I.uniforms)}else N=x.uniforms;return N}function P(x,_){let N=h.get(_);return N!==void 0?++N.usedTimes:(N=new db(s,_,x,i),l.push(N),h.set(_,N)),N}function b(x){if(--x.usedTimes===0){let _=l.indexOf(x);l[_]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:C}}function xb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function vb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,v,m,g){let M=s[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},s[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=p,M.materialVariant=o(f),M.groupOrder=v,M.renderOrder=f.renderOrder,M.z=m,M.group=g),e++,M}function c(f,d,p,v,m,g,M){M.reversedDepth===!0&&(m=-m);let P=a(f,d,p,v,m,g);p.transmission>0?n.push(P):p.transparent===!0?i.push(P):t.push(P)}function l(f,d,p,v,m,g){let M=a(f,d,p,v,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||vb),n.length>1&&n.sort(d||tg),i.length>1&&i.sort(d||tg)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function _b(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ng,s.set(n,[o])):i>=r.length?(o=new ng,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function yb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ne};break;case"SpotLight":t={position:new X,direction:new X,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function Mb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var bb=0;function Sb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wb(s){let e=new yb,t=Mb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);let i=new X,r=new ot,o=new ot;function a(l){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,M=0,P=0,b=0,T=0,C=0,x=0,_=0,N=0,I=0;l.sort(Sb);for(let B=0,O=l.length;B<O;B++){let L=l[B],J=L.color,S=L.intensity,E=L.distance,z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===bs?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=J.r*S,u+=J.g*S,f+=J.b*S;else if(L.isLightProbe){for(let y=0;y<9;y++)n.probe[y].addScaledVector(L.sh.coefficients[y],S);I++}else if(L.isSunLight){let y=e.get(L);if(y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,U=t.get(L);U.shadowIntensity=R.intensity,U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=z;let Y=R.getViewportCount();for(let ie=0;ie<Y;ie++)n.sunShadowMatrix[v+ie]=R.getMatrix(ie),n.sunShadowCascade[v+ie]=R._cascadeData[ie];v+=Y,p++}n.sun[d]=y,d++}else if(L.isDirectionalLight){let y=e.get(L);if(y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,U=t.get(L);U.shadowIntensity=R.intensity,U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=y,m++}else if(L.isSpotLight){let y=e.get(L);y.position.setFromMatrixPosition(L.matrixWorld),y.color.copy(J).multiplyScalar(S),y.distance=E,y.coneCos=Math.cos(L.angle),y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),y.decay=L.decay,n.spot[M]=y;let R=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,R.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[M]=R.matrix,L.castShadow){let U=t.get(L);U.shadowIntensity=R.intensity,U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,n.spotShadow[M]=U,n.spotShadowMap[M]=z,x++}M++}else if(L.isRectAreaLight){let y=e.get(L);y.color.copy(J).multiplyScalar(S),y.halfWidth.set(L.width*.5,0,0),y.halfHeight.set(0,L.height*.5,0),n.rectArea[P]=y,P++}else if(L.isPointLight){let y=e.get(L);if(y.color.copy(L.color).multiplyScalar(L.intensity),y.distance=L.distance,y.decay=L.decay,L.castShadow){let R=L.shadow,U=t.get(L);U.shadowIntensity=R.intensity,U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,U.shadowCameraNear=R.camera.near,U.shadowCameraFar=R.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,C++}n.point[g]=y,g++}else if(L.isHemisphereLight){let y=e.get(L);y.skyColor.copy(L.color).multiplyScalar(S),y.groundColor.copy(L.groundColor).multiplyScalar(S),n.hemi[b]=y,b++}}P>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let H=n.hash;(H.sunLength!==d||H.directionalLength!==m||H.pointLength!==g||H.spotLength!==M||H.rectAreaLength!==P||H.hemiLength!==b||H.numSunShadows!==p||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==x||H.numSpotMaps!==_||H.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=P,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+_-N,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,H.sunLength=d,H.directionalLength=m,H.pointLength=g,H.spotLength=M,H.rectAreaLength=P,H.hemiLength=b,H.numSunShadows=p,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=x,H.numSpotMaps=_,H.numLightProbes=I,n.version=bb++)}function c(l,h){let u=0,f=0,d=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let M=0,P=l.length;M<P;M++){let b=l[M];if(b.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),u++}else if(b.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(b.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function ig(s){let e=new wb(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Eb(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new ig(s),e.set(i,[a])):r>=o.length?(a=new ig(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
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
}`,Rb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Cb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],sg=new ot,Ua=new X,yf=new X;function Ib(s,e,t){let n=new mi,i=new ht,r=new ht,o=new Ht,a=new tc,c=new nc,l={},h=t.maxTextureSize,u={[Li]:mn,[mn]:Li,[sn]:sn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Tb,fragmentShader:Ab}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let g=this.type;this.render=function(C,x,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Jp&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let N=s.getRenderTarget(),I=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),B=s.state;B.setBlending(pr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=g!==this.type;O&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(J=>J.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,J=C.length;L<J;L++){let S=C[L],E=S.shadow;if(E===void 0){ct("WebGLShadowMap:",S,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;i.copy(E.mapSize);let z=E.getFrameExtents();i.multiply(z),r.copy(E.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,E.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,E.mapSize.y=r.y));let y=s.state.buffers.depth.getReversed();if(E.camera._reversedDepth=y,E.map===null||O===!0){if(E.map!==null&&(E.map.depthTexture!==null&&(E.map.depthTexture.dispose(),E.map.depthTexture=null),E.map.dispose()),this.type===mo){if(S.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}E.map=new ei(i.x,i.y,{format:bs,type:Mi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),E.map.texture.name=S.name+".shadowMap",E.map.depthTexture=new es(i.x,i.y,Dn),E.map.depthTexture.name=S.name+".shadowMapDepth",E.map.depthTexture.format=Qi,E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=en,E.map.depthTexture.magFilter=en}else S.isPointLight?(E.map=new Oa(i.x),E.map.depthTexture=new fa(i.x,oi)):(E.map=new ei(i.x,i.y),E.map.depthTexture=new es(i.x,i.y,oi)),E.map.depthTexture.name=S.name+".shadowMap",E.map.depthTexture.format=Qi,this.type===dr?(E.map.depthTexture.compareFunction=y?tf:ef,E.map.depthTexture.minFilter=fn,E.map.depthTexture.magFilter=fn):(E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=en,E.map.depthTexture.magFilter=en);E.camera.updateProjectionMatrix()}E.map.isWebGLCubeRenderTarget!==!0&&(E.map.width!==i.x||E.map.height!==i.y)&&E.map.setSize(i.x,i.y);let R=E.map.isWebGLCubeRenderTarget?6:E.getViewportCount();S.isPointLight!==!0&&E.updateMatrices(S,_);let U=(E.camera.layers.mask&4294967294)!==0?E.camera.layers:_.layers;for(let Y=0;Y<R;Y++){let ie=E.getCamera(Y);if(S.isPointLight){let Q=E.camera,Z=E.matrix,W=S.distance||Q.far;W!==Q.far&&(Q.far=W,Q.updateProjectionMatrix()),Ua.setFromMatrixPosition(S.matrixWorld),Q.position.copy(Ua),yf.copy(Q.position),yf.add(Rb[Y]),Q.up.copy(Cb[Y]),Q.lookAt(yf),Q.updateMatrixWorld(),Z.makeTranslation(-Ua.x,-Ua.y,-Ua.z),sg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),E._frustum.setFromProjectionMatrix(sg,Q.coordinateSystem,Q.reversedDepth)}if(E.map.isWebGLCubeRenderTarget)s.setRenderTarget(E.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(E.map),s.clear());let Q=E.getViewport(Y);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(o)}n=E.getFrustum(Y),b(x,_,ie,S,U,this.type)}E.isPointLightShadow!==!0&&this.type===mo&&M(E,_),E.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(N,I,H)};function M(C,x){let _=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new ei(i.x,i.y,{format:bs,type:Mi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(x,null,_,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(x,null,_,d,v,null)}function P(C,x,_,N){let I=null,H=_.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(H!==void 0)I=H;else if(I=_.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=I.uuid,O=x.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let J=L[O];J===void 0&&(J=I.clone(),L[O]=J,x.addEventListener("dispose",T)),I=J}if(I.visible=x.visible,I.wireframe=x.wireframe,N===mo?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:u[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=s.properties.get(I);B.light=_}return I}function b(C,x,_,N,I,H){if(C.visible===!1)return;if(C.layers.test(I)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&H===mo)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,C.matrixWorld);let L=e.update(C),J=C.material;if(Array.isArray(J)){let S=L.groups;for(let E=0,z=S.length;E<z;E++){let y=S[E],R=J[y.materialIndex];if(R&&R.visible){let U=P(C,R,N,H);C.onBeforeShadow(s,C,x,_,L,U,y),s.renderBufferDirect(_,null,L,U,C,y),C.onAfterShadow(s,C,x,_,L,U,y)}}}else if(J.visible){let S=P(C,J,N,H);C.onBeforeShadow(s,C,x,_,L,S,null),s.renderBufferDirect(_,null,L,S,C,null),C.onAfterShadow(s,C,x,_,L,S,null)}}let O=C.children;for(let L=0,J=O.length;L<J;L++)b(O[L],x,_,N,I,H)}function T(C){C.target.removeEventListener("dispose",T);for(let _ in l){let N=l[_],I=C.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function Pb(s,e){function t(){let k=!1,se=new Ht,ne=null,Te=new Ht(0,0,0,0);return{setMask:function(Re){ne!==Re&&!k&&(s.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){k=Re},setClear:function(Re,we,He,nt,Le){Le===!0&&(Re*=nt,we*=nt,He*=nt),se.set(Re,we,He,nt),Te.equals(se)===!1&&(s.clearColor(Re,we,He,nt),Te.copy(se))},reset:function(){k=!1,ne=null,Te.set(-1,0,0,0)}}}function n(){let k=!1,se=!1,ne=null,Te=null,Re=null;return{setReversed:function(we){if(se!==we){let He=e.get("EXT_clip_control");we?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),se=we;let nt=Re;Re=null,this.setClear(nt)}},getReversed:function(){return se},setTest:function(we){we?j(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(we){ne!==we&&!k&&(s.depthMask(we),ne=we)},setFunc:function(we){if(se&&(we=Lm[we]),Te!==we){switch(we){case Hl:s.depthFunc(s.NEVER);break;case Gl:s.depthFunc(s.ALWAYS);break;case Vl:s.depthFunc(s.LESS);break;case jr:s.depthFunc(s.LEQUAL);break;case Wl:s.depthFunc(s.EQUAL);break;case Xl:s.depthFunc(s.GEQUAL);break;case ql:s.depthFunc(s.GREATER);break;case Yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=we}},setLocked:function(we){k=we},setClear:function(we){Re!==we&&(Re=we,se&&(we=1-we),s.clearDepth(we))},reset:function(){k=!1,ne=null,Te=null,Re=null,se=!1}}}function i(){let k=!1,se=null,ne=null,Te=null,Re=null,we=null,He=null,nt=null,Le=null;return{setTest:function(lt){k||(lt?j(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(lt){se!==lt&&!k&&(s.stencilMask(lt),se=lt)},setFunc:function(lt,yt,Ge){(ne!==lt||Te!==yt||Re!==Ge)&&(s.stencilFunc(lt,yt,Ge),ne=lt,Te=yt,Re=Ge)},setOp:function(lt,yt,Ge){(we!==lt||He!==yt||nt!==Ge)&&(s.stencilOp(lt,yt,Ge),we=lt,He=yt,nt=Ge)},setLocked:function(lt){k=lt},setClear:function(lt){Le!==lt&&(s.clearStencil(lt),Le=lt)},reset:function(){k=!1,se=null,ne=null,Te=null,Re=null,we=null,He=null,nt=null,Le=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],v=null,m=!1,g=null,M=null,P=null,b=null,T=null,C=null,x=null,_=new Ne(0,0,0),N=0,I=!1,H=null,B=null,O=null,L=null,J=null,S=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,z=0,y=s.getParameter(s.VERSION);y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(y)[1]),E=z>=1):y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),E=z>=2);let R=null,U={},Y=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Q=new Ht().fromArray(Y),Z=new Ht().fromArray(ie);function W(k,se,ne,Te){let Re=new Uint8Array(4),we=s.createTexture();s.bindTexture(k,we),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ne;He++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(se+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return we}let V={};V[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(jr),Lt(!1),vt(Uu),j(s.CULL_FACE),at(pr);function j(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function ve(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function De(k,se){return f[k]!==se?(s.bindFramebuffer(k,se),f[k]=se,k===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),k===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Ee(k,se){let ne=p,Te=!1;if(k){ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne));let Re=k.textures;if(ne.length!==Re.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let we=0,He=Re.length;we<He;we++)ne[we]=s.COLOR_ATTACHMENT0+we;ne.length=Re.length,Te=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ne)}function ke(k){return v!==k?(s.useProgram(k),v=k,!0):!1}let Xe={[mr]:s.FUNC_ADD,[jp]:s.FUNC_SUBTRACT,[Qp]:s.FUNC_REVERSE_SUBTRACT};Xe[em]=s.MIN,Xe[tm]=s.MAX;let Ke={[nm]:s.ZERO,[im]:s.ONE,[sm]:s.SRC_COLOR,[zu]:s.SRC_ALPHA,[hm]:s.SRC_ALPHA_SATURATE,[lm]:s.DST_COLOR,[om]:s.DST_ALPHA,[rm]:s.ONE_MINUS_SRC_COLOR,[ku]:s.ONE_MINUS_SRC_ALPHA,[cm]:s.ONE_MINUS_DST_COLOR,[am]:s.ONE_MINUS_DST_ALPHA,[um]:s.CONSTANT_COLOR,[fm]:s.ONE_MINUS_CONSTANT_COLOR,[dm]:s.CONSTANT_ALPHA,[pm]:s.ONE_MINUS_CONSTANT_ALPHA};function at(k,se,ne,Te,Re,we,He,nt,Le,lt){if(k===pr){m===!0&&(ve(s.BLEND),m=!1);return}if(m===!1&&(j(s.BLEND),m=!0),k!==$p){if(k!==g||lt!==I){if((M!==mr||T!==mr)&&(s.blendEquation(s.FUNC_ADD),M=mr,T=mr),lt)switch(k){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ou:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:mt("WebGLState: Invalid blending: ",k);break}else switch(k){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fu:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",k);break}P=null,b=null,C=null,x=null,_.set(0,0,0),N=0,g=k,I=lt}return}Re=Re||se,we=we||ne,He=He||Te,(se!==M||Re!==T)&&(s.blendEquationSeparate(Xe[se],Xe[Re]),M=se,T=Re),(ne!==P||Te!==b||we!==C||He!==x)&&(s.blendFuncSeparate(Ke[ne],Ke[Te],Ke[we],Ke[He]),P=ne,b=Te,C=we,x=He),(nt.equals(_)===!1||Le!==N)&&(s.blendColor(nt.r,nt.g,nt.b,Le),_.copy(nt),N=Le),g=k,I=!1}function Qe(k,se){k.side===sn?ve(s.CULL_FACE):j(s.CULL_FACE);let ne=k.side===mn;se&&(ne=!ne),Lt(ne),k.blending===yi&&k.transparent===!1?at(pr):at(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Te=k.stencilWrite;a.setTest(Te),Te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(k){H!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),H=k)}function vt(k){k!==Kp?(j(s.CULL_FACE),k!==B&&(k===Uu?s.cullFace(s.BACK):k===Zp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),B=k}function wn(k){k!==O&&(E&&s.lineWidth(k),O=k)}function kt(k,se,ne){k?(j(s.POLYGON_OFFSET_FILL),(L!==se||J!==ne)&&(L=se,J=ne,o.getReversed()&&(se=-se,ne=-ne),s.polygonOffset(se,ne))):ve(s.POLYGON_OFFSET_FILL)}function ye(k){k?j(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Me(k){k===void 0&&(k=s.TEXTURE0+S-1),R!==k&&(s.activeTexture(k),R=k)}function ce(k,se,ne){ne===void 0&&(R===null?ne=s.TEXTURE0+S-1:ne=R);let Te=U[ne];Te===void 0&&(Te={type:void 0,texture:void 0},U[ne]=Te),(Te.type!==k||Te.texture!==se)&&(R!==ne&&(s.activeTexture(ne),R=ne),s.bindTexture(k,se||V[k]),Te.type=k,Te.texture=se)}function q(){let k=U[R];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Pe(){try{s.compressedTexImage2D(...arguments)}catch(k){mt("WebGLState:",k)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(k){mt("WebGLState:",k)}}function _e(){try{s.texSubImage2D(...arguments)}catch(k){mt("WebGLState:",k)}}function ae(){try{s.texSubImage3D(...arguments)}catch(k){mt("WebGLState:",k)}}function Ue(){try{s.compressedTexSubImage2D(...arguments)}catch(k){mt("WebGLState:",k)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(k){mt("WebGLState:",k)}}function Fe(){try{s.texStorage2D(...arguments)}catch(k){mt("WebGLState:",k)}}function F(){try{s.texStorage3D(...arguments)}catch(k){mt("WebGLState:",k)}}function A(){try{s.texImage2D(...arguments)}catch(k){mt("WebGLState:",k)}}function te(){try{s.texImage3D(...arguments)}catch(k){mt("WebGLState:",k)}}function be(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function xe(k,se){u[k]!==se&&(s.pixelStorei(k,se),u[k]=se)}function Ae(k){Q.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function Ie(k){Z.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function fe(k,se){let ne=l.get(se);ne===void 0&&(ne=new WeakMap,l.set(se,ne));let Te=ne.get(k);Te===void 0&&(Te=s.getUniformBlockIndex(se,k.name),s.uniformBlockBinding(se,Te,Te),ne.set(k,Te))}function ge(k,se,ne){let Re=l.get(se).get(k);c[Re]!==ne&&(s.bindBufferBase(s.UNIFORM_BUFFER,Re,ne),c[Re]=ne)}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},R=null,U={},f={},c={},d=new WeakMap,p=[],v=null,m=!1,g=null,M=null,P=null,b=null,T=null,C=null,x=null,_=new Ne(0,0,0),N=0,I=!1,H=null,B=null,O=null,L=null,J=null,Q.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ve,bindFramebuffer:De,drawBuffers:Ee,useProgram:ke,setBlending:at,setMaterial:Qe,setFlipSided:Lt,setCullFace:vt,setLineWidth:wn,setPolygonOffset:kt,setScissorTest:ye,activeTexture:Me,bindTexture:ce,unbindTexture:q,compressedTexImage2D:Pe,compressedTexImage3D:re,texImage2D:A,texImage3D:te,pixelStorei:xe,getParameter:be,updateUBOMapping:fe,uniformBlockBinding:ge,texStorage2D:Fe,texStorage3D:F,texSubImage2D:_e,texSubImage3D:ae,compressedTexSubImage2D:Ue,compressedTexSubImage3D:ee,scissor:Ae,viewport:Ie,reset:pe}}function Lb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,v=new FinalizationRegistry(F=>p.delete(F)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,A){return m?new OffscreenCanvas(F,A):to("canvas")}function M(F,A,te){let be=1,xe=Fe(F);if((xe.width>te||xe.height>te)&&(be=te/Math.max(xe.width,xe.height)),be<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let Ae=Math.floor(be*xe.width),Ie=Math.floor(be*xe.height);f===void 0&&(f=g(Ae,Ie));let fe=A?g(Ae,Ie):f;return fe.width=Ae,fe.height=Ie,fe.getContext("2d").drawImage(F,0,0,Ae,Ie),ct("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ae+"x"+Ie+")."),fe}else return"data"in F&&ct("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),F;return F}function P(F){return F.generateMipmaps}function b(F){s.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(F,A,te,be,xe,Ae=!1){if(F!==null){if(s[F]!==void 0)return s[F];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ie;be&&(Ie=e.get("EXT_texture_norm16"),Ie||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=A;if(A===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8),te===s.UNSIGNED_SHORT&&Ie&&(fe=Ie.R16_EXT),te===s.SHORT&&Ie&&(fe=Ie.R16_SNORM_EXT)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),A===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8),te===s.UNSIGNED_SHORT&&Ie&&(fe=Ie.RG16_EXT),te===s.SHORT&&Ie&&(fe=Ie.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&(te===s.UNSIGNED_SHORT&&Ie&&(fe=Ie.RGB16_EXT),te===s.SHORT&&Ie&&(fe=Ie.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),A===s.RGBA){let ge=Ae?ea:At.getTransfer(xe);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=ge===zt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Ie&&(fe=Ie.RGBA16_EXT),te===s.SHORT&&Ie&&(fe=Ie.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(F,A){let te;return F?A===null||A===oi||A===_r?te=s.DEPTH24_STENCIL8:A===Dn?te=s.DEPTH32F_STENCIL8:A===vo&&(te=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===oi||A===_r?te=s.DEPTH_COMPONENT24:A===Dn?te=s.DEPTH_COMPONENT32F:A===vo&&(te=s.DEPTH_COMPONENT16),te}function _(F,A){return P(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function N(F){let A=new WeakRef(F);n.get(F).__ref=A,p.add(A),v.register(F,A,A)}function I(F){let A=n.get(F).__ref;A!==void 0&&(p.delete(A),v.unregister(A))}function H(F){O(F.target)}function B(F){L(F.target)}function O(F){F.removeEventListener("dispose",H),I(F),S(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&u.delete(F)}function L(F){F.removeEventListener("dispose",B),I(F),z(F)}function J(){for(let F of p){let A=F.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):O(A))}p.clear(),u.clear()}function S(F){let A=n.get(F);if(A.__webglInit===void 0)return;let te=F.source,be=d.get(te);if(be){let xe=be[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&E(F),Object.keys(be).length===0&&d.delete(te)}n.remove(F)}function E(F){let A=n.get(F);s.deleteTexture(A.__webglTexture);let te=F.source,be=d.get(te);delete be[A.__cacheKey],o.memory.textures--}function z(F){let A=n.get(F);A.__depthDisposeCallback&&A.__depthDisposeCallback();let te=F.depthTexture;if(te&&te.renderTarget===F&&O(te),F.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Ae=0;Ae<A.__webglFramebuffer[xe].length;Ae++)s.deleteFramebuffer(A.__webglFramebuffer[xe][Ae]);else s.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[xe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let be=F.textures;for(let xe=0,Ae=be.length;xe<Ae;xe++){let Ie=n.get(be[xe]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),o.memory.textures--),n.remove(be[xe])}n.remove(F)}let y=0;function R(){y=0}function U(){return y}function Y(F){y=F}function ie(){let F=y;return F>=i.maxTextures&&ct("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+i.maxTextures),y+=1,F}function Q(F){let A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.mipmapsAutoUpdate),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function Z(F,A){let te=n.get(F);if(F.isVideoTexture&&Ue(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&te.__version!==F.version){let be=F.image;if(be===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(te,F,A);return}}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function W(F,A){let te=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){Qe(te,F,A);return}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function V(F,A){let te=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){Qe(te,F,A);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function j(F,A){let te=n.get(F);if(F.version>0&&te.__version!==F.version){Lt(te,F,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}let ve={[xs]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Qr]:s.MIRRORED_REPEAT},De={[en]:s.NEAREST,[gc]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},Ee={[wm]:s.NEVER,[nf]:s.ALWAYS,[Em]:s.LESS,[ef]:s.LEQUAL,[Tm]:s.EQUAL,[tf]:s.GEQUAL,[Am]:s.GREATER,[Rm]:s.NOTEQUAL};function ke(F,A){if(A.type===Dn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===xo||A.magFilter===vr||A.magFilter===ri||A.minFilter===fn||A.minFilter===xo||A.minFilter===vr||A.minFilter===ri)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ve[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ve[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ve[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,De[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,De[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===en||A.minFilter!==vr&&A.minFilter!==ri||A.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Xe(F,A){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",H),N(A));let be=A.source,xe=d.get(be);xe===void 0&&(xe={},d.set(be,xe));let Ae=Q(A);if(Ae!==F.__cacheKey){xe[Ae]===void 0&&(xe[Ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,te=!0),xe[Ae].usedTimes++;let Ie=xe[F.__cacheKey];Ie!==void 0&&(xe[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(A)),F.__cacheKey=Ae,F.__webglTexture=xe[Ae].texture}return te}function Ke(F,A,te){return Math.floor(Math.floor(F/te)/A)}function at(F,A,te,be){let Ae=F.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,te,be,A.data);else{Ae.sort((k,se)=>k.start-se.start);let Ie=0;for(let k=1;k<Ae.length;k++){let se=Ae[Ie],ne=Ae[k],Te=se.start+se.count,Re=Ke(ne.start,A.width,4),we=Ke(se.start,A.width,4);ne.start<=Te+1&&Re===we&&Ke(ne.start+ne.count-1,A.width,4)===Re?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++Ie,Ae[Ie]=ne)}Ae.length=Ie+1;let fe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let k=0,se=Ae.length;k<se;k++){let ne=Ae[k],Te=Math.floor(ne.start/4),Re=Math.ceil(ne.count/4),we=Te%A.width,He=Math.floor(Te/A.width),nt=Re,Le=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,He),t.texSubImage2D(s.TEXTURE_2D,0,we,He,nt,Le,te,be,A.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function Qe(F,A,te){let be=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(be=s.TEXTURE_3D);let xe=Xe(F,A),Ae=A.source;t.bindTexture(be,F.__webglTexture,s.TEXTURE0+te);let Ie=n.get(Ae);if(Ae.version!==Ie.__version||xe===!0){if(t.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap!="undefined"&&A.image instanceof ImageBitmap)===!1){let Le=At.getPrimaries(At.workingColorSpace),lt=A.colorSpace===ls?null:At.getPrimaries(A.colorSpace),yt=A.colorSpace===ls||Le===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=M(A.image,!1,i.maxTextureSize);ge=ee(A,ge);let pe=r.convert(A.format,A.colorSpace),k=r.convert(A.type),se=C(A.internalFormat,pe,k,A.normalized,A.colorSpace,A.isVideoTexture);ke(be,A);let ne,Te=A.mipmaps,Re=A.isVideoTexture!==!0,we=Ie.__version===void 0||xe===!0,He=Ae.dataReady,nt=_(A,ge);if(A.isDepthTexture)se=x(A.format===as,A.type),we&&(Re?t.texStorage2D(s.TEXTURE_2D,1,se,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,se,ge.width,ge.height,0,pe,k,null));else if(A.isDataTexture)if(Te.length>0){Re&&we&&t.texStorage2D(s.TEXTURE_2D,nt,se,Te[0].width,Te[0].height);for(let Le=0,lt=Te.length;Le<lt;Le++)ne=Te[Le],Re?He&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,ne.width,ne.height,pe,k,ne.data):t.texImage2D(s.TEXTURE_2D,Le,se,ne.width,ne.height,0,pe,k,ne.data);A.generateMipmaps=!1}else Re?(we&&t.texStorage2D(s.TEXTURE_2D,nt,se,ge.width,ge.height),He&&at(A,ge,pe,k)):t.texImage2D(s.TEXTURE_2D,0,se,ge.width,ge.height,0,pe,k,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Re&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,se,Te[0].width,Te[0].height,ge.depth);for(let Le=0,lt=Te.length;Le<lt;Le++)if(ne=Te[Le],A.format!==Xn)if(pe!==null)if(Re){if(He)if(A.layerUpdates.size>0){let yt=df(ne.width,ne.height,A.format,A.type);for(let Ge of A.layerUpdates){let Ft=ne.data.subarray(Ge*yt/ne.data.BYTES_PER_ELEMENT,(Ge+1)*yt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,Ge,ne.width,ne.height,1,pe,Ft)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,ne.width,ne.height,ge.depth,pe,ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Le,se,ne.width,ne.height,ge.depth,0,ne.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,ne.width,ne.height,ge.depth,pe,k,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Le,se,ne.width,ne.height,ge.depth,0,pe,k,ne.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Re&&we&&t.texStorage2D(s.TEXTURE_2D,nt,se,Te[0].width,Te[0].height);for(let Le=0,lt=Te.length;Le<lt;Le++)ne=Te[Le],A.format!==Xn?pe!==null?Re?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,Le,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Le,se,ne.width,ne.height,0,ne.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?He&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,ne.width,ne.height,pe,k,ne.data):t.texImage2D(s.TEXTURE_2D,Le,se,ne.width,ne.height,0,pe,k,ne.data)}else if(A.isDataArrayTexture)if(Re){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,se,ge.width,ge.height,ge.depth),He)if(A.layerUpdates.size>0){let Le=df(ge.width,ge.height,A.format,A.type);for(let lt of A.layerUpdates){let yt=ge.data.subarray(lt*Le/ge.data.BYTES_PER_ELEMENT,(lt+1)*Le/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,ge.width,ge.height,1,pe,k,yt)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,pe,k,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,ge.width,ge.height,ge.depth,0,pe,k,ge.data);else if(A.isData3DTexture)Re?(we&&t.texStorage3D(s.TEXTURE_3D,nt,se,ge.width,ge.height,ge.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,pe,k,ge.data)):t.texImage3D(s.TEXTURE_3D,0,se,ge.width,ge.height,ge.depth,0,pe,k,ge.data);else if(A.isFramebufferTexture){if(we)if(Re)t.texStorage2D(s.TEXTURE_2D,nt,se,ge.width,ge.height);else{let Le=ge.width,lt=ge.height;for(let yt=0;yt<nt;yt++)t.texImage2D(s.TEXTURE_2D,yt,se,Le,lt,0,pe,k,null),Le>>=1,lt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let Le=s.canvas;if(Le.hasAttribute("layoutsubtree")||Le.setAttribute("layoutsubtree","true"),ge.parentNode!==Le){Le.appendChild(ge),u.add(A),Le.onpaint=lt=>{let yt=lt.changedElements;for(let Ge of u)yt.includes(Ge.image)&&(Ge.needsUpdate=!0)},Le.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{let yt=s.RGBA,Ge=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,Ge,Ft,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&we){let Le=Fe(Te[0]);t.texStorage2D(s.TEXTURE_2D,nt,se,Le.width,Le.height)}for(let Le=0,lt=Te.length;Le<lt;Le++)ne=Te[Le],Re?He&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,pe,k,ne):t.texImage2D(s.TEXTURE_2D,Le,se,pe,k,ne);A.generateMipmaps=!1}else if(Re){if(we){let Le=Fe(ge);t.texStorage2D(s.TEXTURE_2D,nt,se,Le.width,Le.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,k,ge)}else t.texImage2D(s.TEXTURE_2D,0,se,pe,k,ge);P(A)&&A.mipmapsAutoUpdate===!0&&b(be),Ie.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Lt(F,A,te){if(A.image.length!==6)return;let be=Xe(F,A),xe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+te);let Ae=n.get(xe);if(xe.version!==Ae.__version||be===!0){t.activeTexture(s.TEXTURE0+te);let Ie=At.getPrimaries(At.workingColorSpace),fe=A.colorSpace===ls?null:At.getPrimaries(A.colorSpace),ge=A.colorSpace===ls||Ie===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let pe=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,se=[];for(let Ge=0;Ge<6;Ge++)!pe&&!k?se[Ge]=M(A.image[Ge],!0,i.maxCubemapSize):se[Ge]=k?A.image[Ge].image:A.image[Ge],se[Ge]=ee(A,se[Ge]);let ne=se[0],Te=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),we=C(A.internalFormat,Te,Re,A.normalized,A.colorSpace),He=A.isVideoTexture!==!0,nt=Ae.__version===void 0||be===!0,Le=xe.dataReady,lt=_(A,ne);ke(s.TEXTURE_CUBE_MAP,A);let yt;if(A.isDepthTexture){if(we=x(A.format===as,A.type),nt)if(He)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,we,ne.width,ne.height);else for(let Ge=0;Ge<6;Ge++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,we,ne.width,ne.height,0,Te,Re,null)}else if(pe){He&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,we,ne.width,ne.height);for(let Ge=0;Ge<6;Ge++){yt=se[Ge].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){let qt=yt[Ft];A.format!==Xn?Te!==null?He?Le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft,0,0,qt.width,qt.height,Te,qt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft,we,qt.width,qt.height,0,qt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft,0,0,qt.width,qt.height,Te,Re,qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft,we,qt.width,qt.height,0,Te,Re,qt.data)}}}else{if(yt=A.mipmaps,He&&nt){yt.length>0&&lt++;let Ge=Fe(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,lt,we,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(k){He?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,se[Ge].width,se[Ge].height,Te,Re,se[Ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,we,se[Ge].width,se[Ge].height,0,Te,Re,se[Ge].data);for(let Ft=0;Ft<yt.length;Ft++){let Zn=yt[Ft].image[Ge].image;He?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft+1,0,0,Zn.width,Zn.height,Te,Re,Zn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft+1,we,Zn.width,Zn.height,0,Te,Re,Zn.data)}}else{He?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Te,Re,se[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,we,Te,Re,se[Ge]);for(let Ft=0;Ft<yt.length;Ft++){let qt=yt[Ft];He?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft+1,0,0,Te,Re,qt.image[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,Ft+1,we,Te,Re,qt.image[Ge])}}}P(A)&&A.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Ae.__version=xe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function vt(F,A,te,be,xe,Ae){let Ie=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),ge=C(te.internalFormat,Ie,fe,te.normalized,te.colorSpace),pe=n.get(A),k=n.get(te);if(k.__renderTarget=A,!pe.__hasExternalTextures){let se=Math.max(1,A.width>>Ae),ne=Math.max(1,A.height>>Ae);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ae,ge,se,ne,A.depth,0,Ie,fe,null):t.texImage2D(xe,Ae,ge,se,ne,0,Ie,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),ae(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,xe,k.__webglTexture,0,_e(A)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,xe,k.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function wn(F,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){let be=A.depthTexture,xe=be&&be.isDepthTexture?be.type:null,Ae=x(A.stencilBuffer,xe),Ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ae(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(A),Ae,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(A),Ae,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,F)}else{let be=A.textures;for(let xe=0;xe<be.length;xe++){let Ae=be[xe],Ie=r.convert(Ae.format,Ae.colorSpace),fe=r.convert(Ae.type),ge=C(Ae.internalFormat,Ie,fe,Ae.normalized,Ae.colorSpace);ae(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(A),ge,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(F,A,te){let be=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xe=n.get(A.depthTexture);xe.__renderTarget=A;let Ae=be?A.depthTexture.image[0]:A.depthTexture.image;(!xe.__webglTexture||Ae.width!==A.width||Ae.height!==A.height)&&(Ae.width=A.width,Ae.height=A.height,A.depthTexture.needsUpdate=!0),be?j(A.depthTexture,0):Z(A.depthTexture,0);let Ie=xe.__webglTexture,fe=_e(A),ge=be?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,pe=A.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Qi)ae(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Ie,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Ie,0);else if(A.depthTexture.format===as)ae(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Ie,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(F){let A=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){let be=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),be){let xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,be.removeEventListener("dispose",xe)};be.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=be}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(te)for(let be=0;be<6;be++)kt(A.__webglFramebuffer[be],F,be);else F.texture.mipmaps.length>0?kt(A.__webglFramebuffer[0],F,0):kt(A.__webglFramebuffer,F,0);else if(te){A.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[be]),A.__webglDepthbuffer[be]===void 0)A.__webglDepthbuffer[be]=s.createRenderbuffer(),wn(A.__webglDepthbuffer[be],F,!1);else{let xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[be];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ae)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),wn(A.__webglDepthbuffer,F,!1);else{let xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(F,A,te){let be=n.get(F);A!==void 0&&vt(be.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&ye(F)}function ce(F){let A=F.texture,te=n.get(F),be=n.get(A);F.addEventListener("dispose",B),N(F);let xe=F.textures,Ae=F.isWebGLCubeRenderTarget===!0,Ie=xe.length>1;if(Ie||(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=A.version,o.memory.textures++),Ae){te.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0){te.__webglFramebuffer[fe]=[];for(let ge=0;ge<A.mipmaps.length;ge++)te.__webglFramebuffer[fe][ge]=s.createFramebuffer()}else te.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(A.mipmaps.length>0){te.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)te.__webglFramebuffer[fe]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let fe=0,ge=xe.length;fe<ge;fe++){let pe=n.get(xe[fe]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(F.samples>0&&ae(F)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let fe=0;fe<xe.length;fe++){let ge=xe[fe];te.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[fe]);let pe=r.convert(ge.format,ge.colorSpace),k=r.convert(ge.type),se=C(ge.internalFormat,pe,k,ge.normalized,ge.colorSpace,F.isXRRenderTarget===!0),ne=_e(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,se,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,te.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),wn(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),ke(s.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)vt(te.__webglFramebuffer[fe][ge],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else vt(te.__webglFramebuffer[fe],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);P(A)?b(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let fe=0,ge=xe.length;fe<ge;fe++){let pe=xe[fe],k=n.get(pe),se=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(se=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,k.__webglTexture),ke(se,pe),vt(te.__webglFramebuffer,F,pe,s.COLOR_ATTACHMENT0+fe,se,0),P(pe)&&b(se)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(fe=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,be.__webglTexture),ke(fe,A),A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)vt(te.__webglFramebuffer[ge],F,A,s.COLOR_ATTACHMENT0,fe,ge);else vt(te.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,fe,0);P(A)?b(fe):A.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&ye(F)}function q(F){let A=F.textures;for(let te=0,be=A.length;te<be;te++){let xe=A[te];if(P(xe)&&xe.mipmapsAutoUpdate===!0){let Ae=T(F),Ie=n.get(xe).__webglTexture;t.bindTexture(Ae,Ie),b(Ae),t.unbindTexture()}}}let Pe=[];function re(F){if(F.samples>0){if(ae(F)===!1){let A=F.textures,te=F.width,be=F.height,xe=s.COLOR_BUFFER_BIT,Ae=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(F),fe=A.length>1;if(fe)for(let pe=0;pe<A.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[pe]);let k=n.get(A[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,te,be,0,0,te,be,xe,s.NEAREST),c===!0&&(Pe.length=0,Pe.push(s.COLOR_ATTACHMENT0+pe),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Pe.push(Ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<A.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[pe]);let k=n.get(A[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _e(F){return Math.min(i.maxSamples,F.samples)}function ae(F){let A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(F){let A=o.render.frame;h.get(F)!==A&&(h.set(F,A),F.update())}function ee(F,A){let te=F.colorSpace,be=F.format,xe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==Nn&&te!==ls&&(At.getTransfer(te)===zt?(be!==Xn||xe!==Kn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",te)),A}function Fe(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=R,this.getTextureUnits=U,this.setTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Me,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ae,this.dispose=J}function Db(s,e){function t(n,i=ls){let r,o=At.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return s.BYTE;if(n===Ku)return s.SHORT;if(n===vo)return s.UNSIGNED_SHORT;if(n===xc)return s.INT;if(n===oi)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===Mi)return s.HALF_FLOAT;if(n===$u)return s.ALPHA;if(n===ju)return s.RGB;if(n===Xn)return s.RGBA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===yc)return s.RED;if(n===wa)return s.RED_INTEGER;if(n===bs)return s.RG;if(n===Mc)return s.RG_INTEGER;if(n===bc)return s.RGBA_INTEGER;if(n===Ea||n===Ta||n===Aa||n===Ra)if(o===zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===wc||n===Ec||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Ca||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return o===zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ic)return r.COMPRESSED_R11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===zc||n===kc||n===Bc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return o===zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===$c||n===Ia||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ub=`
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

}`,Af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:Nb,fragmentShader:Ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rf=class extends pi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,v=typeof XRWebGLBinding!="undefined",m=new Af,g={},M=t.getContextAttributes(),P=null,b=null,T=[],C=[],x=new ht,_=null,N=null,I=new Qt;I.viewport=new Ht;let H=new Qt;H.viewport=new Ht;let B=[I,H],O=new cc,L=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ro,T[Q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ro,T[Q]=Z),Z.getGripSpace()},this.getHand=function(Q){let Z=T[Q];return Z===void 0&&(Z=new ro,T[Q]=Z),Z.getHandSpace()};function S(Q){let Z=C.indexOf(Q.inputSource);if(Z===-1)return;let W=T[Z];W!==void 0&&(W.update(Q.inputSource,Q.frame,l||o),W.dispatchEvent({type:Q.type,data:Q.inputSource}))}function E(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",z);for(let Q=0;Q<T.length;Q++){let Z=C[Q];Z!==null&&(C[Q]=null,T[Q].disconnect(Z))}L=null,J=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(P),d=null,f=null,u=null,i=null,b=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),N!==null){let Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(P=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",E),i.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,V=null,j=null;M.depth&&(j=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=M.stencil?as:Qi,V=M.stencil?_r:oi);let ve={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ei(f.textureWidth,f.textureHeight,{format:Xn,type:Kn,depthTexture:new es(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ei(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Q){for(let Z=0;Z<Q.removed.length;Z++){let W=Q.removed[Z],V=C.indexOf(W);V>=0&&(C[V]=null,T[V].disconnect(W))}for(let Z=0;Z<Q.added.length;Z++){let W=Q.added[Z],V=C.indexOf(W);if(V===-1){for(let ve=0;ve<T.length;ve++)if(ve>=C.length){C.push(W),V=ve;break}else if(C[ve]===null){C[ve]=W,V=ve;break}if(V===-1)break}let j=T[V];j&&j.connect(W)}}function y(Q,Z){Z===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Z.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let Z=Q.near,W=Q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(W=m.depthFar)),O.near=H.near=I.near=Z,O.far=H.far=I.far=W,(L!==O.near||J!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,J=O.far),O.layers.mask=Q.layers.mask|6,I.layers.mask=O.layers.mask&-5,H.layers.mask=O.layers.mask&-3;let V=Q.parent,j=O.cameras;y(O,V);for(let ve=0;ve<j.length;ve++)y(j[ve],V);O.projectionMatrix.copy(I.projectionMatrix),O.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),R(Q,O,V)};function R(Q,Z,W){W===null?Q.matrix.copy(Z.matrixWorld):(Q.matrix.copy(W.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Z.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Z.projectionMatrix),Q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return g[Q]};let U=null;function Y(Q,Z){if(h=Z.getViewerPose(l||o),p=Z,h!==null){let W=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let V=!1;W.length!==O.cameras.length&&(O.cameras.length=0,V=!0);for(let Ee=0;Ee<W.length;Ee++){let ke=W[Ee],Xe=null;if(d!==null)Xe=d.getViewport(ke);else{let at=u.getViewSubImage(f,ke);Xe=at.viewport,Ee===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Ke=B[Ee];Ke===void 0&&(Ke=new Qt,Ke.layers.enable(Ee),Ke.viewport=new Ht,B[Ee]=Ke),Ke.matrix.fromArray(ke.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ke.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ee===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),V===!0&&O.cameras.push(Ke)}let j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ee=u.getDepthInformation(W[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,i.renderState)}if(j&&j.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ee=0;Ee<W.length;Ee++){let ke=W[Ee].camera;if(ke){let Xe=g[ke];Xe||(Xe=new da,g[ke]=Xe);let Ke=u.getCameraImage(ke);Xe.sourceTexture=Ke}}}}for(let W=0;W<T.length;W++){let V=C[W],j=T[W];V!==null&&j!==void 0&&j.update(V,Z,l||o)}U&&U(Q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}let ie=new rg;ie.setAnimationLoop(Y),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}},Fb=new ot,mg=new xt;mg.set(-1,0,0,0,1,0,0,0,1);function Ob(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,hf(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,P,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,M,P):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),P=M.envMap,b=M.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(b)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,P){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=P*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zb(s,e,t,n){let i={},r={};function o(M,P){let b=P.program;n.uniformBlockBinding(M,b,i[M.id])}function a(M,P){let b=i[M.id];b===void 0&&(p(M),b=c(M),i[M.id]=b,M.addEventListener("dispose",m));let T=P.program;n.updateUBOMapping(M,T);let C=e.render.frame;r[M.id]!==C&&(l(M),r[M.id]=C)}function c(M){let P=s.createBuffer(),b=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),P}function l(M){let P=i[M.id],b=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let C=0,x=b.length;C<x;C++){let _=b[C];if(Array.isArray(_))for(let N=0,I=_.length;N<I;N++)h(_[N],C,N,T);else h(_,C,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,P,b,T){if(f(M,P,b,T)===!0){let C=M.__offset,x=M.value;if(Array.isArray(x)){let _=0;for(let N=0;N<x.length;N++){let I=x[N],H=v(I,!0);u(I,M.__data,_),_+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,C,M.__data)}}function u(M,P,b){typeof M=="number"||typeof M=="boolean"?P[b]=M:M.isMatrix3?(P[b]=M.elements[0],P[b+1]=M.elements[1],P[b+2]=M.elements[2],P[b+3]=0,P[b+4]=M.elements[3],P[b+5]=M.elements[4],P[b+6]=M.elements[5],P[b+7]=0,P[b+8]=M.elements[6],P[b+9]=M.elements[7],P[b+10]=M.elements[8],P[b+11]=0):ArrayBuffer.isView(M)?P.set(M.subarray(0,P.length-b),b):M.toArray(P,b)}function f(M,P,b,T){let C=M.value,x=P+"_"+b;if(Array.isArray(C)){T[x]===void 0&&(T[x]=[]);let _=T[x],N=!1;for(let I=0;I<C.length;I++)d(C[I],_,I)===!0&&(N=!0);return N}return d(C,T,x)}function d(M,P,b){if(P[b]===void 0)return typeof M=="number"||typeof M=="boolean"?P[b]=M:ArrayBuffer.isView(M)?P[b]=M.slice():P[b]=M.clone(),!0;{let T=P[b];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return P[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function p(M){let P=M.uniforms,b=0,T=16;for(let x=0,_=P.length;x<_;x++){let N=Array.isArray(P[x])?P[x]:[P[x]];for(let I=0,H=N.length;I<H;I++){let B=N[I],O=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(P[x])||Array.isArray(B.value),J=b;for(let E=0,z=O.length;E<z;E++){let y=O[E],R=v(y,L),U=b%T,Y=U%R.boundary,ie=U+Y;b+=Y,ie!==0&&T-ie<R.storage&&(b+=T-ie),E===0&&(J=b),b+=R.storage}let S=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new S((b-J)/Float32Array.BYTES_PER_ELEMENT),B.__offset=J}}let C=b%T;return C>0&&(b+=T-C),M.__size=b,M.__cache={},this}function v(M,P){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",M),P===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let P=M.target;P.removeEventListener("dispose",m),s.deleteBuffer(i[P.id]),delete i[P.id],delete r[P.id]}function g(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:g}}var kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function Bb(){return Ui===null&&(Ui=new ji(kb,16,16,bs,Mi),Ui.name="DFG_LUT",Ui.minFilter=fn,Ui.magFilter=fn,Ui.wrapS=Wn,Ui.wrapT=Wn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Mo=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Kn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,m=new Set([bc,Mc,wa]),g=new Set([Kn,oi,vo,_r,vc,_c]),M=new Uint32Array(4),P=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,C=null,x=[],_=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,H=!1,B=null,O=null,L=null,J=null;this._outputColorSpace=Ot;let S=0,E=0,z=null,y=-1,R=null,U=new Ht,Y=new Ht,ie=null,Q=new Ne(0),Z=0,W=t.width,V=t.height,j=1,ve=null,De=null,Ee=new Ht(0,0,W,V),ke=new Ht(0,0,W,V),Xe=!1,Ke=new mi,at=new la,Qe=!1,Lt=!1,vt=new ot,wn=new X,kt=new Ht,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function ce(){return z===null?j:1}let q=n;function Pe(D,$){return t.getContext(D,$)}let re,_e,ae,Ue,ee,Fe,F,A,te,be,xe,Ae,Ie,fe,ge,pe,k,se,ne,Te,Re,we,He;try{let D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),q===null){let $="webgl2";if(q=Pe($,D),q===null)throw Pe($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(D){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),mt("WebGLRenderer: "+D.message),D}function nt(){re=new $y(q),re.init(),Re=new Db(q,re),_e=new By(q,re,e,Re),ae=new Pb(q,re),_e.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),O=q.createFramebuffer(),L=q.createFramebuffer(),J=q.createFramebuffer(),Ue=new eM(q),ee=new xb,Fe=new Lb(q,re,ae,ee,_e,Re,Ue),F=new Jy(I),A=new nv(q),we=new zy(q,A),te=new jy(q,A,Ue,we),be=new nM(q,te,A,we,Ue),se=new tM(q,_e,Fe),ge=new Hy(ee),xe=new gb(I,F,re,_e,we,ge),Ae=new Ob(I,ee),Ie=new _b,fe=new Eb(re),k=new Oy(I,F,ae,be,p,c),pe=new Ib(I,be,_e),He=new zb(q,Ue,_e,ae),ne=new ky(q,re,Ue),Te=new Qy(q,re,Ue),Ue.programs=xe.programs,I.capabilities=_e,I.extensions=re,I.properties=ee,I.renderLists=Ie,I.shadowMap=pe,I.state=ae,I.info=Ue}v!==Kn&&(N=new sM(v,t.width,t.height,a,i,r));let Le=new Rf(I,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let D=re.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=re.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(W,V,!1))},this.getSize=function(D){return D.set(W,V)},this.setSize=function(D,$,he=!0){if(Le.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,V=$,t.width=Math.floor(D*j),t.height=Math.floor($*j),he===!0&&(t.style.width=D+"px",t.style.height=$+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(W*j,V*j).floor()},this.setDrawingBufferSize=function(D,$,he){W=D,V=$,j=he,t.width=Math.floor(D*he),t.height=Math.floor($*he),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(v===Kn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(Ee)},this.setViewport=function(D,$,he,oe){D.isVector4?Ee.set(D.x,D.y,D.z,D.w):Ee.set(D,$,he,oe),ae.viewport(U.copy(Ee).multiplyScalar(ce()).round())},this.getScissor=function(D){return D.copy(ke)},this.setScissor=function(D,$,he,oe){D.isVector4?ke.set(D.x,D.y,D.z,D.w):ke.set(D,$,he,oe),ae.scissor(Y.copy(ke).multiplyScalar(ce()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(D){ae.setScissorTest(Xe=D)},this.setOpaqueSort=function(D){ve=D},this.setTransparentSort=function(D){De=D},this.getClearColor=function(D){return D.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,he=!0){let oe=0;if(D){let ue=!1;if(z!==null){let Be=z.texture.format;ue=m.has(Be)}if(ue){let Be=z.texture.type,qe=g.has(Be),Oe=k.getClearColor(),Ve=k.getClearAlpha(),et=Oe.r,_t=Oe.g,Ct=Oe.b;qe?(M[0]=et,M[1]=_t,M[2]=Ct,M[3]=Ve,q.clearBufferuiv(q.COLOR,0,M)):(P[0]=et,P[1]=_t,P[2]=Ct,P[3]=Ve,q.clearBufferiv(q.COLOR,0,P))}else oe|=q.COLOR_BUFFER_BIT}$&&(oe|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(oe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),B=D},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),k.dispose(),Ie.dispose(),fe.dispose(),Fe.dispose(),ee.dispose(),F.dispose(),be.dispose(),te.dispose(),we.dispose(),He.dispose(),xe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Qa),Le.removeEventListener("sessionend",Tr),Bi.stop()};function lt(D){D.preventDefault(),ta("WebGLRenderer: Context Lost."),H=!0}function yt(){ta("WebGLRenderer: Context Restored."),H=!1;let D=Ue.autoReset,$=pe.enabled,he=pe.autoUpdate,oe=pe.needsUpdate,ue=pe.type;nt(),Ue.autoReset=D,pe.enabled=$,pe.autoUpdate=he,pe.needsUpdate=oe,pe.type=ue}function Ge(D){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ft(D){let $=D.target;$.removeEventListener("dispose",Ft),qt($)}function qt(D){Zn(D),ee.remove(D)}function Zn(D){let $=ee.get(D).programs;$!==void 0&&($.forEach(function(he){xe.releaseProgram(he)}),D.isShaderMaterial&&xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,he,oe,ue,Be){$===null&&($=ye);let qe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Oe=Bh(D,$,he,oe,ue);ae.setMaterial(oe,qe);let Ve=he.index,et=1;if(oe.wireframe===!0){if(Ve=te.getWireframeAttribute(he),Ve===void 0)return;et=2}let _t=he.drawRange,Ct=he.attributes.position,$e=_t.start*et,Tt=(_t.start+_t.count)*et;Be!==null&&($e=Math.max($e,Be.start*et),Tt=Math.min(Tt,(Be.start+Be.count)*et)),Ve!==null?($e=Math.max($e,0),Tt=Math.min(Tt,Ve.count)):Ct!=null&&($e=Math.max($e,0),Tt=Math.min(Tt,Ct.count));let Jt=Tt-$e;if(Jt<0||Jt===1/0)return;we.setup(ue,oe,Oe,he,Ve);let Gt,wt=ne;if(Ve!==null&&(Gt=A.get(Ve),wt=Te,wt.setIndex(Gt)),ue.isMesh)oe.wireframe===!0?(ae.setLineWidth(oe.wireframeLinewidth*ce()),wt.setMode(q.LINES)):wt.setMode(q.TRIANGLES);else if(ue.isLine){let Yt=oe.linewidth;Yt===void 0&&(Yt=1),ae.setLineWidth(Yt*ce()),ue.isLineSegments?wt.setMode(q.LINES):ue.isLineLoop?wt.setMode(q.LINE_LOOP):wt.setMode(q.LINE_STRIP)}else ue.isPoints?wt.setMode(q.POINTS):ue.isSprite&&wt.setMode(q.TRIANGLES);if(ue.isBatchedMesh)if(re.get("WEBGL_multi_draw"))wt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let Yt=ue._multiDrawStarts,je=ue._multiDrawCounts,vn=ue._multiDrawCount,Ut=Ve?A.get(Ve).bytesPerElement:1,Bn=ee.get(oe).currentProgram.getUniforms();for(let on=0;on<vn;on++)Bn.setValue(q,"_gl_DrawID",on),wt.render(Yt[on]/Ut,je[on])}else if(ue.isInstancedMesh)wt.renderInstances($e,Jt,ue.count);else if(he.isInstancedBufferGeometry){let Yt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,je=Math.min(he.instanceCount,Yt);wt.renderInstances($e,Jt,je)}else wt.render($e,Jt)};function Ps(D,$,he,oe){B!==null&&D.isNodeMaterial&&B.setObject(oe,D),Qe===!0&&ge.setState(D,he,!1),D.transparent===!0&&D.side===sn&&D.forceSinglePass===!1?(D.side=mn,D.needsUpdate=!0,Ds(D,$,oe),D.side=Li,D.needsUpdate=!0,Ds(D,$,oe),D.side=sn):Ds(D,$,oe)}this.compile=function(D,$,he=null){he===null&&(he=D),B!==null&&B.renderStart(D,$,he),C=fe.get(he),C.init($),_.push(C),he.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(C.pushLight(ue),ue.castShadow&&C.pushShadow(ue))}),D!==he&&D.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(C.pushLight(ue),ue.castShadow&&C.pushShadow(ue))}),C.setupLights(),B!==null&&B.updateLights(C.state.lightsArray),Lt=this.localClippingEnabled,Qe=ge.init(this.clippingPlanes,Lt),Qe===!0&&ge.setGlobalState(this.clippingPlanes,$),B!==null&&pe.render(C.state.shadowsArray,he,$);let oe=new Set;return D.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let Be=ue.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){let Oe=Be[qe];Ps(Oe,he,$,ue),oe.add(Oe)}else Ps(Be,he,$,ue),oe.add(Be)}),C=_.pop(),B!==null&&B.renderEnd(),oe},this.compileAsync=function(D,$,he=null){let oe=this.compile(D,$,he);return new Promise(ue=>{function Be(){if(oe.forEach(function(qe){let Ve=ee.get(qe).currentProgram;(Ve===void 0||Ve.isReady())&&oe.delete(qe)}),oe.size===0){ue(D);return}setTimeout(Be,10)}re.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let hs=null;function Er(D){hs&&hs(D)}function Qa(){Bi.stop()}function Tr(){Bi.start()}let Bi=new rg;Bi.setAnimationLoop(Er),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(D){hs=D,Le.setAnimationLoop(D),D===null?Bi.stop():Bi.start()},Le.addEventListener("sessionstart",Qa),Le.addEventListener("sessionend",Tr),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;B!==null&&B.renderStart(D,$);let he=Le.enabled===!0&&Le.isPresenting===!0,oe=N!==null&&(z===null||he)&&N.begin(I,z);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera($),$=Le.getCamera()),D.isScene===!0&&D.onBeforeRender(I,D,$,z),C=fe.get(D,_.length),C.init($),C.state.textureUnits=Fe.getTextureUnits(),_.push(C),vt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?at.setFromArrayCamera($):Ke.setFromProjectionMatrix(vt,ni,$.reversedDepth),Lt=this.localClippingEnabled,Qe=ge.init(this.clippingPlanes,Lt),T=Ie.get(D,x.length),T.init(),x.push(T),this.info.render.frame++,Le.enabled===!0&&Le.isPresenting===!0){let qe=I.xr.getDepthSensingMesh();qe!==null&&Hi(qe,$,-1/0,I.sortObjects)}Hi(D,$,0,I.sortObjects),T.finish(),B!==null&&B.updateLights(C.state.lightsArray),I.sortObjects===!0&&T.sort(ve,De),Me=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Me&&k.addToRenderList(T,D),this.info.autoReset===!0&&this.info.reset(),Qe===!0&&ge.beginShadows();let ue=C.state.shadowsArray;if(pe.render(ue,D,$),Qe===!0&&ge.endShadows(),(oe&&N.hasRenderPass())===!1){let qe=T.opaque,Oe=T.transmissive;if(C.setupLights(),$.isArrayCamera){let Ve=$.cameras;if(Oe.length>0)for(let et=0,_t=Ve.length;et<_t;et++){let Ct=Ve[et];Si(qe,Oe,D,Ct)}Me&&k.render(D);for(let et=0,_t=Ve.length;et<_t;et++){let Ct=Ve[et];Io(T,D,Ct,Ct.viewport)}}else Oe.length>0&&Si(qe,Oe,D,$),Me&&k.render(D),Io(T,D,$)}z!==null&&E===0&&(Fe.updateMultisampleRenderTarget(z),Fe.updateRenderTargetMipmap(z)),oe&&N.end(I),D.isScene===!0&&D.onAfterRender(I,D,$),we.resetDefaultState(),y=-1,R=null,_.pop(),_.length>0?(C=_[_.length-1],Fe.setTextureUnits(C.state.textureUnits),Qe===!0&&ge.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,B!==null&&B.renderEnd()};function Hi(D,$,he,oe){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)he=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){let qe=$.isArrayCamera?at:Ke;if(!D.frustumCulled||D.intersectsFrustum(qe)){oe&&kt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(vt);let Oe=be.update(D),Ve=D.material;Ve.visible&&T.push(D,Oe,Ve,he,kt.z,null,$)}}else if(D.isMesh||D.isLine||D.isPoints){let qe=$.isArrayCamera?at:Ke;if(!D.frustumCulled||D.intersectsFrustum(qe)){let Oe=be.update(D),Ve=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),kt.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),kt.copy(Oe.boundingSphere.center)),kt.applyMatrix4(D.matrixWorld).applyMatrix4(vt)),Array.isArray(Ve)){let et=Oe.groups;for(let _t=0,Ct=et.length;_t<Ct;_t++){let $e=et[_t],Tt=Ve[$e.materialIndex];Tt&&Tt.visible&&T.push(D,Oe,Tt,he,kt.z,$e,$)}}else Ve.visible&&T.push(D,Oe,Ve,he,kt.z,null,$)}}}let Be=D.children;for(let qe=0,Oe=Be.length;qe<Oe;qe++)Hi(Be[qe],$,he,oe)}function Io(D,$,he,oe){let{opaque:ue,transmissive:Be,transparent:qe}=D;C.setupLightsView(he),Qe===!0&&ge.setGlobalState(I.clippingPlanes,he),oe&&ae.viewport(U.copy(oe)),ue.length>0&&Ar(ue,$,he),Be.length>0&&Ar(Be,$,he),qe.length>0&&Ar(qe,$,he),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Si(D,$,he,oe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[oe.id]===void 0){let $e=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[oe.id]=new ei(1,1,{generateMipmaps:!0,type:$e?Mi:Kn,minFilter:ri,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let Be=C.state.transmissionRenderTarget[oe.id],qe=oe.viewport||U;Be.setSize(qe.z*I.transmissionResolutionScale,qe.w*I.transmissionResolutionScale);let Oe=I.getRenderTarget(),Ve=I.getActiveCubeFace(),et=I.getActiveMipmapLevel();I.setRenderTarget(Be),I.getClearColor(Q),Z=I.getClearAlpha(),Z<1&&I.setClearColor(16777215,.5),I.clear(),Me&&k.render(he);let _t=I.toneMapping;I.toneMapping=Di;let Ct=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),C.setupLightsView(oe),Qe===!0&&ge.setGlobalState(I.clippingPlanes,oe),Ar(D,he,oe),Fe.updateMultisampleRenderTarget(Be),Fe.updateRenderTargetMipmap(Be),re.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Tt=0,Jt=$.length;Tt<Jt;Tt++){let Gt=$[Tt],{object:wt,geometry:Yt,material:je,group:vn}=Gt;if(je.side===sn&&wt.layers.test(oe.layers)){let Ut=je.side;je.side=mn,je.needsUpdate=!0,Po(wt,he,oe,Yt,je,vn),je.side=Ut,je.needsUpdate=!0,$e=!0}}$e===!0&&(Fe.updateMultisampleRenderTarget(Be),Fe.updateRenderTargetMipmap(Be))}I.setRenderTarget(Oe,Ve,et),I.setClearColor(Q,Z),Ct!==void 0&&(oe.viewport=Ct),I.toneMapping=_t}function Ar(D,$,he){let oe=$.isScene===!0?$.overrideMaterial:null;for(let ue=0,Be=D.length;ue<Be;ue++){let qe=D[ue],{object:Oe,geometry:Ve,group:et}=qe,_t=qe.material;_t.allowOverride===!0&&oe!==null&&(_t=oe),Oe.layers.test(he.layers)&&Po(Oe,$,he,Ve,_t,et)}}function Po(D,$,he,oe,ue,Be){B!==null&&ue.isNodeMaterial&&B.setObject(D,ue),D.onBeforeRender(I,$,he,oe,ue,Be),D.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ue.onBeforeRender(I,$,he,oe,D,Be),ue.transparent===!0&&ue.side===sn&&ue.forceSinglePass===!1?(ue.side=mn,ue.needsUpdate=!0,I.renderBufferDirect(he,$,oe,ue,D,Be),ue.side=Li,ue.needsUpdate=!0,I.renderBufferDirect(he,$,oe,ue,D,Be),ue.side=sn):I.renderBufferDirect(he,$,oe,ue,D,Be),D.onAfterRender(I,$,he,oe,ue,Be)}function Ls(D){let $=0;for(let he of D)he.texture!==null&&$++;return $}function Ds(D,$,he){$.isScene!==!0&&($=ye);let oe=ee.get(D),ue=C.state.lights,Be=C.state.shadowsArray,qe=ue.state.version,Oe=xe.getParameters(D,ue.state,Be,$,he,C.state.lightProbeGridArray),Ve=xe.getProgramCacheKey(Oe),et=oe.programs;oe.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,oe.fog=$.fog;let _t=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;oe.envMap=F.get(D.envMap||oe.environment,_t),oe.envMapRotation=oe.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,et===void 0&&(D.addEventListener("dispose",Ft),et=new Map,oe.programs=et,oe.programVariants=new Map);let Ct=et.get(Ve);if(Ct!==void 0){if(oe.currentProgram===Ct&&oe.lightsStateVersion===qe)return tl(D,Oe),Ct}else Oe.uniforms=xe.getUniforms(D),B!==null&&D.isNodeMaterial&&B.build(D,he,Oe),D.onBeforeCompile(Oe,I),Ct=xe.acquireProgram(Oe,Ve),et.set(Ve,Ct),oe.uniforms=Oe.uniforms;let $e=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=ge.uniform),tl(D,Oe),oe.needsLights=Hh(D),oe.lightsStateVersion=qe,oe.needsLights&&($e.ambientLightColor.value=ue.state.ambient,$e.lightProbe.value=ue.state.probe,$e.sunLights.value=ue.state.sun,$e.sunLightShadows.value=ue.state.sunShadow,$e.directionalLights.value=ue.state.directional,$e.directionalLightShadows.value=ue.state.directionalShadow,$e.spotLights.value=ue.state.spot,$e.spotLightShadows.value=ue.state.spotShadow,$e.rectAreaLights.value=ue.state.rectArea,$e.ltc_1.value=ue.state.rectAreaLTC1,$e.ltc_2.value=ue.state.rectAreaLTC2,$e.pointLights.value=ue.state.point,$e.pointLightShadows.value=ue.state.pointShadow,$e.hemisphereLights.value=ue.state.hemi,$e.sunShadowMatrix.value=ue.state.sunShadowMatrix,$e.sunShadowCascade.value=ue.state.sunShadowCascade,$e.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,$e.spotLightMatrix.value=ue.state.spotLightMatrix,$e.spotLightMap.value=ue.state.spotLightMap,$e.pointShadowMatrix.value=ue.state.pointShadowMatrix),oe.numLightProbeGrids=Ls(C.state.lightProbeGridArray),oe.currentProgram=Ct,oe.uniformsList=null,Ct}function kh(D,$,he,oe,ue){let Be=ee.get(D),qe=Be.currentProgram.id+","+oe+","+ue,Oe=Be.programVariants.get(qe);return Oe===void 0?(Oe=Ds(D,$,he),Be.programVariants.set(qe,Oe)):(Be.currentProgram=Oe,Be.uniformsList=null,Be.outputColorSpace=oe,Be.toneMapping=ue),Oe}function el(D){if(D.uniformsList===null){let $=D.currentProgram.getUniforms();D.uniformsList=yo.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function tl(D,$){let he=ee.get(D);he.outputColorSpace=$.outputColorSpace,he.batching=$.batching,he.batchingColor=$.batchingColor,he.instancing=$.instancing,he.instancingColor=$.instancingColor,he.instancingMorph=$.instancingMorph,he.skinning=$.skinning,he.morphTargets=$.morphTargets,he.morphNormals=$.morphNormals,he.morphColors=$.morphColors,he.morphTargetsCount=$.morphTargetsCount,he.numClippingPlanes=$.numClippingPlanes,he.numIntersection=$.numClipIntersection,he.vertexAlphas=$.vertexAlphas,he.vertexTangents=$.vertexTangents,he.toneMapping=$.toneMapping}function Bh(D,$,he,oe,ue){$.isScene!==!0&&($=ye),Fe.resetTextureUnits();let Be=$.fog,qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?$.environment:null,Oe=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:At.workingColorSpace,Ve=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,et=F.get(oe.envMap||qe,Ve),_t=oe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Ct=!!he.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!he.morphAttributes.position,Tt=!!he.morphAttributes.normal,Jt=!!he.morphAttributes.color,Gt=Di;oe.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Gt=I.toneMapping);let wt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Yt=wt!==void 0?wt.length:0,je=ee.get(oe),vn=C.state.lights;if(Qe===!0&&(Lt===!0||D!==R)){let Wt=D===R&&oe.id===y;ge.setState(oe,D,Wt)}let Ut=!1,Bn=!1;oe.version===je.__version?je.needsLights&&je.lightsStateVersion!==vn.state.version||ue.isBatchedMesh&&je.batching===!1||!ue.isBatchedMesh&&je.batching===!0||ue.isBatchedMesh&&je.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&je.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&je.instancing===!1||!ue.isInstancedMesh&&je.instancing===!0||ue.isSkinnedMesh&&je.skinning===!1||!ue.isSkinnedMesh&&je.skinning===!0||ue.isInstancedMesh&&je.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&je.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&je.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&je.instancingMorph===!1&&ue.morphTexture!==null||je.envMap!==et||oe.fog===!0&&je.fog!==Be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ge.numPlanes||je.numIntersection!==ge.numIntersection)||je.vertexAlphas!==_t||je.vertexTangents!==Ct||je.morphTargets!==$e||je.morphNormals!==Tt||je.morphColors!==Jt||je.morphTargetsCount!==Yt||je.numLightProbeGrids!==Ls(C.state.lightProbeGridArray)?Ut=!0:(je.outputColorSpace!==Oe||je.toneMapping!==Gt)&&(Bn=!0):(Ut=!0,je.__version=oe.version);let on=je.currentProgram;(Ut===!0||Bn===!0)&&(on=Bn===!0?kh(oe,$,ue,Oe,Gt):Ds(oe,$,ue),B&&oe.isNodeMaterial&&B.onUpdateProgram(oe,on,je));let Rr=!1,Ei=!1,Gi=!1,Nt=on.getUniforms(),hn=je.uniforms;if(ae.useProgram(on.program)&&(Rr=!0,Ei=!0,Gi=!0),oe.id!==y&&(y=oe.id,Ei=!0),Rr||R!==D){ae.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Nt.setValue(q,"projectionMatrix",D.projectionMatrix),Nt.setValue(q,"viewMatrix",D.matrixWorldInverse);let $t=Nt.map.cameraPosition;$t!==void 0&&$t.setValue(q,wn.setFromMatrixPosition(D.matrixWorld)),_e.logarithmicDepthBuffer&&Nt.setValue(q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Nt.setValue(q,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,Ei=!0,Gi=!0)}if(je.needsLights&&(vn.state.sunShadowMap.length>0&&Nt.setValue(q,"sunShadowMap",vn.state.sunShadowMap,Fe),vn.state.directionalShadowMap.length>0&&Nt.setValue(q,"directionalShadowMap",vn.state.directionalShadowMap,Fe),vn.state.spotShadowMap.length>0&&Nt.setValue(q,"spotShadowMap",vn.state.spotShadowMap,Fe),vn.state.pointShadowMap.length>0&&Nt.setValue(q,"pointShadowMap",vn.state.pointShadowMap,Fe)),ue.isSkinnedMesh){Nt.setOptional(q,ue,"bindMatrix"),Nt.setOptional(q,ue,"bindMatrixInverse");let Wt=ue.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Nt.setValue(q,"boneTexture",Wt.boneTexture,Fe))}ue.isBatchedMesh&&(Nt.setOptional(q,ue,"batchingTexture"),Nt.setValue(q,"batchingTexture",ue._matricesTexture,Fe),Nt.setOptional(q,ue,"batchingIdTexture"),Nt.setValue(q,"batchingIdTexture",ue._indirectTexture,Fe),Nt.setOptional(q,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Nt.setValue(q,"batchingColorTexture",ue._colorsTexture,Fe));let Jn=he.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&se.update(ue,he,on),(Ei||je.receiveShadow!==ue.receiveShadow)&&(je.receiveShadow=ue.receiveShadow,Nt.setValue(q,"receiveShadow",ue.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&$.environment!==null&&(hn.envMapIntensity.value=$.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=Bb()),Ei){if(Nt.setValue(q,"toneMappingExposure",I.toneMappingExposure),je.needsLights&&Ns(hn,Gi),Be&&oe.fog===!0&&Ae.refreshFogUniforms(hn,Be),Ae.refreshMaterialUniforms(hn,oe,j,V,C.state.transmissionRenderTarget[D.id]),je.needsLights&&je.numLightProbeGrids>0){let Wt=b,$t=0;for(let Hn of C.state.lightProbeGridArray)Hn.texture!==null&&(Wt.textures[$t]=Hn.texture,Wt.min[$t]=Hn.boundingBox.min,Wt.max[$t]=Hn.boundingBox.max,Wt.resolution[$t]=Hn.resolution,$t++);for(let Hn in Wt)Wt[Hn].length=$t;hn.probesSH.value=Wt.textures,hn.probesMin.value=Wt.min,hn.probesMax.value=Wt.max,hn.probesResolution.value=Wt.resolution}yo.upload(q,el(je),hn,Fe)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(yo.upload(q,el(je),hn,Fe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Nt.setValue(q,"center",ue.center),Nt.setValue(q,"modelViewMatrix",ue.modelViewMatrix),Nt.setValue(q,"normalMatrix",ue.normalMatrix),Nt.setValue(q,"modelMatrix",ue.matrixWorld),oe.uniformsGroups!==void 0){let Wt=oe.uniformsGroups;for(let $t=0,Hn=Wt.length;$t<Hn;$t++){let Lo=Wt[$t];He.update(Lo,on),He.bind(Lo,on)}}return on}function Ns(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.sunLights.needsUpdate=$,D.sunLightShadows.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function Hh(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(D,$,he){let oe=ee.get(D);oe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ee.get(D.texture).__webglTexture=$,ee.get(D.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:he,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){let he=ee.get(D);he.__webglFramebuffer=$,he.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,he=0){z=D,S=$,E=he;let oe=null,ue=!1,Be=!1;if(D){let Oe=ee.get(D);if(Oe.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),U.copy(D.viewport),Y.copy(D.scissor),ie=D.scissorTest,ae.viewport(U),ae.scissor(Y),ae.setScissorTest(ie),y=-1;return}else if(Oe.__webglFramebuffer===void 0)Fe.setupRenderTarget(D);else if(Oe.__hasExternalTextures)Fe.rebindTextures(D,ee.get(D.texture).__webglTexture,ee.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let _t=D.depthTexture;if(Oe.__boundDepthTexture!==_t){if(_t!==null&&ee.has(_t)&&(D.width!==_t.image.width||D.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(D)}}let Ve=D.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Be=!0);let et=ee.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(et[$])?oe=et[$][he]:oe=et[$],ue=!0):D.samples>0&&Fe.useMultisampledRTT(D)===!1?oe=ee.get(D).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[he]:oe=et,U.copy(D.viewport),Y.copy(D.scissor),ie=D.scissorTest}else U.copy(Ee).multiplyScalar(j).floor(),Y.copy(ke).multiplyScalar(j).floor(),ie=Xe;if(he!==0&&(oe=O),ae.bindFramebuffer(q.FRAMEBUFFER,oe)&&ae.drawBuffers(D,oe),ae.viewport(U),ae.scissor(Y),ae.setScissorTest(ie),ue){let Oe=ee.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,he)}else if(Be){let Oe=$;for(let Ve=0;Ve<D.textures.length;Ve++){let et=ee.get(D.textures[Ve]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ve,et.__webglTexture,he,Oe)}}else if(D!==null&&he!==0){let Oe=ee.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,he)}y=-1};function wi(D){let $=ee.get(D);return($.__readFormat!==D.format||$.__readType!==D.type)&&($.__readFormat=D.format,$.__readType=D.type,$.__formatReadable=_e.textureFormatReadable(D.format),$.__typeReadable=_e.textureTypeReadable(D.type)),$}this.readRenderTargetPixels=function(D,$,he,oe,ue,Be,qe,Oe=0){if(!(D&&D.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ee.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qe!==void 0&&(Ve=Ve[qe],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){ae.bindFramebuffer(q.FRAMEBUFFER,Ve);try{let et=D.textures[Oe],_t=et.format,Ct=et.type;D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe);let $e=wi(et);if($e.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-oe&&he>=0&&he<=D.height-ue&&q.readPixels($,he,oe,ue,Re.convert(_t),Re.convert(Ct),Be)}finally{let et=z!==null?ee.get(z).__webglFramebuffer:null;ae.bindFramebuffer(q.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(D,$,he,oe,ue,Be,qe,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ee.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qe!==void 0&&(Ve=Ve[qe],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if($>=0&&$<=D.width-oe&&he>=0&&he<=D.height-ue){ae.bindFramebuffer(q.FRAMEBUFFER,Ve);let et=D.textures[Oe],_t=et.format,Ct=et.type;D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe);let $e=wi(et);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Tt),q.bufferData(q.PIXEL_PACK_BUFFER,Be.byteLength,q.STREAM_READ),q.readPixels($,he,oe,ue,Re.convert(_t),Re.convert(Ct),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Jt=z!==null?ee.get(z).__webglFramebuffer:null;ae.bindFramebuffer(q.FRAMEBUFFER,Jt);let Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Pm(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Tt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Be),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Tt),q.deleteSync(Gt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,he=0){let oe=Math.pow(2,-he),ue=Math.floor(D.image.width*oe),Be=Math.floor(D.image.height*oe),qe=$!==null?$.x:0,Oe=$!==null?$.y:0;Fe.setTexture2D(D,0),q.copyTexSubImage2D(q.TEXTURE_2D,he,0,0,qe,Oe,ue,Be),ae.unbindTexture()},this.copyTextureToTexture=function(D,$,he=null,oe=null,ue=0,Be=0){let qe,Oe,Ve,et,_t,Ct,$e,Tt,Jt,Gt=D.isCompressedTexture?D.mipmaps[Be]:D.image;if(he!==null)qe=he.max.x-he.min.x,Oe=he.max.y-he.min.y,Ve=he.isBox3?he.max.z-he.min.z:1,et=he.min.x,_t=he.min.y,Ct=he.isBox3?he.min.z:0;else{let Nt=Math.pow(2,-ue);qe=Math.floor(Gt.width*Nt),Oe=Math.floor(Gt.height*Nt),D.isDataArrayTexture?Ve=Gt.depth:D.isData3DTexture?Ve=Math.floor(Gt.depth*Nt):Ve=1,et=0,_t=0,Ct=0}oe!==null?($e=oe.x,Tt=oe.y,Jt=oe.z):($e=0,Tt=0,Jt=0);let wt=Re.convert($.format),Yt=Re.convert($.type),je;$.isData3DTexture?(Fe.setTexture3D($,0),je=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Fe.setTexture2DArray($,0),je=q.TEXTURE_2D_ARRAY):(Fe.setTexture2D($,0),je=q.TEXTURE_2D),ae.activeTexture(q.TEXTURE0),ae.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),ae.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ae.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);let vn=ae.getParameter(q.UNPACK_ROW_LENGTH),Ut=ae.getParameter(q.UNPACK_IMAGE_HEIGHT),Bn=ae.getParameter(q.UNPACK_SKIP_PIXELS),on=ae.getParameter(q.UNPACK_SKIP_ROWS),Rr=ae.getParameter(q.UNPACK_SKIP_IMAGES);ae.pixelStorei(q.UNPACK_ROW_LENGTH,Gt.width),ae.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Gt.height),ae.pixelStorei(q.UNPACK_SKIP_PIXELS,et),ae.pixelStorei(q.UNPACK_SKIP_ROWS,_t),ae.pixelStorei(q.UNPACK_SKIP_IMAGES,Ct);let Ei=D.isDataArrayTexture||D.isData3DTexture,Gi=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){let Nt=ee.get(D),hn=ee.get($),Jn=ee.get(Nt.__renderTarget),Wt=ee.get(hn.__renderTarget);ae.bindFramebuffer(q.READ_FRAMEBUFFER,Jn.__webglFramebuffer),ae.bindFramebuffer(q.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let $t=0;$t<Ve;$t++)Ei&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ee.get(D).__webglTexture,ue,Ct+$t),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ee.get($).__webglTexture,Be,Jt+$t)),q.blitFramebuffer(et,_t,et+qe,_t+Oe,$e,Tt,$e+qe,Tt+Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);ae.bindFramebuffer(q.READ_FRAMEBUFFER,null),ae.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ue!==0||D.isRenderTargetTexture||ee.has(D)){let Nt=ee.get(D),hn=ee.get($);ae.bindFramebuffer(q.READ_FRAMEBUFFER,L),ae.bindFramebuffer(q.DRAW_FRAMEBUFFER,J);for(let Jn=0;Jn<Ve;Jn++)Ei?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.__webglTexture,ue,Ct+Jn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Nt.__webglTexture,ue),Gi?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,hn.__webglTexture,Be,Jt+Jn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,hn.__webglTexture,Be),ue!==0?q.blitFramebuffer(et,_t,et+qe,_t+Oe,$e,Tt,$e+qe,Tt+Oe,q.COLOR_BUFFER_BIT,q.NEAREST):Gi?q.copyTexSubImage3D(je,Be,$e,Tt,Jt+Jn,et,_t,qe,Oe):q.copyTexSubImage2D(je,Be,$e,Tt,et,_t,qe,Oe);ae.bindFramebuffer(q.READ_FRAMEBUFFER,null),ae.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Gi?D.isDataTexture||D.isData3DTexture?q.texSubImage3D(je,Be,$e,Tt,Jt,qe,Oe,Ve,wt,Yt,Gt.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(je,Be,$e,Tt,Jt,qe,Oe,Ve,wt,Gt.data):q.texSubImage3D(je,Be,$e,Tt,Jt,qe,Oe,Ve,wt,Yt,Gt):D.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Be,$e,Tt,qe,Oe,wt,Yt,Gt.data):D.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Be,$e,Tt,Gt.width,Gt.height,wt,Gt.data):q.texSubImage2D(q.TEXTURE_2D,Be,$e,Tt,qe,Oe,wt,Yt,Gt);ae.pixelStorei(q.UNPACK_ROW_LENGTH,vn),ae.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut),ae.pixelStorei(q.UNPACK_SKIP_PIXELS,Bn),ae.pixelStorei(q.UNPACK_SKIP_ROWS,on),ae.pixelStorei(q.UNPACK_SKIP_IMAGES,Rr),Be===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&q.generateMipmap(je),ae.unbindTexture()},this.initRenderTarget=function(D){ee.get(D).__webglFramebuffer===void 0&&Fe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Fe.setTextureCube(D,0):D.isData3DTexture?Fe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Fe.setTexture2DArray(D,0):Fe.setTexture2D(D,0),ae.unbindTexture()},this.resetState=function(){S=0,E=0,z=null,ae.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var So=Et;So.__vkwToon||(So.__vkwToon=!0,So.lights_lambert_pars_fragment=So.lights_lambert_pars_fragment.replace("float dotNL = saturate( dot( geometryNormal, directLight.direction ) );",`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	#ifdef VKW_TOON
	dotNL = mix( 0.3, 1.0, smoothstep( 0.1, 0.2, dotNL ) );
	#endif`),So.dithering_fragment=`#ifdef VKW_TOON
	{ float vkwL = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) ); gl_FragColor.rgb = max( vec3( 0.0 ), mix( vec3( vkwL ), gl_FragColor.rgb, 1.22 ) ); }
#endif
`+So.dithering_fragment);var ka=new Map;function ah(s){let e=s.toFixed(4);if(ka.has(e))return ka.get(e);let t=new tn({color:"#21142c",side:mn,fog:!0});return t.name="vkw-outline",t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
	transformed += normalize( normal ) * ${s.toFixed(4)};`)},t.customProgramCacheKey=()=>"vkw-outline-"+e,ka.set(e,t),t}function gg(){for(let s of ka.values())s.dispose();ka.clear()}function Cf(s,e){let t=0;return s.traverse(n=>{if(n.material)for(let i of Array.isArray(n.material)?n.material:[n.material])!(i.isMeshLambertMaterial||i.isMeshBasicMaterial)||i.name==="vkw-outline"||!!(i.defines&&"VKW_TOON"in i.defines)===e||(i.defines={...i.defines||{}},e?i.defines.VKW_TOON="":delete i.defines.VKW_TOON,i.needsUpdate=!0,t++)}),t}function Ba(s,e,t){let n=[];s.traverse(i=>{i.isMesh&&!i.userData.outline&&!i.userData.hasOutline&&(!t||t(i))&&n.push(i)});for(let i of n){let r;i.isSkinnedMesh?(r=new nr(i.geometry,ah(e)),r.bind(i.skeleton,i.bindMatrix),r.bindMode=i.bindMode,i.boundingSphere&&(r.boundingSphere=i.boundingSphere)):r=new Mt(i.geometry,ah(e)),r.position.copy(i.position),r.quaternion.copy(i.quaternion),r.scale.copy(i.scale),r.matrixAutoUpdate=i.matrixAutoUpdate,i.matrixAutoUpdate||r.matrix.copy(i.matrix),r.frustumCulled=i.frustumCulled,r.castShadow=!1,r.receiveShadow=!1,r.renderOrder=i.renderOrder,r.userData.outline=!0,i.userData.hasOutline=r,i.parent.add(r)}}function If(s){let e=[];s.traverse(t=>{t.userData.outline&&e.push(t),t.userData.hasOutline&&(t.userData.hasOutline=null)});for(let t of e)t.parent&&t.parent.remove(t)}var ws={};tp(ws,{GROUPS:()=>Eo,allMaterials:()=>sS,altKitMaterial:()=>ud,clips:()=>hd,get:()=>ci,getBase:()=>jb,groupLoaded:()=>mh,has:()=>zn,load:()=>Tg,loadGroups:()=>br,material:()=>ld,prop:()=>yn,releaseGPU:()=>fd,setBase:()=>ph,tinted:()=>To,villagerTinted:()=>cd});function vg(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Pt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=xg(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let p=xg(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function xg(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new bt(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let v=h.getComponent(f,p);a.setComponent(f+u,p,v)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Pf(s,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===_o||e===La){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===_o)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function lh(s){let e=new Map,t=new Map,n=s.clone();return _g(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _g(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)_g(s.children[n],e.children[n],t)}var ch=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new hh(t,Rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hh(t,Rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new jf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=os.extractUrlBase(e);o=os.resolveURL(l,this.path)}else o=os.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new uo(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wg){try{o[Rt.KHR_BINARY_GLTF]=new Qf(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new od(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Rt.KHR_MATERIALS_UNLIT:o[u]=new Ff;break;case Rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ed(r,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:o[u]=new td;break;case Rt.KHR_MESH_QUANTIZATION:o[u]=new nd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Gb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Zt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uf=class{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new si(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ur(h),l.distance=u;break;case"spot":l=new ya(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ff=class{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}},Of=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ht(r,r)}return Promise.all(i)}},kf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Bf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Gf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Vf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Wf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],Nn),Promise.all(i)}},Xf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},qf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],Nn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ot)),Promise.all(i)}},Yf=class{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Kf=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Zf=class{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Jf=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},$f=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},hh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},jf=class{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let v=new ot,m=new X,g=new Kt,M=new X(1,1,1),P=new ir(p.geometry,p.material,f);for(let T=0;T<f;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,T),c.SCALE&&M.fromBufferAttribute(c.SCALE,T),P.setMatrixAt(T,v.compose(m,g,M));let b=null;for(let T in c)if(T==="_COLOR_0"){let C=c[T];P.instanceColor=new Un(C.array,C.itemSize,C.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(b===null){let x=P.geometry;b=new Pt,b.name=x.name;for(let _ in x.attributes)b.setAttribute(_,x.attributes[_]);for(let _ in x.morphAttributes)b.morphAttributes[_]=x.morphAttributes[_];x.index!==null&&b.setIndex(x.index),b.morphTargetsRelative=x.morphTargetsRelative;for(let _ of x.groups)b.addGroup(_.start,_.count,_.materialIndex);x.boundingBox!==null&&(b.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(b.boundingSphere=x.boundingSphere.clone()),b.drawRange.start=x.drawRange.start,b.drawRange.count=x.drawRange.count,b.userData=Object.assign({},x.userData),P.geometry=b}let C=c[T];b.setAttribute(T,new Un(C.array,C.itemSize,C.normalized))}Xt.prototype.copy.call(P,p),this.parser.assignFinalMaterial(P),d.push(P)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},wg="glTF",Ha=12,yg={JSON:1313821514,BIN:5130562},Qf=class{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ha,r=new DataView(e,Ha),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===yg.JSON){let l=new Uint8Array(e,Ha+o,a);this.content=n.decode(l)}else if(c===yg.BIN){let l=Ha+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=sd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=sd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=wo[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let v=d.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}u(d)},a,l,Nn,f)})})}},td=class{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},nd=class{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}},uh=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,v=p-l,m=-2*d+3*f,g=d-f,M=1-m,P=g-f+u;for(let b=0;b!==a;b++){let T=o[v+b+a],C=o[v+b+c]*h,x=o[p+b+a],_=o[p+b]*h;r[b]=M*T+P*C+m*x+g*_}return r}},Vb=new Kt,id=class extends uh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Vb.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mg={9728:en,9729:fn,9984:gc,9985:xo,9986:vr,9987:ri},bg={33071:Wn,33648:Qr,10497:xs},Lf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wb={CUBICSPLINE:void 0,LINEAR:js,STEP:$s},Df={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ar({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),s.DefaultMaterial}function Mr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Yb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(s){let e,t=s.extensions&&s.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nf(t.attributes):e=s.indices+":"+Nf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Nf(s.targets[n]);return e}function Nf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function rd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Jb=new ot,od=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?(this.textureLoader=new lr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ba(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mr(r,a,i),Oi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(os.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Lf[i.type],a=wo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new bt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Lf[i.type],l=wo[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,m;if(d&&d!==u){let g=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,P=t.cache.get(M);P||(v=new l(a,g*d,i.count*d/h),P=new tr(v,d/h),t.cache.add(M,P)),m=new vs(P,c,f%d/h,p)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),m=new bt(v,c,p);if(i.sparse!==void 0){let g=Lf.SCALAR,M=wo[i.sparse.indices.componentType],P=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,T=new M(o[1],P,i.sparse.count*g),C=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,_=T.length;x<_;x++){let N=T[x];if(m.setX(N,C[x*c]),c>=2&&m.setY(N,C[x*c+1]),c>=3&&m.setZ(N,C[x*c+2]),c>=4&&m.setW(N,C[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Mg[f.magFilter]||fn,h.minFilter=Mg[f.minFilter]||ri,h.wrapS=bg[f.wrapS]||xs,h.wrapT=bg[f.wrapT]||xs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(m){let g=new dn(m);g.needsUpdate=!0,d(g)}),t.load(os.resolveURL(f,r.path),v,void 0,p)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),Oi(f,o),f.userData.mimeType=o.mimeType||Zb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ho,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new co,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ar}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Rt.KHR_MATERIALS_UNLIT]){let u=i[Rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);let h=r.alphaMode||Df.OPAQUE;if(h===Df.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Df.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ht(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==tn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){let u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&o!==tn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(i,u,r),u})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Kb(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Sg(new Pt,l,t),l.mode===ai.TRIANGLE_STRIP?f=f.then(d=>Pf(d,La)):l.mode===ai.TRIANGLE_FAN&&(f=f.then(d=>Pf(d,_o))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Xb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let v=h[d],m=o[d],g,M=l[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let P=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");P&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=P&&b?new nr(v,M):new Mt(v,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ai.LINES)g=new ca(v,M);else if(m.mode===ai.LINE_STRIP)g=new sr(v,M);else if(m.mode===ai.LINE_LOOP)g=new ha(v,M);else if(m.mode===ai.POINTS)g=new gi(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Yb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Oi(g,r),m.extensions&&Mr(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Mr(i,u[0],r),u[0];let f=new Bt;r.extensions&&Mr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(th.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new aa(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],v=d.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",M)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let P=0,b=f.length;P<b;P++){let T=f[P],C=d[P],x=p[P],_=v[P],N=m[P];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,C,x,_,N);if(I)for(let H=0;H<I.length;H++)g.push(I[H])}let M=new _i(r,void 0,g);return Oi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Jb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new X().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ao:l.length>1?h=new Bt:l.length===1?h=l[0]:h=new Xt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Oi(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),Oi(r,n),n.extensions&&Mr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(lh(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Cn||f instanceof dn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Ss[r.path]===Ss.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Ss[r.path]){case Ss.weights:h=is;break;case Ss.rotation:h=ss;break;case Ss.translation:case Ss.scale:h=ys;break;default:n.itemSize===1?h=is:h=ys;break}let u=i.interpolation!==void 0?Wb[i.interpolation]:js,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let v=new h(c[d]+"."+Ss[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ss?id:uh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $b(s,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new X(c[0],c[1],c[2]),new X(l[0],l[1],l[2])),a.normalized){let h=rd(wo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new X,c=new X;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let v=rd(wo[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new jt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Sg(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=sd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return At.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),Oi(s,e),$b(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qb(s,e.targets,t):s})}ii.enabled=!0;var dh="assets/models/";function ph(s){dh=s.endsWith("/")?s:s+"/"}function jb(){return dh}var Eo={chars:[...Array.from({length:12},(s,e)=>`characters/villager-${String(e).padStart(2,"0")}.glb`),"characters/villager-anims.glb","hats/hats.glb"],village:["houses/house-0.glb","houses/house-1.glb","houses/house-2.glb","houses/house-3.glb","props/village.glb"],extra:["props/graveyard.glb","characters/ghost.glb"],cine:["interior/furniture.glb","interior/clues.glb","characters/vampire.glb","characters/bat.glb"]},cs=new Map,Ga=new Map,li=new Map,ad=null,zi=null;function Qb(){return ad||(ad=new ch),ad}function Eg(s){var i;let e=s.name||"mat",t=e;if((e==="cloth"||e.startsWith("tint"))&&(t=e),li.has(t))return li.get(t);let n;return e==="window"?n=new tn({color:16777215,name:e,fog:!0}):(n=new pn({name:e,map:s.map||null,color:s.color?s.color.clone():new Ne(1,1,1),side:s.side,transparent:!1}),s.emissive&&s.emissive.r+s.emissive.g+s.emissive.b>0&&(n.emissive.copy(s.emissive),n.emissiveIntensity=(i=s.emissiveIntensity)!=null?i:1)),n.map&&(n.map.colorSpace=Ot,n.map.anisotropy=2),li.set(t,n),n}function ld(s){return li.get(s)}function eS(s,e){e.scene.traverse(t=>{if(!t.isMesh)return;if(Array.isArray(t.material))t.material=t.material.map(Eg);else{let i=t.material;t.material=Eg(i),i!==t.material&&i.map&&i.map!==t.material.map&&i.map.dispose(),i!==t.material&&i.dispose()}t.isSkinnedMesh&&(t.frustumCulled=!1)}),s.includes("/villager-")&&!s.includes("anims")&&nS(e)}function tS(s){let e=s.geometry,t=e.attributes.position.count,n=new Float32Array(t).fill(1);try{let i=s.material.map&&s.material.map.image,r=e.attributes.uv;if(!i||!r)return n;let o=document.createElement("canvas");o.width=i.width,o.height=i.height;let a=o.getContext("2d");a.drawImage(i,0,0);let c=a.getImageData(0,0,i.width,i.height).data,l=s.material.map.flipY;for(let h=0;h<t;h++){let u=r.getX(h)%1,f=r.getY(h)%1;u<0&&(u+=1),f<0&&(f+=1);let d=Math.min(i.width-1,Math.floor(u*i.width)),p=Math.min(i.height-1,Math.floor((l?1-f:f)*i.height));n[h]=Math.max(.05,c[(p*i.width+d)*4]/255)}}catch{}return n}function nS(s){let e=[];s.scene.traverse(a=>{a.isSkinnedMesh&&e.push(a)});let t=e.filter(a=>a.material.name==="villager");if(!t.length)return;let n=e.filter(a=>a.material.name==="cloth"&&a.skeleton&&a.skeleton.bones.length===t[0].skeleton.bones.length),i=t.concat(n);if(i.length<2)return;let[r,...o]=i;try{let a=i.map(l=>{let h=l.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv","skinIndex","skinWeight"].includes(f)||h.deleteAttribute(f);let u=l.material.name==="cloth";return h.setAttribute("aCloth",new bt(u?tS(l):new Float32Array(h.attributes.position.count),1)),h}),c=vg(a,!1);if(!c)return;r.geometry.dispose(),r.geometry=c,r.userData.clothMerged=n.length>0;for(let l of o)l.parent.remove(l),l.geometry.dispose()}catch{}}var fh=new Map;function cd(s){if(fh.has(s))return fh.get(s);let e=li.get("villager");if(!e)return null;let t=e.clone();t.name="villager";let n={value:new Ne(s)};return t.userData.uCloth=n,t.onBeforeCompile=i=>{i.uniforms.uCloth=n,i.vertexShader=`attribute float aCloth;
varying float vCloth;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vCloth = aCloth;`),i.fragmentShader=`uniform vec3 uCloth;
varying float vCloth;
`+i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCloth > 0.01) diffuseColor.rgb = uCloth * vCloth;`)},t.customProgramCacheKey=()=>"vkw-villager-cloth",fh.set(s,t),t}function Tg(s,e){if(cs.has(s))return e&&e(),Promise.resolve(cs.get(s));if(Ga.has(s))return Ga.get(s).then(n=>(e&&e(),n));let t=new Promise((n,i)=>{Qb().load(dh+s,r=>{try{eS(s,r)}catch(o){console.warn("[VKWorld] haz\u0131rlama hatas\u0131",s,o)}cs.set(s,r),Ga.delete(s),n(r)},void 0,r=>{Ga.delete(s),i(r)})});return Ga.set(s,t),t.then(n=>(e&&e(),n))}function br(s,e){let t=[];for(let r of s)for(let o of Eo[r])t.includes(o)||t.push(o);let n=0,i=t.length;return e&&e(0,i),Promise.all(t.map(r=>Tg(r,()=>{n++,e&&e(n,i)})))}function zn(s){return cs.has(s)}function ci(s){return cs.get(s)}function mh(s){return Eo[s].every(e=>cs.has(e))}var iS={graveyard:"props/graveyard.glb",village:"props/village.glb",furniture:"interior/furniture.glb",clues:"interior/clues.glb"};function yn(s,e){let t=cs.get(iS[s]||"props/village.glb");return t&&t.scene.getObjectByName(e)||null}function hd(){let s=cs.get("characters/villager-anims.glb");return s?s.animations:[]}var Va=new Map;function To(s,e,t){let n=s+"|"+e+(t||"");if(Va.has(n))return Va.get(n);let i=li.get(s);if(!i)return null;let r=i.clone();return r.color.set(e),r.name=s,Va.set(n,r),r}function ud(){if(li.has("fantasy-town-b"))return li.get("fantasy-town-b");let s=li.get("fantasy-town");if(!s)return null;let e=s.clone();return e.name="fantasy-town-b",zi||(zi=new lr().load(dh+"textures/fantasy-town-b.png"),zi.flipY=!1,zi.colorSpace=Ot,zi.anisotropy=2,s.map&&(zi.wrapS=s.map.wrapS,zi.wrapT=s.map.wrapT)),e.map=zi,li.set("fantasy-town-b",e),e}function sS(){return[...li.values(),...Va.values()]}function fd(){let s=new Set,e=t=>{t&&!s.has(t)&&(s.add(t),t.dispose())};for(let t of cs.values())t.scene.traverse(n=>{n.geometry&&e(n.geometry);let i=n.material?Array.isArray(n.material)?n.material:[n.material]:[];for(let r of i)e(r),r.map&&e(r.map)});for(let t of li.values())e(t),t.map&&e(t.map);for(let t of Va.values())e(t);for(let t of fh.values())e(t);zi&&e(zi)}var Mn=["#d7263d","#2b59c3","#2f9e44","#f06595","#f76707","#f2c12e","#3b3b46","#e9ecef","#7048e8","#8d5a3b","#15aabf","#94d82d","#862e3c","#ffa8c5","#1c2e6e","#868e96","#d9b99b","#ff8364","#6b7a2a","#b197fc"],rS=["K\u0131rm\u0131z\u0131","Mavi","Ye\u015Fil","Pembe","Turuncu","Sar\u0131","Siyah","Beyaz","Mor","Kahverengi","Camg\xF6be\u011Fi","F\u0131st\u0131k","Bordo","G\xFCl","Lacivert","Gri","Bej","Mercan","Zeytin","Lavanta"],dd=[null,"hat-1-hasir","hat-2-bere","hat-3-cicek","hat-4-silindir","hat-5-bandana","hat-6-filiz","hat-7-kasket","hat-8-kulaklik"],oS=["\u015Eapkas\u0131z","Has\u0131r \u015Fapka","Bere","\xC7i\xE7ek","Silindir","Bandana","Filiz","Kasket","Kulakl\u0131k"],aS=["G\xF6zl\xFCkl\xFC","Topuzlu","Sakall\u0131","Bereli","Yelekli","K\u0131z\u0131l topuz","Korsan","\xD6nl\xFCkl\xFC","Tak\u0131m elbiseli","Uzun sa\xE7l\u0131","Kitap kurdu","At kuyruklu"],lS=["Ye\u015Fil g\xF6mlekli, g\xF6zl\xFCkl\xFC","Sar\u0131 ti\u015F\xF6rtl\xFC, topuzlu","Kel, sakall\u0131","Bereli, mavi g\xF6mlekli","K\u0131sa sa\xE7l\u0131, yelekli","K\u0131z\u0131l topuzlu, ceketli","G\xF6z bantl\u0131, sakall\u0131","Uzun siyah sa\xE7l\u0131, \xF6nl\xFCkl\xFC","K\u0131z\u0131l sa\xE7l\u0131, tak\u0131m elbiseli","K\u0131z\u0131l uzun sa\xE7l\u0131","G\xF6zl\xFCkl\xFC, \xF6nl\xFCkl\xFC","At kuyruklu, ask\u0131l\u0131"],Ag=[0,.052,-.01,.105,0,.105,0,.045,.051,0,.005,.045],Rg=Mn.map((s,e)=>({id:e,hex:s,name:rS[e]})),Cg=oS.map((s,e)=>({id:e,name:s,node:dd[e]})),Ig=aS.map((s,e)=>({id:e,name:s,desc:lS[e]}));var pd={vampir:!0,iftiraci:!0};var hi={vampir:{label:"\u{1FA78} Hedefin",color:"#d7263d"},iftiraci:{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"},doktor:{label:"\u{1F6E1}\uFE0F Koruman",color:"#5ef0a0"},kahin:{label:"\u{1F52E} Bak\u0131lacak",color:"#9b7bff"},gozcu:{label:"\u{1F441}\uFE0F G\xF6zleniyor",color:"#8fb4ff"},heal:{label:"\u{1F9EA} \u0130ksir",color:"#5ef0a0"},poison:{label:"\u2620\uFE0F Zehir",color:"#94d82d"},vote:{label:"\u2696\uFE0F Oyun",color:"#f2c12e"},shoot:{label:"\u{1F3AF} Hedef",color:"#ff8364"}},ut=(s,e,t)=>s<e?e:s>t?t:s,md=(s,e,t)=>s+(e-s)*t,Es=s=>s*s*(3-2*s),ln=(s,e)=>1-Math.exp(-s*e),Ze=Math.PI*2;function cn(s){return s=(s+Math.PI)%Ze,s<0&&(s+=Ze),s-Math.PI}function kn(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var cS=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,hS=`
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
}`,uS=`
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
}`,fS=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.0, length(c));
  gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a * vA);
}`;function Pg(s,e){let t=new Bt;t.name="sky",s.add(t);let n=new nn({vertexShader:cS,fragmentShader:hS,side:mn,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uTop:{value:new Ne},uHor:{value:new Ne},uSun:{value:new Ne},uSunDir:{value:new X(0,1,0)},uMoonDir:{value:new X(0,1,0)},uSunVis:{value:1},uMoonVis:{value:0},uGlow:{value:1},uMoonCol:{value:new Ne(.93,.95,1)}}}),i=new Mt(new ma(450,32,16),n);i.renderOrder=-10,i.frustumCulled=!1,t.add(i);let r=kn(77),o=700,a=new Float32Array(o*3),c=new Float32Array(o),l=new Float32Array(o);for(let m=0;m<o;m++){let g=r(),M=r(),P=g*Ze,b=.04+Math.pow(M,.8)*.96,T=Math.sqrt(1-b*b);a[m*3]=Math.cos(P)*T*420,a[m*3+1]=b*420,a[m*3+2]=Math.sin(P)*T*420,c[m]=1+Math.pow(r(),6)*3.2,l[m]=r()*3}let h=new Pt;h.setAttribute("position",new bt(a,3)),h.setAttribute("aSize",new bt(c,1)),h.setAttribute("aPhase",new bt(l,1));let u=new nn({vertexShader:uS,fragmentShader:fS,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1}}}),f=new gi(h,u);f.frustumCulled=!1,f.renderOrder=-9,t.add(f);let d=pS();t.add(d);let p=mS();return t.add(p),{group:t,update(m,g,M,P,b){let T=n.uniforms;b&&T.uMoonCol.value.copy(b),T.uTop.value.copy(m.top),T.uHor.value.copy(m.hor),T.uSun.value.copy(m.sun),T.uSunDir.value.copy(m.sunDir),T.uMoonDir.value.copy(m.moonDir),T.uSunVis.value=m.sunVis,T.uMoonVis.value=m.moonVis,T.uGlow.value=.6+m.dusk*1.4,u.uniforms.uTime.value=g,u.uniforms.uAlpha.value=m.stars,u.uniforms.uPx.value=P,f.visible=m.stars>.01,t.position.set(M.position.x,0,M.position.z),Wa.color.copy(m.hor).lerp(m.sun,.35).lerp(dS,.55*(1-m.night)),Wa.color.multiplyScalar(.55+.45*(1-m.night*.8)),d.rotation.y=g*.004,d.visible=e.clouds,Ao.uniforms.uFar.value.copy(m.hor),Ao.uniforms.uNear.value.copy(m.gnd).lerp(m.hor,.35).multiplyScalar(.9),Ao.uniforms.uTint.value.copy(m.sky)},dispose(){t.traverse(m=>{m.geometry&&m.geometry.dispose()}),n.dispose(),u.dispose(),Wa.dispose(),Ao.dispose(),s.remove(t)}}}var dS=new Ne(1,1,1),Wa=null,Ao=null;function pS(){let s=kn(4242),e=[];for(let a=0;a<11;a++){let c=s()*Ze,l=210+s()*120,h=70+s()*55,u=3+Math.floor(s()*4);for(let f=0;f<u;f++){let d=new pa(1,0),p=9+s()*12;d.scale(p*(1.3+s()*.6),p*.55,p),d.translate((f-u/2)*13+s()*5,s()*4,s()*8),d.rotateY(c+Math.PI/2),d.translate(Math.cos(c)*l,h,Math.sin(c)*l),e.push(d)}}let t=gS(e),n=t.getAttribute("position"),i=new Float32Array(n.count*3);t.computeVertexNormals();let r=t.getAttribute("normal");for(let a=0;a<n.count;a++){let c=.72+.28*Math.max(0,r.getY(a))+.08*r.getX(a);i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c*1.03}t.setAttribute("color",new bt(i,3)),Wa=new tn({vertexColors:!0,fog:!1,transparent:!0,opacity:.92,depthWrite:!1});let o=new Mt(t,Wa);return o.renderOrder=-8,o.frustumCulled=!1,o}function mS(){let s=kn(9001),e=[],t=[],n=[],i=[{r:380,h:125,n:70,k:0},{r:300,h:62,n:90,k:1}];for(let a of i){let c=e.length/3,l=0;for(let h=0;h<=a.n;h++){let u=h/a.n*Ze,f=a.h*(.35+.65*Math.abs(Math.sin(u*3.1+a.k)*.6+Math.sin(u*7.3+1.7*a.k)*.3+(s()-.5)*.35));h===a.n&&(f=l),h===0&&(l=f);let d=Math.cos(u)*a.r,p=Math.sin(u)*a.r;if(e.push(d,-20,p,d,f,p),t.push(a.k,0,0,a.k,1,0),h<a.n){let v=c+h*2;n.push(v,v+2,v+1,v+1,v+2,v+3)}}}let r=new Pt;r.setAttribute("position",new Dt(e,3)),r.setAttribute("color",new Dt(t,3)),r.setIndex(n),Ao=new nn({side:sn,fog:!1,depthWrite:!1,uniforms:{uFar:{value:new Ne},uNear:{value:new Ne},uTint:{value:new Ne}},vertexShader:"attribute vec3 color; varying vec2 vC; void main(){ vC = color.xy; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uFar, uNear, uTint; varying vec2 vC;
      void main(){
        // yak\u0131n s\u0131ra koyu ve tok, uzak s\u0131ra ufuk rengine yak\u0131n (hava perspektifi)
        vec3 nearC = mix(uNear * 0.8, uFar, 0.12 + 0.3 * vC.y);
        vec3 farC = mix(mix(uNear, uTint, 0.45), uFar, 0.5 + 0.3 * vC.y);
        gl_FragColor = vec4(mix(farC, nearC, vC.x), 1.0);
        #include <colorspace_fragment>
      }`});let o=new Mt(r,Ao);return o.renderOrder=-7,o.frustumCulled=!1,o}function gS(s){let e=0;for(let r of s)e+=r.getAttribute("position").count;let t=new Float32Array(e*3),n=0;for(let r of s){let o=r.getAttribute("position").array;t.set(o,n),n+=o.length,r.dispose()}let i=new Pt;return i.setAttribute("position",new bt(t,3)),i}function gh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function gd(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let o=gh(t,n),a=gh(t+1,n),c=gh(t,n+1),l=gh(t+1,n+1);return o+(a-o)*i+(c-o)*r+(o-a-c+l)*i*r}function Lg(s,e){return gd(s,e)*.55+gd(s*2.1,e*2.1)*.3+gd(s*4.3,e*4.3)*.15}function Dg(s,e){let r=[];for(let C=0;C<=56;C++){let x=C/56;r.push(x<.5?x*2*48:48+Math.pow((x-.5)*2,1.6)*272)}let o=6721,a=new Float32Array(o*3),c=new Float32Array(o*2),l=new Float32Array(o*3),h=[];for(let C=1;C<=56;C++)for(let x=0;x<120;x++){let _=1+(C-1)*120+x,N=1+(C-1)*120+(x+1)%120;if(C===1)h.push(0,N,_);else{let I=1+(C-2)*120+x,H=1+(C-2)*120+(x+1)%120;h.push(I,H,_,H,N,_)}}let u=new Pt;u.setAttribute("position",new bt(a,3)),u.setAttribute("uv",new bt(c,2)),u.setAttribute("color",new bt(l,3)),u.setIndex(h);let f=document.createElement("canvas");f.width=f.height=e.groundTex;let d=f.getContext("2d"),p=new rr(f);p.colorSpace=Ot,p.wrapS=p.wrapT=Wn,p.anisotropy=4;let v=new pn({map:p,vertexColors:!0}),m=new Mt(u,v);m.receiveShadow=!0,m.name="ground",m.renderOrder=-1,s.add(m);let g=30,M=45;function P(C,x){let _=Math.hypot(C,x);if(_<=g)return 0;let N=Es(ut((_-g)/26,0,1)),I=Lg(C*.018+3,x*.018-7),H=ut((_-g)/140,0,1);return N*(.6+I*3.5)+H*H*H*(8+I*14)}function b(){let C=0,x=(_,N)=>{let I=P(_,N);a[C*3]=_,a[C*3+1]=I,a[C*3+2]=N,c[C*2]=_/(2*M)+.5,c[C*2+1]=1-(N/(2*M)+.5);let H=Math.hypot(_,N),B=Lg(_*.05,N*.05),O=ut((H-g)/60,0,1),L=ut(I/30,0,1),J=.92+(B-.5)*.22;l[C*3]=J*(1-O*.32)+L*.08,l[C*3+1]=J*(1-O*.22),l[C*3+2]=J*(1-O*.18)+L*.06,C++};x(0,0);for(let _=1;_<=56;_++)for(let N=0;N<120;N++){let I=N/120*Ze+_%2*(Math.PI/120);x(Math.cos(I)*r[_],Math.sin(I)*r[_])}u.getAttribute("position").needsUpdate=!0,u.getAttribute("uv").needsUpdate=!0,u.getAttribute("color").needsUpdate=!0,u.computeVertexNormals(),u.computeBoundingSphere()}function T(C,x){let _=!!(x&&x.snow);g=C.R+10,M=C.R+17,b();let N=f.width,I=N/(2*M),H=U=>(U+M)*I,B=U=>(U+M)*I,O=kn(31337);d.globalCompositeOperation="source-over",d.globalAlpha=1,d.fillStyle=_?"#e4ebf2":"#7db457",d.fillRect(0,0,N,N);for(let U=0;U<260;U++){let Y=O()*N,ie=O()*N,Q=(2+O()*7)*I,Z=d.createRadialGradient(Y,ie,0,Y,ie,Q),W=_?O()<.5?"255,255,255":O()<.5?"200,212,228":"176,196,170":O()<.5?"120,170,82":O()<.5?"92,136,66":"138,160,78";Z.addColorStop(0,`rgba(${W},0.45)`),Z.addColorStop(1,`rgba(${W},0)`),d.fillStyle=Z,d.fillRect(Y-Q,ie-Q,Q*2,Q*2)}for(let U=0;U<N*6;U++){let Y=O()*N,ie=O()*N;d.fillStyle=_?O()<.5?"rgba(255,255,255,0.4)":"rgba(170,186,206,0.25)":O()<.5?"rgba(150,196,100,0.35)":"rgba(70,112,52,0.3)",d.fillRect(Y,ie,1+O()*1.5,1+O()*2.5)}for(let U=0;U<380;U++){let Y=O()*Ze,ie=C.Rp+2+O()*(M-C.Rp-2),Q=H(Math.cos(Y)*ie),Z=B(Math.sin(Y)*ie);d.fillStyle=["#f4e4c1","#ffd34d","#c9a0ff","#ff9fb8"][Math.floor(O()*4)],d.globalAlpha=_?0:.8,d.beginPath(),d.arc(Q,Z,Math.max(1,I*.06),0,Ze),d.fill()}d.globalAlpha=1;for(let U of C.houses){let Y=H(U.x),ie=B(U.z),Q=(U.size*.62+1.4)*I,Z=d.createRadialGradient(Y,ie,Q*.3,Y,ie,Q);Z.addColorStop(0,_?"rgba(150,160,176,0.6)":"rgba(58,70,40,0.75)"),Z.addColorStop(1,_?"rgba(150,160,176,0)":"rgba(58,70,40,0)"),d.fillStyle=Z,d.fillRect(Y-Q,ie-Q,Q*2,Q*2)}let L=(U,Y,ie,Q)=>{d.globalAlpha=Q,d.strokeStyle=ie,d.lineWidth=Y*I,d.lineCap="round",d.lineJoin="round",d.beginPath(),d.moveTo(H(U[0][0]),B(U[0][1]));for(let Z=1;Z<U.length;Z++)d.lineTo(H(U[Z][0]),B(U[Z][1]));d.stroke(),d.globalAlpha=1},J=[];for(let U of C.houses){let Y=U.door,ie=Math.atan2(Y.ax,Y.az),Q=C.Rp-.5,Z=[[Y.dx,Y.dz],[Y.ax,Y.az],[Math.sin(ie)*C.Rr,Math.cos(ie)*C.Rr],[Math.sin(ie)*Q,Math.cos(ie)*Q]];J.push(Z)}let S=C.gateAngle,E=[[Math.sin(S)*(C.Rp-.5),Math.cos(S)*(C.Rp-.5)],[Math.sin(S)*(C.R+2),Math.cos(S)*(C.R+2)],[Math.sin(S+.05)*(C.R+12),Math.cos(S+.05)*(C.R+12)],[Math.sin(S-.02)*(M+4),Math.cos(S-.02)*(M+4)]];J.push(E);for(let U of J)L(U,2.6,_?"#b4b8bf":"#8f7a52",.35);for(let U of J)L(U,1.7,_?"#8f8476":"#a88d5e",.85);for(let U of J)L(U,.7,_?"#a59a8c":"#b89c6a",.5);d.globalAlpha=.28,d.strokeStyle="#a88d5e",d.lineWidth=1.6*I,d.beginPath(),d.arc(H(0),B(0),C.Rr*I,0,Ze),d.stroke(),d.globalAlpha=1;let z=(C.Rp+.8)*I,y=d.createRadialGradient(H(0),B(0),z*.6,H(0),B(0),z*1.08);_?(y.addColorStop(0,"rgba(170,166,160,1)"),y.addColorStop(.85,"rgba(184,186,190,0.95)"),y.addColorStop(1,"rgba(184,186,190,0)")):(y.addColorStop(0,"rgba(176,150,108,1)"),y.addColorStop(.85,"rgba(160,136,96,0.95)"),y.addColorStop(1,"rgba(160,136,96,0)")),d.fillStyle=y,d.beginPath(),d.arc(H(0),B(0),z*1.08,0,Ze),d.fill();let R=Math.max(2,.55*I);for(let U=3.2;U<C.Rp+.3;U+=.62){let Y=Math.floor(Ze*U/.66),ie=O()*Ze;for(let Q=0;Q<Y;Q++){if(O()<.12)continue;let Z=ie+Q/Y*Ze,W=H(Math.cos(Z)*U),V=B(Math.sin(Z)*U),j=150+Math.floor(O()*40);d.fillStyle=_?`rgba(${j+40},${j+44},${j+52},${.5+O()*.3})`:`rgba(${j+12},${j},${j-22},${.55+O()*.3})`,d.save(),d.translate(W,V),d.rotate(Z+Math.PI/2),d.beginPath();let ve=R*(.85+O()*.3),De=R*(.7+O()*.25);d.roundRect?d.roundRect(-ve/2,-De/2,ve,De,De*.3):d.rect(-ve/2,-De/2,ve,De),d.fill(),d.restore()}}if(y=d.createRadialGradient(H(0),B(0),0,H(0),B(0),3*I),y.addColorStop(0,"rgba(60,46,40,0.95)"),y.addColorStop(.5,"rgba(96,78,62,0.7)"),y.addColorStop(1,"rgba(120,100,76,0)"),d.fillStyle=y,d.beginPath(),d.arc(H(0),B(0),3*I,0,Ze),d.fill(),C.grave){let U=H(C.grave.x),Y=B(C.grave.z),ie=6*I;y=d.createRadialGradient(U,Y,0,U,Y,ie),y.addColorStop(0,"rgba(70,84,58,0.85)"),y.addColorStop(1,"rgba(70,84,58,0)"),d.fillStyle=y,d.fillRect(U-ie,Y-ie,ie*2,ie*2)}p.needsUpdate=!0}return{mesh:m,heightAt:P,paint:T,dispose(){u.dispose(),v.dispose(),p.dispose(),s.remove(m)}}}var xh=[{size:5.4,hx:2.67,hz:2.56,height:5,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:5.4,hx:2.7,hz:2.6,height:5.4,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0},{size:6.7,hx:3.36,hz:3.36,height:5.7,front:2.875,door:[1.25,2.875],approach:[1.25,3.875],peek:[-1.25,-3.675],backWin:[-1.25,1.35,-2.875],frontWin:[-1.25,1.35,2.875],openSign:-1,alt:!1},{size:5.4,hx:2.7,hz:2.55,height:5.6,front:2.5,door:[1.25,2.5],approach:[1.25,3.5],peek:[1.25,-3.3],backWin:[1.25,1.35,-2.5],frontWin:[-1.25,1.35,2.5],openSign:1,alt:!0}],Ng=[0,1,3,2,1,0,2,3];function xS(s){let e=Ng[s%Ng.length],t=xh[e].alt?(Math.floor(s/2)+s)%2:0;return{type:e,variant:t}}function rn(s,e,t){let n=Math.cos(s.rotY),i=Math.sin(s.rotY);return{x:s.x+e*n+t*i,z:s.z-e*i+t*n}}function Ug(s,e){let t=s.slice().sort((g,M)=>g.seat-M.seat),n=t.length,i=t.findIndex(g=>g.id===e);if(i>=0){let g=Math.floor(n/2);t=t.map((M,P)=>t[(i-g+P+n*2)%n])}let r=.78,o=Math.max(14.5,Math.max(n,1)*7.4/(Ze-r)),a=ut(o*.5,7.2,13.5),c=o-5.4,l=(Ze-r)/Math.max(n,1),h=t.findIndex(g=>g.id===e),u=g=>r/2+l*(g+.5),f=h>=0?-u(h):Math.PI,d=cn(f),p=t.map((g,M)=>{let P=cn(u(M)+f+Math.PI*0),b=xS(g.seat),T=xh[b.type],C={id:g.id,seat:g.seat,angle:P,x:Math.sin(P)*o,z:Math.cos(P)*o,rotY:P+Math.PI,type:b.type,variant:b.variant,size:T.size},x=rn(C,T.door[0],T.door[1]),_=rn(C,T.approach[0],T.approach[1]);return C.door={dx:x.x,dz:x.z,ax:_.x,az:_.z},C}),v=o+6.5,m=d+7/v;return{n,R:o,Rp:a,Rr:c,step:l,gap:r,gateAngle:d,houses:p,grave:{x:Math.sin(m)*v,z:Math.cos(m)*v,angle:m,r:v}}}function vh(s,e,t){let n=(e-.5)/.5,i=(t-.5)/.5,r=Math.hypot(n,i)*s.Rp,o=Math.atan2(n,i);return r=Math.max(r,2.3),{x:Math.sin(o)*r,z:Math.cos(o)*r}}function xd(s,e,t){return{x:.5+e/s.Rp*.5,y:.5+t/s.Rp*.5}}var Fg=20,Og=new ot,vS=new ot,_S=new Kt,yS=new Kt,MS=new X,zg=new X,Md=new X(0,1,0),kg=new Ne(.16,.11,.08),bS=new Ne("#ffc46b").multiplyScalar(1.25),SS=new Ne(.05,.045,.06),Bg=new Ne("#c9b48a");var yh={value:1},Mh=new Map;function wS(s){if(Mh.has(s))return Mh.get(s);let e=s.clone();return e.onBeforeCompile=t=>{t.uniforms.uGrow=yh,t.vertexShader=`uniform float uGrow;
attribute vec3 aOrigin;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
{ float g = clamp(uGrow * 1.6 - fract(aOrigin.x * 0.137 + aOrigin.z * 0.091) * 0.6, 0.0, 1.0);
  g = g < 1.0 ? 1.0 - pow(1.0 - g, 3.0) * cos(g * 7.0) : 1.0;
  transformed = aOrigin + (transformed - aOrigin) * g; }`)},e.customProgramCacheKey=()=>"grow|"+s.uuid,Mh.set(s,e),e}function ES(){for(let s of Mh.values())s.dispose()}var Hg=new xt,Ts=new X;function vd(s){let e=new Bt,t=new Map;for(let{tpl:n,mats:i,cast:r}of s){n.updateWorldMatrix(!0,!0);let o=new ot().copy(n.matrixWorld).invert();n.traverse(a=>{if(!a.isMesh)return;let c=new ot().multiplyMatrices(o,a.matrixWorld),l=Array.isArray(a.material)?a.material[0]:a.material,h=l.uuid+(r?"|c":"");t.has(h)||t.set(h,{mat:l,cast:r,parts:[]});let u=t.get(h);for(let f of i)u.parts.push({geo:a.geometry,m:new ot().multiplyMatrices(f,c),org:new X().setFromMatrixPosition(f)})})}for(let n of t.values()){let i=0,r=0;for(let v of n.parts)i+=v.geo.attributes.position.count,r+=v.geo.index?v.geo.index.count:v.geo.attributes.position.count;let o=new Float32Array(i*3),a=new Float32Array(i*3),c=new Float32Array(i*2),l=new Float32Array(i*3),h=i>65535?new Uint32Array(r):new Uint16Array(r),u=0,f=0;for(let v of n.parts){let m=v.geo,g=m.attributes.position,M=m.attributes.normal,P=m.attributes.uv;Hg.getNormalMatrix(v.m);for(let b=0;b<g.count;b++)Ts.fromBufferAttribute(g,b).applyMatrix4(v.m),o[(u+b)*3]=Ts.x,o[(u+b)*3+1]=Ts.y,o[(u+b)*3+2]=Ts.z,M&&(Ts.fromBufferAttribute(M,b).applyMatrix3(Hg).normalize(),a[(u+b)*3]=Ts.x,a[(u+b)*3+1]=Ts.y,a[(u+b)*3+2]=Ts.z),P&&(c[(u+b)*2]=P.getX(b),c[(u+b)*2+1]=P.getY(b)),l[(u+b)*3]=v.org.x,l[(u+b)*3+1]=v.org.y,l[(u+b)*3+2]=v.org.z;if(m.index){let b=m.index.array;for(let T=0;T<b.length;T++)h[f+T]=b[T]+u;f+=b.length}else{for(let b=0;b<g.count;b++)h[f+b]=u+b;f+=g.count}u+=g.count}let d=new Pt;d.setAttribute("position",new bt(o,3)),d.setAttribute("normal",new bt(a,3)),d.setAttribute("uv",new bt(c,2)),d.setAttribute("aOrigin",new bt(l,3)),d.setIndex(new bt(h,1)),d.computeBoundingSphere();let p=new Mt(d,wS(n.mat));p.castShadow=n.cast,p.receiveShadow=!0,p.matrixAutoUpdate=!1,p.userData.merged=!0,e.add(p)}return e}function _d(s,e,t,n,i=1){return new ot().compose(new X(s,e,t),new Kt().setFromAxisAngle(Md,n),new X(i,i,i))}var bd=class{constructor(e){this.root=e,this.map=new Map}batchFor(e,t){let n=this.map.get(e.uuid);if(!n){let i=e.clone();i.name=e.name,i.userData={...e.userData,houseBatch:!0};let r=new lo(64,16384,32768,i);if(r.sortObjects=!1,r.perObjectFrustumCulled=!0,r.frustumCulled=!1,r.name="houses-"+e.name,this.root.add(r),n={mesh:r,geo:new Map,maxI:64,maxV:16384,maxIdx:32768,usedV:0,usedIdx:0,cast:!0,out:null},!t){let o=new lo(64,16384,32768,ah(.05));o.sortObjects=!1,o.perObjectFrustumCulled=!0,o.frustumCulled=!1,o.visible=!!this.outlines,o.castShadow=!1,o.receiveShadow=!1,o.name=r.name+"-outline",this.root.add(o),n.out=o}this.map.set(e.uuid,n)}return n}geometryId(e,t){if(e.geo.has(t))return e.geo.get(t);let n=t.attributes.position.count,i=t.index?t.index.count:0;(e.usedV+n>e.maxV||e.usedIdx+i>e.maxIdx)&&(e.maxV=Math.max(e.maxV*2,e.usedV+n),e.maxIdx=Math.max(e.maxIdx*2,e.usedIdx+i),e.mesh.setGeometrySize(e.maxV,e.maxIdx),e.out&&e.out.setGeometrySize(e.maxV,e.maxIdx));let r=e.mesh.addGeometry(t);return e.out&&(e.outGeo=(e.outGeo||new Map).set(r,e.out.addGeometry(t))),e.usedV+=n,e.usedIdx+=i,e.geo.set(t,r),r}addInstance(e,t){e.mesh.instanceCount>=e.maxI&&(e.maxI*=2,e.mesh.setInstanceCount(e.maxI),e.out&&e.out.setInstanceCount(e.maxI));let n=e.mesh.addInstance(t);return e.out&&(e.outIds=e.outIds||new Map,e.outIds.set(n,e.out.addInstance(e.outGeo.get(t)))),n}setOutlines(e){this.outlines=e;for(let t of this.map.values())t.out&&(t.out.visible=e)}dispose(){for(let e of this.map.values())e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.mesh.dispose(),e.mesh.material.dispose(),e.out&&(e.out.parent&&e.out.parent.remove(e.out),e.out.dispose());this.map.clear()}},Sd=class{constructor(e,t,n,i){this.type=e,this.variant=t,this.group=new Bt,this.parts=[],this.list=[];let o=ci(`houses/house-${e}.glb`).scene.children[0];o.updateWorldMatrix(!0,!0);let a=new ot().copy(o.matrixWorld).invert();for(let c of["body","door","banner"]){let l=o.getObjectByName(c);if(!l)continue;let h=new ot().multiplyMatrices(a,l.matrixWorld),u=new ot().copy(l.matrixWorld).invert();l.traverse(f=>{if(!f.isMesh)return;let d=new ot().multiplyMatrices(u,f.matrixWorld),p=f.material,v=null;p.name==="window"?v="window":p.name.startsWith("tint")?(v="owner",p=To(p.name,"#ffffff")):t===1&&p.name==="fantasy-town"&&(p=ud());let m={kind:c,nodeM:h,local:d,colorMode:v,nodePos:new X().setFromMatrixPosition(h),nodeQ:new Kt().setFromRotationMatrix(h),ids:[]};try{let g=i.batchFor(p,v==="window");m.batch=g,m.batches=i,m.gid=i.geometryId(g,f.geometry),v==="window"?(g.mesh.castShadow=!1,g.mesh.receiveShadow=!1):(g.mesh.castShadow=!0,g.mesh.receiveShadow=!0)}catch{m.batch=null;let M=new ir(f.geometry,p,Fg);M.count=0,M.castShadow=v!=="window",M.receiveShadow=v!=="window",M.frustumCulled=!1,v&&(M.instanceColor=new Un(new Float32Array(Fg*3).fill(1),3)),this.group.add(M),m.im=M}this.parts.push(m)})}n.add(this.group)}ensure(e,t){if(!e.batch){e.im.count=t;return}let n=e.batch.mesh;for(;e.ids.length<t;)e.ids.push(e.batches.addInstance(e.batch,e.gid));for(let i=0;i<e.ids.length;i++)n.setVisibleAt(e.ids[i],i<t),e.batch.out&&e.batch.out.setVisibleAt(e.batch.outIds.get(e.ids[i]),i<t)}setM(e,t,n){e.batch?(e.batch.mesh.setMatrixAt(e.ids[t],n),e.batch.out&&e.batch.out.setMatrixAt(e.batch.outIds.get(e.ids[t]),n)):e.im.setMatrixAt(t,n)}setC(e,t,n){e.batch?e.batch.mesh.setColorAt(e.ids[t],n):e.im.setColorAt(t,n)}write(){let e=this.list.length;for(let t of this.parts)this.ensure(t,e);for(let t=0;t<e;t++){let n=this.list[t],i=vS.compose(MS.set(n.cx,0,n.cz),_S.setFromAxisAngle(Md,n.crot),zg.set(n.scale,n.scale*n.scaleY,n.scale));for(let r of this.parts){let o;if(r.kind==="door"){let a=yS.setFromAxisAngle(Md,n.doorAngle).premultiply(r.nodeQ);o=Og.compose(r.nodePos,a,zg.set(1,1,1)).multiply(r.local),o.premultiply(i)}else o=Og.multiplyMatrices(i,r.nodeM).multiply(r.local);this.setM(r,t,o),r.colorMode==="owner"?this.setC(r,t,n.ownerColor):r.colorMode==="window"&&this.setC(r,t,n.winColor)}}for(let t of this.parts)t.batch||(t.im.instanceMatrix.needsUpdate=!0,t.im.instanceColor&&(t.im.instanceColor.needsUpdate=!0))}writeColors(){for(let e of this.parts)if(e.colorMode==="window"){for(let t=0;t<this.list.length;t++)this.setC(e,t,this.list[t].winColor);e.batch||(e.im.instanceColor.needsUpdate=!0)}}dispose(){for(let e of this.parts)e.im&&e.im.dispose();this.group.parent&&this.group.parent.remove(this.group)}},yd=new Map,TS=new un,_h=new X;function AS(s,e){let t=s+":"+e;if(yd.has(t))return yd.get(t);let n=yn(s,e),i=null;return n&&(n.updateWorldMatrix(!0,!0),TS.setFromObject(n).getSize(_h),i={r:Math.max(_h.x,_h.z)/2,h:_h.y}),yd.set(t,i),i}var RS=/grass|patch|rock-flat|campfire/;function Gg(s,e,t,n){let i=new Bt;i.name="village",s.add(i);let r=new Map,o=new bd(i),a=!1,c=new Map,l=[],h=[],u=null;function f(ye,Me,ce,q,Pe,re){if(RS.test(ce)||!d||Math.hypot(q,Pe)>d.R+4)return;let _e=AS(Me,ce);_e&&(ye.push({x:q,z:Pe,r:_e.r*re,h:_e.h*re,name:ce}),u=null)}let d=null,p=null,v=null,m=null,g=!1,M=new Map,P=[],b=!0,T=!1,C=null,x=1,_=!1,N=new Ne("#ffc46b"),I=new Ne("#ff9a3c"),H=new Ne("#ffb85a");function B(ye,Me){let ce=ye+"-"+Me;return r.has(ce)||r.set(ce,new Sd(ye,Me,i,o)),r.get(ce)}function O(){for(let Me of r.values())Me.list.length=0;let ye=[...c.values()].sort((Me,ce)=>Me.seat-ce.seat);for(let Me of ye)B(Me.type,Me.variant).list.push(Me);b=!0}function L(ye,Me){let ce=d;d=ye;let q=new Set;for(let Pe of ye.houses){q.add(Pe.id);let re=c.get(Pe.id);if(!re||re.type!==Pe.type||re.variant!==Pe.variant){let _e=re;re={id:Pe.id,seat:Pe.seat,type:Pe.type,variant:Pe.variant,cx:Pe.x,cz:Pe.z,crot:Pe.rotY,sx:Pe.x,sz:Pe.z,srot:Pe.rotY,scale:Me?.01:1,scaleY:1,removing:!1,doorAngle:0,doorOpen:0,doorTarget:0,doorHold:0,lit:0,litTarget:0,dark:!1,dead:!1,ownerColor:_e&&_e.ownerColor||Bg.clone(),winColor:kg.clone(),name:_e?_e.name:"",colorIdx:_e?_e.colorIdx:-1},c.set(Pe.id,re)}re.seat=Pe.seat,re.sx=re.cx,re.sz=re.cz,re.srot=re.crot,re.tx=Pe.x,re.tz=Pe.z,re.trot=Pe.rotY,re.angle=Pe.angle,re.info=xh[Pe.type],re.removing=!1,Me||(re.cx=Pe.x,re.cz=Pe.z,re.crot=Pe.rotY,re.scale=1)}for(let[Pe,re]of c)q.has(Pe)||(Me?(re.removing=!0,re.sx=re.cx,re.sz=re.cz,re.srot=re.crot,re.tx=re.cx,re.tz=re.cz,re.trot=re.crot):c.delete(Pe));x=Me?0:1,O(),!Me||!ce?S():(C=!0,_=!0)}function J(ye){let Me={x:ye.cx,z:ye.cz,rotY:ye.crot},ce=ye.info;return{door:rn(Me,ce.door[0],ce.door[1]-.25),inside:rn(Me,ce.door[0],ce.door[1]-1.2),approach:rn(Me,ce.approach[0],ce.approach[1]+.2),peek:rn(Me,ce.peek[0],ce.peek[1]),backWin:rn(Me,ce.backWin[0],ce.backWin[2]),frontWin:rn(Me,ce.frontWin[0],ce.frontWin[2]+.12),lantern:rn(Me,ce.door[0]+.95,ce.front+.45),tomb:rn(Me,ce.door[0]-2.6,ce.front+1.6),plaque:rn(Me,0,ce.front+.3),rotY:ye.crot,height:ce.height}}function S(){p&&(i.remove(p),kt(p)),p=new Bt,p.name="dressing",i.add(p),C=!1;let ye=kn(2024+d.n),Me=new Map;l=[],u=null;let ce=(k,se,ne,Te,Re=1,we="village",He=null)=>{f(l,we,k,se,ne,Re);let nt=we+":"+k;Me.has(nt)||Me.set(nt,[]);let Le=He==null?n.heightAt(se,ne):He;Me.get(nt).push(_d(se,Le,ne,Te,Re))};P=[],ce("campfire-pit",0,0,.3,1,"village",0);let q=[],Pe=[.55,2.35,4.15];for(let k=0;k<3;k++){let se=Pe[k],ne=3.35;ce(k===1?"log-small":"log",Math.sin(se)*ne,Math.cos(se)*ne,se+Math.PI/2,1,"village",0),q.push({x:Math.sin(se)*ne,z:Math.cos(se)*ne,a:se,small:k===1})}ce("campfire-stand",0,0,1.2,.85,"village",0);let re=d.houses,_e=k=>{let se=null,ne=1/0;for(let Te=0;Te<re.length;Te++){let Re=re[Te].angle,we=re[(Te+1)%re.length].angle-Re;for(;we<0;)we+=Ze;if(re.length>1&&we>Math.PI)continue;let He=Re+we/2,nt=Math.abs(((He-k+Math.PI)%Ze+Ze)%Ze-Math.PI);nt<ne&&(ne=nt,se=He)}return se==null?k:se},ae=new Set,Ue=k=>{let se=[];for(let ne=0;ne<k;ne++)se.push(d.gateAngle+Math.PI+((ne+.5)/k-.5)*(Ze-1.4));return se};for(let k of Ue(Math.min(6,Math.max(1,re.length-1)))){let se=_e(k),ne=se.toFixed(3);if(ae.has(ne))continue;ae.add(ne);let Te=d.R-3.4,Re=Math.sin(se)*Te,we=Math.cos(se)*Te;ce("lamp-post",Re,we,se+Math.PI,1),P.push({x:Re,y:3.55,z:we})}let ee=["barrel","crate","hay-bale","crate-bottles","bucket","wheel","barrel","crate"],Fe=new Set;Ue(8).forEach((k,se)=>{let ne=_e(k+.11),Te=ne.toFixed(3);if(Fe.has(Te))return;Fe.add(Te);let Re=d.R+.4;ce(ee[se],Math.sin(ne)*Re,Math.cos(ne)*Re,ye()*Ze,1)});for(let k of c.values()){if(k.removing)continue;let se={x:k.tx,z:k.tz,rotY:k.trot},ne=rn(se,k.info.door[0]+.95,k.info.front+.45);ce("lantern",ne.x,ne.z,k.trot,.8,"village",0)}let F=k=>{for(let ne of re)if(Math.abs(((k-ne.angle+Math.PI)%Ze+Ze)%Ze-Math.PI)<.2)return!1;return Math.abs(((k-d.gateAngle+Math.PI)%Ze+Ze)%Ze-Math.PI)>.3},A=[["stall",0],["cart",1],["bench",0],["stall-green",0],["hay-bale",0],["bench-stone",0],["cart-hay",1]],te=0;for(let k=0;k<40&&te<4;k++){let se=ye()*Ze;if(!F(se))continue;let ne=d.Rp+2.2+ye()*Math.max(.5,d.Rr-d.Rp-3.5),[Te]=A[te];ce(Te,Math.sin(se)*ne,Math.cos(se)*ne,se+Math.PI+(ye()-.5)*.5,1),te++}let be=d.gateAngle,xe=(k,se)=>({x:Math.sin(be+se/k)*k,z:Math.cos(be+se/k)*k}),Ae=xe(d.R+1,-2.4);ce("signpost",Ae.x,Ae.z,be+.6,1),Ae=xe(d.R-1,2.6),ce("banner-pole",Ae.x,Ae.z,be+Math.PI,1.2),Ae=xe(d.R+4,-2.6),ce("lantern-post-cabin",Ae.x,Ae.z,be+Math.PI,1),P.push({x:Ae.x,y:2.9,z:Ae.z,small:!0});let Ie=["tree-pine","tree-pine-tall","tree-round","tree-forest","tree-forest-tall","tree-autumn","tree-crooked","tree-pine"],fe=e.trees,ge=d.R+8.5;for(let k=0;k<fe;k++){let se=ye()*Ze,ne=Math.pow(ye(),1.35),Te=ge+ne*46,Re=Math.sin(se)*Te,we=Math.cos(se)*Te;if(Math.abs(((se-be+Math.PI)%Ze+Ze)%Ze-Math.PI)*Te<4.5&&Te<ge+30||d.grave&&Math.hypot(Re-d.grave.x,we-d.grave.z)<8.5)continue;let nt=Ie[Math.floor(ye()*Ie.length)];ce(nt,Re,we,ye()*Ze,.85+ye()*.55+ne*.3)}for(let k=0;k<e.scatter;k++){let se=ye()*Ze,ne=d.R+4.6+ye()*6,Te=Math.sin(se)*ne,Re=Math.cos(se)*ne;if(Math.abs(((se-be+Math.PI)%Ze+Ze)%Ze-Math.PI)*ne<3.5||d.grave&&Math.hypot(Te-d.grave.x,Re-d.grave.z)<7)continue;let He=ye();ce(He<.4?"grass-large":He<.7?"grass":"bush",Te,Re,ye()*Ze,.8+ye()*.6)}for(let k=0;k<14;k++){let se=ye()*Ze,ne=d.Rp+.8+ye()*1.5;ce(ye()<.7?"grass":"grass-large",Math.sin(se)*ne,Math.cos(se)*ne,ye()*Ze,.8+ye()*.4)}for(let k=0;k<3;k++){let se=ye()*Ze,ne=d.R+24+ye()*40;ce(ye()<.5?"rock-large":"rock-wide",Math.sin(se)*ne,Math.cos(se)*ne,ye()*Ze,.8+ye()*1)}let pe=[];for(let[k,se]of Me){let[ne,Te]=k.split(":"),Re=yn(ne,Te);Re&&pe.push({tpl:Re,mats:se,cast:!/grass|patch|rock-flat|bush/.test(Te)})}p.add(vd(pe)),l.push({x:0,z:0,r:1.5,h:3.3,name:"fire"}),_&&(yh.value=0,U=0,_=!1),ie(),E=q,n.paint(d,y&&y.snow?{snow:!0}:null),at(),z++,b=!0}let E=[],z=0,y=null,R=null,U=1,Y=["#ff5a5f","#ffd34d","#5ec8ff","#7ee08a","#c08bff"].map(ye=>new Ne(ye));function ie(){if(m&&(i.remove(m),kt(m),m=null),!zn("props/graveyard.glb")||!d||!d.grave)return;g=!0,m=new Bt,m.name="graveyard";let ye=d.grave,Me=ye.angle+Math.PI,ce=(Ue,ee)=>rn({x:ye.x,z:ye.z,rotY:Me},Ue,ee),q=new Map,Pe=(Ue,ee,Fe,F=0,A=1)=>{let te=ce(ee,Fe);q.has(Ue)||q.set(Ue,[]),q.get(Ue).push(_d(te.x,n.heightAt(te.x,te.z),te.z,Me+F,A))},re=kn(66),_e=["gravestone-cross","gravestone-round","gravestone-broken","cross-wood","gravestone-roof","gravestone-bevel"];for(let Ue=0;Ue<6;Ue++)Pe(_e[Ue],-3.2+Ue*1.3+(re()-.5)*.3,-2.6+(re()-.5)*.4,(re()-.5)*.3,.85);Pe("crypt",3.6,-3.4,-.3,1),Pe("trunk-dead",-4.6,.6,1.1,1),Pe("pine-crooked",-5.2,-3.6,.4,1),Pe("candles",1.8,-2.4,0,1),Pe("pumpkin-carved",-2.2,1.9,.5,.8),Pe("urn",2.6,.4,0,.8),Pe("iron-fence-gate",0,3.2,0,1);for(let Ue of[-2.5,-5,2.5,5])Pe("iron-fence",Ue,3.2,0,1);let ae=[];for(let[Ue,ee]of q){let Fe=yn("graveyard",Ue);Fe&&ae.push({tpl:Fe,mats:ee,cast:!0})}m.add(vd(ae)),i.add(m);for(let[Ue,ee]of M)W(Ue,ee)}let Q=["gravestone-round","gravestone-cross","gravestone-bevel","gravestone-roof","gravestone-decorative"];function Z(ye,Me,ce,q){let Pe=M.has(ye);if(Me&&!Pe){M.set(ye,{obj:null,mound:null,colorIdx:ce,born:performance.now()}),W(ye,M.get(ye));let re=M.get(ye);q&&re.obj&&(re.obj.userData.drop=0,re.obj.position.y=3.2)}else if(!Me&&Pe){let re=M.get(ye);re.obj&&re.obj.parent.remove(re.obj),re.mound&&re.mound.parent.remove(re.mound),M.delete(ye)}}function W(ye,Me){var ae,Ue,ee;Me.obj&&(Me.obj.parent&&Me.obj.parent.remove(Me.obj),Me.obj=null),Me.mound&&(Me.mound.parent&&Me.mound.parent.remove(Me.mound),Me.mound=null);let ce=c.get(ye);if(!ce||!zn("props/graveyard.glb"))return;let q=yn("graveyard",Q[ce.seat%Q.length]);if(!q)return;let Pe={x:(ae=ce.tx)!=null?ae:ce.cx,z:(Ue=ce.tz)!=null?Ue:ce.cz,rotY:(ee=ce.trot)!=null?ee:ce.crot},re=rn(Pe,ce.info.door[0]-2.75,ce.info.front+1.7),_e=q.clone();if(_e.position.set(re.x,0,re.z),_e.rotation.set(0,Pe.rotY+.15,0),_e.scale.setScalar(.62),_e.traverse(Fe=>{Fe.isMesh&&(Fe.castShadow=!0,Fe.receiveShadow=!0)}),_e.userData.pop=0,i.add(_e),Me.obj=_e,d&&d.grave){let Fe=[...M.keys()].indexOf(ye),F=yn("graveyard","grave-dirt");if(F){let A=d.grave,te=A.angle+Math.PI,be=-3.6+Fe%5*1.9,xe=.3+Math.floor(Fe/5)*2,Ae=rn({x:A.x,z:A.z,rotY:te},be,xe),Ie=F.clone();Ie.position.set(Ae.x,n.heightAt(Ae.x,Ae.z),Ae.z),Ie.rotation.y=te,Ie.scale.setScalar(.7),i.add(Ie),Me.mound=Ie}}}function V(ye,Me,ce){let q=c.get(ye);q&&(q.colorIdx!==Me&&(q.colorIdx=Me,Me>=0?q.ownerColor.set(Mn[Me]):q.ownerColor.copy(Bg),b=!0),q.name=ce||"")}let j=new Ne;function ve(ye,Me,ce){let q=!1;if(x<1){x=Math.min(1,x+ye/1.3);let re=Es(x);for(let[_e,ae]of c){ae.cx=md(ae.sx,ae.tx,re),ae.cz=md(ae.sz,ae.tz,re);let Ue=ae.trot-ae.srot;for(;Ue>Math.PI;)Ue-=Ze;for(;Ue<-Math.PI;)Ue+=Ze;ae.crot=ae.srot+Ue*re,ae.removing?ae.scale=Math.max(.01,1-re):ae.scale=Math.min(1,ae.scale+ye*1.2)}if(x>=1){for(let[_e,ae]of c)ae.removing&&c.delete(_e);O(),C&&S()}q=!0}else for(let re of c.values())re.scale<1&&(re.scale=Math.min(1,re.scale+ye*1.5),q=!0);U<1&&(U=Math.min(1,U+ye/.9),yh.value=U);for(let re of M.values()){let _e=re.obj;if(_e&&_e.userData.drop!=null){let ae=_e.userData.drop+=ye/.55;if(ae>=1)_e.position.y=0,delete _e.userData.drop,q=!0;else{let Ue=ae<.7?3.2*(1-ae/.7*(ae/.7)):Math.sin((ae-.7)/.3*Math.PI)*.18;_e.position.y=Math.max(0,Ue)}}}let Pe=ce.lamps;for(let re of c.values()){re.doorHold>0&&(re.doorHold-=ye,re.doorHold<=0&&(re.doorTarget=0));let _e=re.doorOpen;re.doorOpen+=(re.doorTarget-re.doorOpen)*ln(re.doorTarget>re.doorOpen?9:5,ye),Math.abs(re.doorOpen-_e)>5e-4&&(q=!0),re.doorAngle=re.doorOpen*1.35*re.info.openSign;let ae=re.dark||re.dead||re.flickOut?0:Math.max(re.litTarget,0);re.lit+=(ae-re.lit)*ln(1.6,ye);let Ue=ut(re.lit*(.25+.75*Pe),0,1);if(re.flickT>0){re.flickT-=ye;let Fe=re.flickDur-re.flickT,F=Math.floor(Fe/.075),A=Math.abs(Math.sin(F*12.9898+re.seat*78.233)*43758.5453)%1,te=1-ut(Fe/re.flickDur,0,1);Ue=A>.12+.75*(1-te)?.45+.55*te:.03,re.flickT<=0&&(re.lit=0,Ue=0,re.flickOut=!0),T=!0}j.copy(kg).lerp(SS,ut(ce.night*1.2,0,1)).lerp(bS,Ue);let ee=re.winColor;Math.abs(j.r-ee.r)+Math.abs(j.g-ee.g)+Math.abs(j.b-ee.b)>.006&&(ee.copy(j),T=!0)}if(q&&(b=!0),b){for(let re of r.values())re.write();return b=!1,T=!1,!0}if(T){for(let re of r.values())re.writeColors();T=!1}return!1}function De(ye,Me,ce,q){let Pe=ye.lamps;if(Pe<.02)return;let re=y&&y.dress==="fair";for(let _e=0;_e<P.length;_e++){let ae=P[_e],Ue=.92+.08*Math.sin(Me*9+_e*1.7),ee=re?Y[_e%Y.length]:N;ce.add(ae.x,ae.y,ae.z,ae.small?1.4:2,ee,.85*Pe*Ue),q.add(ae.x,.03,ae.z,ae.small?6:8.5,re?ee:I,.3*Pe)}if(re&&Ee)for(let _e=0;_e<Ee.length;_e++){let ae=Ee[_e];ce.add(ae.x,ae.y,ae.z,.7,Y[_e%Y.length],.8*Pe*(.8+.2*Math.sin(Me*3+_e)))}for(let _e of c.values()){if(_e.scale<.9)continue;if(!_e.gp||_e.gp.x!==_e.cx||_e.gp.z!==_e.cz||_e.gp.r!==_e.crot){let Fe={x:_e.cx,z:_e.cz,rotY:_e.crot};_e.gp={x:_e.cx,z:_e.cz,r:_e.crot,ln:rn(Fe,_e.info.door[0]+.95,_e.info.front+.45),w:rn(Fe,_e.info.frontWin[0],_e.info.frontWin[2]+.25),wp:rn(Fe,_e.info.frontWin[0],_e.info.frontWin[2]+1.6)}}let ae=_e.gp.ln,Ue=_e.dead?.25:1;ce.add(ae.x,.62,ae.z,.9,N,.9*Pe*Ue),q.add(ae.x,.03,ae.z,3.6,I,.26*Pe*Ue);let ee=_e.lit*Pe*(.86+.08*Math.sin(Me*6.3+_e.seat*2.1)+.06*Math.sin(Me*13.7+_e.seat));if(ee>.02){let Fe=_e.gp.w;ce.add(Fe.x,1.35,Fe.z,1.7,H,.5*ee);let F=_e.gp.wp;q.add(F.x,.03,F.z,4.2,H,.22*ee)}}}let Ee=null,ke=!1;function Xe(ye){let Me=y;y=ye&&ye.id?ye:null,N.set(y&&y.lamp?y.lamp:"#ffc46b"),I.set(y&&y.lamp?y.lamp:"#ff9a3c");let ce=!!(Me&&Me.snow)!=!!(y&&y.snow);d&&ce&&n.paint(d,y&&y.snow?{snow:!0}:null),Ke(!!(y&&y.snow)),at()}function Ke(ye){if(ye===ke)return;ke=ye;let Me=ce=>{!ce||!ce.isMeshLambertMaterial||!ce.map||ce.name==="villager"||(ye?(ce.userData.preFrost||(ce.userData.preFrost=ce.emissive.clone()),ce.emissive.set("#a9bad0").multiplyScalar(.22)):ce.userData.preFrost&&ce.emissive.copy(ce.userData.preFrost))};s.traverse(ce=>{ce.material&&(Array.isArray(ce.material)?ce.material:[ce.material]).forEach(Me)})}function at(){if(R&&(i.remove(R),R.traverse(Pe=>{(Pe.userData.merged||Pe.userData.themeGeo)&&Pe.geometry.dispose(),Pe.userData.themeMat&&Pe.material.dispose()}),R=null),Ee=null,h=[],u=null,!y||!y.dress||!d)return;R=new Bt,R.name="theme";let ye=kn(99+d.n),Me=new Map,ce=(Pe,re,_e,ae,Ue=1)=>{f(h,"village",Pe,re,_e,Ue),Me.has(Pe)||Me.set(Pe,[]),Me.get(Pe).push(_d(re,n.heightAt(re,_e),_e,ae,Ue))};if(y.dress==="harvest"){let Pe=[...c.values()].filter(Ue=>!Ue.removing),re=Math.max(1,Math.ceil(Pe.length/8));for(let Ue=0;Ue<Pe.length;Ue+=re){let ee=Pe[Ue],Fe={x:ee.tx,z:ee.tz,rotY:ee.trot},F=rn(Fe,ee.info.door[0]-.9,ee.info.front+.7);if(ce("pumpkin",F.x,F.z,ye()*Ze,.7+ye()*.3),ye()<.5){let A=rn(Fe,-ee.info.hx+.5,ee.info.front+.9);ce("hay-bale",A.x,A.z,ee.trot+.3,.9)}}for(let Ue=0;Ue<6;Ue++){let ee=Ue/6*Ze+.4,Fe=d.Rp+1.2;ce(Ue%2?"pumpkin":"hay-bale",Math.sin(ee)*Fe,Math.cos(ee)*Fe,ee,Ue%2?.9:1)}let _e=d.gateAngle+.5,ae=d.Rp+2.6;ce("cart-hay",Math.sin(_e)*ae,Math.cos(_e)*ae,_e+1.2,1)}else if(y.dress==="fair"){let Pe=P.filter(ae=>!ae.small),re=[],_e=[];Ee=[];for(let ae=0;ae<Pe.length;ae++){let Ue=Pe[ae],ee=Pe[(ae+1)%Pe.length];if(Math.hypot(Ue.x-ee.x,Ue.z-ee.z)>14)continue;let Fe=9;for(let F=0;F<Fe;F++){let A=(F+.15)/Fe,te=(F+.85)/Fe,be=(F+.5)/Fe,xe=k=>3.25-Math.sin(k*Math.PI)*.9,Ae=k=>[Ue.x+(ee.x-Ue.x)*k,xe(k),Ue.z+(ee.z-Ue.z)*k],Ie=Ae(A),fe=Ae(te),ge=Ae(be);re.push(...Ie,...fe,ge[0],ge[1]-.45,ge[2]);let pe=Y[(ae+F)%Y.length];for(let k=0;k<3;k++)_e.push(pe.r,pe.g,pe.b);F%3===1&&Ee.push({x:ge[0],y:ge[1]+.05,z:ge[2]})}}if(re.length){let ae=new Pt;ae.setAttribute("position",new Dt(re,3)),ae.setAttribute("color",new Dt(_e,3)),ae.computeVertexNormals();let Ue=new pn({vertexColors:!0,side:sn}),ee=new Mt(ae,Ue);ee.userData.themeGeo=!0,ee.userData.themeMat=!0,R.add(ee)}for(let ae=0;ae<5;ae++){let Ue=ae/5*Ze+.2,ee=d.Rp+1.6;ce("banner-pole",Math.sin(Ue)*ee,Math.cos(Ue)*ee,Ue+Math.PI,1.1)}}let q=[];for(let[Pe,re]of Me){let _e=yn("village",Pe);_e&&q.push({tpl:_e,mats:re,cast:!0})}q.length&&R.add(vd(q)),i.add(R),ke&&(ke=!1,Ke(!0))}function Qe(ye,Me){let ce=c.get(ye);ce&&(ce.litTarget=Me)}function Lt(ye,Me=1.2){let ce=c.get(ye);ce&&(ce.doorTarget=1,ce.doorHold=Me)}function vt(ye){let Me=null,ce=1/0,q=ye.origin,Pe=ye.direction;for(let re of c.values()){if(re.removing)continue;let _e=Math.cos(-re.crot),ae=Math.sin(-re.crot),Ue=q.x-re.cx,ee=q.z-re.cz,Fe=Ue*_e+ee*ae,F=-Ue*ae+ee*_e,A=Pe.x*_e+Pe.z*ae,te=-Pe.x*ae+Pe.z*_e,be=[-re.info.hx-.3,0,-re.info.hz-.3],xe=[re.info.hx+.3,re.info.height,re.info.hz+1.2],Ae=[Fe,q.y,F],Ie=[A,Pe.y,te],fe=-1/0,ge=1/0;for(let pe=0;pe<3;pe++){if(Math.abs(Ie[pe])<1e-6){if(Ae[pe]<be[pe]||Ae[pe]>xe[pe]){fe=1/0;break}continue}let k=(be[pe]-Ae[pe])/Ie[pe],se=(xe[pe]-Ae[pe])/Ie[pe];if(k>se){let ne=k;k=se,se=ne}fe=Math.max(fe,k),ge=Math.min(ge,se)}fe<=ge&&ge>0&&fe<ce&&(ce=fe,Me=re)}return Me}function wn(){d&&ie()}function kt(ye){ye.traverse(Me=>{Me.isInstancedMesh?Me.dispose():Me.userData.merged&&Me.geometry.dispose()})}return{root:i,houses:c,get layout(){return d},get benchSlots(){return E},get busy(){return x<1},get version(){return z},lampList:()=>P,setOutlines(ye){a=ye,o.setOutlines(ye)},get blockers(){return u||(u=l.concat(h)),u},setLayout:L,setOwner:V,setLit:Qe,setDead:Z,setTheme:Xe,openDoor:Lt,anchors:J,update:ve,emitGlows:De,pickHouse:vt,onExtraLoaded:wn,flicker(ye,Me=1.5){let ce=c.get(ye);ce&&(ce.flickT=Me,ce.flickDur=Me)},house:ye=>c.get(ye),tombOf:ye=>M.get(ye),dispose(){Ke(!1);for(let ye of r.values())ye.dispose();o.dispose(),p&&kt(p),m&&kt(m),R&&R.traverse(ye=>{(ye.userData.merged||ye.userData.themeGeo)&&ye.geometry.dispose(),ye.userData.themeMat&&ye.material.dispose()}),ES(),yh.value=1,s.remove(i)}}}var CS=`
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
}`,IS={glow:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 2.4) + 0.6 * pow(max(1.0 - r * 3.2, 0.0), 2.0);",pool:"float r = length(vUv - 0.5) * 2.0; float a = pow(max(1.0 - r, 0.0), 1.7);",blob:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.15, r) * 0.85;",ring:`float r = length(vUv - 0.5) * 2.0; float pulse = 0.75 + 0.25 * sin(uTime * 4.0 + vPhase);
         float a = smoothstep(0.12, 0.0, abs(r - 0.82)) * pulse + smoothstep(0.82, 0.2, r) * 0.18 * pulse;
         a *= 1.0 - step(1.0, r);`,puff:"float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.35, r);"};function PS(s,e){return new nn({vertexShader:CS,fragmentShader:`uniform float uTime; varying vec2 vUv; varying vec4 vCol; varying float vPhase;
      void main(){ ${IS[s]} if (a * vCol.a < 0.003) discard; gl_FragColor = vec4(vCol.rgb, a * vCol.a);
      #include <colorspace_fragment>
      }`,uniforms:{uTime:{value:0},uGround:{value:s==="glow"||s==="puff"?0:1}},transparent:!0,depthWrite:!1,blending:e,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}var ki=class{constructor(e,t,n=Yn){this.max=t;let i=new vi(1,1),r=new Ma;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv")),this.pos=new Un(new Float32Array(t*4),4),this.col=new Un(new Float32Array(t*4),4),this.spin=new Un(new Float32Array(t),1),this.pos.setUsage(Na),this.col.setUsage(Na),this.spin.setUsage(Na),r.setAttribute("aPos",this.pos),r.setAttribute("aCol",this.col),r.setAttribute("aSpin",this.spin),r.instanceCount=0,this.geo=r,this.mat=PS(e,n),this.mesh=new Mt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e==="blob"||e==="pool"?1:5,this.n=0}begin(){this.n=0}add(e,t,n,i,r,o,a=0){if(this.n>=this.max)return;let c=this.n++,l=this.pos.array,h=this.col.array;l[c*4]=e,l[c*4+1]=t,l[c*4+2]=n,l[c*4+3]=i,h[c*4]=r.r,h[c*4+1]=r.g,h[c*4+2]=r.b,h[c*4+3]=o,this.spin.array[c]=a}end(e){this.geo.instanceCount=this.n,this.mesh.visible=this.n>0,this.n&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.spin.needsUpdate=!0),this.mat.uniforms.uTime.value=e}dispose(){this.geo.dispose(),this.mat.dispose()}},Vg=`
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
}`,Wg=`
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
}`,LS=`
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
}`,DS=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.0, r) * vA;
  gl_FragColor = vec4(1.0, 0.62, 0.22, a);
  #include <colorspace_fragment>
}`;function Xg(s){let e=new Bt;e.name="campfire-fx";let t=[],n=new vi(1,1);n.translate(0,.5,0);let i=[[0,0,0,1.25,1.9],[.32,.1,.18,.8,1.25],[-.3,-.12,.2,.75,1.15],[.05,.2,-.25,.7,1.05]];for(let f=0;f<i.length;f++){let[d,p,,v,m]=i[f],g=new nn({vertexShader:Vg,fragmentShader:Wg,uniforms:{uTime:{value:0},uSeed:{value:f*3.7},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:sn,fog:!1}),M=new Mt(n,g);M.position.set(d,.32,p),M.scale.set(v,m,1),M.renderOrder=6,M.frustumCulled=!1,e.add(M),t.push(M)}let r=s.sparks,o=kn(5),a=new Float32Array(r*3),c=new Float32Array(r*4);for(let f=0;f<r;f++)a[f*3]=(o()-.5)*.7,a[f*3+1]=.6,a[f*3+2]=(o()-.5)*.7,c[f*4]=o(),c[f*4+1]=o(),c[f*4+2]=o(),c[f*4+3]=o()*1.2;let l=new Pt;l.setAttribute("position",new bt(a,3)),l.setAttribute("aSeed",new bt(c,4));let h=new nn({vertexShader:LS,fragmentShader:DS,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uPower:{value:1}}}),u=new gi(l,h);return u.frustumCulled=!1,u.renderOrder=7,e.add(u),{group:e,update(f,d,p){for(let v of t)v.material.uniforms.uTime.value=f,v.material.uniforms.uPower.value=p;h.uniforms.uTime.value=f,h.uniforms.uPx.value=d,h.uniforms.uPower.value=Math.min(1,p*1.2)},dispose(){n.dispose(),l.dispose(),h.dispose();for(let f of t)f.material.dispose()}}}var NS=`
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
}`,US=`
varying float vA;
void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; float a = (pow(max(1.0 - r, 0.0), 3.0) + smoothstep(0.25, 0.0, r)) * vA;
  gl_FragColor = vec4(0.85, 1.0, 0.45, a);
  #include <colorspace_fragment>
}`;function qg(s){let e=kn(99),t=new Float32Array(s*3),n=new Float32Array(s*4);for(let a=0;a<s;a++)n[a*4]=e(),n[a*4+1]=e(),n[a*4+2]=e(),n[a*4+3]=e();let i=new Pt;i.setAttribute("position",new bt(t,3)),i.setAttribute("aSeed",new bt(n,4));let r=new nn({vertexShader:NS,fragmentShader:US,transparent:!0,depthWrite:!1,blending:Yn,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uAlpha:{value:0}}}),o=new gi(i,r);return o.frustumCulled=!1,o.renderOrder=8,{points:o,place(a,c){let l=kn(123);for(let h=0;h<s;h++){let u=l()*Ze,f=a+l()*(c-a);t[h*3]=Math.cos(u)*f,t[h*3+1]=.6+l()*2.2,t[h*3+2]=Math.sin(u)*f}i.getAttribute("position").needsUpdate=!0},update(a,c,l){r.uniforms.uTime.value=a,r.uniforms.uPx.value=c,r.uniforms.uAlpha.value=l,o.visible=l>.01},dispose(){i.dispose(),r.dispose()}}}var Sh=class{constructor(e=96){this.max=e,this.normal=new ki("puff",e,yi),this.add=new ki("glow",e,Yn),this.list=[],this.tmp=new Ne,this.dustOn=!0}emit(e,t,n,i,r,o=14){if(this.list.length>this.max*1.6)return;let a=r?new Ne(r):new Ne(e==="poof"?"#e8e4f2":e==="dust"?"#b59a72":e==="smoke"?"#4a4652":e==="bubble"?"#94d82d":e==="mist"?"#9b7bff":"#ffd27a"),c=["#ff4b5f","#e6b85c","#5ef0a0","#7b83ff","#ff8364","#f06595","#15aabf"];for(let l=0;l<o;l++){let h=Math.random()*Ze,u=.6+Math.random()*1.6,f=.6+Math.random()*1.2,d=.7+Math.random()*.7,p=.25+Math.random()*.3,v=a;e==="poof"&&(p=.35+Math.random()*.35),e==="dust"&&(u=.25+Math.random()*.3,f=.15+Math.random()*.2,d=.5+Math.random()*.3,p=.14+Math.random()*.1),e==="bubble"&&(u=.15,f=.8+Math.random()*.8,d=1.2+Math.random(),p=.12+Math.random()*.12),(e==="smoke"||e==="mist")&&(u=.3+Math.random()*.5,f=.5+Math.random()*.6,d=1.4+Math.random()*.8,p=.45+Math.random()*.4),e==="confetti"&&(u=1.5+Math.random()*2.5,f=3+Math.random()*3,d=1.6+Math.random()*.8,p=.1+Math.random()*.08,v=new Ne(c[l%c.length])),this.list.push({kind:e,x:t+Math.cos(h)*.2,y:n+Math.random()*.4,z:i+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:f,vz:Math.sin(h)*u,t:0,life:d,size:p,c:v})}}update(e,t){this.normal.begin(),this.add.begin();let n=this.list;for(let i=n.length-1;i>=0;i--){let r=n[i];if(r.t+=e,r.t>=r.life){n[i]=n[n.length-1],n.pop();continue}let o=r.t/r.life,a=Math.exp(-3*e);r.vx*=a,r.vz*=a,r.kind==="confetti"?r.vy-=6*e:r.vy*=Math.exp(-1.5*e),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.kind==="magic"||r.kind==="bubble"?this.add.add(r.x,r.y,r.z,r.size*(1-o*.5),r.c,1-o):r.kind==="confetti"?this.normal.add(r.x,Math.max(.05,r.y),r.z,r.size,r.c,1-o*o):r.kind==="dust"?this.normal.add(r.x,r.y,r.z,r.size*(1+o*2),r.c,(1-o)*.45):this.normal.add(r.x,r.y,r.z,r.size*(1+o*1.6),r.c,(1-o)*(1-o)*(r.kind==="smoke"||r.kind==="mist"?.6:.8))}this.normal.end(t),this.add.end(t)}dispose(){this.normal.dispose(),this.add.dispose()}},bh=null;function Yg(s=.35,e=.6,t=1){bh||(bh=new vi(1,1),bh.translate(0,.5,0));let n=new nn({vertexShader:Vg,fragmentShader:Wg,uniforms:{uTime:{value:0},uSeed:{value:t},uPower:{value:1}},transparent:!0,depthWrite:!1,blending:Yn,side:sn,fog:!1}),i=new Mt(bh,n);return i.scale.set(s,e,1),i.renderOrder=6,i.frustumCulled=!1,i.userData.tick=r=>{n.uniforms.uTime.value=r},i.userData.cleanup=()=>n.dispose(),i}var FS=`
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
}`,OS=`
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
}`;function Kg(s){let t=kn(4711),n=new Float32Array(900*3),i=new Float32Array(900*4);for(let p=0;p<900;p++)n[p*3]=(t()-.5)*46,n[p*3+1]=t()*18,n[p*3+2]=(t()-.5)*46,i[p*4]=t(),i[p*4+1]=t(),i[p*4+2]=t(),i[p*4+3]=t();let r=new Pt;r.setAttribute("position",new bt(n,3)),r.setAttribute("aSeed",new bt(i,4));let o=new nn({vertexShader:FS,fragmentShader:OS,transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uPx:{value:1},uKind:{value:0},uAlpha:{value:0},uCenter:{value:new X}}}),a=new gi(r,o);a.frustumCulled=!1,a.renderOrder=9,a.visible=!1,s.add(a);let c=new ki("puff",40,yi);c.mesh.renderOrder=4,s.add(c.mesh);let l=[];for(let p=0;p<40;p++)l.push({a:t()*Ze,r:4+t()*40,y:.6+t()*1.8,s:9+t()*10,sp:.02+t()*.04});let h="none",u=0,f=0,d=new Ne("#c9cfd8");return{set(p){h=p||"none"},get kind(){return h},update(p,v,m,g,M,P,b){if(u+=((h==="snow"||h==="leaves"?1:0)-u)*Math.min(1,p*.8),a.visible=u>.01&&M>0,a.visible){r.setDrawRange(0,Math.min(900,M));let x=o.uniforms;x.uTime.value=v,x.uPx.value=m,x.uKind.value=h==="leaves"?1:0,x.uAlpha.value=u*(h==="snow"?.9:1),x.uCenter.value.copy(g)}if(f+=((h==="fog"?1:0)-f)*Math.min(1,p*.5),c.begin(),f>.01){d.set("#cfd6de"),P&&d.lerp(P,.5),d.multiplyScalar(1-b*.6);let x=Math.min(40,Math.max(8,Math.round(M/20)));for(let _=0;_<x;_++){let N=l[_],I=N.a+v*N.sp;c.add(Math.sin(I)*N.r,N.y,Math.cos(I)*N.r,N.s,d,.16*f)}}c.end(v)},dispose(){r.dispose(),o.dispose(),c.dispose(),s.remove(a),s.remove(c.mesh)}}}var Xa=1.12,zS=1.75,Zg=2.8,kS={walk:Zg,brisk:3.75,sneak:2.4,sprint:5.4,stroll:2.1};var vT=new X,wd=null,bi=class{constructor(e,t,n,i={}){this.world=e,this.id=t,this.root=new Bt,this.root.name="chr-"+t,this.pos=this.root.position,this.yaw=0,this.speed=0,this.visible=!0,this.fade=1,this.isGhost=!!i.ghost,this.look=null,this.model=null,this.mixer=null,this.actions={},this.weights={},this.targets={},this.base="idle",this.once=null,this.path=null,this.mode="walk",this.steps=[],this.stepT=0,this.inside=null,this.claimed=!1,this.idleTimer=4+Math.random()*8,this.faceYaw=null,this.stepPhase=Math.random(),this.headY=1.75*Xa,this.seed=Math.random(),this.props=[],this.setLook(n)}setLook(e){let t=this.isGhost?"ghost|"+e.color:`${e.skin}|${e.color}|${e.hat}`;if(this.lookKey===t)return;this.lookKey=t,this.look={...e},this.model&&(this.root.remove(this.model),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model)),this.actions={},this.weights={},this.targets={},this.once=null,this.headBone=null,this.props=[],this.isGhost?this.buildGhost(e):this.buildVillager(e);let n=this.base;this.base=null,this.setBase(n||"idle",0)}buildVillager(e){let t=ut(e.skin|0,0,11),n=ci(`characters/villager-${String(t).padStart(2,"0")}.glb`),i=lh(n.scene),r=To("cloth",Mn[ut(e.color|0,0,19)]),o=null;i.traverse(l=>{if(l.isMesh){if(l.material.name==="cloth"&&r)l.material=r;else if(l.isSkinnedMesh&&l.userData.clothMerged&&l.material.name==="villager"){let h=cd(Mn[ut(e.color|0,0,19)]);h&&(l.material=h)}l.castShadow=!0,l.receiveShadow=!1,l.isSkinnedMesh?(o?l.skeleton!==o&&l.skeleton.bones.length===o.bones.length&&(l.skeleton.dispose(),l.skeleton=o):o=l.skeleton,l.boundingSphere=new jt(new X(0,.3,-.15),.85),l.frustumCulled=!0):l.frustumCulled=!1}});let a=i.getObjectByName("head"),c=dd[e.hat|0];if(a&&c&&zn("hats/hats.glb")){let l=ci("hats/hats.glb").scene.getObjectByName(c);if(l){let h=l.clone();h.position.set(0,Ag[t]||0,0),h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)}),a.add(h)}}i.scale.multiplyScalar(Xa),this.world.toon&&Ba(i,.012),this.model=i,this.root.add(i),this.mixer=new Ms(i),this.clips=hd(),this.headBone=a||null,this.headBaseQ=a?a.quaternion.clone():null,this.headAnimQ=null,this.armR=i.getObjectByName("arm-right"),this.armL=i.getObjectByName("arm-left"),this.headY=(1.72+(e.hat?.18:0))*Xa}buildGhost(e){let t=ci("characters/ghost.glb"),n=t.scene.clone(!0),i=To("tint-ghost",Mn[ut(e.color|0,0,19)],"|ghost");i&&(i.transparent=!0,i.opacity=.62,i.depthWrite=!1,i.emissive.set(Mn[e.color|0]).multiplyScalar(.25));let r=ld("graveyard");!this.ghostBodyMat&&r&&(this.ghostBodyMat=r.clone(),this.ghostBodyMat.transparent=!0,this.ghostBodyMat.opacity=.62,this.ghostBodyMat.depthWrite=!1),n.traverse(o=>{o.isMesh&&(o.material=o.material.name.startsWith("tint")?i:this.ghostBodyMat,o.castShadow=!1,o.renderOrder=3)}),n.scale.multiplyScalar(Xa*.95),this.model=n,this.root.add(n),this.mixer=new Ms(n),wd||(wd=t.animations),this.clips=wd,this.headY=1.95*Xa}action(e){if(this.actions[e])return this.actions[e];let t=_i.findByName(this.clips,e);if(!t)return null;let n=this.mixer.clipAction(t);return e==="die"&&(n.setLoop(Pa,1),n.clampWhenFinished=!0),n.enabled=!0,n.setEffectiveWeight(0),n.play(),n.time=Math.random()*t.duration*(e==="die"?0:1),this.actions[e]=n,this.weights[e]=0,n}setBase(e,t=.3){if(this.base===e)return;this.base=e,this.fadeRate=t>0?1/t:1e3;for(let i in this.targets)this.targets[i]=0;let n=(i,r)=>{this.action(i)&&(this.targets[i]=r)};switch(e){case"walk":n("walk",1);break;case"sprint":n("sprint",1);break;case"sneak":n("walk",.6),n("crouch",.4);break;case"sit":n("sit",1);break;case"peek":n("crouch",1);break;case"cheer":n("emote-yes",1);break;case"sad":n("emote-no",1);break;case"hold":n("idle",.45),n("holding-right",.55);break;case"holdboth":n("idle",.4),n("holding-both",.6);break;case"warm":n("sit",.55),n("holding-both",.45);break;case"loom":n("crouch",.45),n("holding-both",.55);break;case"lie":{let i=this.action("die");i&&(i.reset(),i.play(),i.time=0,this.targets.die=1);break}default:e!=="idle"&&this.action(e)?n(e,1):n("idle",1)}if(e==="lie"&&t<=0&&this.actions.die&&(this.actions.die.time=this.actions.die.getClip().duration),t<=0)for(let i in this.targets)this.weights[i]=this.targets[i]}playOnce(e,{fade:t=.2,timeScale:n=1}={}){let i=this.action(e);if(!i)return 0;i.reset(),i.timeScale=n,i.setLoop(Pa,1),i.clampWhenFinished=!0,i.play();let r=i.getClip().duration/n;return this.once={name:e,t:0,dur:r,fade:t},r}run(e){this.steps=e.slice(),this.stepT=0,this.path=null,this.stepStarted=!1}get busy(){return this.steps.length>0}walkTo(e,t="walk"){this.path=e.slice(),this.mode=t}setVisible(e){this.visible=e,this.root.visible=e&&(this.camFade==null||this.camFade>.001)}setFade(e){if(this.camFade=e,!!this.model){if(e>=.999){this.fadeMats&&(this.model.traverse(t=>{t.isMesh&&t.userData.origMat&&(t.material=t.userData.origMat,t.userData.origMat=null)}),this.fadeMats=null),this.root.visible=this.visible;return}this.fadeMats||(this.fadeMats=[],this.model.traverse(t=>{if(!t.isMesh||Array.isArray(t.material))return;let n=t.material.clone();n.transparent=!0,n.depthWrite=!0,t.userData.origMat=t.material,t.material=n,this.fadeMats.push(n)}));for(let t of this.fadeMats)t.opacity=e;this.root.visible=this.visible&&e>.001}}update(e,t){this.runSteps(e);let n=0;if(this.drive&&this.drive.speed>.05){let l=this.drive;this.path=null,this.steps.length&&(this.steps.length=0),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad"||this.base==="warm")&&this.setBase("idle",.15);let h=Math.atan2(l.x,l.z);this.yaw+=cn(h-this.yaw)*ln(12,e);let u=Math.max(this.speed,.6);this.pos.x+=l.x*u*e,this.pos.z+=l.z*u*e,n=l.speed,this.mode=l.speed>3.7?"sprint":"walk"}else if(this.path&&this.path.length){let l=this.path[0],h=l.x-this.pos.x,u=l.z-this.pos.z,f=Math.hypot(h,u),d=this.path.length===1;if(this.bestD==null||f<this.bestD-.05?(this.bestD=f,this.stuckT=0):this.stuckT=(this.stuckT||0)+e,f<(d?.06:.45)||this.stuckT>.7&&(!d||f<1.2)||this.stuckT>2.5)this.path.shift(),this.bestD=null,this.stuckT=0,this.path.length||(this.path=null);else{n=kS[this.mode]||Zg,d&&!(this.retargetAt!=null&&this.world.time-this.retargetAt<.5)&&(n=Math.min(n,.9+f*3.2));let p=h,v=u;if(!d&&f<1.2){let I=this.path[1],H=1-f/1.2;p=h*(1-H)+(I.x-this.pos.x)*H,v=u*(1-H)+(I.z-this.pos.z)*H}let m=Math.atan2(p,v),g=cn(m-this.yaw);this.yaw+=g*ln(12,e),n*=ut(1.25-Math.abs(g)/1.6,.2,1);let M=Math.min(f,this.speed*e),P=Math.sin(this.yaw),b=Math.cos(this.yaw),T=h/f,C=u/f,x=P*.55+T*.45,_=b*.55+C*.45,N=Math.hypot(x,_)||1;this.pos.x+=x/N*M,this.pos.z+=_/N*M}}else this.faceYaw!=null&&(this.yaw+=cn(this.faceYaw-this.yaw)*ln(4,e));let i=!this.path&&!(this.drive&&this.drive.speed>.05);this.speed+=(n-this.speed)*ln(n>this.speed?6:i?28:10,e),this.speed<.02&&(this.speed=0),this.root.rotation.y=this.yaw;let r=this.speed>.15;if(this.base!=="lie"&&this.base!=="float")if(r){let l=this.mode==="sprint"?"sprint":this.mode==="sneak"?"sneak":"walk";this.base!==l&&this.setBase(l,.18)}else(this.base==="walk"||this.base==="sprint"||this.base==="sneak")&&this.setBase(this.restPose||"idle",.25);if(this.actions.walk&&(this.actions.walk.timeScale=r?ut(this.speed/zS,.5,1.9)*(this.base==="sneak"?1.1:1):1),this.actions.sprint&&(this.actions.sprint.timeScale=r?ut(this.speed/3.6,.6,1.6):1),r&&this.isMe&&this.visible&&this.world.sfxStep&&(this.stepPhase+=e*this.speed/1.4,this.stepPhase>1&&(this.stepPhase-=1,this.world.sfxStep())),!r&&this.base==="idle"&&!this.once&&!this.claimed&&(this.idleTimer-=e,this.idleTimer<0)){this.idleTimer=6+Math.random()*10;let l=Math.random();this.playOnce(l<.4?"interact-left":l<.75?"interact-right":"pick-up",{timeScale:.7})}let o=0;if(this.once&&!this.actions[this.once.name]&&(this.once=null),this.once){let l=this.once;l.t+=e;let h=l.t>=l.dur;o=Math.min(1,l.t/l.fade)*(h?0:Math.min(1,(l.dur-l.t)/l.fade+1e-4)),h&&(this.once=null,this.actions[l.name].setEffectiveWeight(0),o=0)}let a=0;for(let l in this.weights){let h=this.targets[l]||0,u=this.weights[l],f=this.fadeRate*e;u=u<h?Math.min(h,u+f):Math.max(h,u-f),this.weights[l]=u,a+=u}let c=a>1e-4?(1-o)/a:0;for(let l in this.weights){if(this.once&&l===this.once.name)continue;let h=this.actions[l];h?h.setEffectiveWeight(this.weights[l]*c):delete this.weights[l]}if(this.once&&this.actions[this.once.name].setEffectiveWeight(o),this.animEvery===-1?this.animAcc=0:this.animAcc=Math.min(.25,(this.animAcc||0)+e),this.animTick=this.animEvery===-1?1:((this.animTick||0)+1)%(this.animEvery||1),this.animTick===0?(this.headBone&&this.headBone.quaternion.copy(this.headBaseQ),this.mixer.update(this.animAcc),this.animAcc=0,this.headBone&&(this.headAnimQ||(this.headAnimQ=new Kt),this.headAnimQ.copy(this.headBone.quaternion))):this.headBone&&this.headAnimQ&&this.headBone.quaternion.copy(this.headAnimQ),this.headBone){let l=0;if(this.lookAt&&this.base!=="lie"&&this.speed<.3){let h=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z);l=ut(cn(h-this.yaw),-.85,.85),this.lookUntil&&t>this.lookUntil&&(this.lookAt=null)}this.headYaw=(this.headYaw||0)+(l-(this.headYaw||0))*ln(5,e),Math.abs(this.headYaw)>.002&&this.headBone.rotateY(this.headYaw)}r&&this.visible&&this.world.footDust&&!this.isGhost&&(this.dustT=(this.dustT||0)+e*this.speed,this.dustT>1.15&&(this.dustT=0,this.world.footDust(this.pos.x,this.pos.z,this.speed))),this.isGhost&&this.model&&(this.model.position.y=.35+Math.sin(t*1.6+this.seed*9)*.12)}runSteps(e){var t;for(;this.steps.length;){let n=this.steps[0];this.stepStarted||(this.stepStarted=!0,this.stepT=0,n.walk&&(this.walkTo(n.walk,n.mode||"walk"),this.faceYaw=null,this.restPose=null,(this.base==="sit"||this.base==="peek"||this.base==="cheer"||this.base==="sad")&&this.setBase("idle",.2)),n.at&&(this.pos.x=n.at.x,this.pos.z=n.at.z,this.path=null,this.speed=0),n.face!=null&&(this.faceYaw=n.face),n.faceTo&&(this.faceYaw=Math.atan2(n.faceTo.x-this.pos.x,n.faceTo.z-this.pos.z)),n.snapFace&&(this.yaw=this.faceYaw),n.pose&&(this.restPose=n.pose==="idle"?null:n.pose,this.setBase(n.pose,(t=n.fade)!=null?t:.35)),n.once&&(this.stepDur=this.playOnce(n.once,n.opts||{})),n.hide&&this.setVisible(!1),n.show&&this.setVisible(!0),n.call&&n.call(this)),this.stepT+=e;let i=!0;if(n.walk?i=!this.path:n.wait?i=this.stepT>=n.wait:n.once?i=this.stepT>=(this.stepDur||0)*(n.part||1):n.until&&(i=n.until(this)),!i)return;this.steps.shift(),this.stepStarted=!1}}hold(e,t="right",n=[0,-.14,.04]){let i=t==="left"?this.armL:this.armR;!i||!e||(e.position.set(n[0],n[1],n[2]),e.scale.setScalar(e.userData.holdScale||.4),i.add(e),this.props.push(e))}dropProps(){for(let e of this.props)e.parent&&e.parent.remove(e);this.props=[]}gaze(e,t,n){this.lookAt=e?{x:e.x,z:e.z}:null,this.lookUntil=t?n+t:0}dispose(){if(this.fadeMats){for(let e of this.fadeMats)e.dispose();this.fadeMats=null}this.dropProps(),this.model&&this.model.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.dispose()}),this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.ghostBodyMat&&this.ghostBodyMat.dispose(),this.root.parent&&this.root.parent.remove(this.root)}};var qa=new X(0,0,-620);function Sn(s,e,t,n,i,r,o=0,a=1){let c=yn(e,t);if(!c)return null;let l=c.clone();return l.position.set(n,i,r),l.rotation.set(0,o*Math.PI/180,0),l.scale.setScalar(a),l.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1)}),s.add(l),l}function Ed(s){let e=null,t=!1,n=null,i=null,r=new Map,o=null,a=null,c=null,l=null,h=[],u={bed:{x:-2.2,z:-1.9},sleeper:{x:-2.2,y:.66,z:-.75},bedside:{x:-1.05,z:-1.15},bedside2:{x:-1,z:-.15},bedfoot:{x:-2.2,z:.75},doorOut:{x:5.2,z:0},doorIn:{x:2,z:.1},doorStep:{x:3.1,z:.05},chest:{x:-.3,z:-2},bookcase:{x:-2.55,z:1.25},table:{x:1.55,z:-.75},rug:{x:.4,z:.6},lantern:{x:-.85,y:.75,z:-3},winOut:{x:-4.1,z:-1.55},window:{x:-3.62,y:1.35,z:-2.5}};function f(){if(t||!zn("interior/furniture.glb")||!zn("interior/clues.glb"))return t;e=new Bt,e.name="interior",e.position.copy(qa),e.visible=!1,s.scene.add(e);for(let L of[-2.5,0,2.5])for(let J of[-2.5,0,2.5])Sn(e,"furniture","floor-planks",L,0,J);for(let L of[-2.5,0,2.5])Sn(e,"furniture",L===0?"wall-wood-window":"wall-wood",L,0,-2.5,90);for(let L of[-2.5,0,2.5])Sn(e,"furniture",L===-2.5?"wall-wood-window":"wall-wood",-2.5,0,L,180);for(let L of[-2.5,0,2.5])Sn(e,"furniture",L===0?"wall-wood-door":"wall-wood",2.5,0,L,0);let N=new Mt(new vi(40,40),new pn({color:"#3f5a34"}));N.rotation.x=-Math.PI/2,N.position.y=-.02,e.add(N);let I=Sn(e,"furniture","bed",u.bed.x,0,u.bed.z);I&&I.traverse(L=>{L.isMesh&&L.material&&L.material.name==="carpet"&&(a||(a=L.material.clone()),L.material=a)}),c=Sn(e,"furniture","rug-round",u.rug.x,.01,u.rug.z),Sn(e,"furniture","table",1.6,0,-1.5),Sn(e,"furniture","chair",1.6,0,-.3,180),Sn(e,"furniture","candle",1.2,.79,-1.6),Sn(e,"clues","mug",1.85,.79,-1.35),Sn(e,"clues","bread",2.1,.79,-1.75),l=Sn(e,"furniture","chest",-.3,0,-2.8),Sn(e,"furniture","bookcase",-3.4,0,1.2,90),Sn(e,"furniture","lantern",u.lantern.x,0,u.lantern.z),Sn(e,"furniture","coat-rack",3.05,0,-2),Sn(e,"furniture","plant-pot",2.9,0,-3.05),Sn(e,"furniture","barrel",-3,0,3,0,.8),o=new pn({color:"#c9b48a",side:sn});let B=new Mt(new xi(.9,1.25,.04),o);B.position.set(1.55,1.75,-3.42),e.add(B);let O=new Mt(new ts(.03,.03,1.1,6),new pn({color:"#5a3a22"}));return O.rotation.z=Math.PI/2,O.position.set(1.55,2.4,-3.4),e.add(O),t=!0,!0}let d=new X;function p(N,I=0){var H;return d.set(qa.x+N.x,qa.y+((H=N.y)!=null?H:I),qa.z+N.z).clone()}function v(N){if(!f())return!1;n=N;let I=Mn[ut((N.look&&N.look.color)|0,0,19)];return o.color.set(I),a&&a.color.set(I).lerp(new Ne("#ffffff"),.25),i&&(i.dispose(),i=null),N.look&&(i=new bi(s,"room-sleeper",N.look),i.setBase("lie",0),i.pos.copy(p(u.sleeper)),i.yaw=0,i.root.rotation.y=0,s.scene.add(i.root)),m(),!0}function m(){c&&(c.position.set(u.rug.x,.01,u.rug.z),c.rotation.set(0,0,0));for(let N of h.splice(0))N.parent&&N.parent.remove(N)}function g(N){return v(N)?(e.visible=!0,i&&i.setVisible(!0),!0):!1}function M(){e&&(e.visible=!1),i&&(i.dispose(),i=null),T(),m(),n=null}function P(N,I,H,B,O=0){b(N);let L=new bi(s,"room-"+N,I);return L.pos.copy(p(B)),L.yaw=O,L.root.rotation.y=O,s.scene.add(L.root),r.set(N,{ch:L,name:H,color:I.color|0,label:!!H}),L}function b(N){let I=r.get(N);I&&(I.ch.dispose(),r.delete(N))}function T(){for(let N of[...r.keys()])b(N)}function C(N){return e.add(N),h.push(N),N}function x(N,I){if(!(!e||!e.visible)){i&&(i.update(N,I),i.root.position.y=qa.y+u.sleeper.y+Math.sin(I*1.7)*.015);for(let H of r.values())H.ch.update(N,I)}}function _(N,I){return N==="window"?{pos:p({x:I?-6.9:-6.3,y:1.75,z:I?-2.95:-3}),look:p({x:-1.6,y:.9,z:-2.1}),fov:I?56:42}:N==="search"?{pos:p({x:I?.5:3.4,y:I?9:4.6,z:I?4.3:5.6}),look:p({x:-.5,y:.3,z:-.7}),fov:I?58:48}:{pos:p({x:I?.4:3.6,y:I?9.2:4.9,z:I?4.1:5.9}),look:p({x:I?-.45:-.9,y:.3,z:I?-.75:-1.1}),fov:I?58:48}}return{L:u,W:p,show:g,hide:M,dress:v,update:x,shot:_,addActor:P,removeActor:b,clearActors:T,addTemp:C,resetProps:m,get visible(){return!!(e&&e.visible)},get group(){return f(),e},get ready(){return f()},get owner(){return n},get actors(){return r},get rug(){return c},get chest(){return l},lanternWorld(){return p(u.lantern)},dispose(){M(),e&&(s.scene.remove(e),e.traverse(N=>{N.geometry&&!N.geometry.userData.shared&&(N.geometry.type==="PlaneGeometry"||N.geometry.type==="BoxGeometry"||N.geometry.type==="CylinderGeometry")&&N.geometry.dispose()})),o&&o.dispose(),a&&a.dispose()}}}var Sr={cancelled:!0},Jg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ro=s=>1-Math.pow(1-s,3);function wh(s){return s.catch(()=>{}),s}typeof window!="undefined"&&!window.__vkwCancelGuard&&(window.__vkwCancelGuard=!0,window.addEventListener("unhandledrejection",s=>{s&&s.reason===Sr&&s.preventDefault()}));function $g(s){let e=new Map,t=null,n=!1,i=0;function r(u,f,d){typeof f=="function"&&(d=f,f=null),e.set(f?u+":"+f:u,d)}function o(u){return e.get(u.kind+":"+(u.scene||""))||e.get(u.kind)}function a(u){return new Promise(f=>{if(n||!u||!u.kind){f();return}l();let d=o(u);if(!d){f();return}let p=++i;["death","hanged","shot","left"].includes(u.kind)&&s.holdDeaths((u.targets||[]).map(g=>g.id).filter(Boolean));let v=h(p,u),m={msg:u,resolve:f,ctx:v};t=m,(async()=>{try{await Promise.race([d(v,u),v.timeout(13)])}catch(g){g!==Sr&&console.warn("[VKWorld] sinematik hatas\u0131",g)}c(m)})()})}function c(u){if(!u.done){u.done=!0;try{u.ctx.cleanup()}catch(f){console.warn("[VKWorld] sinematik temizli\u011Fi",f)}t===u&&(t=null),u.resolve()}}function l(){if(t){let u=t;u.ctx.cancel(),c(u)}}function h(u,f){let d=new Map,p=new Set,v=new Set,m=[],g=[],M=!1,P=!1,b=!1,T=()=>!n&&!M&&u===i,C={world:s,msg:f,alive:T,cancel(){M=!0;for(let x of v)x.reject(Sr);v.clear()},wait(x){return T()?wh(new Promise((_,N)=>{let I={resolve:_,reject:N,left:x};v.add(I),s.ticker.push(H=>v.has(I)?(I.left-=H,I.left<=0?(v.delete(I),_(),!0):!1):!0)})):wh(Promise.reject(Sr))},timeout(x){return new Promise(_=>{let N=setTimeout(_,x*1e3);p.add(N)})},tween(x,_,N=Jg){return T()?wh(new Promise((I,H)=>{let B=0,O={resolve:I,reject:H};v.add(O),s.ticker.push(L=>{if(!v.has(O))return!0;B=Math.min(x,B+L);try{_(N(x>0?B/x:1),L)}catch(J){console.warn(J)}return B>=x?(v.delete(O),I(),!0):!1})})):wh(Promise.reject(Sr))},shot(x,_,N={}){T()&&s.rig.setOverride({pos:x.clone(),look:_.clone(),fov:N.fov||40,k:N.k||2.4})},cut(x,_,N={}){T()&&s.rig.setOverride({pos:x.clone(),look:_.clone(),fov:N.fov||40,k:60},!0)},move(x,_,N,I,H,B={}){let O=new X,L=new X;return C.cut(x,_,B),C.tween(H,J=>{O.lerpVectors(x,N,J),L.lerpVectors(_,I,J),s.rig.setOverride({pos:O,look:L,fov:B.fov||40,k:60},!0)},B.ease||Jg)},claim(x){let _=s.chars.get(x);return _?(d.has(_)||(d.set(_,{x:_.pos.x,y:_.pos.y,z:_.pos.z,yaw:_.yaw,visible:_.visible,inside:_.inside,peeking:_.peeking,base:_.base}),_.claimed=!0,_.run([])),_):null},add(x,_){return(_||s.scene).add(x),m.push(x),x},prop(x,_,N,I,H,B=0,O=1){let L=s.assets.prop(x,_);if(!L)return null;let J=L.clone();return J.position.set(N,I,H),J.rotation.y=B,J.scale.setScalar(O),J.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),C.add(J)},actor(x,_,N,I,H=0,B){let O=s.makeActor(x,_,B);return O.pos.set(N,0,I),O.yaw=H,O.root.rotation.y=H,m.push({dispose:()=>s.dropActor(O)}),O},hideObj(x){x&&x.visible&&(x.visible=!1,g.push(x))},tod(x,_){b=!0,s.setTodOverride(x,_)},room(){return P=!0,s.room},fx:s.fx,sfx:(x,_)=>s.sfx(x,_),flash:(x,_)=>s.flash(x,_),cleanup(){M=!0;for(let x of p)clearTimeout(x);for(let x of v)x.reject(Sr);v.clear();for(let x of m.splice(0))x.dispose&&!x.isObject3D?x.dispose():x.parent&&x.parent.remove(x),x.userData&&x.userData.cleanup&&x.userData.cleanup();for(let x of g.splice(0))x.visible=!0;for(let[x,_]of d)x.claimed=!1,x.dropProps(),x.pos.set(_.x,_.y,_.z),x.yaw=_.yaw,x.inside=_.inside,x.peeking=_.peeking,x.alive!==!1&&x.setVisible(_.visible&&!s.isDeadShown(x.id)),x.setBase(_.base==="walk"||_.base==="sprint"||_.base==="sneak"?"idle":_.base||"idle",.2),x.run([]);s.endCineRoom(),s.moonOverride(null),s.fogBoost(1),s.releaseDeaths(),b&&s.setTodOverride(null),s.rig.setOverride(null),s.flash(0),s.cineTint(null),d.size&&(d.clear(),s.reapply(!0))}};return C}return{register:r,announce:a,CANCEL:Sr,get running(){return!!t},get current(){return t?t.msg:null},skip(){l()},reset(){i++,l(),s.rig.setOverride(null)},dispose(){n=!0,i++,l()}}}var dt=(s,e,t)=>new X(s,e,t),Ya=s=>(s.targets||[]).map(e=>e.id).filter(Boolean);function jg(s,e){let t=()=>e.layoutR(),n=()=>e.village.layout;function i(S,E={}){var De;let z=e.houseAnchors(S);if(!z)return null;let y=E.back,R=y?z.backWin:{x:(z.door.x+z.frontWin.x)/2,z:(z.door.z+z.frontWin.z)/2},U=y?z.peek:z.approach,Y=y?z.backWin:z.door,ie=U.x-Y.x,Q=U.z-Y.z,Z=Math.hypot(ie,Q)||1,W=(E.dist||11)*(e.rig.portrait?1.3:1),V=(De=E.side)!=null?De:.18,j=-Q/Z*V,ve=ie/Z*V;return{pos:dt(R.x+(ie/Z+j)*W,E.height||7.2,R.z+(Q/Z+ve)*W),look:dt(R.x,E.lookY||1.8,R.z),a:z}}function r(S,E={}){let z=e.camera.position,y=z.x-S.x,R=z.z-S.z,U=Math.hypot(S.x,S.z);e.village.layout&&U>e.village.layout.Rp*.8&&(y=-S.x,R=-S.z),E.dir&&(y=E.dir.x,R=E.dir.z);let Y=Math.hypot(y,R)||1,ie=(E.dist||6.5)*(e.rig.portrait?1.3:1);return{pos:dt(S.x+y/Y*ie,E.height||3,S.z+R/Y*ie),look:dt(S.x,E.lookY||1.1,S.z)}}let o=()=>e.rig.portrait?54:42,a=()=>e.rig.portrait?66:42,c=()=>e.rig.portrait?1.6:1;function l(S,E,z){let y=0;e.ticker.push(R=>{if(!S.alive())return!0;if(y+=R,y<E)return!1;try{z()}catch(U){console.warn("[VKWorld]",U)}return!0})}function h(S,E,z=4.2,y=null){e.ticker.push(()=>{if(!S.alive())return!0;let R=e.camera.position;for(let U of E){if(U===y||!U.visible)continue;let Y=U.pos.x-R.x,ie=U.pos.z-R.z,Q=U.pos.y+1-R.y;Y*Y+ie*ie+Q*Q*.25<z*z&&U.setVisible(!1)}return!1})}async function u(S,E,z,y,R=.3,U=2.2){if(!zn("characters/ghost.glb")||!E)return;let Y=S.actor(E,"",z,y,0,"ghost");Y.root.position.y=R,S.sfx("poof",{volume:.5}),await S.tween(U,ie=>{Y.root.position.y=R+ie*2.3,Y.yaw+=.02;let Q=1.3*(1-Math.max(0,ie-.75)*3);Y.root.scale.setScalar(Math.max(.05,Q))},Ro),e.fx.emit("magic",z,R+2.6,y,Mn[E.color|0],12),Y.setVisible(!1)}function f(S,E){e.markDead(E,{drop:!0});let z=e.houseAnchors(E);z&&l(S,.38,()=>e.fx.emit("poof",z.tomb.x,.2,z.tomb.z,"#b8a890",10)),S.sfx("poof",{volume:.6})}function d(S,E,z,y,R=10,U=2.4,Y=3.5,ie={x:0,z:-1},Q=1){if(!zn("characters/bat.glb"))return Promise.resolve();let Z=ci("characters/bat.glb").scene.children[0],W=[];for(let j=0;j<R;j++){let ve=Z.clone(!0);ve.scale.setScalar((1+Math.random()*.5)*Q),S.add(ve),W.push({b:ve,a:j/R*Ze,r:Y*(.6+Math.random()*.6),h:z+(Math.random()-.5)*1.6,sp:2.2+Math.random()*1.6,wl:ve.getObjectByName("wing-left"),wr:ve.getObjectByName("wing-right"),ph:Math.random()*6})}S.sfx("whoosh",{volume:.6});let V=0;return S.tween(U,(j,ve)=>{V+=ve;let De=Math.max(0,j-.55)/.45;for(let Ee of W){Ee.a+=Ee.sp*ve;let ke=Ee.r*(1+De*5),Xe=E+Math.sin(Ee.a)*ke+ie.x*De*De*25,Ke=y+Math.cos(Ee.a)*ke+ie.z*De*De*25,at=Ee.h+Math.sin(V*3+Ee.ph)*.4+De*8;Ee.b.position.set(Xe,at,Ke),Ee.b.rotation.y=Ee.a+Math.PI/2;let Qe=Math.sin(V*22+Ee.ph)*.9;Ee.wl&&(Ee.wl.rotation.z=Qe),Ee.wr&&(Ee.wr.rotation.z=-Qe)}},j=>j)}function p(S,E,z,y){if(!zn("characters/vampire.glb"))return null;let R=ci("characters/vampire.glb"),U=R.scene.clone(!0);U.scale.multiplyScalar(1.05),U.position.set(E,0,z),U.rotation.y=y,S.add(U);let Y=new Ms(U),ie=null,Q=W=>{let V=_i.findByName(R.animations,W);if(!V)return;let j=Y.clipAction(V);ie&&ie!==j&&ie.fadeOut(.15),j.reset().fadeIn(.15).play(),ie=j};Q("idle"),e.ticker.push(W=>U.parent?(Y.update(W),!1):(Y.stopAllAction(),!0));let Z=v(.5,"#ff2244");return Z.position.set(0,1.85,.25),U.add(Z),{root:U,play:Q}}function v(S,E){let z=g(),y=new oo({map:z,color:E,transparent:!0,depthWrite:!1,blending:Yn,fog:!1}),R=new oa(y);return R.scale.setScalar(S),R.userData.cleanup=()=>y.dispose(),R}let m=null;function g(){if(m)return m;let S=document.createElement("canvas");S.width=S.height=64;let E=S.getContext("2d"),z=E.createRadialGradient(32,32,0,32,32,32);return z.addColorStop(0,"rgba(255,255,255,1)"),z.addColorStop(.35,"rgba(255,255,255,0.45)"),z.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=z,E.fillRect(0,0,64,64),m=new rr(S),m.colorSpace=Ot,m}function M(S){let E=new Bt,z=new Mt(new ts(.05,.06,.9,6),new pn({color:"#6b4426"}));z.position.y=.2,E.add(z);let y=new Mt(new ts(.1,.07,.16,6),new pn({color:"#3a2a20"}));y.position.y=.66,E.add(y);let R=Yg(.38,.62,Math.random()*9);R.position.y=.7,E.add(R);let U=v(1.3,"#ffb347");return U.position.y=.95,E.add(U),e.ticker.push(()=>!E.parent&&E.userData.used?!0:(R.userData.tick(e.time),!1)),E.userData.holdScale=1/1.12/2.5*1,E.userData.used=!0,E.userData.cleanup=()=>{z.geometry.dispose(),z.material.dispose(),y.geometry.dispose(),y.material.dispose(),R.userData.cleanup(),U.userData.cleanup()},E}function P(S,E,z=1){let y=yn(S,E);if(!y)return null;let R=y.clone();return R.userData.holdScale=1/(1.12*2.5)*z,R}function b(S=[],E=10){let z=[];for(let[y,R]of e.chars)if(!(!R.visible||S.includes(y)||R.isGhost)&&(z.push(R),z.length>=E))break;return z}function T(S,E){for(let z of S)z.faceYaw=Math.atan2(E.x-z.pos.x,E.z-z.pos.z),z.gaze(E,6,e.time)}function C(S,E,z=4){for(let y of S)y.gaze(E,z,e.time)}s.register("start",async S=>{let E=t(),z=b([],20);S.sfx("whoosh"),e.fx.emit("magic",0,1.2,0,"#ffd27a",24);let y=dt(0,E*1.1,E*1.3),R=dt(0,.4,0),U=dt(E*.3,4.8,E*.8+2),Y=dt(0,1,0);l(S,.9,()=>C(z,e.camera.position,4)),await S.move(y,R,U,Y,3,{fov:o()+4});for(let ie of z)Math.random()<.6&&ie.playOnce("emote-yes",{timeScale:1.2});e.fx.emit("magic",0,1.6,0,"#b197fc",20),await S.wait(1.6)}),s.register("night",async S=>{let E=t(),z=b([],20);for(let y of z)Math.random()<.7&&y.playOnce(Math.random()<.5?"interact-left":"interact-right",{timeScale:.6});S.tod(21),S.sfx("whoosh",{volume:.5}),await S.move(dt(0,3.2,E*.75),dt(0,1.2,0),dt(0,E*.55,E*1.15),dt(0,E*.9,-E*2.5),3.6,{fov:o()+6}),await S.wait(.6)}),s.register("death",async(S,E)=>{let z=(E.targets||[]).slice(0,2);S.tod(5.7);for(let y of z){let R=y.cause==="zehir"?"poison":["bite","bats","vanish"].includes(y.scene)?y.scene:"bite";y.id===e.meId()&&await _(S,y,R==="poison")||await x(S,y.id,R,z.length>1?.8:1)}});async function x(S,E,z,y){let R=i(E,{dist:11,height:7.4,side:.2,lookY:2.2});if(!R)return;let U=R.a,Y=e.playerById(E),ie=Y?Y.look:null,Q=dt(R.pos.x*.88+U.door.x*.12,R.pos.y-1.2,R.pos.z*.88+U.door.z*.12);if(S.cut(R.pos,R.look,{fov:o()}),S.move(R.pos,R.look,Q,R.look,3.4*y,{fov:o()}),z==="bite"){await S.wait(.4*y),e.village.openDoor(E,1.2),S.sfx("door");let j=p(S,U.inside.x,U.inside.z,Math.atan2(U.approach.x-U.inside.x,U.approach.z-U.inside.z));j&&(j.play("sprint"),await S.tween(.9*y,ve=>{j.root.position.x=U.inside.x+(U.approach.x-U.inside.x)*1.6*ve,j.root.position.z=U.inside.z+(U.approach.z-U.inside.z)*1.6*ve},ve=>ve),e.fx.emit("smoke",j.root.position.x,.8,j.root.position.z,"#2a2238",16),j.root.visible=!1,S.sfx("bite"),d(S,j.root.position.x,1.6,j.root.position.z,8,1.6,1.2,{x:U.approach.x-U.door.x,z:U.approach.z-U.door.z})),await S.wait(.6*y)}else if(z==="bats")S.sfx("bite"),e.flash(.35,"#d7263d"),await d(S,(U.door.x+U.backWin.x)/2,3.2,(U.door.z+U.backWin.z)/2,14,2.2*y,3.6,{x:U.approach.x-U.door.x,z:U.approach.z-U.door.z});else if(z==="vanish"){await S.wait(.3),e.village.openDoor(E,1.6);for(let j=0;j<4;j++)e.fx.emit("mist",U.door.x,.4+j*.3,U.door.z,"#9b7bff",10),await S.wait(.25*y);S.sfx("whoosh"),e.flash(.3,"#7048e8"),await S.wait(.4*y)}else if(z==="poison"){S.sfx("potion");for(let j=0;j<6;j++)e.fx.emit("bubble",U.frontWin.x,1.3,U.frontWin.z,"#94d82d",6),e.fx.emit("smoke",U.door.x*.6+U.backWin.x*.4,4.6,U.door.z*.6+U.backWin.z*.4,"#6f8a3a",3),await S.wait(.22*y);e.flash(.35,"#5fbf2a")}e.flickerHouse(E,1.3*y),await S.wait(.9*y);let Z=U.door.x*.4+U.approach.x*.6,W=U.door.z*.4+U.approach.z*.6,V=u(S,ie,Z,W,.2,2.2*y);await S.wait(.7*y),f(S,E),await V,await S.wait(.2)}async function _(S,E,z){let y=e.openRoom(E.id);if(!y)return!1;let R=e.playerById(E.id),U=y.shot("inside",e.rig.portrait);S.cut(U.pos,U.look,{fov:U.fov});let Y=y.L,ie=y.W({x:Y.bedside.x,z:Y.bedside.z}),Q=y.W({x:Y.sleeper.x,z:Y.sleeper.z});await S.wait(1.1),S.sfx("door",{volume:.6});let Z=y.W(Y.doorStep),W=y.W(Y.doorIn),V=p(S,Z.x,Z.z,Math.atan2(W.x-Z.x,W.z-Z.z));if(V){z&&V.root.traverse(Ke=>{if(Ke.isMesh){let at=new tn({color:"#0b0a12",transparent:!0,opacity:.82});Ke.material=at,Ke.userData.cleanup=()=>at.dispose()}}),V.play("walk");let ve=[Z,W,ie],De=[Math.hypot(W.x-Z.x,W.z-Z.z),Math.hypot(ie.x-W.x,ie.z-W.z)],Ee=De[0]+De[1];await S.tween(Ee/1.6,Ke=>{let at=Ke*Ee,[Qe,Lt,vt]=at<De[0]?[ve[0],ve[1],at/De[0]]:[ve[1],ve[2],(at-De[0])/De[1]];V.root.position.x=Qe.x+(Lt.x-Qe.x)*vt,V.root.position.z=Qe.z+(Lt.z-Qe.z)*vt,V.root.rotation.y=Math.atan2(Lt.x-Qe.x,Lt.z-Qe.z)},Ke=>Ke),V.play("idle");let ke=V.root.rotation.y,Xe=Math.atan2(Q.x-V.root.position.x,Q.z-V.root.position.z);await S.tween(.5,Ke=>{V.root.rotation.y=ke+(((Xe-ke+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*Ke,V.root.rotation.x=.35*Ke}),V.play("interact-right")}e.flickerRoom(1.5),S.sfx(z?"potion":"bite",{volume:.7}),z||e.flash(.25,"#d7263d"),await S.wait(1.6),V&&(e.fx.emit("smoke",V.root.position.x,1,V.root.position.z,"#2a2238",16),V.root.visible=!1),await S.wait(.3);let j=u(S,R&&R.look,Q.x,Q.z,.9,2.2);return e.markDead(E.id,{quiet:!0,drop:!0}),await j,await S.wait(.4),!0}s.register("safe",async S=>{let E=t();S.tod(5.4,!0),l(S,.05,()=>S.tod(7.6)),[...e.village.houses.keys()].slice(0,6).forEach((y,R)=>l(S,.7+R*.26,()=>e.village.openDoor(y,1.4))),await S.move(dt(-E*.9,E*.45,E*.95),dt(0,2,0),dt(E*.55,E*.55,E*1),dt(E*1.6,4,-E*.6),4.6,{fov:o()+4}),await S.wait(.3)}),s.register("nohang",async S=>{let E=t(),z=b([],20);C(z,dt(0,1,0),4),z.forEach((y,R)=>l(S,R*.09,()=>y.playOnce("emote-no",{timeScale:.9}))),await S.move(dt(0,4,E*.55),dt(0,1,0),dt(0,E*.8,E*1.15),dt(0,.5,0),3.8,{fov:o()+2})}),s.register("sleep",async S=>{let E=t(),z=b([],20).map(y=>S.claim(y.id)).filter(Boolean);for(let y of z)y.setBase(Math.random()<.5?"sit":"warm",.5);S.tod(19.6),await S.move(dt(0,3.4,E*.7),dt(0,1,0),dt(0,E*.45,E*1.05),dt(0,E*.8,-E*2.5),4,{fov:o()+6})}),s.register("left",async(S,E)=>{let[z]=Ya(E),y=z&&e.chars.get(z);if(y&&y.visible){S.claim(z);let R=r(y.pos,{dist:6});S.shot(R.pos,R.look,{fov:o()}),y.faceYaw=Math.atan2(e.camera.position.x-y.pos.x,e.camera.position.z-y.pos.z),await S.wait(.6),y.playOnce("emote-yes",{timeScale:.8}),await S.wait(1.4),e.fx.emit("mist",y.pos.x,.4,y.pos.z,"#c9c2d3",22),S.sfx("whoosh"),e.markDead(z,{quiet:!0}),y.setVisible(!1),await S.wait(1.4)}else if(z){let R=i(z,{dist:10});R&&(S.shot(R.pos,R.look,{fov:o()}),await S.wait(1),e.fx.emit("mist",R.a.door.x,.6,R.a.door.z,"#c9c2d3",20),f(S,z),await S.wait(1.6))}}),s.register("hanged",async(S,E)=>{let[z]=Ya(E),y=["gallows","exile","cellar"].includes(E.scene)?E.scene:"gallows",R=z&&e.chars.get(z);if(!R){await S.wait(1.5);return}S.claim(z),R.setVisible(!0);let U=b([z],40).map(ie=>S.claim(ie.id)).filter(Boolean),Y=U.slice(0,9);for(let ie of U.slice(9))ie.setVisible(!1);y==="gallows"?await H(S,R,Y,z):y==="exile"?await B(S,R,Y,z):await O(S,R,Y,z)});function N(S,E){let z=n(),y=z.gateAngle+S,R=z.Rp*E;return{x:Math.sin(y)*R,z:Math.cos(y)*R,a:y}}function I(S,E,z,y,R={}){let U=S.length,Y=R.spread||2.2;S.forEach((ie,Q)=>{let Z=y+(R.front?0:Math.PI)+(Q-(U-1)/2)/Math.max(1,U)*Y;ie.pos.set(E.x+Math.sin(Z)*z+(Math.random()-.5)*.4,0,E.z+Math.cos(Z)*z+(Math.random()-.5)*.4),ie.yaw=Math.atan2(E.x-ie.pos.x,E.z-ie.pos.z),ie.faceYaw=ie.yaw,ie.gaze(E,8,e.time)})}async function H(S,E,z,y){let R=N(.25,.82),U=R.a+Math.PI;S.prop("village","platform-wood",R.x,0,R.z,U,1),S.prop("village","frame-wood",R.x,1.18,R.z,U,1);let Y={x:Math.sin(U),z:Math.cos(U)},ie={x:Math.cos(U),z:-Math.sin(U)};S.prop("village","ladder",R.x+Y.x*1.5-ie.x*.75,0,R.z+Y.z*1.5-ie.z*.75,U,.8);let Q=new Mt(new ts(.035,.035,1,6),new pn({color:"#c8a46a"}));Q.position.set(R.x,1.18+2.35-.5,R.z);let Z=new Mt(new ga(.16,.035,6,12),Q.material);Z.position.set(R.x,1.18+1.75,R.z),Z.userData.cleanup=()=>{Q.geometry.dispose(),Z.geometry.dispose(),Q.material.dispose()},S.add(Q),S.add(Z);let W=e.rig.portrait;I(z,{x:R.x,z:R.z},W?3.6:4.2,U-1.25,{front:!0,spread:W?1.4:1.7});let V={x:R.x+Y.x*3.4,z:R.z+Y.z*3.4};E.pos.set(V.x,0,V.z),E.yaw=U+Math.PI,E.faceYaw=E.yaw;let j=W?8:7.4,ve=W?8:9.6,De=W?a():32,Ee=dt(R.x+Y.x*j+ie.x*ve,W?6.2:5,R.z+Y.z*j+ie.z*ve),ke=dt(R.x+Y.x*j*.8+ie.x*ve*.8,W?5.2:4.2,R.z+Y.z*j*.8+ie.z*ve*.8),Xe=Qe=>dt(R.x-Y.x*(W?0:.7)-ie.x*.5,Qe,R.z-Y.z*(W?0:.7)-ie.z*.5);S.move(Ee,Xe(W?1.6:1.7),ke,Xe(W?1.9:2),4.2,{fov:De}),h(S,z,6),E.run([{walk:[{x:R.x+Y.x*1.6,z:R.z+Y.z*1.6}],mode:"walk"}]),await S.wait(1.4),await S.tween(.5,Qe=>{E.pos.y=Qe*1.2,E.pos.x=R.x+Y.x*1.6*(1-Qe),E.pos.z=R.z+Y.z*1.6*(1-Qe)}),E.run([]),E.faceYaw=U,E.yaw=U,E.setBase("idle",.2),await S.wait(.5),E.playOnce("emote-no",{timeScale:.9}),S.sfx("hang",{volume:.7}),await S.wait(1.2),e.flash(.45,"#f4e4c1"),e.fx.emit("poof",E.pos.x,1.4,E.pos.z,null,26),S.sfx("poof"),E.setVisible(!1);for(let Qe of z)Math.random()<.6&&Qe.playOnce(Math.random()<.5?"emote-no":"interact-right");let Ke=e.playerById(y),at=u(S,Ke&&Ke.look,R.x,R.z,1.4,1.8);e.markDead(y,{quiet:!0,drop:!0}),await at}async function B(S,E,z,y){let R=n(),U=R.gateAngle,Y=(at,Qe=0)=>({x:Math.sin(U+Qe/at)*at,z:Math.cos(U+Qe/at)*at}),ie=Y(R.R+2),Q=Y(R.R-.6),Z=e.fogBoost(.6),W=U+Math.PI/2,V=S.prop("graveyard","iron-fence-gate",ie.x,0,ie.z,W,1);E.pos.set(Q.x,0,Q.z),E.yaw=U,E.faceYaw=U;let j=z.slice(0,6);j.forEach((at,Qe)=>{let Lt=(Qe-(j.length-1)/2)*1.1,vt=Y(R.R-3.3-Qe%2*1,Lt*(e.rig.portrait?.75:1));at.pos.set(vt.x,0,vt.z),at.yaw=U,at.faceYaw=U,Qe%2===0?(at.hold(M(S),"right",[0,-.12,.02]),at.setBase("hold",.2)):at.hold(P("village","pitchfork-hoe",.9),"right",[0,-.12,.02])});for(let at of z.slice(6))at.setVisible(!1);let ve=e.rig.portrait,De=Y(Math.max(R.R-(ve?12:11),2.8),ve?1.2:-2.2),Ee=ve?10.5:9.6,ke=Y(R.R+(ve?1.5:3),0);S.cut(dt(De.x,Ee,De.z),dt(ke.x,.8,ke.z),{fov:a()});let Xe=Y(R.R+15);h(S,j,8,E),E.run([{walk:[ie,Xe],mode:"walk"}]),j.forEach((at,Qe)=>{let Lt=Y(R.R-1.2-Qe%2*.9,(Qe-2.5)*1.1);at.run([{wait:.4},{walk:[Lt],mode:"walk"},{pose:Qe%2===0?"hold":"idle"}])}),S.sfx("whoosh",{volume:.4});let Ke=Y(R.R-2,ve?.6:-1.2);if(await S.move(dt(De.x,Ee,De.z),dt(ke.x,.8,ke.z),dt(Ke.x,ve?6.8:6,Ke.z),dt(Xe.x,.9,Xe.z),4.8,{fov:a()}),e.fx.emit("mist",E.pos.x,.6,E.pos.z,"#d8dde4",16),E.setVisible(!1),V){let at=V.rotation.y;V.rotation.y=at+1.3,S.sfx("door"),await S.tween(.6,Qe=>{V.rotation.y=at+1.3*(1-Qe)},Ro)}e.markDead(y,{quiet:!0,drop:!0}),await S.wait(.8),Z()}async function O(S,E,z,y){let R=N(1.1,.9),U=R.a+Math.PI;S.prop("village","trapdoor",R.x,.01,R.z,U,.75);let Y=new Bt;Y.position.set(R.x-Math.cos(U)*.85,.12,R.z+Math.sin(U)*.85),Y.rotation.y=U;let ie=new Mt(new xi(1.7,.1,1.7),new pn({color:"#7a5232"}));ie.position.x=.85;let Q=new Mt(new xi(1.72,.12,.18),new pn({color:"#3a3a44"}));Q.position.set(.85,.01,.45),Y.add(ie,Q),Y.userData.cleanup=()=>{ie.geometry.dispose(),ie.material.dispose(),Q.geometry.dispose(),Q.material.dispose()},S.add(Y);let Z=new Mt(new or(.8,16),new tn({color:"#0b0910"}));Z.rotation.x=-Math.PI/2,Z.position.set(R.x,.03,R.z),Z.userData.cleanup=()=>{Z.geometry.dispose(),Z.material.dispose()},S.add(Z);let W=e.rig.portrait;I(z,R,W?3.4:4,U,{spread:W?1.7:2.3});let V={x:Math.sin(U),z:Math.cos(U)},j={x:Math.cos(U),z:-Math.sin(U)};E.pos.set(R.x+V.x*.5+j.x*2.6,0,R.z+V.z*.5+j.z*2.6);let ve=W?8.6:7.2,De=W?2.2:3.8;S.cut(dt(R.x+V.x*ve+j.x*De,W?5.4:4.4,R.z+V.z*ve+j.z*De),dt(R.x+V.x*.5,W?.9:.7,R.z+V.z*.5),{fov:a()}),h(S,z,W?4.6:4),S.sfx("door"),await S.tween(.8,ke=>{Y.rotation.z=ke*1.9},Ro),E.run([{walk:[{x:R.x,z:R.z}],mode:"walk"}]),await S.wait(1.8),E.run([]),E.playOnce("fall",{timeScale:.6}),await S.tween(1,ke=>{E.pos.y=-2.2*ke},ke=>ke*ke),E.setVisible(!1),S.sfx("door"),await S.tween(.5,ke=>{Y.rotation.z=1.9*(1-ke)},ke=>ke*ke),e.fx.emit("poof",R.x,.3,R.z,"#b8a890",14);let Ee=S.prop("clues","key",R.x+j.x*.6,.35,R.z+j.z*.6,U,1.4);Ee&&e.fx.emit("magic",Ee.position.x,.6,Ee.position.z,"#ffd27a",10),e.markDead(y,{quiet:!0,drop:!0});for(let ke of z)Math.random()<.5&&ke.playOnce("emote-yes",{timeScale:.8});await S.wait(1.3)}function L(S,E,z){let y=P("clues","bow",1.1);y&&(y.rotation.set(0,0,0),E.hold(y,"left",[0,-.13,.05])),E.setBase("holdboth",.25),z&&(E.faceYaw=Math.atan2(z.x-E.pos.x,z.z-E.pos.z),E.yaw=E.faceYaw)}async function J(S,E,z,y=.7){let R=yn("clues","arrow");if(!R)return;let U=R.clone();U.scale.setScalar(.9),S.add(U);let Y=dt(z.x-E.x,z.y-E.y,z.z-E.z);S.sfx("shot"),await S.tween(y,ie=>{U.position.set(E.x+Y.x*ie,E.y+Y.y*ie+Math.sin(ie*Math.PI)*1.2,E.z+Y.z*ie),U.rotation.y=Math.atan2(Y.x,Y.z),U.rotation.x=-Math.cos(ie*Math.PI)*.5},ie=>ie)}s.register("hunter",async(S,E)=>{let[z]=Ya(E),y=z&&e.chars.get(z);if(y){S.claim(z),y.setVisible(!0),L(S,y,dt(0,0,0));let R=r(y.pos,{dist:4.8,height:1.4,lookY:1.4});S.move(dt(R.pos.x,.9,R.pos.z),R.look,dt(R.pos.x*1.05,2,R.pos.z*1.05),R.look,3.4,{fov:o()}),e.flash(.3,"#ff8364"),S.sfx("hunter",{volume:.6}),await S.wait(3.4)}else await S.wait(1.5)}),s.register("shot",async(S,E)=>{let[z]=Ya(E),y=E.actorId&&e.chars.get(E.actorId),R=z&&e.chars.get(z);if(!R){await S.wait(1.5);return}S.claim(z),R.setVisible(!0),y&&(S.claim(E.actorId),y.setVisible(!0),L(S,y,R.pos)),R.faceYaw=y?Math.atan2(y.pos.x-R.pos.x,y.pos.z-R.pos.z):R.yaw;let U=y?y.pos:dt(0,0,0),Y=dt(U.x-R.pos.x,0,U.z-R.pos.z).normalize(),ie=dt(Y.z,0,-Y.x),Q=dt((U.x+R.pos.x)/2,1,(U.z+R.pos.z)/2),Z=Math.max(4,Math.hypot(U.x-R.pos.x,U.z-R.pos.z)),W=dt(-Q.x,0,-Q.z).normalize(),V=ie.dot(W)>=0?ie:ie.clone().multiplyScalar(-1);S.cut(dt(Q.x+V.x*(Z*.9+4),4.6+Z*.2,Q.z+V.z*(Z*.9+4)),Q,{fov:o()}),await S.wait(1),y&&y.playOnce("attack-melee-right",{timeScale:1.4});let j=J(S,dt(U.x,1.5,U.z),dt(R.pos.x,1.1,R.pos.z),.75),ve=r(R.pos,{dir:V,dist:6,height:3.6});S.shot(ve.pos,ve.look,{fov:o(),k:2.5}),await j,e.flash(.4,"#ff8364"),e.fx.emit("poof",R.pos.x,.9,R.pos.z,null,22),S.sfx("poof"),R.setVisible(!1);let De=e.playerById(z),Ee=u(S,De&&De.look,R.pos.x,R.pos.z,.3,1.8);e.markDead(z,{quiet:!0,drop:!0}),await Ee,await S.wait(.4)}),s.register("nohunt",async S=>{let E=e.getState(),z=E&&E.room.hunterId,y=z&&e.chars.get(z);if(y){S.claim(z),y.setVisible(!0);let R=dt(y.pos.x*3+8,0,y.pos.z*3-30);L(S,y,R);let U=r(y.pos,{dist:5.5});S.shot(U.pos,U.look,{fov:o()}),await S.wait(.9),await J(S,dt(y.pos.x,1.5,y.pos.z),dt(R.x,6,R.z),1.1),y.dropProps(),y.setBase("idle",.2),y.playOnce("emote-no"),await S.wait(1.6)}else await S.wait(1.5)}),s.register("win",async(S,E)=>{let z=Ya(E),y=t(),R=E.winner;R==="vampir"?(S.tod(23.2,!0),e.moonOverride("#ff4a4a")):R==="soytari"?S.tod(18.4):S.tod(10.2);let U=z.map(Z=>e.chars.get(Z)).filter(Z=>Z&&Z.visible).slice(0,10);for(let Z of U)S.claim(Z.id);let Y=b(z,12).map(Z=>S.claim(Z.id)).filter(Boolean);if(R==="soytari"&&U[0]){let Z=U[0];Z.pos.set(0,0,3),Z.yaw=0,Z.faceYaw=0,Z.setBase("cheer",.2),I(Y,{x:0,z:3},4.5,0);for(let V of Y)V.setBase("sad",.3);let W=v(4,"#f2c12e");W.position.set(0,1.2,3),S.add(W)}else{for(let Z of U)Z.setBase(R==="vampir"?"loom":"cheer",.3);for(let Z of Y)Z.setBase("sad",.3)}R==="vampir"&&d(S,0,5,0,16,5.5,y*.5,{x:0,z:-1});let ie=0,Q=R!=="vampir";await S.tween(5.6,(Z,W)=>{let V=-.9+Z*1.6,j=y*.85*c();if(e.rig.setOverride({pos:dt(Math.sin(V)*j,y*.5*c(),Math.cos(V)*j),look:dt(0,1,0),fov:o()+2,k:60},!0),ie+=W,Q&&ie>.55){ie=0;let ve=U[Math.floor(Math.random()*Math.max(1,U.length))];ve&&(e.fx.emit("confetti",ve.pos.x,2.2,ve.pos.z,null,14),Math.random()<.5&&ve.playOnce("jump"))}},Z=>Z)}),s.register("promote",async S=>{let E=e.meId(),z=E&&e.chars.get(E);if(z&&z.visible){S.claim(E);let y=r(z.pos,{dist:6,height:4.2});S.shot(y.pos,y.look,{fov:o()}),z.setBase("loom",.3);let R=v(.6,"#ff2244");R.position.set(0,.36,.12),z.headBone&&(z.headBone.add(R),S.add(R,z.headBone)),e.flash(.5,"#d7263d"),await d(S,z.pos.x,1.8,z.pos.z,12,3.4,1.8)}else if(E){let y=i(E,{dist:10});y&&(S.shot(y.pos,y.look,{fov:o()}),e.flash(.5,"#d7263d"),await d(S,y.a.door.x,3,y.a.door.z,12,3.4,3))}await S.wait(.4)}),s.register("seer",async(S,E)=>{let z=(E.targets||[])[0];if(!z)return;let y=e.openRoom(z.id);if(!y){await S.wait(1.5);return}let R=e.playerById(e.meId()),U=y.shot("search",e.rig.portrait);S.cut(U.pos,U.look,{fov:U.fov});let Y=R?y.addActor("kahin",R.look,R.name,y.L.doorOut,-Math.PI/2):null,ie=j=>y.W(j);Y&&Y.run([{walk:[ie(y.L.doorIn),ie({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:ie(y.L.bookcase)},{once:"pick-up",opts:{timeScale:.8}},{walk:[ie({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:ie({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.8}},{walk:[ie({x:.9,z:.2})],mode:"sneak"},{faceTo:ie(y.L.rug)},{pose:"peek"}]),S.sfx("door",{volume:.5}),await S.wait(4.6);let Q=z.cause==="vampir",Z=y.rug;if(Q){let j=Z.position.x;S.tween(.7,Ee=>{Z.position.x=j+1.6*Ee,Z.rotation.z=-.25*Math.sin(Ee*Math.PI)},Ro),await S.wait(.3);let ve=y.addTemp(yn("clues","coffin").clone());ve.position.set(y.L.rug.x,-.4,y.L.rug.z),ve.scale.setScalar(.62),ve.rotation.y=.4,S.tween(.6,Ee=>{ve.position.y=-.4+.42*Ee},Ro);for(let Ee=0;Ee<3;Ee++){let ke=y.addTemp(yn("clues","potion").clone());ke.position.set(y.L.rug.x+.9+Ee*.32,0,y.L.rug.z-.6+Ee*.2);let Xe=v(.9,"#ff2244");Xe.position.y=.4,ke.add(Xe)}let De=y.W({x:y.L.rug.x,z:y.L.rug.z});e.fx.emit("magic",De.x,.8,De.z,"#ff2244",30),e.flash(.55,"#d7263d"),S.sfx("seer"),d(S,De.x,1.2,De.z,3,2,.8,{x:0,z:1},.45),Y&&(Y.setBase("idle",.2),Y.playOnce("emote-no"))}else{let j=["bread","cheese","apple","mug"],ve=y.W({x:y.L.rug.x,z:y.L.rug.z});j.forEach((De,Ee)=>{let ke=yn("clues",De);if(!ke)return;let Xe=y.addTemp(ke.clone());Xe.position.set(y.L.rug.x-.5+Ee*.35,.02,y.L.rug.z+.2-Ee%2*.3),Xe.scale.setScalar(1.3)}),e.fx.emit("magic",ve.x,.6,ve.z,"#ffe08a",24),S.sfx("seer"),Y&&(Y.setBase("idle",.2),Y.playOnce("emote-yes"))}let W=y.shot("inside",e.rig.portrait),V=dt(W.look.x+(W.pos.x-W.look.x)*.78,W.look.y+(W.pos.y-W.look.y)*.8,W.look.z+(W.pos.z-W.look.z)*.78);S.shot(V,y.W({x:y.L.rug.x,y:.4,z:y.L.rug.z}),{fov:W.fov,k:2.5}),await S.wait(2.2)}),s.register("watch",async(S,E)=>{let z=(E.targets||[])[0];if(!z)return;let y=e.openRoom(z.id);if(!y){await S.wait(1.5);return}let R=y.shot("window",e.rig.portrait);S.cut(R.pos,R.look,{fov:R.fov});let U=e.playerById(e.meId());U&&y.addActor("gozcu",U.look,"",y.L.winOut,Math.PI/2).setBase("peek",0);let Y=(E.visitors||[]).map(Z=>e.playerById(Z)).filter(Boolean),ie=[{x:-1,z:-1.25},{x:-1.05,z:-.2},{x:-2.2,z:.85},{x:-1.4,z:.75},{x:-.5,z:-.7},{x:-2.9,z:.6}];if(!Y.length){await S.wait(2.2),e.diedTonight(z.id)?(e.flickerRoom(1.4),await S.wait(1.6)):await S.wait(1.4);return}let Q=ut(4/Y.length,.8,1.4);for(let Z=0;Z<Y.length;Z++){let W=Y[Z],V=y.addActor("v"+Z,W.look,W.name,y.L.doorStep,-Math.PI/2),j=ie[Z%ie.length];V.run([{walk:[y.W(y.L.doorIn),y.W(j)],mode:"walk"},{faceTo:y.W({x:y.L.sleeper.x,z:-1.3})},{pose:"idle"}]),S.sfx("door",{volume:.35}),await S.wait(Q)}await S.wait(1.6),e.diedTonight(z.id)?(e.flickerRoom(1.4),await S.wait(1.8)):await S.wait(1.2)})}var BS={fog:1,tint:"#ffffff",tintAmt:0,moon:"#eef2ff",stars:1,weather:"none",nightTint:!1,snow:!1,dress:null,lamp:null,fogTint:null},Eh={"sisli-vadi":{fog:.42,tint:"#9aa6b4",tintAmt:.24,stars:.5,weather:"fog",fogTint:"#b8c2cc"},"kanli-ay":{moon:"#ff5244",tint:"#7a1426",tintAmt:.28,nightTint:!0},"hasat-senligi":{tint:"#e7a24a",tintAmt:.13,weather:"leaves",dress:"harvest",lamp:"#ff9a30"},"kara-kis":{tint:"#cfdcff",tintAmt:.26,weather:"snow",snow:!0,fog:.75,moon:"#e6f0ff"},"veba-soylentisi":{tint:"#8e9a62",tintAmt:.32,fog:.55,stars:.6,weather:"fog",fogTint:"#a3ae7a",lamp:"#d8e070"},panayir:{tint:"#ffd0a0",tintAmt:.05,dress:"fair"}};Eh["panayir-haftasi"]=Eh.panayir;function Qg(s){return{...BS,...Eh[s]||{},id:Eh[s]?s:null}}var Ka=new X,HS=new X,Th=class{constructor(e){this.camera=e,this.scratch=e.clone(),this.W=1,this.H=1,this.insets={top:0,bottom:0,left:0,right:0},this.shot={target:new X,az:0,el:.8,dist:30,fov:40,points:null,minDist:8,maxDist:160,margin:.9},this.cur={target:new X,az:0,el:.8,dist:30,fov:40},this.user={az:0,el:0,zoom:1,idle:0,active:!1},this.override=null,this.ovW=0,this.ovPos=new X,this.ovLook=new X,this.snapNext=!0,this.fitTimer=0,this.limits={az:1.2,elMin:-.45,elMax:.5,zMin:.45,zMax:1.7}}setSize(e,t){this.W=Math.max(1,e),this.H=Math.max(1,t),this.applyView()}setInsets(e){this.insets={top:e.top||0,bottom:e.bottom||0,left:e.left||0,right:e.right||0},this.applyView()}get portrait(){return this.H>this.W*1.1}get rect(){let e=this.insets,t=Math.max(50,this.W-e.left-e.right),n=Math.max(50,this.H-e.top-e.bottom);return{x:e.left,y:e.top,w:t,h:n,cx:e.left+t/2,cy:e.top+n/2}}applyView(e=this.camera){let t=this.rect;e.aspect=t.w/t.h,e.setViewOffset(t.w,t.h,t.w/2-t.cx,t.h/2-t.cy,this.W,this.H),e.updateProjectionMatrix()}setShot(e){let t=this.shot;e.target&&t.target.copy(e.target),e.az!=null&&(t.az=e.az),e.el!=null&&(t.el=e.el),e.fov!=null&&(t.fov=e.fov),t.points=e.points||null,t.dist=e.dist||t.dist,t.margin=e.margin||.88,t.minDist=e.minDist||8,t.maxDist=e.maxDist||220,t.kind=e.kind||t.kind,t.speed=e.speed||2.2,e.points&&(t.dist=this.fit(t.target,t.az,t.el,t.fov,e.points,t.margin,t.minDist,t.maxDist)),e.snap&&(this.snapNext=!0)}fit(e,t,n,i,r,o,a,c){let l=this.scratch;l.fov=i,this.applyView(l);let h=HS.set(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)),u=a,f=c;for(let d=0;d<22;d++){let p=(u+f)/2;l.position.copy(e).addScaledVector(h,p),l.lookAt(e),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert();let v=!0;for(let m=0;m<r.length&&v;m++){if(Ka.copy(r[m]).applyMatrix4(l.matrixWorldInverse),Ka.z>-.5){v=!1;break}Ka.applyMatrix4(l.projectionMatrix),(Math.abs(Ka.x)>o||Math.abs(Ka.y)>o)&&(v=!1)}v?f=p:u=p}return f}drag(e,t){let n=this.user;n.az=ut(n.az-e*.006,-this.limits.az,this.limits.az),n.el=ut(n.el+t*.004,this.limits.elMin,this.limits.elMax),n.idle=0,n.active=!0}zoom(e){let t=this.user;t.zoom=ut(t.zoom*e,this.limits.zMin,this.limits.zMax),t.idle=0,t.active=!0}recenter(){this.user.active=!1,this.user.idle=999}get offset(){let e=this.user;return Math.abs(e.az)>.05||Math.abs(e.el)>.04||Math.abs(e.zoom-1)>.06}setOverride(e,t){if(!e){this.override=null,t&&(this.ovW=0);return}this.override||(this.ovPos.copy(this.camera.position),this.ovLook.copy(this.lookPoint||this.cur.target)),this.override=e,t&&(this.ovPos.copy(e.pos),this.ovLook.copy(e.look),this.ovW=1,this.ovFov=e.fov)}update(e,t){let n=this.shot,i=this.cur,r=this.user;if(r.idle+=e,r.idle>14||!r.active){let g=ln(r.active?1.2:3,e);r.az+=(0-r.az)*g,r.el+=(0-r.el)*g,r.zoom+=(1-r.zoom)*g,r.idle>14&&Math.abs(r.az)<.01&&Math.abs(r.zoom-1)<.01&&(r.active=!1)}this.fitTimer-=e,n.points&&n.dynamic&&this.fitTimer<=0&&(this.fitTimer=.25,n.dist=this.fit(n.target,n.az,n.el,n.fov,n.points,n.margin,n.minDist,n.maxDist));let o=this.snapNext?1:ln(n.speed||2.2,e);this.snapNext=!1,i.target.lerp(n.target,o),i.az+=cn(n.az-i.az)*o,i.el+=(n.el-i.el)*o,i.dist+=(n.dist-i.dist)*o,i.fov+=(n.fov-i.fov)*o;let a=i.az+r.az,c=ut(i.el+r.el,.12,1.45),l=i.dist*r.zoom,h=this.camera,u=i.target.x+Math.sin(a)*Math.cos(c)*l,f=i.target.y+Math.sin(c)*l,d=i.target.z+Math.cos(a)*Math.cos(c)*l,p=this.override?1:0;if(this.ovW+=(p-this.ovW)*ln(this.override?this.override.k||2.5:2,e),this.override){let g=ln(this.override.k||2.5,e);this.ovPos.lerp(this.override.pos,g),this.ovLook.lerp(this.override.look,g)}let v=this.ovW;h.position.set(u+(this.ovPos.x-u)*v,f+(this.ovPos.y-f)*v,d+(this.ovPos.z-d)*v),this.clampFn&&v<.5&&this.clampFn(h.position),this.lookPoint||(this.lookPoint=new X),this.lookPoint.copy(i.target).lerp(this.ovLook,v),h.lookAt(this.lookPoint);let m=i.fov+(this.override&&this.override.fov||i.fov)*0+((this.override&&this.override.fov||i.fov)-i.fov)*v;Math.abs(h.fov-m)>.01&&(h.fov=m,h.updateProjectionMatrix()),h.updateMatrixWorld(),!this.override&&this.ovW<.002&&(this.ovW=0)}};var GS=`
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
`,As=null,Ah=0;function VS(){Ah++,!As&&(As=document.createElement("style"),As.id="vkw-style",As.textContent=GS,document.head.appendChild(As))}function WS(){Ah--,Ah<=0&&As&&(As.remove(),As=null,Ah=0)}var Td=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bn=new X;function e0(s,e){VS();let t=document.createElement("div");t.className="vkw-ov",s.appendChild(t);let n=new Map,i=new Map,r=new Map,o=1,a=1,c=!1,l={top:0,bottom:0,left:0,right:0},h=0,u=document.createElement("button");u.className="vkw-recenter",u.type="button",u.title="G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla",u.setAttribute("aria-label","G\xF6r\xFCn\xFCm\xFC s\u0131f\u0131rla"),u.textContent="\u2316",u.addEventListener("click",B=>{B.stopPropagation(),e.onRecenter()});let f=document.createElement("button");f.className="vkw-camtoggle",f.type="button",f.hidden=!0;let d='<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/></svg>',p='<svg viewBox="0 0 24 24"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-6h6v6"/></svg>';f.addEventListener("click",B=>{B.stopPropagation(),e.onCamToggle&&e.onCamToggle()}),f.addEventListener("pointerdown",B=>B.stopPropagation()),t.appendChild(u),t.appendChild(f);function v(B,O){let L=0,J=0,S=0;B.addEventListener("pointerdown",E=>{L=E.clientX,J=E.clientY,S=performance.now(),E.stopPropagation()}),B.addEventListener("pointerup",E=>{E.stopPropagation(),Math.hypot(E.clientX-L,E.clientY-J)<12&&performance.now()-S<700&&O()}),B.addEventListener("click",E=>E.stopPropagation())}function m(B){let O=n.get(B);if(O)return O;let L=document.createElement("div");return L.className="vkw-tag",L.innerHTML='<span class="vkw-mark" hidden></span><span class="vkw-votes" hidden></span><span class="vkw-name"></span><span class="vkw-job" hidden></span>',t.insertBefore(L,u),O={el:L,mark:L.children[0],votes:L.children[1],name:L.children[2],job:L.children[3],sig:"",markSig:"",voteSig:"",cls:"",w:60,h:20,measured:!1,x:0,y:0,shown:!1},v(L,()=>e.onTagTap(B)),n.set(B,O),O}function g(B){let O=i.get(B);if(O)return O;let L=document.createElement("div");return L.className="vkw-plaque",t.insertBefore(L,t.firstChild),O={el:L,sig:"",cls:"",shown:!1},v(L,()=>e.onPlaqueTap(B)),i.set(B,O),O}function M(B,O){let L=m(B),J=O.name+"|"+O.job+"|"+O.color+"|"+O.badges;J!==L.sig&&(L.sig=J,L.name.innerHTML=`<i style="background:${Mn[O.color]||"#999"}"></i>${O.badges?`<span>${O.badges}</span>`:""}<span>${Td(O.name)}</span>`,L.job.textContent=O.job||"",L.jobText=O.job||"",L.measured=!1);let S=O.mark?O.mark.label+O.mark.color:"";S!==L.markSig&&(L.markSig=S,L.mark.hidden=!O.mark,O.mark&&(L.mark.textContent=O.mark.label,L.mark.style.setProperty("--c",O.mark.color)),L.measured=!1);let E=O.votes?O.votes.total+":"+O.votes.dots.join(","):"";E!==L.voteSig&&(L.voteSig=E,L.votes.hidden=!O.votes,O.votes&&(L.votes.innerHTML=`<b>${O.votes.total}</b>`+O.votes.dots.map(R=>`<i style="background:${R.color}">${R.w>1?"2":""}</i>`).join("")),L.measured=!1);let z=!!L.jobText&&(!c||O.picked||O.hover);L.job.hidden===z&&(L.job.hidden=!z,L.measured=!1);let y="vkw-tag"+(c?" cmp":"")+(O.me?" me":"")+(O.off?" off":"")+(O.dead?" dead":"")+(O.sel?" sel":"")+(O.picked?" picked":"")+(O.hover?" hover":"");y!==L.cls&&(L.cls=y,L.el.className=y),O.selColor&&L.el.style.setProperty("--c",O.selColor),L.data=O}function P(B,O){let L=g(B),J=O.name+"|"+O.color+"|"+(O.mark?O.mark.label:"");J!==L.sig&&(L.sig=J,L.el.innerHTML=`<i style="background:${Mn[O.color]||"#c9b48a"}"></i><span>${Td(O.name)}</span>${O.mark?`<em style="font-style:normal;font-size:10.5px;padding:0 4px;border-radius:4px;background:rgba(0,0,0,.35);color:#fff">${Td(O.mark.label)}</em>`:""}`);let S="vkw-plaque"+(O.sel?" sel":"")+(O.picked?" picked":"")+(O.dim?" dim":"")+(O.dead?" dead":"");S!==L.cls&&(L.cls=S,L.el.className=S),O.selColor&&L.el.style.setProperty("--c",O.selColor),L.data=O}function b(B,O){for(let[L,J]of B)O.has(L)||(J.el.remove(),B.delete(L))}function T(B,O,L){let J=r.get(B);if(!J){let S=document.createElement("div");S.className="vkw-bubble",t.insertBefore(S,u),J={el:S,until:0,h:30},r.set(B,J)}J.el.textContent=O.length>90?O.slice(0,88)+"\u2026":O,J.el.dataset.ch=L||"genel",J.el.classList.add("show"),J.until=performance.now()+3200+Math.min(3e3,O.length*45),J.h=0,J.seq=++h}let C=[],x=(B,O)=>B.prio-O.prio,_=[],N=[];function I(B,O,L,J){var Y,ie,Q,Z;let S=_;S.length=0;for(let[W,V]of n){if(!(O(W,bn)&&J(W))){V.shown&&(V.el.style.transform="translate3d(-9999px,0,0)",V.shown=!1),V.vis=!1;continue}if(V.dist=bn.distanceTo(B.position),bn.project(B),bn.z>1||bn.x<-1.2||bn.x>1.2||bn.y<-1.2||bn.y>1.3){V.shown&&(V.el.style.transform="translate3d(-9999px,0,0)",V.shown=!1),V.vis=!1;continue}V.measured||(V.w=V.el.offsetWidth||60,V.h=V.el.offsetHeight||20,V.measured=!0),V.sx=(bn.x*.5+.5)*o,V.sy=(-bn.y*.5+.5)*a,V.depth=bn.z,V.vis=!0,S.push(V)}for(let W of S)W.prio=(W.data&&(W.data.me||W.data.picked||W.data.mark||W.data.votes)?0:1)*1e3+W.dist;S.sort(x),C.length=0;let E=S.length>6;for(let W of S){let V=W.sx-W.w/2,j=W.sy-W.h,ve=0;for(let at=0;at<6;at++){let Qe=!1;for(let Lt of C)V<Lt.x+Lt.w-2&&V+W.w>Lt.x+2&&j<Lt.y+Lt.h-1&&j+W.h>Lt.y+1&&(j=Lt.y-W.h-1,Qe=!0);if(!Qe)break;ve++}let De=W.data&&(W.data.me||W.data.sel||W.data.picked||W.data.mark||W.data.votes),Ee=E&&!De&&(W.dist>15||ve>0),ke=E&&!De&&ve>=3||!De&&j<l.top+2,Xe=(Ee?" far":"")+(ke?" gone":"");if(Xe!==W.fc&&(W.fc=Xe,W.el.classList.toggle("far",Ee),W.el.classList.toggle("gone",ke),W.measured=!1),ke){W.x=-1e4,W.y=-1e4;continue}V=Math.max(l.left+2,Math.min(o-l.right-W.w-2,V)),j=Math.max(l.top+2,Math.min(a-l.bottom-W.h-2,j)),C.push({x:V,y:j,w:W.w,h:W.h,t:W}),W.x=V,W.y=j,(!W.shown||Math.abs(V-((Y=W.wx)!=null?Y:-1e4))>.4||Math.abs(j-((ie=W.wy)!=null?ie:-1e4))>.4)&&(W.el.style.transform=`translate3d(${V.toFixed(1)}px,${j.toFixed(1)}px,0)`,W.wx=V,W.wy=j);let Ke=10+Math.round((1-W.depth)*1e3);Ke!==W.wz&&(W.el.style.zIndex=String(Ke),W.wz=Ke),W.shown=!0}let z=performance.now(),y=[];for(let[W,V]of r){let j=n.get(W);if(z>V.until&&V.el.classList.contains("show")&&V.el.classList.remove("show"),!j||!j.vis||z>V.until+400){V.el.style.transform="translate3d(-9999px,0,0)";continue}V.h||(V.h=V.el.offsetHeight||30,V.w=V.el.offsetWidth||100),y.push({b:V,t:j})}y.sort((W,V)=>V.b.seq-W.b.seq);let R=[];y.forEach(({b:W,t:V},j)=>{let ve=Math.max(l.left+4,Math.min(o-l.right-W.w-4,V.sx-W.w/2)),De=V.y-W.h-8;for(let Ee=0;Ee<6;Ee++){let ke=!1;for(let Xe of R)ve<Xe.x+Xe.w&&ve+W.w>Xe.x&&De<Xe.y+Xe.h+4&&De+W.h+4>Xe.y&&(De=Xe.y-W.h-6,ke=!0);for(let Xe of C)Xe.t!==V&&ve<Xe.x+Xe.w&&ve+W.w>Xe.x&&De<Xe.y+Xe.h+2&&De+W.h+2>Xe.y&&(De=Xe.y-W.h-4,ke=!0);if(!ke)break}De=Math.max(l.top+4,De),R.push({x:ve,y:De,w:W.w,h:W.h}),W.el.classList.toggle("old",j>=3),W.el.style.transform=`translate3d(${ve.toFixed(1)}px,${De.toFixed(1)}px,0)`,W.el.style.zIndex=String(2e3+(100-j))});let U=N;U.length=0;for(let[W,V]of i){if(!(L(W,bn)&&!(V.data&&V.data.hidden))){V.shown&&(V.el.style.transform="translate3d(-9999px,0,0)",V.shown=!1);continue}if(bn.project(B),bn.z>1||Math.abs(bn.x)>1.15||Math.abs(bn.y)>1.15){V.shown&&(V.el.style.transform="translate3d(-9999px,0,0)",V.shown=!1);continue}(!V.w||V.sigW!==V.sig+V.cls)&&(V.w=V.el.offsetWidth||70,V.h=V.el.offsetHeight||20,V.sigW=V.sig+V.cls),V.ax=(bn.x*.5+.5)*o,V.ay=(-bn.y*.5+.5)*a,V.px=V.ax,V.py=V.ay,U.push(V)}for(let W=0;W<5;W++){for(let V=0;V<U.length;V++){let j=U[V];for(let ve=V+1;ve<U.length;ve++){let De=U[ve],Ee=(j.w+De.w)/2+3-Math.abs(j.px-De.px),ke=(j.h+De.h)/2+2-Math.abs(j.py-De.py);if(Ee>0&&ke>0)if(ke<Ee){let Xe=(j.py<De.py?-1:1)*ke/2;j.py+=Xe,De.py-=Xe}else{let Xe=(j.px<De.px?-1:1)*Ee/2;j.px+=Xe,De.px-=Xe}}}for(let V of U){let j=V.px-V.ax,ve=V.py-V.ay,De=Math.hypot(j,ve);De>28&&(V.px=V.ax+j/De*28,V.py=V.ay+ve/De*28)}}for(let W of U){let V=Math.max(l.left+2,Math.min(o-l.right-W.w-2,W.px-W.w/2)),j=Math.max(l.top+2,Math.min(a-l.bottom-W.h-2,W.py-W.h/2));(!W.shown||Math.abs(V-((Q=W.wx)!=null?Q:-1e4))>.4||Math.abs(j-((Z=W.wy)!=null?Z:-1e4))>.4)&&(W.el.style.transform=`translate3d(${V.toFixed(1)}px,${j.toFixed(1)}px,0)`,W.wx=V,W.wy=j);let ve=W.data&&W.data.sel?"900":"5";ve!==W.wz&&(W.el.style.zIndex=ve,W.wz=ve),W.shown=!0}}function H(B,O){let L=document.createElement("div");L.className="vkw-ripple",L.style.left=B+"px",L.style.top=O+"px",t.appendChild(L),setTimeout(()=>L.remove(),600)}return{el:t,setSize(B,O){o=B,a=O;for(let L of n.values())L.measured=!1},setInsets(B){l={top:B.top||0,bottom:B.bottom||0,left:B.left||0,right:B.right||0}},setCompact(B){if(B!==c){c=B;for(let O of n.values())O.sig="",O.measured=!1}},setTag:M,setPlaque:P,bubble:T,project:I,ripple:H,tags:n,plaques:i,sync(B,O){b(n,B),b(i,O);for(let[L,J]of r)B.has(L)||(J.el.remove(),r.delete(L))},setCamToggle(B,O,L){if(f.hidden=!B,!B)return;let J=O==="follow"?"f":"o";if(f.dataset.m!==J){f.dataset.m=J,f.innerHTML=O==="follow"?p:d;let S=O==="follow"?"K\xF6ye genel bak\u0131\u015F":"Karakterini takip et";f.title=S,f.setAttribute("aria-label",S)}f.style.right=12+(L.right||0)+"px",f.style.bottom=60+(L.bottom||0)+"px"},setRecenter(B,O){u.classList.toggle("show",!!B),u.style.right=12+(O.right||0)+"px",u.style.bottom=12+(O.bottom||0)+"px"},hitTag(B,O){for(let L of n.values())if(!(!L.vis||!L.data||!L.data.sel)&&B>=L.x-6&&B<=L.x+L.w+6&&O>=L.y-6&&O<=L.y+L.h+6)return L;return null},clear(){for(let B of[n,i,r]){for(let O of B.values())O.el.remove();B.clear()}},dispose(){t.remove(),WS()}}}var XS=`
.vkw-joy{position:absolute;width:112px;height:112px;border-radius:50%;pointer-events:auto;touch-action:none;
  background:radial-gradient(circle at 50% 50%,rgba(244,228,193,.10),rgba(21,18,43,.38) 70%);border:2px solid rgba(244,228,193,.35);
  box-shadow:0 2px 10px rgba(0,0,0,.35);opacity:0;transform:scale(.8);transition:opacity .25s,transform .25s;z-index:3000}
.vkw-joy.on{opacity:.9;transform:scale(1)}
.vkw-joy:not(.on){pointer-events:none}
.vkw-joy i{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;
  background:radial-gradient(circle at 40% 35%,#f4e4c1,#c9a96e);box-shadow:0 2px 6px rgba(0,0,0,.45);will-change:transform}
.vkw-joy.act{opacity:1;border-color:rgba(244,228,193,.7)}
`,Za=null;function qS(){Za||(Za=document.createElement("style"),Za.id="vkw-joy-style",Za.textContent=XS,document.head.appendChild(Za))}function t0(s,e={}){var N;qS();let t=(N=e.touch)!=null?N:navigator.maxTouchPoints>0||"ontouchstart"in window,n=document.createElement("div");n.className="vkw-joy",n.setAttribute("aria-hidden","true");let i=document.createElement("i");n.appendChild(i),s.appendChild(n);let r=42,o=!1,a=0,c=0,l=null,h=0,u=0,f=!1,d=new Set;function p(I,H){i.style.transform=`translate3d(${(I*r).toFixed(1)}px,${(-H*r).toFixed(1)}px,0)`}function v(I){if(!f||l!=null)return;I.preventDefault(),I.stopPropagation(),l=I.pointerId,n.setPointerCapture&&n.setPointerCapture(l);let H=n.getBoundingClientRect();h=H.left+H.width/2,u=H.top+H.height/2,n.classList.add("act"),m(I)}function m(I){if(I.pointerId!==l)return;I.preventDefault();let H=(I.clientX-h)/r,B=-(I.clientY-u)/r,O=Math.hypot(H,B);O>1&&(H/=O,B/=O);let L=Math.hypot(H,B);if(L<.12)a=0,c=0;else{let J=(L-.12)/.88/L;a=H*J,c=B*J}p(H,B)}function g(I){I.pointerId===l&&(l=null,a=0,c=0,p(0,0),n.classList.remove("act"))}n.addEventListener("pointerdown",v),n.addEventListener("pointermove",m),n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g);let M=I=>!!(I&&I.tagName&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.tagName==="SELECT"||I.isContentEditable)),P=I=>M(I)||M(document.activeElement),b={KeyW:"u",ArrowUp:"u",KeyS:"d",ArrowDown:"d",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};function T(I){if(!f||I.ctrlKey||I.metaKey||I.altKey||P(I.target))return;let H=b[I.code];H&&(d.add(H),I.code.startsWith("Arrow")&&I.preventDefault())}function C(I){let H=b[I.code];H&&d.delete(H)}let x=I=>{M(I.target)&&d.clear()};window.addEventListener("focusin",x);let _=()=>d.clear();return window.addEventListener("keydown",T),window.addEventListener("keyup",C),window.addEventListener("blur",_),{touch:t,vector(I){let H=a,B=c;if(d.size){H+=(d.has("r")?1:0)-(d.has("l")?1:0),B+=(d.has("u")?1:0)-(d.has("d")?1:0);let O=Math.hypot(H,B);O>1&&(H/=O,B/=O)}return I.x=H,I.y=B,I},setEnabled(I){I!==f&&(f=I,n.classList.toggle("on",I&&t&&!o),I||(d.clear(),a=0,c=0,l=null,p(0,0),n.classList.remove("act")))},place(I,H,B){let O=I.joystick,L,J,S;if(O===null){o=!0,n.classList.remove("on");return}o=!1,O&&O.size>0?(S=Math.max(88,Math.min(160,O.size)),L=O.left||0,J=B-(O.bottom||0)-S):(S=112,L=(I.left||0)+18,J=Math.max((I.top||0)+10,B-(I.bottom||0)-18-S)),n.style.left=L+"px",n.style.top=J+"px",n.style.width=n.style.height=S+"px";let E=Math.round(S*.41);i.style.width=i.style.height=E+"px",i.style.margin=-E/2+"px 0 0 "+-E/2+"px",r=S*.375,f&&n.classList.toggle("on",t)},get el(){return n},dispose(){window.removeEventListener("keydown",T),window.removeEventListener("keyup",C),window.removeEventListener("blur",_),window.removeEventListener("focusin",x),n.remove()}}}var n0=2.3;function Ja(s){return{r:Math.hypot(s.x,s.z),a:Math.atan2(s.x,s.z)}}function wr(s,e){return{x:Math.sin(s)*e,z:Math.cos(s)*e}}function YS(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=n*n+i*i;if(r<.01)return;let o=-(s.x*n+s.z*i)/r;if(o<=0||o>=1)return;let a=s.x+n*o,c=s.z+i*o,l=Math.hypot(a,c);if(l>=n0)return;let h=a,u=c;l<.01&&(h=-i,u=n);let f=Math.hypot(h,u)||1,d=n0+.25,p=n/Math.sqrt(r),v=i/Math.sqrt(r);t.push({x:h/f*d-p*1.2,z:u/f*d-v*1.2}),t.push({x:h/f*d+p*1.2,z:u/f*d+v*1.2})}function i0(s,e){let t=s[s.length-1];t&&YS(t,e,s),s.push({x:e.x,z:e.z})}function KS(s,e,t,n){let i=cn(t-e),r=Math.max(1,Math.ceil(Math.abs(i)/.22));for(let o=1;o<=r;o++)s.push(wr(e+i*o/r,n))}function Rh(s,e,t,n){let i=[{x:e.x,z:e.z}],r=s.Rr,o=r+.4,a=e,c=Ja(e).a;if(n!=null){let l=wr(n,r);i.push(l),a=l,c=n}else if(Ja(e).r>o){let l=Ja(e),h=wr(l.a,r);i.push(h),a=h,c=l.a}if(t.house){let l=t.angle,h=Math.abs(cn(l-c)),u=wr(l,r);if(Ja(a).r>r-.8&&h<1.4?KS(i,c,l,r):i0(i,u),t.peek){let d=t.house.peek,p=cn(Ja(d).a-l)>=0?1:-1,v=(t.halfWidth||3)+1.4,m=s.R,g=wr(l+p*(v/(m-2)),m-2.2),M=wr(l+p*(v/(m+1)),m+1.2),P=wr(l+p*((v-.6)/(m+3.4)),m+3.6);i.push(g,M,P,{x:d.x,z:d.z})}else i.push({x:t.house.approach.x,z:t.house.approach.z})}else i0(i,t);return i}function Ad(s,e,t){for(let n=0;n<e.length;n++){let i=e[n];if(i===t||i.tag===t)continue;let r=s.x-i.x,o=s.z-i.z,a=r*r+o*o,c=i.r+.32;if(a<c*c){let l=Math.sqrt(a)||.001;s.x=i.x+r/l*c,s.z=i.z+o/l*c}}}function Ch(s,e,t=.42){if(!e||!e.length||s.length<2)return s;let n=s;for(let i=0;i<3;i++){let r=[n[0]],o=!1;for(let a=1;a<n.length;a++){let c=r[r.length-1],l=n[a],h=l.x-c.x,u=l.z-c.z,f=h*h+u*u,d=null,p=1,v=0;if(f>1e-4)for(let m of e){if(m.tag==="fire")continue;let g=((m.x-c.x)*h+(m.z-c.z)*u)/f;if(g<=.02||g>=.98)continue;let M=c.x+h*g-m.x,P=c.z+u*g-m.z,b=Math.hypot(M,P);b<m.r+t&&g<p&&(d=m,p=g,v=b)}if(d){let m=c.x+h*p-d.x,g=c.z+u*p-d.z;v<.001&&(m=-u,g=h);let M=Math.hypot(m,g)||1,P=d.r+t+.25;r.push({x:d.x+m/M*P,z:d.z+g/M*P}),o=!0}r.push(l)}if(n=r,!o)break}return n}function Ih(s,e){let t={x:s.x,z:s.z};for(let n=0;n<3;n++)Ad(t,e,null);return t}var Ph=()=>typeof window!="undefined"&&window.VKRules||null;function Rs(s){let e=Ph();if(e&&e.action)return e.action(s);if(!s||!s.me)return null;let{room:t,me:n}=s;return t.phase==="night"&&n.alive&&s.night?"night":t.phase==="day"&&n.alive&&s.day?"vote":t.phase==="hunter"&&t.hunterId===n.id?"shoot":null}function ZS(s,e){let t=Ph();if(t&&t.witchBlocked)return t.witchBlocked(s,e);let n=s.night&&s.night.witch;return n?e==="poison"?n.poisonUsed:n.healUsed:!1}function s0(s,e,t){let n=Ph();if(n&&n.selectable)return!!n.selectable(s,e,t);let i=Rs(s);if(!i||!e||!e.alive||e.left)return!1;let r=s.me,o=e.id===r.id;if(i==="vote"||i==="shoot")return!o;switch(r.role){case"vampir":return!o&&!pd[e.role];case"iftiraci":return!o&&!pd[e.role];case"doktor":return!0;case"gozcu":return!0;case"kahin":return!o;case"cadi":return ZS(s,t)?!1:!(t==="poison"&&o);default:return!1}}function Co(s){let e=Ph();if(e&&e.visits&&s&&s.me&&s.me.alive)try{let o=e.visits(s);if(o instanceof Map){for(let[a,c]of o)a===c&&a!==s.me.id&&o.delete(a);return o}}catch{}let t=new Map,n=s&&s.night;if(!n||s.room.phase!=="night"||!s.me.alive)return t;let i=s.me,r=new Set(s.players.filter(o=>o.alive&&!o.left).map(o=>o.id));if(n.team)for(let o of n.team)o.targetId&&r.has(o.vampId)&&t.set(o.vampId,o.targetId);if(n.witch){let o=n.witch.poison||n.witch.heal;o&&t.set(i.id,o)}else n.mySelection&&i.role!=="vampir"&&t.set(i.id,n.mySelection);if(i.role==="vampir"&&n.framer){let o=s.players.find(a=>a.role==="iftiraci"&&a.alive);o&&t.set(o.id,n.framer)}for(let[o,a]of t)o===a&&o!==i.id&&t.delete(o);return t}function Lh(s,e,t){let{night:n,day:i,me:r,room:o}=s;if(n){if(n.witch){if(n.witch.poison===e.id)return hi.poison;if(n.witch.heal===e.id)return hi.heal;if((n.witch.victims||[]).includes(e.id))return{label:"\u{1FA78} Sald\u0131r\u0131 alt\u0131nda",color:"#d7263d"}}else if(n.mySelection===e.id&&hi[r.role])return hi[r.role];let a=(n.team||[]).filter(c=>c.targetId===e.id&&c.vampId!==r.id).map(c=>c.name);if(a.length)return{label:"\u{1F9DB} "+a.join(", "),color:"#d7263d"};if(r.role==="vampir"&&n.framer===e.id)return{label:"\u{1F3AD} \u0130ftira",color:"#b197fc"}}return i&&i.myVote===e.id?hi.vote:o.phase==="hunter"&&e.id===o.hunterId?{label:"\u{1F3F9} Ni\u015Fan al\u0131yor",color:"#ff8364"}:null}function $a(s,e){let{night:t,day:n}=s;return t?t.witch?t.witch.poison===e.id||t.witch.heal===e.id:t.mySelection===e.id:n?n.myVote===e.id:!1}function Rd(s,e){let t=Rs(s);return t==="vote"?hi.vote.color:t==="shoot"?hi.shoot.color:t==="night"?s.me.role==="cadi"?(e==="poison"?hi.poison:hi.heal).color:(hi[s.me.role]||hi.vote).color:"#f2c12e"}function r0(s){let e=new Map,t=null,n=new Map,i=-99,r=0;function o(p){for(let v of s.village.benchSlots)if(Math.hypot(p.x-v.x,p.z-v.z)<1.25)return v;return null}function a(p,v){let m=-p,g=-v,M=Math.hypot(m,g)||1,P=s.camera.position.x-p,b=s.camera.position.z-v,T=Math.hypot(P,b)||1;return Math.atan2(m/M*.45+P/T*.55,g/M*.45+b/T*.55)}function c(p){s.village.openDoor(p,1.3),s.sfxThrottled("door",.35)}function l(p,v,m,g){let M=s.village,P=M.layout;if(!P)return;let b=[];if(g){if(p.peeking=null,v.kind==="plaza"||v.kind==="gather")p.inside=null,p.pos.set(v.x,0,v.z),p.yaw=v.face!=null?v.face:a(v.x,v.z),p.faceYaw=p.yaw,p.setVisible(!0),p.run([{pose:v.pose||"idle",fade:0}]);else if(v.kind==="house"){let x=s.houseAnchors(v.house);if(!x)return;if(v.peek){p.inside=null;let _=Rh(P,x.approach,{house:x,angle:M.house(v.house).angle,peek:!0,halfWidth:M.house(v.house).info.hx});p.pos.set(x.peek.x,0,x.peek.z),p.yaw=Math.atan2(x.backWin.x-x.peek.x,x.backWin.z-x.peek.z),p.faceYaw=p.yaw,p.peeking=v.house,p.peekPath=_.slice(-5),p.setVisible(!0),p.run([{pose:"peek",fade:0}])}else p.inside=v.house,p.pos.set(x.inside.x,0,x.inside.z),p.setVisible(!1),p.run([{pose:"idle",fade:0}])}else v.kind==="gone"&&(p.setVisible(!1),p.run([]));return}if(v.kind==="gone"){p.visible&&(s.poofAt(p.pos.x,p.pos.z),p.setVisible(!1)),p.run([]);return}if(!p.visible&&!p.inside&&!p.peeking){if(v.kind==="plaza"||v.kind==="gather"){l(p,v,0,!0),s.fx.emit("magic",v.x,.8,v.z,"#f4e4c1",10);return}M.house(p.id)&&(p.inside=p.id)}m&&b.push({wait:m});let T={x:p.pos.x,z:p.pos.z},C=null;if(p.inside){let x=p.inside,_=s.houseAnchors(x),N=M.house(x);if(_&&N){if(v.kind==="house"&&v.house===x&&!v.peek)return;b.push({at:_.inside,face:_.rotY,snapFace:!0},{call:()=>c(x)},{wait:.12},{show:!0,call:I=>{I.inside=null}},{walk:[_.approach],mode:"walk"}),T=_.approach,C=N.angle}else p.inside=null}else if(p.peeking){if(v.kind==="house"&&v.peek&&v.house===p.peeking)return;let x=(p.peekPath||[]).slice().reverse();x.length>1&&(b.push({pose:"idle",fade:.2},{walk:x.slice(1),mode:"sneak",call:_=>{_.peeking=null}}),T=x[x.length-1]),p.peeking=null}if(v.kind==="plaza"||v.kind==="gather"){let x=Ih({x:v.x,z:v.z},s.obstacles),_=Ch(Rh(P,T,x,C).map((I,H,B)=>H>0&&H<B.length-1?Ih(I,s.obstacles):I),s.obstacles);_.shift(),_.length&&b.push({walk:_,mode:v.mode||"walk"});let N=v.face!=null?v.face:a(x.x,x.z);b.push({face:N}),v.pose?b.push({pose:v.pose}):b.push({pose:"idle"})}else if(v.kind==="house"){let x=v.house,_=s.houseAnchors(x),N=M.house(x);if(!_||!N)return;let I=Ch(Rh(P,T,{house:_,angle:N.angle,peek:!!v.peek,halfWidth:N.info.hx},C),s.obstacles);I.shift();let H=u(T,I)>12,B=v.mode||(H?v.house===p.id?"brisk":"sprint":"walk");if(v.peek){let O=I.slice(-2),L=I.slice(0,I.length-2);L.length&&b.push({walk:L,mode:B}),b.push({walk:O,mode:"sneak"}),b.push({faceTo:_.backWin},{pose:"peek",call:J=>{J.peeking=x,J.peekPath=I.slice(-5)}})}else{let O=v.budget;if(O!=null&&I.length){let L=u(T,I),J=Math.max(.6,O-(m||0)-1.4),S=L/J,E=S<2.4?"walk":S<3.4?"brisk":"sprint";if(S<=5)b.push({walk:I,mode:v.mode||E});else{let z=Math.max(.5,J-.5)*5,y=0,R=T,U=[];for(let Y of I){let ie=Math.hypot(Y.x-R.x,Y.z-R.z);if(y+ie>z)break;y+=ie,U.push(Y),R=Y}U.length&&b.push({walk:U,mode:"sprint"}),b.push({call:Y=>{s.fx.emit("mist",Y.pos.x,.6,Y.pos.z,"#c9c2d3",12)},hide:!0},{wait:.25},{at:_.approach,face:Math.atan2(_.door.x-_.approach.x,_.door.z-_.approach.z),snapFace:!0,show:!0,call:()=>s.fx.emit("mist",_.approach.x,.6,_.approach.z,"#c9c2d3",12)})}}else I.length&&b.push({walk:I,mode:B});b.push({faceTo:_.door},{wait:.05},{call:()=>c(x)},{wait:.15},{walk:[_.inside],mode:O!=null?"brisk":"walk"},{hide:!0,call:L=>{L.inside=x,n.set(x,s.time+9+Math.random()*4)}})}}p.run(b)}function h(p,v){if(!p.visible||p.inside||p.peeking||p.claimed||p.base==="sit"&&!v.pose)return!1;let m=v.x-p.pos.x,g=v.z-p.pos.z,M=Math.hypot(m,g);if(M>6)return!1;let P=m*m+g*g;if(P>1e-4){let C=-(p.pos.x*m+p.pos.z*g)/P;if(C=C<0?0:C>1?1:C,Math.hypot(p.pos.x+m*C,p.pos.z+g*C)<2.5)return!1}let b=Ih({x:v.x,z:v.z},s.obstacles);p.retargetAt=s.time;let T=[];if(M>.05){let C=Ch([{x:p.pos.x,z:p.pos.z},b],s.obstacles);C.shift(),T.push({walk:C,mode:M>3?"brisk":"walk"})}return T.push({wait:.5},{face:v.face!=null?v.face:a(b.x,b.z)},{pose:v.pose||"idle"}),p.run(T),!0}function u(p,v){let m=0,g=p;for(let M of v)m+=Math.hypot(M.x-g.x,M.z-g.z),g=M;return m}function f(p,v){let m=s.village,g=m.layout;if(!g||!p||!p.me)return;let{room:M,me:P,players:b}=p,T=M.phase,C=T==="reveal"||T==="night"||T==="day"||T==="hunter",x=!P.alive,_=T!==t;t=T;let N=Co(p),I=new Set(M.winners||[]),H=b.filter(E=>E.alive&&!E.left).sort((E,z)=>E.seat-z.seat).map(E=>E.id),B=Math.max(4.6,Math.min(7.5,g.Rp*.62)),O=E=>{let z=m.house(E.id),y=z?z.angle:E.seat/Math.max(1,b.length)*Ze;return{x:Math.sin(y)*B,z:Math.cos(y)*B,face:y+Math.PI}},L=new Map;if(T==="lobby"||T==="ended"){let E=[];for(let z of b){if(z.left)continue;let y=z.id===P.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,R=y?{x:y.x,z:y.z}:vh(g,z.pos?z.pos.x:.5,z.pos?z.pos.y:.8);E.push({id:z.id,x:R.x,z:R.z,fixed:!!y})}for(let z=0;z<4;z++)for(let y=0;y<E.length;y++)for(let R=y+1;R<E.length;R++){let U=E[y],Y=E[R],ie=Y.x-U.x,Q=Y.z-U.z,Z=Math.hypot(ie,Q);if(Z>=.95)continue;let W=Z>.001?ie/Z:1,V=Z>.001?Q/Z:0,j=(.95-Z)/2,ve=U.fixed?0:Y.fixed?2:1,De=Y.fixed?0:U.fixed?2:1;U.x-=W*j*ve,U.z-=V*j*ve,Y.x+=W*j*De,Y.z+=V*j*De}for(let z of E)L.set(z.id,{x:+z.x.toFixed(2),z:+z.z.toFixed(2)})}_&&T==="night"&&(i=s.time,r=s.leadInLeft?s.leadInLeft():3.6);let J=s.time-i,S=T==="night"&&J<r?Math.max(1,r-J):null;for(let E of b){let z=s.ensureChar(E);if(!z)continue;z.isMe=E.id===P.id;let y=!E.left&&(E.alive||T==="hunter"&&E.id===M.hunterId),R;if(!y)R={kind:"gone"};else if(T==="reveal"){let Z=H.indexOf(E.id),W=Math.max(H.length,1),V=Z/W*Ze+.3,j=4.3+(W>12?Z%2*1.3:0);R={kind:"gather",x:Math.sin(V)*j,z:Math.cos(V)*j,face:V+Math.PI,pose:"warm"}}else if(T==="night"){let Z=N.get(E.id);Z&&Z!==E.id&&m.house(Z)?R={kind:"house",house:Z,peek:z.isMe&&P.role==="gozcu"}:R={kind:"house",house:E.id}}else if(T==="day"||T==="hunter"){let Z=O(E);R={kind:"plaza",x:+Z.x.toFixed(2),z:+Z.z.toFixed(2),face:Z.face,pose:E.connected?null:"sit",ring:!0}}else{let Z=L.get(E.id)||vh(g,E.pos?E.pos.x:.5,E.pos?E.pos.y:.8),W=null,V=null,j=o(Z);E.connected?T==="ended"?W=I.has(E.id)?"cheer":null:j&&(W="sit",V=j.a+Math.PI):W="sit",R={kind:"plaza",x:Z.x,z:Z.z,pose:W,face:V}}S!=null&&R.kind==="house"&&(R.budget=S);let U=R.kind+":"+(R.house||"")+":"+(R.peek?"p":"")+":"+(R.x!=null?R.x.toFixed(2)+","+R.z.toFixed(2):"")+":"+(R.pose||""),Y=e.get(E.id),ie=v||z.fresh;if(z.claimed&&!ie){e.delete(E.id);continue}if(z.fresh=!1,z.isMe&&s.driving&&R.kind==="plaza"&&!ie)e.set(E.id,"drive");else if(Y!==U||ie){e.set(E.id,U);let Z=0;_&&!ie?T==="night"?Z=z.isMe?.2:Math.random()*1.6:T==="day"||T==="hunter"?Z=.3+Math.random()*2.2:T==="reveal"&&(Z=Math.random()*.8):Y&&Y.startsWith("house")&&R.kind==="house"&&T==="night"&&!ie&&(Z=.1),R.budget!=null&&(Z=z.isMe?.1:Math.random()*.5),!ie&&!_&&R.kind==="plaza"&&Y&&Y.startsWith("plaza")&&h(z,R)||l(z,R,Z,ie)}if(E.left?!1:!E.alive&&(C&&x||T==="ended")){let Z=s.ensureGhost(E);if(Z){let W=E.id===P.id&&s.localMove&&performance.now()<s.localMove.until?s.localMove:null,V=W?{x:W.x,z:W.z}:vh(g,E.pos?E.pos.x:.5,E.pos?E.pos.y:.8),j="g:"+V.x.toFixed(2)+","+V.z.toFixed(2);E.id===P.id&&s.driving&&!Z.fresh?e.set("g"+E.id,"drive"):(e.get("g"+E.id)!==j||Z.fresh)&&(e.set("g"+E.id,j),Z.fresh&&(Z.pos.set(V.x,0,V.z),Z.fresh=!1,Z.yaw=a(V.x,V.z),s.fx.emit("magic",V.x,1,V.z,"#d8d0ff",12)),Z.isMe=E.id===P.id,Z.run([{walk:[{x:V.x,z:V.z}],mode:"stroll"},{face:a(V.x,V.z)}]))}}else s.removeGhost(E.id)}for(let E of b){let z=m.house(E.id);if(z)if(T==="lobby"&&(z.flickOut=!1),z.dead=C||T==="ended"?(!E.alive||E.left)&&!(s.isHeldDeath&&s.isHeldDeath(E.id)):!1,T==="night"){let y=(n.get(E.id)||0)>s.time?1:0;for(let[,R]of N)R===E.id&&(y=Math.max(y,.8));m.setLit(E.id,y)}else m.setLit(E.id,1)}T!=="night"&&n.clear()}function d(p){if(!p||p.room.phase!=="night")return;let v=s.village,m=Co(p);for(let g of p.players){if(!v.house(g.id))continue;let M=(n.get(g.id)||0)>s.time?1:0;for(let[,P]of m)P===g.id&&(M=Math.max(M,.8));v.setLit(g.id,M)}}return{apply:f,tick:d,reset(){e.clear(),t=null,n=new Map},forget(p){e.delete(p),e.delete("g"+p)}}}var ja=[{h:0,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1},{h:3.6,top:"#121434",hor:"#2c2a60",sun:"#86a4ff",si:.72,sky:"#545ca4",gnd:"#1e1a38",hi:.68,stars:.95,lamps:1,fog:[30,175],fire:1},{h:5,top:"#28356e",hor:"#7a6a9a",sun:"#a0a8e8",si:.45,sky:"#6a74b0",gnd:"#2a2238",hi:.6,stars:.4,lamps:.8,fog:[35,190],fire:.9},{h:6.1,top:"#4a6fb0",hor:"#f2b08e",sun:"#ffb284",si:1.1,sky:"#a8b6e0",gnd:"#5c4a44",hi:.75,stars:0,lamps:.25,fog:[40,220],fire:.6},{h:8,top:"#4f95dc",hor:"#cfe4f2",sun:"#fff0d4",si:2.5,sky:"#c3dcff",gnd:"#6f6a3e",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:12,top:"#3f8ae0",hor:"#d3eaff",sun:"#fffaf0",si:2.8,sky:"#cfe4ff",gnd:"#727040",hi:1.05,stars:0,lamps:0,fog:[60,280],fire:.3},{h:15.8,top:"#4b8ad6",hor:"#ebdcc4",sun:"#ffe6b8",si:2.6,sky:"#cad8f2",gnd:"#75683c",hi:1,stars:0,lamps:0,fog:[55,260],fire:.35},{h:17.6,top:"#4a62ae",hor:"#ffbf80",sun:"#ffb066",si:2.1,sky:"#c0b0d8",gnd:"#6a4a36",hi:.85,stars:0,lamps:.15,fog:[48,240],fire:.5},{h:18.6,top:"#3a3f8a",hor:"#ff9468",sun:"#ff8a4c",si:1.35,sky:"#9a86c8",gnd:"#4a3038",hi:.7,stars:.05,lamps:.7,fog:[42,215],fire:.75},{h:19.5,top:"#252660",hor:"#b85f74",sun:"#e07a6a",si:.6,sky:"#6a5fa8",gnd:"#2a1c34",hi:.6,stars:.35,lamps:1,fog:[36,195],fire:.95},{h:20.6,top:"#15122b",hor:"#3a2a6b",sun:"#8fb4ff",si:.72,sky:"#5454a6",gnd:"#201a3a",hi:.68,stars:.9,lamps:1,fog:[30,180],fire:1},{h:24,top:"#0d0b20",hor:"#2a2357",sun:"#7f9fff",si:.78,sky:"#5258a8",gnd:"#1e1838",hi:.7,stars:1,lamps:1,fog:[30,175],fire:1}],o0=["top","hor","sun","sky","gnd"];for(let s of ja)for(let e of o0)s[e]=new Ne(s[e]);function a0(){return{h:12,top:new Ne,hor:new Ne,sun:new Ne,sky:new Ne,gnd:new Ne,si:1,hi:1,stars:0,lamps:0,fogNear:50,fogFar:250,fire:.5,sunDir:new X,moonDir:new X,lightDir:new X,sunVis:0,moonVis:0,night:0,dusk:0}}function $S(s,e){let t=(s-6)/12.9,n=(.5-t)*Math.PI*.95,i=Math.sin(ut(t,-.2,1.2)*Math.PI)*1;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),Math.cos(n)*Math.cos(i)*.9+.25).normalize(),e}function jS(s,e){let t=s-19.4;t<0&&(t+=24);let n=t/10.2,i=(.5-n)*Math.PI*.9,r=Math.sin(ut(n,-.2,1.2)*Math.PI)*.95;return e.set(Math.sin(i)*Math.cos(r)*.9,Math.sin(r),Math.cos(i)*Math.cos(r)*.6-.3).normalize(),e}var Dh=new X,Nh=new X;function l0(s,e){s=(s%24+24)%24,e.h=s;let t=0;for(;t<ja.length-2&&ja[t+1].h<=s;)t++;let n=ja[t],i=ja[t+1],r=Es(ut((s-n.h)/(i.h-n.h),0,1));for(let a of o0)e[a].copy(n[a]).lerp(i[a],r);e.si=n.si+(i.si-n.si)*r,e.hi=n.hi+(i.hi-n.hi)*r,e.stars=n.stars+(i.stars-n.stars)*r,e.lamps=n.lamps+(i.lamps-n.lamps)*r,e.fire=n.fire+(i.fire-n.fire)*r,e.fogNear=n.fog[0]+(i.fog[0]-n.fog[0])*r,e.fogFar=n.fog[1]+(i.fog[1]-n.fog[1])*r,$S(s,e.sunDir),jS(s,e.moonDir),e.sunVis=ut((e.sunDir.y+.06)/.12,0,1),e.moonVis=ut((e.moonDir.y+.04)/.12,0,1)*ut(1-e.sunVis*1.2,0,1);let o=ut((e.sunDir.y+.05)/.25,0,1);return e.night=1-o,e.dusk=ut(1-Math.abs(e.sunDir.y-.05)/.22,0,1),Dh.copy(e.sunDir),Dh.y=Math.max(Dh.y,.24),Nh.copy(e.moonDir),Nh.y=Math.max(Nh.y,.45),e.lightDir.copy(Dh.normalize()).multiplyScalar(o).addScaledVector(Nh.normalize(),1-o).normalize(),e}function c0(s,e,t,n){let i=e-s;for(;i>12;)i-=24;for(;i<-12;)i+=24;i<-3&&(i+=24);let r=Math.sign(i)*Math.min(Math.abs(i),Math.max(n*t,Math.abs(i)*(1-Math.exp(-1.2*t))));return((s+r)%24+24)%24}var Cs={saver:{name:"saver",px:.85,pxMobile:.75,shadows:0,fps:30,sparks:10,fireflies:0,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:120,animLod:2,labelHz:15,glows:.6},low:{name:"low",px:1,pxMobile:1,shadows:0,fps:60,sparks:20,fireflies:12,clouds:!1,blob:!0,charShadow:!1,shadowSize:0,weather:220,animLod:1,labelHz:30,glows:1},medium:{name:"medium",px:1.5,pxMobile:1.3,shadows:1,fps:60,sparks:44,fireflies:32,clouds:!0,blob:!0,charShadow:!1,shadowSize:1024,weather:480,animLod:1,labelHz:60,glows:1},high:{name:"high",px:2,pxMobile:1.75,shadows:2,fps:60,sparks:70,fireflies:56,clouds:!0,blob:!1,charShadow:!0,shadowSize:2048,weather:900,animLod:1,labelHz:60,glows:1}},Cd=["saver","low","medium","high"];function h0(s){return s?{trees:140,scatter:80,groundTex:1024}:{trees:260,scatter:170,groundTex:2048}}function u0(){let s=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile/i.test(s)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820}function f0(s){let e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;return s?e<=4||t<=3?"low":"medium":e<=2?"medium":"high"}var d0="vkw.quality.v2";function QS(){try{return JSON.parse(localStorage.getItem(d0)||"null")}catch{return null}}function ew(s){try{localStorage.setItem(d0,JSON.stringify(s))}catch{}}var Uh=class{constructor(e,t={}){this.noRetry=!!t.noRetry;let n=QS();if(this.fails={},n&&Array.isArray(n.failed))for(let i of n.failed)this.fails[i]=1;else if(n&&n.fails&&typeof n.fails=="object")for(let i of Object.keys(n.fails))Cs[i]&&(this.fails[i]=+n.fails[i]||0);this.level=n&&Cs[n.tier]?n.tier:e,this.remembered=!!(n&&Cs[n.tier]),this.reset()}get failed(){let e=this;return{clear(){e.fails={}},has:t=>(e.fails[t]||0)>=2}}reset(){this.buf=[],this.cpu=[],this.windowStart=0,this.bad=0,this.good=0,this.warm=0}persist(){ew({tier:this.level,fails:this.fails,at:Date.now()})}sample(e,t,n){if(e>250||(this.windowStart||(this.windowStart=n,this.warm=n+2500),n<this.warm)||(this.buf.push(e),this.cpu.push(t),n-this.windowStart<1e3))return null;let i=this.buf.slice().sort((m,g)=>m-g),r=this.cpu.slice().sort((m,g)=>m-g),o=i[Math.floor(i.length*.75)]||0,a=i[Math.floor(i.length*.9)]||0,c=r[Math.floor(r.length*.75)]||0;this.buf.length=0,this.cpu.length=0,this.windowStart=n;let h=Cs[this.level].fps===30,u=h?40:30,f=Cd.indexOf(this.level),d=o>u||a>u*1.8,p=h?a<36&&c<11:o<18&&a<26;if(d?(this.bad+=o>u*1.6?2:1,this.good=0):p?(this.good++,this.bad=0):(this.good=0,this.bad=Math.max(0,this.bad-1)),this.bad>=3&&f>0)return this.fails[this.level]=(this.fails[this.level]||0)+1,this.level=Cd[f-1],this.bad=0,this.good=0,this.warm=n+800,this.persist(),this.level;let v=Cd[f+1];return v&&this.good>=(this.fails[v]?30:12)&&(this.fails[v]||0)<(this.noRetry?1:2)?(this.level=v,this.good=0,this.warm=n+800,this.persist(),this.level):(this.good===5&&!this.remembered&&(this.remembered=!0,this.persist()),null)}},Fh=class{constructor(){this.scale=1,this.buf=[],this.cpu=[],this.t0=0,this.lastChange=0,this.goodFor=0}reset(){this.buf.length=0,this.cpu.length=0,this.t0=0,this.trial=null}sample(e,t,n,i){if(e>250||(this.t0||(this.t0=n),this.buf.push(e),this.cpu.push(t),n-this.t0<1e3))return null;let r=this.buf.slice().sort((h,u)=>h-u),o=r[Math.floor(r.length*.9)]||0,a=this.cpu.reduce((h,u)=>h+u,0)/this.cpu.length;if(this.buf.length=0,this.cpu.length=0,this.t0=n,this.trial&&n-this.trial.at>=1e3){let h=this.trial;if(this.trial=null,o>h.p90*.92)return this.scale=h.prev,this.lastChange=n+2e4,this.goodFor=0,this.scale}if(n-this.lastChange<1500)return null;let c=a<o*.55,l=this.min||.6;return o>i*1.2&&c&&this.scale>l+.001?(this.trial={at:n,p90:o,prev:this.scale},this.scale=Math.max(l,+(this.scale-.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):(o<i*.85?this.goodFor++:this.goodFor=0,this.goodFor>=4&&this.scale<1?(this.scale=Math.min(1,+(this.scale+.05).toFixed(2)),this.lastChange=n,this.goodFor=0,this.scale):null)}};function Id(){try{let e=document.createElement("canvas").getContext("webgl2"),t=!!e;if(e){let n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}return t}catch{return!1}}var p0=Array.from({length:9},(s,e)=>({id:"menu-"+e,seat:e}));function m0(s,e={}){if(!s)throw new Error("VKWorld: kapsay\u0131c\u0131 yok");if(!Id())throw new Error("VKWorld: WebGL2 desteklenmiyor");let t=e,n={renderScale:1},i=0,r=0,o=u0(),a=h0(o),c=document.createElement("div");c.className="vkw-root",s.appendChild(c);let l;try{l=new Mo({antialias:!o,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch{throw c.remove(),new Error("VKWorld: WebGL ba\u011Flam\u0131 a\xE7\u0131lamad\u0131")}l.outputColorSpace=Ot,l.toneMapping=gr,l.toneMappingExposure=1,l.shadowMap.type=dr;let h=l.domElement;h.setAttribute("aria-label","K\xF6y"),c.appendChild(h);let u=document.createElement("div");u.className="vkw-vignette",c.appendChild(u);let f=document.createElement("div");f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .6s;mix-blend-mode:screen",c.appendChild(f);let d=document.createElement("div");d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:#07050f",c.appendChild(d);function p(){p.enabled&&(d.style.transition="none",d.style.opacity="1",d.offsetWidth,d.style.transition="opacity .38s ease-out",d.style.opacity="0")}let v=new er;v.fog=new ia(2475,50,250);let m=new Qt(40,1,.3,900),g=new Th(m);g.clampFn=w=>{let G=y&&y.layout;if(!G||F!=="game")return;let K=Math.hypot(w.x,w.z),le=G.R-6.2;if(K>le&&K<G.R+6&&w.y<9.5){let me=le/K,de=Math.max(0,(w.y-7)/2.5),Se=me+(1-me)*de;w.x*=Se,w.z*=Se}};let M="auto",P=new Uh(f0(o),{noRetry:!o}),b=new Fh;n.renderScale=1;let T=Cs[P.level],C={...a,sparks:70,fireflies:56,clouds:T.clouds,trees:a.trees,scatter:a.scatter},x=new hr(16777215,4473924,1);v.add(x);let _=new si(16777215,2);_.shadow.bias=-6e-4,_.shadow.normalBias=.03,v.add(_),v.add(_.target);let N=new ur(16747050,20,17,1.5);N.position.set(0,1.4,0),v.add(N);let I=Pg(v,C),H=Dg(v,C),B=new ki("glow",128),O=new ki("pool",128),L=new ki("blob",64,yi),J=new ki("ring",48);for(let w of[O,L,J,B])v.add(w.mesh);let S=new Sh(160);v.add(S.normal.mesh),v.add(S.add.mesh);let E=Xg(C);v.add(E.group);let z=qg(56);v.add(z.points);let y=null,R=new Map,U=new Map,Y=new Set,ie=new Map,Q=0,Z=[],W=null,V=null,j=null,ve="",De=null,Ee=null,ke=0,Xe=null,Ke=new Set,at=1,Qe=!1,Lt=null,vt=null,wn=Kg(v),kt=new si(9417983,0);v.add(kt),v.add(kt.target);let ye=new Map;function Me(w,G){let K=(ye.get(w)||0)+1;ye.set(w,K),(K===1||K===50)&&console.warn("[VKWorld] "+w+" hatas\u0131 (yakaland\u0131, devam ediliyor):",G)}let ce={rig:g,camera:m,chars:R,scene:v,time:0,get village(){return y},fx:S,obstacles:[],localMove:null,sfx(w,G){try{window.VKAudio&&window.VKAudio.sfx&&window.VKAudio.sfx(w,G)}catch{}},sfxThrottled(w,G){let K=performance.now();(q[w]||0)+G*1e3>K||(q[w]=K,ce.sfx(w))},sfxStep(){ce.sfxThrottled("step",.32)},reapply(){A&&ee&&F==="game"&&wi(!1)},ticker:Z,assets:ws,get room(){return V},getState(){return ee},playerById(w){let G=ee&&ee.players.find(K=>K.id===w);return G?{id:G.id,look:G.look,name:G.name,role:G.role}:null},makeActor(w,G,K){let le="cine:"+ ++Q,me=new bi(ce,le,w,{ghost:K==="ghost"});return me.cineKey=le,v.add(me.root),ie.set(le,{ch:me,name:G||"",color:w.color|0}),G&&(Qe=!0),me},dropActor(w){ie.delete(w.cineKey),w.dispose(),Qe=!0},isDeadShown(w){let G=ee&&ee.players.find(K=>K.id===w);return!!(G&&ee.room.phase!=="lobby"&&(!G.alive||G.left)&&!(ee.room.phase==="hunter"&&ee.room.hunterId===w))},openRoom(w){return Po(w,"cine")},endCineRoom(){j==="cine"&&Ls()},setTodOverride(w,G){W=w,G&&w!=null&&(fe=w)},cineTint(){},moonOverride(w){De=w?new Ne(w):null},fogBoost(w){return at=w,()=>{at=1}},footDust(w,G){T.name!=="low"&&F==="game"&&S.emit("dust",w,.05,G,vt&&vt.snow?"#e8eef5":null,2)},houseAnchors(w){let G=y&&y.house(w);return G?y.anchors(G):null},layoutR(){return y&&y.layout?y.layout.R:15},meId(){return ee&&ee.me?ee.me.id:null},flickerRoom(w=1.4){Si={t:0,dur:w}},toon:!1,flickerHouse(w,G){y&&y.flicker(w,G)},diedTonight(w){if(Ee&&Ee.ids.includes(w)&&Date.now()-Ee.at<9e4)return!0;let G=ee&&ee.players.find(K=>K.id===w);return!!(G&&(!G.alive||Y.has(w))&&ee.room.phase!=="lobby"&&Ke.has(w))},leadInLeft(){let w=ee&&ee.room&&ee.room.timerFrom;return w?ut((w-(Date.now()+Vh))/1e3-.3,1.2,4.5):3.6},flash(w,G){if(!w){f.style.opacity="0";return}f.style.background=`radial-gradient(ellipse at 50% 50%, ${G||"#d7263d"}55, ${G||"#d7263d"}cc)`,f.style.opacity=String(w),clearTimeout(Pe),Pe=setTimeout(()=>{f.style.opacity="0"},380)},poofAt(w,G){S.emit("poof",w,.4,G,null,16),ce.sfxThrottled("poof",.2)},isHeldDeath(w){return Y.has(w)},holdDeaths(w){Y.clear();for(let G of w)Y.add(G)},releaseDeaths(){Y.size&&(Y.clear(),ce.reapply())},markDead(w,G={}){Y.delete(w);let K=R.get(w);K&&K.visible&&!K.claimed&&(G.quiet||ce.poofAt(K.pos.x,K.pos.z),K.setVisible(!1)),y&&y.setDead(w,!0,K?K.look.color:0,G.drop)},ensureChar(w){if(!A)return null;let G=R.get(w.id);return G?G.setLook(w.look):(G=new bi(ce,w.id,w.look),G.fresh=!0,R.set(w.id,G),v.add(G.root),lt(G)),G},ensureGhost(w){if(!zn("characters/ghost.glb"))return null;let G=U.get(w.id);return G||(G=new bi(ce,w.id,w.look,{ghost:!0}),G.fresh=!0,U.set(w.id,G),v.add(G.root)),G},removeGhost(w){let G=U.get(w);G&&(G.dispose(),U.delete(w))}},q={},Pe=0,re=e0(c,{onTagTap(w){Jt(w,!0)},onPlaqueTap(w){xe.has(w)&&Tt(w)},onRecenter(){Vd()},onCamToggle(){Wd()}}),_e=t0(c,{}),ae=$g(ce);jg(ae,ce);let Ue=r0(ce),ee=null,Fe={},F="menu",A=!1,te=!1,be="",xe=new Set,Ae=new Set,Ie=null,fe=18.3,ge=18.3,pe=a0(),k={fog:1,tint:new Ne("#ffffff"),tintAmt:0,moon:new Ne("#eef2ff"),stars:1,weather:"none"},se=new Ne,ne=!0,Te=0,Re=new X,we=1,He=1,nt=1,Le={top:0,bottom:0,left:0,right:0};function lt(w){w.model.traverse(G=>{G.isMesh&&(G.castShadow=T.charShadow)})}let yt=null;function Ge(w){yt=w}function Ft(){yt!=null&&(l.setPixelRatio(yt),l.setSize(we,He,!1),yt=null)}let qt=0;function Zn(w,G=!0){T=Cs[w];let K=window.devicePixelRatio||1;nt=Math.min(K,o?T.pxMobile:T.px),ce.toon&&o&&(nt=Math.max(nt,Math.min(K,1))),b.min=ce.toon&&o?Math.min(1,1/nt):.6,(n.renderScale||1)<b.min&&(n.renderScale=Math.max(b.min,n.renderScale||1),b.scale=n.renderScale),Ge(nt*(n.renderScale||1)),qt=ce.toon?0:T.shadows||(o?0:1);let le=qt>0;if(l.shadowMap.enabled!==le&&(l.shadowMap.enabled=le,v.traverse(me=>{me.material&&(Array.isArray(me.material)?me.material:[me.material]).forEach(de=>{de.needsUpdate=!0})})),_.castShadow=le,le){let me=T.shadowSize||1024;_.shadow.mapSize.x!==me&&(_.shadow.mapSize.set(me,me),_.shadow.map&&(_.shadow.map.dispose(),_.shadow.map=null)),l.shadowMap.autoUpdate=qt===2}for(let me of R.values())lt(me);if(C.clouds=T.clouds,ne=!0,G&&t.onQuality)try{t.onQuality(w)}catch{}}function Ps(){let w=c.getBoundingClientRect();we=Math.max(1,Math.round(w.width)),He=Math.max(1,Math.round(w.height)),l.setSize(we,He,!1),g.setSize(we,He),re.setSize(we,He),_e.place(Le,we,He),oe(!0)}let hs=null;window.ResizeObserver&&(hs=new ResizeObserver(()=>Ps()),hs.observe(c));let Er=()=>Ps();window.addEventListener("resize",Er),window.addEventListener("orientationchange",Er),Zn(P.level,!1),Ps();let Qa=Eo.chars.length+Eo.village.length;br(["village","chars"],(w,G)=>{if(!te&&t.onProgress)try{t.onProgress(w,G)}catch{}}).then(()=>{if(!te){if(Bi(),Tr(),A=!0,t.style==="toon")try{Bs.setStyle("toon")}catch(w){Me("g\xF6r\xFCn\xFCm",w)}if(ee&&F==="game"&&wi(!0),t.onReady)try{t.onReady()}catch{}return br(["extra"]).then(()=>{if(!te)return y.onExtraLoaded(),Tr(),ee&&wi(!1),br(["cine"]).then(()=>{te||(V||(V=Ed(ce)),Tr(!0))})})}}).catch(w=>{if(console.error("[VKWorld] varl\u0131klar y\xFCklenemedi",w),t.onError)try{t.onError(w)}catch{}});function Tr(w){try{let G=[],K=de=>de.traverse(Se=>{Se.visible||(Se.visible=!0,G.push(Se))});K(v);let le=[];if(V&&V.group&&(V.group.parent||v.add(V.group),K(V.group)),w)for(let de of["props/village.glb","props/graveyard.glb","interior/furniture.glb","interior/clues.glb","characters/ghost.glb","characters/vampire.glb","characters/bat.glb"]){let Se=ci(de);Se&&le.push(Se.scene)}let me=()=>{for(let de of G)de.visible=!1};if(l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")){let de=[l.compileAsync(v,m)];for(let Se of le)de.push(l.compileAsync(Se,m,v));me(),Promise.all(de).catch(()=>{})}else{l.compile(v,m);for(let de of le)l.compile(de,m,v);me()}}catch(G){Me("\xF6n derleme",G)}}function Bi(){y=Gg(v,C,null,H),Hi(F==="menu"||!ee?null:ee),z.place(8,40),oe(!0)}function Hi(w){let G,K=null;if(!w||F==="menu")G=p0;else{let Se=w.room.phase==="lobby";G=w.players.filter(tt=>!(Se&&tt.left)).map(tt=>{var Je;return{id:tt.id,seat:(Je=tt.seat)!=null?Je:0}}),K=w.me?w.me.id:null,G.length||(G=p0)}let le=G.map(Se=>Se.id+"@"+Se.seat).join(",")+"|"+K;if(le===be)return!1;let me=!!be&&w&&w.room.phase==="lobby"&&F==="game"&&!be.startsWith("menu-");be=le;let de=Ug(G,K);y.setLayout(de,me),Io(de),z.place(de.Rp+1,de.R+14),ne=!0,me||Ue.reset();for(let Se of R.values())me||(Se.fresh=!0);return!0}function Io(w){let G=[{x:0,z:0,r:1.6,tag:"fire"}];for(let K of y.benchSlots){let le=Math.cos(K.a),me=-Math.sin(K.a);for(let de of K.small?[-.45,.45]:[-.85,0,.85])G.push({x:K.x+le*de,z:K.z+me*de,r:.3,tag:"bench"})}for(let K of y.lampList())K.small||G.push({x:K.x,z:K.z,r:.35,tag:"lamp"});ce.obstacles=G}let Si=null;function Ar(w){if(!Si)return 1;Si.t+=w;let G=Si.t,K=Si.dur;if(G>=K)return .12;let le=Math.floor(G/.07);return Math.abs(Math.sin(le*12.9898+3.1)*43758.5453)%1>.12+.75*(G/K)?1-.4*(G/K):.06}function Po(w,G){if(V||(V=Ed(ce)),!V.ready)return null;let K=ce.playerById(w)||{id:w,look:{color:0,hat:0,skin:0},name:""};return V.hide(),V.show(K),j=G,Qe=!0,p(),V}function Ls(){V&&V.hide();let w=j;j=null,Si=null,ve="",w&&((w==="cine"||!ae.running)&&g.setOverride(null,!0),p()),Qe=!0}function Ds(){if(!ee||F!=="game"||!A||ae.running)return null;let{room:w,me:G}=ee;if(w.phase!=="night"||!G.alive)return null;let K=R.get(G.id);return K?K.inside&&K.inside!==G.id&&y.house(K.inside)?{mode:"visit",house:K.inside}:K.peeking&&y.house(K.peeking)?{mode:"window",house:K.peeking}:null:null}function kh(w,G){let K=V.L,le=de=>V.W(de),me=[K.bedside,K.bedside2,{x:-1.6,z:.9}][G%3];switch(w){case"vampir":return[{walk:[le(me)],mode:"sneak"},{faceTo:le({x:K.sleeper.x,z:-1.4})},{pose:"loom"},{wait:2.2+Math.random()},{once:"attack-melee-right",opts:{timeScale:.45}},{wait:1.5}];case"doktor":return[{walk:[le(K.bedfoot)],mode:"walk"},{faceTo:le({x:K.sleeper.x,z:-1.6})},{pose:"hold"},{wait:3.5},{once:"interact-left",opts:{timeScale:.6}},{wait:2}];case"kahin":return[{walk:[le({x:-1.9,z:1.25})],mode:"sneak"},{faceTo:le(K.bookcase)},{once:"pick-up",opts:{timeScale:.7}},{walk:[le({x:-.3,z:-1.7})],mode:"sneak"},{faceTo:le({x:-.3,z:-2.8})},{once:"interact-right",opts:{timeScale:.7}},{walk:[le({x:1.5,z:-.6})],mode:"sneak"},{faceTo:le({x:1.6,z:-1.5})},{once:"interact-left",opts:{timeScale:.7}}];case"cadi":return[{walk:[le(me)],mode:"sneak"},{faceTo:le({x:K.sleeper.x,z:-1.3})},{pose:"hold"},{wait:1.8},{once:"interact-right",opts:{timeScale:.5}},{wait:1.8}];case"iftiraci":return[{walk:[le({x:-.3,z:-1.75})],mode:"sneak"},{faceTo:le({x:-.3,z:-2.8})},{pose:"peek"},{wait:1.2},{once:"pick-up",opts:{timeScale:.6}},{wait:1.6}];default:return[{walk:[le(K.bedfoot)],mode:"walk"},{faceTo:le(K.bed)},{wait:3}]}}let el={doktor:["furniture","lantern",.55],cadi:["clues","potion",.75],iftiraci:["clues","key",.9]};function tl(w,G){let K=Po(w.house,w.mode);if(!K)return!1;let le=ee.me,me=ce.playerById(le.id),de=g.portrait;if(w.mode==="visit"){[{id:le.id,look:me.look,name:me.name,role:le.role},...G.map(Je=>{let it=ce.playerById(Je);return it?{id:Je,look:it.look,name:it.name,role:it.role||"vampir"}:null}).filter(Boolean)].forEach((Je,it)=>{let gt=K.addActor("a"+it,Je.look,Je.name,K.L.doorIn,-Math.PI/2);gt.roomRole=Je.role,gt.roomIndex=it;let ze=el[Je.role];if(ze){let st=yn(ze[0],ze[1]);if(st){let ft=st.clone();ft.userData.holdScale=ze[2]/2.8,gt.hold(ft,"right",[0,-.15,.06])}}});let tt=K.shot("inside",de);g.setOverride({pos:tt.pos,look:tt.look,fov:tt.fov,k:60},!0)}else{K.addActor("gozcu",me.look,"",K.L.winOut,Math.PI/2).setBase("peek",0);let tt=K.shot("window",de);g.setOverride({pos:tt.pos,look:tt.look,fov:tt.fov,k:60},!0)}return!0}function Bh(){if(!A||j==="cine")return;let w=Ds();if(w){let G=Co(ee),K=[];for(let[me,de]of G)de===w.house&&me!==ee.me.id&&K.push(me);let le=w.mode+":"+w.house+":"+K.join(",")+":"+(g.portrait?"p":"l");if(le!==ve&&tl(w,K)&&(ve=le),V&&w.mode==="visit")for(let me of V.actors.values())me.ch.busy||me.ch.run(kh(me.ch.roomRole,me.ch.roomIndex))}else(j==="visit"||j==="window")&&Ls()}function Ns(w){w!==Lt&&(Lt=w,vt=Qg(w),k.fog=vt.fog,k.tint.set(vt.tint),k.tintAmt=vt.tintAmt,k.moon.set(vt.moon),k.stars=vt.stars,k.weather=vt.weather,k.nightTint=!!vt.nightTint,wn.set(vt.weather),y&&y.setTheme(vt))}function Hh(w,G){if(!te&&(ee=w,Fe=G||{},!!A))try{wi(!1)}catch(K){Me("durum",K)}}function wi(w){if(!ee||F!=="game")return;let G=Hi(ee),{room:K,players:le}=ee;Ns(K.scenario&&K.phase!=="lobby"?K.scenario.id:null);let me=K.phase!=="lobby",de=new Set;for(let Se of le)de.add(Se.id),y.setOwner(Se.id,Se.look?Se.look.color:-1,Se.name),y.setDead(Se.id,me&&(!Se.alive||Se.left)&&!Y.has(Se.id),Se.look?Se.look.color:0);for(let[Se,tt]of R)de.has(Se)||(tt.dispose(),R.delete(Se),Ue.forget(Se));for(let Se of[...U.keys()])de.has(Se)||ce.removeGhost(Se);if(K.phase==="lobby")for(let Se of le)y.tombOf(Se.id)&&y.setDead(Se.id,!1);if(K.phase==="night"&&!Ke.size)for(let Se of le)Se.alive&&Ke.add(Se.id);if(K.phase!=="night"&&K.phase!=="day"&&K.phase!=="hunter"&&Ke.clear(),K.phase==="night"&&Xe!=="night"){Ke.clear();for(let Se of le)Se.alive&&Ke.add(Se.id)}Xe=K.phase,Ue.apply(ee,w||G&&K.phase!=="lobby"),xe=new Set(le.filter(Se=>s0(ee,Se,Fe.witchMode)).map(Se=>Se.id)),Ae=new Set(Co(ee).keys()),D(),oe(!1)}function D(){if(!ee)return;let{room:w,me:G,players:K,day:le}=ee,me=w.phase,de=Rs(ee),Se=Rd(ee,Fe.witchMode),tt=new Map(K.map(ze=>[ze.id,ze])),Je=new Set,it=new Set,gt=K.filter(ze=>!ze.left).length;re.setCompact(gt>7&&we<700||gt>12);for(let ze of K){let st=R.get(ze.id),ft=U.get(ze.id);if(st||ft){Je.add(ze.id);let Ce=null,rt=le&&le.votes&&le.votes[ze.id];rt&&rt.length&&(Ce={total:rt.reduce((En,Ti)=>En+(Ti.w||1),0),dots:rt.map(En=>({color:tt.get(En.id)?Mn[tt.get(En.id).look.color]:"#999",w:En.w||1}))});let St=(ze.isHost&&me==="lobby"?"\u{1F451}":"")+(!ze.connected&&!ze.left?"\u{1F4F4}":"")+(le&&le.sleeping&&le.sleeping.includes(ze.id)?"\u{1F4A4}":"")+(le&&le.voted&&le.voted.includes(ze.id)&&!(le.sleeping||[]).includes(ze.id)?"\u2714":""),pt=de!=="night"&&xe.has(ze.id);re.setTag(ze.id,{name:ze.name,job:ze.job&&ze.job.label?ze.job.label:"",color:ze.look.color,badges:St,me:ze.id===G.id,off:!ze.connected,dead:!ze.alive,sel:pt,picked:$a(ee,ze)&&de!=="night",hover:Ie===ze.id&&pt,selColor:Se,mark:de!=="night"?Lh(ee,ze,Fe.witchMode):me==="night"?null:Lh(ee,ze,Fe.witchMode),votes:Ce})}if(y.house(ze.id)){it.add(ze.id);let Ce=de==="night"&&xe.has(ze.id),rt=me==="lobby"||me==="night"&&de==="night"||me==="reveal";re.setPlaque(ze.id,{name:ze.name,color:ze.look.color,sel:Ce,picked:me==="night"&&$a(ee,ze),dim:!rt,hidden:!rt,dead:me!=="lobby"&&(!ze.alive||ze.left),selColor:Se,mark:me==="night"?Lh(ee,ze,Fe.witchMode):null})}}for(let[ze,st]of ie)st.name&&(Je.add(ze),re.setTag(ze,{name:st.name,job:"",color:st.color,badges:"",me:!1}));if(ce.room&&j){for(let[ze,st]of ce.room.actors)if(st.name){let ft="room:"+ze;Je.add(ft),re.setTag(ft,{name:st.name,job:"",color:st.color,badges:"",me:!1})}}re.sync(Je,it),Qe=!1}let $=[];for(let w=0;w<64;w++)$.push(new X);let he="";function oe(w){if(!y||!y.layout){g.setShot({target:new X(0,1,0),az:.4,el:.35,dist:45,fov:42,snap:w});return}let G=y.layout,K=g.portrait,le=ee&&F==="game"?ee.room.phase:"menu",me=ee&&F==="game"?Rs(ee):null,de;le==="menu"?de="menu":le==="night"?de=me==="night"?"overview":"sleep":le==="reveal"?de="gather":Hd()?de="follow":de="plaza";let Se=de!==he;he=de,Se&&(g.recenter(),de==="follow"&&(We.init=!1));let tt=g.shot;if(de==="follow"){let Je=0,it=G.R+3.6;for(let gt=0;gt<24;gt++){let ze=gt/24*Ze;$[Je++].set(Math.sin(ze)*it,0,Math.cos(ze)*it)}We.ovDist=g.fit(kd,We.az,K?1.15:.98,40,$.slice(0,Je),.94,8,220),tt.dynamic=!1,tt.points=null,(Se||w)&&Xd(0,!0);return}if(de==="menu"){let Je=G.Rp+(K?3.5:2.5);g.setShot({kind:de,target:new X(0,K?3.4:3,0),az:tt.az,el:K?.2:.16,dist:Je,fov:K?64:50,speed:1.2}),tt.dynamic=!1}else if(de==="overview"||de==="sleep"){let Je=0,it=G.R+3.6;for(let ze=0;ze<24;ze++){let st=ze/24*Ze;$[Je++].set(Math.sin(st)*it,0,Math.cos(st)*it),$[Je++].set(Math.sin(st)*G.R,4.5,Math.cos(st)*G.R)}let gt=de==="overview"?K?1.2:.98:K?.95:.62;g.setShot({kind:de,target:new X(0,0,de==="overview"?0:-G.R*.08),az:de==="sleep"?.25:0,el:gt,fov:40,points:$.slice(0,Je),margin:de==="overview"?.94:1.04,snap:w,speed:1.6}),tt.dynamic=!1}else{let Je=$,it=0,gt=de==="gather"?5.6:3.2;for(let st=0;st<8;st++){let ft=st/8*Ze;Je[it++].set(Math.sin(ft)*gt,0,Math.cos(ft)*gt)}for(let st of R.values()){if(!st.visible||it>60)continue;let ft=st.path&&st.path.length?st.path[st.path.length-1]:st.pos;Math.hypot(ft.x,ft.z)>G.Rp+1.5||(Je[it++].set(ft.x,0,ft.z),Je[it++].set(ft.x,2.4,ft.z))}for(let st of U.values())it<62&&(Je[it++].set(st.pos.x,2.6,st.pos.z),Je[it++].set(st.pos.x,0,st.pos.z));let ze=de==="gather"?K?.6:.5:K?1.02:.66;g.setShot({kind:de,target:Jd(Je,it),az:0,el:ze,fov:K?44:38,points:Je.slice(0,it),margin:K?.92:.8,minDist:8,snap:w,speed:1.8}),tt.dynamic=!0,tt.points=Je.slice(0,it)}}let ue=new Sa,Be=new ht,qe=new X,Oe=new X,Ve=new Qn(new X(0,1,0),0);function et(w,G){return Be.set(w/we*2-1,-(G/He)*2+1),ue.setFromCamera(Be,m),ue.ray}function _t(w,G,K,le=34){let me=null,de=1/0;for(let[Se,tt]of R){if(!tt.visible||!K(Se)||(qe.set(tt.pos.x,.1,tt.pos.z).project(m),Oe.set(tt.pos.x,tt.headY,tt.pos.z).project(m),qe.z>1))continue;let Je=(qe.x*.5+.5)*we,it=(-qe.y*.5+.5)*He,gt=(Oe.x*.5+.5)*we,ze=(-Oe.y*.5+.5)*He,st=gt-Je,ft=ze-it,Ce=st*st+ft*ft||1,rt=ut(((w-Je)*st+(G-it)*ft)/Ce,0,1),St=Math.hypot(w-(Je+st*rt),G-(it+ft*rt)),pt=Math.max(le,Math.sqrt(Ce)*.55);St<pt&&St<de&&(de=St,me=Se)}return me}function Ct(w,G,K){let le=y.layout,me=null,de=1/0;for(let ft of y.houses.values()){if(ft.removing||K&&!xe.has(ft.id)||(qe.set(ft.cx,1.6,ft.cz).project(m),qe.z>1))continue;let Ce=(qe.x*.5+.5)*we,rt=(-qe.y*.5+.5)*He;Oe.set(ft.cx+Math.cos(ft.crot)*ft.info.hx,1.6,ft.cz-Math.sin(ft.crot)*ft.info.hx).project(m);let St=Math.max(26,Math.hypot((Oe.x*.5+.5)*we-Ce,(-Oe.y*.5+.5)*He-rt)*1.25),pt=Math.hypot(w-Ce,G-rt);pt<St&&pt<de&&(de=pt,me=ft)}if(me)return me.id;let Se=et(w,G),tt=y.pickHouse(Se);if(tt&&(!K||xe.has(tt.id)))return tt.id;let Je=Se.intersectPlane(Ve,qe);if(!Je)return null;let it=Math.hypot(Je.x,Je.z);if(it<le.Rp*.75||it>le.R+8)return null;let gt=Math.atan2(Je.x,Je.z),ze=null,st=1/0;for(let ft of y.houses.values()){if(K&&!xe.has(ft.id))continue;let Ce=Math.abs(((gt-ft.angle+Math.PI)%Ze+Ze)%Ze-Math.PI);Ce<st&&(st=Ce,ze=ft)}return ze&&st<le.step*.5?ze.id:null}function $e(w,G){if(!ee||F!=="game")return null;let K=Rs(ee);if(K==="night"){let le=Ct(w,G,!0);return le&&xe.has(le)?le:null}return K==="vote"||K==="shoot"?_t(w,G,le=>xe.has(le)):null}function Tt(w){if(t.onPick)try{t.onPick(w)}catch{}}function Jt(w,G){if(!ee)return;if(xe.has(w)){Tt(w);return}let K=ee.room.phase;w===ee.me.id&&(K==="lobby"||K==="ended")&&t.onSelf&&t.onSelf()}function Gt(w,G){if(!ee||F!=="game"||!A)return;let K=$e(w,G);if(K){Tt(K),re.ripple(w,G);return}let le=ee.room.phase,me=ee.me;if((le==="lobby"||le==="ended")&&_t(w,G,de=>de===me.id,26)){t.onSelf&&t.onSelf();return}if(le==="lobby"||le==="ended"){let de=et(w,G).intersectPlane(Ve,qe);if(!de)return;let Se=y.layout,tt=Math.hypot(de.x,de.z);if(tt>Se.R+4)return;let Je=Math.atan2(de.x,de.z);tt=ut(tt,Se.Rp*.2,Se.Rp*.96);let it=Math.sin(Je)*tt,gt=Math.cos(Je)*tt,ze=xd(Se,it,gt);if(ce.localMove={x:it,z:gt,until:performance.now()+1500},re.ripple(w,G),t.onMove)try{t.onMove(ze.x,ze.y)}catch{}wi(!1)}}let wt=new Map,Yt=!1,je=0,vn=0,Ut=0,Bn=0;function on(w){let G=c.getBoundingClientRect();return{x:w.clientX-G.left,y:w.clientY-G.top}}function Rr(w){if(w.target!==h)return;h.setPointerCapture&&h.setPointerCapture(w.pointerId);let G=on(w);if(wt.set(w.pointerId,G),wt.size===1&&(Yt=!1,je=performance.now(),vn=G.x,Ut=G.y),wt.size===2){let[K,le]=[...wt.values()];Bn=Math.hypot(K.x-le.x,K.y-le.y),Yt=!0}}function Ei(w){let G=on(w);if(!wt.has(w.pointerId)){w.pointerType==="mouse"&&Jn(G.x,G.y);return}let K=wt.get(w.pointerId);if(wt.set(w.pointerId,G),wt.size===1)!Yt&&Math.hypot(G.x-vn,G.y-Ut)>9&&(Yt=!0),Yt&&F==="game"&&(he==="follow"?M0(G.x-K.x,G.y-K.y):g.drag(G.x-K.x,G.y-K.y));else if(wt.size===2){let[le,me]=[...wt.values()],de=Math.hypot(le.x-me.x,le.y-me.y);Bn>0&&de>0&&F==="game"&&(he==="follow"?Gd(Bn/de):g.zoom(Bn/de)),Bn=de}}function Gi(w){if(!wt.has(w.pointerId))return;let G=on(w);wt.delete(w.pointerId),wt.size===0&&!Yt&&performance.now()-je<650&&Gt(G.x,G.y),wt.size<2&&(Bn=0)}function Nt(w){wt.delete(w.pointerId)}function hn(w){if(F!=="game")return;w.preventDefault();let G=Math.exp(ut(w.deltaY,-120,120)*.0015);he==="follow"?Gd(G):g.zoom(G)}function Jn(w,G){let K=$e(w,G);K!==Ie&&(Ie=K,h.style.cursor=K?"pointer":"",D())}h.addEventListener("pointerdown",Rr),h.addEventListener("pointermove",Ei),h.addEventListener("pointerup",Gi),h.addEventListener("pointercancel",Nt),h.addEventListener("pointerleave",w=>{w.pointerType==="mouse"&&Ie&&(Ie=null,D())}),h.addEventListener("wheel",hn,{passive:!1});let Wt=w=>w.preventDefault();h.addEventListener("contextmenu",Wt);let $t=document.hidden,Hn=!1,Lo=()=>{$t=document.hidden,$t||(No=performance.now(),P.reset(),il())};document.addEventListener("visibilitychange",Lo),h.addEventListener("webglcontextlost",w=>{w.preventDefault(),Hn=!0}),h.addEventListener("webglcontextrestored",()=>{Hn=!1,ne=!0,No=performance.now(),il()});function v0(){if(W!=null)return W;if(F!=="game"||!ee)return 18.35;let{room:w,day:G}=ee,K=Date.now()+(ee.serverNow,0),le=w.deadline?Math.max(0,w.deadline-(K+Vh))/1e3:null;switch(w.phase){case"lobby":return 15.2;case"reveal":return 20.2;case"night":{let me=w.settings&&w.settings.nightSec||30;return(21.2+(le==null?.3:ut(1-le/me,0,1))*7.6)%24}case"day":{let me=w.settings&&w.settings.daySec||120,de;return G&&G.shortened?(Do==null&&(Do=Gh,Dd=Math.max(1,le||10)),de=Do+(1-Do)*ut(1-(le||0)/Dd,0,1)):(Do=null,de=le==null?.2:ut(1-le/me,0,1)),Gh=de,7.4+de*11.6}case"hunter":return fe>19.5||fe<6?7.6:fe;case"ended":return w.winner==="vampir"?23:w.winner==="soytari"?18.5:9.5;default:return 17}}let Gh=0,Ld=-1,Do=null,Dd=10,Vh=0,nl=0,No=performance.now(),Nd=0,Uo=0,Gn={fps:0,ms:0,calls:0,tris:0,frames:0};function il(){!nl&&!te&&(nl=requestAnimationFrame(_0))}let Fo=240,sl=new Float32Array(Fo),Wh=new Float32Array(Fo),Oo=0,Us=0,Ud=new Float32Array(Fo);function zo(w,G){return Us?(Ud.set(w),+Ud.subarray(0,Us).sort()[Math.min(Us-1,Math.floor(G*(Us-1)))].toFixed(1)):0}function _0(w){if(nl=0,te||$t||Hn||(il(),we<2||He<2)||T.fps<=30&&w-Nd<1e3/30-4)return;let G=ut((w-No)/1e3,0,.1),K=w-No;No=w,Nd=w;let le=performance.now();try{y0(G)}catch(Se){Me("kare",Se)}Ft();let me=performance.now();try{l.render(v,m)}catch(Se){Me("\xE7izim",Se)}let de=performance.now();if(Gn.stepMs=(Gn.stepMs||0)*.9+(me-le)*.1,Gn.renderMs=(Gn.renderMs||0)*.9+(de-me)*.1,Gn.frames++,Uo+=K,Gn.cpu=de-le,sl[Oo]=K,Wh[Oo]=de-le,Oo=(Oo+1)%Fo,Us<Fo&&Us++,Uo>500&&(Gn.fps=Math.round(Gn.frames*1e3/Uo),Gn.ms=+(Uo/Gn.frames).toFixed(1),Gn.frames=0,Uo=0),Gn.calls=l.info.render.calls,Gn.tris=l.info.render.triangles,M==="auto"&&A){let Se=P.sample(K,de-le,w);Se&&Se!==T.name&&(Zn(Se),b.reset())}if(A&&!Hn){let Se=b.sample(K,de-le,w,T.fps===30?36:24);Se!=null&&(n.renderScale=Se,Ge(nt*Se))}}let ow=new Ne,Fd=new Ne(0,0,0),Xh=new Map;function Cr(w){return Xh.has(w)||Xh.set(w,new Ne(w)),Xh.get(w)}function y0(w){ce.time+=w;let G=ce.time;ge=v0(),fe=c0(fe,ge,w,F==="menu"?.6:1.3),l0(fe,pe);let K=ee&&F==="game"&&ee.room.phase==="ended"&&ee.room.winner==="vampir";se.copy(De||k.moon),K&&(se.set("#ff6a6a"),pe.sun.lerp(Cr("#ff5a6a"),.35));let le=k.tintAmt*(k.nightTint?pe.night:1);le>0&&(pe.top.lerp(k.tint,le),pe.hor.lerp(k.tint,le*.8),pe.sky.lerp(k.tint,le*.5),pe.gnd.lerp(k.tint,le*.3)),pe.night>.3&&pe.sun.lerp(se,(De||k.nightTint?.55:.3)*pe.night),pe.fogNear*=k.fog*at,pe.fogFar*=k.fog*at,pe.stars*=k.stars,v.fog.color.copy(pe.hor);let me=Math.max(0,g.cur.dist*g.user.zoom-28)*(1-.35*pe.night);v.fog.near=pe.fogNear+me*.9,v.fog.far=pe.fogFar+me*1.1,kt.intensity=.9*pe.night*(j?.4:1),kt.color.copy(se),kt.position.set(-m.position.x*.6,60,-m.position.z*.6-40),x.color.copy(pe.sky),x.groundColor.copy(pe.gnd),x.intensity=pe.hi,_.color.copy(pe.sun),_.intensity=pe.si,ce.toon&&(x.intensity*=1.3,_.intensity*=.75);let de=y&&y.layout,Se=de?de.R+14:40;if(_.position.copy(pe.lightDir).multiplyScalar(120),_.target.position.set(0,0,0),_.castShadow){let Ce=_.shadow.camera;Ce.right!==Se&&(Ce.left=-Se,Ce.right=Se,Ce.top=Se,Ce.bottom=-Se,Ce.near=20,Ce.far=260,Ce.updateProjectionMatrix(),ne=!0),Re.angleTo(pe.lightDir)>.0045&&(Re.copy(pe.lightDir),ne=!0)}let tt=.82+.1*Math.sin(G*13.1)+.06*Math.sin(G*23.7+1)+.05*Math.sin(G*5.3);if(j&&V){let Ce=j==="window"||ae.current&&ae.current.kind==="watch";if(Ce){let St=V.W({x:-2.4,y:2.3,z:-1.2});N.position.copy(St),x.color.lerp(se,.6),x.groundColor.lerp(se,.35),x.intensity=pe.hi+1.1}else{let St=V.lanternWorld();N.position.set(St.x,St.y+.9,St.z+.8)}let rt=Ar(w);N.intensity=(Ce?13:9+5*pe.night)*tt*rt,Si&&(x.intensity*=.3+.7*rt),N.distance=12}else N.intensity=(2+17*pe.night*pe.night)*pe.fire*tt,N.position.set(Math.sin(G*7)*.08,1.4,0),N.distance=17;E.update(G,nt,.75+.25*pe.fire),I.update(pe,G,m,nt,se),z.update(G,nt,T.fireflies?ut(pe.night*1.2-.2,0,1):0),u.style.opacity=String(.55+pe.night*.45+(j==="window"?.12:0));for(let Ce=Z.length-1;Ce>=0;Ce--){let rt=!0;try{rt=Z[Ce](w,G)}catch(St){Me("ticker",St)}rt&&Z.splice(Ce,1)}try{Bh()}catch(Ce){Me("i\xE7 mek\xE2n",Ce)}if(V&&V.visible)try{V.update(w,G)}catch(Ce){Me("oda",Ce)}for(let Ce of ie.values())try{Ce.ch.update(w,G)}catch(rt){Me("kopya",rt)}Qe&&ee&&F==="game"&&D(),wn.update(w,G,nt,g.cur.target,F==="game"||F==="menu"?T.weather:0,vt&&vt.fogTint?Cr(vt.fogTint):null,pe.night),y&&(y.update(w,G,pe)&&(ne=!0),y.version!==Ld&&y.layout&&(Ld=y.version,Io(y.layout)),i-=w,ee&&F==="game"&&i<=0&&(i=.25,Ue.tick(ee)));try{E0(w)}catch(Ce){Me("s\xFCr\xFC\u015F",Ce)}let Je=ce.obstacles,it=A0;it.length=0,$d.setFromProjectionMatrix(R0.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse));for(let Ce of R.values()){jd.center.set(Ce.pos.x,Ce.pos.y+.9,Ce.pos.z);let rt=Ce.visible&&$d.intersectsSphere(jd);Ce.animEvery=!Ce.visible||Ce.inside?-1:rt?1:4;try{Ce.update(w,G)}catch(St){Me("karakter",St),Od(Ce)}Ce.visible&&!Ce.claimed&&it.push(Ce)}for(let Ce of U.values())try{Ce.update(w,G)}catch(rt){Me("hayalet",rt),Od(Ce)}Pr&&T0();for(let Ce=0;Ce<it.length;Ce++){let rt=it[Ce];for(let St=Ce+1;St<it.length;St++){let pt=it[St],En=pt.pos.x-rt.pos.x,Ti=pt.pos.z-rt.pos.z,Pn=En*En+Ti*Ti;if(Pn<.72*.72&&Pn>1e-6){let Lr=Math.sqrt(Pn),Hs=(.72-Lr)*.5,al=En/Lr,ll=Ti/Lr,Gs=rt.speed>pt.speed?.75:.25;rt.pos.x-=al*Hs*Gs,rt.pos.z-=ll*Hs*Gs,pt.pos.x+=al*Hs*(1-Gs),pt.pos.z+=ll*Hs*(1-Gs)}}rt.peeking||Ad(rt.pos,Je,null)}B.begin(),O.begin(),L.begin(),J.begin(),B.add(0,1,0,3.4,Cr("#ff8a2a"),.55*pe.fire*tt),O.add(0,.04,0,13+3*pe.night,Cr("#ff7a1a"),(.18+.3*pe.night)*pe.fire*tt),y&&y.emitGlows(pe,G,B,O);let gt=ce.toon?.62:T.blob?.55:.32;if(ce.toon&&y)for(let Ce of y.houses.values())Ce.scale>.5&&L.add(Ce.cx,.03,Ce.cz,Ce.info.size*1.25*Ce.scale,Fd,.32);let ze=ee?Cr(Rd(ee,Fe.witchMode)):null,st=ee&&F==="game"?Rs(ee):null;for(let Ce of it)if(L.add(Ce.pos.x,.025,Ce.pos.z,1.05,Fd,gt),st&&st!=="night"&&xe.has(Ce.id)){let rt=ee&&$a(ee,{id:Ce.id});J.add(Ce.pos.x,.05,Ce.pos.z,rt?1.9:1.5,ze,rt?1:Ie===Ce.id?.95:.45,Ce.seed*6)}for(let Ce of U.values())B.add(Ce.pos.x,1.2,Ce.pos.z,2.2,Cr(Mn[Ce.look.color]),.22);if(st==="night"&&y)for(let Ce of xe){let rt=y.house(Ce);if(!rt)continue;let St=y.anchors(rt),pt=$a(ee,{id:Ce});J.add(St.approach.x,.05,St.approach.z,pt?3.4:2.6,ze,pt?1:Ie===Ce?.95:.5,rt.seat)}if(S.update(w,G),B.end(G),O.end(G),L.end(G),J.end(G),F==="menu"&&(g.shot.az+=w*.045),(he==="plaza"||he==="gather")&&I0(),qh-=w,F==="game"&&ee&&qh<=0&&(qh=.4,he==="follow"!==Hd()&&(he==="follow"||he==="plaza")&&oe(!1)),he==="follow")try{Xd(w)}catch(Ce){Me("takip",Ce)}g.update(w,G);try{S0(w)}catch(Ce){Me("\xF6rtme",Ce)}let ft=F==="game"&&ee&&!ae.current&&!j&&Bd();re.setCamToggle(!!ft,he==="follow"?"follow":"overview",Le),re.setRecenter(F==="game"&&(he==="follow"?b0():g.offset),Le),Te-=w,_.castShadow&&qt===1&&ne&&Te<=0&&(l.shadowMap.needsUpdate=!0,ne=!1,Te=C0()?.1:.2),ce.toon&&(ke-=w,ke<=0&&(ke=.5,Cf(v,!0))),r-=w,F==="game"&&ee&&r<=0&&(r=T.labelHz>=60?0:1/T.labelHz-.004,re.project(m,P0,D0,L0))}function Od(w){try{w.once=null;let G=w.look;w.lookKey=null,w.setLook(G),lt(w)}catch{w.setVisible(!1)}}let zd="vkw.cam",Fs="follow";try{let w=localStorage.getItem(zd);(w==="follow"||w==="overview")&&(Fs=w)}catch{}let We={az:0,el:.42,zoom:1,dragT:99,init:!1,wide:!1,side:1,ovDist:50,zoomGoal:0,kd:1,ke:0},kd=new X(0,0,0),Vi=new X,qh=0;function Os(){if(!ee||!ee.me)return null;let w=ee.me;if(!w.alive){let K=U.get(w.id);if(K)return K}let G=R.get(w.id);return G&&G.visible?G:null}function Yh(){let w=ee&&F==="game"?ee.room.phase:null;return w==="lobby"||w==="ended"}function Bd(){return Yh()&&!!Os()}function Hd(){return Fs==="follow"&&Bd()}function rl(w){return w.yaw+Math.PI+.38*We.side}function M0(w,G){We.az-=w*.0075,We.el=ut(We.el+G*.004,.12,1.15),We.dragT=0}function Gd(w){We.zoom=ut(We.zoom*w,.55,4.2),We.zoomGoal=0,We.dragT=Math.min(We.dragT,.5)}function b0(){let w=Os();return w?Math.abs(We.zoom-(We.wide?1.6:1))>.15||Math.abs(We.el-.42)>.12||w.speed<.3&&Math.abs(cn(rl(w)-We.az))>.9:!1}function Vd(){if(he==="follow"){let w=Os();w&&(We.az=rl(w)),We.el=.42,We.zoom=We.wide?1.6:1,We.zoomGoal=0,We.dragT=99;return}g.recenter()}function Wd(){Fs=Fs==="follow"?"overview":"follow";try{localStorage.setItem(zd,Fs)}catch{}oe(!1)}function Xd(w,G){let K=Os(),le=y&&y.layout;if(!K||!le)return;let me=g.portrait;We.init||(We.init=!0,We.side=1,We.az=rl(K),We.el=.42,We.zoom=1,We.dragT=99,We.zoomGoal=0,We.wide=!1),We.dragT+=w;let de=Rs(ee),Se=de==="vote"||de==="shoot";Se!==We.wide&&(We.wide=Se,Se&&We.zoom<1.6&&(We.zoomGoal=1.6)),We.zoomGoal&&(We.zoom+=(We.zoomGoal-We.zoom)*ln(2.5,w),Math.abs(We.zoom-We.zoomGoal)<.02&&(We.zoomGoal=0)),K.speed>.4&&We.dragT>1.1&&(We.az+=cn(rl(K)-We.az)*ln(K.drive?1.5:.9,w)),We.az=cn(We.az);let tt=We.zoom,Je=Es(ut((tt-1.7)/2.5,0,1)),it=me?8.8:7.2;Vi.set(K.pos.x,(K.isGhost?1.5:1.25)+(K.isGhost&&K.model?K.model.position.y:0),K.pos.z).lerp(kd,Je);let gt=We.el+((me?1.15:.98)-We.el)*Je,ze=it*tt+(We.ovDist-it*tt)*Je,st=(me?54:46)+(40-(me?54:46))*Je;{let Ce=Math.cos(gt)*ze,rt=Vi.x+Math.sin(We.az)*Ce,St=Vi.z+Math.cos(We.az)*Ce,pt=Math.hypot(rt,St)-(le.R-6.2);if(pt>0&&Je<.4&&We.dragT>.8){let En=Math.atan2(-Vi.x,-Vi.z);We.az=cn(We.az+cn(En-We.az)*ln(ut(pt*.5,0,2.5),w))}}let ft=le.R-6.2;if(Je<.6)for(let Ce=0;Ce<14;Ce++){let rt=Math.cos(gt)*ze,St=Vi.x+Math.sin(We.az)*rt,pt=Vi.z+Math.cos(We.az)*rt;if(Math.hypot(St,pt)<=ft)break;if(tt>1.25&&gt<1.05)gt+=.08;else if(ze>4.4)ze*=.9;else if(gt<1.05)gt+=.08;else break}if(Je<.85){let Ce=w0(Vi,We.az,gt,ze),rt=Ce.dist/ze,St=Ce.el-gt;G&&(We.kd=rt,We.ke=St),We.kd+=(rt-We.kd)*ln(rt<We.kd?9:1.8,w),We.ke+=(St-We.ke)*ln(St>We.ke?7:1.5,w),ze*=We.kd,gt+=We.ke}else We.kd=1,We.ke=0;g.setShot({kind:"follow",target:Vi,az:We.az,el:gt,dist:ze,fov:st,speed:5.5,snap:!!G}),g.shot.dynamic=!1}function S0(w){let K=he==="follow"&&!g.override&&g.ovW<.05?Os():null,le=m.position;for(let me of R.values()){let de=me.camWant||!1;if(K&&me!==K&&me.visible&&!me.claimed){let Je=me.pos.x-le.x,it=me.pos.z-le.z,st=Math.hypot(Je,it)<(de?4.3:3.4);if(!st){let ft=K.pos.x-le.x,Ce=K.pos.z-le.z,rt=ft*ft+Ce*Ce||1,St=(Je*ft+it*Ce)/rt,pt=de?1.15:.85;if(St>0&&St<.82){let En=Je-ft*St,Ti=it-Ce*St;En*En+Ti*Ti<pt*pt&&(st=!0)}}de=st}else de=!1;me.camWant=de;let Se=me.camFade==null?1:me.camFade,tt=de?Math.max(0,Se-w*4):Math.min(1,Se+w*4);if(tt!==Se){me.setFade(tt);let Je=tt<.5;Je!==!!me.camHidden&&(me.camHidden=Je,Qe=!0)}}}let Ir={el:0,dist:0};function w0(w,G,K,le){let me=y&&y.blockers,de=K,Se=le;if(!me||!me.length)return Ir.el=de,Ir.dist=Se,Ir;let tt=Math.sin(G),Je=Math.cos(G);for(let it=0;it<6;it++){let gt=Math.cos(de)*Se,ze=w.x+tt*gt,st=w.z+Je*gt,ft=w.y+Math.sin(de)*Se,Ce=0,rt=1/0;for(let St=0;St<me.length;St++){let pt=me[St];if(pt.x+pt.r+.6<Math.min(w.x,ze)||pt.x-pt.r-.6>Math.max(w.x,ze)||pt.z+pt.r+.6<Math.min(w.z,st)||pt.z-pt.r-.6>Math.max(w.z,st))continue;let En=pt.x-w.x,Ti=pt.z-w.z,Pn=(En*tt+Ti*Je)/(gt||.001);Pn=Pn<0?0:Pn>1?1:Pn;let Lr=w.x+tt*gt*Pn-pt.x,Hs=w.z+Je*gt*Pn-pt.z,al=Math.sqrt(Lr*Lr+Hs*Hs),ll=w.y+(ft-w.y)*Pn,Gs=ze-pt.x,Qd=st-pt.z,k0=pt.h>2.4?1.1:.35,ep=pt.h>2.4?.8:.45;if(Gs*Gs+Qd*Qd<(pt.r+ep)*(pt.r+ep)&&ft<pt.h+k0){pt.h<2.4?Ce=Math.max(Ce,pt.h+.45-ft):rt=Math.min(rt,Math.max(0,Pn*gt-pt.r-.5));continue}pt.h>=1.9&&pt.r>=.35&&Pn>.12&&Pn<1&&al<pt.r+.12&&ll<pt.h&&(rt=Math.min(rt,Math.max(0,Pn*gt-pt.r-.45)))}if(!Ce&&rt===1/0)break;if(rt!==1/0){let St=rt/Math.max(.2,Math.cos(de));St>=3.6?Se=Math.min(Se,St):de=Math.min(1.2,de+.12)}Ce&&(de=Math.min(1.2,de+Math.max(.06,Ce/Math.max(2,Se))))}return Ir.el=de,Ir.dist=Se,Ir}let zs={x:0,y:0},ks=new X,Pr=!1,ol=0,qd=-1,Yd=-1;Object.defineProperty(ce,"driving",{get:()=>Pr});function Kd(w,G){let K=y&&y.layout;if(!K||!t.onMove)return;let le=xd(K,w.pos.x,w.pos.z);if(!(!G&&Math.abs(le.x-qd)<.003&&Math.abs(le.y-Yd)<.003)){qd=le.x,Yd=le.y;try{t.onMove(le.x,le.y)}catch{}}}function E0(w){let G=Os(),K=!!(A&&G&&Yh()&&!j&&!ae.current&&!G.claimed);_e.setEnabled(K),_e.vector(zs);let le=K?Math.hypot(zs.x,zs.y):0,me=performance.now();if(le>.08){m.getWorldDirection(ks),ks.y=0,ks.lengthSq()<1e-4&&ks.set(-Math.sin(g.cur.az),0,-Math.cos(g.cur.az)),ks.normalize();let de=ks.x,Se=ks.z,tt=-Se,Je=de,it=tt*zs.x+de*zs.y,gt=Je*zs.x+Se*zs.y,ze=Math.hypot(it,gt)||1;it/=ze,gt/=ze;let st=le>.92?4.8:.8+le*3;G.drive||(G.drive={x:0,z:0,speed:0}),G.drive.x=it,G.drive.z=gt,G.drive.speed=st,Pr||(Pr=!0,ol=0);let ft=ce.localMove||(ce.localMove={x:0,z:0,until:0});ft.x=G.pos.x,ft.z=G.pos.z,ft.until=me+2500,ol-=w,ol<=0&&(ol=.15,Kd(G,!1))}else if(Pr){Pr=!1;for(let de of[R.get(ee&&ee.me?ee.me.id:""),U.get(ee&&ee.me?ee.me.id:"")])de&&(de.drive=null);G&&Yh()&&(ce.localMove={x:G.pos.x,z:G.pos.z,until:me+2500},Kd(G,!0),wi(!1))}}function T0(){let w=Os(),G=y&&y.layout;if(!w||!G)return;let K=Math.hypot(w.pos.x,w.pos.z)||.001,le=Math.max(G.Rp*.2,2.3),me=G.Rp*.96;if(K<le||K>me){let de=ut(K,le,me)/K;w.pos.x*=de,w.pos.z*=de}}let Zd=new X;function Jd(w,G){let K=0,le=0,me=0;for(let de=8;de<G;de++)K+=w[de].x,le+=w[de].z,me++;return me?Zd.set(K/me*.6,.9,le/me*.6+.2):Zd.set(0,.9,.2)}let A0=[],$d=new mi,R0=new ot,jd=new jt(new X,1.3);function C0(){return!!(y&&y.busy)}let Kh=0;function I0(){if(Kh-=1/60,Kh>0)return;Kh=.3;let w=y&&y.layout;if(!w||!g.shot.points)return;let K=0,le=he==="gather"?5.6:3.2,me=[];for(let de=0;de<8;de++){let Se=de/8*Ze;me.push($[K++].set(Math.sin(Se)*le,0,Math.cos(Se)*le))}for(let de of R.values()){if(!de.visible||K>60)continue;let Se=de.path&&de.path.length?de.path[de.path.length-1]:de.pos;Math.hypot(Se.x,Se.z)>w.Rp+1.5||(me.push($[K++].set(Se.x,0,Se.z)),me.push($[K++].set(Se.x,2.4,Se.z)))}for(let de of U.values())K<62&&(me.push($[K++].set(de.pos.x,2.6,de.pos.z)),me.push($[K++].set(de.pos.x,0,de.pos.z)));g.shot.points=me,g.shot.target.copy(Jd(me,me.length))}function P0(w,G){if(w.startsWith("room:")){let me=V&&V.actors.get(w.slice(5));return!me||!me.ch.visible?!1:(G.set(me.ch.pos.x,me.ch.pos.y+me.ch.headY+.15,me.ch.pos.z),!0)}if(w.startsWith("cine:")){let me=ie.get(w);return!me||!me.ch.visible?!1:(G.set(me.ch.pos.x,me.ch.root.position.y+me.ch.headY+.15,me.ch.pos.z),!0)}let K=R.get(w);if(K&&K.visible)return G.set(K.pos.x,K.pos.y+K.headY+.15,K.pos.z),!0;let le=U.get(w);return le?(G.set(le.pos.x,le.headY+.5+le.model.position.y,le.pos.z),!0):!1}function L0(w){let G=w.startsWith("room:")||w.startsWith("cine:");if(j)return G;if(G)return!0;let K=R.get(w);return U.has(w)?!0:!(!K||!K.visible||K.camHidden||ee&&ee.room.phase==="night"&&w!==ee.me.id&&!Ae.has(w))}function D0(w,G){if(j)return!1;let K=y&&y.house(w);if(!K||K.scale<.6)return!1;let le=y.layout,me=0;le&&le.n>9&&we<700&&(me=(K.seat%2?1:-1)*2.2);let de=Math.hypot(K.cx,K.cz)||1;return G.set(K.cx+K.cx/de*me,K.info.height*.9,K.cz+K.cz/de*me),!0}function N0(w){if(!(w!=="menu"&&w!=="game")&&w!==F&&(F=w,be="",c.dataset.view=w,!!A)){if(w==="menu"){Ls(),Ns(null),re.clear();for(let G of R.values())G.dispose();R.clear();for(let G of U.values())G.dispose();U.clear(),Ue.reset(),ae.reset(),Hi(null);for(let G of[...y.houses.keys()])y.setDead(G,!1);for(let G of y.houses.values())G.litTarget=1,G.dead=!1}else Hi(ee),ee&&wi(!0);oe(!0),g.snapNext=!1}}function U0(){ae.reset(),Ls(),Ns(null),re.clear();for(let w of R.values())w.dispose();R.clear();for(let w of U.values())w.dispose();if(U.clear(),Ue.reset(),ee=null,be="",Gh=0,A){if(y)for(let w of[...y.houses.keys()])y.setDead(w,!1);Hi(null)}g.recenter(),oe(!0)}function F0(w){if(w==="auto"){M="auto",P.failed.clear(),P.reset();return}Cs[w]&&(M=w,P.level=w,Zn(w))}function O0(){if(!te){te=!0,ae.dispose(),cancelAnimationFrame(nl),document.removeEventListener("visibilitychange",Lo),window.removeEventListener("resize",Er),window.removeEventListener("orientationchange",Er),hs&&hs.disconnect();for(let w of R.values())w.dispose();for(let w of U.values())w.dispose();R.clear(),U.clear(),y&&y.dispose(),I.dispose(),H.dispose(),E.dispose(),z.dispose(),S.dispose(),wn.dispose(),V&&V.dispose();for(let w of ie.values())w.ch.dispose();ie.clear(),Z.length=0;for(let w of[B,O,L,J])w.dispose();re.dispose(),_e.dispose(),gg(),_.shadow.map&&_.shadow.map.dispose(),l.dispose(),l.forceContextLoss(),fd(),c.remove(),clearTimeout(Pe)}}il();let Bs={update:Hh,announce(w){return te?Promise.resolve():!A||F!=="game"?(ae.skip(),Promise.resolve()):(w&&w.kind==="start"&&w.scenario&&Ns(w.scenario.id),w&&w.kind==="death"&&(Ee={ids:(w.targets||[]).map(G=>G.id),at:Date.now()}),ae.announce(w))},skip(){ae.skip()},bubble(w,G,K){if(!G)return;re.bubble(w,String(G),K);let le=R.get(w);if(le&&le.visible&&!le.busy&&!le.once&&le.base==="idle"&&le.playOnce(Math.random()<.5?"interact-right":"interact-left",{timeScale:.8}),le&&le.visible)for(let me of R.values())me!==le&&me.visible&&Math.hypot(me.pos.x-le.pos.x,me.pos.z-le.pos.z)<10&&me.gaze(le.pos,3.5,ce.time)},setView:N0,setQuality:F0,getQuality(){return M==="auto"?"auto":T.name},getTier(){return T.name},resize:Ps,reset:U0,dispose:O0,setInsets(w){w=w||{},Le={top:w.top||0,bottom:w.bottom||0,left:w.left||0,right:w.right||0,joystick:w.joystick===null?null:w.joystick&&typeof w.joystick=="object"?{left:+w.joystick.left||0,bottom:+w.joystick.bottom||0,size:+w.joystick.size||0}:void 0},g.setInsets(Le),re.setInsets(Le),_e.place(Le,we,He),oe(!1)},recenter(){Vd()},setCameraMode(w){(w==="follow"||w==="overview")&&w!==Fs&&Wd()},getCameraMode(){return Fs},setMood(w={}){w.fog!=null&&(k.fog=ut(+w.fog,.3,2)),w.tint!=null&&k.tint.set(w.tint),w.tintAmt!=null&&(k.tintAmt=ut(+w.tintAmt,0,1)),w.moon!=null&&k.moon.set(w.moon),w.stars!=null&&(k.stars=ut(+w.stars,0,1)),w.weather!=null&&(k.weather=w.weather)},director:ae,stats(){return{...Gn,tier:T.name,mode:M,px:nt,scale:+(n.renderScale||1).toFixed(2),hour:+fe.toFixed(2),ready:A,p50:zo(sl,.5),p95:zo(sl,.95),p99:zo(sl,.99),cpu50:zo(Wh,.5),cpu95:zo(Wh,.95)}},resetStats(){Us=0,Oo=0},setScenario(w){Ns(w)},setStyle(w){let G=w==="toon";if(G!==ce.toon){ce.toon=G,Zn(T.name,!1);for(let K of[...R.values(),...U.values()])G?Ba(K.model,.012):If(K.model);for(let K of ie.values())G?Ba(K.ch.model,.012):If(K.ch.model);y&&y.setOutlines(G),Cf(v,G),ke=0}},getStyle(){return ce.toon?"toon":"default"},_debug:{world:ce,scene:v,renderer:l,camera:m,rig:g,fol:We,get village(){return y},get room(){return V},get roomMode(){return j},setHour(w){fe=w}}},z0=Bs.update;Bs.update=(w,G)=>{w&&w.serverNow&&(Vh=w.serverNow-Date.now()),z0(w,G)};for(let w of["announce","bubble","setView","setQuality","resize","reset","setInsets","recenter","setMood","skip","setScenario","setCameraMode","setStyle"]){let G=Bs[w];Bs[w]=function(...K){try{return G.apply(Bs,K)}catch(le){return Me("api."+w,le),w==="announce"?Promise.resolve():void 0}}}return Bs}var Is=null,Oh=new Set,zh=0,Pd=0;function tw(){if(Is)return Is;let s=new Mo({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return s.outputColorSpace=Ot,s.toneMapping=gr,s.setClearColor(0,0),Is={renderer:s,users:0},Is}function g0(s){if(zh=0,!Oh.size||(zh=requestAnimationFrame(g0),document.hidden)||s-Pd<1e3/24)return;let e=Math.min(.1,(s-Pd)/1e3||.04);Pd=s;for(let t of Oh)t.draw(e)}function x0(s,e,t={}){if(!s)throw new Error("VKWorld.preview: \xF6\u011Fe yok");let n=document.createElement("canvas");n.className="vkw-preview",n.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y",s.appendChild(n);let i=n.getContext("2d"),r=tw();r.users++;let o=new er,a=new Qt(30,1,.1,50);a.position.set(0,1.75,7.8),a.lookAt(0,1.22,0);let c=new hr("#dfe8ff","#5a4a40",1.3);o.add(c);let l=new si("#fff2dc",2.6);l.position.set(1.8,3.5,5);let h=new si("#ffd7a8",.8);h.position.set(-3,1.5,3.5),o.add(h),o.add(l);let u=new si("#8fb4ff",1.6);u.position.set(-3,2.5,-3),o.add(u);let f=new Mt(new or(.85,40),new tn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.005,o.add(f);let d=null,p={...e},v=!1,m=t.yaw!=null?t.yaw:.18,g=0,M=t.yaw!=null?t.yaw:0,P=!1,b=0,T=0,C=t.turntable!==!1,x={sfxStep:null,sfx(){}};function _(){v||!mh("chars")||(d?d.setLook(p):(d=new bi(x,"preview",p),o.add(d.root),d.idleTimer=2))}mh("chars")?_():br(["chars"]).then(_).catch(()=>{});let N=O=>{P=!0,b=O.clientX,T=0,n.setPointerCapture&&n.setPointerCapture(O.pointerId)},I=O=>{if(!P)return;let L=O.clientX-b;b=O.clientX,m+=L*.012,T=L*.012*24},H=()=>{P=!1};n.addEventListener("pointerdown",N),n.addEventListener("pointermove",I),n.addEventListener("pointerup",H),n.addEventListener("pointercancel",H);let B={draw(O){if(v||!d)return;let L=s.clientWidth,J=s.clientHeight;if(L<4||J<4||!n.isConnected)return;let S=Math.min(window.devicePixelRatio||1,2),E=Math.round(L*S),z=Math.round(J*S);(n.width!==E||n.height!==z)&&(n.width=E,n.height=z);let y=r.renderer,R=y.getSize(new ht);(R.x<E||R.y<z)&&y.setSize(Math.max(R.x,E),Math.max(R.y,z),!1);let U=y.getSize(new ht);if(y.setViewport(0,U.y-z,E,z),y.setScissor(0,U.y-z,E,z),y.setScissorTest(!0),a.aspect=L/J,a.position.z=a.aspect<.8?7.8/Math.max(.55,a.aspect/.8):7.8,a.updateProjectionMatrix(),!P){g+=O,m+=T*O,T*=Math.exp(-3*O);let Y=m-M;Y=Math.atan2(Math.sin(Y),Math.cos(Y));let ie=C?Math.sin(g*.7)*.42:0;Math.abs(T)<.4&&(m=M+Y+(ie-Y)*Math.min(1,O*1.6))}d.yaw=m,d.update(O,performance.now()/1e3),y.clear(),y.render(o,a),i.clearRect(0,0,E,z),i.drawImage(y.domElement,0,U.y-z,E,z,0,0,E,z)}};return Oh.add(B),zh||(zh=requestAnimationFrame(g0)),{setLook(O){p={...p,...O},_()},dispose(){v||(v=!0,Oh.delete(B),d&&d.dispose(),f.geometry.dispose(),f.material.dispose(),n.remove(),r.users--,r.users<=0&&Is&&(Is.renderer.dispose(),Is.renderer.forceContextLoss(),Is=null))}}}try{let s=document.currentScript&&document.currentScript.src;s&&ph(new URL("../assets/models/",s).href)}catch{}var nw="2.1.0",iw=[{id:"saver",label:"Pil tasarrufu",desc:"30 kare/sn, d\xFC\u015F\xFCk \xE7\xF6z\xFCn\xFCrl\xFCk, en az efekt"},{id:"low",label:"D\xFC\u015F\xFCk",desc:"G\xF6lgesiz, sade efektler"},{id:"medium",label:"Orta",desc:"G\xF6lgeler ve bulutlar"},{id:"high",label:"Y\xFCksek",desc:"Tam \xE7\xF6z\xFCn\xFCrl\xFCk, karakter g\xF6lgeleri"}];function sw(s){ph(s)}return W0(rw);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
